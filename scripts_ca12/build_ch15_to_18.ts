import fs from 'fs';
import { Question } from '../src/types';

// ==========================================
// CHAPTER 15: E-Commerce (25 questions: 10 1M, 5 2M, 6 3M, 4 5M)
// ==========================================
const ch15_1m: Question[] = [
  {
    id: "ca12-ch15-1m-1",
    chapterNo: 15,
    chapterName: "E-Commerce",
    chapterNameTamil: "மின்-வணிகம் (E-Commerce)",
    marks: 1,
    type: "mcq",
    questionText: "Buying and selling goods and services over the Internet is known as _________.",
    questionTextTamil: "இணையத்தின் வழியாக பொருட்கள் மற்றும் சேவைகளை வாங்குதல் மற்றும் விற்றல் எவ்வாறு அழைக்கப்படுகிறது?",
    options: {
      A: "E-Commerce",
      B: "E-Governance",
      C: "E-Learning",
      D: "E-Banking"
    },
    optionsTamil: {
      A: "மின்-வணிகம் (E-Commerce)",
      B: "மின்-ஆளுமை",
      C: "மின்-கற்றல்",
      D: "மின்-வங்கி"
    },
    correctOption: "A",
    answer: "A) E-Commerce",
    answerTamil: "A) மின்-வணிகம் (E-Commerce)",
    isBookBack: true
  },
  {
    id: "ca12-ch15-1m-2",
    chapterNo: 15,
    chapterName: "E-Commerce",
    chapterNameTamil: "மின்-வணிகம் (E-Commerce)",
    marks: 1,
    type: "mcq",
    questionText: "Which business model involves commercial transactions conducted directly between businesses and individual consumers?",
    questionTextTamil: "வணிக நிறுவனங்களுக்கும் தனிப்பட்ட நுகர்வோருக்கும் இடையே நேரடியாக நடைபெறும் வணிக மாதிரி எது?",
    options: {
      A: "B2B",
      B: "B2C",
      C: "C2C",
      D: "C2B"
    },
    optionsTamil: {
      A: "B2B",
      B: "B2C (Business to Consumer)",
      C: "C2C",
      D: "C2B"
    },
    correctOption: "B",
    answer: "B) B2C",
    answerTamil: "B) B2C (Business to Consumer)",
    isBookBack: true
  },
  {
    id: "ca12-ch15-1m-3",
    chapterNo: 15,
    chapterName: "E-Commerce",
    chapterNameTamil: "மின்-வணிகம் (E-Commerce)",
    marks: 1,
    type: "mcq",
    questionText: "Which business model represents transactions where consumers sell directly to other consumers (e.g., eBay, OLX)?",
    questionTextTamil: "நுகர்வோர் மற்றொரு நுகர்வோருக்கு நேரடியாக பொருட்களை விற்கும் மாதிரி எது (எ.கா: OLX, eBay)?",
    options: {
      A: "B2B",
      B: "B2C",
      C: "C2C",
      D: "B2G"
    },
    optionsTamil: {
      A: "B2B",
      B: "B2C",
      C: "C2C (Consumer to Consumer)",
      D: "B2G"
    },
    correctOption: "C",
    answer: "C) C2C",
    answerTamil: "C) C2C (Consumer to Consumer)",
    isBookBack: true
  },
  {
    id: "ca12-ch15-1m-4",
    chapterNo: 15,
    chapterName: "E-Commerce",
    chapterNameTamil: "மின்-வணிகம் (E-Commerce)",
    marks: 1,
    type: "mcq",
    questionText: "Which business model refers to transactions between businesses and governmental bodies?",
    questionTextTamil: "வணிக நிறுவனங்களுக்கும் அரசு அமைப்புகளுக்கும் இடையே நடைபெறும் பரிவர்த்தனை மாதிரி எது?",
    options: {
      A: "B2G",
      B: "C2G",
      C: "G2C",
      D: "B2B"
    },
    optionsTamil: {
      A: "B2G (Business to Government)",
      B: "C2G",
      C: "G2C",
      D: "B2B"
    },
    correctOption: "A",
    answer: "A) B2G",
    answerTamil: "A) B2G (Business to Government)",
    isBookBack: true
  },
  {
    id: "ca12-ch15-1m-5",
    chapterNo: 15,
    chapterName: "E-Commerce",
    chapterNameTamil: "மின்-வணிகம் (E-Commerce)",
    marks: 1,
    type: "mcq",
    questionText: "The conduct of business processes including commerce, collaboration, and CRM electronically is _________.",
    questionTextTamil: "மின்-வணிகம், வாடிக்கையாளர் உறவு மேலாண்மை (CRM) உள்ளிட்ட அனைத்து வணிக செயல்பாடுகளையும் மின்னணு முறையில் மேற்கொள்வது எது?",
    options: {
      A: "E-Business",
      B: "E-Commerce",
      C: "E-Mail",
      D: "E-Vault"
    },
    optionsTamil: {
      A: "மின்-தொழில் (E-Business)",
      B: "மின்-வணிகம்",
      C: "மின்னஞ்சல்",
      D: "மின்-பெட்டகம்"
    },
    correctOption: "A",
    answer: "A) E-Business",
    answerTamil: "A) மின்-தொழில் (E-Business)",
    isBookBack: true
  },
  {
    id: "ca12-ch15-1m-6",
    chapterNo: 15,
    chapterName: "E-Commerce",
    chapterNameTamil: "மின்-வணிகம் (E-Commerce)",
    marks: 1,
    type: "mcq",
    questionText: "Which of the following is a key advantage of E-Commerce?",
    questionTextTamil: "மின்-வணிகத்தின் முக்கிய நன்மைகளில் ஒன்று எது?",
    options: {
      A: "24x7 Global availability",
      B: "Physical inspection of products",
      C: "Immediate cash hand-to-hand",
      D: "High overhead building costs"
    },
    optionsTamil: {
      A: "24x7 உலகளாவிய நேரடி இயக்கம்",
      B: "பொருட்களை நேரில் தொட்டுப் பார்த்தல்",
      C: "உடனடி ரொக்கப் பரிமாற்றம்",
      D: "அதிக கட்டிட வாடகைச் செலவு"
    },
    correctOption: "A",
    answer: "A) 24x7 Global availability",
    answerTamil: "A) 24x7 உலகளாவிய நேரடி இயக்கம்",
    isBookBack: true
  },
  {
    id: "ca12-ch15-1m-7",
    chapterNo: 15,
    chapterName: "E-Commerce",
    chapterNameTamil: "மின்-வணிகம் (E-Commerce)",
    marks: 1,
    type: "mcq",
    questionText: "Which generation of E-Commerce was characterized by the Dot-com boom and basic static web retail (1995-2000)?",
    questionTextTamil: "டாட்-காம் பெருக்கம் மற்றும் நிலையான வலைப்பக்க சில்லறை விற்பனையைக் குறிக்கும் மின்-வணிக தலைமுறை எது?",
    options: {
      A: "First Generation",
      B: "Second Generation",
      C: "Third Generation",
      D: "Fourth Generation"
    },
    optionsTamil: {
      A: "முதல் தலைமுறை (First Gen)",
      B: "இரண்டாம் தலைமுறை",
      C: "மூன்றாம் தலைமுறை",
      D: "நான்காம் தலைமுறை"
    },
    correctOption: "A",
    answer: "A) First Generation",
    answerTamil: "A) முதல் தலைமுறை (First Gen)",
    isBookBack: true
  },
  {
    id: "ca12-ch15-1m-8",
    chapterNo: 15,
    chapterName: "E-Commerce",
    chapterNameTamil: "மின்-வணிகம் (E-Commerce)",
    marks: 1,
    type: "mcq",
    questionText: "Which business model represents transactions where businesses sell components or bulk goods to other businesses?",
    questionTextTamil: "ஒரு நிறுவனம் மற்றொரு நிறுவனத்திற்கு மூலப்பொருட்கள் அல்லது மொத்தப் பொருட்களை விற்கும் மாதிரி எது?",
    options: {
      A: "B2B",
      B: "B2C",
      C: "C2B",
      D: "C2C"
    },
    optionsTamil: {
      A: "B2B (Business to Business)",
      B: "B2C",
      C: "C2B",
      D: "C2C"
    },
    correctOption: "A",
    answer: "A) B2B",
    answerTamil: "A) B2B (Business to Business)",
    isBookBack: true
  },
  {
    id: "ca12-ch15-1m-9",
    chapterNo: 15,
    chapterName: "E-Commerce",
    chapterNameTamil: "மின்-வணிகம் (E-Commerce)",
    marks: 1,
    type: "mcq",
    questionText: "A software application that simulates a real supermarket basket allowing users to collect items online is _________.",
    questionTextTamil: "உண்மையான சூப்பர் மார்க்கெட் கூடையைப் போன்றே ஆன்லைனில் பொருட்களைச் சேர்க்க உதவும் மென்பொருள் எது?",
    options: {
      A: "Electronic Shopping Cart",
      B: "Payment Gateway",
      C: "Web Server",
      D: "Search Engine"
    },
    optionsTamil: {
      A: "மின்னணு வணிக கூடை (Shopping Cart)",
      B: "பணம் செலுத்தும் நுழைவாயில்",
      C: "இணைய சேவையகம்",
      D: "தேடு பொறி"
    },
    correctOption: "A",
    answer: "A) Electronic Shopping Cart",
    answerTamil: "A) மின்னணு வணிக கூடை (Shopping Cart)",
    isBookBack: true
  },
  {
    id: "ca12-ch15-1m-10",
    chapterNo: 15,
    chapterName: "E-Commerce",
    chapterNameTamil: "மின்-வணிகம் (E-Commerce)",
    marks: 1,
    type: "mcq",
    questionText: "Which of the following is a limitation of E-Commerce?",
    questionTextTamil: "மின்-வணிகத்தின் வரம்புகளில் ஒன்று எது?",
    options: {
      A: "Lack of physical touch and feel of products",
      B: "Worldwide customer reach",
      C: "Lower marketing cost",
      D: "Speedy digital transactions"
    },
    optionsTamil: {
      A: "பொருட்களை நேரில் தொட்டு உணர முடியாமை",
      B: "உலகளாவிய அணுகல்",
      C: "குறைந்த சந்தைப்படுத்தல் செலவு",
      D: "விரைவான மின்னணு பரிவர்த்தனை"
    },
    correctOption: "A",
    answer: "A) Lack of physical touch and feel of products",
    answerTamil: "A) பொருட்களை நேரில் தொட்டு உணர முடியாமை",
    isBookBack: true
  }
];

const ch15_2m: Question[] = [
  {
    id: "ca12-ch15-2m-1",
    chapterNo: 15,
    chapterName: "E-Commerce",
    chapterNameTamil: "மின்-வணிகம் (E-Commerce)",
    marks: 2,
    type: "short",
    questionText: "Define E-Commerce.",
    questionTextTamil: "மின்-வணிகம் (E-Commerce) - வரையறுக்கவும்.",
    answer: "E-Commerce (Electronic Commerce) refers to the buying, selling, and exchanging of goods, products, and services electronically over telecommunication networks such as the Internet.",
    answerTamil: "மின்-வணிகம் என்பது இணையம் போன்ற கணினி வலையமைப்புகளின் மூலம் பொருட்கள் மற்றும் சேவைகளை மின்னணு முறையில் வாங்குதல் மற்றும் விற்பனை செய்தலைக் குறிக்கும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch15-2m-2",
    chapterNo: 15,
    chapterName: "E-Commerce",
    chapterNameTamil: "மின்-வணிகம் (E-Commerce)",
    marks: 2,
    type: "short",
    questionText: "Differentiate E-Commerce and E-Business.",
    questionTextTamil: "மின்-வணிகம் மற்றும் மின்-தொழில் (E-Business) ஆகியவற்றை வேறுபடுத்துக.",
    answer: "E-Commerce is a subset focusing primarily on commercial buying and selling transactions. E-Business is a broader superset encompassing all digital business activities, supply chains, and customer relationship management.",
    answerTamil: "மின்-வணிகம் என்பது பொருட்களை வாங்குதல் மற்றும் விற்றல் சார்ந்த பரிவர்த்தனைகளைக் குறிக்கும். மின்-தொழில் என்பது உற்பத்தி, விநியோகச் சங்கிலி, வாடிக்கையாளர் மேலாண்மை உள்ளிட்ட அனைத்து வணிக செயல்பாடுகளையும் உள்ளடக்கியதாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch15-2m-3",
    chapterNo: 15,
    chapterName: "E-Commerce",
    chapterNameTamil: "மின்-வணிகம் (E-Commerce)",
    marks: 2,
    type: "short",
    questionText: "What is B2B E-Commerce? Give an example.",
    questionTextTamil: "B2B மின்-வணிகம் என்றால் என்ன? உதாரணம் தருக.",
    answer: "B2B (Business-to-Business) involves commercial transactions conducted between two companies (e.g., manufacturers selling to wholesalers, such as Alibaba or IndiaMART).",
    answerTamil: "B2B என்பது ஒரு வணிக நிறுவனம் மற்றொரு வணிக நிறுவனத்துடன் மேற்கொள்ளும் மின்னணு பரிவர்த்தனையாகும் (எ.கா: இந்தியா மார்ட், அலிபாபா).",
    isBookBack: true
  },
  {
    id: "ca12-ch15-2m-4",
    chapterNo: 15,
    chapterName: "E-Commerce",
    chapterNameTamil: "மின்-வணிகம் (E-Commerce)",
    marks: 2,
    type: "short",
    questionText: "What is B2C E-Commerce? Give an example.",
    questionTextTamil: "B2C மின்-வணிகம் என்றால் என்ன? உதாரணம் தருக.",
    answer: "B2C (Business-to-Consumer) involves online businesses selling goods and retail services directly to individual consumers (e.g., Amazon, Flipkart).",
    answerTamil: "B2C என்பது வணிக நிறுவனங்கள் தனிப்பட்ட நுகர்வோருக்கு இணையம் வழியாக நேரடியாக பொருட்களை விற்பனை செய்வதாகும் (எ.கா: அமேசான், ஃபிளிப்கார்ட்).",
    isBookBack: true
  },
  {
    id: "ca12-ch15-2m-5",
    chapterNo: 15,
    chapterName: "E-Commerce",
    chapterNameTamil: "மின்-வணிகம் (E-Commerce)",
    marks: 2,
    type: "short",
    questionText: "What is C2C E-Commerce? Give an example.",
    questionTextTamil: "C2C மின்-வணிகம் என்றால் என்ன? உதாரணம் தருக.",
    answer: "C2C (Consumer-to-Consumer) provides a platform where individual consumers sell used or personal goods directly to other consumers (e.g., OLX, eBay, Quikr).",
    answerTamil: "C2C என்பது நுகர்வோர் தங்களின் தனிப்பட்ட பயன்பாட்டுப் பொருட்களை மற்றொரு நுகர்வோருக்கு நேரடியாக விற்கும் தளமாகும் (எ.கா: OLX, குயிக்கர்).",
    isBookBack: true
  }
];

