import fs from 'fs';
import { Question } from '../src/types';

// ==========================================
// CHAPTER 8: Forms and Files (20 questions: 10 1M, 5 2M, 3 3M, 2 5M)
// ==========================================
const ch8_1m: Question[] = [
  {
    id: "ca12-ch8-1m-1",
    chapterNo: 8,
    chapterName: "Forms and Files",
    chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 1,
    type: "mcq",
    questionText: "When you use the $_GET variable to collect data, the data is visible to..",
    questionTextTamil: "$_GET மாறியைப் பயன்படுத்தி தரவைச் சேகரிக்கும் போது, தரவு யாருக்குத் தெரியும்?",
    options: {
      A: "none",
      B: "only you",
      C: "everyone",
      D: "selected few"
    },
    optionsTamil: {
      A: "யாருக்கும் இல்லை",
      B: "உங்களுக்கு மட்டும்",
      C: "அனைவருக்கும் (URL-ல் தெரியும்)",
      D: "தேர்ந்தெடுக்கப்பட்ட சிலருக்கு"
    },
    correctOption: "C",
    answer: "C) everyone",
    answerTamil: "C) அனைவருக்கும் (URL-ல் தெரியும்)",
    isBookBack: true
  },
  {
    id: "ca12-ch8-1m-2",
    chapterNo: 8,
    chapterName: "Forms and Files",
    chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which method is suitable for sending sensitive information like passwords?",
    questionTextTamil: "கடவுச்சொல் போன்ற முக்கியமான தகவல்களை அனுப்ப ஏற்ற முறை எது?",
    options: {
      A: "GET",
      B: "POST",
      C: "REQUEST",
      D: "FILE"
    },
    optionsTamil: {
      A: "GET",
      B: "POST",
      C: "REQUEST",
      D: "FILE"
    },
    correctOption: "B",
    answer: "B) POST",
    answerTamil: "B) POST",
    isBookBack: true
  },
  {
    id: "ca12-ch8-1m-3",
    chapterNo: 8,
    chapterName: "Forms and Files",
    chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which function in PHP is used to open a file?",
    questionTextTamil: "PHP-ல் ஒரு கோப்பைத் திறக்கப் பயன்படும் செயற்கூறு எது?",
    options: {
      A: "open()",
      B: "file_open()",
      C: "fopen()",
      D: "readfile()"
    },
    optionsTamil: {
      A: "open()",
      B: "file_open()",
      C: "fopen()",
      D: "readfile()"
    },
    correctOption: "C",
    answer: "C) fopen()",
    answerTamil: "C) fopen()",
    isBookBack: true
  },
  {
    id: "ca12-ch8-1m-4",
    chapterNo: 8,
    chapterName: "Forms and Files",
    chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which function in PHP is used to close an open file?",
    questionTextTamil: "PHP-ல் திறக்கப்பட்ட கோப்பை மூடப் பயன்படும் செயற்கூறு எது?",
    options: {
      A: "close()",
      B: "fclose()",
      C: "file_close()",
      D: "endfile()"
    },
    optionsTamil: {
      A: "close()",
      B: "fclose()",
      C: "file_close()",
      D: "endfile()"
    },
    correctOption: "B",
    answer: "B) fclose()",
    answerTamil: "B) fclose()",
    isBookBack: true
  },
  {
    id: "ca12-ch8-1m-5",
    chapterNo: 8,
    chapterName: "Forms and Files",
    chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which function reads a single line from an open file in PHP?",
    questionTextTamil: "திறந்த கோப்பிலிருந்து ஒரு வரியை மட்டும் படிக்க பயன்படும் செயற்கூறு எது?",
    options: {
      A: "fgetc()",
      B: "fgets()",
      C: "fread()",
      D: "readfile()"
    },
    optionsTamil: {
      A: "fgetc()",
      B: "fgets()",
      C: "fread()",
      D: "readfile()"
    },
    correctOption: "B",
    answer: "B) fgets()",
    answerTamil: "B) fgets()",
    isBookBack: true
  },
  {
    id: "ca12-ch8-1m-6",
    chapterNo: 8,
    chapterName: "Forms and Files",
    chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which function reads a single character from a file in PHP?",
    questionTextTamil: "கோப்பிலிருந்து ஒரு எழுத்தை மட்டும் படிக்க பயன்படும் செயற்கூறு எது?",
    options: {
      A: "fgetc()",
      B: "fgets()",
      C: "fread()",
      D: "fchar()"
    },
    optionsTamil: {
      A: "fgetc()",
      B: "fgets()",
      C: "fread()",
      D: "fchar()"
    },
    correctOption: "A",
    answer: "A) fgetc()",
    answerTamil: "A) fgetc()",
    isBookBack: true
  },
  {
    id: "ca12-ch8-1m-7",
    chapterNo: 8,
    chapterName: "Forms and Files",
    chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which mode is used to open a file for write only and truncates file to zero length?",
    questionTextTamil: "கோப்பை எழுத மட்டும் திறந்து, அதன் பழைய உள்ளடக்கத்தை அழிக்கப் பயன்படும் முறைமை எது?",
    options: {
      A: "r",
      B: "w",
      C: "a",
      D: "x"
    },
    optionsTamil: {
      A: "r",
      B: "w",
      C: "a",
      D: "x"
    },
    correctOption: "B",
    answer: "B) w",
    answerTamil: "B) w",
    isBookBack: true
  },
  {
    id: "ca12-ch8-1m-8",
    chapterNo: 8,
    chapterName: "Forms and Files",
    chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which mode opens a file for appending data at the end of file?",
    questionTextTamil: "கோப்பின் இறுதியில் புதிய தரவைச் சேர்க்க (append) பயன்படும் முறைமை எது?",
    options: {
      A: "w",
      B: "r",
      C: "a",
      D: "r+"
    },
    optionsTamil: {
      A: "w",
      B: "r",
      C: "a",
      D: "r+"
    },
    correctOption: "C",
    answer: "C) a",
    answerTamil: "C) a",
    isBookBack: true
  },
  {
    id: "ca12-ch8-1m-9",
    chapterNo: 8,
    chapterName: "Forms and Files",
    chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which global superglobal array contains submitted form values from both GET and POST?",
    questionTextTamil: "GET மற்றும் POST இரண்டிலிருந்தும் பெறப்படும் படிவ மதிப்புகளைக் கொண்ட சூப்பர் குளோபல் அணி எது?",
    options: {
      A: "$_SERVER",
      B: "$_REQUEST",
      C: "$_ENV",
      D: "$_SESSION"
    },
    optionsTamil: {
      A: "$_SERVER",
      B: "$_REQUEST",
      C: "$_ENV",
      D: "$_SESSION"
    },
    correctOption: "B",
    answer: "B) $_REQUEST",
    answerTamil: "B) $_REQUEST",
    isBookBack: true
  },
  {
    id: "ca12-ch8-1m-10",
    chapterNo: 8,
    chapterName: "Forms and Files",
    chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which function is used to write data to an open file in PHP?",
    questionTextTamil: "PHP-ல் திறக்கப்பட்ட கோப்பில் தரவை எழுத பயன்படும் செயற்கூறு எது?",
    options: {
      A: "file_write()",
      B: "fwrite()",
      C: "write()",
      D: "putfile()"
    },
    optionsTamil: {
      A: "file_write()",
      B: "fwrite()",
      C: "write()",
      D: "putfile()"
    },
    correctOption: "B",
    answer: "B) fwrite()",
    answerTamil: "B) fwrite()",
    isBookBack: true
  }
];

