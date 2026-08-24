import fs from 'fs';
import { Question } from '../src/types';

// ==========================================
// CHAPTER 4: PHP: Hypertext Preprocessor (22 questions: 10 1M, 5 2M, 5 3M, 2 5M)
// ==========================================
const ch4_1m: Question[] = [
  {
    id: "ca12-ch4-1m-1",
    chapterNo: 4,
    chapterName: "PHP: Hypertext Preprocessor",
    chapterNameTamil: "PHP: இணையதள பயன்பாட்டு நிரலாக்கம் ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "The expansion of PHP is _________",
    questionTextTamil: "PHP என்பதன் விரிவாக்கம் என்ன?",
    options: {
      A: "PHP: Hypertext Preprocessor",
      B: "Personal Hypertext Preprocessor",
      C: "Pretext Home page",
      D: "Preprocessor Home Page"
    },
    optionsTamil: {
      A: "PHP: Hypertext Preprocessor",
      B: "Personal Hypertext Preprocessor",
      C: "Pretext Home page",
      D: "Preprocessor Home Page"
    },
    correctOption: "A",
    answer: "A) PHP: Hypertext Preprocessor",
    answerTamil: "A) PHP: Hypertext Preprocessor",
    isBookBack: true
  },
  {
    id: "ca12-ch4-1m-2",
    chapterNo: 4,
    chapterName: "PHP: Hypertext Preprocessor",
    chapterNameTamil: "PHP: இணையதள பயன்பாட்டு நிரலாக்கம் ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "What is the extension of PHP file?",
    questionTextTamil: "PHP கோப்பின் நீட்டிப்பு (File extension) என்ன?",
    options: {
      A: ".html",
      B: ".xml",
      C: ".php",
      D: ".ph"
    },
    optionsTamil: {
      A: ".html",
      B: ".xml",
      C: ".php",
      D: ".ph"
    },
    correctOption: "C",
    answer: "C) .php",
    answerTamil: "C) .php",
    isBookBack: true
  },
  {
    id: "ca12-ch4-1m-3",
    chapterNo: 4,
    chapterName: "PHP: Hypertext Preprocessor",
    chapterNameTamil: "PHP: இணையதள பயன்பாட்டு நிரலாக்கம் ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "The PHP script should start with _________",
    questionTextTamil: "PHP குறிமுறை எந்தக் குறியீட்டுடன் தொடங்க வேண்டும்?",
    options: {
      A: "<?php",
      B: "<php",
      C: "<php?",
      D: "<:?"
    },
    optionsTamil: {
      A: "<?php",
      B: "<php",
      C: "<php?",
      D: "<:?"
    },
    correctOption: "A",
    answer: "A) <?php",
    answerTamil: "A) <?php",
    isBookBack: true
  },
  {
    id: "ca12-ch4-1m-4",
    chapterNo: 4,
    chapterName: "PHP: Hypertext Preprocessor",
    chapterNameTamil: "PHP: இணையதள பயன்பாட்டு நிரலாக்கம் ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "How many data types does PHP support?",
    questionTextTamil: "PHP எத்தனை அடிப்படை தரவினங்களை ஆதரிக்கிறது?",
    options: {
      A: "18",
      B: "28",
      C: "8",
      D: "38"
    },
    optionsTamil: {
      A: "18",
      B: "28",
      C: "8",
      D: "38"
    },
    correctOption: "C",
    answer: "C) 8",
    answerTamil: "C) 8",
    isBookBack: true
  },
  {
    id: "ca12-ch4-1m-5",
    chapterNo: 4,
    chapterName: "PHP: Hypertext Preprocessor",
    chapterNameTamil: "PHP: இணையதள பயன்பாட்டு நிரலாக்கம் ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "Every variable name in PHP must begin with a _________ symbol.",
    questionTextTamil: "PHP-ல் உள்ள ஒவ்வொரு மாறி பெயரும் எந்த குறியீட்டுடன் தொடங்க வேண்டும்?",
    options: {
      A: "#",
      B: "//",
      C: "$",
      D: "<"
    },
    optionsTamil: {
      A: "#",
      B: "//",
      C: "$ (டாலர்)",
      D: "<"
    },
    correctOption: "C",
    answer: "C) $",
    answerTamil: "C) $ (டாலர்)",
    isBookBack: true
  },
  {
    id: "ca12-ch4-1m-6",
    chapterNo: 4,
    chapterName: "PHP: Hypertext Preprocessor",
    chapterNameTamil: "PHP: இணையதள பயன்பாட்டு நிரலாக்கம் ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "_________ in PHP are case – sensitive.",
    questionTextTamil: "PHP-ல் பின்வருவனவற்றில் எது எழுத்து வடிவ உணர்வுடையது (case-sensitive)?",
    options: {
      A: "variable names",
      B: "keywords",
      C: "Variable names and keywords",
      D: "None of the above"
    },
    optionsTamil: {
      A: "மாறி பெயர்கள் (Variable names)",
      B: "சிறப்புச் சொற்கள் (Keywords)",
      C: "மாறி பெயர்கள் மற்றும் சிறப்புச் சொற்கள்",
      D: "எதுவுமில்லை"
    },
    correctOption: "A",
    answer: "A) variable names",
    answerTamil: "A) மாறி பெயர்கள் (Variable names)",
    isBookBack: true
  },
  {
    id: "ca12-ch4-1m-7",
    chapterNo: 4,
    chapterName: "PHP: Hypertext Preprocessor",
    chapterNameTamil: "PHP: இணையதள பயன்பாட்டு நிரலாக்கம் ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "The assignment operator is ___________",
    questionTextTamil: "மதிப்பிருத்தல் செயற்குறி எது?",
    options: {
      A: "=",
      B: "==",
      C: "===",
      D: "!="
    },
    optionsTamil: {
      A: "=",
      B: "==",
      C: "===",
      D: "!="
    },
    correctOption: "A",
    answer: "A) =",
    answerTamil: "A) =",
    isBookBack: true
  },
  {
    id: "ca12-ch4-1m-8",
    chapterNo: 4,
    chapterName: "PHP: Hypertext Preprocessor",
    chapterNameTamil: "PHP: இணையதள பயன்பாட்டு நிரலாக்கம் ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "_________ operators perform an action to compare two values.",
    questionTextTamil: "இரு மதிப்புகளை ஒப்பிடப் பயன்படும் செயற்குறிகள் எவை?",
    options: {
      A: "arithmetic",
      B: "comparison",
      C: "increment",
      D: "logical"
    },
    optionsTamil: {
      A: "கணித செயற்குறிகள்",
      B: "ஒப்பீட்டு செயற்குறிகள் (comparison)",
      C: "மிகுப்பு செயற்குறிகள்",
      D: "தருக்க செயற்குறிகள்"
    },
    correctOption: "B",
    answer: "B) comparison",
    answerTamil: "B) ஒப்பீட்டு செயற்குறிகள் (comparison)",
    isBookBack: true
  },
  {
    id: "ca12-ch4-1m-9",
    chapterNo: 4,
    chapterName: "PHP: Hypertext Preprocessor",
    chapterNameTamil: "PHP: இணையதள பயன்பாட்டு நிரலாக்கம் ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "Which operator is called \"identical\"?",
    questionTextTamil: "பின்வருவனவற்றில் எது 'ஒத்த' (identical) செயற்குறி என அழைக்கப்படுகிறது?",
    options: {
      A: "=",
      B: "==",
      C: "===",
      D: "<>"
    },
    optionsTamil: {
      A: "=",
      B: "==",
      C: "===",
      D: "<>"
    },
    correctOption: "C",
    answer: "C) ===",
    answerTamil: "C) ===",
    isBookBack: true
  },
  {
    id: "ca12-ch4-1m-10",
    chapterNo: 4,
    chapterName: "PHP: Hypertext Preprocessor",
    chapterNameTamil: "PHP: இணையதள பயன்பாட்டு நிரலாக்கம் ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "_________ is a data type which contains decimal numbers.",
    questionTextTamil: "தசம எண்களைக் கொண்டிருக்கும் தரவினம் எது?",
    options: {
      A: "Integer",
      B: "Float",
      C: "Boolean",
      D: "NULL"
    },
    optionsTamil: {
      A: "முழு எண் (Integer)",
      B: "மிதப்புப் புள்ளி எண் (Float)",
      C: "பூலியன்",
      D: "NULL"
    },
    correctOption: "B",
    answer: "B) Float",
    answerTamil: "B) மிதப்புப் புள்ளி எண் (Float)",
    isBookBack: true
  }
];

