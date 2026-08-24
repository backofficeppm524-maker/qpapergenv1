import { Question, QuestionOptions, QuestionPaper, GeneratedSection, GeneratedSectionQuestion } from '../types';

/**
 * Fisher-Yates shuffle algorithm for immutable arrays
 */
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Shuffles MCQ options (A, B, C, D) and dynamically updates
 * the question's `correctOption`, `answer`, and `answerTamil` to maintain 100% accurate valuation keys.
 */
export function shuffleQuestionOptions(question: Question): Question {
  if (question.type !== 'mcq' || !question.options) {
    return { ...question };
  }

  const origOptions = question.options;
  const origOptionsTamil = question.optionsTamil;
  const origCorrect = question.correctOption || 'A';

  const optionKeys: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
  const shuffledKeys = shuffleArray(optionKeys);

  // Map of newKey -> oldKey
  // For example, if shuffledKeys = ['C', 'A', 'D', 'B']
  // New 'A' gets old 'C', New 'B' gets old 'A', etc.
  const newOptions: Partial<QuestionOptions> = {};
  const newOptionsTamil: Partial<QuestionOptions> = {};

  let newCorrectOption: 'A' | 'B' | 'C' | 'D' = 'A';

  optionKeys.forEach((newKey, idx) => {
    const oldKey = shuffledKeys[idx];
    newOptions[newKey] = origOptions[oldKey];

    if (origOptionsTamil && origOptionsTamil[oldKey]) {
      newOptionsTamil[newKey] = origOptionsTamil[oldKey];
    }

    if (oldKey === origCorrect) {
      newCorrectOption = newKey;
    }
  });

  const correctText = newOptions[newCorrectOption] || origOptions[origCorrect];
  const correctTextTamil = (newOptionsTamil as QuestionOptions)?.[newCorrectOption] || origOptionsTamil?.[origCorrect];

  // Update Answer string with new option letter
  const updatedAnswer = `(${newCorrectOption.toLowerCase()}) ${correctText}`;
  const updatedAnswerTamil = correctTextTamil 
    ? `(${newCorrectOption === 'A' ? 'அ' : newCorrectOption === 'B' ? 'ஆ' : newCorrectOption === 'C' ? 'இ' : 'ஈ'}) ${correctTextTamil}`
    : question.answerTamil;

  return {
    ...question,
    options: newOptions as QuestionOptions,
    optionsTamil: origOptionsTamil ? (newOptionsTamil as QuestionOptions) : undefined,
    correctOption: newCorrectOption,
    answer: updatedAnswer,
    answerTamil: updatedAnswerTamil
  };
}

/**
 * Shuffles questions and options within generated sections
 */
export function shuffleSectionContent(
  section: GeneratedSection,
  options: {
    shuffleQuestions: boolean;
    shuffleOptions: boolean;
  }
): GeneratedSection {
  let questions = [...section.questions];

  // If 1-Mark MCQ section
  if (section.marksPerQuestion === 1) {
    if (options.shuffleOptions) {
      questions = questions.map(sq => ({
        ...sq,
        question: shuffleQuestionOptions(sq.question)
      }));
    }
    if (options.shuffleQuestions) {
      questions = shuffleArray(questions);
    }
  } else if (section.marksPerQuestion === 5) {
    // 5-Mark Either / Or section
    if (options.shuffleQuestions) {
      questions = shuffleArray(questions).map(sq => {
        // Optionally flip (a) and (b) choice within pair
        if (Math.random() > 0.5 && sq.orQuestion) {
          return {
            ...sq,
            question: sq.orQuestion,
            orQuestion: sq.question
          };
        }
        return sq;
      });
    }
  } else {
    // 2-Mark or 3-Mark section
    if (options.shuffleQuestions) {
      // If there is a compulsory question, keep the compulsory tag at the designated position or question
      const compulsoryQ = questions.find(q => q.isCompulsory);
      const nonCompulsoryQs = shuffleArray(questions.filter(q => !q.isCompulsory));

      if (compulsoryQ) {
        // Keep compulsory question at the end (or where it belongs)
        questions = [...nonCompulsoryQs, compulsoryQ];
      } else {
        questions = nonCompulsoryQs;
      }
    }
  }

  return {
    ...section,
    questions
  };
}
