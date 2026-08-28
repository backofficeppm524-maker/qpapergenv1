import React, { useRef, useState, useEffect } from 'react';
import { 
  Printer, 
  Download, 
  KeyRound, 
  ArrowLeft, 
  Languages, 
  Share2, 
  CheckCircle,
  FileText,
  Copy,
  Eye,
  EyeOff,
  Check,
  Sparkles,
  FileDown,
  Loader2,
  RefreshCw,
  Edit3,
  Sliders,
  X,
  Search,
  BookOpen,
  Bookmark,
  BookmarkCheck,
  Save
} from 'lucide-react';
import { QuestionPaper, LanguageMode, Question, GeneratedSection, GeneratedSectionQuestion } from '../types';
import { shareQuestionPaper, generateShareUrl } from '../utils/shareUtils';
import { exportElementToPdf, triggerCleanPrint } from '../utils/pdfExport';

interface QuestionPaperViewProps {
  paper: QuestionPaper;
  languageMode: LanguageMode;
  onLanguageChange: (mode: LanguageMode) => void;
  onViewAnswerKey: () => void;
  onBack: () => void;
  generatorViewName?: string;
  onUpdatePaper?: (updatedPaper: QuestionPaper) => void;
  onSavePaper?: (paper: QuestionPaper) => void;
  allSubjectQuestions?: Question[];
}

