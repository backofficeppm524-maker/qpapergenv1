import React, { useState } from 'react';
import { 
  X, 
  FileDown, 
  Printer, 
  Layers, 
  CheckCircle, 
  Sparkles, 
  MoveUp, 
  MoveDown, 
  Trash2, 
  KeyRound, 
  FileText, 
  Loader2,
  Settings,
  Languages,
  Check
} from 'lucide-react';
import { QuestionPaper, LanguageMode } from '../types';
import { exportMergedPapersToPdf, triggerCleanBatchPrint } from '../utils/pdfExport';

interface MergedPdfExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPapers: QuestionPaper[];
  onRemovePaper?: (id: string) => void;
  onReorderPapers?: (papers: QuestionPaper[]) => void;
}

export const MergedPdfExportModal: React.FC<MergedPdfExportModalProps> = ({
  isOpen,
  onClose,
  selectedPapers: initialPapers,
  onRemovePaper,
  onReorderPapers
}) => {
  const [papers, setPapers] = useState<QuestionPaper[]>(initialPapers);
  const [filename, setFilename] = useState<string>(() => {
    const d = new Date().toISOString().split('T')[0];
    return `Bulk_Question_Papers_${initialPapers.length}_Sets_${d}.pdf`;
  });
  const [includeAnswerKeys, setIncludeAnswerKeys] = useState<boolean>(true);
  const [languageMode, setLanguageMode] = useState<LanguageMode>('bilingual');
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [progressMsg, setProgressMsg] = useState<string>('');
  const [statusToast, setStatusToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Sync papers if initial changes
  React.useEffect(() => {
    setPapers(initialPapers);
  }, [initialPapers]);

  if (!isOpen || papers.length === 0) return null;

  const moveUp = (index: number) => {
    if (index === 0) return;
    const updated = [...papers];
    const temp = updated[index];
    updated[index] = updated[index - 1];
    updated[index - 1] = temp;
    setPapers(updated);
    onReorderPapers?.(updated);
  };

  const moveDown = (index: number) => {
    if (index === papers.length - 1) return;
    const updated = [...papers];
    const temp = updated[index];
    updated[index] = updated[index + 1];
    updated[index + 1] = temp;
    setPapers(updated);
    onReorderPapers?.(updated);
  };

  const removePaper = (id: string) => {
    const updated = papers.filter(p => p.id !== id);
    setPapers(updated);
    onRemovePaper?.(id);
    if (updated.length === 0) {
      onClose();
    }
  };

  const handleExportMergedPdf = async () => {
    if (isExporting) return;
    setIsExporting(true);
    setProgressMsg('Initializing PDF document batch...');

    try {
      const sanitizedName = filename.trim().endsWith('.pdf') ? filename.trim() : `${filename.trim()}.pdf`;
      const success = await exportMergedPapersToPdf(
        papers,
        {
          filename: sanitizedName,
          includeAnswerKeys,
          languageMode
        },
        (msg) => setProgressMsg(msg)
      );

      if (success) {
        setStatusToast({
          message: `Successfully merged and downloaded ${papers.length} question paper${papers.length > 1 ? 's' : ''}!`,
          type: 'success'
        });
        setTimeout(() => {
          setStatusToast(null);
          onClose();
        }, 2000);
      } else {
        setStatusToast({
          message: 'PDF generation failed. Attempting direct browser print fallback...',
          type: 'error'
        });
        triggerCleanBatchPrint(papers, { includeAnswerKeys, languageMode, documentTitle: filename });
      }
    } catch (e) {
      console.error('Batch export error:', e);
      setStatusToast({
        message: 'An error occurred during PDF generation.',
        type: 'error'
      });
    } finally {
      setIsExporting(false);
      setProgressMsg('');
    }
  };

  const handleDirectBulkPrint = () => {
    triggerCleanBatchPrint(papers, {
      includeAnswerKeys,
      languageMode,
      documentTitle: filename.replace('.pdf', '')
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[92vh] flex flex-col overflow-hidden text-stone-900 dark:text-stone-100">
        {/* Header */}
        <div className="bg-[#1e293b] text-white p-5 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-400 text-stone-950 rounded-xl shadow">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-extrabold flex items-center gap-2">
                Batch PDF Export & Bulk Printer
                <span className="text-xs bg-amber-400/20 text-amber-300 font-semibold px-2 py-0.5 rounded-full border border-amber-400/30">
                  {papers.length} Papers Selected
                </span>
              </h2>
              <p className="text-xs text-slate-300">
                Merge multiple question papers into one organized PDF file with clean page breaks.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            disabled={isExporting}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition cursor-pointer disabled:opacity-50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 overflow-y-auto space-y-5 text-xs flex-1">
          {/* Status Toast */}
          {statusToast && (
            <div className={`p-3 rounded-xl flex items-center gap-2.5 font-bold ${
              statusToast.type === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-300' : 'bg-red-50 text-red-800 border border-red-300'
            }`}>
              <CheckCircle className="w-4 h-4 shrink-0" />
              <span>{statusToast.message}</span>
            </div>
          )}

          {/* Export Settings Card */}
          <div className="bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 rounded-xl p-4 space-y-3.5">
            <h3 className="font-bold text-stone-800 dark:text-stone-200 flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <Settings className="w-3.5 h-3.5 text-red-800 dark:text-amber-400" />
              Merge & Layout Options
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* File Name */}
              <div>
                <label className="block font-bold text-stone-700 dark:text-stone-300 mb-1">
                  Merged PDF File Name
                </label>
                <input
                  type="text"
                  value={filename}
                  onChange={e => setFilename(e.target.value)}
                  disabled={isExporting}
                  placeholder="e.g. Midterm_Exam_Question_Papers.pdf"
                  className="w-full p-2 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-lg text-xs font-medium focus:ring-1 focus:ring-red-800"
                />
              </div>

              {/* Language Medium */}
              <div>
                <label className="block font-bold text-stone-700 dark:text-stone-300 mb-1">
                  Export Medium
                </label>
                <div className="grid grid-cols-3 gap-1 bg-white dark:bg-stone-900 p-1 border border-stone-300 dark:border-stone-700 rounded-lg">
                  {(['bilingual', 'english', 'tamil'] as const).map(mode => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setLanguageMode(mode)}
                      className={`py-1 rounded text-[11px] font-bold capitalize transition cursor-pointer ${
                        languageMode === mode
                          ? 'bg-red-800 text-white shadow-xs'
                          : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Answer Key Option Toggle */}
            <div className="pt-2 border-t border-stone-200 dark:border-stone-700/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <KeyRound className="w-4 h-4 text-amber-500" />
                <div>
                  <span className="font-bold text-stone-900 dark:text-stone-100 block">
                    Append Valuation Answer Keys
                  </span>
                  <span className="text-[11px] text-stone-500 dark:text-stone-400">
                    Inserts the corresponding official answer scheme immediately following each question paper
                  </span>
                </div>
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeAnswerKeys}
                  onChange={e => setIncludeAnswerKeys(e.target.checked)}
                  disabled={isExporting}
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-stone-300 peer-focus:outline-none rounded-full peer dark:bg-stone-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600"></div>
              </label>
            </div>
          </div>

          {/* Ordered Papers List */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-stone-800 dark:text-stone-200 uppercase tracking-wider text-[11px]">
                Paper Sequencing (Order of Appearance in PDF)
              </span>
              <span className="text-[11px] text-stone-500">
                Use arrows to adjust printing sequence
              </span>
            </div>

            <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
              {papers.map((paper, idx) => (
                <div
                  key={paper.id}
                  className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700/80 rounded-xl p-3 flex items-center justify-between gap-3 shadow-2xs"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="w-6 h-6 rounded-full bg-stone-100 dark:bg-stone-800 font-extrabold text-[11px] flex items-center justify-center text-stone-700 dark:text-stone-300 shrink-0 border border-stone-200 dark:border-stone-700">
                      {idx + 1}
                    </span>

                    <div className="min-w-0 space-y-0.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-stone-900 dark:text-stone-100 truncate">
                          {paper.examName}
                        </span>
                        <span className="bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300 text-[10px] font-bold px-1.5 py-0.2 rounded">
                          {paper.maxMarks}M
                        </span>
                        <span className="text-[10px] text-stone-500">
                          {paper.standard} · {paper.subject}
                        </span>
                      </div>
                      <p className="text-[11px] text-stone-500 truncate">
                        {paper.schoolName} · {paper.sections.reduce((acc, s) => acc + s.questions.length, 0)} Total Questions
                      </p>
                    </div>
                  </div>

                  {/* Reorder and Delete Buttons */}
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      onClick={() => moveUp(idx)}
                      disabled={idx === 0 || isExporting}
                      className="p-1 text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 disabled:opacity-30 rounded hover:bg-stone-100 dark:hover:bg-stone-800 transition cursor-pointer"
                      title="Move up"
                    >
                      <MoveUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => moveDown(idx)}
                      disabled={idx === papers.length - 1 || isExporting}
                      className="p-1 text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 disabled:opacity-30 rounded hover:bg-stone-100 dark:hover:bg-stone-800 transition cursor-pointer"
                      title="Move down"
                    >
                      <MoveDown className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => removePaper(paper.id)}
                      disabled={isExporting}
                      className="p-1 text-stone-400 hover:text-red-600 rounded hover:bg-red-50 dark:hover:bg-red-950/30 transition cursor-pointer ml-1"
                      title="Remove from batch"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicator when compiling */}
          {isExporting && (
            <div className="p-3.5 bg-amber-500/10 border border-amber-500/30 rounded-xl space-y-2 animate-pulse">
              <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold">
                <Loader2 className="w-4 h-4 animate-spin text-amber-600 dark:text-amber-400" />
                <span>{progressMsg || 'Processing and assembling merged document...'}</span>
              </div>
              <div className="w-full bg-amber-200 dark:bg-stone-800 h-1.5 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 animate-pulse w-full" />
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-stone-100 dark:bg-stone-800/80 border-t border-stone-200 dark:border-stone-700/80 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            disabled={isExporting}
            className="px-4 py-2 bg-white dark:bg-stone-700 hover:bg-stone-200 text-stone-700 dark:text-stone-200 font-bold rounded-xl border border-stone-300 dark:border-stone-600 text-xs transition cursor-pointer disabled:opacity-50"
          >
            Cancel
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDirectBulkPrint}
              disabled={isExporting}
              className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-white font-bold rounded-xl text-xs transition cursor-pointer flex items-center gap-1.5 border border-stone-700 shadow-sm disabled:opacity-50"
              title="Open formatted continuous print dialog"
            >
              <Printer className="w-3.5 h-3.5 text-amber-400" />
              Direct Bulk Print
            </button>

            <button
              type="button"
              onClick={handleExportMergedPdf}
              disabled={isExporting}
              className="px-5 py-2 bg-red-800 hover:bg-red-900 disabled:opacity-50 text-white font-extrabold rounded-xl text-xs transition cursor-pointer flex items-center gap-1.5 shadow-md"
            >
              {isExporting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <FileDown className="w-3.5 h-3.5 text-amber-300" />}
              {isExporting ? 'Compiling PDF...' : `Download Merged PDF (${papers.length} Papers)`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
