import React, { useState, useMemo, useEffect } from 'react';
import { 
  Plus, 
  Trash2, 
  ArrowUp, 
  ArrowDown, 
  CheckSquare, 
  Search, 
  Sliders, 
  Sparkles, 
  School,
  Layers,
  CheckCircle2,
  AlertCircle,
  Save,
  RotateCcw
} from 'lucide-react';
import { SubjectData, QuestionPaper, Question, MarkType, GeneratedSection, GeneratedSectionQuestion, LanguageMode } from '../types';

interface ManualGeneratorProps {
  subject: SubjectData;
  languageMode: LanguageMode;
  manualSelectedQuestions?: Question[];
  onPaperGenerated: (paper: QuestionPaper) => void;
  onSyncStagedQuestions?: (questions: Question[]) => void;
}

export const ManualGenerator: React.FC<ManualGeneratorProps> = ({
  subject,
  languageMode,
  manualSelectedQuestions = [],
  onPaperGenerated,
  onSyncStagedQuestions
}) => {
  // Load initial settings draft if available
  const savedSettingsDraft = useMemo(() => {
    try {
      const draft = localStorage.getItem('manualDraftSettings');
      return draft ? JSON.parse(draft) : null;
    } catch {
      return null;
    }
  }, []);

  // Target Blueprint Counts
  const [p1Target, setP1Target] = useState(savedSettingsDraft?.p1Target ?? 10);
  const [p2GiveTarget, setP2GiveTarget] = useState(savedSettingsDraft?.p2GiveTarget ?? 7);
  const [p2AnswerTarget, setP2AnswerTarget] = useState(savedSettingsDraft?.p2AnswerTarget ?? 5);
  const [p2CompulsoryNo, setP2CompulsoryNo] = useState<number | undefined>(savedSettingsDraft?.p2CompulsoryNo ?? 17);

  const [p3GiveTarget, setP3GiveTarget] = useState(savedSettingsDraft?.p3GiveTarget ?? 7);
  const [p3AnswerTarget, setP3AnswerTarget] = useState(savedSettingsDraft?.p3AnswerTarget ?? 5);
  const [p3CompulsoryNo, setP3CompulsoryNo] = useState<number | undefined>(savedSettingsDraft?.p3CompulsoryNo ?? 24);

  const [p4PairsTarget, setP4PairsTarget] = useState(savedSettingsDraft?.p4PairsTarget ?? 3);

  // Exam Details
  const [schoolName, setSchoolName] = useState(savedSettingsDraft?.schoolName ?? 'HIGHER SECONDARY SCHOOL');
  const [examName, setExamName] = useState(savedSettingsDraft?.examName ?? 'FIRST MID-TERM EXAMINATION - 2026');
  const [timeAllowed, setTimeAllowed] = useState(savedSettingsDraft?.timeAllowed ?? '2.00 Hours');
  const [examDate, setExamDate] = useState(savedSettingsDraft?.examDate ?? new Date().toISOString().split('T')[0]);

  // Load initial questions from localStorage or props
  const initialQuestions = useMemo(() => {
    try {
      const stored = localStorage.getItem('manualStagedQuestions');
      const parsed: Question[] = stored ? JSON.parse(stored) : [];
      // Combine with props, deduplicating by ID
      const map = new Map<string, Question>();
      parsed.forEach(q => map.set(q.id, q));
      manualSelectedQuestions.forEach(q => map.set(q.id, q));
      return Array.from(map.values());
    } catch {
      return manualSelectedQuestions;
    }
  }, []);

  // Selected Questions in buckets
  const [part1List, setPart1List] = useState<Question[]>(() => 
    initialQuestions.filter(q => q.marks === 1)
  );
  const [part2List, setPart2List] = useState<Question[]>(() => 
    initialQuestions.filter(q => q.marks === 2)
  );
  const [part3List, setPart3List] = useState<Question[]>(() => 
    initialQuestions.filter(q => q.marks === 3)
  );
  const [part4List, setPart4List] = useState<Question[]>(() => 
    initialQuestions.filter(q => q.marks === 5)
  );

  const [lastAutoSavedTime, setLastAutoSavedTime] = useState<string>('Just now');
  const [isSaved, setIsSaved] = useState<boolean>(true);

  // Sync new manualSelectedQuestions when prop updates
  useEffect(() => {
    if (manualSelectedQuestions.length > 0) {
      manualSelectedQuestions.forEach(q => {
        if (q.marks === 1) {
          setPart1List(prev => prev.some(item => item.id === q.id) ? prev : [...prev, q]);
        } else if (q.marks === 2) {
          setPart2List(prev => prev.some(item => item.id === q.id) ? prev : [...prev, q]);
        } else if (q.marks === 3) {
          setPart3List(prev => prev.some(item => item.id === q.id) ? prev : [...prev, q]);
        } else if (q.marks === 5) {
          setPart4List(prev => prev.some(item => item.id === q.id) ? prev : [...prev, q]);
        }
      });
    }
  }, [manualSelectedQuestions]);

  // Auto-save staged questions to localStorage
  useEffect(() => {
    try {
      const allStaged = [...part1List, ...part2List, ...part3List, ...part4List];
      localStorage.setItem('manualStagedQuestions', JSON.stringify(allStaged));
      
      const draftSettings = {
        p1Target,
        p2GiveTarget,
        p2AnswerTarget,
        p2CompulsoryNo,
        p3GiveTarget,
        p3AnswerTarget,
        p3CompulsoryNo,
        p4PairsTarget,
        schoolName,
        examName,
        timeAllowed,
        examDate
      };
      localStorage.setItem('manualDraftSettings', JSON.stringify(draftSettings));

      if (onSyncStagedQuestions) {
        onSyncStagedQuestions(allStaged);
      }

      setIsSaved(true);
      const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setLastAutoSavedTime(timeStr);
    } catch (e) {
      console.error('Auto-save error:', e);
    }
  }, [
    part1List, 
    part2List, 
    part3List, 
    part4List, 
    p1Target, 
    p2GiveTarget, 
    p2AnswerTarget, 
    p2CompulsoryNo, 
    p3GiveTarget, 
    p3AnswerTarget, 
    p3CompulsoryNo, 
    p4PairsTarget, 
    schoolName, 
    examName, 
    timeAllowed, 
    examDate
  ]);

  // Clear staged questions draft
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  const handleClearStaged = () => {
    setPart1List([]);
    setPart2List([]);
    setPart3List([]);
    setPart4List([]);
    setShowClearConfirm(false);
    try {
      localStorage.removeItem('manualStagedQuestions');
    } catch (e) {
      console.error(e);
    }
    if (onSyncStagedQuestions) onSyncStagedQuestions([]);
  };

  // Filter for Question Bank Picker
  const [pickerMarks, setPickerMarks] = useState<MarkType | 'ALL'>('ALL');
  const [pickerSearch, setPickerSearch] = useState('');
  const [pickerSelectedChapters, setPickerSelectedChapters] = useState<number[]>(
    subject.chapters.map(c => c.no)
  );

  // Custom Typed Question Form state
  const [customMarks, setCustomMarks] = useState<MarkType>(1);
  const [customQText, setCustomQText] = useState('');
  const [customOptA, setCustomOptA] = useState('');
  const [customOptB, setCustomOptB] = useState('');
  const [customOptC, setCustomOptC] = useState('');
  const [customOptD, setCustomOptD] = useState('');
  const [customCorrectOpt, setCustomCorrectOpt] = useState<'A' | 'B' | 'C' | 'D'>('A');
  const [customAnswer, setCustomAnswer] = useState('');

  // Total calculated marks
  const computedTotal = (p1Target * 1) + (p2AnswerTarget * 2) + (p3AnswerTarget * 3) + (p4PairsTarget * 5);

  // Chapter toggling
  const handleTogglePickerChapter = (chNo: number) => {
    setPickerSelectedChapters(prev =>
      prev.includes(chNo) ? prev.filter(n => n !== chNo) : [...prev, chNo]
    );
  };

  // Add question from picker to appropriate part
  const handleAddQuestionToBucket = (q: Question) => {
    if (q.marks === 1) {
      if (part1List.some(item => item.id === q.id)) return;
      setPart1List(prev => [...prev, q]);
    } else if (q.marks === 2) {
      if (part2List.some(item => item.id === q.id)) return;
      setPart2List(prev => [...prev, q]);
    } else if (q.marks === 3) {
      if (part3List.some(item => item.id === q.id)) return;
      setPart3List(prev => [...prev, q]);
    } else if (q.marks === 5) {
      if (part4List.some(item => item.id === q.id)) return;
      setPart4List(prev => [...prev, q]);
    }
  };

  // Add custom typed question
  const handleAddCustomTypedQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQText.trim()) return;

    const newQ: Question = {
      id: `manual-custom-${Date.now()}`,
      chapterNo: 1,
      chapterName: subject.chapters[0]?.name || 'General',
      marks: customMarks,
      type: customMarks === 1 ? 'mcq' : customMarks === 2 ? 'short' : customMarks === 3 ? 'brief' : 'essay',
      questionText: customQText,
      options: customMarks === 1 ? { A: customOptA, B: customOptB, C: customOptC, D: customOptD } : undefined,
      correctOption: customMarks === 1 ? customCorrectOpt : undefined,
      answer: customMarks === 1 ? `${customCorrectOpt}) ${customCorrectOpt === 'A' ? customOptA : customCorrectOpt === 'B' ? customOptB : customCorrectOpt === 'C' ? customOptC : customOptD}` : customAnswer,
      isBookBack: false,
      isCreative: true
    };

    handleAddQuestionToBucket(newQ);

    // Reset
    setCustomQText('');
    setCustomOptA('');
    setCustomOptB('');
    setCustomOptC('');
    setCustomOptD('');
    setCustomAnswer('');
  };

  // Move / Remove handlers
  const moveItem = (list: Question[], setList: React.Dispatch<React.SetStateAction<Question[]>>, index: number, direction: 'up' | 'down') => {
    const targetIdx = direction === 'up' ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= list.length) return;
    const updated = [...list];
    const temp = updated[index];
    updated[index] = updated[targetIdx];
    updated[targetIdx] = temp;
    setList(updated);
  };

  const removeItem = (setList: React.Dispatch<React.SetStateAction<Question[]>>, id: string) => {
    setList(prev => prev.filter(q => q.id !== id));
  };

  const clearAll = () => {
    setPart1List([]);
    setPart2List([]);
    setPart3List([]);
    setPart4List([]);
  };

  // Filtered Picker List
  const pickerQuestions = useMemo(() => {
    return subject.questions.filter(q => {
      if (pickerSelectedChapters.length > 0 && !pickerSelectedChapters.includes(q.chapterNo)) {
        return false;
      }
      if (pickerMarks !== 'ALL' && q.marks !== pickerMarks) {
        return false;
      }
      if (pickerSearch.trim()) {
        const query = pickerSearch.toLowerCase();
        return q.questionText.toLowerCase().includes(query) || q.answer.toLowerCase().includes(query);
      }
      return true;
    });
  }, [subject.questions, pickerSelectedChapters, pickerMarks, pickerSearch]);

  // Generate the Question Paper
  const handleFinalGenerate = (e: React.FormEvent) => {
    e.preventDefault();

    if (part1List.length === 0 && part2List.length === 0 && part3List.length === 0 && part4List.length === 0) {
      alert('Please add questions to at least one section of the paper.');
      return;
    }

    // Convert Part IV into Either/Or pairs
    const p4Questions: GeneratedSectionQuestion[] = [];
    for (let i = 0; i < part4List.length; i += 2) {
      const qA = part4List[i];
      const qB = part4List[i + 1] || qA;
      p4Questions.push({
        question: qA,
        orQuestion: qB
      });
    }

    const sections: GeneratedSection[] = [
      {
        partTitle: 'Part I',
        partTitleTamil: 'பகுதி - I',
        marksPerQuestion: 1 as MarkType,
        totalQuestionsToGive: part1List.length,
        totalQuestionsToAnswer: part1List.length,
        instruction: 'Answer all questions. Choose the most appropriate answer from the given alternatives.',
        instructionTamil: 'அனைத்து வினாக்களுக்கும் விடையளிக்கவும்.',
        questions: part1List.map(q => ({ question: q }))
      },
      {
        partTitle: 'Part II',
        partTitleTamil: 'பகுதி - II',
        marksPerQuestion: 2 as MarkType,
        totalQuestionsToGive: part2List.length,
        totalQuestionsToAnswer: p2AnswerTarget,
        compulsoryQuestionNo: p2CompulsoryNo,
        instruction: `Answer any ${p2AnswerTarget} questions. Question No. ${p2CompulsoryNo || (part1List.length + part2List.length)} is compulsory.`,
        instructionTamil: `எவையேனும் ${p2AnswerTarget} வினாக்களுக்கு விடையளிக்கவும். வினா எண் ${p2CompulsoryNo || (part1List.length + part2List.length)} கட்டாய வினாவாகும்.`,
        questions: part2List.map((q, idx) => ({
          question: q,
          isCompulsory: p2CompulsoryNo ? (part1List.length + idx + 1) === p2CompulsoryNo : idx === part2List.length - 1
        }))
      },
      {
        partTitle: 'Part III',
        partTitleTamil: 'பகுதி - III',
        marksPerQuestion: 3 as MarkType,
        totalQuestionsToGive: part3List.length,
        totalQuestionsToAnswer: p3AnswerTarget,
        compulsoryQuestionNo: p3CompulsoryNo,
        instruction: `Answer any ${p3AnswerTarget} questions. Question No. ${p3CompulsoryNo || (part1List.length + part2List.length + part3List.length)} is compulsory.`,
        instructionTamil: `எவையேனும் ${p3AnswerTarget} வினாக்களுக்கு விடையளிக்கவும். வினா எண் ${p3CompulsoryNo || (part1List.length + part2List.length + part3List.length)} கட்டாய வினாவாகும்.`,
        questions: part3List.map((q, idx) => ({
          question: q,
          isCompulsory: p3CompulsoryNo ? (part1List.length + part2List.length + idx + 1) === p3CompulsoryNo : idx === part3List.length - 1
        }))
      },
      {
        partTitle: 'Part IV',
        partTitleTamil: 'பகுதி - IV',
        marksPerQuestion: 5 as MarkType,
        totalQuestionsToGive: p4Questions.length,
        totalQuestionsToAnswer: p4Questions.length,
        instruction: 'Answer all questions. Either or type questions.',
        instructionTamil: 'அனைத்து வினாக்களுக்கும் விடையளிக்கவும். அல்லது வகை வினாக்கள்.',
        questions: p4Questions
      }
    ].filter(sec => sec.questions.length > 0);

    const newPaper: QuestionPaper = {
      id: `manual-qp-${Date.now()}`,
      title: `${examName} - ${subject.standard} ${subject.name}`,
      titleTamil: `${examName} - ${subject.standard} ${subject.nameTamil || subject.name}`,
      schoolName,
      standard: subject.standard,
      subject: subject.name,
      subjectTamil: subject.nameTamil,
      examName,
      timeAllowed,
      maxMarks: computedTotal,
      date: examDate,
      selectedChapters: pickerSelectedChapters,
      languageMode,
      paperType: 'manual',
      sections,
      createdAt: new Date().toISOString()
    };

    onPaperGenerated(newPaper);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      {/* Top Banner */}
      <div className="bg-[#1e293b] text-white rounded-xl p-5 shadow-sm space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-bold">Custom QP with Manual Selection</h2>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {/* Auto-save status */}
            <div className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700 text-slate-300 text-[11px] px-2.5 py-1 rounded">
              <Save className="w-3.5 h-3.5 text-emerald-400" />
              <span>Auto-saved at {lastAutoSavedTime}</span>
            </div>

            {(part1List.length > 0 || part2List.length > 0 || part3List.length > 0 || part4List.length > 0) && (
              showClearConfirm ? (
                <div className="flex items-center gap-1 bg-red-900 border border-red-700 text-white text-[11px] px-2 py-0.5 rounded">
                  <span className="font-semibold text-red-200">Clear all draft questions?</span>
                  <button
                    type="button"
                    onClick={handleClearStaged}
                    className="bg-red-600 hover:bg-red-500 font-bold px-2 py-0.5 rounded text-white cursor-pointer ml-1"
                  >
                    Yes, Clear
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowClearConfirm(false)}
                    className="bg-stone-700 hover:bg-stone-600 font-semibold px-2 py-0.5 rounded text-stone-200 cursor-pointer ml-0.5"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowClearConfirm(true)}
                  className="flex items-center gap-1 bg-red-950/60 hover:bg-red-900/80 text-red-300 border border-red-800 text-[11px] font-semibold px-2.5 py-1 rounded transition cursor-pointer"
                  title="Clear all staged questions"
                >
                  <RotateCcw className="w-3 h-3" />
                  Clear Draft ({part1List.length + part2List.length + part3List.length + part4List.length})
                </button>
              )
            )}

            <span className="bg-amber-400 text-stone-950 text-xs font-black px-2.5 py-1 rounded">
              Total: {computedTotal} Marks
            </span>
          </div>
        </div>
        <p className="text-xs text-slate-300">
          Hand-pick questions from the question bank, type your own custom questions, and reorder them with precision. Changes are automatically preserved in local storage.
        </p>
      </div>

      {/* 1. Configure Paper Sections (Matches Screenshot 4) */}
      <div className="bg-white border border-stone-200 rounded-xl p-5 space-y-4 shadow-sm">
        <h3 className="font-bold text-sm text-stone-900 border-b border-stone-100 pb-2">
          Configure Paper Sections
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          {/* Part I */}
          <div>
            <label className="block text-[11px] text-stone-600 font-semibold mb-1">
              Part I — No. of 1-Mark Questions
            </label>
            <input
              type="number"
              value={p1Target}
              onChange={e => setP1Target(Number(e.target.value))}
              className="w-full p-2 border border-stone-300 rounded font-bold"
            />
          </div>

          {/* Part II */}
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-[11px] text-stone-600 font-semibold mb-1">
                Part II — Qs to Give (2M)
              </label>
              <input
                type="number"
                value={p2GiveTarget}
                onChange={e => setP2GiveTarget(Number(e.target.value))}
                className="w-full p-2 border border-stone-300 rounded font-bold"
              />
            </div>
            <div>
              <label className="block text-[11px] text-stone-600 font-semibold mb-1">
                Part II — Students Answer
              </label>
              <input
                type="number"
                value={p2AnswerTarget}
                onChange={e => setP2AnswerTarget(Number(e.target.value))}
                className="w-full p-2 border border-stone-300 rounded font-bold"
              />
            </div>
            <div>
              <label className="block text-[11px] text-stone-600 font-semibold mb-1">
                Part II — Compulsory Q.No
              </label>
              <input
                type="number"
                value={p2CompulsoryNo || ''}
                onChange={e => setP2CompulsoryNo(Number(e.target.value))}
                className="w-full p-2 border border-stone-300 rounded"
              />
            </div>
          </div>

          {/* Part III */}
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-[11px] text-stone-600 font-semibold mb-1">
                Part III — Qs to Give (3M)
              </label>
              <input
                type="number"
                value={p3GiveTarget}
                onChange={e => setP3GiveTarget(Number(e.target.value))}
                className="w-full p-2 border border-stone-300 rounded font-bold"
              />
            </div>
            <div>
              <label className="block text-[11px] text-stone-600 font-semibold mb-1">
                Part III — Students Answer
              </label>
              <input
                type="number"
                value={p3AnswerTarget}
                onChange={e => setP3AnswerTarget(Number(e.target.value))}
                className="w-full p-2 border border-stone-300 rounded font-bold"
              />
            </div>
            <div>
              <label className="block text-[11px] text-stone-600 font-semibold mb-1">
                Part III — Compulsory Q.No
              </label>
              <input
                type="number"
                value={p3CompulsoryNo || ''}
                onChange={e => setP3CompulsoryNo(Number(e.target.value))}
                className="w-full p-2 border border-stone-300 rounded"
              />
            </div>
          </div>

          {/* Part IV */}
          <div>
            <label className="block text-[11px] text-stone-600 font-semibold mb-1">
              Part IV — No. of Either/Or Questions (5M)
            </label>
            <input
              type="number"
              value={p4PairsTarget}
              onChange={e => setP4PairsTarget(Number(e.target.value))}
              className="w-full p-2 border border-stone-300 rounded font-bold"
            />
          </div>
        </div>

        {/* Computed Total Marks Box */}
        <div className="pt-2">
          <label className="block text-[11px] text-stone-600 font-semibold mb-1">
            Computed Total Marks
          </label>
          <input
            type="text"
            disabled
            value={`${computedTotal}`}
            className="w-full sm:w-48 p-2 border border-stone-200 rounded bg-stone-100 font-black text-stone-800"
          />
        </div>
      </div>

      {/* 2. Select Source Chapters (Matches Screenshot 4) */}
      <div className="bg-white border border-stone-200 rounded-xl p-5 space-y-3 shadow-sm">
        <div className="flex items-center justify-between border-b border-stone-100 pb-2">
          <h3 className="font-bold text-sm text-stone-900">Select Source Chapters</h3>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPickerSelectedChapters(subject.chapters.map(c => c.no))}
              className="text-xs bg-stone-100 hover:bg-stone-200 text-stone-800 px-2.5 py-1 rounded font-medium cursor-pointer"
            >
              Select All
            </button>
            <button
              type="button"
              onClick={() => setPickerSelectedChapters([])}
              className="text-xs bg-stone-100 hover:bg-stone-200 text-stone-500 px-2.5 py-1 rounded font-medium cursor-pointer"
            >
              Deselect All
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto">
          {subject.chapters.map(ch => {
            const isSelected = pickerSelectedChapters.includes(ch.no);
            return (
              <button
                type="button"
                key={ch.no}
                onClick={() => handleTogglePickerChapter(ch.no)}
                className={`text-[11px] px-2.5 py-1 rounded-md font-medium transition cursor-pointer flex items-center gap-1 ${
                  isSelected
                    ? 'bg-red-800 text-white font-bold shadow-sm'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                <span>{ch.no}.</span>
                <span>{ch.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Pick from Question Bank (Matches Screenshot 4) */}
      <div className="bg-white border border-stone-200 rounded-xl p-5 space-y-4 shadow-sm">
        <h3 className="font-bold text-sm text-stone-900 border-b border-stone-100 pb-2">
          Pick from Question Bank
        </h3>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-semibold text-stone-600">Marks:</span>
            {(['ALL', 1, 2, 3, 5] as const).map(m => (
              <button
                key={m}
                type="button"
                onClick={() => setPickerMarks(m)}
                className={`px-3 py-1 rounded font-bold transition cursor-pointer ${
                  pickerMarks === m
                    ? 'bg-red-800 text-white shadow-sm'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {m === 'ALL' ? 'All' : `${m} Mark${m > 1 ? 's' : ''}`}
              </button>
            ))}
          </div>

          <div className="relative flex-1 max-w-sm">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search..."
              value={pickerSearch}
              onChange={e => setPickerSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 border border-stone-300 rounded text-xs"
            />
          </div>
        </div>

        {/* Picker Question List */}
        <div className="max-h-60 overflow-y-auto divide-y divide-stone-100 border border-stone-200 rounded-lg">
          {pickerQuestions.length === 0 ? (
            <p className="p-6 text-center text-xs text-stone-400">No matching questions.</p>
          ) : (
            pickerQuestions.map(q => {
              const isAlreadyIn = 
                part1List.some(item => item.id === q.id) ||
                part2List.some(item => item.id === q.id) ||
                part3List.some(item => item.id === q.id) ||
                part4List.some(item => item.id === q.id);

              return (
                <div key={q.id} className="p-3 hover:bg-stone-50 transition flex items-center justify-between gap-3 text-xs">
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[10px] bg-stone-100 px-1.5 py-0.2 rounded text-stone-700">
                        {q.marks}M
                      </span>
                      <span className="text-[10px] text-stone-400">
                        Ch {q.chapterNo}. {q.chapterName}
                      </span>
                    </div>
                    <p className="font-medium text-stone-900 truncate">
                      {q.questionText}
                    </p>
                  </div>

                  <button
                    type="button"
                    disabled={isAlreadyIn}
                    onClick={() => handleAddQuestionToBucket(q)}
                    className={`px-3 py-1 rounded text-xs font-bold shrink-0 transition cursor-pointer ${
                      isAlreadyIn
                        ? 'bg-stone-100 text-stone-400 cursor-not-allowed'
                        : 'bg-red-800 hover:bg-red-900 text-white'
                    }`}
                  >
                    {isAlreadyIn ? 'Added' : '+ Pick'}
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* 4. Add a Custom Typed Question (Matches Screenshot 4 & 5) */}
      <div className="bg-white border border-stone-200 rounded-xl p-5 space-y-4 shadow-sm">
        <h3 className="font-bold text-sm text-stone-900 border-b border-stone-100 pb-2 flex items-center gap-1.5">
          <Plus className="w-4 h-4 text-red-800" />
          + Add a Custom Typed Question
        </h3>

        <div className="space-y-3 text-xs">
          <div>
            <label className="block text-stone-600 font-semibold mb-1">Marks</label>
            <select
              value={customMarks}
              onChange={e => setCustomMarks(Number(e.target.value) as MarkType)}
              className="w-full sm:w-60 p-2 border border-stone-300 rounded bg-white font-medium"
            >
              <option value={1}>1 Mark (MCQ)</option>
              <option value={2}>2 Marks (Short Answer)</option>
              <option value={3}>3 Marks (Brief Answer)</option>
              <option value={5}>5 Marks (Essay / Either-Or)</option>
            </select>
          </div>

          <div>
            <label className="block text-stone-600 font-semibold mb-1">Question Text</label>
            <textarea
              rows={2}
              placeholder="Type your custom question here..."
              value={customQText}
              onChange={e => setCustomQText(e.target.value)}
              className="w-full p-2 border border-stone-300 rounded font-medium"
            />
          </div>

          {customMarks === 1 && (
            <div className="space-y-3 p-3 bg-stone-50 border border-stone-200 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] text-stone-600 mb-1">Option A</label>
                  <input
                    type="text"
                    value={customOptA}
                    onChange={e => setCustomOptA(e.target.value)}
                    className="w-full p-1.5 border border-stone-300 rounded bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-stone-600 mb-1">Option B</label>
                  <input
                    type="text"
                    value={customOptB}
                    onChange={e => setCustomOptB(e.target.value)}
                    className="w-full p-1.5 border border-stone-300 rounded bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-stone-600 mb-1">Option C</label>
                  <input
                    type="text"
                    value={customOptC}
                    onChange={e => setCustomOptC(e.target.value)}
                    className="w-full p-1.5 border border-stone-300 rounded bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-stone-600 mb-1">Option D</label>
                  <input
                    type="text"
                    value={customOptD}
                    onChange={e => setCustomOptD(e.target.value)}
                    className="w-full p-1.5 border border-stone-300 rounded bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] text-stone-600 mb-1 font-semibold">
                  Correct Option (for 1-Mark only)
                </label>
                <select
                  value={customCorrectOpt}
                  onChange={e => setCustomCorrectOpt(e.target.value as any)}
                  className="w-full sm:w-40 p-1.5 border border-stone-300 rounded bg-white font-bold"
                >
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </select>
              </div>
            </div>
          )}

          <div>
            <label className="block text-stone-600 font-semibold mb-1">
              Answer Text (for 2/3/5-Mark questions)
            </label>
            <textarea
              rows={2}
              placeholder="Type the model answer here..."
              value={customAnswer}
              onChange={e => setCustomAnswer(e.target.value)}
              className="w-full p-2 border border-stone-300 rounded font-mono text-xs"
            />
          </div>

          <button
            type="button"
            onClick={handleAddCustomTypedQuestion}
            className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded shadow transition cursor-pointer"
          >
            + Add This Question
          </button>
        </div>
      </div>

      {/* 5. Selected Question Buckets (Matches Screenshot 5) */}
      <div className="space-y-4">
        {/* Part I Bucket */}
        <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm">
          <div className="bg-stone-100 px-4 py-2.5 border-b border-stone-200 flex items-center justify-between">
            <h4 className="font-bold text-xs text-stone-900">
              Part I — 1 Mark (reorder with ▲▼) — Selected {part1List.length}/{p1Target}
            </h4>
            <span className="text-[11px] font-bold text-red-800">{part1List.length * 1} Marks</span>
          </div>

          <div className="p-3">
            {part1List.length === 0 ? (
              <p className="text-xs text-stone-400 py-4 text-center">No questions added yet for this part</p>
            ) : (
              <div className="space-y-2">
                {part1List.map((q, idx) => (
                  <div key={q.id} className="p-2.5 bg-stone-50 border border-stone-200 rounded flex items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="font-bold text-stone-500">{idx + 1}.</span>
                      <p className="truncate font-medium text-stone-900">{q.questionText}</p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => moveItem(part1List, setPart1List, idx, 'up')}
                        disabled={idx === 0}
                        className="p-1 hover:bg-stone-200 rounded text-stone-600 disabled:opacity-30 cursor-pointer"
                      >
                        <ArrowUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => moveItem(part1List, setPart1List, idx, 'down')}
                        disabled={idx === part1List.length - 1}
                        className="p-1 hover:bg-stone-200 rounded text-stone-600 disabled:opacity-30 cursor-pointer"
                      >
                        <ArrowDown className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeItem(setPart1List, q.id)}
                        className="p-1 hover:bg-red-100 rounded text-red-700 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Part II Bucket */}
        <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm">
          <div className="bg-stone-100 px-4 py-2.5 border-b border-stone-200 flex items-center justify-between">
            <h4 className="font-bold text-xs text-stone-900">
              Part II — 2 Marks (reorder with ▲▼) — Selected {part2List.length}/{p2GiveTarget}
            </h4>
            <span className="text-[11px] font-bold text-red-800">{p2AnswerTarget * 2} Marks</span>
          </div>

          <div className="p-3">
            {part2List.length === 0 ? (
              <p className="text-xs text-stone-400 py-4 text-center">No questions added yet for this part</p>
            ) : (
              <div className="space-y-2">
                {part2List.map((q, idx) => (
                  <div key={q.id} className="p-2.5 bg-stone-50 border border-stone-200 rounded flex items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="font-bold text-stone-500">{p1Target + idx + 1}.</span>
                      <p className="truncate font-medium text-stone-900">{q.questionText}</p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => moveItem(part2List, setPart2List, idx, 'up')}
                        disabled={idx === 0}
                        className="p-1 hover:bg-stone-200 rounded text-stone-600 disabled:opacity-30 cursor-pointer"
                      >
                        <ArrowUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => moveItem(part2List, setPart2List, idx, 'down')}
                        disabled={idx === part2List.length - 1}
                        className="p-1 hover:bg-stone-200 rounded text-stone-600 disabled:opacity-30 cursor-pointer"
                      >
                        <ArrowDown className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeItem(setPart2List, q.id)}
                        className="p-1 hover:bg-red-100 rounded text-red-700 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Part III Bucket */}
        <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm">
          <div className="bg-stone-100 px-4 py-2.5 border-b border-stone-200 flex items-center justify-between">
            <h4 className="font-bold text-xs text-stone-900">
              Part III — 3 Marks (reorder with ▲▼) — Selected {part3List.length}/{p3GiveTarget}
            </h4>
            <span className="text-[11px] font-bold text-red-800">{p3AnswerTarget * 3} Marks</span>
          </div>

          <div className="p-3">
            {part3List.length === 0 ? (
              <p className="text-xs text-stone-400 py-4 text-center">No questions added yet for this part</p>
            ) : (
              <div className="space-y-2">
                {part3List.map((q, idx) => (
                  <div key={q.id} className="p-2.5 bg-stone-50 border border-stone-200 rounded flex items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="font-bold text-stone-500">{p1Target + p2GiveTarget + idx + 1}.</span>
                      <p className="truncate font-medium text-stone-900">{q.questionText}</p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => moveItem(part3List, setPart3List, idx, 'up')}
                        disabled={idx === 0}
                        className="p-1 hover:bg-stone-200 rounded text-stone-600 disabled:opacity-30 cursor-pointer"
                      >
                        <ArrowUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => moveItem(part3List, setPart3List, idx, 'down')}
                        disabled={idx === part3List.length - 1}
                        className="p-1 hover:bg-stone-200 rounded text-stone-600 disabled:opacity-30 cursor-pointer"
                      >
                        <ArrowDown className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeItem(setPart3List, q.id)}
                        className="p-1 hover:bg-red-100 rounded text-red-700 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Part IV Bucket */}
        <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm">
          <div className="bg-stone-100 px-4 py-2.5 border-b border-stone-200 flex items-center justify-between">
            <h4 className="font-bold text-xs text-stone-900">
              Part IV — 5 Marks, either/or pairs (reorder with ▲▼; pairs of 2 consecutive = one either/or question) — Selected {part4List.length}/{p4PairsTarget * 2}
            </h4>
            <span className="text-[11px] font-bold text-red-800">{p4PairsTarget * 5} Marks</span>
          </div>

          <div className="p-3">
            {part4List.length === 0 ? (
              <p className="text-xs text-stone-400 py-4 text-center">No questions added yet for this part</p>
            ) : (
              <div className="space-y-2">
                {part4List.map((q, idx) => (
                  <div key={q.id} className="p-2.5 bg-stone-50 border border-stone-200 rounded flex items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="font-bold text-stone-500">
                        {Math.floor(idx / 2) + 1} {idx % 2 === 0 ? '(A)' : '(OR B)'}:
                      </span>
                      <p className="truncate font-medium text-stone-900">{q.questionText}</p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => moveItem(part4List, setPart4List, idx, 'up')}
                        disabled={idx === 0}
                        className="p-1 hover:bg-stone-200 rounded text-stone-600 disabled:opacity-30 cursor-pointer"
                      >
                        <ArrowUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => moveItem(part4List, setPart4List, idx, 'down')}
                        disabled={idx === part4List.length - 1}
                        className="p-1 hover:bg-stone-200 rounded text-stone-600 disabled:opacity-30 cursor-pointer"
                      >
                        <ArrowDown className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeItem(setPart4List, q.id)}
                        className="p-1 hover:bg-red-100 rounded text-red-700 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={clearAll}
          className="text-xs text-stone-500 hover:text-red-700 font-semibold underline cursor-pointer"
        >
          Clear All Selections
        </button>
      </div>

      {/* 6. Exam Header inputs & Final Generate Button (Matches Screenshot 5 bottom) */}
      <div className="bg-white border border-stone-200 rounded-xl p-5 space-y-4 shadow-sm">
        <h3 className="font-bold text-sm text-stone-900 border-b border-stone-100 pb-2">
          Exam Header & Final Generation
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div>
            <label className="block text-stone-600 font-semibold mb-1">School Name</label>
            <input
              type="text"
              value={schoolName}
              onChange={e => setSchoolName(e.target.value)}
              className="w-full p-2 border border-stone-300 rounded"
            />
          </div>
          <div>
            <label className="block text-stone-600 font-semibold mb-1">Exam Title</label>
            <input
              type="text"
              value={examName}
              onChange={e => setExamName(e.target.value)}
              className="w-full p-2 border border-stone-300 rounded"
            />
          </div>
          <div>
            <label className="block text-stone-600 font-semibold mb-1">Time Allowed</label>
            <input
              type="text"
              value={timeAllowed}
              onChange={e => setTimeAllowed(e.target.value)}
              className="w-full p-2 border border-stone-300 rounded"
            />
          </div>
          <div>
            <label className="block text-stone-600 font-semibold mb-1">Date</label>
            <input
              type="date"
              value={examDate}
              onChange={e => setExamDate(e.target.value)}
              className="w-full p-2 border border-stone-300 rounded"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={handleFinalGenerate}
          className="w-full py-3 bg-red-800 hover:bg-red-900 text-white font-extrabold text-sm rounded-xl shadow-lg transition cursor-pointer flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          Generate Manual Question Paper & Answer Key ({computedTotal} Marks) →
        </button>
      </div>
    </div>
  );
};
