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
  RotateCcw,
  ArrowLeft,
  FileSpreadsheet,
  BookOpen,
  Home,
  Shuffle
} from 'lucide-react';
import { SubjectData, QuestionPaper, Question, MarkType, GeneratedSection, GeneratedSectionQuestion, LanguageMode } from '../types';

interface ManualGeneratorProps {
  subject: SubjectData;
  languageMode: LanguageMode;
  manualSelectedQuestions?: Question[];
  onPaperGenerated: (paper: QuestionPaper) => void;
  onSyncStagedQuestions?: (questions: Question[]) => void;
  onBack?: () => void;
  onNavigate?: (view: string) => void;
  mode?: 'manual-simple' | 'custom-manual';
}

export const ManualGenerator: React.FC<ManualGeneratorProps> = ({
  subject,
  languageMode,
  manualSelectedQuestions = [],
  onPaperGenerated,
  onSyncStagedQuestions,
  onBack,
  onNavigate,
  mode = 'custom-manual'
}) => {
  const isManualSimple = mode === 'manual-simple';

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

  const [selectedMedium, setSelectedMedium] = useState<LanguageMode>(languageMode);

  // Sync with prop if languageMode changes
  useEffect(() => {
    setSelectedMedium(languageMode);
  }, [languageMode]);

  // Exam Details
  const defaultExamTitle = isManualSimple 
    ? 'CLASS SLIP TEST / UNIT ASSESSMENT - 2026'
    : 'FIRST MID-TERM EXAMINATION - 2026';

  const defaultTimeAllowed = isManualSimple
    ? '1.30 Hours'
    : '2.00 Hours';

  const [schoolName, setSchoolName] = useState(savedSettingsDraft?.schoolName ?? 'HIGHER SECONDARY SCHOOL');
  const [examName, setExamName] = useState(savedSettingsDraft?.examName ?? defaultExamTitle);
  const [timeAllowed, setTimeAllowed] = useState(savedSettingsDraft?.timeAllowed ?? defaultTimeAllowed);
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
  const [shuffleToast, setShuffleToast] = useState(false);

  const handleShuffleQuestions = () => {
    const totalStaged = part1List.length + part2List.length + part3List.length + part4List.length;
    if (totalStaged === 0) return;

    const shuffleArray = <T,>(arr: T[]): T[] => {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    };

    setPart1List(prev => (prev.length > 1 ? shuffleArray(prev) : prev));
    setPart2List(prev => (prev.length > 1 ? shuffleArray(prev) : prev));
    setPart3List(prev => (prev.length > 1 ? shuffleArray(prev) : prev));
    setPart4List(prev => (prev.length > 1 ? shuffleArray(prev) : prev));

    setShuffleToast(true);
    setTimeout(() => setShuffleToast(false), 3000);
  };

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

  // Staged and Blueprint calculated totals
  const stagedTotal = (part1List.length * 1) + (part2List.length * 2) + (part3List.length * 3) + (part4List.length * 5);
  const blueprintTotal = (p1Target * 1) + (p2AnswerTarget * 2) + (p3AnswerTarget * 3) + (p4PairsTarget * 5);
  const computedTotal = isManualSimple ? stagedTotal : blueprintTotal;

  // Quick Preset Presets
  const applyPreset = (marks: 25 | 50 | 70) => {
    if (marks === 25) {
      setP1Target(5);
      setP2GiveTarget(4);
      setP2AnswerTarget(3);
      setP2CompulsoryNo(9);
      setP3GiveTarget(4);
      setP3AnswerTarget(3);
      setP3CompulsoryNo(13);
      setP4PairsTarget(1);
      setTimeAllowed('1.30 Hours');
      setExamName('UNIT TEST - 2026');
    } else if (marks === 50) {
      setP1Target(10);
      setP2GiveTarget(7);
      setP2AnswerTarget(5);
      setP2CompulsoryNo(17);
      setP3GiveTarget(7);
      setP3AnswerTarget(5);
      setP3CompulsoryNo(24);
      setP4PairsTarget(3);
      setTimeAllowed('2.00 Hours');
      setExamName('FIRST MID-TERM EXAMINATION - 2026');
    } else if (marks === 70) {
      setP1Target(15);
      setP2GiveTarget(9);
      setP2AnswerTarget(6);
      setP2CompulsoryNo(24);
      setP3GiveTarget(9);
      setP3AnswerTarget(6);
      setP3CompulsoryNo(33);
      setP4PairsTarget(5);
      setTimeAllowed('3.00 Hours');
      setExamName('MODEL EXAMINATION - 2026');
    }
  };

  // Chapter toggling
  const handleTogglePickerChapter = (chNo: number) => {
    setPickerSelectedChapters(prev =>
      prev.includes(chNo) ? prev.filter(n => n !== chNo) : [...prev, chNo]
    );
  };

  // Auto-fill missing questions for buckets from selected chapters
  const handleAutoFillRemaining = () => {
    const chapters = pickerSelectedChapters.length > 0 ? pickerSelectedChapters : subject.chapters.map(c => c.no);
    const pool = subject.questions.filter(q => chapters.includes(q.chapterNo));
    
    // Existing IDs
    const existingIds = new Set([...part1List, ...part2List, ...part3List, ...part4List].map(q => q.id));

    // Part I
    const neededP1 = Math.max(0, p1Target - part1List.length);
    if (neededP1 > 0) {
      const avail1 = pool.filter(q => q.marks === 1 && !existingIds.has(q.id));
      const shuffled1 = [...avail1].sort(() => 0.5 - Math.random()).slice(0, neededP1);
      shuffled1.forEach(q => existingIds.add(q.id));
      setPart1List(prev => [...prev, ...shuffled1]);
    }

    // Part II
    const neededP2 = Math.max(0, p2GiveTarget - part2List.length);
    if (neededP2 > 0) {
      const avail2 = pool.filter(q => q.marks === 2 && !existingIds.has(q.id));
      const shuffled2 = [...avail2].sort(() => 0.5 - Math.random()).slice(0, neededP2);
      shuffled2.forEach(q => existingIds.add(q.id));
      setPart2List(prev => [...prev, ...shuffled2]);
    }

    // Part III
    const neededP3 = Math.max(0, p3GiveTarget - part3List.length);
    if (neededP3 > 0) {
      const avail3 = pool.filter(q => q.marks === 3 && !existingIds.has(q.id));
      const shuffled3 = [...avail3].sort(() => 0.5 - Math.random()).slice(0, neededP3);
      shuffled3.forEach(q => existingIds.add(q.id));
      setPart3List(prev => [...prev, ...shuffled3]);
    }

    // Part IV (Either / Or pairs require 2 questions per pair)
    const neededP4 = Math.max(0, (p4PairsTarget * 2) - part4List.length);
    if (neededP4 > 0) {
      const avail5 = pool.filter(q => q.marks === 5 && !existingIds.has(q.id));
      const shuffled5 = [...avail5].sort(() => 0.5 - Math.random()).slice(0, neededP4);
      shuffled5.forEach(q => existingIds.add(q.id));
      setPart4List(prev => [...prev, ...shuffled5]);
    }
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

    const chapters = pickerSelectedChapters.length > 0 ? pickerSelectedChapters : subject.chapters.map(c => c.no);
    const pool = subject.questions.filter(q => chapters.includes(q.chapterNo));
    const usedIds = new Set<string>();

    let finalP1: Question[] = [];
    let finalP2: Question[] = [];
    let finalP3: Question[] = [];
    let finalP4: Question[] = [];

    if (isManualSimple) {
      // In Simple Manual Mode: use exactly what the user picked
      finalP1 = [...part1List];
      finalP2 = [...part2List];
      finalP3 = [...part3List];
      finalP4 = [...part4List];

      if (finalP1.length === 0 && finalP2.length === 0 && finalP3.length === 0 && finalP4.length === 0) {
        alert(selectedMedium === 'tamil' ? 'வினாத்தாளை உருவாக்க வினா வங்கியிலிருந்து வினாக்களைத் தேர்வு செய்யவும்.' : 'Please pick at least one question from the question bank to generate the paper.');
        return;
      }
    } else {
      // In Custom Manual Mode: use section targets and auto-fill if needed
      finalP1 = [...part1List];
      if (finalP1.length < p1Target) {
        const needed = p1Target - finalP1.length;
        finalP1.forEach(q => usedIds.add(q.id));
        const pool1 = pool.filter(q => q.marks === 1 && !usedIds.has(q.id));
        const fallback1 = subject.questions.filter(q => q.marks === 1 && !usedIds.has(q.id));
        const candidates = pool1.length >= needed ? pool1 : [...pool1, ...fallback1];
        const autoAdded = [...candidates].sort(() => 0.5 - Math.random()).slice(0, needed);
        autoAdded.forEach(q => usedIds.add(q.id));
        finalP1 = [...finalP1, ...autoAdded];
      } else if (p1Target > 0 && finalP1.length > p1Target) {
        finalP1 = finalP1.slice(0, p1Target);
      }
      finalP1.forEach(q => usedIds.add(q.id));

      finalP2 = [...part2List];
      if (finalP2.length < p2GiveTarget) {
        const needed = p2GiveTarget - finalP2.length;
        finalP2.forEach(q => usedIds.add(q.id));
        const pool2 = pool.filter(q => q.marks === 2 && !usedIds.has(q.id));
        const fallback2 = subject.questions.filter(q => q.marks === 2 && !usedIds.has(q.id));
        const candidates = pool2.length >= needed ? pool2 : [...pool2, ...fallback2];
        const autoAdded = [...candidates].sort(() => 0.5 - Math.random()).slice(0, needed);
        autoAdded.forEach(q => usedIds.add(q.id));
        finalP2 = [...finalP2, ...autoAdded];
      } else if (p2GiveTarget > 0 && finalP2.length > p2GiveTarget) {
        finalP2 = finalP2.slice(0, p2GiveTarget);
      }
      finalP2.forEach(q => usedIds.add(q.id));

      finalP3 = [...part3List];
      if (finalP3.length < p3GiveTarget) {
        const needed = p3GiveTarget - finalP3.length;
        finalP3.forEach(q => usedIds.add(q.id));
        const pool3 = pool.filter(q => q.marks === 3 && !usedIds.has(q.id));
        const fallback3 = subject.questions.filter(q => q.marks === 3 && !usedIds.has(q.id));
        const candidates = pool3.length >= needed ? pool3 : [...pool3, ...fallback3];
        const autoAdded = [...candidates].sort(() => 0.5 - Math.random()).slice(0, needed);
        autoAdded.forEach(q => usedIds.add(q.id));
        finalP3 = [...finalP3, ...autoAdded];
      } else if (p3GiveTarget > 0 && finalP3.length > p3GiveTarget) {
        finalP3 = finalP3.slice(0, p3GiveTarget);
      }
      finalP3.forEach(q => usedIds.add(q.id));

      finalP4 = [...part4List];
      const neededP4Total = p4PairsTarget * 2;
      if (finalP4.length < neededP4Total) {
        const needed = neededP4Total - finalP4.length;
        finalP4.forEach(q => usedIds.add(q.id));
        const pool5 = pool.filter(q => q.marks === 5 && !usedIds.has(q.id));
        const fallback5 = subject.questions.filter(q => q.marks === 5 && !usedIds.has(q.id));
        const candidates = pool5.length >= needed ? pool5 : [...pool5, ...fallback5];
        const autoAdded = [...candidates].sort(() => 0.5 - Math.random()).slice(0, needed);
        autoAdded.forEach(q => usedIds.add(q.id));
        finalP4 = [...finalP4, ...autoAdded];
      } else if (neededP4Total > 0 && finalP4.length > neededP4Total) {
        finalP4 = finalP4.slice(0, neededP4Total);
      }

      if (finalP1.length === 0 && finalP2.length === 0 && finalP3.length === 0 && finalP4.length === 0) {
        alert(selectedMedium === 'tamil' ? 'தயவுசெய்து வினாக்களைத் தேர்வு செய்யவும்.' : 'Please add questions or select chapters to generate the paper.');
        return;
      }
    }

    // Convert Part IV into Either/Or pairs or direct questions
    const p4Questions: GeneratedSectionQuestion[] = [];
    if (finalP4.length > 0) {
      if (finalP4.length % 2 === 0 && finalP4.length > 1) {
        for (let i = 0; i < finalP4.length; i += 2) {
          const qA = finalP4[i];
          const qB = finalP4[i + 1] || qA;
          p4Questions.push({
            question: qA,
            orQuestion: qB
          });
        }
      } else {
        // Individual 5M questions
        finalP4.forEach(q => {
          p4Questions.push({
            question: q
          });
        });
      }
    }

    const sections: GeneratedSection[] = [];

    if (finalP1.length > 0) {
      sections.push({
        partTitle: 'Part I',
        partTitleTamil: 'பகுதி - I',
        marksPerQuestion: 1 as MarkType,
        totalQuestionsToGive: finalP1.length,
        totalQuestionsToAnswer: isManualSimple ? finalP1.length : (p1Target || finalP1.length),
        instruction: 'Answer all questions. Choose the most appropriate answer from the given alternatives.',
        instructionTamil: 'அனைத்து வினாக்களுக்கும் விடையளிக்கவும். கொடுக்கப்பட்ட நான்கு விடைகளில் மிகவும் பொருத்தமான விடையைத் தேர்ந்தெடுக்கவும்.',
        questions: finalP1.map(q => ({ question: q }))
      });
    }

    if (finalP2.length > 0) {
      const answerCount = isManualSimple ? finalP2.length : Math.min(p2AnswerTarget, finalP2.length);
      const compNo = isManualSimple ? undefined : (p2CompulsoryNo || (finalP1.length + finalP2.length));
      sections.push({
        partTitle: 'Part II',
        partTitleTamil: 'பகுதி - II',
        marksPerQuestion: 2 as MarkType,
        totalQuestionsToGive: finalP2.length,
        totalQuestionsToAnswer: answerCount,
        compulsoryQuestionNo: compNo,
        instruction: isManualSimple 
          ? `Answer all questions (${finalP2.length} x 2 = ${finalP2.length * 2} Marks).`
          : `Answer any ${answerCount} questions. Question No. ${compNo} is compulsory.`,
        instructionTamil: isManualSimple
          ? `அனைத்து வினாக்களுக்கும் விடையளிக்கவும் (${finalP2.length} x 2 = ${finalP2.length * 2} மதிப்பெண்கள்).`
          : `எவையேனும் ${answerCount} வினாக்களுக்கு விடையளிக்கவும். வினா எண் ${compNo} கட்டாய வினாவாகும்.`,
        questions: finalP2.map((q, idx) => ({
          question: q,
          isCompulsory: !isManualSimple && p2CompulsoryNo ? (finalP1.length + idx + 1) === p2CompulsoryNo : false
        }))
      });
    }

    if (finalP3.length > 0) {
      const answerCount = isManualSimple ? finalP3.length : Math.min(p3AnswerTarget, finalP3.length);
      const compNo = isManualSimple ? undefined : (p3CompulsoryNo || (finalP1.length + finalP2.length + finalP3.length));
      sections.push({
        partTitle: 'Part III',
        partTitleTamil: 'பகுதி - III',
        marksPerQuestion: 3 as MarkType,
        totalQuestionsToGive: finalP3.length,
        totalQuestionsToAnswer: answerCount,
        compulsoryQuestionNo: compNo,
        instruction: isManualSimple 
          ? `Answer all questions (${finalP3.length} x 3 = ${finalP3.length * 3} Marks).`
          : `Answer any ${answerCount} questions. Question No. ${compNo} is compulsory.`,
        instructionTamil: isManualSimple
          ? `அனைத்து வினாக்களுக்கும் விடையளிக்கவும் (${finalP3.length} x 3 = ${finalP3.length * 3} மதிப்பெண்கள்).`
          : `எவையேனும் ${answerCount} வினாக்களுக்கு விடையளிக்கவும். வினா எண் ${compNo} கட்டாய வினாவாகும்.`,
        questions: finalP3.map((q, idx) => ({
          question: q,
          isCompulsory: !isManualSimple && p3CompulsoryNo ? (finalP1.length + finalP2.length + idx + 1) === p3CompulsoryNo : false
        }))
      });
    }

    if (p4Questions.length > 0) {
      const answerCount = isManualSimple ? p4Questions.length : (p4PairsTarget || p4Questions.length);
      sections.push({
        partTitle: 'Part IV',
        partTitleTamil: 'பகுதி - IV',
        marksPerQuestion: 5 as MarkType,
        totalQuestionsToGive: p4Questions.length,
        totalQuestionsToAnswer: answerCount,
        instruction: p4Questions.some(pq => !!pq.orQuestion)
          ? 'Answer all questions. Either or type questions.'
          : 'Answer all questions.',
        instructionTamil: p4Questions.some(pq => !!pq.orQuestion)
          ? 'அனைத்து வினாக்களுக்கும் விடையளிக்கவும். அல்லது வகை வினாக்கள்.'
          : 'அனைத்து வினாக்களுக்கும் விடையளிக்கவும்.',
        questions: p4Questions
      });
    }

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
      languageMode: selectedMedium,
      paperType: 'manual',
      sections,
      createdAt: new Date().toISOString()
    };

    onPaperGenerated(newPaper);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      {/* Top Navigation & Generator Switcher Bar */}
      <div className="bg-white border border-stone-200 rounded-xl p-3.5 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={() => {
              if (onBack) {
                onBack();
              } else if (onNavigate) {
                onNavigate('qp-25');
              }
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs rounded-lg transition cursor-pointer border border-stone-300 shadow-xs"
            title={selectedMedium === 'tamil' ? 'முந்தைய ஜெனரேட்டருக்குத் திரும்பு' : 'Back to previous generator'}
          >
            <ArrowLeft className="w-4 h-4 text-stone-700" />
            <span>{selectedMedium === 'tamil' ? '← பின்செல்க (Back)' : '← Back to Generators'}</span>
          </button>

          <div className="h-5 w-px bg-stone-200 hidden sm:block" />

          {/* Quick Generator Tabs */}
          {onNavigate && (
            <div className="flex items-center gap-1 flex-wrap">
              <button
                type="button"
                onClick={() => onNavigate('qp-25')}
                className="px-2.5 py-1 text-xs font-semibold rounded bg-stone-50 hover:bg-amber-50 text-stone-700 hover:text-amber-900 border border-stone-200 transition cursor-pointer"
              >
                ⚡ 25M
              </button>
              <button
                type="button"
                onClick={() => onNavigate('qp-50')}
                className="px-2.5 py-1 text-xs font-semibold rounded bg-stone-50 hover:bg-amber-50 text-stone-700 hover:text-amber-900 border border-stone-200 transition cursor-pointer"
              >
                ⚡ 50M
              </button>
              <button
                type="button"
                onClick={() => onNavigate('qp-70')}
                className="px-2.5 py-1 text-xs font-semibold rounded bg-stone-50 hover:bg-amber-50 text-stone-700 hover:text-amber-900 border border-stone-200 transition cursor-pointer"
              >
                ⚡ 70M
              </button>
              <button
                type="button"
                onClick={() => onNavigate('qp-custom')}
                className="px-2.5 py-1 text-xs font-semibold rounded bg-stone-50 hover:bg-amber-50 text-stone-700 hover:text-amber-900 border border-stone-200 transition cursor-pointer"
              >
                ⚙️ Custom Blueprint
              </button>
              <button
                type="button"
                onClick={() => onNavigate('qp-manual')}
                className={`px-2.5 py-1 text-xs font-bold rounded transition cursor-pointer border ${
                  isManualSimple
                    ? 'bg-amber-500 text-stone-950 border-amber-600 shadow-xs'
                    : 'bg-stone-50 hover:bg-amber-50 text-stone-700 hover:text-amber-900 border-stone-200'
                }`}
              >
                ✍️ Manual Selection
              </button>
              <button
                type="button"
                onClick={() => onNavigate('qp-custom-manual')}
                className={`px-2.5 py-1 text-xs font-bold rounded transition cursor-pointer border ${
                  !isManualSimple
                    ? 'bg-amber-500 text-stone-950 border-amber-600 shadow-xs'
                    : 'bg-stone-50 hover:bg-amber-50 text-stone-700 hover:text-amber-900 border-stone-200'
                }`}
              >
                📋 Custom QP + Manual
              </button>
            </div>
          )}
        </div>

        {/* Staged count status */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-stone-500 hidden md:inline">
            {selectedMedium === 'tamil' ? 'சேமிக்கப்பட்ட வினாக்கள்:' : 'Staged Questions:'}
          </span>
          <span className="px-2 py-0.5 bg-amber-100 text-amber-900 font-bold rounded-full border border-amber-300">
            {part1List.length + part2List.length + part3List.length + part4List.length} Qs ({stagedTotal}M)
          </span>
        </div>
      </div>

      {/* Top Banner */}
      <div className="bg-[#1e293b] text-white rounded-xl p-5 shadow-sm space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-bold">
              {isManualSimple ? (
                selectedMedium === 'tamil' ? 'கைமுறை வினா தேர்வு வினாத்தாள் (Manual Selection Paper)' : 'Manual Selection Paper'
              ) : (
                selectedMedium === 'tamil' ? 'தனிப்பயன் கைமுறை வினாத்தாள் வடிவமைப்பு (Custom QP with Manual Selection)' : 'Custom QP with Manual Selection'
              )}
            </h2>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {/* Medium Selector */}
            <div className="flex items-center gap-1 bg-slate-800 p-0.5 rounded border border-slate-700">
              <span className="text-[11px] font-bold text-amber-400 px-1.5">
                {selectedMedium === 'tamil' ? 'பயிற்சி மொழி:' : 'Medium:'}
              </span>
              <button
                type="button"
                onClick={() => setSelectedMedium('english')}
                className={`text-[11px] px-2 py-0.5 rounded font-bold transition cursor-pointer ${
                  selectedMedium === 'english' ? 'bg-amber-400 text-stone-950 shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setSelectedMedium('tamil')}
                className={`text-[11px] px-2 py-0.5 rounded font-bold transition cursor-pointer ${
                  selectedMedium === 'tamil' ? 'bg-amber-400 text-stone-950 shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
              >
                தமிழ் வழி
              </button>
              <button
                type="button"
                onClick={() => setSelectedMedium('bilingual')}
                className={`text-[11px] px-2 py-0.5 rounded font-bold transition cursor-pointer ${
                  selectedMedium === 'bilingual' ? 'bg-amber-400 text-stone-950 shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
              >
                Bilingual
              </button>
            </div>

            {/* Auto-save status */}
            <div className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700 text-slate-300 text-[11px] px-2.5 py-1 rounded">
              <Save className="w-3.5 h-3.5 text-emerald-400" />
              <span>Auto-saved at {lastAutoSavedTime}</span>
            </div>

            {/* Shuffle Questions Button in Top Bar */}
            <button
              type="button"
              onClick={handleShuffleQuestions}
              disabled={part1List.length + part2List.length + part3List.length + part4List.length === 0}
              className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-stone-950 text-[11px] font-bold px-2.5 py-1 rounded transition cursor-pointer shadow"
              title="Randomly reorder questions within their respective mark categories"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>{selectedMedium === 'tamil' ? 'வரிசை மாற்று (Shuffle)' : 'Shuffle Questions'}</span>
            </button>

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
          {isManualSimple ? (
            selectedMedium === 'tamil'
              ? 'வினா வங்கியிலிருந்து நேரடியாக தேவையான வினாக்களைத் தேர்ந்தெடுத்து சுலபமாக வினாத்தாளை உருவாக்கலாம். தேர்வு செய்த வினாக்கள் மதிப்பெண் வாரியாகப் பிரிக்கப்பட்டு வினாத்தாள் தயாராகும்.'
              : 'Directly select questions from the question bank to compile a custom practice test or question paper. Picked questions are organized automatically by marks (1M, 2M, 3M, 5M).'
          ) : (
            selectedMedium === 'tamil'
              ? 'அரசு மாதிரி வினாத்தாள் விதிமுறைகளின்படி (Part I, II, III, IV, கட்டாய வினா, அல்லது வகை வினாக்கள்) பகுதிகளை அமைத்து, ஒவ்வொரு பகுதிக்கும் வினாக்களைத் தேர்ந்தெடுத்து உருவாக்கலாம்.'
              : 'Configure official exam blueprint sections (Part I, II, III, IV, compulsory questions, and either/or pairs), and assign specific questions to each section slot.'
          )}
        </p>
      </div>

      {/* When in Manual-Simple mode, show Exam Details first, followed by live staging summary */}
      {isManualSimple && (
        <div className="bg-white border border-stone-200 rounded-xl p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-stone-100 pb-2">
            <div>
              <h3 className="font-bold text-sm text-stone-900">
                {selectedMedium === 'tamil' ? 'வினாத்தாள் தலைப்பு விவரங்கள் (Exam Header Details)' : 'Exam Header Details'}
              </h3>
              <p className="text-[11px] text-stone-500">
                {selectedMedium === 'tamil' ? 'பள்ளி பெயர், தேர்வு பெயர் மற்றும் நேரத்தை இங்கு மாற்றிக்கொள்ளலாம்.' : 'Customize school name, assessment title, time allowed, and exam date.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <label className="block text-stone-600 font-semibold mb-1">School Name / பள்ளி பெயர்</label>
              <input
                type="text"
                value={schoolName}
                onChange={e => setSchoolName(e.target.value)}
                className="w-full p-2 border border-stone-300 rounded font-medium"
              />
            </div>
            <div>
              <label className="block text-stone-600 font-semibold mb-1">Exam Title / தேர்வு பெயர்</label>
              <input
                type="text"
                value={examName}
                onChange={e => setExamName(e.target.value)}
                className="w-full p-2 border border-stone-300 rounded font-medium"
              />
            </div>
            <div>
              <label className="block text-stone-600 font-semibold mb-1">Time Allowed / தேர்வு நேரம்</label>
              <input
                type="text"
                value={timeAllowed}
                onChange={e => setTimeAllowed(e.target.value)}
                className="w-full p-2 border border-stone-300 rounded font-medium"
              />
            </div>
            <div>
              <label className="block text-stone-600 font-semibold mb-1">Date / தேதி</label>
              <input
                type="date"
                value={examDate}
                onChange={e => setExamDate(e.target.value)}
                className="w-full p-2 border border-stone-300 rounded font-medium"
              />
            </div>
          </div>

          {/* Live Picked Questions Status Card */}
          <div className="bg-stone-50 border border-stone-200 rounded-lg p-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="font-bold text-stone-700">Selected Questions:</span>
              <span className="bg-white border border-stone-300 px-2 py-0.5 rounded font-semibold text-stone-800">
                1 Mark: {part1List.length} ({part1List.length * 1}M)
              </span>
              <span className="bg-white border border-stone-300 px-2 py-0.5 rounded font-semibold text-stone-800">
                2 Marks: {part2List.length} ({part2List.length * 2}M)
              </span>
              <span className="bg-white border border-stone-300 px-2 py-0.5 rounded font-semibold text-stone-800">
                3 Marks: {part3List.length} ({part3List.length * 3}M)
              </span>
              <span className="bg-white border border-stone-300 px-2 py-0.5 rounded font-semibold text-stone-800">
                5 Marks: {part4List.length} ({part4List.length * 5}M)
              </span>
              <span className="bg-amber-400 text-stone-950 px-2.5 py-0.5 rounded font-extrabold shadow-xs">
                Total: {stagedTotal} Marks
              </span>
            </div>

            <button
              type="button"
              onClick={handleFinalGenerate}
              disabled={part1List.length === 0 && part2List.length === 0 && part3List.length === 0 && part4List.length === 0}
              className="px-4 py-1.5 bg-red-800 hover:bg-red-900 disabled:opacity-50 text-white font-bold text-xs rounded-lg shadow transition cursor-pointer flex items-center gap-1.5 ml-auto"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Generate Paper Now ({stagedTotal}M) →
            </button>
          </div>
        </div>
      )}

      {/* 1. Configure Paper Sections (ONLY in Custom-Manual Mode) */}
      {!isManualSimple && (
        <div className="bg-white border border-stone-200 rounded-xl p-5 space-y-4 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-2">
            <div>
              <h3 className="font-bold text-sm text-stone-900">
                {selectedMedium === 'tamil' ? 'வினாத்தாள் பகுதிகளை கட்டமைக்க (Configure Paper Sections)' : 'Configure Paper Sections'}
              </h3>
              <p className="text-[11px] text-stone-500">
                {selectedMedium === 'tamil' ? 'மதிப்பெண் அளவை தேர்வு செய்து அல்லது தனிப்பயனாக்கி வினாத்தாளை உருவாக்கலாம்.' : 'Set custom targets or click a quick preset below.'}
              </p>
            </div>

            {/* Quick Preset Buttons */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[11px] font-bold text-stone-500 mr-1">
                {selectedMedium === 'tamil' ? 'விரைவு மாதிரிகள்:' : 'Quick Presets:'}
              </span>
              <button
                type="button"
                onClick={() => applyPreset(25)}
                className={`text-xs px-2.5 py-1 rounded font-bold transition cursor-pointer border ${
                  computedTotal === 25
                    ? 'bg-amber-400 text-stone-950 border-amber-500 shadow-sm font-extrabold ring-2 ring-amber-300'
                    : 'bg-stone-50 hover:bg-amber-100 text-stone-700 border-stone-300'
                }`}
              >
                ⚡ 25 {selectedMedium === 'tamil' ? 'மதிப்பெண்' : 'Marks (Unit Test)'}
              </button>
              <button
                type="button"
                onClick={() => applyPreset(50)}
                className={`text-xs px-2.5 py-1 rounded font-bold transition cursor-pointer border ${
                  computedTotal === 50
                    ? 'bg-amber-400 text-stone-950 border-amber-500 shadow-sm font-extrabold ring-2 ring-amber-300'
                    : 'bg-stone-50 hover:bg-amber-100 text-stone-700 border-stone-300'
                }`}
              >
                ⚡ 50 {selectedMedium === 'tamil' ? 'மதிப்பெண்' : 'Marks (Mid-Term)'}
              </button>
              <button
                type="button"
                onClick={() => applyPreset(70)}
                className={`text-xs px-2.5 py-1 rounded font-bold transition cursor-pointer border ${
                  computedTotal === 70
                    ? 'bg-amber-400 text-stone-950 border-amber-500 shadow-sm font-extrabold ring-2 ring-amber-300'
                    : 'bg-stone-50 hover:bg-amber-100 text-stone-700 border-stone-300'
                }`}
              >
                ⚡ 70 {selectedMedium === 'tamil' ? 'மதிப்பெண்' : 'Marks (Model Exam)'}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {/* Part I */}
            <div>
              <label className="block text-[11px] text-stone-600 font-semibold mb-1">
                Part I — No. of 1-Mark Questions
              </label>
              <input
                type="number"
                value={p1Target}
                onChange={e => setP1Target(Math.max(0, Number(e.target.value)))}
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
                  onChange={e => setP2GiveTarget(Math.max(0, Number(e.target.value)))}
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
                  onChange={e => setP2AnswerTarget(Math.max(0, Number(e.target.value)))}
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
                  onChange={e => setP3GiveTarget(Math.max(0, Number(e.target.value)))}
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
                  onChange={e => setP3AnswerTarget(Math.max(0, Number(e.target.value)))}
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
                onChange={e => setP4PairsTarget(Math.max(0, Number(e.target.value)))}
                className="w-full p-2 border border-stone-300 rounded font-bold"
              />
            </div>
          </div>

          {/* Computed Total Marks Box & Auto-fill Actions */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-stone-100">
            <div className="flex items-center gap-2">
              <label className="text-xs text-stone-700 font-bold">
                {selectedMedium === 'tamil' ? 'மொத்த மதிப்பெண் (Total Marks):' : 'Computed Total Marks:'}
              </label>
              <div className="px-3 py-1 bg-amber-400 text-stone-950 font-black text-sm rounded shadow-sm">
                {computedTotal} Marks
              </div>
            </div>

            <button
              type="button"
              onClick={handleAutoFillRemaining}
              className="flex items-center gap-1.5 text-xs bg-stone-800 hover:bg-stone-900 text-white font-bold px-3 py-1.5 rounded-lg shadow-sm transition cursor-pointer"
              title="Auto-fill any missing slots from selected chapters"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              {selectedMedium === 'tamil' ? 'தேர்ந்தெடுக்கப்பட்ட பாடங்களிலிருந்து தானாக நிரப்புக' : `Auto-fill Slots for ${computedTotal} Marks`}
            </button>
          </div>
        </div>
      )}

      {/* 2. Select Source Chapters */}
      <div className="bg-white border border-stone-200 rounded-xl p-5 space-y-3 shadow-sm">
        <div className="flex items-center justify-between border-b border-stone-100 pb-2">
          <h3 className="font-bold text-sm text-stone-900">
            {selectedMedium === 'tamil' ? 'பாடங்களை தேர்வு செய்க (Select Source Chapters)' : 'Select Source Chapters'}
          </h3>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPickerSelectedChapters(subject.chapters.map(c => c.no))}
              className="text-xs bg-stone-100 hover:bg-stone-200 text-stone-800 px-2.5 py-1 rounded font-medium cursor-pointer"
            >
              {selectedMedium === 'tamil' ? 'அனைத்தும் தேர்வு' : 'Select All'}
            </button>
            <button
              type="button"
              onClick={() => setPickerSelectedChapters([])}
              className="text-xs bg-stone-100 hover:bg-stone-200 text-stone-500 px-2.5 py-1 rounded font-medium cursor-pointer"
            >
              {selectedMedium === 'tamil' ? 'அனைத்தும் நீக்கு' : 'Deselect All'}
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
                <span>{selectedMedium === 'tamil' ? (ch.nameTamil || ch.name) : selectedMedium === 'bilingual' ? `${ch.name} (${ch.nameTamil || ''})` : ch.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Pick from Question Bank */}
      <div className="bg-white border border-stone-200 rounded-xl p-5 space-y-4 shadow-sm">
        <div className="flex items-center justify-between border-b border-stone-100 pb-2">
          <h3 className="font-bold text-sm text-stone-900">
            {selectedMedium === 'tamil' ? 'வினா வங்கியிலிருந்து தேர்வு செய்க (Pick from Question Bank)' : 'Pick from Question Bank'}
          </h3>

          {/* Clear Button in Pick from Question Bank Header */}
          {(part1List.length > 0 || part2List.length > 0 || part3List.length > 0 || part4List.length > 0) && (
            <button
              type="button"
              onClick={handleClearStaged}
              className="flex items-center gap-1 bg-red-100 hover:bg-red-200 text-red-800 border border-red-300 text-xs font-bold px-2.5 py-1 rounded transition cursor-pointer shadow-xs"
              title="Clear all added questions and change 'Added' back to '+ Pick'"
            >
              <RotateCcw className="w-3.5 h-3.5 text-red-700" />
              <span>{selectedMedium === 'tamil' ? 'அனைத்து தேர்வுகளையும் நீக்கு (Clear)' : 'Clear Added'}</span>
              <span className="bg-red-800 text-white rounded-full px-1.5 py-0.2 text-[10px] ml-0.5">
                {part1List.length + part2List.length + part3List.length + part4List.length}
              </span>
            </button>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-semibold text-stone-600">
              {selectedMedium === 'tamil' ? 'மதிப்பெண் (Marks):' : 'Marks:'}
            </span>
            {(['ALL', 1, 2, 3, 5] as const).map(m => {
              const label = 
                selectedMedium === 'tamil'
                  ? m === 'ALL' ? 'அனைத்தும்' : `${m} மதிப்பெண்${m > 1 ? 'கள்' : ''}`
                  : m === 'ALL' ? 'All' : `${m} Mark${m > 1 ? 's' : ''}`;

              return (
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
                  {label}
                </button>
              );
            })}

            {/* In-toolbar Clear Button */}
            {(part1List.length > 0 || part2List.length > 0 || part3List.length > 0 || part4List.length > 0) && (
              <button
                type="button"
                onClick={handleClearStaged}
                className="px-2.5 py-1 rounded font-bold text-xs bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 transition cursor-pointer flex items-center gap-1"
                title="Clear selected questions (Changes Added to +Pick)"
              >
                <RotateCcw className="w-3 h-3" />
                {selectedMedium === 'tamil' ? 'Clear' : 'Clear'}
              </button>
            )}
          </div>

          <div className="relative flex-1 max-w-sm">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={selectedMedium === 'tamil' ? 'வினாக்களைத் தேடுக...' : 'Search questions...'}
              value={pickerSearch}
              onChange={e => setPickerSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 border border-stone-300 rounded text-xs"
            />
          </div>
        </div>

        {/* Picker Question List */}
        <div className="max-h-60 overflow-y-auto divide-y divide-stone-100 border border-stone-200 rounded-lg">
          {pickerQuestions.length === 0 ? (
            <p className="p-6 text-center text-xs text-stone-400">
              {selectedMedium === 'tamil' ? 'பொருத்தமான வினாக்கள் இல்லை.' : 'No matching questions.'}
            </p>
          ) : (
            pickerQuestions.map(q => {
              const isAlreadyIn = 
                part1List.some(item => item.id === q.id) ||
                part2List.some(item => item.id === q.id) ||
                part3List.some(item => item.id === q.id) ||
                part4List.some(item => item.id === q.id);

              const displayText = 
                selectedMedium === 'tamil'
                  ? (q.questionTextTamil || q.questionText)
                  : selectedMedium === 'bilingual'
                  ? `${q.questionText} ${q.questionTextTamil ? `\n[தமிழ்] ${q.questionTextTamil}` : ''}`
                  : q.questionText;

              return (
                <div key={q.id} className="p-3 hover:bg-stone-50 transition flex items-center justify-between gap-3 text-xs">
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[10px] bg-stone-100 px-1.5 py-0.2 rounded text-stone-700">
                        {q.marks}M
                      </span>
                      <span className="text-[10px] text-stone-400">
                        Ch {q.chapterNo}. {selectedMedium === 'tamil' ? (q.chapterNameTamil || q.chapterName) : q.chapterName}
                      </span>
                    </div>
                    <p className="font-medium text-stone-900 truncate whitespace-pre-line">
                      {displayText}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    {isAlreadyIn ? (
                      <button
                        type="button"
                        onClick={() => {
                          if (q.marks === 1) removeItem(setPart1List, q.id);
                          else if (q.marks === 2) removeItem(setPart2List, q.id);
                          else if (q.marks === 3) removeItem(setPart3List, q.id);
                          else if (q.marks === 5) removeItem(setPart4List, q.id);
                        }}
                        className="px-3 py-1 rounded text-xs font-bold transition cursor-pointer bg-emerald-700 hover:bg-red-700 text-white flex items-center gap-1 group"
                        title="Click to remove from selection"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 group-hover:hidden" />
                        <Trash2 className="w-3.5 h-3.5 hidden group-hover:inline" />
                        <span className="group-hover:hidden">{selectedMedium === 'tamil' ? 'சேர்க்கப்பட்டது' : 'Added'}</span>
                        <span className="hidden group-hover:inline">{selectedMedium === 'tamil' ? 'நீக்கு' : 'Remove'}</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleAddQuestionToBucket(q)}
                        className="px-3 py-1 rounded text-xs font-bold transition cursor-pointer bg-red-800 hover:bg-red-900 text-white shadow-xs"
                      >
                        {selectedMedium === 'tamil' ? '+ தேர்வு' : '+ Pick'}
                      </button>
                    )}
                  </div>
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

      {/* 5. Selected Question Buckets */}
      <div className="space-y-4">
        <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-bold text-sm text-stone-900 flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-500" />
              <span>
                {selectedMedium === 'tamil' 
                  ? 'தேர்வு செய்யப்பட்ட வினாக்கள் (Staged Questions by Marks)' 
                  : 'Staged Questions for Paper'}
              </span>
            </h3>
            <p className="text-[11px] text-stone-500">
              {selectedMedium === 'tamil'
                ? 'மதிப்பெண் வாரியாகப் பிரிக்கப்பட்ட வினாக்கள் (1M, 2M, 3M, 5M). வரிசையை மாற்ற ▲▼ அம்புக்குறிகளைப் பயன்படுத்தவும் அல்லது வரிசை மாற்ற "Shuffle" அழுத்தவும்.'
                : 'Questions grouped by marks (1M, 2M, 3M, 5M). Reorder using ▲▼ buttons or click "Shuffle Questions" to randomize ordering.'}
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* Shuffle Questions Button */}
            <button
              type="button"
              onClick={handleShuffleQuestions}
              disabled={part1List.length + part2List.length + part3List.length + part4List.length === 0}
              className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-stone-950 text-xs font-bold px-3 py-1.5 rounded-lg shadow transition cursor-pointer"
              title="Randomly reorder questions within their respective mark categories"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>{selectedMedium === 'tamil' ? 'வினாக்களை வரிசை மாற்று (Shuffle)' : 'Shuffle Questions'}</span>
            </button>

            {/* Clear Draft Button */}
            {(part1List.length > 0 || part2List.length > 0 || part3List.length > 0 || part4List.length > 0) && (
              <button
                type="button"
                onClick={() => setShowClearConfirm(true)}
                className="flex items-center gap-1 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-xs font-bold px-2.5 py-1.5 rounded-lg transition cursor-pointer"
                title="Clear all staged questions"
              >
                <RotateCcw className="w-3.5 h-3.5 text-red-600" />
                <span>{selectedMedium === 'tamil' ? 'அனைத்தும் நீக்கு' : 'Clear All'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Part I Bucket */}
        <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm">
          <div className="bg-stone-100 px-4 py-2.5 border-b border-stone-200 flex items-center justify-between">
            <h4 className="font-bold text-xs text-stone-900">
              {isManualSimple
                ? `Part I — 1 Mark Questions (reorder with ▲▼) — Selected: ${part1List.length}`
                : `Part I — 1 Mark (reorder with ▲▼) — Selected ${part1List.length}/${p1Target}`}
            </h4>
            <span className="text-[11px] font-bold text-red-800">{part1List.length * 1} Marks</span>
          </div>

          <div className="p-3">
            {part1List.length === 0 ? (
              <p className="text-xs text-stone-400 py-4 text-center">No 1-mark questions added yet</p>
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
              {isManualSimple
                ? `Part II — 2 Marks Questions (reorder with ▲▼) — Selected: ${part2List.length}`
                : `Part II — 2 Marks (reorder with ▲▼) — Selected ${part2List.length}/${p2GiveTarget}`}
            </h4>
            <span className="text-[11px] font-bold text-red-800">{isManualSimple ? part2List.length * 2 : p2AnswerTarget * 2} Marks</span>
          </div>

          <div className="p-3">
            {part2List.length === 0 ? (
              <p className="text-xs text-stone-400 py-4 text-center">No 2-mark questions added yet</p>
            ) : (
              <div className="space-y-2">
                {part2List.map((q, idx) => (
                  <div key={q.id} className="p-2.5 bg-stone-50 border border-stone-200 rounded flex items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="font-bold text-stone-500">{part1List.length + idx + 1}.</span>
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
              {isManualSimple
                ? `Part III — 3 Marks Questions (reorder with ▲▼) — Selected: ${part3List.length}`
                : `Part III — 3 Marks (reorder with ▲▼) — Selected ${part3List.length}/${p3GiveTarget}`}
            </h4>
            <span className="text-[11px] font-bold text-red-800">{isManualSimple ? part3List.length * 3 : p3AnswerTarget * 3} Marks</span>
          </div>

          <div className="p-3">
            {part3List.length === 0 ? (
              <p className="text-xs text-stone-400 py-4 text-center">No 3-mark questions added yet</p>
            ) : (
              <div className="space-y-2">
                {part3List.map((q, idx) => (
                  <div key={q.id} className="p-2.5 bg-stone-50 border border-stone-200 rounded flex items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="font-bold text-stone-500">{part1List.length + part2List.length + idx + 1}.</span>
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
              {isManualSimple
                ? `Part IV — 5 Marks Questions (reorder with ▲▼) — Selected: ${part4List.length}`
                : `Part IV — 5 Marks, either/or pairs (reorder with ▲▼; pairs of 2 consecutive = one either/or question) — Selected ${part4List.length}/${p4PairsTarget * 2}`}
            </h4>
            <span className="text-[11px] font-bold text-red-800">{isManualSimple ? part4List.length * 5 : p4PairsTarget * 5} Marks</span>
          </div>

          <div className="p-3">
            {part4List.length === 0 ? (
              <p className="text-xs text-stone-400 py-4 text-center">No 5-mark questions added yet</p>
            ) : (
              <div className="space-y-2">
                {part4List.map((q, idx) => (
                  <div key={q.id} className="p-2.5 bg-stone-50 border border-stone-200 rounded flex items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="font-bold text-stone-500">
                        {isManualSimple
                          ? `${part1List.length + part2List.length + part3List.length + idx + 1}.`
                          : `${Math.floor(idx / 2) + 1} ${idx % 2 === 0 ? '(A)' : '(OR B)'}:`}
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

      {/* 6. Exam Header inputs & Final Generate Button */}
      <div className="bg-white border border-stone-200 rounded-xl p-5 space-y-4 shadow-sm">
        {!isManualSimple && (
          <>
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
          </>
        )}

        <button
          type="button"
          onClick={handleFinalGenerate}
          className="w-full py-3 bg-red-800 hover:bg-red-900 text-white font-extrabold text-sm rounded-xl shadow-lg transition cursor-pointer flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          {isManualSimple 
            ? `Generate Manual Selection Paper (${computedTotal} Marks) →`
            : `Generate Custom Question Paper & Answer Key (${computedTotal} Marks) →`}
        </button>
      </div>

      {/* Shuffle Notification Toast */}
      {shuffleToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0f172a] text-white px-4 py-3 rounded-xl shadow-2xl border border-amber-500/60 flex items-center gap-3 animate-fade-in no-print print:hidden">
          <Shuffle className="w-4 h-4 text-amber-400 shrink-0 animate-spin" />
          <div>
            <p className="text-xs font-bold text-white">
              {selectedMedium === 'tamil' ? 'வினாக்கள் வரிசை மாற்றப்பட்டன!' : 'Questions Shuffled Successfully!'}
            </p>
            <p className="text-[10px] text-slate-300">
              {selectedMedium === 'tamil' 
                ? 'ஒவ்வொரு மதிப்பெண் பிரிவிலும் வினாக்கள் மறுவரிசைப்படுத்தப்பட்டன.' 
                : 'Randomly reordered questions within 1M, 2M, 3M, and 5M categories.'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
