import fs from 'fs';
import { Question } from '../src/types';

// The exact counts per chapter from 12th_Computer_Applications_Book_Back_Questions_English_Medium.pdf:
export const TARGET_COUNTS: Record<number, { 1: number; 2: number; 3: number; 5: number; total: number; name: string }> = {
  1: { 1: 10, 2: 5, 3: 3, 5: 2, total: 20, name: "Multimedia" },
  2: { 1: 12, 2: 10, 3: 7, 5: 3, total: 32, name: "An Introduction to Adobe PageMaker" },
  3: { 1: 10, 2: 10, 3: 5, 5: 5, total: 30, name: "Introduction to Database Management System" },
  4: { 1: 10, 2: 5, 3: 5, 5: 2, total: 22, name: "PHP: Hypertext Preprocessor" },
  5: { 1: 11, 2: 5, 3: 4, 5: 2, total: 22, name: "Functions and Arrays in PHP" },
  6: { 1: 10, 2: 5, 3: 3, 5: 2, total: 20, name: "Conditional Statements in PHP" },
  7: { 1: 10, 2: 5, 3: 3, 5: 3, total: 21, name: "Loops in PHP" },
  8: { 1: 10, 2: 5, 3: 3, 5: 2, total: 20, name: "Forms and Files" },
  9: { 1: 8, 2: 6, 3: 3, 5: 3, total: 20, name: "Connecting PHP and MYSQL" },
  10: { 1: 7, 2: 4, 3: 3, 5: 2, total: 16, name: "Introduction to Computer Networks" },
  11: { 1: 10, 2: 4, 3: 3, 5: 3, total: 20, name: "Network Examples and Protocols" },
  12: { 1: 10, 2: 8, 3: 4, 5: 3, total: 25, name: "Domain Name System (DNS)" },
  13: { 1: 10, 2: 6, 3: 5, 5: 3, total: 24, name: "Network Cabling" },
  14: { 1: 8, 2: 5, 3: 5, 5: 2, total: 20, name: "Open Source Concepts" },
  15: { 1: 10, 2: 5, 3: 5, 5: 3, total: 23, name: "E-Commerce" },
  16: { 1: 10, 2: 5, 3: 5, 5: 3, total: 23, name: "Electronic Payment Systems" },
  17: { 1: 10, 2: 5, 3: 5, 5: 3, total: 23, name: "E-Commerce Security Systems" },
  18: { 1: 5, 2: 3, 3: 3, 5: 2, total: 13, name: "Electronic Data Interchange- EDI" }
};

let allQuestions: Question[] = [];
let allValid = true;

const markTotals = { 1: 0, 2: 0, 3: 0, 5: 0 };

for (let ch = 1; ch <= 18; ch++) {
  const filePath = `scripts_ca12_final/ch${ch}.json`;
  if (!fs.existsSync(filePath)) {
    console.error(`Missing file: ${filePath}`);
    allValid = false;
    continue;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  const questions: Question[] = JSON.parse(content);
  const target = TARGET_COUNTS[ch];

  const counts = { 1: 0, 2: 0, 3: 0, 5: 0 };
  questions.forEach(q => {
    if (counts[q.marks as 1 | 2 | 3 | 5] !== undefined) {
      counts[q.marks as 1 | 2 | 3 | 5]++;
    }
  });

  const match = counts[1] === target[1] &&
                counts[2] === target[2] &&
                counts[3] === target[3] &&
                counts[5] === target[5] &&
                questions.length === target.total;

  if (!match) {
    console.error(`MISMATCH Ch ${ch}: Actual [1M:${counts[1]}, 2M:${counts[2]}, 3M:${counts[3]}, 5M:${counts[5]}, Total:${questions.length}] vs Expected [1M:${target[1]}, 2M:${target[2]}, 3M:${target[3]}, 5M:${target[5]}, Total:${target.total}]`);
    allValid = false;
  } else {
    console.log(`Ch ${ch} OK: 1M:${counts[1]}, 2M:${counts[2]}, 3M:${counts[3]}, 5M:${counts[5]} => Total: ${questions.length}`);
  }

  markTotals[1] += counts[1];
  markTotals[2] += counts[2];
  markTotals[3] += counts[3];
  markTotals[5] += counts[5];

  allQuestions = allQuestions.concat(questions);
}

console.log('----------------------------------------------------');
console.log(`Grand Totals: 1M: ${markTotals[1]} (Exp: 171), 2M: ${markTotals[2]} (Exp: 101), 3M: ${markTotals[3]} (Exp: 74), 5M: ${markTotals[5]} (Exp: 48) => Grand Total: ${allQuestions.length} (Exp: 394)`);

if (!allValid || allQuestions.length !== 394) {
  console.error('Validation failed! Not writing ca12Questions.ts');
  process.exit(1);
}

// Generate src/data/ca12Questions.ts
const fileHeader = `import { Question } from '../types';

export const CA12_QUESTIONS: Question[] = `;

const tsContent = fileHeader + JSON.stringify(allQuestions, null, 2) + ';\n';
fs.writeFileSync('src/data/ca12Questions.ts', tsContent, 'utf8');
console.log('Successfully wrote src/data/ca12Questions.ts with 394 verified questions!');
