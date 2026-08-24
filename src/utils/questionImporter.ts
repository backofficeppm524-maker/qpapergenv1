import { Question, MarkType, QuestionType, SubjectData } from '../types';

export interface ImportResult {
  questions: Question[];
  errors: string[];
  totalRows: number;
}

/**
 * CSV Template content generator
 */
export function getSampleCsvContent(): string {
  return `ChapterNo,ChapterName,ChapterNameTamil,Marks,Type,QuestionText,QuestionTextTamil,OptionA,OptionB,OptionC,OptionD,CorrectOption,Answer,AnswerTamil,IsBookBack,IsCreative
1,Data Abstraction,தரவு அருவமாக்கம்,1,mcq,"Which of the following is a private data member access specification?","பின்வருவனவற்றில் எது தனிப்பட்ட தரவு உறுப்பினரை அணுகும் முறை?","Double underscore __","Single underscore _","Hash #","Dollar $",A,"(A) Double underscore __","(அ) இரட்டை அடிக்கோடு __",true,false
1,Data Abstraction,தரவு அருவமாக்கம்,2,short,"What is an Abstract Data Type (ADT)?","அருவமாக்கப்பட்ட தரவு வகை (ADT) என்றால் என்ன?","","","","","","An Abstract Data Type is a type or class for objects whose behavior is defined by a set of values and operations.","அருவமாக்கப்பட்ட தரவு வகை என்பது ஒரு வகை அல்லது வகுப்பாகும்.",true,false
1,Data Abstraction,தரவு அருவமாக்கம்,3,brief,"Differentiate between Constructors and Selectors.","ஆக்கிகள் மற்றும் பிரித்தெடுப்பிகள் வேறுபடுத்துக.","","","","","","Constructors build the abstract data type while Selectors retrieve information from the data type.","ஆக்கிகள் அருவமாக்கப்பட்ட தரவை உருவாக்குகின்றன; பிரித்தெடுப்பிகள் தகவல்களை மீட்டெடுக்கின்றன.",true,false
1,Data Abstraction,தரவு அருவமாக்கம்,5,essay,"Explain the representation of Abstract Data Type with example.","அருவமாக்கப்பட்ட தரவு வகையின் பயன்பாட்டை எடுத்துக்காட்டுடன் விளக்குக.","","","","","","ADT encapsulates data values and operations on those values. Example: Pair data structure with make_pair() constructor and get_first(), get_second() selectors.","ADT தரவு மதிப்புகளையும் அவற்றின் மீதான செயல்பாடுகளையும் உள்ளடக்கியுள்ளது.",true,false`;
}

/**
 * JSON Template generator
 */
export function getSampleJsonContent(): string {
  const sample = [
    {
      chapterNo: 1,
      chapterName: "Data Abstraction",
      chapterNameTamil: "தரவு அருவமாக்கம்",
      marks: 1,
      type: "mcq",
      questionText: "Which of the following is a private member specifier?",
      questionTextTamil: "பின்வருவனவற்றில் எது தனிப்பட்ட தரவு உறுப்பினரை அணுகும் முறை?",
      options: {
        A: "Double underscore __",
        B: "Single underscore _",
        C: "Hash #",
        D: "Dollar $"
      },
      optionsTamil: {
        A: "இரட்டை அடிக்கோடு __",
        B: "ஒற்றை அடிக்கோடு _",
        C: "ஹேஷ் #",
        D: "டாலர் $"
      },
      correctOption: "A",
      answer: "(A) Double underscore __",
      answerTamil: "(அ) இரட்டை அடிக்கோடு __",
      isBookBack: true,
      isCreative: false
    },
    {
      chapterNo: 1,
      chapterName: "Data Abstraction",
      chapterNameTamil: "தரவு அருவமாக்கம்",
      marks: 2,
      type: "short",
      questionText: "What is an Abstract Data Type (ADT)?",
      questionTextTamil: "அருவமாக்கப்பட்ட தரவு வகை (ADT) என்றால் என்ன?",
      answer: "An Abstract Data Type is a type for objects whose behavior is defined by a set of values and operations.",
      answerTamil: "அருவமாக்கப்பட்ட தரவு வகை என்பது மதிப்புகள் மற்றும் செயல்பாடுகளின் தொகுப்பால் வரையறுக்கப்படுகிறது.",
      isBookBack: true,
      isCreative: false
    }
  ];
  return JSON.stringify(sample, null, 2);
}

/**
 * Downloads the predefined CSV Template for question banks
 */
