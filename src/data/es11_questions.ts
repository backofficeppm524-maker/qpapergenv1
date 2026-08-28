import { Question, Chapter } from '../types';

export const ES11_CHAPTERS: Chapter[] = [
  { no: 1, name: "Introduction to Employability Skills & Self-Awareness", nameTamil: "பணியமர்த்தல் திறன்கள் அறிமுகம் மற்றும் சுய விழிப்புணர்வு" },
  { no: 2, name: "English & Communication Skills", nameTamil: "ஆங்கிலம் மற்றும் தகவல் தொடர்புத் திறன்கள்" },
  { no: 3, name: "Self-Management & Goal Setting", nameTamil: "சுய மேலாண்மை மற்றும் இலக்கு நிர்ணயம்" },
  { no: 4, name: "Basic ICT & Digital Literacy", nameTamil: "அடிப்படை ICT மற்றும் டிஜிட்டல் எழுத்தறிவு" },
  { no: 5, name: "Entrepreneurship Concepts & Innovation", nameTamil: "தொழில் முனைவுக் கருத்துக்கள் மற்றும் புதுமை" },
  { no: 6, name: "Green Skills & Environmental Awareness", nameTamil: "பசுமைத் திறன்கள் மற்றும் சுற்றுச்சூழல் விழிப்புணர்வு" },
  { no: 7, name: "Basic Financial Literacy & Banking", nameTamil: "அடிப்படை நிதி எழுத்தறிவு மற்றும் வங்கி நடைமுறைகள்" },
  { no: 8, name: "Workplace Ethics, Safety & Preparation", nameTamil: "பணித்தள நெறிமுறைகள், பாதுகாப்பு மற்றும் தயார்படுத்தல்" }
];

