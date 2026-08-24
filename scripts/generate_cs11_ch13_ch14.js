import fs from 'fs';

// ==========================================
// CHAPTER 13: Introduction to Object Oriented Programming (பொருள் நோக்கு நிரலாக்கத்தின் கருத்துக்கள்)
// 1M: 5, 2M: 5, 3M: 5, 5M: 5 (Total: 20)
// ==========================================
const ch13 = [
  // 1 Marks (5)
  {
    id: "cs11-ch13-1m-1", chapterNo: 13, chapterName: "Introduction to Object Oriented Programming", chapterNameTamil: "பொருள் நோக்கு நிரலாக்கத்தின் அடிப்படைக் கருத்துக்கள்", marks: 1, type: "mcq",
    questionText: "The paradigm that focuses on data and binds data to functions is:", questionTextTamil: "தரவுகளுக்கு முன்னுரிமை அளித்து தரவுகளையும் செயற்கூறுகளையும் ஒன்றாக பிணைக்கும் நிரலாக்க முறை எது?",
    options: { A: "Procedural Programming", B: "Object Oriented Programming (OOP)", C: "Modular Programming", D: "Functional Programming" },
    optionsTamil: { A: "நடைமுறை நிரலாக்கம்", B: "பொருள் நோக்கு நிரலாக்கம் (OOP)", C: "கூறுநிலை நிரலாக்கம்", D: "செயற்கூறு நிரலாக்கம்" },
    correctOption: "B", answer: "B) Object Oriented Programming (OOP)", answerTamil: "B) பொருள் நோக்கு நிரலாக்கம் (OOP)", isBookBack: true
  },
  {
    id: "cs11-ch13-1m-2", chapterNo: 13, chapterName: "Introduction to Object Oriented Programming", chapterNameTamil: "பொருள் நோக்கு நிரலாக்கத்தின் அடிப்படைக் கருத்துக்கள்", marks: 1, type: "mcq",
    questionText: "Wrapping up of data and functions into a single unit is called:", questionTextTamil: "தரவுகளையும் செயற்கூறுகளையும் ஒரே அலகாக இணைத்துக் கட்டுவது எவ்வாறு அழைக்கப்படுகிறது?",
    options: { A: "Encapsulation", B: "Abstraction", C: "Polymorphism", D: "Inheritance" },
    optionsTamil: { A: "உறைபொதியாக்கம் (Encapsulation)", B: "அருவமாக்கம்", C: "பல்லுருவாக்கம்", D: "மரபுரிமம்" },
    correctOption: "A", answer: "A) Encapsulation", answerTamil: "A) உறைபொதியாக்கம் (Encapsulation)", isBookBack: true
  },
  {
    id: "cs11-ch13-1m-3", chapterNo: 13, chapterName: "Introduction to Object Oriented Programming", chapterNameTamil: "பொருள் நோக்கு நிரலாக்கத்தின் அடிப்படைக் கருத்துக்கள்", marks: 1, type: "mcq",
    questionText: "The ability of a message or function to be displayed in more than one form is called:", questionTextTamil: "ஒரு செயற்கூறு ஒன்றுக்கும் மேற்பட்ட வடிவங்களில் செயல்படும் திறன் எவ்வாறு அழைக்கப்படுகிறது?",
    options: { A: "Inheritance", B: "Encapsulation", C: "Polymorphism", D: "Modularity" },
    optionsTamil: { A: "மரபுரிமம்", B: "உறைபொதியாக்கம்", C: "பல்லுருவாக்கம் (Polymorphism)", D: "கூறுநிலைமை" },
    correctOption: "C", answer: "C) Polymorphism", answerTamil: "C) பல்லுருவாக்கம் (Polymorphism)", isBookBack: true
  },
  {
    id: "cs11-ch13-1m-4", chapterNo: 13, chapterName: "Introduction to Object Oriented Programming", chapterNameTamil: "பொருள் நோக்கு நிரலாக்கத்தின் அடிப்படைக் கருத்துக்கள்", marks: 1, type: "mcq",
    questionText: "The mechanism of deriving a new class from an existing base class is called:", questionTextTamil: "ஏற்கனவே உள்ள ஒரு அடிப்படை இனக்குழுவிலிருந்து புதிய தருவிக்கப்பட்ட இனக்குழுவை உருவாக்கும் முறை:",
    options: { A: "Polymorphism", B: "Inheritance", C: "Encapsulation", D: "Data Hiding" },
    optionsTamil: { A: "பல்லுருவாக்கம்", B: "மரபுரிமம் (Inheritance)", C: "உறைபொதியாக்கம்", D: "தரவு மறைப்பு" },
    correctOption: "B", answer: "B) Inheritance", answerTamil: "B) மரபுரிமம் (Inheritance)", isBookBack: true
  },
  {
    id: "cs11-ch13-1m-5", chapterNo: 13, chapterName: "Introduction to Object Oriented Programming", chapterNameTamil: "பொருள் நோக்கு நிரலாக்கத்தின் அடிப்படைக் கருத்துக்கள்", marks: 1, type: "mcq",
    questionText: "An instance of a class in OOP is known as:", questionTextTamil: "பொருள் நோக்கு நிரலாக்கத்தில் இனக்குழுவின் ஒரு சான்று (Instance) எவ்வாறு அழைக்கப்படுகிறது?",
    options: { A: "Object", B: "Function", C: "Array", D: "Variable" },
    optionsTamil: { A: "பொருள் (Object)", B: "செயற்கூறு", C: "அணி", D: "மாறி" },
    correctOption: "A", answer: "A) Object", answerTamil: "A) பொருள் (Object)", isBookBack: true
  },

  // 2 Marks (5)
  {
    id: "cs11-ch13-2m-1", chapterNo: 13, chapterName: "Introduction to Object Oriented Programming", chapterNameTamil: "பொருள் நோக்கு நிரலாக்கத்தின் அடிப்படைக் கருத்துக்கள்", marks: 2, type: "short",
    questionText: "What is Procedural Programming paradigm?", questionTextTamil: "நடைமுறை நிரலாக்க அணுகுமுறை என்றால் என்ன?",
    answer: "Procedural programming organizes code into step-by-step procedures/functions that operate on global/local data without strong data-security binding (e.g. C, Pascal).",
    answerTamil: "நடைமுறை நிரலாக்கம் என்பது நிரலை படிப்படியான நடைமுறைகளாகவும் (Functions) செயல்பாடுகளாகவும் பிரித்து செயல்படுத்தும் அணுகுமுறையாகும் (எ.கா: C, Pascal).", isBookBack: true
  },
  {
    id: "cs11-ch13-2m-2", chapterNo: 13, chapterName: "Introduction to Object Oriented Programming", chapterNameTamil: "பொருள் நோக்கு நிரலாக்கத்தின் அடிப்படைக் கருத்துக்கள்", marks: 2, type: "short",
    questionText: "What is Modular Programming?", questionTextTamil: "கூறுநிலை நிரலாக்கம் என்றால் என்ன?",
    answer: "Modular programming divides a large program into independent, interchangeable sub-modules, each handling a distinct functionality.",
    answerTamil: "ஒரு பெரிய நிரலை சிறிய, சுதந்திரமான, தனித்தனி துணை கூறுகளாகப் (Modules) பிரித்து உருவாக்கும் முறை கூறுநிலை நிரலாக்கம் எனப்படும்.", isBookBack: true
  },
  {
    id: "cs11-ch13-2m-3", chapterNo: 13, chapterName: "Introduction to Object Oriented Programming", chapterNameTamil: "பொருள் நோக்கு நிரலாக்கத்தின் அடிப்படைக் கருத்துக்கள்", marks: 2, type: "short",
    questionText: "Define Class and Object in OOP.", questionTextTamil: "OOP-ல் இனக்குழு (Class) மற்றும் பொருள் (Object) வரையறுக்கவும்.",
    answer: "Class: A blueprint/template that defines data members and member functions.\nObject: A real-world instance of a class occupying memory.",
    answerTamil: "இனக்குழு (Class): தரவுகளையும் செயற்கூறுகளையும் வரையறுக்கும் ஒரு வரைபட மாதிரி.\nபொருள் (Object): இனக்குழுவின் ஒரு நேரடி சான்று (Instance) ஆகும்.", isBookBack: true
  },
  {
    id: "cs11-ch13-2m-4", chapterNo: 13, chapterName: "Introduction to Object Oriented Programming", chapterNameTamil: "பொருள் நோக்கு நிரலாக்கத்தின் அடிப்படைக் கருத்துக்கள்", marks: 2, type: "short",
    questionText: "What is Encapsulation?", questionTextTamil: "உறைபொதியாக்கம் (Encapsulation) என்றால் என்ன?",
    answer: "Encapsulation is the mechanism of bundling data and the functions that manipulate them into a single unit (class), preventing unauthorized direct access from outside.",
    answerTamil: "தரவுகளையும், அவற்றின் மீது செயல்படும் செயற்கூறுகளையும் ஒரே அலகாகப் பிணைத்து, வெளிப்புற நேரடி அணுகலில் இருந்து பாதுகாக்கும் முறை உறைபொதியாக்கம் எனப்படும்.", isBookBack: true
  },
  {
    id: "cs11-ch13-2m-5", chapterNo: 13, chapterName: "Introduction to Object Oriented Programming", chapterNameTamil: "பொருள் நோக்கு நிரலாக்கத்தின் அடிப்படைக் கருத்துக்கள்", marks: 2, type: "short",
    questionText: "What is Data Hiding?", questionTextTamil: "தரவு மறைப்பு (Data Hiding) என்றால் என்ன?",
    answer: "Data hiding restricts direct access to internal data members of a class from outside functions by making them private, ensuring data integrity and security.",
    answerTamil: "இனக்குழுவின் உள் தரவுகளை private அணுகியல்பு மூலம் வெளிப்புற நிரல்கள் நேரடியாக அணுக முடியாதபடி மறைத்து வைக்கும் பாதுகாப்பு முறை தரவு மறைப்பு ஆகும்.", isBookBack: true
  },

  // 3 Marks (5)
  {
    id: "cs11-ch13-3m-1", chapterNo: 13, chapterName: "Introduction to Object Oriented Programming", chapterNameTamil: "பொருள் நோக்கு நிரலாக்கத்தின் அடிப்படைக் கருத்துக்கள்", marks: 3, type: "brief",
    questionText: "What is Data Abstraction in OOP? Give an example.", questionTextTamil: "பொருள் நோக்கு நிரலாக்கத்தில் தரவு அருவமாக்கம் (Data Abstraction) என்றால் என்ன? எடுத்துக்காட்டு தருக.",
    answer: "Data abstraction represents essential features without including background implementation details.\nExample: When driving a car, a driver knows pressing the brake stops the car without needing to understand the underlying hydraulic brake caliper mechanics.",
    answerTamil: "பின்னணி செயலாக்க விவரங்களை மறைத்து, முக்கியமான இன்றியமையாத பண்புகளை மட்டுமே வெளிப்படுத்துவது தரவு அருவமாக்கம் ஆகும்.\nஎடுத்துக்காட்டு: மகிழுந்தின் பிரேக் அழுத்தினால் வாகனம் நிற்கும் என்பது மட்டும் தெரிந்தால் போதும், அதன் உள் ஹைட்ராலிக் இயக்கம் தெரிய வேண்டியதில்லை.", isBookBack: true
  },
  {
    id: "cs11-ch13-3m-2", chapterNo: 13, chapterName: "Introduction to Object Oriented Programming", chapterNameTamil: "பொருள் நோக்கு நிரலாக்கத்தின் அடிப்படைக் கருத்துக்கள்", marks: 3, type: "brief",
    questionText: "Explain Polymorphism with an example.", questionTextTamil: "பல்லுருவாக்கம் (Polymorphism) என்றால் என்ன? எடுத்துக்காட்டுடன் விளக்குக.",
    answer: "Polymorphism means 'many forms'. It is the capability of a function or operator to execute different behaviors depending on data types or arguments passed.\nExample: Function overloading, Operator overloading (+ adds numbers and also concatenates strings).",
    answerTamil: "பல்லுருவாக்கம் என்பது ஒரு செயற்கூறு அல்லது செயற்குறி சூழலுக்கு ஏற்ப பல வடிவங்களில் செயல்படும் திறன் ஆகும்.\nஎடுத்துக்காட்டு: செயற்கூறு பணிமிகுப்பு, செயற்குறி பணிமிகுப்பு (+ செயற்குறி எண்களைக் கூட்டும் மற்றும் சரங்களை இணைக்கும்).", isBookBack: true
  },
  {
    id: "cs11-ch13-3m-3", chapterNo: 13, chapterName: "Introduction to Object Oriented Programming", chapterNameTamil: "பொருள் நோக்கு நிரலாக்கத்தின் அடிப்படைக் கருத்துக்கள்", marks: 3, type: "brief",
    questionText: "What is Inheritance? Mention its key benefits.", questionTextTamil: "மரபுரிமம் (Inheritance) என்றால் என்ன? அதன் முக்கிய பயன்களைக் கூறுக.",
    answer: "Inheritance is the process of deriving a new class (derived class) from an existing class (base class).\nBenefits:\n1. Code Reusability: Reuses existing tested code without rewriting.\n2. Saves development time and memory.\n3. Enhances modularity and hierarchical classification.",
    answerTamil: "ஏற்கனவே உள்ள அடிப்படை இனக்குழுவிலிருந்து புதிய தருவிக்கப்பட்ட இனக்குழுவை உருவாக்கும் திறன் மரபுரிமம் எனப்படும்.\nபயன்கள்:\n1. குறிமுறை மறுபயனாக்கம் (Code Reusability).\n2. நிரலாக்க நேரம் மற்றும் நினைவகம் மிச்சமாகிறது.\n3. படிநிலை ஒழுங்கமைப்பை எளிதாக்குகிறது.", isBookBack: true
  },
  {
    id: "cs11-ch13-3m-4", chapterNo: 13, chapterName: "Introduction to Object Oriented Programming", chapterNameTamil: "பொருள் நோக்கு நிரலாக்கத்தின் அடிப்படைக் கருத்துக்கள்", marks: 3, type: "brief",
    questionText: "Differentiate between Procedural Programming and Object Oriented Programming.", questionTextTamil: "நடைமுறை நிரலாக்கம் மற்றும் பொருள் நோக்கு நிரலாக்கம் வேறுபடுத்துக.",
    answer: "Procedural Programming:\n1. Top-Down design approach.\n2. Focuses on functions and algorithms.\n3. Data moves freely across functions; no data hiding.\n\nOOP:\n1. Bottom-Up design approach.\n2. Focuses on data and objects.\n3. Data is secure via encapsulation and access specifiers.",
    answerTamil: "நடைமுறை நிரலாக்கம்:\n1. மேலிருந்து கீழ் அணுகுமுறை.\n2. செயற்கூறுகளுக்கு அதிக முக்கியத்துவம்.\n3. தரவுப் பாதுகாப்பு குறைவு; தரவு மறைப்பு இல்லை.\n\nபொருள் நோக்கு நிரலாக்கம் (OOP):\n1. கீழிருந்து மேல் அணுகுமுறை.\n2. தரவு மற்றும் பொருட்களுக்கு முக்கியத்துவம்.\n3. உறைபொதியாக்கம் மூலம் தரவுப் பாதுகாப்பு மிக அதிகம்.", isBookBack: true
  },
  {
    id: "cs11-ch13-3m-5", chapterNo: 13, chapterName: "Introduction to Object Oriented Programming", chapterNameTamil: "பொருள் நோக்கு நிரலாக்கத்தின் அடிப்படைக் கருத்துக்கள்", marks: 3, type: "brief",
    questionText: "Write a short note on Dynamic Binding and Message Passing in OOP.", questionTextTamil: "இயங்குநிலை பிணைப்பு மற்றும் செய்தி அனுப்புதல் பற்றி சிறுகுறிப்பு வரைக.",
    answer: "1. Dynamic Binding: Code associated with a given procedure call is determined dynamically at runtime rather than at compile time (supports runtime polymorphism via virtual functions).\n2. Message Passing: Objects communicate with each other by sending and receiving messages (invoking member functions with arguments).",
    answerTamil: "1. இயங்குநிலை பிணைப்பு (Dynamic Binding): அழைக்கப்படும் செயற்கூறு நிரல் இயங்கும் நேரத்தில் பிணைக்கப்படுகிறது.\n2. செய்தி அனுப்புதல் (Message Passing): ஒரு பொருள் மற்றொரு பொருளுடன் தொடர்புகொள்ள தகவல்களை அனுப்பும் முறை.", isBookBack: true
  },

  // 5 Marks (5)
  {
    id: "cs11-ch13-5m-1", chapterNo: 13, chapterName: "Introduction to Object Oriented Programming", chapterNameTamil: "பொருள் நோக்கு நிரலாக்கத்தின் அடிப்படைக் கருத்துக்கள்", marks: 5, type: "essay",
    questionText: "Explain the fundamental concepts of Object Oriented Programming (OOP) in detail.", questionTextTamil: "பொருள் நோக்கு நிரலாக்கத்தின் (OOP) அடிப்படைக் கருத்துக்களை விரிவாக விளக்குக.",
    answer: "1. Class: User-defined blueprint binding data members and methods.\n2. Object: Real-world instance of a class.\n3. Encapsulation: Bundling data and functions into one unit to prevent outside tampering.\n4. Data Abstraction: Displaying only essential features and hiding internal implementation.\n5. Inheritance: Reusability mechanism deriving child classes from parent classes.\n6. Polymorphism: Ability of an entity to take multiple forms (overloading & overriding).\n7. Dynamic Binding & Message Passing: Runtime binding and object communication.",
    answerTamil: "1. இனக்குழு (Class): தரவுகளையும் செயற்கூறுகளையும் கொண்ட கட்டமைப்பு மாதிரி.\n2. பொருள் (Object): இனக்குழுவின் நிகழ்வு அல்லது சான்று.\n3. உறைபொதியாக்கம் (Encapsulation): தரவுகளையும் செயற்கூறுகளையும் ஒரே அலகாகப் பிணைத்தல்.\n4. தரவு அருவமாக்கம் (Data Abstraction): தேவையான விவரங்களை மட்டும் காண்பித்து பின்னணி விவரங்களை மறைத்தல்.\n5. மரபுரிமம் (Inheritance): ஒரு இனக்குழுவின் பண்புகளை மற்றொரு இனக்குழு பெறுதல்.\n6. பல்லுருவாக்கம் (Polymorphism): ஒரே செயற்கூறு பல வடிவங்களில் செயல்படும் திறன்.\n7. இயங்குநிலை பிணைப்பு மற்றும் செய்தி அனுப்புதல்.", isBookBack: true
  },
  {
    id: "cs11-ch13-5m-2", chapterNo: 13, chapterName: "Introduction to Object Oriented Programming", chapterNameTamil: "பொருள் நோக்கு நிரலாக்கத்தின் அடிப்படைக் கருத்துக்கள்", marks: 5, type: "essay",
    questionText: "Explain the advantages and benefits of Object Oriented Programming.", questionTextTamil: "பொருள் நோக்கு நிரலாக்கத்தின் (OOP) நன்மைகள் மற்றும் சிறப்பியல்புகளை விளக்குக.",
    answer: "1. Code Reusability: Inheritance allows using existing classes without re-writing from scratch.\n2. Data Redundancy Reduced: Modular structure reduces duplicate code.\n3. Enhanced Security: Data hiding prevents unauthorized alteration of internal states.\n4. Easy Maintenance and Upgrades: Modular objects are easy to modify, debug, and maintain.\n5. Software Complexity Management: Bottom-up paradigm makes complex real-world systems easier to model.",
    answerTamil: "1. குறிமுறை மறுபயனாக்கம்: மரபுரிமம் மூலம் ஏற்கனவே எழுதப்பட்ட நிரல்களை மீண்டும் பயன்படுத்தலாம்.\n2. மிக உயர்ந்த தரவுப் பாதுகாப்பு: தரவு மறைப்பு மற்றும் உறைபொதியாக்கம் மூலம் தரவு பாதுகாக்கப்படுகிறது.\n3. எளிதான பராமரிப்பு: பிழைகளை எளிதில் திருத்தவும் புதிய வசதிகளைச் சேர்க்கவும் முடியும்.\n4. மென்பொருள் உருவாக்க நேரம் குறைகிறது.\n5. நிஜ உலகச் சிக்கல்களை எளிதில் மாதிரிப்படுத்த முடிகிறது.", isBookBack: true
  },
  {
    id: "cs11-ch13-5m-3", chapterNo: 13, chapterName: "Introduction to Object Oriented Programming", chapterNameTamil: "பொருள் நோக்கு நிரலாக்கத்தின் அடிப்படைக் கருத்துக்கள்", marks: 5, type: "essay",
    questionText: "Explain the evolution and paradigms of programming languages (Procedural, Modular, OOP).", questionTextTamil: "நிரலாக்க மொழிகளின் பரிணாம வளர்ச்சி மற்றும் அணுகுமுறைகளை (நடைமுறை, கூறுநிலை, OOP) விளக்குக.",
    answer: "1. Unstructured Programming: Sequence of linear commands with goto jumps (spaghetti code).\n2. Procedural Programming: Programs structured as procedures/functions with local/global data (C, Pascal).\n3. Modular Programming: Programs grouped into separate compiled module files.\n4. Object Oriented Programming (OOP): Programs organized around real-world data objects combining properties and behaviors (C++, Java, Python).",
    answerTamil: "1. கட்டமைப்பற்ற நிரலாக்கம்: நேரடி தொடர் கட்டளைகள் மற்றும் goto தாவல்கள் கொண்டது.\n2. நடைமுறை நிரலாக்கம்: நிரல்களை நடைமுறைகளாகவும் செயற்கூறுகளாகவும் பிரித்து நிர்வகித்தல்.\n3. கூறுநிலை நிரலாக்கம்: நிரல்களை தனித்தனி தொகுதிகளாக (Modules) உருவாக்குதல்.\n4. பொருள் நோக்கு நிரலாக்கம் (OOP): தரவுகளையும் செயல்பாடுகளையும் இணைத்து பொருள் சார்ந்து வடிவமைத்தல்.", isBookBack: true
  },
  {
    id: "cs11-ch13-5m-4", chapterNo: 13, chapterName: "Introduction to Object Oriented Programming", chapterNameTamil: "பொருள் நோக்கு நிரலாக்கத்தின் அடிப்படைக் கருத்துக்கள்", marks: 5, type: "essay",
    questionText: "Explain different types of Inheritance supported in OOP.", questionTextTamil: "பொருள் நோக்கு நிரலாக்கத்தில் உள்ள பல்வேறு வகையான மரபுரிமங்களை விளக்குக.",
    answer: "1. Single Inheritance: One derived class from one base class.\n2. Multiple Inheritance: One derived class from two or more base classes.\n3. Multilevel Inheritance: Class derived from another derived class (A -> B -> C).\n4. Hierarchical Inheritance: Multiple derived classes from a single base class.\n5. Hybrid Inheritance: Combination of two or more inheritance types.",
    answerTamil: "1. ஒற்றை மரபுரிமம் (Single): ஒரு அடிப்படை இனக்குழுவிலிருந்து ஒரு தருவிக்கப்பட்ட இனக்குழு.\n2. பலவழி மரபுரிமம் (Multiple): பல அடிப்படை இனக்குழுக்களிலிருந்து ஒரு தருவிக்கப்பட்ட இனக்குழு.\n3. பலநிலை மரபுரிமம் (Multilevel): ஒரு தருவிக்கப்பட்ட இனக்குழு மற்றொரு இனக்குழுவிற்கு அடிப்படையாக அமைதல்.\n4. படிநிலை மரபுரிமம் (Hierarchical): ஒரு அடிப்படை இனக்குழுவிலிருந்து பல தருவிக்கப்பட்ட இனக்குழுக்கள் உருவாதல்.\n5. கலப்பின மரபுரிமம் (Hybrid): மேற்கண்ட வகைகளின் கலவை.", isBookBack: true
  },
  {
    id: "cs11-ch13-5m-5", chapterNo: 13, chapterName: "Introduction to Object Oriented Programming", chapterNameTamil: "பொருள் நோக்கு நிரலாக்கத்தின் அடிப்படைக் கருத்துக்கள்", marks: 5, type: "essay",
    questionText: "Explain the limitations and disadvantages of Object Oriented Programming.", questionTextTamil: "பொருள் நோக்கு நிரலாக்கத்தின் வரம்புகள் மற்றும் குறைபாடுகளை விளக்குக.",
    answer: "1. Larger Program Size: OOP programs generally generate larger binary footprints than procedural code.\n2. Execution Overhead: Dynamic dispatch and method lookups can slightly slow execution speed.\n3. Steep Learning Curve: Requires thorough understanding of abstract concepts (Polymorphism, Inheritance).\n4. Not Suitable for Simple Problems: Creating classes and objects for trivial scripts increases unnecessary overhead.",
    answerTamil: "1. அதிக நிரல் அளவு: OOP நிரல்கள் பொதுவாக அதிக நினைவக இடத்தை எடுத்துக்கொள்ளும்.\n2. இயங்கும் வேகம்: சில நிலைகளில் நடைமுறை நிரலாக்கத்தை விட வேகம் சற்று குறைவாக இருக்கலாம்.\n3. கற்றல் சிக்கல்: பல்லுருவாக்கம், மரபுரிமம் போன்ற கருத்துக்களைப் புரிந்துகொள்ள அதிக முயற்சி தேவை.\n4. மிகச்சிறிய எளிய பணிகளுக்கு வகுப்புகள் உருவாக்குவது தேவையற்ற மேல்நிலைச் செலவை உண்டாக்கும்.", isBookBack: true
  }
];

