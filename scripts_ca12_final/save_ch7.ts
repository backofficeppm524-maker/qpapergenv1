import fs from 'fs';
import { Question } from '../src/types';

// Let's load the chapters 7-18 from scripts_ca12 and adjust/verify each to match exact PDF counts:
// Ch 7: 1M=10, 2M=5, 3M=3, 5M=3 -> Total 21
// Ch 8: 1M=10, 2M=5, 3M=3, 5M=2 -> Total 20
// Ch 9: 1M=8, 2M=6, 3M=3, 5M=3 -> Total 20
// Ch 10: 1M=7, 2M=4, 3M=3, 5M=2 -> Total 16
// Ch 11: 1M=10, 2M=4, 3M=3, 5M=3 -> Total 20
// Ch 12: 1M=10, 2M=8, 3M=4, 5M=3 -> Total 25
// Ch 13: 1M=10, 2M=6, 3M=5, 5M=3 -> Total 24
// Ch 14: 1M=8, 2M=5, 3M=5, 5M=2 -> Total 20
// Ch 15: 1M=10, 2M=5, 3M=5, 5M=3 -> Total 23
// Ch 16: 1M=10, 2M=5, 3M=5, 5M=3 -> Total 23
// Ch 17: 1M=10, 2M=5, 3M=5, 5M=3 -> Total 23
// Ch 18: 1M=5, 2M=3, 3M=3, 5M=2 -> Total 13