const ch4_2m: Question[] = [
  {
    id: "ca12-ch4-2m-1",
    chapterNo: 4,
    chapterName: "PHP: Hypertext Preprocessor",
    chapterNameTamil: "PHP: இணையதள பயன்பாட்டு நிரலாக்கம் ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "What is PHP?",
    questionTextTamil: "PHP என்றால் என்ன?",
    answer: "PHP (Hypertext Preprocessor) is an open-source, widely-used server-side scripting language designed primarily for creating dynamic and interactive web pages.",
    answerTamil: "PHP (Hypertext Preprocessor) என்பது ஒரு திறந்த மூல சேவையக பக்க ஸ்கிரிப்டிங் மொழியாகும் (Server-side Scripting Language). இது ஊடாடும் வலைப்பக்கங்களை உருவாக்கப் பயன்படுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch4-2m-2",
    chapterNo: 4,
    chapterName: "PHP: Hypertext Preprocessor",
    chapterNameTamil: "PHP: இணையதள பயன்பாட்டு நிரலாக்கம் ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "What is a dynamic web page?",
    questionTextTamil: "இயக்கநிலை வலைப்பக்கம் (Dynamic web page) என்றால் என்ன?",
    answer: "A dynamic web page is a webpage whose contents change dynamically in real-time based on user interaction, time, or database records (e.g., shopping cart, social media feed).",
    answerTamil: "இயக்கநிலை வலைப்பக்கம் என்பது பயனர் உள்ளீடு, நேரம் அல்லது தரவுத்தள பதிவுகளுக்கு ஏற்ப அதன் உள்ளடக்கங்களை உடனுக்குடன் மாற்றி அமைத்துக் கொள்ளும் வலைப்பக்கமாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch4-2m-3",
    chapterNo: 4,
    chapterName: "PHP: Hypertext Preprocessor",
    chapterNameTamil: "PHP: இணையதள பயன்பாட்டு நிரலாக்கம் ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "What are the different types of comments in PHP? Give an example.",
    questionTextTamil: "PHP-ல் உள்ள பல்வேறு குறிப்புரைகள் யாவை? எடுத்துக்காட்டு தருக.",
    answer: "PHP supports two types of comments:\n1. Single-line comment: Using // or # (e.g., // This is single line comment)\n2. Multi-line comment: Using /* ... */ (e.g., /* Multi-line comment block */).",
    answerTamil: "PHP இரண்டு வகை குறிப்புரைகளை ஆதரிக்கிறது:\n1. ஒற்றை வரி குறிப்புரை: // அல்லது # (எ.கா: // இது ஒற்றை வரி)\n2. பல வரி குறிப்புரை: /* ... */ (எ.கா: /* பல வரிகள் கொண்ட குறிப்புரை */).",
    isBookBack: true
  },
  {
    id: "ca12-ch4-2m-4",
    chapterNo: 4,
    chapterName: "PHP: Hypertext Preprocessor",
    chapterNameTamil: "PHP: இணையதள பயன்பாட்டு நிரலாக்கம் ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "List out any four operators in PHP.",
    questionTextTamil: "PHP-ல் உள்ள ஏதேனும் நான்கு செயற்குறிகளைப் பட்டியலிடுக.",
    answer: "Four common operators in PHP:\n1. Arithmetic Operators (+, -, *, /)\n2. Assignment Operators (=, +=, -=)\n3. Comparison Operators (==, ===, !=, >)\n4. Logical Operators (&&, ||, !).",
    answerTamil: "PHP-ன் நான்கு முக்கிய செயற்குறிகள்:\n1. கணித செயற்குறிகள் (+, -, *, /)\n2. மதிப்பிருத்தல் செயற்குறிகள் (=, +=, -=)\n3. ஒப்பீட்டு செயற்குறிகள் (==, ===, !=)\n4. தருக்க செயற்குறிகள் (&&, ||, !).",
    isBookBack: true
  },
  {
    id: "ca12-ch4-2m-5",
    chapterNo: 4,
    chapterName: "PHP: Hypertext Preprocessor",
    chapterNameTamil: "PHP: இணையதள பயன்பாட்டு நிரலாக்கம் ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "What is 'Echo' statement used for? Give an example.",
    questionTextTamil: "'Echo' கூற்று எதற்குப் பயன்படுகிறது? எடுத்துக்காட்டு தருக.",
    answer: "The 'echo' statement is used to output or print text, variables, or HTML markup directly to the web browser.\nExample: echo \"Hello World!\";",
    answerTamil: "'echo' கூற்றானது உரை, மாறிகள் அல்லது HTML கூறுகளை இணைய உலாவியில் அச்சிட/வெளியிடப் பயன்படுகிறது.\nஎடுத்துக்காட்டு: echo \"வணக்கம் உலகம்!\";",
    isBookBack: true
  }
];