const ch8_2m: Question[] = [
  {
    id: "ca12-ch8-2m-1",
    chapterNo: 8,
    chapterName: "Forms and Files",
    chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 2,
    type: "short",
    questionText: "What are HTML Forms in PHP web development?",
    questionTextTamil: "HTML படிவங்கள் (Forms) என்றால் என்ன?",
    answer: "HTML Forms collect user inputs (text fields, radio buttons, checkboxes, dropdowns) on the client browser and send them to server-side PHP scripts for processing.",
    answerTamil: "HTML படிவங்கள் என்பது இணையப் பயனரின் உள்ளீடுகளைப் பெற்று (உரைப் பெட்டி, தேர்வுப் பெட்டி போன்றவை) சேவையகத்தில் உள்ள PHP ஸ்கிரிப்டிற்கு செயலாக்க அனுப்பும் ஊடகமாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch8-2m-2",
    chapterNo: 8,
    chapterName: "Forms and Files",
    chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 2,
    type: "short",
    questionText: "What are the two common HTTP methods for submitting form data?",
    questionTextTamil: "படிவத் தரவை அனுப்பும் இரண்டு முக்கிய HTTP முறைகள் யாவை?",
    answer: "The two main HTTP form submission methods are:\n1. GET method\n2. POST method.",
    answerTamil: "படிவத் தரவை அனுப்பும் இரு முக்கிய முறைகள்:\n1. GET முறை\n2. POST முறை.",
    isBookBack: true
  },
  {
    id: "ca12-ch8-2m-3",
    chapterNo: 8,
    chapterName: "Forms and Files",
    chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 2,
    type: "short",
    questionText: "What is fopen() function in PHP?",
    questionTextTamil: "PHP-ல் fopen() செயற்கூறு என்றால் என்ன?",
    answer: "The fopen() function opens a local file or external URL resource for reading, writing, or appending.\nSyntax: fopen(\"filename.txt\", \"mode\");",
    answerTamil: "fopen() செயற்கூறானது ஒரு குறிப்பிட்ட கோப்பை படிக்கவோ, எழுதவோ அல்லது சேர்க்கவோ திறக்கப் பயன்படுகிறது.\nதொடரியல்: fopen(\"filename.txt\", \"mode\");",
    isBookBack: true
  },
  {
    id: "ca12-ch8-2m-4",
    chapterNo: 8,
    chapterName: "Forms and Files",
    chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 2,
    type: "short",
    questionText: "What is fclose() function in PHP?",
    questionTextTamil: "PHP-ல் fclose() செயற்கூறு என்றால் என்ன?",
    answer: "The fclose() function closes an open file pointer previously returned by fopen(), releasing system memory resources.",
    answerTamil: "fclose() செயற்கூறானது fopen() மூலம் திறக்கப்பட்ட கோப்பை பாதுகாப்பாக மூடி நினைவக வளங்களை விடுவிக்கப் பயன்படுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch8-2m-5",
    chapterNo: 8,
    chapterName: "Forms and Files",
    chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 2,
    type: "short",
    questionText: "What is the purpose of $_FILES array in PHP?",
    questionTextTamil: "PHP-ல் $_FILES அணியின் நோக்கம் என்ன?",
    answer: "$_FILES is a two-dimensional superglobal array holding all metadata of uploaded files (name, type, tmp_name, error, size).",
    answerTamil: "$_FILES என்பது சேவையகத்திற்கு பதிவேற்றம் செய்யப்படும் கோப்புகளின் தகவல்களை (பெயர், வகை, தற்காலிகப் பெயர், அளவு) சேமிக்கும் இரு பரிமாண சூப்பர் குளோபல் அணியாகும்.",
    isBookBack: true
  }
];

const ch8_3m: Question[] = [
  {
    id: "ca12-ch8-3m-1",
    chapterNo: 8,
    chapterName: "Forms and Files",
    chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 3,
    type: "brief",
    questionText: "Differentiate GET and POST methods in PHP forms.",
    questionTextTamil: "PHP படிவங்களில் GET மற்றும் POST முறைகளை வேறுபடுத்துக.",
    answer: "1. GET appends form data to the URL visible in browser address bar; POST sends data enclosed in the HTTP request body invisibly.\n2. GET has length restrictions (~2048 characters) and is not secure for passwords; POST has no size limit and is secure for sensitive data.",
    answerTamil: "1. GET முறையானது தரவை URL முகவரிப் பட்டையில் வெளிப்படையாக இணைத்து அனுப்பும்; POST முறையானது HTTP கோரிக்கையின் உடற்பகுதியில் மறைமுகமாக அனுப்பும்.\n2. GET-ல் தரவு அளவு வரம்பு உண்டு; கடவுச்சொற்களுக்கு ஏற்றதல்ல. POST-ல் தரவு அளவு வரம்பு இல்லை; ரகசியத் தகவல்களுக்கு மிகவும் பாதுகாப்பானது.",
    isBookBack: true
  },
  {
    id: "ca12-ch8-3m-2",
    chapterNo: 8,
    chapterName: "Forms and Files",
    chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 3,
    type: "brief",
    questionText: "Explain file opening modes 'r', 'w', and 'a' in PHP.",
    questionTextTamil: "PHP கோப்பு திறப்பு முறைமைகளான 'r', 'w', 'a' ஆகியவற்றை விளக்குக.",
    answer: "1. 'r' (Read only): Opens file for reading; file pointer placed at beginning. Fails if file does not exist.\n2. 'w' (Write only): Opens file for writing, erases existing content or creates a new file.\n3. 'a' (Append only): Opens file for writing, places pointer at the end preserving old data, or creates file if not existing.",
    answerTamil: "1. 'r' (படிக்க மட்டும்): கோப்பைப் படிக்க திறக்கிறது; சுட்டு தொடக்கத்தில் இருக்கும்.\n2. 'w' (எழுத மட்டும்): கோப்பில் எழுதத் திறக்கும்; பழைய உள்ளடக்கங்களை அழித்து புதிய கோப்பை உருவாக்கும்.\n3. 'a' (சேர்க்க மட்டும்): பழைய தரவை அழிக்காமல் கோப்பின் இறுதியில் புதிய தரவைச் சேர்க்கும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch8-3m-3",
    chapterNo: 8,
    chapterName: "Forms and Files",
    chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 3,
    type: "brief",
    questionText: "What are the steps involved in file uploading in PHP?",
    questionTextTamil: "PHP-ல் கோப்பு பதிவேற்றத்தில் உள்ள படிநிலைகள் யாவை?",
    answer: "Steps for file uploading in PHP:\n1. Create HTML form with method=\"POST\" and enctype=\"multipart/form-data\".\n2. Add input element with type=\"file\".\n3. In PHP, access file details using $_FILES superglobal and move file using move_uploaded_file() to permanent server directory.",
    answerTamil: "கோப்பு பதிவேற்ற படிகள்:\n1. HTML படிவத்தில் method=\"POST\" மற்றும் enctype=\"multipart/form-data\" அமைக்க வேண்டும்.\n2. <input type=\"file\"> என்ற உள்ளீட்டுப் புலத்தை உருவாக்க வேண்டும்.\n3. PHP ஸ்கிரிப்ட்டில் $_FILES மற்றும் move_uploaded_file() செயற்கூறைப் பயன்படுத்தி கோப்பை சேவையக அடைவில் சேமிக்க வேண்டும்.",
    isBookBack: true
  }
];

