import { SubjectData, Question, Chapter } from '../types';
import { CS12_CH1_TO_CH4_QUESTIONS } from './cs12_ch1_to_ch4';
import { CS12_CH5_TO_CH8_QUESTIONS } from './cs12_ch5_to_ch8';
import { CS12_CH9_TO_CH12_QUESTIONS } from './cs12_ch9_to_ch12';
import { CS12_CH13_TO_CH16_QUESTIONS } from './cs12_ch13_to_ch16';
import { CA12_CHAPTERS, CA12_QUESTIONS } from './ca12_questions';
import { CS11_CHAPTERS, CS11_QUESTIONS } from './cs11_questions';
import { CA11_CHAPTERS, CA11_QUESTIONS } from './ca11_questions';

// 12th Standard Computer Science Chapters
export const CS12_CHAPTERS: Chapter[] = [
  { no: 1, name: "Functions", nameTamil: "செயற்கூறுகள்" },
  { no: 2, name: "Data Abstraction", nameTamil: "தரவு அருவமாக்கம்" },
  { no: 3, name: "Scoping", nameTamil: "வரையெல்லை" },
  { no: 4, name: "Algorithmic Strategies", nameTamil: "நெறிமுறை உத்திகள்" },
  { no: 5, name: "Python - Variables and Operators", nameTamil: "பைத்தான் - மாறிகள் மற்றும் செயற்குறிகள்" },
  { no: 6, name: "Control Structures", nameTamil: "கட்டுப்பாட்டு கட்டமைப்புகள்" },
  { no: 7, name: "Python Functions", nameTamil: "பைத்தான் செயற்கூறுகள்" },
  { no: 8, name: "Strings and String Manipulation", nameTamil: "சரங்கள் மற்றும் சரங்களை கையாளுதல்" },
  { no: 9, name: "Lists, Tuples, Sets and Dictionary", nameTamil: "பட்டியல், டியூப்பிள், கணங்கள் மற்றும் அகராதி" },
  { no: 10, name: "Python Classes and Objects", nameTamil: "பைத்தான் இனக்குழுக்கள் மற்றும் பொருள்கள்" },
  { no: 11, name: "Database Concepts", nameTamil: "தரவுத்தள கருத்துக்கள்" },
  { no: 12, name: "Structured Query Language (SQL)", nameTamil: "கட்டமைக்கப்பட்ட வினவல் மொழி (SQL)" },
  { no: 13, name: "Python and CSV Files", nameTamil: "பைத்தான் மற்றும் CSV கோப்புகள்" },
  { no: 14, name: "Importing C++ Programs in Python", nameTamil: "பைத்தானில் C++ நிரல்களை இறக்குமதி செய்தல்" },
  { no: 15, name: "Data Manipulation Through SQL", nameTamil: "SQL மூலம் தரவு கையாளுதல்" },
  { no: 16, name: "Data Visualization using Pyplot", nameTamil: "Pyplot பயன்படுத்தி தரவு காட்சிப்படுத்தல்" }
];

// Complete 12th Standard Computer Science Question Bank (Chapters 1 to 16)
export const CS12_QUESTIONS: Question[] = [
  ...CS12_CH1_TO_CH4_QUESTIONS,
  ...CS12_CH5_TO_CH8_QUESTIONS,
  ...CS12_CH9_TO_CH12_QUESTIONS,
  ...CS12_CH13_TO_CH16_QUESTIONS
];

export { CA12_CHAPTERS, CA12_QUESTIONS, CS11_CHAPTERS, CS11_QUESTIONS, CA11_CHAPTERS, CA11_QUESTIONS };

// Initial subject list with calculated question counts
export const PRELOADED_SUBJECTS: SubjectData[] = [
  {
    id: "cs-12",
    name: "Computer Science",
    nameTamil: "கணினி அறிவியல்",
    standard: "12th Standard",
    board: "Tamil Nadu State Board",
    code: "12CS",
    chapters: CS12_CHAPTERS.map(c => {
      const qInCh = CS12_QUESTIONS.filter(q => q.chapterNo === c.no);
      return {
        ...c,
        questionCount: {
          1: qInCh.filter(q => q.marks === 1).length,
          2: qInCh.filter(q => q.marks === 2).length,
          3: qInCh.filter(q => q.marks === 3).length,
          5: qInCh.filter(q => q.marks === 5).length,
          total: qInCh.length
        }
      };
    }),
    questions: CS12_QUESTIONS
  },
  {
    id: "ca-12",
    name: "Computer Applications",
    nameTamil: "கணினி பயன்பாடுகள்",
    standard: "12th Standard",
    board: "Tamil Nadu State Board",
    code: "12CA",
    chapters: CA12_CHAPTERS.map(c => {
      const qInCh = CA12_QUESTIONS.filter(q => q.chapterNo === c.no);
      return {
        ...c,
        questionCount: {
          1: qInCh.filter(q => q.marks === 1).length,
          2: qInCh.filter(q => q.marks === 2).length,
          3: qInCh.filter(q => q.marks === 3).length,
          5: qInCh.filter(q => q.marks === 5).length,
          total: qInCh.length
        }
      };
    }),
    questions: CA12_QUESTIONS
  },
  {
    id: "cs-11",
    name: "Computer Science",
    nameTamil: "கணினி அறிவியல்",
    standard: "11th Standard",
    board: "Tamil Nadu State Board",
    code: "11CS",
    chapters: CS11_CHAPTERS.map(c => {
      const qInCh = CS11_QUESTIONS.filter(q => q.chapterNo === c.no);
      return {
        ...c,
        questionCount: {
          1: qInCh.filter(q => q.marks === 1).length,
          2: qInCh.filter(q => q.marks === 2).length,
          3: qInCh.filter(q => q.marks === 3).length,
          5: qInCh.filter(q => q.marks === 5).length,
          total: qInCh.length
        }
      };
    }),
    questions: CS11_QUESTIONS
  },
  {
    id: "ca-11",
    name: "Computer Applications",
    nameTamil: "கணினி பயன்பாடுகள்",
    standard: "11th Standard",
    board: "Tamil Nadu State Board",
    code: "11CA",
    chapters: CA11_CHAPTERS.map(c => {
      const qInCh = CA11_QUESTIONS.filter(q => q.chapterNo === c.no);
      return {
        ...c,
        questionCount: {
          1: qInCh.filter(q => q.marks === 1).length,
          2: qInCh.filter(q => q.marks === 2).length,
          3: qInCh.filter(q => q.marks === 3).length,
          5: qInCh.filter(q => q.marks === 5).length,
          total: qInCh.length
        }
      };
    }),
    questions: CA11_QUESTIONS
  }
];

export const INITIAL_SUBJECTS = PRELOADED_SUBJECTS;