// ==========================================
// CHAPTER 14: Classes and Objects (இனக்குழுக்கள் மற்றும் பொருள்கள்)
// 1M: 5, 2M: 5, 3M: 5, 5M: 4 (Total: 19)
// ==========================================
const ch14 = [
  // 1 Marks (5)
  {
    id: "cs11-ch14-1m-1", chapterNo: 14, chapterName: "Classes and Objects", chapterNameTamil: "இனக்குழுக்கள் மற்றும் பொருள்கள்", marks: 1, type: "mcq",
    questionText: "What is the default access specifier for members of a class in C++?", questionTextTamil: "C++ மொழியில் இனக்குழு உறுப்புகளின் கொடாநிலை அணுகியல்பு (Default access specifier) எது?",
    options: { A: "public", B: "private", C: "protected", D: "friend" },
    optionsTamil: { A: "public", B: "private", C: "protected", D: "friend" },
    correctOption: "B", answer: "B) private", answerTamil: "B) private", isBookBack: true
  },
  {
    id: "cs11-ch14-1m-2", chapterNo: 14, chapterName: "Classes and Objects", chapterNameTamil: "இனக்குழுக்கள் மற்றும் பொருள்கள்", marks: 1, type: "mcq",
    questionText: "Which operator is used to define member functions outside the class definition?", questionTextTamil: "இனக்குழுவுக்கு வெளியே உறுப்புச் செயற்கூற்றை வரையறுக்கப் பயன்படும் செயற்குறி எது?",
    options: { A: "Dot (.)", B: "Arrow (->)", C: "Scope resolution (::)", D: "Colon (:)" },
    optionsTamil: { A: "புள்ளி (.)", B: "அம்பு (->)", C: "வரையெல்லை தீர்வு செயற்குறி (::)", D: "முக்காற்புள்ளி (:)" },
    correctOption: "C", answer: "C) Scope resolution operator (::)", answerTamil: "C) வரையெல்லை தீர்வு செயற்குறி (::)", isBookBack: true
  },
  {
    id: "cs11-ch14-1m-3", chapterNo: 14, chapterName: "Classes and Objects", chapterNameTamil: "இனக்குழுக்கள் மற்றும் பொருள்கள்", marks: 1, type: "mcq",
    questionText: "A class body declaration must terminate with which symbol?", questionTextTamil: "இனக்குழு உடற்பகுதி அறிவிப்பு எந்தக் குறியீட்டுடன் முடிவடைய வேண்டும்?",
    options: { A: "}", B: "};", C: "):", D: "end" },
    optionsTamil: { A: "}", B: "};", C: "):", D: "end" },
    correctOption: "B", answer: "B) }; (Closing brace followed by semicolon)", answerTamil: "B) };", isBookBack: true
  },
  {
    id: "cs11-ch14-1m-4", chapterNo: 14, chapterName: "Classes and Objects", chapterNameTamil: "இனக்குழுக்கள் மற்றும் பொருள்கள்", marks: 1, type: "mcq",
    questionText: "Which member function is implicitly created by compiler as an inline function?", questionTextTamil: "எந்த உறுப்புச் செயற்கூறு தானாகவே உள்வரிச் செயற்கூறாகக் (Inline) கருதப்படுகிறது?",
    options: { A: "Function defined inside class body", B: "Function defined outside class using ::", C: "Static function", D: "Friend function" },
    optionsTamil: { A: "இனக்குழுவிற்குள்ளேயே வரையறுக்கப்படும் செயற்கூறு", B: "இனக்குழுவிற்கு வெளியே :: மூலம் வரையறுக்கப்படும் செயற்கூறு", C: "நிலையான செயற்கூறு", D: "நட்புச் செயற்கூறு" },
    correctOption: "A", answer: "A) Function defined inside class body", answerTamil: "A) இனக்குழுவிற்குள்ளேயே வரையறுக்கப்படும் செயற்கூறு", isBookBack: true
  },
  {
    id: "cs11-ch14-1m-5", chapterNo: 14, chapterName: "Classes and Objects", chapterNameTamil: "இனக்குழுக்கள் மற்றும் பொருள்கள்", marks: 1, type: "mcq",
    questionText: "The members of a class accessible from anywhere in the program are under which specifier?", questionTextTamil: "நிரலின் எந்தப் பகுதியிலிருந்தும் அணுகக்கூடிய இனக்குழுவின் உறுப்புகள் எந்த அணுகியல்பின் கீழ் இருக்கும்?",
    options: { A: "private", B: "protected", C: "public", D: "static" },
    optionsTamil: { A: "private", B: "protected", C: "public", D: "static" },
    correctOption: "C", answer: "C) public", answerTamil: "C) public", isBookBack: true
  },

  // 2 Marks (5)
  {
    id: "cs11-ch14-2m-1", chapterNo: 14, chapterName: "Classes and Objects", chapterNameTamil: "இனக்குழுக்கள் மற்றும் பொருள்கள்", marks: 2, type: "short",
    questionText: "Write the general syntax for defining a Class in C++.", questionTextTamil: "C++ மொழியில் இனக்குழுவை வரையறுக்கும் பொதுவான தொடரியலை எழுதுக.",
    answer: "Syntax:\nclass class_name {\nprivate:\n    // private data and functions\npublic:\n    // public data and functions\nprotected:\n    // protected data and functions\n};",
    answerTamil: "தொடரியல்:\nclass இனக்குழு_பெயர் {\nprivate:\n    // தனிப்பட்ட உறுப்புகள்\npublic:\n    // பொது உறுப்புகள்\n};", isBookBack: true
  },
  {
    id: "cs11-ch14-2m-2", chapterNo: 14, chapterName: "Classes and Objects", chapterNameTamil: "இனக்குழுக்கள் மற்றும் பொருள்கள்", marks: 2, type: "short",
    questionText: "What are Access Specifiers? Name them.", questionTextTamil: "அணுகியல்பு கட்டுப்பாட்டிகள் (Access Specifiers) என்றால் என்ன? அவற்றைக் குறிப்பிடுக.",
    answer: "Access specifiers define the visibility and accessibility of class members from other parts of the program.\nTypes: 1. private, 2. public, 3. protected.",
    answerTamil: "இனக்குழுவின் உறுப்புகளை நிரலின் எந்தப் பகுதிகளிலிருந்து அணுகலாம் என்பதைத் தீர்மானிக்கும் சொற்கள் அணுகியல்பு கட்டுப்பாட்டிகள் எனப்படும் (private, public, protected).", isBookBack: true
  },
  {
    id: "cs11-ch14-2m-3", chapterNo: 14, chapterName: "Classes and Objects", chapterNameTamil: "இனக்குழுக்கள் மற்றும் பொருள்கள்", marks: 2, type: "short",
    questionText: "How are Objects created for a class?", questionTextTamil: "இனக்குழுவிற்கு பொருள்கள் எவ்வாறு உருவாக்கப்படுகின்றன?",
    answer: "Objects are instantiated just like normal variables using the class name as data type.\nSyntax: class_name object1, object2; (e.g. Student s1, s2;).",
    answerTamil: "இனக்குழுவின் பெயரை தரவினமாகக் கொண்டு பொருள்கள் அறிவிக்கப்படுகின்றன.\nதொடரியல்: இனக்குழு_பெயர் பொருள்_பெயர்; (எ.கா: Student s1;).", isBookBack: true
  },
  {
    id: "cs11-ch14-2m-4", chapterNo: 14, chapterName: "Classes and Objects", chapterNameTamil: "இனக்குழுக்கள் மற்றும் பொருள்கள்", marks: 2, type: "short",
    questionText: "How do you access member functions of a class through an object?", questionTextTamil: "ஒரு பொருளின் மூலம் இனக்குழுவின் உறுப்புச் செயற்கூறுகளை எவ்வாறு அணுகுவாய்?",
    answer: "Member functions are invoked using the dot operator (.) between object name and function name.\nSyntax: object_name.function_name(arguments); (e.g. s1.getData();).",
    answerTamil: "பொருளின் பெயர் மற்றும் புள்ளி செயற்குறி (.) மூலம் உறுப்புச் செயற்கூறுகள் அழைக்கப்படுகின்றன.\nதொடரியல்: பொருள்_பெயர்.செயற்கூறு_பெயர்(); (எ.கா: s1.display();).", isBookBack: true
  },
  {
    id: "cs11-ch14-2m-5", chapterNo: 14, chapterName: "Classes and Objects", chapterNameTamil: "இனக்குழுக்கள் மற்றும் பொருள்கள்", marks: 2, type: "short",
    questionText: "What are Class Methods (Member Functions)?", questionTextTamil: "இனக்குழுவின் உறுப்புச் செயற்கூறுகள் என்றால் என்ன?",
    answer: "Member functions are functions declared or defined inside a class that have access to all private and public data members of that class.",
    answerTamil: "இனக்குழுவிற்குள் அறிவிக்கப்பட்டு, அதன் தரவு உறுப்புகளின் மீது செயல்படும் செயற்கூறுகள் உறுப்புச் செயற்கூறுகள் எனப்படும்.", isBookBack: true
  },

  // 3 Marks (5)
  {
    id: "cs11-ch14-3m-1", chapterNo: 14, chapterName: "Classes and Objects", chapterNameTamil: "இனக்குழுக்கள் மற்றும் பொருள்கள்", marks: 3, type: "brief",
    questionText: "Explain the differences between private, public, and protected access specifiers.", questionTextTamil: "private, public, மற்றும் protected அணுகியல்பு கட்டுப்பாட்டிகளை வேறுபடுத்துக.",
    answer: "1. private: Accessible only by member functions of the same class (default).\n2. public: Accessible from anywhere in the program.\n3. protected: Accessible within the same class and by derived (child) classes through inheritance.",
    answerTamil: "1. private: அதே இனக்குழுவின் உறுப்புச் செயற்கூறுகளால் மட்டுமே அணுக முடியும் (கொடாநிலை).\n2. public: நிரலின் எந்தப் பகுதியிலிருந்தும் நேரடியாக அணுக முடியும்.\n3. protected: அதே இனக்குழு மற்றும் மரபுரிமம் பெற்ற தருவிக்கப்பட்ட இனக்குழுக்களால் மட்டுமே அணுக முடியும்.", isBookBack: true
  },
  {
    id: "cs11-ch14-3m-2", chapterNo: 14, chapterName: "Classes and Objects", chapterNameTamil: "இனக்குழுக்கள் மற்றும் பொருள்கள்", marks: 3, type: "brief",
    questionText: "Explain defining member functions outside the class using Scope Resolution Operator (::).", questionTextTamil: "வரையெல்லை தீர்வு செயற்குறியைப் (::) பயன்படுத்தி இனக்குழுவிற்கு வெளியே செயற்கூறை எவ்வாறு வரையறுக்கலாம்?",
    answer: "When declaring inside class and defining outside:\nSyntax:\nreturn_type class_name :: function_name (parameters) {\n    // function body\n}\nExample:\nvoid Student::getData() {\n    cin >> roll >> name;\n}",
    answerTamil: "இனக்குழுவிற்குள் முன்வடிவை அறிவித்துவிட்டு, வெளியே வரையறுக்க :: பயன்படுகிறது.\nதொடரியல்:\nதிரும்பித்தரும்_வகை இனக்குழு_பெயர் :: செயற்கூறு_பெயர் (அளபுருக்கள்) {\n    // உடற்பகுதி\n}", isBookBack: true
  },
  {
    id: "cs11-ch14-3m-3", chapterNo: 14, chapterName: "Classes and Objects", chapterNameTamil: "இனக்குழுக்கள் மற்றும் பொருள்கள்", marks: 3, type: "brief",
    questionText: "Explain Array of Objects with an example.", questionTextTamil: "பொருள்களின் அணி (Array of Objects) பற்றி எடுத்துக்காட்டுடன் விளக்குக.",
    answer: "An array of objects stores multiple object instances of the same class in consecutive memory locations.\n\nExample:\nclass Student {\n    int roll;\npublic:\n    void get() { cin >> roll; }\n};\nStudent s[10]; // Array of 10 student objects\nfor(int i=0; i<10; i++) s[i].get();",
    answerTamil: "ஒரு இனக்குழுவிற்கு பல பொருள்களைக் கொண்ட அணியை உருவாக்குவது பொருள்களின் அணி எனப்படும்.\n\nஎடுத்துக்காட்டு:\nStudent s[10]; // 10 மாணவர் பொருள்களின் அணி\nfor(int i=0; i<10; i++) s[i].getData();", isBookBack: true
  },
  {
    id: "cs11-ch14-3m-4", chapterNo: 14, chapterName: "Classes and Objects", chapterNameTamil: "இனக்குழுக்கள் மற்றும் பொருள்கள்", marks: 3, type: "brief",
    questionText: "Explain Nesting of Member Functions with an example.", questionTextTamil: "உறுப்புச் செயற்கூறுகளின் பின்னலாக்கம் (Nesting of member functions) என்றால் என்ன?",
    answer: "Nesting of member functions occurs when a member function of a class calls another member function of the same class directly without using the dot operator on an object.\n\nExample:\nclass Number {\n    int n;\npublic:\n    int square() { return n * n; }\n    void display() {\n        cout << \"Square is \" << square(); // Nested call\n    }\n};",
    answerTamil: "ஒரு இனக்குழுவின் உறுப்புச் செயற்கூறு அதே இனக்குழுவின் மற்றொரு உறுப்புச் செயற்கூறை புள்ளி செயற்குறி இல்லாமலேயே நேரடியாக அழைப்பது உறுப்புச் செயற்கூறுகளின் பின்னலாக்கம் எனப்படும்.", isBookBack: true
  },
  {
    id: "cs11-ch14-3m-5", chapterNo: 14, chapterName: "Classes and Objects", chapterNameTamil: "இனக்குழுக்கள் மற்றும் பொருள்கள்", marks: 3, type: "brief",
    questionText: "Differentiate between a Class and a Structure in C++.", questionTextTamil: "C++ மொழியில் இனக்குழு (Class) மற்றும் கட்டமைப்பு (Structure) வேறுபடுத்துக.",
    answer: "1. Class: Declared using 'class' keyword; default member access is private.\n2. Structure: Declared using 'struct' keyword; default member access is public.",
    answerTamil: "1. இனக்குழு (Class): 'class' சிறப்புச் சொல் மூலம் அறிவிக்கப்படுகிறது; கொடாநிலையாக அனைத்து உறுப்புகளும் private ஆகும்.\n2. கட்டமைப்பு (Structure): 'struct' சிறப்புச் சொல் மூலம் அறிவிக்கப்படுகிறது; கொடாநிலையாக அனைத்து உறுப்புகளும் public ஆகும்.", isBookBack: true
  },

  // 5 Marks (4)
  {
    id: "cs11-ch14-5m-1", chapterNo: 14, chapterName: "Classes and Objects", chapterNameTamil: "இனக்குழுக்கள் மற்றும் பொருள்கள்", marks: 5, type: "essay",
    questionText: "Write a complete C++ program to create a Class 'Student' with data members (roll_no, name, marks) and member functions (readData, displayData) and create objects to process marks.", questionTextTamil: "மாணவர் (Student) என்ற இனக்குழுவை உருவாக்கி அதில் roll_no, name, marks போன்ற தரவு உறுப்புகளையும் readData, displayData உறுப்புச் செயற்கூறுகளையும் கொண்டு மாணவர் விவரங்களைக் கையாளும் முழுமையான C++ நிரலை எழுதுக.",
    answer: "#include <iostream>\nusing namespace std;\nclass Student {\nprivate:\n    int roll_no;\n    char name[30];\n    float marks;\npublic:\n    void readData() {\n        cout << \"Enter Roll No: \"; cin >> roll_no;\n        cout << \"Enter Name: \"; cin >> name;\n        cout << \"Enter Marks: \"; cin >> marks;\n    }\n    void displayData() {\n        cout << \"\\n--- Student Details ---\\n\";\n        cout << \"Roll No : \" << roll_no << endl;\n        cout << \"Name    : \" << name << endl;\n        cout << \"Marks   : \" << marks << endl;\n    }\n};\nint main() {\n    Student s1;\n    s1.readData();\n    s1.displayData();\n    return 0;\n}",
    answerTamil: "#include <iostream>\nusing namespace std;\nclass Student {\nprivate:\n    int roll_no;\n    char name[30];\n    float marks;\npublic:\n    void readData() {\n        cout << \"பதிவு எண்: \"; cin >> roll_no;\n        cout << \"பெயர்: \"; cin >> name;\n        cout << \"மதிப்பெண்: \"; cin >> marks;\n    }\n    void displayData() {\n        cout << \"\\nபதிவு எண் : \" << roll_no;\n        cout << \"\\nபெயர்    : \" << name;\n        cout << \"\\nமதிப்பெண் : \" << marks << endl;\n    }\n};\nint main() {\n    Student s1;\n    s1.readData();\n    s1.displayData();\n    return 0;\n}", isBookBack: true, isCompulsoryEligible: true
  },
  {
    id: "cs11-ch14-5m-2", chapterNo: 14, chapterName: "Classes and Objects", chapterNameTamil: "இனக்குழுக்கள் மற்றும் பொருள்கள்", marks: 5, type: "essay",
    questionText: "Explain how Member Functions can be defined (1) Inside Class definition and (2) Outside Class definition with examples.", questionTextTamil: "இனக்குழுவின் உறுப்புச் செயற்கூறுகளை (1) இனக்குழுவிற்கு உள்ளேயும் மற்றும் (2) இனக்குழுவிற்கு வெளியேயும் வரையறுக்கும் முறைகளை எடுத்துக்காட்டுகளுடன் விரிவாக விளக்குக.",
    answer: "1. Inside Class Definition:\n- Defined directly within class declaration.\n- Treated automatically as inline function by compiler.\nExample:\nclass Box {\npublic:\n    int length;\n    int getVolume(int h, int w) { return length * h * w; }\n};\n\n2. Outside Class Definition:\n- Declared (prototyped) inside class and defined outside using Scope Resolution Operator (::).\nExample:\nclass Box {\npublic:\n    int length;\n    int getVolume(int h, int w);\n};\nint Box::getVolume(int h, int w) {\n    return length * h * w;\n}",
    answerTamil: "1. இனக்குழுவிற்குள் வரையறுத்தல்:\n- இனக்குழு உடற்பகுதிக்குள்ளேயே முழுமையாக எழுதப்படும்.\n- தானாகவே உள்வரி (inline) செயற்கூறாகக் கருதப்படும்.\n\n2. இனக்குழுவிற்கு வெளியே வரையறுத்தல்:\n- முன்வடிவு மட்டும் உள்ளே அறிவிக்கப்பட்டு, வெளியே வரையெல்லை தீர்வு செயற்குறி (::) கொண்டு வரையறுக்கப்படும்.\n- தொடரியல்: வகை இனக்குழு_பெயர் :: செயற்கூறு() { ... }", isBookBack: true
  },
  {
    id: "cs11-ch14-5m-3", chapterNo: 14, chapterName: "Classes and Objects", chapterNameTamil: "இனக்குழுக்கள் மற்றும் பொருள்கள்", marks: 5, type: "essay",
    questionText: "Explain Passing Objects as Function Arguments: Passing by Value and Passing by Reference with a program to add two Complex numbers / Time objects.", questionTextTamil: "பொருள்களை செயற்கூறுகளுக்கு அளபுருக்களாக அனுப்புதல் - மதிப்பு மூலம் மற்றும் குறிப்பு மூலம் அனுப்புதலை இரு சிக்கலெண்கள் / நேரத்தைக் கூட்டும் நிரலுடன் விளக்குக.",
    answer: "Objects can be passed to functions in two ways:\n1. Pass by Value: Copy of entire object passed.\n2. Pass by Reference: Address of object passed.\n\nWorking Program to add two Time objects:\n#include <iostream>\nusing namespace std;\nclass Time {\npublic:\n    int hours, minutes;\n    void set(int h, int m) { hours = h; minutes = m; }\n    void add(Time t1, Time t2) { // Passing objects by value\n        minutes = t1.minutes + t2.minutes;\n        hours = t1.hours + t2.hours + (minutes / 60);\n        minutes %= 60;\n    }\n    void display() { cout << hours << \" hrs : \" << minutes << \" mins\\n\"; }\n};\nint main() {\n    Time t1, t2, t3;\n    t1.set(2, 45); t2.set(1, 30);\n    t3.add(t1, t2);\n    cout << \"Total Time: \"; t3.display();\n    return 0;\n}",
    answerTamil: "பொருள்களை செயற்கூறுகளுக்கு அளபுருக்களாக அனுப்பலாம்:\n1. மதிப்பு மூலம் அனுப்புதல்\n2. குறிப்பு மூலம் அனுப்புதல்\n\nஇரு நேரத்தைக் கூட்டும் மாதிரி நிரல்:\nclass Time {\npublic:\n    int h, m;\n    void set(int hr, int min) { h = hr; m = min; }\n    void add(Time t1, Time t2) {\n        m = t1.m + t2.m;\n        h = t1.h + t2.h + (m / 60);\n        m %= 60;\n    }\n    void display() { cout << h << \" மணி : \" << m << \" நிமிடம்\"; }\n};", isBookBack: true
  },
  {
    id: "cs11-ch14-5m-4", chapterNo: 14, chapterName: "Classes and Objects", chapterNameTamil: "இனக்குழுக்கள் மற்றும் பொருள்கள்", marks: 5, type: "essay",
    questionText: "Explain Static Data Members and Static Member Functions in C++ with an example.", questionTextTamil: "C++ மொழியில் நிலையான தரவு உறுப்புகள் (Static Data Members) மற்றும் நிலையான உறுப்புச் செயற்கூறுகள் (Static Member Functions) பற்றி மாதிரி நிரலுடன் விளக்குக.",
    answer: "1. Static Data Member:\n- Only one copy exists and is shared by all objects of the class.\n- Initialized to 0 by default outside class.\n- Lifetime is the entire program duration.\n\n2. Static Member Function:\n- Can access only static data members and call only static functions.\n- Can be called using class name and scope resolution operator (::) without creating an object.\n\nExample Program:\n#include <iostream>\nusing namespace std;\nclass Item {\n    static int count; // Static data member\npublic:\n    Item() { count++; }\n    static void showCount() { // Static member function\n        cout << \"Total Objects: \" << count << endl;\n    }\n};\nint Item::count = 0; // Definition outside class\nint main() {\n    Item a, b, c;\n    Item::showCount(); // 3\n    return 0;\n}",
    answerTamil: "1. நிலையான தரவு உறுப்பு (Static Data Member):\n- ஒரே ஒரு நகல் மட்டுமே உருவாக்கப்பட்டு அனைத்துப் பொருள்களாலும் பகிர்ந்து கொள்ளப்படுகிறது.\n- இனக்குழுவிற்கு வெளியே தொடக்க மதிப்பு அளிக்கப்பட வேண்டும்.\n\n2. நிலையான உறுப்புச் செயற்கூறு (Static Member Function):\n- பொருள் உருவாக்காமலேயே இனக்குழுப் பெயர் மற்றும் :: மூலம் நேரடியாக அழைக்கலாம்.\n- நிலையான மாறிகளை மட்டுமே அணுக முடியும்.", isBookBack: true
  }
];

fs.writeFileSync('./scripts/ch13.json', JSON.stringify(ch13, null, 2));
fs.writeFileSync('./scripts/ch14.json', JSON.stringify(ch14, null, 2));
console.log('Ch13, Ch14 built successfully!');
