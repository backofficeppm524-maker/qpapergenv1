import fs from 'fs';
import { Question } from '../src/types';

// ==========================================
// CHAPTER 16: Electronic Payment Systems (10 1M, 5 2M, 5 3M, 3 5M = 23)
// ==========================================
export const ch16_questions: Question[] = [
  // 1M (10)
  {
    id: "ca12-ch16-1m-1", chapterNo: 16, chapterName: "Electronic Payment Systems", chapterNameTamil: "மின்னணு கட்டண முறைகள்",
    marks: 1, type: "mcq", questionText: "Based on the monetary value e payment system can be classified into",
    questionTextTamil: "பண மதிப்பீட்டின் அடிப்படையில் மின்-கட்டண முறைகள் எவ்வாறு வகைப்படுத்தப்படுகின்றன?",
    options: {
      A: "Micro and Macro payments",
      B: "Local and Global payments",
      C: "Credit and Debit payments",
      D: "Direct and Indirect payments"
    },
    optionsTamil: {
      A: "நுண் மற்றும் பெருமக் கட்டணங்கள் (Micro & Macro payments)",
      B: "உள்ளூர் மற்றும் உலகளாவிய கட்டணங்கள்",
      C: "கடன் மற்றும் பற்று அட்டை கட்டணங்கள்",
      D: "நேரடி மற்றும் மறைமுக கட்டணங்கள்"
    },
    correctOption: "A", answer: "A) Micro and Macro payments", answerTamil: "A) நுண் மற்றும் பெருமக் கட்டணங்கள் (Micro & Macro payments)", isBookBack: true
  },
  {
    id: "ca12-ch16-1m-2", chapterNo: 16, chapterName: "Electronic Payment Systems", chapterNameTamil: "மின்னணு கட்டண முறைகள்",
    marks: 1, type: "mcq", questionText: "______ refers to a payment made from one bank account to another bank account using electronic methods.",
    questionTextTamil: "ஒரு வங்கிக் கணக்கிலிருந்து மற்றொரு வங்கிக் கணக்கிற்கு மின்னணு முறையில் நிதி பரிமாற்றம் செய்யப்படுவது எது?",
    options: {
      A: "Electronic Fund Transfer (EFT)",
      B: "Cheque Payment",
      C: "Cash on Delivery",
      D: "Postal Order"
    },
    optionsTamil: {
      A: "மின்னணு நிதி பரிமாற்றம் (EFT)",
      B: "காசோலை கட்டணம்",
      C: "பொருள் வந்ததும் பணம்",
      D: "அஞ்சல் ஆணை"
    },
    correctOption: "A", answer: "A) Electronic Fund Transfer (EFT)", answerTamil: "A) மின்னணு நிதி பரிமாற்றம் (EFT)", isBookBack: true
  },
  {
    id: "ca12-ch16-1m-3", chapterNo: 16, chapterName: "Electronic Payment Systems", chapterNameTamil: "மின்னணு கட்டண முறைகள்",
    marks: 1, type: "mcq", questionText: "Assertion (A): Macro electronic payment systems support higher value payments. Reason (R): Expensive cryptographic operations are included in macro payments",
    questionTextTamil: "கூற்று (A): மேக்ரோ மின்னணு கட்டண முறைகள் அதிக மதிப்புள்ள கட்டணங்களை ஆதரிக்கின்றன. காரணம் (R): மேக்ரோ கட்டணங்களில் விரிவான குறியாக்க பாதுகாப்பு நடைமுறைகள் சேர்க்கப்பட்டுள்ளன.",
    options: {
      A: "Both A and R are true and R is the correct explanation of A",
      B: "Both A and R are true but R is not the correct explanation of A",
      C: "A is true but R is false",
      D: "A is false but R is true"
    },
    optionsTamil: {
      A: "A மற்றும் R இரண்டும் சரி, R என்பது A-வின் சரியான விளக்கம்",
      B: "A மற்றும் R இரண்டும் சரி, ஆனால் R என்பது A-வின் சரியான விளக்கம் அல்ல",
      C: "A சரி ஆனால் R தவறு",
      D: "A தவறு ஆனால் R சரி"
    },
    correctOption: "A", answer: "A) Both A and R are true and R is the correct explanation of A", answerTamil: "A) A மற்றும் R இரண்டும் சரி, R என்பது A-வின் சரியான விளக்கம்", isBookBack: true
  },
  {
    id: "ca12-ch16-1m-4", chapterNo: 16, chapterName: "Electronic Payment Systems", chapterNameTamil: "மின்னணு கட்டண முறைகள்",
    marks: 1, type: "mcq", questionText: "Which of the following is correctly matched",
    questionTextTamil: "பின்வருவனவற்றுள் எது சரியாகப் பொருத்தப்பட்டுள்ளது?",
    options: {
      A: "ECS - Electronic Clearing Service",
      B: "EFT - Easy Fund Transfer",
      C: "RTGS - Real Time Gross System",
      D: "NEFT - National Electronic Fast Transfer"
    },
    optionsTamil: {
      A: "ECS - Electronic Clearing Service",
      B: "EFT - Easy Fund Transfer",
      C: "RTGS - Real Time Gross System",
      D: "NEFT - National Electronic Fast Transfer"
    },
    correctOption: "A", answer: "A) ECS - Electronic Clearing Service", answerTamil: "A) ECS - Electronic Clearing Service", isBookBack: true
  },
  {
    id: "ca12-ch16-1m-5", chapterNo: 16, chapterName: "Electronic Payment Systems", chapterNameTamil: "மின்னணு கட்டண முறைகள்",
    marks: 1, type: "mcq", questionText: "ECS stands for",
    questionTextTamil: "ECS என்பதன் விரிவாக்கம் என்ன?",
    options: {
      A: "Electronic Clearing Service",
      B: "Electronic Clearing System",
      C: "Electronic Credit Service",
      D: "Electronic Cash System"
    },
    optionsTamil: {
      A: "Electronic Clearing Service",
      B: "Electronic Clearing System",
      C: "Electronic Credit Service",
      D: "Electronic Cash System"
    },
    correctOption: "A", answer: "A) Electronic Clearing Service", answerTamil: "A) Electronic Clearing Service", isBookBack: true
  },
  {
    id: "ca12-ch16-1m-6", chapterNo: 16, chapterName: "Electronic Payment Systems", chapterNameTamil: "மின்னணு கட்டண முறைகள்",
    marks: 1, type: "mcq", questionText: "Which of the following is a online payment system for small payments.",
    questionTextTamil: "சிறிய தொகை கட்டணங்களுக்கான ஆன்லைன் கட்டண முறை எது?",
    options: { A: "Micro payment", B: "Macro payment", C: "RTGS", D: "Letter of credit" },
    optionsTamil: { A: "நுண் கட்டண முறை (Micro payment)", B: "மேக்ரோ கட்டண முறை", C: "RTGS", D: "கடன் கடிதம்" },
    correctOption: "A", answer: "A) Micro payment", answerTamil: "A) நுண் கட்டண முறை (Micro payment)", isBookBack: true
  },
  {
    id: "ca12-ch16-1m-7", chapterNo: 16, chapterName: "Electronic Payment Systems", chapterNameTamil: "மின்னணு கட்டண முறைகள்",
    marks: 1, type: "mcq", questionText: "Which of the following is true about Virtual payment address (VPA)",
    questionTextTamil: "மெய்நிகர் கட்டண முகவரி (VPA) பற்றிய சரியான கூற்று எது?",
    options: {
      A: "It is a unique identifier used in UPI without sharing bank account details",
      B: "It is a physical plastic card",
      C: "It is a 16-digit credit card number",
      D: "It is a paper check"
    },
    optionsTamil: {
      A: "இது வங்கிக் கணக்கு விவரங்களைப் பகிராமல் UPI-ல் பயன்படுத்தப்படும் தனித்துவ அடையாளங்காட்டி",
      B: "இது ஒரு பிளாஸ்டிக் அட்டை",
      C: "இது 16 இலக்க கடன் அட்டை எண்",
      D: "இது ஒரு காகித காசோலை"
    },
    correctOption: "A", answer: "A) It is a unique identifier used in UPI without sharing bank account details", answerTamil: "A) இது வங்கிக் கணக்கு விவரங்களைப் பகிராமல் UPI-ல் பயன்படுத்தப்படும் தனித்துவ அடையாளங்காட்டி", isBookBack: true
  },
  {
    id: "ca12-ch16-1m-8", chapterNo: 16, chapterName: "Electronic Payment Systems", chapterNameTamil: "மின்னணு கட்டண முறைகள்",
    marks: 1, type: "mcq", questionText: "Pick the odd one in the credit card transaction",
    questionTextTamil: "கடன் அட்டை பரிவர்த்தனையில் பொருந்தாத ஒன்றைத் தேர்ந்தெடுக்கவும்:",
    options: { A: "Cheque", B: "Cardholder", C: "Merchant", D: "Acquiring Bank" },
    optionsTamil: { A: "காசோலை (Cheque)", B: "அட்டைதாரர்", C: "வணிகர்", D: "ஏற்கும் வங்கி" },
    correctOption: "A", answer: "A) Cheque", answerTamil: "A) காசோலை (Cheque)", isBookBack: true
  },
  {
    id: "ca12-ch16-1m-9", chapterNo: 16, chapterName: "Electronic Payment Systems", chapterNameTamil: "மின்னணு கட்டண முறைகள்",
    marks: 1, type: "mcq", questionText: "Which of the following is true about debit card",
    questionTextTamil: "பற்று அட்டை (Debit card) பற்றிய சரியான கூற்று எது?",
    options: {
      A: "Deducts money directly from the user's bank account",
      B: "Borrows money from a credit line",
      C: "Requires monthly interest payments",
      D: "Issued without a bank account"
    },
    optionsTamil: {
      A: "பயனரின் வங்கிக் கணக்கிலிருந்து நேரடியாக பணத்தைக் கழிக்கிறது",
      B: "கடன் வங்கியிடமிருந்து கடன் பெறுகிறது",
      C: "மாதாந்திர வட்டி கட்டணம் தேவைப்படுகிறது",
      D: "வங்கிக் கணக்கு இல்லாமல் வழங்கப்படுகிறது"
    },
    correctOption: "A", answer: "A) Deducts money directly from the user's bank account", answerTamil: "A) பயனரின் வங்கிக் கணக்கிலிருந்து நேரடியாக பணத்தைக் கழிக்கிறது", isBookBack: true
  },
  {
    id: "ca12-ch16-1m-10", chapterNo: 16, chapterName: "Electronic Payment Systems", chapterNameTamil: "மின்னணு கட்டண முறைகள்",
    marks: 1, type: "mcq", questionText: "Match the following: List A: A1) First Digit A2) 9th to 15th Digit A3) First 6 Digits A4) Last Digit with List B",
    questionTextTamil: "பொருத்துக: கடன் அட்டை எண்கள்",
    options: {
      A: "A1-Major Industry Identifier, A2-Account Number, A3-Issuer Identifier (BIN), A4-Check Digit",
      B: "A1-Check Digit, A2-Account Number, A3-Major Industry Identifier, A4-BIN",
      C: "A1-BIN, A2-Check Digit, A3-Major Industry Identifier, A4-Account Number",
      D: "A1-Account Number, A2-BIN, A3-Check Digit, A4-Major Industry Identifier"
    },
    optionsTamil: {
      A: "A1-முதன்மை தொழில் அடையாளங்காட்டி, A2-கணக்கு எண், A3-வழங்கியவர் அடையாள எண் (BIN), A4-சரிபார்ப்பு இலக்கம்",
      B: "A1-சரிபார்ப்பு இலக்கம், A2-கணக்கு எண், A3-முதன்மை தொழில் அடையாளங்காட்டி, A4-BIN",
      C: "A1-BIN, A2-சரிபார்ப்பு இலக்கம், A3-முதன்மை தொழில் அடையாளங்காட்டி, A4-கணக்கு எண்",
      D: "A1-கணக்கு எண், A2-BIN, A3-சரிபார்ப்பு இலக்கம், A4-முதன்மை தொழில் அடையாளங்காட்டி"
    },
    correctOption: "A", answer: "A) A1-Major Industry Identifier, A2-Account Number, A3-Issuer Identifier (BIN), A4-Check Digit", answerTamil: "A) A1-முதன்மை தொழில் அடையாளங்காட்டி, A2-கணக்கு எண், A3-வழங்கியவர் அடையாள எண் (BIN), A4-சரிபார்ப்பு இலக்கம்", isBookBack: true
  },
  // 2M (5)
  {
    id: "ca12-ch16-2m-1", chapterNo: 16, chapterName: "Electronic Payment Systems", chapterNameTamil: "மின்னணு கட்டண முறைகள்",
    marks: 2, type: "short", questionText: "Define electronic payment system",
    questionTextTamil: "மின்னணு கட்டண முறை (Electronic payment system) - வரையறுக்கவும்.",
    answer: "An electronic payment system (EPS) is a financial exchange that takes place online between buyers and sellers facilitated by digital financial instruments like credit cards, debit cards, UPI, or e-wallets.",
    answerTamil: "மின்னணு கட்டண முறை என்பது கடன் அட்டைகள், பற்று அட்டைகள், UPI போன்ற டிஜிட்டல் முறைகள் மூலம் இணைய வழியே நடைபெறும் நிதிப் பரிவர்த்தனையாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch16-2m-2", chapterNo: 16, chapterName: "Electronic Payment Systems", chapterNameTamil: "மின்னணு கட்டண முறைகள்",
    marks: 2, type: "short", questionText: "Distinguish micro electronic payment and macro electronic payment",
    questionTextTamil: "நுண் கட்டணம் மற்றும் பெருமக் கட்டணம் ஆகியவற்றை வேறுபடுத்துக.",
    answer: "1. Micro Electronic Payment: For small monetary amounts (e.g. less than $5 or ₹100), optimized for speed and low transaction fees.\n2. Macro Electronic Payment: For larger monetary values requiring rigorous cryptographic authentication and high security protocols.",
    answerTamil: "1. நுண் கட்டணம் (Micro payment): மிகச் சிறிய தொகைக்கான கட்டணங்கள் (எ.கா. ₹100-க்கும் குறைவானது).\n2. பெருமக் கட்டணம் (Macro payment): அதிக மதிப்புடைய பணப் பரிவர்த்தனைகள், கடுமையான பாதுகாப்பு மற்றும் குறியாக்க நெறிமுறைகளுடன் செயல்படுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch16-2m-3", chapterNo: 16, chapterName: "Electronic Payment Systems", chapterNameTamil: "மின்னணு கட்டண முறைகள்",
    marks: 2, type: "short", questionText: "Explain the concept of e-wallet",
    questionTextTamil: "மின்-பணப்பை (e-wallet) கருத்தை விளக்குக.",
    answer: "An e-wallet (digital wallet) is an electronic application on a smartphone or computer that securely stores user payment card details, bank credentials, or prepaid digital cash for quick one-click transactions (e.g. Paytm, Google Pay).",
    answerTamil: "மின்-பணப்பை (Digital Wallet) என்பது பயனர் தனது கடன்/பற்று அட்டை விவரங்கள் அல்லது முன்கூட்டியே பணத்தை சேமித்து வைத்து உடனடி கட்டணம் செலுத்த உதவும் மின்னணு பயன்பாடாகும் (எ.கா. Paytm).",
    isBookBack: true
  },
  {
    id: "ca12-ch16-2m-4", chapterNo: 16, chapterName: "Electronic Payment Systems", chapterNameTamil: "மின்னணு கட்டண முறைகள்",
    marks: 2, type: "short", questionText: "Write a short note on credit card?",
    questionTextTamil: "கடன் அட்டை (Credit card) பற்றி சிறு குறிப்பு வரைக.",
    answer: "A credit card is a plastic payment card issued by banks allowing cardholders to borrow funds up to an approved credit limit to pay for goods/services, with the promise to repay with or without interest.",
    answerTamil: "கடன் அட்டை என்பது வங்கியால் வழங்கப்படும் பிளாஸ்டிக் அட்டையாகும். இது குறிப்பிட்ட கடன் வரம்பு வரை பொருட்களை வாங்கவும், பின்னர் அந்தத் தொகையை திருப்பிச் செலுத்தவும் அனுமதிக்கிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch16-2m-5", chapterNo: 16, chapterName: "Electronic Payment Systems", chapterNameTamil: "மின்னணு கட்டண முறைகள்",
    marks: 2, type: "short", questionText: "What is smart card?",
    questionTextTamil: "ஸ்மார்ட் கார்டு (Smart card) என்றால் என்ன?",
    answer: "A smart card is a plastic card embedded with an integrated circuit microchip that securely stores and processes financial, biometric, or identification data (e.g. EMV chip cards, SIM cards, Metro travel cards).",
    answerTamil: "ஸ்மார்ட் கார்டு என்பது மைக்ரோசிப் பதிக்கப்பட்ட பிளாஸ்டிக் அட்டையாகும். இது தனிநபர் மற்றும் நிதித் தரவுகளை பாதுகாப்பாக சேமித்து செயலாக்கப் பயன்படுகிறது.",
    isBookBack: true
  },
  // 3M (5)
  {
    id: "ca12-ch16-3m-1", chapterNo: 16, chapterName: "Electronic Payment Systems", chapterNameTamil: "மின்னணு கட்டண முறைகள்",
    marks: 3, type: "brief", questionText: "Define micro electronic payment and its role in E-Commerce.",
    questionTextTamil: "நுண் மின்னணு கட்டண முறையை வரையறுத்து மின்-வணிகத்தில் அதன் பங்கை விளக்குக.",
    answer: "Micro electronic payment handles tiny monetary transactions (e.g., buying a single song, e-newspaper article, or game credits) with minimal transaction overhead fees, making digital micro-content monetization commercially feasible.",
    answerTamil: "நுண் கட்டண முறை என்பது மிகக் குறைந்த தொகையிலான பரிவர்த்தனைகளைக் கையாள்கிறது (எ.கா. ஒரு பாடல், செய்திப் பக்கம் அல்லது விளையாட்டு நாணயங்கள் வாங்குதல்). இது டிஜிட்டல் உள்ளடக்க விற்பனைக்கு பெரிதும் உதவுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch16-3m-2", chapterNo: 16, chapterName: "Electronic Payment Systems", chapterNameTamil: "மின்னணு கட்டண முறைகள்",
    marks: 3, type: "brief", questionText: "Compare and contrast the credit card and debit card.",
    questionTextTamil: "கடன் அட்டை மற்றும் பற்று அட்டை ஆகியவற்றை ஒப்பிட்டு வேறுபடுத்துக.",
    answer: "1. Credit Card: \"Pay Later\" – uses a revolving credit loan provided by the issuing bank; requires monthly repayment.\n2. Debit Card: \"Pay Now\" – directly deducts money available in the cardholder's own bank checking/savings account in real time.",
    answerTamil: "1. கடன் அட்டை (Credit Card): \"பின்பு செலுத்து\" – வங்கி வழங்கும் கடன் தொகையிலிருந்து பணம் செலுத்தப்படுகிறது.\n2. பற்று அட்டை (Debit Card): \"இப்போதே செலுத்து\" – பயனரின் சொந்த வங்கிக் கணக்கில் உள்ள இருப்பில் இருந்து உடனடியாக பணம் கழிக்கப்படுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch16-3m-3", chapterNo: 16, chapterName: "Electronic Payment Systems", chapterNameTamil: "மின்னணு கட்டண முறைகள்",
    marks: 3, type: "brief", questionText: "Explain briefly Anatomy of a credit card.",
    questionTextTamil: "கடன் அட்டையின் உடற்கூறியல் (Anatomy) அமைப்பை சுருக்கமாக விளக்குக.",
    answer: "Credit Card Anatomy:\n1. Front Side: 16-digit card number (MII + BIN + Account + Check Digit), Cardholder Name, Expiry Date (MM/YY), EMV Smart Chip, Issuer Brand Logo.\n2. Back Side: Magnetic Stripe, Signature Panel, 3-digit CVV (Card Verification Value) security code.",
    answerTamil: "கடன் அட்டையின் அமைப்பு:\n1. முன்பக்கம்: 16 இலக்க அட்டை எண், பெயர், காலாவதி தேதி, EMV சிப், வங்கி லோகோ.\n2. பின்பக்கம்: காந்தப் பட்டை (Magnetic stripe), கையொப்பப் பகுதி, 3 இலக்க CVV பாதுகாப்பு குறியீடு.",
    isBookBack: true
  },
  {
    id: "ca12-ch16-3m-4", chapterNo: 16, chapterName: "Electronic Payment Systems", chapterNameTamil: "மின்னணு கட்டண முறைகள்",
    marks: 3, type: "brief", questionText: "Briefly explain the stored value card and its types.",
    questionTextTamil: "சேமிக்கப்பட்ட மதிப்பு அட்டை (Stored value card) மற்றும் அதன் வகைகளை விளக்குக.",
    answer: "A stored value card has a monetary value stored directly on the card itself (magnetic stripe or chip) rather than an external bank account.\n\nTwo Types:\n1. Closed-Loop Card: Usable at only a single merchant (e.g. Starbucks card, Metro card).\n2. Open-Loop Card: Multi-merchant cards branded by Visa/Mastercard usable everywhere.",
    answerTamil: "சேமிக்கப்பட்ட மதிப்பு அட்டை என்பது பண மதிப்பை நேரடியாக அட்டையிலேயே சேமித்து வைக்கும் அமைப்பாகும்.\n1. மூடிய வளைய அட்டை (Closed-loop): குறிப்பிட்ட ஒரே கடையில் மட்டுமே பயன்படுத்த முடியும் (எ.கா. மெட்ரோ அட்டை).\n2. திறந்த வளைய அட்டை (Open-loop): விசா/மாஸ்டர்கார்டு மூலம் எங்கும் பயன்படுத்தக்கூடிய அட்டை.",
    isBookBack: true
  },
  {
    id: "ca12-ch16-3m-5", chapterNo: 16, chapterName: "Electronic Payment Systems", chapterNameTamil: "மின்னணு கட்டண முறைகள்",
    marks: 3, type: "brief", questionText: "What is electronic fund transfer?",
    questionTextTamil: "மின்னணு நிதி பரிமாற்றம் (EFT) என்றால் என்ன?",
    answer: "EFT (Electronic Fund Transfer) is the electronic transfer of money from one bank account to another, either within the same financial institution or across multiple institutions, through computer-based systems without direct paper/cash intervention.",
    answerTamil: "மின்னணு நிதி பரிமாற்றம் என்பது காகித காசோலைகள் அல்லது ரொக்கப் பணமின்றி கணினி அமைப்புகள் மூலம் ஒரு வங்கிக் கணக்கிலிருந்து மற்றொரு வங்கிக் கணக்கிற்கு பணத்தை மாற்றும் மின்னணு முறையாகும்.",
    isBookBack: true
  },
  // 5M (3)
  {
    id: "ca12-ch16-5m-1", chapterNo: 16, chapterName: "Electronic Payment Systems", chapterNameTamil: "மின்னணு கட்டண முறைகள்",
    marks: 5, type: "essay", questionText: "Explain the key players of a credit card payment system.",
    questionTextTamil: "கடன் அட்டை கட்டண அமைப்பில் உள்ள முக்கிய பங்கேற்பாளர்களை விரிவாக விளக்குக.",
    answer: "Key Players in Credit Card Payment System:\n\n1. Cardholder: The customer who is authorized to use the credit card for making purchases.\n2. Merchant: The business seller or online store that accepts credit card payments.\n3. Acquirer / Acquiring Bank: The merchant's bank that receives payment requests and credits funds to the merchant account.\n4. Issuer / Issuing Bank: The customer's bank that issues the card and bills the cardholder.\n5. Card Brand / Payment Gateway (Visa/Mastercard): The financial network routing transaction authorization between Acquirer and Issuer.",
    answerTamil: "கடன் அட்டை பரிவர்த்தனையின் 5 முக்கிய பங்கேற்பாளர்கள்:\n1. அட்டைதாரர் (Cardholder): கடன் அட்டையைப் பயன்படுத்தும் வாடிக்கையாளர்.\n2. வணிகர் (Merchant): பொருட்களை விற்று கடன் அட்டையை ஏற்கும் விற்பனையாளர்.\n3. ஏற்கும் வங்கி (Acquiring Bank): வணிகரின் வங்கிக் கணக்கு உள்ள வங்கி.\n4. வழங்கிய வங்கி (Issuing Bank): அட்டைதாரருக்கு கடன் அட்டை வழங்கிய வங்கி.\n5. கட்டண நெட்வொர்க் (Visa/Mastercard): வங்கிகளுக்கு இடையே பரிவர்த்தனையை ஒருங்கிணைக்கும் அமைப்பு.",
    isBookBack: true
  },
  {
    id: "ca12-ch16-5m-2", chapterNo: 16, chapterName: "Electronic Payment Systems", chapterNameTamil: "மின்னணு கட்டண முறைகள்",
    marks: 5, type: "essay", questionText: "Write a note on a. Internet banking b. Mobile banking",
    questionTextTamil: "குறிப்பு வரைக: அ. இணைய வங்கி சேவை (Internet banking) ஆ. மொபைல் வங்கி சேவை (Mobile banking)",
    answer: "a. Internet Banking (Net Banking):\n- Online portal accessed via computer web browsers.\n- Allows customers to view account statements, transfer funds (NEFT, RTGS, IMPS), open fixed deposits, and pay utility bills from home.\n\nb. Mobile Banking:\n- Financial service accessed via dedicated smartphone banking applications.\n- Offers instant biometric login, QR code payments, balance inquiry, and UPI transfers anytime on the go.",
    answerTamil: "அ. இணைய வங்கி சேவை (Internet Banking):\n- வலை உலாவிகள் வழியாக வங்கிக் கணக்கை அணுகி பணம் மாற்றுதல் (NEFT, RTGS), பில் செலுத்துதல் போன்ற பணிகளைச் செய்ய உதவுகிறது.\n\nஆ. மொபைல் வங்கி சேவை (Mobile Banking):\n- ஸ்மார்ட்போன் செயலிகள் மூலம் கைரேகை அங்கீகரிப்பு, QR குறியீடு ஸ்கேன் மற்றும் உடனடி UPI பரிவர்த்தனைகளை எங்கிருந்தும் செய்ய உதவுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch16-5m-3", chapterNo: 16, chapterName: "Electronic Payment Systems", chapterNameTamil: "மின்னணு கட்டண முறைகள்",
    marks: 5, type: "essay", questionText: "Explain in detail : Unified payments interface",
    questionTextTamil: "ஒருங்கிணைந்த கட்டண இடைமுகம் (Unified Payments Interface - UPI) பற்றி விரிவாக விளக்குக.",
    answer: "Unified Payments Interface (UPI):\nUPI is an instant real-time payment system developed by the National Payments Corporation of India (NPCI) facilitating inter-bank peer-to-peer (P2P) and person-to-merchant (P2M) transactions.\n\nKey Features:\n1. Virtual Payment Address (VPA): Eliminates the need to enter sensitive bank account numbers and IFSC codes (e.g. `username@okhdfcbank`).\n2. 24/7/365 Instant Settlement via IMPS infrastructure.\n3. Single Mobile App accessing multiple bank accounts.\n4. Two-Factor Authentication using secure UPI PIN.\n5. Scan and Pay via QR Codes.",
    answerTamil: "ஒருங்கிணைந்த கட்டண இடைமுகம் (UPI):\nUPI என்பது NPCI (இந்திய தேசிய கொடுப்பனவு கழகம்) உருவாக்கிய உடனடி நிகழ்நேர கட்டண முறையாகும்.\n\nமுக்கிய அம்சங்கள்:\n1. மெய்நிகர் கட்டண முகவரி (VPA): வங்கிக் கணக்கு எண் மற்றும் IFSC குறியீடு இல்லாமல் பணம் அனுப்பலாம்.\n2. 24/7 உடனடி நிதி பரிமாற்றம்.\n3. ஒரே செயலியில் பல வங்கிக் கணக்குகளை இணைக்கும் வசதி.\n4. UPI பின் (PIN) மூலம் பாதுகாப்பான இரண்டு அடுக்கு சரிபார்ப்பு.\n5. QR குறியீடுகளை ஸ்கேன் செய்து உடனடியாக பணம் செலுத்தும் வசதி.",
    isBookBack: true
  }
];