const ch4_3m: Question[] = [
  {
    id: "ca12-ch4-3m-1",
    chapterNo: 4,
    chapterName: "PHP: Hypertext Preprocessor",
    chapterNameTamil: "PHP: இணையதள பயன்பாட்டு நிரலாக்கம் ஓர் அறிமுகம்",
    marks: 3,
    type: "brief",
    questionText: "What are the features of PHP?",
    questionTextTamil: "PHP-ன் சிறப்பம்சங்கள் யாவை?",
    answer: "Key features of PHP:\n1. Open Source and completely free.\n2. Cross-platform support (Windows, Linux, macOS).\n3. Easy database connectivity (MySQL, Oracle, PostgreSQL).\n4. Fast execution speed and embedded easily inside HTML.",
    answerTamil: "PHP-ன் சிறப்பம்சங்கள்:\n1. திறந்த மூலம் மற்றும் முற்றிலும் இலவசம்.\n2. பல்வேறு இயக்க அமைப்புகளில் இயங்கும் தன்மை (Cross-platform).\n3. பல தரவுத்தளங்களுடன் (MySQL போன்றவை) எளிதாக இணையும் வசதி.\n4. HTML குறிமுறைகளுடன் எளிதாக உட்பொதிந்து வேகமாகச் செயல்படும் திறன்.",
    isBookBack: true
  },
  {
    id: "ca12-ch4-3m-2",
    chapterNo: 4,
    chapterName: "PHP: Hypertext Preprocessor",
    chapterNameTamil: "PHP: இணையதள பயன்பாட்டு நிரலாக்கம் ஓர் அறிமுகம்",
    marks: 3,
    type: "brief",
    questionText: "Explain the types of PHP Tags.",
    questionTextTamil: "PHP ஒட்டுகளின் (Tags) வகைகளை விளக்குக.",
    answer: "Types of PHP Tags:\n1. Canonical PHP tags (Default & Recommended): <?php ... ?>\n2. Short open tags: <? ... ?> (Requires short_open_tag = on in php.ini)\n3. HTML script tags: <script language=\"php\"> ... </script>\n4. ASP style tags: <% ... %>.",
    answerTamil: "PHP ஒட்டுகளின் வகைகள்:\n1. இயல்புநிலை PHP ஒட்டுகள்: <?php ... ?>\n2. குறுக்குவழி திறப்பு ஒட்டுகள்: <? ... ?>\n3. HTML ஸ்கிரிப்ட் ஒட்டுகள்: <script language=\"php\"> ... </script>\n4. ASP பாணி ஒட்டுகள்: <% ... %>.",
    isBookBack: true
  },
  {
    id: "ca12-ch4-3m-3",
    chapterNo: 4,
    chapterName: "PHP: Hypertext Preprocessor",
    chapterNameTamil: "PHP: இணையதள பயன்பாட்டு நிரலாக்கம் ஓர் அறிமுகம்",
    marks: 3,
    type: "brief",
    questionText: "Write about the rules for naming a variable in PHP?",
    questionTextTamil: "PHP-ல் மாறி பெயரிடுவதற்கான விதிகளை எழுதுக.",
    answer: "Rules for variable naming in PHP:\n1. Must begin with a dollar sign ($).\n2. First character after $ must be a letter or underscore (_), not a number.\n3. Can contain alphanumeric characters and underscores (A-z, 0-9, _).\n4. Variable names are case-sensitive ($var and $VAR are different).",
    answerTamil: "PHP மாறி பெயரிடல் விதிகள்:\n1. மாறி எப்போதும் $ குறியீட்டுடன் தொடங்க வேண்டும்.\n2. $ குறியீட்டிற்கு அடுத்து எழுத்து அல்லது அடிக்கோடு (_) மட்டுமே வர வேண்டும்; எண் வரக்கூடாது.\n3. மாறிகளில் எழுத்துக்கள், எண்கள் மற்றும் அடிக்கோடுகள் மட்டுமே இருக்கலாம்.\n4. மாறி பெயர்கள் எழுத்து வடிவ உணர்வுடையவை ($a மற்றும் $A வெவ்வேறானவை).",
    isBookBack: true
  },
  {
    id: "ca12-ch4-3m-4",
    chapterNo: 4,
    chapterName: "PHP: Hypertext Preprocessor",
    chapterNameTamil: "PHP: இணையதள பயன்பாட்டு நிரலாக்கம் ஓர் அறிமுகம்",
    marks: 3,
    type: "brief",
    questionText: "List out the different types of data types in PHP.",
    questionTextTamil: "PHP-ல் உள்ள பல்வேறு தரவினங்களைப் பட்டியலிடுக.",
    answer: "PHP supports 8 primitive data types categorized into:\n1. Scalar Types: Integer, Float, String, Boolean\n2. Compound Types: Array, Object\n3. Special Types: NULL, Resource.",
    answerTamil: "PHP-ன் 8 தரவினங்கள்:\n1. அளவிடக்கூடிய தரவினங்கள்: Integer, Float, String, Boolean\n2. கூட்டு தரவினங்கள்: Array, Object\n3. சிறப்பு தரவினங்கள்: NULL, Resource.",
    isBookBack: true
  },
  {
    id: "ca12-ch4-3m-5",
    chapterNo: 4,
    chapterName: "PHP: Hypertext Preprocessor",
    chapterNameTamil: "PHP: இணையதள பயன்பாட்டு நிரலாக்கம் ஓர் அறிமுகம்",
    marks: 3,
    type: "brief",
    questionText: "Write about the syntax of PHP.",
    questionTextTamil: "PHP-ன் பொதுவான தொடரியல் பற்றி எழுதுக.",
    answer: "PHP syntax structure:\n- Starts with <?php and closes with ?>.\n- Every PHP statement must terminate with a semicolon (;).\n- Example:\n<?php\n  $txt = \"Welcome to PHP\";\n  echo $txt;\n?>",
    answerTamil: "PHP தொடரியல் வடிவம்:\n- <?php என்ற குறியீட்டில் தொடங்கி ?> குறியீட்டில் முடிவடையும்.\n- ஒவ்வொரு PHP கூற்றும் அரைப்புள்ளியுடன் (;) முடிய வேண்டும்.\n- எடுத்துக்காட்டு:\n<?php\n  $txt = \"PHP-க்கு நல்வரவு\";\n  echo $txt;\n?>",
    isBookBack: true
  }
];

