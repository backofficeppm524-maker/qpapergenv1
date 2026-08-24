import fs from 'fs';
import { Question } from '../src/types';

let allQuestions: Question[] = [];
const expected = [
  { ch: 1, total: 20, m1: 10, m2: 5, m3: 3, m5: 2 },
  { ch: 2, total: 32, m1: 12, m2: 10, m3: 7, m5: 3 },
  { ch: 3, total: 30, m1: 10, m2: 10, m3: 5, m5: 5 },
  { ch: 4, total: 22, m1: 10, m2: 5, m3: 5, m5: 2 },
  { ch: 5, total: 22, m1: 11, m2: 5, m3: 4, m5: 2 },
  { ch: 6, total: 20, m1: 10, m2: 5, m3: 3, m5: 2 },
  { ch: 7, total: 20, m1: 10, m2: 5, m3: 3, m5: 2 },
  { ch: 8, total: 20, m1: 10, m2: 5, m3: 3, m5: 2 },
  { ch: 9, total: 20, m1: 10, m2: 5, m3: 3, m5: 2 },
  { ch: 10, total: 16, m1: 10, m2: 3, m3: 2, m5: 1 },
  { ch: 11, total: 21, m1: 10, m2: 5, m3: 4, m5: 2 },
  { ch: 12, total: 20, m1: 10, m2: 5, m3: 3, m5: 2 },
  { ch: 13, total: 25, m1: 10, m2: 6, m3: 6, m5: 3 },
  { ch: 14, total: 18, m1: 10, m2: 5, m3: 2, m5: 1 },
  { ch: 15, total: 25, m1: 10, m2: 5, m3: 6, m5: 4 },
  { ch: 16, total: 24, m1: 10, m2: 5, m3: 5, m5: 4 },
  { ch: 17, total: 22, m1: 10, m2: 5, m3: 4, m5: 3 },
  { ch: 18, total: 24, m1: 8, m2: 7, m3: 5, m5: 4 },
];

let grand1M = 0, grand2M = 0, grand3M = 0, grand5M = 0;

for (let i = 1; i <= 18; i++) {
  const filePath = `scripts_ca12/ch${i}.json`;
  if (!fs.existsSync(filePath)) {
    console.error(`File ${filePath} does NOT exist!`);
    continue;
  }
  const data: Question[] = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const m1 = data.filter(q => q.marks === 1).length;
  const m2 = data.filter(q => q.marks === 2).length;
  const m3 = data.filter(q => q.marks === 3).length;
  const m5 = data.filter(q => q.marks === 5).length;
  const exp = expected[i - 1];

  console.log(`Ch ${i}: Total=${data.length} (Exp ${exp.total}) | 1M=${m1}(${exp.m1}) 2M=${m2}(${exp.m2}) 3M=${m3}(${exp.m3}) 5M=${m5}(${exp.m5})`);

  grand1M += m1;
  grand2M += m2;
  grand3M += m3;
  grand5M += m5;

  allQuestions = allQuestions.concat(data);
}

console.log("=========================================");
console.log(`GRAND TOTAL: ${allQuestions.length} (Expected: 394)`);
console.log(`1M: ${grand1M} (Exp: 171)`);
console.log(`2M: ${grand2M} (Exp: 101)`);
console.log(`3M: ${grand3M} (Exp: 74)`);
console.log(`5M: ${grand5M} (Exp: 48)`);
console.log("=========================================");

// Write to src/data/ca12Questions.ts
const fileHeader = `import { Question } from '../types';\n\nexport const CA12_QUESTIONS: Question[] = `;
fs.writeFileSync('src/data/ca12Questions.ts', fileHeader + JSON.stringify(allQuestions, null, 2) + ';\n', 'utf8');
console.log("src/data/ca12Questions.ts successfully generated with", allQuestions.length, "questions!");
