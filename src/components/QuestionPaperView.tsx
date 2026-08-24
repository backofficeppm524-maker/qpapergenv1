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
  Loader2
} from 'lucide-react';
import { QuestionPaper, LanguageMode } from '../types';
import { shareQuestionPaper, generateShareUrl } from '../utils/shareUtils';
import { exportElementToPdf, triggerCleanPrint } from '../utils/pdfExport';

interface QuestionPaperViewProps {
  paper: QuestionPaper;
  languageMode: LanguageMode;
  onLanguageChange: (mode: LanguageMode) => void;
  onViewAnswerKey: () => void;
  onBack: () => void;
}

export const QuestionPaperView: React.FC<QuestionPaperViewProps> = ({
  paper,
  languageMode,
  onLanguageChange,
  onViewAnswerKey,
  onBack
}) => {
  const paperRef = useRef<HTMLDivElement>(null);
  const [isPrintPreview, setIsPrintPreview] = useState(false);
  const [shareToast, setShareToast] = useState<{ message: string; type: 'success' | 'info' } | null>(null);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [pdfProgress, setPdfProgress] = useState<string>('');

  // Close print preview on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isPrintPreview) {
        setIsPrintPreview(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPrintPreview]);

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
        // Fallback to clean print if canvas fails
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
              onClick={handleExportPdf}
              disabled={isGeneratingPdf}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-700 hover:bg-red-600 disabled:opacity-50 text-white font-bold text-xs rounded transition cursor-pointer shadow"
              title="Download question paper directly as PDF"
            >
              {isGeneratingPdf ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <FileDown className="w-3.5 h-3.5" />}
              Download PDF
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
        <div className="bg-[#1e293b] text-white p-4 rounded-xl shadow-md flex flex-wrap items-center justify-between gap-3 print:hidden">
          <div className="flex items-center gap-2">
            <button
              onClick={onBack}
              className="p-1.5 bg-slate-700 hover:bg-slate-600 rounded text-slate-200 hover:text-white transition cursor-pointer"
              title="Back to Generator"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div>
              <h2 className="text-sm font-bold truncate max-w-md">{paper.title}</h2>
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

            {/* Print Preview Button */}
            <button
              onClick={() => setIsPrintPreview(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-amber-300 hover:text-amber-200 font-bold text-xs rounded transition cursor-pointer border border-slate-600"
              title="Open clean distraction-free print preview"
            >
              <Eye className="w-3.5 h-3.5" />
              Print Preview
            </button>

            {/* Export / Download PDF */}
            <button
              onClick={handleExportPdf}
              disabled={isGeneratingPdf}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-800 hover:bg-red-700 disabled:opacity-50 text-white font-bold text-xs rounded transition cursor-pointer shadow"
              title="Download question paper directly as PDF"
            >
              {isGeneratingPdf ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <FileDown className="w-3.5 h-3.5" />}
              {isGeneratingPdf ? 'Generating PDF...' : 'Export PDF'}
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
              Share Link
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
                        <div key={qIdx} className="space-y-2 pt-2 border-t border-stone-200 print-avoid-break">
                          {/* (a) Option */}
                          <div className="flex items-start gap-2">
                            <span className="font-bold min-w-[2.5rem]">
                              {currentNo}. {languageMode === 'tamil' ? '(அ)' : '(a)'}
                            </span>
                            <div className="space-y-1">
                              {languageMode === 'english' && (
                                <p className="font-medium">{q.questionText}</p>
                              )}
                              {languageMode === 'tamil' && (
                                <p className="font-medium">{q.questionTextTamil || q.questionText}</p>
                              )}
                              {languageMode === 'bilingual' && (
                                <>
                                  <p className="font-medium">{q.questionText}</p>
                                  {q.questionTextTamil && (
                                    <p className="font-medium text-stone-800">{q.questionTextTamil}</p>
                                  )}
                                </>
                              )}
                            </div>
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
                            <div className="space-y-1">
                              {languageMode === 'english' && (
                                <p className="font-medium">{qOr.questionText}</p>
                              )}
                              {languageMode === 'tamil' && (
                                <p className="font-medium">{qOr.questionTextTamil || qOr.questionText}</p>
                              )}
                              {languageMode === 'bilingual' && (
                                <>
                                  <p className="font-medium">{qOr.questionText}</p>
                                  {qOr.questionTextTamil && (
                                    <p className="font-medium text-stone-800">{qOr.questionTextTamil}</p>
                                  )}
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div key={qIdx} className="space-y-1.5 print-avoid-break">
                        {/* Question Text */}
                        <div className="flex items-start gap-2">
                          <span className="font-bold min-w-[1.8rem] shrink-0">
                            {currentNo}.
                          </span>
                          <div className="space-y-1 flex-1">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                {languageMode === 'english' && (
                                  <p className="font-medium">{q.questionText}</p>
                                )}
                                {languageMode === 'tamil' && (
                                  <p className="font-medium">{q.questionTextTamil || q.questionText}</p>
                                )}
                                {languageMode === 'bilingual' && (
                                  <>
                                    <p className="font-medium">{q.questionText}</p>
                                    {q.questionTextTamil && (
                                      <p className="font-medium text-stone-800 mt-0.5">{q.questionTextTamil}</p>
                                    )}
                                  </>
                                )}
                              </div>
                              {item.isCompulsory && (
                                <span className="font-bold text-[11px] text-red-900 uppercase shrink-0 border border-black px-1.5 py-0.2">
                                  {languageMode === 'tamil' ? '[கட்டாய வினா]' : languageMode === 'bilingual' ? '[Compulsory / கட்டாய வினா]' : '[Compulsory Question]'}
                                </span>
                              )}
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
                                          <span>{q.options![opt]}</span>
                                        )}
                                        {languageMode === 'tamil' && (
                                          <span>{q.optionsTamil?.[opt] || q.options![opt]}</span>
                                        )}
                                        {languageMode === 'bilingual' && (
                                          <span>
                                            {q.options![opt]}
                                            {q.optionsTamil?.[opt] && (
                                              <span className="ml-1 text-stone-800">/ {q.optionsTamil[opt]}</span>
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
    </div>
  );
};

