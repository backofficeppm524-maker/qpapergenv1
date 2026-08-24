import fs from 'fs';
import { Question } from '../src/types';

// ==========================================
// CHAPTER 6: Conditional Statements in PHP (20 questions: 10 1M, 5 2M, 3 3M, 2 5M)
// ==========================================
const ch6_1m: Question[] = [
  {
    id: "ca12-ch6-1m-1",
    chapterNo: 6,
    chapterName: "Conditional Statements in PHP",
    chapterNameTamil: "PHP நிபந்தனைக் கூற்றுகள்",
    marks: 1,
    type: "mcq",
    questionText: "What will be the output of the following PHP code?\n<?php\n  $x = 0;\n  if ($x == 0) {\n    echo \"hi\";\n  } else {\n    echo \"how u r\";\n  }\n?>",
    questionTextTamil: "பின்வரும் PHP குறிமுறையின் வெளியீடு என்னவாக இருக்கும்?\n<?php\n  $x = 0;\n  if ($x == 0) {\n    echo \"hi\";\n  } else {\n    echo \"how u r\";\n  }\n?>",
    options: {
      A: "how u r",
      B: "hi",
      C: "error",
      D: "no output"
    },
    optionsTamil: {
      A: "how u r",
      B: "hi",
      C: "error",
      D: "வெளியீடு இல்லை"
    },
    correctOption: "B",
    answer: "B) hi",
    answerTamil: "B) hi",
    isBookBack: true
  },
  {
    id: "ca12-ch6-1m-2",
    chapterNo: 6,
    chapterName: "Conditional Statements in PHP",
    chapterNameTamil: "PHP நிபந்தனைக் கூற்றுகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which statement is used to execute some code only if a specified condition is true?",
    questionTextTamil: "குறிப்பிட்ட நிபந்தனை மெய்யாக இருக்கும் போது மட்டும் சில குறிமுறைகளை செயல்படுத்த பயன்படும் கூற்று எது?",
    options: {
      A: "if statement",
      B: "switch statement",
      C: "while statement",
      D: "for statement"
    },
    optionsTamil: {
      A: "if கூற்று",
      B: "switch கூற்று",
      C: "while கூற்று",
      D: "for கூற்று"
    },
    correctOption: "A",
    answer: "A) if statement",
    answerTamil: "A) if கூற்று",
    isBookBack: true
  },
  {
    id: "ca12-ch6-1m-3",
    chapterNo: 6,
    chapterName: "Conditional Statements in PHP",
    chapterNameTamil: "PHP நிபந்தனைக் கூற்றுகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which statement executes some code if a condition is true and another code if that condition is false?",
    questionTextTamil: "நிபந்தனை மெய்யாக இருந்தால் ஒரு பகுதியையும், பொய்யாக இருந்தால் மற்றொரு பகுதியையும் செயல்படுத்தும் கூற்று எது?",
    options: {
      A: "if statement",
      B: "if...else statement",
      C: "switch statement",
      D: "for statement"
    },
    optionsTamil: {
      A: "if கூற்று",
      B: "if...else கூற்று",
      C: "switch கூற்று",
      D: "for கூற்று"
    },
    correctOption: "B",
    answer: "B) if...else statement",
    answerTamil: "B) if...else கூற்று",
    isBookBack: true
  },
  {
    id: "ca12-ch6-1m-4",
    chapterNo: 6,
    chapterName: "Conditional Statements in PHP",
    chapterNameTamil: "PHP நிபந்தனைக் கூற்றுகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which statement is used to select one of many blocks of code to be executed?",
    questionTextTamil: "பல குறிமுறைத் தொகுதிகளில் ஒன்றை மட்டும் தேர்வு செய்து செயல்படுத்த பயன்படும் கூற்று எது?",
    options: {
      A: "switch statement",
      B: "if statement",
      C: "while statement",
      D: "for statement"
    },
    optionsTamil: {
      A: "switch கூற்று",
      B: "if கூற்று",
      C: "while கூற்று",
      D: "for கூற்று"
    },
    correctOption: "A",
    answer: "A) switch statement",
    answerTamil: "A) switch கூற்று",
    isBookBack: true
  },
  {
    id: "ca12-ch6-1m-5",
    chapterNo: 6,
    chapterName: "Conditional Statements in PHP",
    chapterNameTamil: "PHP நிபந்தனைக் கூற்றுகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which keyword is used to stop the execution of more code inside a switch block?",
    questionTextTamil: "switch தொகுதியில் அடுத்தடுத்த குறியீடுகள் செயல்படுவதைத் தடுக்க பயன்படும் சிறப்புச் சொல் எது?",
    options: {
      A: "stop",
      B: "exit",
      C: "break",
      D: "end"
    },
    optionsTamil: {
      A: "stop",
      B: "exit",
      C: "break",
      D: "end"
    },
    correctOption: "C",
    answer: "C) break",
    answerTamil: "C) break",
    isBookBack: true
  },
  {
    id: "ca12-ch6-1m-6",
    chapterNo: 6,
    chapterName: "Conditional Statements in PHP",
    chapterNameTamil: "PHP நிபந்தனைக் கூற்றுகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which keyword is used in a switch statement if there is no matching case found?",
    questionTextTamil: "switch கூற்றில் எந்த நிபந்தனையும் பொருந்தாத போது செயல்படுத்தப்படும் பகுதி எது?",
    options: {
      A: "else",
      B: "default",
      C: "other",
      D: "fallback"
    },
    optionsTamil: {
      A: "else",
      B: "default",
      C: "other",
      D: "fallback"
    },
    correctOption: "B",
    answer: "B) default",
    answerTamil: "B) default",
    isBookBack: true
  },
  {
    id: "ca12-ch6-1m-7",
    chapterNo: 6,
    chapterName: "Conditional Statements in PHP",
    chapterNameTamil: "PHP நிபந்தனைக் கூற்றுகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which statement executes different codes for more than two conditions?",
    questionTextTamil: "இரண்டுக்கும் மேற்பட்ட நிபந்தனைகளுக்கு வெவ்வேறு குறிமுறைகளை செயல்படுத்தப் பயன்படுவது எது?",
    options: {
      A: "if...elseif...else statement",
      B: "if statement",
      C: "goto statement",
      D: "continue statement"
    },
    optionsTamil: {
      A: "if...elseif...else கூற்று",
      B: "if கூற்று",
      C: "goto கூற்று",
      D: "continue கூற்று"
    },
    correctOption: "A",
    answer: "A) if...elseif...else statement",
    answerTamil: "A) if...elseif...else கூற்று",
    isBookBack: true
  },
  {
    id: "ca12-ch6-1m-8",
    chapterNo: 6,
    chapterName: "Conditional Statements in PHP",
    chapterNameTamil: "PHP நிபந்தனைக் கூற்றுகள்",
    marks: 1,
    type: "mcq",
    questionText: "In an if statement, the condition is always enclosed within _________.",
    questionTextTamil: "if கூற்றில், நிபந்தனை எதற்குள் கொடுக்கப்பட வேண்டும்?",
    options: {
      A: "parentheses ()",
      B: "curly braces {}",
      C: "square brackets []",
      D: "angle brackets <>"
    },
    optionsTamil: {
      A: "பிறை அடைப்புக்குறிகள் ()",
      B: "நெளிவு அடைப்புக்குறிகள் {}",
      C: "சதுர அடைப்புக்குறிகள் []",
      D: "கோண அடைப்புக்குறிகள் <>"
    },
    correctOption: "A",
    answer: "A) parentheses ()",
    answerTamil: "A) பிறை அடைப்புக்குறிகள் ()",
    isBookBack: true
  },
  {
    id: "ca12-ch6-1m-9",
    chapterNo: 6,
    chapterName: "Conditional Statements in PHP",
    chapterNameTamil: "PHP நிபந்தனைக் கூற்றுகள்",
    marks: 1,
    type: "mcq",
    questionText: "What will be output if $a = 15; and condition is if ($a > 10 && $a < 20)?",
    questionTextTamil: "$a = 15 எனில் ($a > 10 && $a < 20) என்ற நிபந்தனை தரும் விடை என்ன?",
    options: {
      A: "TRUE",
      B: "FALSE",
      C: "NULL",
      D: "ERROR"
    },
    optionsTamil: {
      A: "TRUE (மெய்)",
      B: "FALSE (பொய்)",
      C: "NULL",
      D: "ERROR"
    },
    correctOption: "A",
    answer: "A) TRUE",
    answerTamil: "A) TRUE (மெய்)",
    isBookBack: true
  },
  {
    id: "ca12-ch6-1m-10",
    chapterNo: 6,
    chapterName: "Conditional Statements in PHP",
    chapterNameTamil: "PHP நிபந்தனைக் கூற்றுகள்",
    marks: 1,
    type: "mcq",
    questionText: "PHP Conditional Statements are also known as ____________.",
    questionTextTamil: "PHP நிபந்தனைக் கூற்றுகள் எவ்வாறு அழைக்கப்படுகின்றன?",
    options: {
      A: "Decision Making Statements",
      B: "Iteration Statements",
      C: "Data Types",
      D: "Array Elements"
    },
    optionsTamil: {
      A: "தீர்மானம் எடுக்கும் கூற்றுகள் (Decision Making Statements)",
      B: "மடக்கு கூற்றுகள்",
      C: "தரவினங்கள்",
      D: "அணி கூறுகள்"
    },
    correctOption: "A",
    answer: "A) Decision Making Statements",
    answerTamil: "A) தீர்மானம் எடுக்கும் கூற்றுகள் (Decision Making Statements)",
    isBookBack: true
  }
];

