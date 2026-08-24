import React, { useState, useRef } from 'react';
import { 
  X, 
  Upload, 
  FileSpreadsheet, 
  FileCode, 
  Download, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  HelpCircle,
  Sparkles,
  ArrowRight,
  RefreshCw,
  FileText
} from 'lucide-react';
import { SubjectData, Question, MarkType } from '../types';
import { 
  downloadCsvTemplate, 
  downloadJsonTemplate, 
  parseQuestionsCsv, 
  parseQuestionsJson, 
  ImportResult 
} from '../utils/questionImporter';

interface BulkImportModalProps {
  isOpen: boolean;
  subject: SubjectData;
  onClose: () => void;
  onImportQuestions: (questions: Question[]) => void;
}

export const BulkImportModal: React.FC<BulkImportModalProps> = ({
  isOpen,
  subject,
  onClose,
  onImportQuestions
}) => {
  const [activeTab, setActiveTab] = useState<'upload' | 'paste'>('upload');
  const [fileType, setFileType] = useState<'csv' | 'json'>('csv');
  const [pasteContent, setPasteContent] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);
  const [importResult, setImportResult] = useState<ImportResult | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileUpload = (file: File) => {
    setFileName(file.name);
    setIsProcessing(true);

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      if (!text) {
        setIsProcessing(false);
        return;
      }

      const isJson = file.name.endsWith('.json') || text.trim().startsWith('[') || text.trim().startsWith('{');
      const result = isJson 
        ? parseQuestionsJson(text, subject)
        : parseQuestionsCsv(text, subject);

      setImportResult(result);
      setIsProcessing(false);
      setShowPreview(true);
    };

    reader.readAsText(file);
  };

  const handlePasteProcess = () => {
    if (!pasteContent.trim()) return;
    setIsProcessing(true);

    const isJson = fileType === 'json' || pasteContent.trim().startsWith('[') || pasteContent.trim().startsWith('{');
    const result = isJson 
      ? parseQuestionsJson(pasteContent, subject)
      : parseQuestionsCsv(pasteContent, subject);

    setImportResult(result);
    setIsProcessing(false);
    setShowPreview(true);
  };

  const handleConfirmImport = () => {
    if (!importResult || importResult.questions.length === 0) return;
    onImportQuestions(importResult.questions);
    onClose();
  };

  const handleReset = () => {
    setImportResult(null);
    setFileName(null);
    setPasteContent('');
    setShowPreview(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Calculate statistics from parsed questions
  const markStats = importResult?.questions.reduce((acc, q) => {
    acc[q.marks] = (acc[q.marks] || 0) + 1;
    return acc;
  }, {} as Record<number, number>) || {};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#0f172a] text-slate-100 rounded-2xl w-full max-w-3xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#1e293b] px-6 py-4 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold">
              <FileSpreadsheet className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                Bulk Question Importer
                <span className="text-xs bg-amber-400/20 text-amber-300 font-medium px-2 py-0.5 rounded border border-amber-500/30">
                  {subject.name}
                </span>
              </h2>
              <p className="text-xs text-slate-300">
                Upload CSV or JSON to add multiple questions at once to your question bank.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Download Templates Banner */}
          <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                <Download className="w-3.5 h-3.5" />
                Step 1: Download Standard Templates
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Use our pre-formatted template with standard TN Board columns (Chapters, Marks, MCQs & Key).
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => downloadCsvTemplate(subject.name)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold rounded-lg transition cursor-pointer shadow-sm"
              >
                <FileSpreadsheet className="w-3.5 h-3.5" />
                CSV Template
              </button>
              <button
                type="button"
                onClick={() => downloadJsonTemplate(subject.name)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sky-700 hover:bg-sky-600 text-white text-xs font-bold rounded-lg transition cursor-pointer shadow-sm"
              >
                <FileCode className="w-3.5 h-3.5" />
                JSON Template
              </button>
            </div>
          </div>

          {!showPreview ? (
            /* Mode Selection & Input */
            <div className="space-y-4">
              {/* Tabs */}
              <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('upload')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'upload'
                      ? 'bg-amber-400 text-stone-950 shadow-sm'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <Upload className="w-3.5 h-3.5" />
                  Upload File (.csv / .json)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('paste')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'paste'
                      ? 'bg-amber-400 text-stone-950 shadow-sm'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  Paste Raw Data
                </button>
              </div>

              {activeTab === 'upload' ? (
                /* Drag & Drop File Zone */
                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                      handleFileUpload(e.dataTransfer.files[0]);
                    }
                  }}
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-slate-600 hover:border-amber-400 bg-slate-800/40 hover:bg-slate-800/70 rounded-xl p-8 text-center transition cursor-pointer flex flex-col items-center justify-center gap-3"
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".csv, .json, text/csv, application/json"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        handleFileUpload(e.target.files[0]);
                      }
                    }}
                  />
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Upload className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">
                      Click to choose or drag & drop CSV or JSON file here
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Supports comma-separated values (.csv) and standard Question Bank JSON
                    </p>
                  </div>
                </div>
              ) : (
                /* Paste Raw Text */
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-300">
                      Paste CSV text (with header) or JSON array:
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setFileType('csv')}
                        className={`px-2 py-0.5 text-[11px] rounded font-semibold ${
                          fileType === 'csv' ? 'bg-amber-400 text-stone-950 font-bold' : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        CSV format
                      </button>
                      <button
                        type="button"
                        onClick={() => setFileType('json')}
                        className={`px-2 py-0.5 text-[11px] rounded font-semibold ${
                          fileType === 'json' ? 'bg-amber-400 text-stone-950 font-bold' : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        JSON format
                      </button>
                    </div>
                  </div>
                  <textarea
                    value={pasteContent}
                    onChange={(e) => setPasteContent(e.target.value)}
                    placeholder={
                      fileType === 'csv'
                        ? 'ChapterNo,ChapterName,Marks,Type,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectOption,Answer\n1,Data Abstraction,1,mcq,"Which function builds ADT?","Constructor","Selector","Loop","Class",A,"(A) Constructor"'
                        : '[\n  {\n    "chapterNo": 1,\n    "marks": 2,\n    "questionText": "What is an ADT?",\n    "answer": "An Abstract Data Type is..."\n  }\n]'
                    }
                    rows={8}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs font-mono text-slate-200 focus:outline-none focus:border-amber-400"
                  />
                  <div className="flex justify-end">
                    <button
                      type="button"
                      disabled={!pasteContent.trim() || isProcessing}
                      onClick={handlePasteProcess}
                      className="px-4 py-2 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-stone-950 font-bold text-xs rounded-lg transition cursor-pointer flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      Parse & Preview Questions
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Parsed Questions Preview Screen */
            <div className="space-y-4 animate-fade-in">
              <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <h4 className="text-sm font-bold text-white">
                      {importResult?.questions.length || 0} Questions Ready for Import
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    {fileName ? `File: ${fileName}` : 'Parsed from input'} • Ready to add to {subject.name}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white bg-slate-700 hover:bg-slate-600 px-2.5 py-1 rounded transition cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  Upload Different File
                </button>
              </div>

              {/* Marks breakdown badge row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className="bg-slate-900/80 border border-slate-700/80 p-2.5 rounded-lg text-center">
                  <span className="text-[10px] text-slate-400 uppercase font-bold">1 Mark (MCQ)</span>
                  <p className="text-base font-black text-amber-400">{markStats[1] || 0}</p>
                </div>
                <div className="bg-slate-900/80 border border-slate-700/80 p-2.5 rounded-lg text-center">
                  <span className="text-[10px] text-slate-400 uppercase font-bold">2 Marks (Short)</span>
                  <p className="text-base font-black text-sky-400">{markStats[2] || 0}</p>
                </div>
                <div className="bg-slate-900/80 border border-slate-700/80 p-2.5 rounded-lg text-center">
                  <span className="text-[10px] text-slate-400 uppercase font-bold">3 Marks (Brief)</span>
                  <p className="text-base font-black text-emerald-400">{markStats[3] || 0}</p>
                </div>
                <div className="bg-slate-900/80 border border-slate-700/80 p-2.5 rounded-lg text-center">
                  <span className="text-[10px] text-slate-400 uppercase font-bold">5 Marks (Essay)</span>
                  <p className="text-base font-black text-purple-400">{markStats[5] || 0}</p>
                </div>
              </div>

              {/* Error messages if any rows were skipped */}
              {importResult && importResult.errors.length > 0 && (
                <div className="bg-amber-950/40 border border-amber-500/40 rounded-xl p-3 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-amber-300 font-bold">
                    <AlertCircle className="w-4 h-4" />
                    <span>Notices ({importResult.errors.length}):</span>
                  </div>
                  <div className="max-h-20 overflow-y-auto space-y-0.5 text-slate-300 text-[11px]">
                    {importResult.errors.map((err, idx) => (
                      <p key={idx}>• {err}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Question list sample */}
              <div className="space-y-2">
                <h5 className="text-xs font-bold text-slate-300 flex items-center justify-between">
                  <span>Questions Preview:</span>
                  <span className="text-[11px] text-slate-400">
                    Showing all {importResult?.questions.length} items
                  </span>
                </h5>
                <div className="max-h-56 overflow-y-auto space-y-2 pr-1 border border-slate-700 rounded-xl p-2 bg-slate-900/60">
                  {importResult?.questions.map((q, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-800/80 border border-slate-700/60 p-2.5 rounded-lg text-xs space-y-1"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="bg-amber-400 text-stone-950 font-black px-1.5 py-0.5 rounded text-[10px]">
                            {q.marks}M {q.type.toUpperCase()}
                          </span>
                          <span className="text-[11px] text-slate-300 font-semibold">
                            Ch {q.chapterNo}: {q.chapterName}
                          </span>
                        </div>
                        {q.isBookBack && (
                          <span className="text-[10px] text-emerald-400 border border-emerald-500/30 px-1 py-0.2 rounded">
                            Book Back
                          </span>
                        )}
                      </div>
                      <p className="text-white font-medium">{q.questionText}</p>
                      {q.questionTextTamil && (
                        <p className="text-amber-200/80 text-[11px]">{q.questionTextTamil}</p>
                      )}
                      {q.options && (
                        <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-300 bg-slate-900/50 p-1.5 rounded mt-1">
                          <span>(A) {q.options.A}</span>
                          <span>(B) {q.options.B}</span>
                          <span>(C) {q.options.C}</span>
                          <span>(D) {q.options.D}</span>
                        </div>
                      )}
                      <p className="text-[11px] text-slate-400">
                        <strong className="text-slate-300">Answer:</strong> {q.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="bg-[#1e293b] px-6 py-3.5 border-t border-slate-700 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs rounded-lg transition cursor-pointer"
          >
            Cancel
          </button>

          {showPreview && importResult && importResult.questions.length > 0 && (
            <button
              type="button"
              onClick={handleConfirmImport}
              className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg transition cursor-pointer flex items-center gap-1.5 shadow-lg"
            >
              <CheckCircle2 className="w-4 h-4" />
              Import {importResult.questions.length} Questions into {subject.name}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
