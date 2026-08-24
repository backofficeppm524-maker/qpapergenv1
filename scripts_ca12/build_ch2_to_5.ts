import fs from 'fs';
import { Question } from '../src/types';

// ==========================================
// CHAPTER 2: An Introduction to Adobe PageMaker (32 questions: 12 1M, 10 2M, 7 3M, 3 5M)
// ==========================================
const ch2_1m: Question[] = [
  {
    id: "ca12-ch2-1m-1",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "DTP stands for ______________",
    questionTextTamil: "DTP என்பதன் விரிவாக்கம் என்ன?",
    options: {
      A: "Desktop Publishing",
      B: "Desktop Publication",
      C: "Doctor To Patient",
      D: "Desktop Printer"
    },
    optionsTamil: {
      A: "Desktop Publishing (மேசைத்தள பதிப்பகம்)",
      B: "Desktop Publication",
      C: "Doctor To Patient",
      D: "Desktop Printer"
    },
    correctOption: "A",
    answer: "A) Desktop Publishing",
    answerTamil: "A) Desktop Publishing (மேசைத்தள பதிப்பகம்)",
    isBookBack: true
  },
  {
    id: "ca12-ch2-1m-2",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "____________ is a DTP software.",
    questionTextTamil: "பின்வருவனவற்றில் எது ஒரு DTP மென்பொருளாகும்?",
    options: {
      A: "Lotus 1-2-3",
      B: "PageMaker",
      C: "Maya",
      D: "Flash"
    },
    optionsTamil: {
      A: "Lotus 1-2-3",
      B: "PageMaker",
      C: "Maya",
      D: "Flash"
    },
    correctOption: "B",
    answer: "B) PageMaker",
    answerTamil: "B) PageMaker",
    isBookBack: true
  },
  {
    id: "ca12-ch2-1m-3",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "Which menu contains the New option?",
    questionTextTamil: "புதிய ஆவணத்தை உருவாக்க பயன்படும் New விருப்பம் எந்தப் பட்டியில் உள்ளது?",
    options: {
      A: "File menu",
      B: "Edit menu",
      C: "Layout menu",
      D: "Type menu"
    },
    optionsTamil: {
      A: "File பட்டி (Menu)",
      B: "Edit பட்டி",
      C: "Layout பட்டி",
      D: "Type பட்டி"
    },
    correctOption: "A",
    answer: "A) File menu",
    answerTamil: "A) File பட்டி (Menu)",
    isBookBack: true
  },
  {
    id: "ca12-ch2-1m-4",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "In PageMaker Window, the area outside of the dark border is referred to as _________.",
    questionTextTamil: "PageMaker சாளரத்தில், இருண்ட எல்லைக் கோட்டிற்கு வெளியே உள்ள பகுதி எவ்வாறு அழைக்கப்படுகிறது?",
    options: {
      A: "page",
      B: "pasteboard",
      C: "blackboard",
      D: "dashboard"
    },
    optionsTamil: {
      A: "பக்கம் (page)",
      B: "ஒட்டுப் பலகை (pasteboard)",
      C: "கரும்பலகை",
      D: "டாஷ்போர்டு"
    },
    correctOption: "B",
    answer: "B) pasteboard",
    answerTamil: "B) ஒட்டுப் பலகை (pasteboard)",
    isBookBack: true
  },
  {
    id: "ca12-ch2-1m-5",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "Shortcut to close a document in PageMaker is ______________",
    questionTextTamil: "PageMaker ஆவணத்தை மூடுவதற்கான குறுக்குவழி விசை எது?",
    options: {
      A: "Ctrl + A",
      B: "Ctrl + B",
      C: "Ctrl + C",
      D: "Ctrl + W"
    },
    optionsTamil: {
      A: "Ctrl + A",
      B: "Ctrl + B",
      C: "Ctrl + C",
      D: "Ctrl + W"
    },
    correctOption: "D",
    answer: "D) Ctrl + W",
    answerTamil: "D) Ctrl + W",
    isBookBack: true
  },
  {
    id: "ca12-ch2-1m-6",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "A __________ tool is used for magnifying the particular portion of the area.",
    questionTextTamil: "ஆவணத்தின் ஒரு குறிப்பிட்ட பகுதியை பெரிதாக்கிக் காட்டப் பயன்படும் கருவி எது?",
    options: {
      A: "Text tool",
      B: "Line tool",
      C: "Zoom tool",
      D: "Hand tool"
    },
    optionsTamil: {
      A: "உரைக் கருவி (Text tool)",
      B: "கோட்டுக் கருவி (Line tool)",
      C: "பெரிதாக்கும் கருவி (Zoom tool)",
      D: "கைக் கருவி (Hand tool)"
    },
    correctOption: "C",
    answer: "C) Zoom tool",
    answerTamil: "C) பெரிதாக்கும் கருவி (Zoom tool)",
    isBookBack: true
  },
  {
    id: "ca12-ch2-1m-7",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "_________ tool is used for drawing boxes.",
    questionTextTamil: "செவ்வகம் அல்லது சதுரப் பெட்டிகளை வரையப் பயன்படும் கருவி எது?",
    options: {
      A: "Line",
      B: "Ellipse",
      C: "Rectangle",
      D: "Text"
    },
    optionsTamil: {
      A: "Line",
      B: "Ellipse",
      C: "செவ்வகக் கருவி (Rectangle)",
      D: "Text"
    },
    correctOption: "C",
    answer: "C) Rectangle",
    answerTamil: "C) செவ்வகக் கருவி (Rectangle)",
    isBookBack: true
  },
  {
    id: "ca12-ch2-1m-8",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "Place option is present in _____________ menu.",
    questionTextTamil: "Place (பொருத்துதல்) விருப்பம் எந்தப் பட்டியில் உள்ளது?",
    options: {
      A: "File",
      B: "Edit",
      C: "Layout",
      D: "Window"
    },
    optionsTamil: {
      A: "File",
      B: "Edit",
      C: "Layout",
      D: "Window"
    },
    correctOption: "A",
    answer: "A) File",
    answerTamil: "A) File",
    isBookBack: true
  },
  {
    id: "ca12-ch2-1m-9",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "To select an entire document using the keyboard, press ___________",
    questionTextTamil: "விசைப்பலகையைப் பயன்படுத்தி முழு ஆவணத்தையும் தேர்ந்தெடுக்க அழுத்த வேண்டிய குறுக்குவழி விசை எது?",
    options: {
      A: "Ctrl + A",
      B: "Ctrl + B",
      C: "Ctrl + C",
      D: "Ctrl + D"
    },
    optionsTamil: {
      A: "Ctrl + A",
      B: "Ctrl + B",
      C: "Ctrl + C",
      D: "Ctrl + D"
    },
    correctOption: "A",
    answer: "A) Ctrl + A",
    answerTamil: "A) Ctrl + A",
    isBookBack: true
  },
  {
    id: "ca12-ch2-1m-10",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "Character formatting consists of which of the following text properties?",
    questionTextTamil: "எழுத்து வடிவூட்டல் (Character formatting) பின்வரும் எந்த பண்புகளைக் கொண்டுள்ளது?",
    options: {
      A: "Bold",
      B: "Italic",
      C: "Underline",
      D: "All of these"
    },
    optionsTamil: {
      A: "தடிமன் (Bold)",
      B: "சாய்வு (Italic)",
      C: "அடிக்கோடு (Underline)",
      D: "இவை அனைத்தும் (All of these)"
    },
    correctOption: "D",
    answer: "D) All of these",
    answerTamil: "D) இவை அனைத்தும் (All of these)",
    isBookBack: true
  },
  {
    id: "ca12-ch2-1m-11",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "Which tool lets you edit text?",
    questionTextTamil: "உரையைத் திருத்த அனுமதிக்கும் கருவி எது?",
    options: {
      A: "Text tool",
      B: "Type tool",
      C: "Crop tool",
      D: "Hand tool"
    },
    optionsTamil: {
      A: "Text tool",
      B: "Type tool",
      C: "Crop tool",
      D: "Hand tool"
    },
    correctOption: "A",
    answer: "A) Text tool",
    answerTamil: "A) Text tool",
    isBookBack: true
  },
  {
    id: "ca12-ch2-1m-12",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "Shortcut to print a document in PageMaker is ___________",
    questionTextTamil: "PageMaker ஆவணத்தை அச்சிடுவதற்கான குறுக்குவழி விசை எது?",
    options: {
      A: "Ctrl + A",
      B: "Ctrl + P",
      C: "Ctrl + C",
      D: "Ctrl + V"
    },
    optionsTamil: {
      A: "Ctrl + A",
      B: "Ctrl + P",
      C: "Ctrl + C",
      D: "Ctrl + V"
    },
    correctOption: "B",
    answer: "B) Ctrl + P",
    answerTamil: "B) Ctrl + P",
    isBookBack: true
  }
];