const ch4_5m: Question[] = [
  {
    id: "ca12-ch4-5m-1",
    chapterNo: 4,
    chapterName: "PHP: Hypertext Preprocessor",
    chapterNameTamil: "PHP: இணையதள பயன்பாட்டு நிரலாக்கம் ஓர் அறிமுகம்",
    marks: 5,
    type: "essay",
    questionText: "What are the datatypes in PHP? Explain.",
    questionTextTamil: "PHP-ல் உள்ள தரவினங்கள் யாவை? அவற்றை விளக்குக.",
    answer: "PHP supports 8 data types grouped into 3 categories:\n\n1. Scalar Data Types:\n- Integer: Whole non-decimal numbers (e.g., $x = 100;)\n- Float (Double): Decimal floating-point numbers (e.g., $pi = 3.14;)\n- String: Sequence of characters enclosed in quotes (e.g., $name = \"Tamil Nadu\";)\n- Boolean: Represents logical state: TRUE or FALSE.\n\n2. Compound Data Types:\n- Array: Stores multiple values in a single variable.\n- Object: An instance of a programmer-defined class storing data and methods.\n\n3. Special Data Types:\n- NULL: A special variable having only one value: NULL (represents empty variable).\n- Resource: Special variable holding references to external resources (e.g., database connection, open file handle).",
    answerTamil: "PHP தரவினங்களின் விரிவான விளக்கம்:\n\n1. அளவிடக்கூடிய தரவினங்கள்:\n- Integer: முழு எண்கள் (எ.கா: $x = 100;)\n- Float: தசமப் புள்ளி எண்கள் (எ.கா: $pi = 3.14;)\n- String: மேற்கோள் குறிகளுக்குள் உள்ள எழுத்துச்சரம் (எ.கா: \"தமிழ்நாடு\")\n- Boolean: TRUE அல்லது FALSE என்ற இரு மதிப்புகள்.\n\n2. கூட்டுத் தரவினங்கள்:\n- Array: ஒரே மாறியில் பல மதிப்புகளை சேமிக்கப் பயன்படுகிறது.\n- Object: தரவு மற்றும் செயற்கூறுகளை உள்ளடக்கிய கிளாஸின் மாதிரி.\n\n3. சிறப்புத் தரவினங்கள்:\n- NULL: எந்த மதிப்பும் இல்லாத வெற்று நிலையைக் குறிக்கும்.\n- Resource: வெளிப்புற வளங்களைக் (தரவுத்தள இணைப்பு, கோப்பு) குறிக்கும் மாறி.",
    isBookBack: true
  },
  {
    id: "ca12-ch4-5m-2",
    chapterNo: 4,
    chapterName: "PHP: Hypertext Preprocessor",
    chapterNameTamil: "PHP: இணையதள பயன்பாட்டு நிரலாக்கம் ஓர் அறிமுகம்",
    marks: 5,
    type: "essay",
    questionText: "Explain operators in PHP with examples.",
    questionTextTamil: "PHP-ல் உள்ள செயற்குறிகளை எடுத்துக்காட்டுகளுடன் விளக்குக.",
    answer: "Operators perform operations on variables and values in PHP:\n\n1. Arithmetic Operators:\n- +, -, *, /, % (e.g., $c = $a + $b;)\n\n2. Assignment & Combined Assignment Operators:\n- =, +=, -=, *=, /= (e.g., $x += 5; means $x = $x + 5;)\n\n3. Comparison Operators:\n- == (Equal), === (Identical), != (Not Equal), <, >, <=, >=\n\n4. Increment / Decrement Operators:\n- ++$x (Pre-increment), $x++ (Post-increment), --$x, $x--\n\n5. Logical Operators:\n- && (AND), || (OR), ! (NOT), and, or, xor\n\n6. String Operators:\n- . (Concatenation, e.g., $txt1 . $txt2)\n- .= (Concatenation assignment).",
    answerTamil: "PHP செயற்குறிகள் மற்றும் எடுத்துக்காட்டுகள்:\n\n1. கணிதச் செயற்குறிகள்: +, -, *, /, % (கூட்டல், கழித்தல், பெருக்கல், வகுத்தல், மீதி).\n2. மதிப்பிருத்தல் செயற்குறிகள்: =, +=, -=, *=, /= (எ.கா: $x += 10;)\n3. ஒப்பீட்டு செயற்குறிகள்: == (சமம்), === (ஒத்த), != (சமமின்மை), >, <.\n4. மிகுப்பு / குறைப்பு செயற்குறிகள்: ++$x (முன்-மிகுப்பு), $x++ (பின்-மிகுப்பு), --$x.\n5. தருக்கச் செயற்குறிகள்: && (AND), || (OR), ! (NOT).\n6. சரச் செயற்குறிகள்: . (சரங்களை இணைக்க - Concatenation), .= (இணைத்து மதிப்பிருத்த).",
    isBookBack: true
  }
];

