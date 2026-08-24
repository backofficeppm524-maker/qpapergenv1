import fs from 'fs';

// ==========================================
// CHAPTER 6: Specification and Abstraction (விவரக்குறிப்பு மற்றும் அருவமாக்கம்)
// 1M: 7, 2M: 5, 3M: 6, 5M: 3 (Total: 21)
// ==========================================
const ch6 = [
  // 1 Marks (7)
  {
    id: "cs11-ch6-1m-1", chapterNo: 6, chapterName: "Specification and Abstraction", chapterNameTamil: "விவரக்குறிப்பு மற்றும் அருவமாக்கம்", marks: 1, type: "mcq",
    questionText: "Which of the following activities is algorithmic in nature?", questionTextTamil: "பின்வரும் செயல்பாடுகளில் சரியான நெறிமுறை சார்ந்தது எது?",
    options: { A: "Assembling a bicycle", B: "Looking at a painting", C: "Listening to music", D: "Walking in park" },
    optionsTamil: { A: "மிதிவண்டி பாகங்களை இணைத்தல்", B: "ஓவியத்தை ரசித்தல்", C: "இசை கேட்டல்", D: "பூங்காவில் நடப்பது" },
    correctOption: "A", answer: "A) Assembling a bicycle", answerTamil: "A) மிதிவண்டி பாகங்களை இணைத்தல்", isBookBack: true
  },
  {
    id: "cs11-ch6-1m-2", chapterNo: 6, chapterName: "Specification and Abstraction", chapterNameTamil: "விவரக்குறிப்பு மற்றும் அருவமாக்கம்", marks: 1, type: "mcq",
    questionText: "Which of the following is NOT algorithmic in nature?", questionTextTamil: "பின்வரும் செயல்பாடுகளில் எது சரியான நெறிமுறை சார்ந்தது அல்ல?",
    options: { A: "Multiplying two numbers", B: "Drawing a kolam (rangoli)", C: "Sorting a list", D: "Binary search" },
    optionsTamil: { A: "இரண்டு எண்களை பெருக்குதல்", B: "ஒரு கோலத்தை வரைதல்", C: "வரிசைப்படுத்துதல்", D: "இருமை தேடல்" },
    correctOption: "B", answer: "B) Drawing a kolam", answerTamil: "B) ஒரு கோலத்தை வரைதல்", isBookBack: true
  },
  {
    id: "cs11-ch6-1m-3", chapterNo: 6, chapterName: "Specification and Abstraction", chapterNameTamil: "விவரக்குறிப்பு மற்றும் அருவமாக்கம்", marks: 1, type: "mcq",
    questionText: "Hiding irrelevant details and highlighting only the essential details is known as:", questionTextTamil: "பணிக்குத் தகுதியற்ற விவரங்களைத் தவிர்த்து, அவசியமானவற்றை மட்டுமே குறிக்கும் பணியின் அம்சங்கள் என அழைக்கப்படுவது எது?",
    options: { A: "Specification", B: "Abstraction", C: "Composition", D: "Decomposition" },
    optionsTamil: { A: "விவரக்குறிப்பு", B: "அருவமாக்கம் (Abstraction)", C: "ஒருங்கிணைத்தல்", D: "பிரித்தல்" },
    correctOption: "B", answer: "B) Abstraction", answerTamil: "B) அருவமாக்கம்", isBookBack: true
  },
  {
    id: "cs11-ch6-1m-4", chapterNo: 6, chapterName: "Specification and Abstraction", chapterNameTamil: "விவரக்குறிப்பு மற்றும் அருவமாக்கம்", marks: 1, type: "mcq",
    questionText: "Specifying input property and input-output relation of a problem is called:", questionTextTamil: "உள்ளீட்டு பண்பு மற்றும் உள்ளீடு-வெளியீடு தொடர்பை ஒரு சிக்கலில் குறிப்பிடுவதை எவ்வாறு அழைக்கலாம்?",
    options: { A: "Specification", B: "Statements", C: "Algorithm", D: "Definition" },
    optionsTamil: { A: "விவரக்குறிப்பு (Specification)", B: "கூற்றுக்கள்", C: "நெறிமுறை", D: "வரையறை" },
    correctOption: "A", answer: "A) Specification", answerTamil: "A) விவரக்குறிப்பு", isBookBack: true
  },
  {
    id: "cs11-ch6-1m-5", chapterNo: 6, chapterName: "Specification and Abstraction", chapterNameTamil: "விவரக்குறிப்பு மற்றும் அருவமாக்கம்", marks: 1, type: "mcq",
    questionText: "Ensuring the input-output relation is the responsibility of:", questionTextTamil: "உள்ளீடு வெளியீடு உறவை உறுதிப்படுத்துவது எது?",
    options: { A: "Algorithm designer and user contract", B: "Computer manufacturer", C: "Compiler", D: "Operating system" },
    optionsTamil: { A: "நெறிமுறை மற்றும் பயனர் உரிமையின் பொறுப்பு", B: "கணினி தயாரிப்பாளர்", C: "மொழிபெயர்ப்பி", D: "இயக்க அமைப்பு" },
    correctOption: "A", answer: "A) Algorithm designer and user contract", answerTamil: "A) நெறிமுறை மற்றும் பயனர் உரிமையின் பொறுப்பு", isBookBack: true
  },
  {
    id: "cs11-ch6-1m-6", chapterNo: 6, chapterName: "Specification and Abstraction", chapterNameTamil: "விவரக்குறிப்பு மற்றும் அருவமாக்கம்", marks: 1, type: "mcq",
    questionText: "If i = 5 before execution, what is the value of i after executing i := i - 1?", questionTextTamil: "i = 5; இயக்குவதற்கு முன், i: = i - 1 இயக்கியதற்கு பின் i-ன் மதிப்பு:",
    options: { A: "5", B: "4", C: "3", D: "2" },
    optionsTamil: { A: "5", B: "4", C: "3", D: "2" },
    correctOption: "B", answer: "B) 4", answerTamil: "B) 4", isBookBack: true
  },
  {
    id: "cs11-ch6-1m-7", chapterNo: 6, chapterName: "Specification and Abstraction", chapterNameTamil: "விவரக்குறிப்பு மற்றும் அருவமாக்கம்", marks: 1, type: "mcq",
    questionText: "If 0 < i before execution, what is the property after executing i := i - 1?", questionTextTamil: "0 < i இயக்குவதற்கு முன், i: = i - 1 இயக்கியதற்கு பின் i-ன் மதிப்பு:",
    options: { A: "0 < i", B: "0 <= i", C: "i = 0", D: "0 >= i" },
    optionsTamil: { A: "0 < i", B: "0 <= i", C: "i = 0", D: "0 >= i" },
    correctOption: "B", answer: "B) 0 <= i", answerTamil: "B) 0 <= i", isBookBack: true
  },
  // 2 Marks (5)
  {
    id: "cs11-ch6-2m-1", chapterNo: 6, chapterName: "Specification and Abstraction", chapterNameTamil: "விவரக்குறிப்பு மற்றும் அருவமாக்கம்", marks: 2, type: "short",
    questionText: "Define an Algorithm.", questionTextTamil: "ஒரு நெறிமுறை வரையறுக்கவும்.",
    answer: "An algorithm is a step-by-step sequence of finite, well-defined instructions for solving a specific computational problem.",
    answerTamil: "நெறிமுறை (Algorithm) என்பது ஒரு குறிப்பிட்ட சிக்கலைத் தீர்ப்பதற்காக படிப்படியாக எழுதப்படும் வரையறுக்கப்பட்ட கட்டளைகளின் வரிசைமுறை ஆகும்.", isBookBack: true
  },
  {
    id: "cs11-ch6-2m-2", chapterNo: 6, chapterName: "Specification and Abstraction", chapterNameTamil: "விவரக்குறிப்பு மற்றும் அருவமாக்கம்", marks: 2, type: "short",
    questionText: "Distinguish between an algorithm and a process.", questionTextTamil: "ஒரு நெறிமுறை மற்றும் ஒரு செயல்முறையை வேறுபடுத்துக.",
    answer: "Algorithm: A precise abstract sequence of instructions designed to solve a problem.\nProcess: The dynamic execution of an algorithm/program on specific inputs by a processor.",
    answerTamil: "நெறிமுறை: சிக்கலைத் தீர்க்க எழுதப்பட்ட வழிமுறைகளின் வரிசை.\nசெயல்முறை (Process): நெறிமுறையின்படி கணினியால் நிஜத்தில் நிறைவேற்றப்படும் செயல்பாடாகும்.", isBookBack: true
  },
  {
    id: "cs11-ch6-2m-3", chapterNo: 6, chapterName: "Specification and Abstraction", chapterNameTamil: "விவரக்குறிப்பு மற்றும் அருவமாக்கம்", marks: 2, type: "short",
    questionText: "Initially, Farmer, Goat, Grass, Wolf = L, L, L, L. Farmer crosses the river with Goat. Formulate state changes using assignment statement.", questionTextTamil: "தொடக்கத்தில், விவசாயி, ஆடு, புல் கட்டு, ஓநாய் = L, L, L, L. விவசாயி ஆட்டுடன் ஆற்றைக் கடக்கிறார். மதிப்பிற்கு கூற்றை பயன்படுத்தி செயல்திட்டம் ஒன்றை உருவாக்குக.",
    answer: "-- Initial State: farmer, goat, grass, wolf := L, L, L, L\n-- Farmer and Goat cross from Left (L) to Right (R):\nfarmer, goat := R, R\n-- Resulting State: farmer, goat, grass, wolf = R, R, L, L.",
    answerTamil: "தொடக்க நிலை: farmer, goat, grass, wolf := L, L, L, L\nவிவசாயி ஆட்டுடன் மறுகரைக்குச் செல்கிறார்:\nfarmer, goat := R, R\nமுடிவு நிலை: farmer, goat, grass, wolf = R, R, L, L.", isBookBack: true
  },
  {
    id: "cs11-ch6-2m-4", chapterNo: 6, chapterName: "Specification and Abstraction", chapterNameTamil: "விவரக்குறிப்பு மற்றும் அருவமாக்கம்", marks: 2, type: "short",
    questionText: "Specify a function to find the minimum of three numbers.", questionTextTamil: "மூன்று எண்களில், மிக சிறிய எண்ணை கண்டுபிடிக்க ஒரு செயல்பாட்டை குறிப்பிடவும்.",
    answer: "minimum (a, b, c)\n-- inputs : a, b, c are numbers\n-- outputs: m is a number such that m <= a and m <= b and m <= c and (m = a or m = b or m = c)",
    answerTamil: "minimum (a, b, c)\n-- உள்ளீடுகள்: a, b, c எண்கள்\n-- வெளியீடுகள்: m <= a மற்றும் m <= b மற்றும் m <= c மற்றும் (m = a அல்லது m = b அல்லது m = c) என இருக்கும்படி m ஒரு எண்.", isBookBack: true
  },
  {
    id: "cs11-ch6-2m-5", chapterNo: 6, chapterName: "Specification and Abstraction", chapterNameTamil: "விவரக்குறிப்பு மற்றும் அருவமாக்கம்", marks: 2, type: "short",
    questionText: "If sqrt(2) = 1.414, which postcondition of square_root(x) is violated if output is -1.414?\n-- inputs : x is a real number, x >= 0\n-- outputs: y is a real number such that y^2 = x", questionTextTamil: "√2 = 1.414 என இருந்தால், square_root() செயல் கூறின் வெளியீடு -1.414-ஐ பெறுவதற்கு, பின்வருவனவற்றின் பின்விளைவுகளை மீறுவது எது?",
    answer: "The output violates the convention that principal square root should be non-negative (y >= 0). To prevent this, the postcondition must be refined as:\n-- outputs: y is a real number such that y^2 = x and y >= 0.",
    answerTamil: "வர்க்கமூலம் எப்போதும் நேர்மறை எண்ணாக (y >= 0) இருக்க வேண்டும் என்ற விதி மீறப்படுகிறது. எனவே பின்விளைவு 'y^2 = x மற்றும் y >= 0' எனத் திருத்தப்பட வேண்டும்.", isBookBack: true
  },
  // 3 Marks (6)
  {
    id: "cs11-ch6-3m-1", chapterNo: 6, chapterName: "Specification and Abstraction", chapterNameTamil: "விவரக்குறிப்பு மற்றும் அருவமாக்கம்", marks: 3, type: "brief",
    questionText: "When do you say that an algorithm is correct for a problem?", questionTextTamil: "ஒரு பிரச்சனை சரியான நெறிமுறை என்று எப்பொழுது கூறுவீர்கள்?",
    answer: "An algorithm is said to be correct if for every input satisfying the input condition (precondition), the algorithm terminates and produces an output that satisfies the specified input-output relation (postcondition).",
    answerTamil: "முன்நிபந்தனைகளை நிறைவு செய்யும் அனைத்து உள்ளீடுகளுக்கும், நெறிமுறையானது முடிவடைந்து, எதிர்பார்க்கப்படும் பின்நிபந்தனைகளை நிறைவு செய்யும் சரியான வெளியீட்டைத் தந்தால், அந்த நெறிமுறை சரியானது எனப்படும்.", isBookBack: true
  },
  {
    id: "cs11-ch6-3m-2", chapterNo: 6, chapterName: "Specification and Abstraction", chapterNameTamil: "விவரக்குறிப்பு மற்றும் அருவமாக்கம்", marks: 3, type: "brief",
    questionText: "What is the format of an algorithmic specification?", questionTextTamil: "ஒரு நெறிமுறை பற்றிய விவரக்குறிப்பின் வடிவமைப்பு என்ன?",
    answer: "Format:\nAlgorithm_Name (Parameters)\n-- inputs : properties of input variables (precondition)\n-- outputs: desired relation between input and output variables (postcondition)",
    answerTamil: "வடிவமைப்பு:\nநெறிமுறையின்_பெயர் (அளபுருக்கள்)\n-- உள்ளீடுகள் : உள்ளீட்டு மாறிகளின் பண்புகள்\n-- வெளியீடுகள்: உள்ளீடு மற்றும் வெளியீட்டு மாறிகளுக்கிடையேயான விரும்பிய தொடர்பு", isBookBack: true
  },
  {
    id: "cs11-ch6-3m-3", chapterNo: 6, chapterName: "Specification and Abstraction", chapterNameTamil: "விவரக்குறிப்பு மற்றும் அருவமாக்கம்", marks: 3, type: "brief",
    questionText: "What is Abstraction?", questionTextTamil: "அருவமாக்கம் என்றால் என்ன?",
    answer: "Abstraction is the process of ignoring non-essential details of a problem while focusing solely on the essential characteristics needed to solve it effectively.",
    answerTamil: "அருவமாக்கம் (Abstraction) என்பது ஒரு சிக்கலைத் தீர்ப்பதற்குத் தேவையான முக்கியமான அம்சங்களை மட்டும் முன்னிலைப்படுத்தி, தேவையற்ற பின்னணி விவரங்களை மறைக்கும் செயல்முறையாகும்.", isBookBack: true
  },
  {
    id: "cs11-ch6-3m-4", chapterNo: 6, chapterName: "Specification and Abstraction", chapterNameTamil: "விவரக்குறிப்பு மற்றும் அருவமாக்கம்", marks: 3, type: "brief",
    questionText: "How is state of an algorithm represented?", questionTextTamil: "நெறிமுறையின் நிலையை எவ்வாறு குறிப்பிடப்படுகின்றது?",
    answer: "The state of an algorithm is represented by the set of all its variables and the specific values they hold at any given point during execution.",
    answerTamil: "ஒரு நெறிமுறையின் நிலை (State) என்பது அதில் பயன்படுத்தப்படும் மாறிகள் மற்றும் கொடுக்கப்பட்ட நேரத்தில் அவை கொண்டுள்ள மதிப்புகளின் தொகுப்பால் குறிக்கப்படுகிறது.", isBookBack: true
  },
  {
    id: "cs11-ch6-3m-5", chapterNo: 6, chapterName: "Specification and Abstraction", chapterNameTamil: "விவரக்குறிப்பு மற்றும் அருவமாக்கம்", marks: 3, type: "brief",
    questionText: "What is the form and meaning of an assignment statement?", questionTextTamil: "மதிப்பிருத்தல் கூற்றின் வடிவம் மற்றும் பொருள் யாது?",
    answer: "Form: Variable := Expression (e.g., v := e)\nMeaning: Evaluates expression 'e' on current state and stores resultant value into variable 'v', thereby updating the state.",
    answerTamil: "வடிவம்: மாறி := கோவை (Variable := Expression)\nபொருள்: வலதுபுறமுள்ள கோவையின் மதிப்பை கணக்கிட்டு, இடதுபுறமுள்ள மாறிக்கு மதிப்பிருத்தி அதன் நிலையைப் புதுப்பிக்கிறது.", isBookBack: true
  },
  {
    id: "cs11-ch6-3m-6", chapterNo: 6, chapterName: "Specification and Abstraction", chapterNameTamil: "விவரக்குறிப்பு மற்றும் அருவமாக்கம்", marks: 3, type: "brief",
    questionText: "Differentiate between Assignment operator (:=) and Equality relation (=).", questionTextTamil: "மதிப்பிருத்தல் செயற்குறி மற்றும் சமநிலை செயற்குறி இடையே உள்ள வேறுபாடு என்ன?",
    answer: "Assignment (:=): An action/command that assigns a value to a variable and changes the algorithmic state (e.g. x := 10).\nEquality (=): A mathematical boolean condition/property that checks if two values are equal without altering state (e.g. x = y).",
    answerTamil: "மதிப்பிருத்தல் (:=): இது ஒரு மாறிக்கு மதிப்பை வழங்கி நிலையை மாற்றும் கட்டளையாகும் (எ.கா: x := 10).\nசமநிலை (=): இது இரண்டு மதிப்புகள் சமமாக உள்ளதா என சரிபார்க்கும் தருக்கப் பண்பாகும் (நிலையை மாற்றாது).", isBookBack: true
  },
  // 5 Marks (3)
  {
    id: "cs11-ch6-5m-1", chapterNo: 6, chapterName: "Specification and Abstraction", chapterNameTamil: "விவரக்குறிப்பு மற்றும் அருவமாக்கம்", marks: 5, type: "essay",
    questionText: "Write the specification to find hypotenuse of a right-angled triangle given the two shorter sides.", questionTextTamil: "ஒரு நெறிமுறையில் கர்ணம் (hypotunse) பற்றிய விவரக்குறிப்புகளை எழுதுங்கள். வலது கோண முக்கோணத்தின் இரண்டு குறைந்த பக்கத்தையும், மற்றும் வெளியீடு நீளம் மூன்றாம் பக்கத்தையும் காண்க.",
    answer: "hypotenuse (a, b)\n-- inputs : a and b are positive real numbers representing two shorter sides of a right triangle (a > 0, b > 0)\n-- outputs: c is a real number such that c^2 = a^2 + b^2 and c > 0\n\nExplanation:\nBy Pythagorean theorem, in right-angled triangle with shorter perpendicular sides 'a' and 'b', the hypotenuse 'c' satisfies c = sqrt(a^2 + b^2).",
    answerTamil: "விவரக்குறிப்பு:\nhypotenuse (a, b)\n-- உள்ளீடுகள் : a மற்றும் b ஆகியவை செங்கோண முக்கோணத்தின் இரு பக்கங்களின் நீளங்கள் (a > 0, b > 0)\n-- வெளியீடுகள்: c என்பது கர்ணத்தின் நீளம் c^2 = a^2 + b^2 மற்றும் c > 0 என இருக்கும்படி.\n\nவிளக்கம்: பிதாகரஸ் தேற்றப்படி செங்கோண முக்கோணத்தின் கர்ணம் c = sqrt(a^2 + b^2).", isBookBack: true
  },
  {
    id: "cs11-ch6-5m-2", chapterNo: 6, chapterName: "Specification and Abstraction", chapterNameTamil: "விவரக்குறிப்பு மற்றும் அருவமாக்கம்", marks: 5, type: "essay",
    questionText: "Write the specification to solve quadratic equation ax^2 + bx + c = 0 using formula x = [-b +- sqrt(b^2 - 4ac)] / (2a).", questionTextTamil: "ax^2 + bx + c = 0 எனும் இருபடி சமன்பாடு ஒன்றை நீங்கள் தீர்க்க வழிமுறை quadratic_solve (a, b, c) -- input : ? -- outputs: ? இதற்கு தேவையான விவரக்குறிப்பை கீழே கொடுக்கப்பட்டுள்ள வாய்ப்பாட்டின் மூலம் எழுதுக.",
    answer: "quadratic_solve (a, b, c)\n-- inputs : a, b, c are real numbers such that a != 0 and b^2 - 4*a*c >= 0\n-- outputs: x1, x2 are real numbers such that\n            a * (x1)^2 + b * x1 + c = 0 and\n            a * (x2)^2 + b * x2 + c = 0\n            where x1 = (-b + sqrt(b^2 - 4*a*c)) / (2*a) and\n                  x2 = (-b - sqrt(b^2 - 4*a*c)) / (2*a)",
    answerTamil: "விவரக்குறிப்பு:\nquadratic_solve (a, b, c)\n-- உள்ளீடுகள்: a, b, c மெய் எண்கள், a != 0 மற்றும் b^2 - 4ac >= 0\n-- வெளியீடுகள்: x1, x2 சமன்பாட்டின் மூலங்கள்:\n   x1 = (-b + sqrt(b^2 - 4ac)) / (2a)\n   x2 = (-b - sqrt(b^2 - 4ac)) / (2a)", isBookBack: true
  },
  {
    id: "cs11-ch6-5m-3", chapterNo: 6, chapterName: "Specification and Abstraction", chapterNameTamil: "விவரக்குறிப்பு மற்றும் அருவமாக்கம்", marks: 5, type: "essay",
    questionText: "Exchange contents of two cups A and B: Cup A contains Apple juice and Cup B contains Grape juice. Formulate specification and algorithm using an auxiliary variable C.", questionTextTamil: "உள்ளடக்கத்தை இடமாற்றம் செய்யவும்: A மற்றும் B என்ற மாறிகளை இரண்டு குவளைகளாக கருதுக. குவளை A-யில் ஆப்பிள் பழச்சாறு முழுவதுமாக உள்ளது. மற்றும் குவளை B-யில் திராட்சை பழச்சாறு முழுவதுமாக உள்ளது. குவளை A மற்றும் B– யில் உள்ள பழச்சாற்றின் நிலையை இடமாற்றம் செய்ய, தேவையான மாறிகளின் இருத்தி, அதன் நெறிமுறையின் விவரக்குறிப்பை எழுதுக.",
    answer: "Specification:\nexchange (A, B)\n-- inputs : A = Apple, B = Grape\n-- outputs: A = Grape, B = Apple\n\nAlgorithm (Using auxiliary cup C):\n1. C := A   (Pour apple juice into empty cup C)\n2. A := B   (Pour grape juice from cup B into cup A)\n3. B := C   (Pour apple juice from cup C into cup B)",
    answerTamil: "விவரக்குறிப்பு:\nexchange (A, B)\n-- உள்ளீடுகள்: A = ஆப்பிள் சாறு, B = திராட்சை சாறு\n-- வெளியீடுகள்: A = திராட்சை சாறு, B = ஆப்பிள் சாறு\n\nநெறிமுறை (துணை குவளை C பயன்படுத்தி):\n1. C := A  (A-யில் உள்ள சாற்றை C-க்கு மாற்று)\n2. A := B  (B-யில் உள்ள சாற்றை A-க்கு மாற்று)\n3. B := C  (C-யில் உள்ள சாற்றை B-க்கு மாற்று)", isBookBack: true
  }
];

