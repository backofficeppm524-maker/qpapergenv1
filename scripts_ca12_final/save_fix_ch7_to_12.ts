import fs from 'fs';
import { Question } from '../src/types';

// ==========================================
// CHAPTER 7: Loops in PHP (10 1M, 5 2M, 3 3M, 3 5M = 21)
// ==========================================
export const ch7_questions: Question[] = [
  // 1M (10)
  {
    id: "ca12-ch7-1m-1", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 1, type: "mcq", questionText: "Most of the loops iterate for a ______ number of times.",
    questionTextTamil: "பெரும்பாலான மடக்குகள் ______ எண்ணிக்கையிலான முறை சுழல்கின்றன.",
    options: { A: "Predetermined", B: "Infinite", C: "Zero", D: "Random" },
    optionsTamil: { A: "முன்கூட்டியே தீர்மானிக்கப்பட்ட (Predetermined)", B: "முடிவற்ற", C: "பூஜ்ஜியம்", D: "சீரற்ற" },
    correctOption: "A", answer: "A) Predetermined", answerTamil: "A) முன்கூட்டியே தீர்மானிக்கப்பட்ட (Predetermined)", isBookBack: true
  },
  {
    id: "ca12-ch7-1m-2", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 1, type: "mcq", questionText: "Which loop is also known as entry-controlled loop?",
    questionTextTamil: "உள்நுழைவு கட்டுப்பாட்டு மடக்கு (entry-controlled loop) என அழைக்கப்படுவது எது?",
    options: { A: "for loop", B: "do...while loop", C: "switch", D: "if...else" },
    optionsTamil: { A: "for மடக்கு", B: "do...while மடக்கு", C: "switch", D: "if...else" },
    correctOption: "A", answer: "A) for loop", answerTamil: "A) for மடக்கு", isBookBack: true
  },
  {
    id: "ca12-ch7-1m-3", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 1, type: "mcq", questionText: "Which loop evaluates condition at the end of the loop body?",
    questionTextTamil: "மடக்கின் உடற்பகுதியின் முடிவில் நிபந்தனையைச் சோதிக்கும் மடக்கு எது?",
    options: { A: "do...while", B: "while", C: "for", D: "foreach" },
    optionsTamil: { A: "do...while", B: "while", C: "for", D: "foreach" },
    correctOption: "A", answer: "A) do...while", answerTamil: "A) do...while", isBookBack: true
  },
  {
    id: "ca12-ch7-1m-4", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 1, type: "mcq", questionText: "What will be the output of following code: for ($i=0; $i<5; $i++) { echo $i; }",
    questionTextTamil: "பின்வரும் நிரலின் வெளியீடு என்ன: for ($i=0; $i<5; $i++) { echo $i; }",
    options: { A: "01234", B: "12345", C: "012345", D: "1234" },
    optionsTamil: { A: "01234", B: "12345", C: "012345", D: "1234" },
    correctOption: "A", answer: "A) 01234", answerTamil: "A) 01234", isBookBack: true
  },
  {
    id: "ca12-ch7-1m-5", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 1, type: "mcq", questionText: "Which loop is exclusively designed to iterate over array elements in PHP?",
    questionTextTamil: "PHP-ல் அணிகளின் உறுப்புகளை சுழற்சி முறையில் அணுக வடிவமைக்கப்பட்ட மடக்கு எது?",
    options: { A: "foreach loop", B: "for loop", C: "while loop", D: "do...while loop" },
    optionsTamil: { A: "foreach மடக்கு", B: "for மடக்கு", C: "while மடக்கு", D: "do...while மடக்கு" },
    correctOption: "A", answer: "A) foreach loop", answerTamil: "A) foreach மடக்கு", isBookBack: true
  },
  {
    id: "ca12-ch7-1m-6", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 1, type: "mcq", questionText: "How many parameters are separated by semicolons in the for loop header?",
    questionTextTamil: "for மடக்கின் தலைப்பில் அரைப்புள்ளிகளால் (;) பிரிக்கப்படும் அளவுருக்கள் எத்தனை?",
    options: { A: "3", B: "2", C: "1", D: "4" },
    optionsTamil: { A: "3 (தொடக்க மதிப்பு, நிபந்தனை, மிகுத்தல்/குறைத்தல்)", B: "2", C: "1", D: "4" },
    correctOption: "A", answer: "A) 3", answerTamil: "A) 3 (தொடக்க மதிப்பு, நிபந்தனை, மிகுத்தல்/குறைத்தல்)", isBookBack: true
  },
  {
    id: "ca12-ch7-1m-7", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 1, type: "mcq", questionText: "A loop that never terminates is known as",
    questionTextTamil: "எப்போதும் முடிவடையாத ஒரு மடக்கு எவ்வாறு அழைக்கப்படுகிறது?",
    options: { A: "Infinite loop", B: "Finite loop", C: "Nested loop", D: "Entry-exit loop" },
    optionsTamil: { A: "முடிவற்ற மடக்கு (Infinite loop)", B: "வரையறுக்கப்பட்ட மடக்கு", C: "பின்னலான மடக்கு", D: "உள்நுழைவு-வெளியேறு மடக்கு" },
    correctOption: "A", answer: "A) Infinite loop", answerTamil: "A) முடிவற்ற மடக்கு (Infinite loop)", isBookBack: true
  },
  {
    id: "ca12-ch7-1m-8", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 1, type: "mcq", questionText: "In a while loop, if the condition is false initially, the statements inside the body will execute",
    questionTextTamil: "while மடக்கில் தொடக்கத்திலேயே நிபந்தனை தவறாக இருந்தால் உடற்பகுதி எத்தனை முறை இயங்கும்?",
    options: { A: "0 times", B: "1 time", C: "2 times", D: "Infinite times" },
    optionsTamil: { A: "0 முறை (இயங்காது)", B: "1 முறை", C: "2 முறை", D: "முடிவற்ற முறை" },
    correctOption: "A", answer: "A) 0 times", answerTamil: "A) 0 முறை (இயங்காது)", isBookBack: true
  },
  {
    id: "ca12-ch7-1m-9", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 1, type: "mcq", questionText: "In do...while loop, the loop body executes at least ______ time even if condition is false.",
    questionTextTamil: "do...while மடக்கில் நிபந்தனை தவறாக இருந்தாலும் உடற்பகுதி குறைந்தபட்சம் எத்தனை முறை இயங்கும்?",
    options: { A: "1", B: "0", C: "2", D: "3" },
    optionsTamil: { A: "1 முறை", B: "0 முறை", C: "2 முறை", D: "3 முறை" },
    correctOption: "A", answer: "A) 1", answerTamil: "A) 1 முறை", isBookBack: true
  },
  {
    id: "ca12-ch7-1m-10", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 1, type: "mcq", questionText: "The keyword used with foreach to capture key and value pairs is",
    questionTextTamil: "foreach மடக்கில் சாவி மற்றும் மதிப்பை பிரிக்க பயன்படும் முக்கிய சொல் எது?",
    options: { A: "as", B: "in", C: "to", D: "with" },
    optionsTamil: { A: "as", B: "in", C: "to", D: "with" },
    correctOption: "A", answer: "A) as", answerTamil: "A) as", isBookBack: true
  },
  // 2M (5)
  {
    id: "ca12-ch7-2m-1", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 2, type: "short", questionText: "Define Looping Structure in PHP.",
    questionTextTamil: "PHP-ல் மடக்கு அமைப்பு (Looping Structure) - வரையறுக்கவும்.",
    answer: "Looping structures in PHP are control statements that execute a block of code repeatedly as long as a specified condition evaluates to true.",
    answerTamil: "PHP-ல் ஒரு குறிப்பிட்ட நிபந்தனை உண்மையாக இருக்கும் வரை ஒரு குறிப்பிட்ட நிரல் தொகுதியை மீண்டும் மீண்டும் இயக்க பயன்படும் அமைப்புகள் மடக்குகள் எனப்படும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch7-2m-2", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 2, type: "short", questionText: "List out the four types of Looping structures in PHP.",
    questionTextTamil: "PHP-ல் உள்ள நான்கு வகையான மடக்கு அமைப்புகளை பட்டியலிடுக.",
    answer: "Four types of looping structures in PHP:\n1. for loop\n2. foreach loop\n3. while loop\n4. do...while loop.",
    answerTamil: "PHP-ல் உள்ள 4 வகையான மடக்குகள்:\n1. for மடக்கு\n2. foreach மடக்கு\n3. while மடக்கு\n4. do...while மடக்கு.",
    isBookBack: true
  },
  {
    id: "ca12-ch7-2m-3", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 2, type: "short", questionText: "What is the difference between entry-controlled loop and exit-controlled loop?",
    questionTextTamil: "உள்நுழைவு மற்றும் வெளியேறு கட்டுப்பாட்டு மடக்குகளுக்கு இடையே உள்ள வேறுபாடு யாது?",
    answer: "1. Entry-controlled loop (while, for): Condition is tested before executing the loop body.\n2. Exit-controlled loop (do...while): Condition is tested after executing the loop body at least once.",
    answerTamil: "1. நுழைவுக் கட்டுப்பாட்டு மடக்கு (while, for): உடற்பகுதி இயங்கும் முன் நிபந்தனை சரிபார்க்கப்படுகிறது.\n2. வெளியேறுக் கட்டுப்பாட்டு மடக்கு (do...while): உடற்பகுதி ஒருமுறை இயங்கிய பின்பே நிபந்தனை சரிபார்க்கப்படுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch7-2m-4", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 2, type: "short", questionText: "Write syntax for foreach loop in PHP.",
    questionTextTamil: "PHP-ல் foreach மடக்கிற்கான தொடரியலை (Syntax) எழுதுக.",
    answer: "Syntax for foreach loop:\n```php\nforeach ($array as $value) {\n    // code to be executed;\n}\n```",
    answerTamil: "foreach மடக்கின் தொடரியல்:\n```php\nforeach ($array as $value) {\n    // இயக்க வேண்டிய கூற்றுகள்;\n}\n```",
    isBookBack: true
  },
  {
    id: "ca12-ch7-2m-5", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 2, type: "short", questionText: "Write syntax for do...while loop in PHP.",
    questionTextTamil: "PHP-ல் do...while மடக்கிற்கான தொடரியலை எழுதுக.",
    answer: "Syntax for do...while loop:\n```php\ndo {\n    // code to be executed;\n} while (condition);\n```",
    answerTamil: "do...while தொடரியல்:\n```php\ndo {\n    // இயக்க வேண்டிய கூற்றுகள்;\n} while (நிபந்தனை);\n```",
    isBookBack: true
  },
  // 3M (3)
  {
    id: "ca12-ch7-3m-1", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 3, type: "brief", questionText: "Differentiate while loop and do...while loop.",
    questionTextTamil: "while மற்றும் do...while மடக்குகளை வேறுபடுத்துக.",
    answer: "1. while loop:\n- Entry-controlled loop.\n- If condition is false initially, body executes 0 times.\n\n2. do...while loop:\n- Exit-controlled loop.\n- Loop body executes at least once even if condition is false initially.",
    answerTamil: "1. while மடக்கு: நுழைவுக் கட்டுப்பாட்டு மடக்கு; நிபந்தனை தவறெனில் ஒருமுறைகூட இயங்காது.\n2. do...while மடக்கு: வெளியேறுக் கட்டுப்பாட்டு மடக்கு; நிபந்தனை தவறென்றாலும் குறைந்தபட்சம் ஒருமுறை உடற்பகுதி இயங்கும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch7-3m-2", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 3, type: "brief", questionText: "Write a short note on foreach loop with an example.",
    questionTextTamil: "foreach மடக்கு பற்றி எடுத்துக்காட்டுடன் குறிப்பு வரைக.",
    answer: "The `foreach` loop works only on arrays and iterates through each key/value pair in an array.\n\nExample:\n```php\n$colors = array(\"red\", \"green\", \"blue\");\nforeach ($colors as $value) {\n    echo \"$value <br>\";\n}\n```",
    answerTamil: "foreach மடக்கு அணிகளின் மதிப்புகளை எளிதாக அணுக பயன்படுகிறது.\n\nஎடுத்துக்காட்டு:\n```php\n$colors = array(\"red\", \"green\", \"blue\");\nforeach ($colors as $value) {\n    echo \"$value <br>\";\n}\n```",
    isBookBack: true
  },
  {
    id: "ca12-ch7-3m-3", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 3, type: "brief", questionText: "Explain the three expression parameters inside a for loop in PHP.",
    questionTextTamil: "for மடக்கினுள் உள்ள மூன்று கோவைகளின் அளவுருக்களை விளக்குக.",
    answer: "Syntax: `for (init; test; increment/decrement)`\n1. `init`: Initializes the loop counter variable once at the start.\n2. `test`: Evaluates the condition before each loop iteration.\n3. `increment/decrement`: Updates the counter variable after each iteration.",
    answerTamil: "1. தொடக்க மதிப்பு (Init): மடக்கின் மாறியை தொடக்கத்தில் ஒருமுறை அமைக்கிறது.\n2. நிபந்தனை (Test): ஒவ்வொரு சுழற்சியிலும் சரிபார்க்கப்படுகிறது.\n3. மிகுத்தல்/குறைத்தல் (Update): ஒவ்வொரு சுழற்சிக்குப் பின்பும் மாறியின் மதிப்பை மாற்றுகிறது.",
    isBookBack: true
  },
  // 5M (3)
  {
    id: "ca12-ch7-5m-1", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 5, type: "essay", questionText: "Explain for loop and foreach loop in PHP with syntax and examples.",
    questionTextTamil: "PHP-ல் for மற்றும் foreach மடக்குகளை தொடரியல் மற்றும் எடுத்துக்காட்டுடன் விளக்குக.",
    answer: "1. for Loop:\nUsed when the number of iterations is known beforehand.\n\nSyntax:\n```php\nfor (init counter; test counter; increment counter) {\n    // code to be executed;\n}\n```\n\nExample:\n```php\nfor ($x = 1; $x <= 5; $x++) {\n    echo \"Number: $x <br>\";\n}\n```\n\n2. foreach Loop:\nExclusively designed to loop through array elements.\n\nSyntax:\n```php\nforeach ($array as $value) {\n    // code to be executed;\n}\n```\n\nExample:\n```php\n$names = array(\"Arun\", \"Bala\", \"Chitra\");\nforeach ($names as $name) {\n    echo $name . \"<br>\";\n}\n```",
    answerTamil: "1. for மடக்கு:\nசுழற்சிகளின் எண்ணிக்கை முன்கூட்டியே தெரிந்திருக்கும் போது பயன்படுகிறது.\nதொடரியல்: `for (தொடக்க மதிப்பு; நிபந்தனை; மிகுத்தல்) { கூற்றுகள்; }`\n\n2. foreach மடக்கு:\nஅணிகளின் உறுப்புகளை வரிசையாக அணுக பிரத்யேகமாக பயன்படுகிறது.\nதொடரியல்: `foreach ($array as $value) { கூற்றுகள்; }`",
    isBookBack: true
  },
  {
    id: "ca12-ch7-5m-2", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 5, type: "essay", questionText: "Explain while loop and do...while loop in PHP with suitable examples.",
    questionTextTamil: "PHP-ல் while மற்றும் do...while மடக்குகளை பொருத்தமான எடுத்துக்காட்டுகளுடன் விரிவாக விளக்குக.",
    answer: "1. while Loop (Entry-controlled):\nExecutes a block of code as long as the specified condition evaluates to true. Condition is tested at the beginning.\n\nSyntax:\n```php\nwhile (condition) {\n    // code to be executed;\n}\n```\n\nExample:\n```php\n$i = 1;\nwhile ($i <= 5) {\n    echo \"$i \";\n    $i++;\n}\n```\n\n2. do...while Loop (Exit-controlled):\nExecutes the code block once first, and then evaluates the condition. If true, it repeats the loop.\n\nSyntax:\n```php\ndo {\n    // code to be executed;\n} while (condition);\n```\n\nExample:\n```php\n$i = 1;\ndo {\n    echo \"$i \";\n    $i++;\n} while ($i <= 5);\n```",
    answerTamil: "1. while மடக்கு (நுழைவுக் கட்டுப்பாடு):\nநிபந்தனை தொடக்கத்திலேயே சோதிக்கப்படுகிறது. நிபந்தனை மெய்யாக இருக்கும் வரை இயங்கும்.\n\n2. do...while மடக்கு (வெளியேறுக் கட்டுப்பாடு):\nஉடற்பகுதி ஒரு முறை இயங்கிய பின்னரே நிபந்தனை சோதிக்கப்படுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch7-5m-3", chapterNo: 7, chapterName: "Loops in PHP", chapterNameTamil: "PHP-ல் மடக்குகள்",
    marks: 5, type: "essay", questionText: "Write a PHP program to display Fibonacci series up to 10 terms using while loop and explain its working.",
    questionTextTamil: "while மடக்கைப் பயன்படுத்தி முதல் 10 ஃபைபோனாக்கி எண்களை அச்சிடும் PHP நிரலை எழுதி அதன் செயல்பாட்டை விளக்குக.",
    answer: "PHP Program for Fibonacci Series:\n```php\n<?php\n$n1 = 0;\n$n2 = 1;\n$count = 0;\necho \"Fibonacci Series: \";\nwhile ($count < 10) {\n    echo $n1 . \" \";\n    $n3 = $n1 + $n2;\n    $n1 = $n2;\n    $n2 = $n3;\n    $count++;\n}\n?>\n```\nOutput: `0 1 1 2 3 5 8 13 21 34`\n\nWorking:\n- Initializes first two numbers 0 and 1.\n- In each loop iteration, prints `$n1`, calculates next term as `$n1 + $n2`, shifts variables, and increments `$count` until 10 terms are printed.",
    answerTamil: "ஃபைபோனாக்கி தொடர் நிரல்:\n```php\n<?php\n$n1 = 0; $n2 = 1; $count = 0;\nwhile ($count < 10) {\n    echo $n1 . \" \";\n    $n3 = $n1 + $n2;\n    $n1 = $n2;\n    $n2 = $n3;\n    $count++;\n}\n?>\n```\nவெளியீடு: `0 1 1 2 3 5 8 13 21 34`",
    isBookBack: true
  }
];