// Let's define the exact questions for Ch 7 to Ch 18:
// Chapter 7: Loops in PHP (10 1M, 5 2M, 3 3M, 3 5M = 21)
export const ch7_questions: Question[] = [
  // 1M (10)
  {
    id: "ca12-ch7-1m-1", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 1, type: "mcq", questionText: "Which of the following is NOT a type of loop statement in PHP?",
    questionTextTamil: "பின்வருவனவற்றுள் எது PHP-ல் உள்ள மடக்குக் கூற்று அல்ல?",
    options: { A: "for loop", B: "while loop", C: "do...while loop", D: "if...else loop" },
    optionsTamil: { A: "for loop", B: "while loop", C: "do...while loop", D: "if...else loop" },
    correctOption: "D", answer: "D) if...else loop", answerTamil: "D) if...else loop", isBookBack: true
  },
  {
    id: "ca12-ch7-1m-2", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 1, type: "mcq", questionText: "What type of loop is \"for loop\" in PHP?",
    questionTextTamil: "PHP-ல் \"for loop\" என்பது எவ்வகை மடக்கு?",
    options: { A: "Entry-controlled loop", B: "Exit-controlled loop", C: "Infinite loop", D: "Conditional loop" },
    optionsTamil: { A: "உள்நுழைவு கட்டுப்பாட்டு மடக்கு (Entry-controlled)", B: "வெளியேறும் கட்டுப்பாட்டு மடக்கு (Exit-controlled)", C: "முடிவிலா மடக்கு", D: "நிபந்தனை மடக்கு" },
    correctOption: "A", answer: "A) Entry-controlled loop", answerTamil: "A) உள்நுழைவு கட்டுப்பாட்டு மடக்கு (Entry-controlled)", isBookBack: true
  },
  {
    id: "ca12-ch7-1m-3", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 1, type: "mcq", questionText: "What is the syntax for for loop in PHP?",
    questionTextTamil: "PHP-ல் for மடக்கின் தொடரியல் என்ன?",
    options: {
      A: "for (initialization; condition; increment/decrement) { code; }",
      B: "for (condition; initialization; increment/decrement) { code; }",
      C: "for (increment/decrement; condition; initialization) { code; }",
      D: "for (initialization, condition, increment/decrement) { code; }"
    },
    optionsTamil: {
      A: "for (தொடக்க மதிப்பு; நிபந்தனை; மிகுத்தல்/குறைத்தல்) { code; }",
      B: "for (நிபந்தனை; தொடக்க மதிப்பு; மிகுத்தல்/குறைத்தல்) { code; }",
      C: "for (மிகுத்தல்/குறைத்தல்; நிபந்தனை; தொடக்க மதிப்பு) { code; }",
      D: "for (தொடக்க மதிப்பு, நிபந்தனை, மிகுத்தல்/குறைத்தல்) { code; }"
    },
    correctOption: "A", answer: "A) for (initialization; condition; increment/decrement) { code; }", answerTamil: "A) for (தொடக்க மதிப்பு; நிபந்தனை; மிகுத்தல்/குறைத்தல்) { code; }", isBookBack: true
  },
  {
    id: "ca12-ch7-1m-4", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 1, type: "mcq", questionText: "What are the three parts of the for loop syntax in PHP?",
    questionTextTamil: "PHP-ல் உள்ள for மடக்கின் மூன்று பாகங்கள் யாவை?",
    options: {
      A: "Initialization, condition, increment/decrement",
      B: "Declaration, condition, increment/decrement",
      C: "Initialization, evaluation, termination",
      D: "Condition, action, repeat"
    },
    optionsTamil: {
      A: "தொடக்கமதிப்பு, நிபந்தனை, மிகுத்தல்/குறைத்தல் (Initialization, condition, increment/decrement)",
      B: "அறிவிப்பு, நிபந்தனை, மிகுத்தல்/குறைத்தல்",
      C: "தொடக்கமதிப்பு, மதிப்பீடு, முடிவுறுத்தல்",
      D: "நிபந்தனை, செயல்பாடு, மீண்டும் செய்தல்"
    },
    correctOption: "A", answer: "A) Initialization, condition, increment/decrement", answerTamil: "A) தொடக்கமதிப்பு, நிபந்தனை, மிகுத்தல்/குறைத்தல் (Initialization, condition, increment/decrement)", isBookBack: true
  },
  {
    id: "ca12-ch7-1m-5", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 1, type: "mcq", questionText: "When is the 'initialization' part of a for loop executed?",
    questionTextTamil: "for மடக்கின் 'தொடக்கமதிப்பு' (initialization) பகுதி எப்பொழுது இயக்கப்படுகிறது?",
    options: {
      A: "At the beginning of the loop execution, only once",
      B: "Before every iteration of the loop",
      C: "After every iteration of the loop",
      D: "At the end of the loop execution"
    },
    optionsTamil: {
      A: "மடக்கின் தொடக்கத்தில் ஒரே ஒரு முறை மட்டுமே",
      B: "மடக்கின் ஒவ்வொரு சுழற்சிக்கு முன்பும்",
      C: "மடக்கின் ஒவ்வொரு சுழற்சிக்கு பின்பும்",
      D: "மடக்கு முடியும் போது"
    },
    correctOption: "A", answer: "A) At the beginning of the loop execution, only once", answerTamil: "A) மடக்கின் தொடக்கத்தில் ஒரே ஒரு முறை மட்டுமே", isBookBack: true
  },
  {
    id: "ca12-ch7-1m-6", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 1, type: "mcq", questionText: "What is the purpose of the 'increment' part of a for loop?",
    questionTextTamil: "for மடக்கின் 'மிகுத்தல்' (increment) பகுதியின் நோக்கம் என்ன?",
    options: {
      A: "To update the loop counter variable after each iteration",
      B: "To check the condition for continuing the loop",
      C: "To execute the code block inside the loop",
      D: "To terminate the loop execution"
    },
    optionsTamil: {
      A: "ஒவ்வொரு சுழற்சிக்குப் பிறகும் மடக்கு மாறியின் மதிப்பை மாற்றுவதற்கு",
      B: "மடக்கைத் தொடர்வதற்கான நிபந்தனையைச் சரிபார்க்க",
      C: "மடக்கிற்குள் உள்ள குறிமுறைப் பகுதியை இயக்க",
      D: "மடக்கின் இயக்கத்தை முடிவுக்குக் கொண்டுவர"
    },
    correctOption: "A", answer: "A) To update the loop counter variable after each iteration", answerTamil: "A) ஒவ்வொரு சுழற்சிக்குப் பிறகும் மடக்கு மாறியின் மதிப்பை மாற்றுவதற்கு", isBookBack: true
  },
  {
    id: "ca12-ch7-1m-7", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 1, type: "mcq", questionText: "What type of loop is \"while loop\" in PHP?",
    questionTextTamil: "PHP-ல் \"while loop\" என்பது எவ்வகை மடக்கு?",
    options: { A: "Entry-controlled loop", B: "Exit-controlled loop", C: "Infinite loop", D: "Conditional loop" },
    optionsTamil: { A: "உள்நுழைவு கட்டுப்பாட்டு மடக்கு (Entry-controlled)", B: "வெளியேறும் கட்டுப்பாட்டு மடக்கு (Exit-controlled)", C: "முடிவிலா மடக்கு", D: "நிபந்தனை மடக்கு" },
    correctOption: "A", answer: "A) Entry-controlled loop", answerTamil: "A) உள்நுழைவு கட்டுப்பாட்டு மடக்கு (Entry-controlled)", isBookBack: true
  },
  {
    id: "ca12-ch7-1m-8", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 1, type: "mcq", questionText: "What type of loop is \"do...while loop\" in PHP?",
    questionTextTamil: "PHP-ல் \"do...while loop\" என்பது எவ்வகை மடக்கு?",
    options: { A: "Exit-controlled loop", B: "Entry-controlled loop", C: "Infinite loop", D: "Conditional loop" },
    optionsTamil: { A: "வெளியேறும் கட்டுப்பாட்டு மடக்கு (Exit-controlled)", B: "உள்நுழைவு கட்டுப்பாட்டு மடக்கு (Entry-controlled)", C: "முடிவிலா மடக்கு", D: "நிபந்தனை மடக்கு" },
    correctOption: "A", answer: "A) Exit-controlled loop", answerTamil: "A) வெளியேறும் கட்டுப்பாட்டு மடக்கு (Exit-controlled)", isBookBack: true
  },
  {
    id: "ca12-ch7-1m-9", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 1, type: "mcq", questionText: "Which looping structure should be used to iterate over elements of an array in PHP?",
    questionTextTamil: "PHP-ல் ஓர் அணியின் உறுப்புகளை எளிதாக சுழற்சி முறையில் அணுக எந்த மடக்கைப் பயன்படுத்த வேண்டும்?",
    options: { A: "for loop", B: "while loop", D: "foreach loop", C: "do...while loop" },
    optionsTamil: { A: "for loop", B: "while loop", D: "foreach loop", C: "do...while loop" },
    correctOption: "D", answer: "D) foreach loop", answerTamil: "D) foreach loop", isBookBack: true
  },
  {
    id: "ca12-ch7-1m-10", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 1, type: "mcq", questionText: "What is the output of the following code? $array = array(1, 2, 3, 4, 5); foreach ($array as $value) { echo $value; }",
    questionTextTamil: "பின்வரும் நிரலின் வெளியீடு என்ன? $array = array(1, 2, 3, 4, 5); foreach ($array as $value) { echo $value; }",
    options: { A: "12345", B: "1 2 3 4 5", C: "1,2,3,4,5", D: "Error" },
    optionsTamil: { A: "12345", B: "1 2 3 4 5", C: "1,2,3,4,5", D: "Error" },
    correctOption: "A", answer: "A) 12345", answerTamil: "A) 12345", isBookBack: true
  },
  // 2M (5)
  {
    id: "ca12-ch7-2m-1", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 2, type: "short", questionText: "What is the purpose of a loop in PHP?",
    questionTextTamil: "PHP-ல் மடக்கின் நோக்கம் என்ன?",
    answer: "Loops in PHP are used to execute the same block of code a specified number of times or until a certain condition is satisfied, avoiding repetitive code.",
    answerTamil: "ஒரு குறிப்பிட்ட நிபந்தனை உண்மையாக இருக்கும் வரை அல்லது குறிப்பிட்ட எண்ணிக்கையில் ஒரே குறிமுறைத் தொகுதியை மீண்டும் மீண்டும் இயக்க மடக்கமைப்புகள் பயன்படுகின்றன.",
    isBookBack: true
  },
  {
    id: "ca12-ch7-2m-2", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 2, type: "short", questionText: "Write the syntax for an 'for' loop in PHP.",
    questionTextTamil: "PHP-ல் 'for' மடக்கின் தொடரியலை எழுதுக.",
    answer: "Syntax for for loop:\nfor (init counter; test counter; increment counter) {\n  code to be executed for each iteration;\n}",
    answerTamil: "for மடக்கின் தொடரியல்:\nfor (தொடக்க மதிப்பு; நிபந்தனை; மிகுத்தல்/குறைத்தல்) {\n  இயக்கப்பட வேண்டிய குறிமுறை;\n}",
    isBookBack: true
  },
  {
    id: "ca12-ch7-2m-3", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 2, type: "short", questionText: "Write the syntax for 'while' loop in PHP.",
    questionTextTamil: "PHP-ல் 'while' மடக்கின் தொடரியலை எழுதுக.",
    answer: "Syntax for while loop:\nwhile (condition is true) {\n  code to be executed;\n}",
    answerTamil: "while மடக்கின் தொடரியல்:\nwhile (நிபந்தனை) {\n  இயக்கப்பட வேண்டிய குறிமுறை;\n}",
    isBookBack: true
  },
  {
    id: "ca12-ch7-2m-4", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 2, type: "short", questionText: "How is the 'condition' in a while loop evaluated?",
    questionTextTamil: "while மடக்கின் 'நிபந்தனை' எவ்வாறு மதிப்பிடப்படுகிறது?",
    answer: "In a while loop, the condition is evaluated before executing the code block. If the condition evaluates to true, the block executes; if false, loop terminates immediately.",
    answerTamil: "while மடக்கில், குறிமுறை இயக்கப்படுவதற்கு முன்பே நிபந்தனை சரிபார்க்கப்படுகிறது. நிபந்தனை மெய்யாக இருந்தால் மட்டுமே குறிமுறை இயக்கப்படும்; பொய்யாக இருந்தால் மடக்கு முடிவுக்கு வரும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch7-2m-5", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 2, type: "short", questionText: "What is the output of the following code snippet? $i = 1; while ($i <= 5) { echo $i . \"<br>\"; $i++; }",
    questionTextTamil: "பின்வரும் நிரல் துண்டின் வெளியீடு என்ன? $i = 1; while ($i <= 5) { echo $i . \"<br>\"; $i++; }",
    answer: "Output:\n1\n2\n3\n4\n5",
    answerTamil: "வெளியீடு:\n1\n2\n3\n4\n5",
    isBookBack: true
  },
  // 3M (3)
  {
    id: "ca12-ch7-3m-1", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 3, type: "brief", questionText: "Describe the three parts of a for loop in PHP (initialization, condition and increment) and explain their purpose.",
    questionTextTamil: "PHP-ல் for மடக்கின் மூன்று பகுதிகளை (தொடக்க மதிப்பு, நிபந்தனை மற்றும் மிகுத்தல்) விவரித்து விளக்குக.",
    answer: "1. Initialization: Initializes the loop counter variable; executed once unconditionally at start.\n2. Condition: Evaluated before each iteration; if true, the body executes; if false, loop ends.\n3. Increment/Decrement: Updates the loop counter variable at the end of each iteration.",
    answerTamil: "1. தொடக்க மதிப்பு (Initialization): மடக்கு மாறியின் தொடக்க மதிப்பை நிர்ணயிக்கிறது; முதலில் ஒரு முறை மட்டுமே இயங்கும்.\n2. நிபந்தனை (Condition): ஒவ்வொரு சுழற்சியின் போதும் சரிபார்க்கப்படும்; மெய்யாக இருந்தால் இயங்கும், பொய்யாக இருந்தால் மடக்கு முடியும்.\n3. மிகுத்தல்/குறைத்தல் (Increment): ஒவ்வொரு சுழற்சியின் முடிவிலும் மாறியின் மதிப்பை மாற்றியமைக்கிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch7-3m-2", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 3, type: "brief", questionText: "Write a PHP code to print 1 to 10 numbers in ascending order using for loop.",
    questionTextTamil: "for மடக்கைப் பயன்படுத்தி 1 முதல் 10 வரையிலான எண்களை ஏறுவரிசையில் அச்சிடுவதற்கான PHP குறிமுறையை எழுதுக.",
    answer: "<?php\nfor ($x = 1; $x <= 10; $x++) {\n  echo $x . \" \";\n}\n?>",
    answerTamil: "<?php\nfor ($x = 1; $x <= 10; $x++) {\n  echo $x . \" \";\n}\n?>",
    isBookBack: true
  },
  {
    id: "ca12-ch7-3m-3", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 3, type: "brief", questionText: "Explain the difference between while loop and do … while loop in PHP.",
    questionTextTamil: "PHP-ல் while மடக்கு மற்றும் do...while மடக்கு இடையேயான வேறுபாடுகளை விளக்குக.",
    answer: "1. while loop is an Entry-controlled loop; the condition is checked at the entry before executing the body.\n2. do...while loop is an Exit-controlled loop; the body executes at least once before checking the condition at the end.",
    answerTamil: "1. while மடக்கு: நுழைவுக் கட்டுப்பாட்டு மடக்கு. குறிமுறையை இயக்குவதற்கு முன்பே நிபந்தனை சரிபார்க்கப்படுகிறது.\n2. do...while மடக்கு: வெளியேறல் கட்டுப்பாட்டு மடக்கு. நிபந்தனை தவறாக இருந்தாலும் குறைந்தபட்சம் ஒரு முறையாவது குறிமுறை இயக்கப்படும்.",
    isBookBack: true
  },
  // 5M (3)
  {
    id: "ca12-ch7-5m-1", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 5, type: "essay", questionText: "Explain 'for' loop with example.",
    questionTextTamil: "'for' மடக்கை எடுத்துக்காட்டுடன் விளக்குக.",
    answer: "for loop in PHP:\nThe for loop is an entry-controlled loop used when the programmer knows in advance how many times the script should run.\n\nSyntax:\nfor (init counter; test counter; increment counter) {\n  // code to be executed for each iteration;\n}\n\nParameters:\n- init counter: Initializes the loop counter value.\n- test counter: Evaluated for each loop iteration. If TRUE, the loop continues. If FALSE, the loop ends.\n- increment counter: Increases the loop counter value.\n\nExample:\n<?php\nfor ($i = 1; $i <= 5; $i++) {\n  echo \"Number is: $i <br>\";\n}\n?>\n\nOutput:\nNumber is: 1\nNumber is: 2\nNumber is: 3\nNumber is: 4\nNumber is: 5",
    answerTamil: "PHP-ல் 'for' மடக்கு:\nfor மடக்கு என்பது உள்நுழைவு கட்டுப்பாட்டு மடக்காகும். ஒரு குறிமுறை எத்தனை முறை இயங்க வேண்டும் என்பது முன்னரே தெரிந்திருக்கும் போது இது பயன்படுகிறது.\n\nதொடரியல்:\nfor (தொடக்க மதிப்பு; நிபந்தனை; மிகுத்தல்) {\n  இயக்கப்பட வேண்டிய குறிமுறை;\n}\n\nஎடுத்துக்காட்டு:\n<?php\nfor ($i = 1; $i <= 5; $i++) {\n  echo \"எண்: $i <br>\";\n}\n?>",
    isBookBack: true
  },
  {
    id: "ca12-ch7-5m-2", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 5, type: "essay", questionText: "Write a PHP code to print 10 to 20 numbers in ascending order using while loop and do… while loop.",
    questionTextTamil: "while மற்றும் do...while மடக்கைப் பயன்படுத்தி 10 முதல் 20 வரையிலான எண்களை அச்சிடுவதற்கான PHP நிரலை எழுதுக.",
    answer: "1. Using while loop:\n<?php\n$i = 10;\nwhile ($i <= 20) {\n  echo $i . \" \";\n  $i++;\n}\n?>\n\n2. Using do...while loop:\n<?php\n$i = 10;\ndo {\n  echo $i . \" \";\n  $i++;\n} while ($i <= 20);\n?>",
    answerTamil: "1. while மடக்கைப் பயன்படுத்தி:\n<?php\n$i = 10;\nwhile ($i <= 20) {\n  echo $i . \" \";\n  $i++;\n}\n?>\n\n2. do...while மடக்கைப் பயன்படுத்தி:\n<?php\n$i = 10;\ndo {\n  echo $i . \" \";\n  $i++;\n} while ($i <= 20);\n?>",
    isBookBack: true
  },
  {
    id: "ca12-ch7-5m-3", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 5, type: "essay", questionText: "Explain 'foreach' loop with examples.",
    questionTextTamil: "'foreach' மடக்கை எடுத்துக்காட்டுகளுடன் விளக்குக.",
    answer: "foreach loop in PHP:\nThe foreach loop is exclusively used to iterate through array key-value pairs.\n\nSyntax 1 (Values only):\nforeach ($array as $value) {\n  code to be executed;\n}\n\nSyntax 2 (Key and Value):\nforeach ($array as $key => $value) {\n  code to be executed;\n}\n\nExample:\n<?php\n$colors = array(\"Red\", \"Green\", \"Blue\", \"Yellow\");\nforeach ($colors as $value) {\n  echo \"$value <br>\";\n}\n?>",
    answerTamil: "'foreach' மடக்கு:\nforeach மடக்கு என்பது அணிகளின் (Arrays) உறுப்புகளை மிக எளிதாக சுழற்சி முறையில் அணுக பிரத்யேகமாகப் பயன்படுத்தப்படும் மடக்காகும்.\n\nதொடரியல்:\nforeach ($array as $value) {\n  இயக்கப்பட வேண்டிய குறிமுறை;\n}\n\nஎடுத்துக்காட்டு:\n<?php\n$colors = array(\"சிவப்பு\", \"பச்சை\", \"நீலம்\");\nforeach ($colors as $value) {\n  echo \"$value <br>\";\n}\n?>",
    isBookBack: true
  }
];

fs.writeFileSync('scripts_ca12_final/ch7.json', JSON.stringify(ch7_questions, null, 2), 'utf8');
console.log('Ch 7 done. Count:', ch7_questions.length);