const ch6_2m: Question[] = [
  {
    id: "ca12-ch6-2m-1",
    chapterNo: 6,
    chapterName: "Conditional Statements in PHP",
    chapterNameTamil: "PHP நிபந்தனைக் கூற்றுகள்",
    marks: 2,
    type: "short",
    questionText: "What are Conditional Statements in PHP?",
    questionTextTamil: "PHP-ல் நிபந்தனைக் கூற்றுகள் என்பவை யாவை?",
    answer: "Conditional statements perform different actions based on whether a specified logical condition evaluates to TRUE or FALSE.",
    answerTamil: "நிபந்தனைக் கூற்றுகள் என்பது கொடுக்கப்பட்ட ஒரு தருக்க நிபந்தனையின் முடிவைப் பொறுத்து (மெய் அல்லது பொய்) வெவ்வேறு செயல்களைச் செய்யப் பயன்படும் கூற்றுகளாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch6-2m-2",
    chapterNo: 6,
    chapterName: "Conditional Statements in PHP",
    chapterNameTamil: "PHP நிபந்தனைக் கூற்றுகள்",
    marks: 2,
    type: "short",
    questionText: "List out the Conditional Statements in PHP.",
    questionTextTamil: "PHP-ல் உள்ள நிபந்தனைக் கூற்றுகளைப் பட்டியலிடுக.",
    answer: "Types of conditional statements in PHP:\n1. if statement\n2. if...else statement\n3. if...elseif...else statement\n4. switch statement.",
    answerTamil: "PHP நிபந்தனைக் கூற்றுகள்:\n1. if கூற்று\n2. if...else கூற்று\n3. if...elseif...else கூற்று\n4. switch கூற்று.",
    isBookBack: true
  },
  {
    id: "ca12-ch6-2m-3",
    chapterNo: 6,
    chapterName: "Conditional Statements in PHP",
    chapterNameTamil: "PHP நிபந்தனைக் கூற்றுகள்",
    marks: 2,
    type: "short",
    questionText: "Write the syntax for if statement in PHP.",
    questionTextTamil: "PHP-ல் if கூற்றிற்கான தொடரியலை எழுதுக.",
    answer: "Syntax:\nif (condition) {\n    // code to be executed if condition is true;\n}",
    answerTamil: "தொடரியல்:\nif (நிபந்தனை) {\n    // நிபந்தனை மெய்யாக இருக்கும் போது செயல்படுத்த வேண்டிய குறிமுறை;\n}",
    isBookBack: true
  },
  {
    id: "ca12-ch6-2m-4",
    chapterNo: 6,
    chapterName: "Conditional Statements in PHP",
    chapterNameTamil: "PHP நிபந்தனைக் கூற்றுகள்",
    marks: 2,
    type: "short",
    questionText: "Write the syntax of if...else statement.",
    questionTextTamil: "if...else கூற்றிற்கான தொடரியலை எழுதுக.",
    answer: "Syntax:\nif (condition) {\n    // code executed if condition is true;\n} else {\n    // code executed if condition is false;\n}",
    answerTamil: "தொடரியல்:\nif (நிபந்தனை) {\n    // நிபந்தனை மெய்யானால் செயல்படும் தொகுதி;\n} else {\n    // நிபந்தனை பொய்யானால் செயல்படும் தொகுதி;\n}",
    isBookBack: true
  },
  {
    id: "ca12-ch6-2m-5",
    chapterNo: 6,
    chapterName: "Conditional Statements in PHP",
    chapterNameTamil: "PHP நிபந்தனைக் கூற்றுகள்",
    marks: 2,
    type: "short",
    questionText: "What is the use of 'default' statement in switch?",
    questionTextTamil: "switch கூற்றில் 'default' கூற்றின் பயன் யாது?",
    answer: "The 'default' keyword executes a fallback block of statements if none of the specified case values match the switch expression.",
    answerTamil: "'default' கூற்றானது கொடுக்கப்பட்ட எந்த case மதிப்பும் switch கோவைக்கு பொருந்தாத போது செயல்படுத்தப்படும் இயல்புநிலை தொகுதியாகும்.",
    isBookBack: true
  }
];

