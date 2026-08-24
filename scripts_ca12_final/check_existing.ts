import fs from 'fs';

for (let i = 1; i <= 18; i++) {
  const p = `scripts_ca12/ch${i}.json`;
  if (fs.existsSync(p)) {
    const qs = JSON.parse(fs.readFileSync(p, 'utf8'));
    const m1 = qs.filter((q: any) => q.marks === 1).length;
    const m2 = qs.filter((q: any) => q.marks === 2).length;
    const m3 = qs.filter((q: any) => q.marks === 3).length;
    const m5 = qs.filter((q: any) => q.marks === 5).length;
    console.log(`Ch ${i}: Total=${qs.length}, 1M=${m1}, 2M=${m2}, 3M=${m3}, 5M=${m5}`);
  } else {
    console.log(`Ch ${i}: File missing`);
  }
}