// ==========================================
// CHAPTER 8: Forms and Files (10 1M, 5 2M, 4 3M, 2 5M = 21)
// ==========================================
export const ch8_questions: Question[] = [
  // 1M (10)
  {
    id: "ca12-ch8-1m-1", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 1, type: "mcq", questionText: "Which method sends form data visible in URL as query string parameters?",
    questionTextTamil: "படிவத் தரவை URL முகவரியில் புலப்படும் வகையில் அனுப்பும் முறை எது?",
    options: { A: "GET", B: "POST", C: "PUT", D: "REQUEST" },
    optionsTamil: { A: "GET", B: "POST", C: "PUT", D: "REQUEST" },
    correctOption: "A", answer: "A) GET", answerTamil: "A) GET", isBookBack: true
  },
  {
    id: "ca12-ch8-1m-2", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 1, type: "mcq", questionText: "Which method sends form data securely in HTTP request body?",
    questionTextTamil: "படிவத் தரவை HTTP கோரிக்கையின் உடற்பகுதியில் பாதுகாப்பாக அனுப்பும் முறை எது?",
    options: { A: "POST", B: "GET", C: "URL", D: "HEADER" },
    optionsTamil: { A: "POST", B: "GET", C: "URL", D: "HEADER" },
    correctOption: "A", answer: "A) POST", answerTamil: "A) POST", isBookBack: true
  },
  {
    id: "ca12-ch8-1m-3", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 1, type: "mcq", questionText: "Which PHP superglobal collects data from both GET and POST methods?",
    questionTextTamil: "GET மற்றும் POST இரண்டிலிருந்தும் தரவுகளைப் பெறக்கூடிய PHP சூப்பர் குளோபல் அணி எது?",
    options: { A: "$_REQUEST", B: "$_SERVER", C: "$_ENV", D: "$_SESSION" },
    optionsTamil: { A: "$_REQUEST", B: "$_SERVER", C: "$_ENV", D: "$_SESSION" },
    correctOption: "A", answer: "A) $_REQUEST", answerTamil: "A) $_REQUEST", isBookBack: true
  },
  {
    id: "ca12-ch8-1m-4", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 1, type: "mcq", questionText: "Which function is used in PHP to open a file?",
    questionTextTamil: "PHP-ல் கோப்பைத் திறக்க பயன்படும் செயற்கூறு எது?",
    options: { A: "fopen()", B: "open()", C: "file_open()", D: "readfile()" },
    optionsTamil: { A: "fopen()", B: "open()", C: "file_open()", D: "readfile()" },
    correctOption: "A", answer: "A) fopen()", answerTamil: "A) fopen()", isBookBack: true
  },
  {
    id: "ca12-ch8-1m-5", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 1, type: "mcq", questionText: "Which mode opens a file for writing only, placing pointer at the end (appending)?",
    questionTextTamil: "கோப்பின் முடிவில் புதிய தரவைச் சேர்க்க (Append) கோப்பைத் திறக்கும் முறை எது?",
    options: { A: "\"a\"", B: "\"w\"", C: "\"r\"", D: "\"x\"" },
    optionsTamil: { A: "\"a\" (Append)", B: "\"w\"", C: "\"r\"", D: "\"x\"" },
    correctOption: "A", answer: "A) \"a\"", answerTamil: "A) \"a\" (Append)", isBookBack: true
  },
  {
    id: "ca12-ch8-1m-6", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 1, type: "mcq", questionText: "Which function closes an open file pointer in PHP?",
    questionTextTamil: "PHP-ல் திறக்கப்பட்ட கோப்பை மூட பயன்படும் செயற்கூறு எது?",
    options: { A: "fclose()", B: "close()", C: "file_close()", D: "endfile()" },
    optionsTamil: { A: "fclose()", B: "close()", C: "file_close()", D: "endfile()" },
    correctOption: "A", answer: "A) fclose()", answerTamil: "A) fclose()", isBookBack: true
  },
  {
    id: "ca12-ch8-1m-7", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 1, type: "mcq", questionText: "Which function reads a single line from an open file in PHP?",
    questionTextTamil: "திறக்கப்பட்ட கோப்பிலிருந்து ஒரு வரியை மட்டும் படிக்க பயன்படும் செயற்கூறு எது?",
    options: { A: "fgets()", B: "fgetc()", C: "fread()", D: "read()" },
    optionsTamil: { A: "fgets()", B: "fgetc()", C: "fread()", D: "read()" },
    correctOption: "A", answer: "A) fgets()", answerTamil: "A) fgets()", isBookBack: true
  },
  {
    id: "ca12-ch8-1m-8", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 1, type: "mcq", questionText: "Which attribute must be added to `<form>` tag when uploading files in HTML?",
    questionTextTamil: "HTML படிவத்தில் கோப்புகளை பதிவேற்றும்போது `<form>` ஒட்டில் சேர்க்கப்பட வேண்டிய பண்புக்கூறு எது?",
    options: { A: "enctype=\"multipart/form-data\"", B: "method=\"GET\"", C: "file=\"true\"", D: "type=\"file\"" },
    optionsTamil: { A: "enctype=\"multipart/form-data\"", B: "method=\"GET\"", C: "file=\"true\"", D: "type=\"file\"" },
    correctOption: "A", answer: "A) enctype=\"multipart/form-data\"", answerTamil: "A) enctype=\"multipart/form-data\"", isBookBack: true
  },
  {
    id: "ca12-ch8-1m-9", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 1, type: "mcq", questionText: "Which superglobal variable stores uploaded file information in PHP?",
    questionTextTamil: "பதிவேற்றப்பட்ட கோப்பு தகவல்களை சேமிக்கும் PHP சூப்பர் குளோபல் அணி எது?",
    options: { A: "$_FILES", B: "$_POST", C: "$_GET", D: "$_UPLOAD" },
    optionsTamil: { A: "$_FILES", B: "$_POST", C: "$_GET", D: "$_UPLOAD" },
    correctOption: "A", answer: "A) $_FILES", answerTamil: "A) $_FILES", isBookBack: true
  },
  {
    id: "ca12-ch8-1m-10", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 1, type: "mcq", questionText: "Which function is used to write content to an open file in PHP?",
    questionTextTamil: "திறக்கப்பட்ட கோப்பில் உள்ளடக்கத்தை எழுத பயன்படும் செயற்கூறு எது?",
    options: { A: "fwrite()", B: "writefile()", C: "fput()", D: "append()" },
    optionsTamil: { A: "fwrite()", B: "writefile()", C: "fput()", D: "append()" },
    correctOption: "A", answer: "A) fwrite()", answerTamil: "A) fwrite()", isBookBack: true
  },
  // 2M (5)
  {
    id: "ca12-ch8-2m-1", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 2, type: "short", questionText: "What is HTML Form controls in PHP?",
    questionTextTamil: "HTML படிவக் கட்டுப்பாடுகள் (Form controls) என்றால் என்ன?",
    answer: "HTML form controls are interactive input GUI elements (text boxes, radio buttons, checkboxes, dropdowns, submit buttons) that collect user inputs to send to the PHP server.",
    answerTamil: "HTML படிவக் கட்டுப்பாடுகள் என்பது பயனரிடமிருந்து உள்ளீடுகளைப் பெற்று PHP சேவையகத்திற்கு அனுப்ப உதவும் உரைப்பெட்டிகள், தேர்வுப்பெட்டிகள் மற்றும் பொத்தான்கள் போன்ற வரைகலை கூறுகளாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch8-2m-2", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 2, type: "short", questionText: "What is the purpose of $_GET and $_POST in PHP?",
    questionTextTamil: "PHP-ல் $_GET மற்றும் $_POST அணிகளின் நோக்கம் என்ன?",
    answer: "1. `$_GET`: Collects form data submitted via URL query parameters.\n2. `$_POST`: Collects form data sent in HTTP request body securely without URL exposure.",
    answerTamil: "1. `$_GET`: URL வழியாக அனுப்பப்படும் படிவத் தரவுகளை சேகரிக்கிறது.\n2. `$_POST`: HTTP கோரிக்கையின் உடற்பகுதியில் பாதுகாப்பாக அனுப்பப்படும் படிவத் தரவுகளை சேகரிக்கிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch8-2m-3", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 2, type: "short", questionText: "What is fopen() function in PHP?",
    questionTextTamil: "PHP-ல் fopen() செயற்கூறு என்றால் என்ன?",
    answer: "The `fopen()` function opens a file or URL on the server with specified access mode (\"r\", \"w\", \"a\") and returns a file pointer resource.",
    answerTamil: "`fopen()` செயற்கூறு சேவையகத்தில் உள்ள ஒரு கோப்பை குறிப்பிட்ட பயன்முறையில் (படித்தல்/எழுதுதல்) திறந்து அதற்கான சுட்டியை வழங்குகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch8-2m-4", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 2, type: "short", questionText: "What is the purpose of fclose() in PHP?",
    questionTextTamil: "PHP-ல் fclose() செயற்கூறின் பயன் என்ன?",
    answer: "The `fclose()` function closes an open file pointer, freeing system memory and ensuring all cached buffer data is written to disk.",
    answerTamil: "`fclose()` செயற்கூறு திறந்த கோப்பை மூடி கணினி நினைவகத்தை விடுவிக்கவும் தரவு பாதுகாப்பாக சேமிக்கப்படுவதை உறுதி செய்யவும் பயன்படுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch8-2m-5", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 2, type: "short", questionText: "What are the common file opening modes in PHP?",
    questionTextTamil: "PHP-ல் கோப்புகளை திறப்பதற்கான பொதுவான முறைகள் (Modes) யாவை?",
    answer: "1. `\"r\"`: Read only.\n2. `\"w\"`: Write only (erases existing content or creates new file).\n3. `\"a\"`: Append only (writes at the end).\n4. `\"r+\"`: Read and Write.",
    answerTamil: "1. `\"r\"`: படிக்க மட்டும்.\n2. `\"w\"`: எழுத மட்டும் (பழைய உள்ளடக்கத்தை அழித்து புதிதாக எழுதும்).\n3. `\"a\"`: கோப்பின் இறுதியில் சேர்க்க மட்டும் (Append).\n4. `\"r+\"`: படிக்க மற்றும் எழுத.",
    isBookBack: true
  },
  // 3M (4)
  {
    id: "ca12-ch8-3m-1", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 3, type: "brief", questionText: "Differentiate GET and POST methods in PHP Form handling.",
    questionTextTamil: "PHP படிவ கையாளுதலில் GET மற்றும் POST முறைகளை வேறுபடுத்துக.",
    answer: "1. GET Method:\n- Data is visible in browser address bar (URL query string).\n- Limited data capacity (< 2048 characters).\n- Never suitable for passwords or sensitive data.\n\n2. POST Method:\n- Data is invisibly sent in HTTP request body.\n- No data limit, supports binary file uploads.\n- Secure for sensitive data.",
    answerTamil: "1. GET முறை: தரவு முகவரி பட்டியில் (URL) தெரியும்; குறைந்த அளவு தரவு மட்டுமே அனுப்ப முடியும்; கடவுச்சொற்களுக்கு ஏற்றதல்ல.\n2. POST முறை: தரவு மறைமுகமாக அனுப்பப்படுகிறது; பெரிய தரவு மற்றும் கோப்புகளை அனுப்பலாம்; பாதுகாப்பானது.",
    isBookBack: true
  },
  {
    id: "ca12-ch8-3m-2", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 3, type: "brief", questionText: "Explain how to read a file using fread() in PHP.",
    questionTextTamil: "PHP-ல் fread() செயற்கூறைப் பயன்படுத்தி கோப்பை எவ்வாறு படிப்பது என்பதை விளக்குக.",
    answer: "`fread()` reads up to a specified number of bytes from an open file pointer.\n\nSyntax:\n```php\n$handle = fopen(\"sample.txt\", \"r\");\n$content = fread($handle, filesize(\"sample.txt\"));\nfclose($handle);\necho $content;\n```",
    answerTamil: "`fread()` செயற்கூறு குறிப்பிட்ட பைட் அளவு வரை கோப்பை படிக்கிறது.\n```php\n$handle = fopen(\"sample.txt\", \"r\");\n$content = fread($handle, filesize(\"sample.txt\"));\nfclose($handle);\necho $content;\n```",
    isBookBack: true
  },
  {
    id: "ca12-ch8-3m-3", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 3, type: "brief", questionText: "Explain how to write content to a file using fwrite() in PHP.",
    questionTextTamil: "PHP-ல் fwrite() செயற்கூறைப் பயன்படுத்தி கோப்பில் தரவை எவ்வாறு எழுதுவது என்பதை விளக்குக.",
    answer: "`fwrite()` writes a string into an open file pointer.\n\nSyntax:\n```php\n$handle = fopen(\"notes.txt\", \"w\");\n$txt = \"Hello PHP Files!\";\nfwrite($handle, $txt);\nfclose($handle);\n```",
    answerTamil: "`fwrite()` திறக்கப்பட்ட கோப்பில் சரங்களை எழுத பயன்படுகிறது.\n```php\n$handle = fopen(\"notes.txt\", \"w\");\n$txt = \"Hello PHP Files!\";\nfwrite($handle, $txt);\nfclose($handle);\n```",
    isBookBack: true
  },
  {
    id: "ca12-ch8-3m-4", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 3, type: "brief", questionText: "What is $_FILES array in PHP? Mention its 5 standard properties.",
    questionTextTamil: "PHP-ல் $_FILES அணி என்றால் என்ன? அதன் 5 முக்கிய பண்புகளைக் குறிப்பிடுக.",
    answer: "`$_FILES` is a 2D associative array containing metadata for uploaded files:\n1. `$_FILES['file']['name']`: Original client filename\n2. `$_FILES['file']['type']`: MIME type\n3. `$_FILES['file']['size']`: File size in bytes\n4. `$_FILES['file']['tmp_name']`: Temporary path on server\n5. `$_FILES['file']['error']`: Upload error code.",
    answerTamil: "பதிவேற்றப்பட்ட கோப்பின் 5 முக்கிய பண்புகள்:\n1. name: கோப்பின் பெயர்\n2. type: கோப்பின் வகை (MIME)\n3. size: கோப்பின் அளவு\n4. tmp_name: சேவையக தற்காலிக பாதை\n5. error: பிழைக் குறியீடு.",
    isBookBack: true
  },
  // 5M (2)
  {
    id: "ca12-ch8-5m-1", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 5, type: "essay", questionText: "Explain PHP Form handling with GET and POST methods along with HTML form and PHP script examples.",
    questionTextTamil: "HTML படிவம் மற்றும் PHP நிரல் எடுத்துக்காட்டுகளுடன் GET மற்றும் POST முறைகளின் படிவ கையாளுதலை விளக்குக.",
    answer: "HTML Form Handling in PHP:\n\n1. HTML Form (`form.html`):\n```html\n<form action=\"process.php\" method=\"POST\">\n  Username: <input type=\"text\" name=\"user\"><br>\n  Password: <input type=\"password\" name=\"pass\"><br>\n  <input type=\"submit\" value=\"Login\">\n</form>\n```\n\n2. PHP Processing Script (`process.php`):\n```php\n<?php\nif ($_SERVER[\"REQUEST_METHOD\"] == \"POST\") {\n    $username = htmlspecialchars($_POST['user']);\n    $password = $_POST['pass'];\n    echo \"Welcome, \" . $username;\n}\n?>\n```\n\n- When user clicks Submit, browser packages field names (`name` attribute) into `$_POST` array and forwards to server `process.php` securely.",
    answerTamil: "PHP படிவ கையாளுதல்:\n1. HTML படிவம்:\n```html\n<form action=\"process.php\" method=\"POST\">\n  பெயர்: <input type=\"text\" name=\"user\"><br>\n  கடவுச்சொல்: <input type=\"password\" name=\"pass\"><br>\n  <input type=\"submit\" value=\"உள்நுழை\">\n</form>\n```\n2. PHP செயலாக்க நிரல்:\n```php\n<?php\nif ($_SERVER[\"REQUEST_METHOD\"] == \"POST\") {\n    $name = $_POST['user'];\n    echo \"வணக்கம் \" . $name;\n}\n?>\n```",
    isBookBack: true
  },
  {
    id: "ca12-ch8-5m-2", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 5, type: "essay", questionText: "Explain file handling operations in PHP (Opening, Reading, Writing, Closing) with code examples.",
    questionTextTamil: "PHP-ல் கோப்பு கையாளுதல் செயல்பாடுகளை (திறத்தல், படித்தல், எழுதுதல், மூடுதல்) நிரல் எடுத்துக்காட்டுகளுடன் விளக்குக.",
    answer: "File Handling Operations in PHP:\n\n1. fopen() - Opening a File:\n`$file = fopen(\"data.txt\", \"w+\");`\n\n2. fwrite() - Writing to a File:\n`fwrite($file, \"Learning PHP File Operations\\n\");`\n\n3. fgets() & fread() - Reading a File:\n```php\n$file = fopen(\"data.txt\", \"r\");\nwhile (!feof($file)) {\n    echo fgets($file) . \"<br>\";\n}\n```\n\n4. fclose() - Closing a File:\n`fclose($file);`\n\nAlways close files to release OS locks and prevent memory leaks.",
    answerTamil: "PHP கோப்பு கையாளுதல்:\n1. திறத்தல் (`fopen`): `$file = fopen(\"data.txt\", \"r\");`\n2. படித்தல் (`fread` / `fgets`): `$data = fread($file, filesize(\"data.txt\"));`\n3. எழுதுதல் (`fwrite`): `fwrite($file, \"உரை\");`\n4. மூடுதல் (`fclose`): `fclose($file);`",
    isBookBack: true
  }
];

