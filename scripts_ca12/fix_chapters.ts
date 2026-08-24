import fs from 'fs';
import { Question } from '../src/types';

// ==========================================
// FIX CHAPTER 7: Loops in PHP (10 1M, 5 2M, 3 3M, 2 5M = 20)
// ==========================================
const ch7_1m: Question[] = [
  {
    id: "ca12-ch7-1m-1",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP-ல் மடக்குகள் (Loops in PHP)",
    marks: 1,
    type: "mcq",
    questionText: "Which loop is specifically used to iterate through arrays and objects in PHP?",
    questionTextTamil: "PHP-ல் அணிகள் மற்றும் பொருள்களை மறு செய்கை செய்ய பிரத்யேகமாக பயன்படும் மடக்கு எது?",
    options: { A: "for", B: "while", C: "do...while", D: "foreach" },
    optionsTamil: { A: "for", B: "while", C: "do...while", D: "foreach" },
    correctOption: "D",
    answer: "D) foreach",
    answerTamil: "D) foreach",
    isBookBack: true
  },
  {
    id: "ca12-ch7-1m-2",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP-ல் மடக்குகள் (Loops in PHP)",
    marks: 1,
    type: "mcq",
    questionText: "How many loop structures are primarily supported in PHP?",
    questionTextTamil: "PHP-ல் முக்கியமாக எத்தனை வகையான மடக்கு கட்டமைப்புகள் உள்ளன?",
    options: { A: "2", B: "3", C: "4", D: "5" },
    optionsTamil: { A: "2", B: "3", C: "4", D: "5" },
    correctOption: "C",
    answer: "C) 4",
    answerTamil: "C) 4",
    isBookBack: true
  },
  {
    id: "ca12-ch7-1m-3",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP-ல் மடக்குகள் (Loops in PHP)",
    marks: 1,
    type: "mcq",
    questionText: "Which loop is an exit-controlled loop that executes at least once even if the condition is false?",
    questionTextTamil: "நிபந்தனை பொய்யானாலும் குறைந்தபட்சம் ஒரு முறையாவது செயல்படுத்தப்படும் வெளியேறும்-கட்டுப்பாட்டு மடக்கு எது?",
    options: { A: "for", B: "while", C: "do...while", D: "foreach" },
    optionsTamil: { A: "for", B: "while", C: "do...while", D: "foreach" },
    correctOption: "C",
    answer: "C) do...while",
    answerTamil: "C) do...while",
    isBookBack: true
  },
  {
    id: "ca12-ch7-1m-4",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP-ல் மடக்குகள் (Loops in PHP)",
    marks: 1,
    type: "mcq",
    questionText: "Which statement is used to terminate a loop prematurely?",
    questionTextTamil: "மடக்கு செயல்பாட்டை உடனடியாக நிறுத்தப் பயன்படும் கூற்று எது?",
    options: { A: "exit", B: "break", C: "continue", D: "stop" },
    optionsTamil: { A: "exit", B: "break", C: "continue", D: "stop" },
    correctOption: "B",
    answer: "B) break",
    answerTamil: "B) break",
    isBookBack: true
  },
  {
    id: "ca12-ch7-1m-5",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP-ல் மடக்குகள் (Loops in PHP)",
    marks: 1,
    type: "mcq",
    questionText: "Which statement skips the remaining code in the current iteration and begins the next iteration?",
    questionTextTamil: "தற்போதைய மறுசெய்கையின் மீதமுள்ள குறியீடுகளைத் தவிர்த்து அடுத்த மறுசெய்கையைத் தொடங்க பயன்படும் கூற்று எது?",
    options: { A: "break", B: "continue", C: "skip", D: "next" },
    optionsTamil: { A: "break", B: "continue", C: "skip", D: "next" },
    correctOption: "B",
    answer: "B) continue",
    answerTamil: "B) continue",
    isBookBack: true
  },
  {
    id: "ca12-ch7-1m-6",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP-ல் மடக்குகள் (Loops in PHP)",
    marks: 1,
    type: "mcq",
    questionText: "In a 'for' loop, the three parts are initialization, test condition, and _________.",
    questionTextTamil: "ஒரு 'for' மடக்கில் தொடக்க மதிப்பு, சோதனை நிபந்தனை மற்றும் _________ ஆகிய மூன்று பகுதிகள் உள்ளன.",
    options: { A: "updation (increment/decrement)", B: "termination", C: "declaration", D: "definition" },
    optionsTamil: { A: "மேம்படுத்தல் (மிகுப்பு/குறைப்பு)", B: "நிறுத்தம்", C: "அறிவிப்பு", D: "வரையறை" },
    correctOption: "A",
    answer: "A) updation (increment/decrement)",
    answerTamil: "A) மேம்படுத்தல் (மிகுப்பு/குறைப்பு)",
    isBookBack: true
  },
  {
    id: "ca12-ch7-1m-7",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP-ல் மடக்குகள் (Loops in PHP)",
    marks: 1,
    type: "mcq",
    questionText: "Which loop is an entry-controlled loop that tests the condition before executing the loop body?",
    questionTextTamil: "மடக்கு உடற்பகுதியை இயக்குவதற்கு முன் நிபந்தனையைச் சரிபார்க்கும் நுழைவு-கட்டுப்பாட்டு மடக்கு எது?",
    options: { A: "while", B: "do...while", C: "goto", D: "switch" },
    optionsTamil: { A: "while", B: "do...while", C: "goto", D: "switch" },
    correctOption: "A",
    answer: "A) while",
    answerTamil: "A) while",
    isBookBack: true
  },
  {
    id: "ca12-ch7-1m-8",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP-ல் மடக்குகள் (Loops in PHP)",
    marks: 1,
    type: "mcq",
    questionText: "What is the output of: for ($i=0; $i<3; $i++) { echo $i; }?",
    questionTextTamil: "for ($i=0; $i<3; $i++) { echo $i; } என்பதன் வெளியீடு என்ன?",
    options: { A: "012", B: "123", C: "0123", D: "0 1 2 3" },
    optionsTamil: { A: "012", B: "123", C: "0123", D: "0 1 2 3" },
    correctOption: "A",
    answer: "A) 012",
    answerTamil: "A) 012",
    isBookBack: true
  },
  {
    id: "ca12-ch7-1m-9",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP-ல் மடக்குகள் (Loops in PHP)",
    marks: 1,
    type: "mcq",
    questionText: "In foreach($array as $key => $value), what does $key represent?",
    questionTextTamil: "foreach($array as $key => $value) கூற்றில் $key எதனைக் குறிக்கிறது?",
    options: { A: "Array key / index", B: "Array value", C: "Array length", D: "Array datatype" },
    optionsTamil: { A: "அணியின் திறவுகோல் / சுட்டு எண்", B: "அணியின் மதிப்பு", C: "அணியின் நீளம்", D: "தரவு வகை" },
    correctOption: "A",
    answer: "A) Array key / index",
    answerTamil: "A) அணியின் திறவுகோல் / சுட்டு எண்",
    isBookBack: true
  },
  {
    id: "ca12-ch7-1m-10",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP-ல் மடக்குகள் (Loops in PHP)",
    marks: 1,
    type: "mcq",
    questionText: "A loop that never ends because the test condition never evaluates to false is called a(n) _________ loop.",
    questionTextTamil: "நிபந்தனை எப்போதும் பொய்யாகாமல் முடிவில்லாமல் இயங்கிக் கொண்டே இருக்கும் மடக்கு எவ்வாறு அழைக்கப்படுகிறது?",
    options: { A: "infinite loop", B: "nested loop", C: "finite loop", D: "null loop" },
    optionsTamil: { A: "முடிவிலா மடக்கு (infinite loop)", B: "பின்னலான மடக்கு", C: "முடிவுறு மடக்கு", D: "வெற்று மடக்கு" },
    correctOption: "A",
    answer: "A) infinite loop",
    answerTamil: "A) முடிவிலா மடக்கு (infinite loop)",
    isBookBack: true
  }
];

const ch7_2m: Question[] = [
  {
    id: "ca12-ch7-2m-1",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP-ல் மடக்குகள் (Loops in PHP)",
    marks: 2,
    type: "short",
    questionText: "Define Looping Structure in PHP.",
    questionTextTamil: "PHP-ல் மடக்கு அமைப்பு (Looping Structure) - வரையறுக்கவும்.",
    answer: "Looping structures in PHP are control statements that execute a block of code repeatedly for a specified number of times or until a specific boolean condition is met.",
    answerTamil: "மடக்கு அமைப்புகள் என்பது ஒரு குறிப்பிட்ட நிபந்தனை உண்மையாக இருக்கும் வரை அல்லது குறிப்பிட்ட எண்ணிக்கை வரை ஒரு நிரல் பகுதியை மீண்டும் மீண்டும் செயல்படுத்தும் கட்டுப்பாட்டு அமைப்புகளாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch7-2m-2",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP-ல் மடக்குகள் (Loops in PHP)",
    marks: 2,
    type: "short",
    questionText: "What are the four types of loops supported in PHP?",
    questionTextTamil: "PHP-ல் உள்ள நான்கு வகையான மடக்குகள் யாவை?",
    answer: "1. for loop\n2. while loop\n3. do...while loop\n4. foreach loop.",
    answerTamil: "1. for மடக்கு\n2. while மடக்கு\n3. do...while மடக்கு\n4. foreach மடக்கு.",
    isBookBack: true
  },
  {
    id: "ca12-ch7-2m-3",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP-ல் மடக்குகள் (Loops in PHP)",
    marks: 2,
    type: "short",
    questionText: "Write the syntax for a 'for' loop in PHP.",
    questionTextTamil: "PHP-ல் 'for' மடக்கின் தொடரியலை (Syntax) எழுதுக.",
    answer: "for (init counter; test counter; increment counter) {\n    code to be executed;\n}",
    answerTamil: "for (தொடக்க மதிப்பு; சோதனை நிபந்தனை; மிகுப்பு/குறைப்பு) {\n    செயல்படுத்த வேண்டிய குறிமுறை;\n}",
    isBookBack: true
  },
  {
    id: "ca12-ch7-2m-4",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP-ல் மடக்குகள் (Loops in PHP)",
    marks: 2,
    type: "short",
    questionText: "What is the purpose of the 'break' statement in PHP loops?",
    questionTextTamil: "PHP மடக்குகளில் 'break' கூற்றின் பயன் என்ன?",
    answer: "The 'break' statement immediately terminates the execution of the enclosing loop and jumps control to the statement immediately following the loop.",
    answerTamil: "'break' கூற்று ஒரு மடக்கின் இயக்கத்தை உடனடியாக நிறுத்தி, கட்டுப்பாட்டை மடக்கிற்கு வெளியே உள்ள அடுத்த கூற்றுக்கு கொண்டு செல்கிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch7-2m-5",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP-ல் மடக்குகள் (Loops in PHP)",
    marks: 2,
    type: "short",
    questionText: "What is the purpose of the 'continue' statement in PHP loops?",
    questionTextTamil: "PHP மடக்குகளில் 'continue' கூற்றின் பயன் என்ன?",
    answer: "The 'continue' statement halts the current iteration of the loop, skips any remaining code in the loop body, and immediately moves to the next iteration.",
    answerTamil: "'continue' கூற்று நடப்பு மறுசெய்கையின் மீதமுள்ள குறிமுறைகளைத் தவிர்த்து, உடனடியாக அடுத்த மறுசெய்கையைத் தொடங்கும்.",
    isBookBack: true
  }
];