const ch8_5m: Question[] = [
  {
    id: "ca12-ch8-5m-1",
    chapterNo: 8,
    chapterName: "Forms and Files",
    chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 5,
    type: "essay",
    questionText: "Explain Form handling in PHP with HTML form and PHP processing script.",
    questionTextTamil: "HTML படிவம் மற்றும் PHP செயலாக்க நிரலுடன் படிவ கையாளுதலை விரிவாக விளக்குக.",
    answer: "Form handling is the core of web interactivity where HTML collects inputs and PHP processes them.\n\n1. HTML Form (form.html):\n<form action=\"process.php\" method=\"POST\">\n    Name: <input type=\"text\" name=\"username\"><br>\n    Email: <input type=\"email\" name=\"email\"><br>\n    <input type=\"submit\" value=\"Submit\">\n</form>\n\n2. PHP Processing Script (process.php):\n<?php\nif ($_SERVER[\"REQUEST_METHOD\"] == \"POST\") {\n    $name = $_POST[\"username\"];\n    $email = $_POST[\"email\"];\n    echo \"Welcome \" . htmlspecialchars($name) . \"<br>\";\n    echo \"Your email is: \" . htmlspecialchars($email);\n}\n?>",
    answerTamil: "படிவ கையாளுதல் என்பது HTML மூலம் பயனர் உள்ளீடுகளைப் பெற்று PHP மூலம் சேவையகத்தில் செயலாக்குவதாகும்.\n\n1. HTML படிவம் (form.html):\n<form action=\"process.php\" method=\"POST\">\n    பெயர்: <input type=\"text\" name=\"username\"><br>\n    மின்னஞ்சல்: <input type=\"email\" name=\"email\"><br>\n    <input type=\"submit\" value=\"சமர்ப்பி\">\n</form>\n\n2. PHP செயலாக்க நிரல் (process.php):\n<?php\nif ($_SERVER[\"REQUEST_METHOD\"] == \"POST\") {\n    $name = $_POST[\"username\"];\n    $email = $_POST[\"email\"];\n    echo \"நல்வரவு \" . $name . \"<br>\";\n    echo \"உங்கள் மின்னஞ்சல்: \" . $email;\n}\n?>",
    isBookBack: true
  },
  {
    id: "ca12-ch8-5m-2",
    chapterNo: 8,
    chapterName: "Forms and Files",
    chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 5,
    type: "essay",
    questionText: "Explain file handling operations in PHP (Opening, Reading, Writing, Closing).",
    questionTextTamil: "PHP-ல் கோப்பு கையாளுதல் செயல்பாடுகளை (திறத்தல், படித்தல், எழுதுதல், மூடுதல்) விரிவாக விளக்குக.",
    answer: "File handling in PHP allows manipulating files directly on the server:\n\n1. Opening a file: fopen(\"test.txt\", \"w\");\n2. Writing to a file: fwrite($fileHandle, $data);\n3. Reading from a file:\n- fread($fileHandle, filesize(\"test.txt\"))\n- fgets($fileHandle) reads line-by-line\n4. Closing a file: fclose($fileHandle);\n\nComplete Working Example:\n<?php\n$file = fopen(\"sample.txt\", \"w\");\nfwrite($file, \"Learning PHP File Handling.\\n\");\nfclose($file);\n\n$file = fopen(\"sample.txt\", \"r\");\necho fread($file, filesize(\"sample.txt\"));\nfclose($file);\n?>",
    answerTamil: "PHP கோப்பு கையாளுதல் செயல்பாடுகள்:\n\n1. கோப்பைத் திறத்தல்: fopen(\"test.txt\", \"w\");\n2. கோப்பில் எழுதுதல்: fwrite($fileHandle, $data);\n3. கோப்பைப் படித்தல்: fread() அல்லது fgets() மூலம் வரிகளைப் படிக்கலாம்.\n4. கோப்பை மூடுதல்: fclose($fileHandle);\n\nமுழுமையான மாதிரி நிரல்:\n<?php\n$file = fopen(\"demo.txt\", \"w\");\nfwrite($file, \"வணக்கம்! PHP கோப்பு கையாளுதல்.\\n\");\nfclose($file);\n\n$file = fopen(\"demo.txt\", \"r\");\necho fread($file, filesize(\"demo.txt\"));\nfclose($file);\n?>",
    isBookBack: true
  }
];

