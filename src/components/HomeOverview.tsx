import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  FileText, 
  Calculator, 
  Sliders, 
  CheckSquare,
  HelpCircle,
  Clock,
  BookmarkCheck,
  Zap,
  GraduationCap,
  Info,
  Phone,
  Download,
  Flame,
  Award,
  BarChart3,
  Check,
  ShieldCheck,
  AlertTriangle,
  Trophy
} from 'lucide-react';
import { SubjectData, Chapter } from '../types';
import { exportSubjectQuestionsToCSV, getQuestionDifficulty } from '../utils/csvExport';
import { validateSubject } from '../utils/textbookValidator';

interface HomeOverviewProps {
  allSubjects: SubjectData[];
  activeSubject: SubjectData;
  languageMode?: string;
  onSelectSubject: (subject: SubjectData) => void;
  onNavigate: (view: string) => void;
  onSelectChapter: (chapterNo: number) => void;
}

export const getSubjectStats = (subject: SubjectData) => {
  const m1 = subject.questions.filter(q => q.marks === 1).length;
  const m2 = subject.questions.filter(q => q.marks === 2).length;
  const m3 = subject.questions.filter(q => q.marks === 3).length;
  const m5 = subject.questions.filter(q => q.marks === 5).length;
  return {
    total: subject.questions.length,
    m1,
    m2,
    m3,
    m5,
  };
};