const ch2_2m: Question[] = [
  {
    id: "ca12-ch2-2m-1",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "What is desktop publishing?",
    questionTextTamil: "மேசைத்தள பதிப்பகம் (DTP) என்றால் என்ன?",
    answer: "Desktop Publishing (DTP) is the creation of printed documents such as newsletters, brochures, books, and flyers using specialized page layout software on a personal computer.",
    answerTamil: "மேசைத்தள பதிப்பகம் (DTP) என்பது தனிப்பயன் கணினியில் பிரத்யேக பக்க வடிவமைப்பு மென்பொருளைப் பயன்படுத்தி செய்தித்தாள்கள், சிற்றேடுகள், புத்தகங்கள் போன்ற அச்சிடப்பட்ட ஆவணங்களை உருவாக்குவதாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch2-2m-2",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "Give some examples of DTP software.",
    questionTextTamil: "DTP மென்பொருட்களுக்கு சில எடுத்துக்காட்டுகள் தருக.",
    answer: "Examples of DTP software include:\n1. Adobe PageMaker\n2. Adobe InDesign\n3. QuarkXPress\n4. Microsoft Publisher.",
    answerTamil: "DTP மென்பொருட்களின் எடுத்துக்காட்டுகள்:\n1. அடோப் பேஜ்மேக்கர் (Adobe PageMaker)\n2. அடோப் இன்டிசைன் (Adobe InDesign)\n3. குவார்க் எக்ஸ்பிரஸ் (QuarkXPress)\n4. மைக்ரோசாப்ட் பப்ளிஷர்.",
    isBookBack: true
  },
  {
    id: "ca12-ch2-2m-3",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "Write the steps to open PageMaker.",
    questionTextTamil: "PageMaker பயன்பாட்டைத் திறப்பதற்கான படிநிலைகளை எழுதுக.",
    answer: "Steps to open PageMaker:\n1. Click Start button.\n2. Choose All Programs -> Adobe -> PageMaker 7.0 -> Adobe PageMaker 7.0.\n3. The Adobe PageMaker window opens.",
    answerTamil: "PageMaker திறப்பதற்கான படிகள்:\n1. Start பொத்தானைக் கிளிக் செய்க.\n2. All Programs -> Adobe -> PageMaker 7.0 -> Adobe PageMaker 7.0 என்பதைத் தேர்ந்தெடுக்கவும்.\n3. அடோப் பேஜ்மேக்கர் சாளரம் தோன்றும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch2-2m-4",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "How do you create a New document in PageMaker?",
    questionTextTamil: "PageMaker-ல் ஒரு புதிய ஆவணத்தை எவ்வாறு உருவாக்குவாய்?",
    answer: "1. Choose File > New in the menu bar (or press Ctrl + N).\n2. The Document Setup dialog box appears.\n3. Set page size, orientation, margins, etc., and click OK.",
    answerTamil: "1. பட்டிப் பட்டையில் File > New என்பதைத் தேர்ந்தெடுக்கவும் (அல்லது Ctrl + N அழுத்தவும்).\n2. Document Setup உரையாடல் பெட்டி தோன்றும்.\n3. பக்க அளவு, விளிம்புகள் போன்றவற்றை அமைத்து OK பொத்தானைக் கிளிக் செய்யவும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch2-2m-5",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "What is a Pasteboard in PageMaker?",
    questionTextTamil: "PageMaker-ல் ஒட்டுப் பலகை (Pasteboard) என்றால் என்ன?",
    answer: "Pasteboard is the blank area outside the printable page boundary in PageMaker. It is used as a temporary holding area to place and edit text or graphic elements before placing them on the actual page.",
    answerTamil: "ஒட்டுப் பலகை (Pasteboard) என்பது பக்கத்தின் எல்லைக் கோட்டிற்கு வெளியே உள்ள வெற்றுப் பகுதியாகும். ஆவணப் பக்கத்தில் வைப்பதற்கு முன் உரை அல்லது பட கூறுகளை தற்காலிகமாக வைக்க இது பயன்படுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch2-2m-6",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "Write about the Menu bar of PageMaker.",
    questionTextTamil: "PageMaker-ன் பட்டிப் பட்டை (Menu bar) பற்றி எழுதுக.",
    answer: "The Menu bar contains standard pull-down menus: File, Edit, Layout, Type, Element, Utilities, View, Window, and Help, providing access to all editing and layout commands.",
    answerTamil: "பட்டிப் பட்டையானது File, Edit, Layout, Type, Element, Utilities, View, Window மற்றும் Help ஆகிய முக்கிய பட்டி உருப்படிகளைக் கொண்டு அனைத்து கட்டளைகளையும் வழங்குகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch2-2m-7",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "Differentiate Ellipse tool from Ellipse frame tool.",
    questionTextTamil: "நீள்வட்டக் கருவியையும் (Ellipse tool) நீள்வட்ட சட்டக் கருவியையும் (Ellipse frame tool) வேறுபடுத்துக.",
    answer: "- Ellipse tool: Used to draw plain oval or circular graphic shapes.\n- Ellipse frame tool: Draws an elliptical placeholder frame containing an 'X' inside, designed specifically to hold text or imported graphic images.",
    answerTamil: "- நீள்வட்டக் கருவி: வெறும் நீள்வட்டம் அல்லது வட்ட வடிவங்களை வரையப் பயன்படுகிறது.\n- நீள்வட்டச் சட்டக் கருவி: உரை அல்லது படங்களை தன்னுள் தாங்குவதற்காக 'X' குறியுடன் கூடிய நீள்வட்ட சட்டங்களை வரையப் பயன்படுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch2-2m-8",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "What is text editing?",
    questionTextTamil: "உரை திருத்துதல் (Text editing) என்றால் என்ன?",
    answer: "Text editing means making corrections, inserting new text, deleting unwanted characters, moving or copying text blocks, and finding and replacing words in a document.",
    answerTamil: "உரை திருத்துதல் என்பது ஆவணத்தில் உள்ள பிழைகளைத் திருத்துதல், புதிய உரையைச் சேர்த்தல், நீக்குதல், நகர்த்துதல் மற்றும் உரையைத் தேடி மாற்றுதல் போன்ற செயல்களைக் குறிக்கும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch2-2m-9",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "What is threading text blocks?",
    questionTextTamil: "உரைப் தொகுதிகளைத் தொடுத்தல் (Threading text blocks) என்றால் என்ன?",
    answer: "Threading is the process of connecting two or more text blocks so that text flows continuously from one block to the next across multiple columns or pages.",
    answerTamil: "உரைப் தொகுதிகளைத் தொடுத்தல் என்பது ஒரு உரைத் தொகுதியில் உள்ள உரை மற்றொரு உரைத் தொகுதிக்கு தொடர்ச்சியாக பாய்ந்து செல்லுமாறு பல தொகுதிகளை ஒன்றோடொன்று இணைப்பதாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch2-2m-10",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "How do you insert a page in PageMaker?",
    questionTextTamil: "PageMaker-ல் புதிய பக்கங்களை எவ்வாறு செருகுவாய்?",
    answer: "1. Choose Layout > Insert Pages from the menu bar.\n2. In the dialog box, type the number of pages to insert and select position (Before, After, or Between).\n3. Click Insert.",
    answerTamil: "1. பட்டிப் பட்டையில் Layout > Insert Pages என்பதைத் தேர்ந்தெடுக்கவும்.\n2. உரையாடல் பெட்டியில் செருக வேண்டிய பக்கங்களின் எண்ணிக்கையையும் இடத்தையும் குறிப்பிடவும்.\n3. Insert பொத்தானைக் கிளிக் செய்யவும்.",
    isBookBack: true
  }
];