const ch7_3m: Question[] = [
  {
    id: "ca12-ch7-3m-1",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP-ல் மடக்குகள் (Loops in PHP)",
    marks: 3,
    type: "brief",
    questionText: "Differentiate between 'while' and 'do...while' loops in PHP.",
    questionTextTamil: "'while' மற்றும் 'do...while' மடக்குகளை வேறுபடுத்துக.",
    answer: "1. 'while' loop: Entry-controlled loop; checks condition before executing body; executes 0 times if condition is initially false.\n2. 'do...while' loop: Exit-controlled loop; checks condition after executing body; executes at least once regardless of condition.",
    answerTamil: "1. 'while' மடக்கு: நுழைவு-கட்டுப்பாட்டு மடக்கு; நிபந்தனையை முதலில் சோதிக்கும்; நிபந்தனை தொடக்கத்திலேயே பொய்யானால் ஒரு முறை கூட இயங்காது.\n2. 'do...while' மடக்கு: வெளியேறும்-கட்டுப்பாட்டு மடக்கு; உடற்பகுதியை இயக்கிய பின் நிபந்தனையை சோதிக்கும்; நிபந்தனை பொய்யானாலும் குறைந்தபட்சம் ஒரு முறையாவது இயங்கும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch7-3m-2",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP-ல் மடக்குகள் (Loops in PHP)",
    marks: 3,
    type: "brief",
    questionText: "Explain the 'foreach' loop with syntax and a simple example.",
    questionTextTamil: "PHP-ல் 'foreach' மடக்கை தொடரியல் மற்றும் எளிய எடுத்துக்காட்டுடன் விளக்குக.",
    answer: "Syntax:\nforeach ($array as $value) {\n    echo $value;\n}\n\nExample:\n$colors = array(\"Red\", \"Green\", \"Blue\");\nforeach ($colors as $c) {\n    echo $c . \" \";\n}",
    answerTamil: "தொடரியல்:\nforeach ($array as $value) {\n    echo $value;\n}\n\nஎடுத்துக்காட்டு:\n$colors = array(\"Red\", \"Green\", \"Blue\");\nforeach ($colors as $c) {\n    echo $c . \" \";\n}",
    isBookBack: true
  },
  {
    id: "ca12-ch7-3m-3",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP-ல் மடக்குகள் (Loops in PHP)",
    marks: 3,
    type: "brief",
    questionText: "Write a PHP script using a 'for' loop to display even numbers from 2 to 10.",
    questionTextTamil: "2 முதல் 10 வரையிலான இரட்டை எண்களை 'for' மடக்கைப் பயன்படுத்தி அச்சிடும் PHP நிரலை எழுதுக.",
    answer: "<?php\nfor ($i = 2; $i <= 10; $i += 2) {\n    echo $i . \"<br>\";\n}\n?>",
    answerTamil: "<?php\nfor ($i = 2; $i <= 10; $i += 2) {\n    echo $i . \"<br>\";\n}\n?>",
    isBookBack: true
  }
];

const ch7_5m: Question[] = [
  {
    id: "ca12-ch7-5m-1",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP-ல் மடக்குகள் (Loops in PHP)",
    marks: 5,
    type: "essay",
    questionText: "Explain the different types of loop structures available in PHP with syntaxes and examples.",
    questionTextTamil: "PHP-ல் உள்ள பல்வேறு வகையான மடக்கு அமைப்புகளை தொடரியல் மற்றும் எடுத்துக்காட்டுகளுடன் விரிவாக விளக்குக.",
    answer: "Loop structures in PHP:\n\n1. for loop: Used when number of iterations is known in advance.\nSyntax: for (init; condition; increment) { code; }\nExample: for ($i=1; $i<=5; $i++) { echo $i; }\n\n2. while loop: Entry-controlled loop executing as long as test condition is true.\nSyntax: while (condition) { code; increment; }\n\n3. do...while loop: Exit-controlled loop executing block at least once.\nSyntax: do { code; } while (condition);\n\n4. foreach loop: Specifically used to iterate over arrays.\nSyntax: foreach ($array as $value) { echo $value; }",
    answerTamil: "PHP-ல் மடக்கு அமைப்புகள்:\n\n1. for மடக்கு: சுழற்சிகளின் எண்ணிக்கை முன்கூட்டியே தெரிந்திருக்கும் போது பயன்படும்.\nதொடரியல்: for (தொடக்க மதிப்பு; நிபந்தனை; மிகுப்பு) { குறிமுறை; }\n\n2. while மடக்கு: நுழைவு-கட்டுப்பாட்டு மடக்கு; நிபந்தனை உண்மையாக இருக்கும் வரை இயங்கும்.\n\n3. do...while மடக்கு: வெளியேறும்-கட்டுப்பாட்டு மடக்கு; குறைந்தபட்சம் ஒரு முறை இயங்கும்.\n\n4. foreach மடக்கு: அணிகளின் கூறுகளை ஒவ்வொன்றாக அணுகப் பயன்படும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch7-5m-2",
    chapterNo: 7,
    chapterName: "Loops in PHP",
    chapterNameTamil: "PHP-ல் மடக்குகள் (Loops in PHP)",
    marks: 5,
    type: "essay",
    questionText: "Explain 'foreach' loop in detail with indexed and associative array examples.",
    questionTextTamil: "PHP-ல் 'foreach' மடக்கை சுட்டு எண் அணி மற்றும் தொடர்பு இருத்தப்பட்ட அணிகளின் எடுத்துக்காட்டுகளுடன் விரிவாக விளக்குக.",
    answer: "The 'foreach' loop in PHP works exclusively on arrays and objects.\n\n1. Syntax for Values only:\nforeach ($array as $value) {\n    echo $value . \" \";\n}\nExample:\n$fruits = array(\"Apple\", \"Banana\", \"Mango\");\nforeach ($fruits as $fruit) {\n    echo $fruit . \"<br>\";\n}\n\n2. Syntax for Key and Value pairs (Associative arrays):\nforeach ($array as $key => $value) {\n    echo $key . \" : \" . $value . \"<br>\";\n}\nExample:\n$marks = array(\"Tamil\" => 95, \"English\" => 90, \"CS\" => 99);\nforeach ($marks as $subject => $mark) {\n    echo \"Subject: \" . $subject . \", Mark: \" . $mark . \"<br>\";\n}",
    answerTamil: "foreach மடக்கு அணிகள் மற்றும் பொருள்களில் மட்டுமே செயல்படும்.\n\n1. மதிப்புகளை மட்டும் அணுகுதல்:\n$fruits = array(\"Apple\", \"Banana\", \"Mango\");\nforeach ($fruits as $fruit) {\n    echo $fruit . \"<br>\";\n}\n\n2. திறவுகோல் மற்றும் மதிப்புகளை அணுகுதல் (Associative Array):\n$marks = array(\"Tamil\" => 95, \"English\" => 90, \"CS\" => 99);\nforeach ($marks as $subject => $mark) {\n    echo \"Subject: \" . $subject . \", Mark: \" . $mark . \"<br>\";\n}",
    isBookBack: true
  }
];

const ch7_all = [...ch7_1m, ...ch7_2m, ...ch7_3m, ...ch7_5m];
fs.writeFileSync('scripts_ca12/ch7.json', JSON.stringify(ch7_all, null, 2), 'utf8');
console.log("Chapter 7 written! Total:", ch7_all.length);