// ==========================================
// CHAPTER 5: Functions and Arrays in PHP (22 questions: 11 1M, 5 2M, 4 3M, 2 5M)
// ==========================================
const ch5_1m: Question[] = [
  {
    id: "ca12-ch5-1m-1",
    chapterNo: 5,
    chapterName: "Functions and Arrays in PHP",
    chapterNameTamil: "PHP செயற்கூறுகள் மற்றும் அணிகள்",
    marks: 1,
    type: "mcq",
    questionText: "A_________is a block of code that performs a specific task.",
    questionTextTamil: "ஒரு குறிப்பிட்ட பணியைச் செய்யக்கூடிய குறிமுறைத் தொகுதி எது?",
    options: {
      A: "parameter",
      B: "function",
      C: "class",
      D: "label"
    },
    optionsTamil: {
      A: "அளவுரு (parameter)",
      B: "செயற்கூறு (function)",
      C: "இனம் (class)",
      D: "பெயர்ச்சீட்டு (label)"
    },
    correctOption: "B",
    answer: "B) function",
    answerTamil: "B) செயற்கூறு (function)",
    isBookBack: true
  },
  {
    id: "ca12-ch5-1m-2",
    chapterNo: 5,
    chapterName: "Functions and Arrays in PHP",
    chapterNameTamil: "PHP செயற்கூறுகள் மற்றும் அணிகள்",
    marks: 1,
    type: "mcq",
    questionText: "Pre-defined functions are also called _________.",
    questionTextTamil: "முன்னரே வரையறுக்கப்பட்ட செயற்கூறுகள் எவ்வாறு அழைக்கப்படுகின்றன?",
    options: {
      A: "user-defined functions",
      B: "recursive functions",
      C: "built-in functions",
      D: "lambda functions"
    },
    optionsTamil: {
      A: "பயனர் வரையறுத்த செயற்கூறுகள்",
      B: "தற்சுழற்சி செயற்கூறுகள்",
      C: "உள்ளமைந்த செயற்கூறுகள் (built-in functions)",
      D: "லாம்ப்டா செயற்கூறுகள்"
    },
    correctOption: "C",
    answer: "C) built-in functions",
    answerTamil: "C) உள்ளமைந்த செயற்கூறுகள் (built-in functions)",
    isBookBack: true
  },
  {
    id: "ca12-ch5-1m-3",
    chapterNo: 5,
    chapterName: "Functions and Arrays in PHP",
    chapterNameTamil: "PHP செயற்கூறுகள் மற்றும் அணிகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which one of the following is the right way of defining a function in PHP?",
    questionTextTamil: "PHP-ல் செயற்கூறை வரையறுக்கும் சரியான முறை எது?",
    options: {
      A: "function functionname() { // code to be executed }",
      B: "function() {}",
      C: "def myFunction():",
      D: "None of the above"
    },
    optionsTamil: {
      A: "function functionname() { // code to be executed }",
      B: "function() {}",
      C: "def myFunction():",
      D: "மேற்கண்ட எதுவுமில்லை"
    },
    correctOption: "A",
    answer: "A) function functionname() { // code to be executed }",
    answerTamil: "A) function functionname() { // code to be executed }",
    isBookBack: true
  },
  {
    id: "ca12-ch5-1m-4",
    chapterNo: 5,
    chapterName: "Functions and Arrays in PHP",
    chapterNameTamil: "PHP செயற்கூறுகள் மற்றும் அணிகள்",
    marks: 1,
    type: "mcq",
    questionText: "A user-defined function in PHP starts with the keyword _________.",
    questionTextTamil: "PHP-ல் பயனர் வரையறுக்கும் செயற்கூறு எந்த சிறப்புச் சொல்லுடன் தொடங்குகிறது?",
    options: {
      A: "function",
      B: "def",
      C: "defined",
      D: "funct"
    },
    optionsTamil: {
      A: "function",
      B: "def",
      C: "defined",
      D: "funct"
    },
    correctOption: "A",
    answer: "A) function",
    answerTamil: "A) function",
    isBookBack: true
  },
  {
    id: "ca12-ch5-1m-5",
    chapterNo: 5,
    chapterName: "Functions and Arrays in PHP",
    chapterNameTamil: "PHP செயற்கூறுகள் மற்றும் அணிகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which of the following is a correct way to call a function in PHP?",
    questionTextTamil: "PHP-ல் ஒரு செயற்கூறை அழைக்கும் சரியான வழி எது?",
    options: {
      A: "functionName();",
      B: "call functionName;",
      C: "execute functionName;",
      D: "run functionName();"
    },
    optionsTamil: {
      A: "functionName();",
      B: "call functionName;",
      C: "execute functionName;",
      D: "run functionName();"
    },
    correctOption: "A",
    answer: "A) functionName();",
    answerTamil: "A) functionName();",
    isBookBack: true
  },
  {
    id: "ca12-ch5-1m-6",
    chapterNo: 5,
    chapterName: "Functions and Arrays in PHP",
    chapterNameTamil: "PHP செயற்கூறுகள் மற்றும் அணிகள்",
    marks: 1,
    type: "mcq",
    questionText: "What is an array in PHP?",
    questionTextTamil: "PHP-ல் அணி (Array) என்றால் என்ன?",
    options: {
      A: "An array is a special data type.",
      B: "It can hold many values under a single variable name.",
      C: "An array element can be any type of data.",
      D: "All of the above"
    },
    optionsTamil: {
      A: "அணி என்பது ஒரு சிறப்புத் தரவினம்",
      B: "ஒரே மாறி பெயரின் கீழ் பல மதிப்புகளைக் கொண்டிருக்கும்",
      C: "அணியின் உறுப்பு எந்த தரவினமாகவும் இருக்கலாம்",
      D: "இவை அனைத்தும் (All of the above)"
    },
    correctOption: "D",
    answer: "D) All of the above",
    answerTamil: "D) இவை அனைத்தும் (All of the above)",
    isBookBack: true
  },
  {
    id: "ca12-ch5-1m-7",
    chapterNo: 5,
    chapterName: "Functions and Arrays in PHP",
    chapterNameTamil: "PHP செயற்கூறுகள் மற்றும் அணிகள்",
    marks: 1,
    type: "mcq",
    questionText: "How many types of arrays are there in PHP?",
    questionTextTamil: "PHP-ல் எத்தனை வகையான அணிகள் உள்ளன?",
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
    correctOption: "B",
    answer: "B) 3",
    answerTamil: "B) 3",
    isBookBack: true
  },
  {
    id: "ca12-ch5-1m-8",
    chapterNo: 5,
    chapterName: "Functions and Arrays in PHP",
    chapterNameTamil: "PHP செயற்கூறுகள் மற்றும் அணிகள்",
    marks: 1,
    type: "mcq",
    questionText: "What is the index of the first element in an indexed array in PHP?",
    questionTextTamil: "சுட்டு எண் அணியில் (Indexed array) முதல் உறுப்பின் சுட்டெண் என்ன?",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "3"
    },
    optionsTamil: {
      A: "0",
      B: "1",
      C: "2",
      D: "3"
    },
    correctOption: "A",
    answer: "A) 0",
    answerTamil: "A) 0",
    isBookBack: true
  },
  {
    id: "ca12-ch5-1m-9",
    chapterNo: 5,
    chapterName: "Functions and Arrays in PHP",
    chapterNameTamil: "PHP செயற்கூறுகள் மற்றும் அணிகள்",
    marks: 1,
    type: "mcq",
    questionText: "What is the index of the third element in an indexed array in PHP with 5 elements?",
    questionTextTamil: "5 உறுப்புகளைக் கொண்ட சுட்டு எண் அணியில் மூன்றாவது உறுப்பின் சுட்டெண் என்ன?",
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
    correctOption: "A",
    answer: "A) 2",
    answerTamil: "A) 2",
    isBookBack: true
  },
  {
    id: "ca12-ch5-1m-10",
    chapterNo: 5,
    chapterName: "Functions and Arrays in PHP",
    chapterNameTamil: "PHP செயற்கூறுகள் மற்றும் அணிகள்",
    marks: 1,
    type: "mcq",
    questionText: "How do you create an indexed array in PHP?",
    questionTextTamil: "PHP-ல் ஒரு சுட்டு எண் அணியை எவ்வாறு உருவாக்கலாம்?",
    options: {
      A: "By enclosing a comma-separated list of values in square brackets",
      B: "By using the array() function",
      C: "By enclosing a comma-separated list of values in curly braces",
      D: "Both A and B"
    },
    optionsTamil: {
      A: "சதுர அடைப்புக்குறிக்குள் கமாவால் பிரிக்கப்பட்ட மதிப்புகளை அமைத்து",
      B: "array() செயற்கூறைப் பயன்படுத்தி",
      C: "நெளிவு அடைப்புக்குறிக்குள் அமைத்து",
      D: "A மற்றும் B இரண்டும் (Both A and B)"
    },
    correctOption: "D",
    answer: "D) Both A and B",
    answerTamil: "D) A மற்றும் B இரண்டும் (Both A and B)",
    isBookBack: true
  },
  {
    id: "ca12-ch5-1m-11",
    chapterNo: 5,
    chapterName: "Functions and Arrays in PHP",
    chapterNameTamil: "PHP செயற்கூறுகள் மற்றும் அணிகள்",
    marks: 1,
    type: "mcq",
    questionText: "How do you access the elements of an indexed array in PHP?",
    questionTextTamil: "PHP-ல் சுட்டு எண் அணியின் உறுப்புகளை எவ்வாறு அணுகுவாய்?",
    options: {
      A: "By using the array index in square brackets",
      B: "By using the array key in square brackets",
      C: "By using the array index in curly braces",
      D: "By using the array key in curly braces"
    },
    optionsTamil: {
      A: "சதுர அடைப்புக்குறிக்குள் சுட்டெண்ணைப் பயன்படுத்தி",
      B: "சதுர அடைப்புக்குறிக்குள் திறவுகோலைப் பயன்படுத்தி",
      C: "நெளிவு அடைப்புக்குறிக்குள் சுட்டெண்ணைப் பயன்படுத்தி",
      D: "நெளிவு அடைப்புக்குறிக்குள் திறவுகோலைப் பயன்படுத்தி"
    },
    correctOption: "A",
    answer: "A) By using the array index in square brackets",
    answerTamil: "A) சதுர அடைப்புக்குறிக்குள் சுட்டெண்ணைப் பயன்படுத்தி",
    isBookBack: true
  }
];