export const QuestionPaperView: React.FC<QuestionPaperViewProps> = ({
  paper,
  languageMode,
  onLanguageChange,
  onViewAnswerKey,
  onBack,
  generatorViewName = 'Question Paper Generator',
  onUpdatePaper,
  onSavePaper,
  allSubjectQuestions = []
}) => {
  const paperRef = useRef<HTMLDivElement>(null);
  const [isPrintPreview, setIsPrintPreview] = useState(false);
  const [shareToast, setShareToast] = useState<{ message: string; type: 'success' | 'info' } | null>(null);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [pdfProgress, setPdfProgress] = useState<string>('');

  // Native window.print() PDF Download trigger
  const handleDownloadPdfViaPrint = () => {
    const originalTitle = document.title;
    const sanitizedExam = paper.examName.replace(/[^a-zA-Z0-9]/g, '_');
    const sanitizedSub = (paper.subject || 'Subject').replace(/[^a-zA-Z0-9]/g, '_');
    document.title = `${sanitizedExam}_${sanitizedSub}_${paper.maxMarks}M_Question_Paper`;
    
    window.print();
    
    setTimeout(() => {
      document.title = originalTitle;
    }, 1000);
  };

  const handleSaveToLibrary = () => {
    if (onSavePaper) {
      onSavePaper(paper);
    }
    setShareToast({
      message: `Question Paper "${paper.examName}" (${paper.maxMarks}M) saved to 'Saved Papers'!`,
      type: 'success'
    });
    setTimeout(() => setShareToast(null), 4000);
  };

  // Editing & Reselection States
  const [isEditMode, setIsEditMode] = useState(false);
  const [swapTarget, setSwapTarget] = useState<{
    secIdx: number;
    qIdx: number;
    isOr?: boolean;
    currentQuestion: Question;
    marks: number;
  } | null>(null);

  const [editTarget, setEditTarget] = useState<{
    secIdx: number;
    qIdx: number;
    isOr?: boolean;
    question: Question;
    isCompulsory?: boolean;
  } | null>(null);

  const [swapChapterFilter, setSwapChapterFilter] = useState<number | 'ALL'>('ALL');
  const [swapSearchQuery, setSwapSearchQuery] = useState('');

  // Edit Question Form
  const [editTextEn, setEditTextEn] = useState('');
  const [editTextTa, setEditTextTa] = useState('');
  const [editOptA, setEditOptA] = useState('');
  const [editOptB, setEditOptB] = useState('');
  const [editOptC, setEditOptC] = useState('');
  const [editOptD, setEditOptD] = useState('');
  const [editAns, setEditAns] = useState('');
  const [editAnsTa, setEditAnsTa] = useState('');
  const [editIsCompulsory, setEditIsCompulsory] = useState(false);

  // Close modals or print preview on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (swapTarget) setSwapTarget(null);
        else if (editTarget) setEditTarget(null);
        else if (isPrintPreview) setIsPrintPreview(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPrintPreview, swapTarget, editTarget]);

  // Export PDF directly as a downloadable .pdf file
  const handleExportPdf = async () => {
    if (!paperRef.current || isGeneratingPdf) return;
    setIsGeneratingPdf(true);
    setPdfProgress('Preparing document...');

    const sanitizedExam = paper.examName.replace(/[^a-zA-Z0-9]/g, '_');
    const sanitizedSub = paper.subject.replace(/[^a-zA-Z0-9]/g, '_');
    const filename = `${sanitizedExam}_${sanitizedSub}_${paper.maxMarks}M_Question_Paper.pdf`;

    try {
      const success = await exportElementToPdf(paperRef.current, filename, (msg) => {
        setPdfProgress(msg);
      });

      if (success) {
        setShareToast({
          message: 'Question paper PDF downloaded successfully!',
          type: 'success'
        });
      } else {
        triggerCleanPrint(paperRef.current, `${sanitizedExam}_${sanitizedSub}_Question_Paper`);
      }
    } catch (err) {
      console.error(err);
      triggerCleanPrint(paperRef.current, `${sanitizedExam}_${sanitizedSub}_Question_Paper`);
    } finally {
      setIsGeneratingPdf(false);
      setPdfProgress('');
      setTimeout(() => setShareToast(null), 4000);
    }
  };

  // Dedicated clean browser print
  const handlePrint = () => {
    if (!paperRef.current) return;
    const sanitizedExam = paper.examName.replace(/[^a-zA-Z0-9]/g, '_');
    const sanitizedSub = paper.subject.replace(/[^a-zA-Z0-9]/g, '_');
    const title = `${sanitizedExam}_${sanitizedSub}_${paper.maxMarks}M_Question_Paper`;
    triggerCleanPrint(paperRef.current, title);
  };

  // Web Share or Clipboard Copy
  const handleShare = async () => {
    const result = await shareQuestionPaper(paper);
    if (result.success) {
      setShareToast({
        message: result.message,
        type: 'success'
      });
      setTimeout(() => setShareToast(null), 4000);
    } else if (result.method !== 'native') {
      setShareToast({
        message: result.message,
        type: 'info'
      });
      setTimeout(() => setShareToast(null), 4000);
    }
  };

  const handleDownloadDoc = () => {
    if (!paperRef.current) return;
    const header = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>${paper.title}</title>
    <style>
      body { font-family: 'Times New Roman', serif; font-size: 11pt; line-height: 1.3; }
      .header-title { text-align: center; font-weight: bold; font-size: 14pt; }
      .section-title { font-weight: bold; margin-top: 15px; border-bottom: 1px solid #000; }
    </style></head><body>`;
    const footer = '</body></html>';
    const sourceHTML = header + paperRef.current.innerHTML + footer;

    const blob = new Blob(['\ufeff', sourceHTML], {
      type: 'application/msword'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${paper.examName.replace(/[^a-zA-Z0-9]/g, '_')}_Question_Paper.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Open Edit Modal
  const handleOpenEdit = (secIdx: number, qIdx: number, isOr: boolean | undefined, question: Question, isCompulsory?: boolean) => {
    setEditTarget({ secIdx, qIdx, isOr, question, isCompulsory });
    setEditTextEn(question.questionText);
    setEditTextTa(question.questionTextTamil || '');
    setEditOptA(question.options?.A || '');
    setEditOptB(question.options?.B || '');
    setEditOptC(question.options?.C || '');
    setEditOptD(question.options?.D || '');
    setEditAns(question.answer || '');
    setEditAnsTa(question.answerTamil || '');
    setEditIsCompulsory(!!isCompulsory);
  };

  // Save Question Edits
  const handleSaveEdit = () => {
    if (!editTarget || !onUpdatePaper) return;

    const { secIdx, qIdx, isOr, question } = editTarget;
    const updatedQuestion: Question = {
      ...question,
      questionText: editTextEn,
      questionTextTamil: editTextTa || undefined,
      answer: editAns,
      answerTamil: editAnsTa || undefined,
      options: question.marks === 1 ? {
        A: editOptA,
        B: editOptB,
        C: editOptC,
        D: editOptD
      } : question.options
    };

    const newSections = paper.sections.map((sec, sIndex) => {
      if (sIndex !== secIdx) return sec;
      const newQuestions = sec.questions.map((qItem, qIndex) => {
        if (qIndex !== qIdx) return qItem;
        if (isOr) {
          return {
            ...qItem,
            orQuestion: updatedQuestion
          };
        } else {
          return {
            ...qItem,
            question: updatedQuestion,
            isCompulsory: editIsCompulsory
          };
        }
      });
      return { ...sec, questions: newQuestions };
    });

    const updatedPaper: QuestionPaper = {
      ...paper,
      sections: newSections
    };

    onUpdatePaper(updatedPaper);
    setEditTarget(null);
    setShareToast({
      message: 'Question updated successfully!',
      type: 'success'
    });
    setTimeout(() => setShareToast(null), 3000);
  };

  // Swap / Reselect Question from Bank
  const handleSwapQuestion = (newQuestion: Question) => {
    if (!swapTarget || !onUpdatePaper) return;

    const { secIdx, qIdx, isOr } = swapTarget;
    const newSections = paper.sections.map((sec, sIndex) => {
      if (sIndex !== secIdx) return sec;
      const newQuestions = sec.questions.map((qItem, qIndex) => {
        if (qIndex !== qIdx) return qItem;
        if (isOr) {
          return {
            ...qItem,
            orQuestion: newQuestion
          };
        } else {
          return {
            ...qItem,
            question: newQuestion
          };
        }
      });
      return { ...sec, questions: newQuestions };
    });

    const updatedPaper: QuestionPaper = {
      ...paper,
      sections: newSections
    };

    onUpdatePaper(updatedPaper);
    setSwapTarget(null);
    setShareToast({
      message: 'Question replaced successfully!',
      type: 'success'
    });
    setTimeout(() => setShareToast(null), 3000);
  };

  // Filter questions for swap modal
  const eligibleSwapQuestions = allSubjectQuestions.filter(q => {
    if (!swapTarget) return false;
    if (q.marks !== swapTarget.marks) return false;
    if (q.id === swapTarget.currentQuestion.id) return false;
    if (swapChapterFilter !== 'ALL' && q.chapterNo !== swapChapterFilter) return false;
    if (swapSearchQuery.trim()) {
      const qLower = swapSearchQuery.toLowerCase();
      const matchEn = q.questionText.toLowerCase().includes(qLower);
      const matchTa = q.questionTextTamil?.toLowerCase().includes(qLower);
      if (!matchEn && !matchTa) return false;
    }
    return true;
  });

  // Calculate sequential question numbers
  let globalQNo = 1;

  const tamilOptionLabels: Record<string, string> = {
    A: '(அ)',
    B: '(ஆ)',
    C: '(இ)',
    D: '(ஈ)'
  };

  const englishOptionLabels: Record<string, string> = {
    A: '(a)',
    B: '(b)',
    C: '(c)',
    D: '(d)'
  };

  return (
    <div className={`space-y-6 max-w-4xl mx-auto pb-16 transition-all ${isPrintPreview ? 'pt-16' : ''}`}>
      {/* Toast Notification */}
      {shareToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0f172a] text-white px-4 py-3 rounded-xl shadow-2xl border border-amber-500/40 flex items-center gap-3 animate-fade-in print:hidden">
          <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
          <div>
            <p className="text-xs font-bold text-white">{shareToast.message}</p>
            <p className="text-[10px] text-slate-300">Recipient will open this exact question paper and answer key.</p>
          </div>
        </div>
      )}

      {/* Floating Print Preview Banner when in Preview Mode */}
      {isPrintPreview && (
        <div className="fixed top-0 left-0 right-0 z-40 bg-[#0f172a]/95 backdrop-blur-md text-white border-b border-amber-500/30 px-4 py-3 shadow-xl flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2.5">
            <span className="bg-amber-400 text-stone-950 text-[10px] font-black uppercase px-2 py-0.5 rounded tracking-wide">
              Print Preview
            </span>
            <span className="text-xs font-semibold text-slate-200 hidden sm:inline">
              Clean distraction-free A4 sheet view
            </span>
            {isGeneratingPdf && (
              <span className="text-xs bg-amber-500/20 text-amber-300 font-bold px-2 py-0.5 rounded flex items-center gap-1.5 animate-pulse">
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                {pdfProgress || 'Generating PDF...'}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPdfViaPrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-red-700 hover:bg-red-600 text-white font-bold text-xs rounded transition cursor-pointer shadow"
              title="Download as PDF using browser print"
            >
              <FileDown className="w-3.5 h-3.5" />
              Download as PDF
            </button>

            <button
              onClick={handleSaveToLibrary}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded transition cursor-pointer shadow"
              title="Save this question paper to Saved Papers"
            >
              <Bookmark className="w-3.5 h-3.5" />
              Save to Library
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs rounded transition cursor-pointer shadow border border-slate-600"
              title="Print document or use browser PDF printer"
            >
              <Printer className="w-3.5 h-3.5" />
              Print
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded transition cursor-pointer border border-slate-600"
            >
              <Share2 className="w-3.5 h-3.5" />
              Share Link
            </button>

            <button
              onClick={() => setIsPrintPreview(false)}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-stone-700 hover:bg-stone-600 text-white font-bold text-xs rounded transition cursor-pointer"
              title="Exit Print Preview (Esc)"
            >
              <EyeOff className="w-3.5 h-3.5" />
              Exit Preview <span className="text-[10px] opacity-70 ml-0.5">(Esc)</span>
            </button>
          </div>
        </div>
      )}

      {/* Top Toolbar (Non-printable, hidden in Print Preview mode) */}
      {!isPrintPreview && (
        <div className="bg-[#1e293b] text-white p-4 rounded-xl shadow-md space-y-3 no-print print:hidden">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Primary Back Button */}
            <div className="flex items-center gap-3">
              <button
                onClick={onBack}
                className="flex items-center gap-2 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white hover:text-amber-300 font-bold text-xs rounded-lg transition cursor-pointer border border-slate-600 shadow-sm"
                title={`Back to ${generatorViewName}`}
              >
                <ArrowLeft className="w-4 h-4 text-amber-400" />
                <span>← Back to {generatorViewName}</span>
              </button>
              <div>
                <h2 className="text-sm font-bold truncate max-w-xs sm:max-w-md">{paper.title}</h2>
                <p className="text-[11px] text-amber-300">
                  Total Marks: {paper.maxMarks} | Time: {paper.timeAllowed}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {/* Language Toggle */}
              <div className="inline-flex bg-slate-800 p-0.5 rounded border border-slate-700">
                <button
                  onClick={() => onLanguageChange('english')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded cursor-pointer ${
                    languageMode === 'english' ? 'bg-amber-400 text-stone-950 font-bold' : 'text-slate-300'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => onLanguageChange('tamil')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded cursor-pointer ${
                    languageMode === 'tamil' ? 'bg-amber-400 text-stone-950 font-bold' : 'text-slate-300'
                  }`}
                >
                  தமிழ் வழி
                </button>
                <button
                  onClick={() => onLanguageChange('bilingual')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded cursor-pointer ${
                    languageMode === 'bilingual' ? 'bg-amber-400 text-stone-950 font-bold' : 'text-slate-300'
                  }`}
                >
                  Bilingual
                </button>
              </div>

              {/* Edit / Reselect Mode Toggle */}
              <button
                onClick={() => setIsEditMode(!isEditMode)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition cursor-pointer border ${
                  isEditMode
                    ? 'bg-amber-400 text-stone-950 border-amber-300 shadow'
                    : 'bg-slate-800 hover:bg-slate-700 text-amber-300 border-slate-700'
                }`}
                title="Reselect or edit specific questions inside this paper"
              >
                <Sliders className="w-3.5 h-3.5" />
                {isEditMode ? '✓ Exit Edit Mode' : '✎ Edit & Reselect'}
              </button>

              {/* Save to Saved Papers */}
              <button
                onClick={handleSaveToLibrary}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs rounded transition cursor-pointer shadow border border-emerald-700"
                title="Save this question paper to 'Saved Papers' library"
              >
                <Bookmark className="w-3.5 h-3.5 text-emerald-300" />
                Save Paper
              </button>

              {/* Download as PDF Button (Native Browser Print trigger) */}
              <button
                onClick={handleDownloadPdfViaPrint}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-red-800 hover:bg-red-700 text-white font-bold text-xs rounded transition cursor-pointer shadow border border-red-700"
                title="Download as PDF using browser Print dialog"
              >
                <FileDown className="w-3.5 h-3.5 text-amber-300" />
                Download as PDF
              </button>

              {/* Print Preview Button */}
              <button
                onClick={() => setIsPrintPreview(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 hover:text-white font-bold text-xs rounded transition cursor-pointer border border-slate-600"
                title="Open clean distraction-free print preview"
              >
                <Eye className="w-3.5 h-3.5 text-amber-300" />
                Preview
              </button>

              {/* Clean Print */}
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-xs rounded transition cursor-pointer border border-slate-700 shadow"
                title="Print question paper"
              >
                <Printer className="w-3.5 h-3.5" />
                Print
              </button>

              {/* Share Button */}
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs rounded transition cursor-pointer border border-slate-700"
                title="Share unique link to this question paper"
              >
                <Share2 className="w-3.5 h-3.5 text-amber-400" />
                Share
              </button>

              {/* Download .DOC */}
              <button
                onClick={handleDownloadDoc}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs rounded transition cursor-pointer"
              >
                <Download className="w-4 h-4" />
                .DOC
              </button>

              {/* View Answer Key */}
              <button
                onClick={onViewAnswerKey}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs rounded transition cursor-pointer shadow"
              >
                <KeyRound className="w-4 h-4" />
                Answer Key →
              </button>
            </div>
          </div>

          {/* Quick Notice Bar for Reselection */}
          {isEditMode && (
            <div className="bg-amber-950/40 border border-amber-500/50 text-amber-200 text-xs px-3.5 py-2 rounded-lg flex items-center justify-between gap-2 animate-fade-in">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  <strong>Edit & Reselection Mode Active:</strong> Click <strong>"Swap / Reselect"</strong> to replace any question with another question from the bank, or <strong>"Edit Text"</strong> to modify question wording directly.
                </span>
              </div>
              <button
                onClick={() => setIsEditMode(false)}
                className="bg-amber-400 text-stone-950 font-bold px-2.5 py-1 rounded text-[11px] hover:bg-amber-300 cursor-pointer"
              >
                Done
              </button>
            </div>
          )}
        </div>
      )}

      {/* Printable Sheet */}
      <div 
        ref={paperRef}
        id="printable-question-paper"
        className={`bg-white border text-black font-serif transition-all ${
          isPrintPreview 
            ? 'border-stone-400 shadow-2xl max-w-3xl mx-auto p-8 sm:p-14 rounded-sm'
            : 'border-stone-300 shadow-lg p-8 sm:p-12'
        } print:border-none print:shadow-none print:p-0 print:m-0 print:max-w-none`}
        style={{ fontFamily: "'Times New Roman', 'Noto Serif Tamil', serif" }}
      >
        {/* Top Header Information */}
        <div className="border-b-2 border-black pb-4 mb-4 space-y-2 print-avoid-break">
          {/* Reg No Box */}
          <div className="flex justify-between items-start text-xs">
            <div className="border border-black p-1 inline-flex items-center gap-1">
              <span className="font-bold">
                {languageMode === 'tamil' ? 'பதிவு எண் (Register Number):' : 'Register Number:'}
              </span>
              <div className="flex gap-1 ml-1">
                {[...Array(8)].map((_, i) => (
                  <span key={i} className="inline-block w-4 h-5 border border-black text-center font-mono"></span>
                ))}
              </div>
            </div>
            <div className="text-right text-[11px] font-bold">
              <span>{paper.id.toUpperCase()}</span>
            </div>
          </div>

          {/* School and Exam Title */}
          <div className="text-center space-y-1">
            <h1 className="text-lg sm:text-xl font-bold tracking-wider uppercase">
              {paper.schoolName}
            </h1>
            <h2 className="text-base sm:text-lg font-bold uppercase">
              {paper.examName}
            </h2>
            <h3 className="text-sm sm:text-base font-bold uppercase">
              {languageMode === 'tamil' ? (
                <>{paper.standard.includes('11') ? '11-ஆம் வகுப்பு' : '12-ஆம் வகுப்பு'} — {paper.subjectTamil || paper.subject} ({paper.subject})</>
              ) : languageMode === 'bilingual' ? (
                <>{paper.standard} — {paper.subject} {paper.subjectTamil ? `(${paper.subjectTamil})` : ''}</>
              ) : (
                <>{paper.standard} — {paper.subject}</>
              )}
            </h3>
          </div>

          {/* Time & Marks Bar */}
          <div className="flex justify-between items-center text-xs sm:text-sm font-bold pt-2 border-t border-black">
            <span>
              {languageMode === 'tamil' ? `கால அளவு: ${paper.timeAllowed}` : `Time Allowed: ${paper.timeAllowed}`}
            </span>
            <span>
              {languageMode === 'tamil' ? `மொத்த மதிப்பெண்கள்: ${paper.maxMarks}` : `Maximum Marks: ${paper.maxMarks}`}
            </span>
          </div>

          {/* Instructions Box */}
          <div className="text-[11px] sm:text-xs pt-1 space-y-1 border-t border-dashed border-stone-400 text-stone-800">
            {languageMode === 'english' && (
              <p>
                <strong>Instructions:</strong> (1) Check the question paper for fairness of printing. If there is any lack of fairness, inform the Hall Supervisor immediately. (2) Use Blue or Black ink to write and underline and pencil to draw diagrams.
              </p>
            )}
            {languageMode === 'tamil' && (
              <p>
                <strong>குறிப்புகள்:</strong> (1) அனைத்து வினாக்களும் சரியாக அச்சிடப்பட்டுள்ளதா என்பதை சரிபார்த்துக் கொள்ளவும். ஏதேனும் குறைபாடிருப்பின், அறைக் கண்காணிப்பாளரிடம் உடனடியாகத் தெரிவிக்கவும். (2) நீலம் அல்லது கருப்பு மையினை மட்டுமே எழுதுவதற்கும் அடிக்கோடிடுவதற்கும் பயன்படுத்தவும். வரைபடங்களை பென்சிலில் வரையவும்.
              </p>
            )}
            {languageMode === 'bilingual' && (
              <>
                <p>
                  <strong>Instructions:</strong> (1) Check the question paper for fairness of printing. (2) Use Blue or Black ink to write and pencil for diagrams.
                </p>
                <p>
                  <strong>குறிப்புகள்:</strong> (1) அனைத்து வினாக்களும் சரியாக அச்சிடப்பட்டுள்ளதா என சரிபார்க்கவும். (2) நீலம் அல்லது கருப்பு மையினை மட்டுமே பயன்படுத்தவும்.
                </p>
              </>
            )}
          </div>
        </div>

        {/* Paper Sections */}
        <div className="space-y-6">
          {paper.sections.map((sec, secIdx) => {
            const isPart1 = sec.marksPerQuestion === 1;
            const isPart4 = sec.marksPerQuestion === 5;

            return (
              <div key={secIdx} className="space-y-3">
                {/* Section Header */}
                <div className="text-center border-y border-black py-1.5 my-3 print-avoid-break">
                  <h4 className="font-bold text-sm sm:text-base uppercase tracking-wide">
                    {languageMode === 'tamil' ? (sec.partTitleTamil || sec.partTitle) : languageMode === 'bilingual' ? `${sec.partTitle} / ${sec.partTitleTamil || ''}` : sec.partTitle}
                  </h4>
                  <div className="text-xs sm:text-sm font-semibold flex justify-between px-2 mt-0.5">
                    <span className="italic">
                      {languageMode === 'tamil' ? (sec.instructionTamil || sec.instruction) : sec.instruction}
                    </span>
                    <span className="font-bold shrink-0 ml-2">
                      ({sec.totalQuestionsToAnswer} × {sec.marksPerQuestion} = {sec.totalQuestionsToAnswer * sec.marksPerQuestion} {languageMode === 'tamil' ? 'மதிப்பெண்கள்' : 'Marks'})
                    </span>
                  </div>
                </div>

                {/* Section Questions */}
                <div className="space-y-3.5 text-xs sm:text-sm leading-relaxed">
                  {sec.questions.map((item, qIdx) => {
                    const currentNo = globalQNo++;
                    const q = item.question;

                    if (isPart4 && item.orQuestion) {
                      // Either / Or Pair Format
                      const qOr = item.orQuestion;
                      return (
                        <div key={qIdx} className="space-y-2 pt-2 border-t border-stone-200 print-avoid-break relative group">
                          {/* (a) Option */}
                          <div className="flex items-start gap-2">
                            <span className="font-bold min-w-[2.5rem]">
                              {currentNo}. {languageMode === 'tamil' ? '(அ)' : '(a)'}
                            </span>
                            <div className="space-y-1 flex-1">
                              {languageMode === 'english' && (
                                <p className="font-medium whitespace-pre-line">{q.questionText}</p>
                              )}
                              {languageMode === 'tamil' && (
                                <p className="font-medium whitespace-pre-line">{q.questionTextTamil || q.questionText}</p>
                              )}
                              {languageMode === 'bilingual' && (
                                <>
                                  <p className="font-medium whitespace-pre-line">{q.questionText}</p>
                                  {q.questionTextTamil && (
                                    <p className="font-medium text-stone-800 whitespace-pre-line">{q.questionTextTamil}</p>
                                  )}
                                </>
                              )}
                            </div>

                            {/* Reselect / Edit Buttons in Edit Mode */}
                            {isEditMode && (
                              <div className="flex items-center gap-1 shrink-0 print:hidden">
                                <button
                                  type="button"
                                  onClick={() => setSwapTarget({
                                    secIdx,
                                    qIdx,
                                    isOr: false,
                                    currentQuestion: q,
                                    marks: sec.marksPerQuestion
                                  })}
                                  className="text-[10px] bg-red-800 hover:bg-red-700 text-white font-bold px-2 py-0.5 rounded cursor-pointer flex items-center gap-1"
                                  title="Swap Question (a)"
                                >
                                  <RefreshCw className="w-2.5 h-2.5" />
                                  Swap (a)
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleOpenEdit(secIdx, qIdx, false, q, false)}
                                  className="text-[10px] bg-slate-700 hover:bg-slate-600 text-white font-bold px-2 py-0.5 rounded cursor-pointer flex items-center gap-1"
                                  title="Edit Question (a)"
                                >
                                  <Edit3 className="w-2.5 h-2.5" />
                                  Edit (a)
                                </button>
                              </div>
                            )}
                          </div>

                          {/* (OR) Divider */}
                          <div className="text-center font-bold text-xs py-1 tracking-widest uppercase">
                            {languageMode === 'tamil' ? '(அல்லது)' : languageMode === 'bilingual' ? '(OR / அல்லது)' : '(OR)'}
                          </div>

                          {/* (b) Option */}
                          <div className="flex items-start gap-2">
                            <span className="font-bold min-w-[2.5rem] pl-4">
                              {languageMode === 'tamil' ? '(ஆ)' : '(b)'}
                            </span>
                            <div className="space-y-1 flex-1">
                              {languageMode === 'english' && (
                                <p className="font-medium whitespace-pre-line">{qOr.questionText}</p>
                              )}
                              {languageMode === 'tamil' && (
                                <p className="font-medium whitespace-pre-line">{qOr.questionTextTamil || qOr.questionText}</p>
                              )}
                              {languageMode === 'bilingual' && (
                                <>
                                  <p className="font-medium whitespace-pre-line">{qOr.questionText}</p>
                                  {qOr.questionTextTamil && (
                                    <p className="font-medium text-stone-800 whitespace-pre-line">{qOr.questionTextTamil}</p>
                                  )}
                                </>
                              )}
                            </div>

                            {/* Reselect / Edit Buttons in Edit Mode */}
                            {isEditMode && (
                              <div className="flex items-center gap-1 shrink-0 print:hidden">
                                <button
                                  type="button"
                                  onClick={() => setSwapTarget({
                                    secIdx,
                                    qIdx,
                                    isOr: true,
                                    currentQuestion: qOr,
                                    marks: sec.marksPerQuestion
                                  })}
                                  className="text-[10px] bg-red-800 hover:bg-red-700 text-white font-bold px-2 py-0.5 rounded cursor-pointer flex items-center gap-1"
                                  title="Swap Question (b)"
                                >
                                  <RefreshCw className="w-2.5 h-2.5" />
                                  Swap (b)
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleOpenEdit(secIdx, qIdx, true, qOr, false)}
                                  className="text-[10px] bg-slate-700 hover:bg-slate-600 text-white font-bold px-2 py-0.5 rounded cursor-pointer flex items-center gap-1"
                                  title="Edit Question (b)"
                                >
                                  <Edit3 className="w-2.5 h-2.5" />
                                  Edit (b)
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div key={qIdx} className="space-y-1.5 print-avoid-break relative group">
                        {/* Question Text */}
                        <div className="flex items-start gap-2">
                          <span className="font-bold min-w-[1.8rem] shrink-0">
                            {currentNo}.
                          </span>
                          <div className="space-y-1 flex-1">
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1">
                                {languageMode === 'english' && (
                                  <p className="font-medium whitespace-pre-line">{q.questionText}</p>
                                )}
                                {languageMode === 'tamil' && (
                                  <p className="font-medium whitespace-pre-line">{q.questionTextTamil || q.questionText}</p>
                                )}
                                {languageMode === 'bilingual' && (
                                  <>
                                    <p className="font-medium whitespace-pre-line">{q.questionText}</p>
                                    {q.questionTextTamil && (
                                      <p className="font-medium text-stone-800 mt-0.5 whitespace-pre-line">{q.questionTextTamil}</p>
                                    )}
                                  </>
                                )}
                              </div>
                              
                              <div className="flex items-center gap-1.5 shrink-0">
                                {item.isCompulsory && (
                                  <span className="font-bold text-[11px] text-red-900 uppercase shrink-0 border border-black px-1.5 py-0.2">
                                    {languageMode === 'tamil' ? '[கட்டாய வினா]' : languageMode === 'bilingual' ? '[Compulsory / கட்டாய வினா]' : '[Compulsory Question]'}
                                  </span>
                                )}

                                {/* Reselect & Edit inline buttons */}
                                {isEditMode && (
                                  <div className="flex items-center gap-1 print:hidden">
                                    <button
                                      type="button"
                                      onClick={() => setSwapTarget({
                                        secIdx,
                                        qIdx,
                                        isOr: false,
                                        currentQuestion: q,
                                        marks: sec.marksPerQuestion
                                      })}
                                      className="text-[10px] bg-red-800 hover:bg-red-700 text-white font-bold px-2 py-0.5 rounded cursor-pointer flex items-center gap-1 shadow-sm"
                                      title="Swap / Reselect question"
                                    >
                                      <RefreshCw className="w-2.5 h-2.5" />
                                      Swap
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => handleOpenEdit(secIdx, qIdx, false, q, item.isCompulsory)}
                                      className="text-[10px] bg-slate-700 hover:bg-slate-600 text-white font-bold px-2 py-0.5 rounded cursor-pointer flex items-center gap-1 shadow-sm"
                                      title="Edit question text and options"
                                    >
                                      <Edit3 className="w-2.5 h-2.5" />
                                      Edit
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* 1-Mark MCQ 4 Choices in Standard Board Layout */}
                            {isPart1 && q.options && (
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 pt-1.5 text-xs">
                                {(['A', 'B', 'C', 'D'] as const).map(opt => {
                                  return (
                                    <div key={opt} className="flex items-start gap-1.5">
                                      <span className="font-bold">
                                        {languageMode === 'tamil' 
                                          ? tamilOptionLabels[opt] 
                                          : languageMode === 'bilingual'
                                          ? `${englishOptionLabels[opt]} / ${tamilOptionLabels[opt]}`
                                          : englishOptionLabels[opt]}
                                      </span>
                                      <div>
                                        {languageMode === 'english' && (
                                          <span className="whitespace-pre-line">{q.options![opt]}</span>
                                        )}
                                        {languageMode === 'tamil' && (
                                          <span className="whitespace-pre-line">{q.optionsTamil?.[opt] || q.options![opt]}</span>
                                        )}
                                        {languageMode === 'bilingual' && (
                                          <span>
                                            <span className="whitespace-pre-line">{q.options![opt]}</span>
                                            {q.optionsTamil?.[opt] && (
                                              <span className="ml-1 text-stone-800 whitespace-pre-line">/ {q.optionsTamil[opt]}</span>
                                            )}
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Paper End Mark */}
        <div className="text-center pt-8 mt-8 border-t border-black text-xs font-bold uppercase tracking-widest print-avoid-break">
          {languageMode === 'tamil'
            ? '*** விடைத்தாள் முற்றிற்று — வாழ்த்துகள் ***'
            : languageMode === 'bilingual'
            ? '*** ALL THE BEST / விடைத்தாள் முற்றிற்று ***'
            : '*** ALL THE BEST ***'}
        </div>
      </div>

      {/* ---------------- RESELECT / SWAP QUESTION MODAL ---------------- */}
      {swapTarget && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden animate-scale-in">
            {/* Modal Header */}
            <div className="bg-[#1e293b] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-amber-400" />
                <div>
                  <h3 className="font-bold text-sm">Swap / Reselect {swapTarget.marks}-Mark Question</h3>
                  <p className="text-[11px] text-slate-300">Choose a replacement question from the question bank</p>
                </div>
              </div>
              <button
                onClick={() => setSwapTarget(null)}
                className="text-slate-400 hover:text-white p-1 rounded cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filter and Search */}
            <div className="p-3 bg-stone-50 border-b border-stone-200 flex flex-col sm:flex-row gap-2">
              <div className="flex-1 relative">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search replacement questions..."
                  value={swapSearchQuery}
                  onChange={e => setSwapSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 border border-stone-300 rounded text-xs"
                />
              </div>

              <select
                value={swapChapterFilter}
                onChange={e => setSwapChapterFilter(e.target.value === 'ALL' ? 'ALL' : Number(e.target.value))}
                className="border border-stone-300 rounded px-2.5 py-1.5 text-xs bg-white"
              >
                <option value="ALL">All Chapters</option>
                {[...Array(16)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>Chapter {i + 1}</option>
                ))}
              </select>
            </div>

            {/* Question Candidates List */}
            <div className="flex-1 overflow-y-auto divide-y divide-stone-100 p-2">
              {eligibleSwapQuestions.length === 0 ? (
                <div className="text-center py-10 text-stone-400 text-xs">
                  No eligible {swapTarget.marks}-mark questions found matching your filter.
                </div>
              ) : (
                eligibleSwapQuestions.map(q => (
                  <div key={q.id} className="p-3 hover:bg-amber-50/60 transition flex items-start justify-between gap-3 text-xs">
                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[10px] bg-red-100 text-red-900 px-1.5 py-0.2 rounded">
                          {q.marks} Mark
                        </span>
                        <span className="text-[10px] text-stone-500 font-medium">
                          Ch {q.chapterNo}: {q.chapterName}
                        </span>
                      </div>
                      <p className="font-semibold text-stone-900 whitespace-pre-line">
                        {languageMode === 'tamil' ? (q.questionTextTamil || q.questionText) : q.questionText}
                      </p>
                      {languageMode === 'bilingual' && q.questionTextTamil && (
                        <p className="text-stone-600 text-[11px] whitespace-pre-line">
                          {q.questionTextTamil}
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => handleSwapQuestion(q)}
                      className="px-3 py-1.5 bg-red-800 hover:bg-red-700 text-white font-bold rounded text-xs shrink-0 cursor-pointer shadow-sm"
                    >
                      Select Question
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Modal Footer */}
            <div className="bg-stone-100 p-3 flex justify-end gap-2 border-t border-stone-200">
              <button
                type="button"
                onClick={() => setSwapTarget(null)}
                className="px-4 py-1.5 bg-stone-300 hover:bg-stone-400 text-stone-800 font-semibold rounded text-xs cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- EDIT QUESTION MODAL ---------------- */}
      {editTarget && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-scale-in">
            {/* Modal Header */}
            <div className="bg-[#1e293b] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-amber-400" />
                <div>
                  <h3 className="font-bold text-sm">Edit Question Content</h3>
                  <p className="text-[11px] text-slate-300">Modify question text, translation, or choices</p>
                </div>
              </div>
              <button
                onClick={() => setEditTarget(null)}
                className="text-slate-400 hover:text-white p-1 rounded cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Edit Form */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
              {/* Question Text English */}
              <div>
                <label className="block font-bold text-stone-700 mb-1">
                  Question Text (English)
                </label>
                <textarea
                  rows={3}
                  value={editTextEn}
                  onChange={e => setEditTextEn(e.target.value)}
                  className="w-full p-2.5 border border-stone-300 rounded font-mono text-xs focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Question Text Tamil */}
              <div>
                <label className="block font-bold text-stone-700 mb-1">
                  வினா உரை (Tamil Text)
                </label>
                <textarea
                  rows={3}
                  value={editTextTa}
                  onChange={e => setEditTextTa(e.target.value)}
                  className="w-full p-2.5 border border-stone-300 rounded font-serif text-xs focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* 1-Mark MCQ Choices */}
              {editTarget.question.marks === 1 && (
                <div className="space-y-2 pt-2 border-t border-stone-200">
                  <h4 className="font-bold text-stone-800">Multiple Choice Options:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <label className="block font-semibold text-stone-600 mb-0.5">(A) Option:</label>
                      <input
                        type="text"
                        value={editOptA}
                        onChange={e => setEditOptA(e.target.value)}
                        className="w-full p-2 border border-stone-300 rounded"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-stone-600 mb-0.5">(B) Option:</label>
                      <input
                        type="text"
                        value={editOptB}
                        onChange={e => setEditOptB(e.target.value)}
                        className="w-full p-2 border border-stone-300 rounded"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-stone-600 mb-0.5">(C) Option:</label>
                      <input
                        type="text"
                        value={editOptC}
                        onChange={e => setEditOptC(e.target.value)}
                        className="w-full p-2 border border-stone-300 rounded"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-stone-600 mb-0.5">(D) Option:</label>
                      <input
                        type="text"
                        value={editOptD}
                        onChange={e => setEditOptD(e.target.value)}
                        className="w-full p-2 border border-stone-300 rounded"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Answer Key */}
              <div className="pt-2 border-t border-stone-200 space-y-2">
                <label className="block font-bold text-stone-700">
                  Answer Key (English):
                </label>
                <textarea
                  rows={2}
                  value={editAns}
                  onChange={e => setEditAns(e.target.value)}
                  className="w-full p-2 border border-stone-300 rounded text-xs"
                />
              </div>

              {/* Compulsory Flag (for 2M / 3M) */}
              {(editTarget.question.marks === 2 || editTarget.question.marks === 3) && !editTarget.isOr && (
                <div className="pt-2 border-t border-stone-200">
                  <label className="flex items-center gap-2 cursor-pointer font-bold text-stone-800">
                    <input
                      type="checkbox"
                      checked={editIsCompulsory}
                      onChange={e => setEditIsCompulsory(e.target.checked)}
                      className="w-4 h-4 rounded text-red-800"
                    />
                    Mark as Compulsory Question [கட்டாய வினா]
                  </label>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="bg-stone-100 p-3 flex justify-end gap-2 border-t border-stone-200">
              <button
                type="button"
                onClick={() => setEditTarget(null)}
                className="px-4 py-1.5 bg-stone-300 hover:bg-stone-400 text-stone-800 font-semibold rounded text-xs cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveEdit}
                className="px-4 py-1.5 bg-red-800 hover:bg-red-700 text-white font-bold rounded text-xs cursor-pointer shadow-sm"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