// ==========================================
// CHAPTER 9: Connecting PHP and MYSQL (20 questions: 8 1M, 6 2M, 3 3M, 3 5M)
// ==========================================
const ch9_1m: Question[] = [
  {
    id: "ca12-ch9-1m-1",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1,
    type: "mcq",
    questionText: "Which is the correct function to establish a connection with MySQL database in PHP?",
    questionTextTamil: "PHP-ல் MySQL தரவுத்தளத்துடன் இணைப்பை ஏற்படுத்த சரியான செயற்கூறு எது?",
    options: {
      A: "mysqli_connect()",
      B: "mysql_connect_db()",
      C: "connect_mysql()",
      D: "db_connect()"
    },
    optionsTamil: {
      A: "mysqli_connect()",
      B: "mysql_connect_db()",
      C: "connect_mysql()",
      D: "db_connect()"
    },
    correctOption: "A",
    answer: "A) mysqli_connect()",
    answerTamil: "A) mysqli_connect()",
    isBookBack: true
  },
  {
    id: "ca12-ch9-1m-2",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1,
    type: "mcq",
    questionText: "What does 'i' stand for in 'mysqli' extension?",
    questionTextTamil: "'mysqli' விரிவாக்கத்தில் 'i' எதனைக் குறிக்கிறது?",
    options: {
      A: "internet",
      B: "improved",
      C: "interface",
      D: "integrated"
    },
    optionsTamil: {
      A: "internet",
      B: "மேம்படுத்தப்பட்ட (improved)",
      C: "interface",
      D: "integrated"
    },
    correctOption: "B",
    answer: "B) improved",
    answerTamil: "B) மேம்படுத்தப்பட்ட (improved)",
    isBookBack: true
  },
  {
    id: "ca12-ch9-1m-3",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1,
    type: "mcq",
    questionText: "How many parameters are typically required by mysqli_connect() function?",
    questionTextTamil: "mysqli_connect() செயற்கூறுக்கு பொதுவாக எத்தனை அளபுருக்கள் தேவைப்படுகின்றன?",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    optionsTamil: {
      A: "2",
      B: "3",
      C: "4 (server, user, password, db)",
      D: "5"
    },
    correctOption: "C",
    answer: "C) 4",
    answerTamil: "C) 4 (server, user, password, db)",
    isBookBack: true
  },
  {
    id: "ca12-ch9-1m-4",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1,
    type: "mcq",
    questionText: "Which function executes an SQL query on an active MySQL connection in PHP?",
    questionTextTamil: "MySQL இணைப்பில் SQL வினவலை இயக்கப் பயன்படும் செயற்கூறு எது?",
    options: {
      A: "mysqli_query()",
      B: "mysqli_execute()",
      C: "mysqli_run()",
      D: "mysql_do()"
    },
    optionsTamil: {
      A: "mysqli_query()",
      B: "mysqli_execute()",
      C: "mysqli_run()",
      D: "mysql_do()"
    },
    correctOption: "A",
    answer: "A) mysqli_query()",
    answerTamil: "A) mysqli_query()",
    isBookBack: true
  },
  {
    id: "ca12-ch9-1m-5",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1,
    type: "mcq",
    questionText: "Which function closes an established MySQL connection in PHP?",
    questionTextTamil: "PHP-ல் ஏற்படுத்தப்பட்ட MySQL இணைப்பை மூடப் பயன்படும் செயற்கூறு எது?",
    options: {
      A: "mysqli_close()",
      B: "mysql_disconnect()",
      C: "mysqli_end()",
      D: "db_close()"
    },
    optionsTamil: {
      A: "mysqli_close()",
      B: "mysql_disconnect()",
      C: "mysqli_end()",
      D: "db_close()"
    },
    correctOption: "A",
    answer: "A) mysqli_close()",
    answerTamil: "A) mysqli_close()",
    isBookBack: true
  },
  {
    id: "ca12-ch9-1m-6",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1,
    type: "mcq",
    questionText: "Which function fetches a result row as an associative array in MySQLi?",
    questionTextTamil: "MySQLi-ல் வினவல் முடிவின் வரிசையை தொடர்பு அணியாகப் பெற பயன்படும் செயற்கூறு எது?",
    options: {
      A: "mysqli_fetch_assoc()",
      B: "mysqli_fetch_row()",
      C: "mysqli_fetch_array()",
      D: "mysqli_get_row()"
    },
    optionsTamil: {
      A: "mysqli_fetch_assoc()",
      B: "mysqli_fetch_row()",
      C: "mysqli_fetch_array()",
      D: "mysqli_get_row()"
    },
    correctOption: "A",
    answer: "A) mysqli_fetch_assoc()",
    answerTamil: "A) mysqli_fetch_assoc()",
    isBookBack: true
  },
  {
    id: "ca12-ch9-1m-7",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1,
    type: "mcq",
    questionText: "Which function returns the error description from the last connection error in MySQLi?",
    questionTextTamil: "MySQLi-ல் ஏற்பட்ட கடைசி இணைப்பு பிழையின் விளக்கத்தைத் தரும் செயற்கூறு எது?",
    options: {
      A: "mysqli_connect_error()",
      B: "mysqli_error_msg()",
      C: "mysql_error()",
      D: "db_err()"
    },
    optionsTamil: {
      A: "mysqli_connect_error()",
      B: "mysqli_error_msg()",
      C: "mysql_error()",
      D: "db_err()"
    },
    correctOption: "A",
    answer: "A) mysqli_connect_error()",
    answerTamil: "A) mysqli_connect_error()",
    isBookBack: true
  },
  {
    id: "ca12-ch9-1m-8",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1,
    type: "mcq",
    questionText: "What is the default username for MySQL server in XAMPP / WAMP package?",
    questionTextTamil: "XAMPP / WAMP தொகுப்பில் MySQL சேவையகத்திற்கான இயல்புநிலை பயனர் பெயர் என்ன?",
    options: {
      A: "root",
      B: "admin",
      C: "mysql",
      D: "user"
    },
    optionsTamil: {
      A: "root",
      B: "admin",
      C: "mysql",
      D: "user"
    },
    correctOption: "A",
    answer: "A) root",
    answerTamil: "A) root",
    isBookBack: true
  }
];

const ch9_2m: Question[] = [
  {
    id: "ca12-ch9-2m-1",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 2,
    type: "short",
    questionText: "What is MySQLi extension in PHP?",
    questionTextTamil: "PHP-ல் MySQLi விரிவாக்கம் என்றால் என்ன?",
    answer: "MySQLi (MySQL Improved) is a PHP extension that allows PHP scripts to communicate with and execute queries on MySQL database systems efficiently.",
    answerTamil: "MySQLi (மேம்படுத்தப்பட்ட MySQL) என்பது PHP ஸ்கிரிப்டுகள் MySQL தரவுத்தளத்துடன் தொடர்புகொண்டு வினவல்களை இயக்கப் பயன்படும் ஒரு விரிவாக்கமாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch9-2m-2",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 2,
    type: "short",
    questionText: "Write the syntax of mysqli_connect() function.",
    questionTextTamil: "mysqli_connect() செயற்கூறின் தொடரியலை எழுதுக.",
    answer: "Syntax:\n$conn = mysqli_connect(\"servername\", \"username\", \"password\", \"dbname\");",
    answerTamil: "தொடரியல்:\n$conn = mysqli_connect(\"சேவையகப்_பெயர்\", \"பயனர்_பெயர்\", \"கடவுச்சொல்\", \"தரவுத்தளப்_பெயர்\");",
    isBookBack: true
  },
  {
    id: "ca12-ch9-2m-3",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 2,
    type: "short",
    questionText: "What is the purpose of mysqli_query() function?",
    questionTextTamil: "mysqli_query() செயற்கூறின் நோக்கம் யாது?",
    answer: "The mysqli_query() function sends and executes an SQL statement (like SELECT, INSERT, UPDATE, DELETE) against the currently opened database connection.",
    answerTamil: "mysqli_query() செயற்கூறானது திறக்கப்பட்ட தரவுத்தள இணைப்பில் SQL கட்டளைகளை (SELECT, INSERT போன்றவை) செயல்படுத்தப் பயன்படுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch9-2m-4",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 2,
    type: "short",
    questionText: "What is the use of mysqli_close() function?",
    questionTextTamil: "mysqli_close() செயற்கூறின் பயன் யாது?",
    answer: "The mysqli_close() function terminates and closes an active MySQL database connection, freeing allocated server connection sockets and memory.",
    answerTamil: "mysqli_close() செயற்கூறானது பயன்பாட்டில் உள்ள MySQL தரவுத்தள இணைப்பை மூடி நினைவகத்தை விடுவிக்கப் பயன்படுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch9-2m-5",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 2,
    type: "short",
    questionText: "What does mysqli_connect_error() return?",
    questionTextTamil: "mysqli_connect_error() செயற்கூறு எதனைத் தரும்?",
    answer: "mysqli_connect_error() returns a descriptive string message of the error that occurred during the last connection attempt, or NULL if no error occurred.",
    answerTamil: "mysqli_connect_error() செயற்கூறானது தரவுத்தள இணைப்பின் போது ஏதேனும் பிழை ஏற்பட்டால் அதன் விளக்கச் செய்தியைத் தரும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch9-2m-6",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 2,
    type: "short",
    questionText: "What is the default port number used by MySQL?",
    questionTextTamil: "MySQL பயன்படுத்தும் இயல்புநிலை முனைய எண் (Port number) என்ன?",
    answer: "The default TCP port number used for MySQL server communication is 3306.",
    answerTamil: "MySQL சேவையகத் தொடர்புக்குப் பயன்படும் இயல்புநிலை முனைய எண் 3306 ஆகும்.",
    isBookBack: true
  }
];

