import { SubjectData, Question } from '../types';

export const getQuestionDifficulty = (q: Question): 'Easy' | 'Medium' | 'Hard' => {
  if (q.difficulty) return q.difficulty;
  if (q.isCreative || q.isCompulsoryEligible) return 'Hard';
  if (q.marks === 1) return 'Easy';
  if (q.marks === 2) return 'Medium';
  if (q.marks === 3) return 'Medium';
  if (q.marks === 5) return 'Hard';
  return 'Medium';
};

/**
 * Escapes a string field for standard RFC 4180 CSV compliance
 */
const escapeCSV = (field: string | number | boolean | undefined | null): string => {
  if (field === undefined || field === null) return '""';
  const str = String(field).replace(/"/g, '""');
  return `"${str}"`;
};

/**
 * Generates and downloads a CSV backup of all questions in the subject.
 * Includes UTF-8 BOM so Tamil Unicode and formatted text render correctly in Excel / Sheets.
 */
export const exportSubjectQuestionsToCSV = (subject: SubjectData): void => {
  const headers = [
    'Question ID',
    'Chapter Number',
    'Chapter Name (English)',
    'Chapter Name (Tamil)',
    'Marks',
    'Type',
    'Difficulty',
    'Sub Topic / Category',
    'Question (English)',
    'Question (Tamil)',
    'Option A',
    'Option B',
    'Option C',
    'Option D',
    'Option A (Tamil)',
    'Option B (Tamil)',
    'Option C (Tamil)',
    'Option D (Tamil)',
    'Correct Option',
    'Answer / Solution (English)',
    'Answer / Solution (Tamil)',
    'Is Book Back',
    'Is Creative / Compulsory Eligible'
  ];

  const rows = subject.questions.map(q => {
    const difficulty = getQuestionDifficulty(q);
    return [
      escapeCSV(q.id),
      escapeCSV(q.chapterNo),
      escapeCSV(q.chapterName),
      escapeCSV(q.chapterNameTamil || ''),
      escapeCSV(q.marks),
      escapeCSV(q.type),
      escapeCSV(difficulty),
      escapeCSV(q.subTopic || q.chapterName),
      escapeCSV(q.questionText),
      escapeCSV(q.questionTextTamil || ''),
      escapeCSV(q.options?.A || ''),
      escapeCSV(q.options?.B || ''),
      escapeCSV(q.options?.C || ''),
      escapeCSV(q.options?.D || ''),
      escapeCSV(q.optionsTamil?.A || ''),
      escapeCSV(q.optionsTamil?.B || ''),
      escapeCSV(q.optionsTamil?.C || ''),
      escapeCSV(q.optionsTamil?.D || ''),
      escapeCSV(q.correctOption || ''),
      escapeCSV(q.answer),
      escapeCSV(q.answerTamil || ''),
      escapeCSV(q.isBookBack ? 'Yes' : 'No'),
      escapeCSV(q.isCreative || q.isCompulsoryEligible ? 'Yes' : 'No')
    ].join(',');
  });

  // Prepend UTF-8 BOM (\uFEFF)
  const csvContent = '\uFEFF' + [headers.join(','), ...rows].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const safeSubjectName = (subject.name || 'Question_Bank')
    .replace(/[^a-zA-Z0-9_-]/g, '_')
    .replace(/_+/g, '_');
  const fileName = `${subject.standard || 'HSC'}_${safeSubjectName}_Full_Question_Bank_${new Date().toISOString().slice(0, 10)}.csv`;

  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
