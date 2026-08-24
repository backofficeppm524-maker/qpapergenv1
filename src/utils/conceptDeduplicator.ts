import { Question } from '../types';

/**
 * Returns a normalized concept key for a question to prevent semantic duplication
 * across different parts (e.g., asking "Pure vs Impure functions" in both 3M and 5M).
 */
export function getQuestionConceptKey(q: Question): string {
  const text = (q.questionText + ' ' + (q.questionTextTamil || '')).toLowerCase();

  // Chapter 1: Functions
  if (text.includes('pure') && text.includes('impure') || text.includes('தூய') && text.includes('தூய்மையற்ற')) {
    return 'ch1_pure_impure_functions';
  }
  if (text.includes('strlen') || text.includes('பக்க விளைவு') || text.includes('side effect')) {
    return 'ch1_side_effects_strlen';
  }
  if (text.includes('interface') && text.includes('implementation') || text.includes('இடைமுகம்') && text.includes('செயல்படுத்துதல்')) {
    return 'ch1_interface_implementation';
  }
  if (text.includes('parameter') || text.includes('argument') || text.includes('அளபுரு') || text.includes('செயலுருபு')) {
    return 'ch1_parameters_arguments';
  }
  if (text.includes('gcd') || text.includes('recursive') || text.includes('தற்சுழற்சி') || text.includes('subroutine') || text.includes('துணை நிரல்')) {
    return 'ch1_recursion_subroutines';
  }

  // Chapter 2: Data Abstraction
  if (text.includes('abstract data type') || text.includes('adt') || text.includes('அருவமாக்கப்பட்ட தரவு வகை')) {
    return 'ch2_adt';
  }
  if (text.includes('constructor') && text.includes('selector') || text.includes('ஆக்கிகள்') && text.includes('தெரிவிப்பிகள்')) {
    return 'ch2_constructors_selectors';
  }
  if (text.includes('pair') || text.includes('tuple') || text.includes('இணை')) {
    return 'ch2_pairs_tuples';
  }
  if (text.includes('concrete') || text.includes('உறுதியான')) {
    return 'ch2_concrete_representation';
  }

  // Chapter 3: Scoping
  if (text.includes('legb') || text.includes('scope') || text.includes('வரையெல்லை') || text.includes('local') || text.includes('global') || text.includes('enclosed') || text.includes('built-in')) {
    return 'ch3_scoping_legb';
  }
  if (text.includes('module') || text.includes('தொகுதி') || text.includes('access control') || text.includes('அணுகல் கட்டுப்பாடு')) {
    return 'ch3_modules_access';
  }

  // Chapter 4: Algorithmic Strategies
  if (text.includes('bubble sort') || text.includes('குமிழி வரிசையாக்கம்')) {
    return 'ch4_bubble_sort';
  }
  if (text.includes('linear search') || text.includes('வரிசைமுறை தேடல்')) {
    return 'ch4_linear_search';
  }
  if (text.includes('binary search') || text.includes('இரு இரும தேடல்') || text.includes('இருமத் தேடல்')) {
    return 'ch4_binary_search';
  }
  if (text.includes('insertion sort') || text.includes('செருகு வரிசையாக்கம்')) {
    return 'ch4_insertion_sort';
  }
  if (text.includes('selection sort') || text.includes('தேர்ந்தெடுப்பு வரிசையாக்கம்')) {
    return 'ch4_selection_sort';
  }
  if (text.includes('dynamic programming') || text.includes('இயங்கு நிரலாக்கம்') || text.includes('fibonacci')) {
    return 'ch4_dynamic_programming';
  }
  if (text.includes('time complexity') || text.includes('space complexity') || text.includes('நேர சிக்கல்') || text.includes('நினைவக சிக்கல்') || text.includes('big o') || text.includes('asymptotic')) {
    return 'ch4_complexity_asymptotic';
  }

  // Chapter 5: Python Variables & Operators
  if (text.includes('literal') || text.includes('மெய்ப்பொருள்கள்') || text.includes('tokens') || text.includes('வில்லைகள்')) {
    return 'ch5_tokens_literals';
  }
  if (text.includes('operator') || text.includes('செயற்குறி') || text.includes('ternary') || text.includes('நிபந்தனை')) {
    return 'ch5_operators';
  }
  if (text.includes('escape sequence') || text.includes('விடுபடு வரிசை')) {
    return 'ch5_escape_sequences';
  }

  // Chapter 6: Control Structures
  if (text.includes('nested loop') || text.includes('பின்னலான') || text.includes('while') || text.includes('for') || text.includes('range')) {
    return 'ch6_loops_iteration';
  }
  if (text.includes('if..else') || text.includes('elif') || text.includes('கிளைபிரித்தல்') || text.includes('branching')) {
    return 'ch6_branching_if';
  }
  if (text.includes('break') || text.includes('continue') || text.includes('pass') || text.includes('தாவல் கூற்றுகள்')) {
    return 'ch6_jump_statements';
  }

  // Chapter 7: Python Functions
  if (text.includes('anonymous') || text.includes('lambda') || text.includes('பெயரற்ற')) {
    return 'ch7_lambda_functions';
  }
  if (text.includes('default argument') || text.includes('keyword argument') || text.includes('variable length') || text.includes('கொடாநிலை செயலுருபு')) {
    return 'ch7_function_arguments';
  }
  if (text.includes('recursive') || text.includes('factorial') || text.includes('தற்சுழற்சி')) {
    return 'ch7_python_recursion';
  }

  // Chapter 8: Strings
  if (text.includes('slice') || text.includes('வெட்டுதல்') || text.includes('பிரித்தல்')) {
    return 'ch8_string_slicing';
  }
  if (text.includes('format') || text.includes('வடிவூட்டல்') || text.includes('replace') || text.includes('count')) {
    return 'ch8_string_functions';
  }

  // Chapter 9: Lists, Tuples, Sets, Dicts
  if (text.includes('list comprehension') || text.includes('பட்டியல் உருவாக்க முறை')) {
    return 'ch9_list_comprehension';
  }
  if (text.includes('tuple') && text.includes('list') || text.includes('பட்டியல்') && text.includes('டியூப்பிள்')) {
    return 'ch9_list_vs_tuple';
  }
  if (text.includes('set') || text.includes('கணம்') || text.includes('union') || text.includes('intersection')) {
    return 'ch9_set_operations';
  }
  if (text.includes('dictionary') || text.includes('அகராதி')) {
    return 'ch9_dictionary';
  }

  // Chapter 10: Classes and Objects
  if (text.includes('constructor') || text.includes('__init__') || text.includes('destructor') || text.includes('__del__') || text.includes('ஆக்கி') || text.includes('அழிப்பி')) {
    return 'ch10_constructor_destructor';
  }
  if (text.includes('private') || text.includes('public') || text.includes('தனிப்பட்ட') || text.includes('பொது')) {
    return 'ch10_access_specifiers';
  }

  // Chapter 11: Database Concepts
  if (text.includes('primary key') || text.includes('foreign key') || text.includes('முதன்மையான திறவுகோல்') || text.includes('வெளிநாட்டு திறவுகோல்') || text.includes('candidate key')) {
    return 'ch11_db_keys';
  }
  if (text.includes('er model') || text.includes('உறவுநிலை மாதிரி') || text.includes('relationship') || text.includes('cardinality')) {
    return 'ch11_er_model';
  }
  if (text.includes('rdbms') || text.includes('dbms') || text.includes('dba') || text.includes('components') || text.includes('கூறுகள்')) {
    return 'ch11_dbms_components';
  }

  // Chapter 12: SQL
  if (text.includes('ddl') || text.includes('dml') || text.includes('dql') || text.includes('dcl') || text.includes('tcl')) {
    return 'ch12_sql_components';
  }
  if (text.includes('constraint') || text.includes('கட்டுப்பாடுகள்') || text.includes('unique') || text.includes('check')) {
    return 'ch12_sql_constraints';
  }
  if (text.includes('select') || text.includes('group by') || text.includes('order by') || text.includes('having')) {
    return 'ch12_sql_queries';
  }

  // Chapter 13: CSV Files
  if (text.includes('reader') || text.includes('writer') || text.includes('delimiter') || text.includes('பிரிப்பான்')) {
    return 'ch13_csv_read_write';
  }
  if (text.includes('dictreader') || text.includes('dictwriter')) {
    return 'ch13_csv_dict_reader';
  }

  // Chapter 14: C++ & Python
  if (text.includes('mingw') || text.includes('g++') || text.includes('சுமூகமான')) {
    return 'ch14_cpp_mingw';
  }
  if (text.includes('sys.argv') || text.includes('getopt') || text.includes('செயலுருபுகள்')) {
    return 'ch14_cpp_getopt';
  }

  // Chapter 15: Data Manipulation with SQL
  if (text.includes('fetchone') || text.includes('fetchall') || text.includes('fetchmany') || text.includes('cursor')) {
    return 'ch15_sqlite_cursor_fetch';
  }
  if (text.includes('record') || text.includes('query') || text.includes('sql')) {
    return 'ch15_sqlite_records';
  }

  // Chapter 16: Pyplot
  if (text.includes('bar') || text.includes('pie') || text.includes('hist') || text.includes('பட்டை வரைபடம்') || text.includes('வட்ட வரைபடம்')) {
    return 'ch16_pyplot_chart_types';
  }
  if (text.includes('plot') || text.includes('show') || text.includes('savefig') || text.includes('காட்சிப்படுத்தல்')) {
    return 'ch16_pyplot_general';
  }

  // Default fallback: chapter + first 3 key words
  const clean = text.replace(/[^a-zA-Z0-9\u0B80-\u0BFF\s]/g, '').trim().split(/\s+/).slice(0, 3).join('_');
  return `ch${q.chapterNo}_${clean || q.id}`;
}

/**
 * Checks if two questions are conceptually colliding/repeating
 */
export function areQuestionsColliding(q1: Question, q2: Question): boolean {
  if (q1.id === q2.id) return true;
  
  const key1 = getQuestionConceptKey(q1);
  const key2 = getQuestionConceptKey(q2);
  
  if (key1 === key2 && key1 !== '') {
    return true;
  }

  // Same chapter with high text overlap
  if (q1.chapterNo === q2.chapterNo) {
    const w1 = new Set(q1.questionText.toLowerCase().split(/\s+/).filter(w => w.length > 3));
    const w2 = new Set(q2.questionText.toLowerCase().split(/\s+/).filter(w => w.length > 3));
    let shared = 0;
    w1.forEach(w => {
      if (w2.has(w)) shared++;
    });
    if (w1.size > 0 && (shared / Math.min(w1.size, w2.size)) > 0.6) {
      return true;
    }
  }

  return false;
}