const ch9_3m: Question[] = [
  {
    id: "ca12-ch9-3m-1",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 3,
    type: "brief",
    questionText: "What are the major steps to connect PHP with MySQL database?",
    questionTextTamil: "PHP-ஐ MySQL தரவுத்தளத்துடன் இணைப்பதில் உள்ள முக்கிய படிநிலைகள் யாவை?",
    answer: "Steps:\n1. Establish connection using mysqli_connect().\n2. Check connection status and handle errors using mysqli_connect_error().\n3. Execute SQL queries using mysqli_query().\n4. Fetch and display results using mysqli_fetch_assoc().\n5. Close connection using mysqli_close().",
    answerTamil: "முக்கிய படிகள்:\n1. mysqli_connect() கொண்டு இணைப்பை ஏற்படுத்துதல்.\n2. mysqli_connect_error() கொண்டு பிழைகளை சரிபார்த்தல்.\n3. mysqli_query() மூலம் SQL வினவலை இயக்குதல்.\n4. mysqli_fetch_assoc() கொண்டு முடிவுகளைப் பெறுதல்.\n5. mysqli_close() மூலம் இணைப்பை மூடுதல்.",
    isBookBack: true
  },
  {
    id: "ca12-ch9-3m-2",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 3,
    type: "brief",
    questionText: "Explain mysqli_fetch_assoc() with syntax.",
    questionTextTamil: "mysqli_fetch_assoc() செயற்கூற்றை தொடரியலுடன் விளக்குக.",
    answer: "mysqli_fetch_assoc() fetches a result row as an associative array where column names act as keys.\nSyntax:\n$row = mysqli_fetch_assoc($result);\necho $row[\"column_name\"];",
    answerTamil: "mysqli_fetch_assoc() வினவல் முடிவுகளின் ஒரு வரிசையை தொடர்பு அணியாகப் பெற்றுத் தரும் (நெடுவரிசை பெயர்கள் திறவுகோல்களாக அமையும்).\nதொடரியல்:\n$row = mysqli_fetch_assoc($result);\necho $row[\"column_name\"];",
    isBookBack: true
  },
  {
    id: "ca12-ch9-3m-3",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 3,
    type: "brief",
    questionText: "Write a PHP code snippet to connect to a database named 'SchoolDB'.",
    questionTextTamil: "'SchoolDB' என்ற தரவுத்தளத்துடன் இணையும் PHP குறிமுறையை எழுதுக.",
    answer: "<?php\n$conn = mysqli_connect(\"localhost\", \"root\", \"\", \"SchoolDB\");\nif (!$conn) {\n    die(\"Connection failed: \" . mysqli_connect_error());\n}\necho \"Connected successfully to SchoolDB\";\n?>",
    answerTamil: "<?php\n$conn = mysqli_connect(\"localhost\", \"root\", \"\", \"SchoolDB\");\nif (!$conn) {\n    die(\"இணைப்பு தோல்வி: \" . mysqli_connect_error());\n}\necho \"SchoolDB தரவுத்தளத்துடன் வெற்றிகரமாக இணைக்கப்பட்டது!\";\n?>",
    isBookBack: true
  }
];