const ch15_3m: Question[] = [
  {
    id: "ca12-ch15-3m-1",
    chapterNo: 15,
    chapterName: "E-Commerce",
    chapterNameTamil: "மின்-வணிகம் (E-Commerce)",
    marks: 3,
    type: "brief",
    questionText: "List any three key advantages of E-Commerce for consumers.",
    questionTextTamil: "நுகர்வோருக்கு மின்-வணிகத்தால் ஏற்படும் மூன்று நன்மைகளைப் பட்டியலிடுக.",
    answer: "1. 24x7 Round-the-clock shopping convenience from home.\n2. Easy price comparison across global sellers.\n3. Huge variety of products with doorstep home delivery.",
    answerTamil: "1. வீட்டிலிருந்தே 24 மணி நேரமும் ஷாப்பிங் செய்யும் வசதி.\n2. பல விற்பனையாளர்களின் விலையை எளிதில் ஒப்பிட்டுப் பார்க்கும் வாய்ப்பு.\n3. ஏராளமான பொருட்களின் தேர்வு மற்றும் வீட்டு வாசலில் டெலிவரி.",
    isBookBack: true
  },
  {
    id: "ca12-ch15-3m-2",
    chapterNo: 15,
    chapterName: "E-Commerce",
    chapterNameTamil: "மின்-வணிகம் (E-Commerce)",
    marks: 3,
    type: "brief",
    questionText: "List any three disadvantages / limitations of E-Commerce.",
    questionTextTamil: "மின்-வணிகத்தின் ஏதேனும் மூன்று குறைபாடுகளைப் பட்டியலிடுக.",
    answer: "1. Inability to physically examine or try products prior to purchase.\n2. Risks of online fraud, data breaches, and phishing.\n3. Delivery delays and return shipping hassles.",
    answerTamil: "1. பொருட்களை வாங்குவதற்கு முன் நேரில் தொட்டுப் பார்க்கவோ அல்லது பரிசோதிக்கவோ முடியாது.\n2. இணைய மோசடி மற்றும் தரவு திருட்டு அபாயம்.\n3. டெலிவரி தாமதம் மற்றும் பொருட்களை திரும்ப அனுப்புவதில் ஏற்படும் சிரமங்கள்.",
    isBookBack: true
  },
  {
    id: "ca12-ch15-3m-3",
    chapterNo: 15,
    chapterName: "E-Commerce",
    chapterNameTamil: "மின்-வணிகம் (E-Commerce)",
    marks: 3,
    type: "brief",
    questionText: "Explain C2B (Consumer-to-Business) business model with an example.",
    questionTextTamil: "C2B (Consumer-to-Business) வணிக மாதிரியை எடுத்துக்காட்டுடன் விளக்குக.",
    answer: "In C2B, individual consumers create value (reviews, freelance services, stock photos) that commercial businesses consume or bid for (e.g., Shutterstock, Upwork, freelance design).",
    answerTamil: "C2B மாதிரியில் நுகர்வோர் தங்களின் சேவைகள், திறன்கள் அல்லது படைப்புகளை வணிக நிறுவனங்களுக்கு விற்பனை செய்கின்றனர் (எ.கா: அப்வர்க், ஃப்ரீலான்சர், ஷட்டர்ஸ்டாக்).",
    isBookBack: true
  },
  {
    id: "ca12-ch15-3m-4",
    chapterNo: 15,
    chapterName: "E-Commerce",
    chapterNameTamil: "மின்-வணிகம் (E-Commerce)",
    marks: 3,
    type: "brief",
    questionText: "Explain G2C (Government-to-Citizen) model with an example.",
    questionTextTamil: "G2C (Government-to-Citizen) மாதிரியை எடுத்துக்காட்டுடன் விளக்குக.",
    answer: "G2C refers to digital government portals that deliver public services (birth/death certificates, tax filing, land records, vehicle registration) directly to citizens online (e.g., e-Sevai portal).",
    answerTamil: "G2C என்பது அரசு தனது பொதுச் சேவைகளை (சான்றிதழ்கள், நில ஆவணங்கள், வரி செலுத்துதல்) இணையம் வழியாக குடிமக்களுக்கு நேரடியாக வழங்குவதாகும் (எ.கா: டிஎன் இ-சேவை தளம்).",
    isBookBack: true
  },
  {
    id: "ca12-ch15-3m-5",
    chapterNo: 15,
    chapterName: "E-Commerce",
    chapterNameTamil: "மின்-வணிகம் (E-Commerce)",
    marks: 3,
    type: "brief",
    questionText: "What is an Electronic Shopping Cart?",
    questionTextTamil: "மின்னணு வணிக கூடை (Electronic Shopping Cart) என்றால் என்ன?",
    answer: "An electronic shopping cart is specialized e-commerce software that catalogs selected products, calculates sub-totals, discounts, taxes, and shipping fees before routing to checkout.",
    answerTamil: "மின்னணு வணிக கூடை என்பது பயனர் தேர்வு செய்த பொருட்களை தற்காலிகமாகச் சேகரித்து, விலை, தள்ளுபடி மற்றும் வரிகளைக் கணக்கிட்டு பணப்பரிவர்த்தனைக்கு வழிகாட்டும் மென்பொருளாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch15-3m-6",
    chapterNo: 15,
    chapterName: "E-Commerce",
    chapterNameTamil: "மின்-வணிகம் (E-Commerce)",
    marks: 3,
    type: "brief",
    questionText: "What is Mobile Commerce (M-Commerce)?",
    questionTextTamil: "மொபைல் வர்த்தகம் (M-Commerce) என்றால் என்ன?",
    answer: "M-Commerce refers to commercial transactions conducted wirelessly using handheld mobile devices like smartphones and tablets through dedicated mobile applications.",
    answerTamil: "M-Commerce என்பது ஸ்மார்ட்போன்கள் மற்றும் டேப்லெட்டுகள் போன்ற மொபைல் சாதனங்கள் மூலம் கம்பியில்லா முறையில் இணையவழி வணிக பரிவர்த்தனைகளை மேற்கொள்வதாகும்.",
    isBookBack: true
  }
];

const ch15_5m: Question[] = [
  {
    id: "ca12-ch15-5m-1",
    chapterNo: 15,
    chapterName: "E-Commerce",
    chapterNameTamil: "மின்-வணிகம் (E-Commerce)",
    marks: 5,
    type: "essay",
    questionText: "Explain the various Business Models of E-Commerce in detail (B2B, B2C, C2C, C2B, B2G, G2C).",
    questionTextTamil: "மின்-வணிகத்தின் பல்வேறு வணிக மாதிரிகளை (B2B, B2C, C2C, C2B, B2G, G2C) விரிவாக விளக்குக.",
    answer: "E-Commerce Business Models:\n\n1. B2B (Business-to-Business): Transactions between businesses (e.g., wholesalers and manufacturers; Alibaba).\n2. B2C (Business-to-Consumer): Businesses selling directly to retail consumers (e.g., Amazon, Flipkart).\n3. C2C (Consumer-to-Consumer): Consumers trading with other consumers via third-party platforms (e.g., eBay, OLX).\n4. C2B (Consumer-to-Business): Consumers offer products/services to businesses (e.g., freelancers, influencer reviews).\n5. B2G (Business-to-Government): Businesses supplying products and services to governmental agencies (e.g., defense/IT procurement).\n6. G2C (Government-to-Citizen): Digital governance delivery of public welfare services to citizens (e.g., e-Sevai, DigiLocker).",
    answerTamil: "மின்-வணிகத்தின் வணிக மாதிரிகள்:\n\n1. B2B (வணிகம் to வணிகம்): இரு வணிக நிறுவனங்களுக்கு இடையேயான மொத்த வர்த்தகம் (எ.கா: அலிபாபா).\n2. B2C (வணிகம் to நுகர்வோர்): வணிக நிறுவனம் நேரடியாக நுகர்வோருக்கு சில்லறை விற்பனை செய்தல் (எ.கா: அமேசான், ஃபிளிப்கார்ட்).\n3. C2C (நுகர்வோர் to நுகர்வோர்): நுகர்வோர் தங்களுக்குள் பழைய பொருட்களை விற்றல் (எ.கா: OLX, eBay).\n4. C2B (நுகர்வோர் to வணிகம்): நுகர்வோர் தங்களின் சேவைகளை நிறுவனங்களுக்கு வழங்குதல் (எ.கா: ஃப்ரீலான்சர்).\n5. B2G (வணிகம் to அரசு): அரசுக்கு தேவையான பொருட்களை வணிக நிறுவனங்கள் வழங்குதல்.\n6. G2C (அரசு to குடிமக்கள்): அரசு வழங்கும் மின்-சேவைகள் (எ.கா: இ-சேவை தளம்).",
    isBookBack: true
  },
  {
    id: "ca12-ch15-5m-2",
    chapterNo: 15,
    chapterName: "E-Commerce",
    chapterNameTamil: "மின்-வணிகம் (E-Commerce)",
    marks: 5,
    type: "essay",
    questionText: "Discuss the advantages and disadvantages of E-Commerce for businesses and consumers.",
    questionTextTamil: "வணிக நிறுவனங்கள் மற்றும் நுகர்வோருக்கு மின்-வணிகத்தால் விளையும் நன்மைகள் மற்றும் தீமைகளை விரிவாக விவாதிக்கவும்.",
    answer: "Advantages of E-Commerce:\n1. Global market reach 24/7/365 without physical storefront boundaries.\n2. Low overhead and operational costs compared to brick-and-mortar stores.\n3. Direct consumer personalization and fast transaction processing.\n4. Price comparisons, reviews, and home delivery convenience for buyers.\n\nDisadvantages of E-Commerce:\n1. Physical touch-and-feel of products is impossible before delivery.\n2. Cyber security risks, phishing scams, and credit card identity fraud.\n3. Heavy reliance on stable high-speed internet and logistics supply chains.\n4. Shipping delays and return process overhead.",
    answerTamil: "மின்-வணிகத்தின் நன்மைகள்:\n1. 24x7 உலகளாவிய வணிக இயக்கம் மற்றும் பரந்த வாடிக்கையாளர் அணுகல்.\n2. கடை வாடகை போன்ற கூடுதல் செலவுகள் இன்மை.\n3. நுகர்வோருக்கு எளிதான விலை ஒப்பீடு, சலுகைகள் மற்றும் வீட்டு வாசலில் டெலிவரி.\n\nமின்-வணிகத்தின் குறைபாடுகள்:\n1. பொருட்களை வாங்குவதற்கு முன் நேரில் தொட்டுப் பார்க்க முடியாது.\n2. இணைய மோசடிகள் மற்றும் பாதுகாப்பு குறைபாடுகள்.\n3. இணைய இணைப்பு மற்றும் தளவாடப் போக்குவரத்து தாமதங்கள்.",
    isBookBack: true
  },
  {
    id: "ca12-ch15-5m-3",
    chapterNo: 15,
    chapterName: "E-Commerce",
    chapterNameTamil: "மின்-வணிகம் (E-Commerce)",
    marks: 5,
    type: "essay",
    questionText: "Explain the evolutionary history and generations of E-Commerce.",
    questionTextTamil: "மின்-வணிகத்தின் பரிணாம வளர்ச்சி வரலாறு மற்றும் தலைமுறைகளை விரிவாக விளக்குக.",
    answer: "Evolutionary Generations of E-Commerce:\n\n1. First Generation (1995–2000): The Dot-Com Era\n- Basic static HTML web pages, basic text catalogs.\n- Emergence of Amazon and eBay; dial-up speeds; cash-on-delivery or basic cards.\n\n2. Second Generation (2001–2006): Web 2.0 and Interactive Portals\n- Dynamic database-driven websites, broadband speeds, secure SSL payment gateways.\n- Rich user reviews, customized recommendations.\n\n3. Third Generation (2007–Present): Mobile & Social Commerce\n- Proliferation of smartphones, dedicated mobile apps (M-Commerce), social media integration, UPI, instant 1-click checkout, AI recommendations.",
    answerTamil: "மின்-வணிகத்தின் தலைமுறைகள்:\n\n1. முதல் தலைமுறை (1995–2000): டாட்-காம் காலம்\n- நிலையான வலைப்பக்கங்கள், டயல்-அப் இணைய வேகம்; அமேசான், இபே தொடக்கம்.\n\n2. இரண்டாம் தலைமுறை (2001–2006): வெப் 2.0 காலம்\n- மாறும் வலைப்பக்கங்கள், பிராட்பேண்ட் இணையம், SSL பாதுகாப்பான கட்டண நுழைவாயில்கள்.\n\n3. மூன்றாம் தலைமுறை (2007 முதல் இன்று வரை): மொபைல் மற்றும் சமூக வர்த்தகம்\n- ஸ்மார்ட்போன்கள், பிரத்யேக மொபைல் செயலிகள் (M-Commerce), UPI மற்றும் AI அடிப்படையிலான பரிந்துரைகள்.",
    isBookBack: true
  },
  {
    id: "ca12-ch15-5m-4",
    chapterNo: 15,
    chapterName: "E-Commerce",
    chapterNameTamil: "மின்-வணிகம் (E-Commerce)",
    marks: 5,
    type: "essay",
    questionText: "Differentiate Traditional Commerce and Electronic Commerce (E-Commerce).",
    questionTextTamil: "பாரம்பரிய வணிகம் மற்றும் மின்னணு வணிகம் (E-Commerce) ஆகியவற்றின் வேறுபாடுகளை அட்டவணைப்படுத்தி விளக்குக.",
    answer: "Comparison between Traditional Commerce and E-Commerce:\n\n1. Scope: Traditional is geographically local; E-Commerce is globally accessible.\n2. Operating Hours: Traditional operates during fixed store hours; E-Commerce operates 24/7/365.\n3. Overhead Costs: Traditional requires costly physical stores and staff; E-Commerce runs digitally with lower overhead.\n4. Customer Interaction: Traditional provides face-to-face inspection; E-Commerce provides screen-based multimedia catalogs.\n5. Payment: Traditional relies heavily on physical cash; E-Commerce uses digital wallets, cards, and UPI.",
    answerTamil: "பாரம்பரிய வணிகம் vs மின்-வணிகம்:\n\n1. எல்லை: பாரம்பரிய வணிகம் குறிப்பிட்ட உள்ளூர் பகுதிக்கு மட்டும்; மின்-வணிகம் உலகளாவியது.\n2. செயல்படும் நேரம்: பாரம்பரிய வணிகம் குறிப்பிட்ட நேரம் மட்டும்; மின்-வணிகம் 24 மணி நேரமும் செயல்படும்.\n3. இயக்கச் செலவு: பாரம்பரிய வணிகத்திற்கு கடை வாடகை, பணியாளர் செலவு அதிகம்; மின்-வணிகத்திற்கு செலவு குறைவு.\n4. வாடிக்கையாளர் தொடர்பு: நேரில் பார்த்து வாங்குதல்; மின்-வணிகத்தில் டிஜிட்டல் திரையில் பார்த்து தேர்வு செய்தல்.\n5. பணம் செலுத்துதல்: நேரடி ரொக்கம்; மின்-வணிகத்தில் டிஜிட்டல் பணப்பரிவர்த்தனை (UPI, கார்டுகள்).",
    isBookBack: true
  }
];