// ==========================================
// CHAPTER 7: Composition and Decomposition (பிரித்தல் மற்றும் ஒருங்கிணைத்தல்)
// 1M: 6, 2M: 6, 3M: 5, 5M: 4 (Total: 21)
// ==========================================
const ch7 = [
  // 1 Marks (6)
  {
    id: "cs11-ch7-1m-1", chapterNo: 7, chapterName: "Composition and Decomposition", chapterNameTamil: "பிரித்தல் மற்றும் ஒருங்கிணைத்தல்", marks: 1, type: "mcq",
    questionText: "Before assignment u, v = 5, 10. After assignment u := v, what values do u and v have?", questionTextTamil: "மதிப்பிருத்தலுக்கு முன், u, v = 5, 10 எனில், கொடுக்கப்பட்டுள்ள தொடர் மதிப்பிருத்தலுக்கு பின், u மற்றும் v மாறிகள் பெறும் மதிப்பு என்ன? 1 u := v",
    options: { A: "u = 10, v = 10", B: "u = 5, v = 5", C: "u = 10, v = 5", D: "u = 5, v = 10" },
    optionsTamil: { A: "u = 10, v = 10", B: "u = 5, v = 5", C: "u = 10, v = 5", D: "u = 5, v = 10" },
    correctOption: "A", answer: "A) u = 10, v = 10", answerTamil: "A) u = 10, v = 10", isBookBack: true
  },
  {
    id: "cs11-ch7-1m-2", chapterNo: 7, chapterName: "Composition and Decomposition", chapterNameTamil: "பிரித்தல் மற்றும் ஒருங்கிணைத்தல்", marks: 1, type: "mcq",
    questionText: "After assignment 1 -- i, j = 0, which invariant property is true?", questionTextTamil: "மதிப்பிருத்தலுக்கு பிறகு, வரிசை எண் 3க்கான கீழ்கண்ட எந்த பண்புகூறு மெய்? 1 -- i, j = 0",
    options: { A: "i = j", B: "i != j", C: "i < j", D: "i > j" },
    optionsTamil: { A: "i = j", B: "i != j", C: "i < j", D: "i > j" },
    correctOption: "A", answer: "A) i = j", answerTamil: "A) i = j", isBookBack: true
  },
  {
    id: "cs11-ch7-1m-3", chapterNo: 7, chapterName: "Composition and Decomposition", chapterNameTamil: "பிரித்தல் மற்றும் ஒருங்கிணைத்தல்", marks: 1, type: "mcq",
    questionText: "If C1 is false and C2 is true, which statement executes in: if C1 then S1 else if C2 then S2 else S3?", questionTextTamil: "C1 என்பது பொய் மற்றும் C2 என்பது மெய் எனில், இயக்கப்படும் கூட்டு கூற்று எது?",
    options: { A: "S1", B: "S2", C: "S3", D: "None" },
    optionsTamil: { A: "S1", B: "S2", C: "S3", D: "எதுவுமில்லை" },
    correctOption: "B", answer: "B) S2", answerTamil: "B) S2", isBookBack: true
  },
  {
    id: "cs11-ch7-1m-4", chapterNo: 7, chapterName: "Composition and Decomposition", chapterNameTamil: "பிரித்தல் மற்றும் ஒருங்கிணைத்தல்", marks: 1, type: "mcq",
    questionText: "Before a loop, if condition C is false, through which path does control flow?", questionTextTamil: "மடங்கிற்கு முன்னரே, C பொய் எனில், கட்டுப்பாட்டு பாய்வு எதன் வழியும் இயங்கும்?",
    options: { A: "Loop exits immediately", B: "Loop body executes once", C: "Infinite loop", D: "Error" },
    optionsTamil: { A: "மடங்கு இயங்காமல் வெளியேறும்", B: "உடற்பகுதி ஒருமுறை இயங்கும்", C: "முடிவிலா சுழற்சி", D: "பிழை" },
    correctOption: "A", answer: "A) Loop exits immediately", answerTamil: "A) மடங்கு இயங்காமல் வெளியேறும்", isBookBack: true
  },
  {
    id: "cs11-ch7-1m-5", chapterNo: 7, chapterName: "Composition and Decomposition", chapterNameTamil: "பிரித்தல் மற்றும் ஒருங்கிணைத்தல்", marks: 1, type: "mcq",
    questionText: "If C is true, in both flowcharts S1 executes; in which flowchart does S2 execute?", questionTextTamil: "C மெய் எனில், கொடுக்கப்பட்ட பாய்வு படங்கள் இரண்டிலும், S1 இயங்கும் ஆனால், S2 எதில் இயங்கும்?",
    options: { A: "In 1 only", B: "In 2 only", C: "In both 1 and 2", D: "Neither in 1 nor in 2" },
    optionsTamil: { A: "1ல் மட்டும்", B: "2ல் மட்டும்", C: "1 மற்றும் 2", D: "1ம் இல்லை 2ம் இல்லை" },
    correctOption: "A", answer: "A) In 1 only", answerTamil: "A) 1ல் மட்டும்", isBookBack: true
  },
  {
    id: "cs11-ch7-1m-6", chapterNo: 7, chapterName: "Composition and Decomposition", chapterNameTamil: "பிரித்தல் மற்றும் ஒருங்கிணைத்தல்", marks: 1, type: "mcq",
    questionText: "How many times does the following loop iterate? i := 0; while i < 5 do i := i + 1", questionTextTamil: "கீழ்காணும் மடங்கு எத்தனை முறை இயங்கும்? i := 0",
    options: { A: "4", B: "5", C: "6", D: "0" },
    optionsTamil: { A: "4", B: "5", C: "6", D: "0" },
    correctOption: "B", answer: "B) 5 times", answerTamil: "B) 5 முறை", isBookBack: true
  },
  // 2 Marks (6)
  {
    id: "cs11-ch7-2m-1", chapterNo: 7, chapterName: "Composition and Decomposition", chapterNameTamil: "பிரித்தல் மற்றும் ஒருங்கிணைத்தல்", marks: 2, type: "short",
    questionText: "Distinguish between a condition and a statement.", questionTextTamil: "ஒரு நிபந்தனை மற்றும் கூற்று – வேறுபடுத்துக.",
    answer: "Condition: A boolean expression that evaluates to either True or False.\nStatement: An algorithmic instruction (like assignment or control statement) that performs an action and may alter state.",
    answerTamil: "நிபந்தனை: உண்மை (True) அல்லது பொய் (False) என மதிப்பிடப்படும் பூலியன் கோவை.\nகூற்று: ஒரு குறிப்பிட்ட செயலைச் செய்து நிலையை மாற்றும் கட்டளை.", isBookBack: true
  },
  {
    id: "cs11-ch7-2m-2", chapterNo: 7, chapterName: "Composition and Decomposition", chapterNameTamil: "பிரித்தல் மற்றும் ஒருங்கிணைத்தல்", marks: 2, type: "short",
    questionText: "Draw a flowchart structure for a conditional statement.", questionTextTamil: "நிபந்தனை கூற்றுககு ஒரு பாய்வு படம் வரைக.",
    answer: "A diamond decision box with condition C having two exit branches: True branch leading to statement S1 and False branch leading to statement S2, converging at a circle connector.",
    answerTamil: "வைர வடிவ முடிவுப் பெட்டியில் நிபந்தனை C இருக்கும். 'True' எனில் S1 கூற்றுக்கும், 'False' எனில் S2 கூற்றுக்கும் செல்லும் இணைப்புக் கோடுகள் வரைக.", isBookBack: true
  },
  {
    id: "cs11-ch7-2m-3", chapterNo: 7, chapterName: "Composition and Decomposition", chapterNameTamil: "பிரித்தல் மற்றும் ஒருங்கிணைத்தல்", marks: 2, type: "short",
    questionText: "Both conditional and iterative statements contain condition and statement body. How do they differ?", questionTextTamil: "நிபந்தனை கூற்று மற்றும் சுழற்சி கூற்று இரண்டுமே, ஒரு நிபந்தனை மற்றும் செயல்படு கூற்றை பெற்றுள்ளது எனில், அவை எவ்வாறு வேறுபடுகிறது?",
    answer: "Conditional Statement (if-then-else): Executes statement body at most once depending on condition.\nIterative Statement (loop): Executes statement body repeatedly as long as condition remains True.",
    answerTamil: "நிபந்தனைக் கூற்று: நிபந்தனை மெய்யாக இருக்கும் போது உடற்பகுதியை ஒருமுறை மட்டுமே இயக்கும்.\nசுழற்சிக் கூற்று: நிபந்தனை மெய்யாக இருக்கும் வரை உடற்பகுதியை மீண்டும் மீண்டும் பலமுறை இயக்கும்.", isBookBack: true
  },
  {
    id: "cs11-ch7-2m-4", chapterNo: 7, chapterName: "Composition and Decomposition", chapterNameTamil: "பிரித்தல் மற்றும் ஒருங்கிணைத்தல்", marks: 2, type: "short",
    questionText: "What is the difference between an algorithm and a program?", questionTextTamil: "ஒரு நெறிமுறைக்கும், நிரலுக்கும் உள்ள வேறுபாடு என்ன?",
    answer: "Algorithm: Language-independent conceptual logic designed to solve a problem.\nProgram: Implementation of an algorithm written in a specific programming language (like C++, Python) executable by a computer.",
    answerTamil: "நெறிமுறை: சிக்கலைத் தீர்க்க எந்தவொரு நிரலாக்க மொழியையும் சாராமல் எழுதப்படும் படிநிலைகள்.\nநிரல்: ஒரு குறிப்பிட்ட கணினி மொழியில் (C++, பைத்தான்) எழுதப்பட்டு கணினியால் இயக்கப்படும் குறிமுறை.", isBookBack: true
  },
  {
    id: "cs11-ch7-2m-5", chapterNo: 7, chapterName: "Composition and Decomposition", chapterNameTamil: "பிரித்தல் மற்றும் ஒருங்கிணைத்தல்", marks: 2, type: "short",
    questionText: "What is Functional Abstraction?", questionTextTamil: "செயற்கூறு அருவமாக்கம் என்றால் என்ன?",
    answer: "Functional abstraction is treating a function as a black box: knowing what it does via its specification (inputs and outputs) without needing to know how it is implemented.",
    answerTamil: "செயற்கூறு அருவமாக்கம் என்பது ஒரு துணை நிரலின் உள் செயலாக்க விவரங்களை அறியாமல், அது என்ன செய்கிறது (உள்ளீடு மற்றும் வெளியீடு) என்பதை மட்டும் வைத்துப் பயன்படுத்துவதாகும்.", isBookBack: true
  },
  {
    id: "cs11-ch7-2m-6", chapterNo: 7, chapterName: "Composition and Decomposition", chapterNameTamil: "பிரித்தல் மற்றும் ஒருங்கிணைத்தல்", marks: 2, type: "short",
    questionText: "How is an algorithmic statement refined?", questionTextTamil: "ஒரு கூற்று எவ்வாறு மேம்படுத்தப்படுகிறது?",
    answer: "Stepwise refinement: A high-level abstract statement is systematically expanded into more detailed, concrete sequential, conditional, or iterative sub-statements.",
    answerTamil: "படிப்படியான செம்மையாக்கம்: ஒரு உயர்நிலை அருவமான கூற்றானது தொடர், நிபந்தனை அல்லது சுழற்சிக் கூற்றுகளாக விரிவாக உடைக்கப்பட்டு மேம்படுத்தப்படுகிறது.", isBookBack: true
  },
  // 3 Marks (5)
  {
    id: "cs11-ch7-3m-1", chapterNo: 7, chapterName: "Composition and Decomposition", chapterNameTamil: "பிரித்தல் மற்றும் ஒருங்கிணைத்தல்", marks: 3, type: "brief",
    questionText: "Write pseudocode for given conditional and iterative flowcharts.", questionTextTamil: "கொடுக்கப்பட்டுள்ள இரண்டு பாய்வு படங்களுக்கும், போலிக் குறிமுறை எழுதுக.",
    answer: "1. Conditional:\nif C then\n  S1\nelse\n  S2\n\n2. Iterative:\nwhile C do\n  S",
    answerTamil: "1. நிபந்தனைக் கூற்று:\nif C then\n  S1\nelse\n  S2\n\n2. சுழற்சிக் கூற்று:\nwhile C do\n  S", isBookBack: true
  },
  {
    id: "cs11-ch7-3m-2", chapterNo: 7, chapterName: "Composition and Decomposition", chapterNameTamil: "பிரித்தல் மற்றும் ஒருங்கிணைத்தல்", marks: 3, type: "brief",
    questionText: "In the algorithm: 1 S1, 2 -- C is false, 3 if C then 4 S2 else 5 S3, 6 S4. Trace the control flow.", questionTextTamil: "கொடுக்கப்பட்டுள்ள நெறிமுறை வரிசை எண் 2ல், C பொய் எனில், அதன் கட்டுப்பாட்டு பாய்வைக் காண்க: 1 S1, 2 -- C is false, 3 if C, 4 S2, 5 else, 6 S3, 7 S4",
    answer: "Since C is false:\n1. Execute S1\n2. Skip S2 (since condition C is false)\n3. Execute else branch S3\n4. Execute S4\nExecution path: S1 -> S3 -> S4.",
    answerTamil: "C பொய் என்பதால்:\n1. S1 இயங்கும்.\n2. S2 தவிர்க்கப்படும்.\n3. else பகுதியான S3 இயங்கும்.\n4. இறுதியாக S4 இயங்கும்.\nஇயங்கும் பாதை: S1 -> S3 -> S4.", isBookBack: true
  },
  {
    id: "cs11-ch7-3m-3", chapterNo: 7, chapterName: "Composition and Decomposition", chapterNameTamil: "பிரித்தல் மற்றும் ஒருங்கிணைத்தல்", marks: 3, type: "brief",
    questionText: "What is Case Analysis?", questionTextTamil: "Case பகுப்பாய்வு என்றால் என்ன?",
    answer: "Case analysis splits a problem into mutually exclusive and exhaustive sub-cases (C1, C2, ..., Cn). If case Ci is true, the corresponding statement Si is executed.\nExample: case C1: S1; case C2: S2; default: S3.",
    answerTamil: "Case பகுப்பாய்வு என்பது ஒரு சிக்கலை ஒன்றுக்கொன்று முரண்படாத பல நிபந்தனைப் பிரிவுகளாகப் பிரித்து, எந்த நிபந்தனை மெய்யாகிறதோ அதற்குரிய கூற்றை மட்டும் இயக்கும் அமைப்பாகும்.", isBookBack: true
  },
  {
    id: "cs11-ch7-3m-4", chapterNo: 7, chapterName: "Composition and Decomposition", chapterNameTamil: "பிரித்தல் மற்றும் ஒருங்கிணைத்தல்", marks: 3, type: "brief",
    questionText: "Draw a flowchart for three-way case analysis using selected statements.", questionTextTamil: "தேர்ந்தெடுக்கப்பட்ட கூற்றுகளைப் பயன்படுத்தி, மூன்று case பகுப்பாய்வுக்கு, பாய்வுபடம் ஒன்றை வரைக.",
    answer: "Decision diamond C1: if True -> S1; if False -> check Decision diamond C2: if True -> S2; if False -> S3. All three branches merge to the common exit point.",
    answerTamil: "முதல் முடிவுப் பெட்டி C1: மெய் எனில் S1; பொய் எனில் அடுத்த முடிவுப் பெட்டி C2: மெய் எனில் S2; பொய் எனில் S3. மூன்றும் முடிவில் பொதுவான புள்ளியில் இணையும்.", isBookBack: true
  },
  {
    id: "cs11-ch7-3m-5", chapterNo: 7, chapterName: "Composition and Decomposition", chapterNameTamil: "பிரித்தல் மற்றும் ஒருங்கிணைத்தல்", marks: 3, type: "brief",
    questionText: "Define a function double(n) in two different ways: (1) n + n, (2) 2 x n.", questionTextTamil: "ஒரு எண்ணை, கொடுக்கப்பட்டுள்ள இரண்டு வேறுபட்ட வழிகளில், இரட்டிப்பாக்கும் செயற்குறு ஒன்றை வரையறு: (1) n + n, (2) 2 x n.",
    answer: "1. Definition using addition:\ndouble1 (n)\n-- inputs : n is a number\n-- outputs: y = n + n\nreturn n + n\n\n2. Definition using multiplication:\ndouble2 (n)\n-- inputs : n is a number\n-- outputs: y = 2 * n\nreturn 2 * n",
    answerTamil: "1. கூட்டல் முறை:\ndouble1 (n)\n-- உள்ளீடுகள்: n ஒரு எண்\n-- வெளியீடுகள்: y = n + n\n\n2. பெருக்கல் முறை:\ndouble2 (n)\n-- உள்ளீடுகள்: n ஒரு எண்\n-- வெளியீடுகள்: y = 2 * n", isBookBack: true
  },
  // 5 Marks (4)
  {
    id: "cs11-ch7-5m-1", chapterNo: 7, chapterName: "Composition and Decomposition", chapterNameTamil: "பிரித்தல் மற்றும் ஒருங்கிணைத்தல்", marks: 5, type: "essay",
    questionText: "Exchange apple and grape juices in cups A and B: Formulate specification and sequential assignment algorithm.", questionTextTamil: "A மற்றும் B என குறிக்கப்பட்டுள்ள இரண்டு கண்ணாடி குவளைகள் உள்ளது. அதில், A என்று குறிக்கப்பட்ட குவளை முழுவதும் ஆப்பிள் பழச்சாறும், B என்று குறிக்கப்பட்ட குவளை முழுவதும் திராட்சை பழச்சாறும் வைக்கப்பட்டுள்ளது. இப்போது, A மற்றும் B குவளைகளில் உள்ள பழச்சாறுகளை ஒன்றிலிருந்து, மற்றொன்றுக்கு மாற்றும் விவரக்குறிப்பு ஒன்றை எழுதுக. மற்றும் விவரக்குறிப்பில் ஏற்றுக்கொள்ளும் வகையில், தொடர் மதிப்பிருத்து கூற்றுகளையும் எழுதுக.",
    answer: "Specification:\nexchange_juices (A, B)\n-- inputs : A = Apple, B = Grape\n-- outputs: A = Grape, B = Apple\n\nAlgorithm using temp variable C:\n1. C := A   -- state: A=Apple, B=Grape, C=Apple\n2. A := B   -- state: A=Grape, B=Grape, C=Apple\n3. B := C   -- state: A=Grape, B=Apple, C=Apple\nContents successfully swapped.",
    answerTamil: "விவரக்குறிப்பு:\nexchange_juices (A, B)\n-- உள்ளீடுகள் : A = ஆப்பிள், B = திராட்சை\n-- வெளியீடுகள்: A = திராட்சை, B = ஆப்பிள்\n\nதொடர் மதிப்பிருத்தல் கூற்றுகள்:\n1. C := A\n2. A := B\n3. B := C", isBookBack: true
  },
  {
    id: "cs11-ch7-5m-2", chapterNo: 7, chapterName: "Composition and Decomposition", chapterNameTamil: "பிரித்தல் மற்றும் ஒருங்கிணைத்தல்", marks: 5, type: "essay",
    questionText: "Circularly rotate values of three variables A, B, and C such that B gets A, C gets B, and A gets C. Formulate specification and algorithm.", questionTextTamil: "கீழே கொடுக்கப்பட்டுள்ள A, B மற்றும் C மாறிகளின் மதிப்புகளை ஒன்றிலிருந்து, மற்றொன்றுக்கு சுழற்சியாக மாற்றும் விவரக்குறிப்பு மற்றும் நெறிமுறையை கட்டமைக்கவும். அம்புககுறியிடப்பட்டுள்ளபடி, B மாறிக்கான மதிப்பு A மாறியிலிருந்தும், C மாறிக்கான மதிப்பு B மாறிலிருந்தும், A மாறிக்கான மதிப்பு C மாறியிலிருந்தும் பெறப்படும்.",
    answer: "Specification:\nrotate (A, B, C)\n-- inputs : A = a, B = b, C = c\n-- outputs: A = c, B = a, C = b\n\nAlgorithm using temporary variable temp:\n1. temp := C\n2. C := B\n3. B := A\n4. A := temp",
    answerTamil: "விவரக்குறிப்பு:\nrotate (A, B, C)\n-- உள்ளீடுகள் : A = a, B = b, C = c\n-- வெளியீடுகள்: A = c, B = a, C = b\n\nநெறிமுறை (துணை மாறி temp கொண்டு):\n1. temp := C\n2. C := B\n3. B := A\n4. A := temp", isBookBack: true
  },
  {
    id: "cs11-ch7-5m-3", chapterNo: 7, chapterName: "Composition and Decomposition", chapterNameTamil: "பிரித்தல் மற்றும் ஒருங்கிணைத்தல்", marks: 5, type: "essay",
    questionText: "Three water jugs of capacity 8L, 5L, and 3L are given. The 8L jug is full of oil; other two are empty. Divide 8L oil equally into two 4L quantities using state assignments.", questionTextTamil: "முறையே 5, 8 மற்றும் 3 லிட்டர் கொள்ளளவு கொண்ட மூன்று கண்ணாடி குடுவைகளை தரப்படுகிறது. அதில், 8 லிட்டர் குடுவையில் எண்ணெய் நிரம்பியுள்ளது. மற்ற இரண்டு குடுவைகளும் காலியாக உள்ளன. 8 லிட்டர் குடுவையில் உள்ள எண்ணெயை இரண்டு சம அளவாக பிரிக்கவும். பொருத்தமான மாறிகளில், இந்த செயல் நிலையை குறிப்பிடுக. இந்த செயல்நிலையின் தொடக்கம் மற்றும் இறுதி நிலை என்ன? மதிப்பிருத்தல் மூலமாக, ஒரு குடுவையிலிருந்து, மற்றொரு குடுவைக்கு மாற்றம் செய்யும் மாதிரியை உருவாக்கு. இறுதிநிலையை பெறுவதற்கான தொடர் மதிப்பிருத்து கூற்றுகளை எழுதுக.",
    answer: "Variables: (j8, j5, j3) representing oil in 8L, 5L, 3L jugs.\nInitial State: (8, 0, 0)\nFinal State: (4, 4, 0)\n\nSteps:\n1. Pour from 8L into 5L: (3, 5, 0)\n2. Pour from 5L into 3L: (3, 2, 3)\n3. Pour from 3L into 8L: (6, 2, 0)\n4. Pour from 5L into 3L: (6, 0, 2)\n5. Pour from 8L into 5L: (1, 5, 2)\n6. Pour from 5L into 3L (1L needed to fill): (1, 4, 3)\n7. Pour from 3L into 8L: (4, 4, 0)\nTarget achieved: 4L in 8L jug and 4L in 5L jug.",
    answerTamil: "மாறிகள்: (j8, j5, j3)\nதொடக்க நிலை: (8, 0, 0)\nஇறுதி நிலை: (4, 4, 0)\n\nபடிநிலைகள்:\n1. 8L-லிருந்து 5L-க்கு: (3, 5, 0)\n2. 5L-லிருந்து 3L-க்கு: (3, 2, 3)\n3. 3L-லிருந்து 8L-க்கு: (6, 2, 0)\n4. 5L-லிருந்து 3L-க்கு: (6, 0, 2)\n5. 8L-லிருந்து 5L-க்கு: (1, 5, 2)\n6. 5L-லிருந்து 3L-க்கு: (1, 4, 3)\n7. 3L-லிருந்து 8L-க்கு: (4, 4, 0)", isBookBack: true
  },
  {
    id: "cs11-ch7-5m-4", chapterNo: 7, chapterName: "Composition and Decomposition", chapterNameTamil: "பிரித்தல் மற்றும் ஒருங்கிணைத்தல்", marks: 5, type: "essay",
    questionText: "Trace the step-by-step execution of factorial(4) algorithm.", questionTextTamil: "factorial(4) என்ற செயற்குற்றின் நெறிமுறையின் படிபடியான இயக்கத்தைக் கணிக்கவும்:\nfactorial (n)\n-- inputs : n is an integer , n >= 0\n-- outputs : f = n!\nf , i := 1 , 1\nwhile i <= n\n f , i := f x i , i + 1",
    answer: "Trace Table for n = 4:\nInitial: f = 1, i = 1\nIteration 1: i=1 <= 4 (True) -> f = 1*1 = 1, i = 1+1 = 2\nIteration 2: i=2 <= 4 (True) -> f = 1*2 = 2, i = 2+1 = 3\nIteration 3: i=3 <= 4 (True) -> f = 2*3 = 6, i = 3+1 = 4\nIteration 4: i=4 <= 4 (True) -> f = 6*4 = 24, i = 4+1 = 5\nIteration 5: i=5 <= 4 (False) -> Loop terminates.\nFinal output: f = 24 (4!).",
    answerTamil: "இயக்க அட்டவணை (n = 4):\nதொடக்க நிலை: f = 1, i = 1\nசுழற்சி 1: i=1 <= 4 (மெய்) -> f = 1*1 = 1, i = 2\nசுழற்சி 2: i=2 <= 4 (மெய்) -> f = 1*2 = 2, i = 3\nசுழற்சி 3: i=3 <= 4 (மெய்) -> f = 2*3 = 6, i = 4\nசுழற்சி 4: i=4 <= 4 (மெய்) -> f = 6*4 = 24, i = 5\nசுழற்சி 5: i=5 <= 4 (பொய்) -> சுழற்சி முடிகிறது.\nவெளியீடு: f = 24.", isBookBack: true, isCompulsoryEligible: true
  }
];

