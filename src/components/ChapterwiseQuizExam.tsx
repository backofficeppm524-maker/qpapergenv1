import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  GraduationCap, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ArrowRight, 
  ArrowLeft, 
  Award, 
  Trophy, 
  HelpCircle, 
  Flag, 
  Languages, 
  Check, 
  ChevronRight, 
  Flame, 
  Maximize2, 
  Minimize2, 
  BookOpen, 
  Printer, 
  Share2, 
  Play, 
  Pause, 
  AlertTriangle, 
  Sparkles,
  Sliders,
  Filter,
  CheckSquare,
  BarChart2,
  RefreshCw,
  ListChecks,
  Timer,
  Volume2,
  VolumeX,
  User,
  Zap,
  Medal,
  ExternalLink
} from 'lucide-react';
import { SubjectData, Question, LanguageMode, QuizScoreRecord } from '../types';

interface ChapterwiseQuizExamProps {
  subject: SubjectData;
  languageMode: LanguageMode;
  initialChapterNo?: number;
  onNavigate: (view: string) => void;
  onToggleDistractionFree?: (active: boolean) => void;
}

const STORAGE_LEADERBOARD_KEY = 'quiz_exam_leaderboard_scores';
const STORAGE_STUDENT_NAME_KEY = 'quiz_student_name';

// Extract standard correct option ('A' | 'B' | 'C' | 'D')
export function getCorrectOption(q: Question): 'A' | 'B' | 'C' | 'D' | null {
  if (q.correctOption && ['A', 'B', 'C', 'D'].includes(q.correctOption.toUpperCase())) {
    return q.correctOption.toUpperCase() as 'A' | 'B' | 'C' | 'D';
  }
  if (q.answer) {
    const trimmed = q.answer.trim();
    const match = trimmed.match(/^([A-D])[\)\.\:\s\-]/i) || trimmed.match(/^\(([A-D])\)/i);
    if (match) return match[1].toUpperCase() as 'A' | 'B' | 'C' | 'D';
    if (['A', 'B', 'C', 'D'].includes(trimmed.charAt(0).toUpperCase())) {
      return trimmed.charAt(0).toUpperCase() as 'A' | 'B' | 'C' | 'D';
    }
  }
  if (q.answerTamil) {
    const trimmed = q.answerTamil.trim();
    const match = trimmed.match(/^([A-D])[\)\.\:\s\-]/i) || trimmed.match(/^\(([A-D])\)/i);
    if (match) return match[1].toUpperCase() as 'A' | 'B' | 'C' | 'D';
  }
  return null;
}

// Audio tone synthesizer for smart time alerts (no external audio files needed)
function playAlertBeep(freq: number = 660) {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.35);
  } catch {
    // Graceful fallback if blocked by browser policy
  }
}