// ==========================================
// CHAPTER 16: Electronic Payment Systems (24 questions: 10 1M, 5 2M, 5 3M, 4 5M)
// ==========================================
const ch16_1m: Question[] = [
  {
    id: "ca12-ch16-1m-1",
    chapterNo: 16,
    chapterName: "Electronic Payment Systems",
    chapterNameTamil: "மின்னணு செலுத்தல் முறைகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which card allows a customer to purchase items on borrowed credit up to an approved limit?",
    questionTextTamil: "வாடிக்கையாளர் தனது வங்கிக் கணக்கில் உள்ள பணத்தை விட அதிகமாக கடன் வரம்பில் பொருட்களை வாங்க அனுமதிக்கும் அட்டை எது?",
    options: {
      A: "Debit Card",
      B: "Credit Card",
      C: "Smart Card",
      D: "Gift Card"
    },
    optionsTamil: {
      A: "பற்று அட்டை",
      B: "கடன் அட்டை (Credit Card)",
      C: "ஸ்மார்ட் கார்டு",
      D: "பரிசு அட்டை"
    },
    correctOption: "B",
    answer: "B) Credit Card",
    answerTamil: "B) கடன் அட்டை (Credit Card)",
    isBookBack: true
  },
  {
    id: "ca12-ch16-1m-2",
    chapterNo: 16,
    chapterName: "Electronic Payment Systems",
    chapterNameTamil: "மின்னணு செலுத்தல் முறைகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which card deducts funds directly and immediately from the cardholder's existing bank account balance?",
    questionTextTamil: "கார்டுதாரரின் சேமிப்புக் கணக்கிலிருந்து உடனடியாக பணத்தைக் கழிக்கும் அட்டை எது?",
    options: {
      A: "Credit Card",
      B: "Debit Card",
      C: "Charge Card",
      D: "Store Card"
    },
    optionsTamil: {
      A: "கடன் அட்டை",
      B: "பற்று அட்டை (Debit Card)",
      C: "சார்ஜ் கார்டு",
      D: "ஸ்டோர் கார்டு"
    },
    correctOption: "B",
    answer: "B) Debit Card",
    answerTamil: "B) பற்று அட்டை (Debit Card)",
    isBookBack: true
  },
  {
    id: "ca12-ch16-1m-3",
    chapterNo: 16,
    chapterName: "Electronic Payment Systems",
    chapterNameTamil: "மின்னணு செலுத்தல் முறைகள்",
    marks: 1,
    type: "mcq",
    questionText: "What does ECS stand for in digital banking?",
    questionTextTamil: "வங்கித்துறையில் ECS என்பதன் விரிவாக்கம் என்ன?",
    options: {
      A: "Electronic Clearing Service",
      B: "Electronic Cash System",
      C: "Electronic Credit Standard",
      D: "Encrypted Card Service"
    },
    optionsTamil: {
      A: "Electronic Clearing Service",
      B: "Electronic Cash System",
      C: "Electronic Credit Standard",
      D: "Encrypted Card Service"
    },
    correctOption: "A",
    answer: "A) Electronic Clearing Service",
    answerTamil: "A) Electronic Clearing Service",
    isBookBack: true
  },
  {
    id: "ca12-ch16-1m-4",
    chapterNo: 16,
    chapterName: "Electronic Payment Systems",
    chapterNameTamil: "மின்னணு செலுத்தல் முறைகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which fund transfer system operates on a gross real-time settlement basis without waiting for batching?",
    questionTextTamil: "பணப்பரிவர்த்தனைகளை தொகுப்புகளாகக் காத்திருக்காமல் நிகழ்நேரத்தில் தீர்வு செய்யும் அமைப்பு எது?",
    options: {
      A: "NEFT",
      B: "RTGS",
      C: "ECS",
      D: "Cheque"
    },
    optionsTamil: {
      A: "NEFT",
      B: "RTGS (Real Time Gross Settlement)",
      C: "ECS",
      D: "காசோலை"
    },
    correctOption: "B",
    answer: "B) RTGS",
    answerTamil: "B) RTGS (Real Time Gross Settlement)",
    isBookBack: true
  },
  {
    id: "ca12-ch16-1m-5",
    chapterNo: 16,
    chapterName: "Electronic Payment Systems",
    chapterNameTamil: "மின்னணு செலுத்தல் முறைகள்",
    marks: 1,
    type: "mcq",
    questionText: "What does UPI stand for in modern Indian digital payments?",
    questionTextTamil: "இந்திய டிஜிட்டல் பரிவர்த்தனையில் UPI என்பதன் விரிவாக்கம் என்ன?",
    options: {
      A: "Unified Payments Interface",
      B: "Universal Payment Internet",
      C: "Unique Processing Interface",
      D: "United Postal India"
    },
    optionsTamil: {
      A: "Unified Payments Interface",
      B: "Universal Payment Internet",
      C: "Unique Processing Interface",
      D: "United Postal India"
    },
    correctOption: "A",
    answer: "A) Unified Payments Interface",
    answerTamil: "A) Unified Payments Interface",
    isBookBack: true
  },
  {
    id: "ca12-ch16-1m-6",
    chapterNo: 16,
    chapterName: "Electronic Payment Systems",
    chapterNameTamil: "மின்னணு செலுத்தல் முறைகள்",
    marks: 1,
    type: "mcq",
    questionText: "What does CVV stand for on payment cards?",
    questionTextTamil: "கார்டுகளின் பின்புறம் உள்ள CVV என்பதன் விரிவாக்கம் என்ன?",
    options: {
      A: "Card Verification Value",
      B: "Customer Verification Value",
      C: "Credit Validity Voucher",
      D: "Cash Verification Value"
    },
    optionsTamil: {
      A: "Card Verification Value",
      B: "Customer Verification Value",
      C: "Credit Validity Voucher",
      D: "Cash Verification Value"
    },
    correctOption: "A",
    answer: "A) Card Verification Value",
    answerTamil: "A) Card Verification Value",
    isBookBack: true
  },
  {
    id: "ca12-ch16-1m-7",
    chapterNo: 16,
    chapterName: "Electronic Payment Systems",
    chapterNameTamil: "மின்னணு செலுத்தல் முறைகள்",
    marks: 1,
    type: "mcq",
    questionText: "A virtual wallet that stores credit card/bank details allowing users to make electronic transactions is a(n) _________.",
    questionTextTamil: "பயனர் தனது வங்கி மற்றும் அட்டை விவரங்களை சேமித்து இணைய பரிவர்த்தனைகள் செய்ய உதவும் மின்னணு பணப்பை எது?",
    options: {
      A: "E-Wallet (Digital Wallet)",
      B: "E-Mail",
      C: "E-Book",
      D: "E-Learning"
    },
    optionsTamil: {
      A: "மின்-பணப்பை (E-Wallet)",
      B: "மின்னஞ்சல்",
      C: "மின்-புத்தகம்",
      D: "மின்-கற்றல்"
    },
    correctOption: "A",
    answer: "A) E-Wallet (Digital Wallet)",
    answerTamil: "A) மின்-பணப்பை (E-Wallet)",
    isBookBack: true
  },
  {
    id: "ca12-ch16-1m-8",
    chapterNo: 16,
    chapterName: "Electronic Payment Systems",
    chapterNameTamil: "மின்னணு செலுத்தல் முறைகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which organization launched and manages the Unified Payments Interface (UPI) in India?",
    questionTextTamil: "இந்தியாவில் UPI முறையை அறிமுகப்படுத்தி நிர்வகிக்கும் அமைப்பு எது?",
    options: {
      A: "NPCI",
      B: "SEBI",
      C: "TRAI",
      D: "IRDAI"
    },
    optionsTamil: {
      A: "NPCI (National Payments Corporation of India)",
      B: "SEBI",
      C: "TRAI",
      D: "IRDAI"
    },
    correctOption: "A",
    answer: "A) NPCI",
    answerTamil: "A) NPCI (National Payments Corporation of India)",
    isBookBack: true
  },
  {
    id: "ca12-ch16-1m-9",
    chapterNo: 16,
    chapterName: "Electronic Payment Systems",
    chapterNameTamil: "மின்னணு செலுத்தல் முறைகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which fund transfer system in India settles fund transfer requests in half-hourly batches?",
    questionTextTamil: "அரை மணி நேர தொகுப்புகளாக நிதிப் பரிமாற்றங்களை தீர்வு செய்யும் இந்திய முறை எது?",
    options: {
      A: "NEFT",
      B: "RTGS",
      C: "IMPS",
      D: "UPI"
    },
    optionsTamil: {
      A: "NEFT",
      B: "RTGS",
      C: "IMPS",
      D: "UPI"
    },
    correctOption: "A",
    answer: "A) NEFT",
    answerTamil: "A) NEFT",
    isBookBack: true
  },
  {
    id: "ca12-ch16-1m-10",
    chapterNo: 16,
    chapterName: "Electronic Payment Systems",
    chapterNameTamil: "மின்னணு செலுத்தல் முறைகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which security layer software authorizes credit card payments online between e-commerce merchants and customer banks?",
    questionTextTamil: "வணிக வலைத்தளங்களுக்கும் வாடிக்கையாளர் வங்கிகளுக்கும் இடையே கட்டண பரிவர்த்தனையை பாதுகாப்பாக நிறைவேற்றும் நுழைவாயில் எது?",
    options: {
      A: "Payment Gateway",
      B: "Web Browser",
      C: "Proxy Server",
      D: "DNS Server"
    },
    optionsTamil: {
      A: "கட்டண நுழைவாயில் (Payment Gateway)",
      B: "வலை உலாவி",
      C: "பராக்ஸி சேவையகம்",
      D: "DNS சேவையகம்"
    },
    correctOption: "A",
    answer: "A) Payment Gateway",
    answerTamil: "A) கட்டண நுழைவாயில் (Payment Gateway)",
    isBookBack: true
  }
];

const ch16_2m: Question[] = [
  {
    id: "ca12-ch16-2m-1",
    chapterNo: 16,
    chapterName: "Electronic Payment Systems",
    chapterNameTamil: "மின்னணு செலுத்தல் முறைகள்",
    marks: 2,
    type: "short",
    questionText: "What is an Electronic Payment System (EPS)?",
    questionTextTamil: "மின்னணு செலுத்தல் முறை (EPS) என்றால் என்ன?",
    answer: "An Electronic Payment System (EPS) is a financial exchange mechanism that allows users to pay for goods and services online electronically without using physical cash or paper checks.",
    answerTamil: "மின்னணு செலுத்தல் முறை என்பது காகிதப் பணம் அல்லது காசோலைகளைப் பயன்படுத்தாமல், மின்னணு சாதனங்கள் மற்றும் இணையம் வழியாக நிதிப் பரிமாற்றம் செய்யும் அமைப்பாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch16-2m-2",
    chapterNo: 16,
    chapterName: "Electronic Payment Systems",
    chapterNameTamil: "மின்னணு செலுத்தல் முறைகள்",
    marks: 2,
    type: "short",
    questionText: "What is a Credit Card?",
    questionTextTamil: "கடன் அட்டை (Credit Card) என்றால் என்ன?",
    answer: "A credit card is a payment card issued by a bank enabling cardholders to borrow funds up to a pre-approved credit limit to purchase goods and repay later.",
    answerTamil: "கடன் அட்டை என்பது ஒரு குறிப்பிட்ட கடன் வரம்பிற்குள் வாடிக்கையாளர்கள் பொருட்களை வாங்கி, பின்னர் வட்டியுடன் அல்லது தவணைகளில் திருப்பிச் செலுத்த அனுமதிக்கும் அட்டையாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch16-2m-3",
    chapterNo: 16,
    chapterName: "Electronic Payment Systems",
    chapterNameTamil: "மின்னணு செலுத்தல் முறைகள்",
    marks: 2,
    type: "short",
    questionText: "What is a Debit Card?",
    questionTextTamil: "பற்று அட்டை (Debit Card) என்றால் என்ன?",
    answer: "A debit card is a payment card that automatically and directly deducts purchase money from the cardholder's existing savings or current bank account in real-time.",
    answerTamil: "பற்று அட்டை என்பது வாடிக்கையாளரின் வங்கிக் கணக்கில் உள்ள பணத்திலிருந்து நேரடியாகவும் உடனடியாகவும் பணத்தை எடுத்துச் செலுத்தும் அட்டையாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch16-2m-4",
    chapterNo: 16,
    chapterName: "Electronic Payment Systems",
    chapterNameTamil: "மின்னணு செலுத்தல் முறைகள்",
    marks: 2,
    type: "short",
    questionText: "What is an E-Wallet?",
    questionTextTamil: "மின்-பணப்பை (E-Wallet) என்றால் என்ன?",
    answer: "An E-Wallet (Digital Wallet) is an electronic application on a mobile or computer that safely stores financial cards/funds to execute instant cashless online payments.",
    answerTamil: "மின்-பணப்பை என்பது வங்கி கணக்கு அல்லது அட்டை விவரங்களை பாதுகாப்பாக சேமித்து வைத்து, நொடிப் பொழுதில் பணம் செலுத்த உதவும் மின்னணு பயன்பாடாகும் (எ.கா: Paytm, GPay).",
    isBookBack: true
  },
  {
    id: "ca12-ch16-2m-5",
    chapterNo: 16,
    chapterName: "Electronic Payment Systems",
    chapterNameTamil: "மின்னணு செலுத்தல் முறைகள்",
    marks: 2,
    type: "short",
    questionText: "What is UPI?",
    questionTextTamil: "UPI என்றால் என்ன?",
    answer: "UPI (Unified Payments Interface) is an instant real-time payment system developed by NPCI that facilitates inter-bank peer-to-peer and merchant transactions via mobile devices.",
    answerTamil: "UPI என்பது NPCI ஆல் உருவாக்கப்பட்ட உடனடி நிகழ்நேர கட்டண முறையாகும். இது மொபைல் மூலம் ஒரு வங்கிக் கணக்கிலிருந்து மற்றொரு வங்கிக் கணக்கிற்கு எளிதாக பணம் அனுப்ப உதவுகிறது.",
    isBookBack: true
  }
];