const ch9_5m: Question[] = [
  {
    id: "ca12-ch9-5m-1",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 5,
    type: "essay",
    questionText: "Discuss the MySQLi connection functions in PHP in detail with syntax and examples.",
    questionTextTamil: "PHP-ல் உள்ள MySQLi இணைப்பு செயற்கூறுகளை தொடரியல் மற்றும் எடுத்துக்காட்டுகளுடன் விரிவாக விவாதிக்கவும்.",
    answer: "Core MySQLi functions in PHP:\n\n1. mysqli_connect(host, user, password, database):\nEstablishes link with MySQL server.\n\n2. mysqli_connect_errno() / mysqli_connect_error():\nReturns the error code and error message if connection fails.\n\n3. mysqli_query(connection, query):\nSends SQL statement to the database.\n\n4. mysqli_num_rows(result):\nReturns the number of rows present in the query result.\n\n5. mysqli_fetch_assoc(result):\nFetches row data as an associative array.\n\n6. mysqli_close(connection):\nTerminates database connection.",
    answerTamil: "PHP MySQLi முக்கிய செயற்கூறுகள்:\n\n1. mysqli_connect(): MySQL சேவையகத்துடன் இணைப்பை ஏற்படுத்தும்.\n2. mysqli_connect_error(): இணைப்புப் பிழையின் செய்தியை வழங்கும்.\n3. mysqli_query(): SQL வினவல்களை இயக்கும்.\n4. mysqli_num_rows(): வினவல் முடிவில் உள்ள வரிசைகளின் எண்ணிக்கையைத் தரும்.\n5. mysqli_fetch_assoc(): வரிசையை தொடர்பு அணியாகப் பெற்றுத் தரும்.\n6. mysqli_close(): இணைப்பை முறையாக முடித்து வைக்கும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch9-5m-2",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 5,
    type: "essay",
    questionText: "Write a complete PHP program to retrieve and display student records from MySQL database.",
    questionTextTamil: "MySQL தரவுத்தளத்திலிருந்து மாணவர் பதிவுகளைப் பெற்று திரையிடும் முழுமையான PHP நிரலை எழுதுக.",
    answer: "Complete PHP script to fetch and display records:\n\n<?php\n$conn = mysqli_connect(\"localhost\", \"root\", \"\", \"SchoolDB\");\nif (!$conn) {\n    die(\"Connection failed: \" . mysqli_connect_error());\n}\n\n$sql = \"SELECT id, name, marks FROM Students\";\n$result = mysqli_query($conn, $sql);\n\nif (mysqli_num_rows($result) > 0) {\n    echo \"<table border='1'><tr><th>ID</th><th>Name</th><th>Marks</th></tr>\";\n    while($row = mysqli_fetch_assoc($result)) {\n        echo \"<tr><td>\" . $row[\"id\"] . \"</td><td>\" . $row[\"name\"] . \"</td><td>\" . $row[\"marks\"] . \"</td></tr>\";\n    }\n    echo \"</table>\";\n} else {\n    echo \"No records found.\";\n}\n\nmysqli_close($conn);\n?>",
    answerTamil: "மாணவர் பதிவுகளைப் பெற்று அட்டவணையாக வெளியிடும் மாதிரி நிரல்:\n\n<?php\n$conn = mysqli_connect(\"localhost\", \"root\", \"\", \"SchoolDB\");\nif (!$conn) {\n    die(\"இணைப்பு தோல்வி: \" . mysqli_connect_error());\n}\n\n$sql = \"SELECT id, name, marks FROM Students\";\n$result = mysqli_query($conn, $sql);\n\nif (mysqli_num_rows($result) > 0) {\n    echo \"<table border='1'><tr><th>எண்</th><th>பெயர்</th><th>மதிப்பெண்</th></tr>\";\n    while($row = mysqli_fetch_assoc($result)) {\n        echo \"<tr><td>\" . $row[\"id\"] . \"</td><td>\" . $row[\"name\"] . \"</td><td>\" . $row[\"marks\"] . \"</td></tr>\";\n    }\n    echo \"</table>\";\n} else {\n    echo \"பதிவுகள் இல்லை.\";\n}\n\nmysqli_close($conn);\n?>",
    isBookBack: true
  },
  {
    id: "ca12-ch9-5m-3",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 5,
    type: "essay",
    questionText: "Write a PHP program to insert a new user record into MySQL database.",
    questionTextTamil: "MySQL தரவுத்தளத்தில் புதிய பயனர் பதிவைச் செருகும் PHP நிரலை எழுதுக.",
    answer: "PHP script to insert record:\n\n<?php\n$conn = mysqli_connect(\"localhost\", \"root\", \"\", \"ShopDB\");\nif (!$conn) {\n    die(\"Connection failed: \" . mysqli_connect_error());\n}\n\n$username = \"Kavitha\";\n$email = \"kavitha@example.com\";\n$city = \"Chennai\";\n\n$sql = \"INSERT INTO Customers (name, email, city) VALUES ('$username', '$email', '$city')\";\n\nif (mysqli_query($conn, $sql)) {\n    echo \"New record inserted successfully!\";\n} else {\n    echo \"Error: \" . $sql . \"<br>\" . mysqli_error($conn);\n}\n\nmysqli_close($conn);\n?>",
    answerTamil: "புதிய பதிவைச் செருகும் மாதிரி நிரல்:\n\n<?php\n$conn = mysqli_connect(\"localhost\", \"root\", \"\", \"ShopDB\");\nif (!$conn) {\n    die(\"இணைப்பு தோல்வி: \" . mysqli_connect_error());\n}\n\n$username = \"கவிதா\";\n$email = \"kavitha@example.com\";\n$city = \"சென்னை\";\n\n$sql = \"INSERT INTO Customers (name, email, city) VALUES ('$username', '$email', '$city')\";\n\nif (mysqli_query($conn, $sql)) {\n    echo \"புதிய பதிவு வெற்றிகரமாகச் சேர்க்கப்பட்டது!\";\n} else {\n    echo \"பிழை: \" . mysqli_error($conn);\n}\n\nmysqli_close($conn);\n?>",
    isBookBack: true
  }
];

// ==========================================
// CHAPTER 10: Introduction to Computer Networks (16 questions: 7 1M, 4 2M, 3 3M, 2 5M)
// ==========================================
const ch10_1m: Question[] = [
  {
    id: "ca12-ch10-1m-1",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "A computer network is a collection of computers connected to each other for the purpose of sharing _________.",
    questionTextTamil: "கணினி வலையமைப்பு என்பது எவற்றைப் பகிர்வதற்காக ஒன்றோடொன்று இணைக்கப்பட்ட கணினிகளின் தொகுப்பாகும்?",
    options: {
      A: "resources",
      B: "monitors",
      C: "keyboards",
      D: "power supplies"
    },
    optionsTamil: {
      A: "வளங்கள் (resources & data)",
      B: "திரையகங்கள்",
      C: "விசைப்பலகைகள்",
      D: "மின்கலன்கள்"
    },
    correctOption: "A",
    answer: "A) resources",
    answerTamil: "A) வளங்கள் (resources & data)",
    isBookBack: true
  },
  {
    id: "ca12-ch10-1m-2",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "Which of the following was the precursor of the modern Internet?",
    questionTextTamil: "நவீன இணையத்தின் முன்னோடியாக அமைந்தது எது?",
    options: {
      A: "ARPANET",
      B: "TELNET",
      C: "INTRANET",
      D: "EXTRANET"
    },
    optionsTamil: {
      A: "ஆர்பாநெட் (ARPANET)",
      B: "டெல்நெட்",
      C: "இன்ட்ராநெட்",
      D: "எக்ஸ்ட்ராநெட்"
    },
    correctOption: "A",
    answer: "A) ARPANET",
    answerTamil: "A) ஆர்பாநெட் (ARPANET)",
    isBookBack: true
  },
  {
    id: "ca12-ch10-1m-3",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "A network that spans a single building or room is known as _________.",
    questionTextTamil: "ஒரு சிறிய கட்டிடம் அல்லது அறைக்குள் அமையும் வலையமைப்பு எது?",
    options: {
      A: "LAN",
      B: "MAN",
      C: "WAN",
      D: "PAN"
    },
    optionsTamil: {
      A: "குறும்பரப்பு வலையமைப்பு (LAN)",
      B: "நகரப்பரப்பு வலையமைப்பு (MAN)",
      C: "பரந்த பரப்பு வலையமைப்பு (WAN)",
      D: "தனிநபர் வலையமைப்பு (PAN)"
    },
    correctOption: "A",
    answer: "A) LAN",
    answerTamil: "A) குறும்பரப்பு வலையமைப்பு (LAN)",
    isBookBack: true
  },
  {
    id: "ca12-ch10-1m-4",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "A network covering an entire metropolitan city is called _________.",
    questionTextTamil: "ஒரு முழு பெருநகரப் பகுதியை உள்ளடக்கிய வலையமைப்பு எது?",
    options: {
      A: "LAN",
      B: "MAN",
      C: "WAN",
      D: "CAN"
    },
    optionsTamil: {
      A: "LAN",
      B: "நகரப்பரப்பு வலையமைப்பு (MAN)",
      C: "WAN",
      D: "CAN"
    },
    correctOption: "B",
    answer: "B) MAN",
    answerTamil: "B) நகரப்பரப்பு வலையமைப்பு (MAN)",
    isBookBack: true
  },
  {
    id: "ca12-ch10-1m-5",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "Which network spans across countries and continents worldwide?",
    questionTextTamil: "நாடுகள் மற்றும் கண்டங்கள் கடந்து உலகம் முழுவதும் பரவியுள்ள வலையமைப்பு எது?",
    options: {
      A: "LAN",
      B: "MAN",
      C: "WAN",
      D: "PAN"
    },
    optionsTamil: {
      A: "LAN",
      B: "MAN",
      C: "பரந்த பரப்பு வலையமைப்பு (WAN)",
      D: "PAN"
    },
    correctOption: "C",
    answer: "C) WAN",
    answerTamil: "C) பரந்த பரப்பு வலையமைப்பு (WAN)",
    isBookBack: true
  },
  {
    id: "ca12-ch10-1m-6",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "The private network of an organization accessible only to its authorized staff is a(n) _________.",
    questionTextTamil: "ஒரு நிறுவனத்தின் அங்கீகரிக்கப்பட்ட ஊழியர்களுக்கு மட்டும் பயன்படும் தனிப்பட்ட வலையமைப்பு எது?",
    options: {
      A: "Internet",
      B: "Intranet",
      C: "Extranet",
      D: "Ethernet"
    },
    optionsTamil: {
      A: "இணையம் (Internet)",
      B: "உள் இணையம் (Intranet)",
      C: "புற இணையம் (Extranet)",
      D: "ஈதர்நெட்"
    },
    correctOption: "B",
    answer: "B) Intranet",
    answerTamil: "B) உள் இணையம் (Intranet)",
    isBookBack: true
  },
  {
    id: "ca12-ch10-1m-7",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "Wi-Fi stands for _________.",
    questionTextTamil: "Wi-Fi என்பதன் விரிவாக்கம் என்ன?",
    options: {
      A: "Wireless Fidelity",
      B: "Wired Fiber",
      C: "Wireless Frequency",
      D: "Wide Field"
    },
    optionsTamil: {
      A: "Wireless Fidelity",
      B: "Wired Fiber",
      C: "Wireless Frequency",
      D: "Wide Field"
    },
    correctOption: "A",
    answer: "A) Wireless Fidelity",
    answerTamil: "A) Wireless Fidelity",
    isBookBack: true
  }
];

