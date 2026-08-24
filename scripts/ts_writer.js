import fs from 'fs';

// Helper to write TypeScript files
function writeTs(filePath, exportName, data) {
  const content = `import { Question } from '../types';

export const ${exportName}: Question[] = ${JSON.stringify(data, null, 2)};
`;
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Successfully generated ${filePath} with ${data.length} questions.`);
}

export { writeTs };