const ch16_3m: Question[] = [
  {
    id: "ca12-ch16-3m-1",
    chapterNo: 16,
    chapterName: "Electronic Payment Systems",
    chapterNameTamil: "மின்னணு செலுத்தல் முறைகள்",
    marks: 3,
    type: "brief",
    questionText: "Differentiate Credit Card and Debit Card.",
    questionTextTamil: "கடன் அட்டை மற்றும் பற்று அட்டை ஆகியவற்றை வேறுபடுத்துக.",
    answer: "1. Credit Card: Operates on borrowed money (\"Buy Now, Pay Later\") up to a set limit; incurs interest if balance is unpaid.\n2. Debit Card: Deducts funds immediately from the user's available bank deposit (\"Pay Now\"); no interest or loan debt is incurred.",
    answerTamil: "1. கடன் அட்டை (Credit Card): கடன் வரம்பில் பொருட்கள் வாங்கலாம் (\"இப்போது வாங்கி பின் செலுத்தலாம்\"); நிலுவைத் தொகைக்கு வட்டி உண்டு.\n2. பற்று அட்டை (Debit Card): சேமிப்புக் கணக்கில் உள்ள பணத்திலிருந்து மட்டுமே செலவழிக்க முடியும்; வட்டி கிடையாது.",
    isBookBack: true
  },
  {
    id: "ca12-ch16-3m-2",
    chapterNo: 16,
    chapterName: "Electronic Payment Systems",
    chapterNameTamil: "மின்னணு செலுத்தல் முறைகள்",
    marks: 3,
    type: "brief",
    questionText: "Differentiate NEFT and RTGS.",
    questionTextTamil: "NEFT மற்றும் RTGS ஆகியவற்றை வேறுபடுத்துக.",
    answer: "1. NEFT (National Electronic Funds Transfer): Transfers are settled in half-hourly batches; suitable for any transaction value without minimum limits.\n2. RTGS (Real Time Gross Settlement): Real-time continuous order-by-order gross settlement without batch delay; designed for high-value transfers (minimum ₹2 Lakhs).",
    answerTamil: "1. NEFT: அரை மணி நேர தொகுப்புகளாக நிதி தீர்வு செய்யப்படும்; குறைந்தபட்ச வரம்பு இல்லை.\n2. RTGS: தாமதமின்றி நிகழ்நேரத்தில் உடனடியாக தீர்வு செய்யப்படும்; அதிக மதிப்புடைய பரிவர்த்தனைகளுக்கு மட்டுமே (குறைந்தபட்சம் ₹2 லட்சம்).",
    isBookBack: true
  },
  {
    id: "ca12-ch16-3m-3",
    chapterNo: 16,
    chapterName: "Electronic Payment Systems",
    chapterNameTamil: "மின்னணு செலுத்தல் முறைகள்",
    marks: 3,
    type: "brief",
    questionText: "What is ECS (Electronic Clearing Service)? Explain its two types.",
    questionTextTamil: "ECS என்றால் என்ன? அதன் இரண்டு வகைகளை விளக்குக.",
    answer: "ECS is an electronic mode for repetitive bulk payments/collections. Types:\n1. ECS Credit: One debtor to many beneficiaries (e.g., salary, dividend, pension payouts).\n2. ECS Debit: Many debtors to one institution (e.g., utility bills, insurance premiums, loan EMIs).",
    answerTamil: "ECS என்பது மொத்த நிதிப் பரிமாற்றங்களுக்கான மின்னணு அமைப்பாகும். வகைகள்:\n1. ECS Credit: ஒரு நிறுவனத்திலிருந்து பலருக்கு பணம் அனுப்புதல் (எ.கா: சம்பளம், ஓய்வூதியம்).\n2. ECS Debit: பல வாடிக்கையாளர்களிடமிருந்து ஒரு நிறுவனம் பணம் பெறுதல் (எ.கா: மின் கட்டணம், EMI).",
    isBookBack: true
  },
  {
    id: "ca12-ch16-3m-4",
    chapterNo: 16,
    chapterName: "Electronic Payment Systems",
    chapterNameTamil: "மின்னணு செலுத்தல் முறைகள்",
    marks: 3,
    type: "brief",
    questionText: "What are the advantages of Electronic Payment Systems?",
    questionTextTamil: "மின்னணு செலுத்தல் முறையின் நன்மைகள் யாவை?",
    answer: "Advantages:\n1. 24x7 instant cashless convenience from any location.\n2. Lower processing costs and paperless accounting.\n3. Transparent audit trail minimizing physical cash theft and counterfeit currencies.",
    answerTamil: "நன்மைகள்:\n1. 24 மணி நேரமும் எங்கிருந்தும் எளிதாக பணமில்லா பரிவர்த்தனை செய்யும் வசதி.\n2. குறைந்த பரிவர்த்தனை செலவு மற்றும் காகிதமற்ற கணக்கியல்.\n3. வெளிப்படையான கணக்கு மற்றும் கள்ளநோட்டு/பணத் திருட்டு அபாயம் இன்மை.",
    isBookBack: true
  },
  {
    id: "ca12-ch16-3m-5",
    chapterNo: 16,
    chapterName: "Electronic Payment Systems",
    chapterNameTamil: "மின்னணு செலுத்தல் முறைகள்",
    marks: 3,
    type: "brief",
    questionText: "Explain the role of a Payment Gateway in E-Commerce.",
    questionTextTamil: "மின்-வணிகத்தில் கட்டண நுழைவாயிலின் (Payment Gateway) பங்கை விளக்குக.",
    answer: "A Payment Gateway acts as a secure encrypted intermediary between an e-commerce website and payment processors/banks, verifying card validity, authorizing charges, and ensuring secure fund transfers.",
    answerTamil: "கட்டண நுழைவாயில் என்பது வணிக வலைத்தளத்திற்கும் வாடிக்கையாளரின் வங்கிக்கும் இடையே பாதுகாப்பான குறியாக்கப்பட்ட பாலமாக செயல்பட்டு, கட்டண அங்கீகாரத்தை நிறைவேற்றுகிறது.",
    isBookBack: true
  }
];

const ch16_5m: Question[] = [
  {
    id: "ca12-ch16-5m-1",
    chapterNo: 16,
    chapterName: "Electronic Payment Systems",
    chapterNameTamil: "மின்னணு செலுத்தல் முறைகள்",
    marks: 5,
    type: "essay",
    questionText: "Explain the various types of Electronic Payment Systems in detail.",
    questionTextTamil: "பல்வேறு வகையான மின்னணு செலுத்தல் முறைகளை விரிவாக விளக்குக.",
    answer: "Types of Electronic Payment Systems (EPS):\n\n1. Card-based Payments:\n- Credit Cards: Instant credit revolving line with monthly statements.\n- Debit Cards: Direct debit from user's current account balance.\n- Stored-value / Smart Cards: Prepaid cards with embedded microchips.\n\n2. Electronic Fund Transfers:\n- NEFT: Batched settlements for general transfers.\n- RTGS: Real-time gross settlement for high-value transactions (> ₹2 Lakhs).\n- IMPS: 24/7 instant interbank mobile payment.\n\n3. Mobile & Unified Payments:\n- UPI: Instant mobile fund transfers using Virtual Payment Addresses (VPA) and QR codes.\n- E-Wallets: Digital prepaid wallets (GPay, PhonePe, Paytm).\n- Internet / Net Banking: Direct account login transfers.",
    answerTamil: "மின்னணு செலுத்தல் முறைகளின் வகைகள்:\n\n1. அட்டை அடிப்படையிலான செலுத்துதல்கள்:\n- கடன் அட்டை (Credit Card): கடன் வரம்பில் பொருட்கள் வாங்கும் வசதி.\n- பற்று அட்டை (Debit Card): வங்கிக் கணக்கிலிருந்து நேரடியாகப் பணம் கழித்தல்.\n- ஸ்மார்ட் கார்டுகள்: சிப் பொருத்தப்பட்ட முன்பணம் செலுத்திய அட்டைகள்.\n\n2. மின்னணு நிதி பரிமாற்றங்கள்:\n- NEFT: தொகுதி வாரியான பரிவர்த்தனை.\n- RTGS: ₹2 லட்சத்திற்கு மேற்பட்ட பெரிய தொகைக்கான உடனடி தீர்வு.\n- IMPS: 24 மணி நேர உடனடி மொபைல் நிதி பரிமாற்றம்.\n\n3. மொபைல் மற்றும் டிஜிட்டல் முறைகள்:\n- UPI: VPA மற்றும் QR குறியீடு மூலம் உடனடி பரிவர்த்தனை.\n- மின்-பணப்பைகள் (E-Wallets): Paytm, Google Pay போன்றவை.",
    isBookBack: true
  },
  {
    id: "ca12-ch16-5m-2",
    chapterNo: 16,
    chapterName: "Electronic Payment Systems",
    chapterNameTamil: "மின்னணு செலுத்தல் முறைகள்",
    marks: 5,
    type: "essay",
    questionText: "Explain the key participants and step-by-step transaction flow of a Credit Card payment system.",
    questionTextTamil: "கடன் அட்டை செலுத்தல் அமைப்பில் உள்ள முக்கிய பங்கேற்பாளர்கள் மற்றும் பரிவர்த்தனை படிநிலைகளை விளக்குக.",
    answer: "Key Participants in Credit Card System:\n1. Cardholder: Customer possessing the credit card.\n2. Merchant: E-commerce seller accepting card payments.\n3. Acquiring Bank (Merchant's Bank): Processes merchant transactions.\n4. Credit Card Network: Visa, MasterCard, RuPay switching network.\n5. Issuing Bank (Customer's Bank): Issued the card and extends credit line.\n\nTransaction Steps:\n1. Authorization: Cardholder submits details at merchant checkout.\n2. Processing: Payment gateway encrypts and routes request through network to Issuing Bank.\n3. Approval: Issuing bank validates credit limit and sends approval code.\n4. Settlement: Funds transferred from Issuing bank to Acquiring bank and credited to merchant.",
    answerTamil: "கடன் அட்டை அமைப்பின் பங்கேற்பாளர்கள்:\n1. கார்டுதாரர் (Cardholder): அட்டை வைத்திருக்கும் வாடிக்கையாளர்.\n2. வணிகர் (Merchant): பணம் பெறும் விற்பனையாளர்.\n3. ஏற்கும் வங்கி (Acquiring Bank): வணிகரின் வங்கிக் கணக்கு.\n4. கார்டு நெட்வொர்க்: Visa, MasterCard, RuPay போன்றவை.\n5. வழங்கிய வங்கி (Issuing Bank): வாடிக்கையாளருக்கு அட்டை வழங்கிய வங்கி.\n\nபரிவர்த்தனை படிகள்: வாடிக்கையாளர் கார்டு விவரங்களை உள்ளிட, கேட்வே அதை குறியாக்கம் செய்து அட்டை நெட்வொர்க் வழியாக வங்கிக்கு அனுப்ப, வங்கி ஒப்புதல் வழங்கி தொகையை தீர்வு செய்கிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch16-5m-3",
    chapterNo: 16,
    chapterName: "Electronic Payment Systems",
    chapterNameTamil: "மின்னணு செலுத்தல் முறைகள்",
    marks: 5,
    type: "essay",
    questionText: "Discuss the features and significance of UPI (Unified Payments Interface) in India's digital economy.",
    questionTextTamil: "இந்தியாவின் டிஜிட்டல் பொருளாதாரத்தில் UPI (Unified Payments Interface) முறையின் சிறப்பம்சங்கள் மற்றும் முக்கியத்துவத்தை விவாதிக்கவும்.",
    answer: "Features and Significance of UPI:\n\n1. Instant Real-Time Transfer: Operates 24x7x365 instantaneously without banking holidays.\n2. Virtual Payment Address (VPA): No need to disclose confidential bank account numbers or IFSC codes; uses simple IDs like username@upi.\n3. Single Mobile Application: Access multiple bank accounts through a single app (BHIM, GPay, PhonePe).\n4. QR Code Scanning: Instant offline retail point-of-sale payments via Bharat QR codes.\n5. Two-Factor Authentication: Secured by device binding and confidential 4-6 digit UPI PIN.\n6. Economic Impact: Propelled India to global leadership in digital micro-transactions, eliminating cash handling overheads.",
    answerTamil: "UPI-ன் சிறப்பம்சங்கள் மற்றும் முக்கியத்துவம்:\n\n1. உடனடி நிகழ்நேர பரிமாற்றம்: விடுமுறை நாட்களிலும் 24x7 உடனடியாக இயங்கும்.\n2. மெய்நிகர் கட்டண முகவரி (VPA): வங்கிக் கணக்கு எண், IFSC தேவையின்றி எளிய VPA ஐடி மூலம் பரிமாறலாம்.\n3. ஒற்றை மொபைல் செயலி: ஒரே செயலியில் பல வங்கிக் கணக்குகளை இணைக்கலாம்.\n4. QR குறியீடு ஸ்கேனிங்: கடைகளில் விரைவாக ஸ்கேன் செய்து பணம் செலுத்தும் வசதி.\n5. இரண்டு காரணி பாதுகாப்பு: மொபைல் சாதனம் மற்றும் இரகசிய UPI பின் (PIN) மூலம் பாதுகாப்பு.\n6. பொருளாதார தாக்கம்: சில்லறை பணப்பரிவர்த்தனைகளில் இந்தியாவை உலக அளவில் முதலிடத்திற்கு கொண்டு சென்றுள்ளது.",
    isBookBack: true
  },
  {
    id: "ca12-ch16-5m-4",
    chapterNo: 16,
    chapterName: "Electronic Payment Systems",
    chapterNameTamil: "மின்னணு செலுத்தல் முறைகள்",
    marks: 5,
    type: "essay",
    questionText: "Explain the risks and security mechanisms associated with Electronic Payment Systems.",
    questionTextTamil: "மின்னணு செலுத்தல் முறைகளில் உள்ள அபாயங்கள் மற்றும் அவற்றின் பாதுகாப்பு வழிமுறைகளை விளக்குக.",
    answer: "Risks in Electronic Payments:\n1. Phishing and Social Engineering scams stealing OTPs/credentials.\n2. Card Skimming and Identity Theft.\n3. Malware, spyware, and man-in-the-middle attacks.\n\nSecurity Mechanisms:\n1. SSL / TLS Encryption: Encrypts data in transit over HTTP.\n2. Two-Factor Authentication (2FA): OTP / Biometrics / PIN verification.\n3. Tokenization: Replaces sensitive card numbers with random algorithmic tokens.\n4. CVV & EMV Chip Cards: Prevents counterfeit cloning of magnetic stripes.\n5. Fraud Monitoring Systems: AI algorithms detecting suspicious anomalies in real-time.",
    answerTamil: "மின்னணு செலுத்துதலின் அபாயங்கள்:\n1. ஃபிஷிங் மற்றும் OTP திருட்டு மோசடிகள்.\n2. அட்டை குளோனிங் (Card Skimming) மற்றும் அடையாளத் திருட்டு.\n3. மால்வேர் மற்றும் இணையத் தாக்குதல்கள்.\n\nபாதுகாப்பு வழிமுறைகள்:\n1. SSL/TLS குறியாக்கம்: தரவு பாதுகாப்பாக மறைக்கப்பட்டு கடத்தப்படுகிறது.\n2. இரு காரணி அங்கீகாரம் (2FA): OTP, கைரேகை மற்றும் ரகசிய பின்.\n3. டோக்கனைசேஷன் (Tokenization): அசல் கார்டு எண்களுக்குப் பதிலாக தற்காலிக குறியீடு வழங்கப்படுகிறது.\n4. EMV சிப் மற்றும் CVV: போலி அட்டைகள் உருவாக்குவதைத் தடுக்கிறது.",
    isBookBack: true
  }
];