export const ES11_QUESTIONS: Question[] = [
  // CHAPTER 1: Introduction to Employability Skills & Self-Awareness
  {
    id: "es11-ch1-1m-1",
    chapterNo: 1,
    chapterName: "Introduction to Employability Skills & Self-Awareness",
    chapterNameTamil: "பணியமர்த்தல் திறன்கள் அறிமுகம் மற்றும் சுய விழிப்புணர்வு",
    marks: 1,
    type: "mcq",
    questionText: "Employability skills are also known as ________.",
    questionTextTamil: "பணியமர்த்தல் திறன்கள் (Employability Skills) எவ்வாறு அழைக்கப்படுகின்றன?",
    options: {
      A: "Soft skills and foundational career skills",
      B: "Physical strength",
      C: "Only theoretical knowledge",
      D: "Typing speed only"
    },
    optionsTamil: {
      A: "மென் திறன்கள் மற்றும் அடிப்படை தொழில் திறன்கள்",
      B: "உடல் வலிமை மட்டும்",
      C: "கோட்பாட்டு அறிவு மட்டும்",
      D: "தட்டச்சு வேகம் மட்டும்"
    },
    correctOption: "A",
    answer: "A) Soft skills and foundational career skills",
    answerTamil: "A) மென் திறன்கள் மற்றும் அடிப்படை தொழில் திறன்கள்",
    isBookBack: true,
    difficulty: "Easy"
  },
  {
    id: "es11-ch1-1m-2",
    chapterNo: 1,
    chapterName: "Introduction to Employability Skills & Self-Awareness",
    chapterNameTamil: "பணியமர்த்தல் திறன்கள் அறிமுகம் மற்றும் சுய விழிப்புணர்வு",
    marks: 1,
    type: "mcq",
    questionText: "SWOT analysis is a tool used for ________.",
    questionTextTamil: "SWOT பகுப்பாய்வு எதற்காகப் பயன்படுத்தப்படும் ஒரு கருவியாகும்?",
    options: {
      A: "Evaluating Strengths, Weaknesses, Opportunities, and Threats",
      B: "Calculating mathematical formulas",
      C: "Measuring computer hardware speed",
      D: "Painting diagrams"
    },
    optionsTamil: {
      A: "பலம், பலவீனம், வாய்ப்புகள் மற்றும் அச்சுறுத்தல்களை மதிப்பீடு செய்தல்",
      B: "கணித சூத்திரங்களை கணக்கிடுதல்",
      C: "கணினி வேகத்தை அளவிடுதல்",
      D: "ஓவியம் வரைதல்"
    },
    correctOption: "A",
    answer: "A) Evaluating Strengths, Weaknesses, Opportunities, and Threats",
    answerTamil: "A) பலம், பலவீனம், வாய்ப்புகள் மற்றும் அச்சுறுத்தல்களை மதிப்பீடு செய்தல் (SWOT)",
    isBookBack: true,
    difficulty: "Easy"
  },
  {
    id: "es11-ch1-2m-1",
    chapterNo: 1,
    chapterName: "Introduction to Employability Skills & Self-Awareness",
    chapterNameTamil: "பணியமர்த்தல் திறன்கள் அறிமுகம் மற்றும் சுய விழிப்புணர்வு",
    marks: 2,
    type: "short",
    questionText: "What is Self-Awareness? Why is it important for students?",
    questionTextTamil: "சுய விழிப்புணர்வு (Self-Awareness) என்றால் என்ன? அது மாணவர்களுக்கு ஏன் முக்கியமானது?",
    answer: "Self-awareness is the conscious knowledge of one's own character, feelings, motives, and desires. It helps students identify their innate talents, areas of improvement, and make informed career choices.",
    answerTamil: "சுய விழிப்புணர்வு என்பது ஒருவரது குணநலன்கள், உணர்வுகள், பலம் மற்றும் பலவீனங்களை தெளிவாக அறிந்துகொள்ளும் திறன் ஆகும். இது மாணவர்கள் தங்களுக்கு ஏற்ற கல்வி மற்றும் தொழில் பாதையைத் தேர்ந்தெடுக்க உதவுகிறது.",
    isBookBack: true,
    difficulty: "Easy"
  },
  {
    id: "es11-ch1-3m-1",
    chapterNo: 1,
    chapterName: "Introduction to Employability Skills & Self-Awareness",
    chapterNameTamil: "பணியமர்த்தல் திறன்கள் அறிமுகம் மற்றும் சுய விழிப்புணர்வு",
    marks: 3,
    type: "brief",
    questionText: "Explain the four components of a personal SWOT analysis.",
    questionTextTamil: "தனிநபர் SWOT பகுப்பாய்வின் நான்கு கூறுகளை விளக்குக.",
    answer: "1. Strengths (S): Internal positive attributes (e.g., strong analytical skills, good communication).\n2. Weaknesses (W): Internal areas needing growth (e.g., stage fear, procrastination).\n3. Opportunities (O): External circumstances that help career progress (e.g., vocational courses, job fairs).\n4. Threats (T): External obstacles to success (e.g., intense market competition, technology obsolescence).",
    answerTamil: "1. Strengths (பலம்): நமது தனிப்பட்ட திறமைகள் மற்றும் நேர்மறை குணங்கள்.\n2. Weaknesses (பலவீனம்): நாம் மேம்படுத்த வேண்டிய குறைகள் (எ.கா. மேடை பயம்).\n3. Opportunities (வாய்ப்புகள்): வளர்ச்சிக்கு உதவும் வெளிப்புற வாய்ப்புகள் (எ.கா. தொழிற்பயிற்சி).\n4. Threats (சவால்கள் / அச்சுறுத்தல்கள்): வெளிப்புற தடைகள் மற்றும் கடுமையான போட்டி.",
    isBookBack: true,
    difficulty: "Medium"
  },
  {
    id: "es11-ch1-5m-1",
    chapterNo: 1,
    chapterName: "Introduction to Employability Skills & Self-Awareness",
    chapterNameTamil: "பணியமர்த்தல் திறன்கள் அறிமுகம் மற்றும் சுய விழிப்புணர்வு",
    marks: 5,
    type: "essay",
    questionText: "Why are Employability Skills essential in the modern job market? Differentiate between Hard Skills and Soft Skills with examples.",
    questionTextTamil: "நவீன வேலைவாய்ப்புச் சந்தையில் பணியமர்த்தல் திறன்கள் ஏன் அத்தியாவசியமானவை? கடினத் திறன்கள் (Hard Skills) மற்றும் மென் திறன்களை (Soft Skills) எடுத்துக்காட்டுகளுடன் வேறுபடுத்துக.",
    answer: "Importance of Employability Skills:\nEmployers seek candidates who not only possess technical qualifications but can also communicate clearly, work in diverse teams, solve problems, and adapt quickly.\n\nDifferences:\n1. Hard Skills:\n- Definition: Specific, teachable technical knowledge and abilities that can be measured.\n- Examples: Computer programming, typing, bookkeeping, operating machinery.\n\n2. Soft Skills:\n- Definition: Interpersonal habits, emotional intelligence, and communication attributes that determine how one works with others.\n- Examples: Teamwork, active listening, time management, conflict resolution, leadership.",
    answerTamil: "பணியமர்த்தல் திறன்களின் முக்கியத்துவம்:\nஇன்றைய பணியிடங்களில் தொழில்நுட்பத் தகுதியோடு, சக ஊழியர்களுடன் இணைந்து செயல்படும் ஆற்றல், தகவல் தொடர்புத் திறன் மற்றும் பொறுப்புணர்வு உள்ளவர்களுக்கே முன்னுரிமை வழங்கப்படுகிறது.\n\nவேறுபாடுகள்:\n1. கடினத் திறன்கள் (Hard Skills):\n- வரையறை: கற்றுக்கொள்ளக்கூடிய குறிப்பிட்ட தொழில்நுட்பத் திறன்கள்.\n- எடுத்துக்காட்டு: கணினி நிரலாக்கம், தட்டச்சு, இயந்திரங்களை இயக்குதல், கணக்கியல்.\n\n2. மென் திறன்கள் (Soft Skills):\n- வரையறை: மனித உறவுகள், நடத்தை மற்றும் தகவல் தொடர்பு சார்ந்த திறன்கள்.\n- எடுத்துக்காட்டு: குழு ஒத்துழைப்பு, நேர மேலாண்மை, தலைமைப் பண்பு, பொறுமை.",
    isBookBack: true,
    difficulty: "Medium"
  },

  // CHAPTER 2: English & Communication Skills
  {
    id: "es11-ch2-1m-1",
    chapterNo: 2,
    chapterName: "English & Communication Skills",
    chapterNameTamil: "ஆங்கிலம் மற்றும் தகவல் தொடர்புத் திறன்கள்",
    marks: 1,
    type: "mcq",
    questionText: "Which of the following is a polite greeting in a formal email?",
    questionTextTamil: "அலுவலக முறைசார்ந்த மின்னஞ்சலில் (Formal Email) பயன்படுத்தப்படும் கண்ணியமான முகமன் எது?",
    options: {
      A: "Hey buddy!",
      B: "Dear Sir/Madam,",
      C: "Yo what's up?",
      D: "Listen to me,"
    },
    optionsTamil: {
      A: "ஏய் நண்பா!",
      B: "மதிப்பிற்குரிய ஐயா/அம்மா (Dear Sir/Madam),",
      C: "என்ன விஷயம்?",
      D: "நான் சொல்வதைக் கேள்,"
    },
    correctOption: "B",
    answer: "B) Dear Sir/Madam,",
    answerTamil: "B) மதிப்பிற்குரிய ஐயா/அம்மா (Dear Sir/Madam),",
    isBookBack: true,
    difficulty: "Easy"
  },
  {
    id: "es11-ch2-1m-2",
    chapterNo: 2,
    chapterName: "English & Communication Skills",
    chapterNameTamil: "ஆங்கிலம் மற்றும் தகவல் தொடர்புத் திறன்கள்",
    marks: 1,
    type: "mcq",
    questionText: "Active listening requires ________.",
    questionTextTamil: "கூர்ந்து கவனித்தல் (Active Listening) என்பது எதனைக் குறிக்கிறது?",
    options: {
      A: "Looking at the phone while listening",
      B: "Paying full attention, avoiding interruptions, and understanding the speaker's intent",
      C: "Talking continuously without letting others speak",
      D: "Pretending to hear"
    },
    optionsTamil: {
      A: "பேசும்போது தொலைபேசியைப் பார்த்துக் கொண்டிருப்பது",
      B: "முழு கவனத்துடன் கவனித்தல், இடையில் குறுக்கிடாமல் பேச்சாளரின் கருத்தைப் புரிந்துகொள்ளுதல்",
      C: "பிறரை பேச விடாமல் தொடர்ந்து பேசுவது",
      D: "கேட்பது போல் பாசாங்கு செய்தல்"
    },
    correctOption: "B",
    answer: "B) Paying full attention, avoiding interruptions, and understanding the speaker's intent",
    answerTamil: "B) முழு கவனத்துடன் கவனித்தல், இடையில் குறுக்கிடாமல் பேச்சாளரின் கருத்தைப் புரிந்துகொள்ளுதல்",
    isBookBack: true,
    difficulty: "Easy"
  },
  {
    id: "es11-ch2-2m-1",
    chapterNo: 2,
    chapterName: "English & Communication Skills",
    chapterNameTamil: "ஆங்கிலம் மற்றும் தகவல் தொடர்புத் திறன்கள்",
    marks: 2,
    type: "short",
    questionText: "Differentiate between Formal and Informal Communication with one example each.",
    questionTextTamil: "முறைசார்ந்த (Formal) மற்றும் முறைசாரா (Informal) தகவல் தொடர்பை தலா ஒரு எடுத்துக்காட்டுடன் வேறுபடுத்துக.",
    answer: "1. Formal Communication: Follows predefined workplace hierarchy and professional rules (e.g., Business emails, official memos).\n2. Informal Communication: Casual, spontaneous conversations among colleagues and friends (e.g., Lunchroom chats, personal instant messages).",
    answerTamil: "1. முறைசார்ந்த தொடர்பு (Formal): அலுவலக விதிமுறைகள் மற்றும் ஒழுங்குமுறைகளைப் பின்பற்றும் தொடர்பு (எ.கா. அலுவல் மின்னஞ்சல்).\n2. முறைசாரா தொடர்பு (Informal): நண்பர்கள் மற்றும் சக ஊழியர்களிடையே நடக்கும் இயல்பான உரையாடல் (எ.கா. தேநீர் இடைவேளை அரட்டை).",
    isBookBack: true,
    difficulty: "Easy"
  },
  {
    id: "es11-ch2-3m-1",
    chapterNo: 2,
    chapterName: "English & Communication Skills",
    chapterNameTamil: "ஆங்கிலம் மற்றும் தகவல் தொடர்புத் திறன்கள்",
    marks: 3,
    type: "brief",
    questionText: "What are the key guidelines for drafting a clear and professional business email?",
    questionTextTamil: "தெளிவான மற்றும் தொழில்முறை வணிக மின்னஞ்சலை எழுதுவதற்கான முக்கிய வழிகாட்டுதல்கள் யாவை?",
    answer: "1. Clear Subject Line: Summarize the purpose of the email concisely.\n2. Professional Salutation & Closing: Use 'Dear Mr./Ms. [Name]' and end with 'Best regards' or 'Sincerely'.\n3. Concise Body: Keep sentences short, formatted with bullet points for readability, and proofread for typos.",
    answerTamil: "1. தெளிவான பொருள் வரி (Subject Line): மின்னஞ்சலின் நோக்கத்தை சுருக்கமாகக் குறிப்பிடுதல்.\n2. கண்ணியமான வாழ்த்து மற்றும் முடிவு: Dear Sir/Madam மற்றும் Regards என முடித்தல்.\n3. சுருக்கமான உரைப்பகுதி: பிழையின்றி சுருக்கமாகவும் புல்லட் பாயிண்டுகளுடன் எழுதுதல்.",
    isBookBack: true,
    difficulty: "Medium"
  },
  {
    id: "es11-ch2-5m-1",
    chapterNo: 2,
    chapterName: "English & Communication Skills",
    chapterNameTamil: "ஆங்கிலம் மற்றும் தகவல் தொடர்புத் திறன்கள்",
    marks: 5,
    type: "essay",
    questionText: "Explain the importance of Non-Verbal Communication (body posture, eye contact, facial expressions) during job interviews and client interactions.",
    questionTextTamil: "வேலை நேர்காணல்கள் மற்றும் வாடிக்கையாளர் சந்திப்புகளில் சொல்லசாரா தொடர்பின் (உடல் மொழி, கண் தொடர்பு, முகபாவனைகள்) முக்கியத்துவத்தை விளக்குக.",
    answer: "Significance of Non-Verbal Communication:\n1. Eye Contact: Demonstrates honesty, confidence, attentiveness, and trustworthiness.\n2. Facial Expressions: A warm, natural smile puts clients and interviewers at ease and conveys an approachable personality.\n3. Posture: An upright, open posture conveys professionalism and readiness to engage, whereas slumping indicates disinterest.\n4. Hand Gestures: Natural hand gestures clarify spoken points, while fidgeting reveals anxiety.\n5. Personal Space and Greeting: A polite, firm handshake and respecting professional boundaries establish positive first impressions.",
    answerTamil: "சொல்லசாரா தொடர்பின் முக்கியத்துவம்:\n1. கண் தொடர்பு: நேர்மை, தன்னம்பிக்கை மற்றும் தீவிர கவனத்தை வெளிப்படுத்துகிறது.\n2. முகபாவனைகள்: மென்மையான புன்னகை அணுகுவதற்கு எளிதான நபர் என்ற நன்மதிப்பை உருவாக்குகிறது.\n3. உடல் தோரணை (Posture): நிமிர்ந்து அமர்வது விழிப்புணர்வையும் பொறுப்புணர்வையும் காட்டுகிறது.\n4. சைகைகள்: பேசுவதை மேலும் தெளிவுபடுத்த உதவுகிறது.\n5. முதல் அபிப்ராயம்: நேர்காணல் தொடங்கும் முதல் நிமிடத்திலேயே ஒருவரது ஆளுமையை உடல்மொழி தீர்மானிக்கிறது.",
    isBookBack: true,
    difficulty: "Medium"
  },

  // CHAPTER 3: Self-Management & Goal Setting
  {
    id: "es11-ch3-1m-1",
    chapterNo: 3,
    chapterName: "Self-Management & Goal Setting",
    chapterNameTamil: "சுய மேலாண்மை மற்றும் இலக்கு நிர்ணயம்",
    marks: 1,
    type: "mcq",
    questionText: "Which factor is most responsible for building positive self-discipline?",
    questionTextTamil: "நேர்மறையான சுய ஒழுக்கத்தை வளர்ப்பதற்கு மிகவும் காரணமான காரணி எது?",
    options: {
      A: "Consistent daily habits and routines",
      B: "Waiting for external punishment",
      C: "Irregular sleep patterns",
      D: "Giving up when facing difficulties"
    },
    optionsTamil: {
      A: "நிலையான தினசரி பழக்கவழக்கங்கள் மற்றும் அட்டவணை",
      B: "மற்றவர்களின் தண்டனைக்காக காத்திருப்பது",
      C: "முறையற்ற தூக்கம்",
      D: "சிரமங்கள் வரும்போது கைவிடுதல்"
    },
    correctOption: "A",
    answer: "A) Consistent daily habits and routines",
    answerTamil: "A) நிலையான தினசரி பழக்கவழக்கங்கள் மற்றும் அட்டவணை",
    isBookBack: true,
    difficulty: "Easy"
  },
  {
    id: "es11-ch3-2m-1",
    chapterNo: 3,
    chapterName: "Self-Management & Goal Setting",
    chapterNameTamil: "சுய மேலாண்மை மற்றும் இலக்கு நிர்ணயம்",
    marks: 2,
    type: "short",
    questionText: "What is the difference between Short-Term and Long-Term Goals?",
    questionTextTamil: "குறுகிய கால இலக்கு மற்றும் நீண்ட கால இலக்குகளுக்கு இடையேயான வேறுபாடு யாது?",
    answer: "1. Short-Term Goals: Objectives achievable in days, weeks, or months (e.g., scoring high in mid-term exams).\n2. Long-Term Goals: Big milestones taking years to accomplish (e.g., becoming a certified mechanical engineer).",
    answerTamil: "1. குறுகிய கால இலக்கு: சில நாட்கள், வாரங்கள் அல்லது மாதங்களில் அடையக்கூடியவை (எ.கா. பருவத் தேர்வில் அதிக மதிப்பெண் பெறுதல்).\n2. நீண்ட கால இலக்கு: பல ஆண்டுகள் கடின உழைப்பால் அடையக்கூடியவை (எ.கா. சிறந்த தொழில் நிறுவனத்தைத் தொடங்குதல்).",
    isBookBack: true,
    difficulty: "Easy"
  },
  {
    id: "es11-ch3-3m-1",
    chapterNo: 3,
    chapterName: "Self-Management & Goal Setting",
    chapterNameTamil: "சுய மேலாண்மை மற்றும் இலக்கு நிர்ணயம்",
    marks: 3,
    type: "brief",
    questionText: "State three strategies to overcome procrastination and build self-motivation.",
    questionTextTamil: "செயல்களைத் தள்ளிப்போடும் பழக்கத்தை (Procrastination) தவிர்த்து சுய ஊக்கத்தை வளர்ப்பதற்கான மூன்று உத்திகளைக் கூறுக.",
    answer: "1. Break Tasks into Smaller Steps: Make large assignments manageable to reduce initial friction.\n2. 5-Minute Rule: Commit to working on a task for just five minutes to build momentum.\n3. Reward Milestone Achievements: Celebrate small progress to maintain enthusiasm and discipline.",
    answerTamil: "1. பணிகளை சிறு சிறு பகுதிகளாகப் பிரித்தல்: பெரிய வேலைகளை எளிதாக முடிக்க இது உதவுகிறது.\n2. 5 நிமிட விதி: ஒரு வேலையை குறைந்தபட்சம் 5 நிமிடம் செய்யத் தொடங்கினால் ஆர்வம் தானாக வரும்.\n3. சிறு வெற்றிகளுக்கு வெகுமதி அளித்தல்: ஒவ்வொரு மைல்கல்லையும் முடிக்கும்போது சுய ஊக்கம் அதிகரிக்கும்.",
    isBookBack: true,
    difficulty: "Medium"
  },
  {
    id: "es11-ch3-5m-1",
    chapterNo: 3,
    chapterName: "Self-Management & Goal Setting",
    chapterNameTamil: "சுய மேலாண்மை மற்றும் இலக்கு நிர்ணயம்",
    marks: 5,
    type: "essay",
    questionText: "Explain how setting SMART goals with an action plan helps students achieve academic and vocational success.",
    questionTextTamil: "SMART இலக்குகள் மற்றும் செயல் திட்டத்தை வகுப்பது மாணவர்கள் கல்வி மற்றும் தொழிற்கல்வியில் வெற்றி பெற எவ்வாறு உதவுகிறது என்பதை விளக்குக.",
    answer: "SMART Goals Framework:\n1. Specific: Well-defined goal (e.g., 'Learn Python programming syntax').\n2. Measurable: Trackable metric (e.g., 'Complete 20 practice code problems per week').\n3. Achievable: Realistic within student capabilities and resources.\n4. Relevant: Aligns with broader vocational aspirations.\n5. Time-bound: Fixed target date (e.g., 'By the end of this semester').\n\nAction Plan Implementation:\n- Daily priority schedule ensuring deliberate practice.\n- Regular self-evaluation and course-correction against target milestones.",
    answerTamil: "SMART இலக்கு கட்டமைப்பு:\n1. Specific (குறிப்பிட்டது): தெளிவான இலக்கு (எ.கா. கம்ப்யூட்டர் தட்டச்சு வேகம் அதிகரித்தல்).\n2. Measurable (அளவிடக்கூடியது): வாரத்திற்கு 5 மணி நேரம் பயிற்சி போன்ற அளவீடு.\n3. Achievable (அடையக்கூடியது): தனது சக்திக்கு உட்பட்ட எதார்த்தமான இலக்கு.\n4. Relevant (பொருத்தமானது): தனது எதிர்கால வேலைக்கு உதவும் திறன்.\n5. Time-bound (காலவரையறை): 3 மாதங்களுக்குள் முடிப்பது போன்ற கெடு.\n\nசெயல் திட்டத்தின் பலன்கள்: நேர விரயம் தவிர்க்கப்பட்டு திட்டமிட்ட முன்னேற்றம் சாத்தியமாகிறது.",
    isBookBack: true,
    difficulty: "Hard"
  },

  // CHAPTER 4: Basic ICT & Digital Literacy
  {
    id: "es11-ch4-1m-1",
    chapterNo: 4,
    chapterName: "Basic ICT & Digital Literacy",
    chapterNameTamil: "அடிப்படை ICT மற்றும் டிஜிட்டல் எழுத்தறிவு",
    marks: 1,
    type: "mcq",
    questionText: "Which keyboard shortcut is commonly used to Copy selected text across applications?",
    questionTextTamil: "தேர்ந்தெடுக்கப்பட்ட உரையை நகலெடுக்க (Copy) பயன்படும் விசைப்பலகை குறுக்குவழி எது?",
    options: {
      A: "Ctrl + X",
      B: "Ctrl + C",
      C: "Ctrl + V",
      D: "Ctrl + Z"
    },
    optionsTamil: {
      A: "Ctrl + X",
      B: "Ctrl + C",
      C: "Ctrl + V",
      D: "Ctrl + Z"
    },
    correctOption: "B",
    answer: "B) Ctrl + C",
    answerTamil: "B) Ctrl + C",
    isBookBack: true,
    difficulty: "Easy"
  },
  {
    id: "es11-ch4-2m-1",
    chapterNo: 4,
    chapterName: "Basic ICT & Digital Literacy",
    chapterNameTamil: "அடிப்படை ICT மற்றும் டிஜிட்டல் எழுத்தறிவு",
    marks: 2,
    type: "short",
    questionText: "What is an Operating System (OS)? Name two popular operating systems.",
    questionTextTamil: "இயங்குதளம் (Operating System) என்றால் என்ன? இரண்டு உதாரணங்களைத் தருக.",
    answer: "An Operating System is system software that manages computer hardware, software resources, and provides common services for computer programs. Examples: Microsoft Windows, Linux, Android.",
    answerTamil: "இயங்குதளம் என்பது கணினி வன்பொருள் மற்றும் மென்பொருட்களை நிர்வகிக்கும் அடிப்படை மென்பொருள் ஆகும். எ.கா: மைக்ரோசாப்ட் விண்டோஸ் (Windows), லினக்ஸ் (Linux).",
    isBookBack: true,
    difficulty: "Easy"
  },
  {
    id: "es11-ch4-3m-1",
    chapterNo: 4,
    chapterName: "Basic ICT & Digital Literacy",
    chapterNameTamil: "அடிப்படை ICT மற்றும் டிஜிட்டல் எழுத்தறிவு",
    marks: 3,
    type: "brief",
    questionText: "What is the difference between CC and BCC in an email?",
    questionTextTamil: "மின்னஞ்சலில் CC மற்றும் BCC ஆகியவற்றிற்கு இடையே உள்ள வேறுபாடு என்ன?",
    answer: "1. CC (Carbon Copy): Recipients in the CC field are visible to all other recipients; used to keep relevant stakeholders informed.\n2. BCC (Blind Carbon Copy): Recipients in the BCC field are hidden from everyone else; protects recipient privacy and prevents mass replies.",
    answerTamil: "1. CC (Carbon Copy): மின்னஞ்சல் பெறுநர்கள் அனைவருக்கும் இதில் உள்ள முகவரிகள் தெரியும்.\n2. BCC (Blind Carbon Copy): இதில் சேர்க்கப்படும் மின்னஞ்சல் முகவரிகள் மற்ற யாருக்கும் தெரியாது (ரகசியமாக வைக்கப்படும்).",
    isBookBack: true,
    difficulty: "Medium"
  },
  {
    id: "es11-ch4-5m-1",
    chapterNo: 4,
    chapterName: "Basic ICT & Digital Literacy",
    chapterNameTamil: "அடிப்படை ICT மற்றும் டிஜிட்டல் எழுத்தறிவு",
    marks: 5,
    type: "essay",
    questionText: "Discuss the essential computer hardware components and explain how internet search engines are used efficiently for educational research.",
    questionTextTamil: "அடிப்படை கணினி வன்பொருள் கூறுகளை விவரித்து, கல்வி சார்ந்த ஆய்வுகளுக்கு இணையத் தேடுபொறிகளை (Search Engines) எவ்வாறு திறம்படப் பயன்படுத்துவது என்பதை விளக்குக.",
    answer: "1. Core Hardware Components:\n- Input Devices: Keyboard, Mouse, Scanner.\n- Processing Unit: CPU (Control Unit, ALU, Cache Memory).\n- Storage Devices: RAM (volatile primary memory), SSD/HDD (non-volatile storage).\n- Output Devices: Monitor, Printer.\n\n2. Efficient Internet Search Strategies:\n- Keyword Optimization: Use precise terms instead of full conversational questions.\n- Boolean Operators: Use AND, OR, NOT to filter search scope.\n- Quotation Marks: Search exact phrases (e.g., \"Tamil Nadu Employability Skills\").\n- Source Verification: Prefer official .gov, .edu, and verified academic repositories.",
    answerTamil: "1. முக்கிய வன்பொருள் கூறுகள்:\n- உள்ளீட்டுச் சாதனங்கள்: விசைப்பலகை (Keyboard), சுட்டி (Mouse).\n- மையச் செயலகம் (CPU): கணக்கீடுகள் மற்றும் கட்டுப்பாடுகளை செய்யும் மூளை போன்ற பகுதி.\n- சேமிப்பகங்கள்: RAM (தற்காலிக நினைவகம்), Hard Disk / SSD (நிரந்தர சேமிப்பகம்).\n- வெளியீட்டுச் சாதனங்கள்: திரை (Monitor), அச்சுப்பொறி (Printer).\n\n2. இணையத் தேடல் உத்திகள்:\n- மேற்கோள் குறிகள் (\" \"): துல்லியமான வார்த்தைத் தொடர்களைத் தேட உதவுகிறது.\n- நம்பகமான தளங்கள்: அரசு (.gov) மற்றும் கல்வி (.edu) சார்ந்த தளங்களிலிருந்து தகவல்களைப் பெறுதல்.",
    isBookBack: true,
    difficulty: "Medium"
  },

  // CHAPTER 5: Entrepreneurship Concepts & Innovation
  {
    id: "es11-ch5-1m-1",
    chapterNo: 5,
    chapterName: "Entrepreneurship Concepts & Innovation",
    chapterNameTamil: "தொழில் முனைவுக் கருத்துக்கள் மற்றும் புதுமை",
    marks: 1,
    type: "mcq",
    questionText: "What is the primary role of innovation in a business?",
    questionTextTamil: "ஒரு வணிகத்தில் புதுமை புகுத்துதலின் (Innovation) முதன்மை பங்கு என்ன?",
    options: {
      A: "Creating unique, better products and solving customer problems effectively",
      B: "Increasing electricity consumption",
      C: "Closing down branch offices",
      D: "Copying outdated products without change"
    },
    optionsTamil: {
      A: "தனித்துவமான சிறந்த தயாரிப்புகளை உருவாக்கி வாடிக்கையாளர் பிரச்சனைகளைத் தீர்ப்பது",
      B: "மின் பயன்பாட்டை அதிகரிப்பது",
      C: "கிளைகளை மூடுவது",
      D: "பழைய பொருட்களை மாற்றமின்றி நகலெடுப்பது"
    },
    correctOption: "A",
    answer: "A) Creating unique, better products and solving customer problems effectively",
    answerTamil: "A) தனித்துவமான சிறந்த தயாரிப்புகளை உருவாக்கி வாடிக்கையாளர் பிரச்சனைகளைத் தீர்ப்பது",
    isBookBack: true,
    difficulty: "Easy"
  },
  {
    id: "es11-ch5-2m-1",
    chapterNo: 5,
    chapterName: "Entrepreneurship Concepts & Innovation",
    chapterNameTamil: "தொழில் முனைவுக் கருத்துக்கள் மற்றும் புதுமை",
    marks: 2,
    type: "short",
    questionText: "Differentiate between a Wage-employed person and a Self-employed person.",
    questionTextTamil: "ஊதியப் பணியாளர் (Wage-employed) மற்றும் சுயதொழில் செய்பவரை (Self-employed) வேறுபடுத்துக.",
    answer: "1. Wage Employed: Works for an employer, receives a fixed wage/salary, and does not carry business risk.\n2. Self-Employed: Works for oneself, manages business risks, and earns profits directly from commercial activities.",
    answerTamil: "1. ஊதியப் பணியாளர்: மற்றொரு நிறுவனத்தில் பணிபுரிந்து மாத ஊதியம் பெறுபவர்; வணிக இழப்பு அபாயம் இல்லை.\n2. சுயதொழில் செய்பவர்: சொந்தமாக தொழில் செய்து, இடர்களை ஏற்று, ஈட்டும் லாபத்தை தானே பெறுபவர்.",
    isBookBack: true,
    difficulty: "Easy"
  },
  {
    id: "es11-ch5-3m-1",
    chapterNo: 5,
    chapterName: "Entrepreneurship Concepts & Innovation",
    chapterNameTamil: "தொழில் முனைவுக் கருத்துக்கள் மற்றும் புதுமை",
    marks: 3,
    type: "brief",
    questionText: "Explain how entrepreneurship contributes to economic growth and local employment.",
    questionTextTamil: "தொழில்முனைவு எவ்வாறு நாட்டின் பொருளாதார வளர்ச்சிக்கும் உள்ளூர் வேலைவாய்ப்பிற்கும் உதவுகிறது என்பதை விளக்குக.",
    answer: "1. Job Creation: Entrepreneurs hire local workforce, reducing unemployment.\n2. Wealth Generation: Commercial activities stimulate money circulation and government tax revenue.\n3. Regional Development: Setting up enterprises in rural and semi-urban hubs promotes infrastructure development.",
    answerTamil: "1. புதிய வேலைவாய்ப்புகள்: உள்ளூர் மக்களுக்கு வேலைவாய்ப்பை வழங்கி வேலையின்மையைக் குறைக்கிறது.\n2. பொருளாதார வளர்ச்சி: தொழில் உற்பத்தி மூலம் நாட்டின் வருமானம் மற்றும் வரி வருவாய் கூடுகிறது.\n3. பிராந்திய வளர்ச்சி: கிராமப்புறங்களிலும் சிறு நகரங்களிலும் தொழில் தொடங்குவது அப்பகுதியின் உள்கட்டமைப்பை உயர்த்துகிறது.",
    isBookBack: true,
    difficulty: "Medium"
  },
  {
    id: "es11-ch5-5m-1",
    chapterNo: 5,
    chapterName: "Entrepreneurship Concepts & Innovation",
    chapterNameTamil: "தொழில் முனைவுக் கருத்துக்கள் மற்றும் புதுமை",
    marks: 5,
    type: "essay",
    questionText: "Describe the various stages involved in starting a small-scale business venture from idea generation to launch.",
    questionTextTamil: "யோசனை உருவாக்கம் முதல் தொடக்கம் வரை ஒரு சிறு தொழிலைத் தொடங்குவதில் உள்ள பல்வேறு படிநிலைகளை விவரிக்க.",
    answer: "Stages of Starting a Small Business:\n1. Idea Generation & Opportunity Identification: Spotting unsolved customer problems in the local community.\n2. Market Feasibility Study: Surveying potential buyers, analyzing competitors, and estimating demand.\n3. Business Planning & Cost Estimation: Calculating capital expenditure (machinery, raw materials) and operational costs.\n4. Sourcing Capital: Utilizing personal savings, government schemes (like PMEGP, MUDRA loans), or bank credit.\n5. Legal Registrations & Compliance: Obtaining MSME/Udyam registration, GST, and municipal licenses.\n6. Pilot Launch & Marketing: Testing product with early adopters, refining quality, and expanding sales.",
    answerTamil: "சிறு தொழில் தொடங்குவதற்கான படிநிலைகள்:\n1. யோசனை உருவாக்கம்: உள்ளூர் பகுதியில் தீர்க்கப்படாத பிரச்சனைகளை அடையாளம் கண்டு புதிய யோசனையை உருவாக்குதல்.\n2. சந்தை ஆய்வு: நுகர்வோர் தேவை, போட்டியாளர்கள் மற்றும் சாத்தியக்கூறுகளை ஆராய்தல்.\n3. வணிகத் திட்டம்: தேவையான இயந்திரங்கள், மூலப்பொருட்கள் மற்றும் உழைப்புக்கான செலவுகளைத் திட்டமிடுதல்.\n4. மூலதன நிதி திரட்டுதல்: சொந்த சேமிப்பு அல்லது அரசு மானியக் கடன்கள் (முத்ரா திட்டம்) மூலம் நிதி திரட்டுதல்.\n5. சட்டப்பூர்வ பதிவுகள்: MSME பதிவு, GST மற்றும் தேவையான அனுமதிகளைப் பெறுதல்.\n6. தயாரிப்பு வெளியீடு & விளம்பரம்: தரமான தயாரிப்பை வாடிக்கையாளர்களுக்கு அறிமுகப்படுத்தி விற்பனையை பெருக்குதல்.",
    isBookBack: true,
    difficulty: "Hard"
  },

  // CHAPTER 6: Green Skills & Environmental Awareness
  {
    id: "es11-ch6-1m-1",
    chapterNo: 6,
    chapterName: "Green Skills & Environmental Awareness",
    chapterNameTamil: "பசுமைத் திறன்கள் மற்றும் சுற்றுச்சூழல் விழிப்புணர்வு",
    marks: 1,
    type: "mcq",
    questionText: "Which of the following is a non-biodegradable waste item?",
    questionTextTamil: "பின்வருவனவற்றில் மட்காத கழிவுப் பொருள் எது?",
    options: {
      A: "Banana peel",
      B: "Single-use Plastic bag",
      C: "Cotton cloth",
      D: "Dried leaves"
    },
    optionsTamil: {
      A: "வாழைப்பழத் தோல்",
      B: "ஒருமுறை பயன்படுத்தும் பிளாஸ்டிக் பை",
      C: "பருத்தித் துணி",
      D: "காய்ந்த இலைகள்"
    },
    correctOption: "B",
    answer: "B) Single-use Plastic bag",
    answerTamil: "B) ஒருமுறை பயன்படுத்தும் பிளாஸ்டிக் பை",
    isBookBack: true,
    difficulty: "Easy"
  },
  {
    id: "es11-ch6-2m-1",
    chapterNo: 6,
    chapterName: "Green Skills & Environmental Awareness",
    chapterNameTamil: "பசுமைத் திறன்கள் மற்றும் சுற்றுச்சூழல் விழிப்புணர்வு",
    marks: 2,
    type: "short",
    questionText: "What is Ecosystem Conservation? Mention two simple ways students can protect nature.",
    questionTextTamil: "சுற்றுச்சூழல் பாதுகாப்பு என்றால் என்ன? மாணவர்கள் இயற்கையைப் பாதுகாக்க உதவும் இரண்டு எளிய வழிகளைக் கூறுக.",
    answer: "Ecosystem conservation is the practice of protecting and restoring natural habitats to sustain biodiversity.\nWays to protect:\n1. Planting trees and avoiding deforestation.\n2. Eliminating single-use plastics and recycling paper.",
    answerTamil: "சுற்றுச்சூழல் பாதுகாப்பு என்பது இயற்கை வளங்களையும் பல்லுயிர் பெருக்கத்தையும் பாதுகாக்கும் செயலாகும். மாணவர்கள் செய்யக்கூடியவை: 1. மரக்கன்றுகளை நடுதல், 2. நெகிழி (பிளாஸ்டிக்) பயன்பாட்டைத் தவிர்த்தல்.",
    isBookBack: true,
    difficulty: "Easy"
  },
  {
    id: "es11-ch6-3m-1",
    chapterNo: 6,
    chapterName: "Green Skills & Environmental Awareness",
    chapterNameTamil: "பசுமைத் திறன்கள் மற்றும் சுற்றுச்சூழல் விழிப்புணர்வு",
    marks: 3,
    type: "brief",
    questionText: "Explain the importance of Rainwater Harvesting in conserving water resources.",
    questionTextTamil: "நீர் வளத்தைப் பாதுகாப்பதில் மழைநீர் சேகரிப்பின் (Rainwater Harvesting) முக்கியத்துவத்தை விளக்குக.",
    answer: "1. Recharges Groundwater Table: Helps replenish depleting borewells and aquifers.\n2. Prevents Urban Flooding: Reduces stormwater runoff and soil erosion during heavy rains.\n3. Drought Resilience: Stores natural water for agriculture and domestic non-potable uses.",
    answerTamil: "1. நிலத்தடி நீர்மட்டத்தை உயர்த்துதல்: வற்றிப்போகும் ஆழ்துளைக் கிணறுகளில் நீர்மட்டத்தை அதிகரிக்கிறது.\n2. வெள்ளப்பெருக்கைத் தடுத்தல்: அதிக மழையின் போது வீணாக ஓடும் நீரைத் தடுத்து மண்ணரிப்பைத் தடுக்கிறது.\n3. வறட்சி மேலாண்மை: கோடைக் காலத்தில் ஏற்படும் குடிநீர் பற்றாக்குறையை சமாளிக்க உதவுகிறது.",
    isBookBack: true,
    difficulty: "Medium"
  },
  {
    id: "es11-ch6-5m-1",
    chapterNo: 6,
    chapterName: "Green Skills & Environmental Awareness",
    chapterNameTamil: "பசுமைத் திறன்கள் மற்றும் சுற்றுச்சூழல் விழிப்புணர்வு",
    marks: 5,
    type: "essay",
    questionText: "Discuss global warming, its primary causes, and outline practical sustainable habits for a cleaner environment.",
    questionTextTamil: "புவி வெப்பமயமாதல், அதன் முக்கிய காரணங்கள் மற்றும் தூய்மையான சூழலுக்கான நடைமுறை நிலையான பழக்கங்களை விவாதிக்க.",
    answer: "1. Global Warming & Causes:\n- Greenhouse Gas Emissions: Burning coal, oil, and gas for energy releases excess CO2.\n- Deforestation: Widespread cutting of forests reduces natural carbon absorption.\n- Industrial & Vehicular Emissions: Pollutants trap heat in the earth's atmosphere, leading to climate change.\n\n2. Practical Sustainable Habits:\n- Energy Efficiency: Turn off unused electrical appliances and transition to LED and solar lighting.\n- Sustainable Mobility: Walk, cycle, or use mass transit for daily commutes.\n- Waste Segregation: Practice source segregation of wet compostable and dry recyclable wastes.\n- Water Stewardship: Fix dripping faucets and install rainwater percolation pits.",
    answerTamil: "1. புவி வெப்பமயமாதலின் காரணங்கள்:\n- பசுமைக்குடில் வாயுக்கள்: நிலக்கரி, பெட்ரோல் எரிப்பதால் வளிமண்டலத்தில் கார்பன் டை ஆக்சைடு அதிகரித்தல்.\n- காடழிப்பு: மரங்கள் வெட்டப்படுவதால் கார்பனை உறிஞ்சும் இயற்கை சமநிலை பாதிக்கப்படுதல்.\n- தொழிற்சாலை கழிவு புகை: வெப்பத்தை வளிமண்டலத்திலேயே சிறைபிடித்து பூமியின் வெப்பநிலையை உயர்த்துதல்.\n\n2. நடைமுறைப் பழக்கங்கள்:\n- மின்சார சிக்கனம்: மின்விசிறி மற்றும் விளக்குகளை தேவையின்றி எரிய விடாமல் அணைத்தல்.\n- மிதிவண்டி மற்றும் பொதுப்போக்குவரத்து பயன்பாட்டை அதிகரித்தல்.\n- குப்பைகளை மக்கும் மற்றும் மக்காத குப்பைகளாக பிரித்து மறுசுழற்சிக்கு உதவுதல்.\n- மரங்களை நட்டு பராமரித்தல்.",
    isBookBack: true,
    difficulty: "Medium"
  },

  // CHAPTER 7: Basic Financial Literacy & Banking
  {
    id: "es11-ch7-1m-1",
    chapterNo: 7,
    chapterName: "Basic Financial Literacy & Banking",
    chapterNameTamil: "அடிப்படை நிதி எழுத்தறிவு மற்றும் வங்கி நடைமுறைகள்",
    marks: 1,
    type: "mcq",
    questionText: "What does OTP stand for in secure digital banking transactions?",
    questionTextTamil: "டிஜிட்டல் வங்கிப் பரிவர்த்தனைகளில் OTP என்பதன் விரிவாக்கம் என்ன?",
    options: {
      A: "One Time Password",
      B: "Online Transfer Protocol",
      C: "Official Tax Payment",
      D: "Open Transaction Portal"
    },
    optionsTamil: {
      A: "ஒருமுறை பயன்படுத்தும் கடவுச்சொல் (One Time Password)",
      B: "ஆன்லைன் பரிமாற்ற நெறிமுறை",
      C: "அதிகாரப்பூர்வ வரி செலுத்துதல்",
      D: "திறந்த பரிவர்த்தனை தளம்"
    },
    correctOption: "A",
    answer: "A) One Time Password",
    answerTamil: "A) ஒருமுறை பயன்படுத்தும் கடவுச்சொல் (One Time Password - OTP)",
    isBookBack: true,
    difficulty: "Easy"
  },
  {
    id: "es11-ch7-2m-1",
    chapterNo: 7,
    chapterName: "Basic Financial Literacy & Banking",
    chapterNameTamil: "அடிப்படை நிதி எழுத்தறிவு மற்றும் வங்கி நடைமுறைகள்",
    marks: 2,
    type: "short",
    questionText: "What is the difference between a Savings Bank Account and a Current Account?",
    questionTextTamil: "சேமிப்பு வங்கிக் கணக்கு (Savings Account) மற்றும் நடப்புக் கணக்கிற்கு (Current Account) இடையேயான வேறுபாடு யாது?",
    answer: "1. Savings Account: Meant for individuals to save money and earn nominal interest on deposited funds with limited daily transactions.\n2. Current Account: Meant for businesses and traders with unlimited daily transactions, overdraft facilities, but earns no interest.",
    answerTamil: "1. சேமிப்புக் கணக்கு (Savings Account): தனிநபர்கள் பணத்தைச் சேமிக்கவும் சிறு வட்டி பெறவும் பயன்படுகிறது.\n2. நடப்புக் கணக்கு (Current Account): வர்த்தகர்கள் மற்றும் நிறுவனங்களின் தினசரி வணிகப் பரிவர்த்தனைகளுக்கு பயன்படுகிறது; இதற்கு வட்டி வழங்கப்படுவதில்லை.",
    isBookBack: true,
    difficulty: "Easy"
  },
  {
    id: "es11-ch7-3m-1",
    chapterNo: 7,
    chapterName: "Basic Financial Literacy & Banking",
    chapterNameTamil: "அடிப்படை நிதி எழுத்தறிவு மற்றும் வங்கி நடைமுறைகள்",
    marks: 3,
    type: "brief",
    questionText: "What is UPI (Unified Payments Interface)? State two advantages of UPI payments.",
    questionTextTamil: "UPI என்றால் என்ன? UPI பரிவர்த்தனைகளின் இரண்டு நன்மைகளைக் கூறுக.",
    answer: "UPI is an instant real-time payment system developed by NPCI allowing inter-bank peer-to-peer and person-to-merchant transactions.\nAdvantages:\n1. 24/7 Instant Money Transfer directly between bank accounts using a mobile number or VPA.\n2. Eliminates the need to share confidential bank account numbers and IFSC codes with merchants.",
    answerTamil: "UPI என்பது NPCI அமைப்பால் உருவாக்கப்பட்ட உடனடி டிஜிட்டல் பணப்பரிவர்த்தனை முறையாகும்.\nநன்மைகள்:\n1. 24 மணி நேரமும் நொடிப்பொழுதில் வங்கிக் கணக்குகளிடையே பணப் பரிமாற்றம் செய்ய முடிகிறது.\n2. வங்கிக் கணக்கு எண் மற்றும் IFSC விவரங்களை பகிராமல் பாதுகாப்பாக பணம் செலுத்தலாம்.",
    isBookBack: true,
    difficulty: "Medium"
  },
  {
    id: "es11-ch7-5m-1",
    chapterNo: 7,
    chapterName: "Basic Financial Literacy & Banking",
    chapterNameTamil: "அடிப்படை நிதி எழுத்தறிவு மற்றும் வங்கி நடைமுறைகள்",
    marks: 5,
    type: "essay",
    questionText: "Explain the importance of saving, investing, and avoiding financial fraud in modern digital economies.",
    questionTextTamil: "நவீன டிஜிட்டல் பொருளாதாரத்தில் சேமிப்பு, முதலீடு மற்றும் நிதி மோசடிகளிலிருந்து தற்காத்துக் கொள்வதன் முக்கியத்துவத்தை விளக்குக.",
    answer: "1. Importance of Saving & Investing:\n- Emergency Fund: Prepares individuals for unexpected medical expenses or job disruptions.\n- Beating Inflation: Investing in Fixed Deposits, Mutual Funds, and Government Bonds generates compound interest over time.\n- Goal Realization: Enables funding higher education, housing, and comfortable retirement.\n\n2. Preventing Digital Banking Frauds:\n- Never Share Credentials: Keep OTP, UPI PIN, and ATM PIN strictly confidential; bank staff never ask for PINs.\n- Beware of Phishing Links: Never click suspicious SMS or email lottery links.\n- Secure Devices: Avoid banking on public Wi-Fi networks and regularly monitor bank account statements.",
    answerTamil: "1. சேமிப்பு மற்றும் முதலீட்டின் முக்கியத்துவம்:\n- அவசரகால நிதி: எதிர்பாராத மருத்துவச் செலவுகள் மற்றும் அவசர தேவைகளைச் சமாளிக்க உதவுகிறது.\n- பணவீக்கத்தை வெல்லுதல்: வங்கி வைப்பு நிதி, அரசுப் பத்திரங்கள் ஆகியவற்றில் முதலீடு செய்து பணம் வளர்ச்சியை அடையச் செய்தல்.\n- எதிர்கால இலக்குகள்: உயர் கல்வி, சொந்த வீடு போன்ற கனவுகளை நனவாக்க உதவுகிறது.\n\n2. ஆன்லைன் மோசடிகளிலிருந்து பாதுகாப்பு:\n- OTP மற்றும் PIN ரகசியக் காப்பு: யாரிடமும் கடவுச்சொல் மற்றும் OTP-ஐ பகிரக்கூடாது.\n- போலியான இணைப்புகளைத் தவிர்த்தல்: தெரியாத நபர்களிடமிருந்து வரும் பரிசு அல்லது கடன் லிங்குகளை கிளிக் செய்யக்கூடாது.\n- விழிப்புணர்வு: வங்கி அறிக்கைகளை தவறாமல் சரிபார்த்தல்.",
    isBookBack: true,
    difficulty: "Medium"
  },

  // CHAPTER 8: Workplace Ethics, Safety & Preparation
  {
    id: "es11-ch8-1m-1",
    chapterNo: 8,
    chapterName: "Workplace Ethics, Safety & Preparation",
    chapterNameTamil: "பணித்தள நெறிமுறைகள், பாதுகாப்பு மற்றும் தயார்படுத்தல்",
    marks: 1,
    type: "mcq",
    questionText: "Workplace integrity means ________.",
    questionTextTamil: "பணியிடத்தில் நேர்மை (Workplace Integrity) என்பது எதனைக் குறிக்கிறது?",
    options: {
      A: "Being honest, adhering to moral values, and taking responsibility for one's actions",
      B: "Blaming team members for mistakes",
      C: "Taking office supplies home secretly",
      D: "Arriving late daily"
    },
    optionsTamil: {
      A: "நேர்மையுடன் செயல்படுதல், நற்பண்புகளைப் பின்பற்றுதல் மற்றும் தன் செயல்களுக்குப் பொறுப்பேற்றல்",
      B: "தவறுகளுக்கு மற்றவர்களைக் குற்றம் சாட்டுதல்",
      C: "அலுவலகப் பொருட்களை திருடிச் செல்லுதல்",
      D: "தினமும் தாமதமாக வருதல்"
    },
    correctOption: "A",
    answer: "A) Being honest, adhering to moral values, and taking responsibility for one's actions",
    answerTamil: "A) நேர்மையுடன் செயல்படுதல், நற்பண்புகளைப் பின்பற்றுதல் மற்றும் தன் செயல்களுக்குப் பொறுப்பேற்றல்",
    isBookBack: true,
    difficulty: "Easy"
  },
  {
    id: "es11-ch8-2m-1",
    chapterNo: 8,
    chapterName: "Workplace Ethics, Safety & Preparation",
    chapterNameTamil: "பணித்தள நெறிமுறைகள், பாதுகாப்பு மற்றும் தயார்படுத்தல்",
    marks: 2,
    type: "short",
    questionText: "List two essential workplace ethics every professional should follow.",
    questionTextTamil: "ஒவ்வொரு பணியாளரும் பின்பற்ற வேண்டிய இரண்டு அத்தியாவசிய பணியிட நெறிமுறைகளைக் கூறுக.",
    answer: "1. Punctuality and Dependability: Arriving on time and meeting project commitments reliably.\n2. Respect and Professionalism: Treating all colleagues, clients, and supervisors with dignity.",
    answerTamil: "1. நேரந்தவறாமை மற்றும் நம்பகத்தன்மை: குறித்த நேரத்தில் பணிக்கு வருதல் மற்றும் பணிகளை முடித்தல்.\n2. சக மனிதர்களை மதித்தல்: பாலினம், அந்தஸ்து வேறுபாடின்றி அனைவரையும் மரியாதையுடன் நடத்துதல்.",
    isBookBack: true,
    difficulty: "Easy"
  },
  {
    id: "es11-ch8-3m-1",
    chapterNo: 8,
    chapterName: "Workplace Ethics, Safety & Preparation",
    chapterNameTamil: "பணித்தள நெறிமுறைகள், பாதுகாப்பு மற்றும் தயார்படுத்தல்",
    marks: 3,
    type: "brief",
    questionText: "What are the common workplace hazards in practical workshop laboratories? State two prevention tips.",
    questionTextTamil: "செயல்முறைப் பட்டறைகளில் ஏற்படும் பொதுவான ஆபத்துகள் யாவை? இரண்டு தடுப்பு வழிகளைக் கூறுக.",
    answer: "Hazards:\n- Slippery wet floors, exposed live electrical wiring, toxic fumes, and flying debris from machinery.\nPrevention Tips:\n1. Always wear protective PPE (safety boots, goggles, gloves).\n2. Keep work tables and aisles clean, dry, and unobstructed.",
    answerTamil: "பொதுவான ஆபத்துகள்:\n- வழுக்கும் தரை, திறந்த மின்சார கம்பிகள், இயந்திரங்களிலிருந்து தெறிக்கும் துகள்கள் மற்றும் ரசாயன நச்சு.\nதடுப்பு வழிகள்:\n1. பாதுகாப்பு காலணிகள், கண்ணாடிகள் மற்றும் கையுறைகளை தவறாமல் அணிதல்.\n2. வேலை செய்யும் இடத்தை எப்போதும் சுத்தமாகவும் தடைகளின்றியும் வைத்திருத்தல்.",
    isBookBack: true,
    difficulty: "Medium"
  },
  {
    id: "es11-ch8-5m-1",
    chapterNo: 8,
    chapterName: "Workplace Ethics, Safety & Preparation",
    chapterNameTamil: "பணித்தள நெறிமுறைகள், பாதுகாப்பு மற்றும் தயார்படுத்தல்",
    marks: 5,
    type: "essay",
    questionText: "Describe the essential professional etiquette, communication habits, and ethical standards expected of a vocational apprentice in an industrial company.",
    questionTextTamil: "ஒரு தொழில் நிறுவனத்தில் தொழிற்பயிற்சி பெறும் பயிற்சி மாணவரிடமிருந்து எதிர்பார்க்கப்படும் அத்தியாவசிய தொழில்முறை ஒழுக்கம், தகவல் தொடர்பு பழக்கங்கள் மற்றும் நெறிமுறைகளை விவரிக்க.",
    answer: "Vocational Apprentice Expectations:\n1. Professional Dress Code & Grooming: Wearing clean, compliant industrial uniforms and safety shoes.\n2. Respect for Hierarchy & Mentors: Listening attentively to technical instructions from shopfloor supervisors.\n3. Confidentiality: Protecting trade secrets, client data, and proprietary manufacturing designs.\n4. Accountability & Honesty: Acknowledging mistakes promptly rather than concealing defective work.\n5. Continuous Curiosity & Learning: Asking constructive questions, maintaining logbooks, and showing enthusiasm to learn new tools.\n6. Safety Compliance: Zero tolerance for horseplay, strict adherence to machine safety guidelines, and reporting near-miss incidents.",
    answerTamil: "தொழிற்பயிற்சி மாணவருக்கான எதிர்பார்ப்புகள்:\n1. முறையான ஆடை மற்றும் ஒழுக்கம்: சீருடை மற்றும் பாதுகாப்பு சாதனங்களை முறையாக அணிதல்.\n2. வழிகாட்டிகளை மதித்தல்: மேற்பார்வையாளர்கள் வழங்கும் தொழில்நுட்ப ஆலோசனைகளை கூர்ந்து கவனித்து செயல்படுத்துதல்.\n3. நிறுவன ரகசியங்களைப் பாதுகாத்தல்: உற்பத்தி முறைகள் மற்றும் வாடிக்கையாளர் விவரங்களை பாதுகாத்தல்.\n4. பொறுப்புணர்வு: தவறுகள் நேர்ந்தால் உடனடியாக தெரிவித்து திருத்திக்கொள்ளும் மனப்பான்மை.\n5. தொடர் கற்றல் ஆர்வம்: புதிய கருவிகள் மற்றும் தொழில்நுட்பங்களை ஆர்வத்துடன் கற்றுக்கொள்ளுதல்.\n6. பாதுகாப்பு நெறிமுறைகளைப் பின்பற்றுதல்: இயந்திரங்களை இயக்கும் போது எச்சரிக்கையுடனும் பாதுகாப்பு விதிகளுக்கு உட்பட்டும் செயல்படுதல்.",
    isBookBack: true,
    difficulty: "Hard"
  }
];
