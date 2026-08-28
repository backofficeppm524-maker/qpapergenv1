import React, { useState, useMemo } from 'react';
import { 
  BarChart3, 
  Layers, 
  AlertTriangle, 
  CheckCircle2, 
  AlertCircle, 
  ArrowUpDown, 
  Filter, 
  ArrowRight, 
  BookOpen, 
  Plus, 
  Sparkles,
  TrendingDown,
  TrendingUp,
  Info,
  ChevronRight
} from 'lucide-react';
import { SubjectData, Chapter, Question } from '../types';

interface DashboardWidgetProps {
  subject: SubjectData;
  onSelectChapter?: (chapterNo: number) => void;
  onSelectChapterForBrowser?: (chapterNo: number) => void;
  onNavigate?: (view: string) => void;
}

export const DashboardWidget: React.FC<DashboardWidgetProps> = ({
  subject,
  onSelectChapter,
  onSelectChapterForBrowser,
  onNavigate
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'low' | 'missing5m' | 'missing1m'>('all');
  const [sortBy, setSortBy] = useState<'chapterNo' | 'lowestFirst' | 'highestFirst'>('chapterNo');
  const [lowThreshold, setLowThreshold] = useState<number>(8);

  // Calculate detailed stats per chapter
  const chapterBreakdowns = useMemo(() => {
    return subject.chapters.map(ch => {
      const chQuestions = subject.questions.filter(q => q.chapterNo === ch.no);
      const m1 = chQuestions.filter(q => q.marks === 1).length;
      const m2 = chQuestions.filter(q => q.marks === 2).length;
      const m3 = chQuestions.filter(q => q.marks === 3).length;
      const m5 = chQuestions.filter(q => q.marks === 5).length;
      const total = chQuestions.length;

      // Status assessment
      let status: 'healthy' | 'moderate' | 'low' | 'critical' = 'healthy';
      const warningReasons: string[] = [];

      if (total === 0) {
        status = 'critical';
        warningReasons.push('0 questions available');
      } else if (total < 5 || m5 === 0) {
        status = total < 5 ? 'critical' : 'low';
        if (total < 5) warningReasons.push(`Very low total (${total} Qs)`);
        if (m5 === 0) warningReasons.push('No 5-mark essay questions');
      } else if (total < lowThreshold) {
        status = 'moderate';
        warningReasons.push(`Below threshold (${total} < ${lowThreshold})`);
      }

      if (m1 === 0 && total > 0) warningReasons.push('No 1-mark MCQs');
      if (m2 === 0 && total > 0) warningReasons.push('No 2-mark questions');
      if (m3 === 0 && total > 0) warningReasons.push('No 3-mark questions');

      return {
        chapterNo: ch.no,
        chapterName: ch.name,
        chapterNameTamil: ch.nameTamil,
        m1,
        m2,
        m3,
        m5,
        total,
        status,
        warningReasons
      };
    });
  }, [subject, lowThreshold]);

  // Overall totals and averages
  const totals = useMemo(() => {
    const totalQ = subject.questions.length;
    const avg = subject.chapters.length > 0 ? (totalQ / subject.chapters.length).toFixed(1) : '0';
    
    // Find min and max chapters
    const sorted = [...chapterBreakdowns].sort((a, b) => a.total - b.total);
    const lowest = sorted[0];
    const highest = sorted[sorted.length - 1];
    const lowCountChapters = chapterBreakdowns.filter(c => c.total < lowThreshold || c.m5 === 0);

    return {
      totalQuestions: totalQ,
      averagePerChapter: avg,
      lowestChapter: lowest,
      highestChapter: highest,
      lowCountChaptersCount: lowCountChapters.length
    };
  }, [subject, chapterBreakdowns, lowThreshold]);

  // Filtered and sorted chapter list
  const displayChapters = useMemo(() => {
    let list = chapterBreakdowns.filter(ch => {
      if (filterMode === 'low') {
        return ch.total < lowThreshold || ch.status === 'low' || ch.status === 'critical';
      }
      if (filterMode === 'missing5m') {
        return ch.m5 === 0;
      }
      if (filterMode === 'missing1m') {
        return ch.m1 === 0;
      }
      return true;
    });

    if (sortBy === 'lowestFirst') {
      list.sort((a, b) => a.total - b.total);
    } else if (sortBy === 'highestFirst') {
      list.sort((a, b) => b.total - a.total);
    } else {
      list.sort((a, b) => a.chapterNo - b.chapterNo);
    }

    return list;
  }, [chapterBreakdowns, filterMode, sortBy, lowThreshold]);

  return (
    <div className="bg-white border-2 border-stone-200 rounded-2xl p-5 shadow-xs space-y-5">
      {/* Widget Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-amber-100 text-amber-800 rounded-lg">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-stone-900 text-base flex items-center gap-2">
                Chapter Question Bank Distribution & Low-Count Analyzer
              </h3>
              <p className="text-xs text-stone-500">
                Mark-type breakdown (1M, 2M, 3M, 5M) per chapter to identify content gaps and understocked lessons
              </p>
            </div>
          </div>
        </div>

        {/* Global Summary Badges */}
        <div className="flex items-center gap-2 flex-wrap text-xs">
          <span className="bg-stone-100 text-stone-800 font-bold px-2.5 py-1 rounded-lg border border-stone-200">
            Avg: <span className="text-amber-700 font-black">{totals.averagePerChapter}</span> Qs/Ch
          </span>
          {totals.lowCountChaptersCount > 0 ? (
            <span className="bg-rose-100 text-rose-800 font-bold px-2.5 py-1 rounded-lg border border-rose-200 flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
              {totals.lowCountChaptersCount} Chapters Need Questions
            </span>
          ) : (
            <span className="bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-lg border border-emerald-200 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              All Chapters Well Stocked
            </span>
          )}
        </div>
      </div>

      {/* Metric Callout Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Lowest Count Chapter Alert */}
        <div className="bg-rose-50/70 border border-rose-200 rounded-xl p-3.5 flex items-start gap-3">
          <div className="p-2 bg-rose-100 text-rose-700 rounded-lg shrink-0 mt-0.5">
            <TrendingDown className="w-4 h-4" />
          </div>
          <div className="text-xs space-y-0.5 flex-1 min-w-0">
            <p className="font-bold text-rose-900">Lowest Question Count</p>
            <p className="font-extrabold text-stone-900 truncate">
              Ch {totals.lowestChapter?.chapterNo}. {totals.lowestChapter?.chapterName}
            </p>
            <p className="text-[11px] text-rose-700 font-semibold">
              {totals.lowestChapter?.total} total Qs ({totals.lowestChapter?.m1}·1M, {totals.lowestChapter?.m2}·2M, {totals.lowestChapter?.m3}·3M, {totals.lowestChapter?.m5}·5M)
            </p>
          </div>
        </div>

        {/* Highest Stocked Chapter */}
        <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-3.5 flex items-start gap-3">
          <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg shrink-0 mt-0.5">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div className="text-xs space-y-0.5 flex-1 min-w-0">
            <p className="font-bold text-emerald-900">Most Comprehensive</p>
            <p className="font-extrabold text-stone-900 truncate">
              Ch {totals.highestChapter?.chapterNo}. {totals.highestChapter?.chapterName}
            </p>
            <p className="text-[11px] text-emerald-700 font-semibold">
              {totals.highestChapter?.total} total questions available
            </p>
          </div>
        </div>

        {/* Legend & Threshold Config */}
        <div className="bg-stone-50 border border-stone-200 rounded-xl p-3.5 flex flex-col justify-between text-xs space-y-1.5">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-bold text-stone-700">Low-Count Alert Threshold:</span>
            <select
              value={lowThreshold}
              onChange={e => setLowThreshold(Number(e.target.value))}
              className="bg-white border border-stone-300 rounded px-1.5 py-0.5 text-xs font-bold text-stone-800"
            >
              <option value={5}>&lt; 5 Questions</option>
              <option value={8}>&lt; 8 Questions (Recommended)</option>
              <option value={10}>&lt; 10 Questions</option>
              <option value={12}>&lt; 12 Questions</option>
            </select>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-stone-500 font-semibold flex-wrap">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500 inline-block" /> 1M</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> 2M</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500 inline-block" /> 3M</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-500 inline-block" /> 5M</span>
          </div>
        </div>
      </div>

      {/* Filter and Sort Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 bg-stone-50/80 p-3 rounded-xl border border-stone-200 text-xs">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-bold text-stone-600 flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5 text-stone-500" /> Filter:
          </span>

          <button
            type="button"
            onClick={() => setFilterMode('all')}
            className={`px-2.5 py-1 rounded-md font-bold transition cursor-pointer ${
              filterMode === 'all'
                ? 'bg-stone-900 text-white'
                : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
            }`}
          >
            All Chapters ({subject.chapters.length})
          </button>

          <button
            type="button"
            onClick={() => setFilterMode('low')}
            className={`px-2.5 py-1 rounded-md font-bold transition cursor-pointer flex items-center gap-1 ${
              filterMode === 'low'
                ? 'bg-rose-700 text-white'
                : 'bg-rose-50 text-rose-800 hover:bg-rose-100 border border-rose-200'
            }`}
          >
            <AlertTriangle className="w-3 h-3" />
            Understocked / Low ({chapterBreakdowns.filter(c => c.total < lowThreshold || c.m5 === 0).length})
          </button>

          <button
            type="button"
            onClick={() => setFilterMode('missing5m')}
            className={`px-2.5 py-1 rounded-md font-bold transition cursor-pointer ${
              filterMode === 'missing5m'
                ? 'bg-purple-800 text-white'
                : 'bg-purple-50 text-purple-800 hover:bg-purple-100 border border-purple-200'
            }`}
          >
            0 Essay (5M) ({chapterBreakdowns.filter(c => c.m5 === 0).length})
          </button>

          <button
            type="button"
            onClick={() => setFilterMode('missing1m')}
            className={`px-2.5 py-1 rounded-md font-bold transition cursor-pointer ${
              filterMode === 'missing1m'
                ? 'bg-blue-800 text-white'
                : 'bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-200'
            }`}
          >
            0 MCQ (1M) ({chapterBreakdowns.filter(c => c.m1 === 0).length})
          </button>
        </div>

        {/* Sort Controls */}
        <div className="flex items-center gap-1.5 self-end sm:self-auto">
          <span className="font-bold text-stone-600 flex items-center gap-1 text-[11px]">
            <ArrowUpDown className="w-3 h-3 text-stone-500" /> Sort:
          </span>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as any)}
            className="bg-white border border-stone-300 rounded-md px-2 py-1 text-xs font-semibold text-stone-800"
          >
            <option value="chapterNo">Chapter Order (1 → {subject.chapters.length})</option>
            <option value="lowestFirst">Lowest Count First ⚠️</option>
            <option value="highestFirst">Highest Count First</option>
          </select>
        </div>
      </div>

      {/* Chapters Breakdown Table */}
      <div className="overflow-x-auto border border-stone-200 rounded-xl">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-stone-100 border-b border-stone-200 text-stone-700 font-bold uppercase tracking-wider text-[11px]">
              <th className="py-2.5 px-3">Lesson / Chapter</th>
              <th className="py-2.5 px-2 text-center text-blue-800 bg-blue-50/50">1M</th>
              <th className="py-2.5 px-2 text-center text-emerald-800 bg-emerald-50/50">2M</th>
              <th className="py-2.5 px-2 text-center text-amber-800 bg-amber-50/50">3M</th>
              <th className="py-2.5 px-2 text-center text-purple-800 bg-purple-50/50">5M</th>
              <th className="py-2.5 px-3 text-center font-black text-stone-900 bg-stone-200/50">Total</th>
              <th className="py-2.5 px-3 w-44">Proportion Distribution</th>
              <th className="py-2.5 px-3">Stock Status</th>
              <th className="py-2.5 px-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 text-[11px]">
            {displayChapters.map(ch => {
              const maxQ = Math.max(1, totals.highestChapter?.total || 20);
              const pct1 = ch.total > 0 ? (ch.m1 / ch.total) * 100 : 0;
              const pct2 = ch.total > 0 ? (ch.m2 / ch.total) * 100 : 0;
              const pct3 = ch.total > 0 ? (ch.m3 / ch.total) * 100 : 0;
              const pct5 = ch.total > 0 ? (ch.m5 / ch.total) * 100 : 0;

              const isCritical = ch.total === 0 || ch.total < 5;
              const isLow = ch.total < lowThreshold || ch.m5 === 0;

              return (
                <tr 
                  key={ch.chapterNo}
                  className={`hover:bg-amber-50/50 transition ${
                    isCritical 
                      ? 'bg-rose-50/30' 
                      : isLow 
                      ? 'bg-amber-50/20' 
                      : ''
                  }`}
                >
                  {/* Chapter info */}
                  <td className="py-2.5 px-3 font-semibold text-stone-900 max-w-[220px]">
                    <div className="flex items-center gap-2">
                      <span className={`px-1.5 py-0.2 rounded font-black text-[10px] shrink-0 ${
                        isCritical
                          ? 'bg-rose-600 text-white'
                          : isLow
                          ? 'bg-amber-500 text-stone-950'
                          : 'bg-stone-200 text-stone-800'
                      }`}>
                        Ch {ch.chapterNo}
                      </span>
                      <div className="truncate">
                        <p className="font-bold text-stone-900 truncate" title={ch.chapterName}>
                          {ch.chapterName}
                        </p>
                        {ch.chapterNameTamil && (
                          <p className="text-[10px] text-stone-500 truncate" title={ch.chapterNameTamil}>
                            {ch.chapterNameTamil}
                          </p>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* 1M */}
                  <td className={`py-2.5 px-2 text-center font-bold ${
                    ch.m1 === 0 ? 'bg-rose-50 text-rose-600' : 'text-blue-700'
                  }`}>
                    {ch.m1}
                  </td>

                  {/* 2M */}
                  <td className={`py-2.5 px-2 text-center font-bold ${
                    ch.m2 === 0 ? 'bg-rose-50 text-rose-600' : 'text-emerald-700'
                  }`}>
                    {ch.m2}
                  </td>

                  {/* 3M */}
                  <td className={`py-2.5 px-2 text-center font-bold ${
                    ch.m3 === 0 ? 'bg-rose-50 text-rose-600' : 'text-amber-700'
                  }`}>
                    {ch.m3}
                  </td>

                  {/* 5M */}
                  <td className={`py-2.5 px-2 text-center font-bold ${
                    ch.m5 === 0 ? 'bg-rose-50 text-rose-700 font-extrabold' : 'text-purple-700'
                  }`}>
                    {ch.m5 === 0 ? (
                      <span className="text-[10px] bg-rose-100 text-rose-800 px-1 py-0.2 rounded font-black">0</span>
                    ) : (
                      ch.m5
                    )}
                  </td>

                  {/* Total */}
                  <td className="py-2.5 px-3 text-center font-black text-stone-900 bg-stone-50 text-xs">
                    <span className={`px-2 py-0.5 rounded ${
                      isCritical
                        ? 'bg-rose-100 text-rose-900 font-black'
                        : isLow
                        ? 'bg-amber-100 text-amber-900 font-bold'
                        : 'text-stone-900'
                    }`}>
                      {ch.total}
                    </span>
                  </td>

                  {/* Proportional Distribution Bar */}
                  <td className="py-2.5 px-3 w-44">
                    {ch.total > 0 ? (
                      <div className="space-y-1">
                        <div className="h-2.5 w-full bg-stone-100 rounded-full overflow-hidden flex border border-stone-200">
                          <div style={{ width: `${pct1}%` }} className="bg-blue-500" title={`1M: ${ch.m1} (${pct1.toFixed(0)}%)`} />
                          <div style={{ width: `${pct2}%` }} className="bg-emerald-500" title={`2M: ${ch.m2} (${pct2.toFixed(0)}%)`} />
                          <div style={{ width: `${pct3}%` }} className="bg-amber-500" title={`3M: ${ch.m3} (${pct3.toFixed(0)}%)`} />
                          <div style={{ width: `${pct5}%` }} className="bg-purple-600" title={`5M: ${ch.m5} (${pct5.toFixed(0)}%)`} />
                        </div>
                        <div className="flex justify-between text-[9px] text-stone-400 font-semibold px-0.5">
                          <span>1M:{ch.m1}</span>
                          <span>2M:{ch.m2}</span>
                          <span>3M:{ch.m3}</span>
                          <span>5M:{ch.m5}</span>
                        </div>
                      </div>
                    ) : (
                      <span className="text-[10px] text-rose-600 italic">No questions</span>
                    )}
                  </td>

                  {/* Stock Status / Gap Warnings */}
                  <td className="py-2.5 px-3">
                    {ch.warningReasons.length === 0 ? (
                      <span className="inline-flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-50 font-bold px-2 py-0.5 rounded border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3" /> Well Stocked
                      </span>
                    ) : (
                      <div className="flex flex-wrap gap-1">
                        {ch.warningReasons.map((reason, idx) => (
                          <span 
                            key={idx}
                            className={`text-[9px] font-bold px-1.5 py-0.2 rounded border ${
                              reason.includes('No 5-mark') || reason.includes('0 questions') || reason.includes('Very low')
                                ? 'bg-rose-100 text-rose-800 border-rose-300'
                                : 'bg-amber-100 text-amber-800 border-amber-300'
                            }`}
                          >
                            {reason}
                          </span>
                        ))}
                      </div>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="py-2.5 px-3 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        type="button"
                        onClick={() => {
                          if (onSelectChapterForBrowser) onSelectChapterForBrowser(ch.chapterNo);
                          if (onNavigate) onNavigate('browse-chapter');
                        }}
                        className="px-2 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded text-[10px] font-bold transition cursor-pointer"
                        title="Browse Chapter with Full Solutions"
                      >
                        Browse
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          if (onSelectChapter) onSelectChapter(ch.chapterNo);
                          if (onNavigate) onNavigate('question-bank');
                        }}
                        className="px-2 py-1 bg-red-800 hover:bg-red-900 text-white rounded text-[10px] font-bold transition cursor-pointer flex items-center gap-0.5"
                        title="Open in Question Bank to manage questions"
                      >
                        <span>Bank</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
