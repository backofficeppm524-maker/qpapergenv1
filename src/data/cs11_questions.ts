import { Question, Chapter } from '../types';
import { CS11_CH1_TO_CH5_QUESTIONS } from './cs11_ch1_to_ch5';
import { CS11_CH6_TO_CH10_QUESTIONS } from './cs11_ch6_to_ch10';
import { CS11_CH11_TO_CH14_QUESTIONS } from './cs11_ch11_to_ch14';
import { CS11_CH15_TO_CH18_QUESTIONS } from './cs11_ch15_to_ch18';

export const CS11_CHAPTERS: Chapter[] = [
  { no: 1, name: "Introduction to Computers", nameTamil: "கணிப்பொறி ஓர் அறிமுகம்" },
  { no: 2, name: "Number Systems", nameTamil: "எண் முறைகள்" },
  { no: 3, name: "Computer Organization", nameTamil: "கணிப்பொறி அமைப்பு முறை" },
  { no: 4, name: "Theoretical Concepts of Operating System", nameTamil: "இயக்க அமைப்பின் கோட்பாட்டு கருத்துக்கள்" },
  { no: 5, name: "Working with Windows Operating System", nameTamil: "விண்டோஸ் இயக்க அமைப்புடன் வேலை செய்தல்" },
  { no: 6, name: "Specification and Abstraction", nameTamil: "குறிப்பீடு மற்றும் அருவமாக்கம்" },
  { no: 7, name: "Composition and Decomposition", nameTamil: "கூட்டமைவு மற்றும் பிரித்தல்" },
  { no: 8, name: "Iteration and Recursion", nameTamil: "சுழற்சி மற்றும் தற்சுழற்சி" },
  { no: 9, name: "Introduction to C++", nameTamil: "C++ ஓர் அறிமுகம்" },
  { no: 10, name: "Flow of Control", nameTamil: "பாய்வுக் கட்டுப்பாடு" },
  { no: 11, name: "Functions", nameTamil: "செயற்கூறுகள்" },
  { no: 12, name: "Arrays and Structures", nameTamil: "அணிகள் மற்றும் கட்டமைப்புகள்" },
  { no: 13, name: "Introduction to Object Oriented Programming Techniques", nameTamil: "பொருள் நோக்கு நிரலாக்க நுட்பங்கள் ஓர் அறிமுகம்" },
  { no: 14, name: "Classes and Objects", nameTamil: "இனக்குழுக்கள் மற்றும் பொருள்கள்" },
  { no: 15, name: "Polymorphism", nameTamil: "பல்லுருவாக்கம்" },
  { no: 16, name: "Inheritance", nameTamil: "மரபுரிமம்" },
  { no: 17, name: "Computer Ethics and Cyber Security", nameTamil: "கணினி நெறிமுறைகள் மற்றும் இணைய பாதுகாப்பு" },
  { no: 18, name: "Tamil Computing", nameTamil: "தமிழ் கணிப்பொறியியல்" }
];

export const CS11_QUESTIONS: Question[] = [
  ...CS11_CH1_TO_CH5_QUESTIONS,
  ...CS11_CH6_TO_CH10_QUESTIONS,
  ...CS11_CH11_TO_CH14_QUESTIONS,
  ...CS11_CH15_TO_CH18_QUESTIONS
];