const ch6_3m: Question[] = [
  {
    id: "ca12-ch6-3m-1",
    chapterNo: 6,
    chapterName: "Conditional Statements in PHP",
    chapterNameTamil: "PHP நிபந்தனைக் கூற்றுகள்",
    marks: 3,
    type: "brief",
    questionText: "Differentiate if...else and switch statement in PHP.",
    questionTextTamil: "PHP-ல் if...else மற்றும் switch கூற்றுகளை வேறுபடுத்துக.",
    answer: "1. if...else tests boolean conditions, ranges, and complex expressions; switch tests an expression against multiple discrete constant values.\n2. if...else evaluates sequentially; switch branches directly using jump tables or case constants.\n3. switch requires break statements to avoid fall-through.",
    answerTamil: "1. if...else தருக்க நிபந்தனைகள் மற்றும் வரம்புகளை சோதிக்கிறது; switch நிலையான மதிப்புகளுடன் ஒப்பிடுகிறது.\n2. if...else வரிசையாக நிபந்தனைகளைச் சோதிக்கும்; switch நேரடியாகப் பொருந்தும் case-க்குத் தாவும்.\n3. switch-ல் தொடர் இயக்கத்தைத் தவிர்க்க break கூற்று அவசியம்.",
    isBookBack: true
  },
  {
    id: "ca12-ch6-3m-2",
    chapterNo: 6,
    chapterName: "Conditional Statements in PHP",
    chapterNameTamil: "PHP நிபந்தனைக் கூற்றுகள்",
    marks: 3,
    type: "brief",
    questionText: "Write a short note on if...elseif...else statement with syntax.",
    questionTextTamil: "if...elseif...else கூற்று பற்றி தொடரியலுடன் சிறுகுறிப்பு வரைக.",
    answer: "The if...elseif...else statement evaluates multiple conditions in sequence.\nSyntax:\nif (condition1) {\n    // code if condition1 is true;\n} elseif (condition2) {\n    // code if condition2 is true;\n} else {\n    // code if all conditions are false;\n}",
    answerTamil: "பல நிபந்தனைகளை வரிசையாக சோதிக்க if...elseif...else கூற்று பயன்படுகிறது.\nதொடரியல்:\nif (நிபந்தனை 1) {\n    // நிபந்தனை 1 மெய்யானால்;\n} elseif (நிபந்தனை 2) {\n    // நிபந்தனை 2 மெய்யானால்;\n} else {\n    // எதுவும் பொருந்தவில்லை எனில்;\n}",
    isBookBack: true
  },
  {
    id: "ca12-ch6-3m-3",
    chapterNo: 6,
    chapterName: "Conditional Statements in PHP",
    chapterNameTamil: "PHP நிபந்தனைக் கூற்றுகள்",
    marks: 3,
    type: "brief",
    questionText: "Write the syntax of switch statement in PHP.",
    questionTextTamil: "PHP-ல் switch கூற்றிற்கான தொடரியலை எழுதுக.",
    answer: "Syntax:\nswitch (n) {\n    case label1:\n        // code;\n        break;\n    case label2:\n        // code;\n        break;\n    default:\n        // code;\n}",
    answerTamil: "தொடரியல்:\nswitch (கோவை) {\n    case மதிப்பு 1:\n        // தொகுதி 1;\n        break;\n    case மதிப்பு 2:\n        // தொகுதி 2;\n        break;\n    default:\n        // இயல்புநிலை தொகுதி;\n}",
    isBookBack: true
  }
];

