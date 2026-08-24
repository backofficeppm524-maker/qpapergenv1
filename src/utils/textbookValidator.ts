import { SubjectData, Question } from '../types';

export interface ChapterBenchmark {
  total: number;
  m1?: number;
  m2?: number;
  m3?: number;
  m5?: number;
  notes?: string;
}

export type DiscrepancyStatus = 'exact' | 'deficit' | 'surplus' | 'unbenchmarked';

export interface ChapterValidationResult {
  chapterNo: number;
  chapterName: string;
  chapterNameTamil?: string;
  actualTotal: number;
  actualM1: number;
  actualM2: number;
  actualM3: number;
  actualM5: number;
  expectedTotal?: number;
  expectedM1?: number;
  expectedM2?: number;
  expectedM3?: number;
  expectedM5?: number;
  status: DiscrepancyStatus;
  delta: number; // actualTotal - expectedTotal
  discrepancyReasons: string[];
  contentGaps: string[];
}

export interface SubjectValidationReport {
  subjectId: string;
  subjectName: string;
  standard: string;
  totalActualQuestions: number;
  totalExpectedQuestions?: number;
  overallStatus: 'all_verified' | 'has_discrepancies' | 'unbenchmarked';
  matchedChaptersCount: number;
  discrepantChaptersCount: number;
  totalDeficit: number;
  totalSurplus: number;
  chapterResults: ChapterValidationResult[];
  identifiedContentGapsCount: number;
}