// ==========================================
// CHAPTER 17: E-Commerce Security Systems (22 questions: 10 1M, 5 2M, 4 3M, 3 5M)
// ==========================================
const ch17_1m: Question[] = [
  {
    id: "ca12-ch17-1m-1",
    chapterNo: 17,
    chapterName: "E-Commerce Security Systems",
    chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 1,
    type: "mcq",
    questionText: "The process of converting plain readable text into unreadable ciphertext is known as _________.",
    questionTextTamil: "வாசிக்கக்கூடிய எளிய உரையை வாசிக்க முடியாத மறைமுக உரையாக மாற்றும் செயல்முறை எது?",
    options: {
      A: "Encryption",
      B: "Decryption",
      C: "Authentication",
      D: "Authorization"
    },
    optionsTamil: {
      A: "குறியாக்கம் (Encryption)",
      B: "குறிவிலக்கம்",
      C: "அங்கீகாரம்",
      D: "அனுமதி"
    },
    correctOption: "A",
    answer: "A) Encryption",
    answerTamil: "A) குறியாக்கம் (Encryption)",
    isBookBack: true
  },
  {
    id: "ca12-ch17-1m-2",
    chapterNo: 17,
    chapterName: "E-Commerce Security Systems",
    chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 1,
    type: "mcq",
    questionText: "The process of restoring ciphertext back to original plaintext is called _________.",
    questionTextTamil: "மறைமுக உரையை மீண்டும் அசல் எளிய உரையாக மாற்றும் செயல்முறை எது?",
    options: {
      A: "Encryption",
      B: "Decryption",
      C: "Hashing",
      D: "Phishing"
    },
    optionsTamil: {
      A: "குறியாக்கம்",
      B: "குறிவிலக்கம் (Decryption)",
      C: "ஹேஷிங்",
      D: "ஃபிஷிங்"
    },
    correctOption: "B",
    answer: "B) Decryption",
    answerTamil: "B) குறிவிலக்கம் (Decryption)",
    isBookBack: true
  },
  {
    id: "ca12-ch17-1m-3",
    chapterNo: 17,
    chapterName: "E-Commerce Security Systems",
    chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which encryption type uses the exact same single secret key for both encryption and decryption?",
    questionTextTamil: "குறியாக்கம் மற்றும் குறிவிலக்கம் இரண்டிற்கும் ஒரே ஒரு இரகசியத் திறவுகோலைப் பயன்படுத்தும் முறை எது?",
    options: {
      A: "Symmetric Encryption",
      B: "Asymmetric Encryption",
      C: "Public Key Cryptography",
      D: "Digital Certificate"
    },
    optionsTamil: {
      A: "சமச்சீர் குறியாக்கம் (Symmetric Encryption)",
      B: "சமச்சீரற்ற குறியாக்கம்",
      C: "பொதுத் திறவுகோல் முறை",
      D: "டிஜிட்டல் சான்றிதழ்"
    },
    correctOption: "A",
    answer: "A) Symmetric Encryption",
    answerTamil: "A) சமச்சீர் குறியாக்கம் (Symmetric Encryption)",
    isBookBack: true
  },
  {
    id: "ca12-ch17-1m-4",
    chapterNo: 17,
    chapterName: "E-Commerce Security Systems",
    chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 1,
    type: "mcq",
    questionText: "Asymmetric encryption uses a mathematically linked pair of keys known as _________.",
    questionTextTamil: "சமச்சீரற்ற குறியாக்கம் பயன்படுத்தும் ஜோடி திறவுகோல்கள் எவை?",
    options: {
      A: "Public key and Private key",
      B: "Master key and Slave key",
      C: "Open key and Closed key",
      D: "Local key and Remote key"
    },
    optionsTamil: {
      A: "பொதுத் திறவுகோல் மற்றும் தனியார் திறவுகோல்",
      B: "முதன்மை மற்றும் துணைத் திறவுகோல்",
      C: "திறந்த மற்றும் மூடிய திறவுகோல்",
      D: "உள்ளூர் மற்றும் தொலைத் திறவுகோல்"
    },
    correctOption: "A",
    answer: "A) Public key and Private key",
    answerTamil: "A) பொதுத் திறவுகோல் மற்றும் தனியார் திறவுகோல்",
    isBookBack: true
  },
  {
    id: "ca12-ch17-1m-5",
    chapterNo: 17,
    chapterName: "E-Commerce Security Systems",
    chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 1,
    type: "mcq",
    questionText: "What does SSL stand for in web security?",
    questionTextTamil: "இணையப் பாதுகாப்பில் SSL என்பதன் விரிவாக்கம் என்ன?",
    options: {
      A: "Secure Sockets Layer",
      B: "System Security Layer",
      C: "Server Socket Link",
      D: "Safe Socket Lock"
    },
    optionsTamil: {
      A: "Secure Sockets Layer",
      B: "System Security Layer",
      C: "Server Socket Link",
      D: "Safe Socket Lock"
    },
    correctOption: "A",
    answer: "A) Secure Sockets Layer",
    answerTamil: "A) Secure Sockets Layer",
    isBookBack: true
  },
  {
    id: "ca12-ch17-1m-6",
    chapterNo: 17,
    chapterName: "E-Commerce Security Systems",
    chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 1,
    type: "mcq",
    questionText: "A mathematical scheme for demonstrating the authenticity and non-repudiation of digital messages is a(n) _________.",
    questionTextTamil: "மின்னணு செய்திகளின் நம்பகத்தன்மை மற்றும் மறுக்கமுடியாமையை உறுதி செய்யும் கணிதத் திட்டம் எது?",
    options: {
      A: "Digital Signature",
      B: "Barcode",
      C: "Serial Number",
      D: "Watermark"
    },
    optionsTamil: {
      A: "மின்னணு கையொப்பம் (Digital Signature)",
      B: "பார்கோடு",
      C: "வரிசை எண்",
      D: "நீர்க்குறி"
    },
    correctOption: "A",
    answer: "A) Digital Signature",
    answerTamil: "A) மின்னணு கையொப்பம் (Digital Signature)",
    isBookBack: true
  },
  {
    id: "ca12-ch17-1m-7",
    chapterNo: 17,
    chapterName: "E-Commerce Security Systems",
    chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which electronic document binds a person's public key to their identity, issued by a trusted CA?",
    questionTextTamil: "அங்கீகரிக்கப்பட்ட அமைப்பால் (CA) ஒருவரின் பொதுத் திறவுகோலை அவரது அடையாளத்துடன் இணைத்து வழங்கப்படும் மின்னணு ஆவணம் எது?",
    options: {
      A: "Digital Certificate",
      B: "Identity Card",
      C: "Driving License",
      D: "PAN Card"
    },
    optionsTamil: {
      A: "டிஜிட்டல் சான்றிதழ் (Digital Certificate)",
      B: "அடையாள அட்டை",
      C: "ஓட்டுநர் உரிமம்",
      D: "பான் கார்டு"
    },
    correctOption: "A",
    answer: "A) Digital Certificate",
    answerTamil: "A) டிஜிட்டல் சான்றிதழ் (Digital Certificate)",
    isBookBack: true
  },
  {
    id: "ca12-ch17-1m-8",
    chapterNo: 17,
    chapterName: "E-Commerce Security Systems",
    chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 1,
    type: "mcq",
    questionText: "What does PGP stand for in email encryption?",
    questionTextTamil: "மின்னஞ்சல் குறியாக்கத்தில் PGP என்பதன் விரிவாக்கம் என்ன?",
    options: {
      A: "Pretty Good Privacy",
      B: "Public Gateway Protocol",
      C: "Private Guard Protection",
      D: "Packet Generic Protocol"
    },
    optionsTamil: {
      A: "Pretty Good Privacy",
      B: "Public Gateway Protocol",
      C: "Private Guard Protection",
      D: "Packet Generic Protocol"
    },
    correctOption: "A",
    answer: "A) Pretty Good Privacy",
    answerTamil: "A) Pretty Good Privacy",
    isBookBack: true
  },
  {
    id: "ca12-ch17-1m-9",
    chapterNo: 17,
    chapterName: "E-Commerce Security Systems",
    chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which security protocol was developed by Visa and MasterCard specifically for securing online bankcard transactions?",
    questionTextTamil: "ஆன்லைன் வங்கி அட்டை பரிவர்த்தனைகளைப் பாதுகாக்க Visa மற்றும் MasterCard இணைந்து உருவாக்கிய நெறிமுறை எது?",
    options: {
      A: "SET (Secure Electronic Transaction)",
      B: "FTP",
      C: "SNMP",
      D: "TELNET"
    },
    optionsTamil: {
      A: "SET (Secure Electronic Transaction)",
      B: "FTP",
      C: "SNMP",
      D: "TELNET"
    },
    correctOption: "A",
    answer: "A) SET (Secure Electronic Transaction)",
    answerTamil: "A) SET (Secure Electronic Transaction)",
    isBookBack: true
  },
  {
    id: "ca12-ch17-1m-10",
    chapterNo: 17,
    chapterName: "E-Commerce Security Systems",
    chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 1,
    type: "mcq",
    questionText: "The principle ensuring that neither sender nor receiver can deny having sent or received a message is _________.",
    questionTextTamil: "அனுப்பியவரோ அல்லது பெற்றவரோ செய்தியை அனுப்பவில்லை அல்லது பெறவில்லை என்று மறுக்க முடியாத பாதுகாப்பு தத்துவம் எது?",
    options: {
      A: "Non-repudiation",
      B: "Confidentiality",
      C: "Integrity",
      D: "Availability"
    },
    optionsTamil: {
      A: "மறுக்கமுடியாமை (Non-repudiation)",
      B: "ரகசியத்தன்மை",
      C: "ஒருமைப்பாடு",
      D: "கிடைக்கும் தன்மை"
    },
    correctOption: "A",
    answer: "A) Non-repudiation",
    answerTamil: "A) மறுக்கமுடியாமை (Non-repudiation)",
    isBookBack: true
  }
];

const ch17_2m: Question[] = [
  {
    id: "ca12-ch17-2m-1",
    chapterNo: 17,
    chapterName: "E-Commerce Security Systems",
    chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 2,
    type: "short",
    questionText: "What is Cryptography?",
    questionTextTamil: "கிரிப்டோகிராபி (மறைsecret குறியீட்டியல்) என்றால் என்ன?",
    answer: "Cryptography is the science and art of protecting confidential information by transforming readable text into unintelligible ciphertext using mathematical algorithms.",
    answerTamil: "கிரிப்டோகிராபி என்பது ரகசியத் தகவல்களை கணித வழிமுறைகள் மூலம் வாசிக்க முடியாத மறைமுக உரையாக மாற்றி பாதுகாக்கும் அறிவியல் கலையாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch17-2m-2",
    chapterNo: 17,
    chapterName: "E-Commerce Security Systems",
    chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 2,
    type: "short",
    questionText: "What is Encryption and Decryption?",
    questionTextTamil: "குறியாக்கம் (Encryption) மற்றும் குறிவிலக்கம் (Decryption) என்றால் என்ன?",
    answer: "Encryption converts readable Plaintext into encrypted Ciphertext. Decryption is the reverse process that converts Ciphertext back into original readable Plaintext.",
    answerTamil: "குறியாக்கம் என்பது எளிய உரையை மறைமுக உரையாக மாற்றுவதாகும். குறிவிலக்கம் என்பது மறைமுக உரையை மீண்டும் அசல் எளிய உரையாக மாற்றுவதாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch17-2m-3",
    chapterNo: 17,
    chapterName: "E-Commerce Security Systems",
    chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 2,
    type: "short",
    questionText: "What is Symmetric Key Encryption?",
    questionTextTamil: "சமச்சீர் திறவுகோல் குறியாக்கம் என்றால் என்ன?",
    answer: "Symmetric key encryption uses a single shared secret key for both encrypting and decrypting data between communicating parties (e.g., DES, AES).",
    answerTamil: "சமச்சீர் குறியாக்கம் என்பது தகவலை குறியாக்கம் செய்வதற்கும் குறிவிலக்கம் செய்வதற்கும் ஒரே ஒரு இரகசியத் திறவுகோலைப் பயன்படுத்தும் முறையாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch17-2m-4",
    chapterNo: 17,
    chapterName: "E-Commerce Security Systems",
    chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 2,
    type: "short",
    questionText: "What is Asymmetric Key Encryption?",
    questionTextTamil: "சமச்சீரற்ற திறவுகோல் குறியாக்கம் என்றால் என்ன?",
    answer: "Asymmetric encryption uses a paired set of keys: a Public Key (distributed openly for encryption) and a Private Key (kept strictly confidential for decryption; e.g., RSA).",
    answerTamil: "சமச்சீரற்ற குறியாக்கம் என்பது ஒரு ஜோடி திறவுகோல்களைப் பயன்படுத்துகிறது: குறியாக்கம் செய்ய பொதுத் திறவுகோல் மற்றும் குறிவிலக்க தனியார் திறவுகோல் (எ.கா: RSA).",
    isBookBack: true
  },
  {
    id: "ca12-ch17-2m-5",
    chapterNo: 17,
    chapterName: "E-Commerce Security Systems",
    chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 2,
    type: "short",
    questionText: "What is a Digital Signature?",
    questionTextTamil: "மின்னணு கையொப்பம் (Digital Signature) என்றால் என்ன?",
    answer: "A digital signature is a mathematical cryptographic mechanism that verifies the authentic identity of the sender and guarantees the integrity and non-repudiation of a digital document.",
    answerTamil: "மின்னணு கையொப்பம் என்பது ஆவணத்தை அனுப்பியவரின் அடையாளத்தை உறுதிப்படுத்தவும், ஆவணம் மாற்றப்படவில்லை என்பதை நிரூபிக்கவும் பயன்படும் கணித குறியீட்டு முறையாகும்.",
    isBookBack: true
  }
];

