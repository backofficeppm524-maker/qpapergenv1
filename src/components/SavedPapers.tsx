import React, { useState, useMemo, useEffect } from 'react';
import { 
  Files, 
  Search, 
  Trash2, 
  Printer, 
  KeyRound, 
  Eye, 
  FileText, 
  Clock, 
  Calendar,
  Layers,
  Share2,
  CheckCircle,
  FileDown,
  CheckSquare,
  Square,
  Check,
  X,
  Sparkles,
  AlertTriangle
} from 'lucide-react';
import { QuestionPaper } from '../types';
import { shareQuestionPaper } from '../utils/shareUtils';
import { MergedPdfExportModal } from './MergedPdfExportModal';
import { triggerCleanBatchPrint } from '../utils/pdfExport';

interface SavedPapersProps {
  papers: QuestionPaper[];
  onOpenPaper: (paper: QuestionPaper) => void;
  onOpenKey: (paper: QuestionPaper) => void;
  onDeletePaper: (paperId: string) => void;
  onBatchDeletePapers?: (paperIds: string[]) => void;
}

type DeleteTarget = 
  | { type: 'single'; paper: QuestionPaper }
  | { type: 'batch'; ids: string[] }
  | null;

export const SavedPapers: React.FC<SavedPapersProps> = ({
  papers,
  onOpenPaper,
  onOpenKey,
  onDeletePaper,
  onBatchDeletePapers
}) => {
  const [filterType, setFilterType] = useState<string>('ALL');
  const [search, setSearch] = useState('');
  const [shareToast, setShareToast] = useState<{ message: string; type: 'success' | 'info' } | null>(null);
  
  // Batch processing state
  const [selectedPaperIds, setSelectedPaperIds] = useState<string[]>([]);
  const [isMergedModalOpen, setIsMergedModalOpen] = useState(false);

  // In-app Delete Confirmation Modal state
  const [deleteTarget, setDeleteTarget] = useState<DeleteTarget>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (deleteTarget) setDeleteTarget(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [deleteTarget]);

  const handleSharePaper = async (e: React.MouseEvent, paper: QuestionPaper) => {
    e.stopPropagation();
    const result = await shareQuestionPaper(paper);
    if (result.success) {
      setShareToast({
        message: result.message,
        type: 'success'
      });
      setTimeout(() => setShareToast(null), 3500);
    } else if (result.method !== 'native') {
      setShareToast({
        message: result.message,
        type: 'info'
      });
      setTimeout(() => setShareToast(null), 3500);
    }
  };

  const filteredPapers = useMemo(() => {
    return papers.filter(p => {
      if (filterType === '25' && p.maxMarks !== 25) return false;
      if (filterType === '50' && p.maxMarks !== 50) return false;
      if (filterType === '70' && p.maxMarks !== 70) return false;
      if (filterType === 'MANUAL' && p.paperType !== 'manual') return false;

      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          p.title.toLowerCase().includes(q) ||
          p.schoolName.toLowerCase().includes(q) ||
          p.examName.toLowerCase().includes(q) ||
          p.subject.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [papers, filterType, search]);

  const toggleSelectPaper = (paperId: string) => {
    setSelectedPaperIds(prev => 
      prev.includes(paperId) ? prev.filter(id => id !== paperId) : [...prev, paperId]
    );
  };

  const handleSelectAllFiltered = () => {
    const filteredIds = filteredPapers.map(p => p.id);
    const allSelected = filteredIds.every(id => selectedPaperIds.includes(id));
    if (allSelected) {
      setSelectedPaperIds(prev => prev.filter(id => !filteredIds.includes(id)));
    } else {
      setSelectedPaperIds(prev => Array.from(new Set([...prev, ...filteredIds])));
    }
  };

  const handleClearSelection = () => {
    setSelectedPaperIds([]);
  };

  const selectedPapers = useMemo(() => {
    return papers.filter(p => selectedPaperIds.includes(p.id));
  }, [papers, selectedPaperIds]);

  const handleConfirmDelete = () => {
    if (!deleteTarget) return;

    if (deleteTarget.type === 'single') {
      const paperId = deleteTarget.paper.id;
      const paperTitle = deleteTarget.paper.examName || deleteTarget.paper.title || 'Question Paper';
      onDeletePaper(paperId);
      setSelectedPaperIds(prev => prev.filter(id => id !== paperId));
      setShareToast({
        message: `Deleted "${paperTitle}" & Answer Key successfully.`,
        type: 'info'
      });
    } else if (deleteTarget.type === 'batch') {
      const count = deleteTarget.ids.length;
      if (onBatchDeletePapers) {
        onBatchDeletePapers(deleteTarget.ids);
      } else {
        deleteTarget.ids.forEach(id => onDeletePaper(id));
      }
      setSelectedPaperIds(prev => prev.filter(id => !deleteTarget.ids.includes(id)));
      setShareToast({
        message: `Deleted ${count} question papers & answer keys.`,
        type: 'info'
      });
    }

    setDeleteTarget(null);
    setTimeout(() => setShareToast(null), 3500);
  };

  const isAllFilteredSelected = filteredPapers.length > 0 && filteredPapers.every(p => selectedPaperIds.includes(p.id));

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-24">
      {/* Toast */}
      {shareToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0f172a] text-white px-4 py-3 rounded-xl shadow-2xl border border-amber-500/40 flex items-center gap-3 animate-fade-in">
          <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
          <div>
            <p className="text-xs font-bold text-white">{shareToast.message}</p>
            <p className="text-[10px] text-slate-300">Saved papers list updated.</p>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteTarget && (
        <div 
          className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setDeleteTarget(null)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl border border-stone-200 max-w-md w-full p-6 space-y-5 animate-scale-up"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-red-100 text-red-700 flex items-center justify-center shrink-0">
                <Trash2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-stone-900">
                  {deleteTarget.type === 'single' 
                    ? 'Delete Question Paper & Answer Key' 
                    : `Delete ${deleteTarget.ids.length} Question Papers`}
                </h3>
                <p className="text-xs text-stone-500">
                  This action is permanent and cannot be undone.
                </p>
              </div>
            </div>

            {/* Target Details Card */}
            {deleteTarget.type === 'single' ? (
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-3.5 space-y-2 text-xs">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-stone-900 text-sm">
                    {deleteTarget.paper.examName || deleteTarget.paper.title}
                  </span>
                  <span className="bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded text-[11px]">
                    {deleteTarget.paper.maxMarks} Marks
                  </span>
                </div>
                <p className="text-stone-600 font-medium">{deleteTarget.paper.schoolName}</p>
                <div className="flex items-center gap-3 text-stone-500 text-[11px] pt-1 border-t border-stone-200">
                  <span>{deleteTarget.paper.standard} • {deleteTarget.paper.subject}</span>
                  <span>•</span>
                  <span>{deleteTarget.paper.date}</span>
                </div>
              </div>
            ) : (
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-3.5 space-y-2 text-xs">
                <p className="font-bold text-stone-800">
                  You are about to delete {deleteTarget.ids.length} selected question papers:
                </p>
                <div className="space-y-1 max-h-32 overflow-y-auto pr-1">
                  {papers
                    .filter(p => deleteTarget.ids.includes(p.id))
                    .map(p => (
                      <div key={p.id} className="flex items-center justify-between text-[11px] text-stone-600 bg-white p-1.5 rounded border border-stone-200">
                        <span className="truncate font-semibold max-w-[240px]">{p.examName || p.title}</span>
                        <span className="font-bold text-red-700">{p.maxMarks}M</span>
                      </div>
                    ))}
                </div>
              </div>
            )}

            <p className="text-xs text-stone-600">
              Are you sure you want to permanently remove {deleteTarget.type === 'single' ? 'this paper and its corresponding answer key' : 'these papers and their corresponding answer keys'} from your device storage?
            </p>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setDeleteTarget(null)}
                className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-xs rounded-xl transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white font-bold text-xs rounded-xl transition cursor-pointer flex items-center gap-1.5 shadow-sm"
              >
                <Trash2 className="w-4 h-4" />
                {deleteTarget.type === 'single' ? 'Delete Paper' : `Delete ${deleteTarget.ids.length} Papers`}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Merged PDF Export & Bulk Printer Modal */}
      {isMergedModalOpen && (
        <MergedPdfExportModal
          isOpen={isMergedModalOpen}
          onClose={() => setIsMergedModalOpen(false)}
          selectedPapers={selectedPapers}
          onRemovePaper={(id) => setSelectedPaperIds(prev => prev.filter(pId => pId !== id))}
        />
      )}

      {/* Header */}
      <div className="bg-[#1e293b] text-white rounded-xl p-5 shadow-sm space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Files className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-bold">Saved Question Papers & Answer Keys</h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-amber-400 text-stone-950 text-xs font-bold px-2.5 py-1 rounded">
              {papers.length} Total Saved
            </span>
          </div>
        </div>
        <p className="text-xs text-slate-300">
          Access and manage your generated question papers. Select multiple papers to merge them into a single PDF document for bulk printing or distribution.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-sm flex flex-col sm:row items-stretch sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 flex-wrap">
          {/* Quick Select All Toggle */}
          {filteredPapers.length > 0 && (
            <button
              onClick={handleSelectAllFiltered}
              className={`px-3 py-1 rounded-lg font-bold flex items-center gap-1.5 transition cursor-pointer border ${
                isAllFilteredSelected
                  ? 'bg-amber-50 border-amber-300 text-amber-900 dark:bg-amber-950/40 dark:text-amber-200'
                  : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
              }`}
              title={isAllFilteredSelected ? "Deselect All Filtered" : "Select All Filtered"}
            >
              {isAllFilteredSelected ? (
                <CheckSquare className="w-3.5 h-3.5 text-amber-600" />
              ) : (
                <Square className="w-3.5 h-3.5 text-stone-400" />
              )}
              <span>{isAllFilteredSelected ? 'Deselect All' : 'Select All'}</span>
            </button>
          )}

          <div className="h-4 w-px bg-stone-200 hidden sm:block mx-1" />

          <span className="font-semibold text-stone-500">Filter:</span>
          {[
            { id: 'ALL', label: 'All Papers' },
            { id: '25', label: '25 Marks' },
            { id: '50', label: '50 Marks' },
            { id: '70', label: '70 Marks' },
            { id: 'MANUAL', label: 'Manual' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setFilterType(f.id)}
              className={`px-2.5 py-1 rounded font-bold transition cursor-pointer ${
                filterType === f.id
                  ? 'bg-red-800 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="relative flex-1 max-w-sm">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search papers by exam, subject, school..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 border border-stone-300 rounded-lg text-xs focus:ring-1 focus:ring-red-800"
          />
        </div>
      </div>

      {/* Papers List */}
      {filteredPapers.length === 0 ? (
        <div className="bg-white border border-stone-200 rounded-xl p-12 text-center text-stone-500">
          <FileText className="w-12 h-12 mx-auto text-stone-300 mb-2" />
          <p className="font-semibold text-stone-700">No question papers match the filter criteria.</p>
          <p className="text-xs text-stone-500 mt-1">Generate a 25, 50, 70, or Custom blueprint test paper to see it here.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3">
          {filteredPapers.map(paper => {
            const isSelected = selectedPaperIds.includes(paper.id);

            return (
              <div
                key={paper.id}
                onClick={() => toggleSelectPaper(paper.id)}
                className={`bg-white border rounded-xl p-4.5 transition cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs ${
                  isSelected 
                    ? 'border-amber-500 bg-amber-50/20 ring-1 ring-amber-400' 
                    : 'border-stone-200 hover:border-stone-300 hover:shadow-xs'
                }`}
              >
                <div className="flex items-start sm:items-center gap-3.5 min-w-0">
                  {/* Selection Checkbox */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSelectPaper(paper.id);
                    }}
                    className={`w-5 h-5 rounded flex items-center justify-center transition shrink-0 mt-0.5 sm:mt-0 ${
                      isSelected 
                        ? 'bg-amber-500 text-white shadow-xs' 
                        : 'border-2 border-stone-300 hover:border-stone-400 bg-white'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </button>

                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="bg-red-100 text-red-800 text-[11px] font-bold px-2 py-0.5 rounded">
                        {paper.maxMarks} Marks
                      </span>
                      <span className="text-[11px] font-semibold text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
                        {paper.standard} — {paper.subject}
                      </span>
                      <span className="text-[11px] text-stone-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {paper.date}
                      </span>
                      {paper.notes && (
                        <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.2 rounded">
                          {paper.notes}
                        </span>
                      )}
                    </div>

                    <h3 className="font-bold text-stone-900 text-sm">
                      {paper.examName} — {paper.schoolName}
                    </h3>

                    <p className="text-xs text-stone-500 flex items-center gap-3">
                      <span>Time: {paper.timeAllowed}</span>
                      <span>•</span>
                      <span>{paper.sections.reduce((acc, s) => acc + s.questions.length, 0)} Total Questions</span>
                    </p>
                  </div>
                </div>

                {/* Individual Action Buttons */}
                <div 
                  className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end flex-wrap"
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={() => onOpenPaper(paper)}
                    className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs rounded transition cursor-pointer flex items-center gap-1.5"
                    title="View question paper and print preview"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Preview QP
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenKey(paper)}
                    className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded transition cursor-pointer flex items-center gap-1.5 shadow-xs"
                    title="View valuation scheme and answer key"
                  >
                    <KeyRound className="w-3.5 h-3.5" />
                    Answer Key
                  </button>

                  <button
                    type="button"
                    onClick={(e) => handleSharePaper(e, paper)}
                    className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 rounded transition cursor-pointer"
                    title="Generate & Copy Share Link"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setDeleteTarget({ type: 'single', paper });
                    }}
                    className="p-1.5 text-stone-400 hover:text-red-700 hover:bg-red-50 rounded transition cursor-pointer"
                    title="Delete Question Paper & Answer Key"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Floating / Sticky Batch Action Bar when 1 or more papers are selected */}
      {selectedPaperIds.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-[#0f172a] text-white border border-amber-500/40 rounded-2xl shadow-2xl px-5 py-3.5 flex items-center gap-4 flex-wrap max-w-2xl w-[92%] animate-fade-in">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-full bg-amber-400 text-stone-950 font-black text-xs flex items-center justify-center">
              {selectedPaperIds.length}
            </span>
            <span className="text-xs font-bold text-slate-200">
              Paper{selectedPaperIds.length > 1 ? 's' : ''} Selected
            </span>
          </div>

          <div className="h-5 w-px bg-slate-700 hidden sm:block" />

          <div className="flex items-center gap-2 ml-auto flex-wrap">
            {/* Merged PDF Export Button */}
            <button
              type="button"
              onClick={() => setIsMergedModalOpen(true)}
              className="px-3.5 py-1.5 bg-red-700 hover:bg-red-600 text-white font-extrabold text-xs rounded-xl transition cursor-pointer flex items-center gap-1.5 shadow-sm"
              title="Export all selected question papers into a single merged PDF file"
            >
              <FileDown className="w-4 h-4 text-amber-300" />
              Export Merged PDF
            </button>

            {/* Direct Bulk Print Button */}
            <button
              type="button"
              onClick={() => triggerCleanBatchPrint(selectedPapers, { includeAnswerKeys: true })}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-xs rounded-xl transition cursor-pointer flex items-center gap-1.5 border border-slate-600"
              title="Send all selected papers to browser printer with page-breaks"
            >
              <Printer className="w-3.5 h-3.5 text-amber-400" />
              Bulk Print
            </button>

            {/* Batch Delete */}
            <button
              type="button"
              onClick={() => {
                if (selectedPaperIds.length > 0) {
                  setDeleteTarget({ type: 'batch', ids: [...selectedPaperIds] });
                }
              }}
              className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition cursor-pointer"
              title="Delete all selected papers"
            >
              <Trash2 className="w-4 h-4" />
            </button>

            {/* Clear Selection */}
            <button
              type="button"
              onClick={handleClearSelection}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition cursor-pointer"
              title="Clear selection"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};