const ch2_3m: Question[] = [
  {
    id: "ca12-ch2-3m-1",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 3,
    type: "brief",
    questionText: "What is PageMaker? Explain its uses.",
    questionTextTamil: "PageMaker என்றால் என்ன? அதன் பயன்களை விளக்குக.",
    answer: "Adobe PageMaker is a powerful page layout desktop publishing software. Uses include:\n1. Designing newsletters, brochures, and flyers.\n2. Creating multi-page books, annual reports, and business magazines.\n3. Integrating rich text typography with high-resolution vector and bitmap graphics.",
    answerTamil: "அடோப் பேஜ்மேக்கர் ஒரு சிறந்த பக்க வடிவமைப்பு (DTP) மென்பொருளாகும். பயன்கள்:\n1. சிற்றேடுகள், துண்டுப் பிரசுரங்கள் வடிவமைத்தல்.\n2. புத்தகங்கள், பத்திரிகைகள் மற்றும் அறிக்கைகளை அச்சிடத் தயாரித்தல்.\n3. உரை மற்றும் படங்களை ஒருங்கிணைத்து அழகான அமைப்புகளை உருவாக்குதல்.",
    isBookBack: true
  },
  {
    id: "ca12-ch2-3m-2",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 3,
    type: "brief",
    questionText: "Mention three tools in PageMaker and write their keyboard shortcuts.",
    questionTextTamil: "PageMaker-ல் உள்ள ஏதேனும் மூன்று கருவிகளையும் அவற்றின் குறுக்குவழி விசைகளையும் குறிப்பிடுக.",
    answer: "1. Pointer Tool: F9 (or Shift + F1)\n2. Text Tool: Shift + Alt + F1 (or Shift + F2)\n3. Zoom Tool: Shift + F5 (or Shift + Alt + F6).",
    answerTamil: "1. சுட்டுக் கருவி (Pointer Tool): F9 (Shift + F1)\n2. உரைக் கருவி (Text Tool): Shift + Alt + F1\n3. பெரிதாக்கும் கருவி (Zoom Tool): Shift + F5.",
    isBookBack: true
  },
  {
    id: "ca12-ch2-3m-3",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 3,
    type: "brief",
    questionText: "Write the use of any three tools in PageMaker along with symbols.",
    questionTextTamil: "PageMaker-ல் உள்ள ஏதேனும் மூன்று கருவிகளின் பயன்பாட்டினை எழுதுக.",
    answer: "1. Pointer Tool (Arrow icon): Used to select, move, and resize text blocks and graphic objects.\n2. Text Tool (Letter 'T' icon): Used to type, select, and edit text.\n3. Rotating Tool (Circular arrow icon): Used to rotate text blocks and graphics at desired angles.",
    answerTamil: "1. Pointer Tool (அம்புக்குறி): உரைத் தொகுதிகள் மற்றும் படங்களைத் தேர்ந்தெடுக்க, நகர்த்த, அளவை மாற்றப் பயன்படுகிறது.\n2. Text Tool ('T' குறியீடு): உரையை தட்டச்சு செய்யவும், திருத்தவும் பயன்படுகிறது.\n3. Rotating Tool (சுழற்சி குறி): பொருள்களை சுழற்றப் பயன்படுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch2-3m-4",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 3,
    type: "brief",
    questionText: "How do you rejoin split blocks?",
    questionTextTamil: "பிரிக்கப்பட்ட உரைத் தொகுதிகளை எவ்வாறு மீண்டும் இணைப்பாய்?",
    answer: "1. Select the split text block using the Pointer tool.\n2. Click and drag the bottom windowshade handle upwards until it touches the top handle.\n3. The text rejoins into the previous text block.",
    answerTamil: "1. Pointer கருவியைப் பயன்படுத்தி பிரிக்கப்பட்ட உரைத் தொகுதியைத் தேர்ந்தெடுக்கவும்.\n2. கீழ் விண்டோஷேட் கைப்பிடியை மேல் கைப்பிடியைத் தொடும் வரை மேல்நோக்கி இழுக்கவும்.\n3. உரை மீண்டும் முந்தைய தொகுதியோடு இணையும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch2-3m-5",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 3,
    type: "brief",
    questionText: "How do you link frames containing text?",
    questionTextTamil: "உரையைக் கொண்டுள்ள சட்டங்களை எவ்வாறு இணைப்பாய்?",
    answer: "1. Draw the desired frames using Frame tools.\n2. Click the first frame with the Pointer tool.\n3. Click on the red triangle in the bottom windowshade handle.\n4. Click inside the second frame. The overflowing text links and flows into the second frame.",
    answerTamil: "1. சட்டக் கருவிகளைக் கொண்டு தேவையான சட்டங்களை வரையவும்.\n2. Pointer கருவியால் முதல் சட்டத்தைத் தேர்ந்தெடுக்கவும்.\n3. அதன் கீழ் விண்டோஷேடில் உள்ள சிவப்பு முக்கோணத்தைக் கிளிக் செய்யவும்.\n4. இரண்டாவது சட்டத்தின் மீது கிளிக் செய்தால் உரை இணைக்கப்பட்டு பாயும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch2-3m-6",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 3,
    type: "brief",
    questionText: "What is the use of Master Page?",
    questionTextTamil: "முதன்மைப் பக்கத்தின் (Master Page) பயன் யாது?",
    answer: "Master Page is used to display repeating elements uniformly across all pages of a publication, such as headers, footers, page numbers, logos, and decorative background borders.",
    answerTamil: "முதன்மைப் பக்கம் (Master Page) என்பது அனைத்து ஆவணப் பக்கங்களிலும் மீண்டும் மீண்டும் தோன்றும் தலைப்புகள், அடிக்குறிப்புகள், பக்க எண்கள் மற்றும் லோகோக்களை ஒரே சீராக வைக்கப் பயன்படுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch2-3m-7",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 3,
    type: "brief",
    questionText: "How to you insert page numbers in Master pages?",
    questionTextTamil: "முதன்மைப் பக்கங்களில் (Master Pages) பக்க எண்களை எவ்வாறு செருகுவாய்?",
    answer: "1. Click on the Master Page icon (L/R) at bottom left.\n2. Select the Text tool and click where the page number should appear.\n3. Press Ctrl + Alt + P. On left master page, 'LM' appears; on right master page, 'RM' appears, which automatically translates into actual page numbers in the document.",
    answerTamil: "1. கீழ் இடதுபுறம் உள்ள முதன்மைப் பக்க ஐகானைக் (L/R) கிளிக் செய்யவும்.\n2. Text கருவியைத் தேர்ந்தெடுத்து பக்க எண் வர வேண்டிய இடத்தில் கிளிக் செய்யவும்.\n3. Ctrl + Alt + P விசைகளை அழுத்தவும். இடது பக்கத்தில் 'LM' என்றும் வலது பக்கத்தில் 'RM' என்றும் தோன்றி ஆவணப் பக்கங்களில் தானாக எண்களாக மாறும்.",
    isBookBack: true
  }
];