const ch6_5m: Question[] = [
  {
    id: "ca12-ch6-5m-1",
    chapterNo: 6,
    chapterName: "Conditional Statements in PHP",
    chapterNameTamil: "PHP நிபந்தனைக் கூற்றுகள்",
    marks: 5,
    type: "essay",
    questionText: "Explain if...elseif...else statement with an example program.",
    questionTextTamil: "if...elseif...else கூற்றினை எடுத்துக்காட்டு நிரலுடன் விரிவாக விளக்குக.",
    answer: "The if...elseif...else statement is used when more than two choices are available based on differing conditions.\n\nWorking:\n- Condition 1 is evaluated. If true, its block executes.\n- If false, the interpreter moves to evaluate elseif condition 2.\n- If none of the conditions evaluate to true, the else block executes.\n\nExample Program:\n<?php\n$marks = 78;\nif ($marks >= 80) {\n    echo \"Grade: Distinction\";\n} elseif ($marks >= 60) {\n    echo \"Grade: First Class\";\n} elseif ($marks >= 40) {\n    echo \"Grade: Second Class\";\n} else {\n    echo \"Grade: Fail\";\n}\n?>",
    answerTamil: "இரண்டுக்கும் மேற்பட்ட நிபந்தனைகளை வரிசையாக சரிபார்த்து தீர்மானம் எடுக்க if...elseif...else கூற்று பயன்படுகிறது.\n\nசெயல்முறை:\n- முதல் நிபந்தனை சோதிக்கப்படுகிறது. அது மெய்யானால் அந்தத் தொகுதி இயங்கும்.\n- பொய்யானால் அடுத்த elseif நிபந்தனை சோதிக்கப்படும்.\n- எந்த நிபந்தனையும் பொருந்தவில்லை எனில் இறுதி else தொகுதி செயல்படுத்தப்படும்.\n\nஎடுத்துக்காட்டு நிரல்:\n<?php\n$marks = 85;\nif ($marks >= 80) {\n    echo \"தகுதி: சிறப்புத் தேர்ச்சி\";\n} elseif ($marks >= 60) {\n    echo \"தகுதி: முதல் வகுப்பு\";\n} elseif ($marks >= 35) {\n    echo \"தகுதி: இரண்டாம் வகுப்பு\";\n} else {\n    echo \"தகுதி: தோல்வி\";\n}\n?>",
    isBookBack: true
  },
  {
    id: "ca12-ch6-5m-2",
    chapterNo: 6,
    chapterName: "Conditional Statements in PHP",
    chapterNameTamil: "PHP நிபந்தனைக் கூற்றுகள்",
    marks: 5,
    type: "essay",
    questionText: "Explain switch statement with an example program.",
    questionTextTamil: "switch கூற்றினை எடுத்துக்காட்டு நிரலுடன் விரிவாக விளக்குக.",
    answer: "The switch statement selects and executes one of many code blocks based on the value of a single variable or expression.\n\nKey Concepts:\n- The expression is evaluated once.\n- The value is compared with the values of each case.\n- If a match is found, associated code executes.\n- break prevents execution from falling through to subsequent cases.\n- default handles non-matching cases.\n\nExample Program:\n<?php\n$day = \"3\";\nswitch ($day) {\n    case \"1\": echo \"Sunday\"; break;\n    case \"2\": echo \"Monday\"; break;\n    case \"3\": echo \"Tuesday\"; break;\n    case \"4\": echo \"Wednesday\"; break;\n    default: echo \"Invalid Day\";\n}\n?>",
    answerTamil: "switch கூற்றானது ஒரு கோவையின் மதிப்பைப் பொருத்து பல தேர்வுகளில் ஒன்றைத் தேர்ந்தெடுத்து செயல்படுத்த உதவுகிறது.\n\nமுக்கிய கூறுகள்:\n- கோவை ஒருமுறை மட்டுமே மதிப்பிடப்படுகிறது.\n- அதன் மதிப்பு ஒவ்வொரு case மதிப்புடனும் ஒப்பிடப்படுகிறது.\n- பொருந்தும் case கண்டறியப்பட்டதும் அதன் குறிமுறை இயங்கும்.\n- break கூற்று அடுத்தடுத்த case-கள் இயங்குவதைத் தடுக்கிறது.\n- default பகுதி எதுவும் பொருந்தாத போது இயங்கும்.\n\nமாதிரி நிரல்:\n<?php\n$favColor = \"Red\";\nswitch ($favColor) {\n    case \"Red\": echo \"உங்களுக்கு பிடித்த நிறம் சிவப்பு!\"; break;\n    case \"Blue\": echo \"உங்களுக்கு பிடித்த நிறம் நீலம்!\"; break;\n    default: echo \"வேறு நிறம்!\";\n}\n?>",
    isBookBack: true
  }
];