// ==========================================
// CHAPTER 9: Connecting PHP and MYSQL (10 1M, 5 2M, 5 3M, 2 5M = 22)
// ==========================================
export const ch9_questions: Question[] = [
  // 1M (10)
  {
    id: "ca12-ch9-1m-1", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1, type: "mcq", questionText: "Which function is used to establish a connection to MySQL database in PHP?",
    questionTextTamil: "PHP-ல் MySQL தரவுத்தளத்துடன் இணைப்பை ஏற்படுத்த பயன்படும் செயற்கூறு எது?",
    options: { A: "mysqli_connect()", B: "mysql_open()", C: "db_connect()", D: "sql_connect()" },
    optionsTamil: { A: "mysqli_connect()", B: "mysql_open()", C: "db_connect()", D: "sql_connect()" },
    correctOption: "A", answer: "A) mysqli_connect()", answerTamil: "A) mysqli_connect()", isBookBack: true
  },
  {
    id: "ca12-ch9-1m-2", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1, type: "mcq", questionText: "Which extension is recommended for modern PHP MySQL database connectivity?",
    questionTextTamil: "நவீன PHP-ல் MySQL தரவுத்தள இணைப்புக்கு பரிந்துரைக்கப்படும் நீட்டிப்பு எது?",
    options: { A: "MySQLi", B: "MySQL", C: "Oracle", D: "PostgreSQL" },
    optionsTamil: { A: "MySQLi (MySQL Improved)", B: "MySQL", C: "Oracle", D: "PostgreSQL" },
    correctOption: "A", answer: "A) MySQLi", answerTamil: "A) MySQLi (MySQL Improved)", isBookBack: true
  },
  {
    id: "ca12-ch9-1m-3", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1, type: "mcq", questionText: "Which function executes an SQL query on an open MySQL database connection?",
    questionTextTamil: "திறக்கப்பட்ட MySQL இணைப்பில் SQL வினவலை இயக்க பயன்படும் செயற்கூறு எது?",
    options: { A: "mysqli_query()", B: "mysqli_exec()", C: "mysqli_run()", D: "mysqli_sql()" },
    optionsTamil: { A: "mysqli_query()", B: "mysqli_exec()", C: "mysqli_run()", D: "mysqli_sql()" },
    correctOption: "A", answer: "A) mysqli_query()", answerTamil: "A) mysqli_query()", isBookBack: true
  },
  {
    id: "ca12-ch9-1m-4", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1, type: "mcq", questionText: "Which function closes an open MySQL database connection in PHP?",
    questionTextTamil: "PHP-ல் திறக்கப்பட்ட MySQL இணைப்பை மூட பயன்படும் செயற்கூறு எது?",
    options: { A: "mysqli_close()", B: "mysqli_disconnect()", C: "mysqli_end()", D: "mysqli_stop()" },
    optionsTamil: { A: "mysqli_close()", B: "mysqli_disconnect()", C: "mysqli_end()", D: "mysqli_stop()" },
    correctOption: "A", answer: "A) mysqli_close()", answerTamil: "A) mysqli_close()", isBookBack: true
  },
  {
    id: "ca12-ch9-1m-5", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1, type: "mcq", questionText: "Which function fetches a result row as an associative array in PHP?",
    questionTextTamil: "வினவலின் முடிவு வரிசையை தொடர்புசார் அணியாக பெற பயன்படும் செயற்கூறு எது?",
    options: { A: "mysqli_fetch_assoc()", B: "mysqli_fetch_array()", C: "mysqli_fetch_row()", D: "mysqli_fetch_all()" },
    optionsTamil: { A: "mysqli_fetch_assoc()", B: "mysqli_fetch_array()", C: "mysqli_fetch_row()", D: "mysqli_fetch_all()" },
    correctOption: "A", answer: "A) mysqli_fetch_assoc()", answerTamil: "A) mysqli_fetch_assoc()", isBookBack: true
  },
  {
    id: "ca12-ch9-1m-6", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1, type: "mcq", questionText: "What is the default port number used by MySQL server?",
    questionTextTamil: "MySQL சேவையகத்தின் இயல்புநிலை போர்ட் எண் எது?",
    options: { A: "3306", B: "8080", C: "21", D: "443" },
    optionsTamil: { A: "3306", B: "8080", C: "21", D: "443" },
    correctOption: "A", answer: "A) 3306", answerTamil: "A) 3306", isBookBack: true
  },
  {
    id: "ca12-ch9-1m-7", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1, type: "mcq", questionText: "Which function returns the error description from the last connection error?",
    questionTextTamil: "கடைசி இணைப்பு பிழையின் விளக்கத்தை தரும் செயற்கூறு எது?",
    options: { A: "mysqli_connect_error()", B: "mysqli_error()", C: "mysqli_last_error()", D: "mysqli_fail()" },
    optionsTamil: { A: "mysqli_connect_error()", B: "mysqli_error()", C: "mysqli_last_error()", D: "mysqli_fail()" },
    correctOption: "A", answer: "A) mysqli_connect_error()", answerTamil: "A) mysqli_connect_error()", isBookBack: true
  },
  {
    id: "ca12-ch9-1m-8", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1, type: "mcq", questionText: "Which function returns the number of rows in a result set in PHP?",
    questionTextTamil: "முடிவுத் தொகுப்பில் உள்ள வரிசைகளின் எண்ணிக்கையைத் தரும் செயற்கூறு எது?",
    options: { A: "mysqli_num_rows()", B: "mysqli_count()", C: "mysqli_rows()", D: "mysqli_total()" },
    optionsTamil: { A: "mysqli_num_rows()", B: "mysqli_count()", C: "mysqli_rows()", D: "mysqli_total()" },
    correctOption: "A", answer: "A) mysqli_num_rows()", answerTamil: "A) mysqli_num_rows()", isBookBack: true
  },
  {
    id: "ca12-ch9-1m-9", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1, type: "mcq", questionText: "What does 'i' stand for in MySQLi extension?",
    questionTextTamil: "MySQLi நீட்டிப்பில் 'i' எதைக் குறிக்கிறது?",
    options: { A: "Improved", B: "Internet", C: "Integrated", D: "Interactive" },
    optionsTamil: { A: "Improved (மேம்படுத்தப்பட்ட)", B: "Internet", C: "Integrated", D: "Interactive" },
    correctOption: "A", answer: "A) Improved", answerTamil: "A) Improved (மேம்படுத்தப்பட்ட)", isBookBack: true
  },
  {
    id: "ca12-ch9-1m-10", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1, type: "mcq", questionText: "How many mandatory arguments are passed to mysqli_connect()?",
    questionTextTamil: "mysqli_connect() செயற்கூறுக்கு பொதுவாக வழங்கப்படும் முதன்மை அளவுருக்கள் எத்தனை?",
    options: { A: "4 (servername, username, password, dbname)", B: "1", C: "2", D: "6" },
    optionsTamil: { A: "4 (சேவையக பெயர், பயனர் பெயர், கடவுச்சொல், தரவுத்தள பெயர்)", B: "1", C: "2", D: "6" },
    correctOption: "A", answer: "A) 4 (servername, username, password, dbname)", answerTamil: "A) 4 (சேவையக பெயர், பயனர் பெயர், கடவுச்சொல், தரவுத்தள பெயர்)", isBookBack: true
  },
  // 2M (5)
  {
    id: "ca12-ch9-2m-1", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 2, type: "short", questionText: "What is MySQLi extension in PHP?",
    questionTextTamil: "PHP-ல் MySQLi நீட்டிப்பு என்றால் என்ன?",
    answer: "MySQLi (MySQL Improved) is an enhanced PHP extension that provides procedural and object-oriented interfaces to communicate with MySQL 4.1.13 and newer databases.",
    answerTamil: "MySQLi (MySQL Improved) என்பது MySQL தரவுத்தளத்துடன் பாதுகாப்பாக தொடர்பு கொள்ள நவீன PHP வழங்கும் மேம்படுத்தப்பட்ட நீட்டிப்பாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch9-2m-2", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 2, type: "short", questionText: "Write syntax of mysqli_connect() function in PHP.",
    questionTextTamil: "PHP-ல் mysqli_connect() செயற்கூறின் தொடரியலை எழுதுக.",
    answer: "Syntax:\n```php\n$conn = mysqli_connect(servername, username, password, dbname, [port]);\n```",
    answerTamil: "தொடரியல்:\n```php\n$conn = mysqli_connect(சேவையக பெயர், பயனர் பெயர், கடவுச்சொல், தரவுத்தள பெயர்);\n```",
    isBookBack: true
  },
  {
    id: "ca12-ch9-2m-3", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 2, type: "short", questionText: "What is the purpose of mysqli_close() function in PHP?",
    questionTextTamil: "PHP-ல் mysqli_close() செயற்கூறின் பயன் என்ன?",
    answer: "The `mysqli_close()` function closes a previously opened MySQL database connection, releasing server connection threads and resources.",
    answerTamil: "`mysqli_close()` செயற்கூறு திறந்துள்ள MySQL தரவுத்தள இணைப்பை மூடி சேவையகத்தின் வளங்களை விடுவிக்க உதவுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch9-2m-4", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 2, type: "short", questionText: "What is mysqli_query() in PHP?",
    questionTextTamil: "PHP-ல் mysqli_query() செயற்கூறு என்றால் என்ன?",
    answer: "The `mysqli_query()` function performs an SQL query (SELECT, INSERT, UPDATE, DELETE) against the database connection.",
    answerTamil: "`mysqli_query()` என்பது தரவுத்தள இணைப்பில் SQL வினவல்களை (SELECT, INSERT) இயக்க பயன்படும் செயற்கூறாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch9-2m-5", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 2, type: "short", questionText: "What are the three main types of database connectivity interfaces supported by PHP?",
    questionTextTamil: "PHP ஆதரிக்கும் மூன்று முக்கிய தரவுத்தள இணைப்பு இடைமுகங்கள் யாவை?",
    answer: "1. MySQL Extension (Legacy/Deprecated)\n2. MySQLi Extension (Procedural and OOP)\n3. PDO (PHP Data Objects).",
    answerTamil: "1. MySQL நீட்டிப்பு (பழையது)\n2. MySQLi நீட்டிப்பு (மேம்படுத்தப்பட்டது)\n3. PDO (PHP Data Objects).",
    isBookBack: true
  },
  // 3M (5)
  {
    id: "ca12-ch9-3m-1", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 3, type: "brief", questionText: "Explain how connection errors are handled in PHP MySQLi.",
    questionTextTamil: "PHP MySQLi-ல் இணைப்பு பிழைகள் எவ்வாறு கையாளப்படுகின்றன என்பதை விளக்குக.",
    answer: "Connection errors are checked using `!$conn` and error messages are retrieved via `mysqli_connect_error()`:\n```php\n$conn = mysqli_connect(\"localhost\", \"root\", \"\", \"school_db\");\nif (!$conn) {\n    die(\"Connection failed: \" . mysqli_connect_error());\n}\necho \"Connected successfully\";\n```",
    answerTamil: "இணைப்பு பிழைகளைக் கையாளும் முறை:\n```php\n$conn = mysqli_connect(\"localhost\", \"root\", \"\", \"school_db\");\nif (!$conn) {\n    die(\"இணைப்பு தோல்வி: \" . mysqli_connect_error());\n}\necho \"இணைப்பு வெற்றி\";\n```",
    isBookBack: true
  },
  {
    id: "ca12-ch9-3m-2", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 3, type: "brief", questionText: "Explain mysqli_fetch_assoc() with an example in PHP.",
    questionTextTamil: "PHP-ல் mysqli_fetch_assoc() செயற்கூறை எடுத்துக்காட்டுடன் விளக்குக.",
    answer: "`mysqli_fetch_assoc()` fetches a result row as an associative array where column names are keys.\n\nExample:\n```php\n$result = mysqli_query($conn, \"SELECT name, age FROM students\");\nwhile ($row = mysqli_fetch_assoc($result)) {\n    echo \"Name: \" . $row[\"name\"] . \" - Age: \" . $row[\"age\"] . \"<br>\";\n}\n```",
    answerTamil: "`mysqli_fetch_assoc()` வரிசைத் தரவுகளை நெடுவரிசை பெயர்களை சாவியாகக் கொண்ட தொடர்புசார் அணியாக வழங்குகிறது:\n```php\n$result = mysqli_query($conn, \"SELECT name FROM students\");\nwhile ($row = mysqli_fetch_assoc($result)) {\n    echo $row[\"name\"] . \"<br>\";\n}\n```",
    isBookBack: true
  },
  {
    id: "ca12-ch9-3m-3", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 3, type: "brief", questionText: "What are the advantages of MySQLi over older MySQL extension?",
    questionTextTamil: "பழைய MySQL நீட்டிப்பை விட MySQLi நீட்டிப்பின் நன்மைகள் யாவை?",
    answer: "Advantages of MySQLi:\n1. Object-oriented and procedural interfaces.\n2. Support for Prepared Statements (protects against SQL Injection).\n3. Support for Multiple Queries execution.\n4. Enhanced debugging capabilities and SSL support.",
    answerTamil: "MySQLi-ன் நன்மைகள்:\n1. பொருள்நோக்கு மற்றும் செயல்முறை சார்ந்த இடைமுகங்கள்.\n2. SQL ஊடுருவலை (SQL Injection) தடுக்கும் தயார்நிலை கூற்றுகள் (Prepared statements).\n3. பல வினவல்களை ஒரே நேரத்தில் இயக்கும் வசதி.\n4. SSL பாதுகாப்பு ஆதரவு.",
    isBookBack: true
  },
  {
    id: "ca12-ch9-3m-4", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 3, type: "brief", questionText: "Write a short note on mysqli_num_rows().",
    questionTextTamil: "mysqli_num_rows() பற்றி சிறு குறிப்பு வரைக.",
    answer: "The `mysqli_num_rows()` function returns the integer count of rows returned in a SELECT query result set. It is commonly used to check if any records were found before displaying data.",
    answerTamil: "`mysqli_num_rows()` செயற்கூறு SELECT வினவலின் முடிவுத் தொகுப்பில் உள்ள மொத்த வரிசைகளின் எண்ணிக்கையைத் தருகிறது. பதிவுகள் உள்ளதா என்பதை சரிபார்க்க இது பயன்படுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch9-3m-5", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 3, type: "brief", questionText: "How is an INSERT statement executed from PHP into MySQL?",
    questionTextTamil: "PHP-லிருந்து MySQL தரவுத்தளத்தில் INSERT கூற்றை எவ்வாறு இயக்குவது?",
    answer: "An INSERT query string is constructed and executed using `mysqli_query()`:\n```php\n$sql = \"INSERT INTO students (name, mark) VALUES ('Kavitha', 95)\";\nif (mysqli_query($conn, $sql)) {\n    echo \"New record created successfully\";\n}\n```",
    answerTamil: "PHP-ல் INSERT வினவலை இயக்குதல்:\n```php\n$sql = \"INSERT INTO students (name, mark) VALUES ('கவிதா', 95)\";\nif (mysqli_query($conn, $sql)) {\n    echo \"புதிய பதிவு வெற்றிகரமாக சேர்க்கப்பட்டது\";\n}\n```",
    isBookBack: true
  },
  // 5M (2)
  {
    id: "ca12-ch9-5m-1", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 5, type: "essay", questionText: "Explain MySQLi database connection process in PHP step by step with a complete program.",
    questionTextTamil: "PHP-ல் MySQLi தரவுத்தள இணைப்பு செயல்முறையை படிநிலைகளாக முழுமையான நிரலுடன் விளக்குக.",
    answer: "Step-by-Step MySQLi Connection in PHP:\n\nStep 1: Define Connection Parameters (Host, User, Password, DB Name).\nStep 2: Connect via `mysqli_connect()`.\nStep 3: Verify connection status using `mysqli_connect_error()`.\nStep 4: Execute SQL Query with `mysqli_query()`.\nStep 5: Process and print results with `mysqli_fetch_assoc()`.\nStep 6: Close connection with `mysqli_close()`.\n\nComplete Program:\n```php\n<?php\n$servername = \"localhost\";\n$username = \"root\";\n$password = \"\";\n$dbname = \"school_db\";\n\n$conn = mysqli_connect($servername, $username, $password, $dbname);\nif (!$conn) {\n    die(\"Connection failed: \" . mysqli_connect_error());\n}\n\n$sql = \"SELECT id, name, marks FROM students\";\n$result = mysqli_query($conn, $sql);\n\nif (mysqli_num_rows($result) > 0) {\n    while ($row = mysqli_fetch_assoc($result)) {\n        echo \"ID: \" . $row[\"id\"] . \" - Name: \" . $row[\"name\"] . \"<br>\";\n    }\n} else {\n    echo \"0 results found\";\n}\n\nmysqli_close($conn);\n?>\n```",
    answerTamil: "படிநிலைகள்:\n1. இணைப்பு விவரங்களை அமைத்தல் (Host, User, Pass, DB).\n2. `mysqli_connect()` மூலம் இணைத்தல்.\n3. `mysqli_connect_error()` கொண்டு பிழைகளை சரிபார்த்தல்.\n4. `mysqli_query()` மூலம் வினவலை இயக்குதல்.\n5. `mysqli_fetch_assoc()` மூலம் முடிவுகளை அச்சிடுதல்.\n6. `mysqli_close()` மூலம் இணைப்பை மூடுதல்.",
    isBookBack: true
  },
  {
    id: "ca12-ch9-5m-2", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 5, type: "essay", questionText: "Discuss the various MySQLi functions in PHP and their purposes.",
    questionTextTamil: "PHP-ல் உள்ள பல்வேறு MySQLi செயற்கூறுகளையும் அவற்றின் பயன்பாடுகளையும் விவரிக்கவும்.",
    answer: "Key MySQLi Functions in PHP:\n\n1. `mysqli_connect()`: Connects to a MySQL database server.\n2. `mysqli_connect_error()`: Returns error message from the last connection attempt.\n3. `mysqli_query()`: Executes SQL queries on the database.\n4. `mysqli_fetch_assoc()`: Fetches a result row as an associative key-value array.\n5. `mysqli_fetch_row()`: Fetches a result row as an enumerated numeric array.\n6. `mysqli_num_rows()`: Returns total number of rows found in the result set.\n7. `mysqli_close()`: Safely terminates the database connection.",
    answerTamil: "முக்கிய MySQLi செயற்கூறுகள்:\n1. `mysqli_connect()`: தரவுத்தள இணைப்பை ஏற்படுத்துகிறது.\n2. `mysqli_connect_error()`: இணைப்பு பிழை செய்தியைத் தருகிறது.\n3. `mysqli_query()`: SQL வினவலை இயக்குகிறது.\n4. `mysqli_fetch_assoc()`: தரவுகளை தொடர்புசார் அணியாகத் தருகிறது.\n5. `mysqli_num_rows()`: வரிசைகளின் எண்ணிக்கையைத் தருகிறது.\n6. `mysqli_close()`: இணைப்பை மூடுகிறது.",
    isBookBack: true
  }
];