const ch2_5m: Question[] = [
  {
    id: "ca12-ch2-5m-1",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 5,
    type: "essay",
    questionText: "Explain the tools in PageMaker toolbox.",
    questionTextTamil: "PageMaker கருவிப்பெட்டியில் (Toolbox) உள்ள முக்கிய கருவிகளை விரிவாக விளக்குக.",
    answer: "The PageMaker toolbox contains 14 essential design tools:\n1. Pointer Tool: Selects, moves, and resizes text and graphics.\n2. Rotating Tool: Rotates selected objects.\n3. Line Tool: Draws straight lines at any angle.\n4. Constrained Line Tool: Draws strictly horizontal or vertical lines.\n5. Rectangle Tool: Draws boxes and squares.\n6. Rectangle Frame Tool: Creates rectangular placeholders for text and images.\n7. Ellipse Tool: Draws circles and ovals.\n8. Ellipse Frame Tool: Creates elliptical placeholders for text and images.\n9. Polygon Tool: Draws multi-sided polygons and stars.\n10. Polygon Frame Tool: Creates polygonal frame placeholders.\n11. Hand Tool: Scrolls and pans across the pasteboard/page.\n12. Text Tool: Types, edits, and formats text.\n13. Cropping Tool: Trims imported graphic images.\n14. Zoom Tool: Magnifies or reduces the view of the page.",
    answerTamil: "PageMaker கருவிப்பெட்டியில் உள்ள 14 முக்கிய கருவிகள்:\n1. சுட்டுக் கருவி (Pointer Tool): பொருள்களைத் தேர்ந்தெடுக்க, நகர்த்த.\n2. சுழற்றுக் கருவி (Rotating Tool): பொருள்களை சுழற்ற.\n3. உரைக் கருவி (Text Tool): உரையை தட்டச்சு செய்ய.\n4. கோட்டுக் கருவி (Line Tool): எந்த கோணத்திலும் நேர்கோடு வரைய.\n5. வரம்புடை கோட்டுக் கருவி: செங்குத்து / கிடைமட்டக் கோடுகளை மட்டும் வரைய.\n6. செவ்வகக் கருவி (Rectangle Tool): செவ்வகம் மற்றும் சதுரங்களை வரைய.\n7. செவ்வகச் சட்டக் கருவி: உரை/படங்களை வைக்கும் செவ்வக சட்டங்களை உருவாக்க.\n8. நீள்வட்டக் கருவி (Ellipse Tool): நீள்வட்டம் மற்றும் வட்டம் வரைய.\n9. நீள்வட்டச் சட்டக் கருவி: நீள்வட்ட சட்டங்களை உருவாக்க.\n10. பலகோணக் கருவி (Polygon Tool): பலகோணம் மற்றும் நட்சத்திரம் வரைய.\n11. பலகோண சட்டக் கருவி: பலகோண சட்டங்களை உருவாக்க.\n12. கத்தரிப்புக் கருவி (Cropping Tool): தேவையற்ற படப் பகுதிகளை வெட்ட.\n13. கைக் கருவி (Hand Tool): பக்கத்தை நகர்த்திப் பார்க்க.\n14. பெரிதாக்கும் கருவி (Zoom Tool): திரைப் பார்வையை பெரிதாக்க/சிறிதாக்க.",
    isBookBack: true
  },
  {
    id: "ca12-ch2-5m-2",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 5,
    type: "essay",
    questionText: "Write the steps to place the text in a frame.",
    questionTextTamil: "ஒரு சட்டத்திற்குள் உரையைப் பொருத்துவதற்கான (Place text in a frame) படிநிலைகளை எழுதுக.",
    answer: "Steps to place text into a frame:\n1. Draw a frame using any Frame Tool (e.g., Rectangle Frame Tool).\n2. Choose File > Place (or press Ctrl + D).\n3. The Place dialog box appears. Locate and select the text file (.txt, .doc, etc.) to insert.\n4. Click Open.\n5. Click inside the frame to place the loaded text.\n6. The text flows directly into the frame. If text overflows, click the red handle to thread into another frame.",
    answerTamil: "சட்டத்திற்குள் உரையைப் பொருத்தும் படிகள்:\n1. சட்டக் கருவியைப் பயன்படுத்தி தேவையான சட்டத்தை வரையவும்.\n2. பட்டிப் பட்டையில் File > Place என்பதைத் தேர்ந்தெடுக்கவும் (Ctrl + D).\n3. Place உரையாடல் பெட்டி தோன்றும். அதில் செருக வேண்டிய உரைக் கோப்பைத் தேர்ந்தெடுக்கவும்.\n4. Open பொத்தானைக் கிளிக் செய்யவும்.\n5. இப்போது சட்டத்தின் உள்ளே கிளிக் செய்தால் உரை சட்டத்திற்குள் பொருந்தும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch2-5m-3",
    chapterNo: 2,
    chapterName: "An Introduction to Adobe PageMaker",
    chapterNameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்",
    marks: 5,
    type: "essay",
    questionText: "Write the steps to draw a star using polygon tool?",
    questionTextTamil: "பலகோணக் கருவியைப் (Polygon tool) பயன்படுத்தி நட்சத்திரம் வரைவதற்கான படிநிலைகளை எழுதுக.",
    answer: "Steps to draw a star in PageMaker:\n1. Click the Polygon tool in the Toolbox.\n2. Double-click the Polygon tool (or choose Element > Polygon Settings).\n3. In the Polygon Settings dialog box, enter 'Number of sides' as 5 and 'Star inset' as 50%.\n4. Click OK.\n5. Click and drag the cursor on the document to draw the star shape.",
    answerTamil: "நட்சத்திரம் வரைவதற்கான படிநிலைகள்:\n1. கருவிப்பெட்டியில் பலகோணக் கருவியைத் (Polygon Tool) தேர்ந்தெடுக்கவும்.\n2. பலகோணக் கருவியை இருமுறை கிளிக் செய்யவும் (அல்லது Element > Polygon Settings).\n3. Polygon Settings உரையாடல் பெட்டியில் Number of sides = 5 என்றும், Star inset = 50% என்றும் கொடுக்கவும்.\n4. OK பொத்தானைக் கிளிக் செய்யவும்.\n5. ஆவணப் பக்கத்தில் கிளிக் செய்து இழுத்தால் அழகான நட்சத்திர வடிவம் தோன்றும்.",
    isBookBack: true
  }
];

const ch2_all = [...ch2_1m, ...ch2_2m, ...ch2_3m, ...ch2_5m];
fs.writeFileSync('scripts_ca12/ch2.json', JSON.stringify(ch2_all, null, 2), 'utf8');
console.log("Chapter 2 written! Total:", ch2_all.length);