const ch10_2m: Question[] = [
  {
    id: "ca12-ch10-2m-1",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "Define Computer Network.",
    questionTextTamil: "கணினி வலையமைப்பு - வரையறுக்கவும்.",
    answer: "A computer network is a collection of interconnected autonomous computing devices that exchange data and share hardware/software resources via communication channels.",
    answerTamil: "கணினி வலையமைப்பு என்பது தரவு பரிமாற்றம் மற்றும் வளங்களைப் பகிர்வதற்காக தகவல் தொடர்பு ஊடகங்கள் மூலம் இணைக்கப்பட்ட கணினிகளின் தொகுப்பாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch10-2m-2",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "List any four uses of computer networks.",
    questionTextTamil: "கணினி வலையமைப்பின் ஏதேனும் நான்கு பயன்களைப் பட்டியலிடுக.",
    answer: "Uses of computer networks:\n1. Resource sharing (printers, storage).\n2. Fast communication (Email, Instant messaging, Video conferencing).\n3. Centralized data management and backup.\n4. Cost reduction and e-commerce.",
    answerTamil: "கணினி வலையமைப்பின் நான்கு பயன்கள்:\n1. வளங்களைப் பகிர்தல் (அச்சுப்பொறி, சேமிப்பகம்).\n2. விரைவான தகவல்தொடர்பு (மின்னஞ்சல், வீடியோ அழைப்பு).\n3. மையப்படுத்தப்பட்ட தரவு மேலாண்மை.\n4. செலவுக் குறைப்பு மற்றும் மின்-வணிகம்.",
    isBookBack: true
  },
  {
    id: "ca12-ch10-2m-3",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "What is an Intranet?",
    questionTextTamil: "உள் இணையம் (Intranet) என்றால் என்ன?",
    answer: "An Intranet is a secure, private enterprise network accessible exclusively to an organization's internal members and authorized employees.",
    answerTamil: "உள் இணையம் (Intranet) என்பது ஒரு நிறுவனத்தின் அங்கீகரிக்கப்பட்ட ஊழியர்கள் மட்டுமே பயன்படுத்தக்கூடிய பாதுகாப்பான தனிப்பட்ட வலையமைப்பாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch10-2m-4",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "What is an Extranet?",
    questionTextTamil: "புற இணையம் (Extranet) என்றால் என்ன?",
    answer: "An Extranet is a controlled private network allowing limited, secure access to external trusted partners, vendors, and customers of an organization.",
    answerTamil: "புற இணையம் (Extranet) என்பது ஒரு நிறுவனத்தின் அங்கீகரிக்கப்பட்ட வெளிப்புற வாடிக்கையாளர்கள், விற்பனையாளர்கள் மட்டுமே அணுகக்கூடிய கட்டுப்படுத்தப்பட்ட வலையமைப்பாகும்.",
    isBookBack: true
  }
];

const ch10_3m: Question[] = [
  {
    id: "ca12-ch10-3m-1",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 3,
    type: "brief",
    questionText: "Differentiate Internet, Intranet and Extranet.",
    questionTextTamil: "இணையம் (Internet), உள் இணையம் (Intranet) மற்றும் புற இணையம் (Extranet) ஆகியவற்றை வேறுபடுத்துக.",
    answer: "1. Internet: Global public network accessible by anyone worldwide.\n2. Intranet: Private network strictly restricted to employees within an organization.\n3. Extranet: Private network extended to authorized external partners and clients.",
    answerTamil: "1. Internet: உலகளாவிய பொது வலையமைப்பு, அனைவரும் அணுகலாம்.\n2. Intranet: நிறுவனத்தின் உள் பணியாளர்கள் மட்டுமே பயன்படுத்தும் தனி வலையமைப்பு.\n3. Extranet: நிறுவனத்தின் வெளிப்புற நம்பிக்கைக்குரிய வாடிக்கையாளர்கள் பயன்படுத்தும் கட்டுப்படுத்தப்பட்ட வலையமைப்பு.",
    isBookBack: true
  },
  {
    id: "ca12-ch10-3m-2",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 3,
    type: "brief",
    questionText: "Explain LAN, MAN, and WAN.",
    questionTextTamil: "LAN, MAN மற்றும் WAN ஆகியவற்றை சுருக்கமாக விளக்குக.",
    answer: "1. LAN (Local Area Network): Spans a small area like an office or building (up to a few km).\n2. MAN (Metropolitan Area Network): Spans an entire city or large town (e.g., Cable TV network).\n3. WAN (Wide Area Network): Spans across countries, continents, or the globe (e.g., the Internet).",
    answerTamil: "1. LAN (குறும்பரப்பு): ஒரு அறை அல்லது கட்டிடத்திற்குள் அமையும் (எ.கா: பள்ளி கணினி ஆய்வகம்).\n2. MAN (நகரப்பரப்பு): ஒரு முழு நகரத்தை உள்ளடக்கும் (எ.கா: கேபிள் டிவி வலையமைப்பு).\n3. WAN (பரந்த பரப்பு): நாடுகள் மற்றும் உலகளாவிய அளவில் பரவியிருக்கும் (எ.கா: இணையம்).",
    isBookBack: true
  },
  {
    id: "ca12-ch10-3m-3",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 3,
    type: "brief",
    questionText: "What are the social benefits of computer networks?",
    questionTextTamil: "கணினி வலையமைப்பினால் ஏற்படும் சமூக நன்மைகள் யாவை?",
    answer: "Social benefits include:\n1. Global instant communication and connectivity.\n2. Access to distant education, online learning, and research resources.\n3. Telemedicine and digital healthcare consults.\n4. Remote working (Work From Home) and collaborative social communities.",
    answerTamil: "சமூக நன்மைகள்:\n1. உலகளாவிய உடனடி தகவல்தொடர்பு.\n2. தொலைதூரக் கல்வி மற்றும் இணையவழி கற்றல்.\n3. தொலைதூர மருத்துவம் (Telemedicine).\n4. வீட்டிலிருந்தே பணிபுரியும் வாய்ப்பு (Work From Home).",
    isBookBack: true
  }
];

