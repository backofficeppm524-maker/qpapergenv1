import fs from 'fs';

// ==========================================
// CHAPTER 15: Polymorphism (பல்லுருவாக்கம்)
// 1M: 6, 2M: 6, 3M: 6, 5M: 4 (Total: 22)
// ==========================================
const ch15 = [
  // 1 Marks (6)
  {
    id: "cs11-ch15-1m-1", chapterNo: 15, chapterName: "Polymorphism", chapterNameTamil: "பல்லுருவாக்கம்", marks: 1, type: "mcq",
    questionText: "Which of the following refers to characteristics of an entity having many forms?", questionTextTamil: "பின்வருவனவற்றில் எது பல வடிவங்களைக் கொண்ட ஒரு உருப்படியின் பண்பைக் குறிக்கிறது?",
    options: { A: "Inheritance", B: "Polymorphism", C: "Encapsulation", D: "Abstraction" },
    optionsTamil: { A: "மரபுரிமம்", B: "பல்லுருவாக்கம் (Polymorphism)", C: "உறைபொதியாக்கம்", D: "அருவமாக்கம்" },
    correctOption: "B", answer: "B) Polymorphism", answerTamil: "B) பல்லுருவாக்கம்", isBookBack: true
  },
  {
    id: "cs11-ch15-1m-2", chapterNo: 15, chapterName: "Polymorphism", chapterNameTamil: "பல்லுருவாக்கம்", marks: 1, type: "mcq",
    questionText: "Function overloading is an example of which type of polymorphism?", questionTextTamil: "செயற்கூறு பணிமிகுப்பு என்பது எந்த வகையான பல்லுருவாக்கத்திற்கு எடுத்துக்காட்டாகும்?",
    options: { A: "Compile-time (Early / Static) polymorphism", B: "Runtime (Late / Dynamic) polymorphism", C: "Ad-hoc inheritance", D: "Execution polymorphism" },
    optionsTamil: { A: "தொகுப்பு நேரப் பல்லுருவாக்கம் (Compile-time)", B: "இயக்க நேரப் பல்லுருவாக்கம் (Runtime)", C: "மரபுரிமம்", D: "செயலாக்கப் பல்லுருவாக்கம்" },
    correctOption: "A", answer: "A) Compile-time (Early / Static) polymorphism", answerTamil: "A) தொகுப்பு நேரப் பல்லுருவாக்கம்", isBookBack: true
  },
  {
    id: "cs11-ch15-1m-3", chapterNo: 15, chapterName: "Polymorphism", chapterNameTamil: "பல்லுருவாக்கம்", marks: 1, type: "mcq",
    questionText: "Which keyword is used in C++ for operator overloading function declaration?", questionTextTamil: "செயற்குறி பணிமிகுப்பு செயற்கூறு அறிவிப்பில் பயன்படுத்தப்படும் சிறப்புச்சொல் எது?",
    options: { A: "operate", B: "overload", C: "operator", D: "virtual" },
    optionsTamil: { A: "operate", B: "overload", C: "operator", D: "virtual" },
    correctOption: "C", answer: "C) operator", answerTamil: "C) operator", isBookBack: true
  },
  {
    id: "cs11-ch15-1m-4", chapterNo: 15, chapterName: "Polymorphism", chapterNameTamil: "பல்லுருவாக்கம்", marks: 1, type: "mcq",
    questionText: "Which of the following operators CANNOT be overloaded in C++?", questionTextTamil: "பின்வரும் எந்த செயற்குறியை C++ மொழியில் பணிமிகுக்க முடியாது?",
    options: { A: "+", B: "==", C: ":: (Scope resolution)", D: "[]" },
    optionsTamil: { A: "+", B: "==", C: ":: (வரையெல்லை தீர்வு)", D: "[]" },
    correctOption: "C", answer: "C) :: (Scope resolution operator)", answerTamil: "C) :: (வரையெல்லை தீர்வு செயற்குறி)", isBookBack: true
  },
  {
    id: "cs11-ch15-1m-5", chapterNo: 15, chapterName: "Polymorphism", chapterNameTamil: "பல்லுருவாக்கம்", marks: 1, type: "mcq",
    questionText: "Which of the following differentiates overloaded functions with the same name?", questionTextTamil: "ஒரே பெயர் கொண்ட பணிமிகுக்கப்பட்ட செயற்கூறுகளை வேறுபடுத்துவது எது?",
    options: { A: "Return type only", B: "Number and types of arguments", C: "Function call location", D: "Header files" },
    optionsTamil: { A: "திருப்பி அனுப்பும் வகை மட்டும்", B: "அளபுருக்களின் எண்ணிக்கை மற்றும் தரவினங்கள்", C: "அழைக்கப்படும் இடம்", D: "தலைப்புக் கோப்புகள்" },
    correctOption: "B", answer: "B) Number and types of arguments (Signature)", answerTamil: "B) அளபுருக்களின் எண்ணிக்கை மற்றும் தரவினங்கள்", isBookBack: true
  },
  {
    id: "cs11-ch15-1m-6", chapterNo: 15, chapterName: "Polymorphism", chapterNameTamil: "பல்லுருவாக்கம்", marks: 1, type: "mcq",
    questionText: "Which operator cannot be overloaded among: ., .*, ?:, sizeof?", questionTextTamil: "., .*, ?:, sizeof ஆகியவற்றில் எவற்றை பணிமிகுக்க முடியாது?",
    options: { A: "Only sizeof", B: "Only . and ?:", C: "All of them (., .*, ?:, sizeof)", D: "None of them" },
    optionsTamil: { A: "sizeof மட்டும்", B: ". மற்றும் ?: மட்டும்", C: "அனைத்தையும் (., .*, ?:, sizeof)", D: "எதுவுமில்லை" },
    correctOption: "C", answer: "C) All of them (., .*, ?:, sizeof cannot be overloaded)", answerTamil: "C) இவை அனைத்தையும்", isBookBack: true
  },

  // 2 Marks (6)
  {
    id: "cs11-ch15-2m-1", chapterNo: 15, chapterName: "Polymorphism", chapterNameTamil: "பல்லுருவாக்கம்", marks: 2, type: "short",
    questionText: "What is Polymorphism?", questionTextTamil: "பல்லுருவாக்கம் என்றால் என்ன?",
    answer: "Polymorphism is the ability of a message, function, or operator to be processed in more than one form depending on the type of operands/arguments.",
    answerTamil: "பல்லுருவாக்கம் என்பது ஒரு செயற்கூறு அல்லது செயற்குறி சூழலுக்கேற்ப பல்வேறு வடிவங்களில் செயல்படும் திறன் ஆகும்.", isBookBack: true
  },
  {
    id: "cs11-ch15-2m-2", chapterNo: 15, chapterName: "Polymorphism", chapterNameTamil: "பல்லுருவாக்கம்", marks: 2, type: "short",
    questionText: "What is Function Overloading?", questionTextTamil: "செயற்கூறு பணிமிகுப்பு என்றால் என்ன?",
    answer: "Function overloading is defining two or more functions with the same name within the same scope, provided their parameter types or number of parameters differ.",
    answerTamil: "ஒரே வரையெல்லையில் ஒரே பெயரைக் கொண்ட இரண்டு அல்லது அதற்கு மேற்பட்ட செயற்கூறுகளை வெவ்வேறு அளபுருக்களுடன் வரையறுப்பது செயற்கூறு பணிமிகுப்பு எனப்படும்.", isBookBack: true
  },
  {
    id: "cs11-ch15-2m-3", chapterNo: 15, chapterName: "Polymorphism", chapterNameTamil: "பல்லுருவாக்கம்", marks: 2, type: "short",
    questionText: "What is Operator Overloading?", questionTextTamil: "செயற்குறி பணிமிகுப்பு என்றால் என்ன?",
    answer: "Operator overloading gives existing C++ operators additional meanings when applied to user-defined data types (objects) without altering their syntax.",
    answerTamil: "பயனர் வரையறுத்த தரவினங்களின் மீது செயல்படும் வகையில் உள்ளமைந்த செயற்குறிகளுக்கு கூடுதல் பொருளை வழங்குவது செயற்குறி பணிமிகுப்பு எனப்படும்.", isBookBack: true
  },
  {
    id: "cs11-ch15-2m-4", chapterNo: 15, chapterName: "Polymorphism", chapterNameTamil: "பல்லுருவாக்கம்", marks: 2, type: "short",
    questionText: "Write the general syntax of Operator Overloading function in C++.", questionTextTamil: "C++ மொழியில் செயற்குறி பணிமிகுப்பு செயற்கூற்றின் தொடரியலை எழுதுக.",
    answer: "Syntax:\nreturn_type class_name :: operator op (argument_list) {\n    // function body\n}",
    answerTamil: "தொடரியல்:\nதிரும்பித்தரும்_வகை இனக்குழு :: operator செயற்குறி (அளபுரு_பட்டியல்) {\n    // உடற்பகுதி\n}", isBookBack: true
  },
  {
    id: "cs11-ch15-2m-5", chapterNo: 15, chapterName: "Polymorphism", chapterNameTamil: "பல்லுருவாக்கம்", marks: 2, type: "short",
    questionText: "List any four operators that cannot be overloaded in C++.", questionTextTamil: "C++ மொழியில் பணிமிகுக்க முடியாத நான்கு செயற்குறிகளைக் குறிப்பிடுக.",
    answer: "1. Scope Resolution Operator (::)\n2. Member Access / Dot Operator (.)\n3. Pointer to Member Operator (.*)\n4. Conditional / Ternary Operator (? :)\n5. Sizeof Operator (sizeof).",
    answerTamil: "1. வரையெல்லை தீர்வு செயற்குறி (::)\n2. புள்ளி செயற்குறி (.)\n3. உறுப்பு சுட்டு செயற்குறி (.*)\n4. நிபந்தனை செயற்குறி (? :)\n5. sizeof செயற்குறி.", isBookBack: true
  },
  {
    id: "cs11-ch15-2m-6", chapterNo: 15, chapterName: "Polymorphism", chapterNameTamil: "பல்லுருவாக்கம்", marks: 2, type: "short",
    questionText: "What is the role of function signature in overloading?", questionTextTamil: "பணிமிகுப்பில் செயற்கூறு கையொப்பத்தின் (Signature) பங்கு யாது?",
    answer: "Function signature consists of function name and its parameter list (number, types, and sequence of arguments). Overloading requires unique signatures for disambiguation.",
    answerTamil: "செயற்கூறு கையொப்பம் என்பது செயற்கூற்றின் பெயர் மற்றும் அதன் அளபுருக்களின் வகைகளையும் வரிசையையும் குறிக்கும். இது பணிமிகுக்கப்பட்ட செயற்கூறுகளை வேறுபடுத்தப் பயன்படுகிறது.", isBookBack: true
  },

  // 3 Marks (6)
  {
    id: "cs11-ch15-3m-1", chapterNo: 15, chapterName: "Polymorphism", chapterNameTamil: "பல்லுருவாக்கம்", marks: 3, type: "brief",
    questionText: "What are the rules for Function Overloading in C++?", questionTextTamil: "C++ மொழியில் செயற்கூறு பணிமிகுப்பிற்கான விதிகள் யாவை?",
    answer: "1. Overloaded functions must have the same name.\n2. Must differ in number of arguments, data types of arguments, or order of argument types.\n3. Merely differing in return type alone is NOT sufficient for overloading.",
    answerTamil: "1. அனைத்து பணிமிகு செயற்கூறுகளும் ஒரே பெயரைக் கொண்டிருக்க வேண்டும்.\n2. அளபுருக்களின் எண்ணிக்கை அல்லது அவற்றின் தரவினங்களில் வேறுபட வேண்டும்.\n3. திருப்பி அனுப்பும் தரவினத்தில் மட்டும் வேறுபட்டால் பணிமிகுப்பாக ஏற்கப்படாது.", isBookBack: true
  },
  {
    id: "cs11-ch15-3m-2", chapterNo: 15, chapterName: "Polymorphism", chapterNameTamil: "பல்லுருவாக்கம்", marks: 3, type: "brief",
    questionText: "Write the rules for Operator Overloading in C++.", questionTextTamil: "C++ மொழியில் செயற்குறி பணிமிகுப்பிற்கான விதிகள் யாவை?",
    answer: "1. Only existing operators can be overloaded; new operator symbols cannot be invented.\n2. Precedence and associativity of operators cannot be changed.\n3. At least one operand must be of user-defined class type.\n4. Cannot overload ::, ., .*, ?:, sizeof.",
    answerTamil: "1. ஏற்கனவே உள்ள செயற்குறிகளை மட்டுமே பணிமிகுக்க முடியும்; புதிய செயற்குறிகளை உருவாக்க முடியாது.\n2. செயற்குறிகளின் முன்னுரிமை மற்றும் தொடர்புடைமையை மாற்ற முடியாது.\n3. குறைந்தது ஒரு செயலேற்பியாவது பயனர் வரையறுத்த இனக்குழுவாக இருக்க வேண்டும்.", isBookBack: true
  },
  {
    id: "cs11-ch15-3m-3", chapterNo: 15, chapterName: "Polymorphism", chapterNameTamil: "பல்லுருவாக்கம்", marks: 3, type: "brief",
    questionText: "Differentiate between Compile-time Polymorphism and Run-time Polymorphism.", questionTextTamil: "தொகுப்பு நேரப் பல்லுருவாக்கம் மற்றும் இயக்க நேரப் பல்லுருவாக்கம் வேறுபடுத்துக.",
    answer: "Compile-time (Static) Polymorphism:\n1. Function call bound to definition at compile time.\n2. Fast execution; achieved via Function & Operator Overloading.\n\nRun-time (Dynamic) Polymorphism:\n1. Function call bound dynamically at runtime.\n2. Achieved via Virtual Functions and Base class pointers.",
    answerTamil: "தொகுப்பு நேரப் பல்லுருவாக்கம்:\n1. தொகுக்கும் போதே செயற்கூறு அழைப்பு பிணைக்கப்படுகிறது.\n2. செயற்கூறு மற்றும் செயற்குறி பணிமிகுப்பு மூலம் அடையப்படுகிறது.\n\nஇயக்க நேரப் பல்லுருவாக்கம்:\n1. நிரல் இயங்கும் நேரத்தில் செயற்கூறு பிணைக்கப்படுகிறது.\n2. மெய்நிகர் செயற்கூறுகள் (Virtual functions) மூலம் அடையப்படுகிறது.", isBookBack: true
  },
  {
    id: "cs11-ch15-3m-4", chapterNo: 15, chapterName: "Polymorphism", chapterNameTamil: "பல்லுருவாக்கம்", marks: 3, type: "brief",
    questionText: "Write a C++ code snippet to overload area() function for circle, rectangle, and triangle.", questionTextTamil: "வட்டம், செவ்வகம், முக்கோணம் ஆகியவற்றின் பரப்பளவைக் காண area() செயற்கூற்றை பணிமிகுக்கும் C++ குறிமுறையை எழுதுக.",
    answer: "float area(float r) { return 3.14159 * r * r; } // Circle\nfloat area(float l, float b) { return l * b; } // Rectangle\nfloat area(double b, double h) { return 0.5 * b * h; } // Triangle",
    answerTamil: "float area(float r) { return 3.14159 * r * r; } // வட்டம்\nfloat area(float l, float b) { return l * b; } // செவ்வகம்\nfloat area(double b, double h) { return 0.5 * b * h; } // முக்கோணம்", isBookBack: true
  },
  {
    id: "cs11-ch15-3m-5", chapterNo: 15, chapterName: "Polymorphism", chapterNameTamil: "பல்லுருவாக்கம்", marks: 3, type: "brief",
    questionText: "Can default arguments be used to replace overloaded functions? Explain.", questionTextTamil: "கொடாநிலை அளபுருக்களைக் கொண்டு பணிமிகுக்கப்பட்ட செயற்கூறுகளை மாற்றியமைக்க முடியுமா? விளக்குக.",
    answer: "Yes, a single function with default arguments can sometimes replace multiple overloaded functions.\nExample: void print(int a, int b = 0) can handle both print(x) and print(x, y). However, ambiguity may arise if an exact overloaded match also exists.",
    answerTamil: "ஆம், கொடாநிலை அளபுருக்கள் கொண்ட ஒரே செயற்கூறு சில நேரங்களில் பல பணிமிகு செயற்கூறுகளின் வேலையைச் செய்ய முடியும். ஆனால் இரண்டுமே ஒரே நேரத்தில் இருக்கும் போது தெளிவின்மை (Ambiguity) ஏற்பட வாய்ப்புள்ளது.", isBookBack: true
  },
  {
    id: "cs11-ch15-3m-6", chapterNo: 15, chapterName: "Polymorphism", chapterNameTamil: "பல்லுருவாக்கம்", marks: 3, type: "brief",
    questionText: "What is Operator Overloading using Member Function vs Friend Function?", questionTextTamil: "உறுப்புச் செயற்கூறு மற்றும் நட்புச் செயற்கூறு மூலம் செயற்குறி பணிமிகுப்பு எவ்வாறு வேறுபடுகிறது?",
    answer: "Member Function Overloading:\n- Unary operator takes 0 explicit arguments (*this is implicit).\n- Binary operator takes 1 explicit argument.\n\nFriend Function Overloading:\n- Unary operator takes 1 explicit argument.\n- Binary operator takes 2 explicit arguments.",
    answerTamil: "உறுப்புச் செயற்கூறு முறை:\n- ஒரும செயற்குறி 0 அளபுருவை ஏற்கும்.\n- இரும செயற்குறி 1 அளபுருவை ஏற்கும்.\n\nநட்புச் செயற்கூறு முறை:\n- ஒரும செயற்குறி 1 அளபுருவை ஏற்கும்.\n- இரும செயற்குறி 2 அளபுருக்களை ஏற்கும்.", isBookBack: true
  },

  // 5 Marks (4)
  {
    id: "cs11-ch15-5m-1", chapterNo: 15, chapterName: "Polymorphism", chapterNameTamil: "பல்லுருவாக்கம்", marks: 5, type: "essay",
    questionText: "Explain Function Overloading in C++ with rules and a complete working program to compute areas of different shapes.", questionTextTamil: "C++ மொழியில் செயற்கூறு பணிமிகுப்பினை அதன் விதிகள் மற்றும் பல்வேறு வடிவங்களின் பரப்பளவைக் கணக்கிடும் முழுமையான மாதிரி நிரலுடன் விரிவாக விளக்குக.",
    answer: "#include <iostream>\nusing namespace std;\nfloat area(float r) {\n    return 3.14159 * r * r;\n}\nint area(int l, int b) {\n    return l * b;\n}\nfloat area(float b, float h, int type) {\n    return 0.5 * b * h;\n}\nint main() {\n    cout << \"Area of Circle (r=5): \" << area(5.0f) << endl;\n    cout << \"Area of Rectangle (l=4, b=6): \" << area(4, 6) << endl;\n    cout << \"Area of Triangle (b=5, h=8): \" << area(5.0f, 8.0f, 1) << endl;\n    return 0;\n}",
    answerTamil: "செயற்கூறு பணிமிகுப்பு என்பது ஒரே பெயர் கொண்ட செயற்கூறுகளை வெவ்வேறு அளபுருக்களுடன் அமைக்கும் முறையாகும்.\n\nநிரல்:\n#include <iostream>\nusing namespace std;\nfloat area(float r) { return 3.14159 * r * r; }\nint area(int l, int b) { return l * b; }\nfloat area(float b, float h, int t) { return 0.5 * b * h; }\nint main() {\n    cout << \"வட்டத்தின் பரப்பளவு: \" << area(5.0f);\n    cout << \"\\nசெவ்வகத்தின் பரப்பளவு: \" << area(4, 6);\n    return 0;\n}", isBookBack: true, isCompulsoryEligible: true
  },
  {
    id: "cs11-ch15-5m-2", chapterNo: 15, chapterName: "Polymorphism", chapterNameTamil: "பல்லுருவாக்கம்", marks: 5, type: "essay",
    questionText: "Explain Binary Operator Overloading in C++ with a complete program to add two Complex Numbers using '+' operator.", questionTextTamil: "C++ மொழியில் இரும செயற்குறி பணிமிகுப்பினை '+' செயற்குறியைக் கொண்டு இரு சிக்கலெண்களைக் கூட்டும் மாதிரி நிரலுடன் விரிவாக விளக்குக.",
    answer: "#include <iostream>\nusing namespace std;\nclass Complex {\n    float real, imag;\npublic:\n    Complex(float r = 0, float i = 0) : real(r), imag(i) {}\n    Complex operator + (Complex const &obj) {\n        Complex res;\n        res.real = real + obj.real;\n        res.imag = imag + obj.imag;\n        return res;\n    }\n    void display() {\n        cout << real << \" + \" << imag << \"i\" << endl;\n    }\n};\nint main() {\n    Complex c1(3.5, 2.5), c2(1.5, 4.5);\n    Complex c3 = c1 + c2; // Calls operator+\n    cout << \"Sum: \"; c3.display();\n    return 0;\n}",
    answerTamil: "இரும செயற்குறி பணிமிகுப்பு என்பது '+' போன்ற இரும செயற்குறிகளை இரு பொருட்களின் மீது செயல்பட வைப்பதாகும்.\n\nசிக்கலெண் கூட்டல் நிரல்:\nclass Complex {\n    float r, i;\npublic:\n    Complex(float r=0, float i=0): r(r), i(i) {}\n    Complex operator + (Complex const &c) {\n        return Complex(r + c.r, i + c.i);\n    }\n    void display() { cout << r << \" + \" << i << \"i\"; }\n};", isBookBack: true
  },
  {
    id: "cs11-ch15-5m-3", chapterNo: 15, chapterName: "Polymorphism", chapterNameTamil: "பல்லுருவாக்கம்", marks: 5, type: "essay",
    questionText: "Explain Unary Operator Overloading with a complete program to overload the unary minus (-) operator.", questionTextTamil: "ஒரும செயற்குறி பணிமிகுப்பினை (Unary operator overloading) ஒரும கழித்தல் (-) செயற்குறியைப் பணிமிகுக்கும் நிரலுடன் விளக்குக.",
    answer: "#include <iostream>\nusing namespace std;\nclass Space {\n    int x, y, z;\npublic:\n    Space(int a, int b, int c) : x(a), y(b), z(c) {}\n    void operator - () { // Overloading unary minus\n        x = -x;\n        y = -y;\n        z = -z;\n    }\n    void display() {\n        cout << \"x=\" << x << \", y=\" << y << \", z=\" << z << endl;\n    }\n};\nint main() {\n    Space s(10, -20, 30);\n    cout << \"Original: \"; s.display();\n    -s; // Calls operator-\n    cout << \"After unary minus: \"; s.display();\n    return 0;\n}",
    answerTamil: "ஒரும செயற்குறி பணிமிகுப்பு என்பது ஒற்றைச் செயலேற்பியின் மீது செயல்படும் ஒரும செயற்குறிகளுக்குப் புதிய பொருளை வழங்குவதாகும்.\n\nநிரல்:\nclass Space {\n    int x, y, z;\npublic:\n    Space(int a, int b, int c): x(a), y(b), z(c) {}\n    void operator - () {\n        x = -x; y = -y; z = -z;\n    }\n    void display() { cout << x << \" \" << y << \" \" << z; }\n};", isBookBack: true
  },
  {
    id: "cs11-ch15-5m-4", chapterNo: 15, chapterName: "Polymorphism", chapterNameTamil: "பல்லுருவாக்கம்", marks: 5, type: "essay",
    questionText: "Write rules, advantages, and limitations of Operator Overloading in C++.", questionTextTamil: "C++ மொழியில் செயற்குறி பணிமிகுப்பிற்கான விதிகள், நன்மைகள் மற்றும் வரம்புகளை விரிவாக எழுதுக.",
    answer: "Rules:\n1. Only existing operators can be overloaded.\n2. Operators ::, ., .*, ?:, sizeof cannot be overloaded.\n3. Precedence and associativity remain unchanged.\n4. Overloaded operator must take at least one user-defined class operand.\n\nAdvantages:\n1. Allows user-defined data types to behave like primitive types.\n2. Makes code intuitive, concise, and highly readable.\n\nLimitations:\n1. Overuse can cause confusion and reduce readability if operations are unintuitive.\n2. Cannot invent new operator notations.",
    answerTamil: "விதிகள்:\n1. ஏற்கனவே உள்ள செயற்குறிகளை மட்டுமே பணிமிகுக்க முடியும்.\n2. ::, ., .*, ?:, sizeof ஆகியவற்றை பணிமிகுக்க இயலாது.\n3. செயற்குறிகளின் முன்னுரிமை மாறாது.\n\nநன்மைகள்:\n1. பயனர் உருவாக்கிய இனக்குழுக்கள் அடிப்படைத் தரவினங்களைப் போலவே செயல்பட முடிகிறது.\n2. நிரலின் வாசிப்புத் தன்மை அதிகரிக்கிறது.\n\nவரம்புகள்:\nபுதிய குறியீடுகளை உருவாக்க முடியாது.", isBookBack: true
  }
];

