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
  const [activeView, setActiveView] = useState<string>('home');

  // Language Mode: 'english' | 'tamil' | 'bilingual'
  const [languageMode, setLanguageMode] = useState<LanguageMode>('bilingual');

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

  const handleAddQuestionToManualPaper = (q: Question) => {
    setManualStagedQuestions(prev => {
      if (prev.some(item => item.id === q.id)) return prev;
      return [...prev, q];
    });
  };

  const handlePaperGenerated = (paper: QuestionPaper) => {
    setSavedPapers(prev => [paper, ...prev]);
    setActivePaper(paper);
    setActiveView('view-qp');
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
            activeView={activeView}
            onNavigate={setActiveView}
            savedPapersCount={savedPapers.length}
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

          {/* 9. Manual Selection Paper & Custom QP with Manual */}
          {(activeView === 'qp-manual' || activeView === 'qp-custom-manual') && (
            <ManualGenerator
              subject={activeSubject}
              languageMode={languageMode}
              manualSelectedQuestions={manualStagedQuestions}
              onPaperGenerated={handlePaperGenerated}
              onSyncStagedQuestions={setManualStagedQuestions}
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
              onBack={() => setActiveView('overview')}
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
    </div>
  );
};

export default App;
