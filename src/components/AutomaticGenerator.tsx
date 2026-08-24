import React, { useState } from 'react';
import { 
  FileText, 
  Sparkles, 
  Settings2, 
  CheckSquare, 
  Layers, 
  Clock, 
  School, 
  Sliders, 
  Shuffle, 
  CheckCircle, 
  HelpCircle, 
  ArrowRight, 
  ShieldCheck,
  RotateCw,
  Copy,
  Tag
} from 'lucide-react';
import { SubjectData, QuestionPaper, Question, GeneratedSection, GeneratedSectionQuestion, LanguageMode } from '../types';
import { getQuestionConceptKey, areQuestionsColliding } from '../utils/conceptDeduplicator';
import { shuffleSectionContent, shuffleArray } from '../utils/shuffleUtils';

interface AutomaticGeneratorProps {
  subject: SubjectData;
  languageMode: LanguageMode;
  targetTemplate: '25' | '50' | '70' | 'custom';
  onPaperGenerated: (paper: QuestionPaper) => void;
}

export const AutomaticGenerator: React.FC<AutomaticGeneratorProps> = ({
  subject,
  languageMode,
  targetTemplate,
  onPaperGenerated
}) => {
  // Preset defaults based on template
  const is25 = targetTemplate === '25';
  const is50 = targetTemplate === '50';
  const is70 = targetTemplate === '70';

  const defaultTotalMarks = is25 ? 25 : is50 ? 50 : is70 ? 70 : 50;
  const defaultTime = is25 ? '1.30 Hours' : is50 ? '2.00 Hours' : is70 ? '3.00 Hours' : '2.30 Hours';
  const defaultExam = is25 ? 'UNIT TEST - 1' : is50 ? 'FIRST MID-TERM EXAMINATION' : is70 ? 'HALF YEARLY EXAMINATION' : 'MODEL EXAMINATION';

  // Form states
  const [schoolName, setSchoolName] = useState('HIGHER SECONDARY SCHOOL');
  const [examName, setExamName] = useState(defaultExam);
  const [timeAllowed, setTimeAllowed] = useState(defaultTime);
  const [examDate, setExamDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedChapters, setSelectedChapters] = useState<number[]>(
    is25 ? [1, 2, 3] : subject.chapters.map(c => c.no)
  );

  // Section Blueprint Configs
  const [p1Total, setP1Total] = useState(is25 ? 5 : is50 ? 10 : is70 ? 15 : 10);
  const [p1Answer, setP1Answer] = useState(is25 ? 5 : is50 ? 10 : is70 ? 15 : 10);

  const [p2Give, setP2Give] = useState(is25 ? 4 : is50 ? 7 : is70 ? 9 : 7);
  const [p2Answer, setP2Answer] = useState(is25 ? 3 : is50 ? 5 : is70 ? 6 : 5);
  const [p2Compulsory, setP2Compulsory] = useState<number | undefined>(is25 ? 9 : is50 ? 17 : is70 ? 24 : 17);

  const [p3Give, setP3Give] = useState(is25 ? 4 : is50 ? 7 : is70 ? 9 : 7);
  const [p3Answer, setP3Answer] = useState(is25 ? 3 : is50 ? 5 : is70 ? 6 : 5);
  const [p3Compulsory, setP3Compulsory] = useState<number | undefined>(is25 ? 13 : is50 ? 24 : is70 ? 33 : 24);

  const [p4Pairs, setP4Pairs] = useState(is25 ? 1 : is50 ? 3 : is70 ? 5 : 3);

  // Anti-Copying & Shuffle Options
  const [shuffleQuestions, setShuffleQuestions] = useState<boolean>(true);
  const [shuffleOptions, setShuffleOptions] = useState<boolean>(true);
  const [paperSetCode, setPaperSetCode] = useState<string>('');

  // Compute live total marks
  const computedTotal = (p1Answer * 1) + (p2Answer * 2) + (p3Answer * 3) + (p4Pairs * 5);

  const handleSelectAllChapters = () => {
    setSelectedChapters(subject.chapters.map(c => c.no));
  };

  const handleDeselectAllChapters = () => {
    setSelectedChapters([]);
  };

  const handleToggleChapter = (chNo: number) => {
    setSelectedChapters(prev =>
      prev.includes(chNo) ? prev.filter(n => n !== chNo) : [...prev, chNo]
    );
  };

  // Generation Logic
  const handleGeneratePaper = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedChapters.length === 0) {
      alert('Please select at least one chapter.');
      return;
    }

    // Filter available pool
    const pool = subject.questions.filter(q => selectedChapters.includes(q.chapterNo));

    const pool1M = pool.filter(q => q.marks === 1);
    const pool2M = pool.filter(q => q.marks === 2);
    const pool3M = pool.filter(q => q.marks === 3);
    const pool5M = pool.filter(q => q.marks === 5);

    // Set of used concept keys across sections to prevent duplicate topics (e.g. asking Pure/Impure in both 3M and 5M)
    const usedConceptKeys = new Set<string>();
    const usedQuestionIds = new Set<string>();

    // Smart picker that respects concept deduplication
    const pickUniqueQuestions = (
      candidates: Question[],
      count: number,
      options?: { preferCompulsory?: boolean }
    ): Question[] => {
      const selected: Question[] = [];
      const shuffled = [...candidates].sort(() => 0.5 - Math.random());

      // If compulsory is preferred for one of the slots, try to pick an isCompulsoryEligible question first
      if (options?.preferCompulsory) {
        const compCandidate = shuffled.find(q => 
          q.isCompulsoryEligible && 
          !usedQuestionIds.has(q.id) && 
          !usedConceptKeys.has(getQuestionConceptKey(q))
        );
        if (compCandidate) {
          selected.push(compCandidate);
          usedQuestionIds.add(compCandidate.id);
          usedConceptKeys.add(getQuestionConceptKey(compCandidate));
        }
      }

      // Fill remaining slots avoiding collisions
      for (const q of shuffled) {
        if (selected.length >= count) break;
        const concept = getQuestionConceptKey(q);

        if (!usedQuestionIds.has(q.id) && !usedConceptKeys.has(concept)) {
          selected.push(q);
          usedQuestionIds.add(q.id);
          usedConceptKeys.add(concept);
        }
      }

      // If pool is tight (e.g. only 1 chapter selected), fallback to allow other questions from candidate list
      if (selected.length < count) {
        for (const q of shuffled) {
          if (selected.length >= count) break;
          if (!selected.some(s => s.id === q.id)) {
            selected.push(q);
            usedQuestionIds.add(q.id);
          }
        }
      }

      // If still less than count, borrow from full subject bank
      if (selected.length < count) {
        const fullFallback = subject.questions.filter(q => q.marks === (candidates[0]?.marks || 1));
        const shuffledFallback = [...fullFallback].sort(() => 0.5 - Math.random());
        for (const q of shuffledFallback) {
          if (selected.length >= count) break;
          if (!selected.some(s => s.id === q.id)) {
            selected.push(q);
            usedQuestionIds.add(q.id);
          }
        }
      }

      return selected.slice(0, count);
    };

    // 1. Part I Questions (MCQs)
    const pickedP1 = pickUniqueQuestions(pool1M.length ? pool1M : subject.questions.filter(q => q.marks === 1), p1Total);
    const part1Questions: GeneratedSectionQuestion[] = pickedP1.map(q => ({ question: q }));

    // 2. Part II Questions (2 Marks)
    const pickedP2 = pickUniqueQuestions(
      pool2M.length ? pool2M : subject.questions.filter(q => q.marks === 2), 
      p2Give, 
      { preferCompulsory: true }
    );
    const part2Questions: GeneratedSectionQuestion[] = pickedP2.map((q, idx) => {
      const qNum = p1Total + idx + 1;
      const isComp = p2Compulsory ? qNum === p2Compulsory : idx === pickedP2.length - 1;
      return {
        question: q,
        isCompulsory: isComp
      };
    });

    // 3. Part III Questions (3 Marks)
    const pickedP3 = pickUniqueQuestions(
      pool3M.length ? pool3M : subject.questions.filter(q => q.marks === 3), 
      p3Give, 
      { preferCompulsory: true }
    );
    const part3Questions: GeneratedSectionQuestion[] = pickedP3.map((q, idx) => {
      const qNum = p1Total + p2Give + idx + 1;
      const isComp = p3Compulsory ? qNum === p3Compulsory : idx === pickedP3.length - 1;
      return {
        question: q,
        isCompulsory: isComp
      };
    });

    // 4. Part IV Questions (5 Marks - Either / Or pairs with distinct concept checks)
    const pickedP5A = pickUniqueQuestions(
      pool5M.length ? pool5M : subject.questions.filter(q => q.marks === 5), 
      p4Pairs
    );
    
    // Pick P5B ensuring each pair (qA and qB) are from distinct concepts/chapters
    const availableP5ForB = (pool5M.length ? pool5M : subject.questions.filter(q => q.marks === 5))
      .filter(q => !pickedP5A.some(a => a.id === q.id));

    const pickedP5B: Question[] = [];
    for (let i = 0; i < p4Pairs; i++) {
      const qA = pickedP5A[i];
      // Find a B question that doesn't collide with qA or previous pairs
      const candidateB = availableP5ForB.find(cand => 
        !pickedP5B.some(b => b.id === cand.id) &&
        !areQuestionsColliding(qA, cand) &&
        (availableP5ForB.length <= p4Pairs || cand.chapterNo !== qA.chapterNo)
      ) || availableP5ForB.find(cand => !pickedP5B.some(b => b.id === cand.id)) || qA;

      pickedP5B.push(candidateB);
    }

    const part4Questions: GeneratedSectionQuestion[] = pickedP5A.map((qA, idx) => ({
      question: qA,
      orQuestion: pickedP5B[idx] || qA
    }));

    // Build raw Sections
    const rawSections: GeneratedSection[] = [
      {
        partTitle: 'Part I',
        partTitleTamil: 'பகுதி - I',
        marksPerQuestion: 1,
        totalQuestionsToGive: p1Total,
        totalQuestionsToAnswer: p1Answer,
        instruction: `Answer all questions. Choose the most appropriate answer from the given four alternatives and write the option code and the corresponding answer.`,
        instructionTamil: `அனைத்து வினாக்களுக்கும் விடையளிக்கவும். கொடுக்கப்பட்ட நான்கு விடைகளில் மிகவும் பொருத்தமான விடையைத் தேர்ந்தெடுத்து குறியீடு மற்றும் விடையை எழுதவும்.`,
        questions: part1Questions
      },
      {
        partTitle: 'Part II',
        partTitleTamil: 'பகுதி - II',
        marksPerQuestion: 2,
        totalQuestionsToGive: p2Give,
        totalQuestionsToAnswer: p2Answer,
        compulsoryQuestionNo: p2Compulsory,
        instruction: `Answer any ${p2Answer} questions. Question No. ${p2Compulsory || (p1Total + p2Give)} is compulsory.`,
        instructionTamil: `எவையேனும் ${p2Answer} வினாக்களுக்கு விடையளிக்கவும். வினா எண் ${p2Compulsory || (p1Total + p2Give)} கட்டாய வினாவாகும்.`,
        questions: part2Questions
      },
      {
        partTitle: 'Part III',
        partTitleTamil: 'பகுதி - III',
        marksPerQuestion: 3,
        totalQuestionsToGive: p3Give,
        totalQuestionsToAnswer: p3Answer,
        compulsoryQuestionNo: p3Compulsory,
        instruction: `Answer any ${p3Answer} questions. Question No. ${p3Compulsory || (p1Total + p2Give + p3Give)} is compulsory.`,
        instructionTamil: `எவையேனும் ${p3Answer} வினாக்களுக்கு விடையளிக்கவும். வினா எண் ${p3Compulsory || (p1Total + p2Give + p3Give)} கட்டாய வினாவாகும்.`,
        questions: part3Questions
      },
      {
        partTitle: 'Part IV',
        partTitleTamil: 'பகுதி - IV',
        marksPerQuestion: 5,
        totalQuestionsToGive: p4Pairs,
        totalQuestionsToAnswer: p4Pairs,
        instruction: `Answer all questions. Either or type questions.`,
        instructionTamil: `அனைத்து வினாக்களுக்கும் விடையளிக்கவும். அல்லது (Either/Or) வகை வினாக்கள்.`,
        questions: part4Questions
      }
    ];

    // Apply Anti-Copying Question & Option Shuffling if enabled
    const finalSections = rawSections.map(sec => 
      (shuffleQuestions || shuffleOptions)
        ? shuffleSectionContent(sec, { shuffleQuestions, shuffleOptions })
        : sec
    );

    const fullExamTitle = paperSetCode 
      ? `${examName} (${paperSetCode.trim()})`
      : examName;

    const notesSummary = [
      paperSetCode ? paperSetCode.trim() : null,
      shuffleQuestions ? 'Questions Shuffled' : null,
      shuffleOptions ? 'MCQ Options Permuted' : null
    ].filter(Boolean).join(' • ') || undefined;

    const newPaper: QuestionPaper = {
      id: `qp-${Date.now()}`,
      title: `${fullExamTitle} - ${subject.standard} ${subject.name}`,
      titleTamil: `${fullExamTitle} - ${subject.standard} ${subject.nameTamil || subject.name}`,
      schoolName,
      standard: subject.standard,
      subject: subject.name,
      subjectTamil: subject.nameTamil,
      examName: fullExamTitle,
      timeAllowed,
      maxMarks: computedTotal,
      date: examDate,
      selectedChapters,
      languageMode,
      paperType: targetTemplate,
      sections: finalSections,
      createdAt: new Date().toISOString(),
      notes: notesSummary
    };

    onPaperGenerated(newPaper);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Title Card */}
      <div className="bg-[#1e293b] text-white rounded-xl p-5 shadow-sm space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Settings2 className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-bold">
              {targetTemplate === '25' && '25 Marks Question Paper Generator (Unit Test)'}
              {targetTemplate === '50' && '50 Marks Question Paper Generator (Mid-Term Exam)'}
              {targetTemplate === '70' && '70 Marks Question Paper Generator (Quarterly / Half Yearly / Board)'}
              {targetTemplate === 'custom' && 'Custom Question Paper Blueprint Generator'}
            </h2>
          </div>
          <span className="bg-amber-400 text-stone-950 text-xs font-extrabold px-2.5 py-1 rounded">
            Total: {computedTotal} Marks
          </span>
        </div>
        <p className="text-xs text-slate-300">
          Configure school header information, select lesson chapters, and automatically generate a complete Question Paper & matching Answer Key with anti-copying randomization.
        </p>
      </div>

      <form onSubmit={handleGeneratePaper} className="space-y-6">
        {/* 1. Header Information */}
        <div className="bg-white border border-stone-200 rounded-xl p-5 space-y-4 shadow-sm">
          <h3 className="font-bold text-sm text-stone-900 border-b border-stone-100 pb-2 flex items-center gap-2">
            <School className="w-4 h-4 text-red-800" />
            1. Question Paper Header & Exam Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-bold text-stone-700 mb-1">School / Institution Name</label>
              <input
                type="text"
                required
                value={schoolName}
                onChange={e => setSchoolName(e.target.value)}
                placeholder="e.g. GOVERNMENT HIGHER SECONDARY SCHOOL"
                className="w-full p-2 border border-stone-300 rounded-lg font-medium focus:ring-1 focus:ring-red-800"
              />
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">Examination Title</label>
              <input
                type="text"
                required
                value={examName}
                onChange={e => setExamName(e.target.value)}
                placeholder="e.g. FIRST MID-TERM EXAMINATION - 2026"
                className="w-full p-2 border border-stone-300 rounded-lg font-medium focus:ring-1 focus:ring-red-800"
              />
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">Time Allowed</label>
              <input
                type="text"
                value={timeAllowed}
                onChange={e => setTimeAllowed(e.target.value)}
                placeholder="e.g. 1.30 Hours / 3.00 Hours"
                className="w-full p-2 border border-stone-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">Date</label>
              <input
                type="date"
                value={examDate}
                onChange={e => setExamDate(e.target.value)}
                className="w-full p-2 border border-stone-300 rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* 2. Configure Paper Sections */}
        <div className="bg-white border border-stone-200 rounded-xl p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-stone-100 pb-2">
            <h3 className="font-bold text-sm text-stone-900 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-red-800" />
              2. Configure Paper Sections & Blueprint
            </h3>
            <span className="text-xs text-stone-500 font-semibold">
              Computed Total: <strong className="text-red-800 font-bold">{computedTotal} Marks</strong>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {/* Part I */}
            <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg space-y-2">
              <span className="font-bold text-stone-900 block text-xs">
                Part I — 1-Mark Multiple Choice (MCQ)
              </span>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] text-stone-600 block">Total Questions</label>
                  <input
                    type="number"
                    min={1}
                    max={30}
                    value={p1Total}
                    onChange={e => {
                      const v = Number(e.target.value);
                      setP1Total(v);
                      setP1Answer(v);
                    }}
                    className="w-full p-1.5 border border-stone-300 rounded bg-white font-bold"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-stone-600 block">Marks (1M each)</label>
                  <input
                    type="text"
                    disabled
                    value={`${p1Answer * 1} Marks`}
                    className="w-full p-1.5 border border-stone-200 rounded bg-stone-100 font-bold text-stone-600"
                  />
                </div>
              </div>
            </div>

            {/* Part II */}
            <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg space-y-2">
              <span className="font-bold text-stone-900 block text-xs">
                Part II — 2-Marks Short Answer
              </span>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="text-[11px] text-stone-600 block">Questions to Give</label>
                  <input
                    type="number"
                    min={1}
                    max={20}
                    value={p2Give}
                    onChange={e => setP2Give(Number(e.target.value))}
                    className="w-full p-1.5 border border-stone-300 rounded bg-white font-bold"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-stone-600 block">Students Answer</label>
                  <input
                    type="number"
                    min={1}
                    max={p2Give}
                    value={p2Answer}
                    onChange={e => setP2Answer(Number(e.target.value))}
                    className="w-full p-1.5 border border-stone-300 rounded bg-white font-bold"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-stone-600 block">Compulsory Q.No</label>
                  <input
                    type="number"
                    value={p2Compulsory || ''}
                    onChange={e => setP2Compulsory(Number(e.target.value))}
                    placeholder="e.g. 24"
                    className="w-full p-1.5 border border-stone-300 rounded bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Part III */}
            <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg space-y-2">
              <span className="font-bold text-stone-900 block text-xs">
                Part III — 3-Marks Brief Answer
              </span>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="text-[11px] text-stone-600 block">Questions to Give</label>
                  <input
                    type="number"
                    min={1}
                    max={20}
                    value={p3Give}
                    onChange={e => setP3Give(Number(e.target.value))}
                    className="w-full p-1.5 border border-stone-300 rounded bg-white font-bold"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-stone-600 block">Students Answer</label>
                  <input
                    type="number"
                    min={1}
                    max={p3Give}
                    value={p3Answer}
                    onChange={e => setP3Answer(Number(e.target.value))}
                    className="w-full p-1.5 border border-stone-300 rounded bg-white font-bold"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-stone-600 block">Compulsory Q.No</label>
                  <input
                    type="number"
                    value={p3Compulsory || ''}
                    onChange={e => setP3Compulsory(Number(e.target.value))}
                    placeholder="e.g. 33"
                    className="w-full p-1.5 border border-stone-300 rounded bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Part IV */}
            <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg space-y-2">
              <span className="font-bold text-stone-900 block text-xs">
                Part IV — 5-Marks (Either / Or Questions)
              </span>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] text-stone-600 block">No. of Either/Or Pairs</label>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    value={p4Pairs}
                    onChange={e => setP4Pairs(Number(e.target.value))}
                    className="w-full p-1.5 border border-stone-300 rounded bg-white font-bold"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-stone-600 block">Total Marks (5M each)</label>
                  <input
                    type="text"
                    disabled
                    value={`${p4Pairs * 5} Marks`}
                    className="w-full p-1.5 border border-stone-200 rounded bg-stone-100 font-bold text-stone-600"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Anti-Copying & Question / Option Shuffle Engine */}
        <div className="bg-white border border-stone-200 rounded-xl p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-stone-100 pb-2">
            <h3 className="font-bold text-sm text-stone-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              3. Anti-Copying & Question Shuffle Settings
            </h3>
            <span className="text-[11px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
              Exam Security
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* Shuffle Questions Toggle */}
            <div 
              onClick={() => setShuffleQuestions(!shuffleQuestions)}
              className={`p-3.5 rounded-xl border transition cursor-pointer flex items-start gap-3 ${
                shuffleQuestions 
                  ? 'border-emerald-500 bg-emerald-50/40' 
                  : 'border-stone-200 bg-stone-50 hover:bg-stone-100'
              }`}
            >
              <div className={`p-2 rounded-lg shrink-0 ${shuffleQuestions ? 'bg-emerald-600 text-white' : 'bg-stone-200 text-stone-600'}`}>
                <Shuffle className="w-4 h-4" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-stone-900 text-xs">
                    Randomize Question Sequence
                  </span>
                  <input
                    type="checkbox"
                    checked={shuffleQuestions}
                    onChange={e => setShuffleQuestions(e.target.checked)}
                    className="w-4 h-4 accent-emerald-600 rounded cursor-pointer"
                    onClick={e => e.stopPropagation()}
                  />
                </div>
                <p className="text-[11px] text-stone-500">
                  Randomly reorders questions within each part (Part I, Part II, Part III, Part IV) so adjacent students receive different question sequences.
                </p>
              </div>
            </div>

            {/* Shuffle MCQ Options Toggle */}
            <div 
              onClick={() => setShuffleOptions(!shuffleOptions)}
              className={`p-3.5 rounded-xl border transition cursor-pointer flex items-start gap-3 ${
                shuffleOptions 
                  ? 'border-emerald-500 bg-emerald-50/40' 
                  : 'border-stone-200 bg-stone-50 hover:bg-stone-100'
              }`}
            >
              <div className={`p-2 rounded-lg shrink-0 ${shuffleOptions ? 'bg-emerald-600 text-white' : 'bg-stone-200 text-stone-600'}`}>
                <RotateCw className="w-4 h-4" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-stone-900 text-xs">
                    Permute MCQ Options (A, B, C, D)
                  </span>
                  <input
                    type="checkbox"
                    checked={shuffleOptions}
                    onChange={e => setShuffleOptions(e.target.checked)}
                    className="w-4 h-4 accent-emerald-600 rounded cursor-pointer"
                    onClick={e => e.stopPropagation()}
                  />
                </div>
                <p className="text-[11px] text-stone-500">
                  Shuffles option choices (a, b, c, d) and automatically updates the Valuation Answer Key so answer letters stay 100% correct.
                </p>
              </div>
            </div>
          </div>

          {/* Set Variant Designation */}
          <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-stone-500" />
              <div>
                <span className="font-bold text-stone-800">Set Code / Variant Tag (Optional):</span>
                <span className="text-[11px] text-stone-500 block">Tag paper to create parallel sets (e.g. Set A, Set B)</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              {['SET - A', 'SET - B', 'SET - C', 'SET - D'].map(code => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setPaperSetCode(paperSetCode === code ? '' : code)}
                  className={`px-2.5 py-1 rounded font-bold text-[11px] transition cursor-pointer border ${
                    paperSetCode === code
                      ? 'bg-emerald-700 text-white border-emerald-800 shadow-xs'
                      : 'bg-stone-100 text-stone-700 border-stone-200 hover:bg-stone-200'
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Select Source Chapters */}
        <div className="bg-white border border-stone-200 rounded-xl p-5 space-y-3 shadow-sm">
          <div className="flex items-center justify-between border-b border-stone-100 pb-2">
            <h3 className="font-bold text-sm text-stone-900 flex items-center gap-2">
              <Layers className="w-4 h-4 text-red-800" />
              4. Select Source Chapters ({selectedChapters.length} of {subject.chapters.length} Selected)
            </h3>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleSelectAllChapters}
                className="text-xs bg-stone-100 hover:bg-stone-200 text-stone-800 px-2.5 py-1 rounded font-medium cursor-pointer"
              >
                Select All
              </button>
              <button
                type="button"
                onClick={handleDeselectAllChapters}
                className="text-xs bg-stone-100 hover:bg-stone-200 text-stone-500 px-2.5 py-1 rounded font-medium cursor-pointer"
              >
                Deselect All
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-h-56 overflow-y-auto pr-1">
            {subject.chapters.map(ch => {
              const isSelected = selectedChapters.includes(ch.no);
              return (
                <button
                  type="button"
                  key={ch.no}
                  onClick={() => handleToggleChapter(ch.no)}
                  className={`text-left p-2.5 rounded-lg border text-xs transition cursor-pointer flex items-center justify-between gap-2 ${
                    isSelected
                      ? 'border-red-600 bg-red-50 text-red-950 font-bold ring-1 ring-red-600/30'
                      : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'
                  }`}
                >
                  <div className="min-w-0">
                    <span className="text-[11px] text-red-800 font-bold mr-1">Ch {ch.no}.</span>
                    <span className="truncate">{ch.name}</span>
                  </div>
                  {isSelected && <CheckCircle className="w-4 h-4 text-red-700 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Generate Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <div className="text-xs text-stone-500 flex items-center gap-2">
            <Shuffle className="w-4 h-4 text-stone-400" />
            <span>
              {shuffleQuestions || shuffleOptions 
                ? 'Anti-copying shuffle enabled: Questions and option keys will be randomized.' 
                : 'Standard sequential order generation.'}
            </span>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-red-800 hover:bg-red-900 text-white font-extrabold text-sm rounded-xl shadow-lg transition cursor-pointer flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            Generate Question Paper & Answer Key ({computedTotal} Marks) →
          </button>
        </div>
      </form>
    </div>
  );
};

