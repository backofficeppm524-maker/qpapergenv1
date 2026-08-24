import fs from 'fs';

// ==========================================
// CHAPTER 11: Functions (செயற்கூறுகள்)
// 1M: 6, 2M: 6, 3M: 4, 5M: 3 (Total: 19)
// ==========================================
const ch11 = [
  // 1 Marks (6)
  {
    id: "cs11-ch11-1m-1", chapterNo: 11, chapterName: "Functions", chapterNameTamil: "செயற்கூறுகள்", marks: 1, type: "mcq",
    questionText: "Which header file provides sqrt(), pow(), and sin() mathematical functions in C++?", questionTextTamil: "C++ மொழியில் sqrt(), pow(), மற்றும் sin() போன்ற கணித செயற்கூறுகளை வழங்கும் தலைப்புக் கோப்பு எது?",
    options: { A: "<math.h> or <cmath>", B: "<stdio.h>", C: "<ctype.h>", D: "<string.h>" },
    optionsTamil: { A: "<math.h> அல்லது <cmath>", B: "<stdio.h>", C: "<ctype.h>", D: "<string.h>" },
    correctOption: "A", answer: "A) <math.h> or <cmath>", answerTamil: "A) <math.h> அல்லது <cmath>", isBookBack: true
  },
  {
    id: "cs11-ch11-1m-2", chapterNo: 11, chapterName: "Functions", chapterNameTamil: "செயற்கூறுகள்", marks: 1, type: "mcq",
    questionText: "Which function converts a lowercase character to uppercase in <ctype.h>?", questionTextTamil: "<ctype.h>-ல் சிறிய எழுத்தை பெரிய எழுத்தாக மாற்றும் செயற்கூறு எது?",
    options: { A: "isupper()", B: "toupper()", C: "tolower()", D: "islower()" },
    optionsTamil: { A: "isupper()", B: "toupper()", C: "tolower()", D: "islower()" },
    correctOption: "B", answer: "B) toupper()", answerTamil: "B) toupper()", isBookBack: true
  },
  {
    id: "cs11-ch11-1m-3", chapterNo: 11, chapterName: "Functions", chapterNameTamil: "செயற்கூறுகள்", marks: 1, type: "mcq",
    questionText: "The arguments passed in a function call statement are called:", questionTextTamil: "செயற்கூறு அழைப்புக் கூற்றில் அனுப்பப்படும் அளபுருக்கள் எவ்வாறு அழைக்கப்படுகின்றன?",
    options: { A: "Formal parameters", B: "Actual parameters", C: "Default parameters", D: "Reference parameters" },
    optionsTamil: { A: "முறைசார் அளபுருக்கள்", B: "மெய் அளபுருக்கள் (Actual parameters)", C: "கொடாநிலை அளபுருக்கள்", D: "குறிப்பு அளபுருக்கள்" },
    correctOption: "B", answer: "B) Actual parameters", answerTamil: "B) மெய் அளபுருக்கள் (Actual parameters)", isBookBack: true
  },
  {
    id: "cs11-ch11-1m-4", chapterNo: 11, chapterName: "Functions", chapterNameTamil: "செயற்கூறுகள்", marks: 1, type: "mcq",
    questionText: "The parameters defined in the function header definition are called:", questionTextTamil: "செயற்கூறு வரையறையின் தலைப்பில் வரையறுக்கப்படும் மாறிகள் எவ்வாறு அழைக்கப்படுகின்றன?",
    options: { A: "Actual arguments", B: "Formal parameters", C: "Global variables", D: "Static variables" },
    optionsTamil: { A: "மெய் அளபுருக்கள்", B: "முறைசார் அளபுருக்கள் (Formal parameters)", C: "முழுதளாவிய மாறிகள்", D: "நிலையான மாறிகள்" },
    correctOption: "B", answer: "B) Formal parameters", answerTamil: "B) முறைசார் அளபுருக்கள் (Formal parameters)", isBookBack: true
  },
  {
    id: "cs11-ch11-1m-5", chapterNo: 11, chapterName: "Functions", chapterNameTamil: "செயற்கூறுகள்", marks: 1, type: "mcq",
    questionText: "Which keyword is used to qualify a function to be expanded in-line at the point of call?", questionTextTamil: "அழைக்கப்படும் இடத்திலேயே செயற்கூற்றின் உடற்பகுதியை பதிலீடு செய்ய வைக்கும் சிறப்புச்சொல் எது?",
    options: { A: "inline", B: "virtual", C: "friend", D: "static" },
    optionsTamil: { A: "inline", B: "virtual", C: "friend", D: "static" },
    correctOption: "A", answer: "A) inline", answerTamil: "A) inline", isBookBack: true
  },
  {
    id: "cs11-ch11-1m-6", chapterNo: 11, chapterName: "Functions", chapterNameTamil: "செயற்கூறுகள்", marks: 1, type: "mcq",
    questionText: "What is the return type of a function that returns no value?", questionTextTamil: "மதிப்பை திருப்பி அனுப்பாத செயற்கூறின் தரவினம் எது?",
    options: { A: "int", B: "void", C: "null", D: "char" },
    optionsTamil: { A: "int", B: "void", C: "null", D: "char" },
    correctOption: "B", answer: "B) void", answerTamil: "B) void", isBookBack: true
  },

  // 2 Marks (6)
  {
    id: "cs11-ch11-2m-1", chapterNo: 11, chapterName: "Functions", chapterNameTamil: "செயற்கூறுகள்", marks: 2, type: "short",
    questionText: "Define a Function in C++.", questionTextTamil: "C++ செயற்கூறு வரையறுக்கவும்.",
    answer: "A function is a named subprogram / self-contained block of code designed to perform a specific task when invoked.",
    answerTamil: "செயற்கூறு (Function) என்பது ஒரு குறிப்பிட்ட பணியைச் செய்வதற்காக எழுதப்பட்டு பெயரிடப்பட்ட துணை நிரலாகும்.", isBookBack: true
  },
  {
    id: "cs11-ch11-2m-2", chapterNo: 11, chapterName: "Functions", chapterNameTamil: "செயற்கூறுகள்", marks: 2, type: "short",
    questionText: "What is Function Prototype (Declaration)?", questionTextTamil: "செயற்கூறு முன்வடிவம் (Function Prototype) என்றால் என்ன?",
    answer: "A function prototype informs the compiler about the function's name, return type, and parameter list before its actual definition and call.",
    answerTamil: "செயற்கூற்றின் பெயர், அது திருப்பி அனுப்பும் தரவினம் மற்றும் ஏற்கும் அளபுருக்களின் பட்டியல் ஆகியவற்றை மொழிபெயர்ப்பிக்கு முன்கூட்டியே அறிவிப்பது செயற்கூறு முன்வடிவம் எனப்படும்.", isBookBack: true
  },
  {
    id: "cs11-ch11-2m-3", chapterNo: 11, chapterName: "Functions", chapterNameTamil: "செயற்கூறுகள்", marks: 2, type: "short",
    questionText: "Differentiate between Actual Parameters and Formal Parameters.", questionTextTamil: "மெய் அளபுருக்கள் மற்றும் முறைசார் அளபுருக்களை வேறுபடுத்துக.",
    answer: "Actual Parameters: Arguments passed in the function call (e.g. add(x, y);).\nFormal Parameters: Variables declared in the function definition header that receive values from actual parameters (e.g. void add(int a, int b)).",
    answerTamil: "மெய் அளபுருக்கள் (Actual): செயற்கூறு அழைப்புக் கூற்றில் அனுப்பப்படும் மாறிகள் அல்லது மதிப்புகள்.\nமுறைசார் அளபுருக்கள் (Formal): செயற்கூறு வரையறையின் தலைப்பில் மதிப்புகளைப் பெற அறிவிக்கப்படும் மாறிகள்.", isBookBack: true
  },
  {
    id: "cs11-ch11-2m-4", chapterNo: 11, chapterName: "Functions", chapterNameTamil: "செயற்கூறுகள்", marks: 2, type: "short",
    questionText: "What are Default Arguments in C++?", questionTextTamil: "கொடாநிலை அளபுருக்கள் (Default Arguments) என்றால் என்ன?",
    answer: "Default arguments are parameter values assigned in the function prototype/header that are automatically used if caller omits corresponding actual arguments.\nExample: void display(int count = 1);",
    answerTamil: "செயற்கூறை அழைக்கும் போது அளபுருக்களுக்கு மதிப்பு கொடுக்கப்படவில்லை எனில், தானாகவே எடுத்துக்கொள்ள செயற்கூறு வரையறையில் முன்னிருப்பாகக் கொடுக்கப்படும் மதிப்புகள் கொடாநிலை அளபுருக்கள் எனப்படும்.", isBookBack: true
  },
  {
    id: "cs11-ch11-2m-5", chapterNo: 11, chapterName: "Functions", chapterNameTamil: "செயற்கூறுகள்", marks: 2, type: "short",
    questionText: "What is an Inline Function?", questionTextTamil: "உள்வரி செயற்கூறு (Inline Function) என்றால் என்ன?",
    answer: "An inline function is a function prefixed with 'inline' keyword where compiler replaces the function call with the actual function code at compile time, eliminating function call overhead.",
    answerTamil: "'inline' சிறப்புச் சொல்லுடன் அறிவிக்கப்படும் சிறிய செயற்கூறுகள் உள்வரி செயற்கூறுகள் எனப்படும். இவை அழைக்கப்படும் இடத்திலேயே அதன் குறியீடு விரிவுபடுத்தப்பட்டு அழைப்புக்கான நேரம் மிச்சப்படுத்தப்படுகிறது.", isBookBack: true
  },
  {
    id: "cs11-ch11-2m-6", chapterNo: 11, chapterName: "Functions", chapterNameTamil: "செயற்கூறுகள்", marks: 2, type: "short",
    questionText: "What is Variable Scope? List its types in C++.", questionTextTamil: "மாறியின் வரையெல்லை (Scope) என்றால் என்ன? அதன் வகைகளைக் கூறுக.",
    answer: "Scope refers to the accessibility and visibility of a variable within a program.\nTypes:\n1. Local Scope (block)\n2. Function Scope\n3. File / Global Scope\n4. Class Scope.",
    answerTamil: "ஒரு மாறியை நிரலின் எந்தெந்த பகுதிகளில் அணுக முடியும் என்பதை வரையறுப்பது வரையெல்லை ஆகும்.\nவகைகள்: உள்ளூர் வரையெல்லை (Local), செயற்கூறு வரையெல்லை, முழுதளாவிய வரையெல்லை (Global), இனக்குழு வரையெல்லை (Class).", isBookBack: true
  },

  // 3 Marks (4)
  {
    id: "cs11-ch11-3m-1", chapterNo: 11, chapterName: "Functions", chapterNameTamil: "செயற்கூறுகள்", marks: 3, type: "brief",
    questionText: "Differentiate between Call by Value and Call by Reference.", questionTextTamil: "மதிப்பு மூலம் அழைத்தல் மற்றும் குறிப்பு மூலம் அழைத்தல் வேறுபடுத்துக.",
    answer: "Call by Value:\n1. Copies value of actual argument to formal parameter.\n2. Changes made in function do NOT affect original variable.\n3. Requires separate memory.\n\nCall by Reference:\n1. Passes reference (memory address) using '&'.\n2. Changes made in function directly modify original variable.\n3. Uses same memory location.",
    answerTamil: "மதிப்பு மூலம் அழைத்தல் (Call by Value):\n1. மெய் அளபுருவின் நகல் முறைசார் அளபுருவிற்கு அனுப்பப்படும்.\n2. செயற்கூறில் செய்யப்படும் மாற்றம் மூல மாறியைப் பாதிக்காது.\n\nகுறிப்பு மூலம் அழைத்தல் (Call by Reference):\n1. மாறியின் நினைவக முகவரி (&) அனுப்பப்படும்.\n2. செயற்கூறில் செய்யப்படும் மாற்றம் மூல மாறியை நேரடியாக மாற்றும்.", isBookBack: true
  },
  {
    id: "cs11-ch11-3m-2", chapterNo: 11, chapterName: "Functions", chapterNameTamil: "செயற்கூறுகள்", marks: 3, type: "brief",
    questionText: "What are the rules for using Default Arguments in C++?", questionTextTamil: "C++ மொழியில் கொடாநிலை அளபுருக்களைப் பயன்படுத்துவதற்கான விதிகள் யாவை?",
    answer: "1. Default arguments must be assigned from right to left in parameter list.\n2. You cannot give a default value to a left parameter without giving defaults to all parameters to its right.\n3. Default values should be specified in the function prototype (declaration), not repeated in definition.",
    answerTamil: "1. கொடாநிலை மதிப்புகள் அளபுருக்கள் பட்டியலில் வலமிருந்து இடமாகவே வழங்கப்பட வேண்டும்.\n2. வலதுபுற அளபுருக்களுக்கு கொடாநிலை மதிப்பு கொடுக்காமல் இடதுபுற அளபுருவுக்கு மட்டும் வழங்க முடியாது.\n3. கொடாநிலை மதிப்புகள் பொதுவாக முன்வடிவிலேயே அறிவிக்கப்பட வேண்டும்.", isBookBack: true
  },
  {
    id: "cs11-ch11-3m-3", chapterNo: 11, chapterName: "Functions", chapterNameTamil: "செயற்கூறுகள்", marks: 3, type: "brief",
    questionText: "Explain any three built-in string functions in <string.h> / <cstring>.", questionTextTamil: "<cstring> தலைப்புக் கோப்பில் உள்ள ஏதேனும் மூன்று சரச் செயற்கூறுகளை விளக்குக.",
    answer: "1. strlen(str): Returns length of string (number of characters excluding '\\0').\n2. strcpy(dest, src): Copies source string to destination string.\n3. strcat(str1, str2): Appends (concatenates) str2 to the end of str1.\n4. strcmp(str1, str2): Compares two strings lexicographically.",
    answerTamil: "1. strlen(str): சரத்தின் நீளத்தை (எழுத்துக்களின் எண்ணிக்கை) கணக்கிடும்.\n2. strcpy(dest, src): மூலச் சரத்தை இலக்குச் சரத்திற்கு நகலெடுக்கும்.\n3. strcat(str1, str2): இரு சரங்களை ஒன்றாக இணைக்கும்.\n4. strcmp(str1, str2): இரு சரங்களை ஒப்பிடும்.", isBookBack: true
  },
  {
    id: "cs11-ch11-3m-4", chapterNo: 11, chapterName: "Functions", chapterNameTamil: "செயற்கூறுகள்", marks: 3, type: "brief",
    questionText: "What is Recursion? Write a recursive C++ function to calculate Factorial.", questionTextTamil: "தற்சுழற்சி என்றால் என்ன? காரணி (Factorial) காணும் C++ தற்சுழற்சி செயற்கூற்றை எழுதுக.",
    answer: "Recursion is a programming technique where a function calls itself directly or indirectly to solve smaller sub-problems.\n\nCode:\nlong factorial(int n) {\n    if (n <= 1)\n        return 1; // Base condition\n    else\n        return n * factorial(n - 1); // Recursive call\n}",
    answerTamil: "ஒரு செயற்கூறு தன்னைத்தானே மீண்டும் மீண்டும் அழைத்துக் கொள்ளும் நிரலாக்க முறை தற்சுழற்சி எனப்படும்.\n\nகுறிமுறை:\nlong factorial(int n) {\n    if (n <= 1) return 1;\n    else return n * factorial(n - 1);\n}", isBookBack: true
  },

  // 5 Marks (3)
  {
    id: "cs11-ch11-5m-1", chapterNo: 11, chapterName: "Functions", chapterNameTamil: "செயற்கூறுகள்", marks: 5, type: "essay",
    questionText: "Explain parameter passing methods in C++: Call by Value and Call by Reference with complete working programs.", questionTextTamil: "C++ மொழியில் அளபுருக்களை அனுப்பும் முறைகளான மதிப்பு மூலம் அழைத்தல் மற்றும் குறிப்பு மூலம் அழைத்தல் ஆகியவற்றை முழுமையான நிரலுடன் விளக்குக.",
    answer: "1. Call by Value: Value is copied to formal arguments. Modifications inside function do not reflect on actual arguments.\n2. Call by Reference: Address/reference of actual arguments is passed using reference operator (&). Modifications directly alter original variables.\n\nWorking Program:\n#include <iostream>\nusing namespace std;\nvoid swapByVal(int a, int b) {\n    int temp = a; a = b; b = temp;\n}\nvoid swapByRef(int &a, int &b) {\n    int temp = a; a = b; b = temp;\n}\nint main() {\n    int x = 10, y = 20;\n    swapByVal(x, y);\n    cout << \"After Call by Value: x=\" << x << \" y=\" << y << endl; // 10, 20\n    swapByRef(x, y);\n    cout << \"After Call by Reference: x=\" << x << \" y=\" << y << endl; // 20, 10\n    return 0;\n}",
    answerTamil: "1. மதிப்பு மூலம் அழைத்தல்: மெய் மாறிகளின் நகல் அனுப்பப்படுகிறது. உள்ளே செய்யப்படும் மாற்றம் மூல மாறிகளைப் பாதிக்காது.\n2. குறிப்பு மூலம் அழைத்தல்: மாறிகளின் நினைவக குறிப்பு (&) அனுப்பப்படுகிறது. உள்ளே செய்யப்படும் மாற்றம் மூல மாறிகளில் நேரடியாகப் பிரதிபலிக்கும்.\n\nமாதிரி நிரல்:\n#include <iostream>\nusing namespace std;\nvoid swapByRef(int &a, int &b) {\n    int temp = a; a = b; b = temp;\n}\nint main() {\n    int x = 10, y = 20;\n    swapByRef(x, y);\n    cout << \"x=\" << x << \" y=\" << y; // 20, 10\n    return 0;\n}", isBookBack: true
  },
  {
    id: "cs11-ch11-5m-2", chapterNo: 11, chapterName: "Functions", chapterNameTamil: "செயற்கூறுகள்", marks: 5, type: "essay",
    questionText: "Explain Scope and Lifetime of Variables in C++: Local, Global, and Static.", questionTextTamil: "C++ மாறிகளின் வரையெல்லை மற்றும் வாழ்நாள் (Scope and Lifetime) - உள்ளூர், முழுதளாவிய, மற்றும் நிலையான மாறிகளை விளக்குக.",
    answer: "1. Local Variables:\n- Scope: Declared inside a block/function; accessible only within that block.\n- Lifetime: Created when block is entered, destroyed when block is exited.\n\n2. Global Variables:\n- Scope: Declared outside all functions; accessible throughout the file by all functions.\n- Lifetime: Created when program starts, destroyed when program terminates.\n\n3. Static Variables:\n- Scope: Local to the function in which declared.\n- Lifetime: Retains value between multiple function calls; initialized only once across entire program execution.",
    answerTamil: "1. உள்ளூர் மாறிகள் (Local Variables):\n- வரையெல்லை: குறிப்பிட்ட தொகுதி அல்லது செயற்கூறிற்குள் மட்டுமே அணுக முடியும்.\n- வாழ்நாள்: தொகுதி இயங்கும் போது உருவாகி, முடியும் போது அழியும்.\n\n2. முழுதளாவிய மாறிகள் (Global Variables):\n- வரையெல்லை: நிரலின் அனைத்து செயற்கூறுகளாலும் அணுக முடியும்.\n- வாழ்நாள்: நிரல் தொடங்கும் போது உருவாகி, நிரல் முடியும் வரை இருக்கும்.\n\n3. நிலையான மாறிகள் (Static Variables):\n- வரையெல்லை: அறிவிக்கப்பட்ட செயற்கூறிற்குள் மட்டுமே.\n- வாழ்நாள்: செயற்கூறு பலமுறை அழைக்கப்பட்டாலும் தன் முந்தைய மதிப்பைத் தக்க வைத்துக் கொள்ளும்.", isBookBack: true
  },
  {
    id: "cs11-ch11-5m-3", chapterNo: 11, chapterName: "Functions", chapterNameTamil: "செயற்கூறுகள்", marks: 5, type: "essay",
    questionText: "Explain Inline Functions in C++: definition, advantages, and limitations with an example program.", questionTextTamil: "C++ மொழியில் உள்வரி செயற்கூறுகள் (Inline functions) - வரையறை, நன்மைகள் மற்றும் வரம்புகளை மாதிரி நிரலுடன் விளக்குக.",
    answer: "Definition: An inline function is expanded in-line at the point of call by compiler, avoiding call/return jump overhead.\n\nAdvantages:\n1. Faster execution speed by eliminating function call stack overhead.\n2. Better performance for small, frequently called helper functions.\n\nLimitations:\n- Increases program binary size (code bloat) if function is large.\n- Compilers ignore inline request if function contains loops, switch, static variables, or recursion.\n\nExample Program:\n#include <iostream>\nusing namespace std;\ninline int cube(int x) {\n    return x * x * x;\n}\nint main() {\n    cout << \"Cube of 5 = \" << cube(5) << endl;\n    return 0;\n}",
    answerTamil: "வரையறை: 'inline' முன்னொட்டுடன் எழுதப்படும் சிறிய செயற்கூறுகள் அழைக்கப்படும் இடத்திலேயே மொழிபெயர்ப்பியால் பதிலீடு செய்யப்படுகின்றன.\n\nநன்மைகள்:\n1. செயற்கூறு அழைப்பிற்கான மேல்நிலை நேரம் மிச்சப்படுத்தப்பட்டு வேகம் அதிகரிக்கிறது.\n2. சிறிய பணிகளுக்கு மிகச் சிறந்தது.\n\nவரம்புகள்:\n- பெரிய செயற்கூறுகளுக்குப் பயன்படுத்தினால் நிரலின் நினைவக அளவு அதிகரிக்கும்.\n- சுழற்சிகள், switch, தற்சுழற்சி இருந்தால் compiler இதை நிராகரிக்கும்.\n\nமாதிரி நிரல்:\ninline int cube(int x) { return x * x * x; }", isBookBack: true
  }
];

