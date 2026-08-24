import React, { useState, useEffect, useMemo } from 'react';
import { 
  Trophy, 
  Award, 
  Medal, 
  Search, 
  Filter, 
  Clock, 
  RotateCcw, 
  Trash2, 
  Download, 
  GraduationCap, 
  Sparkles, 
  Calendar, 
  Zap, 
  CheckCircle2, 
  BookOpen, 
  ArrowUpDown,
  User,
  ChevronRight
} from 'lucide-react';
import { SubjectData, QuizScoreRecord, LanguageMode } from '../types';

interface QuizLeaderboardProps {
  activeSubject: SubjectData;
  allSubjects?: SubjectData[];
  languageMode?: LanguageMode;
  onNavigate: (view: string) => void;
  onStartChapterExam?: (chapterNo: number) => void;
}

const STORAGE_KEY = 'quiz_exam_leaderboard_scores';

export const QuizLeaderboard: React.FC<QuizLeaderboardProps> = ({
  activeSubject,
  allSubjects = [],
  languageMode = 'bilingual',
  onNavigate,
  onStartChapterExam
}) => {
  const [scores, setScores] = useState<QuizScoreRecord[]>([]);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('all');
  const [selectedChapterNo, setSelectedChapterNo] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'score' | 'time' | 'date'>('score');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showClearConfirm, setShowClearConfirm] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load scores from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setScores(parsed);
        }
      }
    } catch (e) {
      console.error('Error loading leaderboard scores:', e);
    }
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Delete individual score record
  const handleDeleteScore = (id: string) => {
    const updated = scores.filter(s => s.id !== id);
    setScores(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      showToast('Record deleted successfully');
    } catch (e) {
      console.error('Error saving scores:', e);
    }
  };

  // Clear all leaderboard history
  const handleClearAll = () => {
    setScores([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
      showToast('Leaderboard history reset successfully');
    } catch (e) {
      console.error('Error clearing scores:', e);
    }
    setShowClearConfirm(false);
  };

  // Export Leaderboard Data as JSON or CSV
  const handleExportData = () => {
    if (scores.length === 0) {
      showToast('No records to export');
      return;
    }

    const headers = ['Rank', 'Student Name', 'Subject', 'Chapter', 'Score', 'Total', 'Percentage', 'Time Taken (s)', 'Language', 'Grade', 'Date'];
    const rows = filteredScores.map((s, idx) => [
      idx + 1,
      `"${s.studentName.replace(/"/g, '""')}"`,
      `"${s.subjectName.replace(/"/g, '""')}"`,
      `"${s.chapterNo === 0 ? 'Full Syllabus' : `Chapter ${s.chapterNo}: ${s.chapterName}`}"`,
      s.score,
      s.total,
      `${s.percentage}%`,
      s.timeTakenSeconds,
      s.language,
      s.grade,
      new Date(s.date).toLocaleString()
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `TN_Quiz_Leaderboard_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Leaderboard exported to CSV file');
  };

  // Filter & Search scores
  const filteredScores = useMemo(() => {
    return scores
      .filter(s => {
        // Subject filter
        if (selectedSubjectId !== 'all' && s.subjectId !== selectedSubjectId && s.subjectName !== selectedSubjectId) {
          return false;
        }

        // Chapter filter
        if (selectedChapterNo !== 'all') {
          const num = parseInt(selectedChapterNo, 10);
          if (s.chapterNo !== num) return false;
        }

        // Search query
        if (searchQuery.trim()) {
          const query = searchQuery.toLowerCase();
          const matchName = s.studentName.toLowerCase().includes(query);
          const matchSubject = s.subjectName.toLowerCase().includes(query);
          const matchChapter = s.chapterName.toLowerCase().includes(query) || (s.chapterNameTamil && s.chapterNameTamil.toLowerCase().includes(query));
          if (!matchName && !matchSubject && !matchChapter) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'score') {
          // Sort by percentage desc, then time taken asc (faster is better for same score)
          if (b.percentage !== a.percentage) {
            return b.percentage - a.percentage;
          }
          return a.timeTakenSeconds - b.timeTakenSeconds;
        } else if (sortBy === 'time') {
          // Fastest time first (with high score tiebreaker)
          if (a.timeTakenSeconds !== b.timeTakenSeconds) {
            return a.timeTakenSeconds - b.timeTakenSeconds;
          }
          return b.percentage - a.percentage;
        } else {
          // Date recent first
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
      });
  }, [scores, selectedSubjectId, selectedChapterNo, searchQuery, sortBy]);

  // High score champions by chapter for active subject
  const chapterChampions = useMemo(() => {
    const map = new Map<number, QuizScoreRecord>();
    scores
      .filter(s => s.subjectId === activeSubject.id || s.subjectName === activeSubject.name)
      .forEach(record => {
        const existing = map.get(record.chapterNo);
        if (!existing) {
          map.set(record.chapterNo, record);
        } else {
          if (record.percentage > existing.percentage || 
             (record.percentage === existing.percentage && record.timeTakenSeconds < existing.timeTakenSeconds)) {
            map.set(record.chapterNo, record);
          }
        }
      });
    return map;
  }, [scores, activeSubject]);

  // Overall Statistics
  const stats = useMemo(() => {
    if (scores.length === 0) {
      return { totalAttempts: 0, avgScore: 0, centumCount: 0, topScore: 0 };
    }
    const totalAttempts = scores.length;
    const totalPct = scores.reduce((acc, curr) => acc + curr.percentage, 0);
    const avgScore = Math.round(totalPct / totalAttempts);
    const centumCount = scores.filter(s => s.percentage === 100).length;
    const topScore = Math.max(...scores.map(s => s.percentage));

    return { totalAttempts, avgScore, centumCount, topScore };
  }, [scores]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 select-none animate-fadeIn pb-12">
      {/* Toast notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 bg-stone-900 text-amber-300 px-4 py-2.5 rounded-xl shadow-2xl border border-stone-700 text-xs font-bold z-50 flex items-center gap-2 animate-slideUp">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-amber-500/20 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 text-amber-300 px-3 py-1 rounded-full text-xs font-black">
              <Trophy className="w-3.5 h-3.5" />
              <span>Chapterwise Quiz Hall of Fame</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-3">
              Quiz Leaderboard & High Scores
            </h1>
            
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Track chapter-wise mastery, compete for top positions, monitor exam speed, and aim for 100% Centum across all chapters.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={() => onNavigate('chapterwise-quiz')}
              className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs rounded-xl transition shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <GraduationCap className="w-4 h-4 text-stone-950" />
              <span>Take Quiz Exam</span>
            </button>

            <button
              type="button"
              onClick={handleExportData}
              className="px-3.5 py-2.5 bg-stone-800/80 hover:bg-stone-700 text-stone-200 font-bold text-xs rounded-xl transition border border-stone-700 flex items-center gap-1.5 cursor-pointer"
              title="Export Leaderboard to CSV"
            >
              <Download className="w-3.5 h-3.5 text-stone-400" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Global Summary Statistics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-stone-800/80">
          <div className="bg-stone-950/60 border border-stone-800 rounded-2xl p-3.5">
            <div className="flex items-center gap-1.5 text-stone-400 text-xs font-semibold">
              <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
              <span>Total Attempts</span>
            </div>
            <p className="text-xl sm:text-2xl font-black text-white mt-1 font-mono">
              {stats.totalAttempts}
            </p>
          </div>

          <div className="bg-stone-950/60 border border-stone-800 rounded-2xl p-3.5">
            <div className="flex items-center gap-1.5 text-stone-400 text-xs font-semibold">
              <Zap className="w-3.5 h-3.5 text-blue-400" />
              <span>Average Accuracy</span>
            </div>
            <p className="text-xl sm:text-2xl font-black text-white mt-1 font-mono">
              {stats.avgScore}%
            </p>
          </div>

          <div className="bg-stone-950/60 border border-stone-800 rounded-2xl p-3.5">
            <div className="flex items-center gap-1.5 text-stone-400 text-xs font-semibold">
              <Award className="w-3.5 h-3.5 text-yellow-400" />
              <span>Centum (100%) Badges</span>
            </div>
            <p className="text-xl sm:text-2xl font-black text-yellow-300 mt-1 font-mono">
              {stats.centumCount} <span className="text-xs text-yellow-400 font-normal">earned</span>
            </p>
          </div>

          <div className="bg-stone-950/60 border border-stone-800 rounded-2xl p-3.5">
            <div className="flex items-center gap-1.5 text-stone-400 text-xs font-semibold">
              <Trophy className="w-3.5 h-3.5 text-emerald-400" />
              <span>Highest Score</span>
            </div>
            <p className="text-xl sm:text-2xl font-black text-emerald-400 mt-1 font-mono">
              {stats.topScore}%
            </p>
          </div>
        </div>
      </div>

      {/* Chapter-wise Champions Showcase (For Active Subject) */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
          <div>
            <h2 className="text-base sm:text-lg font-black text-stone-900 flex items-center gap-2">
              <Medal className="w-5 h-5 text-amber-600" />
              <span>{activeSubject.name} — Chapter High Score Champions</span>
            </h2>
            <p className="text-xs text-stone-500">
              Personal best records and chapter mastery scores
            </p>
          </div>

          <span className="text-[11px] font-bold text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
            {chapterChampions.size} of {activeSubject.chapters.length} Chapters Attempted
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {/* Full Syllabus Champion Card */}
          {(() => {
            const fsRecord = chapterChampions.get(0);
            return (
              <div 
                className={`p-3.5 rounded-xl border transition-all ${
                  fsRecord
                    ? 'bg-amber-50/50 border-amber-200'
                    : 'bg-stone-50/50 border-stone-200/80 border-dashed opacity-80'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[11px] font-black uppercase text-red-800 bg-red-50 px-2 py-0.5 rounded">
                    Full Syllabus
                  </span>
                  {fsRecord && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-extrabold bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded">
                      <Trophy className="w-3 h-3 text-amber-700" /> Best
                    </span>
                  )}
                </div>

                <p className="text-xs font-bold text-stone-900 truncate">
                  Comprehensive Syllabus Exam
                </p>

                {fsRecord ? (
                  <div className="mt-2.5 pt-2 border-t border-amber-200/60 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-black text-stone-900">
                        {fsRecord.score}/{fsRecord.total} <span className="text-xs font-bold text-emerald-700">({fsRecord.percentage}%)</span>
                      </p>
                      <p className="text-[10px] text-stone-500 truncate max-w-[110px]">
                        👤 {fsRecord.studentName}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] font-mono font-bold text-stone-700">
                        ⏱️ {formatTime(fsRecord.timeTakenSeconds)}
                      </p>
                      <p className="text-[9px] text-stone-400">
                        {new Date(fsRecord.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="mt-3 text-center py-1">
                    <button
                      type="button"
                      onClick={() => {
                        if (onStartChapterExam) onStartChapterExam(0);
                        onNavigate('chapterwise-quiz');
                      }}
                      className="text-[11px] font-bold text-red-800 hover:text-red-900 hover:underline cursor-pointer"
                    >
                      Attempt Full Syllabus &rarr;
                    </button>
                  </div>
                )}
              </div>
            );
          })()}

          {/* Individual Chapters */}
          {activeSubject.chapters.map(ch => {
            const best = chapterChampions.get(ch.no);
            return (
              <div 
                key={ch.no}
                className={`p-3.5 rounded-xl border transition-all ${
                  best
                    ? best.percentage === 100
                      ? 'bg-amber-50/60 border-amber-300'
                      : 'bg-stone-50/80 border-stone-200'
                    : 'bg-white border-stone-200/70 border-dashed opacity-75'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[11px] font-black text-stone-700 bg-stone-100 px-2 py-0.5 rounded">
                    Chapter {ch.no}
                  </span>
                  {best && best.percentage === 100 && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-black bg-amber-400 text-stone-950 px-1.5 py-0.5 rounded shadow-2xs">
                      🌟 Centum
                    </span>
                  )}
                  {best && best.percentage < 100 && (
                    <span className="text-[10px] font-bold bg-stone-200 text-stone-800 px-1.5 py-0.5 rounded">
                      {best.grade}
                    </span>
                  )}
                </div>

                <p className="text-xs font-bold text-stone-900 truncate" title={ch.name}>
                  {languageMode === 'tamil' && ch.nameTamil ? ch.nameTamil : ch.name}
                </p>

                {best ? (
                  <div className="mt-2.5 pt-2 border-t border-stone-200 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-black text-stone-900">
                        {best.score}/{best.total} <span className="text-xs font-bold text-emerald-700">({best.percentage}%)</span>
                      </p>
                      <p className="text-[10px] text-stone-500 truncate max-w-[110px]">
                        👤 {best.studentName}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] font-mono font-bold text-stone-700">
                        ⏱️ {formatTime(best.timeTakenSeconds)}
                      </p>
                      <p className="text-[9px] text-stone-400">
                        {new Date(best.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="mt-3 text-center py-1">
                    <button
                      type="button"
                      onClick={() => {
                        if (onStartChapterExam) onStartChapterExam(ch.no);
                        onNavigate('chapterwise-quiz');
                      }}
                      className="text-[11px] font-bold text-red-800 hover:text-red-900 hover:underline cursor-pointer"
                    >
                      Take Chapter {ch.no} Quiz &rarr;
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Filter and Search Controls Bar */}
      <div className="bg-white border border-stone-200 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search student or chapter..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Subject Filter */}
          <div>
            <select
              value={selectedSubjectId}
              onChange={e => setSelectedSubjectId(e.target.value)}
              className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs font-bold text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
            >
              <option value="all">All Subjects</option>
              <option value={activeSubject.id}>{activeSubject.name} (Current)</option>
              {allSubjects.filter(s => s.id !== activeSubject.id).map(s => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>

          {/* Chapter Filter */}
          <div>
            <select
              value={selectedChapterNo}
              onChange={e => setSelectedChapterNo(e.target.value)}
              className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs font-bold text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
            >
              <option value="all">All Chapters</option>
              <option value="0">Full Syllabus Exam</option>
              {activeSubject.chapters.map(ch => (
                <option key={ch.no} value={ch.no.toString()}>
                  Chapter {ch.no}: {ch.name.slice(0, 30)}...
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div>
            <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl border border-stone-200 text-xs font-bold">
              <button
                type="button"
                onClick={() => setSortBy('score')}
                className={`flex-1 py-1 px-2 rounded-lg transition text-center cursor-pointer ${
                  sortBy === 'score' ? 'bg-amber-500 text-stone-950 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Top Score
              </button>
              <button
                type="button"
                onClick={() => setSortBy('time')}
                className={`flex-1 py-1 px-2 rounded-lg transition text-center cursor-pointer ${
                  sortBy === 'time' ? 'bg-amber-500 text-stone-950 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Fastest
              </button>
              <button
                type="button"
                onClick={() => setSortBy('date')}
                className={`flex-1 py-1 px-2 rounded-lg transition text-center cursor-pointer ${
                  sortBy === 'date' ? 'bg-amber-500 text-stone-950 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Recent
              </button>
            </div>
          </div>
        </div>

        {/* Clear confirmation / Toolbar status */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-stone-100 text-xs text-stone-500">
          <div>
            Showing <span className="font-bold text-stone-900">{filteredScores.length}</span> attempts on leaderboard
          </div>

          {scores.length > 0 && (
            <div>
              {showClearConfirm ? (
                <div className="flex items-center gap-2 bg-rose-50 border border-rose-200 px-3 py-1.5 rounded-xl">
                  <span className="text-rose-800 font-bold text-xs">Clear all records?</span>
                  <button
                    type="button"
                    onClick={handleClearAll}
                    className="px-2 py-0.5 bg-rose-600 text-white font-bold text-[11px] rounded hover:bg-rose-700 cursor-pointer"
                  >
                    Confirm Delete
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowClearConfirm(false)}
                    className="px-2 py-0.5 bg-stone-200 text-stone-700 font-bold text-[11px] rounded hover:bg-stone-300 cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowClearConfirm(true)}
                  className="text-stone-400 hover:text-rose-600 font-medium transition cursor-pointer flex items-center gap-1 text-[11px]"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Clear History</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Main Leaderboard Table */}
      <div className="bg-white border border-stone-200 rounded-2xl shadow-sm overflow-hidden">
        {filteredScores.length === 0 ? (
          <div className="p-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto">
              <Trophy className="w-8 h-8" />
            </div>
            <div className="space-y-1 max-w-sm mx-auto">
              <h3 className="text-base font-bold text-stone-900">
                No Exam Records Found
              </h3>
              <p className="text-xs text-stone-500">
                {scores.length === 0 
                  ? 'Take your first Chapterwise Quiz Exam to record scores, earn badges, and appear on the Leaderboard.'
                  : 'No records matching your search or filter settings.'}
              </p>
            </div>
            <div>
              <button
                type="button"
                onClick={() => onNavigate('chapterwise-quiz')}
                className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold text-xs rounded-xl transition cursor-pointer inline-flex items-center gap-2 shadow-xs"
              >
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <span>Start a Chapter Exam Now</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-500 uppercase tracking-wider font-extrabold text-[10px]">
                <tr>
                  <th className="py-3 px-4 text-center w-12">Rank</th>
                  <th className="py-3 px-4">Student</th>
                  <th className="py-3 px-4">Subject & Chapter</th>
                  <th className="py-3 px-4">Score / Accuracy</th>
                  <th className="py-3 px-4">Time Taken</th>
                  <th className="py-3 px-4">Medium</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-800 font-medium">
                {filteredScores.map((record, index) => {
                  const rank = index + 1;
                  let rankBadge = (
                    <span className="w-6 h-6 rounded-full bg-stone-100 text-stone-600 font-black text-xs flex items-center justify-center mx-auto">
                      {rank}
                    </span>
                  );

                  if (rank === 1) {
                    rankBadge = (
                      <span className="w-6 h-6 rounded-full bg-amber-400 text-stone-950 font-black text-xs flex items-center justify-center mx-auto shadow-xs" title="1st Place - Gold">
                        🥇
                      </span>
                    );
                  } else if (rank === 2) {
                    rankBadge = (
                      <span className="w-6 h-6 rounded-full bg-slate-300 text-stone-950 font-black text-xs flex items-center justify-center mx-auto shadow-xs" title="2nd Place - Silver">
                        🥈
                      </span>
                    );
                  } else if (rank === 3) {
                    rankBadge = (
                      <span className="w-6 h-6 rounded-full bg-amber-700 text-white font-black text-xs flex items-center justify-center mx-auto shadow-xs" title="3rd Place - Bronze">
                        🥉
                      </span>
                    );
                  }

                  const isCentum = record.percentage === 100;

                  return (
                    <tr 
                      key={record.id}
                      className={`hover:bg-amber-50/40 transition-colors ${
                        isCentum ? 'bg-amber-50/20' : ''
                      }`}
                    >
                      {/* Rank */}
                      <td className="py-3.5 px-4 text-center">
                        {rankBadge}
                      </td>

                      {/* Student Name */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-stone-100 text-stone-700 flex items-center justify-center font-bold text-xs shrink-0">
                            <User className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <p className="font-extrabold text-stone-900 text-xs">
                              {record.studentName || 'Student'}
                            </p>
                            <span className="text-[10px] text-stone-400">
                              {record.grade}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Subject & Chapter */}
                      <td className="py-3.5 px-4">
                        <div className="space-y-0.5 max-w-xs">
                          <div className="flex items-center gap-1.5">
                            <span className="bg-red-50 text-red-800 text-[10px] font-black px-1.5 py-0.5 rounded">
                              {record.chapterNo === 0 ? 'Full Syllabus' : `Ch ${record.chapterNo}`}
                            </span>
                            <span className="font-bold text-stone-900 truncate">
                              {record.chapterName}
                            </span>
                          </div>
                          <p className="text-[10px] text-stone-400 truncate">
                            {record.subjectName}
                          </p>
                        </div>
                      </td>

                      {/* Score & Progress */}
                      <td className="py-3.5 px-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-black text-stone-900 text-sm">
                              {record.score}/{record.total}
                            </span>
                            <span className={`text-xs font-black px-2 py-0.5 rounded-full ${
                              record.percentage >= 90
                                ? 'bg-emerald-100 text-emerald-800'
                                : record.percentage >= 70
                                ? 'bg-blue-100 text-blue-800'
                                : record.percentage >= 50
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-rose-100 text-rose-800'
                            }`}>
                              {record.percentage}%
                            </span>
                          </div>

                          <div className="w-28 bg-stone-100 rounded-full h-1.5 overflow-hidden">
                            <div 
                              className={`h-full ${
                                record.percentage >= 90
                                  ? 'bg-emerald-500'
                                  : record.percentage >= 70
                                  ? 'bg-blue-500'
                                  : record.percentage >= 50
                                  ? 'bg-amber-500'
                                  : 'bg-rose-500'
                              }`}
                              style={{ width: `${record.percentage}%` }}
                            />
                          </div>
                        </div>
                      </td>

                      {/* Time Taken */}
                      <td className="py-3.5 px-4">
                        <div className="font-mono text-stone-700">
                          <p className="font-bold text-xs">{formatTime(record.timeTakenSeconds)}</p>
                          <p className="text-[10px] text-stone-400">
                            {record.timeLimitMinutes > 0 ? `of ${record.timeLimitMinutes}m limit` : 'Untimed'}
                          </p>
                        </div>
                      </td>

                      {/* Language Medium */}
                      <td className="py-3.5 px-4">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          record.language === 'tamil'
                            ? 'bg-red-50 text-red-800 border border-red-200'
                            : 'bg-stone-100 text-stone-700 border border-stone-200'
                        }`}>
                          {record.language === 'tamil' ? 'தமிழ்' : 'English'}
                        </span>
                      </td>

                      {/* Date */}
                      <td className="py-3.5 px-4 text-[11px] text-stone-500">
                        {new Date(record.date).toLocaleDateString(undefined, {
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            type="button"
                            onClick={() => {
                              if (onStartChapterExam) onStartChapterExam(record.chapterNo);
                              onNavigate('chapterwise-quiz');
                            }}
                            className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition cursor-pointer"
                            title="Retake This Exam"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDeleteScore(record.id)}
                            className="p-1.5 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition cursor-pointer"
                            title="Delete this score record"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