// Official Tamil Nadu Textbook evaluation question benchmarks
export const TEXTBOOK_BENCHMARKS: Record<string, Record<number, ChapterBenchmark>> = {
  // 11th Standard Computer Applications (411 Total)
  'ca-11': {
    1: { total: 29, m1: 10, m2: 8, m3: 8, m5: 3, notes: 'Intro to Computers' },
    2: { total: 21, m1: 8, m2: 5, m3: 5, m5: 3, notes: 'Number Systems' },
    3: { total: 26, m1: 10, m2: 5, m3: 7, m5: 4, notes: 'Computer Organisation' },
    4: { total: 21, m1: 9, m2: 6, m3: 3, m5: 3, notes: 'Theoretical Concepts of OS' },
    5: { total: 15, m1: 5, m2: 5, m3: 5, m5: 0, notes: 'Windows OS (No 5M)' },
    6: { total: 24, m1: 10, m2: 5, m3: 5, m5: 4, notes: 'Word Processor' },
    7: { total: 28, m1: 10, m2: 10, m3: 5, m5: 3, notes: 'OpenOffice Calc' },
    8: { total: 22, m1: 8, m2: 5, m3: 5, m5: 4, notes: 'Presentation Basics' },
    9: { total: 35, m1: 11, m2: 12, m3: 8, m5: 4, notes: 'Internet & Email' },
    10: { total: 26, m1: 15, m2: 5, m3: 4, m5: 2, notes: 'HTML Structural Tags' },
    11: { total: 29, m1: 10, m2: 8, m3: 6, m5: 5, notes: 'HTML Tables & Links' },
    12: { total: 19, m1: 8, m2: 6, m3: 5, m5: 0, notes: 'HTML Multimedia & Forms (No 5M)' },
    13: { total: 21, m1: 10, m2: 5, m3: 4, m5: 2, notes: 'CSS Style Sheets' },
    14: { total: 31, m1: 14, m2: 9, m3: 6, m5: 2, notes: 'Intro to JavaScript' },
    15: { total: 25, m1: 11, m2: 5, m3: 5, m5: 4, notes: 'Control Structure in JS' },
    16: { total: 12, m1: 5, m2: 5, m3: 2, m5: 0, notes: 'JavaScript Functions (No 5M)' },
    17: { total: 22, m1: 10, m2: 5, m3: 4, m5: 3, notes: 'Ethics & Cyber Security' },
    18: { total: 5, m1: 0, m2: 5, m3: 0, m5: 0, notes: 'Tamil Computing (Only 2M)' }
  },

  // 11th Standard Computer Science (426 Total)
  'cs-11': {
    1: { total: 29, m1: 10, m2: 8, m3: 8, m5: 3 },
    2: { total: 39, m1: 13, m2: 10, m3: 10, m5: 6 },
    3: { total: 26, m1: 10, m2: 5, m3: 7, m5: 4 },
    4: { total: 21, m1: 9, m2: 6, m3: 3, m5: 3 },
    5: { total: 18, m1: 5, m2: 5, m3: 5, m5: 3 },
    6: { total: 21, m1: 7, m2: 5, m3: 6, m5: 3 },
    7: { total: 21, m1: 6, m2: 6, m3: 5, m5: 4 },
    8: { total: 18, m1: 6, m2: 6, m3: 3, m5: 3 },
    9: { total: 47, m1: 20, m2: 16, m3: 8, m5: 3 },
    10: { total: 28, m1: 10, m2: 8, m3: 5, m5: 5 },
    11: { total: 22, m1: 6, m2: 5, m3: 6, m5: 5 },
    12: { total: 25, m1: 10, m2: 5, m3: 5, m5: 5 },
    13: { total: 23, m1: 10, m2: 5, m3: 5, m5: 3 },
    14: { total: 20, m1: 8, m2: 5, m3: 4, m5: 3 },
    15: { total: 18, m1: 5, m2: 5, m3: 5, m5: 3 },
    16: { total: 22, m1: 9, m2: 5, m3: 5, m5: 3 },
    17: { total: 23, m1: 10, m2: 5, m3: 5, m5: 3 },
    18: { total: 5, m1: 0, m2: 5, m3: 0, m5: 0 }
  },

  // 12th Standard Computer Applications (394 Total)
  'ca-12': {
    1: { total: 20, m1: 10, m2: 5, m3: 3, m5: 2 },
    2: { total: 32, m1: 12, m2: 10, m3: 7, m5: 3 },
    3: { total: 30, m1: 10, m2: 10, m3: 5, m5: 5 },
    4: { total: 22, m1: 10, m2: 5, m3: 5, m5: 2 },
    5: { total: 22, m1: 11, m2: 5, m3: 4, m5: 2 },
    6: { total: 20, m1: 10, m2: 5, m3: 3, m5: 2 },
    7: { total: 21, m1: 10, m2: 5, m3: 3, m5: 3 },
    8: { total: 20, m1: 10, m2: 5, m3: 3, m5: 2 },
    9: { total: 20, m1: 8, m2: 6, m3: 3, m5: 3 },
    10: { total: 16, m1: 7, m2: 4, m3: 3, m5: 2 },
    11: { total: 20, m1: 10, m2: 4, m3: 3, m5: 3 },
    12: { total: 25, m1: 10, m2: 8, m3: 4, m5: 3 },
    13: { total: 24, m1: 10, m2: 6, m3: 5, m5: 3 },
    14: { total: 20, m1: 8, m2: 5, m3: 5, m5: 2 },
    15: { total: 23, m1: 10, m2: 5, m3: 5, m5: 3 },
    16: { total: 23, m1: 10, m2: 5, m3: 5, m5: 3 },
    17: { total: 23, m1: 10, m2: 5, m3: 5, m5: 3 },
    18: { total: 13, m1: 5, m2: 3, m3: 3, m5: 2 }
  },

  // 12th Standard Computer Science (382 Total)
  'cs-12': {
    1: { total: 24, m1: 10, m2: 5, m3: 5, m5: 4 },
    2: { total: 23, m1: 10, m2: 5, m3: 5, m5: 3 },
    3: { total: 23, m1: 10, m2: 5, m3: 5, m5: 3 },
    4: { total: 25, m1: 10, m2: 5, m3: 5, m5: 5 },
    5: { total: 23, m1: 10, m2: 5, m3: 5, m5: 3 },
    6: { total: 24, m1: 10, m2: 5, m3: 5, m5: 4 },
    7: { total: 30, m1: 10, m2: 7, m3: 8, m5: 5 },
    8: { total: 21, m1: 10, m2: 5, m3: 5, m5: 1 },
    9: { total: 28, m1: 12, m2: 6, m3: 6, m5: 4 },
    10: { total: 21, m1: 10, m2: 5, m3: 5, m5: 1 },
    11: { total: 25, m1: 10, m2: 5, m3: 5, m5: 5 },
    12: { total: 20, m1: 5, m2: 5, m3: 5, m5: 5 },
    13: { total: 25, m1: 10, m2: 5, m3: 5, m5: 5 },
    14: { total: 25, m1: 10, m2: 5, m3: 5, m5: 5 },
    15: { total: 25, m1: 10, m2: 5, m3: 5, m5: 5 },
    16: { total: 20, m1: 9, m2: 5, m3: 3, m5: 3 }
  }
};

/**
 * Validates question counts for a specific chapter against textbook benchmarks
 */
