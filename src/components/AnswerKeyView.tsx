import React, { useRef, useState, useEffect } from 'react';
import { 
  Printer, 
  Download, 
  ArrowLeft, 
  FileText, 
  CheckCircle2, 
  Languages,
  BookOpen,
  Eye,
  EyeOff,
  Share2,
  CheckCircle,
  FileDown,
  Loader2
} from 'lucide-react';
import { QuestionPaper, LanguageMode } from '../types';
import { shareQuestionPaper } from '../utils/shareUtils';
import { exportElementToPdf, triggerCleanPrint } from '../utils/pdfExport';

interface AnswerKeyViewProps {
  paper: QuestionPaper;
  languageMode: LanguageMode;
  onLanguageChange: (mode: LanguageMode) => void;
  onBackToPaper: () => void;
}

export const AnswerKeyView: React.FC<AnswerKeyViewProps> = ({
  paper,
  languageMode,
  onLanguageChange,
  onBackToPaper
}) => {
  const keyRef = useRef<HTMLDivElement>(null);
  const [isPrintPreview, setIsPrintPreview] = useState(false);
  const [shareToast, setShareToast] = useState<{ message: string; type: 'success' | 'info' } | null>(null);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [pdfProgress, setPdfProgress] = useState('');

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

  // Export PDF / Download
  const handleExportPdf = async () => {
    if (!keyRef.current || isGeneratingPdf) return;
    setIsGeneratingPdf(true);
    setPdfProgress('Preparing document...');

    const sanitizedExam = paper.examName.replace(/[^a-zA-Z0-9]/g, '_');
    const sanitizedSub = paper.subject.replace(/[^a-zA-Z0-9]/g, '_');
    const filename = `${sanitizedExam}_${sanitizedSub}_${paper.maxMarks}M_Answer_Key.pdf`;

    try {
      const success = await exportElementToPdf(keyRef.current, filename, (msg) => {
        setPdfProgress(msg);
      });

      if (success) {
        setShareToast({
          message: 'Answer key PDF downloaded successfully!',
          type: 'success'
        });
      } else {
        triggerCleanPrint(keyRef.current, `${sanitizedExam}_${sanitizedSub}_Answer_Key`);
      }
    } catch (err) {
      console.error(err);
      triggerCleanPrint(keyRef.current, `${sanitizedExam}_${sanitizedSub}_Answer_Key`);
    } finally {
      setIsGeneratingPdf(false);
      setPdfProgress('');
      setTimeout(() => setShareToast(null), 4000);
    }
  };

  // Dedicated clean browser print
  const handlePrint = () => {
    if (!keyRef.current) return;
    const sanitizedExam = paper.examName.replace(/[^a-zA-Z0-9]/g, '_');
    const sanitizedSub = paper.subject.replace(/[^a-zA-Z0-9]/g, '_');
    const title = `${sanitizedExam}_${sanitizedSub}_${paper.maxMarks}M_Answer_Key`;
    triggerCleanPrint(keyRef.current, title);
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
    if (!keyRef.current) return;
    const header = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>${paper.title} - Answer Key</title>
    <style>
      body { font-family: 'Times New Roman', serif; font-size: 11pt; line-height: 1.3; }
      .header-title { text-align: center; font-weight: bold; font-size: 14pt; }
      table { width: 100%; border-collapse: collapse; margin-top: 10px; }
      th, td { border: 1px solid #000; padding: 6px; text-align: left; }
    </style></head><body>`;
    const footer = '</body></html>';
    const sourceHTML = header + keyRef.current.innerHTML + footer;

    const blob = new Blob(['\ufeff', sourceHTML], {
      type: 'application/msword'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${paper.examName.replace(/[^a-zA-Z0-9]/g, '_')}_Answer_Key.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  let globalQNo = 1;

  const tamilOptionLabels: Record<string, string> = {
    A: '(அ)',
    B: '(ஆ)',
    C: '(இ)',
    D: '(ஈ)'
  };

  return (
    <div className={`space-y-6 max-w-4xl mx-auto pb-16 transition-all ${isPrintPreview ? 'pt-16' : ''}`}>
      {/* Toast Notification */}
      {shareToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0f172a] text-white px-4 py-3 rounded-xl shadow-2xl border border-amber-500/40 flex items-center gap-3 animate-fade-in print:hidden">
          <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
          <div>
            <p className="text-xs font-bold text-white">{shareToast.message}</p>
            <p className="text-[10px] text-slate-300">Shareable link provides access to both paper and complete answer key.</p>
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
              Clean distraction-free Answer Key sheet view
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
              title="Download answer key directly as PDF"
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

      {/* Top Toolbar (Non-printable) */}
      {!isPrintPreview && (
        <div className="bg-[#0f172a] text-white p-4 rounded-xl shadow-md flex flex-wrap items-center justify-between gap-3 print:hidden">
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToPaper}
              className="p-1.5 bg-slate-800 hover:bg-slate-700 rounded text-slate-200 hover:text-white transition cursor-pointer"
              title="Back to Question Paper"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div>
              <h2 className="text-sm font-bold truncate max-w-md">
                {languageMode === 'tamil' ? `விடைக் குறிப்பு: ${paper.titleTamil || paper.title}` : `Answer Key: ${paper.title}`}
              </h2>
              <p className="text-[11px] text-amber-300">
                {languageMode === 'tamil' 
                  ? `மதிப்பீட்டுத் திட்டம் & விடைகள் | மொத்த மதிப்பெண்கள்: ${paper.maxMarks}`
                  : `Evaluation & Valuation Scheme | Maximum Marks: ${paper.maxMarks}`}
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-amber-200 font-bold text-xs rounded transition cursor-pointer border border-slate-700"
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
              title="Download Answer Key as PDF"
            >
              {isGeneratingPdf ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <FileDown className="w-3.5 h-3.5" />}
              {isGeneratingPdf ? 'Generating PDF...' : 'Export PDF'}
            </button>

            {/* Clean Print */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-xs rounded transition cursor-pointer border border-slate-700 shadow"
              title="Print Answer Key"
            >
              <Printer className="w-3.5 h-3.5" />
              Print
            </button>

            {/* Share Button */}
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs rounded transition cursor-pointer border border-slate-700"
              title="Share link"
            >
              <Share2 className="w-3.5 h-3.5 text-amber-400" />
              Share Link
            </button>

            <button
              onClick={handleDownloadDoc}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded transition cursor-pointer"
            >
              <Download className="w-4 h-4" />
              .DOC
            </button>
          </div>
        </div>
      )}

      {/* Printable Sheet */}
      <div 
        ref={keyRef}
        id="printable-answer-key"
        className={`bg-white border text-black font-serif transition-all ${
          isPrintPreview 
            ? 'border-stone-400 shadow-2xl max-w-3xl mx-auto p-8 sm:p-14 rounded-sm'
            : 'border-stone-300 shadow-lg p-8 sm:p-12'
        } print:border-none print:shadow-none print:p-0 print:m-0 print:max-w-none`}
        style={{ fontFamily: "'Times New Roman', 'Noto Serif Tamil', serif" }}
      >
        {/* Header */}
        <div className="border-b-2 border-black pb-4 mb-4 text-center space-y-1 print-avoid-break">
          <h1 className="text-lg font-bold uppercase">{paper.schoolName}</h1>
          <h2 className="text-base font-bold uppercase">{paper.examName}</h2>
          <h3 className="text-sm font-bold uppercase">
            {languageMode === 'tamil' 
              ? `${paper.standard.includes('11') ? '11-ஆம் வகுப்பு' : '12-ஆம் வகுப்பு'} — ${paper.subjectTamil || paper.subject} (${paper.subject})`
              : `${paper.standard} — ${paper.subject} ${paper.subjectTamil ? `(${paper.subjectTamil})` : ''}`}
          </h3>
          <div className="inline-block mt-2 bg-stone-100 border border-black px-4 py-1 font-bold text-xs uppercase tracking-wider">
            {languageMode === 'tamil' 
              ? `ஆசிரியர் விடைக்குறிப்பு மற்றும் மதிப்பீட்டுத் திட்டம் (மொத்த மதிப்பெண்கள்: ${paper.maxMarks})`
              : `TEACHER ANSWER KEY & VALUATION SCHEME (MAX MARKS: ${paper.maxMarks})`}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {paper.sections.map((sec, secIdx) => {
            const isPart1 = sec.marksPerQuestion === 1;
            const isPart4 = sec.marksPerQuestion === 5;

            return (
              <div key={secIdx} className="space-y-3">
                <div className="border-b border-black pb-1 flex items-center justify-between print-avoid-break">
                  <h4 className="font-bold text-sm uppercase">
                    {languageMode === 'tamil' 
                      ? `${sec.partTitleTamil || sec.partTitle} — விடைக்குறிப்பு`
                      : `${sec.partTitle} ${sec.partTitleTamil ? `/ ${sec.partTitleTamil}` : ''} — Valuation Scheme`}
                  </h4>
                  <span className="text-xs font-bold">
                    ({sec.totalQuestionsToAnswer} × {sec.marksPerQuestion} = {sec.totalQuestionsToAnswer * sec.marksPerQuestion} {languageMode === 'tamil' ? 'மதிப்பெண்கள்' : 'Marks'})
                  </span>
                </div>

                {isPart1 ? (
                  /* Part 1 MCQ Table */
                  <table className="w-full border-collapse border border-black text-xs">
                    <thead>
                      <tr className="bg-stone-100">
                        <th className="border border-black p-1.5 text-center w-12">
                          {languageMode === 'tamil' ? 'வினா எண்' : 'Q.No'}
                        </th>
                        <th className="border border-black p-1.5 text-center w-20">
                          {languageMode === 'tamil' ? 'தெரிவு' : 'Option'}
                        </th>
                        <th className="border border-black p-1.5 text-left">
                          {languageMode === 'tamil' ? 'சரியான விடை' : 'Correct Answer & Key'}
                        </th>
                        <th className="border border-black p-1.5 text-center w-16">
                          {languageMode === 'tamil' ? 'மதிப்பெண்' : 'Mark'}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {sec.questions.map((item, qIdx) => {
                        const currentNo = globalQNo++;
                        const q = item.question;
                        const optKey = q.correctOption;
                        const optTamil = optKey ? tamilOptionLabels[optKey] : '';
                        const optEnglish = optKey ? `(${optKey.toLowerCase()})` : '';

                        const ansText = languageMode === 'tamil'
                          ? (q.optionsTamil && optKey ? q.optionsTamil[optKey] : (optKey && q.options ? q.options[optKey] : q.answerTamil || q.answer))
                          : languageMode === 'bilingual'
                          ? `${optKey && q.options ? q.options[optKey] : q.answer} ${q.optionsTamil && optKey ? `/ ${q.optionsTamil[optKey]}` : ''}`
                          : (optKey && q.options ? q.options[optKey] : q.answer);

                        return (
                          <tr key={qIdx} className="hover:bg-stone-50 print-avoid-break">
                            <td className="border border-black p-1.5 text-center font-bold">{currentNo}</td>
                            <td className="border border-black p-1.5 text-center font-bold">
                              {languageMode === 'tamil' ? optTamil : languageMode === 'bilingual' ? `${optEnglish} / ${optTamil}` : optEnglish}
                            </td>
                            <td className="border border-black p-1.5">{ansText}</td>
                            <td className="border border-black p-1.5 text-center font-bold">1</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                ) : (
                  /* Descriptive Parts (Part II, III, IV) */
                  <div className="space-y-4 text-xs leading-relaxed">
                    {sec.questions.map((item, qIdx) => {
                      const currentNo = globalQNo++;
                      const q = item.question;

                      if (isPart4 && item.orQuestion) {
                        const qOr = item.orQuestion;
                        return (
                          <div key={qIdx} className="space-y-3 pt-2 border-t border-stone-300 print-avoid-break">
                            {/* (a) Option */}
                            <div className="space-y-1">
                              <div className="flex items-baseline justify-between font-bold">
                                <span>
                                  {currentNo}. {languageMode === 'tamil' ? '(அ)' : '(a)'} {languageMode === 'tamil' ? (q.questionTextTamil || q.questionText) : q.questionText}
                                </span>
                                <span className="text-right shrink-0 font-bold ml-2">
                                  [5 {languageMode === 'tamil' ? 'மதிப்பெண்கள்' : 'Marks'}]
                                </span>
                              </div>
                              <div className="bg-stone-50 p-2 border border-stone-200 text-stone-800 whitespace-pre-line font-sans text-[11px] leading-relaxed">
                                <strong>{languageMode === 'tamil' ? 'மதிப்பீட்டுக் குறிப்பு / விடைகள்:' : 'Valuation Scheme & Key Points:'}</strong>
                                <br />
                                {languageMode === 'tamil' ? (q.answerTamil || q.answer) : q.answer}
                              </div>
                            </div>

                            {/* Divider */}
                            <div className="text-center font-bold text-xs py-0.5 text-stone-500 uppercase tracking-widest">
                              {languageMode === 'tamil' ? '(அல்லது)' : '(OR)'}
                            </div>

                            {/* (b) Option */}
                            <div className="space-y-1">
                              <div className="flex items-baseline justify-between font-bold">
                                <span>
                                  {currentNo}. {languageMode === 'tamil' ? '(ஆ)' : '(b)'} {languageMode === 'tamil' ? (qOr.questionTextTamil || qOr.questionText) : qOr.questionText}
                                </span>
                                <span className="text-right shrink-0 font-bold ml-2">
                                  [5 {languageMode === 'tamil' ? 'மதிப்பெண்கள்' : 'Marks'}]
                                </span>
                              </div>
                              <div className="bg-stone-50 p-2 border border-stone-200 text-stone-800 whitespace-pre-line font-sans text-[11px] leading-relaxed">
                                <strong>{languageMode === 'tamil' ? 'மதிப்பீட்டுக் குறிப்பு / விடைகள்:' : 'Valuation Scheme & Key Points:'}</strong>
                                <br />
                                {languageMode === 'tamil' ? (qOr.answerTamil || qOr.answer) : qOr.answer}
                              </div>
                            </div>
                          </div>
                        );
                      }

                      return (
                        <div key={qIdx} className="space-y-1 pt-1.5 border-t border-stone-200 print-avoid-break">
                          <div className="flex items-baseline justify-between font-bold">
                            <div>
                              <span>{currentNo}. </span>
                              <span>{languageMode === 'tamil' ? (q.questionTextTamil || q.questionText) : q.questionText}</span>
                              {item.isCompulsory && (
                                <span className="ml-2 text-red-700 text-[10px] uppercase border border-red-700 px-1">
                                  {languageMode === 'tamil' ? '[கட்டாய வினா]' : '[Compulsory]'}
                                </span>
                              )}
                            </div>
                            <span className="text-right shrink-0 font-bold ml-2">
                              [{sec.marksPerQuestion} {languageMode === 'tamil' ? 'மதிப்பெண்கள்' : 'Marks'}]
                            </span>
                          </div>
                          <div className="bg-stone-50 p-2 border border-stone-200 text-stone-800 whitespace-pre-line font-sans text-[11px] leading-relaxed">
                            <strong>{languageMode === 'tamil' ? 'விடை & மதிப்பீட்டுத் திட்டம்:' : 'Key Points & Valuation Scheme:'}</strong>
                            <br />
                            {languageMode === 'tamil' ? (q.answerTamil || q.answer) : q.answer}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* End Mark */}
        <div className="text-center pt-6 mt-6 border-t border-black text-xs font-bold uppercase tracking-widest print-avoid-break">
          {languageMode === 'tamil' ? '*** விடைக்குறிப்பு முற்றிற்று ***' : '*** END OF ANSWER KEY ***'}
        </div>
      </div>
    </div>
  );
};