export function downloadCsvTemplate(subjectName: string = 'Subject') {
  const content = getSampleCsvContent();
  const blob = new Blob(['\ufeff' + content], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${subjectName.replace(/[^a-zA-Z0-9]/g, '_')}_Question_Bank_Template.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Downloads the predefined JSON Template for question banks
 */
export function downloadJsonTemplate(subjectName: string = 'Subject') {
  const content = getSampleJsonContent();
  const blob = new Blob([content], { type: 'application/json;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${subjectName.replace(/[^a-zA-Z0-9]/g, '_')}_Question_Bank_Template.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Robust CSV Line Parser that respects quoted values with commas
 */
function parseCsvLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        current += '"';
        i++; // skip escaped quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

/**
 * Parses and validates CSV string into Questions
 */
export function parseQuestionsCsv(csvString: string, currentSubject?: SubjectData): ImportResult {
  const errors: string[] = [];
  const questions: Question[] = [];

  const rawLines = csvString.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);
  if (rawLines.length === 0) {
    return { questions: [], errors: ['CSV file is empty.'], totalRows: 0 };
  }

  // Parse header
  const headerLine = rawLines[0];
  const headers = parseCsvLine(headerLine).map(h => h.toLowerCase().replace(/[^a-z0-9]/g, ''));

  const findIdx = (names: string[]) => {
    return headers.findIndex(h => names.some(n => h.includes(n)));
  };

  const chNoIdx = findIdx(['chapterno', 'chapter', 'chpos', 'chno', 'unit']);
  const chNameIdx = findIdx(['chaptername', 'chname', 'title', 'unitname']);
  const chNameTamilIdx = findIdx(['chaptertam', 'nametam', 'chaptnametamil']);
  const marksIdx = findIdx(['marks', 'mark', 'points']);
  const typeIdx = findIdx(['type', 'qtype', 'kind']);
  const qTextIdx = findIdx(['questiontext', 'question', 'qtext', 'quest']);
  const qTextTamilIdx = findIdx(['questiontamil', 'qtexttam', 'tamiltxt', 'questiontexttamil']);
  const optAIdx = findIdx(['optiona', 'opta', 'opt1', 'choicea']);
  const optBIdx = findIdx(['optionb', 'optb', 'opt2', 'choiceb']);
  const optCIdx = findIdx(['optionc', 'optc', 'opt3', 'choicec']);
  const optDIdx = findIdx(['optiond', 'optd', 'opt4', 'choiced']);
  const correctOptIdx = findIdx(['correctopt', 'correct', 'key', 'anskey', 'correctoption']);
  const ansIdx = findIdx(['answer', 'ans', 'solution', 'explanation']);
  const ansTamilIdx = findIdx(['answertamil', 'anstamil', 'vidai']);
  const bookBackIdx = findIdx(['isbookback', 'bookback']);
  const creativeIdx = findIdx(['iscreative', 'creative']);

  if (qTextIdx === -1) {
    errors.push("Missing required 'QuestionText' column header in CSV.");
    return { questions: [], errors, totalRows: rawLines.length - 1 };
  }

  for (let i = 1; i < rawLines.length; i++) {
    const rowNumber = i + 1;
    const cols = parseCsvLine(rawLines[i]);
    if (cols.length === 0 || (cols.length === 1 && !cols[0])) continue;

    const qText = cols[qTextIdx]?.trim() || '';
    if (!qText) {
      errors.push(`Row ${rowNumber}: Question text is empty. Skipping.`);
      continue;
    }

    // Determine marks
    let marksRaw = cols[marksIdx] ? parseInt(cols[marksIdx], 10) : 1;
    if (isNaN(marksRaw) || ![1, 2, 3, 5].includes(marksRaw)) {
      marksRaw = 1;
    }
    const marks = marksRaw as MarkType;

    // Determine Chapter
    let chNo = cols[chNoIdx] ? parseInt(cols[chNoIdx], 10) : 1;
    if (isNaN(chNo) || chNo < 1) chNo = 1;

    let chName = cols[chNameIdx]?.trim();
    if (!chName && currentSubject) {
      const matchCh = currentSubject.chapters.find(c => c.no === chNo);
      chName = matchCh ? matchCh.name : `Chapter ${chNo}`;
    } else if (!chName) {
      chName = `Chapter ${chNo}`;
    }

    const chNameTamil = cols[chNameTamilIdx]?.trim() || undefined;
    const qTextTamil = cols[qTextTamilIdx]?.trim() || undefined;

    // Type
    let type: QuestionType = marks === 1 ? 'mcq' : marks === 2 ? 'short' : marks === 3 ? 'brief' : 'essay';
    const typeStr = cols[typeIdx]?.toLowerCase().trim();
    if (typeStr) {
      if (['mcq', 'short', 'brief', 'essay'].includes(typeStr)) {
        type = typeStr as QuestionType;
      }
    }

    // MCQ Options
    const optA = cols[optAIdx]?.trim() || '';
    const optB = cols[optBIdx]?.trim() || '';
    const optC = cols[optCIdx]?.trim() || '';
    const optD = cols[optDIdx]?.trim() || '';

    let correctOptRaw = cols[correctOptIdx]?.toUpperCase().trim();
    let correctOption: 'A' | 'B' | 'C' | 'D' | undefined = undefined;
    if (correctOptRaw && ['A', 'B', 'C', 'D'].includes(correctOptRaw)) {
      correctOption = correctOptRaw as 'A' | 'B' | 'C' | 'D';
    } else if (correctOptRaw && ['1', '2', '3', '4'].includes(correctOptRaw)) {
      const mapping: Record<string, 'A' | 'B' | 'C' | 'D'> = { '1': 'A', '2': 'B', '3': 'C', '4': 'D' };
      correctOption = mapping[correctOptRaw];
    } else if (marks === 1) {
      correctOption = 'A';
    }

    let answer = cols[ansIdx]?.trim() || '';
    if (!answer && marks === 1 && correctOption) {
      const optMap = { A: optA, B: optB, C: optC, D: optD };
      answer = `(${correctOption}) ${optMap[correctOption] || ''}`.trim();
    } else if (!answer) {
      answer = 'Key points & valuation criteria provided in textbook.';
    }

    const answerTamil = cols[ansTamilIdx]?.trim() || undefined;
    const isBookBack = cols[bookBackIdx] ? cols[bookBackIdx].toLowerCase() === 'true' || cols[bookBackIdx] === '1' : true;
    const isCreative = cols[creativeIdx] ? cols[creativeIdx].toLowerCase() === 'true' || cols[creativeIdx] === '1' : false;

    const parsedQuestion: Question = {
      id: `imported-csv-${Date.now()}-${i}`,
      chapterNo: chNo,
      chapterName: chName,
      chapterNameTamil: chNameTamil,
      marks: marks,
      type: type,
      questionText: qText,
      questionTextTamil: qTextTamil,
      options: marks === 1 && (optA || optB) ? { A: optA, B: optB, C: optC, D: optD } : undefined,
      correctOption: correctOption,
      answer: answer,
      answerTamil: answerTamil,
      isBookBack: isBookBack,
      isCreative: isCreative
    };

    questions.push(parsedQuestion);
  }

  return {
    questions,
    errors,
    totalRows: rawLines.length - 1
  };
}

/**
 * Parses and validates JSON array into Questions
 */
export function parseQuestionsJson(jsonString: string, currentSubject?: SubjectData): ImportResult {
  const errors: string[] = [];
  const questions: Question[] = [];

  try {
    const data = JSON.parse(jsonString);
    const list = Array.isArray(data) ? data : data.questions ? data.questions : [data];

    if (!Array.isArray(list) || list.length === 0) {
      return { questions: [], errors: ['No questions array found in JSON.'], totalRows: 0 };
    }

    list.forEach((item, idx) => {
      const rowNo = idx + 1;
      if (!item.questionText && !item.question && !item.text) {
        errors.push(`Item ${rowNo}: Missing question text. Skipped.`);
        return;
      }

      const qText = (item.questionText || item.question || item.text || '').trim();
      let marksRaw = Number(item.marks || item.mark || 1);
      if (![1, 2, 3, 5].includes(marksRaw)) marksRaw = 1;
      const marks = marksRaw as MarkType;

      let chNo = Number(item.chapterNo || item.chapter || 1);
      if (isNaN(chNo) || chNo < 1) chNo = 1;

      let chName = item.chapterName || item.chapterTitle;
      if (!chName && currentSubject) {
        const matchCh = currentSubject.chapters.find(c => c.no === chNo);
        chName = matchCh ? matchCh.name : `Chapter ${chNo}`;
      } else if (!chName) {
        chName = `Chapter ${chNo}`;
      }

      let correctOpt = item.correctOption || item.correctOpt;
      if (correctOpt) {
        correctOpt = String(correctOpt).toUpperCase().trim();
        if (!['A', 'B', 'C', 'D'].includes(correctOpt)) correctOpt = undefined;
      }

      const parsed: Question = {
        id: item.id || `imported-json-${Date.now()}-${idx}`,
        chapterNo: chNo,
        chapterName: chName,
        chapterNameTamil: item.chapterNameTamil,
        marks: marks,
        type: item.type || (marks === 1 ? 'mcq' : marks === 2 ? 'short' : marks === 3 ? 'brief' : 'essay'),
        questionText: qText,
        questionTextTamil: item.questionTextTamil || item.tamilText,
        options: item.options,
        optionsTamil: item.optionsTamil,
        correctOption: correctOpt,
        answer: item.answer || item.solution || item.ans || 'Answer key provided.',
        answerTamil: item.answerTamil,
        isBookBack: item.isBookBack !== undefined ? !!item.isBookBack : true,
        isCreative: !!item.isCreative
      };

      questions.push(parsed);
    });

    return {
      questions,
      errors,
      totalRows: list.length
    };
  } catch (err: any) {
    return {
      questions: [],
      errors: [`Invalid JSON format: ${err.message || 'Syntax Error'}`],
      totalRows: 0
    };
  }
}