const ch17_3m: Question[] = [
  {
    id: "ca12-ch17-3m-1",
    chapterNo: 17,
    chapterName: "E-Commerce Security Systems",
    chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 3,
    type: "brief",
    questionText: "Differentiate Symmetric and Asymmetric Key Encryption.",
    questionTextTamil: "சமச்சீர் மற்றும் சமச்சீரற்ற திறவுகோல் குறியாக்கத்தை வேறுபடுத்துக.",
    answer: "1. Symmetric: Uses one single identical key for encryption and decryption; fast speed; key distribution is a challenge.\n2. Asymmetric: Uses two separate mathematically linked keys (Public & Private); slower computational speed; highly secure key management.",
    answerTamil: "1. சமச்சீர்: குறியாக்கம் மற்றும் குறிவிலக்கம் இரண்டிற்கும் ஒரே சாவி; அதிவேகமானது; சாவியைப் பகிர்வதில் சவால் உண்டு.\n2. சமச்சீரற்ற: பொது மற்றும் தனியார் என இரு வெவ்வேறு சாவிகள்; அதிக பாதுகாப்பு கொண்டது.",
    isBookBack: true
  },
  {
    id: "ca12-ch17-3m-2",
    chapterNo: 17,
    chapterName: "E-Commerce Security Systems",
    chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 3,
    type: "brief",
    questionText: "What are the core security principles of E-Commerce?",
    questionTextTamil: "மின்-வணிகத்தின் முக்கிய பாதுகாப்பு தத்துவங்கள் யாவை?",
    answer: "The core principles are:\n1. Confidentiality: Protecting data from unauthorized viewing.\n2. Integrity: Ensuring data is not altered in transit.\n3. Authentication: Verifying user/server genuine identities.\n4. Non-repudiation: Preventing parties from denying valid transactions.",
    answerTamil: "முக்கிய தத்துவங்கள்:\n1. ரகசியத்தன்மை (Confidentiality): பிறர் பார்க்காமல் பாதுகாத்தல்.\n2. ஒருமைப்பாடு (Integrity): தகவல்கள் இடையில் மாற்றப்படாமல் இருத்தல்.\n3. அங்கீகாரம் (Authentication): உண்மையான அடையாளத்தை சரிபார்த்தல்.\n4. மறுக்கமுடியாமை (Non-repudiation): பரிவர்த்தனையை மறுக்க இயலாமை.",
    isBookBack: true
  },
  {
    id: "ca12-ch17-3m-3",
    chapterNo: 17,
    chapterName: "E-Commerce Security Systems",
    chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 3,
    type: "brief",
    questionText: "What is a Digital Certificate? What details does it contain?",
    questionTextTamil: "டிஜிட்டல் சான்றிதழ் என்றால் என்ன? அதில் இடம்பெறும் விவரங்கள் யாவை?",
    answer: "A digital certificate is an electronic passport issued by a Certification Authority (CA). It contains:\n- Owner's name and organization\n- Owner's public key\n- Certificate serial number and expiration date\n- Digital signature of the issuing CA.",
    answerTamil: "டிஜிட்டல் சான்றிதழ் என்பது சான்றளிக்கும் அதிகாரியால் (CA) வழங்கப்படும் மின்னணு பாஸ்போர்ட் ஆகும். இதில் உரிமையாளர் பெயர், பொதுத் திறவுகோல், காலாவதி தேதி மற்றும் CA-ன் கையொப்பம் இருக்கும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch17-3m-4",
    chapterNo: 17,
    chapterName: "E-Commerce Security Systems",
    chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 3,
    type: "brief",
    questionText: "Explain Secure Electronic Transaction (SET) protocol.",
    questionTextTamil: "SET (Secure Electronic Transaction) நெறிமுறையை விளக்குக.",
    answer: "SET is a communications protocol designed by Visa and MasterCard using digital certificates and cryptography to secure credit card transactions over open networks without exposing card numbers to merchants.",
    answerTamil: "SET என்பது ஆன்லைனில் கடன் அட்டை மூலம் பணம் செலுத்தும் போது கார்டு விவரங்களை வணிகருக்குக் காட்டாமல் பாதுகாப்பாக வங்கிக்கு அனுப்ப உருவாக்கப்பட்ட நெறிமுறையாகும்.",
    isBookBack: true
  }
];

const ch17_5m: Question[] = [
  {
    id: "ca12-ch17-5m-1",
    chapterNo: 17,
    chapterName: "E-Commerce Security Systems",
    chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 5,
    type: "essay",
    questionText: "Explain in detail Symmetric Key Encryption and Asymmetric Key Encryption with diagrams/examples.",
    questionTextTamil: "சமச்சீர் மற்றும் சமச்சீரற்ற குறியாக்க முறைகளை வரைபட விளக்கத்துடன் விரிவாக விளக்குக.",
    answer: "1. Symmetric Key Encryption (Private Key Cryptography):\n- Uses a single shared key for both encrypting Plaintext into Ciphertext and decrypting Ciphertext into Plaintext.\n- Advantage: Extremely fast computational speed, ideal for bulk file encryption.\n- Examples: DES (Data Encryption Standard), 3DES, AES (Advanced Encryption Standard).\n- Weakness: Securely transmitting the secret key to the receiver without interception.\n\n2. Asymmetric Key Encryption (Public Key Cryptography):\n- Uses two mathematically connected keys:\n  a) Public Key: Shared with everyone; used by sender to encrypt message.\n  b) Private Key: Kept strictly secret by receiver; only this key can decrypt the message.\n- Advantage: Eliminates key transmission risk; provides digital signatures and authentication.\n- Examples: RSA, ECC, Diffie-Hellman algorithms.",
    answerTamil: "1. சமச்சீர் திறவுகோல் குறியாக்கம் (Symmetric):\n- எளிய உரையை குறியாக்கம் செய்யவும், மறைமுக உரையை குறிவிலக்கம் செய்யவும் ஒரே ஒரு பொது இரகசிய சாவியைப் பயன்படுத்துகிறது.\n- நன்மை: மிக அதிக வேகம், பெரிய கோப்புகளை குறியாக்கம் செய்ய சிறந்தது.\n- எடுத்துக்காட்டுகள்: DES, AES.\n- குறைபாடு: இருவருக்குமிடையே சாவியைப் பகிர்வது கடினம்.\n\n2. சமச்சீரற்ற திறவுகோல் குறியாக்கம் (Asymmetric):\n- கணிதவியல் ரீதியாக இணைக்கப்பட்ட இரு வெவ்வேறு சாவிகளைப் பயன்படுத்துகிறது:\n  அ) பொதுச் சாவி (Public Key): அனைவருக்கும் பகிரப்படும்; தகவலைப் பூட்டப் பயன்படும்.\n  ஆ) தனியார் சாவி (Private Key): பெறுநரிடம் மட்டுமே ரகசியமாக இருக்கும்; பூட்டைத் திறக்கப் பயன்படும்.\n- நன்மை: சாவியைப் பகிரும் ஆபத்து இல்லை; டிஜிட்டல் கையொப்பத்திற்கு ஏற்றது (எ.கா: RSA).",
    isBookBack: true
  },
  {
    id: "ca12-ch17-5m-2",
    chapterNo: 17,
    chapterName: "E-Commerce Security Systems",
    chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 5,
    type: "essay",
    questionText: "Explain the architecture, working mechanism, and importance of Digital Signatures in E-Commerce.",
    questionTextTamil: "மின்-வணிகத்தில் மின்னணு கையொப்பத்தின் (Digital Signature) கட்டமைப்பு, செயல்படும் விதம் மற்றும் முக்கியத்துவத்தை விளக்குக.",
    answer: "Digital Signature Mechanism:\n\n1. Signature Generation (Signing at Sender End):\n- Original message is processed through a cryptographic Hash Function (e.g., SHA-256) to produce a fixed-length Message Digest.\n- The sender encrypts this Message Digest with their own Private Key to create the Digital Signature.\n- The message and Digital Signature are transmitted together.\n\n2. Signature Verification (at Receiver End):\n- Receiver computes a new hash digest of the incoming message.\n- Receiver decrypts the attached Digital Signature using the sender's Public Key to retrieve the original hash digest.\n- If both hash digests match exactly, the message is confirmed authentic and unmodified.\n\n3. Core Security Pillars Provided:\n- Authentication (verifies sender identity)\n- Integrity (detects message tampering)\n- Non-repudiation (sender cannot deny signing).",
    answerTamil: "மின்னணு கையொப்பம் செயல்படும் வழிமுறை:\n\n1. கையொப்பம் உருவாக்குதல் (அனுப்புநர்):\n- அசல் செய்தி ஹாஷிங் (Hashing) மூலம் சுருக்கப்பட்டு மெசேஜ் டைஜஸ்ட் உருவாக்கப்படுகிறது.\n- அனுப்புநர் தனது சொந்த தனியார் சாவியைக் (Private Key) கொண்டு இந்த சுருக்கத்தை குறியாக்கம் செய்து மின்னணு கையொப்பத்தை உருவாக்குகிறார்.\n\n2. கையொப்பத்தை சரிபார்த்தல் (பெறுநர்):\n- பெறுநர் பெறப்பட்ட செய்தியிலிருந்து புதிய ஹாஷ் சுருக்கத்தை கணக்கிடுகிறார்.\n- பின் அனுப்புநரின் பொதுச் சாவியைக் (Public Key) கொண்டு கையொப்பத்தை குறிவிலக்கி அசல் ஹாஷ் சுருக்கத்தைப் பெறுகிறார்.\n- இரண்டும் சமமாக இருந்தால் செய்தி உண்மை மற்றும் மாற்றப்படாதது என உறுதியாகிறது.\n\nமுக்கிய நன்மைகள்: அனுப்புநரின் உண்மையான அடையாளம், செய்தியின் ஒருமைப்பாடு மற்றும் மறுக்கமுடியாமை உறுதி செய்யப்படுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch17-5m-3",
    chapterNo: 17,
    chapterName: "E-Commerce Security Systems",
    chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 5,
    type: "essay",
    questionText: "Explain the security protocols used in E-Commerce (SSL/TLS, SET, S/MIME, PGP).",
    questionTextTamil: "மின்-வணிகத்தில் பயன்படுத்தப்படும் பாதுகாப்பு நெறிமுறைகளை (SSL/TLS, SET, S/MIME, PGP) விரிவாக விளக்குக.",
    answer: "Security Protocols in E-Commerce:\n\n1. SSL / TLS (Secure Sockets Layer / Transport Layer Security):\n- Encrypts web traffic between browser and web server (HTTPS on port 443).\n- Uses hybrid encryption: asymmetric handshake to negotiate symmetric session keys.\n\n2. SET (Secure Electronic Transaction):\n- Developed by Visa and MasterCard for credit card security.\n- Uses dual signatures ensuring merchants cannot view card numbers and banks cannot view order item lists.\n\n3. S/MIME (Secure/Multipurpose Internet Mail Extensions):\n- Public-key encryption and signing protocol for email messages and MIME attachments.\n\n4. PGP (Pretty Good Privacy):\n- Hybrid cryptographic program providing cryptographic privacy and authentication for email messages and data files.",
    answerTamil: "மின்-வணிக பாதுகாப்பு நெறிமுறைகள்:\n\n1. SSL / TLS:\n- உலாவி மற்றும் சேவையகத்திற்கு இடையே செல்லும் இணையத் தரவை குறியாக்கம் செய்கிறது (HTTPS).\n\n2. SET (Secure Electronic Transaction):\n- விசா மற்றும் மாஸ்டர்கார்டு இணைந்து உருவாக்கியது; வங்கி அட்டை விவரங்களை வணிகரிடமிருந்து மறைத்து பாதுகாக்கிறது.\n\n3. S/MIME:\n- மின்னஞ்சல் மற்றும் இணைப்புக் கோப்புகளை பாதுகாப்பாக குறியாக்கம் செய்யும் நெறிமுறை.\n\n4. PGP (Pretty Good Privacy):\n- மின்னஞ்சல்கள் மற்றும் கோப்புகளைப் பாதுகாக்க சமச்சீர் மற்றும் சமச்சீரற்ற குறியாக்கத்தை இணைத்துப் பயன்படுத்தும் பிரபல நிரலாகும்.",
    isBookBack: true
  }
];

