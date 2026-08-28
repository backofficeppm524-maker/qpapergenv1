import { Question, Chapter } from '../types';
import { ES12_CHAPTERS } from './es12_data/chapters';
import { ES12_CH1_TO_CH3_QUESTIONS } from './es12_data/ch1_to_ch3';
import { ES12_CH4_TO_CH6_QUESTIONS } from './es12_data/ch4_to_ch6';
import { ES12_CH7_TO_CH9_QUESTIONS } from './es12_data/ch7_to_ch9';

export { ES12_CHAPTERS };

export const ES12_QUESTIONS: Question[] = [
  ...ES12_CH1_TO_CH3_QUESTIONS,
  ...ES12_CH4_TO_CH6_QUESTIONS,
  ...ES12_CH7_TO_CH9_QUESTIONS
];