export const ChapterwiseQuizExam: React.FC<ChapterwiseQuizExamProps> = ({
  subject,
  languageMode: initialLangMode,
  initialChapterNo,
  onNavigate,
  onToggleDistractionFree
}) => {
  // Setup state
  // 0 = All Chapters, 1..N = Specific Chapter
  const [selectedChapterNo, setSelectedChapterNo] = useState<number>(initialChapterNo || 1);
  
  // Dedicated Language Toggle: 'tamil' | 'english'
  const [examLanguage, setExamLanguage] = useState<'english' | 'tamil'>(() => {
    return initialLangMode === 'tamil' ? 'tamil' : 'english';
  });

  // Custom Time Settings in minutes (0 = Untimed)
  const [timeLimitMinutes, setTimeLimitMinutes] = useState<number>(10);
  const [customMinutesInput, setCustomMinutesInput] = useState<string>('10');
  const [isCustomTime, setIsCustomTime] = useState<boolean>(false);

  // Student Name for Leaderboard tracking
  const [studentName, setStudentName] = useState<string>(() => {
    return localStorage.getItem(STORAGE_STUDENT_NAME_KEY) || 'Student';
  });
  const [isEditingStudentName, setIsEditingStudentName] = useState<boolean>(false);
  const [editNameInput, setEditNameInput] = useState<string>('');

  // Question Count selection
  const [questionCountType, setQuestionCountType] = useState<'all' | 'custom'>('all');
  const [customQuestionCount, setCustomQuestionCount] = useState<number>(10);

  // Exam configuration toggles
  const [shuffleQuestions, setShuffleQuestions] = useState<boolean>(true);
  const [shuffleOptions, setShuffleOptions] = useState<boolean>(false);
  const [enableSoundAlerts, setEnableSoundAlerts] = useState<boolean>(true);

  // Active Exam Lifecycle States: 'setup' | 'active' | 'completed'
  const [examState, setExamState] = useState<'setup' | 'active' | 'completed'>('setup');
  
  // Exam Questions & Student Responses
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [studentAnswers, setStudentAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  
  // Timer state
  const [secondsRemaining, setSecondsRemaining] = useState<number>(600);
  const [totalAllottedSeconds, setTotalAllottedSeconds] = useState<number>(600);
  const [isTimerPaused, setIsTimerPaused] = useState<boolean>(false);
  const [timeTakenSeconds, setTimeTakenSeconds] = useState<number>(0);
  
  // Leaderboard & High Score state
  const [isNewHighScore, setIsNewHighScore] = useState<boolean>(false);
  const [lastSavedRecordId, setLastSavedRecordId] = useState<string | null>(null);

  // Modals & UI Controls
  const [showSubmitModal, setShowSubmitModal] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'correct' | 'incorrect' | 'unattempted'>('all');
  const [shareToast, setShareToast] = useState<string | null>(null);
  const [isIncorrectSectionOpen, setIsIncorrectSectionOpen] = useState<boolean>(true);

  // Filter available 1-mark MCQ questions for the selected chapter or all chapters
  const availableMCQs = useMemo(() => {
    const mcqs = subject.questions.filter(q => q.marks === 1 && q.type === 'mcq');
    if (selectedChapterNo === 0) {
      return mcqs;
    }
    return mcqs.filter(q => q.chapterNo === selectedChapterNo);
  }, [subject, selectedChapterNo]);

  // Total MCQs in all individual chapters
  const chapterMcqCounts = useMemo(() => {
    const counts: Record<number, number> = {};
    subject.chapters.forEach(ch => {
      counts[ch.no] = subject.questions.filter(q => q.chapterNo === ch.no && q.marks === 1 && q.type === 'mcq').length;
    });
    return counts;
  }, [subject]);

  const totalSubjectMCQs = useMemo(() => {
    return subject.questions.filter(q => q.marks === 1 && q.type === 'mcq').length;
  }, [subject]);

  // Sync distraction free state with parent
  useEffect(() => {
    onToggleDistractionFree?.(examState === 'active' && isFullscreen);
  }, [examState, isFullscreen, onToggleDistractionFree]);

  // Timer interval & Smart Sound Alert trigger
  useEffect(() => {
    if (examState !== 'active' || isTimerPaused) return;

    const interval = setInterval(() => {
      setTimeTakenSeconds(prev => prev + 1);

      if (totalAllottedSeconds > 0) {
        setSecondsRemaining(prev => {
          // Play sound alerts at key checkpoints
          if (enableSoundAlerts) {
            if (prev === 60) playAlertBeep(520);
            else if (prev === 30) playAlertBeep(660);
            else if (prev === 10) playAlertBeep(880);
          }

          if (prev <= 1) {
            clearInterval(interval);
            // Auto submit when timer reaches 0
            handleCompleteExam();
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [examState, isTimerPaused, totalAllottedSeconds, enableSoundAlerts]);

  // Start Exam Function
  const handleStartExam = (overrideQuestions?: Question[]) => {
    let pool = overrideQuestions ? [...overrideQuestions] : [...availableMCQs];
    if (pool.length === 0) return;

    // Shuffle if enabled
    if (shuffleQuestions && !overrideQuestions) {
      pool = pool.sort(() => Math.random() - 0.5);
    }

    // Limit count
    const countToTake = (!overrideQuestions && questionCountType === 'custom')
      ? Math.min(customQuestionCount, pool.length)
      : pool.length;
    
    const selected = pool.slice(0, countToTake);

    // Calculate time
    let allocatedSecs = 0;
    if (timeLimitMinutes > 0) {
      allocatedSecs = timeLimitMinutes * 60;
    }

    setExamQuestions(selected);
    setCurrentIndex(0);
    setStudentAnswers({});
    setFlaggedQuestions({});
    setTotalAllottedSeconds(allocatedSecs);
    setSecondsRemaining(allocatedSecs);
    setTimeTakenSeconds(0);
    setIsTimerPaused(false);
    setShowSubmitModal(false);
    setIsNewHighScore(false);
    setExamState('active');
  };

  // Complete & Submit Exam and automatically persist to Leaderboard
  const handleCompleteExam = () => {
    setShowSubmitModal(false);
    setExamState('completed');

    // Compute and save immediately to Leaderboard
    const finalTaken = timeTakenSeconds;
    let correct = 0;
    let incorrect = 0;
    let unattempted = 0;

    examQuestions.forEach(q => {
      const studentAns = studentAnswers[q.id];
      const correctAns = getCorrectOption(q);
      if (!studentAns) {
        unattempted++;
      } else if (correctAns && studentAns === correctAns) {
        correct++;
      } else {
        incorrect++;
      }
    });

    const total = examQuestions.length;
    const score = correct;
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

    saveToLeaderboard(score, total, percentage, correct, incorrect, unattempted, finalTaken);
  };

  // Save score to localStorage Leaderboard
  const saveToLeaderboard = (
    resultScore: number,
    resultTotal: number,
    resultPercentage: number,
    correctCount: number,
    incorrectCount: number,
    unattemptedCount: number,
    timeTaken: number,
    customName?: string
  ) => {
    const nameToSave = (customName || studentName || 'Student').trim();
    const chObj = subject.chapters.find(c => c.no === selectedChapterNo);
    const chName = selectedChapterNo === 0 ? 'Full Syllabus' : (chObj?.name || `Chapter ${selectedChapterNo}`);
    const chNameTamil = selectedChapterNo === 0 ? 'முழு பாடத்திட்டம்' : (chObj?.nameTamil || undefined);

    let grade: QuizScoreRecord['grade'] = 'Needs Improvement';
    if (resultPercentage === 100) grade = 'Centum';
    else if (resultPercentage >= 85) grade = 'Distinction';
    else if (resultPercentage >= 70) grade = 'First Class';
    else if (resultPercentage >= 35) grade = 'Pass';

    const newRecord: QuizScoreRecord = {
      id: 'score_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
      studentName: nameToSave,
      subjectId: subject.id,
      subjectName: subject.name,
      chapterNo: selectedChapterNo,
      chapterName: chName,
      chapterNameTamil: chNameTamil,
      score: resultScore,
      total: resultTotal,
      percentage: resultPercentage,
      timeTakenSeconds: timeTaken,
      timeLimitMinutes: timeLimitMinutes,
      language: examLanguage,
      date: new Date().toISOString(),
      grade,
      accuracy: resultPercentage,
      correctCount,
      incorrectCount,
      unattemptedCount
    };

    try {
      const stored = localStorage.getItem(STORAGE_LEADERBOARD_KEY);
      const existing: QuizScoreRecord[] = stored ? JSON.parse(stored) : [];
      
      // Check if new personal best for this chapter
      const prevBest = existing
        .filter(s => (s.subjectId === subject.id || s.subjectName === subject.name) && s.chapterNo === selectedChapterNo)
        .sort((a, b) => b.percentage - a.percentage)[0];
      
      const isBest = !prevBest || resultPercentage > prevBest.percentage || (resultPercentage === prevBest.percentage && timeTaken < prevBest.timeTakenSeconds);
      setIsNewHighScore(isBest);

      const updated = [newRecord, ...existing];
      localStorage.setItem(STORAGE_LEADERBOARD_KEY, JSON.stringify(updated));
      localStorage.setItem(STORAGE_STUDENT_NAME_KEY, nameToSave);
      setLastSavedRecordId(newRecord.id);
    } catch (e) {
      console.error('Error saving score to leaderboard:', e);
    }
  };

  // Update student name on existing saved record
  const handleUpdateStudentName = () => {
    const trimmed = editNameInput.trim();
    if (!trimmed) return;

    setStudentName(trimmed);
    localStorage.setItem(STORAGE_STUDENT_NAME_KEY, trimmed);

    if (lastSavedRecordId) {
      try {
        const stored = localStorage.getItem(STORAGE_LEADERBOARD_KEY);
        if (stored) {
          const records: QuizScoreRecord[] = JSON.parse(stored);
          const updated = records.map(r => r.id === lastSavedRecordId ? { ...r, studentName: trimmed } : r);
          localStorage.setItem(STORAGE_LEADERBOARD_KEY, JSON.stringify(updated));
        }
      } catch (e) {
        console.error('Error updating student name:', e);
      }
    }

    setIsEditingStudentName(false);
    setShareToast(`Student name updated to "${trimmed}"`);
    setTimeout(() => setShareToast(null), 2500);
  };

  // Current Question
  const currentQuestion = examQuestions[currentIndex];

  // Score Calculation
  const examResult = useMemo(() => {
    if (examQuestions.length === 0) {
      return {
        total: 0,
        score: 0,
        percentage: 0,
        correctCount: 0,
        incorrectCount: 0,
        unattemptedCount: 0,
        questionResults: []
      };
    }

    let correct = 0;
    let incorrect = 0;
    let unattempted = 0;

    const details = examQuestions.map((q, idx) => {
      const studentAns = studentAnswers[q.id];
      const correctAns = getCorrectOption(q);
      const isAttempted = !!studentAns;
      const isCorrect = isAttempted && correctAns && studentAns === correctAns;

      if (!isAttempted) {
        unattempted++;
      } else if (isCorrect) {
        correct++;
      } else {
        incorrect++;
      }

      return {
        index: idx + 1,
        question: q,
        studentAnswer: studentAns,
        correctAnswer: correctAns,
        isAttempted,
        isCorrect
      };
    });

    const score = correct;
    const total = examQuestions.length;
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

    return {
      total,
      score,
      percentage,
      correctCount: correct,
      incorrectCount: incorrect,
      unattemptedCount: unattempted,
      questionResults: details
    };
  }, [examQuestions, studentAnswers]);

  // List of only missed questions for dedicated review
  const incorrectQuestionsList = useMemo(() => {
    return examResult.questionResults.filter(item => !item.isCorrect);
  }, [examResult]);

  // Format seconds to MM:SS
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remSecs.toString().padStart(2, '0')}`;
  };

  // Performance Badge & Assessment
  const getPerformanceBadge = (pct: number) => {
    if (pct === 100) return { label: 'Centum Score! 🌟', bg: 'bg-amber-100 text-amber-900 border-amber-300', grade: 'A+' };
    if (pct >= 85) return { label: 'Distinction 🏆', bg: 'bg-emerald-100 text-emerald-900 border-emerald-300', grade: 'A' };
    if (pct >= 70) return { label: 'First Class 🥇', bg: 'bg-blue-100 text-blue-900 border-blue-300', grade: 'B+' };
    if (pct >= 50) return { label: 'Good Effort 👍', bg: 'bg-purple-100 text-purple-900 border-purple-300', grade: 'B' };
    if (pct >= 35) return { label: 'Passed 📚', bg: 'bg-stone-200 text-stone-800 border-stone-300', grade: 'C' };
    return { label: 'Needs Practice ✍️', bg: 'bg-red-100 text-red-900 border-red-300', grade: 'D' };
  };

  // Jump to first unattempted question
  const handleJumpToNextUnanswered = () => {
    const nextUnansweredIdx = examQuestions.findIndex(q => !studentAnswers[q.id]);
    if (nextUnansweredIdx !== -1) {
      setCurrentIndex(nextUnansweredIdx);
    }
  };

  // Keyboard navigation for active exam
  useEffect(() => {
    if (examState !== 'active' || !currentQuestion) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === '1' || e.key === 'a' || e.key === 'A') {
        setStudentAnswers(prev => ({ ...prev, [currentQuestion.id]: 'A' }));
      } else if (e.key === '2' || e.key === 'b' || e.key === 'B') {
        setStudentAnswers(prev => ({ ...prev, [currentQuestion.id]: 'B' }));
      } else if (e.key === '3' || e.key === 'c' || e.key === 'C') {
        setStudentAnswers(prev => ({ ...prev, [currentQuestion.id]: 'C' }));
      } else if (e.key === '4' || e.key === 'd' || e.key === 'D') {
        setStudentAnswers(prev => ({ ...prev, [currentQuestion.id]: 'D' }));
      } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
        if (currentIndex < examQuestions.length - 1) {
          setCurrentIndex(prev => prev + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
          setCurrentIndex(prev => prev - 1);
        }
      } else if (e.key === 'f' || e.key === 'F') {
        setFlaggedQuestions(prev => ({ ...prev, [currentQuestion.id]: !prev[currentQuestion.id] }));
      } else if (e.key === 'c' || e.key === 'C') {
        // Clear response
        setStudentAnswers(prev => {
          const next = { ...prev };
          delete next[currentQuestion.id];
          return next;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [examState, currentQuestion, currentIndex, examQuestions.length]);

  // =========================================================================
  // VIEW 1: SETUP & CHAPTER CONFIGURATION
  // =========================================================================
  if (examState === 'setup') {
    const selectedChapterObj = subject.chapters.find(c => c.no === selectedChapterNo);

    return (
      <div className="space-y-6 max-w-5xl mx-auto pb-12">
        {/* Top Header & Breadcrumb */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="bg-red-800 text-amber-300 text-[11px] font-extrabold px-2.5 py-0.5 rounded tracking-wide uppercase">
                {subject.standard}
              </span>
              <span className="text-xs text-stone-500 font-medium">
                {subject.name} • {subject.board}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-stone-900 flex items-center gap-2.5">
              <GraduationCap className="w-8 h-8 text-red-800" />
              Chapterwise Quiz Exam
            </h1>
            <p className="text-xs sm:text-sm text-stone-600">
              Attend chapter-specific 1-mark MCQ online test with custom timing, Tamil/English medium switch, Smart Time Alerts, and auto Leaderboard tracking.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto flex-wrap">
            <button
              type="button"
              onClick={() => onNavigate('quiz-leaderboard')}
              className="px-3.5 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs rounded-xl transition cursor-pointer flex items-center gap-1.5 shadow-sm"
              title="View High Scores & Rankings"
            >
              <Trophy className="w-4 h-4 text-stone-950" />
              <span>Quiz Leaderboard</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('practice-quiz')}
              className="px-3.5 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs rounded-xl transition cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              10 Qs Quick Quiz
            </button>
            
            <button
              type="button"
              onClick={() => onNavigate('question-bank')}
              className="px-3.5 py-2 bg-stone-800 hover:bg-stone-900 text-white font-bold text-xs rounded-xl transition cursor-pointer flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Question Bank
            </button>
          </div>
        </div>

        {/* Global Configuration Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          
          {/* Card 1: Language Medium Toggle Switch */}
          <div className="bg-white border-2 border-amber-300/80 rounded-2xl p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <Languages className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-sm">Exam Medium</h3>
                  <p className="text-[11px] text-stone-500">Tamil vs English medium toggle</p>
                </div>
              </div>
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                Required
              </span>
            </div>

            {/* Toggle Switch Pill */}
            <div className="bg-stone-100 p-1.5 rounded-xl flex items-center gap-1 border border-stone-200">
              <button
                type="button"
                onClick={() => setExamLanguage('english')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  examLanguage === 'english'
                    ? 'bg-red-800 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                }`}
              >
                <span>English Medium</span>
                {examLanguage === 'english' && <Check className="w-3.5 h-3.5" />}
              </button>

              <button
                type="button"
                onClick={() => setExamLanguage('tamil')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  examLanguage === 'tamil'
                    ? 'bg-red-800 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                }`}
              >
                <span>தமிழ் வழி (Tamil)</span>
                {examLanguage === 'tamil' && <Check className="w-3.5 h-3.5" />}
              </button>
            </div>

            <div className="text-[11px] text-stone-500 bg-stone-50 p-2.5 rounded-lg border border-stone-200">
              {examLanguage === 'tamil' ? (
                <span> வினாக்கள், விடைக் குறிப்புகள் அனைத்தும் தமிழ் வழியில் தனித்துவமாகக் காட்டப்படும்.</span>
              ) : (
                <span> Questions and options will be presented in official English textbook medium.</span>
              )}
            </div>
          </div>

          {/* Card 2: Custom Time Setting & Smart Alerts */}
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-red-100 text-red-800 flex items-center justify-center font-bold">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-sm">Exam Timer & Alerts</h3>
                  <p className="text-[11px] text-stone-500">Custom time duration setting</p>
                </div>
              </div>
              <span className="text-[11px] font-black text-red-800 bg-red-50 px-2 py-0.5 rounded">
                {timeLimitMinutes === 0 ? 'Untimed' : `${timeLimitMinutes} Mins`}
              </span>
            </div>

            {/* Time Presets */}
            <div className="grid grid-cols-4 gap-1.5 text-xs">
              {[5, 10, 15, 20].map(mins => (
                <button
                  key={mins}
                  type="button"
                  onClick={() => {
                    setTimeLimitMinutes(mins);
                    setIsCustomTime(false);
                  }}
                  className={`py-1.5 px-2 rounded-lg font-bold transition text-center cursor-pointer ${
                    !isCustomTime && timeLimitMinutes === mins
                      ? 'bg-stone-900 text-amber-300 shadow-xs'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {mins}m
                </button>
              ))}
            </div>

            {/* Additional Options & Custom Input */}
            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => {
                  setTimeLimitMinutes(0);
                  setIsCustomTime(false);
                }}
                className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-bold transition cursor-pointer border ${
                  !isCustomTime && timeLimitMinutes === 0
                    ? 'bg-stone-900 text-white border-stone-900'
                    : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                }`}
              >
                Untimed Practice
              </button>

              <div className="flex items-center gap-1.5 flex-1">
                <input
                  type="number"
                  min="1"
                  max="180"
                  value={customMinutesInput}
                  onChange={e => {
                    setCustomMinutesInput(e.target.value);
                    const val = parseInt(e.target.value, 10);
                    if (!isNaN(val) && val > 0) {
                      setTimeLimitMinutes(val);
                      setIsCustomTime(true);
                    }
                  }}
                  placeholder="Min"
                  className="w-16 px-2 py-1.5 bg-stone-50 border border-stone-300 rounded-lg text-xs font-bold text-center focus:outline-none focus:ring-2 focus:ring-red-800"
                />
                <span className="text-[11px] font-semibold text-stone-500">Mins (Custom)</span>
              </div>
            </div>

            {/* Smart Audio Alert Toggle */}
            <div className="flex items-center justify-between pt-2 border-t border-stone-100 text-xs">
              <label className="flex items-center gap-2 cursor-pointer select-none text-stone-700 font-medium">
                <input
                  type="checkbox"
                  checked={enableSoundAlerts}
                  onChange={e => setEnableSoundAlerts(e.target.checked)}
                  className="rounded text-red-800 focus:ring-red-800 cursor-pointer"
                />
                <span>Smart Sound Chime at 1m & 30s</span>
              </label>
              {enableSoundAlerts ? <Volume2 className="w-3.5 h-3.5 text-emerald-600" /> : <VolumeX className="w-3.5 h-3.5 text-stone-400" />}
            </div>
          </div>

          {/* Card 3: Question Pool & Student Info */}
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-sm">Student Profile</h3>
                  <p className="text-[11px] text-stone-500">Leaderboard display name</p>
                </div>
              </div>
              <span className="text-[11px] font-black text-blue-800 bg-blue-50 px-2 py-0.5 rounded truncate max-w-[100px]">
                {studentName}
              </span>
            </div>

            {/* Name Input */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-stone-600">Your Name (for Leaderboard):</label>
              <div className="flex items-center gap-1.5">
                <input
                  type="text"
                  value={studentName}
                  onChange={e => {
                    setStudentName(e.target.value);
                    localStorage.setItem(STORAGE_STUDENT_NAME_KEY, e.target.value);
                  }}
                  placeholder="Enter Student Name"
                  className="w-full px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-lg text-xs font-bold focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Question Count Selection */}
            <div className="space-y-1 pt-1">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-bold text-stone-600">Question Pool:</span>
                <span className="font-bold text-stone-900">
                  {questionCountType === 'all' ? `All (${availableMCQs.length} Qs)` : `${Math.min(customQuestionCount, availableMCQs.length)} Qs`}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 text-xs">
                <button
                  type="button"
                  onClick={() => setQuestionCountType('all')}
                  className={`py-1 px-2 rounded-lg font-bold transition text-center cursor-pointer text-[11px] ${
                    questionCountType === 'all'
                      ? 'bg-blue-700 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  All ({availableMCQs.length})
                </button>
                {[10, 15].map(cnt => (
                  <button
                    key={cnt}
                    type="button"
                    onClick={() => {
                      setQuestionCountType('custom');
                      setCustomQuestionCount(cnt);
                    }}
                    className={`py-1 px-2 rounded-lg font-bold transition text-center cursor-pointer text-[11px] ${
                      questionCountType === 'custom' && customQuestionCount === cnt
                        ? 'bg-blue-700 text-white shadow-xs'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {cnt} Qs
                  </button>
                ))}
              </div>
            </div>

            {/* Shuffle Options */}
            <div className="flex items-center justify-between pt-1 text-xs border-t border-stone-100">
              <label className="flex items-center gap-2 cursor-pointer select-none text-stone-700 font-medium">
                <input
                  type="checkbox"
                  checked={shuffleQuestions}
                  onChange={e => setShuffleQuestions(e.target.checked)}
                  className="rounded text-red-800 focus:ring-red-800 cursor-pointer"
                />
                <span>Shuffle Questions</span>
              </label>
            </div>
          </div>
        </div>

        {/* Section 2: Chapter Selection Grid */}
        <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
            <div>
              <h2 className="font-extrabold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-red-800" />
                Select Chapter for Quiz Exam
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Choose an individual chapter or take the full syllabus comprehensive test ({totalSubjectMCQs} total MCQs available)
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSelectedChapterNo(0)}
              className={`px-3.5 py-1.5 rounded-xl font-black text-xs transition cursor-pointer flex items-center gap-1.5 ${
                selectedChapterNo === 0
                  ? 'bg-amber-500 text-stone-950 shadow-xs'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-800'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Full Syllabus ({totalSubjectMCQs} MCQs)
            </button>
          </div>

          {/* Chapter Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {subject.chapters.map(ch => {
              const count = chapterMcqCounts[ch.no] || 0;
              const isSelected = selectedChapterNo === ch.no;

              return (
                <button
                  key={ch.no}
                  type="button"
                  onClick={() => setSelectedChapterNo(ch.no)}
                  className={`p-3.5 rounded-xl text-left border-2 transition-all cursor-pointer flex flex-col justify-between gap-2 relative ${
                    isSelected
                      ? 'bg-red-50/70 border-red-800 shadow-sm ring-2 ring-red-800/20'
                      : 'bg-stone-50/70 hover:bg-stone-100 border-stone-200 text-stone-800'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 w-full">
                    <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                      isSelected ? 'bg-red-800 text-white' : 'bg-stone-200 text-stone-700'
                    }`}>
                      Chapter {ch.no}
                    </span>
                    <span className="text-[11px] font-bold text-stone-500">
                      {count} MCQs
                    </span>
                  </div>

                  <p className="font-bold text-xs line-clamp-2 text-stone-900 leading-snug">
                    {examLanguage === 'tamil' && ch.nameTamil ? ch.nameTamil : ch.name}
                  </p>

                  <div className="text-[10px] text-stone-400 font-medium">
                    1-Mark Question Bank
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 3: Summary Bar & Action Button */}
        <div className="bg-stone-900 text-white rounded-2xl p-6 shadow-xl border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="bg-amber-500 text-stone-950 font-black text-xs px-2.5 py-0.5 rounded">
                Ready to Attend
              </span>
              <span className="text-stone-300 text-xs font-bold">
                {selectedChapterNo === 0 ? 'Full Syllabus' : `Chapter ${selectedChapterNo}`}
              </span>
            </div>
            <p className="text-sm text-stone-200 font-semibold">
              {availableMCQs.length} MCQs Available • {timeLimitMinutes === 0 ? 'Untimed Practice' : `${timeLimitMinutes} Mins Time Limit`} • {examLanguage === 'tamil' ? 'தமிழ் வழி' : 'English Medium'}
            </p>
          </div>

          <button
            type="button"
            disabled={availableMCQs.length === 0}
            onClick={() => handleStartExam()}
            className={`px-8 py-3.5 rounded-xl font-black text-sm transition-all flex items-center gap-2 shadow-lg cursor-pointer ${
              availableMCQs.length === 0
                ? 'bg-stone-700 text-stone-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-amber-500 to-amber-400 text-stone-950 hover:from-amber-400 hover:to-amber-300 hover:scale-102 shadow-amber-500/20'
            }`}
          >
            <Play className="w-5 h-5 fill-stone-950" />
            <span>Start Chapterwise Exam Now</span>
          </button>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 2: ACTIVE CBT EXAM INTERFACE WITH SMART TIME ALERT
  // =========================================================================
  if (examState === 'active' && currentQuestion) {
    const answeredCount = Object.keys(studentAnswers).length;
    const totalQuestions = examQuestions.length;
    const unansweredCount = totalQuestions - answeredCount;
    const progressPct = Math.round((answeredCount / totalQuestions) * 100);
    const selectedOption = studentAnswers[currentQuestion.id];
    const isCurrentFlagged = flaggedQuestions[currentQuestion.id];

    // Smart Time Alert Calculations
    const percentTimeRemaining = totalAllottedSeconds > 0 ? (secondsRemaining / totalAllottedSeconds) * 100 : 100;
    const isTimerCritical = totalAllottedSeconds > 0 && (secondsRemaining <= 60 || percentTimeRemaining <= 10);
    const isTimerWarning = totalAllottedSeconds > 0 && !isTimerCritical && (secondsRemaining <= 180 || percentTimeRemaining <= 25);
    const isTimerCaution = totalAllottedSeconds > 0 && !isTimerCritical && !isTimerWarning && percentTimeRemaining <= 50;

    // Get current question text based on active language
    const currentQText = examLanguage === 'tamil' && currentQuestion.questionTextTamil
      ? currentQuestion.questionTextTamil
      : currentQuestion.questionText;

    const currentOptions = examLanguage === 'tamil' && currentQuestion.optionsTamil
      ? currentQuestion.optionsTamil
      : currentQuestion.options;

    return (
      <div className={`space-y-4 max-w-5xl mx-auto pb-16 animate-fade-in ${isFullscreen ? 'p-2' : ''}`}>
        
        {/* Sticky Exam Top Bar */}
        <div className="bg-stone-900 text-white rounded-2xl p-4 shadow-lg border border-stone-800 sticky top-2 z-30 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Chapter / Subject Info */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="bg-red-700 text-amber-300 font-extrabold text-[10px] px-2 py-0.5 rounded">
                  {selectedChapterNo === 0 ? 'Full Syllabus' : `Chapter ${currentQuestion.chapterNo}`}
                </span>
                <span className="text-xs text-stone-300 font-bold truncate max-w-[200px] sm:max-w-xs">
                  {examLanguage === 'tamil' && currentQuestion.chapterNameTamil ? currentQuestion.chapterNameTamil : currentQuestion.chapterName}
                </span>
              </div>
              <p className="text-[11px] text-stone-400">
                Question <span className="text-amber-400 font-bold">{currentIndex + 1}</span> of {totalQuestions} • Answered: {answeredCount}/{totalQuestions}
              </p>
            </div>
          </div>

          {/* Controls: Smart Color-Changing Timer + Language Switch + Actions */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            
            {/* Smart Color-Changing Live Timer */}
            {totalAllottedSeconds > 0 ? (
              <div 
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-mono text-sm font-black border transition-all duration-300 ${
                  isTimerCritical
                    ? 'bg-red-950 text-red-100 border-red-500 shadow-lg shadow-red-950/60 ring-2 ring-red-400 animate-pulse'
                    : isTimerWarning
                    ? 'bg-orange-950 text-orange-200 border-orange-500 shadow-md shadow-orange-950/40 animate-pulse'
                    : isTimerCaution
                    ? 'bg-amber-950/80 text-amber-300 border-amber-600'
                    : 'bg-stone-800 text-stone-100 border-stone-700'
                }`}
                title={
                  isTimerCritical 
                    ? 'CRITICAL ALERT: Under 60 seconds left!' 
                    : isTimerWarning 
                    ? 'WARNING: Under 25% time left!' 
                    : 'Time Remaining'
                }
              >
                <Clock className={`w-4 h-4 ${
                  isTimerCritical 
                    ? 'text-red-400 animate-spin' 
                    : isTimerWarning 
                    ? 'text-orange-400 animate-bounce' 
                    : 'text-amber-400'
                }`} />
                <span>{formatTime(secondsRemaining)}</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 bg-stone-800 text-stone-200 px-3 py-1.5 rounded-xl text-xs font-bold border border-stone-700">
                <Timer className="w-3.5 h-3.5 text-blue-400" />
                <span>{formatTime(timeTakenSeconds)}</span>
              </div>
            )}

            {/* Sound Toggle */}
            <button
              type="button"
              onClick={() => setEnableSoundAlerts(prev => !prev)}
              className="p-2 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-xl border border-stone-700 transition cursor-pointer"
              title={enableSoundAlerts ? 'Sound Alerts Enabled' : 'Sound Alerts Muted'}
            >
              {enableSoundAlerts ? <Volume2 className="w-3.5 h-3.5 text-emerald-400" /> : <VolumeX className="w-3.5 h-3.5 text-stone-500" />}
            </button>

            {/* Language Quick Toggle Switch during exam */}
            <div className="bg-stone-800 p-1 rounded-xl flex items-center border border-stone-700">
              <button
                type="button"
                onClick={() => setExamLanguage('english')}
                className={`px-2 py-1 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                  examLanguage === 'english'
                    ? 'bg-red-700 text-white'
                    : 'text-stone-400 hover:text-white'
                }`}
                title="Switch to English question text"
              >
                ENG
              </button>
              <button
                type="button"
                onClick={() => setExamLanguage('tamil')}
                className={`px-2 py-1 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                  examLanguage === 'tamil'
                    ? 'bg-red-700 text-white'
                    : 'text-stone-400 hover:text-white'
                }`}
                title="தமிழுக்கு மாற்றுக"
              >
                தமிழ்
              </button>
            </div>

            {/* Finish Exam Button */}
            <button
              type="button"
              onClick={() => setShowSubmitModal(true)}
              className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs rounded-xl transition cursor-pointer flex items-center gap-1 shadow-sm"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Submit</span>
            </button>
          </div>
        </div>

        {/* Smart Time Alert Visual Warning Banners */}
        {isTimerCritical ? (
          <div className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white px-4 py-2.5 rounded-2xl text-xs font-black flex flex-wrap items-center justify-between gap-2 shadow-lg animate-pulse border border-red-400">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-300 shrink-0 animate-bounce" />
              <span>🚨 Smart Time Alert: Only {formatTime(secondsRemaining)} remaining! Review your answers now.</span>
            </div>
            {unansweredCount > 0 && (
              <button
                type="button"
                onClick={handleJumpToNextUnanswered}
                className="px-3 py-1 bg-amber-300 text-stone-950 rounded-lg text-[11px] font-black hover:bg-amber-200 cursor-pointer shadow-xs"
              >
                Jump to Unanswered ({unansweredCount}) &rarr;
              </button>
            )}
          </div>
        ) : isTimerWarning ? (
          <div className="bg-orange-500/15 border border-orange-400/40 text-orange-200 px-4 py-2 rounded-2xl text-xs font-bold flex flex-wrap items-center justify-between gap-2 shadow-xs">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-400 shrink-0" />
              <span>⚠️ Smart Time Warning: Under 25% time left ({formatTime(secondsRemaining)} remaining).</span>
            </div>
            {unansweredCount > 0 && (
              <span className="text-[11px] text-orange-300 font-semibold">
                {unansweredCount} unattempted questions left
              </span>
            )}
          </div>
        ) : null}

        {/* Linear Progress Bar */}
        <div className="w-full bg-stone-200 rounded-full h-1.5 overflow-hidden">
          <div 
            className="bg-amber-500 h-full transition-all duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        {/* Main Exam Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          
          {/* Question & Options Workspace (3 Cols) */}
          <div className="lg:col-span-3 bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 flex flex-col justify-between min-h-[460px]">
            <div className="space-y-6">
              
              {/* Question Metadata Header */}
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-red-100 text-red-800 font-black text-sm flex items-center justify-center">
                    {currentIndex + 1}
                  </span>
                  <span className="text-xs font-bold text-stone-500 uppercase tracking-wide">
                    1 Mark MCQ • Book-Back Question
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setFlaggedQuestions(prev => ({ ...prev, [currentQuestion.id]: !prev[currentQuestion.id] }))}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer border ${
                    isCurrentFlagged
                      ? 'bg-amber-100 text-amber-900 border-amber-300'
                      : 'bg-stone-100 text-stone-600 border-stone-200 hover:bg-stone-200'
                  }`}
                >
                  <Flag className={`w-3.5 h-3.5 ${isCurrentFlagged ? 'fill-amber-600 text-amber-600' : ''}`} />
                  <span>{isCurrentFlagged ? 'Marked for Review' : 'Mark for Review'}</span>
                </button>
              </div>

              {/* Question Text */}
              <div className="space-y-2">
                <h2 className="text-base sm:text-lg font-bold text-stone-900 leading-relaxed">
                  {currentQText}
                </h2>

                {/* Subtitle bilingual hint if present */}
                {examLanguage === 'tamil' && currentQuestion.questionText && (
                  <p className="text-xs text-stone-400 italic">
                    {currentQuestion.questionText}
                  </p>
                )}
                {examLanguage === 'english' && currentQuestion.questionTextTamil && (
                  <p className="text-xs text-stone-400 italic">
                    {currentQuestion.questionTextTamil}
                  </p>
                )}
                {currentQuestion.imageUrl && (
                  <div className="pt-2">
                    <img
                      src={currentQuestion.imageUrl}
                      alt="Diagram"
                      className="max-h-56 max-w-full rounded border border-stone-200 bg-white object-contain p-1"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
              </div>

              {/* Multiple Choice Options (A, B, C, D) */}
              <div className="space-y-2.5 pt-2">
                {currentOptions && (['A', 'B', 'C', 'D'] as const).map(optKey => {
                  const optText = currentOptions[optKey];
                  if (!optText) return null;
                  const isSelected = selectedOption === optKey;

                  return (
                    <button
                      key={optKey}
                      type="button"
                      onClick={() => setStudentAnswers(prev => ({ ...prev, [currentQuestion.id]: optKey }))}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between gap-3 group ${
                        isSelected
                          ? 'bg-amber-50/90 border-amber-500 shadow-sm ring-2 ring-amber-400/20'
                          : 'bg-stone-50/60 hover:bg-stone-100/80 border-stone-200 hover:border-stone-300 text-stone-800'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className={`w-7 h-7 rounded-lg font-black text-xs flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'bg-amber-500 text-stone-950 shadow-xs'
                            : 'bg-stone-200 text-stone-700 group-hover:bg-stone-300'
                        }`}>
                          {optKey}
                        </span>
                        <div className="space-y-1">
                          <span className={`text-xs sm:text-sm font-semibold block ${isSelected ? 'text-stone-950 font-bold' : 'text-stone-800'}`}>
                            {optText}
                          </span>
                          {currentQuestion.optionImages?.[optKey] && (
                            <div className="mt-2">
                              <img
                                src={currentQuestion.optionImages[optKey]}
                                alt={`Option ${optKey}`}
                                className="max-h-40 max-w-full rounded border border-stone-200 bg-white object-contain p-1 shadow-xs"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        isSelected ? 'border-amber-600 bg-amber-600 text-white' : 'border-stone-300'
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Action Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-stone-100 pt-4 mt-6">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                    currentIndex === 0
                      ? 'bg-stone-100 text-stone-400 cursor-not-allowed'
                      : 'bg-stone-200 hover:bg-stone-300 text-stone-800'
                  }`}
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>

                {selectedOption && (
                  <button
                    type="button"
                    onClick={() => {
                      setStudentAnswers(prev => {
                        const next = { ...prev };
                        delete next[currentQuestion.id];
                        return next;
                      });
                    }}
                    className="px-3 py-2 text-stone-500 hover:text-red-700 hover:bg-red-50 rounded-xl text-xs font-semibold transition cursor-pointer"
                  >
                    Clear Response
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                {currentIndex < totalQuestions - 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentIndex(prev => prev + 1)}
                    className="px-5 py-2.5 bg-red-800 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <span>Next Question</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowSubmitModal(true)}
                    className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 rounded-xl text-xs font-black transition flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <span>Submit & Finish Exam</span>
                    <Check className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Question Palette Drawer / Sidebar (1 Col) */}
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm space-y-4">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                <ListChecks className="w-4 h-4 text-red-800" />
                Question Palette
              </h3>
              <p className="text-[11px] text-stone-500">
                Click any number to jump directly
              </p>
            </div>

            {/* Quick Status Legend */}
            <div className="grid grid-cols-2 gap-1.5 text-[10px] font-semibold text-stone-600 bg-stone-50 p-2 rounded-xl border border-stone-200">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-emerald-600"></span>
                <span>Answered ({answeredCount})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-stone-200"></span>
                <span>Unattempted ({unansweredCount})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-amber-400"></span>
                <span>Flagged ({Object.values(flaggedQuestions).filter(Boolean).length})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded border-2 border-red-800 bg-white"></span>
                <span>Current Q</span>
              </div>
            </div>

            {/* Numbers Grid */}
            <div className="grid grid-cols-5 gap-1.5 max-h-72 overflow-y-auto pr-1">
              {examQuestions.map((q, idx) => {
                const isAnswered = !!studentAnswers[q.id];
                const isFlagged = !!flaggedQuestions[q.id];
                const isCurrent = idx === currentIndex;

                let btnBg = 'bg-stone-100 text-stone-700 hover:bg-stone-200';
                if (isAnswered && isFlagged) {
                  btnBg = 'bg-purple-600 text-white';
                } else if (isAnswered) {
                  btnBg = 'bg-emerald-600 text-white';
                } else if (isFlagged) {
                  btnBg = 'bg-amber-400 text-stone-950 font-black';
                }

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-9 rounded-lg font-bold text-xs transition cursor-pointer flex items-center justify-center relative ${btnBg} ${
                      isCurrent ? 'ring-2 ring-red-800 ring-offset-1 font-black shadow-xs' : ''
                    }`}
                  >
                    {idx + 1}
                    {isFlagged && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full border border-white" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Keyboard Shortcuts Help */}
            <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200 text-[10px] text-stone-500 space-y-1">
              <p className="font-bold text-stone-700">Keyboard Shortcuts:</p>
              <p>• 1, 2, 3, 4 or A, B, C, D: Select Option</p>
              <p>• → / Enter: Next • ←: Previous</p>
              <p>• F: Flag for Review • C: Clear Selection</p>
            </div>
          </div>
        </div>

        {/* Submit Confirmation Modal */}
        {showSubmitModal && (
          <div 
            className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setShowSubmitModal(false)}
          >
            <div 
              className="bg-white rounded-2xl shadow-2xl border border-stone-200 max-w-md w-full p-6 space-y-5 animate-scale-up"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-900">Submit Quiz Exam?</h3>
                  <p className="text-xs text-stone-500">Review your exam summary before submitting</p>
                </div>
              </div>

              {/* Summary Stats Table */}
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-stone-600">Total Questions:</span>
                  <span className="font-bold text-stone-900">{totalQuestions}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-700 font-semibold">Questions Answered:</span>
                  <span className="font-extrabold text-emerald-700">{answeredCount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">Unattempted:</span>
                  <span className="font-bold text-stone-700">{unansweredCount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-amber-700 font-semibold">Marked for Review:</span>
                  <span className="font-bold text-amber-700">{Object.values(flaggedQuestions).filter(Boolean).length}</span>
                </div>
                <div className="flex items-center justify-between border-t border-stone-200 pt-2">
                  <span className="text-stone-600">Time Spent:</span>
                  <span className="font-mono font-bold text-stone-900">{formatTime(timeTakenSeconds)}</span>
                </div>
              </div>

              <p className="text-xs text-stone-600">
                Are you sure you want to finish the exam? Your answers will be locked, detailed valuation with solution keys will be displayed, and your score will be added to the Leaderboard.
              </p>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowSubmitModal(false)}
                  className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-xs rounded-xl transition cursor-pointer"
                >
                  Resume Exam
                </button>
                <button
                  type="button"
                  onClick={handleCompleteExam}
                  className="px-5 py-2 bg-red-800 hover:bg-red-700 text-white font-bold text-xs rounded-xl transition cursor-pointer flex items-center gap-1.5 shadow-sm"
                >
                  <Check className="w-4 h-4" />
                  <span>Yes, Submit Exam</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // =========================================================================
  // VIEW 3: COMPREHENSIVE SCORECARD, REVIEW INCORRECT ANSWERS & LEADERBOARD
  // =========================================================================
  if (examState === 'completed') {
    const badge = getPerformanceBadge(examResult.percentage);
    const avgTimePerQuestion = examResult.total > 0 
      ? (timeTakenSeconds / examResult.total).toFixed(1) 
      : '0';

    // Filter results based on selected tab
    const filteredReview = examResult.questionResults.filter(item => {
      if (reviewFilter === 'correct') return item.isCorrect;
      if (reviewFilter === 'incorrect') return item.isAttempted && !item.isCorrect;
      if (reviewFilter === 'unattempted') return !item.isAttempted;
      return true;
    });

    const handlePrintScorecard = () => {
      window.print();
    };

    return (
      <div className="space-y-6 max-w-5xl mx-auto pb-16 animate-fade-in">
        
        {/* Share / Copy toast */}
        {shareToast && (
          <div className="fixed bottom-6 right-6 bg-stone-900 text-white px-4 py-2.5 rounded-xl shadow-xl z-50 flex items-center gap-2 text-xs font-bold">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{shareToast}</span>
          </div>
        )}

        {/* Top Celebration / Scorecard Hero Card */}
        <div className="bg-white border-2 border-stone-200 rounded-3xl p-6 sm:p-8 shadow-md space-y-6 relative overflow-hidden">
          
          {/* High Score / Leaderboard Ribbon */}
          {isNewHighScore && (
            <div className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-stone-950 px-4 py-1.5 rounded-xl text-xs font-black flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-stone-950" />
                <span>🎉 New Personal Best High Score for this Chapter! Added to Leaderboard.</span>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('quiz-leaderboard')}
                className="text-[11px] underline font-extrabold hover:text-stone-800 cursor-pointer"
              >
                View Leaderboard &rarr;
              </button>
            </div>
          )}

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            
            {/* Score & Badge Details */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="bg-red-800 text-amber-300 text-xs font-extrabold px-2.5 py-0.5 rounded tracking-wide uppercase">
                  {selectedChapterNo === 0 ? 'Full Syllabus' : `Chapter ${selectedChapterNo}`}
                </span>
                <span className={`text-xs font-black px-2.5 py-0.5 rounded border ${badge.bg}`}>
                  {badge.label}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-stone-900">
                Exam Completed & Valued!
              </h1>
              
              {/* Student Name Editor */}
              <div className="flex items-center gap-2 text-xs text-stone-600">
                <span>Student:</span>
                {isEditingStudentName ? (
                  <div className="flex items-center gap-1.5">
                    <input
                      type="text"
                      value={editNameInput}
                      onChange={e => setEditNameInput(e.target.value)}
                      placeholder="Enter name"
                      className="px-2 py-0.5 bg-stone-50 border border-stone-300 rounded text-xs font-bold text-stone-900"
                    />
                    <button
                      type="button"
                      onClick={handleUpdateStudentName}
                      className="px-2 py-0.5 bg-amber-500 text-stone-950 text-[11px] font-bold rounded cursor-pointer"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditingStudentName(false)}
                      className="px-2 py-0.5 bg-stone-200 text-stone-700 text-[11px] rounded cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-stone-900">{studentName}</span>
                    <button
                      type="button"
                      onClick={() => {
                        setEditNameInput(studentName);
                        setIsEditingStudentName(true);
                      }}
                      className="text-stone-400 hover:text-amber-700 text-[10px] underline cursor-pointer"
                    >
                      Edit
                    </button>
                  </div>
                )}
                <span>•</span>
                <span>{subject.name} ({examLanguage === 'tamil' ? 'தமிழ் வழி' : 'English Medium'})</span>
              </div>
            </div>

            {/* Big Marks Circle / Pill */}
            <div className="flex items-center gap-4 self-center md:self-auto bg-amber-50 border border-amber-200 p-4 rounded-2xl">
              <div className="text-center">
                <span className="text-3xl sm:text-4xl font-black text-red-800 leading-none">
                  {examResult.score}
                </span>
                <span className="text-base sm:text-lg font-bold text-stone-500">
                  /{examResult.total}
                </span>
                <p className="text-[11px] font-extrabold text-stone-600 uppercase tracking-wider mt-0.5">
                  Marks Scored
                </p>
              </div>

              <div className="w-px h-12 bg-amber-200" />

              <div className="text-center">
                <span className="text-3xl sm:text-4xl font-black text-emerald-700 leading-none">
                  {examResult.percentage}%
                </span>
                <p className="text-[11px] font-extrabold text-stone-600 uppercase tracking-wider mt-0.5">
                  Accuracy
                </p>
              </div>
            </div>
          </div>

          {/* Time & Performance Analytics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            
            {/* Metric 1: Time Spent */}
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-3.5 space-y-1">
              <div className="flex items-center gap-1.5 text-stone-500 text-xs">
                <Clock className="w-3.5 h-3.5 text-red-700" />
                <span className="font-semibold">Time Attended</span>
              </div>
              <p className="text-lg font-black text-stone-900 font-mono">
                {formatTime(timeTakenSeconds)}
              </p>
              <p className="text-[10px] text-stone-400">
                {totalAllottedSeconds > 0 ? `Out of ${formatTime(totalAllottedSeconds)} allotted` : 'Untimed test'}
              </p>
            </div>

            {/* Metric 2: Average Speed */}
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-3.5 space-y-1">
              <div className="flex items-center gap-1.5 text-stone-500 text-xs">
                <Flame className="w-3.5 h-3.5 text-amber-600" />
                <span className="font-semibold">Avg Speed / Q</span>
              </div>
              <p className="text-lg font-black text-stone-900 font-mono">
                {avgTimePerQuestion}s
              </p>
              <p className="text-[10px] text-stone-400">
                Target: &lt; 60s per MCQ
              </p>
            </div>

            {/* Metric 3: Correct Answers */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-800 text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span className="font-semibold">Correct Answers</span>
              </div>
              <p className="text-lg font-black text-emerald-700">
                {examResult.correctCount} <span className="text-xs font-normal text-emerald-800">Qs</span>
              </p>
              <p className="text-[10px] text-emerald-600">
                +1 Mark each
              </p>
            </div>

            {/* Metric 4: Incorrect & Unattempted */}
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-3.5 space-y-1">
              <div className="flex items-center gap-1.5 text-rose-800 text-xs">
                <XCircle className="w-3.5 h-3.5 text-rose-600" />
                <span className="font-semibold">Wrong / Skipped</span>
              </div>
              <p className="text-lg font-black text-rose-700">
                {examResult.incorrectCount} <span className="text-xs font-normal text-stone-500">wrong</span>, {examResult.unattemptedCount} <span className="text-xs font-normal text-stone-500">skip</span>
              </p>
              <p className="text-[10px] text-rose-600">
                Review solutions below
              </p>
            </div>
          </div>

          {/* Action Buttons Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-stone-200">
            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => handleStartExam()}
                className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold text-xs rounded-xl transition cursor-pointer flex items-center gap-1.5 shadow-sm"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake This Chapter</span>
              </button>

              <button
                type="button"
                onClick={() => setExamState('setup')}
                className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs rounded-xl transition cursor-pointer flex items-center gap-1.5"
              >
                <BookOpen className="w-3.5 h-3.5 text-red-800" />
                <span>Choose Another Chapter</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('quiz-leaderboard')}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs rounded-xl transition cursor-pointer flex items-center gap-1.5 shadow-sm"
              >
                <Trophy className="w-3.5 h-3.5 text-stone-950" />
                <span>View Leaderboard</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrintScorecard}
                className="px-3.5 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs rounded-xl transition cursor-pointer flex items-center gap-1.5"
                title="Print or Save PDF Scorecard"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Scorecard</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  navigator.clipboard?.writeText(
                    `I scored ${examResult.score}/${examResult.total} (${examResult.percentage}%) in ${subject.name} Chapter ${selectedChapterNo} Quiz Exam!`
                  );
                  setShareToast('Scorecard copied to clipboard!');
                  setTimeout(() => setShareToast(null), 3000);
                }}
                className="px-3.5 py-2 bg-stone-800 hover:bg-stone-900 text-white font-bold text-xs rounded-xl transition cursor-pointer flex items-center gap-1.5 shadow-xs"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Result</span>
              </button>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* ENHANCED SECTION: REVIEW INCORRECT ANSWERS & CORRECT ANSWER KEYS */}
        {/* ================================================================= */}
        <div className="bg-white border-2 border-rose-200 rounded-3xl p-6 sm:p-8 shadow-md space-y-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-rose-100 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center font-bold">
                  <XCircle className="w-4 h-4 text-rose-600" />
                </span>
                <h2 className="text-base sm:text-lg font-black text-stone-900">
                  Review Incorrect Answers & Missed Answer Keys
                </h2>
              </div>
              <p className="text-xs text-stone-500">
                Detailed side-by-side comparison of your missed answers vs the official Tamil Nadu textbook answer key & explanations.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-black ${
                incorrectQuestionsList.length === 0
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'bg-rose-100 text-rose-800'
              }`}>
                {incorrectQuestionsList.length === 0 ? '0 Mistakes (Centum!)' : `${incorrectQuestionsList.length} Questions Missed`}
              </span>

              {incorrectQuestionsList.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    const missedQuestionsOnly = incorrectQuestionsList.map(item => item.question);
                    handleStartExam(missedQuestionsOnly);
                  }}
                  className="px-3 py-1 bg-red-800 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1 cursor-pointer shadow-xs"
                  title="Practice only the questions you missed"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Practice Missed Qs ({incorrectQuestionsList.length})</span>
                </button>
              )}
            </div>
          </div>

          {/* If 0 Mistakes (Centum) */}
          {incorrectQuestionsList.length === 0 ? (
            <div className="p-8 bg-emerald-50/60 border border-emerald-200 rounded-2xl text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-xs">
                <Sparkles className="w-7 h-7 text-emerald-600" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-extrabold text-emerald-950">
                  🌟 Perfect Centum! Zero Incorrect Answers
                </h3>
                <p className="text-xs text-emerald-800 max-w-md mx-auto">
                  You answered every single 1-mark question in this session with 100% accuracy. You have fully mastered this chapter!
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {incorrectQuestionsList.map(item => {
                const q = item.question;
                const qText = examLanguage === 'tamil' && q.questionTextTamil
                  ? q.questionTextTamil
                  : q.questionText;

                const options = examLanguage === 'tamil' && q.optionsTamil
                  ? q.optionsTamil
                  : q.options;

                const answerText = examLanguage === 'tamil' && q.answerTamil
                  ? q.answerTamil
                  : q.answer;

                const studentOptionText = item.studentAnswer && options ? options[item.studentAnswer] : null;
                const correctOptionText = item.correctAnswer && options ? options[item.correctAnswer] : null;

                return (
                  <div
                    key={q.id}
                    className="p-5 rounded-2xl border-2 border-rose-200/90 bg-rose-50/30 space-y-4 shadow-xs"
                  >
                    {/* Item Header */}
                    <div className="flex items-center justify-between gap-2 border-b border-rose-200/60 pb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-lg bg-rose-700 text-white font-black text-xs flex items-center justify-center">
                          Q{item.index}
                        </span>
                        <span className="text-xs font-bold text-stone-700">
                          Chapter {q.chapterNo}: {examLanguage === 'tamil' && q.chapterNameTamil ? q.chapterNameTamil : q.chapterName}
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1 bg-rose-100 text-rose-800 text-xs font-black px-2.5 py-0.5 rounded-full">
                        {item.isAttempted ? (
                          <>
                            <XCircle className="w-3.5 h-3.5 stroke-[2.5]" /> Marked Incorrect
                          </>
                        ) : (
                          <>⚪ Skipped / Unattempted</>
                        )}
                      </span>
                    </div>

                    {/* Question Prompt */}
                    <p className="font-bold text-stone-900 text-sm leading-relaxed">
                      {qText}
                    </p>

                    {/* Side-by-Side Comparison Box */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      
                      {/* Left: Your Answer */}
                      <div className="bg-white border-2 border-rose-300 rounded-xl p-3.5 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black uppercase text-rose-800 tracking-wider flex items-center gap-1">
                            <XCircle className="w-3 h-3 text-rose-600" />
                            Your Marked Option:
                          </span>
                          <span className="text-[10px] font-bold text-rose-600">
                            {item.isAttempted ? `Option ${item.studentAnswer}` : 'Not Answered'}
                          </span>
                        </div>
                        
                        {item.isAttempted ? (
                          <div className="flex items-start gap-2 bg-rose-50 p-2.5 rounded-lg text-xs font-semibold text-rose-950">
                            <span className="w-5 h-5 rounded bg-rose-600 text-white font-black text-[11px] flex items-center justify-center shrink-0">
                              {item.studentAnswer}
                            </span>
                            <span className="line-through text-rose-900">{studentOptionText || '—'}</span>
                          </div>
                        ) : (
                          <div className="bg-stone-50 p-2.5 rounded-lg text-xs text-stone-500 italic">
                            Question was not attempted during the test.
                          </div>
                        )}
                      </div>

                      {/* Right: Official Correct Key */}
                      <div className="bg-emerald-50/80 border-2 border-emerald-400 rounded-xl p-3.5 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black uppercase text-emerald-900 tracking-wider flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                            Official Textbook Answer Key:
                          </span>
                          <span className="text-[10px] font-bold text-emerald-800">
                            Option {item.correctAnswer}
                          </span>
                        </div>

                        <div className="flex items-start gap-2 bg-emerald-100/90 p-2.5 rounded-lg text-xs font-bold text-emerald-950">
                          <span className="w-5 h-5 rounded bg-emerald-700 text-white font-black text-[11px] flex items-center justify-center shrink-0">
                            {item.correctAnswer}
                          </span>
                          <span>{correctOptionText || answerText || '—'}</span>
                        </div>
                      </div>
                    </div>

                    {/* Official Solution Key & Explanation */}
                    <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-3 text-xs space-y-1 text-stone-800">
                      <p className="font-extrabold text-amber-900 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-amber-700" />
                        <span>பாடநூல் தீர்வுக் குறிப்பு (Textbook Explanation):</span>
                      </p>
                      <p className="font-semibold text-stone-900 pl-5 leading-relaxed">
                        {answerText || `Option (${item.correctAnswer}) ${correctOptionText || ''}`}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Section: Full Question-by-Question Solution & Valuation */}
        <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
            <div>
              <h2 className="text-base sm:text-lg font-black text-stone-900 flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-red-800" />
                All Questions Valuation & Solution Keys
              </h2>
              <p className="text-xs text-stone-500">
                Complete valuation breakdown of every question in the exam
              </p>
            </div>

            {/* Medium Toggle in Review Mode */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-stone-500">Review Language:</span>
              <div className="bg-stone-100 p-1 rounded-xl flex items-center border border-stone-200 text-xs">
                <button
                  type="button"
                  onClick={() => setExamLanguage('english')}
                  className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                    examLanguage === 'english' ? 'bg-red-800 text-white' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setExamLanguage('tamil')}
                  className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                    examLanguage === 'tamil' ? 'bg-red-800 text-white' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  தமிழ்
                </button>
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 flex-wrap text-xs">
            <button
              type="button"
              onClick={() => setReviewFilter('all')}
              className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer ${
                reviewFilter === 'all'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              All Questions ({examResult.total})
            </button>
            <button
              type="button"
              onClick={() => setReviewFilter('correct')}
              className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer flex items-center gap-1 ${
                reviewFilter === 'correct'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
              }`}
            >
              <Check className="w-3.5 h-3.5" />
              Correct ({examResult.correctCount})
            </button>
            <button
              type="button"
              onClick={() => setReviewFilter('incorrect')}
              className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer flex items-center gap-1 ${
                reviewFilter === 'incorrect'
                  ? 'bg-rose-700 text-white shadow-xs'
                  : 'bg-rose-50 text-rose-800 hover:bg-rose-100'
              }`}
            >
              <XCircle className="w-3.5 h-3.5" />
              Wrong ({examResult.incorrectCount})
            </button>
            <button
              type="button"
              onClick={() => setReviewFilter('unattempted')}
              className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer ${
                reviewFilter === 'unattempted'
                  ? 'bg-stone-600 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Unattempted ({examResult.unattemptedCount})
            </button>
          </div>

          {/* Questions Review List */}
          <div className="space-y-4 pt-2">
            {filteredReview.map(item => {
              const q = item.question;
              const qText = examLanguage === 'tamil' && q.questionTextTamil
                ? q.questionTextTamil
                : q.questionText;

              const options = examLanguage === 'tamil' && q.optionsTamil
                ? q.optionsTamil
                : q.options;

              const answerText = examLanguage === 'tamil' && q.answerTamil
                ? q.answerTamil
                : q.answer;

              return (
                <div
                  key={q.id}
                  className={`p-5 rounded-2xl border-2 transition space-y-4 ${
                    item.isCorrect
                      ? 'bg-emerald-50/30 border-emerald-200'
                      : !item.isAttempted
                      ? 'bg-stone-50/60 border-stone-200'
                      : 'bg-rose-50/40 border-rose-200'
                  }`}
                >
                  {/* Item Header */}
                  <div className="flex items-center justify-between gap-2 border-b border-stone-200/60 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-stone-900 text-white font-black text-xs flex items-center justify-center">
                        Q{item.index}
                      </span>
                      <span className="text-xs font-bold text-stone-600">
                        Chapter {q.chapterNo}: {examLanguage === 'tamil' && q.chapterNameTamil ? q.chapterNameTamil : q.chapterName}
                      </span>
                    </div>

                    {/* Status Badge */}
                    {item.isCorrect ? (
                      <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 text-xs font-black px-2.5 py-0.5 rounded-full">
                        <Check className="w-3.5 h-3.5 stroke-[3]" /> Correct (+1 Mark)
                      </span>
                    ) : !item.isAttempted ? (
                      <span className="inline-flex items-center gap-1 bg-stone-200 text-stone-700 text-xs font-bold px-2.5 py-0.5 rounded-full">
                        ⚪ Not Attempted (0 Marks)
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 bg-rose-100 text-rose-800 text-xs font-black px-2.5 py-0.5 rounded-full">
                        <XCircle className="w-3.5 h-3.5 stroke-[2.5]" /> Incorrect (0 Marks)
                      </span>
                    )}
                  </div>

                  {/* Question Prompt */}
                  <p className="font-bold text-stone-900 text-sm leading-relaxed">
                    {qText}
                  </p>
                  {q.imageUrl && (
                    <div className="pt-1">
                      <img
                        src={q.imageUrl}
                        alt="Diagram"
                        className="max-h-44 max-w-full rounded border border-stone-200 bg-white object-contain p-1"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  {/* Options Evaluation Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {options && (['A', 'B', 'C', 'D'] as const).map(optKey => {
                      const text = options[optKey];
                      if (!text) return null;

                      const isStudentChoice = item.studentAnswer === optKey;
                      const isCorrectChoice = item.correctAnswer === optKey;

                      let cardStyle = 'bg-white border-stone-200 text-stone-700';
                      if (isCorrectChoice) {
                        cardStyle = 'bg-emerald-100/80 border-emerald-400 text-emerald-950 font-bold';
                      } else if (isStudentChoice && !item.isCorrect) {
                        cardStyle = 'bg-rose-100 border-rose-400 text-rose-950 line-through';
                      }

                      return (
                        <div
                          key={optKey}
                          className={`p-2.5 rounded-xl border flex items-center justify-between gap-2 ${cardStyle}`}
                        >
                          <div className="flex items-start gap-2">
                            <span className={`w-5 h-5 rounded font-black text-[11px] flex items-center justify-center shrink-0 ${
                              isCorrectChoice
                                ? 'bg-emerald-700 text-white'
                                : isStudentChoice
                                ? 'bg-rose-700 text-white'
                                : 'bg-stone-200 text-stone-700'
                            }`}>
                              {optKey}
                            </span>
                            <div>
                              <span>{text}</span>
                              {q.optionImages?.[optKey] && (
                                <div className="mt-1">
                                  <img
                                    src={q.optionImages[optKey]}
                                    alt={`Option ${optKey}`}
                                    className="max-h-28 max-w-full rounded border border-stone-200 bg-white object-contain p-1"
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="shrink-0 text-[10px] font-black">
                            {isCorrectChoice && <span className="text-emerald-800">✓ Correct</span>}
                            {isStudentChoice && !isCorrectChoice && <span className="text-rose-800">Your Choice</span>}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Official Answer & Explanation Key */}
                  <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3 text-xs space-y-1 text-stone-800">
                    <p className="font-extrabold text-amber-900 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-700" />
                      Textbook Answer Key:
                    </p>
                    <p className="font-semibold text-stone-900 pl-5">
                      {answerText || `Option ${item.correctAnswer}`}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return null;
};