// ==========================================
// CHAPTER 16: Inheritance (மரபுரிமம்)
// 1M: 5, 2M: 5, 3M: 5, 5M: 4 (Total: 19)
// ==========================================
const ch16 = [
  // 1 Marks (5)
  {
    id: "cs11-ch16-1m-1", chapterNo: 16, chapterName: "Inheritance", chapterNameTamil: "மரபுரிமம்", marks: 1, type: "mcq",
    questionText: "Which is the class from which other classes are derived?", questionTextTamil: "பிற இனக்குழுக்கள் எந்த இனக்குழுவிலிருந்து பண்புகளைப் பெறுகின்றனவோ அது:",
    options: { A: "Base class (Parent class)", B: "Derived class", C: "Child class", D: "Sub class" },
    optionsTamil: { A: "அடிப்படை இனக்குழு (Base class)", B: "தருவிக்கப்பட்ட இனக்குழு", C: "மகன் இனக்குழு", D: "துணை இனக்குழு" },
    correctOption: "A", answer: "A) Base class (Parent class)", answerTamil: "A) அடிப்படை இனக்குழு", isBookBack: true
  },
  {
    id: "cs11-ch16-1m-2", chapterNo: 16, chapterName: "Inheritance", chapterNameTamil: "மரபுரிமம்", marks: 1, type: "mcq",
    questionText: "A class derived from another derived class is called which type of inheritance?", questionTextTamil: "ஏற்கனவே தருவிக்கப்பட்ட ஒரு இனக்குழுவிலிருந்து மற்றொரு இனக்குழுவை உருவாக்குவது எந்த வகையான மரபுரிமம்?",
    options: { A: "Single Inheritance", B: "Multilevel Inheritance", C: "Multiple Inheritance", D: "Hierarchical Inheritance" },
    optionsTamil: { A: "ஒற்றை மரபுரிமம்", B: "பலநிலை மரபுரிமம் (Multilevel)", C: "பலவழி மரபுரிமம்", D: "படிநிலை மரபுரிமம்" },
    correctOption: "B", answer: "B) Multilevel Inheritance", answerTamil: "B) பலநிலை மரபுரிமம்", isBookBack: true
  },
  {
    id: "cs11-ch16-1m-3", chapterNo: 16, chapterName: "Inheritance", chapterNameTamil: "மரபுரிமம்", marks: 1, type: "mcq",
    questionText: "Deriving a single class from two or more base classes is known as:", questionTextTamil: "இரண்டு அல்லது அதற்கு மேற்பட்ட அடிப்படை இனக்குழுக்களிலிருந்து ஒரே ஒரு தருவிக்கப்பட்ட இனக்குழுவை உருவாக்குவது:",
    options: { A: "Multiple Inheritance", B: "Single Inheritance", C: "Hybrid Inheritance", D: "Hierarchical Inheritance" },
    optionsTamil: { A: "பலவழி மரபுரிமம் (Multiple Inheritance)", B: "ஒற்றை மரபுரிமம்", C: "கலப்பின மரபுரிமம்", D: "படிநிலை மரபுரிமம்" },
    correctOption: "A", answer: "A) Multiple Inheritance", answerTamil: "A) பலவழி மரபுரிமம்", isBookBack: true
  },
  {
    id: "cs11-ch16-1m-4", chapterNo: 16, chapterName: "Inheritance", chapterNameTamil: "மரபுரிமம்", marks: 1, type: "mcq",
    questionText: "Which members of a base class are NEVER inherited by derived classes?", questionTextTamil: "அடிப்படை இனக்குழுவின் எந்த உறுப்புகள் தருவிக்கப்பட்ட இனக்குழுவிற்கு மரபுரிமமாக எப்போதும் பெறப்படாது?",
    options: { A: "public members", B: "protected members", C: "private members", D: "Constructors and Destructors" },
    optionsTamil: { A: "public உறுப்புகள்", B: "protected உறுப்புகள்", C: "private உறுப்புகள்", D: "ஆக்கிகள் மற்றும் அழிப்பிகள் (Constructors & Destructors)" },
    correctOption: "C", answer: "C) private members", answerTamil: "C) private உறுப்புகள்", isBookBack: true
  },
  {
    id: "cs11-ch16-1m-5", chapterNo: 16, chapterName: "Inheritance", chapterNameTamil: "மரபுரிமம்", marks: 1, type: "mcq",
    questionText: "In which order are constructors executed in multilevel inheritance?", questionTextTamil: "பலநிலை மரபுரிமத்தில் ஆக்கிகள் (Constructors) எந்த வரிசையில் இயக்கப்படுகின்றன?",
    options: { A: "Derived class to Base class", B: "Base class to Derived class", C: "Random order", D: "Alphabetical order" },
    optionsTamil: { A: "தருவிக்கப்பட்டதிலிருந்து அடிப்படைக்கு", B: "அடிப்படை இனக்குழுவிலிருந்து தருவிக்கப்பட்ட இனக்குழுவுக்கு (Base to Derived)", C: "எதேச்சையாக", D: "அகரவரிசையில்" },
    correctOption: "B", answer: "B) Base class to Derived class", answerTamil: "B) அடிப்படை இனக்குழுவிலிருந்து தருவிக்கப்பட்ட இனக்குழுவுக்கு", isBookBack: true
  },

  // 2 Marks (5)
  {
    id: "cs11-ch16-2m-1", chapterNo: 16, chapterName: "Inheritance", chapterNameTamil: "மரபுரிமம்", marks: 2, type: "short",
    questionText: "Define Inheritance in C++.", questionTextTamil: "C++ மொழியில் மரபுரிமம் வரையறுக்கவும்.",
    answer: "Inheritance is the mechanism by which a new class (derived class) inherits data members and member functions from an existing class (base class).",
    answerTamil: "மரபுரிமம் (Inheritance) என்பது ஏற்கனவே உள்ள அடிப்படை இனக்குழுவிலிருந்து புதிய தருவிக்கப்பட்ட இனக்குழு அதன் பண்புகளையும் செயல்பாடுகளையும் பெறும் செயல்முறையாகும்.", isBookBack: true
  },
  {
    id: "cs11-ch16-2m-2", chapterNo: 16, chapterName: "Inheritance", chapterNameTamil: "மரபுரிமம்", marks: 2, type: "short",
    questionText: "What is a Base Class and a Derived Class?", questionTextTamil: "அடிப்படை இனக்குழு மற்றும் தருவிக்கப்பட்ட இனக்குழு என்றால் என்ன?",
    answer: "Base Class (Parent): The original class whose properties and methods are inherited.\nDerived Class (Child): The new class that inherits from the base class and adds new capabilities.",
    answerTamil: "அடிப்படை இனக்குழு (Base class): பண்புகளை வழங்கும் மூல இனக்குழு.\nதருவிக்கப்பட்ட இனக்குழு (Derived class): அடிப்படை இனக்குழுவிலிருந்து பண்புகளைப் பெற்று உருவாகும் புதிய இனக்குழு.", isBookBack: true
  },
  {
    id: "cs11-ch16-2m-3", chapterNo: 16, chapterName: "Inheritance", chapterNameTamil: "மரபுரிமம்", marks: 2, type: "short",
    questionText: "Write the general syntax for deriving a class in C++.", questionTextTamil: "ஒரு இனக்குழுவை தருவிக்கும் பொதுவான தொடரியலை எழுதுக.",
    answer: "Syntax:\nclass Derived_Class_Name : visibility_mode Base_Class_Name {\n    // members of derived class\n};",
    answerTamil: "தொடரியல்:\nclass தருவிக்கப்பட்ட_இனக்குழு : அணுகியல்பு அடிப்படை_இனக்குழு {\n    // புதிய உறுப்புகள்\n};", isBookBack: true
  },
  {
    id: "cs11-ch16-2m-4", chapterNo: 16, chapterName: "Inheritance", chapterNameTamil: "மரபுரிமம்", marks: 2, type: "short",
    questionText: "What is Single Inheritance?", questionTextTamil: "ஒற்றை மரபுரிமம் (Single Inheritance) என்றால் என்ன?",
    answer: "Single inheritance is when a derived class inherits from only one base class (e.g. Class A -> Class B).",
    answerTamil: "ஒரே ஒரு அடிப்படை இனக்குழுவிலிருந்து ஒரே ஒரு தருவிக்கப்பட்ட இனக்குழு உருவாக்கப்படுவது ஒற்றை மரபுரிமம் எனப்படும் (A -> B).", isBookBack: true
  },
  {
    id: "cs11-ch16-2m-5", chapterNo: 16, chapterName: "Inheritance", chapterNameTamil: "மரபுரிமம்", marks: 2, type: "short",
    questionText: "What is Multiple Inheritance?", questionTextTamil: "பலவழி மரபுரிமம் (Multiple Inheritance) என்றால் என்ன?",
    answer: "Multiple inheritance is when a derived class inherits simultaneously from two or more base classes (e.g. Class A, Class B -> Class C).",
    answerTamil: "இரண்டு அல்லது அதற்கு மேற்பட்ட அடிப்படை இனக்குழுக்களிலிருந்து ஒரு புதிய தருவிக்கப்பட்ட இனக்குழு உருவாக்கப்படுவது பலவழி மரபுரிமம் எனப்படும்.", isBookBack: true
  },

  // 3 Marks (5)
  {
    id: "cs11-ch16-3m-1", chapterNo: 16, chapterName: "Inheritance", chapterNameTamil: "மரபுரிமம்", marks: 3, type: "brief",
    questionText: "Explain Visibility Modes (public, private, protected) in Inheritance.", questionTextTamil: "மரபுரிமத்தில் அணுகியல்பு முறைகளை (Visibility Modes) விளக்குக.",
    answer: "1. Public Inheritance: Public members remain public; protected remain protected.\n2. Private Inheritance: Public and protected members become private in derived class.\n3. Protected Inheritance: Public and protected members become protected in derived class.",
    answerTamil: "1. Public முறை: அடிப்படை இனக்குழுவின் public உறுப்புகள் public ஆகவும், protected உறுப்புகள் protected ஆகவும் தொடரும்.\n2. Private முறை: அடிப்படை இனக்குழுவின் public, protected உறுப்புகள் private ஆக மாறும்.\n3. Protected முறை: public மற்றும் protected உறுப்புகள் protected ஆக மாறும்.", isBookBack: true
  },
  {
    id: "cs11-ch16-3m-2", chapterNo: 16, chapterName: "Inheritance", chapterNameTamil: "மரபுரிமம்", marks: 3, type: "brief",
    questionText: "Explain Multilevel Inheritance with an example.", questionTextTamil: "பலநிலை மரபுரிமம் (Multilevel Inheritance) பற்றி எடுத்துக்காட்டுடன் விளக்குக.",
    answer: "In multilevel inheritance, a derived class is inherited from another derived class, forming an inheritance chain.\nExample: Grandparent -> Parent -> Child\n\nCode:\nclass A { ... };\nclass B : public A { ... };\nclass C : public B { ... };",
    answerTamil: "ஒரு தருவிக்கப்பட்ட இனக்குழுவானது மற்றொரு தருவிக்கப்பட்ட இனக்குழுவிற்கு அடிப்படையாக அமைந்து ஒரு தொடர் சங்கிலியை உருவாக்குவது பலநிலை மரபுரிமம் எனப்படும்.\nஎடுத்துக்காட்டு: தாத்தா -> தந்தை -> மகன் (A -> B -> C).", isBookBack: true
  },
  {
    id: "cs11-ch16-3m-3", chapterNo: 16, chapterName: "Inheritance", chapterNameTamil: "மரபுரிமம்", marks: 3, type: "brief",
    questionText: "Explain Hierarchical Inheritance with an example.", questionTextTamil: "படிநிலை மரபுரிமம் (Hierarchical Inheritance) பற்றி எடுத்துக்காட்டுடன் விளக்குக.",
    answer: "In hierarchical inheritance, multiple derived classes are created from a single common base class.\nExample: Shape is base class; Circle, Rectangle, Triangle are derived classes.",
    answerTamil: "ஒரே ஒரு அடிப்படை இனக்குழுவிலிருந்து பல தருவிக்கப்பட்ட இனக்குழுக்கள் உருவாக்கப்படுவது படிநிலை மரபுரிமம் எனப்படும்.\nஎடுத்துக்காட்டு: வடிவம் (Shape) என்பது அடிப்படை; வட்டம், செவ்வகம் ஆகியவை அதிலிருந்து தருவிக்கப்பட்டவை.", isBookBack: true
  },
  {
    id: "cs11-ch16-3m-4", chapterNo: 16, chapterName: "Inheritance", chapterNameTamil: "மரபுரிமம்", marks: 3, type: "brief",
    questionText: "Explain Hybrid Inheritance with an inheritance diagram.", questionTextTamil: "கலப்பின மரபுரிமம் (Hybrid Inheritance) பற்றி வரைபடத்துடன் விளக்குக.",
    answer: "Hybrid inheritance is a combination of two or more types of inheritance (e.g. combination of Hierarchical and Multiple inheritance, often forming a diamond shape).",
    answerTamil: "ஒன்றுக்கும் மேற்பட்ட மரபுரிம வகைகளின் (எ.கா: படிநிலை மற்றும் பலவழி மரபுரிமம்) கலவை கலப்பின மரபுரிமம் எனப்படும்.", isBookBack: true
  },
  {
    id: "cs11-ch16-3m-5", chapterNo: 16, chapterName: "Inheritance", chapterNameTamil: "மரபுரிமம்", marks: 3, type: "brief",
    questionText: "Explain the order of execution of Constructors and Destructors in Inheritance.", questionTextTamil: "மரபுரிமத்தில் ஆக்கிகள் மற்றும் அழிப்பிகள் இயக்கப்படும் வரிசைமுறையை விளக்குக.",
    answer: "1. Constructors: Executed in Top-Down order from Base class constructor first, down to Derived class constructor.\n2. Destructors: Executed in exact reverse Bottom-Up order from Derived class destructor first, up to Base class destructor.",
    answerTamil: "1. ஆக்கிகள் (Constructors): மேலிருந்து கீழ் வரிசையில் அடிப்படை இனக்குழுவின் ஆக்கி முதலில் இயங்கும், பின் தருவிக்கப்பட்ட இனக்குழுவின் ஆக்கி இயங்கும்.\n2. அழிப்பிகள் (Destructors): கீழிருந்து மேல் வரிசையில் தருவிக்கப்பட்ட இனக்குழுவின் அழிப்பி முதலில் இயங்கி, இறுதியில் அடிப்படை இனக்குழுவின் அழிப்பி இயங்கும்.", isBookBack: true
  },

  // 5 Marks (4)
  {
    id: "cs11-ch16-5m-1", chapterNo: 16, chapterName: "Inheritance", chapterNameTamil: "மரபுரிமம்", marks: 5, type: "essay",
    questionText: "Explain different types of Inheritance in C++ with diagrams and class declarations.", questionTextTamil: "C++ மொழியில் உள்ள பல்வேறு வகையான மரபுரிமங்களை வரைபடங்கள் மற்றும் மாதிரி அறிவிப்புகளுடன் விரிவாக விளக்குக.",
    answer: "1. Single Inheritance: 1 Base -> 1 Derived (class B : public A)\n2. Multiple Inheritance: Multiple Bases -> 1 Derived (class C : public A, public B)\n3. Multilevel Inheritance: A -> B -> C (class C : public B)\n4. Hierarchical Inheritance: 1 Base -> Multiple Derived (class B : public A; class C : public A)\n5. Hybrid Inheritance: Combination of two or more types (e.g., Multilevel + Multiple).",
    answerTamil: "1. ஒற்றை மரபுரிமம்: ஒரு அடிப்படை -> ஒரு தருவிக்கப்பட்டது (class B : public A)\n2. பலவழி மரபுரிமம்: பல அடிப்படை -> ஒரு தருவிக்கப்பட்டது (class C : public A, public B)\n3. பலநிலை மரபுரிமம்: படிநிலை சங்கிலி (A -> B -> C)\n4. படிநிலை மரபுரிமம்: ஒரு அடிப்படை -> பல தருவிக்கப்பட்டவை\n5. கலப்பின மரபுரிமம்: இரண்டு அல்லது அதற்கு மேற்பட்ட மரபுரிமங்களின் கலவை.", isBookBack: true
  },
  {
    id: "cs11-ch16-5m-2", chapterNo: 16, chapterName: "Inheritance", chapterNameTamil: "மரபுரிமம்", marks: 5, type: "essay",
    questionText: "Write a complete C++ program demonstrating Single Inheritance: Student Base class and Marks Derived class.", questionTextTamil: "மாணவர் (Student) அடிப்படை இனக்குழு மற்றும் மதிப்பெண் (Marks) தருவிக்கப்பட்ட இனக்குழுவைக் கொண்ட ஒற்றை மரபுரிமத்தை விளக்கும் முழுமையான C++ நிரலை எழுதுக.",
    answer: "#include <iostream>\nusing namespace std;\nclass Student {\nprotected:\n    int roll_no;\n    char name[30];\npublic:\n    void getStudent() {\n        cout << \"Enter Roll No and Name: \";\n        cin >> roll_no >> name;\n    }\n};\nclass Marks : public Student {\n    float m1, m2, total;\npublic:\n    void getMarks() {\n        getStudent();\n        cout << \"Enter Marks in 2 subjects: \";\n        cin >> m1 >> m2;\n        total = m1 + m2;\n    }\n    void display() {\n        cout << \"\\nRoll No: \" << roll_no << \", Name: \" << name << endl;\n        cout << \"Total Marks: \" << total << endl;\n    }\n};\nint main() {\n    Marks student1;\n    student1.getMarks();\n    student1.display();\n    return 0;\n}",
    answerTamil: "#include <iostream>\nusing namespace std;\nclass Student {\nprotected:\n    int roll;\n    char name[20];\npublic:\n    void getStudent() { cin >> roll >> name; }\n};\nclass Marks : public Student {\n    int m1, m2, total;\npublic:\n    void getMarks() {\n        getStudent();\n        cin >> m1 >> m2;\n        total = m1 + m2;\n    }\n    void display() {\n        cout << \"பதிவு எண்: \" << roll << \" பெயர்: \" << name << \" மொத்தம்: \" << total;\n    }\n};\nint main() {\n    Marks s; s.getMarks(); s.display();\n    return 0;\n}", isBookBack: true, isCompulsoryEligible: true
  },
  {
    id: "cs11-ch16-5m-3", chapterNo: 16, chapterName: "Inheritance", chapterNameTamil: "மரபுரிமம்", marks: 5, type: "essay",
    questionText: "Explain how visibility modes (public, private, protected) affect inheritance of base class members with a summary table.", questionTextTamil: "அணுகியல்பு முறைகள் (public, private, protected) அடிப்படை இனக்குழுவின் உறுப்புகள் மரபுரிமமாகப் பெறப்படும் விதத்தை எவ்வாறு மாற்றியமைக்கின்றன என்பதை அட்டவணையுடன் விளக்குக.",
    answer: "Inheritance Visibility Table:\n------------------------------------------------------------\nBase Class Member | Public Inh.   | Private Inh.  | Protected Inh.\n------------------------------------------------------------\nPrivate           | Not Inherited | Not Inherited | Not Inherited\nProtected         | Protected     | Private       | Protected\nPublic            | Public        | Private       | Protected\n------------------------------------------------------------\nExplanation:\n- Private members are never accessible directly in derived class under any mode.\n- Under public mode, public remains public, protected remains protected.\n- Under private mode, all inherited members become private.\n- Under protected mode, public and protected members become protected.",
    answerTamil: "அணுகியல்பு முறைகளின் அட்டவணை:\n- Private உறுப்புகள் எப்போதுமே தருவிக்கப்பட்ட இனக்குழுவுக்கு மரபுரிமமாக வராது.\n- Public மரபுரிமத்தில்: public -> public ஆகவும், protected -> protected ஆகவும் இருக்கும்.\n- Private மரபுரிமத்தில்: public மற்றும் protected இரண்டுமே private ஆக மாறும்.\n- Protected மரபுரிமத்தில்: public மற்றும் protected இரண்டுமே protected ஆக மாறும்.", isBookBack: true
  },
  {
    id: "cs11-ch16-5m-4", chapterNo: 16, chapterName: "Inheritance", chapterNameTamil: "மரபுரிமம்", marks: 5, type: "essay",
    questionText: "Write a complete C++ program demonstrating Multilevel Inheritance.", questionTextTamil: "பலநிலை மரபுரிமத்தை (Multilevel Inheritance) விளக்கும் முழுமையான C++ மாதிரி நிரலை எழுதுக.",
    answer: "#include <iostream>\nusing namespace std;\nclass Person {\nprotected:\n    char name[30];\npublic:\n    void getName() { cout << \"Enter Name: \"; cin >> name; }\n};\nclass Employee : public Person {\nprotected:\n    int emp_id;\npublic:\n    void getEmp() { getName(); cout << \"Enter ID: \"; cin >> emp_id; }\n};\nclass Manager : public Employee {\n    float salary;\npublic:\n    void getManager() { getEmp(); cout << \"Enter Salary: \"; cin >> salary; }\n    void show() {\n        cout << \"\\n--- Details ---\\nName: \" << name << \"\\nID: \" << emp_id << \"\\nSalary: \" << salary << endl;\n    }\n};\nint main() {\n    Manager m; m.getManager(); m.show();\n    return 0;\n}",
    answerTamil: "பலநிலை மரபுரிம மாதிரி நிரல்:\n#include <iostream>\nusing namespace std;\nclass Person {\nprotected:\n    char name[20];\npublic:\n    void getName() { cin >> name; }\n};\nclass Employee : public Person {\nprotected:\n    int id;\npublic:\n    void getEmp() { getName(); cin >> id; }\n};\nclass Manager : public Employee {\n    float salary;\npublic:\n    void getManager() { getEmp(); cin >> salary; }\n    void show() { cout << name << \" \" << id << \" \" << salary; }\n};\nint main() { Manager m; m.getManager(); m.show(); return 0; }", isBookBack: true
  }
];

fs.writeFileSync('./scripts/ch15.json', JSON.stringify(ch15, null, 2));
fs.writeFileSync('./scripts/ch16.json', JSON.stringify(ch16, null, 2));
console.log('Ch15, Ch16 built successfully!');