// ==========================================
// CHAPTER 7: Loops in PHP (21 questions: 10 1M, 5 2M, 3 3M, 3 5M)
// ==========================================
const ch7_1m: Question[] = [
  {
    id: "ca12-ch7-1m-1",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP மடக்குகள்",
    marks: 1,
    type: "mcq",
    questionText: "How many loop types are supported in PHP?",
    questionTextTamil: "PHP-ல் எத்தனை வகையான மடக்குகள் ஆதரிக்கப்படுகின்றன?",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    optionsTamil: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    correctOption: "C",
    answer: "C) 4",
    answerTamil: "C) 4 (for, while, do-while, foreach)",
    isBookBack: true
  },
  {
    id: "ca12-ch7-1m-2",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP மடக்குகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which loop is designed specifically for looping through array elements in PHP?",
    questionTextTamil: "PHP-ல் அணிகளின் உறுப்புகளை சுழற்சி முறையில் அணுக சிறப்பாக வடிவமைக்கப்பட்ட மடக்கு எது?",
    options: {
      A: "for",
      B: "while",
      C: "do...while",
      D: "foreach"
    },
    optionsTamil: {
      A: "for",
      B: "while",
      C: "do...while",
      D: "foreach"
    },
    correctOption: "D",
    answer: "D) foreach",
    answerTamil: "D) foreach",
    isBookBack: true
  },
  {
    id: "ca12-ch7-1m-3",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP மடக்குகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which loop is an exit-controlled loop in PHP?",
    questionTextTamil: "PHP-ல் வெளியேறும் கட்டுப்பாட்டு மடக்கு (exit-controlled loop) எது?",
    options: {
      A: "for",
      B: "while",
      C: "do...while",
      D: "foreach"
    },
    optionsTamil: {
      A: "for",
      B: "while",
      C: "do...while",
      D: "foreach"
    },
    correctOption: "C",
    answer: "C) do...while",
    answerTamil: "C) do...while",
    isBookBack: true
  },
  {
    id: "ca12-ch7-1m-4",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP மடக்குகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which loop executes a block of code at least once even if condition is false initially?",
    questionTextTamil: "தொடக்கத்திலேயே நிபந்தனை பொய்யாக இருந்தாலும் குறைந்தபட்சம் ஒரு முறையாவது குறிமுறையை இயக்கும் மடக்கு எது?",
    options: {
      A: "while",
      B: "do...while",
      C: "for",
      D: "foreach"
    },
    optionsTamil: {
      A: "while",
      B: "do...while",
      C: "for",
      D: "foreach"
    },
    correctOption: "B",
    answer: "B) do...while",
    answerTamil: "B) do...while",
    isBookBack: true
  },
  {
    id: "ca12-ch7-1m-5",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP மடக்குகள்",
    marks: 1,
    type: "mcq",
    questionText: "What will be the output of: for ($i=0; $i<3; $i++) { echo $i; }?",
    questionTextTamil: "for ($i=0; $i<3; $i++) { echo $i; } என்ற குறிமுறையின் வெளியீடு என்ன?",
    options: {
      A: "012",
      B: "123",
      C: "0123",
      D: "3"
    },
    optionsTamil: {
      A: "012",
      B: "123",
      C: "0123",
      D: "3"
    },
    correctOption: "A",
    answer: "A) 012",
    answerTamil: "A) 012",
    isBookBack: true
  },
  {
    id: "ca12-ch7-1m-6",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP மடக்குகள்",
    marks: 1,
    type: "mcq",
    questionText: "In for loop, how many parameters are separated by semicolons in header?",
    questionTextTamil: "for மடக்கின் தலைப்பில் எத்தனை அளபுருக்கள் அரைப்புள்ளியால் (;) பிரிக்கப்பட்டுள்ளன?",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    optionsTamil: {
      A: "1",
      B: "2",
      C: "3 (init, condition, update)",
      D: "4"
    },
    correctOption: "C",
    answer: "C) 3",
    answerTamil: "C) 3 (init, condition, update)",
    isBookBack: true
  },
  {
    id: "ca12-ch7-1m-7",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP மடக்குகள்",
    marks: 1,
    type: "mcq",
    questionText: "A loop that never terminates is known as a(n) _________ loop.",
    questionTextTamil: "எப்போதும் முடிவடையாத மடக்கு எவ்வாறு அழைக்கப்படுகிறது?",
    options: {
      A: "infinite",
      B: "definite",
      C: "nested",
      D: "finite"
    },
    optionsTamil: {
      A: "முடிவிலா மடக்கு (infinite loop)",
      B: "முடிவுள்ள மடக்கு",
      C: "பின்னலான மடக்கு",
      D: "எல்லை மடக்கு"
    },
    correctOption: "A",
    answer: "A) infinite",
    answerTamil: "A) முடிவிலா மடக்கு (infinite loop)",
    isBookBack: true
  },
  {
    id: "ca12-ch7-1m-8",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP மடக்குகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which keyword is used to skip the rest of the current loop iteration and continue with next?",
    questionTextTamil: "மடக்கின் தற்போதைய சுழற்சியைத் தவிர்த்து அடுத்த சுழற்சிக்குத் தாவ பயன்படும் கூற்று எது?",
    options: {
      A: "break",
      B: "continue",
      C: "goto",
      D: "pass"
    },
    optionsTamil: {
      A: "break",
      B: "continue",
      C: "goto",
      D: "pass"
    },
    correctOption: "B",
    answer: "B) continue",
    answerTamil: "B) continue",
    isBookBack: true
  },
  {
    id: "ca12-ch7-1m-9",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP மடக்குகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which loop is an entry-controlled loop in PHP?",
    questionTextTamil: "PHP-ல் நுழையும் போதே நிபந்தனையை சோதிக்கும் மடக்கு (entry-controlled loop) எது?",
    options: {
      A: "while",
      B: "do...while",
      C: "switch",
      D: "if"
    },
    optionsTamil: {
      A: "while",
      B: "do...while",
      C: "switch",
      D: "if"
    },
    correctOption: "A",
    answer: "A) while",
    answerTamil: "A) while",
    isBookBack: true
  },
  {
    id: "ca12-ch7-1m-10",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP மடக்குகள்",
    marks: 1,
    type: "mcq",
    questionText: "The 'foreach' loop works only on _________ and objects.",
    questionTextTamil: "'foreach' மடக்கு எவற்றின் மீது மட்டுமே செயல்படுகிறது?",
    options: {
      A: "arrays",
      B: "strings",
      C: "floats",
      D: "integers"
    },
    optionsTamil: {
      A: "அணிகள் (arrays)",
      B: "சரங்கள்",
      C: "மிதப்புப் புள்ளி எண்கள்",
      D: "முழு எண்கள்"
    },
    correctOption: "A",
    answer: "A) arrays",
    answerTamil: "A) அணிகள் (arrays)",
    isBookBack: true
  }
];