// ==========================================
// CHAPTER 12: Arrays and Structures (அணிகள் மற்றும் கட்டமைப்புகள்)
// 1M: 5, 2M: 4, 3M: 3, 5M: 3 (Total: 15)
// ==========================================
const ch12 = [
  // 1 Marks (5)
  {
    id: "cs11-ch12-1m-1", chapterNo: 12, chapterName: "Arrays and Structures", chapterNameTamil: "அணிகள் மற்றும் கட்டமைப்புகள்", marks: 1, type: "mcq",
    questionText: "An array is a collection of variables of:", questionTextTamil: "அணி (Array) என்பது எத்தகைய மாறிகளின் தொகுப்பு ஆகும்?",
    options: { A: "Same data type", B: "Different data types", C: "Only characters", D: "Only integers" },
    optionsTamil: { A: "ஒரே தரவினம் (Same data type)", B: "வெவ்வேறு தரவினங்கள்", C: "உருக்கள் மட்டும்", D: "முழு எண்கள் மட்டும்" },
    correctOption: "A", answer: "A) Same data type", answerTamil: "A) ஒரே தரவினம்", isBookBack: true
  },
  {
    id: "cs11-ch12-1m-2", chapterNo: 12, chapterName: "Arrays and Structures", chapterNameTamil: "அணிகள் மற்றும் கட்டமைப்புகள்", marks: 1, type: "mcq",
    questionText: "What is the index of the first element in an array in C++?", questionTextTamil: "C++ மொழியில் அணியின் முதல் உறுப்பின் சுட்டெண் (Index) என்ன?",
    options: { A: "1", B: "0", C: "-1", D: "Size of array" },
    optionsTamil: { A: "1", B: "0", C: "-1", D: "அணியின் அளவு" },
    correctOption: "B", answer: "B) 0", answerTamil: "B) 0", isBookBack: true
  },
  {
    id: "cs11-ch12-1m-3", chapterNo: 12, chapterName: "Arrays and Structures", chapterNameTamil: "அணிகள் மற்றும் கட்டமைப்புகள்", marks: 1, type: "mcq",
    questionText: "For an array declared as int a[5]; what is the index of the last element?", questionTextTamil: "int a[5]; என அறிவிக்கப்பட்ட அணியின் கடைசி உறுப்பின் சுட்டெண் என்ன?",
    options: { A: "5", B: "4", C: "0", D: "6" },
    optionsTamil: { A: "5", B: "4", C: "0", D: "6" },
    correctOption: "B", answer: "B) 4", answerTamil: "B) 4", isBookBack: true
  },
  {
    id: "cs11-ch12-1m-4", chapterNo: 12, chapterName: "Arrays and Structures", chapterNameTamil: "அணிகள் மற்றும் கட்டமைப்புகள்", marks: 1, type: "mcq",
    questionText: "Which keyword is used to declare a user-defined heterogeneous data structure in C++?", questionTextTamil: "வெவ்வேறு தரவினங்களைக் கொண்ட பயனரால் வரையறுக்கப்படும் கட்டமைப்பை உருவாக்கப் பயன்படும் சிறப்புச்சொல் எது?",
    options: { A: "array", B: "struct", C: "record", D: "type" },
    optionsTamil: { A: "array", B: "struct", C: "record", D: "type" },
    correctOption: "B", answer: "B) struct", answerTamil: "B) struct", isBookBack: true
  },
  {
    id: "cs11-ch12-1m-5", chapterNo: 12, chapterName: "Arrays and Structures", chapterNameTamil: "அணிகள் மற்றும் கட்டமைப்புகள்", marks: 1, type: "mcq",
    questionText: "Which operator is used to access structure members through a structure variable?", questionTextTamil: "கட்டமைப்பு மாறியின் மூலம் அதன் உறுப்புகளை அணுகப் பயன்படும் செயற்குறி எது?",
    options: { A: "Arrow operator (->)", B: "Dot operator (.)", C: "Scope resolution (::)", D: "Comma (,)" },
    optionsTamil: { A: "அம்பு செயற்குறி (->)", B: "புள்ளி செயற்குறி (.)", C: "வரையெல்லை தீர்வு (::)", D: "காற்புள்ளி (,)" },
    correctOption: "B", answer: "B) Dot operator (.)", answerTamil: "B) புள்ளி செயற்குறி (.)", isBookBack: true
  },

  // 2 Marks (4)
  {
    id: "cs11-ch12-2m-1", chapterNo: 12, chapterName: "Arrays and Structures", chapterNameTamil: "அணிகள் மற்றும் கட்டமைப்புகள்", marks: 2, type: "short",
    questionText: "What is an Array? Write syntax to declare a 1-D array.", questionTextTamil: "அணி என்றால் என்ன? ஒரு பரிமாண அணியை அறிவிக்கும் தொடரியலை எழுதுக.",
    answer: "An array is a homogeneous collection of elements of the same data type stored in contiguous memory locations referenced by a common name.\nSyntax: data_type array_name[size]; (e.g. int marks[5];).",
    answerTamil: "அணி (Array) என்பது ஒரே தரவினத்தைச் சேர்ந்த தொடர்ச்சியான நினைவக இடங்களில் சேமிக்கப்படும் மாறிகளின் தொகுப்பாகும்.\nதொடரியல்: தரவினம் அணிப்பெயர்[அளவு]; (எ.கா: int mark[5];).", isBookBack: true
  },
  {
    id: "cs11-ch12-2m-2", chapterNo: 12, chapterName: "Arrays and Structures", chapterNameTamil: "அணிகள் மற்றும் கட்டமைப்புகள்", marks: 2, type: "short",
    questionText: "What is a 2-Dimensional (2D) Array?", questionTextTamil: "இரு பரிமாண அணி (2D Array) என்றால் என்ன?",
    answer: "A 2D array is an array of 1D arrays organized in rows and columns (matrix form).\nSyntax: data_type array_name[row_size][col_size]; (e.g. int matrix[3][3];).",
    answerTamil: "இரு பரிமாண அணி என்பது தரவுகளை நிறைகள் (Rows) மற்றும் நிரல்களாக (Columns) கொண்ட அணி வடிவ அமைப்பாகும்.\nதொடரியல்: தரவினம் அணிப்பெயர்[நிறை_அளவு][நிரல்_அளவு]; (எ.கா: int a[3][3];).", isBookBack: true
  },
  {
    id: "cs11-ch12-2m-3", chapterNo: 12, chapterName: "Arrays and Structures", chapterNameTamil: "அணிகள் மற்றும் கட்டமைப்புகள்", marks: 2, type: "short",
    questionText: "What is a Structure (struct) in C++?", questionTextTamil: "C++ கட்டமைப்புகள் (Structures) என்றால் என்ன?",
    answer: "A structure is a user-defined composite data type that groups logically related heterogeneous variables (different data types) under a single name.",
    answerTamil: "கட்டமைப்பு (Structure) என்பது வெவ்வேறு தரவினங்களைச் சார்ந்த ஒன்றுக்கொன்று தொடர்புடைய மாறிகளை ஒரே பெயரின் கீழ் இணைக்கும் பயனர் வரையறுத்த தரவினமாகும்.", isBookBack: true
  },
  {
    id: "cs11-ch12-2m-4", chapterNo: 12, chapterName: "Arrays and Structures", chapterNameTamil: "அணிகள் மற்றும் கட்டமைப்புகள்", marks: 2, type: "short",
    questionText: "How are structure members referenced / accessed?", questionTextTamil: "கட்டமைப்பின் உறுப்புகள் எவ்வாறு அணுகப்படுகின்றன?",
    answer: "Structure members are accessed using the dot operator (period '.') between the structure variable and member name.\nSyntax: structure_variable.member_name; (e.g. stud1.roll_no;).",
    answerTamil: "கட்டமைப்பின் உறுப்புகள் புள்ளி செயற்குறி (.) மூலம் அணுகப்படுகின்றன.\nதொடரியல்: கட்டமைப்பு_மாறி.உறுப்பு_பெயர்; (எ.கா: s1.roll_no).", isBookBack: true
  },

  // 3 Marks (3)
  {
    id: "cs11-ch12-3m-1", chapterNo: 12, chapterName: "Arrays and Structures", chapterNameTamil: "அணிகள் மற்றும் கட்டமைப்புகள்", marks: 3, type: "brief",
    questionText: "Differentiate between Array and Structure.", questionTextTamil: "அணி மற்றும் கட்டமைப்பு வேறுபடுத்துக.",
    answer: "Array:\n1. Homogeneous: Collection of elements of the SAME data type.\n2. Elements accessed using integer subscripts/indices [i].\n3. Contiguous built-in structure.\n\nStructure:\n1. Heterogeneous: Collection of elements of DIFFERENT data types.\n2. Elements accessed using member names with dot operator (.).\n3. User-defined composite type using 'struct' keyword.",
    answerTamil: "அணி (Array):\n1. ஒரே வகையான தரவினங்களின் தொகுப்பு (Homogeneous).\n2. சுட்டெண் [i] மூலம் உறுப்புகள் அணுகப்படுகின்றன.\n\nகட்டமைப்பு (Structure):\n1. வெவ்வேறு வகையான தரவினங்களின் தொகுப்பு (Heterogeneous).\n2. புள்ளி செயற்குறி (.) மற்றும் உறுப்பு பெயர் மூலம் அணுகப்படுகின்றன.", isBookBack: true
  },
  {
    id: "cs11-ch12-3m-2", chapterNo: 12, chapterName: "Arrays and Structures", chapterNameTamil: "அணிகள் மற்றும் கட்டமைப்புகள்", marks: 3, type: "brief",
    questionText: "Explain Array of Structures with an example declaration.", questionTextTamil: "கட்டமைப்புகளின் அணி (Array of Structures) பற்றி எடுத்துக்காட்டுடன் விளக்குக.",
    answer: "An Array of Structures is an array where each individual element is a structure holding multiple fields.\n\nExample:\nstruct Student {\n    int roll_no;\n    char name[30];\n    float marks;\n};\nStudent class11[50]; // Array of 50 student structures",
    answerTamil: "கட்டமைப்புகளின் அணி என்பது ஒவ்வொரு உறுப்பும் ஒரு முழுமையான கட்டமைப்பாகக் கொண்ட அணியாகும்.\n\nஎடுத்துக்காட்டு:\nstruct Student {\n    int roll;\n    char name[20];\n    float marks;\n};\nStudent s[50]; // 50 மாணவர்களுக்கான கட்டமைப்பு அணி", isBookBack: true
  },
  {
    id: "cs11-ch12-3m-3", chapterNo: 12, chapterName: "Arrays and Structures", chapterNameTamil: "அணிகள் மற்றும் கட்டமைப்புகள்", marks: 3, type: "brief",
    questionText: "Explain Nested Structures in C++.", questionTextTamil: "பின்னலான கட்டமைப்பு (Nested Structure) என்றால் என்ன? விளக்குக.",
    answer: "A nested structure is a structure defined inside another structure as one of its data members.\n\nExample:\nstruct Date {\n    int day, month, year;\n};\nstruct Employee {\n    int id;\n    char name[30];\n    Date dob; // Nested structure member\n};",
    answerTamil: "ஒரு கட்டமைப்பிற்குள் மற்றொரு கட்டமைப்பு ஒரு உறுப்பாக அமைந்திருப்பது பின்னலான கட்டமைப்பு எனப்படும்.\n\nஎடுத்துக்காட்டு:\nstruct Date { int d, m, y; };\nstruct Employee {\n    int id;\n    char name[20];\n    Date dob; // பின்னலான கட்டமைப்பு உறுப்பு\n};", isBookBack: true
  },

  // 5 Marks (3)
  {
    id: "cs11-ch12-5m-1", chapterNo: 12, chapterName: "Arrays and Structures", chapterNameTamil: "அணிகள் மற்றும் கட்டமைப்புகள்", marks: 5, type: "essay",
    questionText: "Explain One-Dimensional and Two-Dimensional Arrays in C++ with syntax and complete working program for Matrix Addition.", questionTextTamil: "C++ மொழியில் ஒரு பரிமாண மற்றும் இரு பரிமாண அணிகளை விளக்கி, இரு அணிகளைக் கூட்டும் முழுமையான மாதிரி நிரலை எழுதுக.",
    answer: "1D Array: Stores linear list of elements.\nSyntax: type name[size];\n\n2D Array: Stores grid of elements in rows and columns.\nSyntax: type name[rows][cols];\n\nMatrix Addition Program:\n#include <iostream>\nusing namespace std;\nint main() {\n    int a[2][2], b[2][2], sum[2][2];\n    cout << \"Enter 4 elements of matrix A: \";\n    for(int i=0; i<2; i++) for(int j=0; j<2; j++) cin >> a[i][j];\n    cout << \"Enter 4 elements of matrix B: \";\n    for(int i=0; i<2; i++) for(int j=0; j<2; j++) cin >> b[i][j];\n    for(int i=0; i<2; i++) for(int j=0; j<2; j++) sum[i][j] = a[i][j] + b[i][j];\n    cout << \"Sum Matrix:\\n\";\n    for(int i=0; i<2; i++) {\n        for(int j=0; j<2; j++) cout << sum[i][j] << \" \";\n        cout << endl;\n    }\n    return 0;\n}",
    answerTamil: "ஒரு பரிமாண அணி: நேர்கோட்டு வரிசையில் தரவுகளைச் சேமிக்கும் (type name[size]).\nஇரு பரிமாண அணி: அட்டவணை வடிவில் நிறைகள், நிரல்களாகச் சேமிக்கும் (type name[r][c]).\n\nஅணி கூட்டல் நிரல்:\n#include <iostream>\nusing namespace std;\nint main() {\n    int a[2][2], b[2][2], sum[2][2];\n    cout << \"அணி A உறுப்புகள்: \";\n    for(int i=0; i<2; i++) for(int j=0; j<2; j++) cin >> a[i][j];\n    cout << \"அணி B உறுப்புகள்: \";\n    for(int i=0; i<2; i++) for(int j=0; j<2; j++) cin >> b[i][j];\n    for(int i=0; i<2; i++) for(int j=0; j<2; j++) sum[i][j] = a[i][j] + b[i][j];\n    cout << \"கூடுதல் அணி:\\n\";\n    for(int i=0; i<2; i++) {\n        for(int j=0; j<2; j++) cout << sum[i][j] << \" \";\n        cout << endl;\n    }\n    return 0;\n}", isBookBack: true, isCompulsoryEligible: true
  },
  {
    id: "cs11-ch12-5m-2", chapterNo: 12, chapterName: "Arrays and Structures", chapterNameTamil: "அணிகள் மற்றும் கட்டமைப்புகள்", marks: 5, type: "essay",
    questionText: "Explain Structure declaration, definition, variable creation, and initialization in C++ with an example program.", questionTextTamil: "C++ மொழியில் கட்டமைப்பு அறிவிப்பு, மாறிகள் உருவாக்கம் மற்றும் தொடக்கமதிப்பிருத்தல் ஆகியவற்றை முழுமையான நிரலுடன் விளக்குக.",
    answer: "A structure allows defining a composite data type comprising heterogeneous fields.\n\nComplete Program:\n#include <iostream>\nusing namespace std;\nstruct Employee {\n    int emp_id;\n    char name[30];\n    float salary;\n};\nint main() {\n    Employee e1 = {101, \"Ramesh\", 45000.50}; // Initializing structure\n    Employee e2;\n    cout << \"Enter Employee 2 ID, Name, Salary: \";\n    cin >> e2.emp_id >> e2.name >> e2.salary;\n    cout << \"\\n--- Employee Details ---\\n\";\n    cout << \"E1: ID=\" << e1.emp_id << \", Name=\" << e1.name << \", Salary=\" << e1.salary << endl;\n    cout << \"E2: ID=\" << e2.emp_id << \", Name=\" << e2.name << \", Salary=\" << e2.salary << endl;\n    return 0;\n}",
    answerTamil: "கட்டமைப்பு என்பது பல்வேறு வகையான தரவுகளை ஒரே பெயரின் கீழ் நிர்வகிக்கும் பயனர் வரையறுத்த தரவினமாகும்.\n\nநிரல்:\n#include <iostream>\nusing namespace std;\nstruct Employee {\n    int emp_id;\n    char name[30];\n    float salary;\n};\nint main() {\n    Employee e1 = {101, \"ரமேஷ்\", 45000.50};\n    cout << \"பணியாளர் விவரம்: \" << e1.emp_id << \", \" << e1.name << \", \" << e1.salary;\n    return 0;\n}", isBookBack: true
  },
  {
    id: "cs11-ch12-5m-3", chapterNo: 12, chapterName: "Arrays and Structures", chapterNameTamil: "அணிகள் மற்றும் கட்டமைப்புகள்", marks: 5, type: "essay",
    questionText: "Explain how Structures can be passed to functions in C++: Passing by Value and Passing by Reference.", questionTextTamil: "C++ மொழியில் கட்டமைப்புகளை செயற்கூறுகளுக்கு அனுப்புதல் (Passing structures to functions) - மதிப்பு மூலம் மற்றும் குறிப்பு மூலம் அனுப்புதலை விளக்குக.",
    answer: "Structures can be passed to functions as arguments in two ways:\n1. Pass by Value: A copy of entire structure is passed; modifications inside function do not affect original structure variable.\n2. Pass by Reference: Address of structure is passed with '&'; modifications directly update original structure, saving copying overhead.\n\nExample Program:\n#include <iostream>\nusing namespace std;\nstruct Rectangle {\n    int length, width;\n};\nvoid printArea(Rectangle r) { // Passed by value\n    cout << \"Area = \" << r.length * r.width << endl;\n}\nvoid scale(Rectangle &r, int factor) { // Passed by reference\n    r.length *= factor;\n    r.width *= factor;\n}\nint main() {\n    Rectangle rect = {10, 5};\n    printArea(rect);\n    scale(rect, 2);\n    printArea(rect); // Area is now 400\n    return 0;\n}",
    answerTamil: "கட்டமைப்புகளை செயற்கூறுகளுக்கு இரண்டு வழிகளில் அனுப்பலாம்:\n1. மதிப்பு மூலம் அனுப்புதல்: கட்டமைப்பின் முழு நகல் அனுப்பப்படும்.\n2. குறிப்பு மூலம் அனுப்புதல்: கட்டமைப்பின் நினைவக முகவரி (&) அனுப்பப்படும்; இதனால் செயல்திறன் கூடும்.\n\nமாதிரி நிரல்:\nstruct Rect { int l, w; };\nvoid printArea(Rect r) { cout << \"பரப்பளவு = \" << r.l * r.w; }\nvoid scale(Rect &r) { r.l *= 2; r.w *= 2; }", isBookBack: true
  }
];

fs.writeFileSync('./scripts/ch11.json', JSON.stringify(ch11, null, 2));
fs.writeFileSync('./scripts/ch12.json', JSON.stringify(ch12, null, 2));
console.log('Ch11, Ch12 built successfully!');
