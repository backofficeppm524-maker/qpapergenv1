import { Question, SubjectData } from '../types';

export interface TopicStat {
  name: string;
  count: number;
  chapterNos: number[];
  sampleQuestions: Question[];
}

/**
 * Assigns or computes the best matching sub-topic for a given question
 */
export const getQuestionSubTopic = (q: Question): string => {
  if (q.subTopic) return q.subTopic;

  const text = `${q.questionText} ${q.answer || ''}`.toLowerCase();
  const chName = q.chapterName || `Chapter ${q.chapterNo}`;

  // Subject-adaptive subtopics based on chapter name and keywords
  if (chName.includes('HTML') || chName.includes('Formatting') || chName.includes('Structural')) {
    if (text.includes('table') || text.includes('<tr>') || text.includes('<td>') || text.includes('<th>')) return 'HTML Tables';
    if (text.includes('list') || text.includes('<ol>') || text.includes('<ul>') || text.includes('<li>')) return 'HTML Lists';
    if (text.includes('link') || text.includes('href') || text.includes('<a>') || text.includes('anchor')) return 'HTML Links & Anchors';
    if (text.includes('multimedia') || text.includes('<img>') || text.includes('audio') || text.includes('video')) return 'HTML Multimedia';
    if (text.includes('form') || text.includes('input') || text.includes('submit')) return 'HTML Forms';
    return 'HTML Tags & Formatting';
  }

  if (chName.includes('JavaScript') || chName.includes('Control Structure') || chName.includes('Function')) {
    if (text.includes('function') || text.includes('parameter') || text.includes('return')) return 'JavaScript Functions';
    if (text.includes('loop') || text.includes('for') || text.includes('while') || text.includes('switch') || text.includes('if')) return 'JS Control Flow';
    if (text.includes('variable') || text.includes('var') || text.includes('let') || text.includes('operator')) return 'JS Variables & Data Types';
    return 'JavaScript Basics';
  }

  if (chName.includes('CSS') || chName.includes('Style')) {
    return 'CSS Properties & Styling';
  }

  if (chName.includes('Introduction to Computers')) {
    if (text.includes('generation') || text.includes('first') || text.includes('second') || text.includes('vacuum') || text.includes('transistor')) return 'Computer Generations';
    if (text.includes('component') || text.includes('cpu') || text.includes('alu') || text.includes('bus') || text.includes('input') || text.includes('output')) return 'Hardware Components';
    if (text.includes('booting') || text.includes('cold') || text.includes('warm') || text.includes('bios')) return 'Booting Process';
    return 'Computer Fundamentals';
  }

  if (chName.includes('Number System')) {
    if (text.includes('binary') || text.includes('octal') || text.includes('hexadecimal') || text.includes('radix') || text.includes('base')) return 'Base Conversions';
    if (text.includes('complement') || text.includes('addition') || text.includes('subtraction') || text.includes('signed')) return 'Binary Arithmetic';
    return 'Number Systems & Encoding';
  }

  if (chName.includes('Organisation') || chName.includes('Organization')) {
    if (text.includes('memory') || text.includes('ram') || text.includes('rom') || text.includes('cache') || text.includes('prom')) return 'Memory Hierarchy';
    if (text.includes('port') || text.includes('interface') || text.includes('usb') || text.includes('hdmi') || text.includes('vga')) return 'Ports & Interfaces';
    return 'CPU & Organization';
  }

  if (chName.includes('Operating System') || chName.includes('OS')) {
    if (text.includes('process') || text.includes('scheduling') || text.includes('fifo') || text.includes('round robin')) return 'Process Management';
    if (text.includes('memory') || text.includes('virtual') || text.includes('paging')) return 'Memory Management';
    if (text.includes('gui') || text.includes('desktop') || text.includes('window') || text.includes('icon')) return 'User Interface & Navigation';
    return 'OS Architecture & Functions';
  }

  if (chName.includes('Word Processor') || chName.includes('OpenOffice')) {
    if (text.includes('calc') || text.includes('cell') || text.includes('formula') || text.includes('chart') || text.includes('spreadsheet')) return 'Spreadsheet Calc & Formulas';
    if (text.includes('format') || text.includes('font') || text.includes('paragraph') || text.includes('margin') || text.includes('table')) return 'Text Formatting & Tables';
    return 'Word Processing Basics';
  }

  if (chName.includes('Presentation')) {
    return 'Slide Design & Presentation';
  }

  if (chName.includes('Internet') || chName.includes('Email')) {
    if (text.includes('email') || text.includes('smtp') || text.includes('pop') || text.includes('inbox')) return 'Email & Messaging';
    if (text.includes('browser') || text.includes('search') || text.includes('url') || text.includes('domain')) return 'Web Browsing & Search';
    return 'Internet Services & Protocols';
  }

  if (chName.includes('Ethics') || chName.includes('Cyber')) {
    if (text.includes('virus') || text.includes('malware') || text.includes('phishing') || text.includes('hack')) return 'Cyber Threats & Attacks';
    if (text.includes('firewall') || text.includes('encryption') || text.includes('security') || text.includes('it act')) return 'Cyber Laws & Protection';
    return 'Ethics & Digital Safety';
  }

  if (chName.includes('Tamil')) {
    return 'Tamil Computing & Tools';
  }

  // 12th Standard Specific Subtopics
  if (chName.includes('Multimedia')) return 'Multimedia Components & Design';
  if (chName.includes('PageMaker')) return 'PageMaker & Desktop Publishing';
  if (chName.includes('Database') || chName.includes('DBMS') || chName.includes('SQL')) return 'DBMS & SQL Queries';
  if (chName.includes('PHP')) return 'PHP Web Programming';
  if (chName.includes('Network')) return 'Computer Networks & Protocols';
  if (chName.includes('DNS')) return 'DNS Architecture & Domains';
  if (chName.includes('Cabling')) return 'Network Cables & Hardware';
  if (chName.includes('Open Source')) return 'Open Source Concepts';
  if (chName.includes('E-Commerce')) return 'E-Commerce Frameworks';
  if (chName.includes('Payment')) return 'Digital Payment Systems';
  if (chName.includes('EDI')) return 'EDI Architecture & Standards';

  return chName;
};

/**
 * Generates an aggregated list of topic tags with question counts across the subject
 */
export const extractSubjectTopics = (subject: SubjectData): TopicStat[] => {
  const map = new Map<string, { count: number; chapterNos: Set<number>; sampleQuestions: Question[] }>();

  subject.questions.forEach(q => {
    const topic = getQuestionSubTopic(q);
    if (!map.has(topic)) {
      map.set(topic, { count: 0, chapterNos: new Set(), sampleQuestions: [] });
    }
    const item = map.get(topic)!;
    item.count++;
    item.chapterNos.add(q.chapterNo);
    if (item.sampleQuestions.length < 3) {
      item.sampleQuestions.push(q);
    }
  });

  const list: TopicStat[] = [];
  map.forEach((val, key) => {
    list.push({
      name: key,
      count: val.count,
      chapterNos: Array.from(val.chapterNos).sort((a, b) => a - b),
      sampleQuestions: val.sampleQuestions
    });
  });

  // Sort by count descending, then alphabetical
  return list.sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
};