const ch5_2m: Question[] = [
  {
    id: "ca12-ch5-2m-1",
    chapterNo: 5,
    chapterName: "Functions and Arrays in PHP",
    chapterNameTamil: "PHP செயற்கூறுகள் மற்றும் அணிகள்",
    marks: 2,
    type: "short",
    questionText: "What is a function?",
    questionTextTamil: "செயற்கூறு என்றால் என்ன?",
    answer: "A function is a self-contained, reusable block of statements designed to perform a specific task when called in a program.",
    answerTamil: "செயற்கூறு என்பது நிரலில் அழைக்கப்படும் போது ஒரு குறிப்பிட்ட பணியைச் செய்ய வடிவமைக்கப்பட்ட மறுபயன்பாட்டுக்குரிய கூற்றுகளின் தொகுப்பாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch5-2m-2",
    chapterNo: 5,
    chapterName: "Functions and Arrays in PHP",
    chapterNameTamil: "PHP செயற்கூறுகள் மற்றும் அணிகள்",
    marks: 2,
    type: "short",
    questionText: "What are the different types of functions in PHP?",
    questionTextTamil: "PHP-ல் உள்ள பல்வேறு வகையான செயற்கூறுகள் யாவை?",
    answer: "PHP functions are categorized into:\n1. User-Defined Functions: Created by the programmer.\n2. Built-in (Pre-defined) Functions: Provided in PHP core (e.g., strlen(), count(), date()).\n3. Parameterized Functions: Accept input arguments.\n4. Recursive Functions: Call themselves.",
    answerTamil: "PHP செயற்கூறுகளின் வகைகள்:\n1. பயனர் வரையறுத்த செயற்கூறுகள் (User-defined functions)\n2. கணினி உள்ளமைந்த செயற்கூறுகள் (Built-in functions)\n3. அளபுருக்களைக் கொண்ட செயற்கூறுகள் (Parameterized functions)\n4. தற்சுழற்சி செயற்கூறுகள் (Recursive functions).",
    isBookBack: true
  },
  {
    id: "ca12-ch5-2m-3",
    chapterNo: 5,
    chapterName: "Functions and Arrays in PHP",
    chapterNameTamil: "PHP செயற்கூறுகள் மற்றும் அணிகள்",
    marks: 2,
    type: "short",
    questionText: "Write short notes on built-in functions in PHP?",
    questionTextTamil: "PHP-ன் உள்ளமைந்த செயற்கூறுகள் (Built-in functions) பற்றி சிறுகுறிப்பு வரைக.",
    answer: "PHP provides over 1000 built-in functions for string handling, math, arrays, database queries, date/time, and file operations ready for immediate use without requiring explicit definitions.",
    answerTamil: "PHP-ல் சரம் கையாளுதல், கணிதம், அணிகள், தரவுத்தள இணைப்பு மற்றும் கோப்பு செயல்பாடுகளுக்காக 1000-க்கும் மேற்பட்ட முன்னரே வரையறுக்கப்பட்ட உள்ளமைந்த செயற்கூறுகள் உள்ளன.",
    isBookBack: true
  },
  {
    id: "ca12-ch5-2m-4",
    chapterNo: 5,
    chapterName: "Functions and Arrays in PHP",
    chapterNameTamil: "PHP செயற்கூறுகள் மற்றும் அணிகள்",
    marks: 2,
    type: "short",
    questionText: "What is an array in PHP and what are its main types?",
    questionTextTamil: "PHP-ல் அணி என்றால் என்ன? அதன் முக்கிய வகைகள் யாவை?",
    answer: "An array is a composite data structure that can store multiple values under a single variable name.\nTypes:\n1. Indexed Arrays\n2. Associative Arrays\n3. Multidimensional Arrays.",
    answerTamil: "அணி என்பது ஒரே மாறியில் பல மதிப்புகளைச் சேமித்து வைக்கும் ஒரு கூட்டுத் தரவு அமைப்பாகும்.\nவகைகள்:\n1. சுட்டு எண் அணிகள் (Indexed Arrays)\n2. தொடர்பு அணிகள் (Associative Arrays)\n3. பல பரிமாண அணிகள் (Multidimensional Arrays).",
    isBookBack: true
  },
  {
    id: "ca12-ch5-2m-5",
    chapterNo: 5,
    chapterName: "Functions and Arrays in PHP",
    chapterNameTamil: "PHP செயற்கூறுகள் மற்றும் அணிகள்",
    marks: 2,
    type: "short",
    questionText: "How do you create an indexed array in PHP?",
    questionTextTamil: "PHP-ல் ஒரு சுட்டு எண் அணியை எவ்வாறு உருவாக்குவாய்?",
    answer: "An indexed array can be created using either the array() function or bracket syntax:\n$colors = array(\"Red\", \"Green\", \"Blue\");\nor\n$colors = [\"Red\", \"Green\", \"Blue\"];",
    answerTamil: "சுட்டு எண் அணியை array() செயற்கூறு அல்லது அடைப்புக்குறியைப் பயன்படுத்தி உருவாக்கலாம்:\n$colors = array(\"Red\", \"Green\", \"Blue\");\nஅல்லது\n$colors = [\"Red\", \"Green\", \"Blue\"];",
    isBookBack: true
  }
];

