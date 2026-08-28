import React, { useState, useEffect } from 'react';
import { INITIAL_SUBJECTS } from './data/questionBanks';
import { SubjectData, QuestionPaper, LanguageMode, Question } from './types';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { HomeOverview } from './components/HomeOverview';
import { FullQuestionBank } from './components/FullQuestionBank';
import { ChapterBrowser } from './components/ChapterBrowser';
import { AutomaticGenerator } from './components/AutomaticGenerator';
import { ManualGenerator } from './components/ManualGenerator';
import { QuestionPaperView } from './components/QuestionPaperView';
import { AnswerKeyView } from './components/AnswerKeyView';
import { SavedPapers } from './components/SavedPapers';
import { AboutView } from './components/AboutView';
import { PracticeQuiz } from './components/PracticeQuiz';
import { SubjectOverview } from './components/SubjectOverview';
import { ChapterwiseQuizExam } from './components/ChapterwiseQuizExam';
import { QuizLeaderboard } from './components/QuizLeaderboard';
import { CheckCircle, BookmarkCheck } from 'lucide-react';
import { exportBackupDataJSON } from './utils/dataBackup';

export const App: React.FC = () => {
  // All Subjects (Preloaded + LocalStorage custom subjects)
  const [allSubjects, setAllSubjects] = useState<SubjectData[]>(() => {
    try {
      const saved = localStorage.getItem('tn_qp_custom_subjects');
      if (saved) {
        const parsed = JSON.parse(saved);
        return [...INITIAL_SUBJECTS, ...parsed];
      }
    } catch (e) {
      console.error('Error loading custom subjects from localStorage', e);
    }
    return INITIAL_SUBJECTS;
  });

  // Active Subject
  const [activeSubject, setActiveSubject] = useState<SubjectData>(INITIAL_SUBJECTS[0]);

  // View state: 'home' | 'question-bank' | 'browse-chapter' | 'answers-overview' | 'qp-25' | 'qp-50' | 'qp-70' | 'qp-custom' | 'qp-manual' | 'qp-custom-manual' | 'saved-papers' | 'saved-keys' | 'view-qp' | 'view-key'
  const [activeView, setActiveViewState] = useState<string>('home');
  const [previousView, setPreviousView] = useState<string>('home');

  const setActiveView = (nextView: string) => {
    setActiveViewState(current => {
      if (current !== nextView) {
        setPreviousView(current);
      }
      return nextView;
    });
  };

  // Language Mode: 'english' | 'tamil' | 'bilingual'
  const [languageMode, setLanguageMode] = useState<LanguageMode>('bilingual');

  // App-level Toast Notification (for saves, alerts, etc.)
  const [appToast, setAppToast] = useState<{ message: string; subMessage?: string; type: 'success' | 'info' } | null>(null);

  const showToast = (message: string, subMessage?: string, type: 'success' | 'info' = 'success') => {
    setAppToast({ message, subMessage, type });
    setTimeout(() => {
      setAppToast(null);
    }, 4500);
  };

  // Saved Question Papers
  const [savedPapers, setSavedPapers] = useState<QuestionPaper[]>(() => {
    try {
      const saved = localStorage.getItem('tn_qp_saved_papers');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error loading saved papers from localStorage', e);
    }
    return [];
  });

  // Active Question Paper for preview / print
  const [activePaper, setActivePaper] = useState<QuestionPaper | null>(null);

  // Manual questions staging bucket
  const [manualStagedQuestions, setManualStagedQuestions] = useState<Question[]>([]);

  // Selected chapter filter for question bank
  const [selectedChapterNo, setSelectedChapterNo] = useState<number | null>(null);

  // Selected chapter for Chapter Browser view
  const [browserChapterNo, setBrowserChapterNo] = useState<number | undefined>(undefined);

  // Selected chapter for Chapterwise Quiz Exam
  const [quizExamChapterNo, setQuizExamChapterNo] = useState<number | undefined>(undefined);

  // Save changes to localStorage
  useEffect(() => {
    try {
      const customOnes = allSubjects.filter(s => s.isCustomUploaded);
      localStorage.setItem('tn_qp_custom_subjects', JSON.stringify(customOnes));
    } catch (e) {
      console.error(e);
    }
  }, [allSubjects]);

  useEffect(() => {
    try {
      localStorage.setItem('tn_qp_saved_papers', JSON.stringify(savedPapers));
    } catch (e) {
      console.error(e);
    }
  }, [savedPapers]);

  // Handlers
  const handleSelectSubject = (sub: SubjectData) => {
    setActiveSubject(sub);
    setActiveView('overview');
  };

  const handleAddNewCustomQuestion = (newQuestion: Question) => {
    const updatedQuestions = [newQuestion, ...activeSubject.questions];
    const updatedSubject: SubjectData = {
      ...activeSubject,
      questions: updatedQuestions
    };

    setActiveSubject(updatedSubject);
    setAllSubjects(prev =>
      prev.map(s => (s.id === updatedSubject.id ? updatedSubject : s))
    );
  };

  const handleBatchUpdateQuestions = (updatedQuestions: Question[]) => {
    const updatedMap = new Map(updatedQuestions.map(q => [q.id, q]));
    const newQuestions = activeSubject.questions.map(q => updatedMap.get(q.id) || q);
    const updatedSubject: SubjectData = {
      ...activeSubject,
      questions: newQuestions
    };
    setActiveSubject(updatedSubject);
    setAllSubjects(prev =>
      prev.map(s => (s.id === updatedSubject.id ? updatedSubject : s))
    );
    showToast(
      'Questions Updated in Bulk!',
      `Successfully updated ${updatedQuestions.length} questions in ${activeSubject.name}.`,
      'success'
    );
  };

  const handleBatchDeleteQuestions = (questionIds: string[]) => {
    const idSet = new Set(questionIds);
    const newQuestions = activeSubject.questions.filter(q => !idSet.has(q.id));
    const updatedSubject: SubjectData = {
      ...activeSubject,
      questions: newQuestions
    };
    setActiveSubject(updatedSubject);
    setAllSubjects(prev =>
      prev.map(s => (s.id === updatedSubject.id ? updatedSubject : s))
    );
    showToast(
      'Questions Deleted in Bulk!',
      `Removed ${questionIds.length} questions from ${activeSubject.name}.`,
      'success'
    );
  };

  // Track last active generator view to allow seamless Back navigation
  const [previousGeneratorView, setPreviousGeneratorView] = useState<string>('qp-25');

  const handleAddQuestionToManualPaper = (q: Question) => {
    setManualStagedQuestions(prev => {
      if (prev.some(item => item.id === q.id)) return prev;
      return [...prev, q];
    });
  };

  const handlePaperGenerated = (paper: QuestionPaper) => {
    setSavedPapers(prev => [paper, ...prev.filter(p => p.id !== paper.id)]);
    setActivePaper(paper);
    setPreviousGeneratorView(activeView);
    setActiveView('view-qp');
    showToast(
      "Question Paper saved to 'Saved Papers'!",
      `${paper.examName} • ${paper.subject} (${paper.maxMarks} Marks, ${paper.timeAllowed})`,
      'success'
    );
  };

  const handleDeletePaper = (paperId: string) => {
    setSavedPapers(prev => prev.filter(p => p.id !== paperId));
    if (activePaper?.id === paperId) {
      setActivePaper(null);
      setActiveView('saved-papers');
    }
  };

  const handleBatchDeletePapers = (paperIds: string[]) => {
    const idSet = new Set(paperIds);
    setSavedPapers(prev => prev.filter(p => !idSet.has(p.id)));
    if (activePaper && idSet.has(activePaper.id)) {
      setActivePaper(null);
      setActiveView('saved-papers');
    }
  };

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 flex flex-col font-sans antialiased selection:bg-amber-400 selection:text-stone-950">
      {/* Top Navbar */}
      <Navbar
        activeSubject={activeSubject}
        languageMode={languageMode}
        onLanguageChange={setLanguageMode}
        activeView={activeView}
        onNavigate={setActiveView}
        savedPapersCount={savedPapers.length}
        activePaperTime={activePaper?.timeAllowed}
      />

      {/* Main Layout Body */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Left Sidebar (Hidden on print or if viewing clean sheet on mobile) */}
        <div className="hidden md:block print:hidden">
          <Sidebar
            activeSubject={activeSubject}
            allSubjects={allSubjects}
            savedPapers={savedPapers}
            activeView={activeView}
            onNavigate={setActiveView}
            savedPapersCount={savedPapers.length}
            onExportData={() => {
              const customOnes = allSubjects.filter(s => s.isCustomUploaded);
              const res = exportBackupDataJSON(customOnes, savedPapers);
              if (res.success) {
                showToast(
                  'Backup Exported Successfully!',
                  `Downloaded ${res.filename} (${res.stats.savedPapersCount} papers, ${res.stats.customSubjectsCount} custom subjects).`
                );
              }
            }}
          />
        </div>

        {/* Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0 overflow-y-auto">
          {/* Chapterwise Quiz Exam Mode */}
          {activeView === 'chapterwise-quiz' && (
            <ChapterwiseQuizExam
              subject={activeSubject}
              languageMode={languageMode}
              initialChapterNo={quizExamChapterNo}
              onNavigate={setActiveView}
            />
          )}

          {/* Quiz Leaderboard Mode */}
          {activeView === 'quiz-leaderboard' && (
            <QuizLeaderboard
              activeSubject={activeSubject}
              allSubjects={allSubjects}
              languageMode={languageMode}
              onNavigate={setActiveView}
              onStartChapterExam={chNo => {
                setQuizExamChapterNo(chNo);
                setActiveView('chapterwise-quiz');
              }}
            />
          )}

          {/* 0. Practice Quiz Mode */}
          {activeView === 'practice-quiz' && (
            <PracticeQuiz
              subject={activeSubject}
              languageMode={languageMode}
              onNavigate={setActiveView}
            />
          )}

          {/* 1. Home / Overview */}
          {(activeView === 'home' || activeView === 'overview') && (
            <HomeOverview
              allSubjects={allSubjects}
              activeSubject={activeSubject}
              languageMode={languageMode}
              onSelectSubject={handleSelectSubject}
              onNavigate={setActiveView}
              onSelectChapter={chNo => {
                setSelectedChapterNo(chNo);
                setActiveView('question-bank');
              }}
            />
          )}

          {/* 1.5 Subject Overview & Gaps Dashboard */}
          {activeView === 'subject-overview' && (
            <SubjectOverview
              subject={activeSubject}
              languageMode={languageMode}
              onNavigate={setActiveView}
              onSelectChapter={chNo => {
                setSelectedChapterNo(chNo);
                setActiveView('question-bank');
              }}
              onSelectChapterForBrowser={chNo => {
                setBrowserChapterNo(chNo);
                setActiveView('browse-chapter');
              }}
            />
          )}

          {/* 2. Full Question Bank */}
          {activeView === 'question-bank' && (
            <FullQuestionBank
              subject={activeSubject}
              languageMode={languageMode}
              selectedChapterNo={selectedChapterNo}
              onAddQuestionToPaper={handleAddQuestionToManualPaper}
              onAddNewCustomQuestion={handleAddNewCustomQuestion}
              onBatchUpdateQuestions={handleBatchUpdateQuestions}
              onBatchDeleteQuestions={handleBatchDeleteQuestions}
            />
          )}

          {/* 3. Browse by Chapter */}
          {activeView === 'browse-chapter' && (
            <ChapterBrowser
              subject={activeSubject}
              languageMode={languageMode}
              initialChapterNo={browserChapterNo}
              onSelectChapterForBank={chNo => {
                setSelectedChapterNo(chNo);
                setActiveView('question-bank');
              }}
              manualStagedQuestions={manualStagedQuestions}
              onToggleStageQuestion={q => {
                setManualStagedQuestions(prev => {
                  if (prev.some(item => item.id === q.id)) {
                    return prev.filter(item => item.id !== q.id);
                  }
                  return [...prev, q];
                });
              }}
              onAddMultipleQuestionsToPaper={questions => {
                setManualStagedQuestions(prev => {
                  const existingIds = new Set(prev.map(p => p.id));
                  const toAdd = questions.filter(q => !existingIds.has(q.id));
                  return [...prev, ...toAdd];
                });
              }}
              onNavigate={setActiveView}
            />
          )}

          {/* 4. Answers Overview (Same as Question bank with answers revealed) */}
          {activeView === 'answers-overview' && (
            <FullQuestionBank
              subject={activeSubject}
              languageMode={languageMode}
              selectedChapterNo={null}
              showAddButton={false}
              onBatchUpdateQuestions={handleBatchUpdateQuestions}
              onBatchDeleteQuestions={handleBatchDeleteQuestions}
            />
          )}

          {/* 5. 25 Marks Paper Generator */}
          {activeView === 'qp-25' && (
            <AutomaticGenerator
              subject={activeSubject}
              languageMode={languageMode}
              targetTemplate="25"
              onPaperGenerated={handlePaperGenerated}
            />
          )}

          {/* 6. 50 Marks Paper Generator */}
          {activeView === 'qp-50' && (
            <AutomaticGenerator
              subject={activeSubject}
              languageMode={languageMode}
              targetTemplate="50"
              onPaperGenerated={handlePaperGenerated}
            />
          )}

          {/* 7. 70 Marks Paper Generator */}
          {activeView === 'qp-70' && (
            <AutomaticGenerator
              subject={activeSubject}
              languageMode={languageMode}
              targetTemplate="70"
              onPaperGenerated={handlePaperGenerated}
            />
          )}

          {/* 8. Custom Blueprint Paper Generator */}
          {activeView === 'qp-custom' && (
            <AutomaticGenerator
              subject={activeSubject}
              languageMode={languageMode}
              targetTemplate="custom"
              onPaperGenerated={handlePaperGenerated}
            />
          )}

          {/* 9. Manual Selection Paper */}
          {activeView === 'qp-manual' && (
            <ManualGenerator
              subject={activeSubject}
              languageMode={languageMode}
              manualSelectedQuestions={manualStagedQuestions}
              onPaperGenerated={handlePaperGenerated}
              onSyncStagedQuestions={setManualStagedQuestions}
              onNavigate={setActiveView}
              onBack={() => {
                if (previousView && previousView !== 'qp-manual') {
                  setActiveView(previousView);
                } else {
                  setActiveView('qp-25');
                }
              }}
              mode="manual-simple"
            />
          )}

          {/* 9.5 Custom QP with Manual */}
          {activeView === 'qp-custom-manual' && (
            <ManualGenerator
              subject={activeSubject}
              languageMode={languageMode}
              manualSelectedQuestions={manualStagedQuestions}
              onPaperGenerated={handlePaperGenerated}
              onSyncStagedQuestions={setManualStagedQuestions}
              onNavigate={setActiveView}
              onBack={() => {
                if (previousView && previousView !== 'qp-custom-manual') {
                  setActiveView(previousView);
                } else {
                  setActiveView('qp-25');
                }
              }}
              mode="custom-manual"
            />
          )}

          {/* 10. Saved Papers List */}
          {activeView === 'saved-papers' && (
            <SavedPapers
              papers={savedPapers}
              onOpenPaper={paper => {
                 setActivePaper(paper);
                 setActiveView('view-qp');
              }}
              onOpenKey={paper => {
                 setActivePaper(paper);
                 setActiveView('view-key');
              }}
              onDeletePaper={handleDeletePaper}
              onBatchDeletePapers={handleBatchDeletePapers}
            />
          )}

          {/* 11. Saved Answer Keys */}
          {activeView === 'saved-keys' && (
            <SavedPapers
              papers={savedPapers}
              onOpenPaper={paper => {
                 setActivePaper(paper);
                 setActiveView('view-key');
              }}
              onOpenKey={paper => {
                 setActivePaper(paper);
                 setActiveView('view-key');
              }}
              onDeletePaper={handleDeletePaper}
              onBatchDeletePapers={handleBatchDeletePapers}
            />
          )}

          {/* 11.5 About Developer View */}
          {activeView === 'about' && (
            <AboutView />
          )}

          {/* 12. Question Paper Sheet View */}
          {activeView === 'view-qp' && activePaper && (
            <QuestionPaperView
              paper={activePaper}
              languageMode={languageMode}
              onLanguageChange={setLanguageMode}
              onViewAnswerKey={() => setActiveView('view-key')}
              onBack={() => setActiveView(previousGeneratorView || 'overview')}
              generatorViewName={
                previousGeneratorView === 'qp-25'
                  ? '25 Marks Question Paper Generator (Unit Test)'
                  : previousGeneratorView === 'qp-50'
                  ? '50 Marks Question Paper Generator (Mid-Term)'
                  : previousGeneratorView === 'qp-70'
                  ? '70 Marks Question Paper Generator (Half Yearly / Model)'
                  : previousGeneratorView === 'qp-custom'
                  ? 'Custom Blueprint Generator'
                  : previousGeneratorView === 'qp-manual' || previousGeneratorView === 'qp-custom-manual'
                  ? 'Manual Selection Generator'
                  : 'Generator Panel'
              }
              onUpdatePaper={updatedPaper => {
                setActivePaper(updatedPaper);
                setSavedPapers(prev => prev.map(p => (p.id === updatedPaper.id ? updatedPaper : p)));
              }}
              onSavePaper={paperToSave => {
                setSavedPapers(prev => [paperToSave, ...prev.filter(p => p.id !== paperToSave.id)]);
                showToast(
                  "Question Paper saved to 'Saved Papers'!",
                  `${paperToSave.examName} • ${paperToSave.subject} (${paperToSave.maxMarks} Marks)`,
                  'success'
                );
              }}
              allSubjectQuestions={activeSubject.questions}
            />
          )}

          {/* 13. Answer Key Valuation Scheme View */}
          {activeView === 'view-key' && activePaper && (
            <AnswerKeyView
              paper={activePaper}
              languageMode={languageMode}
              onLanguageChange={setLanguageMode}
              onBackToPaper={() => setActiveView('view-qp')}
            />
          )}
        </main>
      </div>

      {/* Global Status / Save Confirmation Toast Indicator */}
      {appToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0f172a] text-white px-4 py-3 rounded-xl shadow-2xl border border-emerald-500/60 flex items-center gap-3 animate-fade-in no-print print:hidden">
          <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
          <div>
            <p className="text-xs font-bold text-white">{appToast.message}</p>
            {appToast.subMessage && (
              <p className="text-[11px] text-slate-300">{appToast.subMessage}</p>
            )}
          </div>
          <button
            onClick={() => setActiveView('saved-papers')}
            className="ml-2 text-[11px] bg-emerald-700 hover:bg-emerald-600 font-bold px-2.5 py-1 rounded text-white cursor-pointer transition shrink-0"
          >
            Saved Papers →
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