// ==========================================
// CHAPTER 17: E-Commerce Security Systems (10 1M, 5 2M, 5 3M, 3 5M = 23)
// ==========================================
export const ch17_questions: Question[] = [
  // 1M (10)
  {
    id: "ca12-ch17-1m-1", chapterNo: 17, chapterName: "E-Commerce Security Systems", chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 1, type: "mcq", questionText: "In E-Commerce, when a stolen credit card is used to make a purchase it is termed as",
    questionTextTamil: "மின்-வணிகத்தில் திருடப்பட்ட கடன் அட்டையைப் பயன்படுத்தி பொருள் வாங்கினால் அது எவ்வாறு அழைக்கப்படுகிறது?",
    options: { A: "Credit card fraud", B: "Phishing", C: "Typopiracy", D: "Hacking" },
    optionsTamil: { A: "கடன் அட்டை மோசடி (Credit card fraud)", B: "ஃபிஷிங்", C: "டைப்போபைரசி", D: "ஹேக்கிங்" },
    correctOption: "A", answer: "A) Credit card fraud", answerTamil: "A) கடன் அட்டை மோசடி (Credit card fraud)", isBookBack: true
  },
  {
    id: "ca12-ch17-1m-2", chapterNo: 17, chapterName: "E-Commerce Security Systems", chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 1, type: "mcq", questionText: "Which of the following is not a security element involved in E-Commerce?",
    questionTextTamil: "பின்வருவனவற்றுள் எது மின்-வணிகத்தில் பாதுகாப்பு காரணி அல்ல?",
    options: { A: "Speed", B: "Confidentiality", C: "Integrity", D: "Non-repudiation" },
    optionsTamil: { A: "வேகம் (Speed)", B: "ரகசியத்தன்மை", C: "நேர்மைத்தன்மை", D: "மறுதலிக்க இயலாமை" },
    correctOption: "A", answer: "A) Speed", answerTamil: "A) வேகம் (Speed)", isBookBack: true
  },
  {
    id: "ca12-ch17-1m-3", chapterNo: 17, chapterName: "E-Commerce Security Systems", chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 1, type: "mcq", questionText: "Asymmetric encryption use ___________ keys for encryption and decryption",
    questionTextTamil: "சமச்சீரற்ற குறியாக்க முறை (Asymmetric encryption) குறியாக்கம் மற்றும் மறைகுறியாக்கத்திற்கு எத்தனை சாவிகளைப் பயன்படுத்துகிறது?",
    options: { A: "Two different", B: "One same", C: "Three", D: "Four" },
    optionsTamil: { A: "இரண்டு வெவ்வேறு சாவிகள் (பொது மற்றும் தனிப்பட்ட சாவி)", B: "ஒரே சாவி", C: "மூன்று", D: "நான்கு" },
    correctOption: "A", answer: "A) Two different", answerTamil: "A) இரண்டு வெவ்வேறு சாவிகள் (பொது மற்றும் தனிப்பட்ட சாவி)", isBookBack: true
  },
  {
    id: "ca12-ch17-1m-4", chapterNo: 17, chapterName: "E-Commerce Security Systems", chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 1, type: "mcq", questionText: "The security authentication technology includes: i) Digital Signatures ii) Digital Currency iii) Digital Image iv) Digital Certificates",
    questionTextTamil: "பாதுகாப்பு அங்கீகார தொழில்நுட்பத்தில் உள்ளவை: i) டிஜிட்டல் கையொப்பங்கள் ii) டிஜிட்டல் நாணயம் iii) டிஜிட்டல் படம் iv) டிஜிட்டல் சான்றிதழ்கள்",
    options: { A: "i and iv", B: "ii and iii", C: "i and ii", D: "iii and iv" },
    optionsTamil: { A: "i மற்றும் iv (டிஜிட்டல் கையொப்பம் & சான்றிதழ்)", B: "ii மற்றும் iii", C: "i மற்றும் ii", D: "iii மற்றும் iv" },
    correctOption: "A", answer: "A) i and iv", answerTamil: "A) i மற்றும் iv (டிஜிட்டல் கையொப்பம் & சான்றிதழ்)", isBookBack: true
  },
  {
    id: "ca12-ch17-1m-5", chapterNo: 17, chapterName: "E-Commerce Security Systems", chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 1, type: "mcq", questionText: "PGP stands for",
    questionTextTamil: "PGP என்பதன் விரிவாக்கம் என்ன?",
    options: {
      A: "Pretty Good Privacy",
      B: "Pretty Good Protocol",
      C: "Private Good Privacy",
      D: "Public Good Privacy"
    },
    optionsTamil: {
      A: "Pretty Good Privacy",
      B: "Pretty Good Protocol",
      C: "Private Good Privacy",
      D: "Public Good Privacy"
    },
    correctOption: "A", answer: "A) Pretty Good Privacy", answerTamil: "A) Pretty Good Privacy", isBookBack: true
  },
  {
    id: "ca12-ch17-1m-6", chapterNo: 17, chapterName: "E-Commerce Security Systems", chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 1, type: "mcq", questionText: "_____ protocol is used for securing credit cards transactions via the Internet",
    questionTextTamil: "இணையம் வழியாக கடன் அட்டை பரிவர்த்தனைகளைப் பாதுகாக்க எந்த நெறிமுறை பயன்படுகிறது?",
    options: { A: "SET", B: "FTP", C: "SMTP", D: "TCP" },
    optionsTamil: { A: "SET (Secure Electronic Transaction)", B: "FTP", C: "SMTP", D: "TCP" },
    correctOption: "A", answer: "A) SET", answerTamil: "A) SET (Secure Electronic Transaction)", isBookBack: true
  },
  {
    id: "ca12-ch17-1m-7", chapterNo: 17, chapterName: "E-Commerce Security Systems", chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 1, type: "mcq", questionText: "Secure Electronic Transaction (SET) was developed in",
    questionTextTamil: "பாதுகாப்பான மின்னணு பரிவர்த்தனை (SET) எந்த ஆண்டு உருவாக்கப்பட்டது?",
    options: { A: "1996", B: "1990", C: "2000", D: "2005" },
    optionsTamil: { A: "1996", B: "1990", C: "2000", D: "2005" },
    correctOption: "A", answer: "A) 1996", answerTamil: "A) 1996", isBookBack: true
  },
  {
    id: "ca12-ch17-1m-8", chapterNo: 17, chapterName: "E-Commerce Security Systems", chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 1, type: "mcq", questionText: "The websites secured by Secure Socket Layer protocols can be identified using",
    questionTextTamil: "SSL நெறிமுறை மூலம் பாதுகாக்கப்பட்ட வலைத்தளங்களை எதன் மூலம் அடையாளம் காணலாம்?",
    options: {
      A: "https:// and padlock icon",
      B: "http:// and star icon",
      C: "ftp:// and key icon",
      D: "www and dot"
    },
    optionsTamil: {
      A: "https:// மற்றும் பூட்டு ஐகான் (padlock)",
      B: "http:// மற்றும் நட்சத்திர ஐகான்",
      C: "ftp:// மற்றும் சாவி ஐகான்",
      D: "www மற்றும் புள்ளி"
    },
    correctOption: "A", answer: "A) https:// and padlock icon", answerTamil: "A) https:// மற்றும் பூட்டு ஐகான் (padlock)", isBookBack: true
  },
  {
    id: "ca12-ch17-1m-9", chapterNo: 17, chapterName: "E-Commerce Security Systems", chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 1, type: "mcq", questionText: "______ is the process of converting plain text into meaningless cipher text",
    questionTextTamil: "சாதாரண உரையை பொருளற்ற மறை உரையாக மாற்றும் செயல்முறை எது?",
    options: { A: "Encryption", B: "Decryption", C: "De-crypting", D: "Hashing" },
    optionsTamil: { A: "குறியாக்கம் (Encryption)", B: "மறைகுறியாக்கம்", C: "டீ-கிரிப்டிங்", D: "ஹாஷிங்" },
    correctOption: "A", answer: "A) Encryption", answerTamil: "A) குறியாக்கம் (Encryption)", isBookBack: true
  },
  {
    id: "ca12-ch17-1m-10", chapterNo: 17, chapterName: "E-Commerce Security Systems", chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 1, type: "mcq", questionText: "Which of the following is true about Ransomware",
    questionTextTamil: "ரான்சம்வேர் (Ransomware) பற்றிய சரியான கூற்று எது?",
    options: {
      A: "Malware that encrypts files and demands ransom",
      B: "An antivirus software",
      C: "A search engine",
      D: "An e-commerce payment gateway"
    },
    optionsTamil: {
      A: "கோப்புகளை குறியாக்கம் செய்து பணம் கேட்டு மிரட்டும் தீம்பொருள்",
      B: "வைரஸ் எதிர்ப்பு மென்பொருள்",
      C: "தேடு பொறி",
      D: "மின்-வணிக கட்டண நுழைவாயில்"
    },
    correctOption: "A", answer: "A) Malware that encrypts files and demands ransom", answerTamil: "A) கோப்புகளை குறியாக்கம் செய்து பணம் கேட்டு மிரட்டும் தீம்பொருள்", isBookBack: true
  },
  // 2M (5)
  {
    id: "ca12-ch17-2m-1", chapterNo: 17, chapterName: "E-Commerce Security Systems", chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 2, type: "short", questionText: "Write about information leakage in E-Commerce.",
    questionTextTamil: "மின்-வணிகத்தில் தகவல் கசிவு (Information leakage) பற்றி எழுதுக.",
    answer: "Information leakage occurs when sensitive customer or corporate data (credit card details, passwords, trade secrets) is unlawfully intercepted or exposed to unauthorized parties during network transmission.",
    answerTamil: "தகவல் கசிவு என்பது ரகசிய வாடிக்கையாளர் அல்லது நிறுவனத் தகவல்கள் (கடவுச்சொற்கள், கடன் அட்டை விவரங்கள்) பரிமாற்றத்தின் போது அங்கீகரிக்கப்படாத நபர்களால் திருடப்படுவதாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch17-2m-2", chapterNo: 17, chapterName: "E-Commerce Security Systems", chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 2, type: "short", questionText: "Write a short note on typopiracy.",
    questionTextTamil: "டைப்போபைரசி (Typopiracy) பற்றி சிறு குறிப்பு வரைக.",
    answer: "Typopiracy (typosquatting) is a form of cybercrime where attackers register misspelled domain names of popular websites (e.g. `goggle.com`) to mislead unsuspecting users into phishing traps or malware downloads.",
    answerTamil: "டைப்போபைரசி என்பது பிரபலமான வலைத்தளங்களின் எழுத்துப் பிழையான பெயர்களில் போலி டொமைன்களைப் பதிவு செய்து பயனர்களை ஏமாற்றி தரவுகளைத் திருடும் செயலாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch17-2m-3", chapterNo: 17, chapterName: "E-Commerce Security Systems", chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 2, type: "short", questionText: "Write about phishing",
    questionTextTamil: "ஃபிஷிங் (Phishing) பற்றி எழுதுக.",
    answer: "Phishing is a fraudulent cyberattack where attackers impersonate trustworthy institutions (like banks or e-commerce sites) via spoofed emails or fake websites to steal usernames, passwords, and OTPs.",
    answerTamil: "ஃபிஷிங் என்பது வங்கிகள் அல்லது நம்பகமான நிறுவனங்களைப் போல போலி மின்னஞ்சல்கள் அல்லது வலைத்தளங்களை அனுப்பி பயனர்களின் கடவுச்சொற்கள் மற்றும் OTP-களைத் திருடும் மோசடியாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch17-2m-4", chapterNo: 17, chapterName: "E-Commerce Security Systems", chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 2, type: "short", questionText: "List the different types of security technologies in E-Commerce",
    questionTextTamil: "மின்-வணிகத்தில் உள்ள பல்வேறு பாதுகாப்பு தொழில்நுட்பங்களைப் பட்டியலிடுக.",
    answer: "E-Commerce security technologies:\n1. Encryption (Symmetric & Asymmetric)\n2. Digital Signatures\n3. Digital Certificates (SSL/TLS)\n4. Firewalls & Intrusion Detection Systems\n5. SET (Secure Electronic Transaction) Protocols.",
    answerTamil: "பாதுகாப்பு தொழில்நுட்பங்கள்:\n1. குறியாக்கம் (Encryption)\n2. டிஜிட்டல் கையொப்பங்கள் (Digital Signatures)\n3. டிஜிட்டல் சான்றிதழ்கள் (SSL/TLS)\n4. ஃபயர்வால் (Firewalls)\n5. SET பாதுகாப்பு நெறிமுறைகள்.",
    isBookBack: true
  },
  {
    id: "ca12-ch17-2m-5", chapterNo: 17, chapterName: "E-Commerce Security Systems", chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 2, type: "short", questionText: "What is Digital signature?",
    questionTextTamil: "டிஜிட்டல் கையொப்பம் (Digital signature) என்றால் என்ன?",
    answer: "A digital signature is a mathematical cryptographic mechanism that guarantees the authenticity, integrity, and non-repudiation of a digital document or electronic transmission.",
    answerTamil: "டிஜிட்டல் கையொப்பம் என்பது மின்னணு ஆவணங்களின் நம்பகத்தன்மை மற்றும் நேர்மைத்தன்மையை உறுதிப்படுத்தும் கணித குறியாக்க அமைப்பாகும்.",
    isBookBack: true
  },
  // 3M (5)
  {
    id: "ca12-ch17-3m-1", chapterNo: 17, chapterName: "E-Commerce Security Systems", chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 3, type: "brief", questionText: "What is E-Commerce Security system?",
    questionTextTamil: "மின்-வணிக பாதுகாப்பு அமைப்பு என்றால் என்ன?",
    answer: "An E-Commerce Security system is a comprehensive set of protocols, cryptographic algorithms, hardware firewalls, and policies designed to protect online business transactions, user data, and financial assets from unauthorized access, fraud, or damage.",
    answerTamil: "மின்-வணிக பாதுகாப்பு அமைப்பு என்பது ஆன்லைன் பரிவர்த்தனைகள் மற்றும் பயனர் நிதித் தரவுகளை இணையத் தாக்குதல்கள் மற்றும் மோசடிகளிலிருந்து பாதுகாக்கும் நெறிமுறைகள் மற்றும் தொழில்நுட்பங்களின் தொகுப்பாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch17-3m-2", chapterNo: 17, chapterName: "E-Commerce Security Systems", chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 3, type: "brief", questionText: "List any two E-Commerce Security Threats?",
    questionTextTamil: "மின்-வணிக பாதுகாப்பு அச்சுறுத்தல்கள் ஏதேனும் இரண்டினை பட்டியலிடுக.",
    answer: "1. Credit Card Fraud / Identity Theft: Criminals using stolen card credentials to make fraudulent purchases.\n2. Phishing & Spoofing: Deceptive fake websites stealing sensitive banking passwords from unsuspecting consumers.",
    answerTamil: "1. கடன் அட்டை மோசடி: திருடப்பட்ட அட்டை விவரங்களைப் பயன்படுத்தி பொருட்களை வாங்குதல்.\n2. ஃபிஷிங் (Phishing): போலி தளங்கள் மூலம் பயனர்களின் கடவுச்சொற்களைத் திருடுதல்.",
    isBookBack: true
  },
  {
    id: "ca12-ch17-3m-3", chapterNo: 17, chapterName: "E-Commerce Security Systems", chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 3, type: "brief", questionText: "Write a note on asymmetric key encryption.",
    questionTextTamil: "சமச்சீரற்ற சாவி குறியாக்கம் (Asymmetric key encryption) பற்றி குறிப்பு வரைக.",
    answer: "Asymmetric (Public Key) encryption uses a mathematically linked pair of keys:\n- Public Key: Distributed openly to anyone to encrypt messages.\n- Private Key: Kept strictly secret by the receiver to decrypt the messages (e.g. RSA algorithm).",
    answerTamil: "சமச்சீரற்ற சாவி குறியாக்கம் இரண்டு சாவிகளைப் பயன்படுத்துகிறது:\n- பொதுச் சாவி (Public Key): தகவலை குறியாக்கம் செய்ய அனைவருக்கும் பகிரப்படுகிறது.\n- தனிப்பட்ட சாவி (Private Key): தகவலை மறைகுறியாக்கம் செய்ய பெறுநரிடம் மட்டும் ரகசியமாக வைக்கப்படுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch17-3m-4", chapterNo: 17, chapterName: "E-Commerce Security Systems", chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 3, type: "brief", questionText: "Write a note on digital certificate.",
    questionTextTamil: "டிஜிட்டல் சான்றிதழ் (Digital certificate) பற்றி குறிப்பு வரைக.",
    answer: "A digital certificate (SSL/TLS certificate) is an electronic passport issued by a trusted Certificate Authority (CA) verifying the identity of a website owner and providing their public key for secure HTTPS encrypted browsing.",
    answerTamil: "டிஜிட்டல் சான்றிதழ் என்பது நம்பகமான சான்றிதழ் வழங்கும் ஆணையத்தால் (CA) வழங்கப்பட்டு, வலைத்தளத்தின் அடையாளத்தை சரிபார்த்து HTTPS குறியாக்கத்தை வழங்கும் மின்னணு ஆவணமாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch17-3m-5", chapterNo: 17, chapterName: "E-Commerce Security Systems", chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 3, type: "brief", questionText: "Write about plain text and cipher text.",
    questionTextTamil: "வெற்று உரை (Plain text) மற்றும் மறை உரை (Cipher text) பற்றி எழுதுக.",
    answer: "1. Plain Text: The original, readable, unencrypted message before applying cryptography.\n2. Cipher Text: The scrambled, unreadable, encrypted output generated after encrypting plain text using an algorithm and key.",
    answerTamil: "1. வெற்று உரை (Plain text): குறியாக்கம் செய்யப்படாத படிக்கக்கூடிய அசல் உரை.\n2. மறை உரை (Cipher text): குறியாக்க வழிமுறையைப் பயன்படுத்தி மாற்றப்பட்ட படிக்க முடியாத ரகசிய உரை.",
    isBookBack: true
  },
  // 5M (3)
  {
    id: "ca12-ch17-5m-1", chapterNo: 17, chapterName: "E-Commerce Security Systems", chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 5, type: "essay", questionText: "Write about dimensions of E-Commerce Security.",
    questionTextTamil: "மின்-வணிக பாதுகாப்பின் பரிமாணங்களை (Dimensions) விரிவாக எழுதுக.",
    answer: "Key Dimensions of E-Commerce Security:\n\n1. Authenticity: Verifying the true identity of users, merchants, and servers.\n2. Confidentiality: Protecting private data from unauthorized interception during transmission.\n3. Integrity: Ensuring that data has not been altered or tampered with in transit.\n4. Non-repudiation: Ensuring that neither sender nor receiver can deny initiating a transaction.\n5. Availability: Ensuring systems and services are accessible 24/7 without denial-of-service outages.\n6. Privacy: Protecting user personal info against unauthorized commercial harvesting.",
    answerTamil: "மின்-வணிக பாதுகாப்பின் முக்கிய பரிமாணங்கள்:\n1. நம்பகத்தன்மை (Authenticity): பயனரின் உண்மையான அடையாளத்தை சரிபார்த்தல்.\n2. ரகசியத்தன்மை (Confidentiality): அங்கீகரிக்கப்படாத நபர்கள் தகவலை அணுகாமல் தடுத்தல்.\n3. நேர்மைத்தன்மை (Integrity): தரவுகள் மாற்றப்படாமல் இருப்பதை உறுதிசெய்தல்.\n4. மறுதலிக்க இயலாமை (Non-repudiation): பரிவர்த்தனையை செய்தவர் அதை மறுக்க முடியாமல் செய்தல்.\n5. கிடைக்கும் தன்மை (Availability): சேவைகள் எப்போதும் தடையின்றி கிடைப்பதை உறுதிசெய்தல்.",
    isBookBack: true
  },
  {
    id: "ca12-ch17-5m-2", chapterNo: 17, chapterName: "E-Commerce Security Systems", chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 5, type: "essay", questionText: "Differentiate symmetric key and asymmetric key encryption.",
    questionTextTamil: "சமச்சீர் சாவி மற்றும் சமச்சீரற்ற சாவி குறியாக்கங்களை வேறுபடுத்துக.",
    answer: "Comparison of Symmetric vs Asymmetric Encryption:\n\n1. Number of Keys: Symmetric uses 1 shared secret key for both encryption and decryption; Asymmetric uses 2 different mathematically linked keys (Public & Private).\n2. Speed: Symmetric encryption is extremely fast; Asymmetric is computationally slower.\n3. Key Exchange: Symmetric has high key distribution risk; Asymmetric easily shares the public key without compromising the private key.\n4. Algorithms: Symmetric uses AES, DES; Asymmetric uses RSA, ECC.\n5. Primary Use: Symmetric is used for bulk data transfer; Asymmetric is used for digital signatures and initial SSL handshakes.",
    answerTamil: "சமச்சீர் vs சமச்சீரற்ற சாவி குறியாக்கம்:\n1. சாவிகளின் எண்ணிக்கை: சமச்சீர் முறையில் 1 சாவி மட்டுமே; சமச்சீரற்ற முறையில் 2 சாவிகள் (பொது & தனிப்பட்ட).\n2. வேகம்: சமச்சீர் மிக வேகமானது; சமச்சீரற்ற முறை சற்று மெதுவானது.\n3. சாவியைப் பகிர்தல்: சமச்சீரில் சாவி திருடப்பட வாய்ப்புண்டு; சமச்சீரற்ற முறையில் பொது சாவி மட்டுமே பகிரப்படுவதால் பாதுகாப்பானது.\n4. வழிமுறைகள்: சமச்சீர் (DES, AES); சமச்சீரற்ற (RSA, ECC).",
    isBookBack: true
  },
  {
    id: "ca12-ch17-5m-3", chapterNo: 17, chapterName: "E-Commerce Security Systems", chapterNameTamil: "மின்-வணிக பாதுகாப்பு அமைப்புகள்",
    marks: 5, type: "essay", questionText: "Explain authentication protocols .",
    questionTextTamil: "அங்கீகார நெறிமுறைகளை (Authentication Protocols) விரிவாக விளக்குக.",
    answer: "Authentication Protocols in E-Commerce:\n\n1. SSL (Secure Sockets Layer) / TLS (Transport Layer Security):\n- Encrypts the communication channel between client web browser and merchant server.\n- Uses digital certificates for server authentication and symmetric encryption for fast session data transfer.\n\n2. SET (Secure Electronic Transaction):\n- Developed in 1996 by Visa & MasterCard specifically for credit card transactions.\n- Uses dual digital signatures ensuring that the merchant never sees customer credit card numbers, and the bank never sees customer order details.\n\n3. 3-D Secure (3DS / OTP):\n- Adds an extra XML-based authentication layer (Verified by Visa / Mastercard Identity Check) using One-Time Passwords (OTP).",
    answerTamil: "அங்கீகார நெறிமுறைகள்:\n1. SSL / TLS: உலாவி மற்றும் வலை சேவையகத்திற்கு இடையே தரவுகளை குறியாக்கம் செய்து பாதுகாக்கும் நெறிமுறை.\n2. SET (Secure Electronic Transaction): விசா மற்றும் மாஸ்டர்கார்டு உருவாக்கியது; வாடிக்கையாளரின் அட்டை எண்ணை விற்பனையாளரிடம் மறைத்து பாதுகாக்கிறது.\n3. 3-D Secure: பரிவர்த்தனையின் போது OTP அனுப்பி கூடுதல் பாதுகாப்பை வழங்கும் நெறிமுறை.",
    isBookBack: true
  }
];

