import fs from 'fs';

const ch1 = JSON.parse(fs.readFileSync('scripts_ca12/ch1.json', 'utf8'));
const ch2 = JSON.parse(fs.readFileSync('scripts_ca12/ch2.json', 'utf8'));
const ch3 = JSON.parse(fs.readFileSync('scripts_ca12/ch3.json', 'utf8'));
const ch4 = JSON.parse(fs.readFileSync('scripts_ca12/ch4.json', 'utf8'));
const ch5 = JSON.parse(fs.readFileSync('scripts_ca12/ch5.json', 'utf8'));

const all = [...ch1, ...ch2, ...ch3, ...ch4, ...ch5];
console.log(`Ch1-5 count: ${all.length} (Expected: 126)`);

const fileContent = `import { Question } from "../types";

export const CA12_CH1_TO_CH5_QUESTIONS: Question[] = ${JSON.stringify(all, null, 2)};
`;

fs.writeFileSync('src/data/ca12_ch1_to_ch5.ts', fileContent, 'utf8');
console.log('Successfully created src/data/ca12_ch1_to_ch5.ts');
