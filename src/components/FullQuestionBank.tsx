import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  CheckCircle2, 
  Copy, 
  Plus, 
  Eye, 
  EyeOff, 
  Layers, 
  Check, 
  Sparkles,
  BookOpen,
  ArrowUpDown,
  FileSpreadsheet,
  Upload,
  Download,
  Tag,
  X,
  Flame,
  Award,
  Flag,
  Loader2,
  BrainCircuit,
  MessageSquarePlus,
  Edit3,
  Trash2,
  CheckSquare,
  Square,
  AlertTriangle,
  FolderInput,
  Sliders,
  Settings2,
  CheckCheck
} from 'lucide-react';
import { SubjectData, Question, MarkType, LanguageMode } from '../types';
import { BulkImportModal } from './BulkImportModal';
import { exportSubjectQuestionsToCSV, getQuestionDifficulty } from '../utils/csvExport';
import { extractSubjectTopics, getQuestionSubTopic } from '../utils/topicExtractor';
import { classifyQuestionDifficultyAI } from '../utils/aiDifficulty';

interface FullQuestionBankProps {
  subject: SubjectData;
  languageMode: LanguageMode;
  selectedChapterNo?: number | null;
  onAddQuestionToPaper?: (question: Question) => void;
  onAddNewCustomQuestion?: (question: Question) => void;
  onBulkAddQuestions?: (questions: Question[]) => void;
  onReportQuestion?: (question: Question) => void;
  onBatchUpdateQuestions?: (updatedQuestions: Question[]) => void;
  onBatchDeleteQuestions?: (questionIds: string[]) => void;
  showAddButton?: boolean;
}