// ==========================================
// CHAPTER 18: EDI-Electronic Data Interchange (24 questions: 8 1M, 7 2M, 5 3M, 4 5M)
// ==========================================
const ch18_1m: Question[] = [
  {
    id: "ca12-ch18-1m-1",
    chapterNo: 18,
    chapterName: "EDI-Electronic Data Interchange",
    chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 1,
    type: "mcq",
    questionText: "EDI stands for _________.",
    questionTextTamil: "EDI என்பதன் விரிவாக்கம் என்ன?",
    options: {
      A: "Electronic Data Interchange",
      B: "Electronic Device Interface",
      C: "Electronic Document Integration",
      D: "Encrypted Data Information"
    },
    optionsTamil: {
      A: "Electronic Data Interchange",
      B: "Electronic Device Interface",
      C: "Electronic Document Integration",
      D: "Encrypted Data Information"
    },
    correctOption: "A",
    answer: "A) Electronic Data Interchange",
    answerTamil: "A) Electronic Data Interchange",
    isBookBack: true
  },
  {
    id: "ca12-ch18-1m-2",
    chapterNo: 18,
    chapterName: "EDI-Electronic Data Interchange",
    chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 1,
    type: "mcq",
    questionText: "Who is widely recognized as the 'Father of EDI'?",
    questionTextTamil: "EDI-ன் தந்தை எனப் போற்றப்படுபவர் யார்?",
    options: {
      A: "Ed Guilbert",
      B: "Tim Berners-Lee",
      C: "Charles Babbage",
      D: "Linus Torvalds"
    },
    optionsTamil: {
      A: "எட் கில்பர்ட் (Ed Guilbert)",
      B: "டிம் பெர்னர்ஸ்-லீ",
      C: "சார்லஸ் பாபேஜ்",
      D: "லினஸ் டோர்வால்ட்ஸ்"
    },
    correctOption: "A",
    answer: "A) Ed Guilbert",
    answerTamil: "A) எட் கில்பர்ட் (Ed Guilbert)",
    isBookBack: true
  },
  {
    id: "ca12-ch18-1m-3",
    chapterNo: 18,
    chapterName: "EDI-Electronic Data Interchange",
    chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 1,
    type: "mcq",
    questionText: "Which EDI standard was developed under the United Nations (UN) for global international trade?",
    questionTextTamil: "சர்வதேச வர்த்தகத்திற்காக ஐக்கிய நாடுகள் சபையால் (UN) உருவாக்கப்பட்ட EDI தரநிலை எது?",
    options: {
      A: "UN/EDIFACT",
      B: "ANSI X12",
      C: "TRADACOMS",
      D: "ODETTE"
    },
    optionsTamil: {
      A: "UN/EDIFACT",
      B: "ANSI X12",
      C: "TRADACOMS",
      D: "ODETTE"
    },
    correctOption: "A",
    answer: "A) UN/EDIFACT",
    answerTamil: "A) UN/EDIFACT",
    isBookBack: true
  },
  {
    id: "ca12-ch18-1m-4",
    chapterNo: 18,
    chapterName: "EDI-Electronic Data Interchange",
    chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 1,
    type: "mcq",
    questionText: "Which EDI standard is predominantly used across North American industries?",
    questionTextTamil: "வட அமெரிக்க நாடுகளில் பரவலாகப் பயன்படும் EDI தரநிலை எது?",
    options: {
      A: "ANSI X12",
      B: "TRADACOMS",
      C: "ODETTE",
      D: "VDA"
    },
    optionsTamil: {
      A: "ANSI ASC X12",
      B: "TRADACOMS",
      C: "ODETTE",
      D: "VDA"
    },
    correctOption: "A",
    answer: "A) ANSI X12",
    answerTamil: "A) ANSI ASC X12",
    isBookBack: true
  },
  {
    id: "ca12-ch18-1m-5",
    chapterNo: 18,
    chapterName: "EDI-Electronic Data Interchange",
    chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 1,
    type: "mcq",
    questionText: "Which EDI standard was developed specifically for the retail sector in the United Kingdom?",
    questionTextTamil: "இங்கிலாந்தின் சில்லறை வர்த்தகத்திற்காக உருவாக்கப்பட்ட EDI தரநிலை எது?",
    options: {
      A: "TRADACOMS",
      B: "ANSI X12",
      C: "UN/EDIFACT",
      D: "HIPAA"
    },
    optionsTamil: {
      A: "TRADACOMS",
      B: "ANSI X12",
      C: "UN/EDIFACT",
      D: "HIPAA"
    },
    correctOption: "A",
    answer: "A) TRADACOMS",
    answerTamil: "A) TRADACOMS",
    isBookBack: true
  },
  {
    id: "ca12-ch18-1m-6",
    chapterNo: 18,
    chapterName: "EDI-Electronic Data Interchange",
    chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 1,
    type: "mcq",
    questionText: "What does VAN stand for in EDI telecommunications?",
    questionTextTamil: "EDI தொலைத்தொடர்பில் VAN என்பதன் விரிவாக்கம் என்ன?",
    options: {
      A: "Value Added Network",
      B: "Virtual Access Node",
      C: "Variable Area Network",
      D: "Verified Account Name"
    },
    optionsTamil: {
      A: "மதிப்பு கூட்டப்பட்ட வலையமைப்பு (Value Added Network)",
      B: "Virtual Access Node",
      C: "Variable Area Network",
      D: "Verified Account Name"
    },
    correctOption: "A",
    answer: "A) Value Added Network",
    answerTamil: "A) மதிப்பு கூட்டப்பட்ட வலையமைப்பு (Value Added Network)",
    isBookBack: true
  },
  {
    id: "ca12-ch18-1m-7",
    chapterNo: 18,
    chapterName: "EDI-Electronic Data Interchange",
    chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 1,
    type: "mcq",
    questionText: "In EDIFACT structure, the smallest data component representing a single piece of information is a(n) _________.",
    questionTextTamil: "EDIFACT கட்டமைப்பில் ஒரு தகவலைக் குறிக்கும் மிகச்சிறிய கூறு எது?",
    options: {
      A: "Data Element",
      B: "Segment",
      C: "Interchange",
      D: "Message"
    },
    optionsTamil: {
      A: "தரவுக் கூறு (Data Element)",
      B: "பிரிவு (Segment)",
      C: "பரிமாற்றம் (Interchange)",
      D: "செய்தி (Message)"
    },
    correctOption: "A",
    answer: "A) Data Element",
    answerTamil: "A) தரவுக் கூறு (Data Element)",
    isBookBack: true
  },
  {
    id: "ca12-ch18-1m-8",
    chapterNo: 18,
    chapterName: "EDI-Electronic Data Interchange",
    chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 1,
    type: "mcq",
    questionText: "What is the modern markup language widely used in Web-based EDI alongside JSON?",
    questionTextTamil: "இணைய அடிப்படையிலான EDI-ல் பரவலாகப் பயன்படும் நவீன குறிமுறை மொழி எது?",
    options: {
      A: "XML",
      B: "C++",
      C: "Assembly",
      D: "BASIC"
    },
    optionsTamil: {
      A: "XML (Extensible Markup Language)",
      B: "C++",
      C: "அசெம்பிளி",
      D: "BASIC"
    },
    correctOption: "A",
    answer: "A) XML",
    answerTamil: "A) XML (Extensible Markup Language)",
    isBookBack: true
  }
];

const ch18_2m: Question[] = [
  {
    id: "ca12-ch18-2m-1",
    chapterNo: 18,
    chapterName: "EDI-Electronic Data Interchange",
    chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 2,
    type: "short",
    questionText: "Define EDI (Electronic Data Interchange).",
    questionTextTamil: "மின்னணு தரவு பரிமாற்றம் (EDI) - வரையறுக்கவும்.",
    answer: "EDI is the computer-to-computer electronic transmission of standard structured business documents (invoices, purchase orders, shipping notices) between trading partners without human intervention.",
    answerTamil: "EDI என்பது வணிகக் கூட்டாளர்களுக்கு இடையே மனித தலையீடின்றி கணினிகளுக்கு இடையே தரப்படுத்தப்பட்ட வணிக ஆவணங்களை மின்னணு முறையில் பரிமாறிக்கொள்ளும் அமைப்பாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch18-2m-2",
    chapterNo: 18,
    chapterName: "EDI-Electronic Data Interchange",
    chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 2,
    type: "short",
    questionText: "List any four common business documents exchanged via EDI.",
    questionTextTamil: "EDI மூலம் பரிமாறப்படும் ஏதேனும் நான்கு வணிக ஆவணங்களைக் குறிப்பிடுக.",
    answer: "1. Purchase Orders (PO)\n2. Invoices\n3. Advanced Shipping Notices (ASN)\n4. Payment Confirmations.",
    answerTamil: "1. கொள்முதல் ஆணைகள் (Purchase Orders)\n2. விலைப்பட்டியல்கள் (Invoices)\n3. ஏற்றுமதி அறிவிப்புகள் (Shipping Notices)\n4. கட்டண ஒப்புகைச் சீட்டுகள்.",
    isBookBack: true
  },
  {
    id: "ca12-ch18-2m-3",
    chapterNo: 18,
    chapterName: "EDI-Electronic Data Interchange",
    chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 2,
    type: "short",
    questionText: "What is UN/EDIFACT?",
    questionTextTamil: "UN/EDIFACT என்றால் என்ன?",
    answer: "UN/EDIFACT (United Nations Electronic Data Interchange for Administration, Commerce and Transport) is the international standard governing electronic data interchange globally.",
    answerTamil: "UN/EDIFACT என்பது ஐக்கிய நாடுகள் சபையால் உருவாக்கப்பட்ட சர்வதேச மின்னணு தரவு பரிமாற்றத்திற்கான உலகளாவிய தரநிலையாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch18-2m-4",
    chapterNo: 18,
    chapterName: "EDI-Electronic Data Interchange",
    chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 2,
    type: "short",
    questionText: "What is ANSI ASC X12?",
    questionTextTamil: "ANSI ASC X12 என்றால் என்ன?",
    answer: "ANSI ASC X12 is the primary cross-industry standard developed by the American National Standards Institute for EDI transactions across North America.",
    answerTamil: "ANSI ASC X12 என்பது வட அமெரிக்க நாடுகளில் வணிக பரிவர்த்தனைகளுக்காக உருவாக்கப்பட்ட முன்னணி EDI தரநிலையாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch18-2m-5",
    chapterNo: 18,
    chapterName: "EDI-Electronic Data Interchange",
    chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 2,
    type: "short",
    questionText: "What is a Value Added Network (VAN) in EDI?",
    questionTextTamil: "EDI-ல் மதிப்பு கூட்டப்பட்ட வலையமைப்பு (VAN) என்றால் என்ன?",
    answer: "A Value Added Network (VAN) is a secure third-party private telecommunications network service that routes, audits, and stores EDI transmissions between trading companies.",
    answerTamil: "VAN என்பது வணிக நிறுவனங்களுக்கு இடையே EDI தரவு பரிமாற்றங்களை பாதுகாப்பாக ரூட்டிங் செய்து தபால் பெட்டி போல சேமித்து வழங்கும் தனியார் பிணைய சேவையாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch18-2m-6",
    chapterNo: 18,
    chapterName: "EDI-Electronic Data Interchange",
    chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 2,
    type: "short",
    questionText: "What is Direct EDI (Point-to-Point EDI)?",
    questionTextTamil: "நேரடி EDI (Direct EDI) என்றால் என்ன?",
    answer: "Direct EDI is a point-to-point connection established directly between two business partners over the secure Internet using protocols like AS2 without third-party VAN brokers.",
    answerTamil: "நேரடி EDI என்பது மூன்றாம் நபர் இடைத்தரகர் இன்றி இணையத்தின் வழியே இரு நிறுவனங்களின் கணினிகளை நேரடியாக இணைக்கும் அமைப்பாகும் (எ.கா: AS2).",
    isBookBack: true
  },
  {
    id: "ca12-ch18-2m-7",
    chapterNo: 18,
    chapterName: "EDI-Electronic Data Interchange",
    chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 2,
    type: "short",
    questionText: "What is Web-based EDI?",
    questionTextTamil: "இணைய அடிப்படையிலான EDI (Web-based EDI) என்றால் என்ன?",
    answer: "Web-based EDI allows small businesses to create, transmit, and receive standard EDI documents using simple standard web browser forms without expensive proprietary software.",
    answerTamil: "இணைய அடிப்படையிலான EDI என்பது சிறு வணிகர்கள் அதிக செலவில்லாத எளிய வலை உலாவிகள் மூலம் EDI ஆவணங்களை உருவாக்க மற்றும் அனுப்ப உதவும் அமைப்பாகும்.",
    isBookBack: true
  }
];