const ch5_3m: Question[] = [
  {
    id: "ca12-ch5-3m-1",
    chapterNo: 5,
    chapterName: "Functions and Arrays in PHP",
    chapterNameTamil: "PHP செயற்கூறுகள் மற்றும் அணிகள்",
    marks: 3,
    type: "brief",
    questionText: "What are the advantages of using functions in PHP?",
    questionTextTamil: "PHP-ல் செயற்கூறுகளைப் பயன்படுத்துவதால் ஏற்படும் நன்மைகள் யாவை?",
    answer: "Advantages of functions:\n1. Code Reusability: Write code once and execute it anywhere.\n2. Modular Programming: Decomposes large programs into small, manageable modules.\n3. Easier Debugging: Errors can be easily isolated and fixed.\n4. Readability and Maintenance: Improves overall program clarity.",
    answerTamil: "செயற்கூறுகளின் நன்மைகள்:\n1. குறிமுறையின் மறுபயன்பாடு (Reusability).\n2. பெரிய நிரலை சிறிய தொகுதிகளாகப் பிரித்து எளிமையாக்குதல்.\n3. பிழைத்திருத்தம் செய்வது மிக எளிது.\n4. நிரலைப் புரிந்துகொள்ளுதல் மற்றும் பராமரித்தல் எளிதாகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch5-3m-2",
    chapterNo: 5,
    chapterName: "Functions and Arrays in PHP",
    chapterNameTamil: "PHP செயற்கூறுகள் மற்றும் அணிகள்",
    marks: 3,
    type: "brief",
    questionText: "What is the syntax for defining a function in PHP?",
    questionTextTamil: "PHP-ல் ஒரு செயற்கூறை வரையறுப்பதற்கான தொடரியல் யாது?",
    answer: "Syntax:\nfunction functionName(parameter1, parameter2, ...) {\n    // Code block to be executed\n    return $value; // optional\n}",
    answerTamil: "செயற்கூறு தொடரியல்:\nfunction functionName(parameter1, parameter2, ...) {\n    // செயல்படுத்த வேண்டிய குறிமுறை\n    return $value; // விருப்பத்திற்கேற்ப\n}",
    isBookBack: true
  },
  {
    id: "ca12-ch5-3m-3",
    chapterNo: 5,
    chapterName: "Functions and Arrays in PHP",
    chapterNameTamil: "PHP செயற்கூறுகள் மற்றும் அணிகள்",
    marks: 3,
    type: "brief",
    questionText: "How do you call a function in PHP?",
    questionTextTamil: "PHP-ல் ஒரு செயற்கூறை எவ்வாறு அழைப்பாய்?",
    answer: "A function is invoked simply by writing its name followed by parentheses containing any required argument values:\nExample:\nfunction greet($name) {\n    echo \"Hello, \" . $name;\n}\ngreet(\"Kavitha\"); // Function call",
    answerTamil: "ஒரு செயற்கூறானது அதன் பெயரை எழுதி, அடைப்புக்குறிக்குள் தேவைப்படும் செயலுருபுகளைக் கொடுத்து அழைக்கப்படுகிறது:\nஎடுத்துக்காட்டு:\nfunction greet($name) {\n    echo \"வணக்கம், \" . $name;\n}\ngreet(\"கவிதா\"); // செயற்கூறு அழைப்பு",
    isBookBack: true
  },
  {
    id: "ca12-ch5-3m-4",
    chapterNo: 5,
    chapterName: "Functions and Arrays in PHP",
    chapterNameTamil: "PHP செயற்கூறுகள் மற்றும் அணிகள்",
    marks: 3,
    type: "brief",
    questionText: "Write short notes on an Associative array.",
    questionTextTamil: "தொடர்பு அணி (Associative Array) பற்றி சிறுகுறிப்பு வரைக.",
    answer: "An Associative array stores data in Key-Value pairs where keys are named strings rather than numeric indices.\nSyntax / Example:\n$marks = array(\"Tamil\" => 95, \"English\" => 90, \"CS\" => 98);\necho $marks[\"CS\"]; // Outputs 98",
    answerTamil: "தொடர்பு அணி என்பது எண்களுக்குப் பதிலாக பெயர் சூட்டப்பட்ட திறவுகோல்-மதிப்பு (Key-Value) இணைகளாகத் தரவைச் சேமிக்கும் அணியாகும்.\nஎடுத்துக்காட்டு:\n$marks = array(\"Tamil\" => 95, \"English\" => 90, \"CS\" => 98);\necho $marks[\"CS\"]; // 98 என அச்சிடும்",
    isBookBack: true
  }
];

