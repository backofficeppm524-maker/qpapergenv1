import { CA12_QUESTIONS } from './src/data/ca12_questions';

console.log("Total existing CA12 questions:", CA12_QUESTIONS.length);
for (let ch = 1; ch <= 18; ch++) {
  const qs = CA12_QUESTIONS.filter(q => q.chapterNo === ch);
  console.log(`Ch ${ch}: ${qs.length} questions`);
}
