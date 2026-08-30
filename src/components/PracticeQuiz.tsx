import React, { useState, useMemo, useEffect } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ArrowRight, 
  ArrowLeft, 
  Eye, 
  EyeOff, 
  BookOpen, 
  Award, 
  Trophy, 
  HelpCircle, 
  Flag, 
  Languages, 
  Sliders, 
  FileSpreadsheet,
  Check,
  ChevronRight,
  Flame,
  Maximize2,
  Minimize2,
  Keyboard
} from 'lucide-react';
import { SubjectData, Question, LanguageMode } from '../types';
import { getQuestionDifficulty } from '../utils/csvExport';

interface PracticeQuizProps {
  subject: SubjectData;
  languageMode: LanguageMode;
  onNavigate: (view: string) => void;
  onGeneratePaper?: () => void;
  onToggleDistractionFree?: (active: boolean) => void;
}

export const PracticeQuiz: React.FC<PracticeQuizProps> = ({
  subject,
  languageMode: initialLangMode,
  onNavigate,
  onGeneratePaper,
  onToggleDistractionFree
}) => {
  const [quizLength, setQuizLength] = useState<number>(10);
  const [selectedChapters, setSelectedChapters] = useState<number[]>(() => subject.chapters.map(c => c.no));
  const [localLangMode, setLocalLangMode] = useState<LanguageMode>(initialLangMode);
  
  // Quiz state
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D' | 'self_correct' | 'self_partial' | 'self_incorrect'>>({});
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [isExamMode, setIsExamMode] = useState<boolean>(false);

  // Notify parent if exam mode changes
  useEffect(() => {
    onToggleDistractionFree?.(isExamMode && quizStarted && !isCompleted);
  }, [isExamMode, quizStarted, isCompleted, onToggleDistractionFree]);

  // Initialize quiz with random sample
  const startNewQuiz = (count = quizLength, startWithExamMode = false) => {
    let pool = subject.questions.filter(q => selectedChapters.includes(q.chapterNo));
    if (pool.length === 0) {
      pool = subject.questions;
    }

    // Shuffle pool
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(count, pool.length));

    setQuizQuestions(selected);
    setCurrentIndex(0);
    setUserAnswers({});
    setRevealedAnswers({});
    setFlaggedQuestions({});
    setIsCompleted(false);
    setQuizStarted(true);
    setElapsedTime(0);
    if (startWithExamMode) {
      setIsExamMode(true);
    }
  };

  // Timer while quiz is active
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (quizStarted && !isCompleted) {
      timer = setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [quizStarted, isCompleted]);

  // Current Question
  const currentQ = quizQuestions[currentIndex];

  // Global Keyboard Shortcuts for Quiz & Exam Mode
  useEffect(() => {
    if (!quizStarted || isCompleted || !currentQ) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'Escape' && isExamMode) {
        setIsExamMode(false);
        return;
      }

      if (currentQ.type === 'mcq') {
        if (e.key === '1' || e.key === 'a' || e.key === 'A') {
          setUserAnswers(prev => ({ ...prev, [currentQ.id]: 'A' }));
        } else if (e.key === '2' || e.key === 'b' || e.key === 'B') {
          setUserAnswers(prev => ({ ...prev, [currentQ.id]: 'B' }));
        } else if (e.key === '3' || e.key === 'c' || e.key === 'C') {
          setUserAnswers(prev => ({ ...prev, [currentQ.id]: 'C' }));
        } else if (e.key === '4' || e.key === 'd' || e.key === 'D') {
          setUserAnswers(prev => ({ ...prev, [currentQ.id]: 'D' }));
        }
      }

      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        if (currentIndex < quizQuestions.length - 1) {
          setCurrentIndex(prev => prev + 1);
        } else if (e.key === 'Enter' && Object.keys(userAnswers).length > 0) {
          setIsCompleted(true);
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
          setCurrentIndex(prev => prev - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [quizStarted, isCompleted, currentQ, currentIndex, quizQuestions.length, isExamMode, userAnswers]);

  // Calculate score
  const scoreResults = useMemo(() => {
    let score = 0;
    let maxScore = 0;
    let correctCount = 0;
    let incorrectCount = 0;

    quizQuestions.forEach(q => {
      maxScore += q.marks;
      const ans = userAnswers[q.id];
      if (q.type === 'mcq') {
        if (ans && q.correctOption && ans === q.correctOption) {
          score += q.marks;
          correctCount++;
        } else if (ans) {
          incorrectCount++;
        }
      } else {
        if (ans === 'self_correct') {
          score += q.marks;
          correctCount++;
        } else if (ans === 'self_partial') {
          score += q.marks * 0.5;
          correctCount += 0.5;
        } else if (ans === 'self_incorrect') {
          incorrectCount++;
        }
      }
    });

    const percent = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
    return { score, maxScore, correctCount, incorrectCount, percent };
  }, [quizQuestions, userAnswers]);

  // Format MM:SS
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // If quiz hasn't started, show setup splash screen
  if (!quizStarted) {
    return (
      <div className="max-w-3xl mx-auto space-y-6 pb-12">
        {/* Banner Card */}
        <div className="bg-gradient-to-br from-[#7a1818] to-stone-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/20 backdrop-blur border border-amber-300/40 rounded-full text-xs font-semibold text-amber-200">
              <Sparkles className="w-3.5 h-3.5" />
              Interactive Practice & Board Exam Simulator
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Test Your Knowledge: {subject.standard} {subject.name}
            </h1>
            <p className="text-sm text-stone-200 max-w-xl leading-relaxed">
              Randomly samples questions from the official {subject.questions.length}-question bank across MCQs, short questions, and brief evaluations. Test your speed and recall before generating your full question paper!
            </p>
          </div>
        </div>

        {/* Configuration Box */}
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-5 sm:p-6 shadow-sm space-y-5">
          <h2 className="text-base font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2 border-b border-stone-100 dark:border-stone-800 pb-3">
            <Sliders className="w-4 h-4 text-[#7a1818] dark:text-amber-400" />
            Quiz Setup & Preferences
          </h2>

          {/* Number of Questions */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider block">
              Number of Questions:
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[5, 10, 15, 20].map(n => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setQuizLength(n)}
                  className={`py-2.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
                    quizLength === n
                      ? 'bg-[#7a1818] border-[#7a1818] text-white shadow-sm ring-2 ring-[#7a1818]/20'
                      : 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 hover:bg-stone-100 text-stone-700 dark:text-stone-300'
                  }`}
                >
                  {n} Questions
                </button>
              ))}
            </div>
          </div>

          {/* Language Mode */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider block">
              Quiz Medium:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { mode: 'english' as LanguageMode, label: 'English' },
                { mode: 'tamil' as LanguageMode, label: 'தமிழ் (Tamil)' },
                { mode: 'bilingual' as LanguageMode, label: 'Bilingual (Both)' }
              ].map(opt => (
                <button
                  key={opt.mode}
                  type="button"
                  onClick={() => setLocalLangMode(opt.mode)}
                  className={`py-2 px-3 rounded-xl border text-xs font-semibold transition cursor-pointer ${
                    localLangMode === opt.mode
                      ? 'bg-[#7a1818] border-[#7a1818] text-white shadow-sm'
                      : 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 hover:bg-stone-100 text-stone-700 dark:text-stone-300'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Chapter Inclusion */}
          <div className="space-y-2 pt-2 border-t border-stone-100 dark:border-stone-800">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider">
                Included Chapters ({selectedChapters.length}/{subject.chapters.length})
              </label>
              <div className="flex items-center gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setSelectedChapters(subject.chapters.map(c => c.no))}
                  className="text-[#7a1818] dark:text-amber-400 hover:underline font-semibold cursor-pointer"
                >
                  Select All
                </button>
                <span className="text-stone-300 dark:text-stone-700">|</span>
                <button
                  type="button"
                  onClick={() => setSelectedChapters([1])}
                  className="text-stone-500 hover:underline cursor-pointer"
                >
                  Clear
                </button>
              </div>
            </div>

            <div className="max-h-44 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-1.5 p-2 bg-stone-50 dark:bg-stone-800/60 rounded-xl border border-stone-200 dark:border-stone-700 text-xs">
              {subject.chapters.map(ch => {
                const isChecked = selectedChapters.includes(ch.no);
                return (
                  <label
                    key={ch.no}
                    className={`flex items-center gap-2 p-1.5 rounded-lg cursor-pointer transition ${
                      isChecked ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 font-medium shadow-2xs' : 'text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {
                        setSelectedChapters(prev =>
                          isChecked ? prev.filter(n => n !== ch.no) : [...prev, ch.no]
                        );
                      }}
                      className="rounded text-[#7a1818] focus:ring-[#7a1818] h-3.5 w-3.5"
                    />
                    <span className="truncate">
                      Ch {ch.no}: {ch.name}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Start Buttons */}
          <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => startNewQuiz(quizLength, false)}
              className="py-3 px-4 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-xl shadow-md transition flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              Standard Practice Mode
            </button>
            <button
              type="button"
              onClick={() => startNewQuiz(quizLength, true)}
              className="py-3 px-4 bg-[#7a1818] hover:bg-[#601313] text-white font-bold rounded-xl shadow-md transition flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
            >
              <Maximize2 className="w-4 h-4 text-amber-300" />
              Distraction-Free Exam Mode
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Completed Results View
  if (isCompleted) {
    const answeredCount = Object.keys(userAnswers).length;

    return (
      <div className="max-w-3xl mx-auto space-y-6 pb-12">
        {/* Results Banner */}
        <div className="bg-stone-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-stone-800 text-center space-y-4">
          <div className="inline-flex p-3 bg-amber-500 text-stone-950 rounded-full shadow-lg">
            <Trophy className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Quiz Completed!
            </h1>
            <p className="text-xs text-stone-400">
              {subject.standard} {subject.name} · Practice Assessment
            </p>
          </div>

          {/* Big Score Card */}
          <div className="bg-stone-800/90 border border-stone-700 rounded-xl p-5 max-w-sm mx-auto flex items-center justify-around">
            <div className="text-center">
              <span className="text-3xl font-extrabold text-amber-400">
                {scoreResults.score}
              </span>
              <span className="text-xs text-stone-400 block font-semibold">
                Score / {scoreResults.maxScore}
              </span>
            </div>
            <div className="h-10 w-px bg-stone-700" />
            <div className="text-center">
              <span className="text-3xl font-extrabold text-emerald-400">
                {scoreResults.percent}%
              </span>
              <span className="text-xs text-stone-400 block font-semibold">
                Percentage
              </span>
            </div>
            <div className="h-10 w-px bg-stone-700" />
            <div className="text-center">
              <span className="text-xl font-bold text-stone-200">
                {formatTime(elapsedTime)}
              </span>
              <span className="text-xs text-stone-400 block font-semibold">
                Time Spent
              </span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex items-center justify-center gap-3 flex-wrap">
            <button
              type="button"
              onClick={() => startNewQuiz(quizLength)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl shadow-md transition cursor-pointer text-xs sm:text-sm"
            >
              <RotateCcw className="w-4 h-4" />
              Retake Another Quiz
            </button>
            {onGeneratePaper && (
              <button
                type="button"
                onClick={onGeneratePaper}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-white font-semibold rounded-xl border border-stone-700 transition cursor-pointer text-xs sm:text-sm"
              >
                <FileSpreadsheet className="w-4 h-4 text-amber-400" />
                Generate Full Question Paper
              </button>
            )}
          </div>
        </div>

        {/* Detailed Question Review List */}
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
          <h2 className="text-base font-bold text-stone-900 dark:text-stone-100 flex items-center justify-between">
            <span>Detailed Question Review</span>
            <span className="text-xs font-normal text-stone-500">
              Answered: {answeredCount}/{quizQuestions.length}
            </span>
          </h2>

          <div className="space-y-4">
            {quizQuestions.map((q, idx) => {
              const userAns = userAnswers[q.id];
              const isCorrect = q.type === 'mcq'
                ? userAns === q.correctOption
                : userAns === 'self_correct';
              const isPartial = q.type !== 'mcq' && userAns === 'self_partial';

              return (
                <div
                  key={q.id}
                  className={`p-4 rounded-xl border space-y-2 text-xs ${
                    isCorrect
                      ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/60'
                      : isPartial
                      ? 'bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/60'
                      : userAns
                      ? 'bg-red-50/50 dark:bg-red-950/20 border-red-200 dark:border-red-900/60'
                      : 'bg-stone-50 dark:bg-stone-800/60 border-stone-200 dark:border-stone-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-stone-900 dark:text-stone-100 bg-stone-200/80 dark:bg-stone-700 px-2 py-0.5 rounded">
                        Q{idx + 1}
                      </span>
                      <span className="text-stone-500 font-medium">
                        Ch {q.chapterNo}: {q.chapterName}
                      </span>
                      <span className="text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 px-1.5 py-0.5 rounded font-semibold text-[10px]">
                        {q.marks} Mark{q.marks > 1 ? 's' : ''}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {isCorrect && (
                        <span className="text-emerald-700 bg-emerald-100 font-bold px-2 py-0.5 rounded text-[10px] flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Correct (+{q.marks})
                        </span>
                      )}
                      {isPartial && (
                        <span className="text-amber-700 bg-amber-100 font-bold px-2 py-0.5 rounded text-[10px]">
                          Partial (+{q.marks * 0.5})
                        </span>
                      )}
                      {!isCorrect && !isPartial && userAns && (
                        <span className="text-red-700 bg-red-100 font-bold px-2 py-0.5 rounded text-[10px] flex items-center gap-1">
                          <XCircle className="w-3 h-3" /> Incorrect (0/{q.marks})
                        </span>
                      )}
                      {!userAns && (
                        <span className="text-stone-500 bg-stone-100 px-2 py-0.5 rounded text-[10px]">
                          Skipped
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Question Text */}
                  <p className="font-semibold text-stone-900 dark:text-stone-100 leading-relaxed">
                    {q.questionText}
                  </p>
                  {q.questionTextTamil && (
                    <p className="text-stone-600 dark:text-stone-300 font-tamil leading-relaxed">
                      {q.questionTextTamil}
                    </p>
                  )}

                  {/* Answer Box */}
                  <div className="mt-2 pt-2 border-t border-stone-200/70 dark:border-stone-700/70 text-stone-800 dark:text-stone-200">
                    <p className="font-bold text-stone-900 dark:text-stone-100">
                      Answer / Key: <span className="font-normal">{q.answer}</span>
                    </p>
                    {q.answerTamil && (
                      <p className="text-stone-600 dark:text-stone-400 font-tamil mt-0.5">
                        {q.answerTamil}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Active Question Card View
  const isMCQ = currentQ.type === 'mcq';
  const selectedAns = userAnswers[currentQ.id];
  const isAnswerRevealed = revealedAnswers[currentQ.id];
  const isFlagged = flaggedQuestions[currentQ.id];
  const difficulty = getQuestionDifficulty(currentQ);

  const handleSelectOption = (optKey: 'A' | 'B' | 'C' | 'D') => {
    setUserAnswers(prev => ({ ...prev, [currentQ.id]: optKey }));
  };

  const handleSelfRate = (rating: 'self_correct' | 'self_partial' | 'self_incorrect') => {
    setUserAnswers(prev => ({ ...prev, [currentQ.id]: rating }));
  };

  const containerClasses = isExamMode
    ? 'fixed inset-0 z-50 bg-stone-950 text-stone-100 p-4 sm:p-8 overflow-y-auto flex flex-col justify-between'
    : 'max-w-3xl mx-auto space-y-5 pb-12';

  const cardClasses = isExamMode
    ? 'max-w-3xl w-full mx-auto bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 my-auto'
    : 'bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6';

  return (
    <div className={containerClasses}>
      {/* Top Status & Navigation Header */}
      <div className={`${isExamMode ? 'max-w-3xl w-full mx-auto bg-stone-900/90 border border-stone-800' : 'bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800'} rounded-2xl p-4 shadow-sm space-y-3`}>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-extrabold uppercase tracking-wider bg-[#7a1818] text-amber-200 px-2.5 py-1 rounded-lg">
              Question {currentIndex + 1} of {quizQuestions.length}
            </span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
              difficulty === 'Easy' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' :
              difficulty === 'Medium' ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' : 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300'
            }`}>
              {difficulty}
            </span>
            {isExamMode && (
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full flex items-center gap-1">
                <Maximize2 className="w-3 h-3" /> Distraction-Free Exam
              </span>
            )}
          </div>

          {/* Quick controls: Flag, Language, Timer, Exam Mode Toggle */}
          <div className="flex items-center gap-2 text-xs">
            <div className="flex items-center gap-1 text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 px-2.5 py-1 rounded-lg font-mono font-semibold">
              ⏱️ {formatTime(elapsedTime)}
            </div>

            {/* Exam mode toggle button */}
            <button
              type="button"
              onClick={() => setIsExamMode(prev => !prev)}
              className={`p-1.5 rounded-lg border transition cursor-pointer flex items-center gap-1 ${
                isExamMode
                  ? 'bg-amber-400/20 border-amber-400 text-amber-300'
                  : 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 hover:text-stone-900'
              }`}
              title={isExamMode ? 'Exit Distraction-Free Exam Mode [Esc]' : 'Enter Distraction-Free Exam Mode'}
            >
              {isExamMode ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline text-[10px] font-bold">
                {isExamMode ? 'Exit Full Exam' : 'Exam Mode'}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setFlaggedQuestions(prev => ({ ...prev, [currentQ.id]: !prev[currentQ.id] }))}
              className={`p-1.5 rounded-lg border transition cursor-pointer ${
                isFlagged
                  ? 'bg-amber-100 border-amber-400 text-amber-800 font-bold'
                  : 'bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-400 hover:text-stone-700'
              }`}
              title={isFlagged ? 'Flagged for review' : 'Flag for review'}
            >
              <Flag className={`w-3.5 h-3.5 ${isFlagged ? 'fill-amber-500' : ''}`} />
            </button>

            {/* Quick language toggle */}
            <div className="hidden sm:inline-flex bg-stone-100 dark:bg-stone-800 p-0.5 rounded-lg border border-stone-200 dark:border-stone-700">
              <button
                type="button"
                onClick={() => setLocalLangMode('english')}
                className={`px-2 py-0.5 rounded-md text-[10px] font-semibold transition cursor-pointer ${
                  localLangMode === 'english' ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-2xs' : 'text-stone-600 dark:text-stone-400'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLocalLangMode('tamil')}
                className={`px-2 py-0.5 rounded-md text-[10px] font-semibold transition cursor-pointer ${
                  localLangMode === 'tamil' ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-2xs' : 'text-stone-600 dark:text-stone-400'
                }`}
              >
                தமிழ்
              </button>
              <button
                type="button"
                onClick={() => setLocalLangMode('bilingual')}
                className={`px-2 py-0.5 rounded-md text-[10px] font-semibold transition cursor-pointer ${
                  localLangMode === 'bilingual' ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-2xs' : 'text-stone-600 dark:text-stone-400'
                }`}
              >
                Both
              </button>
            </div>
          </div>
        </div>

        {/* Visual Progress Bar */}
        <div className="w-full h-2 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#7a1818] transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / quizQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Primary Question Card */}
      <div className={cardClasses}>
        {/* Chapter Header */}
        <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 border-b border-stone-100 dark:border-stone-800 pb-3">
          <div className="flex items-center gap-1.5 font-medium">
            <BookOpen className="w-4 h-4 text-[#7a1818] dark:text-amber-400" />
            <span>Chapter {currentQ.chapterNo}: {currentQ.chapterName}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-amber-900 dark:text-amber-300 bg-amber-100/80 dark:bg-amber-950/60 px-2 py-0.5 rounded">
              {currentQ.marks} Mark{currentQ.marks > 1 ? 's' : ''}
            </span>
          </div>
        </div>

        {/* Question Text */}
        <div className="space-y-2">
          {(localLangMode === 'english' || localLangMode === 'bilingual') && (
            <p className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 leading-relaxed">
              {currentQ.questionText}
            </p>
          )}

          {(localLangMode === 'tamil' || localLangMode === 'bilingual') && currentQ.questionTextTamil && (
            <p className="text-base sm:text-lg font-medium text-stone-700 dark:text-stone-300 font-tamil leading-relaxed">
              {currentQ.questionTextTamil}
            </p>
          )}

          {currentQ.imageUrl && (
            <div className="pt-2">
              <img
                src={currentQ.imageUrl}
                alt="Diagram"
                className="max-h-56 max-w-full rounded border border-stone-200 dark:border-stone-700 bg-white object-contain p-1 shadow-xs"
                referrerPolicy="no-referrer"
              />
            </div>
          )}
        </div>

        {/* MCQ Options (If MCQ) */}
        {isMCQ && currentQ.options && (
          <div className="space-y-2.5">
            {(['A', 'B', 'C', 'D'] as const).map(optKey => {
              const optText = currentQ.options?.[optKey];
              const optTextTamil = currentQ.optionsTamil?.[optKey];
              if (!optText) return null;

              const isChosen = selectedAns === optKey;
              const isCorrectAnswer = currentQ.correctOption === optKey;
              const hasAnswered = !!selectedAns;

              let btnStyle = isExamMode
                ? (isChosen ? 'bg-amber-500/20 border-amber-400 text-white ring-2 ring-amber-400/40' : 'bg-stone-800/80 border-stone-700 text-stone-200 hover:bg-stone-800 hover:border-amber-400')
                : 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:bg-stone-100 hover:border-amber-400';

              if (hasAnswered && !isExamMode) {
                if (isCorrectAnswer) {
                  btnStyle = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-950 dark:text-emerald-200 font-bold ring-2 ring-emerald-400/30';
                } else if (isChosen && !isCorrectAnswer) {
                  btnStyle = 'bg-red-50 dark:bg-red-950/40 border-red-500 text-red-950 dark:text-red-200 font-medium ring-2 ring-red-400/30';
                } else {
                  btnStyle = 'bg-stone-50 dark:bg-stone-800/50 border-stone-200 dark:border-stone-700 text-stone-400 opacity-60';
                }
              }

              return (
                <button
                  key={optKey}
                  type="button"
                  onClick={() => handleSelectOption(optKey)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-start justify-between gap-3 text-xs sm:text-sm ${btnStyle}`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                      hasAnswered && !isExamMode && isCorrectAnswer
                        ? 'bg-emerald-600 text-white'
                        : hasAnswered && !isExamMode && isChosen
                        ? 'bg-red-600 text-white'
                        : isChosen
                        ? 'bg-amber-500 text-stone-950 font-bold'
                        : 'bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-300'
                    }`}>
                      {optKey}
                    </span>
                    <div className="space-y-0.5">
                      {(localLangMode === 'english' || localLangMode === 'bilingual') && (
                        <p className="font-medium text-stone-900 dark:text-stone-100">{optText}</p>
                      )}
                      {(localLangMode === 'tamil' || localLangMode === 'bilingual') && optTextTamil && (
                        <p className="text-stone-600 dark:text-stone-400 font-tamil text-xs">{optTextTamil}</p>
                      )}
                      {currentQ.optionImages?.[optKey] && (
                        <div className="mt-2">
                          <img
                            src={currentQ.optionImages[optKey]}
                            alt={`Option ${optKey}`}
                            className="max-h-40 max-w-full rounded border border-stone-200 dark:border-stone-700 bg-white object-contain p-1 shadow-xs"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {hasAnswered && !isExamMode && isCorrectAnswer && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  )}
                  {hasAnswered && !isExamMode && isChosen && !isCorrectAnswer && (
                    <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Non-MCQ Interactive Card (2M, 3M, 5M) */}
        {!isMCQ && (
          <div className="space-y-4 pt-2 border-t border-stone-100 dark:border-stone-800">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                Self-Assessment Question
              </span>
              <button
                type="button"
                onClick={() => setRevealedAnswers(prev => ({ ...prev, [currentQ.id]: !prev[currentQ.id] }))}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#7a1818] dark:text-amber-400 hover:underline bg-[#7a1818]/10 dark:bg-amber-400/10 px-3 py-1.5 rounded-lg transition cursor-pointer"
              >
                {isAnswerRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                {isAnswerRevealed ? 'Hide Answer Key' : 'Reveal Solution / Key'}
              </button>
            </div>

            {/* Revealed Answer Box */}
            {isAnswerRevealed && (
              <div className="bg-stone-900 text-stone-100 rounded-xl p-4 sm:p-5 space-y-3 text-xs sm:text-sm border border-stone-800 animate-in fade-in duration-200">
                <p className="text-amber-400 font-bold uppercase tracking-wider text-[10px]">
                  Official Key & Expected Valuation Points:
                </p>
                <div className="whitespace-pre-line text-stone-200 leading-relaxed font-sans">
                  {currentQ.answer}
                </div>
                {currentQ.answerTamil && (
                  <div className="whitespace-pre-line text-amber-200/90 font-tamil leading-relaxed pt-2 border-t border-stone-800">
                    {currentQ.answerTamil}
                  </div>
                )}
              </div>
            )}

            {/* Self-Rating Buttons */}
            <div className="space-y-2 pt-2">
              <p className="text-xs text-stone-600 dark:text-stone-400 font-medium">
                How well did you know the answer to this question?
              </p>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => handleSelfRate('self_correct')}
                  className={`p-2.5 rounded-xl border text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1.5 ${
                    selectedAns === 'self_correct'
                      ? 'bg-emerald-600 border-emerald-700 text-white shadow'
                      : 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Knew It Well (+{currentQ.marks})
                </button>
                <button
                  type="button"
                  onClick={() => handleSelfRate('self_partial')}
                  className={`p-2.5 rounded-xl border text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1.5 ${
                    selectedAns === 'self_partial'
                      ? 'bg-amber-500 border-amber-600 text-stone-950 shadow'
                      : 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 hover:bg-amber-100'
                  }`}
                >
                  Partially (+{currentQ.marks * 0.5})
                </button>
                <button
                  type="button"
                  onClick={() => handleSelfRate('self_incorrect')}
                  className={`p-2.5 rounded-xl border text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1.5 ${
                    selectedAns === 'self_incorrect'
                      ? 'bg-red-600 border-red-700 text-white shadow'
                      : 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 hover:bg-red-100'
                  }`}
                >
                  <XCircle className="w-3.5 h-3.5" />
                  Need Revision (0)
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Explanation / Answer Key footer if MCQ answered (in normal mode) */}
        {isMCQ && selectedAns && !isExamMode && (
          <div className="bg-amber-50 dark:bg-stone-800 border border-amber-200 dark:border-stone-700 rounded-xl p-4 text-xs text-amber-950 dark:text-amber-200 space-y-1 animate-in fade-in duration-150">
            <p className="font-bold text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" />
              Correct Answer: {currentQ.correctOption}) {currentQ.options?.[currentQ.correctOption || 'A']}
            </p>
            {currentQ.answer && (
              <p className="text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
                {currentQ.answer}
              </p>
            )}
          </div>
        )}

        {/* Keyboard Shortcut hint in Exam mode */}
        {isExamMode && (
          <div className="text-[11px] text-stone-500 dark:text-stone-400 flex items-center justify-between border-t border-stone-800 pt-3">
            <span className="flex items-center gap-1">
              <Keyboard className="w-3 h-3" /> Shortcuts: Press <kbd className="px-1 bg-stone-800 rounded font-mono">1-4</kbd> or <kbd className="px-1 bg-stone-800 rounded font-mono">A-D</kbd> to answer, <kbd className="px-1 bg-stone-800 rounded font-mono">→</kbd> for Next
            </span>
            <span>Press <kbd className="px-1 bg-stone-800 rounded font-mono">Esc</kbd> to Exit Exam</span>
          </div>
        )}
      </div>

      {/* Bottom Step Navigation Bar */}
      <div className={`${isExamMode ? 'max-w-3xl w-full mx-auto' : ''} flex items-center justify-between gap-3 pt-2`}>
        <button
          type="button"
          onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
          disabled={currentIndex === 0}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 hover:bg-stone-50 text-stone-700 dark:text-stone-300 font-semibold text-xs rounded-xl shadow-xs transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Previous
        </button>

        <div className="flex items-center gap-2">
          {currentIndex < quizQuestions.length - 1 ? (
            <button
              type="button"
              onClick={() => setCurrentIndex(prev => Math.min(quizQuestions.length - 1, prev + 1))}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#7a1818] hover:bg-[#601313] text-white font-bold text-xs rounded-xl shadow-md transition cursor-pointer"
            >
              Next Question
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setIsCompleted(true)}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md transition cursor-pointer"
            >
              <Award className="w-4 h-4" />
              Finish & View Score
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