// ==========================================
// FIX CHAPTER 9: Connecting PHP and MySQL (10 1M, 5 2M, 3 3M, 2 5M = 20)
// ==========================================
const ch9_1m: Question[] = [
  {
    id: "ca12-ch9-1m-1",
    chapterNo: 9,
    chapterName: "Connecting PHP and MySQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1,
    type: "mcq",
    questionText: "Which PHP extension function is used to establish a connection to a MySQL database server?",
    questionTextTamil: "MySQL தரவுத்தள சேவையகத்துடன் இணைப்பை ஏற்படுத்த பயன்படும் PHP செயற்கூறு எது?",
    options: { A: "mysqli_connect()", B: "mysql_open()", C: "db_connect()", D: "sql_connect()" },
    optionsTamil: { A: "mysqli_connect()", B: "mysql_open()", C: "db_connect()", D: "sql_connect()" },
    correctOption: "A",
    answer: "A) mysqli_connect()",
    answerTamil: "A) mysqli_connect()",
    isBookBack: true
  },
  {
    id: "ca12-ch9-1m-2",
    chapterNo: 9,
    chapterName: "Connecting PHP and MySQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1,
    type: "mcq",
    questionText: "Which function is used to execute an SQL query in PHP MySQLi?",
    questionTextTamil: "PHP MySQLi-ல் SQL வினவலை இயக்க பயன்படும் செயற்கூறு எது?",
    options: { A: "mysqli_query()", B: "mysqli_execute()", C: "mysqli_run()", D: "mysqli_sql()" },
    optionsTamil: { A: "mysqli_query()", B: "mysqli_execute()", C: "mysqli_run()", D: "mysqli_sql()" },
    correctOption: "A",
    answer: "A) mysqli_query()",
    answerTamil: "A) mysqli_query()",
    isBookBack: true
  },
  {
    id: "ca12-ch9-1m-3",
    chapterNo: 9,
    chapterName: "Connecting PHP and MySQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1,
    type: "mcq",
    questionText: "Which function closes an open database connection in PHP?",
    questionTextTamil: "திறக்கப்பட்ட தரவுத்தள இணைப்பை மூட பயன்படும் PHP செயற்கூறு எது?",
    options: { A: "mysqli_close()", B: "mysqli_exit()", C: "mysqli_end()", D: "mysqli_disconnect()" },
    optionsTamil: { A: "mysqli_close()", B: "mysqli_exit()", C: "mysqli_end()", D: "mysqli_disconnect()" },
    correctOption: "A",
    answer: "A) mysqli_close()",
    answerTamil: "A) mysqli_close()",
    isBookBack: true
  },
  {
    id: "ca12-ch9-1m-4",
    chapterNo: 9,
    chapterName: "Connecting PHP and MySQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1,
    type: "mcq",
    questionText: "What does the letter 'i' in mysqli stand for?",
    questionTextTamil: "mysqli-ல் உள்ள 'i' எழுத்தின் பொருள் என்ன?",
    options: { A: "improved", B: "internet", C: "interface", D: "integrated" },
    optionsTamil: { A: "மேம்படுத்தப்பட்ட (improved)", B: "இணையம்", C: "இடைமுகம்", D: "ஒருங்கிணைந்த" },
    correctOption: "A",
    answer: "A) improved",
    answerTamil: "A) மேம்படுத்தப்பட்ட (improved)",
    isBookBack: true
  },
  {
    id: "ca12-ch9-1m-5",
    chapterNo: 9,
    chapterName: "Connecting PHP and MySQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1,
    type: "mcq",
    questionText: "Which function returns the number of rows in a query result set?",
    questionTextTamil: "வினவலின் முடிவுத் தொகுப்பில் உள்ள வரிசைகளின் எண்ணிக்கையைத் தரும் செயற்கூறு எது?",
    options: { A: "mysqli_num_rows()", B: "mysqli_count()", C: "mysqli_rows()", D: "mysqli_total()" },
    optionsTamil: { A: "mysqli_num_rows()", B: "mysqli_count()", C: "mysqli_rows()", D: "mysqli_total()" },
    correctOption: "A",
    answer: "A) mysqli_num_rows()",
    answerTamil: "A) mysqli_num_rows()",
    isBookBack: true
  },
  {
    id: "ca12-ch9-1m-6",
    chapterNo: 9,
    chapterName: "Connecting PHP and MySQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1,
    type: "mcq",
    questionText: "Which function fetches a result row as an associative array in PHP MySQLi?",
    questionTextTamil: "வினவலின் வரிசையை தொடர்பு இருத்தப்பட்ட அணியாகப் பெற உதவும் செயற்கூறு எது?",
    options: { A: "mysqli_fetch_assoc()", B: "mysqli_fetch_array()", C: "mysqli_get_row()", D: "mysqli_fetch_row()" },
    optionsTamil: { A: "mysqli_fetch_assoc()", B: "mysqli_fetch_array()", C: "mysqli_get_row()", D: "mysqli_fetch_row()" },
    correctOption: "A",
    answer: "A) mysqli_fetch_assoc()",
    answerTamil: "A) mysqli_fetch_assoc()",
    isBookBack: true
  },
  {
    id: "ca12-ch9-1m-7",
    chapterNo: 9,
    chapterName: "Connecting PHP and MySQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1,
    type: "mcq",
    questionText: "What is the default username for MySQL in local XAMPP/WAMP server?",
    questionTextTamil: "உள்ளூர் XAMPP/WAMP சேவையகத்தில் MySQL-ன் முன்னிருப்பு பயனர் பெயர் என்ன?",
    options: { A: "root", B: "admin", C: "user", D: "system" },
    optionsTamil: { A: "root", B: "admin", C: "user", D: "system" },
    correctOption: "A",
    answer: "A) root",
    answerTamil: "A) root",
    isBookBack: true
  },
  {
    id: "ca12-ch9-1m-8",
    chapterNo: 9,
    chapterName: "Connecting PHP and MySQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1,
    type: "mcq",
    questionText: "What is the default server name / host address for local MySQL connections?",
    questionTextTamil: "MySQL உள்ளூர் சேவையகத்தின் முன்னிருப்பு ஹோஸ்ட் பெயர் என்ன?",
    options: { A: "localhost", B: "127.0.0.1", C: "both A and B", D: "server.com" },
    optionsTamil: { A: "localhost", B: "127.0.0.1", C: "A மற்றும் B இரண்டும்", D: "server.com" },
    correctOption: "C",
    answer: "C) both A and B",
    answerTamil: "C) A மற்றும் B இரண்டும்",
    isBookBack: true
  },
  {
    id: "ca12-ch9-1m-9",
    chapterNo: 9,
    chapterName: "Connecting PHP and MySQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1,
    type: "mcq",
    questionText: "Which function returns the error description from the last connection error?",
    questionTextTamil: "கடைசி இணைப்புப் பிழையின் விளக்கக் குறிப்பைத் தரும் செயற்கூறு எது?",
    options: { A: "mysqli_connect_error()", B: "mysqli_error()", C: "mysqli_fail()", D: "db_error()" },
    optionsTamil: { A: "mysqli_connect_error()", B: "mysqli_error()", C: "mysqli_fail()", D: "db_error()" },
    correctOption: "A",
    answer: "A) mysqli_connect_error()",
    answerTamil: "A) mysqli_connect_error()",
    isBookBack: true
  },
  {
    id: "ca12-ch9-1m-10",
    chapterNo: 9,
    chapterName: "Connecting PHP and MySQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1,
    type: "mcq",
    questionText: "How many parameters are commonly passed to mysqli_connect(host, user, password, dbname)?",
    questionTextTamil: "mysqli_connect() செயற்கூறுக்கு வழக்கமாக எத்தனை அளவுருக்கள் அனுப்பப்படுகின்றன?",
    options: { A: "4", B: "3", C: "2", D: "5" },
    optionsTamil: { A: "4", B: "3", C: "2", D: "5" },
    correctOption: "A",
    answer: "A) 4",
    answerTamil: "A) 4",
    isBookBack: true
  }
];

const ch9_2m: Question[] = [
  {
    id: "ca12-ch9-2m-1",
    chapterNo: 9,
    chapterName: "Connecting PHP and MySQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 2,
    type: "short",
    questionText: "What is MySQLi in PHP?",
    questionTextTamil: "PHP-ல் MySQLi என்றால் என்ன?",
    answer: "MySQLi (MySQL Improved) is a relational database driver extension in PHP that provides procedural and object-oriented interfaces to connect and execute queries on MySQL databases.",
    answerTamil: "MySQLi (MySQL Improved) என்பது PHP-ல் உள்ள ஒரு மேம்படுத்தப்பட்ட தரவுத்தள நீட்டிப்பாகும். இது MySQL தரவுத்தளத்துடன் பாதுகாப்பாக தொடர்பு கொண்டு வினவல்களை இயக்க உதவுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch9-2m-2",
    chapterNo: 9,
    chapterName: "Connecting PHP and MySQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 2,
    type: "short",
    questionText: "Write the syntax for mysqli_connect() function in PHP.",
    questionTextTamil: "PHP-ல் mysqli_connect() செயற்கூறின் தொடரியலை எழுதுக.",
    answer: "mysqli_connect(\"servername\", \"username\", \"password\", \"dbname\");",
    answerTamil: "mysqli_connect(\"சேவையகப் பெயர்\", \"பயனர் பெயர்\", \"கடவுச்சொல்\", \"தரவுத்தள பெயர்\");",
    isBookBack: true
  },
  {
    id: "ca12-ch9-2m-3",
    chapterNo: 9,
    chapterName: "Connecting PHP and MySQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 2,
    type: "short",
    questionText: "What is the purpose of mysqli_close() function?",
    questionTextTamil: "mysqli_close() செயற்கூறின் பயன்பாடு என்ன?",
    answer: "mysqli_close() is used to close an existing open MySQL database connection to release system resources and server memory.",
    answerTamil: "mysqli_close() என்பது திறக்கப்பட்டுள்ள MySQL தரவுத்தள இணைப்பை மூடி, கணினி நினைவகத்தை விடுவிக்கப் பயன்படுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch9-2m-4",
    chapterNo: 9,
    chapterName: "Connecting PHP and MySQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 2,
    type: "short",
    questionText: "What is the use of mysqli_query() function?",
    questionTextTamil: "mysqli_query() செயற்கூறின் பயன்பாடு என்ன?",
    answer: "mysqli_query() sends and executes an SQL command or query (SELECT, INSERT, UPDATE, DELETE) on the connected MySQL database.",
    answerTamil: "mysqli_query() என்பது இணைக்கப்பட்டுள்ள MySQL தரவுத்தளத்தில் SQL வினவல்களை (SELECT, INSERT, UPDATE, DELETE) செயல்படுத்தப் பயன்படுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch9-2m-5",
    chapterNo: 9,
    chapterName: "Connecting PHP and MySQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 2,
    type: "short",
    questionText: "What is the function of mysqli_fetch_assoc()?",
    questionTextTamil: "mysqli_fetch_assoc() செயற்கூறின் செயல்பாடு என்ன?",
    answer: "mysqli_fetch_assoc() fetches a single result row from a query result set and returns it as an associative array indexed by column names.",
    answerTamil: "mysqli_fetch_assoc() என்பது வினவலின் முடிவுத் தொகுப்பிலிருந்து ஒரு வரிசையை நெடுவரிசைப் பெயர்களைத் திறவுகோலாகக் கொண்ட தொடர்பு இருத்தப்பட்ட அணியாகப் பெறுகிறது.",
    isBookBack: true
  }
];

const ch9_3m: Question[] = [
  {
    id: "ca12-ch9-3m-1",
    chapterNo: 9,
    chapterName: "Connecting PHP and MySQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 3,
    type: "brief",
    questionText: "What are the four essential parameters required to connect PHP with MySQL using mysqli_connect()?",
    questionTextTamil: "PHP-MySQL இணைப்பிற்கு mysqli_connect() செயற்கூறில் தேவைப்படும் நான்கு முக்கிய அளவுருக்கள் யாவை?",
    answer: "1. Server Name / Host (e.g., \"localhost\")\n2. User Name (e.g., \"root\")\n3. Password (e.g., \"\" blank for localhost)\n4. Database Name (e.g., \"school_db\").",
    answerTamil: "1. சேவையகப் பெயர் (Host - எ.கா: \"localhost\")\n2. பயனர் பெயர் (Username - எ.கா: \"root\")\n3. கடவுச்சொல் (Password)\n4. தரவுத்தளப் பெயர் (Database Name - எ.கா: \"school_db\").",
    isBookBack: true
  },
  {
    id: "ca12-ch9-3m-2",
    chapterNo: 9,
    chapterName: "Connecting PHP and MySQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 3,
    type: "brief",
    questionText: "Write a PHP script to establish a connection to MySQL database and check whether connection succeeded.",
    questionTextTamil: "MySQL தரவுத்தளத்துடன் இணைப்பை ஏற்படுத்தி, இணைப்பு வெற்றிகரமானதா என சரிபார்க்கும் PHP குறிமுறையை எழுதுக.",
    answer: "<?php\n$conn = mysqli_connect(\"localhost\", \"root\", \"\", \"testdb\");\nif (!$conn) {\n    die(\"Connection failed: \" . mysqli_connect_error());\n}\necho \"Connected successfully!\";\n?>",
    answerTamil: "<?php\n$conn = mysqli_connect(\"localhost\", \"root\", \"\", \"testdb\");\nif (!$conn) {\n    die(\"Connection failed: \" . mysqli_connect_error());\n}\necho \"Connected successfully!\";\n?>",
    isBookBack: true
  },
  {
    id: "ca12-ch9-3m-3",
    chapterNo: 9,
    chapterName: "Connecting PHP and MySQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 3,
    type: "brief",
    questionText: "Explain the purpose of mysqli_num_rows() with a brief example.",
    questionTextTamil: "mysqli_num_rows() செயற்கூறின் நோக்கத்தை சிறிய எடுத்துக்காட்டுடன் விளக்குக.",
    answer: "mysqli_num_rows() returns the count of rows present in a SELECT query result.\n\nExample:\n$result = mysqli_query($conn, \"SELECT * FROM students\");\n$count = mysqli_num_rows($result);\necho \"Total students: \" . $count;",
    answerTamil: "mysqli_num_rows() என்பது ஒரு SELECT வினவலின் முடிவில் எத்தனை வரிசைகள் உள்ளன என்ற எண்ணிக்கையைத் தருகிறது.\n\nஎடுத்துக்காட்டு:\n$result = mysqli_query($conn, \"SELECT * FROM students\");\n$count = mysqli_num_rows($result);\necho \"Total students: \" . $count;",
    isBookBack: true
  }
];