const ch7_2m: Question[] = [
  {
    id: "ca12-ch7-2m-1",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP மடக்குகள்",
    marks: 2,
    type: "short",
    questionText: "What are looping structures in PHP?",
    questionTextTamil: "PHP-ல் மடக்கு அமைப்புகள் என்பவை யாவை?",
    answer: "Looping structures (iterative statements) execute a block of code repeatedly as long as a specified condition remains true.",
    answerTamil: "மடக்கு அமைப்புகள் என்பது ஒரு குறிப்பிட்ட நிபந்தனை மெய்யாக இருக்கும் வரை ஒரு குறிமுறைத் தொகுதியை மீண்டும் மீண்டும் செயல்படுத்தும் அமைப்புகளாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch7-2m-2",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP மடக்குகள்",
    marks: 2,
    type: "short",
    questionText: "List out the four looping structures in PHP.",
    questionTextTamil: "PHP-ல் உள்ள நான்கு வகையான மடக்குகளைப் பட்டியலிடுக.",
    answer: "The four loop types in PHP:\n1. for loop\n2. while loop\n3. do...while loop\n4. foreach loop.",
    answerTamil: "PHP-ன் நான்கு வகை மடக்குகள்:\n1. for மடக்கு\n2. while மடக்கு\n3. do...while மடக்கு\n4. foreach மடக்கு.",
    isBookBack: true
  },
  {
    id: "ca12-ch7-2m-3",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP மடக்குகள்",
    marks: 2,
    type: "short",
    questionText: "Write the syntax for 'while' loop in PHP.",
    questionTextTamil: "PHP-ல் 'while' மடக்கிற்கான தொடரியலை எழுதுக.",
    answer: "Syntax:\nwhile (condition) {\n    // code to be executed;\n    // increment / decrement;\n}",
    answerTamil: "தொடரியல்:\nwhile (நிபந்தனை) {\n    // செயல்படுத்த வேண்டிய குறிமுறை;\n    // மிகுப்பு அல்லது குறைப்பு;\n}",
    isBookBack: true
  },
  {
    id: "ca12-ch7-2m-4",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP மடக்குகள்",
    marks: 2,
    type: "short",
    questionText: "Write the syntax of 'do...while' loop in PHP.",
    questionTextTamil: "PHP-ல் 'do...while' மடக்கிற்கான தொடரியலை எழுதுக.",
    answer: "Syntax:\ndo {\n    // code to be executed;\n} while (condition);",
    answerTamil: "தொடரியல்:\ndo {\n    // செயல்படுத்த வேண்டிய குறிமுறை;\n} while (நிபந்தனை);",
    isBookBack: true
  },
  {
    id: "ca12-ch7-2m-5",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP மடக்குகள்",
    marks: 2,
    type: "short",
    questionText: "Write the syntax for 'for' loop in PHP.",
    questionTextTamil: "PHP-ல் 'for' மடக்கிற்கான தொடரியலை எழுதுக.",
    answer: "Syntax:\nfor (init counter; test counter; increment counter) {\n    // code to be executed;\n}",
    answerTamil: "தொடரியல்:\nfor (தொடக்க மதிப்பு; நிபந்தனை; மிகுப்பு/குறைப்பு) {\n    // செயல்படுத்த வேண்டிய குறிமுறை;\n}",
    isBookBack: true
  }
];