// ==========================================
// CHAPTER 8: Iteration and Recursion (சுழற்சியும், தற்சுழற்சியும்)
// 1M: 6, 2M: 6, 3M: 3, 5M: 3 (Total: 18)
// ==========================================
const ch8 = [
  // 1 Marks (6)
  {
    id: "cs11-ch8-1m-1", chapterNo: 8, chapterName: "Iteration and Recursion", chapterNameTamil: "சுழற்சியும், தற்சுழற்சியும்", marks: 1, type: "mcq",
    questionText: "A loop invariant need NOT be true:", questionTextTamil: "மடங்கு மாற்றமிலி உண்மையாக இருக்கவேண்டிய அவசியம் இல்லை எப்போது?",
    options: { A: "At the start of the loop", B: "At the start of each iteration", C: "At the end of each iteration", D: "While the loop condition is evaluated" },
    optionsTamil: { A: "மடங்கின் தொடக்கத்தில்", B: "ஒவ்வொரு சுழற்சியின் தொடக்கத்தில்", C: "ஒவ்வொரு சுழற்சியின் முடிவில்", D: "மடங்கின் நடுவில் இயங்கும் போது" },
    correctOption: "D", answer: "D) While the loop body statements are being executed", answerTamil: "D) மடங்கின் உடற்பகுதி இயக்கத்தில் இருக்கும் போது", isBookBack: true
  },
  {
    id: "cs11-ch8-1m-2", chapterNo: 8, chapterName: "Iteration and Recursion", chapterNameTamil: "சுழற்சியும், தற்சுழற்சியும்", marks: 1, type: "mcq",
    questionText: "Covering a chessboard with dominoes where b is black squares and w is white squares covered. Which assignment represents placing a domino?", questionTextTamil: "ஒரு சதுரங்கப்பலகையை டோமினோஸ் என்ற செவ்வக கட்டையைக் கொண்டு மூட விரும்புகிறோம். b என்பது டோமினோஸ் எத்தனை கருப்புக் கட்டங்களை மூடுகிறது என்பதையும், w என்பது டோமினோஸ் எத்தனை வெள்ளைக் கட்டங்களை மூடுகிறது என்பதையும் குறிக்கின்றன என்றால், பின்வரும் எந்த மாதிரியின்படி ஒரு டோமினோவை வைக்கலாம்?",
    options: { A: "b := b + 2", B: "w := w + 2", C: "b, w := b + 1, w + 1", D: "b := w" },
    optionsTamil: { A: "b := b + 2", B: "w := w + 2", C: "b, w := b + 1, w + 1", D: "b := w" },
    correctOption: "C", answer: "C) b, w := b + 1, w + 1", answerTamil: "C) b, w : = b + 1, w + 1", isBookBack: true
  },
  {
    id: "cs11-ch8-1m-3", chapterNo: 8, chapterName: "Iteration and Recursion", chapterNameTamil: "சுழற்சியும், தற்சுழற்சியும்", marks: 1, type: "mcq",
    questionText: "If m*a + n*b is an invariant for the assignment a, b := a + 8, b + 7, the values of m, n are:", questionTextTamil: "m x a + n x b என்பது a, b := a + 8, b + 7 என்ற மதிப்பிருத்தலின் மாற்றமிலி என்றால், m, n வின் மதிப்புகள்:",
    options: { A: "m=8, n=7", B: "m=7, n=-8", C: "m=-7, n=8", D: "m=8, n=-7" },
    optionsTamil: { A: "m=8, n=7", B: "m=7, n=-8", C: "m=-7, n=8", D: "m=8, n=-7" },
    correctOption: "B", answer: "B) m=7, n=-8", answerTamil: "B) m=7, n=-8", isBookBack: true
  },
  {
    id: "cs11-ch8-1m-4", chapterNo: 8, chapterName: "Iteration and Recursion", chapterNameTamil: "சுழற்சியும், தற்சுழற்சியும்", marks: 1, type: "mcq",
    questionText: "Which of the following is NOT an invariant for the assignment m, n := m+2, n+3?", questionTextTamil: "கீழே கொடுக்கப்பட்டுள்ளவைகளில் எது m, n : = m+2, n+3 என்ற மதிப்பிருத்தலின் மாற்றமிலி இல்லை?",
    options: { A: "m mod 2", B: "n mod 3", C: "3*m - 2*n", D: "2*m - 3*n" },
    optionsTamil: { A: "m mod 2", B: "n mod 3", C: "3 x m – 2 x n", D: "2xm – 3 x n" },
    correctOption: "D", answer: "D) 2*m - 3*n", answerTamil: "D) 2xm – 3 x n", isBookBack: true
  },
  {
    id: "cs11-ch8-1m-5", chapterNo: 8, chapterName: "Iteration and Recursion", chapterNameTamil: "சுழற்சியும், தற்சுழற்சியும்", marks: 1, type: "mcq",
    questionText: "If Fibonacci is defined recursively as F(n) = {0 if n=0, 1 if n=1, F(n-1)+F(n-2) otherwise}, how many times is F() evaluated to evaluate F(4)?", questionTextTamil: "பிபோனாச்சி எண்ணைத் தற்சுழற்சியின்படி பின்வருமாறு வரையறுத்தால் F(n)= {0 if n=0, 1 if n=1, F(n-1)+F(n-2) otherwise}, F(4) யை மதிப்பிட எத்தனை F() பயன்படுத்த வேண்டும்?",
    options: { A: "3", B: "4", C: "9", D: "8" },
    optionsTamil: { A: "3", B: "4", C: "9", D: "8" },
    correctOption: "C", answer: "C) 9", answerTamil: "C) 9", isBookBack: true
  },
  {
    id: "cs11-ch8-1m-6", chapterNo: 8, chapterName: "Iteration and Recursion", chapterNameTamil: "சுழற்சியும், தற்சுழற்சியும்", marks: 1, type: "mcq",
    questionText: "Using the recursive definition a^n = { 1 if n = 0, a * a^(n-1) otherwise }, how many multiplications are needed to evaluate a^10?", questionTextTamil: "தற்சுழற்சியின் பின்வரும் வரையறையைப் பயன்படுத்தி a^10 யை மதிப்பிட எத்தனைமுறை பெருக்க வேண்டும்?",
    options: { A: "10", B: "9", C: "4", D: "5" },
    optionsTamil: { A: "10", B: "9", C: "4", D: "5" },
    correctOption: "A", answer: "A) 10 multiplications (or 4 using binary exponentiation)", answerTamil: "A) 10 (அல்லது 4)", isBookBack: true
  },
  // 2 Marks (6)
  {
    id: "cs11-ch8-2m-1", chapterNo: 8, chapterName: "Iteration and Recursion", chapterNameTamil: "சுழற்சியும், தற்சுழற்சியும்", marks: 2, type: "short",
    questionText: "What is an Invariant?", questionTextTamil: "மாற்றமிலி என்றால் என்ன?",
    answer: "An invariant is a condition involving program variables that remains True throughout the execution of an algorithm or loop.",
    answerTamil: "மாற்றமிலி (Invariant) என்பது ஒரு நெறிமுறையின் செயல்பாட்டின் போது மாறிகளின் மதிப்புகள் மாறினாலும், எப்போதும் உண்மையாகவே (True) இருக்கும் ஒரு நிபந்தனை அல்லது சமன்பாடாகும்.", isBookBack: true
  },
  {
    id: "cs11-ch8-2m-2", chapterNo: 8, chapterName: "Iteration and Recursion", chapterNameTamil: "சுழற்சியும், தற்சுழற்சியும்", marks: 2, type: "short",
    questionText: "Define Loop Invariant.", questionTextTamil: "மடுக்கு மாற்றமிலியை வரையறுக்கவும்.",
    answer: "A loop invariant is a condition that is True before the loop starts, remains True before and after each iteration, and is True when the loop terminates.",
    answerTamil: "மடங்கு மாற்றமிலி என்பது சுழற்சி தொடங்குவதற்கு முன்பும், ஒவ்வொரு சுழற்சியின் தொடக்கத்திலும் முடிவிலும், மற்றும் சுழற்சி முடிந்த பின்பும் மெய்யாக இருக்கும் நிபந்தனையாகும்.", isBookBack: true
  },
  {
    id: "cs11-ch8-2m-3", chapterNo: 8, chapterName: "Iteration and Recursion", chapterNameTamil: "சுழற்சியும், தற்சுழற்சியும்", marks: 2, type: "short",
    questionText: "Does testing loop condition affect the loop invariant? Why?", questionTextTamil: "மாற்றமிலியின் நிலையமைப்பைச் சோதிப்பது மடங்கு மாற்றமிலியை பாதிக்குமா? ஏன்?",
    answer: "No, evaluating or testing the loop condition only checks variable values for branching; it does not alter the values of variables or affect the invariant.",
    answerTamil: "பாதிக்காது. ஏனெனில் நிபந்தனையை சோதிப்பது மாறிகளின் மதிப்புகளை மாற்றுவதில்லை; அது வெறும் உண்மை/பொய் மதிப்பீடே ஆகும்.", isBookBack: true
  },
  {
    id: "cs11-ch8-2m-4", chapterNo: 8, chapterName: "Iteration and Recursion", chapterNameTamil: "சுழற்சியும், தற்சுழற்சியும்", marks: 2, type: "short",
    questionText: "What is the relationship between loop invariant, loop condition, and input-output relation?", questionTextTamil: "மடங்கு மாற்றமிலிக்கும், மடங்கு நிலையமைக்கும், உள்ளீட்டு வெளியீட்டு தொடர்புக்கும் என்ன உறவு?",
    answer: "When the loop terminates, the loop condition C becomes False, and the loop invariant L remains True. Together (L and not C), they establish the desired output relation (postcondition).",
    answerTamil: "மடங்கு முடிவடையும் போது நிபந்தனை C பொய்யாகவும், மாற்றமிலி L மெய்யாகவும் இருக்கும். இரண்டும் இணைந்து (L and not C) விரும்பிய வெளியீட்டுத் தொடர்பை உறுதிப்படுத்துகின்றன.", isBookBack: true
  },
  {
    id: "cs11-ch8-2m-5", chapterNo: 8, chapterName: "Iteration and Recursion", chapterNameTamil: "சுழற்சியும், தற்சுழற்சியும்", marks: 2, type: "short",
    questionText: "What is solving a problem using recursion?", questionTextTamil: "தற்சுழற்சி முறையில் சிக்கலை தீர்ப்பது என்றால் என்ன?",
    answer: "Recursion solves a problem by defining the solution in terms of smaller instances of the exact same problem until a trivial base case is reached.",
    answerTamil: "தற்சுழற்சி என்பது ஒரு சிக்கலை அதே போன்ற சிறிய துணைச் சிக்கல்களாகப் பிரித்து, அடிப்படை நிலையை (Base case) அடையும் வரை தன்னைத்தானே அழைத்துத் தீர்வு காண்பதாகும்.", isBookBack: true
  },
  {
    id: "cs11-ch8-2m-6", chapterNo: 8, chapterName: "Iteration and Recursion", chapterNameTamil: "சுழற்சியும், தற்சுழற்சியும்", marks: 2, type: "short",
    questionText: "Define factorial of a natural number recursively.", questionTextTamil: "இயல் எண்ணின் தொடர் பெருக்கத்தை தற்சுழற்சி முறையில் வரையறுக்கவும்.",
    answer: "factorial (n) = { 1, if n = 0 (Base case)\n                  n * factorial(n - 1), if n > 0 (Recursive case) }",
    answerTamil: "factorial (n) = { 1, n = 0 எனில் (அடிப்படை நிலை)\n                  n * factorial(n-1), n > 0 எனில் (தற்சுழற்சி நிலை) }", isBookBack: true
  },
  // 3 Marks (3)
  {
    id: "cs11-ch8-3m-1", chapterNo: 8, chapterName: "Iteration and Recursion", chapterNameTamil: "சுழற்சியும், தற்சுழற்சியும்", marks: 3, type: "brief",
    questionText: "7 cups are placed upside down on a table. You can turn any two cups at a time. Can you reach a state where all cups are upright? (Hint: Parity of upside down cups remains invariant).", questionTextTamil: "ஒரு மேஜையில் 7 குவளைகள் தலைகீழாக இருக்கின்றன. எந்த இரண்டு குவளைகளையும் நீங்கள் ஒரே நேரத்தில் திருப்புவதற்கு உங்களுக்கு அனுமதி உண்டு. எல்லா குவளைகளும் நேராக இருக்கக்கூடிய நிலையை எட்டுவது சாத்தியமா? (குறிப்பு: தலைகீழாக இருக்கும் குவளைகளுடைய எண்ணிக்கையின் சமநிலை மாறாது).",
    answer: "No, it is impossible.\nReason: Initially, 7 cups are upside down (an odd number). Turning 2 cups changes the count of upside down cups by +2, -2, or 0. Thus, parity of upside-down cups remains odd forever. All cups upright requires 0 upside down cups (an even number), which can never be reached.",
    answerTamil: "சாத்தியமில்லை.\nகாரணம்: தொடக்கத்தில் 7 குவளைகள் தலைகீழாக உள்ளன (ஒற்றைப்படை). 2 குவளைகளைத் திருப்பும்போது தலைகீழ் குவளைகளின் எண்ணிக்கை 2 கூடும், 2 குறையும் அல்லது மாறாது. எனவே ஒற்றைப்படை சமநிலை மாறாது. அனைத்தும் நேராக வர 0 குவளைகள் (இரட்டைப்படை) தேவை, இதை அடைய முடியாது.", isBookBack: true
  },
  {
    id: "cs11-ch8-3m-2", chapterNo: 8, chapterName: "Iteration and Recursion", chapterNameTamil: "சுழற்சியும், தற்சுழற்சியும்", marks: 3, type: "brief",
    questionText: "In a single-elimination tournament with 1234 players where a loser is immediately eliminated in each match, how many matches must be played to determine the winner?", questionTextTamil: "தோற்றால் வெளியேறிவிட வேண்டும் என்ற நிபந்தனையுள்ள ஒரு விளையாட்டு போட்டியில் வரிசையாக போட்டிகள் நடக்கின்றன. ஒவ்வொரு போட்டியிலும் இரண்டு விளையாட்டு வீரர்கள் போட்டியிடுகிறார்கள் தோற்றவர் வெளியேறிவிட வேண்டும். வெற்றிபெற்றவர் தொடர்ந்து போட்டியில் பங்கேற்பார். எல்லா விளையாட்டு வீரர்களும் இவ்வாறு வெளியேற்றப்பட்டபின், கடைசியில் எஞ்சியிருக்கும் வீரரே போட்டியில் வெற்றிபெற்றவர். ஒரு விளையாட்டுப்போட்டியில் 1234 வீரர்கள் இருக்கிறார்கள் என்று வைத்துக்கொள்வோம். வெற்றிவீரரை தீர்மானிப்பதற்கு எத்தனை போட்டிகள் நடத்தப்பட வேண்டும்?",
    answer: "Number of matches = 1233 matches.\nInvariant: Each match eliminates exactly 1 player.\nTo find 1 winner among 1234 players, exactly 1233 players must be eliminated. Hence, exactly 1234 - 1 = 1233 matches must be played.",
    answerTamil: "நடத்தப்பட வேண்டிய போட்டிகள் = 1233.\nகாரணம்: ஒவ்வொரு போட்டியிலும் சரியாக ஒரு வீரர் வெளியேற்றப்படுகிறார். 1234 வீரர்களில் 1 வெற்றியாளரைத் தீர்மானிக்க 1233 வீரர்கள் வெளியேற்றப்பட வேண்டும். எனவே 1234 - 1 = 1233 போட்டிகள் நடத்தப்பட வேண்டும்.", isBookBack: true
  },
  {
    id: "cs11-ch8-3m-3", chapterNo: 8, chapterName: "Iteration and Recursion", chapterNameTamil: "சுழற்சியும், தற்சுழற்சியும்", marks: 3, type: "brief",
    questionText: "King Vikramaditya has two magic swords to cut heads of a demon: Sword 1 cuts 19 heads but 13 grow back (+6 diff); Sword 2 cuts 7 heads but 22 grow back (+15 diff). If demon starts with 1000 heads, can he ever kill the demon (reduce heads to 0)? (Hint: head mod 3 is invariant).", questionTextTamil: "மன்னன் விக்கிரமாதித்தனிடம் இரண்டு மந்திர வாள்கள் இருக்கின்றன. ஒரு வாளை வைத்து அவனால் வேதாளத்தின் 19 தலைகளை வெட்டிஎறிய முடியும். ஆனால், அதன்பின் வேதாளத்துக்கு 13 தலைகள் முளைக்கின்றன. இன்னொரு வாளை வைத்து 7 தலைகளை வெட்டிஎறிய முடியும். ஆனால், அதற்குப்பின் 22 புதிய தலைகள் முளைக்கின்றன. எல்லா தலைகளையும் வெட்டிவிட்டால், வேதாளம் செத்துவிடும். வேதாளத்துக்கு ஆரம்பத்தில் 1000 தலைகள் இருந்தால், அது சாகிற வாய்ப்பு உண்டா? (குறிப்பு: தலை mod 3 –ன் எண்ணிக்கை மாறாது).",
    answer: "No, the demon can never be killed.\nReason:\nInitial heads = 1000 -> 1000 mod 3 = 1.\nSword 1 changes heads by -19 + 13 = -6 (multiple of 3, mod 3 is 0).\nSword 2 changes heads by -7 + 22 = +15 (multiple of 3, mod 3 is 0).\nThus, (heads mod 3) remains 1 forever. For demon to die, heads must be 0 (0 mod 3 = 0), which is impossible.",
    answerTamil: "சாக வாய்ப்பில்லை.\nகாரணம்: தொடக்க தலைகள் = 1000 -> 1000 mod 3 = 1.\nவாள் 1 நிகர மாற்றம் = -6 (3-ன் மடங்கு).\nவாள் 2 நிகர மாற்றம் = +15 (3-ன் மடங்கு).\nஎனவே (தலைகள் mod 3) எப்போதும் 1 ஆகவே இருக்கும். வேதாளம் சாக 0 தலைகள் (0 mod 3 = 0) தேவை, இதை அடைய முடியாது.", isBookBack: true
  },
  // 5 Marks (3)
  {
    id: "cs11-ch8-5m-1", chapterNo: 8, chapterName: "Iteration and Recursion", chapterNameTamil: "சுழற்சியும், தற்சுழற்சியும்", marks: 5, type: "essay",
    questionText: "Prove that an 8x8 chessboard with alternately colored squares cannot be transformed to have only 1 black square by repeatedly inverting rows and columns.", questionTextTamil: "வழக்கமான நிறமுடைய 8 x 8 அளவிலான ஒரு சதுரங்கப்பலகையை எடுத்துக்கொள்ளுங்கள். குறுக்குவரிசை மற்றும் நேர்வரிசையின் எல்லா கட்டங்களுக்கும் வேறு நிறமிட்டு அவைகளின் நிறத்தை மாற்றிவிடுவோம். திரும்பதிரும்ப வேறு நிறமிடலாம். இப்படிச் செய்வதால், கடைசியில் ஒரேயொரு கருப்புக் கட்டடம் மட்டுமே வர வேண்டும் என்பது இலக்கு. இந்த இலக்கை அடைய முடியாது என்று நிரூபிக்கவும் (குறிப்பு : ஒரு குறுக்கு வரிசையில் அல்லது நேர்வரிசையில் b கருப்பு கட்டங்கள் இருந்தால் அது |(8-b)-b| என்று மாறுகிறது).",
    answer: "Proof using Invariant Parity:\n1. In standard 8x8 board, total black squares = 32 (an even number).\n2. When any row/col with 'b' black squares is inverted, new black squares = 8 - b.\n3. Change in black squares = (8 - b) - b = 8 - 2b, which is always an EVEN integer.\n4. Therefore, total number of black squares remains EVEN after any number of inversions.\n5. Target has 1 black square (an ODD number). An even number can never equal an odd number. Hence, the target state is impossible.",
    answerTamil: "நிரூபணம்:\n1. 8x8 பலகையில் தொடக்க கருப்பு கட்டங்கள் = 32 (இரட்டைப்படை).\n2. ஒரு வரிசையில் 'b' கருப்பு கட்டங்களை மாற்றினால் புதிய எண்ணிக்கை (8 - b) ஆகும்.\n3. ஏற்படும் மாற்றம் = 8 - 2b (எப்போதும் இரட்டைப்படை).\n4. எனவே எத்தனை முறை மாற்றினாலும் மொத்த கருப்பு கட்டங்களின் எண்ணிக்கை இரட்டைப்படையாகவே இருக்கும்.\n5. இலக்கு = 1 கருப்பு கட்டம் (ஒற்றைப்படை). எனவே இந்த இலக்கை அடைய முடியாது.", isBookBack: true
  },
  {
    id: "cs11-ch8-5m-2", chapterNo: 8, chapterName: "Iteration and Recursion", chapterNameTamil: "சுழற்சியும், தற்சுழற்சியும்", marks: 5, type: "essay",
    questionText: "Define power(a, n) recursively as: a^n = { 1 if n=0, a * a^(n-1) if n is odd, a^(n/2) * a^(n/2) if n is even }. Write algorithm and find number of multiplications to compute a^10.", questionTextTamil: "power தற்சுழற்சியை பின்வருமாறு வரையறுக்கலாம்: an = { 1 if n = 0, a x an-1 if n is odd, an/2 x an/2 if n is even. இந்த வரையறையைப் பயன்படுத்தி தற்சுழற்சி நெறிமுறையை உருவாக்கவும். a^10 யைக் கணக்கிட எத்தனை முறை பெருக்க வேண்டும்?",
    answer: "Algorithm:\npower (a, n)\nif n = 0 return 1\nelse if n is odd return a * power(a, n - 1)\nelse\n  p := power(a, n / 2)\n  return p * p\n\nComputation trace for a^10:\n1. power(a, 10) = power(a, 5)^2  -> 1 mult\n2. power(a, 5) = a * power(a, 4) -> 1 mult\n3. power(a, 4) = power(a, 2)^2   -> 1 mult\n4. power(a, 2) = power(a, 1)^2   -> 1 mult\n5. power(a, 1) = a * power(a, 0) -> 1 mult (power(a,0)=1)\nTotal multiplications = 4 (or 5 including base steps).",
    answerTamil: "நெறிமுறை:\npower (a, n)\nif n = 0 return 1\nelse if n % 2 != 0 return a * power(a, n-1)\nelse\n  p := power(a, n/2)\n  return p * p\n\na^10 கணக்கிட ஆகும் பெருக்கல்கள் = 4 முறை.", isBookBack: true, isCompulsoryEligible: true
  },
  {
    id: "cs11-ch8-5m-3", chapterNo: 8, chapterName: "Iteration and Recursion", chapterNameTamil: "சுழற்சியும், தற்சுழற்சியும்", marks: 5, type: "essay",
    questionText: "Show that a 2^n x 2^n square board with one missing square can be tiled using L-shaped trominoes using recursion.", questionTextTamil: "2^n x 2^n சதுர அமைப்பைக் கொண்ட ஒரு சதுர மூலை மூடப்பட்ட அட்டையில், ஒரு மூலைச் சதுரம் ஒரு தனிச் சதுர ஒட்டியினால் மூடப்பட்டிருக்கிறது. ஒன்றின்மேல் ஒன்று இல்லாமல் முக்கோண/L-வடிவ ஒட்டு அட்டையை மூட முடியும் என்பதை காண்பிக்கவும்.",
    answer: "Proof by Mathematical Induction (Recursive Divide & Conquer):\nBase Case (n = 1): A 2x2 board with 1 missing square leaves 3 squares, which is exactly covered by 1 L-shaped tromino.\nInductive Step:\nDivide the 2^n x 2^n board into 4 equal quadrants of size 2^(n-1) x 2^(n-1).\nOne quadrant contains the original missing square.\nPlace 1 L-shaped tromino at the center touching the other three quadrants. Now, every quadrant has exactly one covered/missing square.\nBy recursion, each of the four 2^(n-1) x 2^(n-1) sub-boards can be completely tiled. Hence proved.",
    answerTamil: "கணித தொகுத்தறிதல் முறை (தற்சுழற்சி):\nஅடிப்படை நிலை (n=1): 2x2 பலகையில் 1 கட்டம் விடுபட்டால் மீதமுள்ள 3 கட்டங்களை 1 L-வடிவ ஓட்டினால் மூடலாம்.\nதற்சுழற்சி படிநிலை:\n2^n x 2^n பலகையை நான்கு 2^(n-1) x 2^(n-1) கால்பகுதிகளாகப் பிரிக்கவும். ஒரு பகுதியில் விடுபட்ட கட்டம் இருக்கும். மற்ற மூன்று பகுதிகளின் மையத்தில் 1 L-ஓட்டை வைத்தால், நான்கு பகுதிகளும் தலா 1 விடுபட்ட கட்டத்தைப் பெறும். தற்சுழற்சி முறையில் அனைத்தையும் முழுமையாக மூடலாம்.", isBookBack: true
  }
];

fs.writeFileSync('./scripts/ch6.json', JSON.stringify(ch6, null, 2));
fs.writeFileSync('./scripts/ch7.json', JSON.stringify(ch7, null, 2));
fs.writeFileSync('./scripts/ch8.json', JSON.stringify(ch8, null, 2));
console.log('Ch6, Ch7, Ch8 built successfully!');