const ch9_5m: Question[] = [
  {
    id: "ca12-ch9-5m-1",
    chapterNo: 9,
    chapterName: "Connecting PHP and MySQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 5,
    type: "essay",
    questionText: "Explain the various MySQLi functions in PHP used for database manipulation in detail.",
    questionTextTamil: "PHP-ல் தரவுத்தள பயன்பாட்டிற்குப் பயன்படும் பல்வேறு MySQLi செயற்கூறுகளை விரிவாக விளக்குக.",
    answer: "Essential MySQLi Functions in PHP:\n\n1. mysqli_connect(host, user, pass, db): Opens a connection to a MySQL server.\n2. mysqli_connect_error(): Returns error message string if connection fails.\n3. mysqli_query(conn, sql): Executes SQL queries like SELECT, INSERT, UPDATE, DELETE.\n4. mysqli_fetch_assoc(result): Returns a row as an associative array.\n5. mysqli_num_rows(result): Returns the total number of rows returned by a query.\n6. mysqli_close(conn): Closes the database connection.",
    answerTamil: "முக்கிய MySQLi செயற்கூறுகள்:\n\n1. mysqli_connect(): MySQL சேவையகத்துடன் இணைப்பை ஏற்படுத்துகிறது.\n2. mysqli_connect_error(): இணைப்புத் தோல்விக்கான காரணத்தைத் தருகிறது.\n3. mysqli_query(): SQL வினவல்களை இயக்குகிறது.\n4. mysqli_fetch_assoc(): வினவல் வரிசையை தொடர்பு இருத்தப்பட்ட அணியாகப் பெறுகிறது.\n5. mysqli_num_rows(): வரிசைகளின் எண்ணிக்கையைக் கணக்கிடுகிறது.\n6. mysqli_close(): தரவுத்தள இணைப்பை மூடுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch9-5m-2",
    chapterNo: 9,
    chapterName: "Connecting PHP and MySQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 5,
    type: "essay",
    questionText: "Write a complete PHP script to connect to a MySQL database, fetch student records from a table, and display them in an HTML table.",
    questionTextTamil: "MySQL தரவுத்தளத்தை இணைத்து, மாணவர் அட்டவணையில் உள்ள பதிவுகளைப் பெற்று HTML அட்டவணையில் காட்டும் முழுமையான PHP நிரலை எழுதுக.",
    answer: "<?php\n$conn = mysqli_connect(\"localhost\", \"root\", \"\", \"school\");\nif (!$conn) { die(\"Connection failed: \" . mysqli_connect_error()); }\n\n$sql = \"SELECT id, name, marks FROM students\";\n$result = mysqli_query($conn, $sql);\n\necho \"<table border='1'><tr><th>ID</th><th>Name</th><th>Marks</th></tr>\";\nif (mysqli_num_rows($result) > 0) {\n    while($row = mysqli_fetch_assoc($result)) {\n        echo \"<tr><td>\".$row[\"id\"].\"</td><td>\".$row[\"name\"].\"</td><td>\".$row[\"marks\"].\"</td></tr>\";\n    }\n}\necho \"</table>\";\nmysqli_close($conn);\n?>",
    answerTamil: "<?php\n$conn = mysqli_connect(\"localhost\", \"root\", \"\", \"school\");\nif (!$conn) { die(\"Connection failed: \" . mysqli_connect_error()); }\n\n$sql = \"SELECT id, name, marks FROM students\";\n$result = mysqli_query($conn, $sql);\n\necho \"<table border='1'><tr><th>ID</th><th>Name</th><th>Marks</th></tr>\";\nif (mysqli_num_rows($result) > 0) {\n    while($row = mysqli_fetch_assoc($result)) {\n        echo \"<tr><td>\".$row[\"id\"].\"</td><td>\".$row[\"name\"].\"</td><td>\".$row[\"marks\"].\"</td></tr>\";\n    }\n}\necho \"</table>\";\nmysqli_close($conn);\n?>",
    isBookBack: true
  }
];

const ch9_all = [...ch9_1m, ...ch9_2m, ...ch9_3m, ...ch9_5m];
fs.writeFileSync('scripts_ca12/ch9.json', JSON.stringify(ch9_all, null, 2), 'utf8');
console.log("Chapter 9 written! Total:", ch9_all.length);

// ==========================================
// FIX CHAPTER 10: Computer Networks (10 1M, 3 2M, 2 3M, 1 5M = 16)
// ==========================================
const ch10_1m: Question[] = [
  {
    id: "ca12-ch10-1m-1",
    chapterNo: 10,
    chapterName: "Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "A collection of interconnected computers and autonomous computing devices is called a _________.",
    questionTextTamil: "ஒன்றோடொன்று இணைக்கப்பட்ட கணினிகள் மற்றும் சாதனங்களின் தொகுப்பு எவ்வாறு அழைக்கப்படுகிறது?",
    options: { A: "Computer Network", B: "Database", C: "Search Engine", D: "Operating System" },
    optionsTamil: { A: "கணினி வலையமைப்பு (Computer Network)", B: "தரவுத்தளம்", C: "தேடு பொறி", D: "இயக்க முறைமை" },
    correctOption: "A",
    answer: "A) Computer Network",
    answerTamil: "A) கணினி வலையமைப்பு (Computer Network)",
    isBookBack: true
  },
  {
    id: "ca12-ch10-1m-2",
    chapterNo: 10,
    chapterName: "Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "Which was the world's first packet-switching computer network founded by the US Department of Defense?",
    questionTextTamil: "அமெரிக்க பாதுகாப்புத் துறையால் உருவாக்கப்பட்ட உலகின் முதல் பாக்கெட்-சுவிட்ச்சிங் வலையமைப்பு எது?",
    options: { A: "ARPANET", B: "NSFNET", C: "INTERNET", D: "ETHERNET" },
    optionsTamil: { A: "ARPANET", B: "NSFNET", C: "இணையம்", D: "ஈதர்நெட்" },
    correctOption: "A",
    answer: "A) ARPANET",
    answerTamil: "A) ARPANET",
    isBookBack: true
  },
  {
    id: "ca12-ch10-1m-3",
    chapterNo: 10,
    chapterName: "Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "The physical or logical layout/arrangement of computers in a network is called _________.",
    questionTextTamil: "வலையமைப்பில் கணினிகள் இணைக்கப்பட்டுள்ள இயற்பியல் அல்லது தருக்க வடிவியல் அமைப்பு எது?",
    options: { A: "Topology", B: "Protocol", C: "Architecture", D: "Bandwidth" },
    optionsTamil: { A: "இடவியல் (Topology)", B: "நெறிமுறை", C: "கட்டமைப்பு", D: "அலைவரிசை" },
    correctOption: "A",
    answer: "A) Topology",
    answerTamil: "A) இடவியல் (Topology)",
    isBookBack: true
  },
  {
    id: "ca12-ch10-1m-4",
    chapterNo: 10,
    chapterName: "Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "Which topology connects all devices to a single central cable known as the backbone bus?",
    questionTextTamil: "அனைத்து சாதனங்களையும் ஒரே ஒரு முதன்மை வடத்தில் (Backbone) இணைக்கும் இடவியல் எது?",
    options: { A: "Bus Topology", B: "Star Topology", C: "Ring Topology", D: "Mesh Topology" },
    optionsTamil: { A: "பஸ் இடவியல் (Bus Topology)", B: "ஸ்டார் இடவியல்", C: "ரிங் இடவியல்", D: "மெஷ் இடவியல்" },
    correctOption: "A",
    answer: "A) Bus Topology",
    answerTamil: "A) பஸ் இடவியல் (Bus Topology)",
    isBookBack: true
  },
  {
    id: "ca12-ch10-1m-5",
    chapterNo: 10,
    chapterName: "Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "Which topology connects all network nodes to a single central device such as a Switch or Hub?",
    questionTextTamil: "அனைத்து கணினிகளையும் ஒரு மைய சாதனத்துடன் (Switch/Hub) இணைக்கும் இடவியல் எது?",
    options: { A: "Star Topology", B: "Bus Topology", C: "Ring Topology", D: "Tree Topology" },
    optionsTamil: { A: "ஸ்டார் இடவியல் (Star Topology)", B: "பஸ் இடவியல்", C: "ரிங் இடவியல்", D: "ட்ரீ இடவியல்" },
    correctOption: "A",
    answer: "A) Star Topology",
    answerTamil: "A) ஸ்டார் இடவியல் (Star Topology)",
    isBookBack: true
  },
  {
    id: "ca12-ch10-1m-6",
    chapterNo: 10,
    chapterName: "Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "Which network covers a small localized geographical area like a home, office room, or building?",
    questionTextTamil: "வீடு, பள்ளி அல்லது ஒரு அறை போன்ற சிறிய உள்ளூர் பரப்பளவை உள்ளடக்கிய வலையமைப்பு எது?",
    options: { A: "LAN", B: "MAN", C: "WAN", D: "PAN" },
    optionsTamil: { A: "LAN (Local Area Network)", B: "MAN", C: "WAN", D: "PAN" },
    correctOption: "A",
    answer: "A) LAN",
    answerTamil: "A) LAN (Local Area Network)",
    isBookBack: true
  },
  {
    id: "ca12-ch10-1m-7",
    chapterNo: 10,
    chapterName: "Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "Which network spans across an entire metropolitan city or town?",
    questionTextTamil: "ஒரு முழு மாநகரம் அல்லது நகரத்தை உள்ளடக்கிய வலையமைப்பு எது?",
    options: { A: "MAN", B: "LAN", C: "PAN", D: "WLAN" },
    optionsTamil: { A: "MAN (Metropolitan Area Network)", B: "LAN", C: "PAN", D: "WLAN" },
    correctOption: "A",
    answer: "A) MAN",
    answerTamil: "A) MAN (Metropolitan Area Network)",
    isBookBack: true
  },
  {
    id: "ca12-ch10-1m-8",
    chapterNo: 10,
    chapterName: "Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "The Internet is the ultimate worldwide example of a _________.",
    questionTextTamil: "இணையம் (Internet) என்பது உலகளாவிய எவ்வகை வலையமைப்பிற்கு சிறந்த உதாரணமாகும்?",
    options: { A: "WAN", B: "LAN", C: "CAN", D: "SAN" },
    optionsTamil: { A: "WAN (Wide Area Network)", B: "LAN", C: "CAN", D: "SAN" },
    correctOption: "A",
    answer: "A) WAN",
    answerTamil: "A) WAN (Wide Area Network)",
    isBookBack: true
  },
  {
    id: "ca12-ch10-1m-9",
    chapterNo: 10,
    chapterName: "Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "What is the primary benefit of computer networking?",
    questionTextTamil: "கணினி வலையமைப்பின் முதன்மையான பயன் என்ன?",
    options: { A: "Resource and hardware sharing", B: "Increasing computer weight", C: "Eliminating monitor screens", D: "Reducing processor speed" },
    optionsTamil: { A: "வளங்கள் மற்றும் வன்பொருள்களைப் பகிர்தல்", B: "கணினி எடையை அதிகரித்தல்", C: "திரைகளை நீக்குதல்", D: "வேகத்தைக் குறைத்தல்" },
    correctOption: "A",
    answer: "A) Resource and hardware sharing",
    answerTamil: "A) வளங்கள் மற்றும் வன்பொருள்களைப் பகிர்தல்",
    isBookBack: true
  },
  {
    id: "ca12-ch10-1m-10",
    chapterNo: 10,
    chapterName: "Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "Which topology connects each device to exactly two neighboring devices in a closed ring loop?",
    questionTextTamil: "ஒவ்வொரு சாதனத்தையும் இரு பக்கத்து சாதனங்களுடன் வட்ட வடிவில் இணைக்கும் இடவியல் எது?",
    options: { A: "Ring Topology", B: "Star Topology", C: "Bus Topology", D: "Mesh Topology" },
    optionsTamil: { A: "ரிங் இடவியல் (Ring Topology)", B: "ஸ்டார் இடவியல்", C: "பஸ் இடவியல்", D: "மெஷ் இடவியல்" },
    correctOption: "A",
    answer: "A) Ring Topology",
    answerTamil: "A) ரிங் இடவியல் (Ring Topology)",
    isBookBack: true
  }
];