const ch7_3m: Question[] = [
  {
    id: "ca12-ch7-3m-1",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP மடக்குகள்",
    marks: 3,
    type: "brief",
    questionText: "Differentiate while and do...while loop in PHP.",
    questionTextTamil: "PHP-ல் while மற்றும் do...while மடக்குகளை வேறுபடுத்துக.",
    answer: "1. while loop is entry-controlled (tests condition before entering body); do...while is exit-controlled (tests condition after executing body).\n2. while loop executes 0 times if condition is false initially; do...while executes at least once regardless of initial condition.",
    answerTamil: "1. while என்பது நுழைவு கட்டுப்பாட்டு மடக்கு (நிபந்தனை தொடக்கத்திலேயே சோதிக்கப்படும்); do...while வெளியேறும் கட்டுப்பாட்டு மடக்கு (இறுதியில் சோதிக்கப்படும்).\n2. தொடக்க நிபந்தனை தவறெனில் while ஒருமுறைகூட இயங்காது; do...while குறைந்தது ஒருமுறையாவது இயங்கும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch7-3m-2",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP மடக்குகள்",
    marks: 3,
    type: "brief",
    questionText: "Explain the foreach loop in PHP with syntax.",
    questionTextTamil: "PHP-ல் foreach மடக்கு பற்றி தொடரியலுடன் விளக்குக.",
    answer: "The foreach loop is exclusively used to iterate over array key/value elements without requiring loop counters.\nSyntax:\nforeach ($array as $value) {\n    // code using $value;\n}\nor\nforeach ($array as $key => $value) {\n    // code;\n}",
    answerTamil: "foreach மடக்கு அணிகளின் உறுப்புகளை சுழற்சி முறையில் மிக எளிதாக அணுக பயன்படுகிறது.\nதொடரியல்:\nforeach ($அணி as $மதிப்பு) {\n    // குறிமுறை;\n}\nஅல்லது\nforeach ($அணி as $திறவுகோல் => $மதிப்பு) {\n    // குறிமுறை;\n}",
    isBookBack: true
  },
  {
    id: "ca12-ch7-3m-3",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP மடக்குகள்",
    marks: 3,
    type: "brief",
    questionText: "Write a PHP program using for loop to print numbers from 1 to 5.",
    questionTextTamil: "for மடக்கைப் பயன்படுத்தி 1 முதல் 5 வரையிலான எண்களை அச்சிடும் PHP நிரலை எழுதுக.",
    answer: "<?php\nfor ($i = 1; $i <= 5; $i++) {\n    echo $i . \"<br>\";\n}\n?>",
    answerTamil: "<?php\nfor ($i = 1; $i <= 5; $i++) {\n    echo $i . \"<br>\";\n}\n?>",
    isBookBack: true
  }
];