const ch10_5m: Question[] = [
  {
    id: "ca12-ch10-5m-1",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 5,
    type: "essay",
    questionText: "Explain the classification of Computer Networks based on geographical scale (PAN, LAN, MAN, WAN).",
    questionTextTamil: "புவியியல் பரப்பளவின் அடிப்படையில் கணினி வலையமைப்பின் வகைகளை (PAN, LAN, MAN, WAN) விரிவாக விளக்குக.",
    answer: "Classification of Networks based on Geographic Span:\n\n1. PAN (Personal Area Network):\n- Covers personal workspace within 10 meters around an individual.\n- Technologies: Bluetooth, ZigBee, USB.\n\n2. LAN (Local Area Network):\n- Connects computers within a single room, building, or campus.\n- High data transfer rates (10 Mbps to 10 Gbps) and low error rates.\n- Technologies: Ethernet, Wi-Fi.\n\n3. MAN (Metropolitan Area Network):\n- Connects multiple LANs across an entire city or metropolis (5 km to 50 km).\n- Example: City-wide cable television networks, municipal Wi-Fi.\n\n4. WAN (Wide Area Network):\n- Covers vast geographic areas crossing national and continental boundaries.\n- Uses satellite links, submarine fiber cables, and telecom routers.\n- The global Internet is the largest example of a WAN.",
    answerTamil: "புவியியல் எல்லை சார்ந்த வலையமைப்புகளின் வகைப்பாடு:\n\n1. PAN (தனிநபர் வலையமைப்பு):\n- ஒரு தனிநபரைச் சுற்றியுள்ள சுமார் 10 மீட்டர் பரப்பளவை உள்ளடக்கியது (புளூடூத், வைஃபை ஹாட்ஸ்பாட்).\n\n2. LAN (குறும்பரப்பு வலையமைப்பு):\n- ஒரு அறை, கட்டிடம் அல்லது வளாகத்திற்குள் அமையும் (பள்ளி, அலுவலகம்).\n- மிக அதிக வேகம் மற்றும் குறைந்த பிழைத்தன்மை கொண்டது.\n\n3. MAN (நகரப்பரப்பு வலையமைப்பு):\n- ஒரு நகரம் முழுவதும் பல LAN-களை இணைக்கும் (5 கி.மீ முதல் 50 கி.மீ வரை, எ.கா: கேபிள் டிவி).\n\n4. WAN (பரந்த பரப்பு வலையமைப்பு):\n- நாடுகள் மற்றும் கண்டங்களைக் கடந்து உலகம் முழுவதும் பரவியுள்ளது.\n- செயற்கைக்கோள் மற்றும் கடலடி கேபிள்கள் மூலம் இணைக்கப்படுகிறது (எ.கா: இணையம்).",
    isBookBack: true
  },
  {
    id: "ca12-ch10-5m-2",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 5,
    type: "essay",
    questionText: "Explain in detail about the growth and applications of Computer Networks in modern society.",
    questionTextTamil: "நவீன சமுதாயத்தில் கணினி வலையமைப்பின் வளர்ச்சி மற்றும் பயன்பாடுகளை விரிவாக விளக்குக.",
    answer: "Growth and Applications of Computer Networks:\n\n1. Communication:\nInstant messaging, video conferencing (Zoom, Teams), email, and social networks connecting billions instantly.\n\n2. Resource & Hardware Sharing:\nShared cloud storage, network laser printers, high-performance computing clusters.\n\n3. E-Commerce & Online Banking:\nOnline shopping portals, UPI payments, net banking, mobile wallets, and paperless transactions.\n\n4. Education & Research:\nOnline classes, virtual labs, MOOC platforms, digital libraries, and global collaborative research.\n\n5. Entertainment & Media:\nStreaming platforms (OTT), online multiplayer gaming, on-demand video broadcasting.\n\n6. Healthcare & Governance:\nTelemedicine, e-governance citizen portals, smart cities, and IoT infrastructure.",
    answerTamil: "கணினி வலையமைப்பின் வளர்ச்சி மற்றும் முக்கிய பயன்பாடுகள்:\n\n1. தகவல்தொடர்பு: உடனடி செய்திகள், வீடியோ கான்பரன்சிங், மின்னஞ்சல் மற்றும் சமூக ஊடகங்கள்.\n2. வளப் பகிர்வு: கிளவுட் சேமிப்பகம், மைய அச்சுப்பொறிகள் மற்றும் கணக்கீட்டு வளங்கள்.\n3. மின்-வணிகம் & வங்கி சேவை: இணையவழி ஷாப்பிங், UPI பரிவர்த்தனைகள் மற்றும் டிஜிட்டல் வங்கி.\n4. கல்வி மற்றும் ஆராய்ச்சி: மெய்நிகர் வகுப்பறைகள், மின்-நூலகங்கள் மற்றும் உலகளாவிய ஆய்வுகள்.\n5. பொழுதுபோக்கு: OTT ஒளிபரப்பு, ஆன்லைன் விளையாட்டுகள்.\n6. சுகாதாரம் & மின்-ஆளுமை: தொலைதூர மருத்துவம், அரசு சேவைகளுக்கான இணையதளங்கள்.",
    isBookBack: true
  }
];

const ch8_all = [...ch8_1m, ...ch8_2m, ...ch8_3m, ...ch8_5m];
fs.writeFileSync('scripts_ca12/ch8.json', JSON.stringify(ch8_all, null, 2), 'utf8');
console.log("Chapter 8 written! Total:", ch8_all.length);

const ch9_all = [...ch9_1m, ...ch9_2m, ...ch9_3m, ...ch9_5m];
fs.writeFileSync('scripts_ca12/ch9.json', JSON.stringify(ch9_all, null, 2), 'utf8');
console.log("Chapter 9 written! Total:", ch9_all.length);

const ch10_all = [...ch10_1m, ...ch10_2m, ...ch10_3m, ...ch10_5m];
fs.writeFileSync('scripts_ca12/ch10.json', JSON.stringify(ch10_all, null, 2), 'utf8');
console.log("Chapter 10 written! Total:", ch10_all.length);
