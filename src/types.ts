export type MarkType = 1 | 2 | 3 | 5;

export type QuestionType = 'mcq' | 'short' | 'brief' | 'essay' | 'either_or' | 'detail' | 'detailed';

export type LanguageMode = 'english' | 'tamil' | 'bilingual';

export interface QuestionOptions {
  A: string;
  B: string;
  C: string;
  D: string;
}

export interface Question {
  id: string;
  chapterNo: number;
  chapterName: string;
  chapterNameTamil?: string;
  marks: MarkType;
  type: QuestionType;
  questionText: string;
  questionTextTamil?: string;
  options?: QuestionOptions;
  optionsTamil?: QuestionOptions;
  correctOption?: 'A' | 'B' | 'C' | 'D';
  answer: string;
  answerTamil?: string;
  isBookBack?: boolean;
  isCompulsoryEligible?: boolean;
  isCreative?: boolean;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  difficultyReasoning?: string;
  subTopic?: string;
  tags?: string[];
  notes?: string;
}

export interface DifficultyAnalysisResult {
  difficulty: 'Easy' | 'Medium' | 'Hard';
  reasoning: string;
  subTopic?: string;
  cognitiveDomain?: 'Recall' | 'Understanding' | 'Application' | 'Analysis';
}

export interface UserFeedback {
  id: string;
  type: 'pdf_extraction_issue' | 'question_suggestion' | 'content_error' | 'feature_request' | 'general';
  title: string;
  description: string;
  subjectName?: string;
  chapterName?: string;
  questionId?: string;
  questionText?: string;
  suggestedAnswer?: string;
  marks?: MarkType;
  userEmail?: string;
  createdAt: string;
  status: 'new' | 'reviewed' | 'resolved';
}

export interface Chapter {
  no: number;
  name: string;
  nameTamil?: string;
  description?: string;
  questionCount?: {
    1: number;
    2: number;
    3: number;
    5: number;
    total: number;
  };
}

export interface SubjectData {
  id: string;
  name: string;
  nameTamil?: string;
  standard: string; // e.g. "12th Standard" | "11th Standard"
  board: string; // e.g. "Tamil Nadu State Board"
  code?: string;
  chapters: Chapter[];
  questions: Question[];
  isCustomUploaded?: boolean;
  uploadedFileName?: string;
}

export interface QuestionPaperSectionConfig {
  partTitle: string; // e.g. "Part I", "Part II"
  partTitleTamil?: string;
  marksPerQuestion: MarkType;
  totalQuestionsToGive: number;
  totalQuestionsToAnswer: number;
  compulsoryQuestionNo?: number;
  instruction: string;
  instructionTamil?: string;
}

export interface QuestionPaperTemplate {
  type: '25' | '50' | '70' | 'custom' | 'manual';
  name: string;
  totalMarks: number;
  timeAllowed: string;
  sections: QuestionPaperSectionConfig[];
}

export interface GeneratedSectionQuestion {
  question: Question;
  isCompulsory?: boolean;
  orQuestion?: Question; // For either/or 5-mark questions
}

export interface GeneratedSection {
  partTitle: string;
  partTitleTamil?: string;
  marksPerQuestion: MarkType;
  totalQuestionsToGive: number;
  totalQuestionsToAnswer: number;
  compulsoryQuestionNo?: number;
  instruction: string;
  instructionTamil?: string;
  questions: GeneratedSectionQuestion[];
}

export interface QuestionPaper {
  id: string;
  title: string;
  titleTamil?: string;
  schoolName: string;
  schoolNameTamil?: string;
  standard: string;
  subject: string;
  subjectTamil?: string;
  examName: string;
  examNameTamil?: string;
  timeAllowed: string;
  maxMarks: number;
  date: string;
  selectedChapters: number[];
  languageMode: LanguageMode;
  paperType: '25' | '50' | '70' | 'custom' | 'manual';
  sections: GeneratedSection[];
  createdAt: string;
  notes?: string;
}

export interface CustomPaperFormState {
  schoolName: string;
  schoolNameTamil: string;
  examName: string;
  examNameTamil: string;
  standard: string;
  subject: string;
  subjectTamil: string;
  timeAllowed: string;
  selectedChapters: number[];
  languageMode: LanguageMode;
  includeCreativeQuestions: boolean;
  shuffleQuestions: boolean;
  
  // Section configs
  part1Total: number; // 1 Mark
  part1Answer: number;
  
  part2Total: number; // 2 Mark
  part2Answer: number;
  part2CompulsoryNo?: number;
  
  part3Total: number; // 3 Mark
  part3Answer: number;
  part3CompulsoryNo?: number;
  
  part4Total: number; // 5 Mark (either-or pairs)
  part4Answer: number;
}

export interface QuizScoreRecord {
  id: string;
  studentName: string;
  subjectId: string;
  subjectName: string;
  chapterNo: number; // 0 for Full Syllabus, 1, 2, ...
  chapterName: string;
  chapterNameTamil?: string;
  score: number;
  total: number;
  percentage: number;
  timeTakenSeconds: number;
  timeLimitMinutes: number;
  language: 'english' | 'tamil';
  date: string; // ISO string
  grade: 'Centum' | 'Distinction' | 'First Class' | 'Pass' | 'Needs Improvement';
  accuracy: number;
  correctCount: number;
  incorrectCount: number;
  unattemptedCount: number;
}