const ch7_5m: Question[] = [
  {
    id: "ca12-ch7-5m-1",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP மடக்குகள்",
    marks: 5,
    type: "essay",
    questionText: "Explain for loop and while loop in PHP with suitable examples.",
    questionTextTamil: "PHP-ல் for மடக்கு மற்றும் while மடக்குகளை தகுந்த எடுத்துக்காட்டுகளுடன் விரிவாக விளக்குக.",
    answer: "1. for Loop:\nUsed when the number of iterations is known beforehand.\nSyntax: for (init; condition; increment) { ... }\nExample:\n<?php\nfor ($x = 1; $x <= 5; $x++) {\n    echo \"Count: $x <br>\";\n}\n?>\n\n2. while Loop:\nUsed when iteration continues dynamically until a condition becomes false.\nSyntax: while (condition) { ... }\nExample:\n<?php\n$i = 1;\nwhile ($i <= 5) {\n    echo \"Number: $i <br>\";\n    $i++;\n}\n?>",
    answerTamil: "1. for மடக்கு:\nமடக்கு எத்தனை முறை சுழல வேண்டும் என்பது முன்னரே தெரிந்திருக்கும் போது இது பயன்படுகிறது.\nதொடரியல்: for (தொடக்க மதிப்பு; நிபந்தனை; மிகுப்பு) { ... }\nஎடுத்துக்காட்டு:\n<?php\nfor ($x = 1; $x <= 5; $x++) {\n    echo \"எண்: $x <br>\";\n}\n?>\n\n2. while மடக்கு:\nநிபந்தனை மெய்யாக இருக்கும் வரை இயங்கும் நுழைவு கட்டுப்பாட்டு மடக்கு.\nதொடரியல்: while (நிபந்தனை) { ... }\nஎடுத்துக்காட்டு:\n<?php\n$i = 1;\nwhile ($i <= 5) {\n    echo \"மதிப்பு: $i <br>\";\n    $i++;\n}\n?>",
    isBookBack: true
  },
  {
    id: "ca12-ch7-5m-2",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP மடக்குகள்",
    marks: 5,
    type: "essay",
    questionText: "Explain do...while loop with an example program in PHP.",
    questionTextTamil: "PHP-ல் do...while மடக்கினை மாதிரி நிரலுடன் விரிவாக விளக்குக.",
    answer: "The do...while loop is an exit-controlled loop.\n\nKey Characteristics:\n- Statements inside the loop body are executed first before evaluating the condition.\n- Ensures the code block executes at least once even if the condition is initially false.\n\nSyntax:\ndo {\n    // statements;\n} while (condition);\n\nExample Program:\n<?php\n$num = 1;\ndo {\n    echo \"The number is: $num <br>\";\n    $num++;\n} while ($num <= 5);\n?>",
    answerTamil: "do...while மடக்கு ஒரு வெளியேறும் கட்டுப்பாட்டு மடக்காகும்.\n\nசிறப்பம்சங்கள்:\n- மடக்கின் உடற்பகுதி முதலில் செயல்படுத்தப்பட்ட பிறகே நிபந்தனை சோதிக்கப்படும்.\n- தொடக்க நிபந்தனை தவறாக இருந்தாலும் குறைந்தது ஒரு முறையாவது குறிமுறை இயங்கும்.\n\nமாதிரி நிரல்:\n<?php\n$num = 1;\ndo {\n    echo \"எண்: $num <br>\";\n    $num++;\n} while ($num <= 5);\n?>",
    isBookBack: true
  },
  {
    id: "ca12-ch7-5m-3",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP மடக்குகள்",
    marks: 5,
    type: "essay",
    questionText: "Explain foreach loop in PHP with sample program.",
    questionTextTamil: "PHP-ல் foreach மடக்கினை மாதிரி நிரலுடன் விரிவாக விளக்குக.",
    answer: "The foreach loop provides the simplest mechanism to iterate through array elements.\n\nCharacteristics:\n- Directly extracts each element into a temporary loop variable.\n- No need for array index counters or count() bounds checking.\n- Works seamlessly on both Indexed Arrays and Associative Arrays.\n\nExample Program:\n<?php\n$student_scores = array(\"Arun\" => 92, \"Banu\" => 88, \"Charan\" => 95);\nforeach ($student_scores as $student => $score) {\n    echo \"Student: $student, Score: $score <br>\";\n}\n?>",
    answerTamil: "foreach மடக்கு அணிகளின் உறுப்புகளை மிக எளிய முறையில் ஒவ்வொன்றாக அணுகப் பயன்படுகிறது.\n\nசிறப்பம்சங்கள்:\n- சுட்டு எண்கள் அல்லது count() செயற்கூறு தேவையின்றி அணியின் அனைத்து உறுப்புகளையும் சுழலும்.\n- சுட்டு எண் மற்றும் தொடர்பு அணிகள் இரண்டிலும் மிகச் சிறப்பாக இயங்கும்.\n\nமாதிரி நிரல்:\n<?php\n$marks = array(\"தமிழ்\" => 95, \"ஆங்கிலம்\" => 90, \"கணினி\" => 98);\nforeach ($marks as $subject => $mark) {\n    echo \"பாடம்: $subject | மதிப்பெண்: $mark <br>\";\n}\n?>",
    isBookBack: true
  }
];

const ch6_all = [...ch6_1m, ...ch6_2m, ...ch6_3m, ...ch6_5m];
fs.writeFileSync('scripts_ca12/ch6.json', JSON.stringify(ch6_all, null, 2), 'utf8');
console.log("Chapter 6 written! Total:", ch6_all.length);

const ch7_all = [...ch7_1m, ...ch7_2m, ...ch7_3m, ...ch7_5m];
fs.writeFileSync('scripts_ca12/ch7.json', JSON.stringify(ch7_all, null, 2), 'utf8');
console.log("Chapter 7 written! Total:", ch7_all.length);