const ch18_3m: Question[] = [
  {
    id: "ca12-ch18-3m-1",
    chapterNo: 18,
    chapterName: "EDI-Electronic Data Interchange",
    chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 3,
    type: "brief",
    questionText: "Differentiate Traditional Paper-based Document Exchange and EDI.",
    questionTextTamil: "பாரம்பரிய காகித ஆவண பரிமாற்றம் மற்றும் EDI ஆகியவற்றை வேறுபடுத்துக.",
    answer: "1. Traditional: Requires manual data entry, printing, physical postal/courier shipping; takes days/weeks with high error rates.\n2. EDI: Completely automated electronic computer-to-computer transfer; executes within seconds with zero manual data entry errors.",
    answerTamil: "1. பாரம்பரிய முறை: காகித அச்சு, மனித உள்ளீடு மற்றும் தபால் செலவு; பல நாட்கள் ஆகும்; பிழைகள் ஏற்பட வாய்ப்பு அதிகம்.\n2. EDI: கணினிகளுக்கு இடையே நொடிகளில் தானாக பரிமாற்றம்; காகிதமற்றது; பிழைகள் இல்லாத துல்லியமான பரிமாற்றம்.",
    isBookBack: true
  },
  {
    id: "ca12-ch18-3m-2",
    chapterNo: 18,
    chapterName: "EDI-Electronic Data Interchange",
    chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 3,
    type: "brief",
    questionText: "What are the major advantages of EDI for businesses?",
    questionTextTamil: "வணிக நிறுவனங்களுக்கு EDI வழங்கு நன்மைகள் யாவை?",
    answer: "Advantages:\n1. Dramatic speed improvement from days to instantaneous seconds.\n2. Significant cost savings by eliminating paper, printing, postal, and manual labor expenses.\n3. Error reduction through automated standardized validation.\n4. Enhanced supply chain integration and inventory optimization.",
    answerTamil: "நன்மைகள்:\n1. பரிவர்த்தனை வேகம் அதிகரிப்பு (நாட்களிலிருந்து நொடிகளுக்கு).\n2. காகிதம், அச்சு மற்றும் தபால் செலவுகள் முற்றிலும் சேமிக்கப்படுதல்.\n3. மனித பிழைகள் களையப்படுதல்.\n4. விநியோகச் சங்கிலி மேலாண்மை மற்றும் சரக்கு இருப்பு மேம்பாடு.",
    isBookBack: true
  },
  {
    id: "ca12-ch18-3m-3",
    chapterNo: 18,
    chapterName: "EDI-Electronic Data Interchange",
    chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 3,
    type: "brief",
    questionText: "Explain the hierarchical components of EDIFACT structure.",
    questionTextTamil: "EDIFACT கட்டமைப்பின் படிநிலைக் கூறுகளை விளக்குக.",
    answer: "EDIFACT Structure Hierarchy:\n1. Data Element: Individual piece of data (e.g., price, date, product code).\n2. Component Data Element: Sub-elements grouped together.\n3. Segment: A single row of logically related data elements (e.g., BGM, DTM).\n4. Message: Complete business transaction (e.g., ORDERS, INVOIC).\n5. Interchange: Entire transmission enveloped between UNB and UNZ headers.",
    answerTamil: "EDIFACT படிநிலைக் கூறுகள்:\n1. தரவுக் கூறு (Data Element): மிகச்சிறிய ஒற்றை மதிப்பு (எ.கா: விலை, தேதி).\n2. பிரிவு (Segment): தொடர்புடைய தரவுக் கூறுகளின் ஒரு வரிசை.\n3. செய்தி (Message): ஒரு முழுமையான ஆவணம் (எ.கா: ORDERS, INVOIC).\n4. பரிமாற்றம் (Interchange): UNB மற்றும் UNZ உறைகளுக்குள் அடைக்கப்பட்ட முழு பரிமாற்றம்.",
    isBookBack: true
  },
  {
    id: "ca12-ch18-3m-4",
    chapterNo: 18,
    chapterName: "EDI-Electronic Data Interchange",
    chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 3,
    type: "brief",
    questionText: "List and briefly explain any three international EDI standards.",
    questionTextTamil: "ஏதேனும் மூன்று சர்வதேச EDI தரநிலைகளை சுருக்கமாக விளக்குக.",
    answer: "1. UN/EDIFACT: United Nations global cross-industry standard used worldwide.\n2. ANSI ASC X12: Official standard in North America covering healthcare, retail, and manufacturing.\n3. TRADACOMS: UK retail industry standard forerunner of modern electronic commerce.",
    answerTamil: "1. UN/EDIFACT: ஐக்கிய நாடுகள் சபையின் உலகளாவிய வர்த்தக தரநிலை.\n2. ANSI X12: வட அமெரிக்க தொழில் நிறுவனங்களின் தரநிலை.\n3. TRADACOMS: இங்கிலாந்து சில்லறை வர்த்தகத் துறையின் தரநிலை.",
    isBookBack: true
  },
  {
    id: "ca12-ch18-3m-5",
    chapterNo: 18,
    chapterName: "EDI-Electronic Data Interchange",
    chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 3,
    type: "brief",
    questionText: "What is an EDI Translator software?",
    questionTextTamil: "EDI மொழிபெயர்ப்பாளர் மென்பொருள் (EDI Translator) என்றால் என்ன?",
    answer: "An EDI Translator is specialized software that converts internal enterprise ERP database data into standardized EDI formats (like EDIFACT/X12) and vice versa.",
    answerTamil: "EDI மொழிபெயர்ப்பாளர் என்பது நிறுவனத்தின் ERP தரவை தரப்படுத்தப்பட்ட EDI வடிவமாகவும், பெறப்பட்ட EDI கோப்புகளை ERP வடிவமாகவும் மாற்றும் மென்பொருளாகும்.",
    isBookBack: true
  }
];

const ch18_5m: Question[] = [
  {
    id: "ca12-ch18-5m-1",
    chapterNo: 18,
    chapterName: "EDI-Electronic Data Interchange",
    chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 5,
    type: "essay",
    questionText: "Explain the step-by-step working process of an EDI transaction flow with an illustrative diagram description.",
    questionTextTamil: "EDI பரிவர்த்தனை ஓட்டம் செயல்படும் வழிமுறையை படிநிலைகளுடன் விரிவாக விளக்குக.",
    answer: "EDI Working Process Workflow:\n\n1. Document Preparation at Sender (Buyer):\n- The buyer enters a purchase order into their internal ERP / inventory software.\n\n2. EDI Translation (Outbound):\n- The ERP export data is fed into an EDI Translator which converts it into standard EDI format (e.g., EDIFACT ORDERS message).\n\n3. Transmission & Communication:\n- The standardized EDI file is securely transmitted over the Internet (AS2 protocol) or through a Value Added Network (VAN) mailbox.\n\n4. EDI Translation at Receiver (Supplier - Inbound):\n- The supplier's computer receives the EDI file and passes it through their EDI Translator to convert it into their internal database format.\n\n5. ERP Ingestion & Processing:\n- Supplier's ERP automatically generates a sales order and schedules dispatch without manual intervention.\n\n6. Functional Acknowledgment:\n- An automated acknowledgment receipt (e.g., CONTRL / 997) is sent back to the buyer confirming error-free processing.",
    answerTamil: "EDI செயல்படும் படிநிலைகள்:\n\n1. ஆவணம் தயாரித்தல் (வாங்குபவர்): வாங்குபவர் தனது ERP மென்பொருளில் கொள்முதல் ஆணையை உருவாக்குகிறார்.\n2. EDI மொழிபெயர்ப்பு: இந்த தரவு EDI மொழிபெயர்ப்பாளர் மூலம் சர்வதேச தரநிலைக்கு (ORDERS) மாற்றப்படுகிறது.\n3. பரிமாற்றம்: கோப்பு இணையம் அல்லது VAN மூலம் விற்பனையாளருக்கு அனுப்பப்படுகிறது.\n4. பெறுநரின் மொழிபெயர்ப்பு (விற்பனையாளர்): பெறப்பட்ட EDI கோப்பு விற்பனையாளரின் உள் தரவுத்தள வடிவத்திற்கு மாற்றப்படுகிறது.\n5. ERP செயலாக்கம்: விற்பனையாளரின் கணினி தானாகவே விற்பனை ஆர்டரை உருவாக்கி ஏற்றுமதிக்கு தயார் செய்கிறது.\n6. ஒப்புகைச் சீட்டு (Acknowledgment): ஆவணம் பெறப்பட்டதற்கான ஒப்புகைச் செய்தி மீண்டும் வாங்குபவருக்கு தானாக அனுப்பப்படுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch18-5m-2",
    chapterNo: 18,
    chapterName: "EDI-Electronic Data Interchange",
    chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 5,
    type: "essay",
    questionText: "Explain the various types of EDI (Direct EDI, VAN EDI, Web EDI, Mobile EDI).",
    questionTextTamil: "EDI-ன் பல்வேறு வகைகளை (Direct EDI, VAN EDI, Web EDI, Mobile EDI) விரிவாக விளக்குக.",
    answer: "Types of EDI Implementation Models:\n\n1. Direct EDI (Point-to-Point EDI):\n- Establishes a dedicated direct connection between two partners over the Internet using secure protocols (AS2, FTP over SSL).\n- Fast, zero third-party fees, but requires custom setup per partner.\n\n2. EDI via VAN (Value Added Network):\n- Uses a managed third-party service provider acting like an electronic post office with secure mailboxes.\n- Simplifies connecting to hundreds of partners, handles protocol translations, but incurs ongoing subscription/byte fees.\n\n3. Web-based EDI:\n- Conducts EDI via standard web browsers where small suppliers fill in online web forms that generate compliant backend EDI messages.\n- Affordable and accessible for small vendors.\n\n4. Mobile EDI:\n- Leverages mobile smartphones and tablet applications to monitor, approve, and track EDI logistics and orders on the go.",
    answerTamil: "EDI-ன் வகைகள்:\n\n1. நேரடி EDI (Direct / Point-to-Point):\n- இரு நிறுவனங்கள் இணையம் வழியே நேரடியாக இணைதல் (AS2 முறை). கூடுதல் தரகர் கட்டணம் இல்லை.\n\n2. மதிப்பு கூட்டப்பட்ட வலையமைப்பு (VAN EDI):\n- மூன்றாம் நபர் தொலைத்தொடர்பு சேவை மூலம் தபால் பெட்டி போல பல நிறுவனங்களை எளிதாக இணைத்தல்.\n\n3. இணைய அடிப்படையிலான EDI (Web EDI):\n- சிறு வணிகர்கள் எளிய இணையப் படிவங்கள் வழியே உலாவியிலேயே ஆவணங்களை உருவாக்கி அனுப்புதல்.\n\n4. மொபைல் EDI (Mobile EDI):\n- ஸ்மார்ட்போன் செயலிகள் மூலம் எங்கிருந்தும் ஆர்டர்களை கண்காணித்து ஒப்புதல் அளிக்கும் வசதி.",
    isBookBack: true
  },
  {
    id: "ca12-ch18-5m-3",
    chapterNo: 18,
    chapterName: "EDI-Electronic Data Interchange",
    chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 5,
    type: "essay",
    questionText: "Discuss the structural framework and components of UN/EDIFACT standard in detail.",
    questionTextTamil: "UN/EDIFACT தரநிலையின் கட்டமைப்பு மற்றும் முக்கிய கூறுகளை விரிவாக விவாதிக்கவும்.",
    answer: "UN/EDIFACT Structural Framework:\n\n1. Characters & Syntax Rules:\nDefines alphanumeric character sets, delimiters (e.g., '+' component separator, ''' segment terminator, '?' release character).\n\n2. Data Elements:\n- Simple Data Element: Single unit value (e.g., Currency = \"INR\").\n- Composite Data Element: Multi-part value separated by colons (e.g., Date:Time).\n\n3. Segments:\nPredefined collections of functionally related data elements identified by a 3-letter tag:\n- BGM: Beginning of Message\n- DTM: Date and Time\n- NAD: Name and Address\n- LIN: Line Item details.\n\n4. Messages (Transaction Sets):\nComposed of an ordered sequence of segments starting with UNH (header) and ending with UNT (trailer):\n- ORDERS: Purchase Order\n- INVOIC: Invoice\n- DESADV: Despatch Advice.\n\n5. Interchange Envelopes:\nEnclosed by UNB (Interchange Header) and UNZ (Interchange Trailer).",
    answerTamil: "UN/EDIFACT கட்டமைப்பு:\n\n1. தொடரியல் மற்றும் குறியீடுகள்: பிரிக்க பயன்படும் குறியீடுகள் (+ , ' போன்றவை).\n2. தரவுக் கூறுகள்: ஒற்றை மதிப்பு கொண்ட எளிய கூறுகள் மற்றும் கூட்டு கூறுகள்.\n3. பிரிவுகள் (Segments): மூன்று எழுத்து குறியீடு கொண்ட வரிகள் (எ.கா: BGM - செய்தி தொடக்கம், DTM - தேதி, NAD - பெயர் முகவரி).\n4. செய்திகள் (Messages): UNH தொடக்கக் குறி மற்றும் UNT முடிவுக் குறிக்கு இடையே அமையும் முழு ஆவணம் (எ.கா: ORDERS, INVOIC).\n5. பரிமாற்ற உறை (Envelopes): UNB தொடக்கம் மற்றும் UNZ முடிவுக்குள் அனைத்து செய்திகளும் அடைக்கப்படும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch18-5m-4",
    chapterNo: 18,
    chapterName: "EDI-Electronic Data Interchange",
    chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 5,
    type: "essay",
    questionText: "Discuss the business benefits, economic impacts, and barriers to implementation of EDI.",
    questionTextTamil: "EDI-ன் வணிக நன்மைகள், பொருளாதார தாக்கம் மற்றும் அதை செயல்படுத்துவதில் உள்ள தடைகளை விரிவாக விவாதிக்கவும்.",
    answer: "Business Benefits of EDI:\n1. Direct Cost Reduction: Drastic reduction in paper, printing, postal mailing, and physical storage costs.\n2. High Speed & Efficiency: Orders transmitted in seconds instead of 4-7 days by post.\n3. Elimination of Human Errors: Automation removes data re-entry typographical mistakes.\n4. Just-In-Time (JIT) Inventory: Tight supply chain synchronization minimizes warehouse storage costs.\n\nBarriers to EDI Implementation:\n1. High initial hardware, software, and ERP customization investment costs.\n2. Complexity of standard adherence across multiple international trading formats.\n3. Requirement for all supply chain vendors and trading partners to adopt matching systems.",
    answerTamil: "வணிக நன்மைகள் மற்றும் பொருளாதார தாக்கம்:\n1. செலவு மிச்சம்: காகிதம், அச்சு, தபால் மற்றும் சேமிப்புச் செலவுகள் முற்றிலும் குறைகிறது.\n2. அதிக வேகம்: வணிக ஆவணங்கள் சில நொடிகளில் கடத்தப்படுகின்றன.\n3. பிழைகள் இல்லாத நிலை: கைமுறை உள்ளீட்டுப் பிழைகள் தவிர்க்கப்படுகின்றன.\n4. துல்லியமான விநியோகச் சங்கிலி: சரக்கு இருப்பு தேவையை உடனடியாக பூர்த்தி செய்கிறது.\n\nசெயல்படுத்துவதில் உள்ள தடைகள்:\n1. ஆரம்ப கட்ட மென்பொருள் மற்றும் வன்பொருள் முதலீட்டுச் செலவு அதிகம்.\n2. சர்வதேச தரநிலைகளைப் பின்பற்றுவதில் உள்ள தொழில்நுட்ப சிக்கல்கள்.\n3. விநியோகச் சங்கிலியில் உள்ள அனைத்து கூட்டாளர்களும் இந்த அமைப்பிற்கு மாற வேண்டிய கட்டாயம்.",
    isBookBack: true
  }
];

const ch15_all = [...ch15_1m, ...ch15_2m, ...ch15_3m, ...ch15_5m];
fs.writeFileSync('scripts_ca12/ch15.json', JSON.stringify(ch15_all, null, 2), 'utf8');
console.log("Chapter 15 written! Total:", ch15_all.length);

const ch16_all = [...ch16_1m, ...ch16_2m, ...ch16_3m, ...ch16_5m];
fs.writeFileSync('scripts_ca12/ch16.json', JSON.stringify(ch16_all, null, 2), 'utf8');
console.log("Chapter 16 written! Total:", ch16_all.length);

const ch17_all = [...ch17_1m, ...ch17_2m, ...ch17_3m, ...ch17_5m];
fs.writeFileSync('scripts_ca12/ch17.json', JSON.stringify(ch17_all, null, 2), 'utf8');
console.log("Chapter 17 written! Total:", ch17_all.length);

const ch18_all = [...ch18_1m, ...ch18_2m, ...ch18_3m, ...ch18_5m];
fs.writeFileSync('scripts_ca12/ch18.json', JSON.stringify(ch18_all, null, 2), 'utf8');
console.log("Chapter 18 written! Total:", ch18_all.length);
