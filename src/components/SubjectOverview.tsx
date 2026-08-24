import React, { useState, useMemo } from 'react';
import { 
  BarChart3, 
  CheckCircle2, 
  AlertTriangle, 
  AlertCircle, 
  Search, 
  Filter, 
  ArrowRight, 
  Layers, 
  BookOpen, 
  Download, 
  Sparkles, 
  FileCheck2, 
  ShieldCheck, 
  HelpCircle,
  Eye,
  Check,
  Zap,
  BookMarked,
  LayoutGrid,
  Info
} from 'lucide-react';
import { SubjectData, Chapter, Question, LanguageMode } from '../types';
import { validateSubject, SubjectValidationReport, ChapterValidationResult } from '../utils/textbookValidator';
import { exportSubjectQuestionsToCSV } from '../utils/csvExport';

interface SubjectOverviewProps {
  subject: SubjectData;
  languageMode: LanguageMode;
  onNavigate: (view: string) => void;
  onSelectChapter: (chapterNo: number) => void;
  onSelectChapterForBrowser?: (chapterNo: number) => void;
}

export const SubjectOverview: React.FC<SubjectOverviewProps> = ({
  subject,
  languageMode,
  onNavigate,
  onSelectChapter,
  onSelectChapterForBrowser
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterMode, setFilterMode] = useState<'all' | 'gaps' | 'missing5m' | 'missing1m' | 'discrepancies' | 'complete'>('all');
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [selectedDiscrepancyModal, setSelectedDiscrepancyModal] = useState<ChapterValidationResult | null>(null);

  // Run textbook validation report
  const validationReport: SubjectValidationReport = useMemo(() => {
    return validateSubject(subject);
  }, [subject]);

  // Mark totals
  const totalQuestions = subject.questions.length;
  const count1M = subject.questions.filter(q => q.marks === 1).length;
  const count2M = subject.questions.filter(q => q.marks === 2).length;
  const count3M = subject.questions.filter(q => q.marks === 3).length;
  const count5M = subject.questions.filter(q => q.marks === 5).length;

  // Filtered chapter rows
  const filteredChapters = useMemo(() => {
    return validationReport.chapterResults.filter(ch => {
      // Search
      const matchesSearch = 
        ch.chapterName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (ch.chapterNameTamil && ch.chapterNameTamil.includes(searchQuery)) ||
        ch.chapterNo.toString() === searchQuery.trim();

      if (!matchesSearch) return false;

      // Filter modes
      if (filterMode === 'gaps') {
        return ch.contentGaps.length > 0;
      }
      if (filterMode === 'missing5m') {
        return ch.actualM5 === 0;
      }
      if (filterMode === 'missing1m') {
        return ch.actualM1 === 0;
      }
      if (filterMode === 'discrepancies') {
        return ch.status !== 'exact';
      }
      if (filterMode === 'complete') {
        return ch.actualM1 > 0 && ch.actualM2 > 0 && ch.actualM3 > 0 && ch.actualM5 > 0;
      }

      return true;
    });
  }, [validationReport, searchQuery, filterMode]);

  // Content gap stats
  const chaptersWithout5M = validationReport.chapterResults.filter(c => c.actualM5 === 0);
  const chaptersWithout1M = validationReport.chapterResults.filter(c => c.actualM1 === 0);
  const chaptersWithout3M = validationReport.chapterResults.filter(c => c.actualM3 === 0);
  const fullCoverageChapters = validationReport.chapterResults.filter(c => c.actualM1 > 0 && c.actualM2 > 0 && c.actualM3 > 0 && c.actualM5 > 0);

  const handleExportCSV = () => {
    exportSubjectQuestionsToCSV(subject);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* Top Header Card */}
      <div className="bg-gradient-to-r from-[#1e293b] to-[#0f172a] text-white rounded-xl p-6 shadow-sm border border-slate-700 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-amber-400 text-stone-950 text-xs font-black uppercase px-2 py-0.5 rounded">
                {subject.standard}
              </span>
              <span className="bg-slate-800 text-slate-300 text-xs font-semibold px-2 py-0.5 rounded">
                {subject.board}
              </span>
            </div>
            <h1 className="text-xl md:text-2xl font-black mt-1 text-white tracking-tight flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-amber-400" />
              {subject.name} — Subject Overview & Gap Analysis
            </h1>
            {subject.nameTamil && (
              <p className="text-xs text-amber-300/90 font-medium">
                {subject.nameTamil} · முழுமையான பாடவாரியான வினாக்கள் மற்றும் மதிப்பீட்டு பகுப்பாய்வு
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleExportCSV}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition shadow cursor-pointer border ${
                downloadSuccess
                  ? 'bg-emerald-600 border-emerald-700 text-white'
                  : 'bg-white/10 hover:bg-white/20 text-white border-white/20'
              }`}
            >
              {downloadSuccess ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4 text-amber-300" />}
              {downloadSuccess ? 'CSV Exported!' : 'Export CSV Matrix'}
            </button>

            <button
              onClick={() => onNavigate('browse-chapter')}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 rounded-lg text-xs font-bold transition shadow cursor-pointer"
            >
              <BookMarked className="w-4 h-4" />
              Open Chapter Browser
            </button>
          </div>
        </div>

        {/* Validation Status Strip */}
        <div className="pt-3 border-t border-slate-700/80 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            {validationReport.overallStatus === 'all_verified' ? (
              <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2.5 py-1 rounded-md font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                100% Textbook Benchmark Verified ({validationReport.matchedChaptersCount}/{subject.chapters.length} Chapters Match)
              </span>
            ) : validationReport.overallStatus === 'has_discrepancies' ? (
              <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2.5 py-1 rounded-md font-bold">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                {validationReport.discrepantChaptersCount} Chapters with Question Count Variance (Audit Required)
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-300 border border-blue-500/40 px-2.5 py-1 rounded-md font-bold">
                <Info className="w-4 h-4 text-blue-400" />
                Custom Subject (No default State Board benchmark)
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 text-slate-300 text-[11px]">
            <span>Total Available Questions: <strong className="text-white">{totalQuestions}</strong></span>
            {validationReport.totalExpectedQuestions !== undefined && (
              <span>Textbook Benchmark: <strong className="text-amber-300">{validationReport.totalExpectedQuestions}</strong></span>
            )}
          </div>
        </div>
      </div>

      {/* Top Diagnostic Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="bg-white border border-stone-200 rounded-xl p-3.5 shadow-xs">
          <p className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">Total Pool</p>
          <p className="text-2xl font-black text-stone-900 mt-0.5">{totalQuestions}</p>
          <p className="text-[10px] text-stone-500 mt-1">{subject.chapters.length} Total Lessons</p>
        </div>

        <div className="bg-white border border-stone-200 rounded-xl p-3.5 shadow-xs">
          <p className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">1 Mark (Part I)</p>
          <p className="text-2xl font-black text-blue-800 mt-0.5">{count1M}</p>
          <p className="text-[10px] text-stone-500 mt-1">{((count1M / (totalQuestions || 1)) * 100).toFixed(0)}% of total pool</p>
        </div>

        <div className="bg-white border border-stone-200 rounded-xl p-3.5 shadow-xs">
          <p className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">2 Marks (Part II)</p>
          <p className="text-2xl font-black text-emerald-800 mt-0.5">{count2M}</p>
          <p className="text-[10px] text-stone-500 mt-1">{((count2M / (totalQuestions || 1)) * 100).toFixed(0)}% of total pool</p>
        </div>

        <div className="bg-white border border-stone-200 rounded-xl p-3.5 shadow-xs">
          <p className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">3 Marks (Part III)</p>
          <p className="text-2xl font-black text-amber-800 mt-0.5">{count3M}</p>
          <p className="text-[10px] text-stone-500 mt-1">{((count3M / (totalQuestions || 1)) * 100).toFixed(0)}% of total pool</p>
        </div>

        <div className="bg-white border border-stone-200 rounded-xl p-3.5 shadow-xs">
          <p className="text-[11px] font-bold text-purple-700 uppercase tracking-wider">5 Marks (Part IV)</p>
          <p className="text-2xl font-black text-purple-800 mt-0.5">{count5M}</p>
          <p className="text-[10px] text-stone-500 mt-1">{((count5M / (totalQuestions || 1)) * 100).toFixed(0)}% of total pool</p>
        </div>

        <div className="bg-white border border-stone-200 rounded-xl p-3.5 shadow-xs">
          <p className="text-[11px] font-bold text-rose-700 uppercase tracking-wider">Gap Chapters</p>
          <p className="text-2xl font-black text-rose-800 mt-0.5">{chaptersWithout5M.length}</p>
          <p className="text-[10px] text-stone-500 mt-1">Chapters with 0 5M essays</p>
        </div>
      </div>

      {/* Content Gap Diagnosis Alert Banner */}
      {chaptersWithout5M.length > 0 && (
        <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-950 text-sm">
                Curriculum Gap Analysis: {chaptersWithout5M.length} chapters do not have 5-Mark Essay questions
              </p>
              <p className="text-amber-800 mt-0.5">
                {subject.id === 'ca-11' ? (
                  <>According to the standard TN syllabus for 11th Computer Applications, <strong>Chapters 5, 12, 16, and 18</strong> do not evaluate 5-mark long answers (focusing exclusively on objective & short practicals).</>
                ) : (
                  <>Chapters: {chaptersWithout5M.map(c => `Ch ${c.chapterNo}`).join(', ')} do not contain 5M essays.</>
                )}
              </p>
            </div>
          </div>

          <button
            onClick={() => setFilterMode('missing5m')}
            className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg shrink-0 cursor-pointer shadow-xs"
          >
            Filter 0-5M Chapters
          </button>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search by chapter name or number..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-stone-50 border border-stone-300 rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[11px] font-bold text-stone-500 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Filter:
            </span>

            <button
              onClick={() => setFilterMode('all')}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold transition cursor-pointer ${
                filterMode === 'all'
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              All ({subject.chapters.length})
            </button>

            <button
              onClick={() => setFilterMode('gaps')}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold transition cursor-pointer ${
                filterMode === 'gaps'
                  ? 'bg-rose-700 text-white'
                  : 'bg-rose-50 text-rose-800 hover:bg-rose-100 border border-rose-200'
              }`}
            >
              Has Content Gaps ({validationReport.chapterResults.filter(c => c.contentGaps.length > 0).length})
            </button>

            <button
              onClick={() => setFilterMode('missing5m')}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold transition cursor-pointer ${
                filterMode === 'missing5m'
                  ? 'bg-amber-600 text-white'
                  : 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200'
              }`}
            >
              0 5M Essays ({chaptersWithout5M.length})
            </button>

            {chaptersWithout1M.length > 0 && (
              <button
                onClick={() => setFilterMode('missing1m')}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition cursor-pointer ${
                  filterMode === 'missing1m'
                    ? 'bg-blue-700 text-white'
                    : 'bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-200'
                }`}
              >
                0 1M MCQs ({chaptersWithout1M.length})
              </button>
            )}

            <button
              onClick={() => setFilterMode('complete')}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold transition cursor-pointer ${
                filterMode === 'complete'
                  ? 'bg-emerald-700 text-white'
                  : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200'
              }`}
            >
              Full 4-Part Coverage ({fullCoverageChapters.length})
            </button>

            {validationReport.discrepantChaptersCount > 0 && (
              <button
                onClick={() => setFilterMode('discrepancies')}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition cursor-pointer ${
                  filterMode === 'discrepancies'
                    ? 'bg-amber-600 text-white'
                    : 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200'
                }`}
              >
                Discrepancies ({validationReport.discrepantChaptersCount})
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Tabular Matrix */}
      <div className="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden space-y-0">
        <div className="p-4 border-b border-stone-200 bg-stone-50/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-600" />
              Chapter-wise Mark Distribution & Gap Matrix
            </h3>
            <p className="text-xs text-stone-500">
              Showing {filteredChapters.length} of {subject.chapters.length} chapters
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1 text-[11px] text-stone-600 bg-white border border-stone-200 px-2 py-0.5 rounded">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span> Verified
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-stone-600 bg-white border border-stone-200 px-2 py-0.5 rounded">
              <span className="w-2 h-2 rounded-full bg-rose-500 inline-block"></span> 0 Question Gap
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-stone-100 border-b border-stone-200 text-stone-700 font-bold uppercase tracking-wider text-[11px]">
                <th className="py-3 px-3.5">Lesson / Chapter</th>
                <th className="py-3 px-3 text-center text-blue-800 bg-blue-50/50">1M (Part I)</th>
                <th className="py-3 px-3 text-center text-emerald-800 bg-emerald-50/50">2M (Part II)</th>
                <th className="py-3 px-3 text-center text-amber-800 bg-amber-50/50">3M (Part III)</th>
                <th className="py-3 px-3 text-center text-purple-800 bg-purple-50/50">5M (Part IV)</th>
                <th className="py-3 px-3 text-center font-black text-stone-900 bg-stone-200/50">Total</th>
                <th className="py-3 px-3 text-center font-semibold">Textbook Benchmark</th>
                <th className="py-3 px-3">Content Gap Status</th>
                <th className="py-3 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filteredChapters.map(ch => {
                const isDiscrepant = ch.status !== 'exact' && ch.status !== 'unbenchmarked';
                const hasGaps = ch.contentGaps.length > 0;

                return (
                  <tr key={ch.chapterNo} className="hover:bg-amber-50/40 transition group">
                    {/* Chapter Name */}
                    <td className="py-3 px-3.5 font-medium text-stone-900 max-w-xs">
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-red-800 shrink-0 bg-red-50 border border-red-100 px-1.5 py-0.2 rounded text-[11px]">
                          Ch {ch.chapterNo}
                        </span>
                        <div>
                          <p className="font-bold text-stone-900 group-hover:text-red-800 transition leading-snug">
                            {ch.chapterName}
                          </p>
                          {ch.chapterNameTamil && (
                            <p className="text-[11px] text-stone-500 leading-tight mt-0.5">
                              {ch.chapterNameTamil}
                            </p>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* 1 Mark */}
                    <td className={`py-3 px-3 text-center font-bold ${
                      ch.actualM1 === 0 ? 'bg-rose-50 text-rose-700' : 'bg-blue-50/30 text-blue-700'
                    }`}>
                      {ch.actualM1 === 0 ? (
                        <span className="text-[10px] text-rose-600 bg-rose-100 px-1.5 py-0.5 rounded font-extrabold">0 (None)</span>
                      ) : (
                        ch.actualM1
                      )}
                    </td>

                    {/* 2 Marks */}
                    <td className={`py-3 px-3 text-center font-bold ${
                      ch.actualM2 === 0 ? 'bg-rose-50 text-rose-700' : 'bg-emerald-50/30 text-emerald-700'
                    }`}>
                      {ch.actualM2 === 0 ? (
                        <span className="text-[10px] text-rose-600 bg-rose-100 px-1.5 py-0.5 rounded font-extrabold">0 (None)</span>
                      ) : (
                        ch.actualM2
                      )}
                    </td>

                    {/* 3 Marks */}
                    <td className={`py-3 px-3 text-center font-bold ${
                      ch.actualM3 === 0 ? 'bg-rose-50 text-rose-700' : 'bg-amber-50/30 text-amber-700'
                    }`}>
                      {ch.actualM3 === 0 ? (
                        <span className="text-[10px] text-rose-600 bg-rose-100 px-1.5 py-0.5 rounded font-extrabold">0 (None)</span>
                      ) : (
                        ch.actualM3
                      )}
                    </td>

                    {/* 5 Marks */}
                    <td className={`py-3 px-3 text-center font-bold ${
                      ch.actualM5 === 0 ? 'bg-rose-50/60 text-rose-700' : 'bg-purple-50/30 text-purple-700'
                    }`}>
                      {ch.actualM5 === 0 ? (
                        <span className="text-[10px] text-rose-700 bg-rose-100/90 px-1.5 py-0.5 rounded font-bold" title="No 5-mark essay questions in this chapter">
                          0 (No 5M)
                        </span>
                      ) : (
                        ch.actualM5
                      )}
                    </td>

                    {/* Total */}
                    <td className="py-3 px-3 text-center font-black text-stone-900 bg-stone-100/40 text-sm">
                      {ch.actualTotal}
                    </td>

                    {/* Validation / Benchmark */}
                    <td className="py-3 px-3 text-center text-xs">
                      {ch.expectedTotal !== undefined ? (
                        <div className="inline-flex items-center gap-1">
                          <span className={`font-bold px-2 py-0.5 rounded text-[11px] ${
                            ch.status === 'exact'
                              ? 'bg-emerald-100 text-emerald-800'
                              : ch.status === 'deficit'
                              ? 'bg-rose-100 text-rose-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}>
                            {ch.expectedTotal} Qs
                          </span>
                          {ch.status === 'exact' ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" title="Exact match with official textbook" />
                          ) : (
                            <button
                              onClick={() => setSelectedDiscrepancyModal(ch)}
                              className="text-amber-600 hover:text-amber-800 cursor-pointer"
                              title={ch.discrepancyReasons.join(', ')}
                            >
                              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                            </button>
                          )}
                        </div>
                      ) : (
                        <span className="text-stone-400 italic text-[11px]">N/A</span>
                      )}
                    </td>

                    {/* Content Gap Badges */}
                    <td className="py-3 px-3">
                      {ch.contentGaps.length === 0 ? (
                        <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Complete Coverage
                        </span>
                      ) : (
                        <div className="flex flex-wrap gap-1">
                          {ch.actualM5 === 0 && (
                            <span className="text-[10px] bg-rose-50 text-rose-700 border border-rose-200 px-1.5 py-0.2 rounded font-semibold">
                              No 5M
                            </span>
                          )}
                          {ch.actualM1 === 0 && (
                            <span className="text-[10px] bg-blue-50 text-blue-700 border border-blue-200 px-1.5 py-0.2 rounded font-semibold">
                              No 1M
                            </span>
                          )}
                          {ch.actualM3 === 0 && (
                            <span className="text-[10px] bg-amber-50 text-amber-700 border border-amber-200 px-1.5 py-0.2 rounded font-semibold">
                              No 3M
                            </span>
                          )}
                        </div>
                      )}
                    </td>

                    {/* Action buttons */}
                    <td className="py-3 px-3 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => {
                            if (onSelectChapterForBrowser) {
                              onSelectChapterForBrowser(ch.chapterNo);
                            }
                            onNavigate('browse-chapter');
                          }}
                          className="px-2 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded text-[11px] font-bold transition cursor-pointer"
                          title="Browse Chapter Breakdown with Answers"
                        >
                          Browse
                        </button>

                        <button
                          onClick={() => {
                            onSelectChapter(ch.chapterNo);
                            onNavigate('question-bank');
                          }}
                          className="px-2 py-1 bg-red-800 hover:bg-red-900 text-white rounded text-[11px] font-bold transition cursor-pointer"
                          title="View all questions in question bank"
                        >
                          Questions →
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}

              {/* Total Footer Row */}
              <tr className="bg-stone-100 font-bold border-t-2 border-stone-300 text-stone-900">
                <td className="py-3.5 px-3.5 font-black text-sm">
                  Subject Grand Total ({subject.chapters.length} Lessons)
                </td>
                <td className="py-3.5 px-3 text-center font-black text-blue-900 text-sm">{count1M}</td>
                <td className="py-3.5 px-3 text-center font-black text-emerald-900 text-sm">{count2M}</td>
                <td className="py-3.5 px-3 text-center font-black text-amber-900 text-sm">{count3M}</td>
                <td className="py-3.5 px-3 text-center font-black text-purple-900 text-sm">{count5M}</td>
                <td className="py-3.5 px-3 text-center font-black text-stone-950 text-base">{totalQuestions}</td>
                <td className="py-3.5 px-3 text-center font-black text-emerald-800 text-sm">
                  {validationReport.totalExpectedQuestions ? `${validationReport.totalExpectedQuestions} Qs (Exact)` : 'Verified'}
                </td>
                <td className="py-3.5 px-3 text-xs text-stone-600">
                  {chaptersWithout5M.length} chapters lack 5M essays
                </td>
                <td className="py-3.5 px-3 text-right">
                  <button
                    onClick={() => onNavigate('question-bank')}
                    className="text-xs font-bold text-red-800 hover:underline cursor-pointer"
                  >
                    View All Qs
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Discrepancy Detail Modal (if clicked) */}
      {selectedDiscrepancyModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-5 space-y-4 shadow-xl border border-stone-200">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <h3 className="font-bold text-stone-900 text-sm">
                  Chapter {selectedDiscrepancyModal.chapterNo} Validation Report
                </h3>
              </div>
              <button
                onClick={() => setSelectedDiscrepancyModal(null)}
                className="text-stone-400 hover:text-stone-700 font-bold text-lg"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <p className="font-semibold text-stone-800">
                {selectedDiscrepancyModal.chapterName}
              </p>
              
              <div className="bg-stone-50 p-3 rounded-lg border border-stone-200 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-stone-600">Current App Questions:</span>
                  <span className="font-bold text-stone-900">{selectedDiscrepancyModal.actualTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-600">Expected Textbook Benchmark:</span>
                  <span className="font-bold text-amber-700">{selectedDiscrepancyModal.expectedTotal}</span>
                </div>
                <div className="flex justify-between border-t border-stone-200 pt-1">
                  <span className="text-stone-600">Delta Variance:</span>
                  <span className={`font-bold ${selectedDiscrepancyModal.delta === 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
                    {selectedDiscrepancyModal.delta > 0 ? `+${selectedDiscrepancyModal.delta}` : selectedDiscrepancyModal.delta}
                  </span>
                </div>
              </div>

              <div className="space-y-1 pt-1">
                <p className="font-bold text-stone-700">Audit Notes & Findings:</p>
                <ul className="list-disc list-inside text-stone-600 space-y-1">
                  {selectedDiscrepancyModal.discrepancyReasons.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-200 flex justify-end">
              <button
                onClick={() => setSelectedDiscrepancyModal(null)}
                className="px-4 py-1.5 bg-stone-900 text-white rounded-lg text-xs font-bold"
              >
                Close Audit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