const ch10_2m: Question[] = [
  {
    id: "ca12-ch10-2m-1",
    chapterNo: 10,
    chapterName: "Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "Define Computer Network.",
    questionTextTamil: "கணினி வலையமைப்பு - வரையறுக்கவும்.",
    answer: "A computer network is a system of interconnected independent computers and electronic devices configured to share hardware resources, software, and exchange data.",
    answerTamil: "கணினி வலையமைப்பு என்பது தரவுகள், மென்பொருள்கள் மற்றும் அச்சுப்பொறி போன்ற வன்பொருள் வளங்களைப் பகிர்ந்து கொள்ளும் வகையில் ஒன்றோடொன்று இணைக்கப்பட்ட கணினிகளின் அமைப்பாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch10-2m-2",
    chapterNo: 10,
    chapterName: "Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "What is ARPANET?",
    questionTextTamil: "ARPANET என்றால் என்ன?",
    answer: "ARPANET (Advanced Research Projects Agency Network) was created in 1969 by the US Department of Defense and was the earliest packet-switching network that laid the technical foundation for the modern Internet.",
    answerTamil: "ARPANET என்பது 1969-ல் அமெரிக்க பாதுகாப்புத் துறையால் உருவாக்கப்பட்ட உலகின் முதல் பாக்கெட்-சுவிட்சிங் வலையமைப்பாகும். இதுவே இன்றைய இணையத்திற்கு அடித்தளமிட்டது.",
    isBookBack: true
  },
  {
    id: "ca12-ch10-2m-3",
    chapterNo: 10,
    chapterName: "Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "What is Network Topology?",
    questionTextTamil: "வலையமைப்பு இடவியல் (Topology) என்றால் என்ன?",
    answer: "Network topology refers to the geometric physical or logical arrangement and layout in which nodes and connecting cables are organized in a network.",
    answerTamil: "வலையமைப்பு இடவியல் என்பது ஒரு கணினி வலையமைப்பில் சாதனங்கள் மற்றும் இணைப்புக் கம்பிகள் எவ்வாறு வடிவியல் ரீதியாக ஒழுங்கமைக்கப்பட்டுள்ளன என்பதைக் குறிக்கும் அமைப்பாகும்.",
    isBookBack: true
  }
];

const ch10_3m: Question[] = [
  {
    id: "ca12-ch10-3m-1",
    chapterNo: 10,
    chapterName: "Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 3,
    type: "brief",
    questionText: "List and briefly describe any three major advantages of computer networks.",
    questionTextTamil: "கணினி வலையமைப்பின் ஏதேனும் மூன்று முக்கிய நன்மைகளை விளக்குக.",
    answer: "1. Hardware Resource Sharing: Costly printers, scanners, and storage can be shared across multiple computers.\n2. Instant Communication: Rapid exchange of emails, messages, and video conferences.\n3. Centralized Data Management: Files stored centrally on servers ensure consistent backups and security.",
    answerTamil: "1. வன்பொருள் வளப் பகிர்வு: அச்சுப்பொறி, சேமிப்பகம் போன்ற சாதனங்களை பல கணினிகள் பகிரலாம்.\n2. உடனடித் தொடர்பு: மின்னஞ்சல் மற்றும் வீடியோ அழைப்புகள் மூலம் விரைவான தகவல் பரிமாற்றம்.\n3. மையப்படுத்தப்பட்ட தரவு மேலாண்மை: கோப்புகள் சேவையகத்தில் ஒரே இடத்தில் பாதுகாப்பாகப் பராமரிக்கப்படுதல்.",
    isBookBack: true
  },
  {
    id: "ca12-ch10-3m-2",
    chapterNo: 10,
    chapterName: "Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 3,
    type: "brief",
    questionText: "Differentiate LAN and WAN.",
    questionTextTamil: "LAN மற்றும் WAN ஆகியவற்றை வேறுபடுத்துக.",
    answer: "1. LAN (Local Area Network): Spans a small localized geographic area (single room/building); high data transmission speed; privately owned.\n2. WAN (Wide Area Network): Spans broad geographical areas across countries/continents; lower speed; public or consortium owned (e.g., Internet).",
    answerTamil: "1. LAN (உள்ளூர் பகுதி வலையமைப்பு): ஒரு அறை அல்லது கட்டடத்திற்குள் மட்டும் செயல்படும்; அதிவேகமானது; தனியாருக்கு சொந்தமானது.\n2. WAN (பரந்த பகுதி வலையமைப்பு): நாடுகள் அல்லது உலகம் முழுவதும் பரவியுள்ளது; வேகம் குறைவு (எ.கா: இணையம்).",
    isBookBack: true
  }
];

const ch10_5m: Question[] = [
  {
    id: "ca12-ch10-5m-1",
    chapterNo: 10,
    chapterName: "Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 5,
    type: "essay",
    questionText: "Explain the various types of Network Topologies (Bus, Star, Ring, Mesh, Tree, Hybrid) in detail with diagrams.",
    questionTextTamil: "பல்வேறு வகையான வலையமைப்பு இடவியல்களை (Bus, Star, Ring, Mesh, Tree, Hybrid) வரைபட விளக்கத்துடன் விரிவாக விளக்குக.",
    answer: "Types of Network Topologies:\n\n1. Bus Topology:\n- All nodes connect to a single common central cable (backbone) with terminators at both ends.\n- Cheap and simple, but failure of main cable breaks whole network.\n\n2. Star Topology:\n- All computers connect directly to a central hub/switch via individual dedicated lines.\n- Highly reliable; easy to troubleshoot; single cable fault does not affect others.\n\n3. Ring Topology:\n- Nodes connect in a continuous circular loop; tokens travel unidirectionally.\n- Predictable traffic, but one break halts entire ring.\n\n4. Mesh Topology:\n- Every device has a dedicated point-to-point link to every other device.\n- Maximum redundancy and security, but extremely high cabling cost.\n\n5. Tree & Hybrid Topologies:\n- Hierarchical tree combinations and mixtures of multiple topologies.",
    answerTamil: "வலையமைப்பு இடவியல்களின் வகைகள்:\n\n1. பஸ் இடவியல் (Bus Topology):\n- அனைத்து கணினிகளும் ஒரு முதன்மை தண்டு வடத்தில் இணைக்கப்பட்டிருக்கும். செலவு குறைவு.\n\n2. ஸ்டார் இடவியல் (Star Topology):\n- அனைத்து கணினிகளும் ஒரு மைய சுவிட்ச்/ஹப் உடன் தனித்தனி வடங்களால் இணைக்கப்பட்டிருக்கும். அதிக நம்பகத்தன்மை.\n\n3. ரிங் இடவியல் (Ring Topology):\n- வட்ட வடிவில் முனைகள் இணைக்கப்பட்டு டோக்கன் முறையில் தகவல்கள் செல்லும்.\n\n4. மெஷ் இடவியல் (Mesh Topology):\n- ஒவ்வொரு கணினியும் மற்ற அனைத்து கணினிகளுடனும் நேரடியாக இணைக்கப்பட்டிருக்கும். மிக அதிக பாதுகாப்பு.\n\n5. கலப்பு இடவியல் (Hybrid Topology):\n- இரண்டு அல்லது அதற்கு மேற்பட்ட இடவியல்களின் ஒருங்கிணைந்த அமைப்பாகும்.",
    isBookBack: true
  }
];

const ch10_all = [...ch10_1m, ...ch10_2m, ...ch10_3m, ...ch10_5m];
fs.writeFileSync('scripts_ca12/ch10.json', JSON.stringify(ch10_all, null, 2), 'utf8');
console.log("Chapter 10 written! Total:", ch10_all.length);