export const validateChapter = (
  subjectId: string,
  chapterNo: number,
  chapterQuestions: Question[],
  chapterName: string = `Chapter ${chapterNo}`,
  chapterNameTamil?: string
): ChapterValidationResult => {
  const benchmark = TEXTBOOK_BENCHMARKS[subjectId]?.[chapterNo];
  
  const actualM1 = chapterQuestions.filter(q => q.marks === 1).length;
  const actualM2 = chapterQuestions.filter(q => q.marks === 2).length;
  const actualM3 = chapterQuestions.filter(q => q.marks === 3).length;
  const actualM5 = chapterQuestions.filter(q => q.marks === 5).length;
  const actualTotal = chapterQuestions.length;

  const discrepancyReasons: string[] = [];
  const contentGaps: string[] = [];

  // Content gap checks (independent of benchmark)
  if (actualM1 === 0) contentGaps.push('No 1-mark objective/MCQ questions (Part I gap)');
  if (actualM2 === 0) contentGaps.push('No 2-mark short answer questions (Part II gap)');
  if (actualM3 === 0) contentGaps.push('No 3-mark brief answer questions (Part III gap)');
  if (actualM5 === 0) contentGaps.push('No 5-mark detailed essay questions (Part IV gap)');

  if (!benchmark) {
    return {
      chapterNo,
      chapterName,
      chapterNameTamil,
      actualTotal,
      actualM1,
      actualM2,
      actualM3,
      actualM5,
      status: 'unbenchmarked',
      delta: 0,
      discrepancyReasons: ['No predefined state board benchmark found for this custom subject'],
      contentGaps
    };
  }

  const delta = actualTotal - benchmark.total;
  let status: DiscrepancyStatus = 'exact';

  if (delta < 0) {
    status = 'deficit';
    discrepancyReasons.push(`Missing ${Math.abs(delta)} questions (Expected ${benchmark.total}, Found ${actualTotal})`);
  } else if (delta > 0) {
    status = 'surplus';
    discrepancyReasons.push(`Contains ${delta} additional questions beyond standard textbook (${actualTotal} vs ${benchmark.total})`);
  }

  // Check mark-wise sub-discrepancies if benchmark specifies
  if (benchmark.m1 !== undefined && benchmark.m1 !== actualM1) {
    discrepancyReasons.push(`1M count discrepancy: found ${actualM1}, expected ${benchmark.m1}`);
  }
  if (benchmark.m2 !== undefined && benchmark.m2 !== actualM2) {
    discrepancyReasons.push(`2M count discrepancy: found ${actualM2}, expected ${benchmark.m2}`);
  }
  if (benchmark.m3 !== undefined && benchmark.m3 !== actualM3) {
    discrepancyReasons.push(`3M count discrepancy: found ${actualM3}, expected ${benchmark.m3}`);
  }
  if (benchmark.m5 !== undefined && benchmark.m5 !== actualM5) {
    discrepancyReasons.push(`5M count discrepancy: found ${actualM5}, expected ${benchmark.m5}`);
  }

  return {
    chapterNo,
    chapterName,
    chapterNameTamil,
    actualTotal,
    actualM1,
    actualM2,
    actualM3,
    actualM5,
    expectedTotal: benchmark.total,
    expectedM1: benchmark.m1,
    expectedM2: benchmark.m2,
    expectedM3: benchmark.m3,
    expectedM5: benchmark.m5,
    status,
    delta,
    discrepancyReasons,
    contentGaps
  };
};

/**
 * Validates the entire subject question repository
 */
export const validateSubject = (subject: SubjectData): SubjectValidationReport => {
  const benchmarksForSubject = TEXTBOOK_BENCHMARKS[subject.id];
  let totalExpectedQuestions: number | undefined = undefined;
  
  if (benchmarksForSubject) {
    totalExpectedQuestions = Object.values(benchmarksForSubject).reduce((acc, b) => acc + b.total, 0);
  }

  const chapterResults: ChapterValidationResult[] = subject.chapters.map(ch => {
    const chQuestions = subject.questions.filter(q => q.chapterNo === ch.no);
    return validateChapter(subject.id, ch.no, chQuestions, ch.name, ch.nameTamil);
  });

  let matchedChaptersCount = 0;
  let discrepantChaptersCount = 0;
  let totalDeficit = 0;
  let totalSurplus = 0;
  let identifiedContentGapsCount = 0;

  chapterResults.forEach(res => {
    if (res.status === 'exact') {
      matchedChaptersCount++;
    } else if (res.status === 'deficit') {
      discrepantChaptersCount++;
      totalDeficit += Math.abs(res.delta);
    } else if (res.status === 'surplus') {
      discrepantChaptersCount++;
      totalSurplus += res.delta;
    }
    identifiedContentGapsCount += res.contentGaps.length;
  });

  let overallStatus: SubjectValidationReport['overallStatus'] = 'all_verified';
  if (!benchmarksForSubject) {
    overallStatus = 'unbenchmarked';
  } else if (discrepantChaptersCount > 0) {
    overallStatus = 'has_discrepancies';
  }

  return {
    subjectId: subject.id,
    subjectName: subject.name,
    standard: subject.standard,
    totalActualQuestions: subject.questions.length,
    totalExpectedQuestions,
    overallStatus,
    matchedChaptersCount,
    discrepantChaptersCount,
    totalDeficit,
    totalSurplus,
    chapterResults,
    identifiedContentGapsCount
  };
};
