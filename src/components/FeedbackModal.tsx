import React, { useState, useEffect } from 'react';
import { 
  X, 
  MessageSquarePlus, 
  Send, 
  CheckCircle2, 
  History, 
  FileText, 
  AlertTriangle, 
  Lightbulb, 
  Sparkles, 
  Trash2, 
  Download,
  Info,
  Tag
} from 'lucide-react';
import { UserFeedback, MarkType, SubjectData } from '../types';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeSubject?: SubjectData;
  initialContext?: {
    type?: UserFeedback['type'];
    questionId?: string;
    questionText?: string;
    chapterName?: string;
    marks?: MarkType;
  };
}

const STORAGE_KEY = 'tn_qpg_user_feedback_v1';

export const FeedbackModal: React.FC<FeedbackModalProps> = ({
  isOpen,
  onClose,
  activeSubject,
  initialContext
}) => {
  const [activeTab, setActiveTab] = useState<'submit' | 'history'>('submit');
  const [feedbackList, setFeedbackList] = useState<UserFeedback[]>([]);
  
  // Form State
  const [feedbackType, setFeedbackType] = useState<UserFeedback['type']>(
    initialContext?.type || 'pdf_extraction_issue'
  );
  const [title, setTitle] = useState(
    initialContext?.questionText ? `Issue with Q: ${initialContext.questionText.slice(0, 40)}...` : ''
  );
  const [description, setDescription] = useState('');
  const [subjectName, setSubjectName] = useState(activeSubject?.name || 'General');
  const [chapterName, setChapterName] = useState(initialContext?.chapterName || '');
  const [questionId, setQuestionId] = useState(initialContext?.questionId || '');
  const [questionText, setQuestionText] = useState(initialContext?.questionText || '');
  const [suggestedAnswer, setSuggestedAnswer] = useState('');
  const [marks, setMarks] = useState<MarkType>(initialContext?.marks || 2);
  const [userEmail, setUserEmail] = useState('');

  const [submittedId, setSubmittedId] = useState<string | null>(null);

  // Load feedbacks on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setFeedbackList(JSON.parse(stored));
      }
    } catch (e) {
      console.warn('Failed to load stored feedback', e);
    }
  }, [isOpen]);

  // Sync initial context if it changes
  useEffect(() => {
    if (initialContext) {
      if (initialContext.type) setFeedbackType(initialContext.type);
      if (initialContext.questionId) setQuestionId(initialContext.questionId);
      if (initialContext.questionText) {
        setQuestionText(initialContext.questionText);
        setTitle(`Correction: ${initialContext.questionText.slice(0, 45)}...`);
      }
      if (initialContext.chapterName) setChapterName(initialContext.chapterName);
      if (initialContext.marks) setMarks(initialContext.marks);
    }
    if (activeSubject) {
      setSubjectName(activeSubject.name);
    }
  }, [initialContext, activeSubject]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const newFeedback: UserFeedback = {
      id: `fb-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      type: feedbackType,
      title: title.trim(),
      description: description.trim(),
      subjectName: subjectName || activeSubject?.name || 'General',
      chapterName: chapterName.trim() || undefined,
      questionId: questionId.trim() || undefined,
      questionText: questionText.trim() || undefined,
      suggestedAnswer: suggestedAnswer.trim() || undefined,
      marks: feedbackType === 'question_suggestion' ? marks : undefined,
      userEmail: userEmail.trim() || undefined,
      createdAt: new Date().toISOString(),
      status: 'new'
    };

    const updated = [newFeedback, ...feedbackList];
    setFeedbackList(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (err) {
      console.error('Error storing feedback:', err);
    }

    setSubmittedId(newFeedback.id);
    
    // Reset form fields
    setTimeout(() => {
      setTitle('');
      setDescription('');
      setSuggestedAnswer('');
      setSubmittedId(null);
      setActiveTab('history');
    }, 1800);
  };

  const handleDeleteFeedback = (id: string) => {
    const updated = feedbackList.filter(f => f.id !== id);
    setFeedbackList(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(feedbackList, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `user_feedback_reports_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const getTypeIcon = (type: UserFeedback['type']) => {
    switch (type) {
      case 'pdf_extraction_issue':
        return <AlertTriangle className="w-4 h-4 text-amber-500" />;
      case 'question_suggestion':
        return <Lightbulb className="w-4 h-4 text-emerald-500" />;
      case 'content_error':
        return <FileText className="w-4 h-4 text-rose-500" />;
      case 'feature_request':
        return <Sparkles className="w-4 h-4 text-purple-500" />;
      default:
        return <MessageSquarePlus className="w-4 h-4 text-blue-500" />;
    }
  };

  const getTypeLabel = (type: UserFeedback['type']) => {
    switch (type) {
      case 'pdf_extraction_issue':
        return 'PDF Extraction Issue';
      case 'question_suggestion':
        return 'Suggest Question';
      case 'content_error':
        return 'Content / Key Error';
      case 'feature_request':
        return 'Feature Suggestion';
      default:
        return 'General Feedback';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-stone-900 rounded-2xl shadow-2xl border border-stone-200 dark:border-stone-800 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#7a1818] text-white flex items-center justify-center shadow-sm">
              <MessageSquarePlus className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-stone-900 dark:text-stone-100">
                User Feedback & Question Suggestions
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Report PDF extraction anomalies, submit corrections, or suggest new curriculum questions
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded-lg hover:bg-stone-200/60 dark:hover:bg-stone-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-stone-200 dark:border-stone-800 bg-stone-100/60 dark:bg-stone-800/40 px-6 pt-2 gap-2 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('submit')}
            className={`pb-2.5 px-3 font-semibold border-b-2 transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'submit'
                ? 'border-[#7a1818] text-[#7a1818] dark:text-amber-400 dark:border-amber-400'
                : 'border-transparent text-stone-500 hover:text-stone-700 dark:hover:text-stone-300'
            }`}
          >
            <MessageSquarePlus className="w-3.5 h-3.5" />
            Submit Feedback / Suggestion
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('history')}
            className={`pb-2.5 px-3 font-semibold border-b-2 transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'history'
                ? 'border-[#7a1818] text-[#7a1818] dark:text-amber-400 dark:border-amber-400'
                : 'border-transparent text-stone-500 hover:text-stone-700 dark:hover:text-stone-300'
            }`}
          >
            <History className="w-3.5 h-3.5" />
            Saved Reports & Suggestions ({feedbackList.length})
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-6 text-xs">
          {activeTab === 'submit' ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Success Notification */}
              {submittedId && (
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 rounded-xl flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">
                    Thank you! Your feedback #{submittedId.slice(-6)} has been saved to localStorage.
                  </span>
                </div>
              )}

              {/* Feedback Category */}
              <div>
                <label className="block text-xs font-bold text-stone-700 dark:text-stone-300 mb-1.5">
                  Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'pdf_extraction_issue', label: 'PDF Extraction Issue', icon: AlertTriangle, desc: 'Misread text or formulas' },
                    { id: 'question_suggestion', label: 'Suggest New Question', icon: Lightbulb, desc: 'Add new board question' },
                    { id: 'content_error', label: 'Answer / Key Error', icon: FileText, desc: 'Correction in answer/option' },
                    { id: 'feature_request', label: 'Feature Request', icon: Sparkles, desc: 'Ideas for the app' },
                    { id: 'general', label: 'General Feedback', icon: MessageSquarePlus, desc: 'Other remarks' }
                  ].map(cat => {
                    const Icon = cat.icon;
                    const isSelected = feedbackType === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setFeedbackType(cat.id as any)}
                        className={`p-2 rounded-xl text-left border transition cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-[#7a1818]/10 dark:bg-amber-400/10 border-[#7a1818] dark:border-amber-400 text-stone-900 dark:text-white'
                            : 'bg-stone-50 dark:bg-stone-800/60 border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:border-stone-400'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 font-bold text-xs mb-0.5">
                          <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#7a1818] dark:text-amber-400' : 'text-stone-400'}`} />
                          <span className="truncate">{cat.label}</span>
                        </div>
                        <span className="text-[10px] text-stone-400 dark:text-stone-500 leading-tight">
                          {cat.desc}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Title / Summary */}
              <div>
                <label className="block text-xs font-bold text-stone-700 dark:text-stone-300 mb-1">
                  Title / Brief Summary <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Chapter 4 Q3 missing code snippet in PDF extraction"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-lg text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#7a1818] dark:focus:border-amber-400 text-xs"
                />
              </div>

              {/* Subject & Chapter */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 dark:text-stone-300 mb-1">
                    Subject Name
                  </label>
                  <input
                    type="text"
                    value={subjectName}
                    onChange={e => setSubjectName(e.target.value)}
                    className="w-full px-3 py-1.5 bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-lg text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#7a1818] text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 dark:text-stone-300 mb-1">
                    Chapter / Unit (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Chapter 3: Scoping"
                    value={chapterName}
                    onChange={e => setChapterName(e.target.value)}
                    className="w-full px-3 py-1.5 bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-lg text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#7a1818] text-xs"
                  />
                </div>
              </div>

              {/* Extra context for Question Suggestion / Error */}
              {feedbackType === 'question_suggestion' && (
                <div className="p-3 bg-amber-50/50 dark:bg-stone-800/80 rounded-xl border border-amber-200/80 dark:border-stone-700 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-stone-800 dark:text-stone-200">
                      Suggested Question Marks:
                    </span>
                    <div className="flex gap-1.5">
                      {([1, 2, 3, 5] as const).map(m => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => setMarks(m)}
                          className={`px-2.5 py-0.5 rounded text-xs font-bold transition cursor-pointer ${
                            marks === m
                              ? 'bg-[#7a1818] text-white'
                              : 'bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-300'
                          }`}
                        >
                          {m} Mark{m > 1 ? 's' : ''}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-600 dark:text-stone-400 mb-1">
                      Proposed Model Answer / Solution
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Write the expected key points or solution..."
                      value={suggestedAnswer}
                      onChange={e => setSuggestedAnswer(e.target.value)}
                      className="w-full px-3 py-1.5 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-lg text-xs"
                    />
                  </div>
                </div>
              )}

              {/* Detailed Description */}
              <div>
                <label className="block text-xs font-bold text-stone-700 dark:text-stone-300 mb-1">
                  Detailed Description & Steps to Reproduce <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder={
                    feedbackType === 'pdf_extraction_issue'
                      ? 'Describe what went wrong in PDF parsing (e.g., page 14 question 5 had formula sqrt(x) misread as x, or options C and D were merged)...'
                      : feedbackType === 'question_suggestion'
                      ? 'Type the full text of the suggested question in English (and Tamil if available)...'
                      : 'Please provide detailed notes or suggestions...'
                  }
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-lg text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#7a1818] dark:focus:border-amber-400 text-xs font-sans"
                />
              </div>

              {/* Optional Email */}
              <div>
                <label className="block text-xs font-medium text-stone-500 dark:text-stone-400 mb-1">
                  Your Email / Contact (Optional - for follow up)
                </label>
                <input
                  type="email"
                  placeholder="teacher@school.edu"
                  value={userEmail}
                  onChange={e => setUserEmail(e.target.value)}
                  className="w-full px-3 py-1.5 bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-lg text-stone-900 dark:text-stone-100 text-xs"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-stone-200 hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 rounded-lg font-semibold cursor-pointer transition text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#7a1818] hover:bg-[#601313] text-white rounded-lg font-bold shadow-md cursor-pointer transition flex items-center gap-1.5 text-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  Save Feedback / Suggestion
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-xs text-stone-500">
                  Total saved submissions: <span className="font-bold text-stone-800 dark:text-stone-200">{feedbackList.length}</span>
                </div>
                {feedbackList.length > 0 && (
                  <button
                    type="button"
                    onClick={handleExportJSON}
                    className="inline-flex items-center gap-1 text-xs bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 px-3 py-1 rounded-md border border-stone-300 dark:border-stone-700 cursor-pointer font-medium"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Export JSON
                  </button>
                )}
              </div>

              {feedbackList.length === 0 ? (
                <div className="py-12 text-center text-stone-400 space-y-2">
                  <MessageSquarePlus className="w-10 h-10 mx-auto text-stone-300 dark:text-stone-700" />
                  <p className="font-semibold text-stone-600 dark:text-stone-400">No feedback submissions recorded yet</p>
                  <p className="text-[11px] max-w-sm mx-auto">
                    Use the 'Submit Feedback' tab to report issues with PDF extraction or suggest new exam questions.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {feedbackList.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 space-y-2"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="p-1 rounded bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700">
                            {getTypeIcon(item.type)}
                          </span>
                          <span className="font-bold text-stone-900 dark:text-stone-100 text-xs">
                            {item.title}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-300 font-semibold">
                            {getTypeLabel(item.type)}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleDeleteFeedback(item.id)}
                          className="text-stone-400 hover:text-red-500 p-1 rounded cursor-pointer"
                          title="Delete submission"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-xs text-stone-700 dark:text-stone-300 whitespace-pre-line bg-white/60 dark:bg-stone-900/60 p-2.5 rounded-lg border border-stone-200/60 dark:border-stone-700/60">
                        {item.description}
                      </p>

                      {item.suggestedAnswer && (
                        <div className="text-[11px] bg-emerald-50 dark:bg-emerald-950/30 p-2 rounded border border-emerald-200 dark:border-emerald-800/60 text-emerald-900 dark:text-emerald-200">
                          <span className="font-bold">Suggested Answer: </span>
                          {item.suggestedAnswer}
                        </div>
                      )}

                      <div className="flex items-center justify-between text-[10px] text-stone-400 pt-1 border-t border-stone-200 dark:border-stone-700">
                        <div className="flex items-center gap-2">
                          <span>Subject: {item.subjectName || 'General'}</span>
                          {item.chapterName && <span>• {item.chapterName}</span>}
                          {item.marks && <span>• {item.marks}M</span>}
                        </div>
                        <span>{new Date(item.createdAt).toLocaleDateString()} {new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