// ==========================================
// FIX CHAPTER 11: Network Examples and Protocols (10 1M, 5 2M, 4 3M, 2 5M = 21)
// ==========================================
const ch11_1m: Question[] = [
  {
    id: "ca12-ch11-1m-1",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு எடுத்துக்காட்டுகள் மற்றும் நெறிமுறைகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which mobile wireless generation introduced digital voice and SMS capabilities (GSM)?",
    questionTextTamil: "டிஜிட்டல் குரல் மற்றும் SMS வசதியை அறிமுகப்படுத்திய மொபைல் தலைமுறை எது?",
    options: { A: "1G", B: "2G", C: "3G", D: "4G" },
    optionsTamil: { A: "1G", B: "2G", C: "3G", D: "4G" },
    correctOption: "B",
    answer: "B) 2G",
    answerTamil: "B) 2G",
    isBookBack: true
  },
  {
    id: "ca12-ch11-1m-2",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு எடுத்துக்காட்டுகள் மற்றும் நெறிமுறைகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which mobile generation enabled high-speed mobile broadband and mobile TV streaming (LTE)?",
    questionTextTamil: "அதிவேக மொபைல் பிராட்பேண்ட் மற்றும் நேரடி வீடியோ ஸ்ட்ரீமிங்கை சாத்தியமாக்கிய தலைமுறை எது?",
    options: { A: "4G", B: "1G", C: "2G", D: "0G" },
    optionsTamil: { A: "4G (LTE)", B: "1G", C: "2G", D: "0G" },
    correctOption: "A",
    answer: "A) 4G",
    answerTamil: "A) 4G (LTE)",
    isBookBack: true
  },
  {
    id: "ca12-ch11-1m-3",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு எடுத்துக்காட்டுகள் மற்றும் நெறிமுறைகள்",
    marks: 1,
    type: "mcq",
    questionText: "What protocol is used to transfer web pages and multimedia on the World Wide Web?",
    questionTextTamil: "இணையத்தில் வலைப்பக்கங்கள் மற்றும் மல்டிமீடியாவை மாற்ற பயன்படும் நெறிமுறை எது?",
    options: { A: "HTTP", B: "FTP", C: "SMTP", D: "TELNET" },
    optionsTamil: { A: "HTTP", B: "FTP", C: "SMTP", D: "TELNET" },
    correctOption: "A",
    answer: "A) HTTP",
    answerTamil: "A) HTTP",
    isBookBack: true
  },
  {
    id: "ca12-ch11-1m-4",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு எடுத்துக்காட்டுகள் மற்றும் நெறிமுறைகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which protocol is used to upload and download files between a client and server?",
    questionTextTamil: "கிளையன்ட் மற்றும் சேவையகத்திற்கு இடையே கோப்புகளை பதிவேற்ற மற்றும் பதிவிறக்க பயன்படும் நெறிமுறை எது?",
    options: { A: "FTP", B: "HTTP", C: "DNS", D: "DHCP" },
    optionsTamil: { A: "FTP (File Transfer Protocol)", B: "HTTP", C: "DNS", D: "DHCP" },
    correctOption: "A",
    answer: "A) FTP",
    answerTamil: "A) FTP (File Transfer Protocol)",
    isBookBack: true
  },
  {
    id: "ca12-ch11-1m-5",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு எடுத்துக்காட்டுகள் மற்றும் நெறிமுறைகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which protocol is responsible for sending outgoing electronic mail messages?",
    questionTextTamil: "வெளிச்செல்லும் மின்னஞ்சல் செய்திகளை அனுப்ப பயன்படும் நெறிமுறை எது?",
    options: { A: "SMTP", B: "POP3", C: "IMAP", D: "SNMP" },
    optionsTamil: { A: "SMTP (Simple Mail Transfer Protocol)", B: "POP3", C: "IMAP", D: "SNMP" },
    correctOption: "A",
    answer: "A) SMTP",
    answerTamil: "A) SMTP (Simple Mail Transfer Protocol)",
    isBookBack: true
  },
  {
    id: "ca12-ch11-1m-6",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு எடுத்துக்காட்டுகள் மற்றும் நெறிமுறைகள்",
    marks: 1,
    type: "mcq",
    questionText: "What does TCP stand for in TCP/IP protocol suite?",
    questionTextTamil: "TCP/IP நெறிமுறையில் TCP என்பதன் விரிவாக்கம் என்ன?",
    options: { A: "Transmission Control Protocol", B: "Transfer Central Protocol", C: "Telecommunication Control Port", D: "Transit Carrier Path" },
    optionsTamil: { A: "Transmission Control Protocol", B: "Transfer Central Protocol", C: "Telecommunication Control Port", D: "Transit Carrier Path" },
    correctOption: "A",
    answer: "A) Transmission Control Protocol",
    answerTamil: "A) Transmission Control Protocol",
    isBookBack: true
  },
  {
    id: "ca12-ch11-1m-7",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு எடுத்துக்காட்டுகள் மற்றும் நெறிமுறைகள்",
    marks: 1,
    type: "mcq",
    questionText: "How many layers are defined in the OSI Reference Model?",
    questionTextTamil: "OSI மாதிரி கட்டமைப்பில் எத்தனை அடுக்குகள் உள்ளன?",
    options: { A: "7", B: "4", C: "5", D: "6" },
    optionsTamil: { A: "7", B: "4", C: "5", D: "6" },
    correctOption: "A",
    answer: "A) 7",
    answerTamil: "A) 7",
    isBookBack: true
  },
  {
    id: "ca12-ch11-1m-8",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு எடுத்துக்காட்டுகள் மற்றும் நெறிமுறைகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which layer in OSI model is responsible for end-to-end reliability and flow control?",
    questionTextTamil: "OSI மாதிரியில் முனையிலிருந்து முனை வரையிலான நம்பகமான தரவுப் பரிமாற்றத்திற்கு பொறுப்பான அடுக்கு எது?",
    options: { A: "Transport Layer", B: "Physical Layer", C: "Network Layer", D: "Session Layer" },
    optionsTamil: { A: "போக்குவரத்து அடுக்கு (Transport Layer)", B: "இயற்பியல் அடுக்கு", C: "பிணைய அடுக்கு", D: "அமர்வு அடுக்கு" },
    correctOption: "A",
    answer: "A) Transport Layer",
    answerTamil: "A) போக்குவரத்து அடுக்கு (Transport Layer)",
    isBookBack: true
  },
  {
    id: "ca12-ch11-1m-9",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு எடுத்துக்காட்டுகள் மற்றும் நெறிமுறைகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which layer is closest to the end user in the OSI Reference Model?",
    questionTextTamil: "OSI மாதிரியில் பயனருக்கு மிக அருகில் உள்ள அடுக்கு எது?",
    options: { A: "Application Layer", B: "Presentation Layer", C: "Physical Layer", D: "Data Link Layer" },
    optionsTamil: { A: "பயன்பாட்டு அடுக்கு (Application Layer)", B: "வழங்கல் அடுக்கு", C: "இயற்பியல் அடுக்கு", D: "தரவு இணைப்பு அடுக்கு" },
    correctOption: "A",
    answer: "A) Application Layer",
    answerTamil: "A) பயன்பாட்டு அடுக்கு (Application Layer)",
    isBookBack: true
  },
  {
    id: "ca12-ch11-1m-10",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு எடுத்துக்காட்டுகள் மற்றும் நெறிமுறைகள்",
    marks: 1,
    type: "mcq",
    questionText: "What does DNS stand for in computer networking?",
    questionTextTamil: "கணினி வலையமைப்பில் DNS என்பதன் விரிவாக்கம் என்ன?",
    options: { A: "Domain Name System", B: "Data Network Service", C: "Direct Node Standard", D: "Digital Network Server" },
    optionsTamil: { A: "Domain Name System", B: "Data Network Service", C: "Direct Node Standard", D: "Digital Network Server" },
    correctOption: "A",
    answer: "A) Domain Name System",
    answerTamil: "A) Domain Name System",
    isBookBack: true
  }
];

const ch11_2m: Question[] = [
  {
    id: "ca12-ch11-2m-1",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு எடுத்துக்காட்டுகள் மற்றும் நெறிமுறைகள்",
    marks: 2,
    type: "short",
    questionText: "What is a Network Protocol?",
    questionTextTamil: "பிணைய நெறிமுறை (Network Protocol) என்றால் என்ன?",
    answer: "A network protocol is a standardized set of formal rules and conventions that govern data communication, packet formatting, and error handling between networked computers.",
    answerTamil: "பிணைய நெறிமுறை என்பது இரு கணினிகளுக்கு இடையே பிழையின்றி தகவல் பரிமாற்றம் நடைபெற வழிவகுக்கும் விதிகள் மற்றும் மரபுகளின் தொகுப்பாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch11-2m-2",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு எடுத்துக்காட்டுகள் மற்றும் நெறிமுறைகள்",
    marks: 2,
    type: "short",
    questionText: "What is HTTP and HTTPS?",
    questionTextTamil: "HTTP மற்றும் HTTPS என்றால் என்ன?",
    answer: "HTTP (HyperText Transfer Protocol) transfers web pages in plaintext. HTTPS (HTTP Secure) encrypts web data using SSL/TLS for secure confidential communications.",
    answerTamil: "HTTP என்பது இணையத்தில் வலைப்பக்கங்களை மாற்ற உதவும் நெறிமுறை. HTTPS என்பது SSL மூலம் குறியாக்கம் செய்யப்பட்ட பாதுகாப்பான வலை நெறிமுறையாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch11-2m-3",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு எடுத்துக்காட்டுகள் மற்றும் நெறிமுறைகள்",
    marks: 2,
    type: "short",
    questionText: "What is FTP?",
    questionTextTamil: "FTP என்றால் என்ன?",
    answer: "FTP (File Transfer Protocol) is a client-server network protocol used for uploading and downloading binary and text files over TCP/IP networks.",
    answerTamil: "FTP (File Transfer Protocol) என்பது சேவையகத்திற்கும் பயனரின் கணினிக்கும் இடையே கோப்புகளைப் பதிவேற்ற மற்றும் பதிவிறக்க உதவும் நெறிமுறையாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch11-2m-4",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு எடுத்துக்காட்டுகள் மற்றும் நெறிமுறைகள்",
    marks: 2,
    type: "short",
    questionText: "What is SMTP?",
    questionTextTamil: "SMTP என்றால் என்ன?",
    answer: "SMTP (Simple Mail Transfer Protocol) is an Internet standard communication protocol used for sending and routing outgoing email messages between mail servers.",
    answerTamil: "SMTP என்பது கணினிகளிலிருந்து மின்னஞ்சல்களை அனுப்பவும் சேவையகங்களுக்கு இடையே கடத்தவும் பயன்படும் நெறிமுறையாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch11-2m-5",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு எடுத்துக்காட்டுகள் மற்றும் நெறிமுறைகள்",
    marks: 2,
    type: "short",
    questionText: "What is DNS (Domain Name System)?",
    questionTextTamil: "DNS (Domain Name System) என்றால் என்ன?",
    answer: "DNS is the internet's phonebook system that translates human-friendly domain names (e.g., www.google.com) into machine-readable numerical IP addresses (e.g., 142.250.190.46).",
    answerTamil: "DNS என்பது மனிதர்கள் எளிதில் நினைவில் கொள்ளக்கூடிய இணைய முகவரிகளை (Domain Name) எண்களாலான ஐபி (IP) முகவரிகளாக மாற்றும் அமைப்பாகும்.",
    isBookBack: true
  }
];

const ch11_3m: Question[] = [
  {
    id: "ca12-ch11-3m-1",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு எடுத்துக்காட்டுகள் மற்றும் நெறிமுறைகள்",
    marks: 3,
    type: "brief",
    questionText: "List the 7 layers of the OSI Reference Model in hierarchical order.",
    questionTextTamil: "OSI மாதிரி கட்டமைப்பின் 7 அடுக்குகளை வரிசையாகப் பட்டியலிடுக.",
    answer: "1. Physical Layer\n2. Data Link Layer\n3. Network Layer\n4. Transport Layer\n5. Session Layer\n6. Presentation Layer\n7. Application Layer.",
    answerTamil: "1. இயற்பியல் அடுக்கு (Physical Layer)\n2. தரவு இணைப்பு அடுக்கு (Data Link Layer)\n3. பிணைய அடுக்கு (Network Layer)\n4. போக்குவரத்து அடுக்கு (Transport Layer)\n5. அமர்வு அடுக்கு (Session Layer)\n6. வழங்கல் அடுக்கு (Presentation Layer)\n7. பயன்பாட்டு அடுக்கு (Application Layer).",
    isBookBack: true
  },
  {
    id: "ca12-ch11-3m-2",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு எடுத்துக்காட்டுகள் மற்றும் நெறிமுறைகள்",
    marks: 3,
    type: "brief",
    questionText: "Differentiate TCP and UDP protocols.",
    questionTextTamil: "TCP மற்றும் UDP நெறிமுறைகளை வேறுபடுத்துக.",
    answer: "1. TCP (Transmission Control Protocol): Connection-oriented; reliable delivery with acknowledgments and error retransmission; slower.\n2. UDP (User Datagram Protocol): Connectionless; fast streaming without acknowledgments or error checks (ideal for video streaming, DNS).",
    answerTamil: "1. TCP: இணைப்பு சார்ந்த நெறிமுறை; நம்பகமான தரவுப் பரிமாற்றம் மற்றும் ஒப்புகைச் செய்தி உண்டு; வேகம் குறைவு.\n2. UDP: இணைப்பற்ற நெறிமுறை; மிக விரைவானது; வீடியோ ஸ்ட்ரீமிங் மற்றும் ஆன்லைன் கேம்களுக்கு ஏற்றது.",
    isBookBack: true
  },
  {
    id: "ca12-ch11-3m-3",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு எடுத்துக்காட்டுகள் மற்றும் நெறிமுறைகள்",
    marks: 3,
    type: "brief",
    questionText: "Briefly explain the evolution of Mobile Networks from 1G to 4G/5G.",
    questionTextTamil: "1G முதல் 4G/5G வரையிலான மொபைல் தலைமுறைகளின் பரிணாம வளர்ச்சியை விளக்குக.",
    answer: "1. 1G: Analog voice calling only.\n2. 2G: Digital voice + SMS texting (GSM).\n3. 3G: Mobile internet, web browsing, video calls.\n4. 4G (LTE): High-speed broadband, HD streaming.\n5. 5G: Ultra-low latency, massive IoT, gigabit speeds.",
    answerTamil: "1. 1G: அனலாக் குரல் அழைப்புகள் மட்டுமே.\n2. 2G: டிஜிட்டல் குரல் அழைப்பு மற்றும் SMS.\n3. 3G: மொபைல் இணையம் மற்றும் வீடியோ அழைப்புகள்.\n4. 4G: அதிவேக பிராட்பேண்ட் மற்றும் HD வீடியோ.\n5. 5G: அதிவிரைவு இணையம் மற்றும் ஸ்மார்ட் சாதன இணைப்பு.",
    isBookBack: true
  },
  {
    id: "ca12-ch11-3m-4",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு எடுத்துக்காட்டுகள் மற்றும் நெறிமுறைகள்",
    marks: 3,
    type: "brief",
    questionText: "What is the difference between POP3 and IMAP email protocols?",
    questionTextTamil: "POP3 மற்றும் IMAP மின்னஞ்சல் நெறிமுறைகளின் வேறுபாடு என்ன?",
    answer: "1. POP3 (Post Office Protocol 3): Downloads emails to local client device and deletes from server by default.\n2. IMAP (Internet Message Access Protocol): Keeps emails synced directly on the server across multiple devices simultaneously.",
    answerTamil: "1. POP3: மின்னஞ்சல்களை பயனரின் கணினியில் பதிவிறக்கி சேவையகத்திலிருந்து நீக்கிவிடும்.\n2. IMAP: பல சாதனங்களில் மின்னஞ்சல்களை சேவையகத்துடன் நேரடியாக ஒத்திசைத்து வைத்திருக்கும்.",
    isBookBack: true
  }
];

