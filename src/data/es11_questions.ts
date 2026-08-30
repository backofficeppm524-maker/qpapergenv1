import { Question, Chapter } from '../types';
import { ES11_CHAPTERS } from './es11_data/chapters';
import { ES11_CH1_QUESTIONS } from './es11_data/ch1';
import { ES11_CH2_QUESTIONS } from './es11_data/ch2';
import { ES11_CH3_QUESTIONS } from './es11_data/ch3';
import { ES11_CH4_QUESTIONS } from './es11_data/ch4';
import { ES11_CH5_QUESTIONS } from './es11_data/ch5';
import { ES11_CH6_QUESTIONS } from './es11_data/ch6';
import { ES11_CH7_QUESTIONS } from './es11_data/ch7';
import { ES11_CH8_QUESTIONS } from './es11_data/ch8';
import { ES11_CH9_QUESTIONS } from './es11_data/ch9';

export { ES11_CHAPTERS };

export const ES11_QUESTIONS: Question[] = [
  ...ES11_CH1_QUESTIONS,
  ...ES11_CH2_QUESTIONS,
  ...ES11_CH3_QUESTIONS,
  ...ES11_CH4_QUESTIONS,
  ...ES11_CH5_QUESTIONS,
  ...ES11_CH6_QUESTIONS,
  ...ES11_CH7_QUESTIONS,
  ...ES11_CH8_QUESTIONS,
  ...ES11_CH9_QUESTIONS
];