// ==========================================
// CHAPTER 18: Electronic Data Interchange- EDI (5 1M, 3 2M, 3 3M, 2 5M = 13)
// ==========================================
export const ch18_questions: Question[] = [
  // 1M (5)
  {
    id: "ca12-ch18-1m-1", chapterNo: 18, chapterName: "Electronic Data Interchange- EDI", chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 1, type: "mcq", questionText: "EDI stands for",
    questionTextTamil: "EDI என்பதன் விரிவாக்கம்:",
    options: {
      A: "Electronic Data Interchange",
      B: "Electronic Device Interchange",
      C: "Electronic Digital Interchange",
      D: "Electronic Data Interface"
    },
    optionsTamil: {
      A: "Electronic Data Interchange",
      B: "Electronic Device Interchange",
      C: "Electronic Digital Interchange",
      D: "Electronic Data Interface"
    },
    correctOption: "A", answer: "A) Electronic Data Interchange", answerTamil: "A) Electronic Data Interchange", isBookBack: true
  },
  {
    id: "ca12-ch18-1m-2", chapterNo: 18, chapterName: "Electronic Data Interchange- EDI", chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 1, type: "mcq", questionText: "Which of the following is an internationally recognized standard format for EDI?",
    questionTextTamil: "EDI-க்கான சர்வதேச அளவில் அங்கீகரிக்கப்பட்ட நிலையான வடிவம் எது?",
    options: { A: "UN/EDIFACT", B: "ANSI X12", C: "TDCC", D: "HIPAA" },
    optionsTamil: { A: "UN/EDIFACT", B: "ANSI X12", C: "TDCC", D: "HIPAA" },
    correctOption: "A", answer: "A) UN/EDIFACT", answerTamil: "A) UN/EDIFACT", isBookBack: true
  },
  {
    id: "ca12-ch18-1m-3", chapterNo: 18, chapterName: "Electronic Data Interchange- EDI", chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 1, type: "mcq", questionText: "Which is the first industry-specific EDI standard?",
    questionTextTamil: "முதன்முதலில் உருவாக்கப்பட்ட தொழில் சார்ந்த EDI தரநிலை எது?",
    options: { A: "TDCC", B: "UN/EDIFACT", C: "ANSI X12", D: "ODETTE" },
    optionsTamil: { A: "TDCC (Transportation Data Coordinating Committee)", B: "UN/EDIFACT", C: "ANSI X12", D: "ODETTE" },
    correctOption: "A", answer: "A) TDCC", answerTamil: "A) TDCC", isBookBack: true
  },
  {
    id: "ca12-ch18-1m-4", chapterNo: 18, chapterName: "Electronic Data Interchange- EDI", chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 1, type: "mcq", questionText: "Which of the following is a type of EDI?",
    questionTextTamil: "பின்வருவனவற்றுள் எது EDI-ன் ஒரு வகை?",
    options: { A: "Direct EDI", B: "Indirect EDI", C: "Manual EDI", D: "Analog EDI" },
    optionsTamil: { A: "நேரடி EDI (Direct EDI)", B: "மறைமுக EDI", C: "கைமுறை EDI", D: "அனலாக் EDI" },
    correctOption: "A", answer: "A) Direct EDI", answerTamil: "A) நேரடி EDI (Direct EDI)", isBookBack: true
  },
  {
    id: "ca12-ch18-1m-5", chapterNo: 18, chapterName: "Electronic Data Interchange- EDI", chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 1, type: "mcq", questionText: "Who is called as the father of EDI?",
    questionTextTamil: "EDI-ன் தந்தை என்று அழைக்கப்படுபவர் யார்?",
    options: { A: "Ed Guilbert", B: "Tim Berners-Lee", C: "Vint Cerf", D: "Charles Babbage" },
    optionsTamil: { A: "எட் கில்பர்ட் (Ed Guilbert)", B: "டிம் பெர்னர்ஸ்-லீ", C: "வின்ட் செர்ப்", D: "சார்லஸ் பாபேஜ்" },
    correctOption: "A", answer: "A) Ed Guilbert", answerTamil: "A) எட் கில்பர்ட் (Ed Guilbert)", isBookBack: true
  },
  // 2M (3)
  {
    id: "ca12-ch18-2m-1", chapterNo: 18, chapterName: "Electronic Data Interchange- EDI", chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 2, type: "short", questionText: "Define EDI.",
    questionTextTamil: "மின்னணு தரவு பரிமாற்றம் (EDI) - வரையறுக்கவும்.",
    answer: "EDI (Electronic Data Interchange) is the computer-to-computer electronic exchange of structured standard business documents between trading partners without human intervention.",
    answerTamil: "EDI என்பது வணிகக் கூட்டாளர்களுக்கு இடையே மனித தலையீடு இன்றி கணினிகளுக்கு இடையே தரப்படுத்தப்பட்ட வணிக ஆவணங்களை மின்னணு முறையில் பரிமாறிக்கொள்ளும் அமைப்பாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch18-2m-2", chapterNo: 18, chapterName: "Electronic Data Interchange- EDI", chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 2, type: "short", questionText: "List few types of business documents that are transmitted through EDI.",
    questionTextTamil: "EDI மூலம் பரிமாறப்படும் வணிக ஆவணங்கள் சிலவற்றை பட்டியலிடுக.",
    answer: "Documents transmitted via EDI:\n1. Purchase Orders (PO)\n2. Invoices & Billing Statements\n3. Shipping Notices & Bill of Lading\n4. Customs Declarations\n5. Payment Confirmations.",
    answerTamil: "EDI வணிக ஆவணங்கள்:\n1. கொள்முதல் ஆணைகள் (Purchase Orders)\n2. விலைப்பட்டியல்கள் (Invoices)\n3. கப்பல் அனுப்பல் அறிவிப்புகள்\n4. சுங்க அறிவிப்புகள்\n5. கட்டண ரசீதுகள்.",
    isBookBack: true
  },
  {
    id: "ca12-ch18-2m-3", chapterNo: 18, chapterName: "Electronic Data Interchange- EDI", chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 2, type: "short", questionText: "Write any two EDI Standards.",
    questionTextTamil: "ஏதேனும் இரண்டு EDI தரநிலைகளை எழுதுக.",
    answer: "1. UN/EDIFACT (United Nations Electronic Data Interchange for Administration, Commerce and Transport)\n2. ANSI ASC X12 (American National Standards Institute).",
    answerTamil: "1. UN/EDIFACT (ஐக்கிய நாடுகள் சபை தரநிலை)\n2. ANSI ASC X12 (அமெரிக்க தேசிய தரநிலை).",
    isBookBack: true
  },
  // 3M (3)
  {
    id: "ca12-ch18-3m-1", chapterNo: 18, chapterName: "Electronic Data Interchange- EDI", chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 3, type: "brief", questionText: "Write a short note on EDI via VAN.",
    questionTextTamil: "VAN வழியாக EDI (EDI via VAN) பற்றி சிறு குறிப்பு வரைக.",
    answer: "EDI via VAN (Value Added Network) uses a secure third-party private network service provider that acts as an electronic post office, routing, verifying, and delivering EDI messages safely between trading partners.",
    answerTamil: "VAN (மதிப்புக் கூட்டப்பட்ட வலையமைப்பு) என்பது ஒரு தனியார் மூன்றாம் தரப்பு சேவை மூலமாக மின்னணு அஞ்சலகம் போல செயல்பட்டு EDI ஆவணங்களை பாதுகாப்பாக வணிக கூட்டாளர்களிடையே கொண்டு சேர்க்கும் அமைப்பாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch18-3m-2", chapterNo: 18, chapterName: "Electronic Data Interchange- EDI", chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 3, type: "brief", questionText: "List the various layers of EDI .",
    questionTextTamil: "EDI-ன் பல்வேறு அடுக்குகளைப் பட்டியலிடுக.",
    answer: "Four Layers of EDI Architecture:\n1. Business Application Layer (ERP, Accounting software)\n2. Standard Translation Layer (EDI Translator / Mapper)\n3. EDI Communication Layer (EDI Mailbox, AS2, FTP)\n4. Physical Network Transport Layer (Internet, VAN).",
    answerTamil: "EDI கட்டமைப்பின் 4 அடுக்குகள்:\n1. வணிக பயன்பாட்டு அடுக்கு (Business Application Layer)\n2. நிலையான மொழிபெயர்ப்பு அடுக்கு (Standard Translation Layer)\n3. EDI தகவல் தொடர்பு அடுக்கு (EDI Communication Layer)\n4. இயற்பியல் வலையமைப்பு போக்குவரத்து அடுக்கு (Physical Transport Layer).",
    isBookBack: true
  },
  {
    id: "ca12-ch18-3m-3", chapterNo: 18, chapterName: "Electronic Data Interchange- EDI", chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 3, type: "brief", questionText: "Write a note on UN/EDIFACT.",
    questionTextTamil: "UN/EDIFACT பற்றி குறிப்பு வரைக.",
    answer: "UN/EDIFACT (United Nations rules for Electronic Data Interchange for Administration, Commerce and Transport) is the international EDI standard developed under the United Nations Economic Commission for Europe (UNECE) in 1987 for multi-country global trade.",
    answerTamil: "UN/EDIFACT என்பது 1987-ல் ஐக்கிய நாடுகள் சபையால் உருவாக்கப்பட்ட சர்வதேச அளவிலான மின்னணு தரவு பரிமாற்ற தரநிலையாகும்.",
    isBookBack: true
  },
  // 5M (2)
  {
    id: "ca12-ch18-5m-1", chapterNo: 18, chapterName: "Electronic Data Interchange- EDI", chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 5, type: "essay", questionText: "Briefly explain types of EDI.",
    questionTextTamil: "EDI-ன் பல்வேறு வகைகளை சுருக்கமாக விளக்குக.",
    answer: "Types of EDI:\n\n1. Direct EDI / Point-to-Point: Two business partners connect directly over the Internet via secure protocols (AS2) without intermediary fees.\n2. EDI via VAN (Value Added Network): Connects through a dedicated 3rd-party network managing mailboxes, protocol conversion, and transaction logs.\n3. Web EDI: Conducts EDI through a standard web browser where small suppliers fill forms that are converted into EDI messages automatically.\n4. Mobile EDI: Uses mobile handheld applications to process purchase orders and shipping barcodes on warehouse floors.",
    answerTamil: "EDI-ன் முக்கிய வகைகள்:\n1. நேரடி EDI (Direct / Point-to-Point): இரண்டு வணிக நிறுவனங்கள் நேரடியாக பாதுகாப்பான நெறிமுறைகள் மூலம் இணைவது.\n2. VAN வழி EDI: மூன்றாம் தரப்பு மதிப்புக்கூட்டு வலையமைப்பு மூலம் பரிமாற்றம் செய்வது.\n3. வலை EDI (Web EDI): வலை உலாவி மூலம் படிவங்களை நிரப்பி EDI ஆக மாற்றுவது.\n4. மொபைல் EDI: ஸ்மார்ட்போன் மற்றும் டேப்லெட் மூலம் EDI பரிவர்த்தனைகளை மேற்கொள்வது.",
    isBookBack: true
  },
  {
    id: "ca12-ch18-5m-2", chapterNo: 18, chapterName: "Electronic Data Interchange- EDI", chapterNameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)",
    marks: 5, type: "essay", questionText: "What are the advantages of EDI?",
    questionTextTamil: "EDI-ன் நன்மைகள் யாவை?",
    answer: "Advantages of EDI:\n\n1. Dramatic Cost Reduction: Eliminates paper printing, postage, courier fees, and document storage expenses.\n2. High Speed and Real-time Processing: Transactions that took days via mail are executed in seconds.\n3. High Accuracy: Eliminates manual data entry errors and handwriting misinterpretations.\n4. Improved Business Relationships: Fast automated order fulfillment enhances supplier-buyer trust.\n5. Strategic Supply Chain Efficiency: Enables Just-In-Time (JIT) manufacturing and real-time inventory tracking.",
    answerTamil: "EDI-ன் நன்மைகள்:\n1. பெரும் செலவு சேமிப்பு: காகிதம், அஞ்சல் மற்றும் சேமிப்பு செலவுகள் முற்றிலுமாக குறைகிறது.\n2. மின்னல் வேகம்: நாட்கள் எடுக்கும் ஆவண பரிமாற்றம் சில வினாடிகளில் முடிகிறது.\n3. பிழையற்ற துல்லியம்: மனித தட்டச்சு பிழைகள் தவிர்க்கப்படுகின்றன.\n4. சிறந்த வணிக உறவு: விரைவான விநியோகம் வாடிக்கையாளர் திருப்தியை அதிகரிக்கிறது.\n5. பயனுள்ள சரக்கு மேலாண்மை: நிகழ்நேர இருப்பு மேலாண்மை மற்றும் திட்டமிடல்.",
    isBookBack: true
  }
];

fs.writeFileSync('scripts_ca12_final/ch16.json', JSON.stringify(ch16_questions, null, 2), 'utf8');
fs.writeFileSync('scripts_ca12_final/ch17.json', JSON.stringify(ch17_questions, null, 2), 'utf8');
fs.writeFileSync('scripts_ca12_final/ch18.json', JSON.stringify(ch18_questions, null, 2), 'utf8');
console.log('Ch 16 done:', ch16_questions.length, '(expected 23)');
console.log('Ch 17 done:', ch17_questions.length, '(expected 23)');
console.log('Ch 18 done:', ch18_questions.length, '(expected 13)');