// ==========================================
// CHAPTER 10: Introduction to Computer Networks (5 1M, 4 2M, 4 3M, 3 5M = 16)
// ==========================================
export const ch10_questions: Question[] = [
  // 1M (5)
  {
    id: "ca12-ch10-1m-1", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1, type: "mcq", questionText: "A set of computers connected together for the purpose of sharing resources is called",
    questionTextTamil: "வளங்களைப் பகிர்வதற்காக ஒன்றாக இணைக்கப்பட்ட கணினிகளின் தொகுப்பு எவ்வாறு அழைக்கப்படுகிறது?",
    options: { A: "Computer Network", B: "Computer System", C: "Operating System", D: "Hard Disk" },
    optionsTamil: { A: "கணினி வலையமைப்பு (Computer Network)", B: "கணினி அமைப்பு", C: "இயக்க முறைமை", D: "வன்தட்டு" },
    correctOption: "A", answer: "A) Computer Network", answerTamil: "A) கணினி வலையமைப்பு (Computer Network)", isBookBack: true
  },
  {
    id: "ca12-ch10-1m-2", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1, type: "mcq", questionText: "Which of the following is an example of PAN (Personal Area Network)?",
    questionTextTamil: "தனிநபர் பரப்பு வலையமைப்பிற்கு (PAN) ஓர் எடுத்துக்காட்டு எது?",
    options: { A: "Bluetooth connection between phone and headset", B: "Internet", C: "Cable TV Network", D: "WAN" },
    optionsTamil: { A: "தொலைபேசி மற்றும் ஹெட்செட் இடையேயான புளூடூத் இணைப்பு", B: "இணையம்", C: "கேபிள் டிவி நெட்வொர்க்", D: "WAN" },
    correctOption: "A", answer: "A) Bluetooth connection between phone and headset", answerTamil: "A) தொலைபேசி மற்றும் ஹெட்செட் இடையேயான புளூடூத் இணைப்பு", isBookBack: true
  },
  {
    id: "ca12-ch10-1m-3", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1, type: "mcq", questionText: "Which network spans across a city or large university campus?",
    questionTextTamil: "ஒரு முழு நகரம் அல்லது பெரிய பல்கலைக்கழக வளாகத்தில் பரவியுள்ள வலையமைப்பு எது?",
    options: { A: "MAN (Metropolitan Area Network)", B: "LAN", C: "PAN", D: "SAN" },
    optionsTamil: { A: "பெருநகர பரப்பு வலையமைப்பு (MAN)", B: "LAN", C: "PAN", D: "SAN" },
    correctOption: "A", answer: "A) MAN (Metropolitan Area Network)", answerTamil: "A) பெருநகர பரப்பு வலையமைப்பு (MAN)", isBookBack: true
  },
  {
    id: "ca12-ch10-1m-4", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1, type: "mcq", questionText: "The largest Wide Area Network (WAN) in the world is",
    questionTextTamil: "உலகின் மிகப்பெரிய விரிந்த பரப்பு வலையமைப்பு (WAN) எது?",
    options: { A: "Internet", B: "Intranet", C: "Ethernet", D: "Bluetooth" },
    optionsTamil: { A: "இணையம் (Internet)", B: "உள் இணையம் (Intranet)", C: "ஈதர்நெட்", D: "புளூடூத்" },
    correctOption: "A", answer: "A) Internet", answerTamil: "A) இணையம் (Internet)", isBookBack: true
  },
  {
    id: "ca12-ch10-1m-5", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1, type: "mcq", questionText: "Which device connects multiple computers in a local network and forwards data using MAC addresses?",
    questionTextTamil: "உள்ளூர் வலையமைப்பில் கணினிகளை இணைத்து MAC முகவரிகளைப் பயன்படுத்தி தரவை அனுப்பும் சாதனம் எது?",
    options: { A: "Switch", B: "Modem", C: "Repeater", D: "Cable" },
    optionsTamil: { A: "சுவிட்ச் (Switch)", B: "மோடம்", C: "ரிப்பீட்டர்", D: "வடம்" },
    correctOption: "A", answer: "A) Switch", answerTamil: "A) சுவிட்ச் (Switch)", isBookBack: true
  },
  // 2M (4)
  {
    id: "ca12-ch10-2m-1", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 2, type: "short", questionText: "Define Computer Network.",
    questionTextTamil: "கணினி வலையமைப்பு (Computer Network) - வரையறுக்கவும்.",
    answer: "A computer network is a group of interconnected computers and peripheral devices that communicate and share hardware, software, and data resources with one another.",
    answerTamil: "கணினி வலையமைப்பு என்பது தகவல் பரிமாற்றம் மற்றும் மென்பொருள், வன்பொருள் வளங்களை பகிர்வதற்காக கம்பி அல்லது கம்பியில்லா வழியில் ஒன்றாக இணைக்கப்பட்ட கணினிகளின் தொகுப்பாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch10-2m-2", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 2, type: "short", questionText: "What is LAN (Local Area Network)?",
    questionTextTamil: "உள்ளூர் பரப்பு வலையமைப்பு (LAN) என்றால் என்ன?",
    answer: "LAN (Local Area Network) is a network that connects computers within a limited geographical area such as a room, home, school computer lab, or single office building.",
    answerTamil: "LAN என்பது ஒரு அறை, பள்ளி ஆய்வகம் அல்லது ஒரு குறிப்பிட்ட கட்டிடத்திற்குள் வரையறுக்கப்பட்ட குறுகிய புவியியல் பரப்பில் இணைக்கப்படும் கணினி வலையமைப்பாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch10-2m-3", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 2, type: "short", questionText: "List any four uses of computer networks.",
    questionTextTamil: "கணினி வலையமைப்பின் நான்கு பயன்பாடுகளைப் பட்டியலிடுக.",
    answer: "1. Resource and hardware sharing (printers, storage)\n2. Fast communication (Email, Instant Messaging)\n3. Centralized data management\n4. Cost reduction and enhanced collaboration.",
    answerTamil: "1. வன்பொருள் வளங்களைப் பகிர்தல் (அச்சுப்பொறி)\n2. விரைவான தகவல் தொடர்பு (மின்னஞ்சல்)\n3. மையப்படுத்தப்பட்ட தரவு மேலாண்மை\n4. செலவு குறைப்பு மற்றும் கூட்டுப்பணி.",
    isBookBack: true
  },
  {
    id: "ca12-ch10-2m-4", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 2, type: "short", questionText: "What is WAN (Wide Area Network)?",
    questionTextTamil: "விரிந்த பரப்பு வலையமைப்பு (WAN) என்றால் என்ன?",
    answer: "A Wide Area Network (WAN) is a telecommunications network that extends over a large geographic distance (countries or continents), connecting multiple LANs and MANs (e.g., The Internet).",
    answerTamil: "WAN என்பது நாடுகள் அல்லது கண்டங்கள் போன்ற பரந்த புவியியல் பரப்பில் பல்வேறு LAN மற்றும் MAN வலையமைப்புகளை இணைக்கும் தொலைத்தொடர்பு வலையமைப்பாகும் (எ.கா. இணையம்).",
    isBookBack: true
  },
  // 3M (4)
  {
    id: "ca12-ch10-3m-1", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 3, type: "brief", questionText: "Compare LAN, MAN, and WAN based on range, speed, and cost.",
    questionTextTamil: "வரம்பு, வேகம் மற்றும் செலவு ஆகியவற்றின் அடிப்படையில் LAN, MAN மற்றும் WAN ஆகியவற்றை ஒப்பிடுக.",
    answer: "1. LAN (Local Area Network): Range < 1-2 km; Speed 100 Mbps-1 Gbps; Low cost.\n2. MAN (Metropolitan Area Network): Range 5-50 km (citywide); Speed moderate (100 Mbps); Moderate cost.\n3. WAN (Wide Area Network): Range worldwide/global; Speed variable; High infrastructure cost.",
    answerTamil: "1. LAN: எல்லை < 2 கி.மீ; மிக அதிக வேகம்; குறைந்த செலவு.\n2. MAN: எல்லை 5-50 கி.மீ (நகரம்); நடுத்தர வேகம்; நடுத்தர செலவு.\n3. WAN: எல்லை உலகம் முழுவதும்; மாறுபடும் வேகம்; அதிக கட்டமைப்பு செலவு.",
    isBookBack: true
  },
  {
    id: "ca12-ch10-3m-2", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 3, type: "brief", questionText: "Write short notes on PAN (Personal Area Network) and WLAN.",
    questionTextTamil: "PAN மற்றும் WLAN பற்றி சிறு குறிப்பு வரைக.",
    answer: "1. PAN (Personal Area Network): Centered around an individual person within a range of 10 meters using Bluetooth/ZigBee (e.g., smartwatches, wireless earbuds).\n2. WLAN (Wireless LAN): Connects devices in a local area using high-frequency radio waves / Wi-Fi (IEEE 802.11) without physical cables.",
    answerTamil: "1. PAN (தனிநபர் பரப்பு வலையமைப்பு): ஒரு நபரைச் சுற்றி 10 மீட்டர் தூரத்திற்குள் புளூடூத் வழியாக செயல்படுவது.\n2. WLAN (கம்பியில்லா உள்ளூர் வலையமைப்பு): கம்பி வடங்கள் இன்றி வைஃபை (Wi-Fi) ரேடியோ அலைகள் மூலம் செயல்படும் LAN.",
    isBookBack: true
  },
  {
    id: "ca12-ch10-3m-3", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 3, type: "brief", questionText: "Explain the role of Node, Server, and Client in a network.",
    questionTextTamil: "வலையமைப்பில் முனை (Node), சேவையகம் (Server) மற்றும் கிளையன்ட் (Client) ஆகியவற்றின் பங்கை விளக்குக.",
    answer: "1. Node: Any device (PC, printer, router) connected to a network capable of sending/receiving data.\n2. Server: A high-performance central computer that provides services, files, and database access to client machines.\n3. Client: A workstation or user device that requests services from the server.",
    answerTamil: "1. முனை (Node): வலையமைப்பில் இணைக்கப்பட்டுள்ள கணினி, அச்சுப்பொறி போன்ற எந்தவொரு சாதனமும்.\n2. சேவையகம் (Server): வளங்களையும் சேவைகளையும் வழங்கும் முதன்மைக் கணினி.\n3. பயனர் கணினி (Client): சேவையகத்திடம் சேவைகளைக் கோரும் கணினி.",
    isBookBack: true
  },
  {
    id: "ca12-ch10-3m-4", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 3, type: "brief", questionText: "List and describe any three disadvantages of computer networks.",
    questionTextTamil: "கணினி வலையமைப்பின் மூன்று குறைபாடுகளை விவரிக்கவும்.",
    answer: "1. Security Threats: High risk of virus propagation, hacking, and unauthorized data breaches.\n2. Server Dependency: If the central server crashes, clients cannot access vital data.\n3. High Initial Setup Cost: Procuring routers, switches, servers, and cabling requires substantial investment.",
    answerTamil: "1. பாதுகாப்பு அச்சுறுத்தல்கள்: வைரஸ் பரவுதல் மற்றும் ஹேக்கிங் அபாயம்.\n2. சேவையக சார்பு: முதன்மை சேவையகம் பழுதடைந்தால் அனைத்து அமைப்புகளும் முடங்கும்.\n3. ஆரம்ப கட்டமைப்பு செலவு அதிகம்.",
    isBookBack: true
  },
  // 5M (3)
  {
    id: "ca12-ch10-5m-1", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 5, type: "essay", questionText: "Explain the classification of Computer Networks based on geographical scale (PAN, LAN, MAN, WAN).",
    questionTextTamil: "புவியியல் பரப்பளவின் அடிப்படையில் கணினி வலையமைப்பின் வகைப்பாடுகளை (PAN, LAN, MAN, WAN) விரிவாக விளக்குக.",
    answer: "Classification of Computer Networks:\n\n1. PAN (Personal Area Network):\n- Smallest scale, covers ~10 meters around a person.\n- Uses Bluetooth, Wi-Fi Direct, NFC for connecting phones, tablets, smart wearables.\n\n2. LAN (Local Area Network):\n- Spans a room, office building, or school campus (< 1-2 km).\n- High data transfer rates (100 Mbps - 10 Gbps) using Ethernet cables or Wi-Fi.\n\n3. MAN (Metropolitan Area Network):\n- Spans across an entire city or large town (5 - 50 km).\n- Used by cable television networks, municipal CCTV networks.\n\n4. WAN (Wide Area Network):\n- Connects computers across states, countries, and continents.\n- Uses satellite links, submarine fiber optic cables, and telephone lines.\n- Example: The World Wide Internet.",
    answerTamil: "புவியியல் வகைப்பாடுகள்:\n1. PAN (தனிநபர் பரப்பு வலையமைப்பு): 10 மீட்டர் பரப்பில் புளூடூத் மூலம் இயங்கும் வலையமைப்பு.\n2. LAN (உள்ளூர் பரப்பு வலையமைப்பு): ஒரு கட்டிடம் அல்லது பள்ளி வளாகத்திற்குள் அதிவேகமாக செயல்படும் வலையமைப்பு.\n3. MAN (பெருநகர பரப்பு வலையமைப்பு): ஒரு முழு நகரத்திற்குள் செயல்படும் வலையமைப்பு (எ.கா. கேபிள் டிவி வலையமைப்பு).\n4. WAN (விரிந்த பரப்பு வலையமைப்பு): உலகம் முழுவதும் பரவியுள்ள மிகப்பெரிய வலையமைப்பு (எ.கா. இணையம்).",
    isBookBack: true
  },
  {
    id: "ca12-ch10-5m-2", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 5, type: "essay", questionText: "Discuss the advantages and disadvantages of Computer Networks in detail.",
    questionTextTamil: "கணினி வலையமைப்பின் நன்மைகள் மற்றும் குறைபாடுகளை விரிவாக விவாதிக்கவும்.",
    answer: "Advantages:\n1. Resource Sharing: Expensive peripherals (laser printers, scanners, storage) can be shared across all users.\n2. Fast and Inexpensive Communication: Instant transmission of emails, video conferencing, and messages.\n3. Centralized Software Management: Software updates installed once on the server update all clients automatically.\n4. Flexible File Access: Users can access their files securely from any workstation.\n\nDisadvantages:\n1. Security Vulnerabilities: Malware, ransomware, and unauthorized intrusions.\n2. Single Point of Failure: Server outage stops network services.\n3. Expensive Infrastructure and Maintenance: Hardware, cabling, and network administrator salary.",
    answerTamil: "நன்மைகள்:\n1. வன்பொருள் மற்றும் கோப்பு பகிர்வு.\n2. விரைவான மற்றும் குறைந்த செலவிலான தகவல் தொடர்பு.\n3. மையப்படுத்தப்பட்ட மென்பொருள் நிர்வாகம்.\n4. எந்த கணினியிலிருந்தும் கோப்புகளை அணுகும் நெகிழ்வுத்தன்மை.\n\nகுறைபாடுகள்:\n1. வைரஸ் மற்றும் இணையத் தாக்குதல் அபாயங்கள்.\n2. சேவையகம் முடங்கினால் பணிகள் பாதிப்பு.\n3. கட்டமைப்பு மற்றும் பராமரிப்பு செலவுகள் அதிகம்.",
    isBookBack: true
  },
  {
    id: "ca12-ch10-5m-3", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 5, type: "essay", questionText: "Explain various network hardware components (NIC, Hub, Switch, Router, Bridge, Gateway).",
    questionTextTamil: "பல்வேறு பிணைய வன்பொருள் கூறுகளை (NIC, Hub, Switch, Router, Bridge, Gateway) விரிவாக விளக்குக.",
    answer: "Network Hardware Components:\n\n1. NIC (Network Interface Card): Hardware circuit installed on a PC providing a unique physical MAC address and RJ45 port for network connection.\n2. Hub: Simple broadcasting device that transmits incoming data packets to all connected ports indiscriminately.\n3. Switch: Intelligent hardware device that reads destination MAC addresses and forwards packets only to the intended port.\n4. Router: Connects two or more different logical networks (e.g. LAN to Internet) and routes IP packets across optimal paths.\n5. Bridge: Connects and filters traffic between two distinct LAN segments of the same protocol.\n6. Gateway: Protocol converter that connects completely different network architectures (e.g. mainframe network to TCP/IP).",
    answerTamil: "பிணைய வன்பொருள் கூறுகள்:\n1. NIC (பிணைய இடைமுக அட்டை): கணினியை நெட்வொர்க்குடன் இணைக்கும் வன்பொருள் அட்டை.\n2. Hub (ஹப்): வரும் தரவை அனைத்து போர்ட்டுகளுக்கும் கண்மூடித்தனமாக அனுப்பும் சாதனம்.\n3. Switch (சுவிட்ச்): MAC முகவரியைப் படித்து உரிய கணினிக்கு மட்டும் தரவை அனுப்பும் நுண்ணறிவு சாதனம்.\n4. Router (ரூட்டர்): வெவ்வேறு நெட்வொர்க்குகளை இணைத்து சிறந்த வழியில் பாக்கெட்டுகளை அனுப்பும் சாதனம்.\n5. Bridge (பிரிட்ஜ்): ஒரே நெறிமுறையைக் கொண்ட இரு LAN பிரிவுகளை இணைக்கும் சாதனம்.\n6. Gateway (நுழைவாயில்): மாறுபட்ட நெறிமுறைகளைக் கொண்ட நெட்வொர்க்குகளை இணைக்கும் மொழிபெயர்ப்பு சாதனம்.",
    isBookBack: true
  }
];