const ch11_5m: Question[] = [
  {
    id: "ca12-ch11-5m-1",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு எடுத்துக்காட்டுகள் மற்றும் நெறிமுறைகள்",
    marks: 5,
    type: "essay",
    questionText: "Explain the functions of all 7 layers of the OSI Reference Model in detail.",
    questionTextTamil: "OSI மாதிரி கட்டமைப்பின் 7 அடுக்குகளின் செயல்பாடுகளை விரிவாக விளக்குக.",
    answer: "The 7 Layers of OSI Model:\n\n1. Physical Layer: Transmits raw bitstreams over physical media (cables, radio waves).\n2. Data Link Layer: Node-to-node framing, MAC addressing, error detection.\n3. Network Layer: Logical IP addressing and packet routing across networks.\n4. Transport Layer: End-to-end connection, segmentation, TCP flow control.\n5. Session Layer: Establishes, manages, and terminates application dialogues.\n6. Presentation Layer: Data syntax translation, encryption/decryption, and compression.\n7. Application Layer: User-facing network services (HTTP, FTP, SMTP, DNS).",
    answerTamil: "OSI மாதிரியின் 7 அடுக்குகள்:\n\n1. இயற்பியல் அடுக்கு: பிட்டுகளை இயற்பியல் வடம் வழியே அனுப்புதல்.\n2. தரவு இணைப்பு அடுக்கு: MAC முகவரி மற்றும் பிழை திருத்தம்.\n3. பிணைய அடுக்கு: IP முகவரி மற்றும் பாக்கெட் வழித்தடம் (Routing).\n4. போக்குவரத்து அடுக்கு: முனைய இணைப்பு மற்றும் நம்பகமான பரிமாற்றம் (TCP).\n5. அமர்வு அடுக்கு: பயன்பாடுகளுக்கு இடையேயான அமர்வை நிர்வகித்தல்.\n6. வழங்கல் அடுக்கு: தரவு குறியாக்கம் மற்றும் சுருக்கம்.\n7. பயன்பாட்டு அடுக்கு: பயனரின் பயன்பாடுகள் (HTTP, FTP, SMTP).",
    isBookBack: true
  },
  {
    id: "ca12-ch11-5m-2",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு எடுத்துக்காட்டுகள் மற்றும் நெறிமுறைகள்",
    marks: 5,
    type: "essay",
    questionText: "Explain the TCP/IP Protocol Suite Architecture and compare it with the OSI Reference Model.",
    questionTextTamil: "TCP/IP கட்டமைப்பு நெறிமுறைகளை விளக்கி, அதனை OSI மாதிரியுடன் ஒப்பிடுக.",
    answer: "TCP/IP 4-Layer Architecture:\n\n1. Network Access Layer (combines OSI Physical & Data Link): Handles hardware drivers and Ethernet frames.\n2. Internet Layer (OSI Network): Uses IP, ICMP, ARP for logical routing and packet addressing.\n3. Transport Layer (OSI Transport): Uses TCP (reliable connection) and UDP (fast datagrams).\n4. Application Layer (combines OSI Session, Presentation, Application): Protocols like HTTP, FTP, SMTP, DNS.\n\nComparison:\n- OSI is a conceptual theoretical reference model (7 layers).\n- TCP/IP is the practical operational standard powering the real Internet (4 layers).",
    answerTamil: "TCP/IP கட்டமைப்பு (4 அடுக்குகள்):\n\n1. பிணைய அணுகல் அடுக்கு: இயற்பியல் வன்பொருள் மற்றும் ஈதர்நெட்.\n2. இணைய அடுக்கு (IP): பாக்கெட்டுகளை முகவரியிட்டு வழிப்படுத்துதல்.\n3. போக்குவரத்து அடுக்கு (TCP/UDP): தரவு பரிமாற்றத்தை கட்டுப்படுத்துதல்.\n4. பயன்பாட்டு அடுக்கு (HTTP, FTP): பயனருக்கான சேவைகள்.\n\nஒப்பீடு: OSI என்பது 7 அடுக்குகளைக் கொண்ட கோட்பாட்டு மாதிரி; TCP/IP என்பது இணையத்தில் உண்மையில் செயல்படும் 4 அடுக்கு நடைமுறை மாதிரியாகும்.",
    isBookBack: true
  }
];

const ch11_all = [...ch11_1m, ...ch11_2m, ...ch11_3m, ...ch11_5m];
fs.writeFileSync('scripts_ca12/ch11.json', JSON.stringify(ch11_all, null, 2), 'utf8');
console.log("Chapter 11 written! Total:", ch11_all.length);

// ==========================================
// FIX CHAPTER 14: Open Source Concepts (10 1M, 5 2M, 2 3M, 1 5M = 18)
// ==========================================
const ch14_1m: Question[] = [
  {
    id: "ca12-ch14-1m-1",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 1,
    type: "mcq",
    questionText: "Software whose source code is freely available to inspect, modify, and redistribute is called _________.",
    questionTextTamil: "மூலக் குறிமுறை அனைவருக்கும் இலவசமாகக் கிடைத்து மாற்றியமைக்க அனுமதிக்கும் மென்பொருள் எது?",
    options: { A: "Open Source Software", B: "Proprietary Software", C: "Shareware", D: "Trialware" },
    optionsTamil: { A: "திறந்த மூல மென்பொருள் (Open Source)", B: "உரிம மென்பொருள்", C: "பகிர்வு மென்பொருள்", D: "சோதனை மென்பொருள்" },
    correctOption: "A",
    answer: "A) Open Source Software",
    answerTamil: "A) திறந்த மூல மென்பொருள் (Open Source)",
    isBookBack: true
  },
  {
    id: "ca12-ch14-1m-2",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 1,
    type: "mcq",
    questionText: "Who founded the Free Software Foundation (FSF) and the GNU project?",
    questionTextTamil: "இலவச மென்பொருள் அறக்கட்டளை (FSF) மற்றும் GNU திட்டத்தை நிறுவியவர் யார்?",
    options: { A: "Richard Stallman", B: "Linus Torvalds", C: "Bill Gates", D: "Steve Jobs" },
    optionsTamil: { A: "ரிச்சர்ட் ஸ்டால்மேன் (Richard Stallman)", B: "லினஸ் டோர்வால்ட்ஸ்", C: "பில் கேட்ஸ்", D: "ஸ்டீவ் ஜாப்ஸ்" },
    correctOption: "A",
    answer: "A) Richard Stallman",
    answerTamil: "A) ரிச்சர்ட் ஸ்டால்மேன் (Richard Stallman)",
    isBookBack: true
  },
  {
    id: "ca12-ch14-1m-3",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 1,
    type: "mcq",
    questionText: "Who created the open-source Linux operating system kernel in 1991?",
    questionTextTamil: "1991-ல் லினக்ஸ் இயக்க முறைமை கர்னலை உருவாக்கியவர் யார்?",
    options: { A: "Linus Torvalds", B: "Richard Stallman", C: "Ken Thompson", D: "Dennis Ritchie" },
    optionsTamil: { A: "லினஸ் டோர்வால்ட்ஸ் (Linus Torvalds)", B: "ரிச்சர்ட் ஸ்டால்மேன்", C: "கென் தாம்சன்", D: "டென்னிஸ் ரிட்சி" },
    correctOption: "A",
    answer: "A) Linus Torvalds",
    answerTamil: "A) லினஸ் டோர்வால்ட்ஸ் (Linus Torvalds)",
    isBookBack: true
  },
  {
    id: "ca12-ch14-1m-4",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 1,
    type: "mcq",
    questionText: "Which organization maintains the official Open Source Definition and certified licenses?",
    questionTextTamil: "திறந்த மூல வரையறை மற்றும் உரிமங்களை சான்றளிக்கும் அதிகாரப்பூர்வ அமைப்பு எது?",
    options: { A: "OSI (Open Source Initiative)", B: "W3C", C: "IEEE", D: "ISO" },
    optionsTamil: { A: "OSI (Open Source Initiative)", B: "W3C", C: "IEEE", D: "ISO" },
    correctOption: "A",
    answer: "A) OSI (Open Source Initiative)",
    answerTamil: "A) OSI (Open Source Initiative)",
    isBookBack: true
  },
  {
    id: "ca12-ch14-1m-5",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 1,
    type: "mcq",
    questionText: "Which of the following is a popular open-source operating system?",
    questionTextTamil: "பின்வருவனவற்றில் பிரபலமான திறந்த மூல இயக்க முறைமை எது?",
    options: { A: "Ubuntu Linux", B: "Microsoft Windows", C: "macOS", D: "iOS" },
    optionsTamil: { A: "உபுண்டு லினக்ஸ் (Ubuntu Linux)", B: "மைக்ரோசாப்ட் விண்டோஸ்", C: "macOS", D: "iOS" },
    correctOption: "A",
    answer: "A) Ubuntu Linux",
    answerTamil: "A) உபுண்டு லினக்ஸ் (Ubuntu Linux)",
    isBookBack: true
  },
  {
    id: "ca12-ch14-1m-6",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 1,
    type: "mcq",
    questionText: "What does the GNU acronym stand for in free software?",
    questionTextTamil: "GNU என்பதன் விரிவாக்கம் என்ன?",
    options: { A: "GNU's Not Unix", B: "General Network Utility", C: "Generic Node Unit", D: "Global Network Unix" },
    optionsTamil: { A: "GNU's Not Unix", B: "General Network Utility", C: "Generic Node Unit", D: "Global Network Unix" },
    correctOption: "A",
    answer: "A) GNU's Not Unix",
    answerTamil: "A) GNU's Not Unix",
    isBookBack: true
  },
  {
    id: "ca12-ch14-1m-7",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 1,
    type: "mcq",
    questionText: "Which of the following is an open-source office productivity suite?",
    questionTextTamil: "பின்வருவனவற்றில் திறந்த மூல அலுவலக மென்பொருள் தொகுப்பு எது?",
    options: { A: "LibreOffice", B: "MS Office", C: "Apple iWork", D: "Adobe Acrobat" },
    optionsTamil: { A: "லிப்ரே ஆபீஸ் (LibreOffice)", B: "எம்.எஸ். ஆபிஸ்", C: "ஆப்பிள் iWork", D: "அடோப் அக்ரோபேட்" },
    correctOption: "A",
    answer: "A) LibreOffice",
    answerTamil: "A) லிப்ரே ஆபீஸ் (LibreOffice)",
    isBookBack: true
  },
  {
    id: "ca12-ch14-1m-8",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 1,
    type: "mcq",
    questionText: "Which popular open-source license uses 'copyleft' to require derivative works to remain open?",
    questionTextTamil: "வழித்தோன்றல் மென்பொருள்களும் இலவசமாக இருப்பதை கட்டாயமாக்கும் பிரபலமான காப்பிலெஃப்ட் உரிமம் எது?",
    options: { A: "GNU GPL", B: "Proprietary EULA", C: "Commercial License", D: "Copyright" },
    optionsTamil: { A: "GNU GPL (General Public License)", B: "EULA", C: "வணிக உரிமம்", D: "பதிப்புரிமை" },
    correctOption: "A",
    answer: "A) GNU GPL",
    answerTamil: "A) GNU GPL (General Public License)",
    isBookBack: true
  },
  {
    id: "ca12-ch14-1m-9",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 1,
    type: "mcq",
    questionText: "Which of the following is an open-source relational database management system?",
    questionTextTamil: "பின்வருவனவற்றில் திறந்த மூல தரவுத்தள மேலாண்மை அமைப்பு எது?",
    options: { A: "MySQL", B: "Oracle DB", C: "MS SQL Server", D: "MS Access" },
    optionsTamil: { A: "MySQL", B: "ஆரக்கிள்", C: "MS SQL Server", D: "MS Access" },
    correctOption: "A",
    answer: "A) MySQL",
    answerTamil: "A) MySQL",
    isBookBack: true
  },
  {
    id: "ca12-ch14-1m-10",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 1,
    type: "mcq",
    questionText: "How many core freedoms are defined by the Free Software Foundation (Freedoms 0 to 3)?",
    questionTextTamil: "இலவச மென்பொருள் அறக்கட்டளையால் எத்தனை அடிப்படை சுதந்திரங்கள் வரையறுக்கப்பட்டுள்ளன?",
    options: { A: "4", B: "2", C: "3", D: "5" },
    optionsTamil: { A: "4 (சுதந்திரங்கள் 0 முதல் 3 வரை)", B: "2", C: "3", D: "5" },
    correctOption: "A",
    answer: "A) 4",
    answerTamil: "A) 4 (சுதந்திரங்கள் 0 முதல் 3 வரை)",
    isBookBack: true
  }
];