const ch5_5m: Question[] = [
  {
    id: "ca12-ch5-5m-1",
    chapterNo: 5,
    chapterName: "Functions and Arrays in PHP",
    chapterNameTamil: "PHP செயற்கூறுகள் மற்றும் அணிகள்",
    marks: 5,
    type: "essay",
    questionText: "Explain the user-defined function with suitable examples.",
    questionTextTamil: "பயனர் வரையறுத்த செயற்கூறை தகுந்த மாதிரி நிரலுடன் விரிவாக விளக்குக.",
    answer: "A user-defined function is custom logic declared by the programmer using the 'function' keyword.\n\nStructure:\n1. Declaration: function keyword followed by function name and parentheses.\n2. Body: Statements enclosed in curly braces {}.\n3. Parameters / Arguments: Values passed into the function.\n4. Return statement: Sends back computed result to the caller.\n\nWorking Example:\n<?php\nfunction calculateTotal($mark1, $mark2, $mark3) {\n    $total = $mark1 + $mark2 + $mark3;\n    return $total;\n}\n\n$studentTotal = calculateTotal(95, 90, 100);\necho \"Total Marks = \" . $studentTotal;\n?>",
    answerTamil: "பயனர் வரையறுத்த செயற்கூறு என்பது நிரலாளரால் தனது தேவைக்கேற்ப 'function' சிறப்புச் சொல்லைப் பயன்படுத்தி உருவாக்கப்படும் செயற்கூறாகும்.\n\nஅமைப்பு:\n1. function என்ற சொல்லுடன் செயற்கூறு பெயர் தொடங்கும்.\n2. செயலுருபுகளை ஏற்றுக்கொள்ளும் அடைப்புக்குறிகள் ().\n3. நெளிவு அடைப்புக்குறிக்குள் குறிமுறைத் தொகுதி {}.\n4. return கூற்று மூலம் கணக்கிடப்பட்ட விடையைத் திரும்ப அனுப்புதல்.\n\nமாதிரி நிரல்:\n<?php\nfunction findSum($a, $b) {\n    $sum = $a + $b;\n    return $sum;\n}\n$result = findSum(50, 45);\necho \"கூடுதல் = \" . $result;\n?>",
    isBookBack: true
  },
  {
    id: "ca12-ch5-5m-2",
    chapterNo: 5,
    chapterName: "Functions and Arrays in PHP",
    chapterNameTamil: "PHP செயற்கூறுகள் மற்றும் அணிகள்",
    marks: 5,
    type: "essay",
    questionText: "Explain indexed array and associative array in PHP.",
    questionTextTamil: "PHP-ல் சுட்டு எண் அணி மற்றும் தொடர்பு அணி பற்றி விரிவாக விளக்குக.",
    answer: "1. Indexed Array:\n- Uses numeric indices automatically or explicitly starting from 0.\n- Example:\n<?php\n$fruits = array(\"Apple\", \"Mango\", \"Banana\");\necho $fruits[0]; // Apple\nfor($i=0; $i<count($fruits); $i++) {\n    echo $fruits[$i] . \" \";\n}\n?>\n\n2. Associative Array:\n- Uses named custom keys associated with values (Key => Value mapping).\n- Example:\n<?php\n$age = array(\"Ravi\" => 18, \"Priya\" => 17, \"Arun\" => 19);\necho \"Priya's age is \" . $age[\"Priya\"];\nforeach($age as $name => $val) {\n    echo \"$name : $val<br>\";\n}\n?>",
    answerTamil: "1. சுட்டு எண் அணி (Indexed Array):\n- எண்களைக் கொண்ட சுட்டெண்களைக் கொண்டு உறுப்புகளை அணுகும் (0-ல் தொடங்கும்).\n- எடுத்துக்காட்டு:\n<?php\n$colors = array(\"Red\", \"Green\", \"Blue\");\necho $colors[0]; // Red\n?>\n\n2. தொடர்பு அணி (Associative Array):\n- எண்களுக்குப் பதிலாக பெயரிடப்பட்ட திறவுகோல்களைக் (Keys) கொண்டு மதிப்புகளைச் சேமிக்கும்.\n- எடுத்துக்காட்டு:\n<?php\n$marks = array(\"தமிழ்\" => 95, \"ஆங்கிலம்\" => 90);\necho $marks[\"தமிழ்\"]; // 95\n?>",
    isBookBack: true
  }
];

const ch4_all = [...ch4_1m, ...ch4_2m, ...ch4_3m, ...ch4_5m];
fs.writeFileSync('scripts_ca12/ch4.json', JSON.stringify(ch4_all, null, 2), 'utf8');
console.log("Chapter 4 written! Total:", ch4_all.length);

const ch5_all = [...ch5_1m, ...ch5_2m, ...ch5_3m, ...ch5_5m];
fs.writeFileSync('scripts_ca12/ch5.json', JSON.stringify(ch5_all, null, 2), 'utf8');
console.log("Chapter 5 written! Total:", ch5_all.length);
