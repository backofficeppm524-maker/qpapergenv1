import express from 'express';
import path from 'path';
import multer from 'multer';
import { GoogleGenAI, Type } from '@google/genai';
import { createServer as createViteServer } from 'vite';

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 30 * 1024 * 1024 } // 30MB limit
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON and URL-encoded body parser with generous limit
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ extended: true, limit: '50mb' }));

  // Initialize Gemini AI Client lazily/safely
  const getGeminiClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY is not configured in the environment.');
    }
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build'
        }
      }
    });
  };

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Upload & Extract Chapterwise Questions (1, 2, 3, 5 Marks) Endpoint
  app.post('/api/extract-questions', upload.single('file'), async (req, res) => {
    try {
      const { subjectName, standard, rawText } = req.body;
      const file = req.file;

      if (!file && !rawText) {
        return res.status(400).json({ error: 'Please provide either a PDF file or text content.' });
      }

      const ai = getGeminiClient();

      const prompt = `
You are an expert Academic Question Paper Parser and Tamil Nadu Higher Secondary / CBSE curriculum analyzer.
Your task is to analyze the provided educational document / textbook / question bank for "${subjectName || 'the uploaded subject'}" (${standard || 'Higher Secondary'}).

Extract all lessons / chapters along with their questions categorized STRICTLY into:
1 Mark: Multiple Choice Questions (with 4 distinct options A, B, C, D and correct answer specified) or 1-mark objectives.
2 Marks: Short answer questions, definitions, formulas, syntax, or 2-point questions with clear model answers.
3 Marks: Brief answer questions, differences, step-by-step solutions, code snippets, or 3-point explanations with model answers.
5 Marks: Detailed essay questions, either/or pairs, long programs, or multi-step case studies with comprehensive model answers.

For each question:
- Provide the English text and Tamil translation if available/appropriate.
- Provide options A, B, C, D for 1-mark MCQs and denote the correct option ('A'|'B'|'C'|'D').
- Provide clear, accurate model answers in English (and Tamil if available).
- Mark isBookBack as true if it belongs to textbook review/exercise.
- Assign an AI difficulty level ('Easy', 'Medium', or 'Hard') and a 1-sentence reasoning based on Bloom's taxonomy.
- Assign a subTopic (e.g. 'Loops', 'Inheritance', 'SQL Queries', 'Kinematics', etc.).

Return the result conforming strictly to the requested JSON schema.
`;

      let contents: any;

      if (file) {
        const mimeType = file.mimetype || 'application/pdf';
        const base64Data = file.buffer.toString('base64');
        contents = {
          parts: [
            {
              inlineData: {
                data: base64Data,
                mimeType: mimeType
              }
            },
            {
              text: prompt
            }
          ]
        };
      } else {
        contents = {
          parts: [
            {
              text: `Subject: ${subjectName || 'General Subject'}\nStandard: ${standard || 'Higher Secondary'}\n\nDocument Text:\n${rawText}\n\n${prompt}`
            }
          ]
        };
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3.7-flash',
        contents,
        config: {
          systemInstruction: 'You extract and organize questions chapterwise with marks 1, 2, 3, 5 accurately and classify their difficulty (Easy, Medium, Hard) returning structured JSON.',
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              subjectName: { type: Type.STRING, description: 'Subject title in English' },
              subjectNameTamil: { type: Type.STRING, description: 'Subject title in Tamil' },
              standard: { type: Type.STRING, description: 'e.g. 12th Standard or 11th Standard' },
              board: { type: Type.STRING, description: 'e.g. Tamil Nadu State Board' },
              chapters: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    no: { type: Type.INTEGER },
                    name: { type: Type.STRING },
                    nameTamil: { type: Type.STRING },
                    description: { type: Type.STRING }
                  },
                  required: ['no', 'name']
                }
              },
              questions: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    chapterNo: { type: Type.INTEGER },
                    chapterName: { type: Type.STRING },
                    chapterNameTamil: { type: Type.STRING },
                    marks: { type: Type.INTEGER, description: 'Must be 1, 2, 3, or 5' },
                    type: { type: Type.STRING, description: 'mcq, short, brief, or essay' },
                    questionText: { type: Type.STRING },
                    questionTextTamil: { type: Type.STRING },
                    options: {
                      type: Type.OBJECT,
                      properties: {
                        A: { type: Type.STRING },
                        B: { type: Type.STRING },
                        C: { type: Type.STRING },
                        D: { type: Type.STRING }
                      }
                    },
                    optionsTamil: {
                      type: Type.OBJECT,
                      properties: {
                        A: { type: Type.STRING },
                        B: { type: Type.STRING },
                        C: { type: Type.STRING },
                        D: { type: Type.STRING }
                      }
                    },
                    correctOption: { type: Type.STRING, description: 'A, B, C, or D' },
                    answer: { type: Type.STRING },
                    answerTamil: { type: Type.STRING },
                    isBookBack: { type: Type.BOOLEAN },
                    isCompulsoryEligible: { type: Type.BOOLEAN },
                    difficulty: { type: Type.STRING, description: 'Easy, Medium, or Hard' },
                    difficultyReasoning: { type: Type.STRING, description: 'Brief cognitive domain reasoning' },
                    subTopic: { type: Type.STRING, description: 'Concise subtopic name' }
                  },
                  required: ['chapterNo', 'chapterName', 'marks', 'type', 'questionText', 'answer']
                }
              }
            },
            required: ['subjectName', 'chapters', 'questions']
          }
        }
      });

      const responseText = response.text;
      if (!responseText) {
        throw new Error('Empty response from AI model');
      }

      const parsedData = JSON.parse(responseText);

      // Ensure every question has an ID and valid marks
      if (parsedData.questions && Array.isArray(parsedData.questions)) {
        parsedData.questions = parsedData.questions.map((q: any, idx: number) => ({
          ...q,
          id: q.id || `ext-q-${Date.now()}-${idx}`,
          marks: [1, 2, 3, 5].includes(Number(q.marks)) ? Number(q.marks) : (q.type === 'mcq' ? 1 : 2),
          difficulty: ['Easy', 'Medium', 'Hard'].includes(q.difficulty) ? q.difficulty : (Number(q.marks) === 1 ? 'Easy' : Number(q.marks) === 5 ? 'Hard' : 'Medium')
        }));
      }

      res.json({
        success: true,
        data: parsedData
      });
    } catch (err: any) {
      console.error('Error during question extraction:', err);
      res.status(500).json({
        success: false,
        error: err.message || 'Failed to extract questions from PDF'
      });
    }
  });

  // AI-Powered Difficulty Labeler Endpoint
  app.post('/api/classify-difficulty', async (req, res) => {
    try {
      const { questionText, marks, type, answer, subjectName, chapterName, options } = req.body;

      if (!questionText || typeof questionText !== 'string' || !questionText.trim()) {
        return res.status(400).json({ success: false, error: 'Question text is required' });
      }

      const ai = getGeminiClient();

      const prompt = `
Analyze the academic difficulty and cognitive demand of the following Higher Secondary / Secondary question based on Bloom's Taxonomy, syllabus level, and problem-solving depth.

Question Context:
Subject: ${subjectName || 'General Academic Subject'}
Chapter: ${chapterName || 'General Chapter'}
Marks: ${marks || 2}
Type: ${type || 'short'}
Question Text: "${questionText}"
${options ? `Options: A) ${options.A || ''}, B) ${options.B || ''}, C) ${options.C || ''}, D) ${options.D || ''}` : ''}
Model Answer / Key: "${answer || 'N/A'}"

Classification Criteria:
- 'Easy': Direct recall, definitions, simple terminology, basic formulas, standard textbook one-step recognition.
- 'Medium': Conceptual understanding, application of rules/syntax, comparison, differences, 2-to-3 step standard derivations or explanations.
- 'Hard': High-level problem solving, debugging/tracing code, complex multi-step derivations, evaluation, case studies, creative synthesis, or complex calculations.

Return:
1. difficulty: 'Easy' | 'Medium' | 'Hard'
2. reasoning: 1 concise, specific sentence explaining why it received this classification.
3. subTopic: A 2-4 word specific sub-topic or concept.
4. cognitiveDomain: 'Recall' | 'Understanding' | 'Application' | 'Analysis'
`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.7-flash',
        contents: [{ text: prompt }],
        config: {
          systemInstruction: 'You are a senior academic curriculum evaluator and board examination psychometrician.',
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              difficulty: {
                type: Type.STRING,
                description: 'Must be exactly Easy, Medium, or Hard'
              },
              reasoning: {
                type: Type.STRING,
                description: 'Concise explanation of difficulty'
              },
              subTopic: {
                type: Type.STRING,
                description: 'Concise 2-4 word subtopic'
              },
              cognitiveDomain: {
                type: Type.STRING,
                description: 'Recall, Understanding, Application, or Analysis'
              }
            },
            required: ['difficulty', 'reasoning', 'subTopic']
          }
        }
      });

      const responseText = response.text;
      if (!responseText) {
        throw new Error('Empty response from AI difficulty analyzer');
      }

      const result = JSON.parse(responseText);

      // Validate difficulty
      const validDifficulty = ['Easy', 'Medium', 'Hard'].includes(result.difficulty)
        ? result.difficulty
        : (marks === 1 ? 'Easy' : marks === 5 ? 'Hard' : 'Medium');

      res.json({
        success: true,
        data: {
          difficulty: validDifficulty,
          reasoning: result.reasoning || `Classified as ${validDifficulty} based on ${marks || 2}-mark cognitive requirements.`,
          subTopic: result.subTopic || 'General Concepts',
          cognitiveDomain: result.cognitiveDomain || 'Understanding'
        }
      });
    } catch (err: any) {
      console.error('Error during difficulty classification:', err);
      // Fallback heuristics if API fails or key is missing
      const marks = Number(req.body?.marks) || 2;
      const fallbackDiff = marks === 1 ? 'Easy' : marks === 5 ? 'Hard' : 'Medium';
      res.json({
        success: true,
        data: {
          difficulty: fallbackDiff,
          reasoning: `Assigned ${fallbackDiff} based on question weightage (${marks} Marks).`,
          subTopic: 'Core Concept',
          cognitiveDomain: marks === 1 ? 'Recall' : marks === 5 ? 'Analysis' : 'Understanding'
        }
      });
    }
  });

  // Vite middleware in development vs Static serving in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Question Paper Generator Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
});
