import React, { useState, useEffect, useMemo } from 'react';
import { 
  BookMarked, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle,
  Eye,
  EyeOff,
  Copy,
  Check,
  Plus,
  Minus,
  FileCheck,
  Sparkles,
  BarChart2,
  CheckSquare,
  Square,
  RotateCcw,
  GraduationCap
} from 'lucide-react';
import { SubjectData, Chapter, Question, LanguageMode } from '../types';

interface ChapterBrowserProps {
  subject: SubjectData;
  languageMode: LanguageMode;
  initialChapterNo?: number;
  onSelectChapterForBank: (chapterNo: number) => void;
  manualStagedQuestions?: Question[];
  onToggleStageQuestion?: (question: Question) => void;
  onAddMultipleQuestionsToPaper?: (questions: Question[]) => void;
  onNavigate?: (view: string) => void;
}

export const ChapterBrowser: React.FC<ChapterBrowserProps> = ({
  subject,
  languageMode,
  initialChapterNo,
  onSelectChapterForBank,
  manualStagedQuestions = [],
  onToggleStageQuestion,
  onAddMultipleQuestionsToPaper,
  onNavigate
}) => {
  const [activeChapterNo, setActiveChapterNo] = useState<number>(() => {
    if (initialChapterNo && subject.chapters.some(c => c.no === initialChapterNo)) {
      return initialChapterNo;
    }
    return subject.chapters[0]?.no || 1;
  });

  // Track reviewed questions in localStorage
  const [reviewedQuestionIds, setReviewedQuestionIds] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(`tn_qp_reviewed_questions_${subject.id}`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [revealedKeys, setRevealedKeys] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Sync reviewed state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(
        `tn_qp_reviewed_questions_${subject.id}`,
        JSON.stringify(reviewedQuestionIds)
      );
    } catch (e) {
      console.error('Failed to save reviewed questions:', e);
    }
  }, [reviewedQuestionIds, subject.id]);

  // Update active chapter if initialChapterNo changes
  useEffect(() => {
    if (initialChapterNo && subject.chapters.some(c => c.no === initialChapterNo)) {
      setActiveChapterNo(initialChapterNo);
    }
  }, [initialChapterNo, subject.chapters]);

  const activeChapter = subject.chapters.find(c => c.no === activeChapterNo) || subject.chapters[0];
  const chapterQuestions = useMemo(() => {
    return subject.questions.filter(q => q.chapterNo === activeChapterNo);
  }, [subject.questions, activeChapterNo]);

  const stagedIdsSet = useMemo(() => {
    return new Set(manualStagedQuestions.map(q => q.id));
  }, [manualStagedQuestions]);

  const q1M = chapterQuestions.filter(q => q.marks === 1);
  const q2M = chapterQuestions.filter(q => q.marks === 2);
  const q3M = chapterQuestions.filter(q => q.marks === 3);
  const q5M = chapterQuestions.filter(q => q.marks === 5);

  const toggleKey = (id: string) => {
    setRevealedKeys(prev => {
      const nextState = !prev[id];
      // Automatically mark as reviewed when answer key is inspected
      if (nextState) {
        setReviewedQuestionIds(r => ({ ...r, [id]: true }));
      }
      return { ...prev, [id]: nextState };
    });
  };

  const toggleReviewed = (id: string) => {
    setReviewedQuestionIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleMarkAllReviewed = () => {
    const next = { ...reviewedQuestionIds };
    chapterQuestions.forEach(q => {
      next[q.id] = true;
    });
    setReviewedQuestionIds(next);
  };

  const handleUnmarkAllReviewed = () => {
    const next = { ...reviewedQuestionIds };
    chapterQuestions.forEach(q => {
      delete next[q.id];
    });
    setReviewedQuestionIds(next);
  };

  const handleStageAllChapterQuestions = () => {
    if (onAddMultipleQuestionsToPaper) {
      onAddMultipleQuestionsToPaper(chapterQuestions);
    } else if (onToggleStageQuestion) {
      chapterQuestions.forEach(q => {
        if (!stagedIdsSet.has(q.id)) {
          onToggleStageQuestion(q);
        }
      });
    }
  };

  const handleCopyQuestion = (q: Question) => {
    const text = `${q.questionText}\n${q.options ? Object.entries(q.options).map(([k, v]) => `(${k.toLowerCase()}) ${v}`).join('  ') + '\n' : ''}Answer: ${q.answer}`;
    navigator.clipboard.writeText(text);
    setCopiedId(q.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Chapter-level progress statistics helper
  const getChapterProgress = (chapterNo: number) => {
    const questions = subject.questions.filter(q => q.chapterNo === chapterNo);
    const total = questions.length;
    if (total === 0) return { reviewedCount: 0, stagedCount: 0, percentReviewed: 0, percentStaged: 0, total: 0 };

    const reviewedCount = questions.filter(q => reviewedQuestionIds[q.id]).length;
    const stagedCount = questions.filter(q => stagedIdsSet.has(q.id)).length;
    const percentReviewed = Math.round((reviewedCount / total) * 100);
    const percentStaged = Math.round((stagedCount / total) * 100);

    return {
      reviewedCount,
      stagedCount,
      percentReviewed,
      percentStaged,
      total
    };
  };

  const activeChapterProgress = getChapterProgress(activeChapterNo);

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      {/* Top Banner */}
      <div className="bg-[#1e293b] text-white rounded-xl p-5 shadow-sm space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-amber-400 text-stone-950 text-xs font-black px-2 py-0.5 rounded uppercase">
                {subject.standard}
              </span>
              <span className="text-xs text-slate-300 font-medium">
                {subject.name}
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold mt-1 text-white flex items-center gap-2">
              <BookMarked className="w-5 h-5 text-amber-400" />
              Browse by Chapter & Question Review Progress
            </h2>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {onNavigate && (
              <button
                onClick={() => onNavigate('subject-overview')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-bold transition cursor-pointer border border-white/20"
              >
                <BarChart2 className="w-3.5 h-3.5 text-amber-300" />
                Subject Overview Matrix
              </button>
            )}
            <span className="bg-amber-400 text-stone-950 text-xs font-bold px-2.5 py-1.5 rounded-lg shadow-xs">
              {subject.chapters.length} Lessons Available
            </span>
          </div>
        </div>
        <p className="text-xs text-slate-300">
          Review textbook questions, toggle answer keys, track completion progress, and selectively stage questions into your custom question paper.
        </p>
      </div>

      {/* Chapter Selector Grid with Visual Progress Bars */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs px-1">
          <span className="font-bold text-stone-700 uppercase tracking-wider text-[11px]">
            Select Chapter / Lesson:
          </span>
          <span className="text-[11px] text-stone-500 flex items-center gap-2">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Reviewed
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span> Staged to QP
            </span>
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-2">
          {subject.chapters.map(ch => {
            const isSelected = ch.no === activeChapterNo;
            const progress = getChapterProgress(ch.no);

            return (
              <button
                key={ch.no}
                onClick={() => setActiveChapterNo(ch.no)}
                className={`p-2 rounded-lg border text-xs text-left transition cursor-pointer flex flex-col justify-between gap-1.5 relative overflow-hidden group ${
                  isSelected
                    ? 'bg-red-800 border-red-900 text-white font-bold shadow-md ring-2 ring-red-700/50'
                    : 'bg-white border-stone-200 text-stone-700 hover:border-red-300 hover:bg-stone-50'
                }`}
              >
                {/* Top Number & Badge */}
                <div className="flex items-center justify-between w-full">
                  <span className={`text-[10px] uppercase font-bold tracking-wider ${
                    isSelected ? 'text-amber-300' : 'text-red-800'
                  }`}>
                    Ch {ch.no}
                  </span>
                  <span className={`text-[9px] px-1 py-0.2 rounded font-bold ${
                    isSelected ? 'bg-amber-400 text-stone-950' : 'bg-stone-100 text-stone-600'
                  }`}>
                    {progress.total} Qs
                  </span>
                </div>

                {/* Chapter Name */}
                <span className="line-clamp-2 font-semibold text-[11px] leading-tight min-h-[2.2em] w-full">
                  {ch.name}
                </span>

                {/* Visual Progress Bar on Tab */}
                <div className="w-full space-y-0.5 pt-0.5">
                  <div className="w-full h-1.5 bg-stone-200/80 rounded-full overflow-hidden flex">
                    <div
                      style={{ width: `${progress.percentReviewed}%` }}
                      className={`h-full ${isSelected ? 'bg-emerald-300' : 'bg-emerald-500'} transition-all duration-300`}
                      title={`${progress.reviewedCount}/${progress.total} Reviewed (${progress.percentReviewed}%)`}
                    />
                    <div
                      style={{ width: `${Math.max(0, progress.percentStaged - progress.percentReviewed)}%` }}
                      className={`h-full ${isSelected ? 'bg-amber-300' : 'bg-amber-500'} transition-all duration-300`}
                      title={`${progress.stagedCount} Staged in Custom QP`}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[9px] opacity-85">
                    <span>{progress.percentReviewed}% Rev</span>
                    {progress.stagedCount > 0 && (
                      <span className={isSelected ? 'text-amber-200' : 'text-amber-700 font-bold'}>
                        +{progress.stagedCount} QP
                      </span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Chapter Details & Interactive Question Cards */}
      {activeChapter && (
        <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm space-y-6 p-5 sm:p-6">
          {/* Active Chapter Header with Expanded Progress Bar */}
          <div className="border-b border-stone-200 pb-5 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-red-800 bg-red-100 px-2.5 py-0.5 rounded uppercase">
                  Chapter {activeChapter.no}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-stone-900 mt-1">
                  {activeChapter.name} {activeChapter.nameTamil ? `(${activeChapter.nameTamil})` : ''}
                </h3>
                {activeChapter.description && (
                  <p className="text-xs text-stone-500 mt-0.5">{activeChapter.description}</p>
                )}
              </div>

              {/* Mark distribution pills */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-xs bg-blue-50 text-blue-800 font-bold px-2.5 py-1 rounded-md border border-blue-200">
                  1M: {q1M.length}
                </span>
                <span className="text-xs bg-emerald-50 text-emerald-800 font-bold px-2.5 py-1 rounded-md border border-emerald-200">
                  2M: {q2M.length}
                </span>
                <span className="text-xs bg-amber-50 text-amber-800 font-bold px-2.5 py-1 rounded-md border border-amber-200">
                  3M: {q3M.length}
                </span>
                <span className="text-xs bg-purple-50 text-purple-800 font-bold px-2.5 py-1 rounded-md border border-purple-200">
                  5M: {q5M.length}
                </span>
              </div>
            </div>

            {/* Visual Progress Dashboard Card */}
            <div className="bg-stone-50/80 border border-stone-200/90 rounded-xl p-4 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-xs font-bold text-stone-800 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    Chapter Study & Paper Progress
                  </h4>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    {activeChapterProgress.reviewedCount} of {activeChapterProgress.total} questions reviewed ({activeChapterProgress.percentReviewed}%) · {activeChapterProgress.stagedCount} staged for paper ({activeChapterProgress.percentStaged}%)
                  </p>
                </div>

                {/* Bulk Actions */}
                <div className="flex items-center gap-2 flex-wrap">
                  {onNavigate && (
                    <button
                      onClick={() => onNavigate('chapterwise-quiz')}
                      className="px-2.5 py-1 bg-amber-500 hover:bg-amber-400 text-stone-950 rounded-md text-xs font-bold transition cursor-pointer flex items-center gap-1 shadow-xs"
                      title="Attend timed 1-mark MCQ online test for this chapter"
                    >
                      <GraduationCap className="w-3.5 h-3.5" />
                      Chapter Quiz Exam
                    </button>
                  )}

                  {activeChapterProgress.reviewedCount < activeChapterProgress.total ? (
                    <button
                      onClick={handleMarkAllReviewed}
                      className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md text-xs font-bold transition cursor-pointer flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Mark All Reviewed
                    </button>
                  ) : (
                    <button
                      onClick={handleUnmarkAllReviewed}
                      className="px-2.5 py-1 bg-stone-200 hover:bg-stone-300 text-stone-700 rounded-md text-xs font-semibold transition cursor-pointer flex items-center gap-1"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Reset Review
                    </button>
                  )}

                  {onToggleStageQuestion && (
                    <button
                      onClick={handleStageAllChapterQuestions}
                      className="px-2.5 py-1 bg-red-800 hover:bg-red-900 text-white rounded-md text-xs font-bold transition cursor-pointer flex items-center gap-1"
                      title="Add all questions from this chapter to the manual paper stage"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Stage All to Paper
                    </button>
                  )}
                </div>
              </div>

              {/* Progress Bar with Segments */}
              <div className="space-y-1">
                <div className="w-full h-3 bg-stone-200 rounded-full overflow-hidden flex p-0.5 shadow-inner">
                  <div
                    style={{ width: `${activeChapterProgress.percentReviewed}%` }}
                    className="h-full bg-emerald-500 rounded-l-full transition-all duration-300"
                    title={`Reviewed: ${activeChapterProgress.reviewedCount} (${activeChapterProgress.percentReviewed}%)`}
                  />
                  <div
                    style={{ width: `${Math.max(0, activeChapterProgress.percentStaged - activeChapterProgress.percentReviewed)}%` }}
                    className="h-full bg-amber-500 transition-all duration-300"
                    title={`Staged in Custom Paper: ${activeChapterProgress.stagedCount} (${activeChapterProgress.percentStaged}%)`}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-stone-500 font-medium px-0.5">
                  <span className="text-emerald-700 font-semibold">
                    ✓ {activeChapterProgress.reviewedCount}/{activeChapterProgress.total} Questions Reviewed ({activeChapterProgress.percentReviewed}%)
                  </span>
                  <span className="text-amber-700 font-semibold">
                    📋 {activeChapterProgress.stagedCount} Questions Added to Custom Paper
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sectional Accordions / Question Lists */}
          <div className="space-y-6">
            {/* 1 Mark Questions */}
            {q1M.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-bold text-sm text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  {languageMode === 'tamil' ? `பகுதி I — 1 மதிப்பெண் பலவுள் தெரிவு வினாக்கள் (${q1M.length})` : `Part I — 1 Mark Multiple Choice Questions (${q1M.length})`}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {q1M.map((q, idx) => {
                    const isReviewed = !!reviewedQuestionIds[q.id];
                    const isStaged = stagedIdsSet.has(q.id);

                    return (
                      <div
                        key={q.id}
                        className={`p-3 border rounded-lg text-xs space-y-2 transition ${
                          isReviewed ? 'bg-emerald-50/20 border-emerald-200' : 'bg-stone-50 border-stone-200'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-start gap-2 flex-1">
                            <button
                              onClick={() => toggleReviewed(q.id)}
                              className="mt-0.5 text-stone-400 hover:text-emerald-600 cursor-pointer"
                              title={isReviewed ? 'Marked as reviewed' : 'Mark as reviewed'}
                            >
                              {isReviewed ? (
                                <CheckSquare className="w-4 h-4 text-emerald-600" />
                              ) : (
                                <Square className="w-4 h-4 text-stone-400" />
                              )}
                            </button>
                            <span className="font-bold text-stone-500">{idx + 1}.</span>
                            <div className="flex-1 space-y-0.5">
                              {languageMode === 'english' && (
                                <p className="font-medium text-stone-900">{q.questionText}</p>
                              )}
                              {languageMode === 'tamil' && (
                                <p className="font-medium text-stone-900">{q.questionTextTamil || q.questionText}</p>
                              )}
                              {languageMode === 'bilingual' && (
                                <>
                                  <p className="font-medium text-stone-900">{q.questionText}</p>
                                  {q.questionTextTamil && (
                                    <p className="font-medium text-stone-800 text-[11px]">{q.questionTextTamil}</p>
                                  )}
                                </>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-1 shrink-0">
                            {onToggleStageQuestion && (
                              <button
                                onClick={() => onToggleStageQuestion(q)}
                                className={`px-1.5 py-0.5 rounded text-[10px] font-bold cursor-pointer transition ${
                                  isStaged
                                    ? 'bg-amber-500 text-stone-950'
                                    : 'bg-stone-200 hover:bg-stone-300 text-stone-700'
                                }`}
                                title={isStaged ? 'Remove from manual paper' : 'Add to manual paper'}
                              >
                                {isStaged ? 'In Paper' : '+ QP'}
                              </button>
                            )}
                            <button
                              onClick={() => handleCopyQuestion(q)}
                              className="p-1 text-stone-400 hover:text-stone-700 cursor-pointer"
                              title="Copy Question"
                            >
                              {copiedId === q.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                            </button>
                          </div>
                        </div>

                        {q.options && (
                          <div className="grid grid-cols-2 gap-1.5 pt-1 text-[11px] pl-6">
                            {(['A', 'B', 'C', 'D'] as const).map(opt => {
                              const isCorrect = q.correctOption === opt;
                              const optTamil = opt === 'A' ? '(அ)' : opt === 'B' ? '(ஆ)' : opt === 'C' ? '(இ)' : '(ஈ)';
                              const optEng = `(${opt.toLowerCase()})`;
                              const label = languageMode === 'tamil' ? optTamil : languageMode === 'bilingual' ? `${optEng} / ${optTamil}` : optEng;
                              const text = languageMode === 'tamil' ? (q.optionsTamil?.[opt] || q.options![opt]) : q.options![opt];

                              return (
                                <span key={opt} className={`p-1 rounded ${isCorrect ? 'bg-emerald-100 text-emerald-900 font-bold' : 'text-stone-700'}`}>
                                  {label} {text}
                                </span>
                              );
                            })}
                          </div>
                        )}

                        <div className="pt-1.5 border-t border-stone-200 text-[11px] text-emerald-800 font-semibold pl-6 flex items-center justify-between">
                          <span>{languageMode === 'tamil' ? `விடை: ${q.answerTamil || q.answer}` : `Ans: ${q.answer}`}</span>
                          {isReviewed && (
                            <span className="text-[10px] text-emerald-700 font-medium">✓ Reviewed</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 2 Marks Questions */}
            {q2M.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-bold text-sm text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  {languageMode === 'tamil' ? `பகுதி II — 2 மதிப்பெண் வினாக்கள் (${q2M.length})` : `Part II — 2 Marks Short Answer Questions (${q2M.length})`}
                </h4>
                <div className="space-y-2.5">
                  {q2M.map((q, idx) => {
                    const isReviewed = !!reviewedQuestionIds[q.id];
                    const isStaged = stagedIdsSet.has(q.id);

                    return (
                      <div
                        key={q.id}
                        className={`p-3 border rounded-lg text-xs space-y-2 transition ${
                          isReviewed ? 'bg-emerald-50/20 border-emerald-200' : 'bg-white border-stone-200'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-start gap-2 flex-1">
                            <button
                              onClick={() => toggleReviewed(q.id)}
                              className="mt-0.5 text-stone-400 hover:text-emerald-600 cursor-pointer"
                              title={isReviewed ? 'Marked as reviewed' : 'Mark as reviewed'}
                            >
                              {isReviewed ? (
                                <CheckSquare className="w-4 h-4 text-emerald-600" />
                              ) : (
                                <Square className="w-4 h-4 text-stone-400" />
                              )}
                            </button>
                            <span className="font-bold text-stone-500">{idx + 1}.</span>
                            <div className="space-y-0.5">
                              {languageMode === 'english' && (
                                <p className="font-semibold text-stone-900">{q.questionText}</p>
                              )}
                              {languageMode === 'tamil' && (
                                <p className="font-semibold text-stone-900">{q.questionTextTamil || q.questionText}</p>
                              )}
                              {languageMode === 'bilingual' && (
                                <>
                                  <p className="font-semibold text-stone-900">{q.questionText}</p>
                                  {q.questionTextTamil && (
                                    <p className="text-stone-800 text-[11px]">{q.questionTextTamil}</p>
                                  )}
                                </>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            {onToggleStageQuestion && (
                              <button
                                onClick={() => onToggleStageQuestion(q)}
                                className={`px-2 py-0.5 rounded text-[10px] font-bold cursor-pointer transition ${
                                  isStaged
                                    ? 'bg-amber-500 text-stone-950'
                                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200'
                                }`}
                              >
                                {isStaged ? 'In QP' : '+ QP'}
                              </button>
                            )}
                            <button
                              onClick={() => toggleKey(q.id)}
                              className="px-2 py-0.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded text-[11px] font-bold cursor-pointer"
                            >
                              {revealedKeys[q.id] ? 'Hide Key' : 'Show Key'}
                            </button>
                            <button
                              onClick={() => handleCopyQuestion(q)}
                              className="p-1 text-stone-400 hover:text-stone-700 cursor-pointer"
                            >
                              {copiedId === q.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                            </button>
                          </div>
                        </div>

                        {revealedKeys[q.id] && (
                          <div className="p-2.5 bg-stone-50 border border-stone-200 rounded font-mono text-[11px] whitespace-pre-line text-stone-800 ml-6">
                            {languageMode === 'english' && q.answer}
                            {languageMode === 'tamil' && (q.answerTamil || q.answer)}
                            {languageMode === 'bilingual' && (
                              <>
                                <p>{q.answer}</p>
                                {q.answerTamil && (
                                  <p className="mt-1 pt-1 border-t border-stone-200">{q.answerTamil}</p>
                                )}
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 3 Marks Questions */}
            {q3M.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-bold text-sm text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                  {languageMode === 'tamil' ? `பகுதி III — 3 மதிப்பெண் வினாக்கள் (${q3M.length})` : `Part III — 3 Marks Brief Answer Questions (${q3M.length})`}
                </h4>
                <div className="space-y-2.5">
                  {q3M.map((q, idx) => {
                    const isReviewed = !!reviewedQuestionIds[q.id];
                    const isStaged = stagedIdsSet.has(q.id);

                    return (
                      <div
                        key={q.id}
                        className={`p-3 border rounded-lg text-xs space-y-2 transition ${
                          isReviewed ? 'bg-emerald-50/20 border-emerald-200' : 'bg-white border-stone-200'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-start gap-2 flex-1">
                            <button
                              onClick={() => toggleReviewed(q.id)}
                              className="mt-0.5 text-stone-400 hover:text-emerald-600 cursor-pointer"
                              title={isReviewed ? 'Marked as reviewed' : 'Mark as reviewed'}
                            >
                              {isReviewed ? (
                                <CheckSquare className="w-4 h-4 text-emerald-600" />
                              ) : (
                                <Square className="w-4 h-4 text-stone-400" />
                              )}
                            </button>
                            <span className="font-bold text-stone-500">{idx + 1}.</span>
                            <div className="space-y-0.5">
                              {languageMode === 'english' && (
                                <p className="font-semibold text-stone-900">{q.questionText}</p>
                              )}
                              {languageMode === 'tamil' && (
                                <p className="font-semibold text-stone-900">{q.questionTextTamil || q.questionText}</p>
                              )}
                              {languageMode === 'bilingual' && (
                                <>
                                  <p className="font-semibold text-stone-900">{q.questionText}</p>
                                  {q.questionTextTamil && (
                                    <p className="text-stone-800 text-[11px]">{q.questionTextTamil}</p>
                                  )}
                                </>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            {onToggleStageQuestion && (
                              <button
                                onClick={() => onToggleStageQuestion(q)}
                                className={`px-2 py-0.5 rounded text-[10px] font-bold cursor-pointer transition ${
                                  isStaged
                                    ? 'bg-amber-500 text-stone-950'
                                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200'
                                }`}
                              >
                                {isStaged ? 'In QP' : '+ QP'}
                              </button>
                            )}
                            <button
                              onClick={() => toggleKey(q.id)}
                              className="px-2 py-0.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded text-[11px] font-bold cursor-pointer"
                            >
                              {revealedKeys[q.id] ? 'Hide Key' : 'Show Key'}
                            </button>
                            <button
                              onClick={() => handleCopyQuestion(q)}
                              className="p-1 text-stone-400 hover:text-stone-700 cursor-pointer"
                            >
                              {copiedId === q.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                            </button>
                          </div>
                        </div>

                        {revealedKeys[q.id] && (
                          <div className="p-2.5 bg-stone-50 border border-stone-200 rounded font-mono text-[11px] whitespace-pre-line text-stone-800 ml-6">
                            {languageMode === 'english' && q.answer}
                            {languageMode === 'tamil' && (q.answerTamil || q.answer)}
                            {languageMode === 'bilingual' && (
                              <>
                                <p>{q.answer}</p>
                                {q.answerTamil && (
                                  <p className="mt-1 pt-1 border-t border-stone-200">{q.answerTamil}</p>
                                )}
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 5 Marks Questions */}
            {q5M.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-bold text-sm text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  {languageMode === 'tamil' ? `பகுதி IV — 5 மதிப்பெண் நெடுவினாக்கள் (${q5M.length})` : `Part IV — 5 Marks Essay / Long Answer Questions (${q5M.length})`}
                </h4>
                <div className="space-y-2.5">
                  {q5M.map((q, idx) => {
                    const isReviewed = !!reviewedQuestionIds[q.id];
                    const isStaged = stagedIdsSet.has(q.id);

                    return (
                      <div
                        key={q.id}
                        className={`p-3 border rounded-lg text-xs space-y-2 transition ${
                          isReviewed ? 'bg-emerald-50/20 border-emerald-200' : 'bg-white border-stone-200'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-start gap-2 flex-1">
                            <button
                              onClick={() => toggleReviewed(q.id)}
                              className="mt-0.5 text-stone-400 hover:text-emerald-600 cursor-pointer"
                              title={isReviewed ? 'Marked as reviewed' : 'Mark as reviewed'}
                            >
                              {isReviewed ? (
                                <CheckSquare className="w-4 h-4 text-emerald-600" />
                              ) : (
                                <Square className="w-4 h-4 text-stone-400" />
                              )}
                            </button>
                            <span className="font-bold text-stone-500">{idx + 1}.</span>
                            <div className="space-y-0.5">
                              {languageMode === 'english' && (
                                <p className="font-semibold text-stone-900">{q.questionText}</p>
                              )}
                              {languageMode === 'tamil' && (
                                <p className="font-semibold text-stone-900">{q.questionTextTamil || q.questionText}</p>
                              )}
                              {languageMode === 'bilingual' && (
                                <>
                                  <p className="font-semibold text-stone-900">{q.questionText}</p>
                                  {q.questionTextTamil && (
                                    <p className="text-stone-800 text-[11px]">{q.questionTextTamil}</p>
                                  )}
                                </>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            {onToggleStageQuestion && (
                              <button
                                onClick={() => onToggleStageQuestion(q)}
                                className={`px-2 py-0.5 rounded text-[10px] font-bold cursor-pointer transition ${
                                  isStaged
                                    ? 'bg-amber-500 text-stone-950'
                                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200'
                                }`}
                              >
                                {isStaged ? 'In QP' : '+ QP'}
                              </button>
                            )}
                            <button
                              onClick={() => toggleKey(q.id)}
                              className="px-2 py-0.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded text-[11px] font-bold cursor-pointer"
                            >
                              {revealedKeys[q.id] ? 'Hide Key' : 'Show Key'}
                            </button>
                            <button
                              onClick={() => handleCopyQuestion(q)}
                              className="p-1 text-stone-400 hover:text-stone-700 cursor-pointer"
                            >
                              {copiedId === q.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                            </button>
                          </div>
                        </div>

                        {revealedKeys[q.id] && (
                          <div className="p-2.5 bg-stone-50 border border-stone-200 rounded font-mono text-[11px] whitespace-pre-line text-stone-800 ml-6">
                            {languageMode === 'english' && q.answer}
                            {languageMode === 'tamil' && (q.answerTamil || q.answer)}
                            {languageMode === 'bilingual' && (
                              <>
                                <p>{q.answer}</p>
                                {q.answerTamil && (
                                  <p className="mt-1 pt-1 border-t border-stone-200">{q.answerTamil}</p>
                                )}
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