// ==========================================
// CHAPTER 12: Domain Name System (DNS) (10 1M, 7 2M, 5 3M, 3 5M = 25)
// ==========================================
export const ch12_questions: Question[] = [
  // 1M (10)
  {
    id: "ca12-ch12-1m-1", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 1, type: "mcq", questionText: "Which of the following maintains a directory of domain names and translates them to IP addresses?",
    questionTextTamil: "டொமைன் பெயர்களை IP முகவரிகளாக மொழிபெயர்க்கும் அடைவு அமைப்பை பராமரிப்பது எது?",
    options: { A: "DNS", B: "DHCP", C: "FTP", D: "SMTP" },
    optionsTamil: { A: "DNS (Domain Name System)", B: "DHCP", C: "FTP", D: "SMTP" },
    correctOption: "A", answer: "A) DNS", answerTamil: "A) DNS (Domain Name System)", isBookBack: true
  },
  {
    id: "ca12-ch12-1m-2", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 1, type: "mcq", questionText: "IPv4 address is composed of ______ bits.",
    questionTextTamil: "IPv4 முகவரி எத்தனை பிட்டுகளால் ஆனது?",
    options: { A: "32", B: "64", C: "128", D: "16" },
    optionsTamil: { A: "32 பிட்டுகள்", B: "64 பிட்டுகள்", C: "128 பிட்டுகள்", D: "16 பிட்டுகள்" },
    correctOption: "A", answer: "A) 32", answerTamil: "A) 32 பிட்டுகள்", isBookBack: true
  },
  {
    id: "ca12-ch12-1m-3", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 1, type: "mcq", questionText: "IPv6 address is composed of ______ bits.",
    questionTextTamil: "IPv6 முகவரி எத்தனை பிட்டுகளால் ஆனது?",
    options: { A: "128", B: "32", C: "64", D: "256" },
    optionsTamil: { A: "128 பிட்டுகள்", B: "32 பிட்டுகள்", C: "64 பிட்டுகள்", D: "256 பிட்டுகள்" },
    correctOption: "A", answer: "A) 128", answerTamil: "A) 128 பிட்டுகள்", isBookBack: true
  },
  {
    id: "ca12-ch12-1m-4", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 1, type: "mcq", questionText: "Which Top Level Domain (TLD) is designated for educational institutions?",
    questionTextTamil: "கல்வி நிறுவனங்களுக்காக ஒதுக்கப்பட்ட உயர் நிலை டொமைன் (TLD) எது?",
    options: { A: ".edu", B: ".com", C: ".gov", D: ".org" },
    optionsTamil: { A: ".edu", B: ".com", C: ".gov", D: ".org" },
    correctOption: "A", answer: "A) .edu", answerTamil: "A) .edu", isBookBack: true
  },
  {
    id: "ca12-ch12-1m-5", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 1, type: "mcq", questionText: "Which country-code Top Level Domain (ccTLD) belongs to India?",
    questionTextTamil: "இந்தியாவிற்கான நாட்டின் குறியீட்டு உயர் நிலை டொமைன் (ccTLD) எது?",
    options: { A: ".in", B: ".ind", C: ".ia", D: ".id" },
    optionsTamil: { A: ".in", B: ".ind", C: ".ia", D: ".id" },
    correctOption: "A", answer: "A) .in", answerTamil: "A) .in", isBookBack: true
  },
  {
    id: "ca12-ch12-1m-6", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 1, type: "mcq", questionText: "A URL (Uniform Resource Locator) specifies the ______ of a web resource.",
    questionTextTamil: "URL என்பது இணைய வளத்தின் எதைக் குறிப்பிடுகிறது?",
    options: { A: "Global Address / Location", B: "File size", C: "Author name", D: "Hard drive" },
    optionsTamil: { A: "உலகளாவிய முகவரி / இருப்பிடம்", B: "கோப்பின் அளவு", C: "ஆசிரியர் பெயர்", D: "வன்தட்டு" },
    correctOption: "A", answer: "A) Global Address / Location", answerTamil: "A) உலகளாவிய முகவரி / இருப்பிடம்", isBookBack: true
  },
  {
    id: "ca12-ch12-1m-7", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 1, type: "mcq", questionText: "How many root name server clusters exist at the top of the DNS hierarchy?",
    questionTextTamil: "DNS படிநிலையின் உச்சியில் உள்ள முதன்மை ரூட் பெயர் சேவையகங்களின் தொகுப்புகள் எத்தனை?",
    options: { A: "13", B: "10", C: "8", D: "16" },
    optionsTamil: { A: "13 (A முதல் M வரை)", B: "10", C: "8", D: "16" },
    correctOption: "A", answer: "A) 13", answerTamil: "A) 13 (A முதல் M வரை)", isBookBack: true
  },
  {
    id: "ca12-ch12-1m-8", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 1, type: "mcq", questionText: "The maximum length of a domain name label between dots is ______ characters.",
    questionTextTamil: "புள்ளிகளுக்கு இடையேயான ஒரு டொமைன் பெயர் லேபிளின் அதிகபட்ச நீளம் எத்தனை எழுத்துக்கள்?",
    options: { A: "63", B: "128", C: "255", D: "32" },
    optionsTamil: { A: "63 எழுத்துக்கள்", B: "128", C: "255", D: "32" },
    correctOption: "A", answer: "A) 63", answerTamil: "A) 63 எழுத்துக்கள்", isBookBack: true
  },
  {
    id: "ca12-ch12-1m-9", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 1, type: "mcq", questionText: "The full maximum length of a Fully Qualified Domain Name (FQDN) is ______ characters.",
    questionTextTamil: "முழுமையான டொமைன் பெயரின் (FQDN) அதிகபட்ச மொத்த நீளம் எத்தனை எழுத்துக்கள்?",
    options: { A: "253 (or 255)", B: "63", C: "128", D: "512" },
    optionsTamil: { A: "253 (அல்லது 255)", B: "63", C: "128", D: "512" },
    correctOption: "A", answer: "A) 253 (or 255)", answerTamil: "A) 253 (அல்லது 255)", isBookBack: true
  },
  {
    id: "ca12-ch12-1m-10", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 1, type: "mcq", questionText: "Which organization coordinates global allocation of IP addresses and domain names?",
    questionTextTamil: "உலகளாவிய IP முகவரிகள் மற்றும் டொமைன் பெயர்களை ஒருங்கிணைத்து நிர்வகிக்கும் அமைப்பு எது?",
    options: { A: "ICANN", B: "W3C", C: "IEEE", D: "ISO" },
    optionsTamil: { A: "ICANN", B: "W3C", C: "IEEE", D: "ISO" },
    correctOption: "A", answer: "A) ICANN", answerTamil: "A) ICANN", isBookBack: true
  },
  // 2M (7)
  {
    id: "ca12-ch12-2m-1", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 2, type: "short", questionText: "What is DNS (Domain Name System)?",
    questionTextTamil: "DNS (Domain Name System) என்றால் என்ன?",
    answer: "DNS (Domain Name System) is a distributed hierarchical naming system that translates human-readable domain names (like `www.google.com`) into machine-readable numeric IP addresses (like `142.250.190.46`).",
    answerTamil: "DNS என்பது மனிதர்கள் எளிதில் நினைவில் கொள்ளக்கூடிய டொமைன் பெயர்களை (எ.கா. google.com) கணினிகள் புரிந்துகொள்ளும் IP முகவரிகளாக மொழிபெயர்க்கும் அமைப்பாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch12-2m-2", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 2, type: "short", questionText: "What is an IP address?",
    questionTextTamil: "IP முகவரி என்றால் என்ன?",
    answer: "An IP (Internet Protocol) address is a unique numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication.",
    answerTamil: "IP முகவரி என்பது இணையத்தில் இணைக்கப்பட்டுள்ள ஒவ்வொரு கணினி அல்லது சாதனத்திற்கும் வழங்கப்படும் தனித்துவமான எண் முகவரியாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch12-2m-3", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 2, type: "short", questionText: "What are the two versions of IP addressing?",
    questionTextTamil: "IP முகவரி அமைப்பின் இரண்டு பதிப்புகள் யாவை?",
    answer: "1. IPv4: 32-bit address represented as 4 decimal numbers separated by dots (e.g., `192.168.1.1`).\n2. IPv6: 128-bit address represented as 8 hexadecimal blocks separated by colons (e.g., `2001:db8::1`).",
    answerTamil: "1. IPv4: 32-பிட் முகவரி, 4 தசம எண்களாக புள்ளிகளால் பிரிக்கப்பட்டது.\n2. IPv6: 128-பிட் முகவரி, 8 பதினாறும (Hexadecimal) தொகுதிகளாக முப்புள்ளிகளால் பிரிக்கப்பட்டது.",
    isBookBack: true
  },
  {
    id: "ca12-ch12-2m-4", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 2, type: "short", questionText: "What is a URL?",
    questionTextTamil: "URL என்றால் என்ன?",
    answer: "URL (Uniform Resource Locator) is the complete web address used to specify the exact location and retrieval protocol of a resource on the Internet (e.g., `https://www.example.com/index.html`).",
    answerTamil: "URL (Uniform Resource Locator) என்பது இணையத்தில் உள்ள ஒரு வலைப்பக்கம் அல்லது ஆவணத்தின் இருப்பிடத்தைக் குறிப்பிடும் முழுமையான முகவரியாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch12-2m-5", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 2, type: "short", questionText: "What is generic Top-Level Domain (gTLD)? Give two examples.",
    questionTextTamil: "பொதுவான உயர் நிலை டொமைன் (gTLD) என்றால் என்ன? இரண்டு எடுத்துக்காட்டுகள் தருக.",
    answer: "A generic Top-Level Domain (gTLD) identifies the category or purpose of an organization globally.\nExamples: `.com` (Commercial), `.org` (Non-profit organization), `.edu` (Educational).",
    answerTamil: "gTLD என்பது ஒரு நிறுவனத்தின் செயல்பாட்டு வகையைக் குறிக்கும் டொமைன் பகுதியாகும்.\nஎடுத்துக்காட்டுகள்: `.com` (வணிகம்), `.edu` (கல்வி), `.org` (அமைப்பு).",
    isBookBack: true
  },
  {
    id: "ca12-ch12-2m-6", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 2, type: "short", questionText: "What is country code Top-Level Domain (ccTLD)? Give two examples.",
    questionTextTamil: "நாட்டின் குறியீட்டு உயர் நிலை டொமைன் (ccTLD) என்றால் என்ன? இரண்டு எடுத்துக்காட்டுகள் தருக.",
    answer: "A country code Top-Level Domain (ccTLD) is a two-letter domain reserved for a specific country or geographical territory.\nExamples: `.in` (India), `.uk` (United Kingdom), `.us` (United States), `.au` (Australia).",
    answerTamil: "ccTLD என்பது ஒரு குறிப்பிட்ட நாட்டிற்காக ஒதுக்கப்பட்ட இரண்டு எழுத்து டொமைன் ஆகும்.\nஎடுத்துக்காட்டுகள்: `.in` (இந்தியா), `.uk` (பிரிட்டன்), `.au` (ஆஸ்திரேலியா).",
    isBookBack: true
  },
  {
    id: "ca12-ch12-2m-7", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 2, type: "short", questionText: "What is a Resolver in DNS?",
    questionTextTamil: "DNS-ல் ரிசால்வர் (Resolver) என்றால் என்ன?",
    answer: "A DNS Resolver is a client-side software program on a user's computer or ISP server that initiates DNS queries to translate domain names into IP addresses.",
    answerTamil: "DNS ரிசால்வர் என்பது பயனர் கணினியில் இருந்து டொமைன் பெயர்களுக்கான IP முகவரிகளை DNS சேவையகங்களிடம் கேட்டுப் பெறும் கிளையண்ட் மென்பொருளாகும்.",
    isBookBack: true
  },
  // 3M (5)
  {
    id: "ca12-ch12-3m-1", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 3, type: "brief", questionText: "Differentiate IPv4 and IPv6.",
    questionTextTamil: "IPv4 மற்றும் IPv6 முகவரிகளை வேறுபடுத்துக.",
    answer: "1. IPv4:\n- 32-bit address space (~4.3 billion addresses).\n- Dot-decimal notation (`192.168.1.1`).\n- Manual or DHCP configuration.\n\n2. IPv6:\n- 128-bit address space (virtually unlimited addresses).\n- Colon-hexadecimal notation (`2001:0db8::1`).\n- Auto-configuration and built-in IPsec security.",
    answerTamil: "1. IPv4: 32-பிட் அளவு; 4.3 பில்லியன் முகவரிகள்; தசம எண்கள் (192.168.0.1).\n2. IPv6: 128-பிட் அளவு; எண்ணற்ற முகவரிகள்; பதினாறும எண்கள் (2001:db8::1); மேம்பட்ட பாதுகாப்பு.",
    isBookBack: true
  },
  {
    id: "ca12-ch12-3m-2", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 3, type: "brief", questionText: "Explain the four components of a URL with an example.",
    questionTextTamil: "URL-ன் நான்கு முக்கிய கூறுகளை எடுத்துக்காட்டுடன் விளக்குக.",
    answer: "Example URL: `https://www.tnschools.gov.in/index.html`\n1. Protocol: `https://` (communication standard)\n2. Subdomain / Host: `www`\n3. Domain Name & TLD: `tnschools.gov.in`\n4. File Path / Resource: `/index.html`",
    answerTamil: "எடுத்துக்காட்டு: `https://www.tnschools.gov.in/index.html`\n1. நெறிமுறை (Protocol): `https://`\n2. துணை டொமைன்: `www`\n3. டொமைன் பெயர்: `tnschools.gov.in`\n4. கோப்பு பாதை: `/index.html`",
    isBookBack: true
  },
  {
    id: "ca12-ch12-3m-3", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 3, type: "brief", questionText: "Explain the hierarchical structure of Domain Names.",
    questionTextTamil: "டொமைன் பெயர்களின் படிநிலை அமைப்பை (Hierarchical Structure) விளக்குக.",
    answer: "Domain names are organized as an inverted tree:\n1. Root Domain: Indicated by a dot (`.`)\n2. Top-Level Domain (TLD): `.com`, `.org`, `.in`\n3. Second-Level Domain (SLD): Domain name registered by company (e.g. `google`, `yahoo`)\n4. Subdomain: Lower level branches (e.g. `mail.google.com`).",
    answerTamil: "படிநிலை அமைப்பு:\n1. ரூட் டொமைன் (Root): உச்சியில் உள்ள புள்ளி (`.`)\n2. உயர் நிலை டொமைன் (TLD): `.com`, `.in`\n3. இரண்டாம் நிலை டொமைன் (SLD): நிறுவனத்தின் பெயர் (எ.கா. `google`)\n4. துணை டொமைன்: `mail.google.com`",
    isBookBack: true
  },
  {
    id: "ca12-ch12-3m-4", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 3, type: "brief", questionText: "What is DNS Zone and Zone file?",
    questionTextTamil: "DNS மண்டலம் (Zone) மற்றும் மண்டலக் கோப்பு (Zone file) என்றால் என்ன?",
    answer: "A DNS Zone is a contiguous portion of the DNS domain namespace managed by a specific administrator. A Zone file is a text file containing DNS mapping resource records (A, AAAA, MX, CNAME) for that zone.",
    answerTamil: "DNS மண்டலம் என்பது ஒரு குறிப்பிட்ட நிர்வாகியால் நிர்வகிக்கப்படும் DNS பெயர்வெளியின் பகுதியாகும். மண்டலக் கோப்பு என்பது டொமைன் பெயர் மற்றும் IP முகவரி பதிவுகளைக் கொண்ட உரைக் கோப்பாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch12-3m-5", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 3, type: "brief", questionText: "Explain the three main types of DNS Name Servers.",
    questionTextTamil: "மூன்று முக்கிய வகையான DNS பெயர் சேவையகங்களை விளக்குக.",
    answer: "1. Root Name Server: Directs queries to appropriate TLD servers.\n2. TLD (Top-Level Domain) Server: Stores records for all domains sharing an extension like `.com` or `.in`.\n3. Authoritative Name Server: Holds the actual final IP mapping records for a specific domain.",
    answerTamil: "1. ரூட் பெயர் சேவையகம்: TLD சேவையகங்களை நோக்கி வினவல்களை வழிநடத்துகிறது.\n2. TLD சேவையகம்: `.com`, `.in` போன்ற நீட்டிப்புகளுக்கான பதிவுகளைக் கொண்டுள்ளது.\n3. அங்கீகரிக்கப்பட்ட சேவையகம்: குறிப்பிட்ட டொமைனுக்கான அசல் IP முகவரியை வழங்குகிறது.",
    isBookBack: true
  },
  // 5M (3)
  {
    id: "ca12-ch12-5m-1", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 5, type: "essay", questionText: "Explain the complete step-by-step working mechanism of DNS resolution with a neat diagrammatic description.",
    questionTextTamil: "DNS தெளிவுபடுத்தல் (Resolution) எவ்வாறு செயல்படுகிறது என்பதை படிநிலைகளுடன் விரிவாக விளக்குக.",
    answer: "Step-by-Step DNS Resolution Process:\n\n1. User enters `www.example.com` into web browser.\n2. Browser checks local cache; if not found, forwards query to Local DNS Resolver (ISP server).\n3. Resolver queries the Root Name Server (`.` root).\n4. Root server directs resolver to the TLD Server (`.com`).\n5. TLD server directs resolver to the Authoritative Name Server for `example.com`.\n6. Authoritative server returns the exact IP address (e.g. `93.184.216.34`) to the Resolver.\n7. Resolver caches the IP and sends it to the web browser.\n8. Browser opens direct HTTP/HTTPS connection to the web server IP.",
    answerTamil: "DNS செயல்படும் படிநிலைகள்:\n1. பயனர் உலாவியில் டொமைன் பெயரை தட்டச்சு செய்கிறார்.\n2. உலாவி ISP-யின் DNS ரிசால்வருக்கு வினவலை அனுப்புகிறது.\n3. ரிசால்வர் ரூட் சேவையகத்தை (Root Server) அணுகுகிறது.\n4. ரூட் சேவையகம் TLD சேவையகத்திற்கு வழிகாட்டுகிறது.\n5. TLD சேவையகம் அங்கீகரிக்கப்பட்ட சேவையகத்தை சுட்டிக்காட்டுகிறது.\n6. அங்கீகரிக்கப்பட்ட சேவையகம் அசல் IP முகவரியை ரிசால்வருக்கு வழங்குகிறது.\n7. ரிசால்வர் IP முகவரியை உலாவிக்கு அனுப்புகிறது.\n8. உலாவி வலைத்தளத்தை திரையில் காண்பிக்கிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch12-5m-2", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 5, type: "essay", questionText: "Explain in detail the parts of IP addressing and classes of IPv4 addresses.",
    questionTextTamil: "IP முகவரியின் பாகங்கள் மற்றும் IPv4 முகவரிகளின் வகுப்புகளை (Classes) விரிவாக விளக்குக.",
    answer: "IPv4 Addressing & Classes:\n\nAn IPv4 address consists of 32 bits divided into 2 parts: Network ID (Net ID) and Host ID.\n\nIPv4 Address Classes:\n1. Class A (1.0.0.0 to 126.255.255.255): 8 bits Net ID, 24 bits Host ID (for very large networks with millions of hosts).\n2. Class B (128.0.0.0 to 191.255.255.255): 16 bits Net ID, 16 bits Host ID (medium-sized enterprise networks).\n3. Class C (192.0.0.0 to 223.255.255.255): 24 bits Net ID, 8 bits Host ID (small local area networks, up to 254 hosts).\n4. Class D (224.0.0.0 to 239.255.255.255): Reserved for Multicast groups.\n5. Class E (240.0.0.0 to 255.255.255.255): Reserved for Experimental and research purposes.",
    answerTamil: "IPv4 முகவரி வகுப்புகள்:\n1. வகுப்பு A (1 - 126): பெரிய நிறுவனங்கள் (8 பிட் நெட்வொர்க், 24 பிட் ஹோஸ்ட்).\n2. வகுப்பு B (128 - 191): நடுத்தர நிறுவனங்கள் (16 பிட் நெட்வொர்க், 16 பிட் ஹோஸ்ட்).\n3. வகுப்பு C (192 - 223): சிறிய நெட்வொர்க்குகள் (24 பிட் நெட்வொர்க், 8 பிட் ஹோஸ்ட்).\n4. வகுப்பு D (224 - 239): மல்டிகாஸ்ட் பயன்பாட்டிற்கு ஒதுக்கப்பட்டது.\n5. வகுப்பு E (240 - 255): ஆராய்ச்சி பயன்பாட்டிற்கு ஒதுக்கப்பட்டது.",
    isBookBack: true
  },
  {
    id: "ca12-ch12-5m-3", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 5, type: "essay", questionText: "Explain the structure of Domain Name Space and its hierarchical tree model.",
    questionTextTamil: "டொமைன் பெயர்வெளியின் (Domain Name Space) கட்டமைப்பு மற்றும் மர மாதிரியை விரிவாக விளக்குக.",
    answer: "Domain Name Space Structure:\n\nDomain Name Space is a tree-structured inverted hierarchical database where each node represents a domain:\n1. Root Level: The highest level represented by a null label/dot (`.`). Managed by 13 root server clusters globally.\n2. Top Level Domains (TLD):\n- Generic TLDs (gTLD): `.com`, `.org`, `.net`, `.edu`\n- Country Code TLDs (ccTLD): `.in`, `.us`, `.uk`\n3. Second-Level Domains (SLD): Custom organization domain names (e.g. `google`, `tn.gov`)\n4. Subdomains: Lower hierarchical child domains created under SLD (e.g., `drive.google.com`, `dge.tn.gov.in`).\n\nEach node label can be up to 63 characters, and the total FQDN length cannot exceed 253/255 characters.",
    answerTamil: "டொமைன் பெயர்வெளியின் கட்டமைப்பு:\n1. ரூட் நிலை (Root level): உச்சியில் உள்ள புள்ளி (`.`).\n2. உயர் நிலை டொமைன்கள் (TLD): பொதுவானவை (`.com`, `.edu`) மற்றும் நாட்டின் குறியீடுகள் (`.in`, `.uk`).\n3. இரண்டாம் நிலை டொமைன்கள் (SLD): நிறுவனத்தின் பெயர் (`google.com`).\n4. துணை டொமைன்கள்: `mail.google.com`.\n\nஒவ்வொரு லேபிளும் அதிகபட்சம் 63 எழுத்துக்களையும், முழு டொமைன் பெயர் 253/255 எழுத்துக்களையும் கொண்டிருக்கலாம்.",
    isBookBack: true
  }
];

fs.writeFileSync('scripts_ca12_final/ch7.json', JSON.stringify(ch7_questions, null, 2), 'utf8');
fs.writeFileSync('scripts_ca12_final/ch8.json', JSON.stringify(ch8_questions, null, 2), 'utf8');
fs.writeFileSync('scripts_ca12_final/ch9.json', JSON.stringify(ch9_questions, null, 2), 'utf8');
fs.writeFileSync('scripts_ca12_final/ch10.json', JSON.stringify(ch10_questions, null, 2), 'utf8');
fs.writeFileSync('scripts_ca12_final/ch12.json', JSON.stringify(ch12_questions, null, 2), 'utf8');

console.log('Ch 7 done:', ch7_questions.length, '(expected 21)');
console.log('Ch 8 done:', ch8_questions.length, '(expected 21)');
console.log('Ch 9 done:', ch9_questions.length, '(expected 22)');
console.log('Ch 10 done:', ch10_questions.length, '(expected 16)');
console.log('Ch 12 done:', ch12_questions.length, '(expected 25)');
