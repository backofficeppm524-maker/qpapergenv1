import { QuestionPaper, SubjectData, Question } from '../types';

export interface AppBackupData {
  version: string;
  exportDate: string;
  appTitle: string;
  summary: {
    savedPapersCount: number;
    customSubjectsCount: number;
    totalStagedQuestions: number;
  };
  savedPapers: QuestionPaper[];
  customSubjects: SubjectData[];
  stagedDrafts?: {
    part1: Question[];
    part2: Question[];
    part3: Question[];
    part4: { questionA: Question; questionB?: Question }[];
    settings?: Record<string, unknown>;
  };
  quizData?: {
    leaderboard?: unknown[];
    history?: unknown[];
  };
}

/**
 * Gathers all user-generated data including saved question papers,
 * custom uploaded subjects, staged question drafts, and quiz progress,
 * then triggers a clean JSON file download for backup.
 */
export const exportBackupDataJSON = (
  customSubjects: SubjectData[],
  savedPapers: QuestionPaper[]
): { success: boolean; filename: string; stats: AppBackupData['summary'] } => {
  try {
    // Collect staged drafts from localStorage
    let stagedPart1: Question[] = [];
    let stagedPart2: Question[] = [];
    let stagedPart3: Question[] = [];
    let stagedPart4: { questionA: Question; questionB?: Question }[] = [];
    let manualSettings: Record<string, unknown> = {};
    let leaderboardData: unknown[] = [];
    let quizHistoryData: unknown[] = [];

    try {
      const p1 = localStorage.getItem('tn_manual_draft_part1_v1');
      if (p1) stagedPart1 = JSON.parse(p1);

      const p2 = localStorage.getItem('tn_manual_draft_part2_v1');
      if (p2) stagedPart2 = JSON.parse(p2);

      const p3 = localStorage.getItem('tn_manual_draft_part3_v1');
      if (p3) stagedPart3 = JSON.parse(p3);

      const p4 = localStorage.getItem('tn_manual_draft_part4_v1');
      if (p4) stagedPart4 = JSON.parse(p4);

      const settings = localStorage.getItem('tn_manual_settings_v1');
      if (settings) manualSettings = JSON.parse(settings);

      const lb = localStorage.getItem('tn_quiz_leaderboard_v1');
      if (lb) leaderboardData = JSON.parse(lb);

      const hist = localStorage.getItem('tn_quiz_exam_history_v1');
      if (hist) quizHistoryData = JSON.parse(hist);
    } catch (err) {
      console.warn('Non-fatal error reading staged drafts from localStorage:', err);
    }

    const totalStaged = stagedPart1.length + stagedPart2.length + stagedPart3.length + stagedPart4.length;

    const backupPayload: AppBackupData = {
      version: '1.0.0',
      exportDate: new Date().toISOString(),
      appTitle: 'Tamil Nadu Higher Secondary Question Paper & Answer Key Generator',
      summary: {
        savedPapersCount: savedPapers.length,
        customSubjectsCount: customSubjects.length,
        totalStagedQuestions: totalStaged,
      },
      savedPapers: savedPapers,
      customSubjects: customSubjects,
      stagedDrafts: {
        part1: stagedPart1,
        part2: stagedPart2,
        part3: stagedPart3,
        part4: stagedPart4,
        settings: manualSettings,
      },
      quizData: {
        leaderboard: leaderboardData,
        history: quizHistoryData,
      },
    };

    const jsonString = JSON.stringify(backupPayload, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json;charset=utf-8' });
    const dateStr = new Date().toISOString().split('T')[0];
    const filename = `TN_QP_Generator_Backup_${dateStr}.json`;

    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = filename;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(downloadLink.href);

    return {
      success: true,
      filename,
      stats: backupPayload.summary,
    };
  } catch (error) {
    console.error('Failed to export backup data JSON:', error);
    return {
      success: false,
      filename: '',
      stats: { savedPapersCount: 0, customSubjectsCount: 0, totalStagedQuestions: 0 },
    };
  }
};
