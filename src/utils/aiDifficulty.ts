import { Question, DifficultyAnalysisResult } from '../types';

/**
 * Calls the backend Gemini AI difficulty analyzer endpoint to determine
 * cognitive complexity, difficulty rating (Easy, Medium, Hard), reasoning, and subtopic.
 */
export async function classifyQuestionDifficultyAI(params: {
  questionText: string;
  marks?: number;
  type?: string;
  answer?: string;
  subjectName?: string;
  chapterName?: string;
  options?: any;
}): Promise<DifficultyAnalysisResult> {
  try {
    const response = await fetch('/api/classify-difficulty', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });

    if (!response.ok) {
      throw new Error(`Server returned HTTP ${response.status}`);
    }

    const data = await response.json();
    if (data.success && data.data) {
      return data.data;
    }
    throw new Error(data.error || 'Failed to classify difficulty');
  } catch (err: any) {
    console.warn('AI Difficulty classification fallback:', err);
    // Intelligent heuristic fallback
    const marks = Number(params.marks) || 2;
    const textLen = (params.questionText || '').length;
    const isCodeOrDerivation = /program|syntax|explain in detail|derive|prove|algorithm|trace/i.test(params.questionText || '');

    let diff: 'Easy' | 'Medium' | 'Hard' = 'Medium';
    if (marks === 1 || (marks === 2 && textLen < 50 && !isCodeOrDerivation)) {
      diff = 'Easy';
    } else if (marks === 5 || isCodeOrDerivation || textLen > 120) {
      diff = 'Hard';
    }

    return {
      difficulty: diff,
      reasoning: `Categorized as ${diff} based on ${marks}-mark weightage and question structure.`,
      subTopic: params.chapterName ? `${params.chapterName} Core` : 'General Topic',
      cognitiveDomain: diff === 'Easy' ? 'Recall' : diff === 'Hard' ? 'Analysis' : 'Understanding'
    };
  }
}
