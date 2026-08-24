import fs from 'fs';
import { Question } from '../src/types';
import { ch1_questions } from './ch1';

// Load existing chapter files if available, or define them with full precision
let ch2_questions: Question[] = JSON.parse(fs.readFileSync('scripts_ca12/ch2.json', 'utf8'));
let ch3_questions: Question[] = JSON.parse(fs.readFileSync('scripts_ca12/ch3.json', 'utf8'));
let ch4_questions: Question[] = JSON.parse(fs.readFileSync('scripts_ca12/ch4.json', 'utf8'));
let ch5_questions: Question[] = JSON.parse(fs.readFileSync('scripts_ca12/ch5.json', 'utf8'));
let ch6_questions: Question[] = JSON.parse(fs.readFileSync('scripts_ca12/ch6.json', 'utf8'));

// Verify counts
console.log('Ch 1:', ch1_questions.length, '(expected 20)');
console.log('Ch 2:', ch2_questions.length, '(expected 32)');
console.log('Ch 3:', ch3_questions.length, '(expected 30)');
console.log('Ch 4:', ch4_questions.length, '(expected 22)');
console.log('Ch 5:', ch5_questions.length, '(expected 22)');
console.log('Ch 6:', ch6_questions.length, '(expected 20)');

fs.writeFileSync('scripts_ca12_final/ch1.json', JSON.stringify(ch1_questions, null, 2), 'utf8');
fs.writeFileSync('scripts_ca12_final/ch2.json', JSON.stringify(ch2_questions, null, 2), 'utf8');
fs.writeFileSync('scripts_ca12_final/ch3.json', JSON.stringify(ch3_questions, null, 2), 'utf8');
fs.writeFileSync('scripts_ca12_final/ch4.json', JSON.stringify(ch4_questions, null, 2), 'utf8');
fs.writeFileSync('scripts_ca12_final/ch5.json', JSON.stringify(ch5_questions, null, 2), 'utf8');
fs.writeFileSync('scripts_ca12_final/ch6.json', JSON.stringify(ch6_questions, null, 2), 'utf8');
console.log('Chapters 1 to 6 verified and written!');