export const FullQuestionBank: React.FC<FullQuestionBankProps> = ({
  subject,
  languageMode,
  selectedChapterNo,
  onAddQuestionToPaper,
  onAddNewCustomQuestion,
  onBulkAddQuestions,
  onReportQuestion,
  onBatchUpdateQuestions,
  onBatchDeleteQuestions,
  showAddButton = true
}) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  // State for filtering
  const [selectedChapters, setSelectedChapters] = useState<number[]>(() => {
    if (selectedChapterNo) return [selectedChapterNo];
    return subject.chapters.map(c => c.no);
  });

  const [selectedMarks, setSelectedMarks] = useState<MarkType | 'ALL'>('ALL');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'ALL' | 'Easy' | 'Medium' | 'Hard'>('ALL');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});
  const [showTopicCloud, setShowTopicCloud] = useState<boolean>(true);
  const [exportSuccess, setExportSuccess] = useState<boolean>(false);

  // Bulk Edit Mode State
  const [isBulkEditMode, setIsBulkEditMode] = useState<boolean>(false);
  const [selectedQuestionIds, setSelectedQuestionIds] = useState<string[]>([]);
  const [showBatchDeleteModal, setShowBatchDeleteModal] = useState<boolean>(false);
  const [showBatchTagModal, setShowBatchTagModal] = useState<boolean>(false);
  const [showBatchMoveModal, setShowBatchMoveModal] = useState<boolean>(false);
  const [batchMoveTargetChapter, setBatchMoveTargetChapter] = useState<number>(subject.chapters[0]?.no || 1);
  const [isBatchAIProcessing, setIsBatchAIProcessing] = useState<boolean>(false);

  // Custom question modal & Bulk Import state
  const [showAddModal, setShowAddModal] = useState(false);
  const [showBulkModal, setShowBulkModal] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [newQChapterNo, setNewQChapterNo] = useState<number>(subject.chapters[0]?.no || 1);
  const [newQMarks, setNewQMarks] = useState<MarkType>(1);
  const [newQText, setNewQText] = useState('');
  const [newQTextTamil, setNewQTextTamil] = useState('');
  const [newOptA, setNewOptA] = useState('');
  const [newOptB, setNewOptB] = useState('');
  const [newOptC, setNewOptC] = useState('');
  const [newOptD, setNewOptD] = useState('');
  const [newCorrectOpt, setNewCorrectOpt] = useState<'A' | 'B' | 'C' | 'D'>('A');
  const [newAnswer, setNewAnswer] = useState('');
  const [newAnswerTamil, setNewAnswerTamil] = useState('');
  
  // AI Difficulty state
  const [newDifficulty, setNewDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Medium');
  const [newDifficultyReasoning, setNewDifficultyReasoning] = useState<string>('');
  const [isAnalyzingDifficulty, setIsAnalyzingDifficulty] = useState<boolean>(false);
  const [analyzingQuestionId, setAnalyzingQuestionId] = useState<string | null>(null);
  const [liveReasonings, setLiveReasonings] = useState<Record<string, string>>({});

  // Auto-detect difficulty with AI in Add Modal
  const handleAIAnalyzeDifficulty = async () => {
    if (!newQText.trim()) {
      setToastMessage('Please enter question text before AI analysis');
      setTimeout(() => setToastMessage(null), 3000);
      return;
    }

    setIsAnalyzingDifficulty(true);
    try {
      const selectedCh = subject.chapters.find(c => c.no === newQChapterNo);
      const res = await classifyQuestionDifficultyAI({
        questionText: newQText,
        marks: newQMarks,
        type: newQMarks === 1 ? 'mcq' : newQMarks === 2 ? 'short' : newQMarks === 3 ? 'brief' : 'essay',
        answer: newAnswer,
        subjectName: subject.name,
        chapterName: selectedCh?.name,
        options: newQMarks === 1 ? { A: newOptA, B: newOptB, C: newOptC, D: newOptD } : undefined
      });

      setNewDifficulty(res.difficulty);
      setNewDifficultyReasoning(res.reasoning);
      setToastMessage(`AI classified as ${res.difficulty}!`);
    } catch (e: any) {
      console.warn('AI analysis error', e);
    } finally {
      setIsAnalyzingDifficulty(false);
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  // On-demand AI classification for existing question card
  const handleClassifyExistingQuestion = async (q: Question) => {
    setAnalyzingQuestionId(q.id);
    try {
      const res = await classifyQuestionDifficultyAI({
        questionText: q.questionText,
        marks: q.marks,
        type: q.type,
        answer: q.answer,
        subjectName: subject.name,
        chapterName: q.chapterName,
        options: q.options
      });
      setLiveReasonings(prev => ({
        ...prev,
        [q.id]: `[AI Verified: ${res.difficulty}] ${res.reasoning}`
      }));
      setToastMessage(`Q${q.id.slice(-4)} tagged as ${res.difficulty} (${res.cognitiveDomain || 'Understanding'})`);
    } catch (e) {
      console.warn('AI classification failed', e);
    } finally {
      setAnalyzingQuestionId(null);
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  // Extract all subtopics for the active subject
  const allTopics = useMemo(() => {
    return extractSubjectTopics(subject);
  }, [subject]);

  const handleExportCSV = () => {
    exportSubjectQuestionsToCSV(subject);
    setExportSuccess(true);
    setToastMessage('Question bank CSV backup downloaded successfully!');
    setTimeout(() => {
      setExportSuccess(false);
      setToastMessage(null);
    }, 3500);
  };

  // Chapter pill handlers
  const handleToggleChapter = (chNo: number) => {
    setSelectedChapters(prev => 
      prev.includes(chNo) ? prev.filter(n => n !== chNo) : [...prev, chNo]
    );
  };

  const handleSelectAllChapters = () => {
    setSelectedChapters(subject.chapters.map(c => c.no));
  };

  const handleDeselectAllChapters = () => {
    setSelectedChapters([]);
  };

  const toggleRevealAnswer = (qId: string) => {
    setRevealedAnswers(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const handleCopyQuestion = (q: Question) => {
    let text = `${q.questionText}\n`;
    if (q.questionTextTamil) text += `${q.questionTextTamil}\n`;
    if (q.options) {
      text += `A) ${q.options.A}\nB) ${q.options.B}\nC) ${q.options.C}\nD) ${q.options.D}\n`;
    }
    text += `Answer: ${q.answer}`;
    navigator.clipboard.writeText(text);
    setCopiedId(q.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleAddToPaper = (q: Question) => {
    if (onAddQuestionToPaper) {
      onAddQuestionToPaper(q);
      setAddedIds(prev => ({ ...prev, [q.id]: true }));
      setTimeout(() => {
        setAddedIds(prev => ({ ...prev, [q.id]: false }));
      }, 1500);
    }
  };

  // Batch Tag Form State
  const [batchTagBookBack, setBatchTagBookBack] = useState<'keep' | 'yes' | 'no'>('keep');
  const [batchTagCompulsory, setBatchTagCompulsory] = useState<'keep' | 'yes' | 'no'>('keep');
  const [batchTagCreative, setBatchTagCreative] = useState<'keep' | 'yes' | 'no'>('keep');
  const [batchCustomTag, setBatchCustomTag] = useState<string>('');

  // Batch Selection Handlers
  const toggleSelectQuestion = (qId: string) => {
    setSelectedQuestionIds(prev => 
      prev.includes(qId) ? prev.filter(id => id !== qId) : [...prev, qId]
    );
  };

  const handleSelectAllFiltered = () => {
    setSelectedQuestionIds(filteredQuestions.map(q => q.id));
  };

  const handleDeselectAllSelected = () => {
    setSelectedQuestionIds([]);
  };

  // Batch Difficulty Update
  const handleBatchSetDifficulty = (diff: 'Easy' | 'Medium' | 'Hard') => {
    if (selectedQuestionIds.length === 0) return;
    const selectedSet = new Set(selectedQuestionIds);
    const updated = subject.questions
      .filter(q => selectedSet.has(q.id))
      .map(q => ({
        ...q,
        difficulty: diff,
        difficultyReasoning: `Difficulty batch-updated to ${diff} by educator.`
      }));

    if (onBatchUpdateQuestions) {
      onBatchUpdateQuestions(updated);
    }
    setToastMessage(`Updated difficulty of ${updated.length} questions to ${diff}.`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Batch AI Auto-Detect Difficulty
  const handleBatchAIDetectDifficulty = async () => {
    if (selectedQuestionIds.length === 0) return;
    setIsBatchAIProcessing(true);
    try {
      const selectedSet = new Set(selectedQuestionIds);
      const toProcess = subject.questions.filter(q => selectedSet.has(q.id));
      const updated: Question[] = [];

      for (const q of toProcess) {
        const res = await classifyQuestionDifficultyAI({
          questionText: q.questionText,
          marks: q.marks,
          type: q.type,
          answer: q.answer,
          subjectName: subject.name,
          chapterName: q.chapterName,
          options: q.options
        });
        updated.push({
          ...q,
          difficulty: res.difficulty,
          difficultyReasoning: res.reasoning,
          subTopic: res.subTopic || q.subTopic
        });
      }

      if (onBatchUpdateQuestions) {
        onBatchUpdateQuestions(updated);
      }
      setToastMessage(`AI analyzed and assigned difficulty for ${updated.length} questions.`);
      setTimeout(() => setToastMessage(null), 4000);
    } catch (e) {
      console.error(e);
      setToastMessage('Error executing AI difficulty classification.');
    } finally {
      setIsBatchAIProcessing(false);
    }
  };

  // Batch Tags & Attributes Update
  const handleBatchUpdateTags = () => {
    if (selectedQuestionIds.length === 0) return;
    const selectedSet = new Set(selectedQuestionIds);
    const updated = subject.questions
      .filter(q => selectedSet.has(q.id))
      .map(q => {
        const newTags = batchCustomTag && batchCustomTag.trim() 
          ? Array.from(new Set([...(q.tags || []), batchCustomTag.trim()]))
          : q.tags;
        return {
          ...q,
          isBookBack: batchTagBookBack === 'keep' ? q.isBookBack : batchTagBookBack === 'yes',
          isCompulsoryEligible: batchTagCompulsory === 'keep' ? q.isCompulsoryEligible : batchTagCompulsory === 'yes',
          isCreative: batchTagCreative === 'keep' ? q.isCreative : batchTagCreative === 'yes',
          tags: newTags
        };
      });

    if (onBatchUpdateQuestions) {
      onBatchUpdateQuestions(updated);
    }
    setShowBatchTagModal(false);
    setToastMessage(`Updated tags/attributes for ${updated.length} questions.`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Batch Move Chapter
  const handleBatchMoveChapter = () => {
    if (selectedQuestionIds.length === 0) return;
    const targetChapter = subject.chapters.find(c => c.no === batchMoveTargetChapter);
    if (!targetChapter) return;

    const selectedSet = new Set(selectedQuestionIds);
    const updated = subject.questions
      .filter(q => selectedSet.has(q.id))
      .map(q => ({
        ...q,
        chapterNo: batchMoveTargetChapter,
        chapterName: targetChapter.name,
        chapterNameTamil: targetChapter.nameTamil
      }));

    if (onBatchUpdateQuestions) {
      onBatchUpdateQuestions(updated);
    }
    setShowBatchMoveModal(false);
    setToastMessage(`Moved ${updated.length} questions to Chapter ${batchMoveTargetChapter}: ${targetChapter.name}.`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Batch Delete Questions
  const handleConfirmBatchDelete = () => {
    if (selectedQuestionIds.length === 0) return;
    if (onBatchDeleteQuestions) {
      onBatchDeleteQuestions(selectedQuestionIds);
    }
    const count = selectedQuestionIds.length;
    setSelectedQuestionIds([]);
    setShowBatchDeleteModal(false);
    setToastMessage(`Deleted ${count} questions from question bank.`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Batch Add to Paper
  const handleBatchAddToPaper = () => {
    if (selectedQuestionIds.length === 0) return;
    const selectedSet = new Set(selectedQuestionIds);
    const questionsToAdd = subject.questions.filter(q => selectedSet.has(q.id));
    if (onBulkAddQuestions) {
      onBulkAddQuestions(questionsToAdd);
    } else if (onAddQuestionToPaper) {
      questionsToAdd.forEach(q => onAddQuestionToPaper(q));
    }
    setToastMessage(`Added ${questionsToAdd.length} questions to Manual Question Paper!`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Batch Export CSV
  const handleExportSelectedCSV = () => {
    if (selectedQuestionIds.length === 0) return;
    const selectedSet = new Set(selectedQuestionIds);
    const subset = subject.questions.filter(q => selectedSet.has(q.id));
    const dummySubject: SubjectData = {
      ...subject,
      questions: subset
    };
    exportSubjectQuestionsToCSV(dummySubject);
    setToastMessage(`Exported ${subset.length} selected questions to CSV.`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleSaveCustomQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQText.trim()) return;

    const targetChapter = subject.chapters.find(c => c.no === Number(newQChapterNo));

    const newQuestion: Question = {
      id: `custom-q-${Date.now()}`,
      chapterNo: Number(newQChapterNo),
      chapterName: targetChapter?.name || `Chapter ${newQChapterNo}`,
      chapterNameTamil: targetChapter?.nameTamil,
      marks: newQMarks,
      type: newQMarks === 1 ? 'mcq' : newQMarks === 2 ? 'short' : newQMarks === 3 ? 'brief' : 'essay',
      questionText: newQText,
      questionTextTamil: newQTextTamil || undefined,
      options: newQMarks === 1 ? { A: newOptA, B: newOptB, C: newOptC, D: newOptD } : undefined,
      correctOption: newQMarks === 1 ? newCorrectOpt : undefined,
      answer: newQMarks === 1 ? `${newCorrectOpt}) ${newCorrectOpt === 'A' ? newOptA : newCorrectOpt === 'B' ? newOptB : newCorrectOpt === 'C' ? newOptC : newOptD}` : newAnswer,
      answerTamil: newAnswerTamil || undefined,
      isBookBack: false,
      isCreative: true
    };

    if (onAddNewCustomQuestion) {
      onAddNewCustomQuestion(newQuestion);
      setToastMessage('Question successfully added to question bank!');
      setTimeout(() => setToastMessage(null), 3500);
    }

    // Reset and close modal
    setNewQText('');
    setNewQTextTamil('');
    setNewOptA('');
    setNewOptB('');
    setNewOptC('');
    setNewOptD('');
    setNewAnswer('');
    setNewAnswerTamil('');
    setShowAddModal(false);
  };

  const handleBulkImportQuestions = (imported: Question[]) => {
    if (onBulkAddQuestions) {
      onBulkAddQuestions(imported);
    } else if (onAddNewCustomQuestion) {
      imported.forEach(q => onAddNewCustomQuestion(q));
    }
    setToastMessage(`Successfully imported ${imported.length} questions into ${subject.name}!`);
    setTimeout(() => setToastMessage(null), 4500);
  };

  // Filtered list
  const filteredQuestions = useMemo(() => {
    return subject.questions.filter(q => {
      // Chapter filter
      if (selectedChapters.length > 0 && !selectedChapters.includes(q.chapterNo)) {
        return false;
      }
      // Marks filter
      if (selectedMarks !== 'ALL' && q.marks !== selectedMarks) {
        return false;
      }
      // Difficulty filter
      if (selectedDifficulty !== 'ALL') {
        const diff = getQuestionDifficulty(q);
        if (diff !== selectedDifficulty) {
          return false;
        }
      }
      // Sub-topic filter
      if (selectedTopic) {
        const topic = getQuestionSubTopic(q);
        if (topic !== selectedTopic) {
          return false;
        }
      }
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const textMatch = q.questionText.toLowerCase().includes(query);
        const tamilMatch = q.questionTextTamil?.toLowerCase().includes(query);
        const answerMatch = q.answer.toLowerCase().includes(query);
        const chapterMatch = q.chapterName.toLowerCase().includes(query);
        const topicMatch = getQuestionSubTopic(q).toLowerCase().includes(query);
        return textMatch || tamilMatch || answerMatch || chapterMatch || topicMatch;
      }
      return true;
    });
  }, [subject.questions, selectedChapters, selectedMarks, selectedDifficulty, selectedTopic, searchQuery]);

  // Group by chapter
  const groupedByChapter = useMemo(() => {
    const groups: { [chNo: number]: Question[] } = {};
    for (const q of filteredQuestions) {
      if (!groups[q.chapterNo]) {
        groups[q.chapterNo] = [];
      }
      groups[q.chapterNo].push(q);
    }
    return groups;
  }, [filteredQuestions]);

  return (
    <div className="space-y-6 pb-12">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-2xl border border-stone-700 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Filter Bar */}
      <div className="bg-[#1e293b] text-slate-200 rounded-xl p-4 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-700 pb-3">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-amber-400" />
            <h3 className="font-bold text-sm text-white">Filter Chapters, Marks & Topics</h3>
            <span className="text-xs bg-slate-800 text-amber-300 font-semibold px-2 py-0.5 rounded">
              {filteredQuestions.length} Questions Found
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleSelectAllChapters}
              className="text-xs bg-slate-700 hover:bg-slate-600 text-slate-200 px-2.5 py-1 rounded transition cursor-pointer font-medium"
            >
              Select All Chapters
            </button>
            <button
              onClick={handleDeselectAllChapters}
              className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 px-2.5 py-1 rounded transition cursor-pointer font-medium"
            >
              Deselect All
            </button>
            <button
              type="button"
              onClick={() => {
                const nextState = !isBulkEditMode;
                setIsBulkEditMode(nextState);
                if (!nextState) {
                  setSelectedQuestionIds([]);
                }
              }}
              className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded transition cursor-pointer shadow border ${
                isBulkEditMode
                  ? 'bg-amber-400 text-stone-950 border-amber-300 ring-2 ring-amber-400/50'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-600'
              }`}
              title="Toggle Bulk Edit Mode to select and batch-update or delete multiple questions"
            >
              <Edit3 className="w-3.5 h-3.5" />
              {isBulkEditMode ? `Bulk Edit ON (${selectedQuestionIds.length})` : 'Bulk Edit'}
            </button>
            <button
              type="button"
              onClick={handleExportCSV}
              className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded transition cursor-pointer shadow border ${
                exportSuccess
                  ? 'bg-emerald-700 border-emerald-500 text-white'
                  : 'bg-slate-800 hover:bg-slate-700 border-slate-600 text-slate-200'
              }`}
              title="Download entire question bank with solutions as CSV file"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              {exportSuccess ? 'CSV Exported!' : 'Export CSV'}
            </button>
            <button
              type="button"
              onClick={() => setShowBulkModal(true)}
              className="inline-flex items-center gap-1.5 text-xs bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-3 py-1 rounded transition cursor-pointer shadow"
              title="Upload questions in bulk via CSV or JSON file"
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              Bulk Import
            </button>
            {onAddNewCustomQuestion && (
              <button
                onClick={() => setShowAddModal(true)}
                className="inline-flex items-center gap-1 text-xs bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-3 py-1 rounded transition cursor-pointer shadow"
              >
                <Plus className="w-3.5 h-3.5" />
                + Add Question
              </button>
            )}
          </div>
        </div>

        {/* Chapter Pills */}
        <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
          {subject.chapters.map(ch => {
            const isSelected = selectedChapters.includes(ch.no);
            return (
              <button
                key={ch.no}
                onClick={() => handleToggleChapter(ch.no)}
                className={`text-[11px] px-2.5 py-1 rounded-md font-medium transition cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-amber-400 text-stone-950 font-bold shadow-sm'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <span>{ch.no}.</span>
                <span className="truncate max-w-[150px]">{ch.name}</span>
              </button>
            );
          })}
        </div>

        {/* Topic Cloud Filter Section */}
        <div className="pt-2 border-t border-slate-700/60 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs text-amber-300 font-bold">
              <Tag className="w-3.5 h-3.5" />
              <span>Sub-Topic Cloud & Keyword Filter</span>
              {selectedTopic && (
                <span className="bg-amber-400/20 text-amber-200 text-[10px] px-2 py-0.5 rounded border border-amber-400/40">
                  Active: {selectedTopic}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs">
              {selectedTopic && (
                <button
                  onClick={() => setSelectedTopic(null)}
                  className="text-[11px] text-red-400 hover:text-red-300 hover:underline flex items-center gap-0.5 cursor-pointer"
                >
                  <X className="w-3 h-3" /> Clear Topic Filter
                </button>
              )}
              <button
                onClick={() => setShowTopicCloud(!showTopicCloud)}
                className="text-[11px] text-slate-400 hover:text-slate-200 cursor-pointer"
              >
                {showTopicCloud ? 'Collapse Topics' : 'Expand Topics'}
              </button>
            </div>
          </div>

          {showTopicCloud && (
            <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto pr-1">
              <button
                onClick={() => setSelectedTopic(null)}
                className={`text-[11px] px-2.5 py-1 rounded-md font-medium transition cursor-pointer ${
                  selectedTopic === null
                    ? 'bg-blue-600 text-white font-bold'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                }`}
              >
                All Topics ({subject.questions.length})
              </button>
              {allTopics.map(top => {
                const isSelected = selectedTopic === top.name;
                return (
                  <button
                    key={top.name}
                    onClick={() => setSelectedTopic(isSelected ? null : top.name)}
                    className={`text-[11px] px-2.5 py-1 rounded-md font-medium transition cursor-pointer flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-amber-500 text-stone-950 font-bold shadow'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    <span>{top.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
                      isSelected ? 'bg-stone-900 text-amber-300' : 'bg-slate-900 text-slate-400'
                    }`}>
                      {top.count}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Marks Pills, Difficulty Filter & Search Input */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-slate-700/60">
          <div className="flex items-center gap-2 flex-wrap">
            {/* Marks Filter */}
            <div className="flex items-center gap-1">
              <span className="text-xs text-slate-400 font-semibold mr-0.5">Marks:</span>
              {(['ALL', 1, 2, 3, 5] as const).map(mark => {
                const isActive = selectedMarks === mark;
                return (
                  <button
                    key={mark}
                    onClick={() => setSelectedMarks(mark)}
                    className={`text-xs px-2.5 py-1 rounded font-bold transition cursor-pointer ${
                      isActive
                        ? 'bg-amber-500 text-stone-950 shadow'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    {mark === 'ALL' ? 'All' : `${mark}M`}
                  </button>
                );
              })}
            </div>

            <div className="h-4 w-px bg-slate-700 mx-1 hidden md:block" />

            {/* Difficulty Filter */}
            <div className="flex items-center gap-1">
              <span className="text-xs text-slate-400 font-semibold mr-0.5">Difficulty:</span>
              {(['ALL', 'Easy', 'Medium', 'Hard'] as const).map(diff => {
                const isActive = selectedDifficulty === diff;
                return (
                  <button
                    key={diff}
                    onClick={() => setSelectedDifficulty(diff)}
                    className={`text-xs px-2.5 py-1 rounded font-bold transition cursor-pointer ${
                      isActive
                        ? diff === 'Easy'
                          ? 'bg-emerald-500 text-stone-950 shadow'
                          : diff === 'Medium'
                          ? 'bg-amber-500 text-stone-950 shadow'
                          : diff === 'Hard'
                          ? 'bg-rose-500 text-white shadow'
                          : 'bg-stone-200 text-stone-950 shadow'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    {diff}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search question text, sub-topics, answers..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-900 border border-slate-700 rounded-md text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>
      </div>

      {/* Questions Listing Grouped by Chapter */}
      {filteredQuestions.length === 0 ? (
        <div className="bg-white border border-stone-200 rounded-xl p-12 text-center text-stone-500">
          <BookOpen className="w-10 h-10 mx-auto text-stone-300 mb-2" />
          <p className="font-semibold text-stone-700">No questions match your current filters.</p>
          <p className="text-xs text-stone-500 mt-1">Try selecting more chapters or resetting search criteria.</p>
          <button
            onClick={() => {
              setSelectedChapters(subject.chapters.map(c => c.no));
              setSelectedMarks('ALL');
              setSearchQuery('');
            }}
            className="mt-3 text-xs bg-red-800 text-white font-bold px-3 py-1.5 rounded hover:bg-red-900 cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {Object.keys(groupedByChapter).map(chNoStr => {
            const chNo = Number(chNoStr);
            const chapter = subject.chapters.find(c => c.no === chNo);
            const qList = groupedByChapter[chNo];

            return (
              <div key={chNo} className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm">
                {/* Chapter Banner */}
                <div className="bg-[#1e293b] px-4 py-2.5 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="bg-amber-400 text-stone-950 text-xs font-black px-2 py-0.5 rounded">
                      Ch {chNo}
                    </span>
                    <h3 className="font-bold text-sm">
                      {chapter?.name} {chapter?.nameTamil ? `(${chapter.nameTamil})` : ''}
                    </h3>
                  </div>
                  <span className="text-xs text-slate-300 font-semibold">
                    {qList.length} Questions
                  </span>
                </div>

                {/* Questions in Chapter */}
                <div className="divide-y divide-stone-100">
                  {qList.map((q, qIndex) => {
                    const isAnswerVisible = revealedAnswers[q.id];
                    const isAdded = addedIds[q.id];
                    const isSelected = selectedQuestionIds.includes(q.id);

                    return (
                      <div 
                        key={q.id} 
                        onClick={e => {
                          if (isBulkEditMode) {
                            const target = e.target as HTMLElement;
                            if (target.closest('button') || target.closest('input') || target.closest('a')) return;
                            toggleSelectQuestion(q.id);
                          }
                        }}
                        className={`p-4 transition space-y-3 ${
                          isSelected
                            ? 'bg-amber-50/90 border-l-4 border-amber-500 shadow-xs ring-1 ring-amber-300/60'
                            : isBulkEditMode
                            ? 'hover:bg-amber-50/30 cursor-pointer'
                            : 'hover:bg-stone-50/70'
                        }`}
                      >
                        {/* Header of Question */}
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-2 flex-wrap">
                            {/* Bulk Selection Checkbox */}
                            {isBulkEditMode && (
                              <button
                                type="button"
                                onClick={e => {
                                  e.stopPropagation();
                                  toggleSelectQuestion(q.id);
                                }}
                                className={`p-1 rounded-md transition cursor-pointer flex items-center justify-center shrink-0 ${
                                  isSelected 
                                    ? 'bg-amber-500 text-stone-950 font-bold' 
                                    : 'bg-stone-100 hover:bg-stone-200 text-stone-400 border border-stone-300'
                                }`}
                                title={isSelected ? 'Deselect question' : 'Select question for bulk edit'}
                              >
                                {isSelected ? (
                                  <CheckSquare className="w-4 h-4 text-stone-950" />
                                ) : (
                                  <Square className="w-4 h-4 text-stone-400" />
                                )}
                              </button>
                            )}

                            <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                              q.marks === 1
                                ? 'bg-blue-100 text-blue-800'
                                : q.marks === 2
                                ? 'bg-emerald-100 text-emerald-800'
                                : q.marks === 3
                                ? 'bg-purple-100 text-purple-800'
                                : 'bg-amber-100 text-amber-800'
                            }`}>
                              Part {q.marks === 1 ? 'I (1M)' : q.marks === 2 ? 'II (2M)' : q.marks === 3 ? 'III (3M)' : 'IV (5M)'}
                            </span>
                            {(() => {
                              const diff = getQuestionDifficulty(q);
                              return (
                                <span className={`text-[10px] font-semibold px-2 py-0.2 rounded border ${
                                  diff === 'Easy'
                                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                    : diff === 'Medium'
                                    ? 'bg-amber-50 text-amber-700 border-amber-200'
                                    : 'bg-rose-50 text-rose-700 border-rose-200'
                                }`}>
                                  {diff}
                                </span>
                              );
                            })()}
                            {q.isBookBack && (
                              <span className="text-[10px] bg-stone-100 text-stone-600 font-medium px-1.5 py-0.2 rounded border border-stone-200">
                                Book Back
                              </span>
                            )}
                            {q.isCompulsoryEligible && (
                              <span className="text-[10px] bg-red-50 text-red-700 font-medium px-1.5 py-0.2 rounded border border-red-200">
                                Compulsory Candidate
                              </span>
                            )}
                            {(() => {
                              const subTopic = getQuestionSubTopic(q);
                              return (
                                <button
                                  type="button"
                                  onClick={() => setSelectedTopic(subTopic)}
                                  className="text-[10px] bg-stone-100 hover:bg-stone-200 text-stone-700 px-2 py-0.2 rounded font-medium border border-stone-200 transition cursor-pointer flex items-center gap-1"
                                  title={`Filter by subtopic: ${subTopic}`}
                                >
                                  <Tag className="w-2.5 h-2.5 text-stone-400" />
                                  {subTopic}
                                </button>
                              );
                            })()}
                          </div>

                          {/* Quick Actions */}
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => toggleRevealAnswer(q.id)}
                              className="text-xs text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 px-2 py-1 rounded transition cursor-pointer flex items-center gap-1"
                              title="Toggle Answer Key"
                            >
                              {isAnswerVisible ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                              <span className="hidden sm:inline">{isAnswerVisible ? 'Hide Key' : 'Answer'}</span>
                            </button>

                            <button
                              onClick={() => handleCopyQuestion(q)}
                              className="text-xs text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 px-2 py-1 rounded transition cursor-pointer flex items-center gap-1"
                              title="Copy Question Text"
                            >
                              {copiedId === q.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                              <span className="hidden sm:inline">{copiedId === q.id ? 'Copied' : 'Copy'}</span>
                            </button>

                            {showAddButton && onAddQuestionToPaper && (
                              <button
                                onClick={() => handleAddToPaper(q)}
                                className={`text-xs font-bold px-2.5 py-1 rounded transition cursor-pointer flex items-center gap-1 ${
                                  isAdded
                                    ? 'bg-emerald-600 text-white'
                                    : 'bg-red-800 hover:bg-red-900 text-white'
                                }`}
                                title="Add to Manual Question Paper Selection"
                              >
                                {isAdded ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                                <span>{isAdded ? 'Added' : 'Add to QP'}</span>
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Question Text in English and/or Tamil */}
                        <div className="space-y-1.5 text-stone-900 text-sm leading-relaxed">
                          {languageMode === 'english' && (
                            <p className="font-medium whitespace-pre-line">{q.questionText}</p>
                          )}
                          {languageMode === 'tamil' && (
                            <p className="font-medium text-stone-900 whitespace-pre-line">{q.questionTextTamil || q.questionText}</p>
                          )}
                          {languageMode === 'bilingual' && (
                            <>
                              <p className="font-medium whitespace-pre-line">{q.questionText}</p>
                              {q.questionTextTamil && (
                                <p className="font-medium text-stone-800 whitespace-pre-line">{q.questionTextTamil}</p>
                              )}
                            </>
                          )}
                          {q.imageUrl && (
                            <div className="mt-2">
                              <img
                                src={q.imageUrl}
                                alt="Diagram"
                                className="max-h-48 max-w-full rounded border border-stone-200 bg-white object-contain p-1"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          )}
                        </div>

                        {/* MCQ Options (If 1-Mark) */}
                        {q.options && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                            {(['A', 'B', 'C', 'D'] as const).map(optKey => {
                              const isCorrect = q.correctOption === optKey;
                              const tamilOptLabel = optKey === 'A' ? '(அ)' : optKey === 'B' ? '(ஆ)' : optKey === 'C' ? '(இ)' : '(ஈ)';
                              const engOptLabel = `(${optKey.toLowerCase()})`;

                              return (
                                <div
                                  key={optKey}
                                  className={`px-3 py-1.5 rounded-lg border text-xs flex items-start gap-2 ${
                                    isAnswerVisible && isCorrect
                                      ? 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-400'
                                      : 'border-stone-200 bg-stone-50/50 text-stone-800'
                                  }`}
                                >
                                  <span className={`font-bold shrink-0 ${isAnswerVisible && isCorrect ? 'text-emerald-700' : 'text-stone-500'}`}>
                                    {languageMode === 'tamil' ? tamilOptLabel : languageMode === 'bilingual' ? `${engOptLabel} / ${tamilOptLabel}` : engOptLabel}
                                  </span>
                                  <div className="flex-1">
                                    {languageMode === 'english' && (
                                      <p>{q.options![optKey]}</p>
                                    )}
                                    {languageMode === 'tamil' && (
                                      <p className="text-stone-800 font-medium">{q.optionsTamil?.[optKey] || q.options![optKey]}</p>
                                    )}
                                    {languageMode === 'bilingual' && (
                                      <>
                                        <p>{q.options![optKey]}</p>
                                        {q.optionsTamil?.[optKey] && (
                                          <p className="text-stone-700 mt-0.5">{q.optionsTamil[optKey]}</p>
                                        )}
                                      </>
                                    )}
                                    {q.optionImages?.[optKey] && (
                                      <div className="mt-1.5">
                                        <img
                                          src={q.optionImages[optKey]}
                                          alt={`Option ${optKey}`}
                                          className="max-h-36 max-w-full rounded border border-stone-200 bg-white object-contain p-1 shadow-2xs"
                                          referrerPolicy="no-referrer"
                                        />
                                      </div>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {/* Answer Key & Model Explanation */}
                        {isAnswerVisible && (
                          <div className="p-3 bg-emerald-50/80 border border-emerald-200 rounded-lg text-xs space-y-1.5 text-emerald-950 animate-fadeIn">
                            <div className="flex items-center gap-1.5 font-bold text-emerald-900">
                              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                              {languageMode === 'tamil' ? 'சரியான விடைக்குறிப்பு & மதிப்பீட்டுத் திட்டம்:' : 'Model Answer / Key:'}
                            </div>
                            <div className="whitespace-pre-line leading-relaxed font-mono text-[11px] bg-white p-2 rounded border border-emerald-200 text-stone-900">
                              {languageMode === 'english' && (
                                <p>{q.answer}</p>
                              )}
                              {languageMode === 'tamil' && (
                                <p>{q.answerTamil || q.answer}</p>
                              )}
                              {languageMode === 'bilingual' && (
                                <>
                                  <p>{q.answer}</p>
                                  {q.answerTamil && (
                                    <p className="mt-1 pt-1 border-t border-stone-200">{q.answerTamil}</p>
                                  )}
                                </>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Floating Sticky Bulk Actions Bar */}
      {isBulkEditMode && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-full max-w-4xl px-4 animate-in fade-in slide-in-from-bottom-5 duration-200 no-print">
          <div className="bg-[#0f172a] text-white rounded-2xl shadow-2xl border border-amber-500/50 p-3 sm:p-4 backdrop-blur-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              {/* Counter & Select All Controls */}
              <div className="flex items-center gap-3">
                <div className="bg-amber-400 text-stone-950 font-black text-xs px-3 py-1.5 rounded-xl flex items-center gap-1.5 shrink-0 shadow">
                  <CheckCheck className="w-4 h-4" />
                  <span>{selectedQuestionIds.length} Selected</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <button
                    type="button"
                    onClick={handleSelectAllFiltered}
                    className="text-amber-300 hover:text-amber-200 font-bold hover:underline cursor-pointer"
                  >
                    Select All Filtered ({filteredQuestions.length})
                  </button>
                  <span className="text-slate-500">•</span>
                  <button
                    type="button"
                    onClick={handleDeselectAllSelected}
                    className="text-slate-400 hover:text-white font-medium hover:underline cursor-pointer"
                  >
                    Clear Selection
                  </button>
                </div>
              </div>

              {/* Batch Action Buttons */}
              <div className="flex items-center gap-2 flex-wrap">
                {/* Difficulty Selector Dropdown / Buttons */}
                <div className="flex items-center bg-slate-800 rounded-lg p-1 border border-slate-700">
                  <span className="text-[11px] font-bold text-slate-400 px-2 flex items-center gap-1">
                    <Sliders className="w-3 h-3 text-amber-400" />
                    Diff:
                  </span>
                  <button
                    type="button"
                    disabled={selectedQuestionIds.length === 0}
                    onClick={() => handleBatchSetDifficulty('Easy')}
                    className="text-[10px] font-bold px-2 py-1 bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 rounded mr-1 disabled:opacity-40 transition cursor-pointer"
                    title="Set difficulty to Easy for all selected questions"
                  >
                    Easy
                  </button>
                  <button
                    type="button"
                    disabled={selectedQuestionIds.length === 0}
                    onClick={() => handleBatchSetDifficulty('Medium')}
                    className="text-[10px] font-bold px-2 py-1 bg-amber-900/60 hover:bg-amber-800 text-amber-200 rounded mr-1 disabled:opacity-40 transition cursor-pointer"
                    title="Set difficulty to Medium for all selected questions"
                  >
                    Med
                  </button>
                  <button
                    type="button"
                    disabled={selectedQuestionIds.length === 0}
                    onClick={() => handleBatchSetDifficulty('Hard')}
                    className="text-[10px] font-bold px-2 py-1 bg-rose-900/60 hover:bg-rose-800 text-rose-200 rounded mr-1 disabled:opacity-40 transition cursor-pointer"
                    title="Set difficulty to Hard for all selected questions"
                  >
                    Hard
                  </button>
                  <button
                    type="button"
                    disabled={selectedQuestionIds.length === 0 || isBatchAIProcessing}
                    onClick={handleBatchAIDetectDifficulty}
                    className="text-[10px] font-bold px-2 py-1 bg-purple-800 hover:bg-purple-700 text-purple-100 rounded flex items-center gap-1 disabled:opacity-40 transition cursor-pointer"
                    title="AI Auto-Detect Difficulty for all selected questions"
                  >
                    {isBatchAIProcessing ? <Loader2 className="w-3 h-3 animate-spin" /> : <BrainCircuit className="w-3 h-3 text-purple-300" />}
                    <span>AI Auto</span>
                  </button>
                </div>

                {/* Tags & Attributes Modal Button */}
                <button
                  type="button"
                  disabled={selectedQuestionIds.length === 0}
                  onClick={() => setShowBatchTagModal(true)}
                  className="text-xs font-bold px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 rounded-lg flex items-center gap-1.5 disabled:opacity-40 transition cursor-pointer"
                  title="Batch update tags, book-back, or compulsory attributes"
                >
                  <Tag className="w-3.5 h-3.5 text-amber-400" />
                  <span>Tags</span>
                </button>

                {/* Move Chapter Modal Button */}
                <button
                  type="button"
                  disabled={selectedQuestionIds.length === 0}
                  onClick={() => setShowBatchMoveModal(true)}
                  className="text-xs font-bold px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 rounded-lg flex items-center gap-1.5 disabled:opacity-40 transition cursor-pointer"
                  title="Move selected questions to another chapter"
                >
                  <FolderInput className="w-3.5 h-3.5 text-blue-400" />
                  <span>Move</span>
                </button>

                {/* Add All to QP */}
                <button
                  type="button"
                  disabled={selectedQuestionIds.length === 0}
                  onClick={handleBatchAddToPaper}
                  className="text-xs font-bold px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg flex items-center gap-1.5 disabled:opacity-40 transition cursor-pointer shadow"
                  title="Stage selected questions into manual paper"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add to QP</span>
                </button>

                {/* Export Selected CSV */}
                <button
                  type="button"
                  disabled={selectedQuestionIds.length === 0}
                  onClick={handleExportSelectedCSV}
                  className="text-xs font-bold px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 rounded-lg flex items-center gap-1.5 disabled:opacity-40 transition cursor-pointer"
                  title="Download selected questions as CSV"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>CSV</span>
                </button>

                {/* Batch Delete */}
                <button
                  type="button"
                  disabled={selectedQuestionIds.length === 0}
                  onClick={() => setShowBatchDeleteModal(true)}
                  className="text-xs font-bold px-3 py-1.5 bg-rose-800 hover:bg-rose-700 text-white rounded-lg flex items-center gap-1.5 disabled:opacity-40 transition cursor-pointer shadow"
                  title="Batch delete selected questions"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete</span>
                </button>

                {/* Exit Bulk Mode */}
                <button
                  type="button"
                  onClick={() => {
                    setIsBulkEditMode(false);
                    setSelectedQuestionIds([]);
                  }}
                  className="text-xs font-bold px-2 py-1.5 text-slate-400 hover:text-white rounded-lg transition cursor-pointer"
                  title="Exit Bulk Edit Mode"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Batch Tag / Attributes Update Modal */}
      {showBatchTagModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 space-y-4 my-8 border border-stone-200 text-xs">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <h3 className="font-bold text-base text-stone-900 flex items-center gap-2">
                <Tag className="w-5 h-5 text-amber-600" />
                Batch Update Attributes ({selectedQuestionIds.length} Questions)
              </h3>
              <button
                onClick={() => setShowBatchTagModal(false)}
                className="text-stone-400 hover:text-stone-700 text-lg font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              {/* Book Back Tag */}
              <div className="flex items-center justify-between p-3 bg-stone-50 rounded-xl border border-stone-200">
                <div>
                  <p className="font-bold text-stone-800">Book-Back Question Tag</p>
                  <p className="text-[11px] text-stone-500">Mark questions as official textbook back exercise</p>
                </div>
                <select
                  value={batchTagBookBack}
                  onChange={e => setBatchTagBookBack(e.target.value as any)}
                  className="bg-white border border-stone-300 rounded px-2.5 py-1 text-xs font-bold text-stone-800"
                >
                  <option value="keep">Keep Existing</option>
                  <option value="yes">Set YES (Book-Back)</option>
                  <option value="no">Set NO (Outside/Self)</option>
                </select>
              </div>

              {/* Compulsory Tag */}
              <div className="flex items-center justify-between p-3 bg-stone-50 rounded-xl border border-stone-200">
                <div>
                  <p className="font-bold text-stone-800">Compulsory Candidate</p>
                  <p className="text-[11px] text-stone-500">Eligible for mandatory compulsory question slot (Q24/Q33)</p>
                </div>
                <select
                  value={batchTagCompulsory}
                  onChange={e => setBatchTagCompulsory(e.target.value as any)}
                  className="bg-white border border-stone-300 rounded px-2.5 py-1 text-xs font-bold text-stone-800"
                >
                  <option value="keep">Keep Existing</option>
                  <option value="yes">Set YES (Compulsory Eligible)</option>
                  <option value="no">Set NO (Standard Question)</option>
                </select>
              </div>

              {/* Creative Tag */}
              <div className="flex items-center justify-between p-3 bg-stone-50 rounded-xl border border-stone-200">
                <div>
                  <p className="font-bold text-stone-800">Creative / Application Question</p>
                  <p className="text-[11px] text-stone-500">Mark as conceptual thinking or problem-solving</p>
                </div>
                <select
                  value={batchTagCreative}
                  onChange={e => setBatchTagCreative(e.target.value as any)}
                  className="bg-white border border-stone-300 rounded px-2.5 py-1 text-xs font-bold text-stone-800"
                >
                  <option value="keep">Keep Existing</option>
                  <option value="yes">Set YES (Creative)</option>
                  <option value="no">Set NO (Direct Theory)</option>
                </select>
              </div>

              {/* Custom Tag */}
              <div className="space-y-1.5 p-3 bg-stone-50 rounded-xl border border-stone-200">
                <label className="font-bold text-stone-800 block">Add Custom Keyword / Sub-Topic Tag</label>
                <input
                  type="text"
                  placeholder="e.g. Unit Test 1, Revision 2026, Important Formula..."
                  value={batchCustomTag}
                  onChange={e => setBatchCustomTag(e.target.value)}
                  className="w-full p-2 bg-white border border-stone-300 rounded text-xs"
                />
                <p className="text-[10px] text-stone-400">This tag will be appended to the tag list of all selected questions.</p>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t border-stone-200">
              <button
                type="button"
                onClick={() => setShowBatchTagModal(false)}
                className="px-4 py-2 border border-stone-300 rounded-lg text-stone-700 hover:bg-stone-100 font-semibold cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleBatchUpdateTags}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-bold cursor-pointer shadow"
              >
                Apply Attributes to {selectedQuestionIds.length} Questions
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Batch Move Chapter Modal */}
      {showBatchMoveModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 space-y-4 my-8 border border-stone-200 text-xs">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <h3 className="font-bold text-base text-stone-900 flex items-center gap-2">
                <FolderInput className="w-5 h-5 text-blue-600" />
                Move Questions to Chapter
              </h3>
              <button
                onClick={() => setShowBatchMoveModal(false)}
                className="text-stone-400 hover:text-stone-700 text-lg font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <p className="text-stone-600">
                Select the target chapter where you want to reassign all <strong>{selectedQuestionIds.length}</strong> selected questions:
              </p>

              <select
                value={batchMoveTargetChapter}
                onChange={e => setBatchMoveTargetChapter(Number(e.target.value))}
                className="w-full p-2.5 bg-white border border-stone-300 rounded-xl text-xs font-bold text-stone-800"
              >
                {subject.chapters.map(ch => (
                  <option key={ch.no} value={ch.no}>
                    Chapter {ch.no}: {ch.name} {ch.nameTamil ? `(${ch.nameTamil})` : ''}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t border-stone-200">
              <button
                type="button"
                onClick={() => setShowBatchMoveModal(false)}
                className="px-4 py-2 border border-stone-300 rounded-lg text-stone-700 hover:bg-stone-100 font-semibold cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleBatchMoveChapter}
                className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-bold cursor-pointer shadow"
              >
                Move {selectedQuestionIds.length} Questions
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Batch Delete Confirmation Modal */}
      {showBatchDeleteModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 space-y-4 my-8 border border-rose-200 text-xs">
            <div className="flex items-center gap-3 text-rose-700 border-b border-stone-200 pb-3">
              <div className="p-2 bg-rose-100 rounded-xl shrink-0">
                <AlertTriangle className="w-6 h-6 text-rose-600" />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-stone-900">
                  Delete {selectedQuestionIds.length} Questions?
                </h3>
                <p className="text-[11px] text-stone-500">This batch action is irreversible.</p>
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed">
              Are you sure you want to permanently delete <strong>{selectedQuestionIds.length}</strong> selected questions from <strong>{subject.name}</strong>?
            </p>

            <div className="flex justify-end gap-2 pt-3 border-t border-stone-200">
              <button
                type="button"
                onClick={() => setShowBatchDeleteModal(false)}
                className="px-4 py-2 border border-stone-300 rounded-lg text-stone-700 hover:bg-stone-100 font-semibold cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmBatchDelete}
                className="px-4 py-2 bg-rose-700 hover:bg-rose-800 text-white rounded-lg font-bold cursor-pointer shadow flex items-center gap-1.5"
              >
                <Trash2 className="w-4 h-4" />
                <span>Yes, Delete Questions</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Custom Question Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6 space-y-4 my-8 border border-stone-200">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <h3 className="font-bold text-base text-stone-900 flex items-center gap-2">
                <Plus className="w-5 h-5 text-red-800" />
                Add Custom Question to Bank
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-stone-400 hover:text-stone-700 text-lg font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveCustomQuestion} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">Select Chapter</label>
                  <select
                    value={newQChapterNo}
                    onChange={e => setNewQChapterNo(Number(e.target.value))}
                    className="w-full p-2 border border-stone-300 rounded bg-white"
                  >
                    {subject.chapters.map(ch => (
                      <option key={ch.no} value={ch.no}>
                        {ch.no}. {ch.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-stone-700 mb-1">Marks Category</label>
                  <select
                    value={newQMarks}
                    onChange={e => setNewQMarks(Number(e.target.value) as MarkType)}
                    className="w-full p-2 border border-stone-300 rounded bg-white"
                  >
                    <option value={1}>1 Mark (Part I - MCQ)</option>
                    <option value={2}>2 Marks (Part II - Short Answer)</option>
                    <option value={3}>3 Marks (Part III - Brief Answer)</option>
                    <option value={5}>5 Marks (Part IV - Essay / Either-Or)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Question Statement (English)</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Type your question statement here in English..."
                  value={newQText}
                  onChange={e => setNewQText(e.target.value)}
                  className="w-full p-2 border border-stone-300 rounded"
                />
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Question Statement (Tamil - Optional)</label>
                <textarea
                  rows={2}
                  placeholder="வினாவை தமிழில் தட்டச்சு செய்க..."
                  value={newQTextTamil}
                  onChange={e => setNewQTextTamil(e.target.value)}
                  className="w-full p-2 border border-stone-300 rounded"
                />
              </div>

              {/* Options for MCQ */}
              {newQMarks === 1 && (
                <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg space-y-2">
                  <p className="font-bold text-stone-800">MCQ Options (4 Choices)</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Option A"
                      value={newOptA}
                      onChange={e => setNewOptA(e.target.value)}
                      className="p-1.5 border border-stone-300 rounded bg-white"
                      required={newQMarks === 1}
                    />
                    <input
                      type="text"
                      placeholder="Option B"
                      value={newOptB}
                      onChange={e => setNewOptB(e.target.value)}
                      className="p-1.5 border border-stone-300 rounded bg-white"
                      required={newQMarks === 1}
                    />
                    <input
                      type="text"
                      placeholder="Option C"
                      value={newOptC}
                      onChange={e => setNewOptC(e.target.value)}
                      className="p-1.5 border border-stone-300 rounded bg-white"
                      required={newQMarks === 1}
                    />
                    <input
                      type="text"
                      placeholder="Option D"
                      value={newOptD}
                      onChange={e => setNewOptD(e.target.value)}
                      className="p-1.5 border border-stone-300 rounded bg-white"
                      required={newQMarks === 1}
                    />
                  </div>

                  <div className="pt-2 flex items-center gap-2">
                    <span className="font-bold text-stone-700">Correct Option:</span>
                    {(['A', 'B', 'C', 'D'] as const).map(opt => (
                      <label key={opt} className="inline-flex items-center gap-1 font-bold text-stone-800 cursor-pointer">
                        <input
                          type="radio"
                          name="correctOption"
                          value={opt}
                          checked={newCorrectOpt === opt}
                          onChange={() => setNewCorrectOpt(opt)}
                        />
                        Option {opt}
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Answer Text */}
              <div>
                <label className="block font-bold text-stone-700 mb-1">Model Answer / Evaluation Key</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Provide key points, definitions, code, formula or full explanation..."
                  value={newAnswer}
                  onChange={e => setNewAnswer(e.target.value)}
                  className="w-full p-2 border border-stone-300 rounded font-mono text-xs"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 border border-stone-300 rounded text-stone-700 hover:bg-stone-100 font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-800 hover:bg-red-900 text-white rounded font-bold cursor-pointer shadow"
                >
                  Save Question
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Bulk Import Modal */}
      {showBulkModal && (
        <BulkImportModal
          isOpen={showBulkModal}
          subject={subject}
          onClose={() => setShowBulkModal(false)}
          onImportQuestions={handleBulkImportQuestions}
        />
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0f172a] text-white px-4 py-3 rounded-xl shadow-2xl border border-emerald-500/40 flex items-center gap-3 animate-fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <div>
            <p className="text-xs font-bold text-white">{toastMessage}</p>
            <p className="text-[10px] text-slate-300">Question bank updated and saved locally.</p>
          </div>
        </div>
      )}
    </div>
  );
};