const ch14_2m: Question[] = [
  {
    id: "ca12-ch14-2m-1",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 2,
    type: "short",
    questionText: "What is Open Source Software (OSS)?",
    questionTextTamil: "திறந்த மூல மென்பொருள் (Open Source Software) என்றால் என்ன?",
    answer: "Open Source Software is software distributed with its original source code under a license that allows anyone to inspect, modify, enhance, and freely distribute the code.",
    answerTamil: "திறந்த மூல மென்பொருள் என்பது அதன் மூலக் குறிமுறையை எவரும் பார்க்கவும், திருத்தவும், மேம்படுத்தவும் மற்றும் இலவசமாக விநியோகிக்கவும் அனுமதிக்கும் மென்பொருளாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch14-2m-2",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 2,
    type: "short",
    questionText: "What is Proprietary / Commercial Software?",
    questionTextTamil: "உரிம / வணிக மென்பொருள் (Proprietary Software) என்றால் என்ன?",
    answer: "Proprietary software is closed-source software owned exclusively by an individual or corporation whose source code is kept secret and use requires purchase of a restrictive license (e.g., Windows, Photoshop).",
    answerTamil: "உரிம மென்பொருள் என்பது மூலக் குறிமுறை மறைக்கப்பட்டு, கட்டணம் செலுத்தி உரிமம் பெற்று மட்டுமே பயன்படுத்த அனுமதிக்கப்படும் தனியாருக்குச் சொந்தமான மென்பொருளாகும் (எ.கா: விண்டோஸ்).",
    isBookBack: true
  },
  {
    id: "ca12-ch14-2m-3",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 2,
    type: "short",
    questionText: "Name any four popular Open Source software applications.",
    questionTextTamil: "ஏதேனும் நான்கு பிரபலமான திறந்த மூல மென்பொருள்களின் பெயர்களை எழுதுக.",
    answer: "1. Linux OS\n2. Apache Web Server\n3. MySQL Database\n4. LibreOffice / Firefox Browser.",
    answerTamil: "1. லினக்ஸ் இயக்க முறைமை\n2. அப்பாச்சி வலை சேவையகம்\n3. MySQL தரவுத்தளம்\n4. லிப்ரே ஆபீஸ் / ஃபயர்பாக்ஸ் உலாவி.",
    isBookBack: true
  },
  {
    id: "ca12-ch14-2m-4",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 2,
    type: "short",
    questionText: "What is FSF (Free Software Foundation)?",
    questionTextTamil: "FSF (Free Software Foundation) என்றால் என்ன?",
    answer: "The Free Software Foundation (FSF) is a non-profit organization founded in 1985 by Richard Stallman to promote the universal freedom to study, modify, and redistribute computer software.",
    answerTamil: "FSF என்பது மென்பொருள்களைப் படிக்க, மாற்றியமைக்க மற்றும் இலவசமாக விநியோகிக்கும் சுதந்திரத்தை ஊக்குவிக்க 1985-ல் ரிச்சர்ட் ஸ்டால்மேனால் தொடங்கப்பட்ட தொண்டு அமைப்பாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch14-2m-5",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 2,
    type: "short",
    questionText: "What is the four essential freedoms of Free Software?",
    questionTextTamil: "இலவச மென்பொருளின் நான்கு அடிப்படை சுதந்திரங்கள் யாவை?",
    answer: "Freedom 0: Run program for any purpose.\nFreedom 1: Study how program works and modify it.\nFreedom 2: Redistribute copies.\nFreedom 3: Distribute modified copies to others.",
    answerTamil: "சுதந்திரம் 0: எந்நோக்கத்திற்காகவும் இயக்கலாம்.\nசுதந்திரம் 1: குறிமுறையை ஆராய்ந்து திருத்தலாம்.\nசுதந்திரம் 2: நகல்களை பிறருக்கு விநியோகிக்கலாம்.\nசுதந்திரம் 3: திருத்தப்பட்ட நகல்களை வெளியிடலாம்.",
    isBookBack: true
  }
];

const ch14_3m: Question[] = [
  {
    id: "ca12-ch14-3m-1",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 3,
    type: "brief",
    questionText: "Differentiate Open Source Software and Proprietary Software.",
    questionTextTamil: "திறந்த மூல மென்பொருள் மற்றும் உரிம மென்பொருளை வேறுபடுத்துக.",
    answer: "1. Open Source Software: Source code is publicly accessible; free to modify and share; driven by global community.\n2. Proprietary Software: Source code is private/hidden; illegal to modify; high purchasing/license cost; controlled by one company.",
    answerTamil: "1. திறந்த மூல மென்பொருள்: மூலக் குறிமுறை வெளிப்படையானது; இலவசமாக திருத்தலாம்; சமூகப் பங்களிப்பு உண்டு.\n2. உரிம மென்பொருள்: மூலக் குறிமுறை மறைக்கப்பட்டது; மாற்ற இயலாது; அதிக உரிமக் கட்டணம் கொண்டது.",
    isBookBack: true
  },
  {
    id: "ca12-ch14-3m-2",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 3,
    type: "brief",
    questionText: "What are the major advantages of using Open Source Software in education and governance?",
    questionTextTamil: "கல்வி மற்றும் அரசு நிர்வாகத்தில் திறந்த மூல மென்பொருளைப் பயன்படுத்துவதன் நன்மைகள் யாவை?",
    answer: "1. Huge cost savings by avoiding recurring software license fees.\n2. Enhanced transparency, security, and digital sovereignty.\n3. Enables students to learn real programming internals from source code.",
    answerTamil: "1. விலையுயர்ந்த உரிமக் கட்டணங்கள் மிச்சமாகின்றன.\n2. அதிக வெளிப்படைத்தன்மை மற்றும் பாதுகாப்பு.\n3. மாணவர்கள் உண்மையான மூலக் குறிமுறையைப் பார்த்து நிரலாக்கம் கற்க முடிகிறது.",
    isBookBack: true
  }
];

const ch14_5m: Question[] = [
  {
    id: "ca12-ch14-5m-1",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 5,
    type: "essay",
    questionText: "Explain the philosophy, benefits, licensing models (GPL, Apache, MIT), and key projects of Open Source Software.",
    questionTextTamil: "திறந்த மூல மென்பொருளின் தத்துவம், நன்மைகள், உரிம மாதிரிகள் (GPL, Apache, MIT) மற்றும் முக்கிய திட்டங்களை விரிவாக விளக்குக.",
    answer: "Open Source Software Philosophy & Ecosystem:\n\n1. Philosophy & 4 Freedoms (FSF):\n- Freedom 0 (Run program), Freedom 1 (Study/adapt), Freedom 2 (Redistribute), Freedom 3 (Improve/publish).\n\n2. Open Source Licenses:\n- GNU GPL (General Public License): Strong copyleft requiring derivatives to remain open source.\n- MIT License: Permissive license allowing commercial reuse.\n- Apache License: Permissive with explicit patent protection grants.\n\n3. Benefits:\n- Zero licensing fees and vendor lock-in avoidance.\n- High security vetted by global developer audit communities.\n- Complete customization flexibility.\n\n4. Major Pillars of Open Source:\n- Linux Operating System Kernel\n- Apache Web Server\n- MySQL / PostgreSQL Databases\n- PHP / Python Programming Languages\n- LibreOffice Office Productivity.",
    answerTamil: "திறந்த மூல மென்பொருள் தத்துவம் மற்றும் சூழல்:\n\n1. தத்துவம் (FSF-ன் 4 சுதந்திரங்கள்): நிரலை இயக்க, கற்க, நகலெடுக்க, திருத்த அனைவருக்கும் சுதந்திரம்.\n\n2. உரிம மாதிரிகள்:\n- GNU GPL: மாற்றியமைக்கப்பட்ட மென்பொருள்களும் இலவசமாக இருப்பதை கட்டாயமாக்குகிறது.\n- MIT & Apache: வணிக பயன்பாட்டிற்கும் தாராளமாக அனுமதிக்கும் உரிமங்கள்.\n\n3. நன்மைகள்: பூஜ்ஜிய உரிமக் கட்டணம், அதிக பாதுகாப்பு, தனிப்பயனாக்க வசதி.\n\n4. முக்கிய திட்டங்கள்: லினக்ஸ், அப்பாச்சி சேவையகம், MySQL தரவுத்தளம், பைதான், PHP மற்றும் லிப்ரே ஆபீஸ்.",
    isBookBack: true
  }
];

const ch14_all = [...ch14_1m, ...ch14_2m, ...ch14_3m, ...ch14_5m];
fs.writeFileSync('scripts_ca12/ch14.json', JSON.stringify(ch14_all, null, 2), 'utf8');
console.log("Chapter 14 written! Total:", ch14_all.length);