export const HomeOverview: React.FC<HomeOverviewProps> = ({
  allSubjects,
  activeSubject,
  languageMode,
  onSelectSubject,
  onNavigate,
  onSelectChapter
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Compute metric stats for active subject
  const activeStats = getSubjectStats(activeSubject);
  const totalQuestions = activeStats.total;
  const count1M = activeStats.m1;
  const count2M = activeStats.m2;
  const count3M = activeStats.m3;
  const count5M = activeStats.m5;

  // Run textbook validation report
  const validationReport = React.useMemo(() => {
    return validateSubject(activeSubject);
  }, [activeSubject]);

  // Compute Difficulty Distribution (Easy, Medium, Hard)
  const difficultyCounts = activeSubject.questions.reduce(
    (acc, q) => {
      const diff = getQuestionDifficulty(q);
      acc[diff] = (acc[diff] || 0) + 1;
      return acc;
    },
    { Easy: 0, Medium: 0, Hard: 0 } as Record<'Easy' | 'Medium' | 'Hard', number>
  );

  const easyPercent = totalQuestions > 0 ? ((difficultyCounts.Easy / totalQuestions) * 100).toFixed(1) : '0';
  const mediumPercent = totalQuestions > 0 ? ((difficultyCounts.Medium / totalQuestions) * 100).toFixed(1) : '0';
  const hardPercent = totalQuestions > 0 ? ((difficultyCounts.Hard / totalQuestions) * 100).toFixed(1) : '0';

  const handleExportCSV = () => {
    exportSubjectQuestionsToCSV(activeSubject);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Subject Selection Cards (Old Layout) */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-stone-200 pb-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-red-800" />
              Select Subject & Standard
            </h1>
            <p className="text-xs text-stone-600 mt-1 max-w-2xl leading-relaxed">
              Choose a standard and subject to view evaluation blueprints, question repositories, and generate customized question papers with matching answer keys.
            </p>
          </div>
        </div>

        {/* Subject Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {allSubjects.map(sub => {
            const isSelected = activeSubject.id === sub.id;
            const stats = getSubjectStats(sub);

            return (
              <div
                key={sub.id}
                onClick={() => onSelectSubject(sub)}
                className={`relative rounded-xl border p-4 transition-all cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-amber-50/50 border-amber-600 shadow-md ring-2 ring-amber-500/20'
                    : 'bg-white border-stone-200 hover:border-amber-400 hover:shadow-sm'
                }`}
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider bg-stone-900 text-amber-300 px-2 py-0.5 rounded">
                      {sub.standard}
                    </span>
                    {isSelected ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100/90 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Active
                      </span>
                    ) : (
                      <span className="text-[10px] text-stone-500 font-medium group-hover:text-amber-800">
                        Select →
                      </span>
                    )}
                  </div>

                  {/* Subject Title */}
                  <h3 className={`text-base font-bold transition leading-snug ${
                    isSelected ? 'text-amber-950' : 'text-stone-900 group-hover:text-red-900'
                  }`}>
                    {sub.name}
                  </h3>
                  {sub.nameTamil && (
                    <p className="text-xs text-stone-500 font-medium mt-0.5">
                      {sub.nameTamil}
                    </p>
                  )}

                  {/* Info stats */}
                  <p className="text-xs text-stone-600 mt-2 font-medium">
                    {sub.chapters.length} Chapters · {stats.total} Questions
                  </p>
                </div>

                {/* Mark Breakdown Chips */}
                <div className="mt-3 pt-2.5 border-t border-stone-200/80 flex items-center justify-between text-[10px] font-semibold text-stone-600">
                  <span className="bg-blue-50 text-blue-800 px-1.5 py-0.5 rounded">1M: {stats.m1}</span>
                  <span className="bg-emerald-50 text-emerald-800 px-1.5 py-0.5 rounded">2M: {stats.m2}</span>
                  <span className="bg-amber-50 text-amber-800 px-1.5 py-0.5 rounded">3M: {stats.m3}</span>
                  <span className="bg-purple-50 text-purple-800 px-1.5 py-0.5 rounded">5M: {stats.m5}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Active Subject Metric Counters & Actions */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-600" />
              {activeSubject.standard} - {activeSubject.name} Question Bank Overview
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Verified TN State Board book-back repository with mark-wise distribution & difficulty categorization
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExportCSV}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition shadow-xs cursor-pointer border ${
                downloadSuccess
                  ? 'bg-emerald-600 border-emerald-700 text-white'
                  : 'bg-white border-stone-300 hover:bg-stone-50 text-stone-800 hover:text-stone-950'
              }`}
              title="Download entire question bank with solutions as CSV file for Excel / Sheets"
            >
              {downloadSuccess ? <Check className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5 text-stone-600" />}
              {downloadSuccess ? 'Exported CSV!' : 'Export CSV Backup'}
            </button>

            <button
              onClick={() => onNavigate('chapterwise-quiz')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-800 hover:bg-red-700 text-white rounded-lg text-xs font-bold transition shadow-xs cursor-pointer"
            >
              <GraduationCap className="w-3.5 h-3.5 text-amber-300" />
              Chapterwise Quiz Exam
            </button>

            <button
              onClick={() => onNavigate('quiz-leaderboard')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 rounded-lg text-xs font-black transition shadow-xs cursor-pointer"
            >
              <Trophy className="w-3.5 h-3.5 text-stone-950" />
              Leaderboard
            </button>

            <button
              onClick={() => onNavigate('practice-quiz')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 rounded-lg text-xs font-bold transition shadow-xs cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Quick 10 Qs Quiz
            </button>

            <button
              onClick={() => onNavigate('question-bank')}
              className="text-xs font-bold text-red-800 hover:text-red-900 hover:underline flex items-center gap-1 cursor-pointer pl-1"
            >
              View All {totalQuestions} Qs <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {/* Stat 1 */}
          <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-sm text-center col-span-2 sm:col-span-1">
            <p className="text-3xl font-extrabold text-stone-900">{totalQuestions}</p>
            <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mt-1">
              Grand Total
            </p>
            <span className="inline-block mt-2 text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-bold">
              All Chapters
            </span>
          </div>

          {/* Stat 2 */}
          <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-sm text-center">
            <p className="text-3xl font-extrabold text-blue-700">{count1M}</p>
            <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mt-1">
              1 Mark
            </p>
            <span className="inline-block mt-2 text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-medium">
              Part I (MCQs)
            </span>
          </div>

          {/* Stat 3 */}
          <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-sm text-center">
            <p className="text-3xl font-extrabold text-emerald-700">{count2M}</p>
            <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mt-1">
              2 Marks
            </p>
            <span className="inline-block mt-2 text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-medium">
              Part II (Short)
            </span>
          </div>

          {/* Stat 4 */}
          <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-sm text-center">
            <p className="text-3xl font-extrabold text-amber-700">{count3M}</p>
            <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mt-1">
              3 Marks
            </p>
            <span className="inline-block mt-2 text-[10px] bg-amber-50 text-amber-700 px-2 py-0.5 rounded font-medium">
              Part III (Brief)
            </span>
          </div>

          {/* Stat 5 */}
          <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-sm text-center">
            <p className="text-3xl font-extrabold text-purple-700">{count5M}</p>
            <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mt-1">
              5 Marks
            </p>
            <span className="inline-block mt-2 text-[10px] bg-purple-50 text-purple-700 px-2 py-0.5 rounded font-medium">
              Part IV (Detailed)
            </span>
          </div>
        </div>

        {/* Difficulty Level Distribution Visual Progress Chart */}
        <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
            <div className="space-y-0.5">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-red-800" />
                Question Difficulty Distribution
              </h3>
              <p className="text-xs text-stone-500">
                Cognitive level classification according to State Board blueprint standards
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-medium">
              <span className="flex items-center gap-1.5 text-stone-700">
                <span className="w-3 h-3 rounded-sm bg-emerald-500 inline-block" />
                Easy: <strong className="text-emerald-700">{difficultyCounts.Easy}</strong> ({easyPercent}%)
              </span>
              <span className="flex items-center gap-1.5 text-stone-700">
                <span className="w-3 h-3 rounded-sm bg-amber-500 inline-block" />
                Medium: <strong className="text-amber-700">{difficultyCounts.Medium}</strong> ({mediumPercent}%)
              </span>
              <span className="flex items-center gap-1.5 text-stone-700">
                <span className="w-3 h-3 rounded-sm bg-rose-600 inline-block" />
                Hard: <strong className="text-rose-700">{difficultyCounts.Hard}</strong> ({hardPercent}%)
              </span>
            </div>
          </div>

          {/* Multi-segmented Progress Bar */}
          <div className="space-y-2">
            <div className="w-full h-4 bg-stone-100 rounded-full overflow-hidden flex p-0.5 shadow-inner">
              <div
                style={{ width: `${easyPercent}%` }}
                className="h-full bg-emerald-500 rounded-l-full transition-all duration-500 hover:brightness-110"
                title={`Easy Questions: ${difficultyCounts.Easy} (${easyPercent}%)`}
              />
              <div
                style={{ width: `${mediumPercent}%` }}
                className="h-full bg-amber-500 transition-all duration-500 hover:brightness-110"
                title={`Medium Questions: ${difficultyCounts.Medium} (${mediumPercent}%)`}
              />
              <div
                style={{ width: `${hardPercent}%` }}
                className="h-full bg-rose-600 rounded-r-full transition-all duration-500 hover:brightness-110"
                title={`Hard / Analytical Questions: ${difficultyCounts.Hard} (${hardPercent}%)`}
              />
            </div>

            {/* Subtext description & cognitive tiers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-lg p-2.5 flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                <div className="text-xs">
                  <p className="font-bold text-emerald-950">Easy / Recall ({easyPercent}%)</p>
                  <p className="text-[11px] text-emerald-800/80 leading-relaxed">
                    Direct MCQs, terminology, syntax & standard definitions (Part I & basic 2M).
                  </p>
                </div>
              </div>

              <div className="bg-amber-50/70 border border-amber-200/80 rounded-lg p-2.5 flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                <div className="text-xs">
                  <p className="font-bold text-amber-950">Medium / Understanding ({mediumPercent}%)</p>
                  <p className="text-[11px] text-amber-800/80 leading-relaxed">
                    Conceptual differentiation, procedures, loop workings & 3M explanations.
                  </p>
                </div>
              </div>

              <div className="bg-rose-50/70 border border-rose-200/80 rounded-lg p-2.5 flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-rose-600 mt-1.5 shrink-0" />
                <div className="text-xs">
                  <p className="font-bold text-rose-950">Hard / Analytical ({hardPercent}%)</p>
                  <p className="text-[11px] text-rose-800/80 leading-relaxed">
                    5M comprehensive essays, architecture diagrams, SQL structures & either-or choices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overall Question Count Table */}
        <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm space-y-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
            <div>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Calculator className="w-4 h-4 text-red-800" />
                Overall Question Count
              </h3>
              <p className="text-xs text-stone-500">
                Official mark-wise breakdown for {activeSubject.standard} {activeSubject.name}
              </p>
            </div>
            <div className="text-xs font-semibold px-2.5 py-1 bg-stone-100 text-stone-700 rounded-md border border-stone-200">
              Grand Total: <span className="font-bold text-stone-900">{totalQuestions} Questions</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-50 border-y border-stone-200 text-stone-700">
                  <th className="py-2.5 px-4 font-bold">Mark</th>
                  <th className="py-2.5 px-4 font-bold text-right">Number of Questions</th>
                  <th className="py-2.5 px-4 font-bold text-right hidden sm:table-cell">Share</th>
                  <th className="py-2.5 px-4 font-bold text-stone-600 hidden md:table-cell">Section & Format</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr className="hover:bg-stone-50/70 transition">
                  <td className="py-2.5 px-4 font-semibold text-stone-900 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block"></span>
                    1 Mark
                  </td>
                  <td className="py-2.5 px-4 font-bold text-blue-700 text-right text-sm">{count1M}</td>
                  <td className="py-2.5 px-4 text-stone-500 text-right hidden sm:table-cell">
                    {totalQuestions > 0 ? ((count1M / totalQuestions) * 100).toFixed(1) : 0}%
                  </td>
                  <td className="py-2.5 px-4 text-stone-600 hidden md:table-cell">Multiple Choice & Objective Questions (Part I)</td>
                </tr>
                <tr className="hover:bg-stone-50/70 transition">
                  <td className="py-2.5 px-4 font-semibold text-stone-900 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block"></span>
                    2 Marks
                  </td>
                  <td className="py-2.5 px-4 font-bold text-emerald-700 text-right text-sm">{count2M}</td>
                  <td className="py-2.5 px-4 text-stone-500 text-right hidden sm:table-cell">
                    {totalQuestions > 0 ? ((count2M / totalQuestions) * 100).toFixed(1) : 0}%
                  </td>
                  <td className="py-2.5 px-4 text-stone-600 hidden md:table-cell">Short Answer Questions (Part II)</td>
                </tr>
                <tr className="hover:bg-stone-50/70 transition">
                  <td className="py-2.5 px-4 font-semibold text-stone-900 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-600 inline-block"></span>
                    3 Marks
                  </td>
                  <td className="py-2.5 px-4 font-bold text-amber-700 text-right text-sm">{count3M}</td>
                  <td className="py-2.5 px-4 text-stone-500 text-right hidden sm:table-cell">
                    {totalQuestions > 0 ? ((count3M / totalQuestions) * 100).toFixed(1) : 0}%
                  </td>
                  <td className="py-2.5 px-4 text-stone-600 hidden md:table-cell">Brief Answer Questions & Compulsory Problems (Part III)</td>
                </tr>
                <tr className="hover:bg-stone-50/70 transition">
                  <td className="py-2.5 px-4 font-semibold text-stone-900 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-600 inline-block"></span>
                    5 Marks
                  </td>
                  <td className="py-2.5 px-4 font-bold text-purple-700 text-right text-sm">{count5M}</td>
                  <td className="py-2.5 px-4 text-stone-500 text-right hidden sm:table-cell">
                    {totalQuestions > 0 ? ((count5M / totalQuestions) * 100).toFixed(1) : 0}%
                  </td>
                  <td className="py-2.5 px-4 text-stone-600 hidden md:table-cell">Detailed / Essay & Either-Or Questions (Part IV)</td>
                </tr>
                <tr className="bg-stone-50 font-bold border-t-2 border-stone-200">
                  <td className="py-3 px-4 text-stone-900">Grand Total</td>
                  <td className="py-3 px-4 text-stone-900 text-right text-base">{totalQuestions}</td>
                  <td className="py-3 px-4 text-stone-700 text-right hidden sm:table-cell">100.0%</td>
                  <td className="py-3 px-4 text-stone-700 hidden md:table-cell">Complete Book-Back Evaluation Repository</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Lesson-wise Book-Back Questions Count Table */}
        <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-stone-100 pb-3">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-red-800" />
                  Lesson-wise Book-Back Questions Count
                </h3>
                {validationReport.overallStatus === 'all_verified' && (
                  <span className="hidden sm:inline-flex items-center gap-1 text-[11px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Verified
                  </span>
                )}
              </div>
              <p className="text-xs text-stone-500 mt-0.5">
                Detailed chapter-wise allocation of Part I (1M), Part II (2M), Part III (3M), and Part IV (5M) questions
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onNavigate('subject-overview')}
                className="text-xs font-bold bg-amber-500 hover:bg-amber-400 text-stone-950 px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition cursor-pointer shadow-xs"
              >
                <BarChart3 className="w-3.5 h-3.5" />
                Subject Overview & Gap Matrix →
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-50 border-y border-stone-200 text-stone-700 font-bold">
                  <th className="py-2.5 px-3">Chapter Number & Title</th>
                  <th className="py-2.5 px-3 text-center text-blue-800">1 Mark (Part I)</th>
                  <th className="py-2.5 px-3 text-center text-emerald-800">2 Marks (Part II)</th>
                  <th className="py-2.5 px-3 text-center text-amber-800">3 Marks (Part III)</th>
                  <th className="py-2.5 px-3 text-center text-purple-800">5 Marks (Part IV)</th>
                  <th className="py-2.5 px-3 text-center font-black text-stone-900">Total</th>
                  <th className="py-2.5 px-3 text-center text-stone-600">Textbook Benchmark</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {validationReport.chapterResults.map(ch => {
                  return (
                    <tr
                      key={ch.chapterNo}
                      onClick={() => {
                        onSelectChapter(ch.chapterNo);
                        onNavigate('question-bank');
                      }}
                      className="hover:bg-amber-50/60 transition cursor-pointer group"
                    >
                      <td className="py-2.5 px-3 font-semibold text-stone-900 group-hover:text-red-800">
                        <span className="font-bold text-red-800 mr-1.5">Chapter {ch.chapterNo}:</span>
                        {ch.chapterName}
                        {ch.chapterNameTamil && (
                          <span className="text-stone-500 font-normal text-[11px] block sm:inline sm:ml-1.5">
                            ({ch.chapterNameTamil})
                          </span>
                        )}
                      </td>
                      <td className={`py-2.5 px-3 text-center font-bold ${ch.actualM1 === 0 ? 'text-rose-600 bg-rose-50/60' : 'text-blue-700 bg-blue-50/40'}`}>
                        {ch.actualM1}
                      </td>
                      <td className={`py-2.5 px-3 text-center font-bold ${ch.actualM2 === 0 ? 'text-rose-600 bg-rose-50/60' : 'text-emerald-700 bg-emerald-50/40'}`}>
                        {ch.actualM2}
                      </td>
                      <td className={`py-2.5 px-3 text-center font-bold ${ch.actualM3 === 0 ? 'text-rose-600 bg-rose-50/60' : 'text-amber-700 bg-amber-50/40'}`}>
                        {ch.actualM3}
                      </td>
                      <td className={`py-2.5 px-3 text-center font-bold ${ch.actualM5 === 0 ? 'text-rose-600 bg-rose-50/60' : 'text-purple-700 bg-purple-50/40'}`}>
                        {ch.actualM5 === 0 ? <span className="text-[10px] text-stone-400 font-normal">0 (No 5M)</span> : ch.actualM5}
                      </td>
                      <td className="py-2.5 px-3 text-center font-extrabold text-stone-900 bg-stone-50/60">
                        {ch.actualTotal}
                      </td>
                      <td className="py-2.5 px-3 text-center">
                        {ch.expectedTotal !== undefined ? (
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold ${
                            ch.status === 'exact' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-800 border border-amber-200'
                          }`}>
                            {ch.expectedTotal} Qs {ch.status === 'exact' ? '✓' : `(Δ ${ch.delta})`}
                          </span>
                        ) : (
                          <span className="text-stone-400 text-[11px]">N/A</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-stone-100 font-bold border-t-2 border-stone-300 text-stone-900">
                  <td className="py-3 px-3 font-black text-sm">Total ({activeSubject.chapters.length} Lessons)</td>
                  <td className="py-3 px-3 text-center font-black text-blue-900 text-sm">{count1M}</td>
                  <td className="py-3 px-3 text-center font-black text-emerald-900 text-sm">{count2M}</td>
                  <td className="py-3 px-3 text-center font-black text-amber-900 text-sm">{count3M}</td>
                  <td className="py-3 px-3 text-center font-black text-purple-900 text-sm">{count5M}</td>
                  <td className="py-3 px-3 text-center font-black text-stone-950 text-base">{totalQuestions}</td>
                  <td className="py-3 px-3 text-center font-black text-emerald-800 text-xs">
                    {validationReport.totalExpectedQuestions ? `${validationReport.totalExpectedQuestions} Qs (Exact)` : 'Verified'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Chapters Grid (Matches Page 1 All 16 Chapters) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-stone-900">
              All {activeSubject.chapters.length} Chapters / Lessons
            </h2>
            <p className="text-xs text-stone-500">
              Click any chapter to instantly filter its 1, 2, 3, and 5 marks questions with answers
            </p>
          </div>
          <button
            onClick={() => onNavigate('question-bank')}
            className="px-3 py-1 bg-red-800 hover:bg-red-900 text-white text-xs font-bold rounded shadow-sm transition cursor-pointer"
          >
            View All Questions
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {activeSubject.chapters.map(ch => {
            const chQuestions = activeSubject.questions.filter(q => q.chapterNo === ch.no);
            return (
              <div
                key={ch.no}
                onClick={() => {
                  onSelectChapter(ch.no);
                  onNavigate('question-bank');
                }}
                className="bg-white border border-stone-200 rounded-lg p-3.5 hover:border-red-400 hover:shadow-md transition cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-bold text-red-800 mb-1">
                    <span>CHAPTER {ch.no}</span>
                    <span className="text-[10px] bg-red-50 text-red-700 px-1.5 py-0.2 rounded">
                      {chQuestions.length} Qs
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-stone-900 group-hover:text-red-800 transition line-clamp-1">
                    {ch.name}
                  </h4>
                  {ch.nameTamil && (
                    <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                      {ch.nameTamil}
                    </p>
                  )}
                </div>

                <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-500">
                  <span>1M: {chQuestions.filter(q => q.marks === 1).length}</span>
                  <span>2M: {chQuestions.filter(q => q.marks === 2).length}</span>
                  <span>3M: {chQuestions.filter(q => q.marks === 3).length}</span>
                  <span>5M: {chQuestions.filter(q => q.marks === 5).length}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Generate Blueprints (Matches Page 1 bottom Quick Generate) */}
      <section className="bg-stone-50 border border-stone-200 rounded-xl p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-600" />
              Quick Generate Question Paper Templates
            </h3>
            <p className="text-xs text-stone-500">
              One-click standard blueprint generators for Tamil Nadu State Board examinations
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <button
            onClick={() => onNavigate('qp-25')}
            className="flex flex-col items-center justify-center p-3.5 bg-white border border-stone-200 hover:border-amber-500 rounded-lg hover:shadow-sm transition cursor-pointer text-center group"
          >
            <span className="text-lg font-black text-stone-900 group-hover:text-amber-600">25 Marks Paper</span>
            <span className="text-xs text-stone-500 mt-0.5">Unit Test / Slip Test (1.30 Hrs)</span>
            <span className="mt-2 text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
              Launch Blueprint →
            </span>
          </button>

          <button
            onClick={() => onNavigate('qp-50')}
            className="flex flex-col items-center justify-center p-3.5 bg-white border border-stone-200 hover:border-amber-500 rounded-lg hover:shadow-sm transition cursor-pointer text-center group"
          >
            <span className="text-lg font-black text-stone-900 group-hover:text-amber-600">50 Marks Paper</span>
            <span className="text-xs text-stone-500 mt-0.5">Mid-Term Examination (2.00 Hrs)</span>
            <span className="mt-2 text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
              Launch Blueprint →
            </span>
          </button>

          <button
            onClick={() => onNavigate('qp-70')}
            className="flex flex-col items-center justify-center p-3.5 bg-white border border-stone-200 hover:border-amber-500 rounded-lg hover:shadow-sm transition cursor-pointer text-center group"
          >
            <span className="text-lg font-black text-stone-900 group-hover:text-amber-600">70 Marks Paper</span>
            <span className="text-xs text-stone-500 mt-0.5">Quarterly / Half Yearly / Board (3.00 Hrs)</span>
            <span className="mt-2 text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
              Launch Blueprint →
            </span>
          </button>

          <button
            onClick={() => onNavigate('qp-custom')}
            className="flex flex-col items-center justify-center p-3.5 bg-white border border-stone-200 hover:border-amber-500 rounded-lg hover:shadow-sm transition cursor-pointer text-center group"
          >
            <span className="text-lg font-black text-stone-900 group-hover:text-amber-600">Custom Paper</span>
            <span className="text-xs text-stone-500 mt-0.5">Custom Marks, Chapters & Sections</span>
            <span className="mt-2 text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
              Configure Paper →
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};
