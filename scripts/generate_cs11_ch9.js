import fs from 'fs';

// ==========================================
// CHAPTER 9: Introduction to C++ (C++ ஓர் அறிமுகம்)
// Revised counts per user instructions:
// 1M: 20, 2M: 16, 3M: 8, 5M: 3 (Total: 47)
// ==========================================
const ch9 = [
  // 1 Marks (20)
  {
    id: "cs11-ch9-1m-1", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 1, type: "mcq",
    questionText: "Who developed C++ programming language?", questionTextTamil: "C++ நிரலாக்க மொழியை உருவாக்கியவர் யார்?",
    options: { A: "Charles Babbage", B: "Bjarne Stroustrup", C: "Dennis Ritchie", D: "James Gosling" },
    optionsTamil: { A: "சார்லஸ் பாபேஜ்", B: "ஜார்னே ஸ்ட்ரூஸ்ட்ரப் (Bjarne Stroustrup)", C: "டென்னிஸ் ரிட்சி", D: "ஜேம்ஸ் காஸ்லிங்" },
    correctOption: "B", answer: "B) Bjarne Stroustrup", answerTamil: "B) ஜார்னே ஸ்ட்ரூஸ்ட்ரப்", isBookBack: true
  },
  {
    id: "cs11-ch9-1m-2", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 1, type: "mcq",
    questionText: "What was the original name of C++?", questionTextTamil: "C++ மொழியின் தொடக்கப் பெயர் என்ன?",
    options: { A: "C with Classes", B: "Advanced C", C: "C Plus", D: "Object C" },
    optionsTamil: { A: "C with Classes (இனக்குழுக்களுடன் கூடிய C)", B: "Advanced C", C: "C Plus", D: "Object C" },
    correctOption: "A", answer: "A) C with Classes", answerTamil: "A) C with Classes", isBookBack: true
  },
  {
    id: "cs11-ch9-1m-3", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 1, type: "mcq",
    questionText: "The smallest individual unit in a C++ program is known as:", questionTextTamil: "C++ நிரலின் மிகச்சிறிய தனித்த அலகு எவ்வாறு அழைக்கப்படுகிறது?",
    options: { A: "Statement", B: "Token", C: "Function", D: "Expression" },
    optionsTamil: { A: "கூற்று", B: "வில்லை (Token அல்லது Lexical unit)", C: "செயற்கூறு", D: "கோவை" },
    correctOption: "B", answer: "B) Token (Lexical Unit)", answerTamil: "B) வில்லை (Token)", isBookBack: true
  },
  {
    id: "cs11-ch9-1m-4", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 1, type: "mcq",
    questionText: "Which of the following is a valid identifier in C++?", questionTextTamil: "பின்வருவனவற்றுள் எது சரியான குறிப்பெயரி (Identifier) ஆகும்?",
    options: { A: "num_1", B: "1_num", C: "num$1", D: "num 1" },
    optionsTamil: { A: "num_1", B: "1_num", C: "num$1", D: "num 1" },
    correctOption: "A", answer: "A) num_1", answerTamil: "A) num_1", isBookBack: true
  },
  {
    id: "cs11-ch9-1m-5", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 1, type: "mcq",
    questionText: "Which of the following is a reserved keyword in C++?", questionTextTamil: "பின்வருவனவற்றுள் எது C++ மொழியின் சிறப்புச் சொல் (Keyword) ஆகும்?",
    options: { A: "include", B: "while", C: "main", D: "cout" },
    optionsTamil: { A: "include", B: "while", C: "main", D: "cout" },
    correctOption: "B", answer: "B) while", answerTamil: "B) while", isBookBack: true
  },
  {
    id: "cs11-ch9-1m-6", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 1, type: "mcq",
    questionText: "Which operator is known as the insertion / put-to operator in C++?", questionTextTamil: "C++ மொழியில் செருக்கல் செயற்குறி (Insertion / Put to operator) எது?",
    options: { A: ">>", B: "<<", C: "::", D: "->" },
    optionsTamil: { A: ">>", B: "<<", C: "::", D: "->" },
    correctOption: "B", answer: "B) <<", answerTamil: "B) <<", isBookBack: true
  },
  {
    id: "cs11-ch9-1m-7", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 1, type: "mcq",
    questionText: "Which operator is known as the extraction / get-from operator in C++?", questionTextTamil: "C++ மொழியில் பிரித்தெடுத்தல் செயற்குறி (Extraction / Get from operator) எது?",
    options: { A: "<<", B: ">>", C: "&&", D: "&" },
    optionsTamil: { A: "<<", B: ">>", C: "&&", D: "&" },
    correctOption: "B", answer: "B) >>", answerTamil: "B) >>", isBookBack: true
  },
  {
    id: "cs11-ch9-1m-8", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 1, type: "mcq",
    questionText: "Which header file must be included for standard I/O operations in C++?", questionTextTamil: "C++ மொழியில் நிலையான உள்ளீடு/வெளியீட்டு செயல்பாடுகளுக்கு எந்த தலைப்புக் கோப்பு சேர்க்கப்பட வேண்டும்?",
    options: { A: "<stdio.h>", B: "<iostream>", C: "<conio.h>", D: "<math.h>" },
    optionsTamil: { A: "<stdio.h>", B: "<iostream>", C: "<conio.h>", D: "<math.h>" },
    correctOption: "B", answer: "B) <iostream>", answerTamil: "B) <iostream>", isBookBack: true
  },
  {
    id: "cs11-ch9-1m-9", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 1, type: "mcq",
    questionText: "What is the size of 'char' data type in C++ in bytes?", questionTextTamil: "C++ மொழியில் char தரவினத்தின் அளவு எத்தனை பைட்டுகள்?",
    options: { A: "1 Byte", B: "2 Bytes", C: "4 Bytes", D: "8 Bytes" },
    optionsTamil: { A: "1 பைட்", B: "2 பைட்டுகள்", C: "4 பைட்டுகள்", D: "8 பைட்டுகள்" },
    correctOption: "A", answer: "A) 1 Byte", answerTamil: "A) 1 பைட்", isBookBack: true
  },
  {
    id: "cs11-ch9-1m-10", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 1, type: "mcq",
    questionText: "What is the size of 'int' data type on 32-bit/64-bit compilers?", questionTextTamil: "32-பிட்/64-பிட் தொகுப்பான்களில் int தரவினத்தின் அளவு என்ன?",
    options: { A: "1 Byte", B: "2 Bytes", C: "4 Bytes", D: "8 Bytes" },
    optionsTamil: { A: "1 பைட்", B: "2 பைட்டுகள்", C: "4 பைட்டுகள்", D: "8 பைட்டுகள்" },
    correctOption: "C", answer: "C) 4 Bytes", answerTamil: "C) 4 பைட்டுகள்", isBookBack: true
  },
  {
    id: "cs11-ch9-1m-11", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 1, type: "mcq",
    questionText: "Which escape sequence represents a new line in C++?", questionTextTamil: "C++ மொழியில் புதிய வரியை குறிக்கும் விடுபடு வரிசை எது?",
    options: { A: "\\t", B: "\\n", C: "\\0", D: "\\a" },
    optionsTamil: { A: "\\t", B: "\\n", C: "\\0", D: "\\a" },
    correctOption: "B", answer: "B) \\n", answerTamil: "B) \\n", isBookBack: true
  },
  {
    id: "cs11-ch9-1m-12", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 1, type: "mcq",
    questionText: "Which of the following is a ternary operator in C++?", questionTextTamil: "பின்வருவனவற்றில் C++ மொழியின் மும்ம செயற்குறி (Ternary operator) எது?",
    options: { A: "::", B: "&&", C: "? :", D: "sizeof" },
    optionsTamil: { A: "::", B: "&&", C: "? :", D: "sizeof" },
    correctOption: "C", answer: "C) ? :", answerTamil: "C) ? :", isBookBack: true
  },
  {
    id: "cs11-ch9-1m-13", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 1, type: "mcq",
    questionText: "What is the result of integer division 7 / 2 in C++?", questionTextTamil: "C++ மொழியில் 7 / 2 என்ற முழு எண் வகுத்தலின் விடை என்ன?",
    options: { A: "3.5", B: "3", C: "4", D: "1" },
    optionsTamil: { A: "3.5", B: "3", C: "4", D: "1" },
    correctOption: "B", answer: "B) 3", answerTamil: "B) 3", isBookBack: true
  },
  {
    id: "cs11-ch9-1m-14", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 1, type: "mcq",
    questionText: "What is the result of modulo operation 7 % 2 in C++?", questionTextTamil: "C++ மொழியில் 7 % 2 என்பதன் விடை என்ன?",
    options: { A: "3.5", B: "3", C: "1", D: "0" },
    optionsTamil: { A: "3.5", B: "3", C: "1", D: "0" },
    correctOption: "C", answer: "C) 1", answerTamil: "C) 1", isBookBack: true
  },
  {
    id: "cs11-ch9-1m-15", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 1, type: "mcq",
    questionText: "Which operator returns the size in bytes of a variable or data type?", questionTextTamil: "ஒரு மாறி அல்லது தரவினத்தின் நினைவக அளவை பைட்டுகளில் தரும் செயற்குறி எது?",
    options: { A: "size()", B: "sizeof", C: "length", D: "capacity" },
    optionsTamil: { A: "size()", B: "sizeof", C: "length", D: "capacity" },
    correctOption: "B", answer: "B) sizeof", answerTamil: "B) sizeof", isBookBack: true
  },
  {
    id: "cs11-ch9-1m-16", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 1, type: "mcq",
    questionText: "Every C++ executable statement must terminate with which character?", questionTextTamil: "ஒவ்வொரு C++ கூற்றும் எந்த குறியீட்டுடன் முடிவடைய வேண்டும்?",
    options: { A: "Colon (:)", B: "Semicolon (;)", C: "Dot (.)", D: "Comma (,)" },
    optionsTamil: { A: "முக்காற்புள்ளி (:)", B: "அரைப்புள்ளி (;)", C: "புள்ளி (.)", D: "காற்புள்ளி (,)" },
    correctOption: "B", answer: "B) Semicolon (;)", answerTamil: "B) அரைப்புள்ளி (;)", isBookBack: true
  },
  {
    id: "cs11-ch9-1m-17", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 1, type: "mcq",
    questionText: "Which literal is enclosed in single quotes in C++?", questionTextTamil: "C++ மொழியில் ஒற்றை மேற்கோள் குறிக்குள் கொடுக்கப்படும் நிலைப்பொருள் எது?",
    options: { A: "Character constant", B: "String constant", C: "Numeric constant", D: "Boolean constant" },
    optionsTamil: { A: "உரு மாறிலி (Character constant)", B: "சர மாறிலி", C: "எண் மாறிலி", D: "பூலியன் மாறிலி" },
    correctOption: "A", answer: "A) Character constant", answerTamil: "A) உரு மாறிலி (Character constant)", isBookBack: true
  },
  {
    id: "cs11-ch9-1m-18", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 1, type: "mcq",
    questionText: "Which of the following is a relational operator?", questionTextTamil: "பின்வருவனவற்றில் ஒப்பீட்டு செயற்குறி (Relational operator) எது?",
    options: { A: "+=", B: "==", C: "&&", D: "&" },
    optionsTamil: { A: "+=", B: "==", C: "&&", D: "&" },
    correctOption: "B", answer: "B) ==", answerTamil: "B) ==", isBookBack: true
  },
  {
    id: "cs11-ch9-1m-19", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 1, type: "mcq",
    questionText: "How are single-line comments represented in C++?", questionTextTamil: "C++ மொழியில் ஒருவரி குறிப்புரைகள் எவ்வாறு குறிப்பிடப்படுகின்றன?",
    options: { A: "/* ... */", B: "//", C: "#", D: "<!-- -->" },
    optionsTamil: { A: "/* ... */", B: "//", C: "#", D: "<!-- -->" },
    correctOption: "B", answer: "B) //", answerTamil: "B) //", isBookBack: true
  },
  {
    id: "cs11-ch9-1m-20", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 1, type: "mcq",
    questionText: "Which keyword is used to declare a constant variable whose value cannot be changed?", questionTextTamil: "மதிப்பை மாற்ற முடியாத மாறிலியை அறிவிக்கப் பயன்படும் சிறப்புச்சொல் எது?",
    options: { A: "static", B: "const", C: "final", D: "fixed" },
    optionsTamil: { A: "static", B: "const", C: "final", D: "fixed" },
    correctOption: "B", answer: "B) const", answerTamil: "B) const", isBookBack: true
  },

  // 2 Marks (16)
  {
    id: "cs11-ch9-2m-1", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 2, type: "short",
    questionText: "What are Tokens in C++? List their types.", questionTextTamil: "C++ வில்லைகள் என்றால் என்ன? அவற்றின் வகைகளை எழுதுக.",
    answer: "Tokens are the smallest individual building blocks of a C++ program.\nTypes:\n1. Keywords\n2. Identifiers\n3. Literals (Constants)\n4. Operators\n5. Punctuators",
    answerTamil: "வில்லைகள் (Tokens) என்பது C++ நிரலின் மிகச்சிறிய அடிப்படை அலகுகள் ஆகும்.\nவகைகள்: சிறப்புச் சொற்கள் (Keywords), குறிப்பெயர்கள் (Identifiers), மாறிலிகள் (Literals), செயற்குறிகள் (Operators), நிறுத்தற்குறிகள் (Punctuators).", isBookBack: true
  },
  {
    id: "cs11-ch9-2m-2", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 2, type: "short",
    questionText: "What are Keywords? Give two examples.", questionTextTamil: "சிறப்புச் சொற்கள் (Keywords) என்றால் என்ன? இரண்டு எடுத்துக்காட்டுகள் தருக.",
    answer: "Keywords are reserved words that have predefined standard meanings in the C++ compiler. They cannot be used as identifier names.\nExamples: int, return, float, while, if.",
    answerTamil: "சிறப்புச் சொற்கள் என்பது C++ மொழிபெயர்ப்பியால் முன்னரே வரையறுக்கப்பட்ட நிலையான பொருளைக் கொண்ட முன்பதிவுச் சொற்கள் ஆகும்.\nஎடுத்துக்காட்டுகள்: int, return, float, if.", isBookBack: true
  },
  {
    id: "cs11-ch9-2m-3", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 2, type: "short",
    questionText: "What are Identifiers? State the naming rules.", questionTextTamil: "குறிப்பெயர்கள் என்றால் என்ன? அவற்றின் பெயரிடும் விதிகளைக் கூறுக.",
    answer: "Identifiers are user-defined names given to variables, functions, arrays, and classes.\nRules:\n1. Must begin with an alphabet or underscore (_).\n2. Can contain letters, digits, and underscores.\n3. Cannot contain special characters or spaces; cannot be a keyword.",
    answerTamil: "குறிப்பெயர்கள் (Identifiers) என்பது மாறிகள், செயற்கூறுகள், இனக்குழுக்களுக்குப் பயனரால் வழங்கப்படும் பெயர்கள் ஆகும்.\nவிதிகள்: எழுத்து அல்லது அடிக்கோட்டுடன் (_) தொடங்க வேண்டும்; சிறப்புச் சொற்களைப் பயன்படுத்தக் கூடாது; இடைவெளி இருக்கக் கூடாது.", isBookBack: true
  },
  {
    id: "cs11-ch9-2m-4", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 2, type: "short",
    questionText: "What are Literals (Constants) in C++?", questionTextTamil: "மாறிலிகள் (Literals) என்றால் என்ன?",
    answer: "Literals are fixed data values that do not change during program execution.\nTypes: Integer literals, Floating-point literals, Character literals, String literals, Boolean literals.",
    answerTamil: "மாறிலிகள் (Literals) என்பது நிரலின் செயல்பாட்டின் போது மாறாத நிலையான மதிப்புடைய தரவுகள் ஆகும். (எ.கா: எண் மாறிலி, உரு மாறிலி, சர மாறிலி).", isBookBack: true
  },
  {
    id: "cs11-ch9-2m-5", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 2, type: "short",
    questionText: "Differentiate between Character constant and String constant.", questionTextTamil: "உரு மாறிலி மற்றும் சர மாறிலி வேறுபடுத்துக.",
    answer: "Character Constant: A single character enclosed within single quotes (e.g. 'A', '5'); size is 1 byte.\nString Constant: A sequence of characters enclosed within double quotes terminated by null '\\0' (e.g. \"Tamil\"); size is (chars + 1) bytes.",
    answerTamil: "உரு மாறிலி (Character constant): ஒற்றை மேற்கோள் குறிக்குள் அடைக்கப்படும் ஒற்றை உரு (எ.கா: 'A').\nசர மாறிலி (String constant): இரட்டை மேற்கோள் குறிக்குள் அடைக்கப்படும் எழுத்துக்களின் வரிசை (எ.கா: \"Tamil\").", isBookBack: true
  },
  {
    id: "cs11-ch9-2m-6", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 2, type: "short",
    questionText: "What are Escape Sequences in C++?", questionTextTamil: "விடுபடு வரிசைகள் (Escape Sequences) என்றால் என்ன?",
    answer: "Escape sequences are non-printable character constants beginning with a backslash (\\) used for formatting output (e.g. '\\n' for newline, '\\t' for tab).",
    answerTamil: "விடுபடு வரிசைகள் என்பது பின்சாய்வுக் கோட்டுடன் (\\) தொடங்கும் அச்சிட முடியாத கட்டுப்பாட்டுக் குறியீடுகள் ஆகும் (எ.கா: '\\n' புதிய வரி, '\\t' தாவல் இடைவெளி).", isBookBack: true
  },
  {
    id: "cs11-ch9-2m-7", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 2, type: "short",
    questionText: "What is an Operator? Give examples of Arithmetic operators.", questionTextTamil: "செயற்குறி என்றால் என்ன? கணித செயற்குறிகளுக்கு எடுத்துக்காட்டு தருக.",
    answer: "An operator is a symbol that tells the compiler to perform specific mathematical, relational, or logical manipulations on operands.\nArithmetic Operators: + (Addition), - (Subtraction), * (Multiplication), / (Division), % (Modulus).",
    answerTamil: "செயற்குறி (Operator) என்பது செயலேற்பிகளின் மீது குறிப்பிட்ட கணித, தருக்கச் செயல்பாடுகளைச் செய்யப் பயன்படும் குறியீடாகும். (எ.கா: +, -, *, /, %).", isBookBack: true
  },
  {
    id: "cs11-ch9-2m-8", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 2, type: "short",
    questionText: "Differentiate between Prefix and Postfix increment operators.", questionTextTamil: "முன்னொட்டு மற்றும் பின்னொட்டு மிகுப்பு செயற்குறிகளை வேறுபடுத்துக.",
    answer: "Prefix (++x): Increments the value of x first, then uses the updated value in the expression.\nPostfix (x++): Uses the current value of x in the expression first, then increments the value.",
    answerTamil: "முன்னொட்டு (++x): முதலில் மாறியின் மதிப்பை 1 கூட்டி, பின் கோவையில் பயன்படுத்தும்.\nபின்னொட்டு (x++): கோவையில் தற்போதைய மதிப்பை முதலில் பயன்படுத்திவிட்டு, பின் 1 கூட்டும்.", isBookBack: true
  },
  {
    id: "cs11-ch9-2m-9", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 2, type: "short",
    questionText: "What are Relational Operators? List any four.", questionTextTamil: "ஒப்பீட்டுச் செயற்குறிகள் என்றால் என்ன? ஏதேனும் நான்கைக் குறிப்பிடுக.",
    answer: "Relational operators are used to compare two values or expressions, returning boolean True (1) or False (0).\nExamples: == (Equal to), != (Not equal to), > (Greater than), < (Less than), >=, <=.",
    answerTamil: "இரண்டு மதிப்புகளை ஒப்பிட்டு True (1) அல்லது False (0) என முடிவு தரும் செயற்குறிகள் ஒப்பீட்டுச் செயற்குறிகள் ஆகும். (எ.கா: ==, !=, >, <, >=, <=).", isBookBack: true
  },
  {
    id: "cs11-ch9-2m-10", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 2, type: "short",
    questionText: "What are Logical Operators in C++?", questionTextTamil: "C++ மொழியில் தருக்கச் செயற்குறிகள் யாவை?",
    answer: "Logical operators combine or invert relational expressions.\n1. && (Logical AND): True if both operands are true.\n2. || (Logical OR): True if at least one operand is true.\n3. ! (Logical NOT): Inverts the boolean truth value.",
    answerTamil: "1. && (தருக்க AND): இரண்டு நிபந்தனைகளும் மெய்யாக இருந்தால் மெய்.\n2. || (தருக்க OR): ஏதேனும் ஒரு நிபந்தனை மெய்யானாலும் மெய்.\n3. ! (தருக்க NOT): உண்மை மதிப்பை மாற்றியமைக்கும்.", isBookBack: true
  },
  {
    id: "cs11-ch9-2m-11", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 2, type: "short",
    questionText: "What is Conditional / Ternary Operator (? :)? Write its syntax.", questionTextTamil: "நிபந்தனை செயற்குறி (? :) என்றால் என்ன? அதன் தொடரியலை எழுதுக.",
    answer: "Ternary operator evaluates a condition and returns one of two expressions based on whether condition is true or false.\nSyntax: Expression1 ? Expression2 : Expression3;",
    answerTamil: "மூன்று செயலேற்பிகளை ஏற்கும் செயற்குறி நிபந்தனை செயற்குறி (? :) எனப்படும்.\nதொடரியல்: Condition ? Expression1 : Expression2;", isBookBack: true
  },
  {
    id: "cs11-ch9-2m-12", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 2, type: "short",
    questionText: "What are Fundamental / Primitive Data Types in C++?", questionTextTamil: "அடிப்படைத் தரவினங்கள் (Fundamental Data Types) என்றால் என்ன?",
    answer: "Fundamental data types are built-in types directly supported by the C++ language.\nCategories: char (character), int (integer), float / double (floating-point), void (empty), bool (boolean).",
    answerTamil: "C++ மொழியால் நேரடியாக வழங்கப்படும் உள்ளமைந்த தரவினங்கள் அடிப்படைத் தரவினங்கள் எனப்படும் (char, int, float, double, void, bool).", isBookBack: true
  },
  {
    id: "cs11-ch9-2m-13", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 2, type: "short",
    questionText: "What are Variables in C++? How are they declared?", questionTextTamil: "C++ மாறிகள் என்றால் என்ன? அவற்றை எவ்வாறு அறிவிக்க வேண்டும்?",
    answer: "Variables are named memory locations used to hold data values that can be modified during program execution.\nDeclaration Syntax: data_type variable_name; (e.g. int roll_no;).",
    answerTamil: "மாறிகள் (Variables) என்பது நினைவக இடங்களுக்கு வழங்கப்படும் பெயர்கள் ஆகும். இவற்றின் மதிப்பை நிரல் இயங்கும் போது மாற்றலாம்.\nஅறிவிப்பு: தரவினம் மாறியின்_பெயர்; (எ.கா: int mark;).", isBookBack: true
  },
  {
    id: "cs11-ch9-2m-14", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 2, type: "short",
    questionText: "What is cin and cout in C++?", questionTextTamil: "C++ மொழியில் cin மற்றும் cout என்றால் என்ன?",
    answer: "cin: Standard predefined input stream object (associated with keyboard) used with extraction operator (>>).\ncout: Standard predefined output stream object (associated with monitor screen) used with insertion operator (<<).",
    answerTamil: "cin: விசைப்பலகையிலிருந்து உள்ளீட்டைப் பெறப் பயன்படும் உள்ளீட்டு ஸ்ட்ரீம் பொருள் (>> செயற்குறியுடன் பயன்படும்).\ncout: திரையில் வெளியீட்டை அச்சிடப் பயன்படும் வெளியீட்டு ஸ்ட்ரீம் பொருள் (<< செயற்குறியுடன் பயன்படும்).", isBookBack: true
  },
  {
    id: "cs11-ch9-2m-15", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 2, type: "short",
    questionText: "What is Cascading of I/O operators in C++?", questionTextTamil: "உள்ளீடு / வெளியீட்டு செயற்குறிகளை அடுக்குதல் (Cascading) என்றால் என்ன?",
    answer: "Cascading means using multiple insertion (<<) or extraction (>>) operators in a single statement to output or input multiple values sequentially.\nExample: cout << \"A = \" << a << \" B = \" << b;",
    answerTamil: "ஒரே கூற்றில் ஒன்றுக்கும் மேற்பட்ட << அல்லது >> செயற்குறிகளைத் தொடர்ச்சியாகப் பயன்படுத்தி பல மதிப்புகளை உள்ளிட அல்லது வெளியிட செய்வது அடுக்குதல் (Cascading) எனப்படும்.", isBookBack: true
  },
  {
    id: "cs11-ch9-2m-16", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 2, type: "short",
    questionText: "What are Punctuators in C++? Give examples.", questionTextTamil: "நிறுத்தற்குறிகள் (Punctuators) என்றால் என்ன? எடுத்துக்காட்டுகள் தருக.",
    answer: "Punctuators (separators) are symbols that have syntactic meaning in structuring code.\nExamples: Semicolon (;), Braces ({ }), Parentheses (( )), Commas (,), Square Brackets ([ ]).",
    answerTamil: "நிறுத்தற்குறிகள் என்பது நிரல் கூற்றுகளையும் தொகுதிகளையும் ஒழுங்கமைக்கப் பயன்படும் குறியீடுகள் ஆகும் (எ.கா: அரைப்புள்ளி ;, நெளிவு அடைப்புக்குறி {}, அடைப்புக்குறி ()).", isBookBack: true
  },

  // 3 Marks (8)
  {
    id: "cs11-ch9-3m-1", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 3, type: "brief",
    questionText: "Explain the structure of a C++ program with an example.", questionTextTamil: "C++ நிரலின் கட்டமைப்பை எடுத்துக்காட்டுடன் விளக்குக.",
    answer: "Structure:\n1. Header file inclusions (#include <iostream>)\n2. Namespace declaration (using namespace std;)\n3. Main function entry point (int main() { ... })\n4. Variable declarations, executable statements, and return 0.",
    answerTamil: "C++ நிரலின் கட்டமைப்பு:\n1. தலைப்புக் கோப்புகள் சேர்த்தல் (#include <iostream>)\n2. பெயர் இடைவெளி அறிவிப்பு (using namespace std;)\n3. முதன்மை செயற்கூறு (int main())\n4. மாறி அறிவிப்பு மற்றும் கூற்றுகள்\n5. return 0;", isBookBack: true
  },
  {
    id: "cs11-ch9-3m-2", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 3, type: "brief",
    questionText: "Explain Type Conversion (Type Casting) in C++: Implicit vs Explicit.", questionTextTamil: "C++ தரவின மாற்றம் (Type conversion) - உள்ளார்ந்த மற்றும் வெளிப்படையான மாற்றம் விளக்குக.",
    answer: "1. Implicit Type Conversion (Coercion): Automatically performed by the compiler when evaluating mixed expressions from smaller to wider type without data loss.\n2. Explicit Type Conversion (Type Casting): Explicitly forced by programmer using cast syntax: (type) expression.",
    answerTamil: "1. உள்ளார்ந்த தரவு மாற்றம் (Implicit): சிறிய வகை தரவை பெரிய வகை தரவாக மொழிபெயர்ப்பியே தானாக மாற்றும்.\n2. வெளிப்படையான தரவு மாற்றம் (Explicit / Type casting): நிரலரால் கட்டாயமாகத் தரவு வகை மாற்றம் செய்யப்படும் (எ.கா: (float) a / b).", isBookBack: true
  },
  {
    id: "cs11-ch9-3m-3", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 3, type: "brief",
    questionText: "What are Short-hand / Compound Assignment operators in C++? Give examples.", questionTextTamil: "குறுக்குவழி மதிப்பிருத்தல் செயற்குறிகள் (Compound assignment operators) என்றால் என்ன? எடுத்துக்காட்டுகள் தருக.",
    answer: "Compound assignment operators combine arithmetic or bitwise operations with assignment.\nExamples:\nx += 5; (equivalent to x = x + 5)\nx -= 2; (equivalent to x = x - 2)\nx *= 3; (equivalent to x = x * 3)\nx /= y; (equivalent to x = x / y)\nx %= 10; (equivalent to x = x % 10).",
    answerTamil: "கணிதச் செயற்குறியையும் மதிப்பிருத்தல் செயற்குறியையும் இணைத்து சுருக்கமாகப் பயன்படுத்தும் செயற்குறிகள் குறுக்குவழி மதிப்பிருத்தல் செயற்குறிகள் எனப்படும்.\n(எ.கா: x += 5; x -= 2; x *= 3; x /= y; x %= 10;).", isBookBack: true
  },
  {
    id: "cs11-ch9-3m-4", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 3, type: "brief",
    questionText: "Explain Bitwise Operators in C++ with examples.", questionTextTamil: "C++ பிட்நிலை செயற்குறிகளை (Bitwise operators) எடுத்துக்காட்டுடன் விளக்குக.",
    answer: "Bitwise operators perform bit-by-bit boolean operations on integer operands:\n1. & (Bitwise AND)\n2. | (Bitwise OR)\n3. ^ (Bitwise XOR)\n4. ~ (Bitwise NOT / Complement)\n5. << (Shift Left), >> (Shift Right).",
    answerTamil: "முழு எண்களின் பிட்டுகளின் மீது நேரடியாகச் செயல்படும் செயற்குறிகள் பிட்நிலை செயற்குறிகள் ஆகும்.\n1. & (பிட்நிலை AND)\n2. | (பிட்நிலை OR)\n3. ^ (பிட்நிலை XOR)\n4. ~ (பிட்நிலை NOT)\n5. << (இடது நகர்வு), >> (வலது நகர்வு).", isBookBack: true
  },
  {
    id: "cs11-ch9-3m-5", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 3, type: "brief",
    questionText: "What are Data Type Modifiers in C++? Name them.", questionTextTamil: "தரவின மாற்றிகள் (Data Type Modifiers) என்றால் என்ன? அவற்றின் பெயர்களை எழுதுக.",
    answer: "Data type modifiers alter the storage size and range of basic fundamental data types to suit specific needs.\nModifiers:\n1. signed\n2. unsigned\n3. short\n4. long\nExample: unsigned long int.",
    answerTamil: "அடிப்படைத் தரவினங்களின் நினைவக அளவு மற்றும் மதிப்புகளின் வரம்பை மாற்றியமைக்கப் பயன்படும் சொற்கள் தரவின மாற்றிகள் எனப்படும்.\nமாற்றிகள்: signed, unsigned, short, long.", isBookBack: true
  },
  {
    id: "cs11-ch9-3m-6", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 3, type: "brief",
    questionText: "Write a C++ program to find the Area and Perimeter of a circle.", questionTextTamil: "வட்டத்தின் பரப்பளவு மற்றும் சுற்றளவைக் காணும் C++ நிரலை எழுதுக.",
    answer: "#include <iostream>\nusing namespace std;\nint main() {\n    float radius, area, perimeter;\n    const float PI = 3.14159;\n    cout << \"Enter radius: \";\n    cin >> radius;\n    area = PI * radius * radius;\n    perimeter = 2 * PI * radius;\n    cout << \"Area = \" << area << endl;\n    cout << \"Perimeter = \" << perimeter << endl;\n    return 0;\n}",
    answerTamil: "#include <iostream>\nusing namespace std;\nint main() {\n    float radius, area, perimeter;\n    const float PI = 3.14159;\n    cout << \"ஆரத்தை உள்ளிடவும்: \";\n    cin >> radius;\n    area = PI * radius * radius;\n    perimeter = 2 * PI * radius;\n    cout << \"பரப்பளவு = \" << area << endl;\n    cout << \"சுற்றளவு = \" << perimeter << endl;\n    return 0;\n}", isBookBack: true
  },
  {
    id: "cs11-ch9-3m-7", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 3, type: "brief",
    questionText: "Write a C++ program to swap two numbers using a temporary variable.", questionTextTamil: "மூன்றாவது மாறியைப் பயன்படுத்தி இரண்டு எண்களை இடமாற்றம் செய்யும் C++ நிரலை எழுதுக.",
    answer: "#include <iostream>\nusing namespace std;\nint main() {\n    int a, b, temp;\n    cout << \"Enter two numbers: \";\n    cin >> a >> b;\n    temp = a;\n    a = b;\n    b = temp;\n    cout << \"After swapping: a = \" << a << \", b = \" << b << endl;\n    return 0;\n}",
    answerTamil: "#include <iostream>\nusing namespace std;\nint main() {\n    int a, b, temp;\n    cout << \"இரு எண்களை உள்ளிடவும்: \";\n    cin >> a >> b;\n    temp = a;\n    a = b;\n    b = temp;\n    cout << \"மாற்றத்திற்குப் பின்: a = \" << a << \", b = \" << b << endl;\n    return 0;\n}", isBookBack: true
  },
  {
    id: "cs11-ch9-3m-8", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 3, type: "brief",
    questionText: "What is Operator Precedence and Associativity? Explain with an example.", questionTextTamil: "செயற்குறி முன்னுரிமை மற்றும் தொடர்புடைமை என்றால் என்ன? எடுத்துக்காட்டு தருக.",
    answer: "Precedence determines the evaluation order of operators in an expression with multiple operators (e.g. * and / have higher precedence than + and -).\nAssociativity determines evaluation direction (Left-to-Right or Right-to-Left) when operators of equal precedence appear.\nExample: In 5 + 3 * 2, multiplication evaluates first: 5 + 6 = 11.",
    answerTamil: "முன்னுரிமை (Precedence): ஒரு கோவையில் பல செயற்குறிகள் வரும் போது எந்தச் செயல் முதலில் நிகழ வேண்டும் என்பதைத் தீர்மானிக்கிறது (* மற்றும் / கூட்டலை விட அதிக முன்னுரிமை கொண்டவை).\nதொடர்புடைமை: சம முன்னுரிமை கொண்ட செயற்குறிகள் வரும்போது இடமிருந்து வலமாகவா அல்லது வலமிருந்து இடமாகவா கணக்கிடப்பட வேண்டும் என்பதைக் குறிக்கும்.", isBookBack: true
  },

  // 5 Marks (3)
  {
    id: "cs11-ch9-5m-1", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 5, type: "essay",
    questionText: "Explain the classification of Operators in C++ with suitable examples.", questionTextTamil: "C++ மொழியில் உள்ள பல்வேறு வகையான செயற்குறிகளை தகுந்த எடுத்துக்காட்டுகளுடன் விரிவாக விளக்குக.",
    answer: "Operators in C++ are classified based on function and number of operands:\n1. Arithmetic Operators: +, -, *, /, %\n2. Relational Operators: ==, !=, >, <, >=, <=\n3. Logical Operators: &&, ||, !\n4. Assignment and Compound Assignment Operators: =, +=, -=, *=, /=, %=\n5. Increment/Decrement Operators: ++ (prefix/postfix), --\n6. Conditional (Ternary) Operator: ? :\n7. Bitwise Operators: &, |, ^, ~, <<, >>\n8. Special Operators: sizeof, comma (,), scope resolution (::).",
    answerTamil: "C++ செயற்குறிகளின் வகைகள்:\n1. கணிதச் செயற்குறிகள்: +, -, *, /, %\n2. ஒப்பீட்டுச் செயற்குறிகள்: ==, !=, >, <, >=, <=\n3. தருக்கச் செயற்குறிகள்: &&, ||, !\n4. மதிப்பிருத்தல் செயற்குறிகள்: =, +=, -=, *=, /=\n5. மிகுப்பு / குறைப்பு செயற்குறிகள்: ++, --\n6. நிபந்தனை செயற்குறி: ? :\n7. பிட்நிலை செயற்குறிகள்: &, |, ^, ~, <<, >>\n8. சிறப்பு செயற்குறிகள்: sizeof, அரைப்புள்ளி, :: (வரையெல்லை தீர்வு செயற்குறி).", isBookBack: true
  },
  {
    id: "cs11-ch9-5m-2", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 5, type: "essay",
    questionText: "Explain Fundamental Data Types and their sizes/modifiers in C++ in detail.", questionTextTamil: "C++ மொழியில் உள்ள அடிப்படைத் தரவினங்கள், அவற்றின் அளவுகள் மற்றும் மாற்றிகள் பற்றி விரிவாக எழுதுக.",
    answer: "1. Integral Types:\n- int: Integer numbers (4 bytes, -2^31 to 2^31-1)\n- short int (2 bytes), long int (4/8 bytes)\n- unsigned int: Positive integers only (4 bytes, 0 to 2^32-1)\n2. Character Type:\n- char: Single ASCII character (1 byte, -128 to 127)\n- unsigned char: (1 byte, 0 to 255)\n3. Floating Point Types:\n- float: Single precision fractional values (4 bytes, 7 digits precision)\n- double: Double precision (8 bytes, 15 digits precision)\n- long double: Extended precision (10/16 bytes)\n4. Boolean Type: bool (1 byte, true or false)\n5. Void Type: void (0 bytes, represents no value / empty).",
    answerTamil: "1. முழு எண் தரவினம் (int): 4 பைட்டுகள், முழு எண்களைச் சேமிக்கும். (short, long, unsigned மாற்றிகள் உண்டு).\n2. உரு வகை (char): 1 பைட், எழுத்துக் குறியீடுகளைச் சேமிக்கும் (-128 முதல் 127 வரை).\n3. மிதப்புப் புள்ளி வகை:\n   - float: 4 பைட்டுகள், தசம எண்கள் (7 தசம இலக்கங்கள்).\n   - double: 8 பைட்டுகள், இரட்டை துல்லிய தசம எண்கள் (15 இலக்கங்கள்).\n   - long double: 10/16 பைட்டுகள்.\n4. பூலியன் வகை (bool): 1 பைட், true (1) அல்லது false (0).\n5. வெற்றிட வகை (void): 0 பைட், மதிப்பு எதுவும் இல்லாததைக் குறிக்கும்.", isBookBack: true
  },
  {
    id: "cs11-ch9-5m-3", chapterNo: 9, chapterName: "Introduction to C++", chapterNameTamil: "C++ ஓர் அறிமுகம்", marks: 5, type: "essay",
    questionText: "Explain the standard Input and Output streams (cin, cout) in C++ with complete working program.", questionTextTamil: "C++ மொழியில் நிலையான உள்ளீடு மற்றும் வெளியீட்டு ஸ்ட்ரீம்கள் (cin, cout) பற்றி முழுமையான மாதிரி நிரலுடன் விளக்குக.",
    answer: "Standard I/O Streams in C++:\n- Provided via <iostream> header file in 'std' namespace.\n- cout (Character Output): Predefined object of ostream class connected to standard output display. Uses overloaded insertion operator (<<).\n- cin (Character Input): Predefined object of istream class connected to standard input keyboard. Uses overloaded extraction operator (>>).\n\nWorking Program:\n#include <iostream>\nusing namespace std;\nint main() {\n    int student_id;\n    float marks;\n    cout << \"Enter Student ID and Marks: \";\n    cin >> student_id >> marks; // Cascaded input\n    cout << \"\\n--- Report ---\\n\";\n    cout << \"Student ID: \" << student_id << endl;\n    cout << \"Marks: \" << marks << endl;\n    return 0;\n}",
    answerTamil: "C++ உள்ளீடு மற்றும் வெளியீட்டு ஸ்ட்ரீம்கள்:\n- <iostream> தலைப்புக் கோப்பில் வரையறுக்கப்பட்டுள்ளன.\n- cout: நிலையான வெளியீட்டு சாதனம் (திரை). << (செருக்கல் செயற்குறி) உடன் பயன்படும்.\n- cin: நிலையான உள்ளீட்டு சாதனம் (விசைப்பலகை). >> (பிரித்தெடுத்தல் செயற்குறி) உடன் பயன்படும்.\n\nமாதிரி நிரல்:\n#include <iostream>\nusing namespace std;\nint main() {\n    int reg_no;\n    float mark;\n    cout << \"பதிவு எண் மற்றும் மதிப்பெண் உள்ளிடவும்: \";\n    cin >> reg_no >> mark;\n    cout << \"பதிவு எண்: \" << reg_no << endl;\n    cout << \"மதிப்பெண்: \" << mark << endl;\n    return 0;\n}", isBookBack: true, isCompulsoryEligible: true
  }
];

fs.writeFileSync('./scripts/ch9.json', JSON.stringify(ch9, null, 2));
console.log('Ch9 built successfully with', ch9.length, 'questions');
