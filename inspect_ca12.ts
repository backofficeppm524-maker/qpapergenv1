import { PRELOADED_SUBJECTS } from './src/data/questionBanks';

const ca12 = PRELOADED_SUBJECTS.find(s => s.id === 'ca-12') || PRELOADED_SUBJECTS.find(s => s.name.includes('Computer Applications') && s.standard === '12th Standard');

if (ca12) {
  console.log("Subject:", ca12.name, ca12.standard, ca12.id);
  console.log("Total Questions:", ca12.questions.length);
  const m1 = ca12.questions.filter(q => q.marks === 1).length;
  const m2 = ca12.questions.filter(q => q.marks === 2).length;
  const m3 = ca12.questions.filter(q => q.marks === 3).length;
  const m5 = ca12.questions.filter(q => q.marks === 5).length;
  console.log(`1M=${m1}, 2M=${m2}, 3M=${m3}, 5M=${m5} | Total=${ca12.questions.length}`);
  
  for (let ch = 1; ch <= 18; ch++) {
    const chQs = ca12.questions.filter(q => q.chapterNo === ch);
    const cm1 = chQs.filter(q => q.marks === 1).length;
    const cm2 = chQs.filter(q => q.marks === 2).length;
    const cm3 = chQs.filter(q => q.marks === 3).length;
    const cm5 = chQs.filter(q => q.marks === 5).length;
    console.log(`Ch ${ch.toString().padStart(2)}: 1M=${cm1.toString().padStart(2)}, 2M=${cm2.toString().padStart(2)}, 3M=${cm3.toString().padStart(2)}, 5M=${cm5.toString().padStart(2)} | Total=${chQs.length.toString().padStart(2)}`);
  }
} else {
  console.log("Subject not found!");
}
