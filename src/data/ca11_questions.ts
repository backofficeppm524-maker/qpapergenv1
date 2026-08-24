import { Question } from '../types';

export const CA11_CHAPTERS = [
  {
    "no": 1,
    "name": "Introduction to Computers",
    "nameTamil": "கணினி அறிமுகம்"
  },
  {
    "no": 2,
    "name": "Number Systems",
    "nameTamil": "எண் முறைகள்"
  },
  {
    "no": 3,
    "name": "Computer Organisation",
    "nameTamil": "கணினி அமைப்பு முறை"
  },
  {
    "no": 4,
    "name": "Theoretical Concepts of Operating System",
    "nameTamil": "இயக்க அமைப்பின் கோட்பாட்டு கருத்துக்கள்"
  },
  {
    "no": 5,
    "name": "Working with Windows Operating System",
    "nameTamil": "விண்டோஸ் இயக்க அமைப்புடன் வேலை செய்தல்"
  },
  {
    "no": 6,
    "name": "Introduction to Word Processor",
    "nameTamil": "சொற்செயலி அறிமுகம்"
  },
  {
    "no": 7,
    "name": "Working with OpenOffice Calc",
    "nameTamil": "ஓபன்ஆபீஸ் கால்க்-ல் வேலை செய்தல்"
  },
  {
    "no": 8,
    "name": "Presentation Basics",
    "nameTamil": "நிகழ்த்தல் அடிப்படைகள்"
  },
  {
    "no": 9,
    "name": "Introduction to Internet and Email",
    "nameTamil": "இணையம் மற்றும் மின்னஞ்சல் அறிமுகம்"
  },
  {
    "no": 10,
    "name": "HTML - Structural Tags",
    "nameTamil": "HTML - கட்டமைப்பு ஒட்டுகள்"
  },
  {
    "no": 11,
    "name": "HTML - Formatting text, Creating Tables, List and Links",
    "nameTamil": "HTML - உரை வடிவூட்டல், அட்டவணைகள், பட்டியல் மற்றும் இணைப்புகள்"
  },
  {
    "no": 12,
    "name": "HTML - Adding multimedia elements and Forms",
    "nameTamil": "HTML - பல்லூடக கூறுகள் மற்றும் படிவங்களைச் சேர்த்தல்"
  },
  {
    "no": 13,
    "name": "CSS - Cascading Style Sheets",
    "nameTamil": "CSS - அடுக்கு பாணித் தாள்கள்"
  },
  {
    "no": 14,
    "name": "Introduction to Javascript",
    "nameTamil": "ஜாவாஸ்கிரிப்ட் அறிமுகம்"
  },
  {
    "no": 15,
    "name": "Control Structure in Javascript",
    "nameTamil": "ஜாவாஸ்கிரிப்ட் கட்டுப்பாட்டு கட்டமைப்புகள்"
  },
  {
    "no": 16,
    "name": "JavaScript Functions",
    "nameTamil": "ஜாவாஸ்கிரிப்ட் செயற்கூறுகள்"
  },
  {
    "no": 17,
    "name": "Computer Ethics and Cyber Security",
    "nameTamil": "கணினி நெறிமுறைகள் மற்றும் இணையப் பாதுகாப்பு"
  },
  {
    "no": 18,
    "name": "Tamil Computing",
    "nameTamil": "தமிழ் கணினி"
  }
];

export const CA11_QUESTIONS: Question[] = [
  {
    "id": "ca11-ch1-1m-1",
    "chapterNo": 1,
    "chapterName": "Introduction to Computers",
    "chapterNameTamil": "கணிப்பொறி ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "First generation computers used",
    "questionTextTamil": "முதல் தலைமுறை கணிப்பொறிகளில் பயன்படுத்தப்பட்ட மின்னணு கூறு எது?",
    "options": {
      "A": "Vacuum tubes",
      "B": "Transistors",
      "C": "Integrated circuits",
      "D": "Microprocessors"
    },
    "optionsTamil": {
      "A": "வெற்றிடக் குழல்கள் (Vacuum tubes)",
      "B": "டிரான்சிஸ்டர்கள்",
      "C": "ஒருங்கிணைந்த சுற்றுகள் (IC)",
      "D": "நுண்செயலிகள்"
    },
    "correctOption": "A",
    "answer": "A) Vacuum tubes",
    "answerTamil": "A) வெற்றிடக் குழல்கள் (Vacuum tubes)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch1-1m-2",
    "chapterNo": 1,
    "chapterName": "Introduction to Computers",
    "chapterNameTamil": "கணிப்பொறி ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Name the volatile memory",
    "questionTextTamil": "அழியக்கூடிய நினைவகம் (Volatile memory) எது?",
    "options": {
      "A": "ROM",
      "B": "PROM",
      "C": "RAM",
      "D": "EPROM"
    },
    "optionsTamil": {
      "A": "ROM",
      "B": "PROM",
      "C": "RAM",
      "D": "EPROM"
    },
    "correctOption": "C",
    "answer": "C) RAM",
    "answerTamil": "C) RAM",
    "isBookBack": true
  },
  {
    "id": "ca11-ch1-1m-3",
    "chapterNo": 1,
    "chapterName": "Introduction to Computers",
    "chapterNameTamil": "கணிப்பொறி ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Identify the output device",
    "questionTextTamil": "பின்வருவனவற்றுள் வெளியீட்டு சாதனத்தை அடையாளம் காண்க:",
    "options": {
      "A": "Keyboard",
      "B": "Memory",
      "C": "Monitor",
      "D": "Mouse"
    },
    "optionsTamil": {
      "A": "விசைப்பலகை",
      "B": "நினைவகம்",
      "C": "திரையகம் (Monitor)",
      "D": "சுட்டி"
    },
    "correctOption": "C",
    "answer": "C) Monitor",
    "answerTamil": "C) திரையகம் (Monitor)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch1-1m-4",
    "chapterNo": 1,
    "chapterName": "Introduction to Computers",
    "chapterNameTamil": "கணிப்பொறி ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Identify the input device",
    "questionTextTamil": "பின்வருவனவற்றுள் உள்ளீட்டு சாதனத்தை அடையாளம் காண்க:",
    "options": {
      "A": "Printer",
      "B": "Mouse",
      "C": "Plotter",
      "D": "Projector"
    },
    "optionsTamil": {
      "A": "அச்சுப்பொறி",
      "B": "சுட்டி (Mouse)",
      "C": "வரைவி (Plotter)",
      "D": "ஒளிப்படக்காட்டி"
    },
    "correctOption": "B",
    "answer": "B) Mouse",
    "answerTamil": "B) சுட்டி (Mouse)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch1-1m-5",
    "chapterNo": 1,
    "chapterName": "Introduction to Computers",
    "chapterNameTamil": "கணிப்பொறி ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "...... Output device is used for printing building plan.",
    "questionTextTamil": "கட்டிட வரைபடங்கள் போன்ற பெரிய அளவிலான வரைபடங்களை அச்சிடப் பயன்படும் வெளியீட்டு சாதனம் எது?",
    "options": {
      "A": "Thermal printer",
      "B": "Plotter",
      "C": "Dot matrix",
      "D": "inkjet printer"
    },
    "optionsTamil": {
      "A": "வெப்ப அச்சுப்பொறி",
      "B": "வரைவி (Plotter)",
      "C": "புள்ளி அணி அச்சுப்பொறி",
      "D": "மைப்பீச்சு அச்சுப்பொறி"
    },
    "correctOption": "B",
    "answer": "B) Plotter",
    "answerTamil": "B) வரைவி (Plotter)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch1-1m-6",
    "chapterNo": 1,
    "chapterName": "Introduction to Computers",
    "chapterNameTamil": "கணிப்பொறி ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which one of the following is used in ATM machines",
    "questionTextTamil": "தானியங்கி பணப்பரிவர்த்தனை (ATM) இயந்திரங்களில் பயன்படும் சாதனம் எது?",
    "options": {
      "A": "Touch Screen",
      "B": "speaker",
      "C": "Monitor",
      "D": "Printer"
    },
    "optionsTamil": {
      "A": "தொடுதிரை (Touch Screen)",
      "B": "ஒலிபெருக்கி",
      "C": "திரையகம்",
      "D": "அச்சுப்பொறி"
    },
    "correctOption": "A",
    "answer": "A) Touch Screen",
    "answerTamil": "A) தொடுதிரை (Touch Screen)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch1-1m-7",
    "chapterNo": 1,
    "chapterName": "Introduction to Computers",
    "chapterNameTamil": "கணிப்பொறி ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "When a system restarts which type of booting is used",
    "questionTextTamil": "கணினி மறுதொடக்கம் செய்யப்படும்போது பயன்படும் தொடக்க முறை (Booting) எது?",
    "options": {
      "A": "Warm booting",
      "B": "Cold booting",
      "C": "Touch boot",
      "D": "Real boot"
    },
    "optionsTamil": {
      "A": "சூடான தொடக்கம் (Warm booting)",
      "B": "குளிர்ந்த தொடக்கம் (Cold booting)",
      "C": "தொடு தொடக்கம்",
      "D": "மெய் தொடக்கம்"
    },
    "correctOption": "A",
    "answer": "A) Warm booting",
    "answerTamil": "A) சூடான தொடக்கம் (Warm booting)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch1-1m-8",
    "chapterNo": 1,
    "chapterName": "Introduction to Computers",
    "chapterNameTamil": "கணிப்பொறி ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Expand POST",
    "questionTextTamil": "POST என்பதன் விரிவாக்கம் என்ன?",
    "options": {
      "A": "Post on self Test",
      "B": "Power on Software Test",
      "C": "Power on Self Test",
      "D": "Power on Self Text"
    },
    "optionsTamil": {
      "A": "Post on self Test",
      "B": "Power on Software Test",
      "C": "Power on Self Test",
      "D": "Power on Self Text"
    },
    "correctOption": "C",
    "answer": "C) Power on Self Test",
    "answerTamil": "C) Power on Self Test",
    "isBookBack": true
  },
  {
    "id": "ca11-ch1-1m-9",
    "chapterNo": 1,
    "chapterName": "Introduction to Computers",
    "chapterNameTamil": "கணிப்பொறி ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which one of the following is the main memory?",
    "questionTextTamil": "பின்வருவனவற்றுள் முதன்மை நினைவகம் எது?",
    "options": {
      "A": "ROM",
      "B": "RAM",
      "C": "Flash drive",
      "D": "Hard disk"
    },
    "optionsTamil": {
      "A": "ROM",
      "B": "RAM",
      "C": "ஃபிளாஷ் டிரைவ்",
      "D": "வன்வட்டு (Hard disk)"
    },
    "correctOption": "B",
    "answer": "B) RAM",
    "answerTamil": "B) RAM",
    "isBookBack": true
  },
  {
    "id": "ca11-ch1-1m-10",
    "chapterNo": 1,
    "chapterName": "Introduction to Computers",
    "chapterNameTamil": "கணிப்பொறி ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which generation of computer used IC's?",
    "questionTextTamil": "ஒருங்கிணைந்த சுற்றுகளைப் (IC) பயன்படுத்திய கணிப்பொறி தலைமுறை எது?",
    "options": {
      "A": "First",
      "B": "Second",
      "C": "Third",
      "D": "Fourth"
    },
    "optionsTamil": {
      "A": "முதல்",
      "B": "இரண்டாம்",
      "C": "மூன்றாம் தலைமுறை (Third)",
      "D": "நான்காம்"
    },
    "correctOption": "C",
    "answer": "C) Third",
    "answerTamil": "C) மூன்றாம் தலைமுறை (Third)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch1-2m-1",
    "chapterNo": 1,
    "chapterName": "Introduction to Computers",
    "chapterNameTamil": "கணிப்பொறி ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "What is a computer?",
    "questionTextTamil": "கணிப்பொறி என்றால் என்ன?",
    "answer": "A computer is an electronic device that takes raw data as input from the user, processes it under the control of a set of instructions (called a program), produces the result as output, and saves it for future use.",
    "answerTamil": "கணிப்பொறி என்பது பயனரிடமிருந்து மூலத்தரவுகளை உள்ளீடாகப் பெற்று, கொடுக்கப்பட்ட கட்டளைகளுக்கு ஏற்ப அவற்றைச் செயலாக்கம் செய்து, தேவையான தகவலை வெளியீடாகத் தரும் ஒரு மின்னணு சாதனமாகும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch1-2m-2",
    "chapterNo": 1,
    "chapterName": "Introduction to Computers",
    "chapterNameTamil": "கணிப்பொறி ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "Distinguish between data and information.",
    "questionTextTamil": "தரவு மற்றும் தகவல் - வேறுபடுத்துக.",
    "answer": "• Data: Raw, unorganized facts and figures that lack specific meaning on their own (e.g. 134, 'Kavitha').\n• Information: Processed, structured, and meaningful data that conveys clear context and purpose (e.g. 'Kavitha is 16 years old').",
    "answerTamil": "• தரவு (Data): செயலாக்கப்படாத, அர்த்தமற்ற மூலக் கூறுகள் மற்றும் எண்கள் ஆகும் (எ.கா: 134, 'கவிதா').\n• தகவல் (Information): தரவுகள் முறைப்படுத்தப்பட்டு, பயனுள்ள வகையில் செயலாக்கம் செய்யப்பட்ட முடிவுகள் ஆகும் (எ.கா: 'கவிதாவின் வயது 16').",
    "isBookBack": true
  },
  {
    "id": "ca11-ch1-2m-3",
    "chapterNo": 1,
    "chapterName": "Introduction to Computers",
    "chapterNameTamil": "கணிப்பொறி ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "What are the components of a CPU?",
    "questionTextTamil": "மையச் செயலகத்தின் (CPU) பகுதிகள் யாவை?",
    "answer": "The central processing unit consists of three major functional components:\n1. Arithmetic and Logic Unit (ALU)\n2. Control Unit (CU)\n3. Internal Memory / Registers.",
    "answerTamil": "மையச் செயலகம் (CPU) மூன்று முக்கிய பகுதிகளைக் கொண்டுள்ளது:\n1. கணித தர்க்க பிரிவு (ALU)\n2. கட்டுப்பாட்டு பிரிவு (Control Unit)\n3. நினைவகப் பிரிவு / பதிவகங்கள் (Memory Unit / Registers).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch1-2m-4",
    "chapterNo": 1,
    "chapterName": "Introduction to Computers",
    "chapterNameTamil": "கணிப்பொறி ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "What is the function of an ALU?",
    "questionTextTamil": "கணித தர்க்க பிரிவின் (ALU) செயல்பாடு யாது?",
    "answer": "The Arithmetic and Logic Unit (ALU) performs all arithmetic operations (addition, subtraction, multiplication, division) and logical decision-making operations (comparisons like AND, OR, NOT, <, >).",
    "answerTamil": "கணித தர்க்க பிரிவு (ALU) கூட்டல், கழித்தல், பெருக்கல், வகுத்தல் போன்ற கணித செயல்பாடுகளையும் மற்றும் ஒப்பீட்டு தர்க்க செயல்பாடுகளையும் செய்கிறது.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch1-2m-5",
    "chapterNo": 1,
    "chapterName": "Introduction to Computers",
    "chapterNameTamil": "கணிப்பொறி ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "Write the functions of control unit.",
    "questionTextTamil": "கட்டுப்பாட்டு பிரிவின் பணிகளை எழுதுக.",
    "answer": "The Control Unit controls and coordinates the flow of data and execution of instructions among the CPU, memory, and peripheral input/output devices.",
    "answerTamil": "கட்டுப்பாட்டு பிரிவு (Control Unit) மையச் செயலகம், நினைவகம் மற்றும் உள்ளீட்டு/வெளியீட்டு சாதனங்களுக்கு இடையேயான தரவுப் பரிமாற்றத்தையும் கட்டளைகளின் இயக்கத்தையும் கட்டுப்படுத்துகிறது.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch1-2m-6",
    "chapterNo": 1,
    "chapterName": "Introduction to Computers",
    "chapterNameTamil": "கணிப்பொறி ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "What is the function of memory?",
    "questionTextTamil": "நினைவகத்தின் செயல்பாடு யாது?",
    "answer": "The memory unit stores input data, intermediate results, and machine instructions during processing, as well as final results before transferring them to output devices.",
    "answerTamil": "நினைவகம் (Memory Unit) செயலாக்கத்திற்குத் தேவையான உள்ளீட்டுத் தரவுகள், நிரல் கட்டளைகள், இடைக்கால முடிவுகள் மற்றும் இறுதி வெளியீடுகளைச் சேமித்து வைக்கிறது.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch1-2m-7",
    "chapterNo": 1,
    "chapterName": "Introduction to Computers",
    "chapterNameTamil": "கணிப்பொறி ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "Differentiate Input and output unit.",
    "questionTextTamil": "உள்ளீட்டகம் மற்றும் வெளியீட்டகம் - வேறுபடுத்துக.",
    "answer": "• Input Unit: Feeds raw data and instructions into the computer system (e.g., Keyboard, Mouse).\n• Output Unit: Displays or prints the processed information in human-readable form (e.g., Monitor, Printer).",
    "answerTamil": "• உள்ளீட்டகம் (Input Unit): பயனர் தரும் தரவுகளையும் கட்டளைகளையும் கணிப்பொறிக்கு அனுப்புகிறது (எ.கா: விசைப்பலகை, சுட்டி).\n• வெளியீட்டகம் (Output Unit): செயலாக்கப்பட்ட தகவல்களைப் பயனர் புரிந்துகொள்ளும் வகையில் திரையிடுகிறது அல்லது அச்சிடுகிறது (எ.கா: திரையகம், அச்சுப்பொறி).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch1-2m-8",
    "chapterNo": 1,
    "chapterName": "Introduction to Computers",
    "chapterNameTamil": "கணிப்பொறி ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "Distinguish Primary and Secondary memory.",
    "questionTextTamil": "முதன்மை மற்றும் இரண்டாம் நிலை நினைவகங்களை வேறுபடுத்துக.",
    "answer": "• Primary Memory (RAM): Volatile, faster access time, stores active instructions currently being executed by the CPU.\n• Secondary Memory (Hard Disk, SSD, CD): Non-volatile, retains data permanently even when power is turned off, has larger storage capacity.",
    "answerTamil": "• முதன்மை நினைவகம் (RAM): மின்சாரம் நிறுத்தப்பட்டால் அழியக்கூடியது; அதிவேகமானது; CPU நேரடியாக அணுகக்கூடியது.\n• இரண்டாம் நிலை நினைவகம் (Hard Disk, SSD): மின்சாரம் நின்றாலும் அழியாதது; அதிக கொள்ளளவு கொண்டது; நிரந்தரமாகத் தரவுகளைச் சேமிக்கும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch1-3m-1",
    "chapterNo": 1,
    "chapterName": "Introduction to Computers",
    "chapterNameTamil": "கணிப்பொறி ஓர் அறிமுகம்",
    "marks": 3,
    "type": "short",
    "questionText": "What are the characteristics of a computer?",
    "questionTextTamil": "கணிப்பொறியின் பண்பியல்புகள் யாவை?",
    "answer": "Key characteristics of a computer include:\n1. Speed: Executes millions of instructions per second.\n2. Accuracy: Highly precise with negligible error rate.\n3. Diligence: Performs repetitive tasks without fatigue or loss of concentration.\n4. Versatility: Capable of handling diverse tasks across various fields.\n5. Storage Capacity: Stores massive volumes of data permanently.",
    "answerTamil": "1. வேகம் (Speed): வினாடிக்கு கோடிக்கணக்கான கட்டளைகளைச் செயல்படுத்தும்.\n2. துல்லியம் (Accuracy): பிழையின்றி மிகத் துல்லியமாக இயங்கும்.\n3. விடாமுயற்சி (Diligence): சோர்வின்றி ஒரே சீராகத் தொடர்ந்து செயல்படும்.\n4. பன்முகத்தன்மை (Versatility): பல்வேறு துறைகளில் பலதரப்பட்ட பணிகளைச் செய்யும் திறன்.\n5. சேமிப்புத் திறன் (Storage): அதிக அளவிலான தரவுகளை நிரந்தரமாகச் சேமிக்கும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch1-3m-2",
    "chapterNo": 1,
    "chapterName": "Introduction to Computers",
    "chapterNameTamil": "கணிப்பொறி ஓர் அறிமுகம்",
    "marks": 3,
    "type": "short",
    "questionText": "Write the applications of computer.",
    "questionTextTamil": "கணிப்பொறியின் பயன்பாடுகளை எழுதுக.",
    "answer": "Computers are extensively applied in:\n1. Education: Digital classrooms, online learning, simulations.\n2. Healthcare: Medical diagnostics, patient monitoring, imaging systems.\n3. Business and Banking: Online transactions, accounting, inventory management.\n4. Science & Engineering: Weather forecasting, aerospace simulation, CAD modeling.\n5. Communication & Entertainment: Email, social media, video streaming, gaming.",
    "answerTamil": "1. கல்வி: இணையவழிக் கற்றல், மெய்நிகர் வகுப்பறைகள்.\n2. மருத்துவம்: நோய் கண்டறிதல், அறுவைசிகிச்சைக் கருவிகள், மருத்துவ ஆவணப் பராமரிப்பு.\n3. வணிகம் மற்றும் வங்கி: மின்னணு பணப்பரிவர்த்தனை, கணக்கு பதிவியல்.\n4. அறிவியல் & பொறியியல்: விண்வெளி ஆராய்ச்சி, வானிலை முன்னறிவிப்பு, வரைபட உருவாக்கம்.\n5. தகவல் தொடர்பு மற்றும் பொழுதுபோக்கு: மின்னஞ்சல், திரைப்படங்கள், விளையாட்டுகள்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch1-3m-3",
    "chapterNo": 1,
    "chapterName": "Introduction to Computers",
    "chapterNameTamil": "கணிப்பொறி ஓர் அறிமுகம்",
    "marks": 3,
    "type": "short",
    "questionText": "What is an input device? Give two examples.",
    "questionTextTamil": "உள்ளீட்டு சாதனம் என்றால் என்ன? இரண்டு எடுத்துக்காட்டுகள் தருக.",
    "answer": "An input device is a hardware component that allows users to feed data, commands, and signals into a computer for processing.\nExamples:\n1. Keyboard: Textual data entry.\n2. Optical Mouse: Graphical pointing and navigation.",
    "answerTamil": "உள்ளீட்டு சாதனம் என்பது பயனர் கணிப்பொறிக்கு தரவுகளையும் கட்டளைகளையும் உள்ளிட உதவும் வன்பொருள் சாதனமாகும்.\nஎடுத்துக்காட்டுகள்:\n1. விசைப்பலகை (Keyboard)\n2. சுட்டி (Mouse).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch1-3m-4",
    "chapterNo": 1,
    "chapterName": "Introduction to Computers",
    "chapterNameTamil": "கணிப்பொறி ஓர் அறிமுகம்",
    "marks": 3,
    "type": "short",
    "questionText": "Name any three output devices.",
    "questionTextTamil": "ஏதேனும் மூன்று வெளியீட்டு சாதனங்களின் பெயர்களைக் கூறுக.",
    "answer": "1. Monitor (Visual Display Unit): Displays visual output and text.\n2. Printer: Generates physical hard copies on paper (e.g. Laser, Inkjet).\n3. Speakers: Produces audio/sound output from the system.",
    "answerTamil": "1. திரையகம் (Monitor): காட்சி மற்றும் உரை வடிவில் தகவல்களைக் காட்டும்.\n2. அச்சுப்பொறி (Printer): காகிதத்தில் அச்சிடப்பட்ட நகலை (Hard copy) வழங்கும்.\n3. ஒலிபெருக்கி (Speakers): கணினியிலிருந்து ஒலி வெளியீட்டைத் தரும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch1-3m-5",
    "chapterNo": 1,
    "chapterName": "Introduction to Computers",
    "chapterNameTamil": "கணிப்பொறி ஓர் அறிமுகம்",
    "marks": 3,
    "type": "short",
    "questionText": "Differentiate optical and Laser mouse.",
    "questionTextTamil": "ஒளி சுட்டி மற்றும் லேசர் சுட்டி - வேறுபடுத்துக.",
    "answer": "• Optical Mouse: Uses an LED light source and optical sensor to track surface movement; less sensitive on shiny surfaces.\n• Laser Mouse: Uses an infrared laser beam instead of LED; provides higher precision, tracking accuracy, and operates smoothly on almost any surface including glass.",
    "answerTamil": "• ஒளி சுட்டி (Optical Mouse): LED ஒளியைப் பயன்படுத்தி இயக்கத்தைக் கண்டறியும்; பளபளப்பான பரப்புகளில் துல்லியம் குறைவாக இருக்கும்.\n• லேசர் சுட்டி (Laser Mouse): லேசர் கதிரைப் பயன்படுத்துகிறது; மிக அதிக துல்லியம் கொண்டது; கண்ணாடி உள்ளிட்ட எந்த பரப்பிலும் சிறப்பாக இயங்கும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch1-3m-6",
    "chapterNo": 1,
    "chapterName": "Introduction to Computers",
    "chapterNameTamil": "கணிப்பொறி ஓர் அறிமுகம்",
    "marks": 3,
    "type": "short",
    "questionText": "Write short note on impact printer.",
    "questionTextTamil": "தட்டல் அச்சுப்பொறி பற்றி சிறுகுறிப்பு வரைக.",
    "answer": "Impact printers print characters and graphics by mechanically striking tiny pins or hammers against an inked ribbon onto the paper.\nFeatures:\n• Can print multi-part carbon copies.\n• Operates with audible mechanical noise.\n• Examples: Dot Matrix Printer, Line Matrix Printer.",
    "answerTamil": "தட்டல் அச்சுப்பொறிகள் (Impact Printers) மை நாடாவை (Ribbon) காகிதத்தின் மீது இயந்திர முள் அல்லது சுத்தியலால் தட்டுவதன் மூலம் அச்சிடுகின்றன.\n• கார்பன் தாள்களைப் பயன்படுத்தி ஒரே நேரத்தில் பல நகல்களை அச்சிட முடியும்.\n• அதிக சத்தத்தை உருவாக்கும்.\n• எ.கா: புள்ளி அணி அச்சுப்பொறி (Dot Matrix Printer).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch1-3m-7",
    "chapterNo": 1,
    "chapterName": "Introduction to Computers",
    "chapterNameTamil": "கணிப்பொறி ஓர் அறிமுகம்",
    "marks": 3,
    "type": "short",
    "questionText": "Write the characteristics of sixth generation.",
    "questionTextTamil": "ஆறாம் தலைமுறையின் பண்பியல்புகளை எழுதுக.",
    "answer": "Key characteristics of Sixth Generation computers:\n1. Parallel and Distributed Computing with Artificial Neural Networks.\n2. Development of Quantum Computing and Nanotechnology.\n3. Voice recognition, natural language processing (NLP), and intelligent autonomous robotics.\n4. Ultra-fast speeds and compact, wearable form factors.",
    "answerTamil": "1. செயற்கை நரம்பியல் வலைப்பின்னல்களுடன் கூடிய இணை மற்றும் பகிர்வு செயலாக்கம்.\n2. குவாண்டம் கணினி மற்றும் நானோ தொழில்நுட்ப வளர்ச்சி.\n3. குரல் அறிதல் மற்றும் மனித இயற்கை மொழியைப் புரிந்து செயல்படுதல் (NLP).\n4. நுண்ணறிவு ரோபோக்கள் மற்றும் மிக அதிக செயலாக்க வேகம்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch1-3m-8",
    "chapterNo": 1,
    "chapterName": "Introduction to Computers",
    "chapterNameTamil": "கணிப்பொறி ஓர் அறிமுகம்",
    "marks": 3,
    "type": "short",
    "questionText": "Write the significant features of monitor.",
    "questionTextTamil": "திரையகத்தின் முக்கிய சிறப்பம்சங்களை எழுதுக.",
    "answer": "Significant features of a monitor:\n1. Pixels: Display image is composed of tiny dots called pixels; higher pixel density offers sharper resolution.\n2. Display Types: CRT (Cathode Ray Tube), LCD (Liquid Crystal Display), LED (Light Emitting Diode), and OLED.\n3. Aspect Ratio and Refresh Rate: Provides widescreen formats (16:9) with smooth visual rendering.\n4. Interfaces: Connected via VGA, DVI, or HDMI ports.",
    "answerTamil": "1. படப்புள்ளிகள் (Pixels): திரையில் தோன்றும் உருவங்கள் பல சிறிய படப்புள்ளிகளால் ஆனவை; அதிக புள்ளிகள் அதிக தெளிவைத் தரும்.\n2. வகைகள்: CRT, LCD, LED மற்றும் OLED நவீன தொழில்நுட்பங்கள்.\n3. தெளிவுத்திறன் (Resolution) மற்றும் பார்வை விகிதம்.\n4. VGA, DVI, HDMI போன்ற இணைப்பிகள் மூலம் இணைக்கப்படும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch1-5m-1",
    "chapterNo": 1,
    "chapterName": "Introduction to Computers",
    "chapterNameTamil": "கணிப்பொறி ஓர் அறிமுகம்",
    "marks": 5,
    "type": "detail",
    "questionText": "Explain the basic components of a computer with a neat diagram.",
    "questionTextTamil": "கணிப்பொறியின் அடிப்படைக் கூறுகளைத் தெளிவான வரைபடத்துடன் விளக்குக.",
    "answer": "A computer consists of three primary hardware units:\n\n1. Input Unit:\n- Feeds raw data and instructions to the CPU.\n- Examples: Keyboard, Mouse, Scanner, Barcode reader.\n\n2. Central Processing Unit (CPU):\n- The brain of the computer that interprets and executes instructions.\n- Arithmetic & Logic Unit (ALU): Performs arithmetic (+, -, *, /) and logical comparisons.\n- Control Unit (CU): Manages data flow and synchronizes all hardware operations.\n- Internal Memory / Registers: High-speed temporary storage during execution.\n\n3. Memory Unit:\n- Primary Memory (RAM/ROM): Volatile working memory.\n- Secondary Storage: Persistent storage (Hard disk, SSD).\n\n4. Output Unit:\n- Converts processed results into human-understandable visual, printed, or audio output (Monitor, Printer, Speakers).",
    "answerTamil": "கணிப்பொறி மூன்று முக்கிய கூறுகளைக் கொண்டுள்ளது:\n\n1. உள்ளீட்டகம் (Input Unit):\n- தரவுகளையும் கட்டளைகளையும் கணிப்பொறிக்குள் செலுத்துகிறது (விசைப்பலகை, சுட்டி).\n\n2. மையச் செயலகம் (CPU):\n- கணிப்பொறியின் மூளையாகச் செயல்படுகிறது.\n- கணித தர்க்கப் பிரிவு (ALU): கணக்கீடுகள் மற்றும் ஒப்பீடுகளைச் செய்கிறது.\n- கட்டுப்பாட்டுப் பிரிவு (Control Unit): சாதனங்களுக்கிடையேயான தரவுப் பரிமாற்றத்தை ஒருங்கிணைக்கிறது.\n- பதிவகங்கள் (Registers): அதிவேக தற்காலிக சேமிப்பு.\n\n3. நினைவகம் (Memory Unit):\n- முதன்மை நினைவகம் (RAM/ROM) மற்றும் இரண்டாம் நிலை நினைவகம் (Hard Disk).\n\n4. வெளியீட்டகம் (Output Unit):\n- செயலாக்கப்பட்ட முடிவுகளைப் பயனருக்கு வெளிப்படுத்துகிறது (திரையகம், அச்சுப்பொறி).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch1-5m-2",
    "chapterNo": 1,
    "chapterName": "Introduction to Computers",
    "chapterNameTamil": "கணிப்பொறி ஓர் அறிமுகம்",
    "marks": 5,
    "type": "detail",
    "questionText": "Discuss the various generations of computers.",
    "questionTextTamil": "கணிப்பொறியின் பல்வேறு தலைமுறைகளை விவாதிக்கவும்.",
    "answer": "Generations of Computers:\n\n1. First Generation (1940-1956):\n- Component: Vacuum Tubes\n- Size & Speed: Very large, huge power consumption, machine language.\n- Systems: ENIAC, EDVAC, UNIVAC 1.\n\n2. Second Generation (1956-1964):\n- Component: Transistors\n- Characteristics: Smaller, faster, generated less heat, assembly language.\n- Systems: IBM 1401, IBM 1620.\n\n3. Third Generation (1964-1971):\n- Component: Integrated Circuits (ICs)\n- Characteristics: Highly reliable, high-level languages (FORTRAN, COBOL).\n- Systems: IBM 360 series.\n\n4. Fourth Generation (1971-1980):\n- Component: Very Large Scale Integration (VLSI) Microprocessors\n- Characteristics: Microcomputers, PCs, high speed, portable.\n- Systems: Apple, IBM PC.\n\n5. Fifth Generation (1980-Present):\n- Component: Ultra Large Scale Integration (ULSI) chips\n- Characteristics: Parallel processing, Artificial Intelligence (AI), robotics.\n\n6. Sixth Generation (Future):\n- Quantum computing, Artificial Neural Networks, Nanotechnology, Natural Language Processing.",
    "answerTamil": "1. முதல் தலைமுறை (1940-1956): வெற்றிடக் குழல்கள் (Vacuum Tubes); மிகப் பெரிய அளவு, அதிக வெப்பம்.\n2. இரண்டாம் தலைமுறை (1956-1964): டிரான்சிஸ்டர்கள் (Transistors); சிறிய அளவு, அதிக வேகம்.\n3. மூன்றாம் தலைமுறை (1964-1971): ஒருங்கிணைந்த சுற்றுகள் (Integrated Circuits - IC); நம்பகத்தன்மை.\n4. நான்காம் தலைமுறை (1971-1980): நுண்செயலிகள் (VLSI Microprocessors); மடிக்கணினிகள், தனிநபர் கணினிகள்.\n5. ஐந்தாம் தலைமுறை (1980-இன்று வரை): மீப்பெரு ஒருங்கிணைந்த சுற்றுகள் (ULSI), செயற்கை நுண்ணறிவு (AI).\n6. ஆறாம் தலைமுறை (எதிர்காலம்): குவாண்டம் கணினிகள், நரம்பியல் வலைப்பின்னல்கள், ரோபோக்கள்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch1-5m-3",
    "chapterNo": 1,
    "chapterName": "Introduction to Computers",
    "chapterNameTamil": "கணிப்பொறி ஓர் அறிமுகம்",
    "marks": 5,
    "type": "detail",
    "questionText": "Explain the following in detail:\n(a) Inkjet Printer\n(b) Multimedia projector\n(c) Bar code / QR code Reader",
    "questionTextTamil": "பின்வருவனவற்றை விரிவாக விளக்குக:\n(அ) மைப்பீச்சு அச்சுப்பொறி (Inkjet Printer)\n(ஆ) பல்லூடக ஒளிப்படக்காட்டி (Multimedia projector)\n(இ) பட்டைக்குறியீடு / QR குறியீடு படிப்பான் (Bar code / QR code Reader)",
    "answer": "(a) Inkjet Printer:\n- Uses non-impact spray technology, firing microscopic droplets of heated liquid ink (Cyan, Magenta, Yellow, Black) through nozzle heads onto paper.\n- Produces high-quality color prints and photos at 1-20 pages per minute.\n\n(b) Multimedia Projector:\n- Projects computer screen output, presentations, and video feeds onto a large wall or screen in auditoriums and classrooms.\n- Uses LCD or DLP projection lamps for high luminosity display.\n\n(c) Bar Code / QR Code Reader:\n- An optical scanner that uses laser or photographic sensors to read printed bar codes (1D zebra lines) and QR codes (2D matrix grids).\n- Instantly converts scanned visual patterns into alphanumeric product codes and URL data for retail POS and digital tracking.",
    "answerTamil": "(அ) மைப்பீச்சு அச்சுப்பொறி (Inkjet Printer):\n- வெப்பப்படுத்தப்பட்ட திரவ மைத்துளிகளை நுண்ணிய துளைகள் வழியே காகிதத்தில் தெளித்து அச்சிடுகிறது; உயர்தர வண்ணப் படங்களை அச்சிட ஏற்றது.\n\n(ஆ) பல்லூடக ஒளிப்படக்காட்டி (Multimedia Projector):\n- கணினியின் திரைக் காட்சிகளை பெரிய திரையிலோ அல்லது சுவரிலோ பெரிதாக்கிக் காட்டுகிறது; வகுப்பறைகள் மற்றும் கருத்தரங்குகளில் பயன்படுகிறது.\n\n(இ) பட்டைக்குறியீடு / QR குறியீடு படிப்பான்:\n- தயாரிப்புகளின் மீதுள்ள கோடுகள் (Bar code) அல்லது இருபரிமாண கட்டங்களை (QR code) லேசர் ஒளிக்கற்றை மூலம் படித்து கணினிக்கு அனுப்பும் சாதனம்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch2-1m-1",
    "chapterNo": 2,
    "chapterName": "Number Systems",
    "chapterNameTamil": "எண் முறைகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which refers to the number of bits processed by a computer's CPU?",
    "questionTextTamil": "ஒரு கணிப்பொறியின் CPU செயலாக்கும் பிட்டுகளின் எண்ணிக்கையைக் குறிப்பது எது?",
    "options": {
      "A": "Byte",
      "B": "Nibble",
      "C": "Word length",
      "D": "Bit"
    },
    "optionsTamil": {
      "A": "பைட் (Byte)",
      "B": "நிபிள் (Nibble)",
      "C": "சொல் நீளம் (Word length)",
      "D": "பிட் (Bit)"
    },
    "correctOption": "C",
    "answer": "C) Word length",
    "answerTamil": "C) சொல் நீளம் (Word length)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch2-1m-2",
    "chapterNo": 2,
    "chapterName": "Number Systems",
    "chapterNameTamil": "எண் முறைகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "How many bytes does 1 KiloByte contain?",
    "questionTextTamil": "1 கிலோபைட் (1 KB) எத்தனை பைட்டுகளைக் கொண்டுள்ளது?",
    "options": {
      "A": "1000",
      "B": "8",
      "C": "4",
      "D": "1024"
    },
    "optionsTamil": {
      "A": "1000",
      "B": "8",
      "C": "4",
      "D": "1024"
    },
    "correctOption": "D",
    "answer": "D) 1024",
    "answerTamil": "D) 1024",
    "isBookBack": true
  },
  {
    "id": "ca11-ch2-1m-3",
    "chapterNo": 2,
    "chapterName": "Number Systems",
    "chapterNameTamil": "எண் முறைகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Expansion for ASCII:",
    "questionTextTamil": "ASCII என்பதன் விரிவாக்கம்:",
    "options": {
      "A": "American School Code for Information Interchange",
      "B": "American Standard Code for Information Interchange",
      "C": "All Standard Code for Information Interchange",
      "D": "American Society Code for Information Interchange"
    },
    "optionsTamil": {
      "A": "American School Code for Information Interchange",
      "B": "American Standard Code for Information Interchange",
      "C": "All Standard Code for Information Interchange",
      "D": "American Society Code for Information Interchange"
    },
    "correctOption": "B",
    "answer": "B) American Standard Code for Information Interchange",
    "answerTamil": "B) American Standard Code for Information Interchange",
    "isBookBack": true
  },
  {
    "id": "ca11-ch2-1m-4",
    "chapterNo": 2,
    "chapterName": "Number Systems",
    "chapterNameTamil": "எண் முறைகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "2^50 is referred as:",
    "questionTextTamil": "2^50 என்பது எவ்வாறு அழைக்கப்படுகிறது?",
    "options": {
      "A": "Kilo",
      "B": "Tera",
      "C": "Peta",
      "D": "Zetta"
    },
    "optionsTamil": {
      "A": "கிலோ",
      "B": "டெரா",
      "C": "பீட்டா (Peta)",
      "D": "செட்டா"
    },
    "correctOption": "C",
    "answer": "C) Peta",
    "answerTamil": "C) பீட்டா (Peta)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch2-1m-5",
    "chapterNo": 2,
    "chapterName": "Number Systems",
    "chapterNameTamil": "எண் முறைகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "How many characters can be handled in Binary Coded Decimal System?",
    "questionTextTamil": "இருநிலை குறியீட்டு பதின்ம (BCD) முறையில் எத்தனை எழுத்துருக்களைக் கையாள முடியும்?",
    "options": {
      "A": "64",
      "B": "255",
      "C": "256",
      "D": "128"
    },
    "optionsTamil": {
      "A": "64",
      "B": "255",
      "C": "256",
      "D": "128"
    },
    "correctOption": "A",
    "answer": "A) 64",
    "answerTamil": "A) 64 (2^6)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch2-1m-6",
    "chapterNo": 2,
    "chapterName": "Number Systems",
    "chapterNameTamil": "எண் முறைகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "For 1101₂ the equivalent Hexadecimal equivalent is?",
    "questionTextTamil": "1101₂ என்ற இருநிலை எண்ணுக்கு இணையான பதினாறுநிலை எண் எது?",
    "options": {
      "A": "F",
      "B": "E",
      "C": "D",
      "D": "B"
    },
    "optionsTamil": {
      "A": "F",
      "B": "E",
      "C": "D",
      "D": "B"
    },
    "correctOption": "C",
    "answer": "C) D",
    "answerTamil": "C) D (13)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch2-1m-7",
    "chapterNo": 2,
    "chapterName": "Number Systems",
    "chapterNameTamil": "எண் முறைகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "What is the 1's complement of 00100110?",
    "questionTextTamil": "00100110 என்ற இருநிலை எண்ணின் 1-ன் நிரப்பி என்ன?",
    "options": {
      "A": "00100110",
      "B": "11011001",
      "C": "11010001",
      "D": "00101001"
    },
    "optionsTamil": {
      "A": "00100110",
      "B": "11011001",
      "C": "11010001",
      "D": "00101001"
    },
    "correctOption": "B",
    "answer": "B) 11011001",
    "answerTamil": "B) 11011001",
    "isBookBack": true
  },
  {
    "id": "ca11-ch2-1m-8",
    "chapterNo": 2,
    "chapterName": "Number Systems",
    "chapterNameTamil": "எண் முறைகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which amongst this is not an Octal number?",
    "questionTextTamil": "பின்வருவனவற்றுள் எது எண்ணிலை எண் (Octal) அல்ல?",
    "options": {
      "A": "645",
      "B": "234",
      "C": "876",
      "D": "123"
    },
    "optionsTamil": {
      "A": "645",
      "B": "234",
      "C": "876",
      "D": "123"
    },
    "correctOption": "C",
    "answer": "C) 876",
    "answerTamil": "C) 876 (எண்ணிலை எண் 0 முதல் 7 வரை மட்டுமே இருக்க வேண்டும்; 8 இருக்கக்கூடாது)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch2-2m-1",
    "chapterNo": 2,
    "chapterName": "Number Systems",
    "chapterNameTamil": "எண் முறைகள்",
    "marks": 2,
    "type": "short",
    "questionText": "What is data?",
    "questionTextTamil": "தரவு என்றால் என்ன?",
    "answer": "Data comes from the word 'datum' which means a raw fact. It refers to unprocessed information consisting of numbers, characters, symbols, or observations without contextual meaning.",
    "answerTamil": "தரவு என்பது 'datum' என்ற சொல்லிலிருந்து உருவானது. இது செயலாக்கப்படாத எண்கள், எழுத்துக்கள், குறியீடுகள் கொண்ட மூலக் கூற்றாகும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch2-2m-2",
    "chapterNo": 2,
    "chapterName": "Number Systems",
    "chapterNameTamil": "எண் முறைகள்",
    "marks": 2,
    "type": "short",
    "questionText": "Write the 1's complement procedure.",
    "questionTextTamil": "1-ன் நிரப்பி காணும் வழிமுறையை எழுதுக.",
    "answer": "Step 1: Convert the given decimal number into an 8-bit or 16-bit binary number.\nStep 2: Invert each binary bit by replacing all 0s with 1s and all 1s with 0s.",
    "answerTamil": "படி 1: கொடுக்கப்பட்ட எண்ணை 8-பிட் இருநிலை எண்ணாக மாற்ற வேண்டும்.\nபடி 2: ஒவ்வொரு பிட்டையும் தலைகீழாக மாற்ற வேண்டும் (0-வை 1 ஆகவும், 1-ஐ 0 ஆகவும் மாற்ற வேண்டும்).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch2-2m-3",
    "chapterNo": 2,
    "chapterName": "Number Systems",
    "chapterNameTamil": "எண் முறைகள்",
    "marks": 2,
    "type": "short",
    "questionText": "Convert (46)₁₀ into its equivalent Binary number.",
    "questionTextTamil": "(46)₁₀-ஐ இருநிலை எண்ணாக மாற்றுக.",
    "answer": "Successive division of 46 by 2:\n46 / 2 = 23 (rem 0)\n23 / 2 = 11 (rem 1)\n11 / 2 = 5 (rem 1)\n5 / 2 = 2 (rem 1)\n2 / 2 = 1 (rem 0)\n1 / 2 = 0 (rem 1)\nReading remainders bottom to top: (46)₁₀ = (101110)₂.",
    "answerTamil": "46-ஐ 2-ஆல் தொடர் வகுத்தல் செய்ய:\n46 / 2 = 23 (மீதி 0)\n23 / 2 = 11 (மீதி 1)\n11 / 2 = 5 (மீதி 1)\n5 / 2 = 2 (மீதி 1)\n2 / 2 = 1 (மீதி 0)\n1 / 2 = 0 (மீதி 1)\nவிடை: (46)₁₀ = (101110)₂.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch2-2m-4",
    "chapterNo": 2,
    "chapterName": "Number Systems",
    "chapterNameTamil": "எண் முறைகள்",
    "marks": 2,
    "type": "short",
    "questionText": "We cannot find 1's complement for (28)₁₀. State the reason.",
    "questionTextTamil": "(28)₁₀-க்கு 1-ன் நிரப்பி காண முடியாது. காரணம் கூறுக.",
    "answer": "1's complement and 2's complement representations are strictly used for representing negative binary numbers (signed magnitude). Since (28)₁₀ is a positive integer, it is directly represented in binary without finding complementation.",
    "answerTamil": "1-ன் நிரப்பி மற்றும் 2-ன் நிரப்பி முறைகள் எதிர்க்குறி எண்களைக் (Negative numbers) குறிக்க மட்டுமே பயன்படுத்தப்படுகின்றன. (28)₁₀ என்பது நேர்மறை எண் என்பதால் இதற்கு நிரப்பி காண வேண்டியதில்லை.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch2-2m-5",
    "chapterNo": 2,
    "chapterName": "Number Systems",
    "chapterNameTamil": "எண் முறைகள்",
    "marks": 2,
    "type": "short",
    "questionText": "List the encoding systems that represent characters in memory.",
    "questionTextTamil": "நினைவகத்தில் எழுத்துருக்களைக் குறிக்கும் குறியீட்டு முறைகளைப் பட்டியலிடுக.",
    "answer": "1. BCD (Binary Coded Decimal)\n2. EBCDIC (Extended Binary Coded Decimal Interchange Code)\n3. ASCII (American Standard Code for Information Interchange)\n4. ISCII (Indian Standard Code for Information Interchange)\n5. Unicode.",
    "answerTamil": "1. BCD (Binary Coded Decimal)\n2. EBCDIC\n3. ASCII\n4. ISCII (இந்திய குறியீட்டு முறை)\n5. யுனிகோட் (Unicode).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch2-3m-1",
    "chapterNo": 2,
    "chapterName": "Number Systems",
    "chapterNameTamil": "எண் முறைகள்",
    "marks": 3,
    "type": "short",
    "questionText": "What is radix of a number system? Give an example.",
    "questionTextTamil": "எண் முறையின் அடிமானம் (Radix/Base) என்றால் என்ன? எடுத்துக்காட்டு தருக.",
    "answer": "The base or radix of a number system is the total number of unique digits or symbols available in that number system.\nExamples:\n• Decimal: Radix = 10 (digits 0 to 9) e.g., (254)₁₀\n• Binary: Radix = 2 (digits 0 and 1) e.g., (1101)₂\n• Octal: Radix = 8 (digits 0 to 7) e.g., (76)₈\n• Hexadecimal: Radix = 16 (0-9, A-F) e.g., (3F)₁₆.",
    "answerTamil": "ஒரு எண் முறையில் பயன்படுத்தப்படும் மொத்த தனித்துவமான குறியீடுகள் அல்லது எண்களின் எண்ணிக்கை அதன் அடிமானம் (Radix) எனப்படும்.\nஎடுத்துக்காட்டுகள்:\n• பதின்ம எண் முறை (Decimal): அடிமானம் 10 (0-9)\n• இருநிலை எண் முறை (Binary): அடிமானம் 2 (0, 1)\n• எண்ணிலை எண் முறை (Octal): அடிமானம் 8 (0-7)\n• பதினாறுநிலை எண் முறை (Hexadecimal): அடிமானம் 16 (0-9, A-F).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch2-3m-2",
    "chapterNo": 2,
    "chapterName": "Number Systems",
    "chapterNameTamil": "எண் முறைகள்",
    "marks": 3,
    "type": "short",
    "questionText": "Write a short note on binary number system.",
    "questionTextTamil": "இருநிலை எண் முறை பற்றி சிறுகுறிப்பு வரைக.",
    "answer": "• The binary number system has a base of 2.\n• It uses only two digits: 0 and 1, known as binary digits or bits.\n• Digital computers use the binary system internally because electronic circuits operate using two voltage states (ON = 1, OFF = 0).\n• The leftmost bit is the Most Significant Bit (MSB) and the rightmost is the Least Significant Bit (LSB).",
    "answerTamil": "• இருநிலை எண் முறையின் அடிமானம் 2 ஆகும்.\n• இது 0 மற்றும் 1 ஆகிய இரண்டு இலக்கங்களை மட்டுமே கொண்டுள்ளது; இவை 'பிட்கள்' (Bits) எனப்படுகின்றன.\n• மின்னணு சுற்றுகளின் இரண்டு நிலைகளை (ON = 1, OFF = 0) குறிக்க கணிப்பொறிகள் இருநிலை எண் முறையைப் பயன்படுத்துகின்றன.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch2-3m-3",
    "chapterNo": 2,
    "chapterName": "Number Systems",
    "chapterNameTamil": "எண் முறைகள்",
    "marks": 3,
    "type": "short",
    "questionText": "Convert (150)₁₀ into Binary, then convert that Binary number to Octal.",
    "questionTextTamil": "(150)₁₀-ஐ இருநிலை எண்ணாக மாற்றி, பின்னர் அதனை எண்ணிலை எண்ணாக மாற்றுக.",
    "answer": "1. Decimal to Binary:\n150 / 2 = 75 (rem 0)\n75 / 2 = 37 (rem 1)\n37 / 2 = 18 (rem 1)\n18 / 2 = 9 (rem 0)\n9 / 2 = 4 (rem 1)\n4 / 2 = 2 (rem 0)\n2 / 2 = 1 (rem 0)\n1 / 2 = 0 (rem 1)\nBinary = (10010110)₂\n\n2. Binary to Octal (grouping into 3 bits from right):\n010 | 010 | 110\n010₂ = 2, 010₂ = 2, 110₂ = 6\nOctal = (226)₈.",
    "answerTamil": "1. பதின்மத்திலிருந்து இருநிலைக்கு:\n150-ஐ 2-ஆல் வகுக்க: (150)₁₀ = (10010110)₂\n\n2. இருநிலையிலிருந்து எண்ணிலைக்கு (வலமிருந்து 3 பிட்டுகளாகப் பிரிக்க):\n010 | 010 | 110\n(010)₂ = 2, (010)₂ = 2, (110)₂ = 6\nவிடை: (150)₁₀ = (10010110)₂ = (226)₈.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch2-3m-4",
    "chapterNo": 2,
    "chapterName": "Number Systems",
    "chapterNameTamil": "எண் முறைகள்",
    "marks": 3,
    "type": "short",
    "questionText": "Write a short note on ISCII.",
    "questionTextTamil": "ISCII பற்றி சிறுகுறிப்பு வரைக.",
    "answer": "• ISCII stands for Indian Standard Code for Information Interchange.\n• It is an 8-bit encoding scheme capable of encoding 256 characters.\n• It was formulated by the Bureau of Indian Standards (BIS) in 1986–88 to handle Indian regional languages, including Tamil, Hindi, Telugu, and Sanskrit along with the standard ASCII character set.",
    "answerTamil": "• ISCII என்பது Indian Standard Code for Information Interchange என்பதன் சுருக்கமாகும்.\n• இது 8-பிட் குறியீட்டு முறை (256 எழுத்துருக்கள்).\n• இந்திய தரநிலைப் பணியகம் (BIS) 1986-88ல் தமிழ் உள்ளிட்ட பல்வேறு இந்திய மொழிகளின் எழுத்துருக்களைக் கணினியில் உள்ளிட உருவாக்கியது.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch2-3m-5",
    "chapterNo": 2,
    "chapterName": "Number Systems",
    "chapterNameTamil": "எண் முறைகள்",
    "marks": 3,
    "type": "short",
    "questionText": "Add the following numbers:\na) -22₁₀ + 15₁₀\nb) 20₁₀ + 25₁₀",
    "questionTextTamil": "கூட்டுக:\nஅ) -22₁₀ + 15₁₀\nஆ) 20₁₀ + 25₁₀",
    "answer": "a) -22₁₀ + 15₁₀:\n• 22 in 8-bit binary: 00010110\n• 1's complement of 22: 11101001\n• 2's complement (-22): 11101010\n• +15 in 8-bit binary: 00001111\n• Adding: 11101010 + 00001111 = 11111001\n• Result: 11111001 is negative. Taking 2's complement gives 00000111 = -7₁₀.\n\nb) 20₁₀ + 25₁₀:\n• 20 in binary = 00010100\n• 25 in binary = 00011001\n• Addition: 00010100 + 00011001 = 00101101₂ = (45)₁₀.",
    "answerTamil": "அ) -22₁₀ + 15₁₀:\n• -22 ன் 2-ன் நிரப்பி = 11101010\n• +15 ன் இருநிலை = 00001111\n• கூட்டல்: 11101010 + 00001111 = 11111001₂ = -7₁₀.\n\nஆ) 20₁₀ + 25₁₀:\n• 20 = 00010100₂\n• 25 = 00011001₂\n• கூட்டல்: 00010100 + 00011001 = 00101101₂ = (45)₁₀.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch2-5m-1",
    "chapterNo": 2,
    "chapterName": "Number Systems",
    "chapterNameTamil": "எண் முறைகள்",
    "marks": 5,
    "type": "detail",
    "questionText": "a) Write the step-by-step procedure to convert fractional Decimal to Binary.\nb) Convert (98.46)₁₀ to its Binary equivalent.",
    "questionTextTamil": "அ) மிதப்புப் புள்ளி பதின்ம எண்ணை இருநிலை எண்ணாக மாற்றும் வழிமுறைகளை எழுதுக.\nஆ) (98.46)₁₀-ஐ இருநிலை எண்ணாக மாற்றுக.",
    "answer": "a) Procedure for Fractional Decimal to Binary:\n1. Split number into Integer part and Fractional part.\n2. Convert integer part using repeated division by 2.\n3. Convert fractional part using repeated multiplication by 2. Record the integer carry at each step.\n4. Write down the carry values from top to bottom.\n5. Combine integer binary and fractional binary with a binary radix point.\n\nb) Convert (98.46)₁₀:\n• Integer Part (98):\n98/2 = 49 (0), 49/2 = 24 (1), 24/2 = 12 (0), 12/2 = 6 (0), 6/2 = 3 (0), 3/2 = 1 (1), 1/2 = 0 (1)\n=> (98)₁₀ = (1100010)₂\n• Fractional Part (0.46):\n0.46 * 2 = 0.92 (Carry 0)\n0.92 * 2 = 1.84 (Carry 1)\n0.84 * 2 = 1.68 (Carry 1)\n0.68 * 2 = 1.36 (Carry 1)\n0.36 * 2 = 0.72 (Carry 0)\n=> (0.46)₁₀ ≈ (0.01110)₂\n• Combined: (98.46)₁₀ = (1100010.01110)₂.",
    "answerTamil": "அ) வழிமுறைகள்:\n1. முழு எண் பகுதியை 2-ஆல் தொடர் வகுத்தல் செய்ய வேண்டும்.\n2. பின்னப் பகுதியை 2-ஆல் பெருக்கி முழு எண் மீதியை குறித்துக் கொள்ள வேண்டும்.\n3. முழு எண் பகுதியையும் பின்னப் பகுதியையும் இணைக்க வேண்டும்.\n\nஆ) (98.46)₁₀:\n• முழு எண் (98) = (1100010)₂\n• பின்னம் (0.46) = (0.01110)₂\nவிடை: (98.46)₁₀ = (1100010.01110)₂.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch2-5m-2",
    "chapterNo": 2,
    "chapterName": "Number Systems",
    "chapterNameTamil": "எண் முறைகள்",
    "marks": 5,
    "type": "detail",
    "questionText": "Find 1's Complement and 2's Complement for the following Decimal numbers:\na) -98\nb) -135",
    "questionTextTamil": "பின்வரும் பதின்ம எண்களுக்கு 1-ன் நிரப்பி மற்றும் 2-ன் நிரப்பி காண்க:\nஅ) -98\nஆ) -135",
    "answer": "a) For -98 (using 8-bit format):\n• +98 in binary: 01100010\n• 1's Complement (invert bits): 10011101\n• 2's Complement (add 1): 10011101 + 1 = 10011110\n\nb) For -135 (requires 16-bit format since 135 > 127):\n• +135 in 16-bit binary: 0000 0000 1000 0111\n• 1's Complement: 1111 1111 0111 1000\n• 2's Complement (add 1): 1111 1111 0111 1001.",
    "answerTamil": "அ) -98 (8-பிட்):\n• +98 = 01100010₂\n• 1-ன் நிரப்பி = 10011101₂\n• 2-ன் நிரப்பி = 10011110₂\n\nஆ) -135 (16-பிட்):\n• +135 = 0000 0000 1000 0111₂\n• 1-ன் நிரப்பி = 1111 1111 0111 1000₂\n• 2-ன் நிரப்பி = 1111 1111 0111 1001₂.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch2-5m-3",
    "chapterNo": 2,
    "chapterName": "Number Systems",
    "chapterNameTamil": "எண் முறைகள்",
    "marks": 5,
    "type": "detail",
    "questionText": "a) Add 1101010₂ + 101101₂.\nb) Explain subtraction using 2's complement with a suitable example.",
    "questionTextTamil": "அ) கூட்டுக: 1101010₂ + 101101₂.\nஆ) 2-ன் நிரப்பி முறையைப் பயன்படுத்தி கழித்தலை தகுந்த எடுத்துக்காட்டுடன் விளக்குக.",
    "answer": "a) Binary Addition:\n  1 1 0 1 0 1 0\n+ 0 1 0 1 1 0 1\n---------------\n1 0 0 1 0 1 1 1₂ = (151)₁₀\n\nb) Subtraction using 2's Complement (A - B):\n• Step 1: Find 2's complement of subtrahend (B).\n• Step 2: Add this 2's complement to minuend (A).\n• Step 3: If carry occurs at MSB, discard carry; result is positive.\n• Step 4: If no carry occurs, take 2's complement of the result and put a negative sign.\nExample: Subtract 5₁₀ (00000101) from 12₁₀ (00001100):\n• 2's complement of 5 = 11111011\n• Add to 12: 00001100 + 11111011 = (1) 00000111\n• Discard end carry (1) -> Result = 00000111₂ = +7₁₀.",
    "answerTamil": "அ) இருநிலை கூட்டல்:\n  1101010₂ + 0101101₂ = 10010111₂ (151)₁₀\n\nஆ) 2-ன் நிரப்பி முறை கழித்தல் (A - B):\n1. கழிக்கப்படும் எண்ணின் (B) 2-ன் நிரப்பியைக் காண வேண்டும்.\n2. அதனை முதல் எண்ணுடன் (A) கூட்ட வேண்டும்.\n3. இறுதி மீதி (End carry) வந்தால் அதனைப் புறக்கணிக்கவும் (விடை நேர்மறை).\n4. மீதி வரவில்லை என்றால் முடிவின் 2-ன் நிரப்பியைக் கண்டு மைனஸ் குறியிடவும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch3-1m-1",
    "chapterNo": 3,
    "chapterName": "Computer Organisation",
    "chapterNameTamil": "கணிப்பொறி அமைப்பு முறை",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which of the following is said to be the brain of a computer?",
    "questionTextTamil": "கணிப்பொறியின் மூளை என்று அழைக்கப்படுவது எது?",
    "options": {
      "A": "Input devices",
      "B": "Output devices",
      "C": "Memory device",
      "D": "Microprocessor"
    },
    "optionsTamil": {
      "A": "உள்ளீட்டு சாதனங்கள்",
      "B": "வெளியீட்டு சாதனங்கள்",
      "C": "நினைவக சாதனம்",
      "D": "நுண்செயலி (Microprocessor)"
    },
    "correctOption": "D",
    "answer": "D) Microprocessor",
    "answerTamil": "D) நுண்செயலி (Microprocessor)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch3-1m-2",
    "chapterNo": 3,
    "chapterName": "Computer Organisation",
    "chapterNameTamil": "கணிப்பொறி அமைப்பு முறை",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which of the following is not a component of a microprocessor?",
    "questionTextTamil": "பின்வருவனவற்றுள் எது நுண்செயலியின் பகுதி அல்ல?",
    "options": {
      "A": "ALU",
      "B": "Control Unit",
      "C": "Registers",
      "D": "Secondary Memory"
    },
    "optionsTamil": {
      "A": "ALU",
      "B": "கட்டுப்பாட்டு அலகு",
      "C": "பதிவகங்கள்",
      "D": "இரண்டாம் நிலை நினைவகம்"
    },
    "correctOption": "D",
    "answer": "D) Secondary Memory",
    "answerTamil": "D) இரண்டாம் நிலை நினைவகம்",
    "isBookBack": true
  },
  {
    "id": "ca11-ch3-1m-3",
    "chapterNo": 3,
    "chapterName": "Computer Organisation",
    "chapterNameTamil": "கணிப்பொறி அமைப்பு முறை",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which of the following is the fastest memory?",
    "questionTextTamil": "பின்வருவனவற்றுள் அதிவேக நினைவகம் எது?",
    "options": {
      "A": "Hard disk",
      "B": "Main Memory",
      "C": "Cache Memory",
      "D": "Blu-Ray disk"
    },
    "optionsTamil": {
      "A": "வன்வட்டு",
      "B": "முதன்மை நினைவகம்",
      "C": "கேச் நினைவகம் (Cache Memory)",
      "D": "புளூ-ரே வட்டு"
    },
    "correctOption": "C",
    "answer": "C) Cache Memory",
    "answerTamil": "C) கேச் நினைவகம் (Cache Memory)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch3-1m-4",
    "chapterNo": 3,
    "chapterName": "Computer Organisation",
    "chapterNameTamil": "கணிப்பொறி அமைப்பு முறை",
    "marks": 1,
    "type": "mcq",
    "questionText": "What is the capacity of a standard single-sided Blu-Ray disk?",
    "questionTextTamil": "ஒரு நிலையான ஒற்றைப் பக்க புளூ-ரே வட்டின் கொள்ளளவு என்ன?",
    "options": {
      "A": "4.7 GB",
      "B": "8.5 GB",
      "C": "25 GB",
      "D": "50 GB"
    },
    "optionsTamil": {
      "A": "4.7 GB",
      "B": "8.5 GB",
      "C": "25 GB",
      "D": "50 GB"
    },
    "correctOption": "C",
    "answer": "C) 25 GB",
    "answerTamil": "C) 25 GB",
    "isBookBack": true
  },
  {
    "id": "ca11-ch3-1m-5",
    "chapterNo": 3,
    "chapterName": "Computer Organisation",
    "chapterNameTamil": "கணிப்பொறி அமைப்பு முறை",
    "marks": 1,
    "type": "mcq",
    "questionText": "How many pins are there in a standard HDMI port?",
    "questionTextTamil": "ஒரு நிலையான HDMI போர்ட்டில் எத்தனை பின்கள் (Pins) உள்ளன?",
    "options": {
      "A": "9",
      "B": "15",
      "C": "19",
      "D": "25"
    },
    "optionsTamil": {
      "A": "9",
      "B": "15",
      "C": "19",
      "D": "25"
    },
    "correctOption": "C",
    "answer": "C) 19",
    "answerTamil": "C) 19",
    "isBookBack": true
  },
  {
    "id": "ca11-ch3-1m-6",
    "chapterNo": 3,
    "chapterName": "Computer Organisation",
    "chapterNameTamil": "கணிப்பொறி அமைப்பு முறை",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which bus is used to point to a physical memory location?",
    "questionTextTamil": "நினைவகத்தில் ஒரு குறிப்பிட்ட முகவரியைச் சுட்டிக்காட்டப் பயன்படும் பாட்டை எது?",
    "options": {
      "A": "Data Bus",
      "B": "Address Bus",
      "C": "Control Bus",
      "D": "System Bus"
    },
    "optionsTamil": {
      "A": "தரவுப் பாட்டை",
      "B": "முகவரிப் பாட்டை (Address Bus)",
      "C": "கட்டுப்பாட்டுப் பாட்டை",
      "D": "அமைப்புப் பாட்டை"
    },
    "correctOption": "B",
    "answer": "B) Address Bus",
    "answerTamil": "B) முகவரிப் பாட்டை (Address Bus)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch3-1m-7",
    "chapterNo": 3,
    "chapterName": "Computer Organisation",
    "chapterNameTamil": "கணிப்பொறி அமைப்பு முறை",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which memory retains data only as long as power is supplied?",
    "questionTextTamil": "மின்சாரம் இருக்கும் வரை மட்டுமே தரவை வைத்திருக்கக்கூடிய நினைவகம் எது?",
    "options": {
      "A": "ROM",
      "B": "RAM",
      "C": "Flash memory",
      "D": "Hard disk"
    },
    "optionsTamil": {
      "A": "ROM",
      "B": "RAM",
      "C": "ஃபிளாஷ் நினைவகம்",
      "D": "வன்வட்டு"
    },
    "correctOption": "B",
    "answer": "B) RAM",
    "answerTamil": "B) RAM",
    "isBookBack": true
  },
  {
    "id": "ca11-ch3-1m-8",
    "chapterNo": 3,
    "chapterName": "Computer Organisation",
    "chapterNameTamil": "கணிப்பொறி அமைப்பு முறை",
    "marks": 1,
    "type": "mcq",
    "questionText": "Expand USB",
    "questionTextTamil": "USB என்பதன் விரிவாக்கம்:",
    "options": {
      "A": "Universal Serial Bus",
      "B": "Universal System Bus",
      "C": "Uniform Serial Bus",
      "D": "Unified System Bus"
    },
    "optionsTamil": {
      "A": "Universal Serial Bus",
      "B": "Universal System Bus",
      "C": "Uniform Serial Bus",
      "D": "Unified System Bus"
    },
    "correctOption": "A",
    "answer": "A) Universal Serial Bus",
    "answerTamil": "A) Universal Serial Bus",
    "isBookBack": true
  },
  {
    "id": "ca11-ch3-1m-9",
    "chapterNo": 3,
    "chapterName": "Computer Organisation",
    "chapterNameTamil": "கணிப்பொறி அமைப்பு முறை",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which interface is used to connect CRT/LCD monitors using 15 pins?",
    "questionTextTamil": "15 பின்களைக் கொண்டு CRT/LCD திரையகங்களை இணைக்கப் பயன்படும் தொடர்பு சாதனம் எது?",
    "options": {
      "A": "PS/2",
      "B": "VGA connector",
      "C": "Audio jack",
      "D": "Serial port"
    },
    "optionsTamil": {
      "A": "PS/2",
      "B": "VGA இணைப்பான் (VGA connector)",
      "C": "ஆடியோ ஜாக்",
      "D": "தொடர் போர்ட்"
    },
    "correctOption": "B",
    "answer": "B) VGA connector",
    "answerTamil": "B) VGA இணைப்பான் (VGA connector)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch3-1m-10",
    "chapterNo": 3,
    "chapterName": "Computer Organisation",
    "chapterNameTamil": "கணிப்பொறி அமைப்பு முறை",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which unit in microprocessor coordinates the operations of other hardware parts?",
    "questionTextTamil": "நுண்செயலியில் பிற வன்பொருள் உறுப்புகளின் செயல்பாடுகளை ஒருங்கிணைக்கும் பகுதி எது?",
    "options": {
      "A": "ALU",
      "B": "Registers",
      "C": "Control Unit",
      "D": "Data Bus"
    },
    "optionsTamil": {
      "A": "ALU",
      "B": "பதிவகங்கள்",
      "C": "கட்டுப்பாட்டு அலகு (Control Unit)",
      "D": "தரவுப் பாட்டை"
    },
    "correctOption": "C",
    "answer": "C) Control Unit",
    "answerTamil": "C) கட்டுப்பாட்டு அலகு (Control Unit)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch3-2m-1",
    "chapterNo": 3,
    "chapterName": "Computer Organisation",
    "chapterNameTamil": "கணிப்பொறி அமைப்பு முறை",
    "marks": 2,
    "type": "short",
    "questionText": "What is computer organisation?",
    "questionTextTamil": "கணிப்பொறி அமைப்பு முறை என்றால் என்ன?",
    "answer": "Computer organisation deals with the hardware components of a computer and how they are interconnected and interact with each other to realize the architectural specifications.",
    "answerTamil": "கணிப்பொறி அமைப்பு முறை என்பது கணினியின் வன்பொருள் கூறுகளையும், அவை கட்டமைப்பு குறிப்பீடுகளை நிறைவேற்ற ஒன்றோடொன்று எவ்வாறு இணைக்கப்பட்டுள்ளன என்பதையும் விளக்குகிறது.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch3-2m-2",
    "chapterNo": 3,
    "chapterName": "Computer Organisation",
    "chapterNameTamil": "கணிப்பொறி அமைப்பு முறை",
    "marks": 2,
    "type": "short",
    "questionText": "What is a microprocessor?",
    "questionTextTamil": "நுண்செயலி என்றால் என்ன?",
    "answer": "A microprocessor is a programmable multipurpose silicon semiconductor chip that reads binary instructions from memory, accepts binary data as input, processes the data according to instructions, and provides output.",
    "answerTamil": "நுண்செயலி என்பது நினைவகத்திலிருந்து கட்டளைகளைப் படித்து, உள்ளீட்டுத் தரவுகளைப் பெற்று, கட்டளைகளுக்கேற்ப செயலாக்கம் செய்து வெளியீட்டைத் தரும் சிலிக்கான் குறைக்கடத்தி சில்லாகும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch3-2m-3",
    "chapterNo": 3,
    "chapterName": "Computer Organisation",
    "chapterNameTamil": "கணிப்பொறி அமைப்பு முறை",
    "marks": 2,
    "type": "short",
    "questionText": "What is the Program Counter (PC)?",
    "questionTextTamil": "நிரல் கவுண்ட்டர் (PC) என்றால் என்ன?",
    "answer": "The Program Counter (PC) is a special purpose register inside the CPU that keeps track of the memory address of the next instruction waiting to be fetched and executed.",
    "answerTamil": "நிரல் கவுண்ட்டர் (Program Counter) என்பது அடுத்ததாக செயல்படுத்தப்பட வேண்டிய கட்டளையின் நினைவக முகவரியைச் சேமித்து வைக்கும் ஒரு சிறப்புப் பதிவகமாகும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch3-2m-4",
    "chapterNo": 3,
    "chapterName": "Computer Organisation",
    "chapterNameTamil": "கணிப்பொறி அமைப்பு முறை",
    "marks": 2,
    "type": "short",
    "questionText": "Differentiate between CD and DVD.",
    "questionTextTamil": "குறுவட்டு (CD) மற்றும் டிஜிட்டல் பன்முக வட்டு (DVD) - வேறுபடுத்துக.",
    "answer": "• Compact Disc (CD): Capacity around 700 MB, uses 780 nm infrared laser.\n• Digital Versatile Disc (DVD): Capacity from 4.7 GB up to 8.5 GB (dual layer), uses 650 nm red laser with narrower track spacing for higher density.",
    "answerTamil": "• CD (Compact Disc): கொள்ளளவு சுமார் 700 MB; அகச்சிவப்பு லேசர் பயன்படுத்தப்படுகிறது.\n• DVD: கொள்ளளவு 4.7 GB முதல் 8.5 GB வரை; மிகக் குறுகிய தடங்களில் சிவப்பு லேசர் மூலம் அதிக அடர்த்தியில் சேமிக்கப்படுகிறது.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch3-2m-5",
    "chapterNo": 3,
    "chapterName": "Computer Organisation",
    "chapterNameTamil": "கணிப்பொறி அமைப்பு முறை",
    "marks": 2,
    "type": "short",
    "questionText": "What is flash memory?",
    "questionTextTamil": "ஃபிளாஷ் நினைவகம் என்றால் என்ன?",
    "answer": "Flash memory is an electronic non-volatile, rewritable semiconductor storage medium that can be electrically erased and reprogrammed. Examples include USB pen drives and memory cards.",
    "answerTamil": "ஃபிளாஷ் நினைவகம் என்பது மின்னியல் முறையில் அழிக்கப்பட்டு மீண்டும் எழுதக்கூடிய ஒரு அழியாத சேமிப்பு சாதனமாகும் (எ.கா: USB பென்டிரைவ், மெமரி கார்டுகள்).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch3-3m-1",
    "chapterNo": 3,
    "chapterName": "Computer Organisation",
    "chapterNameTamil": "கணிப்பொறி அமைப்பு முறை",
    "marks": 3,
    "type": "short",
    "questionText": "Write a short note on Cache memory.",
    "questionTextTamil": "கேச் நினைவகம் பற்றி சிறுகுறிப்பு வரைக.",
    "answer": "• Cache memory is an extremely high-speed memory placed between the CPU and the main memory (RAM).\n• It stores frequently accessed data and instructions to drastically reduce data access time.\n• It is faster than RAM but has smaller storage capacity.",
    "answerTamil": "• கேச் நினைவகம் என்பது CPU மற்றும் முதன்மை நினைவகத்திற்கு (RAM) இடையில் வைக்கப்பட்டுள்ள அதிவேக நினைவகமாகும்.\n• அடிக்கடி பயன்படும் தரவுகளைச் சேமித்து CPU-வின் செயலாக்க வேகத்தை அதிகரிக்க உதவுகிறது.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch3-3m-2",
    "chapterNo": 3,
    "chapterName": "Computer Organisation",
    "chapterNameTamil": "கணிப்பொறி அமைப்பு முறை",
    "marks": 3,
    "type": "short",
    "questionText": "Differentiate flash memory and EEPROM.",
    "questionTextTamil": "ஃபிளாஷ் நினைவகம் மற்றும் EEPROM - வேறுபடுத்துக.",
    "answer": "• EEPROM (Electrically Erasable PROM): Erases and rewrites data at the single-byte level, making it comparatively slower for large files.\n• Flash Memory: An advanced type of EEPROM that erases and writes data in whole blocks (e.g. 512 bytes), allowing much faster read/write speeds.",
    "answerTamil": "• EEPROM: ஒவ்வொரு பைட்டாக மின்சாரத்தால் அழிக்கப்பட்டு எழுதப்படுகிறது; வேகம் குறைவு.\n• ஃபிளாஷ் நினைவகம்: தொகுதிகளாக (Blocks) அழிக்கப்பட்டு அதிவேகமாக எழுதப்படுகிறது.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch3-3m-3",
    "chapterNo": 3,
    "chapterName": "Computer Organisation",
    "chapterNameTamil": "கணிப்பொறி அமைப்பு முறை",
    "marks": 3,
    "type": "short",
    "questionText": "What are the main characteristics of a microprocessor?",
    "questionTextTamil": "நுண்செயலியின் முக்கிய பண்பியல்புகள் யாவை?",
    "answer": "A microprocessor's performance depends on three core characteristics:\n1. Clock Speed: The speed at which the processor executes instructions (measured in GHz).\n2. Instruction Set: The set of machine commands the processor can execute.\n3. Word Size: The number of bits the processor can process in a single cycle (e.g. 32-bit or 64-bit).",
    "answerTamil": "1. கடிகார வேகம் (Clock Speed): கட்டளைகளை இயக்கும் வேகம் (GHz).\n2. கட்டளைத் தொகுதி (Instruction Set): செயலி புரிந்துகொள்ளும் கட்டளைகளின் பட்டியல்.\n3. சொல் அளவு (Word Size): ஒரு சுழற்சியில் செயல்படுத்தப்படும் பிட்டுகளின் எண்ணிக்கை (32-பிட் / 64-பிட்).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch3-3m-4",
    "chapterNo": 3,
    "chapterName": "Computer Organisation",
    "chapterNameTamil": "கணிப்பொறி அமைப்பு முறை",
    "marks": 3,
    "type": "short",
    "questionText": "List the ports and interfaces found in a typical computer system.",
    "questionTextTamil": "கணிப்பொறி அமைப்பில் காணப்படும் போர்ட்கள் மற்றும் இடைமுகங்களைப் பட்டியலிடுக.",
    "answer": "Common ports and interfaces:\n1. USB (Universal Serial Bus) Ports for keyboard, mouse, pen drives.\n2. VGA Port: 15-pin analog monitor connector.\n3. HDMI (High Definition Multimedia Interface): High-definition digital audio/video.\n4. Ethernet / LAN (RJ-45) Port: Network cables.\n5. Audio In/Out Jacks: 3.5mm speaker and mic ports.",
    "answerTamil": "1. USB போர்ட் (விசைப்பலகை, சுட்டி, பென்டிரைவ் இணைக்க)\n2. VGA போர்ட் (திரையகம் இணைக்க)\n3. HDMI போர்ட் (உயர் தெளிவுத்திறன் கொண்ட ஆடியோ/வீடியோ)\n4. ஈதர்நெட் / RJ-45 போர்ட் (இணைய இணைப்பு)\n5. ஆடியோ போர்ட்கள் (மைக் மற்றும் ஸ்பீக்கர்).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch3-3m-5",
    "chapterNo": 3,
    "chapterName": "Computer Organisation",
    "chapterNameTamil": "கணிப்பொறி அமைப்பு முறை",
    "marks": 3,
    "type": "short",
    "questionText": "Explain the differences between Dynamic RAM (DRAM) and Static RAM (SRAM).",
    "questionTextTamil": "DRAM மற்றும் SRAM - வேறுபடுத்துக.",
    "answer": "• Dynamic RAM (DRAM): Made of capacitors that leak charge; needs continuous periodic refreshing; slower and cheaper; used as main memory (RAM).\n• Static RAM (SRAM): Made of flip-flops; does not require periodic refreshing; faster and more expensive; used as Cache memory.",
    "answerTamil": "• DRAM: மின்தேக்கிகளால் ஆனது; தொடர்ந்து புதுப்பிக்கப்பட (Refresh) வேண்டும்; விலை குறைவு, வேகம் குறைவு; முதன்மை நினைவகமாகப் பயன்படுகிறது.\n• SRAM: ஃபிளிப்-ஃப்ளாப்களால் ஆனது; புதுப்பிக்க தேவையில்லை; அதிவேகமானது; கேச் நினைவகமாகப் பயன்படுகிறது.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch3-3m-6",
    "chapterNo": 3,
    "chapterName": "Computer Organisation",
    "chapterNameTamil": "கணிப்பொறி அமைப்பு முறை",
    "marks": 3,
    "type": "short",
    "questionText": "What is an optical storage medium? Name two examples.",
    "questionTextTamil": "ஒளியியல் சேமிப்பு ஊடகம் என்றால் என்ன? இரண்டு எடுத்துக்காட்டுகள் தருக.",
    "answer": "An optical storage medium stores digital data using laser light to burn microscopic pits and lands onto a circular reflective disc.\nExamples: Compact Disc (CD), Digital Versatile Disc (DVD), Blu-Ray Disc.",
    "answerTamil": "ஒளியியல் சேமிப்பு ஊடகம் என்பது லேசர் ஒளியைப் பயன்படுத்தி வட்ட வடிவிலான தட்டுகளில் தரவுகளைச் சேமிக்கும் சாதனமாகும்.\nஎடுத்துக்காட்டுகள்: CD, DVD, புளூ-ரே வட்டு (Blu-Ray Disc).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch3-3m-7",
    "chapterNo": 3,
    "chapterName": "Computer Organisation",
    "chapterNameTamil": "கணிப்பொறி அமைப்பு முறை",
    "marks": 3,
    "type": "short",
    "questionText": "What is HDMI? State its primary advantage.",
    "questionTextTamil": "HDMI என்றால் என்ன? அதன் முதன்மை நன்மையை எழுதுக.",
    "answer": "HDMI (High Definition Multimedia Interface) is a digital audio/video interface used to transmit uncompressed video data and compressed/uncompressed digital audio from a display controller to a computer monitor, TV, or projector over a single cable.",
    "answerTamil": "HDMI என்பது ஒரே கேபிள் வழியாக மிகத் துல்லியமான டிஜிட்டல் காட்சி மற்றும் ஒலி சமிக்ஞைகளை கணினியிலிருந்து தொலைக்காட்சி அல்லது புரொஜெக்டருக்கு அனுப்பும் அதிநவீன இடைமுகமாகும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch3-5m-1",
    "chapterNo": 3,
    "chapterName": "Computer Organisation",
    "chapterNameTamil": "கணிப்பொறி அமைப்பு முறை",
    "marks": 5,
    "type": "detail",
    "questionText": "Explain the key characteristics of a microprocessor in detail.",
    "questionTextTamil": "நுண்செயலியின் முக்கிய சிறப்பியல்புகளை விரிவாக விளக்குக.",
    "answer": "A microprocessor's efficiency is determined by three core characteristics:\n\n1. Clock Speed:\n- Every microprocessor has an internal clock that generates electronic pulses to regulate operation speed.\n- Measured in Megahertz (MHz) or Gigahertz (GHz).\n\n2. Instruction Set:\n- The command set designed into the chip to execute operations (Data transfer, Arithmetic, Logical, Control transfer, I/O).\n\n3. Word Size:\n- The number of bits that can be processed simultaneously by the processor in a single instruction cycle.\n- Common word sizes are 32-bit and 64-bit microprocessors.",
    "answerTamil": "1. கடிகார வேகம் (Clock Speed): செயலியில் உள்ள உள் கடிகாரம் கட்டளைகளின் செயல்பாட்டு வேகத்தை துடிப்பு அலைகள் மூலம் தீர்மானிக்கிறது (GHz).\n2. கட்டளைத் தொகுதி (Instruction Set): செயலி செயல்படுத்தக்கூடிய அடிப்படை கட்டளைகளின் தொகுப்பாகும் (தரவு பரிமாற்றம், கணக்கீடு, தர்க்கம்).\n3. சொல் அளவு (Word Size): செயலி ஒரே நேரத்தில் செயலாக்கக்கூடிய பிட்டுகளின் எண்ணிக்கையாகும் (32-பிட் / 64-பிட்).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch3-5m-2",
    "chapterNo": 3,
    "chapterName": "Computer Organisation",
    "chapterNameTamil": "கணிப்பொறி அமைப்பு முறை",
    "marks": 5,
    "type": "detail",
    "questionText": "How are read and write operations performed by a processor? Explain with a diagrammatic flow.",
    "questionTextTamil": "செயலியால் படித்தல் மற்றும் எழுதுதல் செயல்பாடுகள் எவ்வாறு செய்யப்படுகின்றன என்பதை வரைபடத்துடன் விளக்குக.",
    "answer": "Read and Write operations performed via System Buses:\n\n1. Memory Read Operation:\n- The CPU places the memory address on the Address Bus.\n- The CPU asserts the READ control signal on the Control Bus.\n- The memory controller retrieves data from the specified cell and places it on the Data Bus, which is read into the CPU registers.\n\n2. Memory Write Operation:\n- The CPU places target address on Address Bus.\n- The CPU puts data to be stored on Data Bus.\n- The CPU asserts the WRITE control signal on Control Bus, transferring data into memory.",
    "answerTamil": "1. நினைவக படித்தல் செயல்பாடு (Read):\n- CPU முகவரிப் பாட்டையில் முகவரியை வைக்கிறது.\n- கட்டுப்பாட்டுப் பாட்டையில் READ சிக்னலை அனுப்புகிறது.\n- நினைவகம் தரவை தரவுப் பாட்டையில் வைத்து CPU பதிவகத்திற்கு அனுப்புகிறது.\n\n2. நினைவக எழுதுதல் செயல்பாடு (Write):\n- முகவரிப் பாட்டையில் முகவரியையும், தரவுப் பாட்டையில் புதிய தரவையும் CPU வைக்கிறது.\n- கட்டுப்பாட்டுப் பாட்டையில் WRITE சிக்னல் மூலம் தரவு நினைவகத்தில் எழுதப்படுகிறது.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch3-5m-3",
    "chapterNo": 3,
    "chapterName": "Computer Organisation",
    "chapterNameTamil": "கணிப்பொறி அமைப்பு முறை",
    "marks": 5,
    "type": "detail",
    "questionText": "Arrange the memory devices in ascending order based on their access time and explain their hierarchy.",
    "questionTextTamil": "நினைவக சாதனங்களை அணுகல் நேரத்தின் அடிப்படையில் ஏறுவரிசையில் அமைத்து, நினைவக படிநிலையை விளக்குக.",
    "answer": "Memory Hierarchy (Ascending order of Access Time - Fastest to Slowest):\n\n1. CPU Registers (Fastest access, smallest capacity)\n2. Cache Memory (L1, L2, L3 cache)\n3. Main Memory (RAM / DRAM)\n4. Flash Memory / Solid State Drives (SSD)\n5. Magnetic Hard Disk Drive (HDD)\n6. Optical Drives (CD, DVD, Blu-Ray)\n7. Magnetic Tape (Slowest, archival storage)\n\nAs you move down the hierarchy: Access time increases, storage capacity increases, and cost per bit decreases significantly.",
    "answerTamil": "நினைவக படிநிலை (வேகத்தின் ஏறுவரிசை):\n1. CPU பதிவகங்கள் (Registers) - அதிவேகமானது\n2. கேச் நினைவகம் (Cache Memory)\n3. முதன்மை நினைவகம் (RAM)\n4. ஃபிளாஷ் நினைவகம் / SSD\n5. வன்வட்டு (Hard Disk)\n6. ஒளியியல் வட்டுகள் (CD/DVD/Blu-Ray)\n7. காந்த நாடா (Magnetic Tape)\n\nகீழ்நோக்கிச் செல்லச் செல்ல: அணுகல் நேரம் அதிகமாகும், கொள்ளளவு அதிகரிக்கும், விலை குறையும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch3-5m-4",
    "chapterNo": 3,
    "chapterName": "Computer Organisation",
    "chapterNameTamil": "கணிப்பொறி அமைப்பு முறை",
    "marks": 5,
    "type": "detail",
    "questionText": "Explain the different types of ROM (Read Only Memory) with their features.",
    "questionTextTamil": "ROM நினைவகத்தின் பல்வேறு வகைகளையும் அவற்றின் பண்புகளையும் விளக்குக.",
    "answer": "Types of ROM:\n\n1. PROM (Programmable ROM):\n- Manufactured blank and can be programmed once using a PROM burner. Once written, data cannot be erased.\n\n2. EPROM (Erasable Programmable ROM):\n- Can be erased by exposing the chip to strong Ultraviolet (UV) light for 15-20 minutes, then reprogrammed.\n\n3. EEPROM (Electrically Erasable Programmable ROM):\n- Can be erased electrically byte-by-byte without removing the chip from the circuit board. Flexible but slower write cycle.\n\n4. Flash ROM:\n- High-speed EEPROM that erases data in blocks for rapid updates (used in BIOS firmware).",
    "answerTamil": "1. PROM: ஒரு முறை மட்டுமே நிரலாக்கம் செய்ய முடியும்; மாற்ற முடியாது.\n2. EPROM: புற ஊதாக் கதிர்களைப் (UV Light) பாய்ச்சி இதில் உள்ள தகவல்களை அழித்து மீண்டும் எழுதலாம்.\n3. EEPROM: மின்சாரத்தைக் கொண்டு பைட்டுகளாக அழித்து மீண்டும் எழுதலாம்.\n4. Flash ROM: மிக வேகமாக தொகுதிகளாக அழிக்கப்பட்டு புதுப்பிக்கப்படும் நவீன நினைவகம்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch4-1m-1",
    "chapterNo": 4,
    "chapterName": "Theoretical Concepts of Operating System",
    "chapterNameTamil": "இயக்க அமைப்பின் கோட்பாட்டு கருத்துக்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Operating system is a:",
    "questionTextTamil": "இயக்க அமைப்பு என்பது ஒரு:",
    "options": {
      "A": "Application Software",
      "B": "System Software",
      "C": "Utility Software",
      "D": "Firmware"
    },
    "optionsTamil": {
      "A": "பயன்பாட்டு மென்பொருள்",
      "B": "அமைப்பு மென்பொருள் (System Software)",
      "C": "பயன்பாட்டு பயன்பாடு",
      "D": "நிலைபொருள்"
    },
    "correctOption": "B",
    "answer": "B) System Software",
    "answerTamil": "B) அமைப்பு மென்பொருள் (System Software)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch4-1m-2",
    "chapterNo": 4,
    "chapterName": "Theoretical Concepts of Operating System",
    "chapterNameTamil": "இயக்க அமைப்பின் கோட்பாட்டு கருத்துக்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which of the following is not a key function of an Operating System?",
    "questionTextTamil": "பின்வருவனவற்றுள் எது இயக்க அமைப்பின் முக்கிய பணி அல்ல?",
    "options": {
      "A": "Process Management",
      "B": "Memory Management",
      "C": "File Management",
      "D": "Compiler Management"
    },
    "optionsTamil": {
      "A": "செயல் மேலாண்மை",
      "B": "நினைவக மேலாண்மை",
      "C": "கோப்பு மேலாண்மை",
      "D": "மொழிமாற்றி மேலாண்மை (Compiler Management)"
    },
    "correctOption": "D",
    "answer": "D) Compiler Management",
    "answerTamil": "D) மொழிமாற்றி மேலாண்மை",
    "isBookBack": true
  },
  {
    "id": "ca11-ch4-1m-3",
    "chapterNo": 4,
    "chapterName": "Theoretical Concepts of Operating System",
    "chapterNameTamil": "இயக்க அமைப்பின் கோட்பாட்டு கருத்துக்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which of the following is a multi-user operating system?",
    "questionTextTamil": "பின்வருவனவற்றுள் பல பயனர் இயக்க அமைப்பு எது?",
    "options": {
      "A": "MS-DOS",
      "B": "Windows 95",
      "C": "Unix",
      "D": "Windows 3.1"
    },
    "optionsTamil": {
      "A": "MS-DOS",
      "B": "Windows 95",
      "C": "Unix",
      "D": "Windows 3.1"
    },
    "correctOption": "C",
    "answer": "C) Unix",
    "answerTamil": "C) Unix",
    "isBookBack": true
  },
  {
    "id": "ca11-ch4-1m-4",
    "chapterNo": 4,
    "chapterName": "Theoretical Concepts of Operating System",
    "chapterNameTamil": "இயக்க அமைப்பின் கோட்பாட்டு கருத்துக்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which of the following is an open source operating system?",
    "questionTextTamil": "பின்வருவனவற்றுள் திறந்த மூல இயக்க அமைப்பு எது?",
    "options": {
      "A": "Windows",
      "B": "Linux",
      "C": "macOS",
      "D": "iOS"
    },
    "optionsTamil": {
      "A": "Windows",
      "B": "Linux",
      "C": "macOS",
      "D": "iOS"
    },
    "correctOption": "B",
    "answer": "B) Linux",
    "answerTamil": "B) Linux",
    "isBookBack": true
  },
  {
    "id": "ca11-ch4-1m-5",
    "chapterNo": 4,
    "chapterName": "Theoretical Concepts of Operating System",
    "chapterNameTamil": "இயக்க அமைப்பின் கோட்பாட்டு கருத்துக்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which of the following operating system supports multi-tasking?",
    "questionTextTamil": "பின்வருவனவற்றுள் பல பணி (Multi-tasking) சூழலை ஆதரிக்கும் இயக்க அமைப்பு எது?",
    "options": {
      "A": "MS-DOS",
      "B": "Linux",
      "C": "Unix",
      "D": "Both (b) and (c)"
    },
    "optionsTamil": {
      "A": "MS-DOS",
      "B": "Linux",
      "C": "Unix",
      "D": "Both (b) and (c)"
    },
    "correctOption": "D",
    "answer": "D) Both (b) and (c)",
    "answerTamil": "D) Both (b) and (c)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch4-1m-6",
    "chapterNo": 4,
    "chapterName": "Theoretical Concepts of Operating System",
    "chapterNameTamil": "இயக்க அமைப்பின் கோட்பாட்டு கருத்துக்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which scheduling algorithm serves processes on a first-come basis?",
    "questionTextTamil": "முதலில் வரும் செயல் முதலில் செயல்படுத்தப்படும் திட்டமிடல் வழிமுறை எது?",
    "options": {
      "A": "SJF",
      "B": "FIFO",
      "C": "Round Robin",
      "D": "Priority"
    },
    "optionsTamil": {
      "A": "SJF",
      "B": "FIFO",
      "C": "Round Robin",
      "D": "Priority"
    },
    "correctOption": "B",
    "answer": "B) FIFO",
    "answerTamil": "B) FIFO (First In First Out)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch4-1m-7",
    "chapterNo": 4,
    "chapterName": "Theoretical Concepts of Operating System",
    "chapterNameTamil": "இயக்க அமைப்பின் கோட்பாட்டு கருத்துக்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which of the following manages access to files and directories securely?",
    "questionTextTamil": "கோப்புகள் மற்றும் கோப்பகங்களின் பாதுகாப்பான அணுகலை நிர்வகிப்பது எது?",
    "options": {
      "A": "File Management",
      "B": "Process Management",
      "C": "Device Driver",
      "D": "ROM BIOS"
    },
    "optionsTamil": {
      "A": "கோப்பு மேலாண்மை",
      "B": "செயல் மேலாண்மை",
      "C": "சாதன இயக்கி",
      "D": "ROM BIOS"
    },
    "correctOption": "A",
    "answer": "A) File Management",
    "answerTamil": "A) கோப்பு மேலாண்மை (File Management)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch4-1m-8",
    "chapterNo": 4,
    "chapterName": "Theoretical Concepts of Operating System",
    "chapterNameTamil": "இயக்க அமைப்பின் கோட்பாட்டு கருத்துக்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which algorithm gives fixed time slice (quantum) to each active process?",
    "questionTextTamil": "ஒவ்வொரு செயலுக்கும் நிலையான கால இடைவெளியை (Time Slice) வழங்கும் முறை எது?",
    "options": {
      "A": "Round Robin",
      "B": "FIFO",
      "C": "SJF",
      "D": "Multilevel Queue"
    },
    "optionsTamil": {
      "A": "Round Robin",
      "B": "FIFO",
      "C": "SJF",
      "D": "Multilevel Queue"
    },
    "correctOption": "A",
    "answer": "A) Round Robin",
    "answerTamil": "A) Round Robin",
    "isBookBack": true
  },
  {
    "id": "ca11-ch4-1m-9",
    "chapterNo": 4,
    "chapterName": "Theoretical Concepts of Operating System",
    "chapterNameTamil": "இயக்க அமைப்பின் கோட்பாட்டு கருத்துக்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Android OS is designed primarily for:",
    "questionTextTamil": "ஆண்ட்ராய்டு (Android) இயக்க அமைப்பு முதன்மையாக எதற்காக உருவாக்கப்பட்டது?",
    "options": {
      "A": "Mainframe computers",
      "B": "Mobile touch devices",
      "C": "Supercomputers",
      "D": "Analog computers"
    },
    "optionsTamil": {
      "A": "மெயின்பிரேம்",
      "B": "மொபைல் தொடுதிரை சாதனங்கள்",
      "C": "சூப்பர் கணினி",
      "D": "அனலாக் கணினி"
    },
    "correctOption": "B",
    "answer": "B) Mobile touch devices",
    "answerTamil": "B) மொபைல் தொடுதிரை சாதனங்கள்",
    "isBookBack": true
  },
  {
    "id": "ca11-ch4-2m-1",
    "chapterNo": 4,
    "chapterName": "Theoretical Concepts of Operating System",
    "chapterNameTamil": "இயக்க அமைப்பின் கோட்பாட்டு கருத்துக்கள்",
    "marks": 2,
    "type": "short",
    "questionText": "What is an Operating System?",
    "questionTextTamil": "இயக்க அமைப்பு (OS) என்றால் என்ன?",
    "answer": "An Operating System (OS) is a system software that acts as an intermediary interface between the user and the computer hardware, managing hardware resources and providing a platform for application software.",
    "answerTamil": "இயக்க அமைப்பு என்பது பயனர் மற்றும் கணிப்பொறி வன்பொருளுக்கு இடையே ஒரு பாலமாகச் செயல்பட்டு, வன்பொருள் வளங்களை நிர்வகிக்கும் அமைப்பு மென்பொருளாகும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch4-2m-2",
    "chapterNo": 4,
    "chapterName": "Theoretical Concepts of Operating System",
    "chapterNameTamil": "இயக்க அமைப்பின் கோட்பாட்டு கருத்துக்கள்",
    "marks": 2,
    "type": "short",
    "questionText": "What is multitasking in the context of Operating Systems?",
    "questionTextTamil": "இயக்க அமைப்பில் பல பணி (Multitasking) என்றால் என்ன?",
    "answer": "Multitasking is the ability of an operating system to execute multiple applications or processes simultaneously by rapidly switching the CPU between them.",
    "answerTamil": "ஒரே நேரத்தில் ஒன்றுக்கு மேற்பட்ட பணிகளை அல்லது பயன்பாடுகளை கணிப்பொறியில் இயக்குவதே பல பணி (Multitasking) எனப்படும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch4-2m-3",
    "chapterNo": 4,
    "chapterName": "Theoretical Concepts of Operating System",
    "chapterNameTamil": "இயக்க அமைப்பின் கோட்பாட்டு கருத்துக்கள்",
    "marks": 2,
    "type": "short",
    "questionText": "What is GUI (Graphical User Interface)?",
    "questionTextTamil": "வரைகலை பயனர் இடைமுகம் (GUI) என்றால் என்ன?",
    "answer": "A Graphical User Interface (GUI) allows users to interact with electronic devices through visual indicator icons, windows, menus, and pointers rather than typing text-based commands.",
    "answerTamil": "GUI என்பது தட்டச்சு கட்டளைகளுக்குப் பதிலாக திரையில் தோன்றும் சின்னங்கள் (Icons), சாளரங்கள் மற்றும் சுட்டி மூலம் கணிப்பொறியை எளிதாக இயக்கும் இடைமுகமாகும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch4-2m-4",
    "chapterNo": 4,
    "chapterName": "Theoretical Concepts of Operating System",
    "chapterNameTamil": "இயக்க அமைப்பின் கோட்பாட்டு கருத்துக்கள்",
    "marks": 2,
    "type": "short",
    "questionText": "Name any two open source operating systems.",
    "questionTextTamil": "ஏதேனும் இரண்டு திறந்த மூல இயக்க அமைப்புகளின் பெயர்களைக் கூறுக.",
    "answer": "1. Linux (Ubuntu, Fedora, Red Hat)\n2. Android OS.",
    "answerTamil": "1. லினக்ஸ் (Linux - Ubuntu)\n2. ஆண்ட்ராய்டு (Android).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch4-2m-5",
    "chapterNo": 4,
    "chapterName": "Theoretical Concepts of Operating System",
    "chapterNameTamil": "இயக்க அமைப்பின் கோட்பாட்டு கருத்துக்கள்",
    "marks": 2,
    "type": "short",
    "questionText": "What is the main difference between single-user and multi-user operating systems?",
    "questionTextTamil": "ஒற்றைப் பயனர் மற்றும் பல பயனர் இயக்க அமைப்புகளுக்கு இடையே உள்ள முக்கிய வேறுபாடு யாது?",
    "answer": "• Single-user OS allows only one user to access the computer and run programs at a given time (e.g. MS-DOS).\n• Multi-user OS allows multiple concurrent users on different terminals to share CPU, memory, and resources (e.g. UNIX, Linux, Windows Server).",
    "answerTamil": "• ஒற்றைப் பயனர் OS: ஒரே நேரத்தில் ஒரு பயனர் மட்டுமே கணினியைப் பயன்படுத்த முடியும் (எ.கா: MS-DOS).\n• பல பயனர் OS: ஒரே நேரத்தில் பல பயனர்கள் வெவ்வேறு முனையங்களிலிருந்து கணினியைப் பயன்படுத்தலாம் (எ.கா: UNIX, Linux).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch4-2m-6",
    "chapterNo": 4,
    "chapterName": "Theoretical Concepts of Operating System",
    "chapterNameTamil": "இயக்க அமைப்பின் கோட்பாட்டு கருத்துக்கள்",
    "marks": 2,
    "type": "short",
    "questionText": "What is a Device Driver?",
    "questionTextTamil": "சாதன இயக்கி (Device Driver) என்றால் என்ன?",
    "answer": "A device driver is a specialized software program that controls a particular hardware device attached to the computer, enabling the operating system to communicate with the hardware.",
    "answerTamil": "சாதன இயக்கி என்பது கணினியுடன் இணைக்கப்பட்டுள்ள குறிப்பிட்ட வன்பொருளை இயக்க அமைப்புடன் தொடர்பு கொள்ள வைக்கும் ஒரு சிறப்பு மென்பொருளாகும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch4-3m-1",
    "chapterNo": 4,
    "chapterName": "Theoretical Concepts of Operating System",
    "chapterNameTamil": "இயக்க அமைப்பின் கோட்பாட்டு கருத்துக்கள்",
    "marks": 3,
    "type": "short",
    "questionText": "What are the core functions of an Operating System?",
    "questionTextTamil": "இயக்க அமைப்பின் முதன்மை செயல்பாடுகள் யாவை?",
    "answer": "1. Process Management: Allocation of CPU time and handling scheduling algorithms.\n2. Memory Management: Allocation and deallocation of RAM memory blocks.\n3. File Management: Managing hierarchical directory structures, file access permissions, and FAT/NTFS.\n4. Device / I/O Management: Device driver coordination for printers, disks, and network adapters.\n5. Security & Protection: User authentication, access control lists, and firewall mechanisms.",
    "answerTamil": "1. செயல் மேலாண்மை (Process Management)\n2. நினைவக மேலாண்மை (Memory Management)\n3. கோப்பு மேலாண்மை (File Management)\n4. உள்ளீடு/வெளியீட்டு சாதன மேலாண்மை\n5. பாதுகாப்பு மேலாண்மை (Security Management).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch4-3m-2",
    "chapterNo": 4,
    "chapterName": "Theoretical Concepts of Operating System",
    "chapterNameTamil": "இயக்க அமைப்பின் கோட்பாட்டு கருத்துக்கள்",
    "marks": 3,
    "type": "short",
    "questionText": "Write a short note on Process Management.",
    "questionTextTamil": "செயல் மேலாண்மை பற்றி சிறுகுறிப்பு வரைக.",
    "answer": "• A process is a program in execution.\n• Process management includes creating, scheduling, executing, synchronizing, and terminating processes.\n• The OS uses scheduling algorithms such as FIFO (First In First Out), SJF (Shortest Job First), Round Robin, and Priority Scheduling to optimize CPU utilization.",
    "answerTamil": "• இயக்கத்தில் உள்ள ஒரு நிரலே 'செயல்' (Process) எனப்படும்.\n• செயல்களை உருவாக்குதல், அட்டவணைப்படுத்துதல் மற்றும் முடித்து வைத்தல் ஆகியவற்றை OS செய்கிறது.\n• FIFO, SJF, Round Robin போன்ற திட்டமிடல் வழிமுறைகளைப் பயன்படுத்துகிறது.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch4-3m-3",
    "chapterNo": 4,
    "chapterName": "Theoretical Concepts of Operating System",
    "chapterNameTamil": "இயக்க அமைப்பின் கோட்பாட்டு கருத்துக்கள்",
    "marks": 3,
    "type": "short",
    "questionText": "Explain the concept of Memory Management.",
    "questionTextTamil": "நினைவக மேலாண்மை கருத்தை விளக்குக.",
    "answer": "• Memory Management is the process of coordinating and managing computer main memory (RAM).\n• It keeps track of each memory byte (free or allocated) and allocates memory dynamically when a program requests it.\n• It deallocates memory when a process terminates, preventing memory leaks and fragmentation.",
    "answerTamil": "• முதன்மை நினைவகத்தை (RAM) முறையாக ஒதுக்கீடு செய்தலும் விடுவித்தலும் நினைவக மேலாண்மை எனப்படும்.\n• எந்தெந்தப் பகுதிகள் காலியாக உள்ளன, எவை பயன்பாட்டில் உள்ளன என்பதைக் கண்காணித்து புதிய பணிகளுக்கு நினைவகத்தை ஒதுக்குகிறது.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch4-5m-1",
    "chapterNo": 4,
    "chapterName": "Theoretical Concepts of Operating System",
    "chapterNameTamil": "இயக்க அமைப்பின் கோட்பாட்டு கருத்துக்கள்",
    "marks": 5,
    "type": "detail",
    "questionText": "Explain the various key functions of an Operating System in detail.",
    "questionTextTamil": "இயக்க அமைப்பின் முக்கிய செயல்பாடுகளை விரிவாக விளக்குக.",
    "answer": "Key Functions of an Operating System:\n\n1. Process Management:\n- Manages CPU allocation using algorithms like FIFO, SJF, Round Robin, and Priority.\n\n2. Memory Management:\n- Dynamic allocation/deallocation of RAM blocks to active applications, managing virtual memory and paging.\n\n3. File Management:\n- Organizes files in hierarchical directories (FAT, NTFS, ext4), enforcing read/write/execute permissions.\n\n4. Device Management:\n- Uses I/O controllers and device drivers to coordinate peripheral hardware communication.\n\n5. User Interface & Security:\n- Provides GUI or CLI interfaces, encrypts data, and verifies user passwords.",
    "answerTamil": "1. செயல் மேலாண்மை: CPU நேரத்தை பணிகளுக்கு பிரித்து வழங்குகிறது.\n2. நினைவக மேலாண்மை: பயன்பாடுகளுக்கு நினைவகத்தை ஒதுக்குதல் மற்றும் விடுவித்தல்.\n3. கோப்பு மேலாண்மை: கோப்புகளை ஒழுங்குபடுத்துதல் மற்றும் அணுகல் அனுமதிகளை வழங்குதல்.\n4. சாதன மேலாண்மை: சாதன இயக்கிகள் மூலம் உள்ளீட்டு/வெளியீட்டு சாதனங்களை ஒருங்கிணைத்தல்.\n5. பாதுகாப்பு: கடவுச்சொல் மற்றும் அணுகல் கட்டுப்பாடுகள் மூலம் தரவைப் பாதுகாத்தல்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch4-5m-2",
    "chapterNo": 4,
    "chapterName": "Theoretical Concepts of Operating System",
    "chapterNameTamil": "இயக்க அமைப்பின் கோட்பாட்டு கருத்துக்கள்",
    "marks": 5,
    "type": "detail",
    "questionText": "Discuss the concept of Process Management and Memory Management in an Operating System.",
    "questionTextTamil": "இயக்க அமைப்பில் செயல் மேலாண்மை மற்றும் நினைவக மேலாண்மை கருத்துக்களை விவாதிக்கவும்.",
    "answer": "1. Process Management:\n- Process is a unit of work (program in execution).\n- States: Ready, Running, Waiting, Terminated.\n- Scheduling: FIFO (queue order), SJF (shortest burst time first), Round Robin (time quantum slicing), Priority scheduling.\n\n2. Memory Management:\n- Primary storage allocation to processes.\n- Virtual Memory: Uses hard disk space as temporary RAM when physical memory runs low.\n- Garbage collection and freeing unused memory addresses.",
    "answerTamil": "1. செயல் மேலாண்மை:\n- செயல்பாட்டில் உள்ள நிரல் செயல் எனப்படும்.\n- நிலைகள்: தயார், இயக்கம், காத்திருப்பு, முடிவு.\n- திட்டமிடல் முறைகள்: FIFO, SJF, Round Robin.\n\n2. நினைவக மேலாண்மை:\n- முதன்மை நினைவகத்தை பணிகளுக்கு ஒதுக்குகிறது.\n- மெய்நிகர் நினைவகம் (Virtual Memory): ரேம் பற்றாக்குறையின் போது வன்வட்டைப் பயன்படுத்துகிறது.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch4-5m-3",
    "chapterNo": 4,
    "chapterName": "Theoretical Concepts of Operating System",
    "chapterNameTamil": "இயக்க அமைப்பின் கோட்பாட்டு கருத்துக்கள்",
    "marks": 5,
    "type": "detail",
    "questionText": "Differentiate between Single-user and Multi-user Operating Systems.",
    "questionTextTamil": "ஒற்றைப் பயனர் மற்றும் பல பயனர் இயக்க அமைப்புகளை வேறுபடுத்துக.",
    "answer": "Single-user Operating System:\n1. Supports only one user at any given time.\n2. All hardware resources dedicated to that single user.\n3. Lower security and privilege overhead.\n4. Examples: MS-DOS, Windows 95.\n\nMulti-user Operating System:\n1. Supports multiple concurrent users accessing the system through networked terminals.\n2. Time-sharing and resource protection between users.\n3. Strict multi-level user permissions (Root/Admin vs Guest).\n4. Examples: UNIX, Linux, Windows Server.",
    "answerTamil": "ஒற்றைப் பயனர் இயக்க அமைப்பு:\n1. ஒரு நேரத்தில் ஒரு பயனர் மட்டுமே பயன்படுத்தலாம்.\n2. எளிய கட்டமைப்பு; எ.கா: MS-DOS.\n\nபல பயனர் இயக்க அமைப்பு:\n1. ஒரே நேரத்தில் பல பயனர்கள் பிணையம் வழியாகப் பயன்படுத்தலாம்.\n2. நேரப் பகிர்வு மற்றும் வளப் பகிர்வு மேலாண்மை.\n3. உயர் பாதுகாப்பு மற்றும் பல அடுக்கு அனுமதிகள்; எ.கா: UNIX, Linux.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch5-1m-1",
    "chapterNo": 5,
    "chapterName": "Working with Windows Operating System",
    "chapterNameTamil": "விண்டோஸ் இயக்க அமைப்புடன் வேலை செய்தல்",
    "marks": 1,
    "type": "mcq",
    "questionText": "From the options given below, choose the operations managed by the operating system:",
    "questionTextTamil": "கீழே கொடுக்கப்பட்டுள்ளவற்றுள் இயக்க அமைப்பால் நிர்வகிக்கப்படும் செயல்பாடுகள் எவை?",
    "options": {
      "A": "Memory",
      "B": "Processes",
      "C": "Disks and I/O devices",
      "D": "all of the above"
    },
    "optionsTamil": {
      "A": "நினைவகம்",
      "B": "செயல்கள்",
      "C": "வட்டுகள் மற்றும் I/O சாதனங்கள்",
      "D": "மேற்கண்ட அனைத்தும் (all of the above)"
    },
    "correctOption": "D",
    "answer": "D) all of the above",
    "answerTamil": "D) மேற்கண்ட அனைத்தும் (all of the above)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch5-1m-2",
    "chapterNo": 5,
    "chapterName": "Working with Windows Operating System",
    "chapterNameTamil": "விண்டோஸ் இயக்க அமைப்புடன் வேலை செய்தல்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which is the default folder for many Windows Applications to save your file?",
    "questionTextTamil": "விண்டோஸ் பயன்பாடுகள் கோப்புகளைச் சேமிக்கும் முன்னிருப்பு கோப்புறை எது?",
    "options": {
      "A": "My Document",
      "B": "My Pictures",
      "C": "Documents and Settings",
      "D": "My Computer"
    },
    "optionsTamil": {
      "A": "My Document (Documents)",
      "B": "My Pictures",
      "C": "Documents and Settings",
      "D": "My Computer"
    },
    "correctOption": "A",
    "answer": "A) My Document",
    "answerTamil": "A) My Document",
    "isBookBack": true
  },
  {
    "id": "ca11-ch5-1m-3",
    "chapterNo": 5,
    "chapterName": "Working with Windows Operating System",
    "chapterNameTamil": "விண்டோஸ் இயக்க அமைப்புடன் வேலை செய்தல்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Under which of the following OS, the option Shift + Delete – permanently deletes a file or folder?",
    "questionTextTamil": "Shift + Delete என்ற விசைச் சேர்க்கை கோப்பினை நிரந்தரமாக நீக்கும் இயக்க அமைப்பு எது?",
    "options": {
      "A": "Windows 7",
      "B": "MS-DOS",
      "C": "Linux",
      "D": "Android OS"
    },
    "optionsTamil": {
      "A": "Windows 7",
      "B": "MS-DOS",
      "C": "Linux",
      "D": "Android OS"
    },
    "correctOption": "A",
    "answer": "A) Windows 7",
    "answerTamil": "A) Windows 7",
    "isBookBack": true
  },
  {
    "id": "ca11-ch5-1m-4",
    "chapterNo": 5,
    "chapterName": "Working with Windows Operating System",
    "chapterNameTamil": "விண்டோஸ் இயக்க அமைப்புடன் வேலை செய்தல்",
    "marks": 1,
    "type": "mcq",
    "questionText": "What is the meaning of 'Hibernate' in Windows XP/Windows 7?",
    "questionTextTamil": "விண்டோஸில் 'Hibernate' என்பதன் பொருள் என்ன?",
    "options": {
      "A": "Restart the Computer in safe mode",
      "B": "Restart the Computer in hibernate mode",
      "C": "Shutdown the Computer terminating all the running applications",
      "D": "Shutdown the Computer without closing the running applications"
    },
    "optionsTamil": {
      "A": "Restart the Computer in safe mode",
      "B": "Restart the Computer in hibernate mode",
      "C": "Shutdown the Computer terminating all the running applications",
      "D": "Shutdown the Computer without closing the running applications"
    },
    "correctOption": "D",
    "answer": "D) Shutdown the Computer without closing the running applications",
    "answerTamil": "D) இயங்கும் பயன்பாடுகளை மூடாமல் கணினியை அணைத்து நிலையைச் சேமித்தல்",
    "isBookBack": true
  },
  {
    "id": "ca11-ch5-1m-5",
    "chapterNo": 5,
    "chapterName": "Working with Windows Operating System",
    "chapterNameTamil": "விண்டோஸ் இயக்க அமைப்புடன் வேலை செய்தல்",
    "marks": 1,
    "type": "mcq",
    "questionText": "The shortcut key used to rename a file in windows:",
    "questionTextTamil": "விண்டோஸில் கோப்பின் பெயரை மாற்ற (Rename) பயன்படும் குறுக்குவழி விசை:",
    "options": {
      "A": "F2",
      "B": "F4",
      "C": "F5",
      "D": "F6"
    },
    "optionsTamil": {
      "A": "F2",
      "B": "F4",
      "C": "F5",
      "D": "F6"
    },
    "correctOption": "A",
    "answer": "A) F2",
    "answerTamil": "A) F2",
    "isBookBack": true
  },
  {
    "id": "ca11-ch5-2m-1",
    "chapterNo": 5,
    "chapterName": "Working with Windows Operating System",
    "chapterNameTamil": "விண்டோஸ் இயக்க அமைப்புடன் வேலை செய்தல்",
    "marks": 2,
    "type": "short",
    "questionText": "What is known as Multitasking?",
    "questionTextTamil": "பல பணி (Multitasking) என்றால் என்ன?",
    "answer": "Multitasking is the ability to run multiple software programs simultaneously on a single computer, allowing users to switch between tasks seamlessly (e.g. typing in Word while playing music).",
    "answerTamil": "ஒரே நேரத்தில் ஒன்றுக்கு மேற்பட்ட மென்பொருள்களைத் திறந்து வைத்து வேலை செய்யும் திறன் பல பணி (Multitasking) எனப்படும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch5-2m-2",
    "chapterNo": 5,
    "chapterName": "Working with Windows Operating System",
    "chapterNameTamil": "விண்டோஸ் இயக்க அமைப்புடன் வேலை செய்தல்",
    "marks": 2,
    "type": "short",
    "questionText": "What are called standard icons?",
    "questionTextTamil": "நிலையான சின்னங்கள் (Standard icons) என்பவை யாவை?",
    "answer": "Standard icons are system icons available on the desktop by default upon installing the Windows operating system. Examples include Computer / This PC, Recycle Bin, and Documents.",
    "answerTamil": "விண்டோஸ் இயக்க அமைப்பை நிறுவும் போது முன்னிருப்பாக திரையக முகப்பில் (Desktop) தோன்றும் சின்னங்கள் நிலையான சின்னங்கள் எனப்படும் (எ.கா: This PC, Recycle Bin, Network).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch5-2m-3",
    "chapterNo": 5,
    "chapterName": "Working with Windows Operating System",
    "chapterNameTamil": "விண்டோஸ் இயக்க அமைப்புடன் வேலை செய்தல்",
    "marks": 2,
    "type": "short",
    "questionText": "Differentiate Files and Folders.",
    "questionTextTamil": "கோப்பு மற்றும் கோப்புறை - வேறுபடுத்துக.",
    "answer": "• File: A single unit of storage containing data, text, image, or program code, identified by a name and extension (e.g. document.docx).\n• Folder (Directory): A digital container used to store, organize, and group multiple files and sub-folders.",
    "answerTamil": "• கோப்பு (File): தரவு, உரை அல்லது படங்களைச் சேமிக்கும் அடிப்படை அலகு (பெயர் மற்றும் நீட்டிப்பு கொண்டது).\n• கோப்புறை (Folder): பல கோப்புகள் மற்றும் பிற கோப்புறைகளை ஒழுங்குபடுத்தி வைக்கப் பயன்படும் பெட்டகம் போன்றது.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch5-2m-4",
    "chapterNo": 5,
    "chapterName": "Working with Windows Operating System",
    "chapterNameTamil": "விண்டோஸ் இயக்க அமைப்புடன் வேலை செய்தல்",
    "marks": 2,
    "type": "short",
    "questionText": "Differentiate Save and Save As options.",
    "questionTextTamil": "Save மற்றும் Save As - வேறுபடுத்துக.",
    "answer": "• Save: Updates and saves changes to the currently opened file under its existing name and location.\n• Save As: Allows saving the file with a new file name, different format, or into a new location without altering original file.",
    "answerTamil": "• Save: தற்போதைய கோப்பில் செய்யப்பட்ட மாற்றங்களை அதே பெயரில் சேமிக்கும்.\n• Save As: அதே கோப்பினை புதிய பெயரிலோ அல்லது வேறு இடத்திலோ புதிய கோப்பாகச் சேமிக்க உதவும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch5-2m-5",
    "chapterNo": 5,
    "chapterName": "Working with Windows Operating System",
    "chapterNameTamil": "விண்டோஸ் இயக்க அமைப்புடன் வேலை செய்தல்",
    "marks": 2,
    "type": "short",
    "questionText": "How will you Rename a File using different methods?",
    "questionTextTamil": "கோப்பின் பெயரை மாற்றுவதற்கான பல்வேறு முறைகளைக் கூறுக.",
    "answer": "Method 1: Select the file and press the F2 shortcut key, type the new name and press Enter.\nMethod 2: Right-click the file, select 'Rename' from context menu, enter new name.\nMethod 3: Click File -> Rename from the window menu bar.",
    "answerTamil": "முறை 1: கோப்பைத் தேர்ந்தெடுத்து F2 விசையை அழுத்தி புதிய பெயரைத் தட்டச்சு செய்து Enter அழுத்தவும்.\nமுறை 2: கோப்பின் மீது வலது கிளிக் செய்து 'Rename' என்பதைத் தேர்வு செய்யவும்.\nமுறை 3: மெனு பட்டியில் File -> Rename தேர்வு செய்யவும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch5-3m-1",
    "chapterNo": 5,
    "chapterName": "Working with Windows Operating System",
    "chapterNameTamil": "விண்டோஸ் இயக்க அமைப்புடன் வேலை செய்தல்",
    "marks": 3,
    "type": "short",
    "questionText": "What are the functions of Windows Operating system.",
    "questionTextTamil": "விண்டோஸ் இயக்க அமைப்பின் செயல்பாடுகளை எழுதுக.",
    "answer": "1. Access Applications: Provides a visual GUI environment to launch and manage user software.\n2. File Management: Manages disk storage, drives, folders, and documents via File Explorer.\n3. Hardware Configuration: Connects and configures hardware peripherals via Device Manager and Control Panel.\n4. Multi-tasking & Customization: Enables running multiple programs simultaneously and customizes display themes.",
    "answerTamil": "1. பயன்பாடுகளை இயக்குதல் (வரைகலை சூழல்).\n2. கோப்பு மேலாண்மை (File Explorer மூலம் கோப்புகளை நிர்வகித்தல்).\n3. வன்பொருள் மேலாண்மை (Control Panel மூலம் சாதனங்களை அமைத்தல்).\n4. பல பணி மற்றும் பயனர் விருப்பத்திற்கேற்ப திரையை மாற்றுதல்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch5-3m-2",
    "chapterNo": 5,
    "chapterName": "Working with Windows Operating System",
    "chapterNameTamil": "விண்டோஸ் இயக்க அமைப்புடன் வேலை செய்தல்",
    "marks": 3,
    "type": "short",
    "questionText": "Write a short note on the Recycle bin.",
    "questionTextTamil": "குப்பைத்தொட்டி (Recycle bin) பற்றி சிறுகுறிப்பு வரைக.",
    "answer": "• Recycle Bin is a special system folder where deleted files and folders are temporarily stored.\n• Files deleted with Delete key can be restored back to their original locations by opening Recycle Bin and clicking 'Restore'.\n• Files deleted using Shift + Delete are permanently deleted and bypass the Recycle Bin.",
    "answerTamil": "• Recycle Bin என்பது நீக்கப்பட்ட கோப்புகள் தற்காலிகமாக சேமிக்கப்படும் ஒரு சிறப்பு கோப்புறையாகும்.\n• தவறுதலாக நீக்கப்பட்ட கோப்புகளை 'Restore' தேர்வு செய்து மீண்டும் பெறலாம்.\n• Shift + Delete அழுத்தினால் கோப்புகள் நிரந்தரமாக நீக்கப்படும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch5-3m-3",
    "chapterNo": 5,
    "chapterName": "Working with Windows Operating System",
    "chapterNameTamil": "விண்டோஸ் இயக்க அமைப்புடன் வேலை செய்தல்",
    "marks": 3,
    "type": "short",
    "questionText": "Write a short note on the elements of a window.",
    "questionTextTamil": "ஒரு சாளரத்தின் (Window) முக்கிய கூறுகளை விளக்குக.",
    "answer": "Key elements of a window:\n1. Title Bar: Displays file/application name with Minimize, Maximize/Restore, and Close buttons.\n2. Menu Bar / Ribbon: Houses dropdown commands (File, Edit, View, etc.).\n3. Toolbars & Address Bar: Quick access command icons and current directory path.\n4. Scroll Bars: Horizontal and vertical scrollbars to navigate document content.\n5. Status Bar: Displays informational messages at the bottom.",
    "answerTamil": "1. தலைப்புப் பட்டை (Title Bar): பெயர் மற்றும் Minimize, Maximize, Close பொத்தான்கள்.\n2. மெனு பட்டை (Menu Bar): கட்டளைகளின் பட்டியல்.\n3. முகவரிப் பட்டை மற்றும் கருவிப் பட்டைகள்.\n4. உருளல் பட்டைகள் (Scroll bars): கிடைமட்ட மற்றும் செங்குத்து உருளல்.\n5. நிலைமைப் பட்டை (Status Bar).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch5-3m-4",
    "chapterNo": 5,
    "chapterName": "Working with Windows Operating System",
    "chapterNameTamil": "விண்டோஸ் இயக்க அமைப்புடன் வேலை செய்தல்",
    "marks": 3,
    "type": "short",
    "questionText": "Write the two ways to create a new folder.",
    "questionTextTamil": "புதிய கோப்புறையை உருவாக்கும் இரண்டு வழிகளை எழுதுக.",
    "answer": "Method 1: Right-click on an empty area of the desktop or folder window, select New -> Folder, enter a name, and press Enter.\nMethod 2: In File Explorer, click the 'New folder' button on the ribbon toolbar or press Ctrl + Shift + N.",
    "answerTamil": "முறை 1: திரையின் வெற்றுப் பகுதியில் வலது கிளிக் செய்து New -> Folder தேர்வு செய்து பெயரிடவும்.\nமுறை 2: கோப்பு சாளரத்தில் 'New Folder' பொத்தானை கிளிக் செய்யவும் அல்லது Ctrl + Shift + N அழுத்தவும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch5-3m-5",
    "chapterNo": 5,
    "chapterName": "Working with Windows Operating System",
    "chapterNameTamil": "விண்டோஸ் இயக்க அமைப்புடன் வேலை செய்தல்",
    "marks": 3,
    "type": "short",
    "questionText": "Differentiate copy and move operations.",
    "questionTextTamil": "நகலெடுத்தல் (Copy) மற்றும் நகர்த்துதல் (Move) - வேறுபடுத்துக.",
    "answer": "• Copy (Ctrl + C): Duplicates the selected file/folder to a new destination while keeping the original file intact in its initial location.\n• Move (Cut Ctrl + X): Relocates the selected file/folder entirely to the new target folder, removing it from its original location.",
    "answerTamil": "• நகலெடுத்தல் (Copy - Ctrl+C): மூல இடத்தில் கோப்பு அப்படியே இருக்கும்; அதன் புதிய நகல் மற்றொரு இடத்தில் உருவாக்கப்படும்.\n• நகர்த்துதல் (Cut/Move - Ctrl+X): கோப்பு பழைய இடத்திலிருந்து முழுமையாக நீக்கப்பட்டு புதிய இடத்திற்கு மாற்றப்படும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch6-1m-1",
    "chapterNo": 6,
    "chapterName": "Introduction to Word Processor",
    "chapterNameTamil": "சொற்செயலி ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which is the opening screen of OpenOffice Writer?",
    "questionTextTamil": "OpenOffice Writer-ன் தொடக்க திரை எது?",
    "options": {
      "A": "Document Window",
      "B": "Desktop Window",
      "C": "Application Window",
      "D": "Main Screen"
    },
    "optionsTamil": {
      "A": "ஆவண சாளரம் (Document Window)",
      "B": "திரைமுகப்பு சாளரம்",
      "C": "பயன்பாட்டு சாளரம்",
      "D": "முதன்மை திரை"
    },
    "correctOption": "A",
    "answer": "A) Document Window",
    "answerTamil": "A) ஆவண சாளரம் (Document Window)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch6-1m-2",
    "chapterNo": 6,
    "chapterName": "Introduction to Word Processor",
    "chapterNameTamil": "சொற்செயலி ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which bar contains File, Edit, View, Insert, Format menus?",
    "questionTextTamil": "File, Edit, View போன்ற விருப்பங்களைக் கொண்டுள்ள பட்டை எது?",
    "options": {
      "A": "Title Bar",
      "B": "Menu Bar",
      "C": "Standard Toolbar",
      "D": "Status Bar"
    },
    "optionsTamil": {
      "A": "தலைப்புப் பட்டை",
      "B": "மெனு பட்டை (Menu Bar)",
      "C": "கருவிப் பட்டை",
      "D": "நிலைமைப் பட்டை"
    },
    "correctOption": "B",
    "answer": "B) Menu Bar",
    "answerTamil": "B) மெனு பட்டை (Menu Bar)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch6-1m-3",
    "chapterNo": 6,
    "chapterName": "Introduction to Word Processor",
    "chapterNameTamil": "சொற்செயலி ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "What is the default orientation in OpenOffice Writer?",
    "questionTextTamil": "OpenOffice Writer-ல் முன்னிருப்பு பக்க அமைவு (Orientation) எது?",
    "options": {
      "A": "Landscape",
      "B": "Portrait",
      "C": "Vertical",
      "D": "Horizontal"
    },
    "optionsTamil": {
      "A": "கிடைமட்டம் (Landscape)",
      "B": "செங்குத்து (Portrait)",
      "C": "நெடுக்கு",
      "D": "படுக்கை"
    },
    "correctOption": "B",
    "answer": "B) Portrait",
    "answerTamil": "B) செங்குத்து (Portrait)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch6-1m-4",
    "chapterNo": 6,
    "chapterName": "Introduction to Word Processor",
    "chapterNameTamil": "சொற்செயலி ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Shortcut key used to find and replace text in Writer:",
    "questionTextTamil": "உரையைத் தேடி மாற்றப் பயன்படும் குறுக்குவழி விசை:",
    "options": {
      "A": "Ctrl + F",
      "B": "Ctrl + H",
      "C": "Ctrl + R",
      "D": "Ctrl + K"
    },
    "optionsTamil": {
      "A": "Ctrl + F",
      "B": "Ctrl + H",
      "C": "Ctrl + R",
      "D": "Ctrl + K"
    },
    "correctOption": "A",
    "answer": "A) Ctrl + F",
    "answerTamil": "A) Ctrl + F",
    "isBookBack": true
  },
  {
    "id": "ca11-ch6-1m-5",
    "chapterNo": 6,
    "chapterName": "Introduction to Word Processor",
    "chapterNameTamil": "சொற்செயலி ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "What is the shortcut key to check spelling and grammar?",
    "questionTextTamil": "சொற்பிழை மற்றும் இலக்கணப் பிழை திருத்த பயன்படும் குறுக்குவழி விசை:",
    "options": {
      "A": "F5",
      "B": "F7",
      "C": "F9",
      "D": "F11"
    },
    "optionsTamil": {
      "A": "F5",
      "B": "F7",
      "C": "F9",
      "D": "F11"
    },
    "correctOption": "B",
    "answer": "B) F7",
    "answerTamil": "B) F7",
    "isBookBack": true
  },
  {
    "id": "ca11-ch6-1m-6",
    "chapterNo": 6,
    "chapterName": "Introduction to Word Processor",
    "chapterNameTamil": "சொற்செயலி ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "What is the default extension for OpenOffice Writer file?",
    "questionTextTamil": "OpenOffice Writer கோப்பின் முன்னிருப்பு நீட்டிப்பு என்ன?",
    "options": {
      "A": ".doc",
      "B": ".docx",
      "C": ".odt",
      "D": ".txt"
    },
    "optionsTamil": {
      "A": ".doc",
      "B": ".docx",
      "C": ".odt",
      "D": ".txt"
    },
    "correctOption": "C",
    "answer": "C) .odt",
    "answerTamil": "C) .odt",
    "isBookBack": true
  },
  {
    "id": "ca11-ch6-1m-7",
    "chapterNo": 6,
    "chapterName": "Introduction to Word Processor",
    "chapterNameTamil": "சொற்செயலி ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which line indicates a potential spelling error in text?",
    "questionTextTamil": "எழுத்துப் பிழையைக் குறிக்கும் அடிக்கோடு எது?",
    "options": {
      "A": "Green wavy line",
      "B": "Red wavy line",
      "C": "Blue straight line",
      "D": "Yellow line"
    },
    "optionsTamil": {
      "A": "பச்சை அலைக்கோடு",
      "B": "சிவப்பு அலைக்கோடு (Red wavy line)",
      "C": "நீலக் கோடு",
      "D": "மஞ்சள் கோடு"
    },
    "correctOption": "B",
    "answer": "B) Red wavy line",
    "answerTamil": "B) சிவப்பு அலைக்கோடு (Red wavy line)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch6-1m-8",
    "chapterNo": 6,
    "chapterName": "Introduction to Word Processor",
    "chapterNameTamil": "சொற்செயலி ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which feature automatically corrects common typing errors as you type?",
    "questionTextTamil": "தட்டச்சு செய்யும் போதே தானாகப் பிழைகளைத் திருத்தும் வசதி எது?",
    "options": {
      "A": "AutoSpellCheck",
      "B": "AutoCorrect",
      "C": "AutoFormat",
      "D": "AutoComplete"
    },
    "optionsTamil": {
      "A": "AutoSpellCheck",
      "B": "AutoCorrect",
      "C": "AutoFormat",
      "D": "AutoComplete"
    },
    "correctOption": "B",
    "answer": "B) AutoCorrect",
    "answerTamil": "B) AutoCorrect",
    "isBookBack": true
  },
  {
    "id": "ca11-ch6-1m-9",
    "chapterNo": 6,
    "chapterName": "Introduction to Word Processor",
    "chapterNameTamil": "சொற்செயலி ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which of the following alignment aligns text evenly along both left and right margins?",
    "questionTextTamil": "இடது மற்றும் வலது ஓரங்கள் இரண்டிலும் உரையைச் சீரமைப்பது எது?",
    "options": {
      "A": "Left",
      "B": "Right",
      "C": "Center",
      "D": "Justified"
    },
    "optionsTamil": {
      "A": "இடது",
      "B": "வலது",
      "C": "மையம்",
      "D": "நேர்த்திசைவு (Justified)"
    },
    "correctOption": "D",
    "answer": "D) Justified",
    "answerTamil": "D) நேர்த்திசைவு (Justified)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch6-1m-10",
    "chapterNo": 6,
    "chapterName": "Introduction to Word Processor",
    "chapterNameTamil": "சொற்செயலி ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which shortcut key is used to insert a Table in OpenOffice Writer?",
    "questionTextTamil": "அட்டவணையைச் செருக உதவும் குறுக்குவழி விசை:",
    "options": {
      "A": "Ctrl + F12",
      "B": "Ctrl + F11",
      "C": "Ctrl + T",
      "D": "Shift + F12"
    },
    "optionsTamil": {
      "A": "Ctrl + F12",
      "B": "Ctrl + F11",
      "C": "Ctrl + T",
      "D": "Shift + F12"
    },
    "correctOption": "A",
    "answer": "A) Ctrl + F12",
    "answerTamil": "A) Ctrl + F12",
    "isBookBack": true
  },
  {
    "id": "ca11-ch6-2m-1",
    "chapterNo": 6,
    "chapterName": "Introduction to Word Processor",
    "chapterNameTamil": "சொற்செயலி ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "What is a word processor?",
    "questionTextTamil": "சொற்செயலி என்றால் என்ன?",
    "answer": "A word processor is an application software package used for creating, editing, formatting, saving, and printing text documents efficiently.",
    "answerTamil": "சொற்செயலி என்பது உரை ஆவணங்களை உருவாக்கவும், திருத்தவும், வடிவமைக்கவும் மற்றும் அச்சிடவும் பயன்படும் மென்பொருளாகும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch6-2m-2",
    "chapterNo": 6,
    "chapterName": "Introduction to Word Processor",
    "chapterNameTamil": "சொற்செயலி ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "What is text formatting?",
    "questionTextTamil": "உரை வடிவூட்டல் என்றால் என்ன?",
    "answer": "Text formatting is the process of modifying font style, font size, color, bold, italics, underline, and paragraph alignment to improve visual presentation and readability.",
    "answerTamil": "உரை வடிவூட்டல் என்பது எழுத்துருவின் வடிவம், அளவு, நிறம், தடிமன், சாய்வு மற்றும் பத்தி சீரமைப்புகளை மாற்றி ஆவணத்தை அழகாக்குவதாகும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch6-2m-3",
    "chapterNo": 6,
    "chapterName": "Introduction to Word Processor",
    "chapterNameTamil": "சொற்செயலி ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "What is word wrap?",
    "questionTextTamil": "சொல் மடிப்பு (Word wrap) என்றால் என்ன?",
    "answer": "Word wrap is an automatic feature in word processors that moves a word to the beginning of the next line when text reaches the right margin without requiring the user to press Enter.",
    "answerTamil": "தட்டச்சு செய்யும் போது உரை வலது ஓர விளிம்பை அடைந்தவுடன் தானாக அடுத்த வரிக்குத் தாவும் வசதி சொல் மடிப்பு எனப்படும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch6-2m-4",
    "chapterNo": 6,
    "chapterName": "Introduction to Word Processor",
    "chapterNameTamil": "சொற்செயலி ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "What are Header and Footer?",
    "questionTextTamil": "தலைப்பு மற்றும் அடிக்குறிப்பு (Header and Footer) என்றால் என்ன?",
    "answer": "• Header: Text/page numbers appearing in the top margin of every page.\n• Footer: Text/notes appearing in the bottom margin of every page.",
    "answerTamil": "• தலைப்பு (Header): ஆவணத்தின் ஒவ்வொரு பக்கத்தின் மேல் விளிம்பில் தோன்றும் உரை.\n• அடிக்குறிப்பு (Footer): ஒவ்வொரு பக்கத்தின் கீழ் விளிம்பில் தோன்றும் உரை அல்லது பக்க எண்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch6-2m-5",
    "chapterNo": 6,
    "chapterName": "Introduction to Word Processor",
    "chapterNameTamil": "சொற்செயலி ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "What is AutoCorrect?",
    "questionTextTamil": "AutoCorrect என்றால் என்ன?",
    "answer": "AutoCorrect is a built-in feature that automatically detects and corrects common typographical mistakes, misspellings, and capitalization errors as the user types.",
    "answerTamil": "நாம் தட்டச்சு செய்யும் போதே பொதுவான எழுத்துப் பிழைகளையும், தவறுகளையும் தானாகவே திருத்தும் வசதி AutoCorrect ஆகும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch6-3m-1",
    "chapterNo": 6,
    "chapterName": "Introduction to Word Processor",
    "chapterNameTamil": "சொற்செயலி ஓர் அறிமுகம்",
    "marks": 3,
    "type": "short",
    "questionText": "Explain the four types of text alignment in OpenOffice Writer.",
    "questionTextTamil": "OpenOffice Writer-ல் உள்ள நான்கு வகையான உரை சீரமைப்புகளை விளக்குக.",
    "answer": "1. Left Alignment (Ctrl + L): Aligns text evenly with the left margin.\n2. Right Alignment (Ctrl + R): Aligns text evenly with the right margin.\n3. Center Alignment (Ctrl + E): Centers text horizontally between left and right margins.\n4. Justified Alignment (Ctrl + J): Aligns text flush to both left and right margins.",
    "answerTamil": "1. இடது சீரமைப்பு (Left - Ctrl+L): இடது விளிம்பில் சீரமைக்கும்.\n2. வலது சீரமைப்பு (Right - Ctrl+R): வலது விளிம்பில் சீரமைக்கும்.\n3. மையச் சீரமைப்பு (Center - Ctrl+E): இரு விளிம்புகளுக்கு நடுவே அமைக்கும்.\n4. நேர்த்திசைவு (Justified - Ctrl+J): இரு விளிம்புகளையும் சமமாக நிரப்பும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch6-3m-2",
    "chapterNo": 6,
    "chapterName": "Introduction to Word Processor",
    "chapterNameTamil": "சொற்செயலி ஓர் அறிமுகம்",
    "marks": 3,
    "type": "short",
    "questionText": "How do you insert a Table in OpenOffice Writer?",
    "questionTextTamil": "OpenOffice Writer-ல் ஒரு அட்டவணையை எவ்வாறு செருகுவது?",
    "answer": "1. Click Table -> Insert -> Table from the menu bar (or press Ctrl + F12).\n2. Specify the desired number of Columns and Rows in the dialog box.\n3. Click OK to insert the table onto the document.",
    "answerTamil": "1. மெனு பட்டியில் Table -> Insert -> Table தேர்வு செய்யவும் (அல்லது Ctrl + F12).\n2. தேவையான வரிசைகள் (Rows) மற்றும் நெடுவரிசைகளின் (Columns) எண்ணிக்கையை உள்ளிடவும்.\n3. OK பொத்தானை அழுத்தவும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch6-3m-3",
    "chapterNo": 6,
    "chapterName": "Introduction to Word Processor",
    "chapterNameTamil": "சொற்செயலி ஓர் அறிமுகம்",
    "marks": 3,
    "type": "short",
    "questionText": "Write a short note on Find and Replace feature.",
    "questionTextTamil": "தேடுதல் மற்றும் மாற்றுதல் (Find & Replace) பற்றி சிறுகுறிப்பு வரைக.",
    "answer": "• Press Ctrl + F (or Edit -> Find & Replace).\n• Type the word to search in the 'Search for' box and the replacement word in the 'Replace with' box.\n• Click 'Find Next' to locate instances or 'Replace All' to replace all occurrences across the entire document instantly.",
    "answerTamil": "• Ctrl + F அல்லது Edit -> Find & Replace தேர்வு செய்யவும்.\n• தேட வேண்டிய சொல்லை 'Search for' பெட்டியிலும், மாற்ற வேண்டிய சொல்லை 'Replace with' பெட்டியிலும் உள்ளிடவும்.\n• 'Replace All' கிளிக் செய்து ஆவணம் முழுவதும் மாற்றலாம்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch6-3m-4",
    "chapterNo": 6,
    "chapterName": "Introduction to Word Processor",
    "chapterNameTamil": "சொற்செயலி ஓர் அறிமுகம்",
    "marks": 3,
    "type": "short",
    "questionText": "How do you add bullets and numbering to a list?",
    "questionTextTamil": "பட்டியலுக்கு பொட்டுக்குறிகள் (Bullets) மற்றும் எண்களை எவ்வாறு சேர்ப்பது?",
    "answer": "1. Select the list items.\n2. Click Format -> Bullets and Numbering from the menu bar (or click Bullets/Numbering icon on the toolbar).\n3. Choose the preferred bullet style or numbering format and click OK.",
    "answerTamil": "1. உரையைத் தேர்ந்தெடுக்கவும்.\n2. Format -> Bullets and Numbering கிளிக் செய்யவும்.\n3. தேவையான பொட்டுக்குறி அல்லது எண் வடிவத்தை தேர்வு செய்து OK அழுத்தவும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch6-3m-5",
    "chapterNo": 6,
    "chapterName": "Introduction to Word Processor",
    "chapterNameTamil": "சொற்செயலி ஓர் அறிமுகம்",
    "marks": 3,
    "type": "short",
    "questionText": "What is the difference between hard copy and soft copy?",
    "questionTextTamil": "மென்நகல் (Soft copy) மற்றும் வன்நகல் (Hard copy) - வேறுபடுத்துக.",
    "answer": "• Soft Copy: Digital version of a document stored on memory drives and viewed on a screen (editable and transferable).\n• Hard Copy: Physical printed copy of a document on paper (permanent, non-digital).",
    "answerTamil": "• மென்நகல் (Soft copy): திரையில் பார்க்கக்கூடிய டிஜிட்டல் ஆவணம் (திருத்த முடியும்).\n• வன்நகல் (Hard copy): காகிதத்தில் அச்சிடப்பட்ட ஆவணம்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch6-5m-1",
    "chapterNo": 6,
    "chapterName": "Introduction to Word Processor",
    "chapterNameTamil": "சொற்செயலி ஓர் அறிமுகம்",
    "marks": 5,
    "type": "detail",
    "questionText": "Explain the various formatting options available for text in OpenOffice Writer.",
    "questionTextTamil": "OpenOffice Writer-ல் உள்ள பல்வேறு உரை வடிவூட்டல் தேர்வுகளை விரிவாக விளக்குக.",
    "answer": "Text Formatting Options in OpenOffice Writer:\n\n1. Font Face and Size:\n- Choose font family (Times New Roman, Arial) and adjust point size from toolbar.\n\n2. Font Styles:\n- Bold (Ctrl+B), Italic (Ctrl+I), Underline (Ctrl+U), and Strikethrough.\n\n3. Font Color & Highlighting:\n- Apply custom text colors and background highlighting.\n\n4. Case Change:\n- UPPERCASE, lowercase, Title Case, Sentence case, and Toggle Case via Format -> Change Case.\n\n5. Character Spacing & Super/Subscript:\n- Subscript (H₂O) and Superscript (X²) formatting.",
    "answerTamil": "1. எழுத்துருவின் வகை மற்றும் அளவு (Font & Size).\n2. எழுத்துரு பாணிகள்: தடிமன் (Bold), சாய்வு (Italic), அடிக்கோடு (Underline).\n3. எழுத்துரு நிறம் மற்றும் பின்னணி வண்ணம்.\n4. எழுத்து நிலை மாற்றம் (Change Case): UPPERCASE, lowercase.\n5. மேல்ஒட்டு (Superscript - X²) மற்றும் கீழ்ஒட்டு (Subscript - H₂O).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch6-5m-2",
    "chapterNo": 6,
    "chapterName": "Introduction to Word Processor",
    "chapterNameTamil": "சொற்செயலி ஓர் அறிமுகம்",
    "marks": 5,
    "type": "detail",
    "questionText": "Explain the procedure to Find and Replace text in OpenOffice Writer.",
    "questionTextTamil": "OpenOffice Writer-ல் உரையைத் தேடி மாற்றும் வழிமுறையை விளக்குக.",
    "answer": "Step-by-step Find and Replace procedure:\n1. Open the document and choose Edit -> Find & Replace or press Ctrl + F.\n2. In the dialog box, type the target text in the 'Search for' text box.\n3. Type the new replacement text in the 'Replace with' text box.\n4. Optional settings: Check 'Match case' for case-sensitive search or 'Whole words only'.\n5. Click 'Find Next' to verify match by match, or click 'Replace All' to replace all occurrences at once.",
    "answerTamil": "1. Edit -> Find & Replace அல்லது Ctrl + F அழுத்தவும்.\n2. 'Search for' பெட்டியில் தேட வேண்டிய சொல்லை உள்ளிடவும்.\n3. 'Replace with' பெட்டியில் மாற்ற வேண்டிய புதிய சொல்லை உள்ளிடவும்.\n4. 'Find Next' கொடுத்து ஒவ்வொன்றாக அல்லது 'Replace All' கொடுத்து அனைத்தையும் ஒரே நேரத்தில் மாற்றலாம்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch6-5m-3",
    "chapterNo": 6,
    "chapterName": "Introduction to Word Processor",
    "chapterNameTamil": "சொற்செயலி ஓர் அறிமுகம்",
    "marks": 5,
    "type": "detail",
    "questionText": "Explain how to insert, delete, and format rows and columns in a Table in Writer.",
    "questionTextTamil": "Writer அட்டவணையில் வரிசைகள் மற்றும் நெடுவரிசைகளைச் செருகுதல், நீக்குதல் மற்றும் வடிவமைத்தல் முறைகளை விளக்குக.",
    "answer": "Table Operations in OpenOffice Writer:\n\n1. Inserting Rows / Columns:\n- Place cursor in a cell -> Click Table -> Insert -> Rows / Columns.\n- Specify count and position (Before/After).\n\n2. Deleting Rows / Columns:\n- Select cells -> Click Table -> Delete -> Rows / Columns.\n\n3. Merging and Splitting Cells:\n- Select multiple cells -> Table -> Merge Cells.\n- To divide: Table -> Split Cells -> specify parts.\n\n4. Table AutoFormat & Borders:\n- Table -> Table Properties -> Borders to customize line styles and background fill.",
    "answerTamil": "1. வரிசை/நெடுவரிசை சேர்த்தல்: Table -> Insert -> Rows / Columns.\n2. வரிசை/நெடுவரிசை நீக்குதல்: Table -> Delete -> Rows / Columns.\n3. செல்களை இணைத்தல் மற்றும் பிரித்தல்: Merge Cells & Split Cells.\n4. அட்டவணை வடிவமைப்பு: Table Properties மூலம் பார்டர்கள் மற்றும் வண்ணங்களை அமைத்தல்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch6-5m-4",
    "chapterNo": 6,
    "chapterName": "Introduction to Word Processor",
    "chapterNameTamil": "சொற்செயலி ஓர் அறிமுகம்",
    "marks": 5,
    "type": "detail",
    "questionText": "Explain the Spell Check and AutoCorrect features in OpenOffice Writer.",
    "questionTextTamil": "OpenOffice Writer-ல் சொற்பிழை திருத்தம் (Spell Check) மற்றும் AutoCorrect வசதிகளை விளக்குக.",
    "answer": "1. Spell Check (F7):\n- Automatically detects spelling errors by comparing words against internal dictionary.\n- Flagged with red wavy underline.\n- Right-click for suggestions or press F7 for the full Spelling and Grammar dialog box (Ignore, Ignore All, Add to Dictionary, Change).\n\n2. AutoCorrect Feature:\n- Automatically converts common typing typos on the fly (e.g. 'teh' to 'the').\n- Configured via Tools -> AutoCorrect Options.",
    "answerTamil": "1. சொற்பிழை திருத்தம் (F7):\n- அகராதியுடன் ஒப்பிட்டு பிழைகளை சிவப்பு அலைக்கோடிட்டுக் காட்டும்.\n- F7 அழுத்தி பிழைகளை திருத்தலாம் அல்லது புதிய சொற்களை அகராதியில் சேர்க்கலாம்.\n2. AutoCorrect:\n- பொதுவான தட்டச்சு பிழைகளை உடனுக்குடன் தானாக சரிசெய்யும் (Tools -> AutoCorrect).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch7-1m-1",
    "chapterNo": 7,
    "chapterName": "Working with OpenOffice Calc",
    "chapterNameTamil": "OpenOffice Calc-ல் வேலை செய்தல்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which is the first electronic spreadsheet program?",
    "questionTextTamil": "முதல் மின்னணு விரிதாள் பயன்பாடு எது?",
    "options": {
      "A": "VisiCalc",
      "B": "Lotus 1-2-3",
      "C": "Excel",
      "D": "StarCalc"
    },
    "optionsTamil": {
      "A": "VisiCalc",
      "B": "Lotus 1-2-3",
      "C": "Excel",
      "D": "StarCalc"
    },
    "correctOption": "A",
    "answer": "A) VisiCalc",
    "answerTamil": "A) VisiCalc (1979 - Dan Bricklin & Bob Frankston)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch7-1m-2",
    "chapterNo": 7,
    "chapterName": "Working with OpenOffice Calc",
    "chapterNameTamil": "OpenOffice Calc-ல் வேலை செய்தல்",
    "marks": 1,
    "type": "mcq",
    "questionText": "In OpenOffice Calc, rows are referenced by:",
    "questionTextTamil": "OpenOffice Calc-ல் வரிசைகள் (Rows) எவற்றால் குறிக்கப்படுகின்றன?",
    "options": {
      "A": "Letters (A, B, C)",
      "B": "Numbers (1, 2, 3)",
      "C": "Roman numerals",
      "D": "Symbols"
    },
    "optionsTamil": {
      "A": "எழுத்துக்கள்",
      "B": "எண்கள் (1, 2, 3...)",
      "C": "ரோமன் எண்கள்",
      "D": "குறியீடுகள்"
    },
    "correctOption": "B",
    "answer": "B) Numbers (1, 2, 3)",
    "answerTamil": "B) எண்கள் (1, 2, 3...)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch7-1m-3",
    "chapterNo": 7,
    "chapterName": "Working with OpenOffice Calc",
    "chapterNameTamil": "OpenOffice Calc-ல் வேலை செய்தல்",
    "marks": 1,
    "type": "mcq",
    "questionText": "In OpenOffice Calc, columns are referenced by:",
    "questionTextTamil": "OpenOffice Calc-ல் நெடுவரிசைகள் (Columns) எவற்றால் குறிக்கப்படுகின்றன?",
    "options": {
      "A": "Alphabet letters (A to AMJ)",
      "B": "Numbers (1 to 1048576)",
      "C": "Symbols",
      "D": "Roman numerals"
    },
    "optionsTamil": {
      "A": "ஆங்கில எழுத்துக்கள் (A முதல் AMJ வரை)",
      "B": "எண்கள்",
      "C": "குறியீடுகள்",
      "D": "ரோமன் எண்கள்"
    },
    "correctOption": "A",
    "answer": "A) Alphabet letters (A to AMJ)",
    "answerTamil": "A) ஆங்கில எழுத்துக்கள் (A முதல் AMJ வரை)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch7-1m-4",
    "chapterNo": 7,
    "chapterName": "Working with OpenOffice Calc",
    "chapterNameTamil": "OpenOffice Calc-ல் வேலை செய்தல்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Every formula in OpenOffice Calc must begin with which sign?",
    "questionTextTamil": "Calc-ல் ஒவ்வொரு வாய்ப்பாடும் எந்தக் குறியீட்டுடன் தொடங்க வேண்டும்?",
    "options": {
      "A": "+",
      "B": "=",
      "C": "@",
      "D": "#"
    },
    "optionsTamil": {
      "A": "+",
      "B": "=",
      "C": "@",
      "D": "#"
    },
    "correctOption": "B",
    "answer": "B) =",
    "answerTamil": "B) =",
    "isBookBack": true
  },
  {
    "id": "ca11-ch7-1m-5",
    "chapterNo": 7,
    "chapterName": "Working with OpenOffice Calc",
    "chapterNameTamil": "OpenOffice Calc-ல் வேலை செய்தல்",
    "marks": 1,
    "type": "mcq",
    "questionText": "What is the default file extension of OpenOffice Calc spreadsheet?",
    "questionTextTamil": "OpenOffice Calc விரிதாளின் முன்னிருப்பு கோப்பு நீட்டிப்பு என்ன?",
    "options": {
      "A": ".ods",
      "B": ".xls",
      "C": ".xlsx",
      "D": ".odt"
    },
    "optionsTamil": {
      "A": ".ods",
      "B": ".xls",
      "C": ".xlsx",
      "D": ".odt"
    },
    "correctOption": "A",
    "answer": "A) .ods",
    "answerTamil": "A) .ods (OpenDocument Spreadsheet)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch7-1m-6",
    "chapterNo": 7,
    "chapterName": "Working with OpenOffice Calc",
    "chapterNameTamil": "OpenOffice Calc-ல் வேலை செய்தல்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which symbol is used for Absolute Cell Referencing in Calc?",
    "questionTextTamil": "முழுமையான செல் முகவரிக்கு (Absolute referencing) பயன்படும் குறியீடு எது?",
    "options": {
      "A": "$",
      "B": "#",
      "C": "%",
      "D": "&"
    },
    "optionsTamil": {
      "A": "$",
      "B": "#",
      "C": "%",
      "D": "&"
    },
    "correctOption": "A",
    "answer": "A) $",
    "answerTamil": "A) $ (Dollar sign)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch7-1m-7",
    "chapterNo": 7,
    "chapterName": "Working with OpenOffice Calc",
    "chapterNameTamil": "OpenOffice Calc-ல் வேலை செய்தல்",
    "marks": 1,
    "type": "mcq",
    "questionText": "What is the total number of columns in OpenOffice Calc?",
    "questionTextTamil": "OpenOffice Calc-ல் உள்ள மொத்த நெடுவரிசைகளின் எண்ணிக்கை:",
    "options": {
      "A": "1024 (A to AMJ)",
      "B": "256",
      "C": "16384",
      "D": "65536"
    },
    "optionsTamil": {
      "A": "1024 (A முதல் AMJ வரை)",
      "B": "256",
      "C": "16384",
      "D": "65536"
    },
    "correctOption": "A",
    "answer": "A) 1024 (A to AMJ)",
    "answerTamil": "A) 1024 (A to AMJ)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch7-1m-8",
    "chapterNo": 7,
    "chapterName": "Working with OpenOffice Calc",
    "chapterNameTamil": "OpenOffice Calc-ல் வேலை செய்தல்",
    "marks": 1,
    "type": "mcq",
    "questionText": "What is the total number of rows in OpenOffice Calc?",
    "questionTextTamil": "OpenOffice Calc-ல் உள்ள மொத்த வரிசைகளின் எண்ணிக்கை:",
    "options": {
      "A": "65,536",
      "B": "10,48,576",
      "C": "1,00,000",
      "D": "32,768"
    },
    "optionsTamil": {
      "A": "65,536",
      "B": "10,48,576",
      "C": "1,00,000",
      "D": "32,768"
    },
    "correctOption": "B",
    "answer": "B) 10,48,576",
    "answerTamil": "B) 10,48,576 (2^20)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch7-1m-9",
    "chapterNo": 7,
    "chapterName": "Working with OpenOffice Calc",
    "chapterNameTamil": "OpenOffice Calc-ல் வேலை செய்தல்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which small square at the bottom right corner of an active cell is used to copy formulas/series?",
    "questionTextTamil": "செயலில் உள்ள செல்லின் கீழ் வலது மூலையில் உள்ள சிறிய சதுரக் கைப்பிடி எது?",
    "options": {
      "A": "AutoFill Handle",
      "B": "Formula Bar",
      "C": "Name Box",
      "D": "Range Box"
    },
    "optionsTamil": {
      "A": "தானியங்கு நிரப்பு கைப்பிடி (AutoFill Handle)",
      "B": "வாய்ப்பாட்டு பட்டை",
      "C": "பெயர் பெட்டி",
      "D": "வரம்பு பெட்டி"
    },
    "correctOption": "A",
    "answer": "A) AutoFill Handle",
    "answerTamil": "A) தானியங்கு நிரப்பு கைப்பிடி (AutoFill Handle)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch7-1m-10",
    "chapterNo": 7,
    "chapterName": "Working with OpenOffice Calc",
    "chapterNameTamil": "OpenOffice Calc-ல் வேலை செய்தல்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which function is used to find the average of numbers in a cell range?",
    "questionTextTamil": "ஒரு செல் வரம்பில் உள்ள எண்களின் சராசரியைக் காண உதவும் செயற்கூறு எது?",
    "options": {
      "A": "SUM()",
      "B": "AVG()",
      "C": "AVERAGE()",
      "D": "MEAN()"
    },
    "optionsTamil": {
      "A": "SUM()",
      "B": "AVG()",
      "C": "AVERAGE()",
      "D": "MEAN()"
    },
    "correctOption": "C",
    "answer": "C) AVERAGE()",
    "answerTamil": "C) AVERAGE()",
    "isBookBack": true
  },
  {
    "id": "ca11-ch7-2m-1",
    "chapterNo": 7,
    "chapterName": "Working with OpenOffice Calc",
    "chapterNameTamil": "OpenOffice Calc-ல் வேலை செய்தல்",
    "marks": 2,
    "type": "short",
    "questionText": "What is an electronic spreadsheet?",
    "questionTextTamil": "மின்னணு விரிதாள் என்றால் என்ன?",
    "answer": "An electronic spreadsheet is an interactive application software consisting of a grid of rows and columns designed for calculating, organizing, analyzing, and presenting numerical data.",
    "answerTamil": "மின்னணு விரிதாள் என்பது எண் தரவுகளை அட்டவணை வடிவில் உள்ளிட்டு கணக்கீடுகள் செய்யவும், பகுப்பாய்வு செய்யவும் பயன்படும் மென்பொருளாகும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch7-2m-2",
    "chapterNo": 7,
    "chapterName": "Working with OpenOffice Calc",
    "chapterNameTamil": "OpenOffice Calc-ல் வேலை செய்தல்",
    "marks": 2,
    "type": "short",
    "questionText": "What is a Cell in OpenOffice Calc?",
    "questionTextTamil": "OpenOffice Calc-ல் செல் (Cell) என்றால் என்ன?",
    "answer": "A cell is the basic intersection point of a horizontal row and a vertical column in a worksheet (e.g. cell A1).",
    "answerTamil": "ஒரு வரிசை மற்றும் ஒரு நெடுவரிசை ஒன்றுக்கொன்று வெட்டும் செவ்வகப் பகுதியே செல் (நுண்ணறை) எனப்படும் (எ.கா: A1).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch7-2m-3",
    "chapterNo": 7,
    "chapterName": "Working with OpenOffice Calc",
    "chapterNameTamil": "OpenOffice Calc-ல் வேலை செய்தல்",
    "marks": 2,
    "type": "short",
    "questionText": "What is the Name Box in Calc?",
    "questionTextTamil": "பெயர் பெட்டி (Name Box) என்றால் என்ன?",
    "answer": "The Name Box is located to the left of the Formula Bar and displays the address / reference of the currently active cell (e.g., C5).",
    "answerTamil": "பெயர் பெட்டி வாய்ப்பாட்டுப் பட்டைக்கு இடதுபுறம் அமைந்துள்ளது; இது தற்போது செயலில் உள்ள செல்லின் முகவரியைக் காட்டுகிறது.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch7-2m-4",
    "chapterNo": 7,
    "chapterName": "Working with OpenOffice Calc",
    "chapterNameTamil": "OpenOffice Calc-ல் வேலை செய்தல்",
    "marks": 2,
    "type": "short",
    "questionText": "What is a Formula in Calc?",
    "questionTextTamil": "Calc-ல் வாய்ப்பாடு (Formula) என்றால் என்ன?",
    "answer": "A formula is an algebraic expression composed of values, cell references, and arithmetic operators (+, -, *, /) that always begins with an equal sign (=).",
    "answerTamil": "வாய்ப்பாடு என்பது எண்கள், செல் முகவரிகள் மற்றும் கணிதக் குறியீடுகளைக் கொண்டு கணக்கீடு செய்யப் பயன்படும் கோவையாகும்; இது எப்போதும் சமக் குறியுடன் (=) தொடங்கும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch7-2m-5",
    "chapterNo": 7,
    "chapterName": "Working with OpenOffice Calc",
    "chapterNameTamil": "OpenOffice Calc-ல் வேலை செய்தல்",
    "marks": 2,
    "type": "short",
    "questionText": "What is AutoFill Handle?",
    "questionTextTamil": "AutoFill Handle என்றால் என்ன?",
    "answer": "The AutoFill handle is a small black square at the bottom-right corner of the active cell used to copy formulas or generate sequential series of data automatically.",
    "answerTamil": "செயலில் உள்ள செல்லின் கீழ் வலது மூலையில் உள்ள சிறிய கறுப்பு சதுரமே AutoFill Handle ஆகும். இது தொடர் எண்களையோ அல்லது வாய்ப்பாட்டையோ தானாக நிரப்ப உதவுகிறது.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch7-2m-6",
    "chapterNo": 7,
    "chapterName": "Working with OpenOffice Calc",
    "chapterNameTamil": "OpenOffice Calc-ல் வேலை செய்தல்",
    "marks": 2,
    "type": "short",
    "questionText": "What is Relative Cell Referencing?",
    "questionTextTamil": "சார்பு செல் முகவரி (Relative Cell Referencing) என்றால் என்ன?",
    "answer": "In relative cell referencing (e.g. A1+B1), cell references automatically adjust based on the relative position when the formula is copied to other rows or columns.",
    "answerTamil": "வாய்ப்பாட்டை வேறு செல்களுக்கு நகலெடுக்கும் போது, அதன் செல் முகவரிகள் புதிய நிலைக்கு ஏற்ப தானாக மாறினால் அது சார்பு செல் முகவரி எனப்படும் (எ.கா: =A1+B1).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch7-2m-7",
    "chapterNo": 7,
    "chapterName": "Working with OpenOffice Calc",
    "chapterNameTamil": "OpenOffice Calc-ல் வேலை செய்தல்",
    "marks": 2,
    "type": "short",
    "questionText": "What is Absolute Cell Referencing?",
    "questionTextTamil": "முழுமையான செல் முகவரி (Absolute Cell Referencing) என்றால் என்ன?",
    "answer": "In absolute cell referencing, cell references are locked and remain fixed regardless of where the formula is copied, achieved using the dollar sign ($) before column and row (e.g., =$A$1*B1).",
    "answerTamil": "வாய்ப்பாட்டை நகலெடுத்தாலும் மாறாமல் நிலையாக இருக்கும் செல் முகவரி முழுமையான செல் முகவரி எனப்படும்; இதற்கு $ குறியீடு பயன்படுத்தப்படுகிறது (எ.கா: =$A$1*B1).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch7-2m-8",
    "chapterNo": 7,
    "chapterName": "Working with OpenOffice Calc",
    "chapterNameTamil": "OpenOffice Calc-ல் வேலை செய்தல்",
    "marks": 2,
    "type": "short",
    "questionText": "Name any four mathematical functions in Calc.",
    "questionTextTamil": "Calc-ல் உள்ள ஏதேனும் நான்கு கணித செயற்கூறுகளைக் கூறுக.",
    "answer": "1. SUM(): Calculates total sum.\n2. SQRT(): Calculates square root.\n3. POWER(): Calculates power of a number.\n4. ROUND(): Rounds off decimals.",
    "answerTamil": "1. SUM(): கூட்டுத்தொகை காண\n2. SQRT(): வர்க்கமூலம் காண\n3. POWER(): அடுக்கு காண\n4. ROUND(): முழுமையாக்க.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch7-2m-9",
    "chapterNo": 7,
    "chapterName": "Working with OpenOffice Calc",
    "chapterNameTamil": "OpenOffice Calc-ல் வேலை செய்தல்",
    "marks": 2,
    "type": "short",
    "questionText": "What is a Chart in Calc?",
    "questionTextTamil": "Calc-ல் வரைபடம் (Chart) என்றால் என்ன?",
    "answer": "A chart is a visual graphical representation of worksheet data that makes trends, patterns, and comparisons easy to interpret.",
    "answerTamil": "விரிதாளில் உள்ள எண் தரவுகளை வரைபட வடிவில் காட்சியாகக் காட்டும் அமைப்பே வரைபடம் (Chart) எனப்படும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch7-2m-10",
    "chapterNo": 7,
    "chapterName": "Working with OpenOffice Calc",
    "chapterNameTamil": "OpenOffice Calc-ல் வேலை செய்தல்",
    "marks": 2,
    "type": "short",
    "questionText": "How do you insert a new worksheet in Calc?",
    "questionTextTamil": "Calc-ல் புதிய பணித்தாளை எவ்வாறு செருகுவது?",
    "answer": "Click Insert -> Sheet from the menu bar, or right-click the Sheet tab at the bottom and select 'Insert Sheet'.",
    "answerTamil": "மெனு பட்டியில் Insert -> Sheet தேர்வு செய்யவும் அல்லது கீழ் உள்ள Sheet தாவலில் வலது கிளிக் செய்து 'Insert Sheet' தேர்வு செய்யவும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch7-3m-1",
    "chapterNo": 7,
    "chapterName": "Working with OpenOffice Calc",
    "chapterNameTamil": "OpenOffice Calc-ல் வேலை செய்தல்",
    "marks": 3,
    "type": "short",
    "questionText": "Differentiate between Relative and Absolute Cell Referencing.",
    "questionTextTamil": "சார்பு மற்றும் முழுமையான செல் முகவரிகளை வேறுபடுத்துக.",
    "answer": "• Relative Referencing (e.g. =A1+B1): Automatically shifts row and column offsets when dragged/copied across cells.\n• Absolute Referencing (e.g. =$A$1+$B$1): Locks the exact cell location with dollar ($) symbols so the coordinates never change when copied.",
    "answerTamil": "• சார்பு முகவரி (=A1+B1): நகலெடுக்கும் போது தானாக மாறும்.\n• முழுமையான முகவரி (=$A$1+$B$1): $ குறியீடு மூலம் நிலையாக வைக்கப்படும், மாறாது.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch7-3m-2",
    "chapterNo": 7,
    "chapterName": "Working with OpenOffice Calc",
    "chapterNameTamil": "OpenOffice Calc-ல் வேலை செய்தல்",
    "marks": 3,
    "type": "short",
    "questionText": "Explain any three types of Charts available in Calc.",
    "questionTextTamil": "Calc-ல் உள்ள ஏதேனும் மூன்று வரைபட வகைகளை விளக்குக.",
    "answer": "1. Column / Bar Chart: Displays data using vertical or horizontal rectangular bars for comparing discrete categories.\n2. Pie Chart: Displays proportional parts of a whole (100%) in circular slices.\n3. Line Chart: Plots continuous data points connected by lines to visualize trends over time.",
    "answerTamil": "1. பட்டை வரைபடம் (Column/Bar): செவ்வக பட்டைகள் மூலம் ஒப்பீடு செய்ய.\n2. வட்ட வரைபடம் (Pie): சதவீத பங்களிப்பைக் காட்ட.\n3. கோட்டு வரைபடம் (Line): காலப்போக்கில் ஏற்படும் மாற்றங்களை வரைபடக் கோடுகளாகக் காட்ட.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch7-3m-3",
    "chapterNo": 7,
    "chapterName": "Working with OpenOffice Calc",
    "chapterNameTamil": "OpenOffice Calc-ல் வேலை செய்தல்",
    "marks": 3,
    "type": "short",
    "questionText": "Write the steps to generate a series of numbers using AutoFill.",
    "questionTextTamil": "AutoFill வசதியைப் பயன்படுத்தி எண்களின் தொடரை உருவாக்கும் படிகளை எழுதுக.",
    "answer": "1. Type the first two numbers of the desired pattern in adjacent cells (e.g. 1 and 2, or 5 and 10).\n2. Select both cells to establish the interval increment.\n3. Click and drag the small black AutoFill handle square at the bottom-right corner across target cells.",
    "answerTamil": "1. தொடக்க இரண்டு எண்களை அடுத்தடுத்த செல்களில் உள்ளிடவும் (எ.கா: 1 மற்றும் 2).\n2. இரண்டு செல்களையும் ஒன்றாகத் தேர்ந்தெடுக்கவும்.\n3. கீழ் வலது மூலையில் உள்ள AutoFill கைப்பிடியை கிளிக் செய்து தேவையான செல்கள் வரை இழுக்கவும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch7-3m-4",
    "chapterNo": 7,
    "chapterName": "Working with OpenOffice Calc",
    "chapterNameTamil": "OpenOffice Calc-ல் வேலை செய்தல்",
    "marks": 3,
    "type": "short",
    "questionText": "Explain the components of the Formula Bar in OpenOffice Calc.",
    "questionTextTamil": "OpenOffice Calc வாய்ப்பாட்டு பட்டையின் கூறுகளை விளக்குக.",
    "answer": "1. Name Box: Displays active cell address.\n2. Function Wizard Button (fx): Launches function selection dialog.\n3. Sum Button (Σ): Automatically generates SUM formula.\n4. Formula / Input Line: Displays and edits the exact equation or raw contents of the active cell.",
    "answerTamil": "1. பெயர் பெட்டி (Name Box): செயலில் உள்ள செல்லின் முகவரி.\n2. Function Wizard (fx): செயற்கூறுகளைத் தேர்வு செய்ய.\n3. Sum பொத்தான் (Σ): கூட்டுத்தொகை காண.\n4. Input Line: வாய்ப்பாட்டைத் தட்டச்சு செய்ய மற்றும் திருத்த.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch7-3m-5",
    "chapterNo": 7,
    "chapterName": "Working with OpenOffice Calc",
    "chapterNameTamil": "OpenOffice Calc-ல் வேலை செய்தல்",
    "marks": 3,
    "type": "short",
    "questionText": "How do you format cell numbers to Currency format in Calc?",
    "questionTextTamil": "செல்லில் உள்ள எண்களை நாணய வடிவத்திற்கு (Currency) எவ்வாறு மாற்றுவது?",
    "answer": "1. Select the target cells containing numbers.\n2. Click Format -> Cells (or press Ctrl + 1).\n3. In the Numbers tab, select 'Currency' under Category and pick the Currency symbol (e.g. INR ₹ / USD $), then click OK.",
    "answerTamil": "1. செல்களைத் தேர்ந்தெடுக்கவும்.\n2. Format -> Cells (Ctrl + 1) தேர்வு செய்யவும்.\n3. Numbers தாவலில் 'Currency' என்பதைத் தேர்வு செய்து நாணயக் குறியீட்டை அமைத்து OK அழுத்தவும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch7-5m-1",
    "chapterNo": 7,
    "chapterName": "Working with OpenOffice Calc",
    "chapterNameTamil": "OpenOffice Calc-ல் வேலை செய்தல்",
    "marks": 5,
    "type": "detail",
    "questionText": "Explain the various types of Cell Referencing in OpenOffice Calc with examples.",
    "questionTextTamil": "OpenOffice Calc-ல் உள்ள பல்வேறு செல் முகவரி முறைகளை எடுத்துக்காட்டுகளுடன் விரிவாக விளக்குக.",
    "answer": "Types of Cell Referencing in Calc:\n\n1. Relative Cell Referencing:\n- Default reference style.\n- Adjusts row and column coordinates dynamically when copied.\n- Example: In cell C1 `=A1+B1`. When copied to C2, it automatically becomes `=A2+B2`.\n\n2. Absolute Cell Referencing:\n- Locks both row and column using dollar signs ($).\n- References never change when copied.\n- Example: `=$A$1*B1`. When copied down, `$A$1` remains fixed while `B1` updates to `B2`.\n\n3. Mixed Cell Referencing:\n- Locks either the row (`A$1`) or the column (`$A1`).\n- Example: `=$A1*B$1` allows horizontal/vertical locking for matrix calculations.",
    "answerTamil": "1. சார்பு செல் முகவரி (Relative Referencing):\n- நகலெடுக்கும் போது முகவரி தானாக மாறும் (எ.கா: =A1+B1).\n\n2. முழுமையான செல் முகவரி (Absolute Referencing):\n- $ குறியீடு மூலம் முகவரி பூட்டப்படும்; நகலெடுத்தாலும் மாறாது (எ.கா: =$A$1*B1).\n\n3. கலப்பு செல் முகவரி (Mixed Referencing):\n- வரிசை அல்லது நெடுவரிசை ஏதேனும் ஒன்று மட்டும் பூட்டப்படும் (எ.கா: =$A1 அல்லது =A$1).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch7-5m-2",
    "chapterNo": 7,
    "chapterName": "Working with OpenOffice Calc",
    "chapterNameTamil": "OpenOffice Calc-ல் வேலை செய்தல்",
    "marks": 5,
    "type": "detail",
    "questionText": "Explain how to create a Chart in OpenOffice Calc with step-by-step instructions.",
    "questionTextTamil": "OpenOffice Calc-ல் வரைபடம் (Chart) உருவாக்கும் வழிமுறைகளை விரிவாக விளக்குக.",
    "answer": "Procedure to create a Chart in Calc:\n\n1. Data Selection:\n- Select the continuous range of data cells including headers.\n\n2. Launch Chart Wizard:\n- Click Insert -> Chart from menu bar or click the Chart icon.\n\n3. Step 1 - Choose Chart Type:\n- Select chart style (Column, Bar, Pie, Area, Line, XY Scatter).\n\n4. Step 2 - Data Range:\n- Confirm cell range and verify series in rows or columns.\n\n5. Step 3 - Data Series:\n- Customize custom labels and ranges if needed.\n\n6. Step 4 - Chart Elements:\n- Add Title, Subtitle, X-Axis label, Y-Axis label, and toggle Legend display.\n\n7. Finish:\n- Click 'Finish' to embed the interactive chart onto the worksheet.",
    "answerTamil": "1. தரவைத் தேர்ந்தெடுத்தல்: தலைப்புகளுடன் தரவு வரம்பைத் தேர்ந்தெடுக்கவும்.\n2. Chart Wizard தொடங்குதல்: Insert -> Chart கிளிக் செய்யவும்.\n3. படி 1: வரைபட வகையைத் தேர்வு செய்தல் (Column, Pie, Line).\n4. படி 2: தரவு வரம்பைச் சரிபார்த்தல்.\n5. படி 3: தரவுத் தொடர்களை அமைத்தல்.\n6. படி 4: வரைபடத்தின் தலைப்பு, அச்சுப் பெயர்கள் (X-axis, Y-axis) மற்றும் Legend அமைத்தல்.\n7. Finish பொத்தானை அழுத்தி வரைபடத்தை முடிக்கவும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch7-5m-3",
    "chapterNo": 7,
    "chapterName": "Working with OpenOffice Calc",
    "chapterNameTamil": "OpenOffice Calc-ல் வேலை செய்தல்",
    "marks": 5,
    "type": "detail",
    "questionText": "Explain any five built-in Functions commonly used in OpenOffice Calc.",
    "questionTextTamil": "OpenOffice Calc-ல் பொதுவாகப் பயன்படும் ஐந்து உள்ளமைந்த செயற்கூறுகளை விளக்குக.",
    "answer": "Five Common Built-in Functions in Calc:\n\n1. SUM(range):\n- Adds all numeric values within a cell range.\n- Example: `=SUM(A1:A10)`\n\n2. AVERAGE(range):\n- Calculates arithmetic mean of specified cells.\n- Example: `=AVERAGE(B1:B10)`\n\n3. MAX(range) & MIN(range):\n- Returns the largest or smallest number in a group.\n- Example: `=MAX(C1:C10)`\n\n4. COUNT(range):\n- Counts the total number of cells containing numbers.\n- Example: `=COUNT(D1:D20)`\n\n5. IF(logical_test, value_if_true, value_if_false):\n- Evaluates condition and returns corresponding result.\n- Example: `=IF(E1>=35, \"PASS\", \"FAIL\")`",
    "answerTamil": "1. SUM(A1:A10): எண்களின் கூட்டுத்தொகையைக் காணும்.\n2. AVERAGE(B1:B10): எண்களின் சராசரியைக் கணக்கிடும்.\n3. MAX(C1:C10) & MIN(C1:C10): மிகப்பெரிய மற்றும் மிகச்சிறிய எண்ணைக் கண்டறியும்.\n4. COUNT(D1:D20): எண்களைக் கொண்டுள்ள செல்களின் எண்ணிக்கையைத் தரும்.\n5. IF(E1>=35, \"PASS\", \"FAIL\"): நிபந்தனையைச் சோதித்து முடிவை வழங்கும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch8-1m-1",
    "chapterNo": 8,
    "chapterName": "Presentation Basics",
    "chapterNameTamil": "நிகழ்த்தல் அடிப்படைகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which software is used to create multimedia slide presentations in OpenOffice?",
    "questionTextTamil": "OpenOffice-ல் பல்லூடக நழுவங்களை உருவாக்க பயன்படும் மென்பொருள் எது?",
    "options": {
      "A": "Writer",
      "B": "Calc",
      "C": "Impress",
      "D": "Base"
    },
    "optionsTamil": {
      "A": "Writer",
      "B": "Calc",
      "C": "Impress",
      "D": "Base"
    },
    "correctOption": "C",
    "answer": "C) Impress",
    "answerTamil": "C) Impress",
    "isBookBack": true
  },
  {
    "id": "ca11-ch8-1m-2",
    "chapterNo": 8,
    "chapterName": "Presentation Basics",
    "chapterNameTamil": "நிகழ்த்தல் அடிப்படைகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "What is the shortcut key to run a slide show from the first slide?",
    "questionTextTamil": "முதல் நழுவத்திலிருந்து நழுவக்காட்சியைத் தொடங்க உதவும் குறுக்குவழி விசை:",
    "options": {
      "A": "F2",
      "B": "F5",
      "C": "F7",
      "D": "F9"
    },
    "optionsTamil": {
      "A": "F2",
      "B": "F5",
      "C": "F7",
      "D": "F9"
    },
    "correctOption": "B",
    "answer": "B) F5",
    "answerTamil": "B) F5",
    "isBookBack": true
  },
  {
    "id": "ca11-ch8-1m-3",
    "chapterNo": 8,
    "chapterName": "Presentation Basics",
    "chapterNameTamil": "நிகழ்த்தல் அடிப்படைகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which key is pressed to stop or exit a running slide show?",
    "questionTextTamil": "இயங்கிக்கொண்டிருக்கும் நழுவக்காட்சியை நிறுத்த அல்லது வெளியேற உதவும் விசை:",
    "options": {
      "A": "Esc",
      "B": "Enter",
      "C": "Ctrl",
      "D": "Tab"
    },
    "optionsTamil": {
      "A": "Esc",
      "B": "Enter",
      "C": "Ctrl",
      "D": "Tab"
    },
    "correctOption": "A",
    "answer": "A) Esc",
    "answerTamil": "A) Esc",
    "isBookBack": true
  },
  {
    "id": "ca11-ch8-1m-4",
    "chapterNo": 8,
    "chapterName": "Presentation Basics",
    "chapterNameTamil": "நிகழ்த்தல் அடிப்படைகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "What is the default file extension of OpenOffice Impress presentation?",
    "questionTextTamil": "OpenOffice Impress கோப்பின் முன்னிருப்பு நீட்டிப்பு என்ன?",
    "options": {
      "A": ".odp",
      "B": ".ppt",
      "C": ".pptx",
      "D": ".ods"
    },
    "optionsTamil": {
      "A": ".odp",
      "B": ".ppt",
      "C": ".pptx",
      "D": ".ods"
    },
    "correctOption": "A",
    "answer": "A) .odp",
    "answerTamil": "A) .odp (OpenDocument Presentation)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch8-1m-5",
    "chapterNo": 8,
    "chapterName": "Presentation Basics",
    "chapterNameTamil": "நிகழ்த்தல் அடிப்படைகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which view is used to rearrange and sort slides easily in thumbnail view?",
    "questionTextTamil": "நழுவங்களை எளிதாக வரிசைப்படுத்தவும் ஒழுங்கமைக்கவும் உதவும் பார்வை எது?",
    "options": {
      "A": "Normal View",
      "B": "Slide Sorter View",
      "C": "Outline View",
      "D": "Notes View"
    },
    "optionsTamil": {
      "A": "இயல்புப் பார்வை",
      "B": "நழுவ வரிசைப்படுத்துபவர் பார்வை (Slide Sorter)",
      "C": "வெளிக்கோட்டுப் பார்வை",
      "D": "குறிப்புகள் பார்வை"
    },
    "correctOption": "B",
    "answer": "B) Slide Sorter View",
    "answerTamil": "B) நழுவ வரிசைப்படுத்துபவர் பார்வை (Slide Sorter)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch8-1m-6",
    "chapterNo": 8,
    "chapterName": "Presentation Basics",
    "chapterNameTamil": "நிகழ்த்தல் அடிப்படைகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which panel in Impress allows adding visual effects when transitioning from one slide to another?",
    "questionTextTamil": "ஒரு நழுவத்திலிருந்து அடுத்த நழுவத்திற்கு மாறும் போது காட்சி விளைவுகளைச் சேர்க்கும் பகுதி எது?",
    "options": {
      "A": "Slide Transition",
      "B": "Custom Animation",
      "C": "Master Slide",
      "D": "Layouts"
    },
    "optionsTamil": {
      "A": "நழுவ மாற்றம் (Slide Transition)",
      "B": "தனிப்பயன் அசைவூட்டம்",
      "C": "முதன்மை நழுவம்",
      "D": "அமைப்புகள்"
    },
    "correctOption": "A",
    "answer": "A) Slide Transition",
    "answerTamil": "A) நழுவ மாற்றம் (Slide Transition)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch8-1m-7",
    "chapterNo": 8,
    "chapterName": "Presentation Basics",
    "chapterNameTamil": "நிகழ்த்தல் அடிப்படைகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "What is the shortcut key to insert a new slide in Impress?",
    "questionTextTamil": "புதிய நழுவத்தை செருக உதவும் குறுக்குவழி விசை:",
    "options": {
      "A": "Ctrl + M",
      "B": "Ctrl + N",
      "C": "Ctrl + S",
      "D": "Ctrl + Shift + N"
    },
    "optionsTamil": {
      "A": "Ctrl + M",
      "B": "Ctrl + N",
      "C": "Ctrl + S",
      "D": "Ctrl + Shift + N"
    },
    "correctOption": "A",
    "answer": "A) Ctrl + M",
    "answerTamil": "A) Ctrl + M (அல்லது Insert -> Slide)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch8-1m-8",
    "chapterNo": 8,
    "chapterName": "Presentation Basics",
    "chapterNameTamil": "நிகழ்த்தல் அடிப்படைகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which feature applies motion and entrance effects to individual text or objects inside a slide?",
    "questionTextTamil": "நழுவத்தில் உள்ள தனிப்பட்ட உரை அல்லது படங்களுக்கு அசைவூட்ட விளைவுகளைச் சேர்க்கும் வசதி எது?",
    "options": {
      "A": "Slide Transition",
      "B": "Custom Animation",
      "C": "Slide Master",
      "D": "Handouts"
    },
    "optionsTamil": {
      "A": "நழுவ மாற்றம்",
      "B": "தனிப்பயன் அசைவூட்டம் (Custom Animation)",
      "C": "முதன்மை நழுவம்",
      "D": "கையேடுகள்"
    },
    "correctOption": "B",
    "answer": "B) Custom Animation",
    "answerTamil": "B) தனிப்பயன் அசைவூட்டம் (Custom Animation)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch8-2m-1",
    "chapterNo": 8,
    "chapterName": "Presentation Basics",
    "chapterNameTamil": "நிகழ்த்தல் அடிப்படைகள்",
    "marks": 2,
    "type": "short",
    "questionText": "What is a Presentation Software?",
    "questionTextTamil": "நிகழ்த்தல் மென்பொருள் என்றால் என்ன?",
    "answer": "Presentation software is an application tool used to create structured sequences of multimedia slides consisting of text, graphics, charts, audio, and video for public speaking and lectures.",
    "answerTamil": "நிகழ்த்தல் மென்பொருள் என்பது உரை, படங்கள், வரைபடங்கள், ஒலி மற்றும் வீடியோ அடங்கிய நழுவங்களை உருவாக்கி பார்வையாளர்களுக்கு காட்சிப்படுத்த உதவும் மென்பொருளாகும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch8-2m-2",
    "chapterNo": 8,
    "chapterName": "Presentation Basics",
    "chapterNameTamil": "நிகழ்த்தல் அடிப்படைகள்",
    "marks": 2,
    "type": "short",
    "questionText": "What is a Slide in Impress?",
    "questionTextTamil": "Impress-ல் நழுவம் (Slide) என்றால் என்ன?",
    "answer": "A slide is a single digital page within a presentation that contains educational or business content, bullet points, and multimedia elements.",
    "answerTamil": "நழுவம் என்பது ஒரு நிகழ்த்தலின் தனித்த பக்கமாகும்; இது உரை, படம் மற்றும் தகவல்களைக் கொண்டிருக்கும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch8-2m-3",
    "chapterNo": 8,
    "chapterName": "Presentation Basics",
    "chapterNameTamil": "நிகழ்த்தல் அடிப்படைகள்",
    "marks": 2,
    "type": "short",
    "questionText": "What is Slide Transition?",
    "questionTextTamil": "நழுவ மாற்றம் (Slide Transition) என்றால் என்ன?",
    "answer": "Slide Transition refers to the visual animated effects (such as fade, wipe, or dissolve) that play when advancing from one slide to the next during a slide show.",
    "answerTamil": "நழுவக்காட்சியின் போது ஒரு நழுவத்திலிருந்து அடுத்த நழுவத்திற்கு மாறும் போது தோன்றும் காட்சி அசைவூட்ட விளைவுகளே நழுவ மாற்றம் எனப்படும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch8-2m-4",
    "chapterNo": 8,
    "chapterName": "Presentation Basics",
    "chapterNameTamil": "நிகழ்த்தல் அடிப்படைகள்",
    "marks": 2,
    "type": "short",
    "questionText": "What is Custom Animation?",
    "questionTextTamil": "தனிப்பயன் அசைவூட்டம் (Custom Animation) என்றால் என்ன?",
    "answer": "Custom Animation allows applying entrance, emphasis, exit, and motion path effects to individual objects (titles, bullet points, images) within a single slide.",
    "answerTamil": "நழுவத்தில் உள்ள குறிப்பிட்ட உரை, படங்கள் அல்லது பொருட்களுக்கு அசைவூட்ட விளைவுகளைக் (Entrance, Emphasis, Exit) கொடுக்கும் வசதி Custom Animation ஆகும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch8-2m-5",
    "chapterNo": 8,
    "chapterName": "Presentation Basics",
    "chapterNameTamil": "நிகழ்த்தல் அடிப்படைகள்",
    "marks": 2,
    "type": "short",
    "questionText": "Name the five workspace views in OpenOffice Impress.",
    "questionTextTamil": "OpenOffice Impress-ன் ஐந்து பணித்தள பார்வைகளைக் கூறுக.",
    "answer": "1. Normal View\n2. Outline View\n3. Notes View\n4. Handout View\n5. Slide Sorter View.",
    "answerTamil": "1. இயல்புப் பார்வை (Normal View)\n2. வெளிக்கோட்டுப் பார்வை (Outline View)\n3. குறிப்புகள் பார்வை (Notes View)\n4. கையேடு பார்வை (Handout View)\n5. நழுவ வரிசைப்படுத்துபவர் பார்வை (Slide Sorter View).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch8-3m-1",
    "chapterNo": 8,
    "chapterName": "Presentation Basics",
    "chapterNameTamil": "நிகழ்த்தல் அடிப்படைகள்",
    "marks": 3,
    "type": "short",
    "questionText": "Differentiate between Slide Transition and Custom Animation.",
    "questionTextTamil": "நழுவ மாற்றம் மற்றும் தனிப்பயன் அசைவூட்டம் - வேறுபடுத்துக.",
    "answer": "• Slide Transition: Applies animated effects to the entire slide as it appears on screen.\n• Custom Animation: Applies movement, fading, or emphasis effects to specific elements (text boxes, shapes, photos) inside the slide.",
    "answerTamil": "• நழுவ மாற்றம் (Slide Transition): முழு நழுவமும் திரையில் தோன்றும் போது ஏற்படும் அசைவூட்டம்.\n• தனிப்பயன் அசைவூட்டம் (Custom Animation): நழுவத்திற்குள் இருக்கும் குறிப்பிட்ட உரை அல்லது பொருட்களுக்கு மட்டும் வழங்கப்படும் அசைவூட்டம்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch8-3m-2",
    "chapterNo": 8,
    "chapterName": "Presentation Basics",
    "chapterNameTamil": "நிகழ்த்தல் அடிப்படைகள்",
    "marks": 3,
    "type": "short",
    "questionText": "Explain the Slide Sorter View and its advantages.",
    "questionTextTamil": "நழுவ வரிசைப்படுத்துபவர் (Slide Sorter) பார்வை மற்றும் அதன் நன்மைகளை விளக்குக.",
    "answer": "• Slide Sorter View displays all slides in the presentation as miniature thumbnail tiles in a matrix grid.\n• Advantages:\n1. Easily drag and drop to reorder slides.\n2. Delete or duplicate slides quickly.\n3. Preview and configure transitions for multiple slides simultaneously.",
    "answerTamil": "• நழுவ வரிசைப்படுத்துபவர் பார்வை அனைத்து நழுவங்களையும் சிறு படங்களாக (Thumbnails) ஒரே திரையில் வரிசையாகக் காட்டும்.\n• நன்மைகள்: நழுவங்களை எளிதாக நகர்த்தி வரிசைப்படுத்தலாம்; நழுவங்களை நீக்கலாம் மற்றும் மாற்றங்களை ஒரே நேரத்தில் அமைக்கலாம்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch8-3m-3",
    "chapterNo": 8,
    "chapterName": "Presentation Basics",
    "chapterNameTamil": "நிகழ்த்தல் அடிப்படைகள்",
    "marks": 3,
    "type": "short",
    "questionText": "How do you insert an image into an Impress slide?",
    "questionTextTamil": "Impress நழுவத்தில் படத்தை எவ்வாறு செருகுவது?",
    "answer": "1. Select the target slide in Normal view.\n2. Click Insert -> Picture -> From File from the menu bar.\n3. Browse and select the desired image file from your computer.\n4. Click 'Open' and resize/reposition the inserted image using boundary handles.",
    "answerTamil": "1. நழுவத்தைத் தேர்ந்தெடுக்கவும்.\n2. Insert -> Picture -> From File தேர்வு செய்யவும்.\n3. கணினியிலிருந்து தேவையான படத்தைத் தேர்ந்தெடுக்கவும்.\n4. 'Open' கொடுத்து நழுவத்தில் வைத்து அளவை மாற்றிக் கொள்ளலாம்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch8-3m-4",
    "chapterNo": 8,
    "chapterName": "Presentation Basics",
    "chapterNameTamil": "நிகழ்த்தல் அடிப்படைகள்",
    "marks": 3,
    "type": "short",
    "questionText": "Write a short note on Master Slide.",
    "questionTextTamil": "முதன்மை நழுவம் (Master Slide) பற்றி சிறுகுறிப்பு வரைக.",
    "answer": "• Master Slide defines the base formatting, background style, fonts, header/footer, and logos for all slides in the presentation.\n• Changes made on the Master Slide automatically reflect across all linked slides in the presentation.",
    "answerTamil": "• முதன்மை நழுவம் என்பது அனைத்து நழுவங்களுக்கும் பொதுவான பின்னணி, எழுத்துரு பாணி மற்றும் லோகோ போன்ற அமைப்புகளைத் தீர்மானிக்கும் அடிப்படை நழுவமாகும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch8-3m-5",
    "chapterNo": 8,
    "chapterName": "Presentation Basics",
    "chapterNameTamil": "நிகழ்த்தல் அடிப்படைகள்",
    "marks": 3,
    "type": "short",
    "questionText": "How can you run and navigate a slide show in Impress?",
    "questionTextTamil": "Impress-ல் நழுவக்காட்சியை எவ்வாறு இயக்குவது மற்றும் உலாவுவது?",
    "answer": "1. Press F5 to start from Slide 1 (or Slide Show -> Slide Show).\n2. Press Spacebar, Enter, Right Arrow, or Left Mouse Click to advance to the next slide.\n3. Press Left Arrow or Backspace to go back to the previous slide.\n4. Press Esc key anytime to stop the presentation.",
    "answerTamil": "1. F5 விசையை அழுத்தி நழுவக்காட்சியைத் தொடங்கலாம்.\n2. Spacebar, Enter, அம்பு விசை அல்லது சுட்டி கிளிக் மூலம் அடுத்த நழுவத்திற்கு செல்லலாம்.\n3. Esc விசையை அழுத்தி எந்நேரமும் நழுவக்காட்சியிலிருந்து வெளியேறலாம்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch8-5m-1",
    "chapterNo": 8,
    "chapterName": "Presentation Basics",
    "chapterNameTamil": "நிகழ்த்தல் அடிப்படைகள்",
    "marks": 5,
    "type": "detail",
    "questionText": "Explain the different workspace views available in OpenOffice Impress in detail.",
    "questionTextTamil": "OpenOffice Impress-ல் உள்ள பல்வேறு பணித்தள பார்வைகளை விரிவாக விளக்குக.",
    "answer": "Workspace Views in Impress:\n\n1. Normal View:\n- Main editing view where individual slides are designed with text, graphics, and layout adjustments.\n\n2. Outline View:\n- Displays only the text titles and bullet hierarchy of all slides for fast textual editing.\n\n3. Notes View:\n- Allows entering speaker notes and reference guidelines beneath each slide.\n\n4. Handout View:\n- Previews multiple miniature slides per printed page (1, 2, 3, 4, 6, 9) for audience distribution.\n\n5. Slide Sorter View:\n- Matrix overview displaying all slides as thumbnails for rearranging, timing, and transition management.",
    "answerTamil": "1. இயல்புப் பார்வை (Normal View): நழுவங்களை வடிவமைக்கும் முதன்மை தொகுப்பு பார்வை.\n2. வெளிக்கோட்டுப் பார்வை (Outline View): உரையின் தலைப்புகள் மற்றும் குறிப்புகளை மட்டும் காட்டும்.\n3. குறிப்புகள் பார்வை (Notes View): பேச்சாளர் குறிப்புகளை எழுத உதவும்.\n4. கையேடு பார்வை (Handout View): காகிதத்தில் அச்சிட பல நழுவங்களை ஒரே பக்கத்தில் அமைக்கும் பார்வை.\n5. நழுவ வரிசைப்படுத்துபவர் பார்வை (Slide Sorter View): அனைத்து நழுவங்களையும் சிறு படங்களாக வரிசைப்படுத்தி ஒழுங்கமைக்கும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch8-5m-2",
    "chapterNo": 8,
    "chapterName": "Presentation Basics",
    "chapterNameTamil": "நிகழ்த்தல் அடிப்படைகள்",
    "marks": 5,
    "type": "detail",
    "questionText": "Explain how to apply Slide Transitions and Sound effects in OpenOffice Impress.",
    "questionTextTamil": "OpenOffice Impress-ல் நழுவ மாற்றங்கள் மற்றும் ஒலி விளைவுகளை எவ்வாறு அமைப்பது என்பதை விளக்குக.",
    "answer": "Applying Slide Transitions:\n1. Open Tasks Pane on the right and select 'Slide Transition'.\n2. Choose a transition style from the list (e.g. Wipe Down, Wheel, Fade Smoothly, Uncover).\n3. Modify transition speed (Slow, Medium, Fast).\n4. Select a Sound effect from the Sound dropdown (or load a custom audio file).\n5. Choose slide advance mode: 'On mouse click' or 'Automatically after [X] seconds'.\n6. Click 'Apply to All Slides' to apply universally or assign to current slide.",
    "answerTamil": "1. வலதுபுற பணிப் பலகத்தில் 'Slide Transition' என்பதைத் தேர்வு செய்யவும்.\n2. விரும்பிய மாற்ற பாணியைத் தேர்ந்தெடுக்கவும் (Wipe, Fade, Box).\n3. மாற்றத்தின் வேகத்தை அமைக்கவும் (Slow, Medium, Fast).\n4. Sound பட்டியலிலிருந்து ஒலி விளைவைச் சேர்க்கவும்.\n5. நழுவம் தானாக மாற 'Automatically after' நேரத்தை அமைக்கவும்.\n6. 'Apply to All Slides' கொடுத்து அனைத்து நழுவங்களுக்கும் செயல்படுத்தவும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch8-5m-3",
    "chapterNo": 8,
    "chapterName": "Presentation Basics",
    "chapterNameTamil": "நிகழ்த்தல் அடிப்படைகள்",
    "marks": 5,
    "type": "detail",
    "questionText": "Explain the procedure to create a presentation using the Presentation Wizard in Impress.",
    "questionTextTamil": "Presentation Wizard-ஐப் பயன்படுத்தி புதிய நிகழ்த்தலை உருவாக்கும் வழிமுறைகளை விளக்குக.",
    "answer": "Creating Presentation via Wizard:\n1. Launch Impress -> Wizard dialog opens automatically.\n2. Step 1 (Type): Choose 'Empty presentation', 'From template', or 'Open existing presentation'.\n3. Step 2 (Design): Select slide background design style and output medium (Original, Screen, Slide, Paper).\n4. Step 3 (Transition): Select default slide transition effect and display speed.\n5. Step 4: Enter presentation title and topic overview.\n6. Step 5: Choose included basic slide templates and click 'Create'.",
    "answerTamil": "1. Impress திறந்தவுடன் Presentation Wizard தோன்றும்.\n2. படி 1: 'Empty presentation' அல்லது 'From template' தேர்வு செய்யவும்.\n3. படி 2: நழுவ பின்னணி வடிவம் மற்றும் வெளியீட்டு ஊடகத்தைத் தேர்ந்தெடுக்கவும்.\n4. படி 3: முன்னிருப்பு நழுவ மாற்றம் மற்றும் வேகத்தை அமைக்கவும்.\n5. படி 4: நிகழ்த்தலின் தலைப்பு மற்றும் தகவல்களை உள்ளிடவும்.\n6. 'Create' பொத்தானை அழுத்தி புதிய நிகழ்த்தலைத் தொடங்கவும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch8-5m-4",
    "chapterNo": 8,
    "chapterName": "Presentation Basics",
    "chapterNameTamil": "நிகழ்த்தல் அடிப்படைகள்",
    "marks": 5,
    "type": "detail",
    "questionText": "How do you insert Audio, Video, and Custom Shapes into a presentation slide?",
    "questionTextTamil": "நழுவத்தில் ஆடியோ, வீடியோ மற்றும் வடிவங்களை (Shapes) எவ்வாறு செருகுவது?",
    "answer": "1. Inserting Audio / Video:\n- Click Insert -> Movie and Sound.\n- Browse and pick supported media file (.mp3, .wav, .mp4, .avi).\n- Resize media frame and configure playback controls.\n\n2. Inserting Custom Shapes:\n- Open Drawing Toolbar at bottom (View -> Toolbars -> Drawing).\n- Select shapes like Rectangle, Ellipse, Arrows, Callouts, or Stars.\n- Click and drag on slide canvas to draw the shape, then apply fill color and border styles via Properties panel.",
    "answerTamil": "1. ஆடியோ / வீடியோ சேர்த்தல்:\n- Insert -> Movie and Sound தேர்வு செய்யவும்.\n- மீடியா கோப்பைத் தேர்வு செய்து நழுவத்தில் வைக்கவும்.\n2. வடிவங்கள் சேர்த்தல்:\n- கீழ் உள்ள Drawing கருவிப் பட்டையிலிருந்து செவ்வகம், வட்டம், அம்பு போன்ற வடிவங்களைத் தேர்வு செய்யவும்.\n- நழுவத்தில் வரைந்து விரும்பிய வண்ணங்களை அமைக்கவும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-1m-1",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "What is the expansion of ARPANET?",
    "questionTextTamil": "ARPANET என்பதன் விரிவாக்கம் என்ன?",
    "options": {
      "A": "Advanced Research Project Agency Network",
      "B": "American Research Project Agency Network",
      "C": "Advanced Resource Project Agency Network",
      "D": "American Resource Project Agency Network"
    },
    "optionsTamil": {
      "A": "Advanced Research Project Agency Network",
      "B": "American Research Project Agency Network",
      "C": "Advanced Resource Project Agency Network",
      "D": "American Resource Project Agency Network"
    },
    "correctOption": "A",
    "answer": "A) Advanced Research Project Agency Network",
    "answerTamil": "A) Advanced Research Project Agency Network (1969)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-1m-2",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Who is known as the father of the World Wide Web (WWW)?",
    "questionTextTamil": "வைய விரிவு வலையின் (WWW) தந்தை என்று அழைக்கப்படுபவர் யார்?",
    "options": {
      "A": "Tim Berners-Lee",
      "B": "Vint Cerf",
      "C": "Charles Babbage",
      "D": "Bill Gates"
    },
    "optionsTamil": {
      "A": "டிம் பெர்னர்ஸ்-லீ (Tim Berners-Lee)",
      "B": "வின்ட் செர்ஃப்",
      "C": "சார்லஸ் பாபேஜ்",
      "D": "பில் கேட்ஸ்"
    },
    "correctOption": "A",
    "answer": "A) Tim Berners-Lee",
    "answerTamil": "A) டிம் பெர்னர்ஸ்-லீ (Tim Berners-Lee - 1989)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-1m-3",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which protocol is used for securely transmitting web pages over the internet?",
    "questionTextTamil": "வலைப்பக்கங்களை பாதுகாப்பாகப் பரிமாறப் பயன்படும் நெறிமுறை எது?",
    "options": {
      "A": "HTTP",
      "B": "HTTPS",
      "C": "FTP",
      "D": "SMTP"
    },
    "optionsTamil": {
      "A": "HTTP",
      "B": "HTTPS",
      "C": "FTP",
      "D": "SMTP"
    },
    "correctOption": "B",
    "answer": "B) HTTPS",
    "answerTamil": "B) HTTPS (HyperText Transfer Protocol Secure)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-1m-4",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "What is the unique numerical address assigned to every device connected to the internet called?",
    "questionTextTamil": "இணையத்துடன் இணைக்கப்பட்ட ஒவ்வொரு சாதனத்திற்கும் வழங்கப்படும் தனித்துவமான எண் முகவரி எது?",
    "options": {
      "A": "MAC Address",
      "B": "IP Address",
      "C": "URL",
      "D": "DNS"
    },
    "optionsTamil": {
      "A": "MAC முகவரி",
      "B": "IP முகவரி (IP Address)",
      "C": "URL",
      "D": "DNS"
    },
    "correctOption": "B",
    "answer": "B) IP Address",
    "answerTamil": "B) IP முகவரி (IP Address)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-1m-5",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which protocol is used to send outgoing emails?",
    "questionTextTamil": "மின்னஞ்சல்களை அனுப்பப் பயன்படும் நெறிமுறை எது?",
    "options": {
      "A": "SMTP",
      "B": "POP3",
      "C": "IMAP",
      "D": "FTP"
    },
    "optionsTamil": {
      "A": "SMTP",
      "B": "POP3",
      "C": "IMAP",
      "D": "FTP"
    },
    "correctOption": "A",
    "answer": "A) SMTP",
    "answerTamil": "A) SMTP (Simple Mail Transfer Protocol)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-1m-6",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which protocol is used to retrieve incoming emails from a mail server?",
    "questionTextTamil": "மின்னஞ்சல் சேவையகத்திலிருந்து மின்னஞ்சல்களைப் பெறப் பயன்படும் நெறிமுறை எது?",
    "options": {
      "A": "SMTP",
      "B": "POP3 / IMAP",
      "C": "HTTP",
      "D": "Telnet"
    },
    "optionsTamil": {
      "A": "SMTP",
      "B": "POP3 / IMAP",
      "C": "HTTP",
      "D": "Telnet"
    },
    "correctOption": "B",
    "answer": "B) POP3 / IMAP",
    "answerTamil": "B) POP3 / IMAP",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-1m-7",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "What does URL stand for?",
    "questionTextTamil": "URL என்பதன் விரிவாக்கம் என்ன?",
    "options": {
      "A": "Uniform Resource Locator",
      "B": "Universal Resource Locator",
      "C": "Uniform Resource Link",
      "D": "Universal Routing Locator"
    },
    "optionsTamil": {
      "A": "Uniform Resource Locator",
      "B": "Universal Resource Locator",
      "C": "Uniform Resource Link",
      "D": "Universal Routing Locator"
    },
    "correctOption": "A",
    "answer": "A) Uniform Resource Locator",
    "answerTamil": "A) Uniform Resource Locator",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-1m-8",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which of the following is a web browser?",
    "questionTextTamil": "பின்வருவனவற்றுள் இணைய உலாவி (Web Browser) எது?",
    "options": {
      "A": "Google Chrome",
      "B": "Mozilla Firefox",
      "C": "Apple Safari",
      "D": "All of the above"
    },
    "optionsTamil": {
      "A": "Google Chrome",
      "B": "Mozilla Firefox",
      "C": "Apple Safari",
      "D": "மேற்கண்ட அனைத்தும் (All of the above)"
    },
    "correctOption": "D",
    "answer": "D) All of the above",
    "answerTamil": "D) மேற்கண்ட அனைத்தும் (All of the above)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-1m-9",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "In an email address user@domain.com, what does '@' separate?",
    "questionTextTamil": "user@domain.com என்ற மின்னஞ்சல் முகவரியில் '@' குறியீடு எவற்றைப் பிரிக்கிறது?",
    "options": {
      "A": "Username and Domain name",
      "B": "Password and Username",
      "C": "Protocol and Server",
      "D": "File and Directory"
    },
    "optionsTamil": {
      "A": "பயனர் பெயர் மற்றும் களப் பெயர் (Username & Domain)",
      "B": "கடவுச்சொல் மற்றும் பயனர் பெயர்",
      "C": "நெறிமுறை மற்றும் சேவையகம்",
      "D": "கோப்பு மற்றும் அடைவு"
    },
    "correctOption": "A",
    "answer": "A) Username and Domain name",
    "answerTamil": "A) பயனர் பெயர் மற்றும் களப் பெயர்",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-1m-10",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "What does DNS stand for?",
    "questionTextTamil": "DNS என்பதன் விரிவாக்கம்:",
    "options": {
      "A": "Domain Name System",
      "B": "Domain Network Service",
      "C": "Digital Name System",
      "D": "Direct Network Server"
    },
    "optionsTamil": {
      "A": "Domain Name System",
      "B": "Domain Network Service",
      "C": "Digital Name System",
      "D": "Direct Network Server"
    },
    "correctOption": "A",
    "answer": "A) Domain Name System",
    "answerTamil": "A) Domain Name System",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-1m-11",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which field in email hides recipient email addresses from other recipients?",
    "questionTextTamil": "மின்னஞ்சல் பெறுநர்களின் முகவரியை மற்றவர்களுக்குத் தெரியாமல் மறைக்க உதவும் புலம் எது?",
    "options": {
      "A": "To",
      "B": "Cc",
      "C": "Bcc",
      "D": "Subject"
    },
    "optionsTamil": {
      "A": "To",
      "B": "Cc",
      "C": "Bcc (Blind Carbon Copy)",
      "D": "Subject"
    },
    "correctOption": "C",
    "answer": "C) Bcc",
    "answerTamil": "C) Bcc (Blind Carbon Copy)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-2m-1",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "What is the Internet?",
    "questionTextTamil": "இணையம் (Internet) என்றால் என்ன?",
    "answer": "The Internet is a global network of interconnected computers and servers communicating via the TCP/IP protocol suite to share data, resources, and services worldwide.",
    "answerTamil": "இணையம் என்பது உலகம் முழுவதும் உள்ள கோடிக்கணக்கான கணிப்பொறிகளையும் வழங்கிகளையும் TCP/IP நெறிமுறையின் மூலம் இணைக்கும் உலகளாவிய வலையமைப்பாகும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-2m-2",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "What is World Wide Web (WWW)?",
    "questionTextTamil": "வைய விரிவு வலை (WWW) என்றால் என்ன?",
    "answer": "The World Wide Web (WWW) is an information space of interconnected hypertext web pages, images, and multimedia accessible via the Internet using web browsers and HTTP.",
    "answerTamil": "வைய விரிவு வலை என்பது இணையத்தின் வழியாக உலாவி மூலம் அணுகக்கூடிய மீஉரை (Hypertext) வலைப்பக்கங்களின் தொகுப்பாகும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-2m-3",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "What is a Web Browser?",
    "questionTextTamil": "வலை உலாவி (Web Browser) என்றால் என்ன?",
    "answer": "A web browser is an application program used to retrieve, interpret, and display web pages and multimedia content from web servers (e.g. Chrome, Firefox, Safari).",
    "answerTamil": "வலை உலாவி என்பது இணையத்தில் உள்ள வலைப்பக்கங்களைப் பதிவிறக்கம் செய்து திரையிட்டுக் காட்டும் மென்பொருளாகும் (எ.கா: Chrome, Firefox).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-2m-4",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "What is a Web Server?",
    "questionTextTamil": "வலை சேவையகம் (Web Server) என்றால் என்ன?",
    "answer": "A web server is a high-performance computer that hosts websites and serves HTML web pages to clients over the Internet upon HTTP/HTTPS request.",
    "answerTamil": "வலை சேவையகம் என்பது இணையதளங்களைச் சேமித்து வைத்து, பயனர்களின் கோரிக்கைக்கு ஏற்ப வலைப்பக்கங்களை வழங்கும் கணிப்பொறியாகும் (எ.கா: Apache, Nginx).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-2m-5",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "What is URL?",
    "questionTextTamil": "URL என்றால் என்ன?",
    "answer": "URL (Uniform Resource Locator) is the unique global web address that identifies the specific location of a resource (web page, image, file) on the Internet.",
    "answerTamil": "URL (Uniform Resource Locator) என்பது இணையத்தில் உள்ள ஒரு குறிப்பிட்ட ஆவணம் அல்லது வலைப்பக்கத்தின் உலகளாவிய தனித்துவ முகவரியாகும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-2m-6",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "What is IP Address?",
    "questionTextTamil": "IP முகவரி என்றால் என்ன?",
    "answer": "An IP (Internet Protocol) address is a unique numerical label (e.g., 192.168.1.1 or IPv6) assigned to each device connected to a computer network for identification and routing.",
    "answerTamil": "IP முகவரி என்பது இணையத்துடன் இணைக்கப்பட்டுள்ள ஒவ்வொரு சாதனத்திற்கும் தகவல் பரிமாற்றத்திற்காக வழங்கப்படும் தனித்துவமான எண் முகவரியாகும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-2m-7",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "What is DNS?",
    "questionTextTamil": "DNS என்றால் என்ன?",
    "answer": "DNS (Domain Name System) is the phonebook of the Internet that translates human-readable domain names (like www.google.com) into machine-readable IP addresses (like 142.250.190.46).",
    "answerTamil": "DNS (Domain Name System) என்பது மனிதர்கள் எளிதில் நினைவில் வைத்திருக்கும் வலைத்தள பெயர்களை (Domain Name) கணினிகள் புரிந்துகொள்ளும் IP முகவரிகளாக மாற்றும் அமைப்பாகும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-2m-8",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "What is Email?",
    "questionTextTamil": "மின்னஞ்சல் (Email) என்றால் என்ன?",
    "answer": "Electronic Mail (Email) is a digital method of exchanging messages and file attachments between people across the Internet using electronic devices.",
    "answerTamil": "மின்னஞ்சல் என்பது இணையத்தின் வழியாக ஒருவரிடமிருந்து மற்றொருவருக்கு தகவல்களையும் கோப்புகளையும் மின்னணு முறையில் அனுப்பும் சேவையாகும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-2m-9",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "Differentiate between CC and BCC in Email.",
    "questionTextTamil": "மின்னஞ்சலில் CC மற்றும் BCC - வேறுபடுத்துக.",
    "answer": "• CC (Carbon Copy): All recipients can see each other's email addresses.\n• BCC (Blind Carbon Copy): Recipient addresses remain confidential and invisible to other recipients.",
    "answerTamil": "• CC (Carbon Copy): மின்னஞ்சல் பெறும் அனைவரும் மற்ற பெறுநர்களின் முகவரிகளைப் பார்க்க முடியும்.\n• BCC (Blind Carbon Copy): இதில் உள்ள பெறுநர்களின் முகவரிகள் மற்றவர்களுக்குத் தெரியாது (மறைக்கப்படும்).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-2m-10",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "What is a Search Engine?",
    "questionTextTamil": "தேடு பொறி (Search Engine) என்றால் என்ன?",
    "answer": "A search engine is a web-based software program (such as Google, Bing, Yahoo) designed to search and index information on the World Wide Web using keywords.",
    "answerTamil": "தேடு பொறி என்பது முக்கிய சொற்களைக் (Keywords) கொண்டு இணையத்தில் உள்ள தகவல்களைத் தேடித் தரும் மென்பொருளாகும் (எ.கா: Google, Bing).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-2m-11",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "What is an ISP?",
    "questionTextTamil": "ISP என்றால் என்ன?",
    "answer": "An ISP (Internet Service Provider) is a commercial organization (e.g. BSNL, Airtel, Jio) that provides individuals and businesses with access to the Internet.",
    "answerTamil": "ISP (Internet Service Provider) என்பது பயனர்களுக்கு இணைய இணைப்பை வழங்கும் சேவை நிறுவனமாகும் (எ.கா: BSNL, Jio, Airtel).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-2m-12",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "What is an Email Attachment?",
    "questionTextTamil": "மின்னஞ்சல் இணைப்பு (Attachment) என்றால் என்ன?",
    "answer": "An email attachment is a computer file (such as an image, PDF document, spreadsheet, or compressed ZIP) sent along with an email message.",
    "answerTamil": "மின்னஞ்சல் செய்தியுடன் சேர்த்து அனுப்பப்படும் ஆவணங்கள், புகைப்படங்கள் அல்லது கோப்புகளே மின்னஞ்சல் இணைப்பு (Attachment) எனப்படும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-3m-1",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 3,
    "type": "short",
    "questionText": "Differentiate between Internet and World Wide Web (WWW).",
    "questionTextTamil": "இணையம் (Internet) மற்றும் வைய விரிவு வலை (WWW) - வேறுபடுத்துக.",
    "answer": "• Internet: The physical global network infrastructure of hardware cables, routers, and connected computers.\n• World Wide Web: An information service running on top of the Internet that consists of interlinked HTML web pages and multimedia.",
    "answerTamil": "• இணையம் (Internet): வன்பொருட்கள், கேபிள்கள் மற்றும் கணினிகளை இணைக்கும் உலகளாவிய கட்டமைப்பு.\n• வைய விரிவு வலை (WWW): இணையத்தின் வழியே இயங்கும் வலைப்பக்கங்கள் மற்றும் தகவல்களின் தொகுப்பு.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-3m-2",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 3,
    "type": "short",
    "questionText": "Explain the structure of a URL with an example.",
    "questionTextTamil": "ஒரு URL-ன் அமைப்பை எடுத்துக்காட்டுடன் விளக்குக.",
    "answer": "Example: `https://www.example.com:80/dept/info.html`\n1. Protocol: `https://` (Method of data transfer).\n2. Domain / Host: `www.example.com` (Target server).\n3. Port Number: `:80` or `:443`.\n4. Path / File: `/dept/info.html` (Specific directory and resource filename on server).",
    "answerTamil": "எடுத்துக்காட்டு: `https://www.example.com/info.html`\n1. நெறிமுறை (Protocol): `https://`\n2. களப் பெயர் (Domain Name): `www.example.com`\n3. கோப்புப் பாதை (Path/File): `/info.html`.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-3m-3",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 3,
    "type": "short",
    "questionText": "Explain the structure of an Email Address.",
    "questionTextTamil": "ஒரு மின்னஞ்சல் முகவரியின் அமைப்பை விளக்குக.",
    "answer": "Example: `username@gmail.com`\n1. Username (`username`): The unique mailbox identifier chosen by the user.\n2. At Symbol (`@`): Separates the user ID from the mail server host.\n3. Domain Name (`gmail.com`): Identifies the email service provider / mail server hosting the mailbox.",
    "answerTamil": "எடுத்துக்காட்டு: `student@school.edu`\n1. பயனர் பெயர் (Username): பயனரின் தனிப்பட்ட பெயர்.\n2. @ குறியீடு: பிரிப்பான்.\n3. களப் பெயர் (Domain name): மின்னஞ்சல் சேவையை வழங்கும் சர்வரின் பெயர்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-3m-4",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 3,
    "type": "short",
    "questionText": "What are the primary advantages of Email over traditional postal mail?",
    "questionTextTamil": "பாரம்பரிய அஞ்சலை விட மின்னஞ்சலின் முக்கிய நன்மைகள் யாவை?",
    "answer": "1. Speed: Delivered across the globe in seconds.\n2. Cost: Free or low-cost compared to postal postage.\n3. Multimedia: Supports sending digital files, photos, audio, and documents.\n4. Paperless & Eco-friendly: Reduces physical paper waste.\n5. Global Reach: Accessible anywhere via Internet-connected devices.",
    "answerTamil": "1. வேகம்: சில நொடிகளில் உலகம் முழுவதும் சென்றடையும்.\n2. குறைந்த செலவு: அஞ்சல் கட்டணங்கள் இல்லை.\n3. பல்லூடக ஆதரவு: ஆவணங்கள் மற்றும் படங்களை இணைக்கலாம்.\n4. காகிதப் பயன்பாடற்ற சூழல் பாதுகாப்பு.\n5. எந்நேரமும் எங்கிருந்தும் அணுகலாம்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-3m-5",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 3,
    "type": "short",
    "questionText": "Write a short note on IPv4 vs IPv6.",
    "questionTextTamil": "IPv4 மற்றும் IPv6 பற்றி சிறுகுறிப்பு வரைக.",
    "answer": "• IPv4: 32-bit address, represented in 4 decimal octets separated by dots (e.g. 192.168.1.100), offers ~4.3 billion unique addresses.\n• IPv6: 128-bit address, represented in 8 hexadecimal groups separated by colons (e.g. 2001:0db8::1), designed to provide virtually unlimited IP addresses.",
    "answerTamil": "• IPv4: 32-பிட் முகவரி; புள்ளிகளால் பிரிக்கப்பட்ட 4 பதின்ம எண்கள் (எ.கா: 192.168.1.1).\n• IPv6: 128-பிட் முகவரி; முப்புள்ளிகளால் பிரிக்கப்பட்ட 8 பதினாறுநிலை தொகுதிகள்; எல்லையற்ற முகவரிகளை வழங்கும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-3m-6",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 3,
    "type": "short",
    "questionText": "Explain how DNS translates a Domain Name to an IP address.",
    "questionTextTamil": "DNS எவ்வாறு களப் பெயரை IP முகவரியாக மாற்றுகிறது?",
    "answer": "1. User types domain name in browser (e.g. www.tnschools.gov.in).\n2. Browser queries local DNS cache / recursive resolver.\n3. Resolver contacts Root DNS, TLD (.in) DNS, and authoritative nameserver.\n4. Authoritative nameserver returns the corresponding IP address.\n5. Browser connects directly to target web server using that IP address.",
    "answerTamil": "1. பயனர் உலாவியில் இணையதளப் பெயரை உள்ளிடுகிறார்.\n2. உலாவி DNS சேவையகத்தைக் கேட்கிறது.\n3. DNS சேவையகம் பெயர் பட்டியலைத் தேடி அதற்குரிய IP முகவரியைக் கண்டறிகிறது.\n4. கண்டறிந்த IP முகவரியை உலாவிக்கு வழங்கி இணையதளத்தை இணைக்கிறது.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-3m-7",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 3,
    "type": "short",
    "questionText": "List the essential folders in an Email account and their functions.",
    "questionTextTamil": "மின்னஞ்சல் கணக்கின் முக்கிய கோப்புறைகளையும் அவற்றின் பணிகளையும் கூறுக.",
    "answer": "1. Inbox: Stores incoming received emails.\n2. Sent Mail: Stores copies of emails sent to others.\n3. Drafts: Saves unfinished messages for later completion.\n4. Spam / Junk: Filters suspected unsolicited and phishing emails.\n5. Trash / Bin: Temporarily holds deleted emails before permanent removal.",
    "answerTamil": "1. Inbox (உள்வரிப்பெட்டி): வந்த மின்னஞ்சல்களைச் சேமிக்கும்.\n2. Sent: அனுப்பிய மின்னஞ்சல்கள்.\n3. Drafts: முடிக்கப்படாத மின்னஞ்சல்கள்.\n4. Spam: தேவையற்ற விளம்பர அஞ்சல்கள்.\n5. Trash: நீக்கப்பட்ட மின்னஞ்சல்கள்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-3m-8",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 3,
    "type": "short",
    "questionText": "What is Phishing and how can users prevent email phishing attacks?",
    "questionTextTamil": "ஃபிஷிங் (Phishing) என்றால் என்ன? அதை எவ்வாறு தடுக்கலாம்?",
    "answer": "• Phishing is a fraudulent cyber attempt to steal sensitive personal information (passwords, credit cards) by impersonating legitimate institutions via deceptive emails.\n• Prevention: Never click suspicious links, verify sender email addresses, check for HTTPS, and never share passwords over email.",
    "answerTamil": "• ஃபிஷிங் என்பது போலி மின்னஞ்சல்கள் மூலம் பயனரின் வங்கி விவரங்கள் மற்றும் கடவுச்சொற்களைத் திருடும் இணைய மோசடியாகும்.\n• தடுப்பு: சந்தேகத்திற்கிடமான இணைப்புகளைக் கிளிக் செய்யக்கூடாது; கடவுச்சொற்களை யாரிடமும் பகிரக்கூடாது.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-5m-1",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 5,
    "type": "detail",
    "questionText": "Explain the working mechanism of the Internet with a detailed diagram and concepts of TCP/IP, IP addresses, and Packets.",
    "questionTextTamil": "இணையத்தின் செயல்பாட்டு முறையை TCP/IP, IP முகவரி மற்றும் பாக்கெட்டுகள் ஆகிய கருத்துக்களுடன் விரிவாக விளக்குக.",
    "answer": "Working of the Internet:\n\n1. Packet Switching:\n- Data files are broken into smaller binary data chunks called 'Packets'.\n- Each packet contains source IP, destination IP, packet sequence number, and data payload.\n\n2. TCP/IP Protocol Suite:\n- TCP (Transmission Control Protocol): Ensures reliable packet delivery, handles error checking, and reassembles packets at destination in correct sequence.\n- IP (Internet Protocol): Routes individual packets across interconnected network routers to the destination IP address.\n\n3. Client-Server Architecture:\n- User's client device requests resources from web servers via ISP gateways and backbone fiber cables.\n\n4. Reassembly & Display:\n- Destination computer reassembles packets into original webpage/file and displays it in browser.",
    "answerTamil": "1. பாக்கெட் மாறுதல் (Packet Switching): தரவுகள் 'பாக்கெட்டுகள்' என்ற சிறிய துண்டுகளாகப் பிரிக்கப்படுகின்றன.\n2. TCP/IP நெறிமுறைகள்:\n- TCP: பாக்கெட்டுகளை வரிசைப்படுத்தி பிழையின்றி சென்றடைவதை உறுதி செய்கிறது.\n- IP: பாக்கெட்டுகளை சரியான முகவரிக்கு வழிநடத்துகிறது.\n3. கிளையண்ட் - சர்வர் கட்டமைப்பு: பயனர் உலாவியிலிருந்து கோரிக்கையை ISP வழியாக சர்வர்க்கு அனுப்புகிறது.\n4. மறுஇணைப்பு: சேருமிடத்தில் பாக்கெட்டுகள் ஒன்றாக இணைக்கப்பட்டு அசல் கோப்பாகக் காட்டப்படுகிறது.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-5m-2",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 5,
    "type": "detail",
    "questionText": "Explain the working process of Email communication and the protocols involved (SMTP, POP3, IMAP).",
    "questionTextTamil": "மின்னஞ்சல் பரிமாற்ற செயல்முறை மற்றும் அதில் பயன்படும் நெறிமுறைகளை (SMTP, POP3, IMAP) விரிவாக விளக்குக.",
    "answer": "Email Communication Process & Protocols:\n\n1. Composing and Sending:\n- Sender writes message in Mail User Agent (MUA - Gmail, Outlook).\n- Sender's client sends email to Sender Mail Server using SMTP (Simple Mail Transfer Protocol - Port 25/587).\n\n2. Server-to-Server Relay:\n- Sender Mail Server looks up recipient domain DNS (MX record).\n- Message forwarded across Internet using SMTP to Recipient Mail Server.\n\n3. Storage and Retrieval:\n- Recipient Mail Server deposits email in user mailbox.\n- Recipient retrieves email using:\n  • POP3 (Post Office Protocol v3): Downloads email to local computer and deletes it from server.\n  • IMAP (Internet Message Access Protocol): Synchronizes email across multiple devices while keeping mail stored on the cloud server.",
    "answerTamil": "1. அனுப்புதல்: பயனர் மின்னஞ்சலை எழுதி அனுப்பும் போது SMTP நெறிமுறை மூலம் மின்னஞ்சல் சேவையகத்திற்கு செல்கிறது.\n2. சேவையக பரிமாற்றம்: அனுப்புநர் சர்வர் DNS மூலம் பெறுநர் சர்வரைக் கண்டறிந்து SMTP வழியாக அனுப்புகிறது.\n3. பெறுதல்:\n- POP3: மின்னஞ்சலை கணினியில் பதிவிறக்கம் செய்து சர்வரிலிருந்து நீக்கும்.\n- IMAP: சர்வரிலேயே மின்னஞ்சலை வைத்து பல சாதனங்களில் ஒத்திசைவு (Sync) செய்யும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-5m-3",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 5,
    "type": "detail",
    "questionText": "Explain the differences between various Internet connection types (Dial-up, Broadband, Wi-Fi, 4G/5G, Fiber Optic).",
    "questionTextTamil": "பல்வேறு இணைய இணைப்பு வகைகளை (Dial-up, Broadband, Wi-Fi, 4G/5G, Fiber Optic) விரிவாக விளக்குக.",
    "answer": "Internet Connection Types:\n\n1. Dial-up Connection:\n- Uses telephone line with analog modem; slow speed (up to 56 kbps); blocks telephone line during usage.\n\n2. DSL / Broadband:\n- Digital Subscriber Line operating over copper telephone lines; high-speed continuous connection.\n\n3. Fiber Optic (FTTH):\n- Transmits data pulses of light through optical glass fibers; ultra-high gigabit speeds (100 Mbps - 1 Gbps) with low latency.\n\n4. Wi-Fi (Wireless Fidelity):\n- Uses radio frequency waves (2.4 GHz & 5 GHz) to provide local wireless networking within buildings.\n\n5. Cellular Mobile Broadband (4G LTE / 5G):\n- Wireless mobile network providing high mobility and fast speeds across cell towers.",
    "answerTamil": "1. டயல்-அப் (Dial-up): தொலைபேசி வழி குறைந்த வேகம் (56 kbps).\n2. பிராட்பேண்ட் (DSL): அதிவேக தொடர் இணைய இணைப்பு.\n3. ஃபைபர் ஆப்டிக் (FTTH): ஒளி இழைகள் மூலம் மிக அதிவேக தரவுப் பரிமாற்றம் (Gbps).\n4. Wi-Fi: கம்பியில்லா வானொலி அலைகள் மூலம் குறிப்பிட்ட எல்லைக்குள் இணைப்பு.\n5. செல்லுலார் மொபைல் (4G/5G): செல் கோபுரங்கள் மூலம் மொபைல் சாதனங்களுக்கான இணைப்பு.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch9-5m-4",
    "chapterNo": 9,
    "chapterName": "Introduction to Internet and Email",
    "chapterNameTamil": "இணையம் மற்றும் மின்னஞ்சல் ஓர் அறிமுகம்",
    "marks": 5,
    "type": "detail",
    "questionText": "Explain the anatomy and components of an Email interface and message formatting rules.",
    "questionTextTamil": "மின்னஞ்சல் இடைமுகத்தின் அமைப்பு மற்றும் செய்தி வடிவூட்டல் விதிகளை விளக்குக.",
    "answer": "Email Interface Components:\n\n1. Header Fields:\n- 'To': Primary recipient email address.\n- 'Cc' (Carbon Copy): Secondary recipients kept informed publicly.\n- 'Bcc' (Blind Carbon Copy): Confidential recipients hidden from other recipients.\n- 'Subject': Short concise title summarizing email topic.\n\n2. Message Body:\n- Rich text formatting (Bold, Italic, Bullet points, Hyperlinks).\n\n3. Attachments:\n- Paperclip icon allows attaching files up to size limit (25 MB).\n\n4. Signature:\n- Predefined block of text containing sender's name, designation, and contact numbers appended automatically at the end of message.",
    "answerTamil": "1. தலைப்பு புலங்கள்: To (முக்கிய பெறுநர்), Cc (கூடுதல் பெறுநர்), Bcc (மறைமுக பெறுநர்), Subject (பொருள்).\n2. செய்திப் பகுதி: உரை வடிவூட்டல் விருப்பங்கள்.\n3. இணைப்புகள் (Attachment): கோப்புகளை இணைக்கும் வசதி.\n4. கையொப்பம் (Signature): செய்தியின் இறுதியில் தானாக இணையும் அனுப்புநரின் பெயர் மற்றும் தொடர்பு விவரங்கள்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch10-1m-1",
    "chapterNo": 10,
    "chapterName": "HTML - Structural Tags",
    "chapterNameTamil": "HTML - கட்டமைப்பு குறிச்சொற்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "What does HTML stand for?",
    "questionTextTamil": "HTML என்பதன் விரிவாக்கம்:",
    "options": {
      "A": "HyperText Markup Language",
      "B": "HyperText Modern Language",
      "C": "HyperTech Markup Language",
      "D": "HighText Markup Language"
    },
    "optionsTamil": {
      "A": "HyperText Markup Language",
      "B": "HyperText Modern Language",
      "C": "HyperTech Markup Language",
      "D": "HighText Markup Language"
    },
    "correctOption": "A",
    "answer": "A) HyperText Markup Language",
    "answerTamil": "A) HyperText Markup Language",
    "isBookBack": true
  },
  {
    "id": "ca11-ch10-1m-2",
    "chapterNo": 10,
    "chapterName": "HTML - Structural Tags",
    "chapterNameTamil": "HTML - கட்டமைப்பு குறிச்சொற்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which tag is the root element of all HTML documents?",
    "questionTextTamil": "அனைத்து HTML ஆவணங்களின் முதன்மை தொடக்க ஒட்டு (Root tag) எது?",
    "options": {
      "A": "<html>",
      "B": "<head>",
      "C": "<body>",
      "D": "<title>"
    },
    "optionsTamil": {
      "A": "<html>",
      "B": "<head>",
      "C": "<body>",
      "D": "<title>"
    },
    "correctOption": "A",
    "answer": "A) <html>",
    "answerTamil": "A) <html>",
    "isBookBack": true
  },
  {
    "id": "ca11-ch10-1m-3",
    "chapterNo": 10,
    "chapterName": "HTML - Structural Tags",
    "chapterNameTamil": "HTML - கட்டமைப்பு குறிச்சொற்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which section of an HTML document contains metadata and document title?",
    "questionTextTamil": "HTML ஆவணத்தின் தலைப்பு மற்றும் மெட்டாடேட்டாவைக் கொண்டுள்ள பகுதி எது?",
    "options": {
      "A": "<body>",
      "B": "<head>",
      "C": "<style>",
      "D": "<meta>"
    },
    "optionsTamil": {
      "A": "<body>",
      "B": "<head>",
      "C": "<style>",
      "D": "<meta>"
    },
    "correctOption": "B",
    "answer": "B) <head>",
    "answerTamil": "B) <head>",
    "isBookBack": true
  },
  {
    "id": "ca11-ch10-1m-4",
    "chapterNo": 10,
    "chapterName": "HTML - Structural Tags",
    "chapterNameTamil": "HTML - கட்டமைப்பு குறிச்சொற்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Where is the text placed inside <title> tag displayed in a web browser?",
    "questionTextTamil": "<title> ஒட்டின் உள்ளே உள்ள உரை உலாவியில் எங்கு காட்டப்படும்?",
    "options": {
      "A": "Browser Title Bar / Tab",
      "B": "Body canvas",
      "C": "Status bar",
      "D": "Address bar"
    },
    "optionsTamil": {
      "A": "உலாவி தலைப்புப் பட்டை / தாவல் (Title Bar / Tab)",
      "B": "பக்க உடல் பகுதி",
      "C": "நிலைமைப் பட்டை",
      "D": "முகவரிப் பட்டை"
    },
    "correctOption": "A",
    "answer": "A) Browser Title Bar / Tab",
    "answerTamil": "A) உலாவி தலைப்புப் பட்டை / தாவல் (Title Bar / Tab)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch10-1m-5",
    "chapterNo": 10,
    "chapterName": "HTML - Structural Tags",
    "chapterNameTamil": "HTML - கட்டமைப்பு குறிச்சொற்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which HTML tag is an empty tag (does not require closing tag)?",
    "questionTextTamil": "பின்வருவனவற்றுள் முடிவு ஒட்டு இல்லாத வெற்று ஒட்டு (Empty tag) எது?",
    "options": {
      "A": "<html>",
      "B": "<br>",
      "C": "<p>",
      "D": "<h1>"
    },
    "optionsTamil": {
      "A": "<html>",
      "B": "<br>",
      "C": "<p>",
      "D": "<h1>"
    },
    "correctOption": "B",
    "answer": "B) <br>",
    "answerTamil": "B) <br> (Line break)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch10-1m-6",
    "chapterNo": 10,
    "chapterName": "HTML - Structural Tags",
    "chapterNameTamil": "HTML - கட்டமைப்பு குறிச்சொற்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which tag is used to create a paragraph in HTML?",
    "questionTextTamil": "HTML-ல் பத்தியை உருவாக்க பயன்படும் ஒட்டு எது?",
    "options": {
      "A": "<para>",
      "B": "<p>",
      "C": "<pg>",
      "D": "<text>"
    },
    "optionsTamil": {
      "A": "<para>",
      "B": "<p>",
      "C": "<pg>",
      "D": "<text>"
    },
    "correctOption": "B",
    "answer": "B) <p>",
    "answerTamil": "B) <p>",
    "isBookBack": true
  },
  {
    "id": "ca11-ch10-1m-7",
    "chapterNo": 10,
    "chapterName": "HTML - Structural Tags",
    "chapterNameTamil": "HTML - கட்டமைப்பு குறிச்சொற்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "How many heading levels are available in HTML?",
    "questionTextTamil": "HTML-ல் எத்தனை தலைப்பு நிலைகள் உள்ளன?",
    "options": {
      "A": "4",
      "B": "5",
      "C": "6 (h1 to h6)",
      "D": "8"
    },
    "optionsTamil": {
      "A": "4",
      "B": "5",
      "C": "6 (h1 முதல் h6 வரை)",
      "D": "8"
    },
    "correctOption": "C",
    "answer": "C) 6 (h1 to h6)",
    "answerTamil": "C) 6 (h1 முதல் h6 வரை)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch10-1m-8",
    "chapterNo": 10,
    "chapterName": "HTML - Structural Tags",
    "chapterNameTamil": "HTML - கட்டமைப்பு குறிச்சொற்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which tag produces the largest heading in HTML?",
    "questionTextTamil": "மிகப் பெரிய அளவிலான தலைப்பை உருவாக்கும் ஒட்டு எது?",
    "options": {
      "A": "<h6>",
      "B": "<heading>",
      "C": "<h1>",
      "D": "<head>"
    },
    "optionsTamil": {
      "A": "<h6>",
      "B": "<heading>",
      "C": "<h1>",
      "D": "<head>"
    },
    "correctOption": "C",
    "answer": "C) <h1>",
    "answerTamil": "C) <h1>",
    "isBookBack": true
  },
  {
    "id": "ca11-ch10-1m-9",
    "chapterNo": 10,
    "chapterName": "HTML - Structural Tags",
    "chapterNameTamil": "HTML - கட்டமைப்பு குறிச்சொற்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which tag produces the smallest heading in HTML?",
    "questionTextTamil": "மிகச் சிறிய அளவிலான தலைப்பை உருவாக்கும் ஒட்டு எது?",
    "options": {
      "A": "<h1>",
      "B": "<h6>",
      "C": "<h0>",
      "D": "<small>"
    },
    "optionsTamil": {
      "A": "<h1>",
      "B": "<h6>",
      "C": "<h0>",
      "D": "<small>"
    },
    "correctOption": "B",
    "answer": "B) <h6>",
    "answerTamil": "B) <h6>",
    "isBookBack": true
  },
  {
    "id": "ca11-ch10-1m-10",
    "chapterNo": 10,
    "chapterName": "HTML - Structural Tags",
    "chapterNameTamil": "HTML - கட்டமைப்பு குறிச்சொற்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which tag inserts a horizontal thematic divider line across the page?",
    "questionTextTamil": "பக்கத்தில் கிடைமட்டக் கோட்டைச் செருக உதவும் ஒட்டு எது?",
    "options": {
      "A": "<line>",
      "B": "<hr>",
      "C": "<hl>",
      "D": "<border>"
    },
    "optionsTamil": {
      "A": "<line>",
      "B": "<hr>",
      "C": "<hl>",
      "D": "<border>"
    },
    "correctOption": "B",
    "answer": "B) <hr>",
    "answerTamil": "B) <hr> (Horizontal Rule)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch10-1m-11",
    "chapterNo": 10,
    "chapterName": "HTML - Structural Tags",
    "chapterNameTamil": "HTML - கட்டமைப்பு குறிச்சொற்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which attribute of <body> tag sets the background color of a web page?",
    "questionTextTamil": "வலைப்பக்கத்தின் பின்னணி நிறத்தை அமைக்க பயன்படும் <body> ஒட்டின் பண்புக்கூறு எது?",
    "options": {
      "A": "bgcolor",
      "B": "background",
      "C": "color",
      "D": "bg"
    },
    "optionsTamil": {
      "A": "bgcolor",
      "B": "background",
      "C": "color",
      "D": "bg"
    },
    "correctOption": "A",
    "answer": "A) bgcolor",
    "answerTamil": "A) bgcolor",
    "isBookBack": true
  },
  {
    "id": "ca11-ch10-1m-12",
    "chapterNo": 10,
    "chapterName": "HTML - Structural Tags",
    "chapterNameTamil": "HTML - கட்டமைப்பு குறிச்சொற்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which attribute of <body> tag sets a background image?",
    "questionTextTamil": "பின்னணிப் படத்தை அமைக்க பயன்படும் பண்புக்கூறு எது?",
    "options": {
      "A": "img",
      "B": "background",
      "C": "src",
      "D": "wallpaper"
    },
    "optionsTamil": {
      "A": "img",
      "B": "background",
      "C": "src",
      "D": "wallpaper"
    },
    "correctOption": "B",
    "answer": "B) background",
    "answerTamil": "B) background",
    "isBookBack": true
  },
  {
    "id": "ca11-ch10-1m-13",
    "chapterNo": 10,
    "chapterName": "HTML - Structural Tags",
    "chapterNameTamil": "HTML - கட்டமைப்பு குறிச்சொற்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "HTML files must be saved with which file extension?",
    "questionTextTamil": "HTML கோப்புகள் எந்த நீட்டிப்புடன் சேமிக்கப்பட வேண்டும்?",
    "options": {
      "A": ".html or .htm",
      "B": ".doc",
      "C": ".web",
      "D": ".txt"
    },
    "optionsTamil": {
      "A": ".html or .htm",
      "B": ".doc",
      "C": ".web",
      "D": ".txt"
    },
    "correctOption": "A",
    "answer": "A) .html or .htm",
    "answerTamil": "A) .html or .htm",
    "isBookBack": true
  },
  {
    "id": "ca11-ch10-1m-14",
    "chapterNo": 10,
    "chapterName": "HTML - Structural Tags",
    "chapterNameTamil": "HTML - கட்டமைப்பு குறிச்சொற்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which tag is used to write comments in HTML?",
    "questionTextTamil": "HTML-ல் குறிப்புரைகளை (Comments) எழுத பயன்படும் வடிவம் எது?",
    "options": {
      "A": "<!-- comment -->",
      "B": "// comment",
      "C": "/* comment */",
      "D": "# comment"
    },
    "optionsTamil": {
      "A": "<!-- comment -->",
      "B": "// comment",
      "C": "/* comment */",
      "D": "# comment"
    },
    "correctOption": "A",
    "answer": "A) <!-- comment -->",
    "answerTamil": "A) <!-- comment -->",
    "isBookBack": true
  },
  {
    "id": "ca11-ch10-1m-15",
    "chapterNo": 10,
    "chapterName": "HTML - Structural Tags",
    "chapterNameTamil": "HTML - கட்டமைப்பு குறிச்சொற்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which attribute of <body> sets the color of normal unvisited hyperlinks?",
    "questionTextTamil": "பார்வையிடப்படாத இணைப்புகளின் நிறத்தை நிர்ணயிக்கும் பண்புக்கூறு எது?",
    "options": {
      "A": "link",
      "B": "vlink",
      "C": "alink",
      "D": "text"
    },
    "optionsTamil": {
      "A": "link",
      "B": "vlink",
      "C": "alink",
      "D": "text"
    },
    "correctOption": "A",
    "answer": "A) link",
    "answerTamil": "A) link (vlink for visited, alink for active)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch10-2m-1",
    "chapterNo": 10,
    "chapterName": "HTML - Structural Tags",
    "chapterNameTamil": "HTML - கட்டமைப்பு குறிச்சொற்கள்",
    "marks": 2,
    "type": "short",
    "questionText": "What is HTML?",
    "questionTextTamil": "HTML என்றால் என்ன?",
    "answer": "HTML (HyperText Markup Language) is the standard markup language used to structure and format web pages displayed in web browsers.",
    "answerTamil": "HTML (HyperText Markup Language) என்பது இணைய உலாவிகளில் காட்டப்படும் வலைப்பக்கங்களை உருவாக்கப் பயன்படும் நிலையான குறிப்பீட்டு மொழியாகும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch10-2m-2",
    "chapterNo": 10,
    "chapterName": "HTML - Structural Tags",
    "chapterNameTamil": "HTML - கட்டமைப்பு குறிச்சொற்கள்",
    "marks": 2,
    "type": "short",
    "questionText": "What are HTML Tags?",
    "questionTextTamil": "HTML ஒட்டுகள் (Tags) என்றால் என்ன?",
    "answer": "HTML tags are formatted keywords enclosed within angle brackets (e.g. `<p>`, `<h1>`) that instruct the browser on how to display and render text, images, and layout elements.",
    "answerTamil": "HTML ஒட்டுகள் என்பவை கோண அடைப்புக்குறிக்குள் (< >) எழுதப்படும் சிறப்புச் சொற்களாகும்; இவை வலைப்பக்கக் கூறுகளை உலாவியில் எவ்வாறு காட்ட வேண்டும் என்பதைத் தீர்மானிக்கின்றன.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch10-2m-3",
    "chapterNo": 10,
    "chapterName": "HTML - Structural Tags",
    "chapterNameTamil": "HTML - கட்டமைப்பு குறிச்சொற்கள்",
    "marks": 2,
    "type": "short",
    "questionText": "Differentiate Container Tags and Empty Tags in HTML.",
    "questionTextTamil": "கொள்கலன் ஒட்டுகள் (Container) மற்றும் வெற்று ஒட்டுகள் (Empty) - வேறுபடுத்துக.",
    "answer": "• Container Tags: Have both opening and closing tags with enclosed content (e.g. `<html>...</html>`, `<b>...</b>`).\n• Empty Tags: Have only an opening tag and no closing tag (e.g. `<br>`, `<hr>`, `<img>`).",
    "answerTamil": "• கொள்கலன் ஒட்டுகள் (Container): தொடக்க மற்றும் முடிவு ஒட்டுகளைக் கொண்டிருக்கும் (எ.கா: `<p> ... </p>`).\n• வெற்று ஒட்டுகள் (Empty): தொடக்க ஒட்டு மட்டுமே உண்டு, முடிவு ஒட்டு கிடையாது (எ.கா: `<br>`, `<hr>`).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch10-2m-4",
    "chapterNo": 10,
    "chapterName": "HTML - Structural Tags",
    "chapterNameTamil": "HTML - கட்டமைப்பு குறிச்சொற்கள்",
    "marks": 2,
    "type": "short",
    "questionText": "What are HTML Attributes?",
    "questionTextTamil": "HTML பண்புக்கூறுகள் (Attributes) என்றால் என்ன?",
    "answer": "Attributes are special keywords written inside the opening tag (as name=\"value\" pairs) that provide additional configuration and properties to the tag (e.g. `<body bgcolor=\"yellow\">`).",
    "answerTamil": "பண்புக்கூறுகள் என்பவை தொடக்க ஒட்டிற்குள் எழுதப்படும் கூடுதல் அமைப்புகளாகும் (எ.கா: `<body bgcolor=\"blue\">`).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch10-2m-5",
    "chapterNo": 10,
    "chapterName": "HTML - Structural Tags",
    "chapterNameTamil": "HTML - கட்டமைப்பு குறிச்சொற்கள்",
    "marks": 2,
    "type": "short",
    "questionText": "Write the basic structure of an HTML document.",
    "questionTextTamil": "HTML ஆவணத்தின் அடிப்படைக் கட்டமைப்பை எழுதுக.",
    "answer": "```html\n<html>\n  <head>\n    <title>Page Title</title>\n  </head>\n  <body>\n    Content goes here...\n  </body>\n</html>\n```",
    "answerTamil": "```html\n<html>\n  <head>\n    <title>தலைப்பு</title>\n  </head>\n  <body>\n    வலைப்பக்க உள்ளடக்கம்...\n  </body>\n</html>\n```",
    "isBookBack": true
  },
  {
    "id": "ca11-ch10-3m-1",
    "chapterNo": 10,
    "chapterName": "HTML - Structural Tags",
    "chapterNameTamil": "HTML - கட்டமைப்பு குறிச்சொற்கள்",
    "marks": 3,
    "type": "short",
    "questionText": "Explain the Heading tags in HTML with examples.",
    "questionTextTamil": "HTML தலைப்பு ஒட்டுகளை (Heading tags) எடுத்துக்காட்டுடன் விளக்குக.",
    "answer": "HTML provides 6 levels of heading tags:\n• `<h1>`: Largest and most prominent heading.\n• `<h2>` to `<h5>`: Intermediate descending sizes.\n• `<h6>`: Smallest heading.\nExample: `<h1>Main Chapter Title</h1>`",
    "answerTamil": "HTML-ல் 6 நிலைகளில் தலைப்புகள் உள்ளன:\n• `<h1>`: மிகப் பெரிய முதன்மை தலைப்பு.\n• `<h2>` முதல் `<h5>` வரை: நடுத்தர தலைப்புகள்.\n• `<h6>`: மிகச் சிறிய துணைத் தலைப்பு.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch10-3m-2",
    "chapterNo": 10,
    "chapterName": "HTML - Structural Tags",
    "chapterNameTamil": "HTML - கட்டமைப்பு குறிச்சொற்கள்",
    "marks": 3,
    "type": "short",
    "questionText": "Explain the attributes of the <hr> tag.",
    "questionTextTamil": "<hr> ஒட்டின் பண்புக்கூறுகளை விளக்குக.",
    "answer": "1. size: Specifies thickness of the line in pixels (e.g. `size=\"5\"`).\n2. width: Specifies width in pixels or percentage (e.g. `width=\"80%\"`).\n3. color: Sets line color (e.g. `color=\"red\"`).\n4. noshade: Renders a solid flat line without 3D shadow shading.",
    "answerTamil": "1. size: கோட்டின் தடிமன்.\n2. width: கோட்டின் நீளம் (pixels அல்லது %).\n3. color: கோட்டின் நிறம்.\n4. noshade: நிழலற்ற திடமான கோடாகக் காட்டும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch10-3m-3",
    "chapterNo": 10,
    "chapterName": "HTML - Structural Tags",
    "chapterNameTamil": "HTML - கட்டமைப்பு குறிச்சொற்கள்",
    "marks": 3,
    "type": "short",
    "questionText": "Explain the attributes of the <body> tag.",
    "questionTextTamil": "<body> ஒட்டின் பண்புக்கூறுகளை விளக்குக.",
    "answer": "1. `bgcolor`: Sets background color of page (e.g. `bgcolor=\"lightblue\"`).\n2. `background`: Sets an image as page background (e.g. `background=\"bg.jpg\"`).\n3. `text`: Sets color of all body text.\n4. `link`, `vlink`, `alink`: Sets colors for unvisited, visited, and active hyperlinks.",
    "answerTamil": "1. `bgcolor`: பின்னணி நிறம்.\n2. `background`: பின்னணிப் படம்.\n3. `text`: உரையின் நிறம்.\n4. `link`, `vlink`, `alink`: இணைப்புகளின் நிறங்கள்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch10-3m-4",
    "chapterNo": 10,
    "chapterName": "HTML - Structural Tags",
    "chapterNameTamil": "HTML - கட்டமைப்பு குறிச்சொற்கள்",
    "marks": 3,
    "type": "short",
    "questionText": "Explain the Paragraph tag <p> and Line Break tag <br>.",
    "questionTextTamil": "<p> மற்றும் <br> ஒட்டுகளை விளக்குக.",
    "answer": "• `<p>` (Paragraph): Formats a block of text as a paragraph with blank margin spacing automatically added before and after.\n• `<br>` (Line Break): Forces a single line break at that point without inserting a blank paragraph spacing.",
    "answerTamil": "• `<p>` (பத்தி): உரையை ஒரு பத்தியாக அமைத்து மேலும் கீழும் இடைவெளி தரும்.\n• `<br>` (வரி முறிவு): பத்தி இடைவெளியின்றி அடுத்த வரிக்கு உரையை மாற்றும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch10-5m-1",
    "chapterNo": 10,
    "chapterName": "HTML - Structural Tags",
    "chapterNameTamil": "HTML - கட்டமைப்பு குறிச்சொற்கள்",
    "marks": 5,
    "type": "detail",
    "questionText": "Explain the general structure of an HTML document with an example code and explanation of all essential tags.",
    "questionTextTamil": "ஒரு HTML ஆவணத்தின் பொதுவான அமைப்பை எடுத்துக்காட்டு நிரலுடன் விளக்குக.",
    "answer": "General HTML Document Structure:\n\n```html\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>My First Web Page</title>\n  </head>\n  <body bgcolor=\"aliceblue\" text=\"navy\">\n    <h1>Welcome to Higher Secondary Computer Applications</h1>\n    <p>This is my first structured web page in HTML.</p>\n    <hr size=\"3\" color=\"blue\">\n  </body>\n</html>\n```\n\nExplanation of Structural Tags:\n1. `<html> ... </html>`: Root element enclosing entire document.\n2. `<head> ... </head>`: Header section containing meta-information, scripts, styles, and `<title>`.\n3. `<title> ... </title>`: Sets the title displayed on browser tab.\n4. `<body> ... </body>`: Encloses all visual renderable elements (headings, text, images, tables).",
    "answerTamil": "HTML ஆவணத்தின் கட்டமைப்பு:\n\n```html\n<html>\n  <head>\n    <title>என் முதல் வலைப்பக்கம்</title>\n  </head>\n  <body bgcolor=\"lightyellow\">\n    <h1>கணிப்பொறி பயன்பாடுகள்</h1>\n    <p>இது என் முதல் வலைப்பக்கம்.</p>\n  </body>\n</html>\n```\n\nவிளக்கம்:\n1. `<html>`: ஆவணத்தின் தொடக்கம் மற்றும் முடிவு.\n2. `<head>`: ஆவணத்தின் தலைப்புத் தகவல்கள்.\n3. `<title>`: உலாவியின் தலைப்பில் தோன்றும் பெயர்.\n4. `<body>`: திரையில் தெரியும் அனைத்து உள்ளடக்கப் பகுதிகள்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch10-5m-2",
    "chapterNo": 10,
    "chapterName": "HTML - Structural Tags",
    "chapterNameTamil": "HTML - கட்டமைப்பு குறிச்சொற்கள்",
    "marks": 5,
    "type": "detail",
    "questionText": "Explain Heading tags (h1 to h6) and paragraph alignment attributes with suitable HTML code.",
    "questionTextTamil": "தலைப்பு ஒட்டுகள் (h1 to h6) மற்றும் பத்தி சீரமைப்பு பண்புக்கூறுகளை நிரலுடன் விளக்குக.",
    "answer": "Heading Tags & Paragraph Alignments:\n\n1. Heading Tags (h1 through h6):\n- `<h1>` defines largest top-level heading.\n- `<h6>` defines smallest subsection heading.\n- Attribute `align=\"left|center|right|justify\"` controls horizontal alignment.\n\n2. Example HTML Code:\n```html\n<html>\n<head><title>Headings Demo</title></head>\n<body>\n  <h1 align=\"center\">Chapter 10: HTML Structural Tags</h1>\n  <h2 align=\"left\">Section A: Basic Overview</h2>\n  <h3 align=\"right\">Subsection 1</h3>\n  <p align=\"justify\">HTML tags structure the web...</p>\n</body>\n</html>\n```",
    "answerTamil": "1. தலைப்பு ஒட்டுகள்:\n- `<h1>` முதல் `<h6>` வரை ஆறு நிலைகள் உள்ளன.\n- `align` பண்புக்கூறு மூலம் இடது, வலது அல்லது மையத்தில் அமைக்கலாம்.\n\n2. நிரல்:\n```html\n<html>\n<body>\n  <h1 align=\"center\">முதன்மையான தலைப்பு</h1>\n  <h2 align=\"left\">துணைத் தலைப்பு</h2>\n  <p align=\"justify\">பத்தி உரை...</p>\n</body>\n</html>\n```",
    "isBookBack": true
  },
  {
    "id": "ca11-ch11-1m-1",
    "chapterNo": 11,
    "chapterName": "HTML - Formatting text, Creating Tables, List and Links",
    "chapterNameTamil": "HTML - உரை வடிவூட்டல், அட்டவணைகள், பட்டியல் மற்றும் இணைப்புகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which tag is used to make text Bold in HTML?",
    "questionTextTamil": "HTML-ல் உரையை தடிமனாக்க பயன்படும் ஒட்டு எது?",
    "options": {
      "A": "<b> or <strong>",
      "B": "<bold>",
      "C": "<dark>",
      "D": "<big>"
    },
    "optionsTamil": {
      "A": "<b> அல்லது <strong>",
      "B": "<bold>",
      "C": "<dark>",
      "D": "<big>"
    },
    "correctOption": "A",
    "answer": "A) <b> or <strong>",
    "answerTamil": "A) <b> or <strong>",
    "isBookBack": true
  },
  {
    "id": "ca11-ch11-1m-2",
    "chapterNo": 11,
    "chapterName": "HTML - Formatting text, Creating Tables, List and Links",
    "chapterNameTamil": "HTML - உரை வடிவூட்டல், அட்டவணைகள், பட்டியல் மற்றும் இணைப்புகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which tag is used to format text as a Subscript (e.g. H₂O)?",
    "questionTextTamil": "கீழ்ஒட்டாக (Subscript - எ.கா: H₂O) மாற்ற பயன்படும் ஒட்டு எது?",
    "options": {
      "A": "<sub>",
      "B": "<sup>",
      "C": "<subscript>",
      "D": "<down>"
    },
    "optionsTamil": {
      "A": "<sub>",
      "B": "<sup>",
      "C": "<subscript>",
      "D": "<down>"
    },
    "correctOption": "A",
    "answer": "A) <sub>",
    "answerTamil": "A) <sub>",
    "isBookBack": true
  },
  {
    "id": "ca11-ch11-1m-3",
    "chapterNo": 11,
    "chapterName": "HTML - Formatting text, Creating Tables, List and Links",
    "chapterNameTamil": "HTML - உரை வடிவூட்டல், அட்டவணைகள், பட்டியல் மற்றும் இணைப்புகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which tag is used to format text as a Superscript (e.g. A² + B²)?",
    "questionTextTamil": "மேல்ஒட்டாக (Superscript - எ.கா: A²) மாற்ற பயன்படும் ஒட்டு எது?",
    "options": {
      "A": "<sup>",
      "B": "<sub>",
      "C": "<super>",
      "D": "<up>"
    },
    "optionsTamil": {
      "A": "<sup>",
      "B": "<sub>",
      "C": "<super>",
      "D": "<up>"
    },
    "correctOption": "A",
    "answer": "A) <sup>",
    "answerTamil": "A) <sup>",
    "isBookBack": true
  },
  {
    "id": "ca11-ch11-1m-4",
    "chapterNo": 11,
    "chapterName": "HTML - Formatting text, Creating Tables, List and Links",
    "chapterNameTamil": "HTML - உரை வடிவூட்டல், அட்டவணைகள், பட்டியல் மற்றும் இணைப்புகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which tag creates an Unordered (bulleted) List in HTML?",
    "questionTextTamil": "வரிசையற்ற (பொட்டுக்குறி) பட்டியலை உருவாக்க பயன்படும் ஒட்டு எது?",
    "options": {
      "A": "<ol>",
      "B": "<ul>",
      "C": "<li>",
      "D": "<list>"
    },
    "optionsTamil": {
      "A": "<ol>",
      "B": "<ul>",
      "C": "<li>",
      "D": "<list>"
    },
    "correctOption": "B",
    "answer": "B) <ul>",
    "answerTamil": "B) <ul> (Unordered List)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch11-1m-5",
    "chapterNo": 11,
    "chapterName": "HTML - Formatting text, Creating Tables, List and Links",
    "chapterNameTamil": "HTML - உரை வடிவூட்டல், அட்டவணைகள், பட்டியல் மற்றும் இணைப்புகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which tag creates an Ordered (numbered) List in HTML?",
    "questionTextTamil": "வரிசைப்படுத்தப்பட்ட (எண் கொண்ட) பட்டியலை உருவாக்க பயன்படும் ஒட்டு எது?",
    "options": {
      "A": "<ol>",
      "B": "<ul>",
      "C": "<dl>",
      "D": "<nl>"
    },
    "optionsTamil": {
      "A": "<ol>",
      "B": "<ul>",
      "C": "<dl>",
      "D": "<nl>"
    },
    "correctOption": "A",
    "answer": "A) <ol>",
    "answerTamil": "A) <ol> (Ordered List)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch11-1m-6",
    "chapterNo": 11,
    "chapterName": "HTML - Formatting text, Creating Tables, List and Links",
    "chapterNameTamil": "HTML - உரை வடிவூட்டல், அட்டவணைகள், பட்டியல் மற்றும் இணைப்புகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which tag is used to define individual list items inside <ul> or <ol>?",
    "questionTextTamil": "பட்டியல் உருப்படிகளை வரையறுக்க பயன்படும் ஒட்டு எது?",
    "options": {
      "A": "<li>",
      "B": "<item>",
      "C": "<dt>",
      "D": "<ul>"
    },
    "optionsTamil": {
      "A": "<li>",
      "B": "<item>",
      "C": "<dt>",
      "D": "<ul>"
    },
    "correctOption": "A",
    "answer": "A) <li>",
    "answerTamil": "A) <li> (List Item)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch11-1m-7",
    "chapterNo": 11,
    "chapterName": "HTML - Formatting text, Creating Tables, List and Links",
    "chapterNameTamil": "HTML - உரை வடிவூட்டல், அட்டவணைகள், பட்டியல் மற்றும் இணைப்புகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which tag is used to create a Table in HTML?",
    "questionTextTamil": "HTML-ல் அட்டவணையை உருவாக்க பயன்படும் ஒட்டு எது?",
    "options": {
      "A": "<table>",
      "B": "<tbl>",
      "C": "<tr>",
      "D": "<grid>"
    },
    "optionsTamil": {
      "A": "<table>",
      "B": "<tbl>",
      "C": "<tr>",
      "D": "<grid>"
    },
    "correctOption": "A",
    "answer": "A) <table>",
    "answerTamil": "A) <table>",
    "isBookBack": true
  },
  {
    "id": "ca11-ch11-1m-8",
    "chapterNo": 11,
    "chapterName": "HTML - Formatting text, Creating Tables, List and Links",
    "chapterNameTamil": "HTML - உரை வடிவூட்டல், அட்டவணைகள், பட்டியல் மற்றும் இணைப்புகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which tag defines a Table Row in HTML?",
    "questionTextTamil": "அட்டவணை வரிசையை (Table Row) குறிக்கும் ஒட்டு எது?",
    "options": {
      "A": "<tr>",
      "B": "<td>",
      "C": "<th>",
      "D": "<row>"
    },
    "optionsTamil": {
      "A": "<tr>",
      "B": "<td>",
      "C": "<th>",
      "D": "<row>"
    },
    "correctOption": "A",
    "answer": "A) <tr>",
    "answerTamil": "A) <tr> (Table Row)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch11-1m-9",
    "chapterNo": 11,
    "chapterName": "HTML - Formatting text, Creating Tables, List and Links",
    "chapterNameTamil": "HTML - உரை வடிவூட்டல், அட்டவணைகள், பட்டியல் மற்றும் இணைப்புகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which tag is used to create Hyperlinks in HTML?",
    "questionTextTamil": "HTML-ல் மீயிணைப்புகளை (Hyperlink) உருவாக்க பயன்படும் ஒட்டு எது?",
    "options": {
      "A": "<a>",
      "B": "<link>",
      "C": "<href>",
      "D": "<url>"
    },
    "optionsTamil": {
      "A": "<a>",
      "B": "<link>",
      "C": "<href>",
      "D": "<url>"
    },
    "correctOption": "A",
    "answer": "A) <a>",
    "answerTamil": "A) <a> (Anchor tag)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch11-1m-10",
    "chapterNo": 11,
    "chapterName": "HTML - Formatting text, Creating Tables, List and Links",
    "chapterNameTamil": "HTML - உரை வடிவூட்டல், அட்டவணைகள், பட்டியல் மற்றும் இணைப்புகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which attribute of <a> tag specifies the destination URL of the link?",
    "questionTextTamil": "<a> ஒட்டின் இலக்கு வலை முகவரியைக் குறிப்பிடும் பண்புக்கூறு எது?",
    "options": {
      "A": "href",
      "B": "src",
      "C": "link",
      "D": "url"
    },
    "optionsTamil": {
      "A": "href",
      "B": "src",
      "C": "link",
      "D": "url"
    },
    "correctOption": "A",
    "answer": "A) href",
    "answerTamil": "A) href (Hypertext REFerence)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch11-2m-1",
    "chapterNo": 11,
    "chapterName": "HTML - Formatting text, Creating Tables, List and Links",
    "chapterNameTamil": "HTML - உரை வடிவூட்டல், அட்டவணைகள், பட்டியல் மற்றும் இணைப்புகள்",
    "marks": 2,
    "type": "short",
    "questionText": "What are physical and logical style tags in HTML?",
    "questionTextTamil": "மெய் மற்றும் தருக்க பாணி ஒட்டுகள் (Physical and Logical tags) என்றால் என்ன?",
    "answer": "• Physical style tags indicate exact visual formatting (e.g. `<b>` for bold, `<i>` for italic).\n• Logical style tags indicate the structural meaning or emphasis of the content (e.g. `<strong>` for strong emphasis, `<em>` for emphasized text).",
    "answerTamil": "• மெய் பாணி ஒட்டுகள் (Physical tags): நேரடி வடிவூட்டலைத் தரும் (எ.கா: `<b>`, `<i>`).\n• தருக்க பாணி ஒட்டுகள் (Logical tags): உரையின் முக்கியத்துவத்தை உணர்த்தும் (எ.கா: `<strong>`, `<em>`).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch11-2m-2",
    "chapterNo": 11,
    "chapterName": "HTML - Formatting text, Creating Tables, List and Links",
    "chapterNameTamil": "HTML - உரை வடிவூட்டல், அட்டவணைகள், பட்டியல் மற்றும் இணைப்புகள்",
    "marks": 2,
    "type": "short",
    "questionText": "What is the purpose of <font> tag in HTML?",
    "questionTextTamil": "<font> ஒட்டின் பயன் யாது?",
    "answer": "The `<font>` tag is used to change font properties such as typeface (`face`), size (`size`), and color (`color`) for a specific segment of text.",
    "answerTamil": "<font> ஒட்டு உரையின் எழுத்துரு வகை (face), அளவு (size) மற்றும் நிறத்தை (color) மாற்றப் பயன்படுகிறது.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch11-2m-3",
    "chapterNo": 11,
    "chapterName": "HTML - Formatting text, Creating Tables, List and Links",
    "chapterNameTamil": "HTML - உரை வடிவூட்டல், அட்டவணைகள், பட்டியல் மற்றும் இணைப்புகள்",
    "marks": 2,
    "type": "short",
    "questionText": "Name the three types of Lists supported in HTML.",
    "questionTextTamil": "HTML ஆதரிக்கும் மூன்று வகையான பட்டியல்களின் பெயர்களைக் கூறுக.",
    "answer": "1. Numbered / Ordered List (`<ol>`)\n2. Unnumbered / Unordered List (`<ul>`)\n3. Definition / Description List (`<dl>`).",
    "answerTamil": "1. வரிசைப்படுத்தப்பட்ட பட்டியல் (`<ol>`)\n2. வரிசையற்ற பட்டியல் (`<ul>`)\n3. விளக்கப் பட்டியல் (`<dl>`).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch11-2m-4",
    "chapterNo": 11,
    "chapterName": "HTML - Formatting text, Creating Tables, List and Links",
    "chapterNameTamil": "HTML - உரை வடிவூட்டல், அட்டவணைகள், பட்டியல் மற்றும் இணைப்புகள்",
    "marks": 2,
    "type": "short",
    "questionText": "What are <td> and <th> tags in HTML tables?",
    "questionTextTamil": "அட்டவணையில் <td> மற்றும் <th> ஒட்டுகள் என்பவை யாவை?",
    "answer": "• `<th>` (Table Header): Defines bold, center-aligned header cells for table columns/rows.\n• `<td>` (Table Data): Defines standard left-aligned regular data cells.",
    "answerTamil": "• `<th>` (Table Header): அட்டவணையின் தலைப்பு செல் (தடிமனான மற்றும் மைய சீரமைப்பு).\n• `<td>` (Table Data): அட்டவணையின் சாதாரண தரவு செல்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch11-2m-5",
    "chapterNo": 11,
    "chapterName": "HTML - Formatting text, Creating Tables, List and Links",
    "chapterNameTamil": "HTML - உரை வடிவூட்டல், அட்டவணைகள், பட்டியல் மற்றும் இணைப்புகள்",
    "marks": 2,
    "type": "short",
    "questionText": "What are rowspan and colspan attributes in <table>?",
    "questionTextTamil": "rowspan மற்றும் colspan பண்புக்கூறுகள் என்றால் என்ன?",
    "answer": "• `colspan`: Merges two or more horizontal columns into a single cell.\n• `rowspan`: Merges two or more vertical rows into a single cell.",
    "answerTamil": "• `colspan`: இரண்டு அல்லது அதற்கு மேற்பட்ட நெடுவரிசைகளை ஒன்றாக இணைக்கும்.\n• `rowspan`: இரண்டு அல்லது அதற்கு மேற்பட்ட வரிசைகளை ஒன்றாக இணைக்கும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch11-2m-6",
    "chapterNo": 11,
    "chapterName": "HTML - Formatting text, Creating Tables, List and Links",
    "chapterNameTamil": "HTML - உரை வடிவூட்டல், அட்டவணைகள், பட்டியல் மற்றும் இணைப்புகள்",
    "marks": 2,
    "type": "short",
    "questionText": "What is a Hyperlink?",
    "questionTextTamil": "மீயிணைப்பு (Hyperlink) என்றால் என்ன?",
    "answer": "A hyperlink is an interactive clickable reference (text or image) that navigates users directly to another web page, document, or section within the same page when clicked.",
    "answerTamil": "மீயிணைப்பு என்பது கிளிக் செய்யும்போது மற்றொரு வலைப்பக்கத்திற்கோ அல்லது ஆவணத்திற்கோ இட்டுச் செல்லும் சொல்லோ அல்லது படமோ ஆகும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch11-2m-7",
    "chapterNo": 11,
    "chapterName": "HTML - Formatting text, Creating Tables, List and Links",
    "chapterNameTamil": "HTML - உரை வடிவூட்டல், அட்டவணைகள், பட்டியல் மற்றும் இணைப்புகள்",
    "marks": 2,
    "type": "short",
    "questionText": "Differentiate Internal and External Hyperlinks.",
    "questionTextTamil": "உள் மற்றும் வெளி மீயிணைப்புகள் - வேறுபடுத்துக.",
    "answer": "• Internal Link: Links to a bookmark / section inside the exact same webpage (using `#id`).\n• External Link: Links to a completely different webpage or external website URL.",
    "answerTamil": "• உள் இணைப்பு (Internal): அதே வலைப்பக்கத்தின் வேறு பகுதிக்கு இணைக்கும் (`#section`).\n• வெளி இணைப்பு (External): வேறு ஒரு வலைப்பக்கத்திற்கு அல்லது தளத்திற்கு இணைக்கும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch11-2m-8",
    "chapterNo": 11,
    "chapterName": "HTML - Formatting text, Creating Tables, List and Links",
    "chapterNameTamil": "HTML - உரை வடிவூட்டல், அட்டவணைகள், பட்டியல் மற்றும் இணைப்புகள்",
    "marks": 2,
    "type": "short",
    "questionText": "What is the Definition List tag <dl>?",
    "questionTextTamil": "விளக்கப் பட்டியல் (<dl>) என்றால் என்ன?",
    "answer": "A Definition List displays glossary terms (`<dt>`) followed by their indented definitions/descriptions (`<dd>`).",
    "answerTamil": "விளக்கப் பட்டியல் என்பது சொல் (`<dt>`) மற்றும் அதற்கான விளக்கம் (`<dd>`) ஆகியவற்றை வரிசையாகக் காட்டும் பட்டியலாகும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch11-3m-1",
    "chapterNo": 11,
    "chapterName": "HTML - Formatting text, Creating Tables, List and Links",
    "chapterNameTamil": "HTML - உரை வடிவூட்டல், அட்டவணைகள், பட்டியல் மற்றும் இணைப்புகள்",
    "marks": 3,
    "type": "short",
    "questionText": "Explain the text formatting tags <b>, <i>, <u>, <small>, <del>, <mark>.",
    "questionTextTamil": "<b>, <i>, <u>, <small>, <del>, <mark> ஆகிய வடிவூட்டல் ஒட்டுகளை விளக்குக.",
    "answer": "• `<b>`: Renders text in bold.\n• `<i>`: Renders text in italics.\n• `<u>`: Underlines the text.\n• `<small>`: Renders smaller font size.\n• `<del>`: Renders strikethrough text.\n• `<mark>`: Highlights text with yellow background.",
    "answerTamil": "• `<b>`: தடிமனாக்கும்\n• `<i>`: சாய்வாக்கும்\n• `<u>`: அடிக்கோடிடும்\n• `<small>`: சிறியதாக்கும்\n• `<del>`: நடுவில் கோடு கிழிக்கும்\n• `<mark>`: மஞ்சள் வண்ணம் கொண்டு தனித்துக் காட்டும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch11-3m-2",
    "chapterNo": 11,
    "chapterName": "HTML - Formatting text, Creating Tables, List and Links",
    "chapterNameTamil": "HTML - உரை வடிவூட்டல், அட்டவணைகள், பட்டியல் மற்றும் இணைப்புகள்",
    "marks": 3,
    "type": "short",
    "questionText": "Explain the attributes of the <ol> (Ordered List) tag.",
    "questionTextTamil": "<ol> ஒட்டின் பண்புக்கூறுகளை விளக்குக.",
    "answer": "1. `type`: Specifies the numbering style ('1', 'a', 'A', 'i', 'I').\n2. `start`: Defines the starting numeric value for the sequence (e.g. `start=\"5\"`).\n3. `reversed`: Counts down in reverse descending order.",
    "answerTamil": "1. `type`: எண் வகை (1, a, A, i, I).\n2. `start`: பட்டியல் தொடங்கும் எண் (எ.கா: `start=\"5\"`).\n3. `reversed`: தலைகீழ் வரிசையில் எண்களைக் காட்டும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch11-3m-3",
    "chapterNo": 11,
    "chapterName": "HTML - Formatting text, Creating Tables, List and Links",
    "chapterNameTamil": "HTML - உரை வடிவூட்டல், அட்டவணைகள், பட்டியல் மற்றும் இணைப்புகள்",
    "marks": 3,
    "type": "short",
    "questionText": "Explain the attributes of the <ul> (Unordered List) tag.",
    "questionTextTamil": "<ul> ஒட்டின் பண்புக்கூறுகளை விளக்குக.",
    "answer": "The `type` attribute specifies the bullet marker symbol:\n• `type=\"disc\"`: Solid filled circle (default).\n• `type=\"circle\"`: Hollow unfilled circle.\n• `type=\"square\"`: Solid filled square box.",
    "answerTamil": "<ul> ஒட்டின் `type` பண்புக்கூறு பொட்டுக்குறி வடிவத்தைத் தீர்மானிக்கிறது:\n• `type=\"disc\"`: நிரப்பப்பட்ட வட்டம் (முன்னிருப்பு)\n• `type=\"circle\"`: வெற்று வட்டம்\n• `type=\"square\"`: நிரப்பப்பட்ட சதுரம்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch11-3m-4",
    "chapterNo": 11,
    "chapterName": "HTML - Formatting text, Creating Tables, List and Links",
    "chapterNameTamil": "HTML - உரை வடிவூட்டல், அட்டவணைகள், பட்டியல் மற்றும் இணைப்புகள்",
    "marks": 3,
    "type": "short",
    "questionText": "Explain the attributes of <table> tag.",
    "questionTextTamil": "<table> ஒட்டின் பண்புக்கூறுகளை விளக்குக.",
    "answer": "1. `border`: Thickness of grid lines.\n2. `cellpadding`: Spacing between cell boundary and internal text.\n3. `cellspacing`: Spacing between adjacent cells.\n4. `width` & `height`: Table dimensions in pixels or %.\n5. `bgcolor`: Background color of the table.",
    "answerTamil": "1. `border`: கட்டத்தின் தடிமன்.\n2. `cellpadding`: செல் எல்லைக்கும் உரைக்கும் இடையேயான இடைவெளி.\n3. `cellspacing`: அடுத்தடுத்த செல்களுக்கு இடையேயான இடைவெளி.\n4. `bgcolor`: அட்டவணையின் பின்னணி நிறம்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch11-3m-5",
    "chapterNo": 11,
    "chapterName": "HTML - Formatting text, Creating Tables, List and Links",
    "chapterNameTamil": "HTML - உரை வடிவூட்டல், அட்டவணைகள், பட்டியல் மற்றும் இணைப்புகள்",
    "marks": 3,
    "type": "short",
    "questionText": "Write the HTML code to create a Definition List for Hardware and Software.",
    "questionTextTamil": "Hardware மற்றும் Software பற்றிய விளக்கப் பட்டியலை உருவாக்கும் HTML நிரலை எழுதுக.",
    "answer": "```html\n<dl>\n  <dt>Hardware</dt>\n  <dd>The physical electronic components of a computer.</dd>\n  <dt>Software</dt>\n  <dd>A collection of programs and instructions that tell the computer what to do.</dd>\n</dl>\n```",
    "answerTamil": "```html\n<dl>\n  <dt>Hardware</dt>\n  <dd>கணிப்பொறியின் தொட்டுணரக்கூடிய வன்பொருள் பாகங்கள்.</dd>\n  <dt>Software</dt>\n  <dd>கணிப்பொறியை இயக்கும் நிரல்களின் தொகுப்பு.</dd>\n</dl>\n```",
    "isBookBack": true
  },
  {
    "id": "ca11-ch11-3m-6",
    "chapterNo": 11,
    "chapterName": "HTML - Formatting text, Creating Tables, List and Links",
    "chapterNameTamil": "HTML - உரை வடிவூட்டல், அட்டவணைகள், பட்டியல் மற்றும் இணைப்புகள்",
    "marks": 3,
    "type": "short",
    "questionText": "How do you create an Email Link in HTML?",
    "questionTextTamil": "HTML-ல் மின்னஞ்சல் இணைப்பை (Email link) எவ்வாறு உருவாக்குவது?",
    "answer": "Use the `<a>` tag with the `mailto:` URL protocol:\n```html\n<a href=\"mailto:info@school.edu?subject=Inquiry\">Send Email to School</a>\n```\nClicking this opens the user's default email client with recipient and subject prefilled.",
    "answerTamil": "<a> ஒட்டில் `mailto:` நெறிமுறையைப் பயன்படுத்தி மின்னஞ்சல் இணைப்பை உருவாக்கலாம்:\n```html\n<a href=\"mailto:contact@myschool.com\">எங்களை தொடர்பு கொள்ள</a>\n```",
    "isBookBack": true
  },
  {
    "id": "ca11-ch11-5m-1",
    "chapterNo": 11,
    "chapterName": "HTML - Formatting text, Creating Tables, List and Links",
    "chapterNameTamil": "HTML - உரை வடிவூட்டல், அட்டவணைகள், பட்டியல் மற்றும் இணைப்புகள்",
    "marks": 5,
    "type": "detail",
    "questionText": "Explain the various types of Lists available in HTML with syntax and example code.",
    "questionTextTamil": "HTML-ல் உள்ள பல்வேறு வகையான பட்டியல்களை எடுத்துக்காட்டு நிரலுடன் விரிவாக விளக்குக.",
    "answer": "HTML Lists:\n\n1. Ordered List (`<ol>`):\n```html\n<ol type=\"A\" start=\"1\">\n  <li>Input Devices</li>\n  <li>Output Devices</li>\n</ol>\n```\n\n2. Unordered List (`<ul>`):\n```html\n<ul type=\"square\">\n  <li>Monitor</li>\n  <li>Printer</li>\n</ul>\n```\n\n3. Definition List (`<dl>`):\n```html\n<dl>\n  <dt>CPU</dt>\n  <dd>Central Processing Unit</dd>\n  <dt>RAM</dt>\n  <dd>Random Access Memory</dd>\n</dl>\n```\n\n4. Nested Lists: Lists embedded inside other list items.",
    "answerTamil": "1. வரிசைப்படுத்தப்பட்ட பட்டியல் (`<ol>`): எண்கள் அல்லது எழுத்துக்கள் கொண்ட பட்டியல்.\n2. வரிசையற்ற பட்டியல் (`<ul>`): வட்டங்கள் அல்லது சதுரங்கள் கொண்ட பொட்டுக்குறி பட்டியல்.\n3. விளக்கப் பட்டியல் (`<dl>`): சொல் (`<dt>`) மற்றும் விளக்கம் (`<dd>`) கொண்ட பட்டியல்.\n4. பின்னப்பட்ட பட்டியல் (Nested List): ஒரு பட்டியலுக்குள் மற்றொரு பட்டியல்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch11-5m-2",
    "chapterNo": 11,
    "chapterName": "HTML - Formatting text, Creating Tables, List and Links",
    "chapterNameTamil": "HTML - உரை வடிவூட்டல், அட்டவணைகள், பட்டியல் மற்றும் இணைப்புகள்",
    "marks": 5,
    "type": "detail",
    "questionText": "Explain how to create and format a Table in HTML using <table>, <tr>, <th>, <td>, rowspan, and colspan with a complete code example.",
    "questionTextTamil": "<table>, <tr>, <th>, <td>, rowspan மற்றும் colspan ஆகியவற்றைப் பயன்படுத்தி ஒரு முழுமையான அட்டவணையை உருவாக்கும் நிரலை விளக்குக.",
    "answer": "HTML Table Implementation:\n\n```html\n<table border=\"2\" cellpadding=\"8\" cellspacing=\"0\" width=\"80%\" align=\"center\">\n  <caption align=\"top\"><b>Student Marksheet</b></caption>\n  <tr bgcolor=\"#D0E4F5\">\n    <th rowspan=\"2\">Roll No</th>\n    <th rowspan=\"2\">Name</th>\n    <th colspan=\"2\">Marks</th>\n  </tr>\n  <tr bgcolor=\"#D0E4F5\">\n    <th>Theory</th>\n    <th>Practical</th>\n  </tr>\n  <tr>\n    <td>101</td>\n    <td>Anitha</td>\n    <td>68</td>\n    <td>30</td>\n  </tr>\n</table>\n```\n\nKey Concepts:\n- `rowspan=\"2\"`: Combines two vertical cells for Roll No and Name.\n- `colspan=\"2\"`: Spans across Theory and Practical columns.\n- `cellpadding`: Adds internal breathing room inside cells.",
    "answerTamil": "HTML அட்டவணை உருவாக்கம்:\n\n```html\n<table border=\"1\" cellpadding=\"5\" width=\"60%\">\n  <tr>\n    <th rowspan=\"2\">எண்</th>\n    <th colspan=\"2\">மதிப்பெண்</th>\n  </tr>\n  <tr>\n    <th>தியரி</th>\n    <th>பிராக்டிகல்</th>\n  </tr>\n  <tr>\n    <td>1</td>\n    <td>70</td>\n    <td>30</td>\n  </tr>\n</table>\n```",
    "isBookBack": true
  },
  {
    "id": "ca11-ch11-5m-3",
    "chapterNo": 11,
    "chapterName": "HTML - Formatting text, Creating Tables, List and Links",
    "chapterNameTamil": "HTML - உரை வடிவூட்டல், அட்டவணைகள், பட்டியல் மற்றும் இணைப்புகள்",
    "marks": 5,
    "type": "detail",
    "questionText": "Explain Internal Linking and External Linking in HTML with code examples.",
    "questionTextTamil": "HTML-ல் உள் இணைப்பு (Internal) மற்றும் வெளி இணைப்பு (External) ஆகியவற்றை எடுத்துக்காட்டு நிரலுடன் விளக்குக.",
    "answer": "Hyperlinking in HTML:\n\n1. External Linking:\n- Links to other web pages or websites.\n- Code: `<a href=\"https://www.google.com\" target=\"_blank\">Visit Google</a>`\n\n2. Internal Linking (Section Bookmarks within same page):\n- Step 1: Create a bookmark target with an `id` attribute:\n  `<h2 id=\"chap3\">Chapter 3: Computer Organisation</h2>`\n- Step 2: Create a link referencing the id using `#` prefix:\n  `<a href=\"#chap3\">Jump to Chapter 3</a>`\n- Step 3: Return to top link: `<a href=\"#top\">Back to Top</a>`",
    "answerTamil": "1. வெளி இணைப்பு (External Linking):\n`<a href=\"https://www.tnschools.gov.in\">TN Schools</a>`\n\n2. உள் இணைப்பு (Internal Linking):\n- இலக்கு: `<h2 id=\"lesson1\">பாடம் 1</h2>`\n- இணைப்பு: `<a href=\"#lesson1\">பாடம் 1-க்குச் செல்க</a>`",
    "isBookBack": true
  },
  {
    "id": "ca11-ch11-5m-4",
    "chapterNo": 11,
    "chapterName": "HTML - Formatting text, Creating Tables, List and Links",
    "chapterNameTamil": "HTML - உரை வடிவூட்டல், அட்டவணைகள், பட்டியல் மற்றும் இணைப்புகள்",
    "marks": 5,
    "type": "detail",
    "questionText": "Explain the various Text Formatting tags available in HTML with code snippets and visual outputs.",
    "questionTextTamil": "HTML-ல் உள்ள பல்வேறு உரை வடிவூட்டல் ஒட்டுகளை எடுத்துக்காட்டுகளுடன் விளக்குக.",
    "answer": "Text Formatting Tags:\n1. `<b>` & `<strong>`: Bold / Strong text.\n2. `<i>` & `<em>`: Italic / Emphasized text.\n3. `<u>` & `<ins>`: Underlined / Inserted text.\n4. `<del>` & `<s>`: Strikethrough / Deleted text.\n5. `<sup>`: Superscript (e.g. `(a+b)<sup>2</sup>` -> (a+b)²).\n6. `<sub>`: Subscript (e.g. `H<sub>2</sub>SO<sub>4</sub>` -> H₂SO₄).\n7. `<mark>`: Yellow background highlighter.\n8. `<pre>`: Preformatted monospaced text preserving spaces and indentation.",
    "answerTamil": "1. `<b>` / `<strong>`: தடிமன் உரை\n2. `<i>` / `<em>`: சாய்வு உரை\n3. `<u>`: அடிக்கோடிட்ட உரை\n4. `<sup>`: மேல்ஒட்டு (x²)\n5. `<sub>`: கீழ்ஒட்டு (H₂O)\n6. `<mark>`: சிறப்பித்துக் காட்டும் வண்ணம்\n7. `<pre>`: வடிவமைப்பு மாறாத உரை.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch11-5m-5",
    "chapterNo": 11,
    "chapterName": "HTML - Formatting text, Creating Tables, List and Links",
    "chapterNameTamil": "HTML - உரை வடிவூட்டல், அட்டவணைகள், பட்டியல் மற்றும் இணைப்புகள்",
    "marks": 5,
    "type": "detail",
    "questionText": "Write a complete HTML webpage demonstrating nested lists, a styled table, and internal navigation bookmarks.",
    "questionTextTamil": "பின்னப்பட்ட பட்டியல்கள், அட்டவணை மற்றும் உள் இணைப்புகளைக் கொண்ட ஒரு முழுமையான வலைப்பக்க நிரலை எழுதுக.",
    "answer": "Complete HTML Webpage Code:\n\n```html\n<!DOCTYPE html>\n<html>\n<head><title>Tamil Nadu CA Evaluation</title></head>\n<body>\n  <h1 id=\"top\">11th Computer Applications Syllabus</h1>\n  <nav>\n    <a href=\"#syllabus\">View Syllabus</a> | \n    <a href=\"#marks\">Mark Distribution</a>\n  </nav>\n  <hr>\n  \n  <h2 id=\"syllabus\">Syllabus Structure</h2>\n  <ul>\n    <li>Fundamentals\n      <ol type=\"i\">\n        <li>Intro to Computers</li>\n        <li>Number Systems</li>\n      </ol>\n    </li>\n    <li>Web Development\n      <ol type=\"i\">\n        <li>HTML Basics</li>\n        <li>CSS & JavaScript</li>\n      </ol>\n    </li>\n  </ul>\n  \n  <h2 id=\"marks\">Mark Distribution Table</h2>\n  <table border=\"1\" cellpadding=\"6\">\n    <tr><th>Part</th><th>Marks per Q</th><th>Total</th></tr>\n    <tr><td>Part I</td><td>1 Mark</td><td>15</td></tr>\n    <tr><td>Part II</td><td>2 Marks</td><td>12</td></tr>\n    <tr><td>Part III</td><td>3 Marks</td><td>18</td></tr>\n    <tr><td>Part IV</td><td>5 Marks</td><td>25</td></tr>\n  </table>\n  <p><a href=\"#top\">↑ Return to Top</a></p>\n</body>\n</html>\n```",
    "answerTamil": "முழுமையான HTML ஆவணம்: பட்டியல்கள், அட்டவணை மற்றும் உள் இணைப்புகளை உள்ளடக்கியது.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch12-1m-1",
    "chapterNo": 12,
    "chapterName": "HTML - Adding multimedia elements and Forms",
    "chapterNameTamil": "HTML - பல்லூடக கூறுகள் மற்றும் படிவங்களைச் சேர்த்தல்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which tag is used to embed images in an HTML page?",
    "questionTextTamil": "HTML பக்கத்தில் படங்களைச் செருக பயன்படும் ஒட்டு எது?",
    "options": {
      "A": "<img>",
      "B": "<image>",
      "C": "<picture>",
      "D": "<src>"
    },
    "optionsTamil": {
      "A": "<img>",
      "B": "<image>",
      "C": "<picture>",
      "D": "<src>"
    },
    "correctOption": "A",
    "answer": "A) <img>",
    "answerTamil": "A) <img>",
    "isBookBack": true
  },
  {
    "id": "ca11-ch12-1m-2",
    "chapterNo": 12,
    "chapterName": "HTML - Adding multimedia elements and Forms",
    "chapterNameTamil": "HTML - பல்லூடக கூறுகள் மற்றும் படிவங்களைச் சேர்த்தல்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which mandatory attribute of <img> specifies the image file path / URL?",
    "questionTextTamil": "படக் கோப்பின் பாதையைக் குறிப்பிடும் <img> ஒட்டின் கட்டாய பண்புக்கூறு எது?",
    "options": {
      "A": "src",
      "B": "href",
      "C": "link",
      "D": "path"
    },
    "optionsTamil": {
      "A": "src",
      "B": "href",
      "C": "link",
      "D": "path"
    },
    "correctOption": "A",
    "answer": "A) src",
    "answerTamil": "A) src (Source)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch12-1m-3",
    "chapterNo": 12,
    "chapterName": "HTML - Adding multimedia elements and Forms",
    "chapterNameTamil": "HTML - பல்லூடக கூறுகள் மற்றும் படிவங்களைச் சேர்த்தல்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which attribute provides alternative text if the image fails to load?",
    "questionTextTamil": "படம் திரையிடப்பட முடியாத போது மாற்று உரையை வழங்கும் பண்புக்கூறு எது?",
    "options": {
      "A": "alt",
      "B": "title",
      "C": "caption",
      "D": "text"
    },
    "optionsTamil": {
      "A": "alt",
      "B": "title",
      "C": "caption",
      "D": "text"
    },
    "correctOption": "A",
    "answer": "A) alt",
    "answerTamil": "A) alt (Alternative text)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch12-1m-4",
    "chapterNo": 12,
    "chapterName": "HTML - Adding multimedia elements and Forms",
    "chapterNameTamil": "HTML - பல்லூடக கூறுகள் மற்றும் படிவங்களைச் சேர்த்தல்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which HTML5 tag is used to embed audio clips in web pages?",
    "questionTextTamil": "வலைப்பக்கத்தில் ஆடியோ கோப்புகளைச் செருக பயன்படும் HTML5 ஒட்டு எது?",
    "options": {
      "A": "<audio>",
      "B": "<sound>",
      "C": "<music>",
      "D": "<mp3>"
    },
    "optionsTamil": {
      "A": "<audio>",
      "B": "<sound>",
      "C": "<music>",
      "D": "<mp3>"
    },
    "correctOption": "A",
    "answer": "A) <audio>",
    "answerTamil": "A) <audio>",
    "isBookBack": true
  },
  {
    "id": "ca11-ch12-1m-5",
    "chapterNo": 12,
    "chapterName": "HTML - Adding multimedia elements and Forms",
    "chapterNameTamil": "HTML - பல்லூடக கூறுகள் மற்றும் படிவங்களைச் சேர்த்தல்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which HTML5 tag is used to embed video clips in web pages?",
    "questionTextTamil": "வலைப்பக்கத்தில் வீடியோ கோப்புகளைச் செருக பயன்படும் HTML5 ஒட்டு எது?",
    "options": {
      "A": "<video>",
      "B": "<movie>",
      "C": "<media>",
      "D": "<screen>"
    },
    "optionsTamil": {
      "A": "<video>",
      "B": "<movie>",
      "C": "<media>",
      "D": "<screen>"
    },
    "correctOption": "A",
    "answer": "A) <video>",
    "answerTamil": "A) <video>",
    "isBookBack": true
  },
  {
    "id": "ca11-ch12-1m-6",
    "chapterNo": 12,
    "chapterName": "HTML - Adding multimedia elements and Forms",
    "chapterNameTamil": "HTML - பல்லூடக கூறுகள் மற்றும் படிவங்களைச் சேர்த்தல்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which tag is used to collect user inputs via form controls?",
    "questionTextTamil": "பயனர் உள்ளீடுகளைப் பெற பயன்படும் படிவ ஒட்டு எது?",
    "options": {
      "A": "<form>",
      "B": "<input>",
      "C": "<submit>",
      "D": "<data>"
    },
    "optionsTamil": {
      "A": "<form>",
      "B": "<input>",
      "C": "<submit>",
      "D": "<data>"
    },
    "correctOption": "A",
    "answer": "A) <form>",
    "answerTamil": "A) <form>",
    "isBookBack": true
  },
  {
    "id": "ca11-ch12-1m-7",
    "chapterNo": 12,
    "chapterName": "HTML - Adding multimedia elements and Forms",
    "chapterNameTamil": "HTML - பல்லூடக கூறுகள் மற்றும் படிவங்களைச் சேர்த்தல்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which input type creates a single-line hidden password field?",
    "questionTextTamil": "மறைக்கப்பட்ட கடவுச்சொல் உள்ளீட்டுப் புலத்தை உருவாக்கும் வகை எது?",
    "options": {
      "A": "type=\"password\"",
      "B": "type=\"text\"",
      "C": "type=\"hidden\"",
      "D": "type=\"secret\""
    },
    "optionsTamil": {
      "A": "type=\"password\"",
      "B": "type=\"text\"",
      "C": "type=\"hidden\"",
      "D": "type=\"secret\""
    },
    "correctOption": "A",
    "answer": "A) type=\"password\"",
    "answerTamil": "A) type=\"password\"",
    "isBookBack": true
  },
  {
    "id": "ca11-ch12-1m-8",
    "chapterNo": 12,
    "chapterName": "HTML - Adding multimedia elements and Forms",
    "chapterNameTamil": "HTML - பல்லூடக கூறுகள் மற்றும் படிவங்களைச் சேர்த்தல்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which tag is used to create a multi-line text input area in forms?",
    "questionTextTamil": "பல வரிகள் கொண்ட உரை உள்ளீட்டுப் பகுதியை உருவாக்க பயன்படும் ஒட்டு எது?",
    "options": {
      "A": "<textarea>",
      "B": "<input type=\"box\">",
      "C": "<multiline>",
      "D": "<textbox>"
    },
    "optionsTamil": {
      "A": "<textarea>",
      "B": "<input type=\"box\">",
      "C": "<multiline>",
      "D": "<textbox>"
    },
    "correctOption": "A",
    "answer": "A) <textarea>",
    "answerTamil": "A) <textarea>",
    "isBookBack": true
  },
  {
    "id": "ca11-ch12-2m-1",
    "chapterNo": 12,
    "chapterName": "HTML - Adding multimedia elements and Forms",
    "chapterNameTamil": "HTML - பல்லூடக கூறுகள் மற்றும் படிவங்களைச் சேர்த்தல்",
    "marks": 2,
    "type": "short",
    "questionText": "What is the purpose of the <img> tag in HTML?",
    "questionTextTamil": "HTML-ல் <img> ஒட்டின் பயன் யாது?",
    "answer": "The `<img>` tag is an empty element used to embed raster and vector graphic images (JPEG, PNG, GIF, SVG) into a webpage using the `src` attribute.",
    "answerTamil": "<img> ஒட்டு வலைப்பக்கத்தில் புகைப்படங்கள் மற்றும் வரைபடங்களை (JPEG, PNG, GIF) இணைக்கப் பயன்படுகிறது.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch12-2m-2",
    "chapterNo": 12,
    "chapterName": "HTML - Adding multimedia elements and Forms",
    "chapterNameTamil": "HTML - பல்லூடக கூறுகள் மற்றும் படிவங்களைச் சேர்த்தல்",
    "marks": 2,
    "type": "short",
    "questionText": "What is the function of the alt attribute in <img>?",
    "questionTextTamil": "<img> ஒட்டில் alt பண்புக்கூறின் செயல்பாடு யாது?",
    "answer": "The `alt` (alternative text) attribute provides descriptive fallback text if an image cannot be displayed due to slow connection, broken path, or for screen readers used by visually impaired users.",
    "answerTamil": "alt பண்புக்கூறு படம் திரையிடப்படாத போது அல்லது பார்வை குறைபாடு உள்ளவர்களுக்கான ஸ்கிரீன் ரீடரில் மாற்று உரை விளக்கத்தைக் காட்டுகிறது.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch12-2m-3",
    "chapterNo": 12,
    "chapterName": "HTML - Adding multimedia elements and Forms",
    "chapterNameTamil": "HTML - பல்லூடக கூறுகள் மற்றும் படிவங்களைச் சேர்த்தல்",
    "marks": 2,
    "type": "short",
    "questionText": "What is an HTML Form?",
    "questionTextTamil": "HTML படிவம் (Form) என்றால் என்ன?",
    "answer": "An HTML form is a container area containing interactive controls (text boxes, radio buttons, checkboxes, submit buttons) used to collect data from website visitors and submit it to a web server.",
    "answerTamil": "HTML படிவம் என்பது பயனரிடமிருந்து தகவல்களைப் பெற்று (உரைப்பெட்டி, தேர்வுப் பொத்தான் வழியாக) சேவையகத்திற்கு அனுப்ப உதவும் அமைப்பாகும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch12-2m-4",
    "chapterNo": 12,
    "chapterName": "HTML - Adding multimedia elements and Forms",
    "chapterNameTamil": "HTML - பல்லூடக கூறுகள் மற்றும் படிவங்களைச் சேர்த்தல்",
    "marks": 2,
    "type": "short",
    "questionText": "Differentiate Radio buttons and Checkboxes in HTML forms.",
    "questionTextTamil": "ரேடியோ பொத்தான் மற்றும் தேர்வுப்பெட்டி (Checkbox) - வேறுபடுத்துக.",
    "answer": "• Radio Button (`type=\"radio\"`): Allows the user to select only ONE option from a mutually exclusive group.\n• Checkbox (`type=\"checkbox\"`): Allows the user to select multiple options simultaneously.",
    "answerTamil": "• Radio பொத்தான்: கொடுக்கப்பட்ட பல தேர்வுகளில் ஒன்றை மட்டுமே தேர்வு செய்ய முடியும்.\n• Checkbox: ஒரே நேரத்தில் பல தேர்வுகளைத் தேர்ந்தெடுக்க முடியும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch12-2m-5",
    "chapterNo": 12,
    "chapterName": "HTML - Adding multimedia elements and Forms",
    "chapterNameTamil": "HTML - பல்லூடக கூறுகள் மற்றும் படிவங்களைச் சேர்த்தல்",
    "marks": 2,
    "type": "short",
    "questionText": "What is the <select> tag in HTML forms?",
    "questionTextTamil": "படிவங்களில் <select> ஒட்டின் பயன் யாது?",
    "answer": "The `<select>` tag creates a drop-down list box containing multiple `<option>` elements from which the user can choose.",
    "answerTamil": "<select> ஒட்டு பல தேர்வுகளைக் கொண்ட கீழிறங்கு பட்டியலை (Drop-down list) உருவாக்கப் பயன்படுகிறது.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch12-2m-6",
    "chapterNo": 12,
    "chapterName": "HTML - Adding multimedia elements and Forms",
    "chapterNameTamil": "HTML - பல்லூடக கூறுகள் மற்றும் படிவங்களைச் சேர்த்தல்",
    "marks": 2,
    "type": "short",
    "questionText": "What are the action and method attributes of <form> tag?",
    "questionTextTamil": "<form> ஒட்டின் action மற்றும் method பண்புக்கூறுகள் யாவை?",
    "answer": "• `action`: Specifies the backend server URL/script that processes submitted form data.\n• `method`: Specifies the HTTP method used to send data (`GET` or `POST`).",
    "answerTamil": "• `action`: படிவ தரவைச் செயலாக்கும் சர்வர் ஸ்கிரிப்ட்டின் URL.\n• `method`: தரவை அனுப்பும் HTTP முறை (GET அல்லது POST).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch12-3m-1",
    "chapterNo": 12,
    "chapterName": "HTML - Adding multimedia elements and Forms",
    "chapterNameTamil": "HTML - பல்லூடக கூறுகள் மற்றும் படிவங்களைச் சேர்த்தல்",
    "marks": 3,
    "type": "short",
    "questionText": "Explain the attributes of <img> tag (src, alt, width, height, align).",
    "questionTextTamil": "<img> ஒட்டின் பண்புக்கூறுகளை விளக்குக.",
    "answer": "1. `src`: Specifies location / URL of image.\n2. `alt`: Alternative descriptive text.\n3. `width` & `height`: Dimensions in pixels or %.\n4. `border`: Specifies border thickness around the image.\n5. `align`: Aligns image with adjacent text (top, middle, bottom, left, right).",
    "answerTamil": "1. `src`: படத்தின் பாதை.\n2. `alt`: மாற்று உரை.\n3. `width` & `height`: படத்தின் அகலம் மற்றும் உயரம்.\n4. `border`: எல்லைக் கோட்டின் தடிமன்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch12-3m-2",
    "chapterNo": 12,
    "chapterName": "HTML - Adding multimedia elements and Forms",
    "chapterNameTamil": "HTML - பல்லூடக கூறுகள் மற்றும் படிவங்களைச் சேர்த்தல்",
    "marks": 3,
    "type": "short",
    "questionText": "Explain how to embed Audio in HTML5 with an example code.",
    "questionTextTamil": "HTML5-ல் ஆடியோவை எவ்வாறு செருகுவது என்பதை நிரலுடன் விளக்குக.",
    "answer": "```html\n<audio controls autoplay>\n  <source src=\"audio/lesson1.mp3\" type=\"audio/mpeg\">\n  <source src=\"audio/lesson1.ogg\" type=\"audio/ogg\">\n  Your browser does not support the audio element.\n</audio>\n```\nAttributes:\n• `controls`: Displays play, pause, and volume controls.\n• `autoplay`: Starts audio automatically.\n• `loop`: Repeats playback continuously.",
    "answerTamil": "```html\n<audio controls>\n  <source src=\"song.mp3\" type=\"audio/mpeg\">\n  உங்கள் உலாவி ஆடியோவை ஆதரிக்கவில்லை.\n</audio>\n```\n`controls` பண்புக்கூறு இயக்கும் மற்றும் ஒலி அளவுக் கட்டுப்பாடுகளைத் தரும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch12-3m-3",
    "chapterNo": 12,
    "chapterName": "HTML - Adding multimedia elements and Forms",
    "chapterNameTamil": "HTML - பல்லூடக கூறுகள் மற்றும் படிவங்களைச் சேர்த்தல்",
    "marks": 3,
    "type": "short",
    "questionText": "Explain how to embed Video in HTML5 with an example code.",
    "questionTextTamil": "HTML5-ல் வீடியோவை எவ்வாறு செருகுவது என்பதை நிரலுடன் விளக்குக.",
    "answer": "```html\n<video width=\"480\" height=\"320\" controls poster=\"thumbnail.jpg\">\n  <source src=\"video/demo.mp4\" type=\"video/mp4\">\n  <source src=\"video/demo.webm\" type=\"video/webm\">\n  Your browser does not support the video tag.\n</video>\n```\nAttributes:\n• `controls`: Play/pause/fullscreen bar.\n• `poster`: Thumbnail image shown before playback.\n• `width` & `height`: Display video dimensions.",
    "answerTamil": "```html\n<video width=\"400\" height=\"300\" controls>\n  <source src=\"movie.mp4\" type=\"video/mp4\">\n</video>\n```\n`poster` தொடக்க படத்தைக் காட்டும்; `controls` இயக்கு பொத்தான்களைத் தரும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch12-3m-4",
    "chapterNo": 12,
    "chapterName": "HTML - Adding multimedia elements and Forms",
    "chapterNameTamil": "HTML - பல்லூடக கூறுகள் மற்றும் படிவங்களைச் சேர்த்தல்",
    "marks": 3,
    "type": "short",
    "questionText": "Explain the various types of <input> tag in HTML forms.",
    "questionTextTamil": "படிவங்களில் உள்ள <input> ஒட்டின் பல்வேறு வகைகளை விளக்குக.",
    "answer": "1. `type=\"text\"`: Single-line text box.\n2. `type=\"password\"`: Masked characters for password entry.\n3. `type=\"radio\"`: Single-selection radio button.\n4. `type=\"checkbox\"`: Multi-selection checkbox.\n5. `type=\"submit\"`: Button to submit form data.\n6. `type=\"reset\"`: Clears all form fields to defaults.",
    "answerTamil": "1. `type=\"text\"`: உரைப்பெட்டி\n2. `type=\"password\"`: கடவுச்சொல் பெட்டி\n3. `type=\"radio\"`: ஒற்றைத் தேர்வு பொத்தான்\n4. `type=\"checkbox\"`: பல்தேர்வு பெட்டி\n5. `type=\"submit\"`: படிவத்தை அனுப்பும் பொத்தான்\n6. `type=\"reset\"`: படிவத்தை மீட்டமைக்கும் பொத்தான்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch12-3m-5",
    "chapterNo": 12,
    "chapterName": "HTML - Adding multimedia elements and Forms",
    "chapterNameTamil": "HTML - பல்லூடக கூறுகள் மற்றும் படிவங்களைச் சேர்த்தல்",
    "marks": 3,
    "type": "short",
    "questionText": "Write the HTML code to create a dropdown list for selecting a city.",
    "questionTextTamil": "நகரத்தைத் தேர்வு செய்ய கீழிறங்கு பட்டியலை (Dropdown) உருவாக்கும் HTML நிரலை எழுதுக.",
    "answer": "```html\n<label for=\"city\">Select City:</label>\n<select name=\"city\" id=\"city\">\n  <option value=\"chennai\">Chennai</option>\n  <option value=\"madurai\" selected>Madurai</option>\n  <option value=\"coimbatore\">Coimbatore</option>\n  <option value=\"trichy\">Trichy</option>\n</select>\n```",
    "answerTamil": "```html\n<select name=\"city\">\n  <option value=\"chennai\">சென்னை</option>\n  <option value=\"madurai\">மதுரை</option>\n  <option value=\"kovai\">கோயம்புத்தூர்</option>\n</select>\n```",
    "isBookBack": true
  },
  {
    "id": "ca11-ch13-1m-1",
    "chapterNo": 13,
    "chapterName": "CSS - Cascading Style Sheets",
    "chapterNameTamil": "CSS - அடுக்கு பாணி தாள்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "What does CSS stand for?",
    "questionTextTamil": "CSS என்பதன் விரிவாக்கம் என்ன?",
    "options": {
      "A": "Cascading Style Sheets",
      "B": "Computer Style Sheets",
      "C": "Creative Style Sheets",
      "D": "Colorful Style Sheets"
    },
    "optionsTamil": {
      "A": "Cascading Style Sheets",
      "B": "Computer Style Sheets",
      "C": "Creative Style Sheets",
      "D": "Colorful Style Sheets"
    },
    "correctOption": "A",
    "answer": "A) Cascading Style Sheets",
    "answerTamil": "A) Cascading Style Sheets (1996 - Hakon Wium Lie)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch13-1m-2",
    "chapterNo": 13,
    "chapterName": "CSS - Cascading Style Sheets",
    "chapterNameTamil": "CSS - அடுக்கு பாணி தாள்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which tag is used to define Internal CSS inside an HTML document?",
    "questionTextTamil": "HTML ஆவணத்தில் உள்ளமை பாணியை (Internal CSS) வரையறுக்க பயன்படும் ஒட்டு எது?",
    "options": {
      "A": "<style>",
      "B": "<css>",
      "C": "<script>",
      "D": "<link>"
    },
    "optionsTamil": {
      "A": "<style>",
      "B": "<css>",
      "C": "<script>",
      "D": "<link>"
    },
    "correctOption": "A",
    "answer": "A) <style>",
    "answerTamil": "A) <style>",
    "isBookBack": true
  },
  {
    "id": "ca11-ch13-1m-3",
    "chapterNo": 13,
    "chapterName": "CSS - Cascading Style Sheets",
    "chapterNameTamil": "CSS - அடுக்கு பாணி தாள்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Where in an HTML document is the <style> tag typically placed?",
    "questionTextTamil": "<style> ஒட்டு வழக்கமாக ஆவணத்தில் எங்கு வைக்கப்படுகிறது?",
    "options": {
      "A": "Inside <head> section",
      "B": "Inside <body> section",
      "C": "Inside <footer>",
      "D": "At top before <html>"
    },
    "optionsTamil": {
      "A": "<head> பகுதிக்குள்",
      "B": "<body> பகுதிக்குள்",
      "C": "<footer>-ல்",
      "D": "<html>-க்கு முன்"
    },
    "correctOption": "A",
    "answer": "A) Inside <head> section",
    "answerTamil": "A) Inside <head> section",
    "isBookBack": true
  },
  {
    "id": "ca11-ch13-1m-4",
    "chapterNo": 13,
    "chapterName": "CSS - Cascading Style Sheets",
    "chapterNameTamil": "CSS - அடுக்கு பாணி தாள்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which tag is used to link an External CSS file to an HTML document?",
    "questionTextTamil": "வெளிப்புற CSS கோப்பை இணைக்க பயன்படும் ஒட்டு எது?",
    "options": {
      "A": "<link>",
      "B": "<style>",
      "C": "<import>",
      "D": "<href>"
    },
    "optionsTamil": {
      "A": "<link>",
      "B": "<style>",
      "C": "<import>",
      "D": "<href>"
    },
    "correctOption": "A",
    "answer": "A) <link>",
    "answerTamil": "A) <link>",
    "isBookBack": true
  },
  {
    "id": "ca11-ch13-1m-5",
    "chapterNo": 13,
    "chapterName": "CSS - Cascading Style Sheets",
    "chapterNameTamil": "CSS - அடுக்கு பாணி தாள்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which CSS property is used to change the background color of an element?",
    "questionTextTamil": "பின்னணி நிறத்தை மாற்ற உதவும் CSS பண்பு எது?",
    "options": {
      "A": "background-color",
      "B": "color",
      "C": "bgcolor",
      "D": "background-image"
    },
    "optionsTamil": {
      "A": "background-color",
      "B": "color",
      "C": "bgcolor",
      "D": "background-image"
    },
    "correctOption": "A",
    "answer": "A) background-color",
    "answerTamil": "A) background-color",
    "isBookBack": true
  },
  {
    "id": "ca11-ch13-1m-6",
    "chapterNo": 13,
    "chapterName": "CSS - Cascading Style Sheets",
    "chapterNameTamil": "CSS - அடுக்கு பாணி தாள்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which CSS property is used to change the text color?",
    "questionTextTamil": "உரையின் நிறத்தை மாற்ற பயன்படும் CSS பண்பு எது?",
    "options": {
      "A": "color",
      "B": "text-color",
      "C": "font-color",
      "D": "foreground"
    },
    "optionsTamil": {
      "A": "color",
      "B": "text-color",
      "C": "font-color",
      "D": "foreground"
    },
    "correctOption": "A",
    "answer": "A) color",
    "answerTamil": "A) color",
    "isBookBack": true
  },
  {
    "id": "ca11-ch13-1m-7",
    "chapterNo": 13,
    "chapterName": "CSS - Cascading Style Sheets",
    "chapterNameTamil": "CSS - அடுக்கு பாணி தாள்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "In CSS selector rules, which character is used to select elements by ID?",
    "questionTextTamil": "CSS-ல் ID அடிப்படையிலான தேர்வுக்கு பயன்படும் குறியீடு எது?",
    "options": {
      "A": "#",
      "B": ".",
      "C": "*",
      "D": "@"
    },
    "optionsTamil": {
      "A": "#",
      "B": ".",
      "C": "*",
      "D": "@"
    },
    "correctOption": "A",
    "answer": "A) #",
    "answerTamil": "A) # (Hash/Pound)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch13-1m-8",
    "chapterNo": 13,
    "chapterName": "CSS - Cascading Style Sheets",
    "chapterNameTamil": "CSS - அடுக்கு பாணி தாள்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "In CSS selector rules, which character is used to select elements by Class?",
    "questionTextTamil": "CSS-ல் Class அடிப்படையிலான தேர்வுக்கு பயன்படும் குறியீடு எது?",
    "options": {
      "A": ".",
      "B": "#",
      "C": "$",
      "D": "&"
    },
    "optionsTamil": {
      "A": ".",
      "B": "#",
      "C": "$",
      "D": "&"
    },
    "correctOption": "A",
    "answer": "A) .",
    "answerTamil": "A) . (Period/Dot)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch13-1m-9",
    "chapterNo": 13,
    "chapterName": "CSS - Cascading Style Sheets",
    "chapterNameTamil": "CSS - அடுக்கு பாணி தாள்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "What is the file extension for external CSS style files?",
    "questionTextTamil": "வெளிப்புற CSS கோப்பின் நீட்டிப்பு என்ன?",
    "options": {
      "A": ".css",
      "B": ".style",
      "C": ".htm",
      "D": ".stylesheet"
    },
    "optionsTamil": {
      "A": ".css",
      "B": ".style",
      "C": ".htm",
      "D": ".stylesheet"
    },
    "correctOption": "A",
    "answer": "A) .css",
    "answerTamil": "A) .css",
    "isBookBack": true
  },
  {
    "id": "ca11-ch13-1m-10",
    "chapterNo": 13,
    "chapterName": "CSS - Cascading Style Sheets",
    "chapterNameTamil": "CSS - அடுக்கு பாணி தாள்கள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which type of CSS applies styling directly to a single element using the style attribute?",
    "questionTextTamil": "style பண்புக்கூறு மூலம் ஒற்றை உறுப்புக்கு நேரடியாக பாணியைப் பயன்படுத்தும் முறை எது?",
    "options": {
      "A": "Inline CSS",
      "B": "Internal CSS",
      "C": "External CSS",
      "D": "Imported CSS"
    },
    "optionsTamil": {
      "A": "வரிசைமுறை CSS (Inline CSS)",
      "B": "உள்ளமை CSS",
      "C": "வெளிப்புற CSS",
      "D": "இறக்குமதி CSS"
    },
    "correctOption": "A",
    "answer": "A) Inline CSS",
    "answerTamil": "A) வரிசைமுறை CSS (Inline CSS)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch13-2m-1",
    "chapterNo": 13,
    "chapterName": "CSS - Cascading Style Sheets",
    "chapterNameTamil": "CSS - அடுக்கு பாணி தாள்கள்",
    "marks": 2,
    "type": "short",
    "questionText": "What is CSS?",
    "questionTextTamil": "CSS என்றால் என்ன?",
    "answer": "CSS (Cascading Style Sheets) is a style sheet language used to describe the visual presentation, layout, colors, and styling of documents written in HTML.",
    "answerTamil": "CSS (Cascading Style Sheets) என்பது HTML ஆவணங்களின் நிறங்கள், எழுத்துருக்கள் மற்றும் தளவமைப்பு பாணிகளை வடிவமைக்கப் பயன்படும் மொழியாகும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch13-2m-2",
    "chapterNo": 13,
    "chapterName": "CSS - Cascading Style Sheets",
    "chapterNameTamil": "CSS - அடுக்கு பாணி தாள்கள்",
    "marks": 2,
    "type": "short",
    "questionText": "List the three methods of inserting CSS into an HTML document.",
    "questionTextTamil": "HTML ஆவணத்தில் CSS-ஐ இணைக்கும் மூன்று முறைகளைப் பட்டியலிடுக.",
    "answer": "1. Inline CSS (using `style` attribute inside HTML tags).\n2. Internal / Embedded CSS (using `<style>` tag in `<head>`).\n3. External CSS (linking external `.css` file using `<link>`).",
    "answerTamil": "1. வரிசைமுறை CSS (Inline)\n2. உள்ளமை CSS (Internal / Embedded)\n3. வெளிப்புற CSS (External).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch13-2m-3",
    "chapterNo": 13,
    "chapterName": "CSS - Cascading Style Sheets",
    "chapterNameTamil": "CSS - அடுக்கு பாணி தாள்கள்",
    "marks": 2,
    "type": "short",
    "questionText": "What is the general syntax of a CSS Rule?",
    "questionTextTamil": "CSS விதியின் பொதுவான தொடரியலை எழுதுக.",
    "answer": "Syntax:\n```css\nselector {\n  property: value;\n}\n```\nExample:\n```css\nh1 {\n  color: blue;\n  font-size: 24px;\n}\n```",
    "answerTamil": "தொடரியல்:\n```css\nselector {\n  property: value;\n}\n```\nஎடுத்துக்காட்டு: `p { color: red; }`",
    "isBookBack": true
  },
  {
    "id": "ca11-ch13-2m-4",
    "chapterNo": 13,
    "chapterName": "CSS - Cascading Style Sheets",
    "chapterNameTamil": "CSS - அடுக்கு பாணி தாள்கள்",
    "marks": 2,
    "type": "short",
    "questionText": "What is a CSS Selector?",
    "questionTextTamil": "CSS தேர்வி (Selector) என்றால் என்ன?",
    "answer": "A CSS selector is the part of a CSS rule set that targets and selects the specific HTML elements to be styled (e.g. tag selector `p`, class selector `.card`, id selector `#banner`).",
    "answerTamil": "CSS தேர்வி என்பது எந்தெந்த HTML உறுப்புகளுக்கு பாணியைப் பயன்படுத்த வேண்டும் என்பதைத் தேர்வு செய்யும் பகுதியாகும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch13-2m-5",
    "chapterNo": 13,
    "chapterName": "CSS - Cascading Style Sheets",
    "chapterNameTamil": "CSS - அடுக்கு பாணி தாள்கள்",
    "marks": 2,
    "type": "short",
    "questionText": "What are the advantages of using External CSS?",
    "questionTextTamil": "வெளிப்புற CSS-ன் நன்மைகள் யாவை?",
    "answer": "1. Complete separation of document design from HTML content.\n2. Changes in one single `.css` file instantly restyle the entire website.\n3. Cached by browsers, resulting in faster page load speeds.",
    "answerTamil": "1. HTML உள்ளடக்கத்தையும் வடிவமைப்பையும் தனித்தனியாகப் பிரித்து வைக்கலாம்.\n2. ஒரே ஒரு CSS கோப்பை மாற்றுவதன் மூலம் முழு தளத்தின் தோற்றத்தையும் மாற்றலாம்.\n3. பக்கங்கள் வேகமாக ஏற்றப்படும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch13-3m-1",
    "chapterNo": 13,
    "chapterName": "CSS - Cascading Style Sheets",
    "chapterNameTamil": "CSS - அடுக்கு பாணி தாள்கள்",
    "marks": 3,
    "type": "short",
    "questionText": "Differentiate between Inline CSS, Internal CSS, and External CSS.",
    "questionTextTamil": "வரிசைமுறை CSS, உள்ளமை CSS மற்றும் வெளிப்புற CSS - வேறுபடுத்துக.",
    "answer": "• Inline CSS: Written directly inside specific HTML tag using `style=\"...\"` (affects only that single element).\n• Internal CSS: Written inside `<style>` tag within `<head>` (affects elements on that single page).\n• External CSS: Written in a separate `.css` file linked via `<link>` tag (affects multiple web pages across whole website).",
    "answerTamil": "• Inline: குறிப்பிட்ட ஒட்டிற்குள் `style` மூலம் எழுதப்படும் (அந்த ஒரு உறுப்புக்கு மட்டும்).\n• Internal: `<head>`-ல் `<style>` மூலம் எழுதப்படும் (அந்த ஒரு பக்கத்திற்கு மட்டும்).\n• External: தனி `.css` கோப்பாக உருவாக்கப்பட்டு `<link>` மூலம் இணைக்கப்படும் (முழு தளத்திற்கும்).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch13-3m-2",
    "chapterNo": 13,
    "chapterName": "CSS - Cascading Style Sheets",
    "chapterNameTamil": "CSS - அடுக்கு பாணி தாள்கள்",
    "marks": 3,
    "type": "short",
    "questionText": "Explain ID Selector vs Class Selector in CSS with syntax.",
    "questionTextTamil": "ID தேர்வி மற்றும் Class தேர்வி - தொடரியலுடன் விளக்குக.",
    "answer": "• ID Selector (`#`): Targets a unique element with a specific id attribute (must be unique per page).\n```css\n#header {\n  background-color: darkblue;\n}\n```\n• Class Selector (`.`): Targets multiple elements that share the same class name.\n```css\n.highlight {\n  color: crimson;\n  font-weight: bold;\n}\n```",
    "answerTamil": "• ID தேர்வி (`#`): தனித்துவமான ஒரு குறிப்பிட்ட உறுப்பைத் தேர்வு செய்யும் (`#logo`).\n• Class தேர்வி (`.`): ஒரே வகுப்பைக் கொண்ட பல உறுப்புகளுக்குப் பயன்படுத்தலாம் (`.btn`).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch13-3m-3",
    "chapterNo": 13,
    "chapterName": "CSS - Cascading Style Sheets",
    "chapterNameTamil": "CSS - அடுக்கு பாணி தாள்கள்",
    "marks": 3,
    "type": "short",
    "questionText": "Explain font properties in CSS (font-family, font-size, font-style, font-weight).",
    "questionTextTamil": "CSS எழுத்துரு பண்புகளை (font properties) விளக்குக.",
    "answer": "1. `font-family`: Sets the typeface list (e.g. `font-family: Arial, sans-serif;`).\n2. `font-size`: Sets character height (e.g. `font-size: 16px;`).\n3. `font-style`: Specifies italic or normal styling (e.g. `font-style: italic;`).\n4. `font-weight`: Controls thickness/boldness (e.g. `font-weight: bold;` or `700`).",
    "answerTamil": "1. `font-family`: எழுத்துருவின் வகை (Arial, Times New Roman).\n2. `font-size`: எழுத்துருவின் அளவு (16px, 1.2rem).\n3. `font-style`: சாய்வு பாணி (italic, normal).\n4. `font-weight`: எழுத்தின் தடிமன் (bold, 400).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch13-3m-4",
    "chapterNo": 13,
    "chapterName": "CSS - Cascading Style Sheets",
    "chapterNameTamil": "CSS - அடுக்கு பாணி தாள்கள்",
    "marks": 3,
    "type": "short",
    "questionText": "How do you link an External CSS file in an HTML document? Give code snippet.",
    "questionTextTamil": "வெளிப்புற CSS கோப்பை எவ்வாறு இணைப்பது? நிரல் வரிகளைத் தருக.",
    "answer": "Use the `<link>` tag inside the `<head>` section:\n```html\n<head>\n  <title>Styling Page</title>\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"css/styles.css\">\n</head>\n```\nAttributes:\n• `rel=\"stylesheet\"`: Specifies relationship.\n• `type=\"text/css\"`: MIME media type.\n• `href`: Path to stylesheet.",
    "answerTamil": "```html\n<head>\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">\n</head>\n```",
    "isBookBack": true
  },
  {
    "id": "ca11-ch13-5m-1",
    "chapterNo": 13,
    "chapterName": "CSS - Cascading Style Sheets",
    "chapterNameTamil": "CSS - அடுக்கு பாணி தாள்கள்",
    "marks": 5,
    "type": "detail",
    "questionText": "Explain the three methods of implementing CSS in an HTML document with complete examples and syntax.",
    "questionTextTamil": "HTML-ல் CSS-ஐ செயல்படுத்தும் மூன்று வழிகளை முழுமையான எடுத்துக்காட்டுகளுடன் விரிவாக விளக்குக.",
    "answer": "Three Ways to Implement CSS:\n\n1. Inline CSS:\n```html\n<h1 style=\"color:navy; text-align:center;\">Welcome</h1>\n```\n\n2. Internal CSS:\n```html\n<head>\n  <style>\n    body { background-color: #f0f8ff; }\n    p { color: #333; font-size: 16px; line-height: 1.6; }\n  </style>\n</head>\n```\n\n3. External CSS:\n```html\n<head>\n  <link rel=\"stylesheet\" href=\"theme.css\">\n</head>\n```\nIn `theme.css`:\n```css\n.card {\n  background: white;\n  border-radius: 8px;\n  padding: 16px;\n}\n```",
    "answerTamil": "1. வரிசைமுறை (Inline CSS): ஒட்டிற்குள் `style=\"...\"` மூலம்.\n2. உள்ளமை (Internal CSS): `<head>`-ல் `<style>` ஒட்டிற்குள்.\n3. வெளிப்புற (External CSS): தனி `.css` கோப்பாக உருவாக்கி `<link>` மூலம் இணைத்தல்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch13-5m-2",
    "chapterNo": 13,
    "chapterName": "CSS - Cascading Style Sheets",
    "chapterNameTamil": "CSS - அடுக்கு பாணி தாள்கள்",
    "marks": 5,
    "type": "detail",
    "questionText": "Explain CSS Selectors (Element Selector, ID Selector, Class Selector, Universal Selector, Grouping) with syntax and examples.",
    "questionTextTamil": "CSS தேர்வி வகைகளை (Element, ID, Class, Universal, Grouping) எடுத்துக்காட்டுகளுடன் விளக்குக.",
    "answer": "CSS Selector Types:\n\n1. Element (Tag) Selector:\n- `p { color: gray; }` -> Selects all `<p>` tags.\n\n2. ID Selector (`#`):\n- `#main-nav { background: black; }` -> Targets element with `id=\"main-nav\"`.\n\n3. Class Selector (`.`):\n- `.highlight { color: red; }` -> Targets all elements with `class=\"highlight\"`.\n\n4. Universal Selector (`*`):\n- `* { margin: 0; padding: 0; }` -> Targets every element on the entire page.\n\n5. Grouping Selector (`,`):\n- `h1, h2, h3 { font-family: sans-serif; }` -> Applies rules to multiple tags simultaneously.",
    "answerTamil": "1. Element தேர்வி: குறிப்பிட்ட ஒட்டுக்கு (எ.கா: `h1 { color: red; }`).\n2. ID தேர்வி (`#`): தனித்துவமான ID-க்கு (எ.கா: `#top { font-size: 20px; }`).\n3. Class தேர்வி (`.`): குறிப்பிட்ட வகுப்புக்கு (எ.கா: `.btn { padding: 10px; }`).\n4. Universal தேர்வி (`*`): அனைத்து கூறுகளுக்கும்.\n5. Grouping தேர்வி: பல கூறுகளை ஒன்றாக இணைத்து (எ.கா: `h1, h2 { color: blue; }`).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch14-1m-1",
    "chapterNo": 14,
    "chapterName": "Introduction to Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Who developed the JavaScript programming language in 1995?",
    "questionTextTamil": "1995-ல் ஜாவாஸ்கிரிப்ட் நிரலாக்க மொழியை உருவாக்கியவர் யார்?",
    "options": {
      "A": "Brendan Eich",
      "B": "James Gosling",
      "C": "Bjarne Stroustrup",
      "D": "Dennis Ritchie"
    },
    "optionsTamil": {
      "A": "பிரெண்டன் ஐக் (Brendan Eich)",
      "B": "ஜேம்ஸ் கோஸ்லிங்",
      "C": "ஜார்னே ஸ்ட்ரூஸ்ட்ரப்",
      "D": "டென்னிஸ் ரிட்சி"
    },
    "correctOption": "A",
    "answer": "A) Brendan Eich",
    "answerTamil": "A) பிரெண்டன் ஐக் (Brendan Eich - Netscape)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch14-1m-2",
    "chapterNo": 14,
    "chapterName": "Introduction to Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "What was the initial name of JavaScript when first created?",
    "questionTextTamil": "ஜாவாஸ்கிரிப்ட் முதலில் உருவாக்கப்பட்ட போது அதன் பெயர் என்ன?",
    "options": {
      "A": "Mocha / LiveScript",
      "B": "Java",
      "C": "ECMAScript",
      "D": "JScript"
    },
    "optionsTamil": {
      "A": "Mocha / LiveScript",
      "B": "Java",
      "C": "ECMAScript",
      "D": "JScript"
    },
    "correctOption": "A",
    "answer": "A) Mocha / LiveScript",
    "answerTamil": "A) Mocha / LiveScript",
    "isBookBack": true
  },
  {
    "id": "ca11-ch14-1m-3",
    "chapterNo": 14,
    "chapterName": "Introduction to Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which tag is used to embed JavaScript code in an HTML document?",
    "questionTextTamil": "HTML-ல் ஜாவாஸ்கிரிப்ட் நிரலை எழுத பயன்படும் ஒட்டு எது?",
    "options": {
      "A": "<script>",
      "B": "<javascript>",
      "C": "<js>",
      "D": "<code>"
    },
    "optionsTamil": {
      "A": "<script>",
      "B": "<javascript>",
      "C": "<js>",
      "D": "<code>"
    },
    "correctOption": "A",
    "answer": "A) <script>",
    "answerTamil": "A) <script>",
    "isBookBack": true
  },
  {
    "id": "ca11-ch14-1m-4",
    "chapterNo": 14,
    "chapterName": "Introduction to Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which keyword is traditionally used to declare variables in JavaScript?",
    "questionTextTamil": "ஜாவாஸ்கிரிப்டில் மாறிகளை அறிவிக்க பாரம்பரியமாகப் பயன்படும் முக்கிய சொல் எது?",
    "options": {
      "A": "var",
      "B": "dim",
      "C": "int",
      "D": "def"
    },
    "optionsTamil": {
      "A": "var",
      "B": "dim",
      "C": "int",
      "D": "def"
    },
    "correctOption": "A",
    "answer": "A) var",
    "answerTamil": "A) var (var, let, const)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch14-1m-5",
    "chapterNo": 14,
    "chapterName": "Introduction to Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which character is used to terminate statements in JavaScript?",
    "questionTextTamil": "ஜாவாஸ்கிரிப்ட் கூற்றுகளை முடிக்க பயன்படும் குறியீடு எது?",
    "options": {
      "A": ";",
      "B": ":",
      "C": ".",
      "D": ","
    },
    "optionsTamil": {
      "A": ";",
      "B": ":",
      "C": ".",
      "D": ","
    },
    "correctOption": "A",
    "answer": "A) ;",
    "answerTamil": "A) ; (Semicolon)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch14-1m-6",
    "chapterNo": 14,
    "chapterName": "Introduction to Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which method displays a popup alert dialog box with an OK button?",
    "questionTextTamil": "OK பொத்தானுடன் எச்சரிக்கை உரையாடல் பெட்டியைக் காட்டும் செயற்கூறு எது?",
    "options": {
      "A": "alert()",
      "B": "prompt()",
      "C": "confirm()",
      "D": "msg()"
    },
    "optionsTamil": {
      "A": "alert()",
      "B": "prompt()",
      "C": "confirm()",
      "D": "msg()"
    },
    "correctOption": "A",
    "answer": "A) alert()",
    "answerTamil": "A) alert()",
    "isBookBack": true
  },
  {
    "id": "ca11-ch14-1m-7",
    "chapterNo": 14,
    "chapterName": "Introduction to Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which method displays a dialog box with an input text box to prompt user for input?",
    "questionTextTamil": "பயனரிடமிருந்து உள்ளீட்டைப் பெற உதவும் உரையாடல் பெட்டி எது?",
    "options": {
      "A": "prompt()",
      "B": "alert()",
      "C": "confirm()",
      "D": "input()"
    },
    "optionsTamil": {
      "A": "prompt()",
      "B": "alert()",
      "C": "confirm()",
      "D": "input()"
    },
    "correctOption": "A",
    "answer": "A) prompt()",
    "answerTamil": "A) prompt()",
    "isBookBack": true
  },
  {
    "id": "ca11-ch14-1m-8",
    "chapterNo": 14,
    "chapterName": "Introduction to Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which method displays a confirmation dialog with OK and Cancel buttons?",
    "questionTextTamil": "OK மற்றும் Cancel பொத்தான்களைக் கொண்ட உறுதிப்படுத்தல் பெட்டி எது?",
    "options": {
      "A": "confirm()",
      "B": "alert()",
      "C": "prompt()",
      "D": "check()"
    },
    "optionsTamil": {
      "A": "confirm()",
      "B": "alert()",
      "C": "prompt()",
      "D": "check()"
    },
    "correctOption": "A",
    "answer": "A) confirm()",
    "answerTamil": "A) confirm()",
    "isBookBack": true
  },
  {
    "id": "ca11-ch14-1m-9",
    "chapterNo": 14,
    "chapterName": "Introduction to Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which symbol is used for single-line comments in JavaScript?",
    "questionTextTamil": "ஜாவாஸ்கிரிப்டில் ஒற்றை வரி குறிப்புரைக்கு பயன்படும் குறியீடு எது?",
    "options": {
      "A": "//",
      "B": "/*",
      "C": "<!--",
      "D": "#"
    },
    "optionsTamil": {
      "A": "//",
      "B": "/*",
      "C": "<!--",
      "D": "#"
    },
    "correctOption": "A",
    "answer": "A) //",
    "answerTamil": "A) //",
    "isBookBack": true
  },
  {
    "id": "ca11-ch14-1m-10",
    "chapterNo": 14,
    "chapterName": "Introduction to Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which operator is used for modulus (remainder of division) in JavaScript?",
    "questionTextTamil": "மீதியைக் கண்டறியும் மட்டு (Modulus) செயற்குறி எது?",
    "options": {
      "A": "%",
      "B": "/",
      "C": "mod",
      "D": "^"
    },
    "optionsTamil": {
      "A": "%",
      "B": "/",
      "C": "mod",
      "D": "^"
    },
    "correctOption": "A",
    "answer": "A) %",
    "answerTamil": "A) %",
    "isBookBack": true
  },
  {
    "id": "ca11-ch14-1m-11",
    "chapterNo": 14,
    "chapterName": "Introduction to Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "What is the file extension of an external JavaScript file?",
    "questionTextTamil": "வெளிப்புற ஜாவாஸ்கிரிப்ட் கோப்பின் நீட்டிப்பு என்ன?",
    "options": {
      "A": ".js",
      "B": ".java",
      "C": ".jvs",
      "D": ".script"
    },
    "optionsTamil": {
      "A": ".js",
      "B": ".java",
      "C": ".jvs",
      "D": ".script"
    },
    "correctOption": "A",
    "answer": "A) .js",
    "answerTamil": "A) .js",
    "isBookBack": true
  },
  {
    "id": "ca11-ch14-1m-12",
    "chapterNo": 14,
    "chapterName": "Introduction to Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which method writes HTML expressions or text directly into the document?",
    "questionTextTamil": "ஆவணத்தில் நேரடியாக உரையை எழுத உதவும் முறை எது?",
    "options": {
      "A": "document.write()",
      "B": "window.print()",
      "C": "console.log()",
      "D": "document.print()"
    },
    "optionsTamil": {
      "A": "document.write()",
      "B": "window.print()",
      "C": "console.log()",
      "D": "document.print()"
    },
    "correctOption": "A",
    "answer": "A) document.write()",
    "answerTamil": "A) document.write()",
    "isBookBack": true
  },
  {
    "id": "ca11-ch14-1m-13",
    "chapterNo": 14,
    "chapterName": "Introduction to Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Is JavaScript a case-sensitive programming language?",
    "questionTextTamil": "ஜாவாஸ்கிரிப்ட் எழுத்து வடிவுணர்வு (Case-sensitive) கொண்ட மொழியா?",
    "options": {
      "A": "Yes",
      "B": "No",
      "C": "Only for numbers",
      "D": "Only in HTML"
    },
    "optionsTamil": {
      "A": "ஆம் (Yes)",
      "B": "இல்லை",
      "C": "எண்களுக்கு மட்டும்",
      "D": "HTML-ல் மட்டும்"
    },
    "correctOption": "A",
    "answer": "A) Yes",
    "answerTamil": "A) ஆம் (Yes)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch14-1m-14",
    "chapterNo": 14,
    "chapterName": "Introduction to Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் ஓர் அறிமுகம்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which operator checks both value equality and data type equality (strict equality)?",
    "questionTextTamil": "மதிப்பு மற்றும் தரவு வகை இரண்டையும் ஒப்பிடும் கண்டிப்பான சமநிலை செயற்குறி எது?",
    "options": {
      "A": "===",
      "B": "==",
      "C": "=",
      "D": "!=="
    },
    "optionsTamil": {
      "A": "===",
      "B": "==",
      "C": "=",
      "D": "!=="
    },
    "correctOption": "A",
    "answer": "A) ===",
    "answerTamil": "A) === (Strict Equality)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch14-2m-1",
    "chapterNo": 14,
    "chapterName": "Introduction to Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "What is JavaScript?",
    "questionTextTamil": "ஜாவாஸ்கிரிப்ட் என்றால் என்ன?",
    "answer": "JavaScript is a lightweight, interpreted or Just-In-Time compiled programming language used to create dynamic, interactive, and responsive web pages on client web browsers.",
    "answerTamil": "ஜாவாஸ்கிரிப்ட் என்பது இணைய உலாவிகளில் இயக்கப்படக்கூடிய, வலைப்பக்கங்களுக்கு இயங்குநிலை மற்றும் ஊடாடும் திறனை வழங்கும் நிரலாக்க மொழியாகும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch14-2m-2",
    "chapterNo": 14,
    "chapterName": "Introduction to Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "What is a Variable in JavaScript?",
    "questionTextTamil": "ஜாவாஸ்கிரிப்டில் மாறி (Variable) என்றால் என்ன?",
    "answer": "A variable is a named memory location used to store data values that can be read, manipulated, and modified during program execution (declared using `var`, `let`, or `const`).",
    "answerTamil": "மாறி என்பது நிரல் இயக்கத்தின் போது மாற்றக்கூடிய தரவு மதிப்புகளை நினைவகத்தில் சேமித்து வைக்கும் ஒரு பெயரிடப்பட்ட இடமாகும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch14-2m-3",
    "chapterNo": 14,
    "chapterName": "Introduction to Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "List the primitive data types in JavaScript.",
    "questionTextTamil": "ஜாவாஸ்கிரிப்டில் உள்ள அடிப்படை தரவு வகைகளைப் பட்டியலிடுக.",
    "answer": "1. Number (integers & floating-point numbers)\n2. String (text enclosed in quotes)\n3. Boolean (`true` or `false`)\n4. Undefined (unassigned variable)\n5. Null (intentional empty value).",
    "answerTamil": "1. Number (எண்கள்)\n2. String (உரை)\n3. Boolean (மெய்/பொய்)\n4. Undefined (வரையறுக்கப்படாதது)\n5. Null (வெற்று மதிப்பு).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch14-2m-4",
    "chapterNo": 14,
    "chapterName": "Introduction to Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "What are Dialog Boxes in JavaScript?",
    "questionTextTamil": "ஜாவாஸ்கிரிப்டில் உரையாடல் பெட்டிகள் (Dialog boxes) என்பவை யாவை?",
    "answer": "Dialog boxes are built-in popup windows used to interact with users. The three types are:\n1. `alert()`: Shows information to the user.\n2. `prompt()`: Gets input from the user.\n3. `confirm()`: Asks for user confirmation (OK/Cancel).",
    "answerTamil": "உரையாடல் பெட்டிகள் என்பது பயனருடன் தொடர்புகொள்ள உதவும் பாப்-அப் சாளரங்கள் ஆகும்:\n1. `alert()`\n2. `prompt()`\n3. `confirm()`.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch14-2m-5",
    "chapterNo": 14,
    "chapterName": "Introduction to Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "What is an Operator in JavaScript?",
    "questionTextTamil": "ஜாவாஸ்கிரிப்டில் செயற்குறி (Operator) என்றால் என்ன?",
    "answer": "An operator is a special symbol (like `+`, `-`, `*`, `==`) that performs operations on one or more operands (variables or values) and produces a result.",
    "answerTamil": "செயற்குறி என்பது மாறிகள் அல்லது மதிப்புகளின் மீது கணித மற்றும் தர்க்க செயல்பாடுகளைச் செய்து முடிவை வழங்கும் குறியீடாகும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch14-2m-6",
    "chapterNo": 14,
    "chapterName": "Introduction to Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "What is the typeof operator?",
    "questionTextTamil": "typeof செயற்குறியின் பயன் யாது?",
    "answer": "The `typeof` operator evaluates and returns a string indicating the data type of the given operand (e.g. `typeof 42` returns `\"number\"`, `typeof \"hello\"` returns `\"string\"`).",
    "answerTamil": "`typeof` செயற்குறி ஒரு மாறியின் அல்லது மதிப்பின் தரவு வகை என்ன என்பதைத் தெரிவிக்கும் (எ.கா: `typeof 25` -> `number`).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch14-2m-7",
    "chapterNo": 14,
    "chapterName": "Introduction to Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "What are Comments in JavaScript?",
    "questionTextTamil": "ஜாவாஸ்கிரிப்டில் குறிப்புரைகள் (Comments) என்றால் என்ன?",
    "answer": "Comments are explanatory notes in code ignored by the JavaScript engine:\n• Single-line: `// comment`\n• Multi-line: `/* comment */`",
    "answerTamil": "குறிப்புரைகள் என்பது நிரலைப் புரிந்துகொள்ள உதவும் வரிகள் ஆகும்; இவை உலாவியால் இயக்கப்படாது (`//` மற்றும் `/* */`).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch14-2m-8",
    "chapterNo": 14,
    "chapterName": "Introduction to Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "Differentiate == and === in JavaScript.",
    "questionTextTamil": "== மற்றும் === - வேறுபடுத்துக.",
    "answer": "• `==` (Loose Equality): Compares value with automatic type coercion (e.g. `5 == \"5\"` is `true`).\n• `===` (Strict Equality): Compares both value and data type without coercion (e.g. `5 === \"5\"` is `false`).",
    "answerTamil": "• `==`: மதிப்பை மட்டும் ஒப்பிடும் (வகை மாற்றம் செய்யும்).\n• `===`: மதிப்பு மற்றும் தரவு வகை இரண்டையும் துல்லியமாக ஒப்பிடும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch14-2m-9",
    "chapterNo": 14,
    "chapterName": "Introduction to Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் ஓர் அறிமுகம்",
    "marks": 2,
    "type": "short",
    "questionText": "What is String Concatenation operator in JavaScript?",
    "questionTextTamil": "ஜாவாஸ்கிரிப்டில் சரம் இணைக்கும் செயற்குறி எது?",
    "answer": "The plus (`+`) operator is used for string concatenation to join two or more text strings together (e.g., `\"Hello \" + \"World\"` gives `\"Hello World\"`).",
    "answerTamil": "கூட்டல் (`+`) செயற்குறி இரண்டு அல்லது அதற்கு மேற்பட்ட சரங்களை (Strings) ஒன்றாக இணைக்கப் பயன்படுகிறது.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch14-3m-1",
    "chapterNo": 14,
    "chapterName": "Introduction to Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் ஓர் அறிமுகம்",
    "marks": 3,
    "type": "short",
    "questionText": "Explain the rules for naming variables (Identifiers) in JavaScript.",
    "questionTextTamil": "ஜாவாஸ்கிரிப்டில் மாறிகளுக்கு பெயரிடுவதற்கான விதிகளை விளக்குக.",
    "answer": "1. Must begin with a letter (A-Z, a-z), underscore (`_`), or dollar sign (`$`).\n2. Cannot begin with a numeric digit (0-9).\n3. Are case-sensitive (`totalMarks` and `totalmarks` are distinct).\n4. Cannot use reserved keywords (like `var`, `if`, `for`, `function`).\n5. Cannot contain spaces or special punctuation characters.",
    "answerTamil": "1. எழுத்து (A-Z, a-z), அடிக்கோடு (`_`) அல்லது `$` கொண்டு தொடங்க வேண்டும்.\n2. எண்ணில் தொடங்கக்கூடாது.\n3. எழுத்து வடிவுணர்வு கொண்டது (Case-sensitive).\n4. சிறப்புச் சொற்களைப் (Keywords) பெயராகப் பயன்படுத்தக் கூடாது.\n5. இடைவெளி இருக்கக்கூடாது.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch14-3m-2",
    "chapterNo": 14,
    "chapterName": "Introduction to Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் ஓர் அறிமுகம்",
    "marks": 3,
    "type": "short",
    "questionText": "Explain the three types of Dialog Boxes in JavaScript with syntax.",
    "questionTextTamil": "ஜாவாஸ்கிரிப்டில் உள்ள மூன்று வகையான உரையாடல் பெட்டிகளை விளக்குக.",
    "answer": "1. Alert Box: `alert(\"Message text\");`\n- Displays warning message with OK button.\n\n2. Prompt Box: `var name = prompt(\"Enter name:\", \"default\");`\n- Requests user textual input.\n\n3. Confirm Box: `var result = confirm(\"Are you sure?\");`\n- Returns `true` if user clicks OK, `false` if user clicks Cancel.",
    "answerTamil": "1. Alert பெட்டி: `alert(\"எச்சரிக்கை!\");` - செய்தியைக் காட்டும்.\n2. Prompt பெட்டி: `prompt(\"பெயரை உள்ளிடவும்:\");` - உள்ளீட்டைப் பெறும்.\n3. Confirm பெட்டி: `confirm(\"உறுதிப்படுத்தவா?\");` - ஆம்/இல்லை தேர்வு.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch14-3m-3",
    "chapterNo": 14,
    "chapterName": "Introduction to Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் ஓர் அறிமுகம்",
    "marks": 3,
    "type": "short",
    "questionText": "Explain Arithmetic Operators in JavaScript with examples.",
    "questionTextTamil": "ஜாவாஸ்கிரிப்டில் கணிதச் செயற்குறிகளை எடுத்துக்காட்டுகளுடன் விளக்குக.",
    "answer": "• `+` (Addition): `5 + 3 = 8`\n• `-` (Subtraction): `10 - 4 = 6`\n• `*` (Multiplication): `4 * 3 = 12`\n• `/` (Division): `15 / 3 = 5`\n• `%` (Modulus/Remainder): `14 % 4 = 2`\n• `++` (Increment): `x++` increases x by 1\n• `--` (Decrement): `x--` decreases x by 1",
    "answerTamil": "• `+` கூட்டல், `-` கழித்தல், `*` பெருக்கல், `/` வகுத்தல், `%` மட்டு (மீதி), `++` மிகுத்தல், `--` குறைத்தல்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch14-3m-4",
    "chapterNo": 14,
    "chapterName": "Introduction to Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் ஓர் அறிமுகம்",
    "marks": 3,
    "type": "short",
    "questionText": "Explain Relational (Comparison) Operators in JavaScript.",
    "questionTextTamil": "ஒப்பீட்டுச் செயற்குறிகளை (Relational operators) விளக்குக.",
    "answer": "• `==`: Equal to (`5 == '5'` -> true)\n• `===`: Strict equal to value & type (`5 === '5'` -> false)\n• `!=`: Not equal to\n• `!==`: Strict not equal to\n• `>`: Greater than\n• `<`: Less than\n• `>=`: Greater than or equal to\n• `<=`: Less than or equal to",
    "answerTamil": "• `==` சமம், `===` கண்டிப்பான சமம், `!=` சமமில்லை, `>` பெரியது, `<` சிறியது, `>=` பெரியது அல்லது சமம், `<=` சிறியது அல்லது சமம்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch14-3m-5",
    "chapterNo": 14,
    "chapterName": "Introduction to Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் ஓர் அறிமுகம்",
    "marks": 3,
    "type": "short",
    "questionText": "Explain Logical Operators in JavaScript.",
    "questionTextTamil": "தர்க்கச் செயற்குறிகளை (Logical operators) விளக்குக.",
    "answer": "1. Logical AND (`&&`): Returns true if BOTH operands are true (`(5 > 2) && (10 > 5)` -> true).\n2. Logical OR (`||`): Returns true if AT LEAST ONE operand is true (`(5 < 2) || (10 > 5)` -> true).\n3. Logical NOT (`!`): Inverts the boolean truth value (`!(5 > 2)` -> false).",
    "answerTamil": "1. Logical AND (`&&`): இரண்டு நிபந்தனைகளும் மெய்யாக இருந்தால் மெய்.\n2. Logical OR (`||`): ஏதேனும் ஒரு நிபந்தனை மெய்யாக இருந்தாலும் மெய்.\n3. Logical NOT (`!`): நிபந்தனையின் முடிவை தலைகீழாக மாற்றும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch14-3m-6",
    "chapterNo": 14,
    "chapterName": "Introduction to Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் ஓர் அறிமுகம்",
    "marks": 3,
    "type": "short",
    "questionText": "What is the Conditional (Ternary) Operator? Give an example.",
    "questionTextTamil": "நிபந்தனைச் செயற்குறி (Ternary operator) என்றால் என்ன? எடுத்துக்காட்டு தருக.",
    "answer": "The ternary operator `? :` takes three operands as a shorthand for an `if-else` statement.\nSyntax: `condition ? expression_if_true : expression_if_false;`\nExample:\n```javascript\nvar result = (marks >= 35) ? \"Pass\" : \"Fail\";\n```",
    "answerTamil": "நிபந்தனைச் செயற்குறி `? :` என்பது `if-else` கூற்றின் சுருக்க வடிவமாகும்.\nதொடரியல்: `நிபந்தனை ? மெய்_கூற்று : பொய்_கூற்று;`\nஎடுத்துக்காட்டு: `var status = (age >= 18) ? \"தகுதியுடையவர்\" : \"தகுதியற்றவர்\";`",
    "isBookBack": true
  },
  {
    "id": "ca11-ch14-5m-1",
    "chapterNo": 14,
    "chapterName": "Introduction to Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் ஓர் அறிமுகம்",
    "marks": 5,
    "type": "detail",
    "questionText": "Explain the various Operators supported in JavaScript with suitable examples.",
    "questionTextTamil": "ஜாவாஸ்கிரிப்டில் ஆதரிக்கப்படும் பல்வேறு செயற்குறிகளை தகுந்த எடுத்துக்காட்டுகளுடன் விளக்குக.",
    "answer": "JavaScript Operators:\n\n1. Arithmetic Operators:\n- `+`, `-`, `*`, `/`, `%` (Modulus), `++` (Increment), `--` (Decrement).\n\n2. Assignment Operators:\n- `=`, `+=`, `-=`, `*=`, `/=`, `%=`.\n\n3. Relational / Comparison Operators:\n- `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`.\n\n4. Logical Operators:\n- `&&` (AND), `||` (OR), `!` (NOT).\n\n5. Conditional (Ternary) Operator:\n- `(age >= 18) ? \"Adult\" : \"Minor\"`.\n\n6. String Concatenation Operator:\n- `\"Hello \" + \"World\"`.",
    "answerTamil": "1. கணிதச் செயற்குறிகள்: `+`, `-`, `*`, `/`, `%`, `++`, `--`.\n2. மதிப்பிருத்தல் செயற்குறிகள்: `=`, `+=`, `-=`, `*=`.\n3. ஒப்பீட்டுச் செயற்குறிகள்: `==`, `===`, `!=`, `>`, `<`, `>=`, `<=`.\n4. தர்க்கச் செயற்குறிகள்: `&&`, `||`, `!`.\n5. நிபந்தனைச் செயற்குறி: `? :`.\n6. சரம் இணைக்கும் செயற்குறி: `+`.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch14-5m-2",
    "chapterNo": 14,
    "chapterName": "Introduction to Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் ஓர் அறிமுகம்",
    "marks": 5,
    "type": "detail",
    "questionText": "Explain the three Dialog Boxes in JavaScript and write a program using prompt() to calculate simple interest.",
    "questionTextTamil": "ஜாவாஸ்கிரிப்டில் உள்ள மூன்று உரையாடல் பெட்டிகளை விளக்கி, prompt() மூலம் எளிய வட்டி கணக்கிடும் நிரலை எழுதுக.",
    "answer": "JavaScript Dialog Boxes & Simple Interest Program:\n\n1. Dialog Boxes:\n- `alert()`: Displays informative message to user.\n- `prompt()`: Accepts text input from user.\n- `confirm()`: Asks user for confirmation (true/false).\n\n2. Program Code:\n```html\n<script>\n  var p = parseFloat(prompt(\"Enter Principal Amount:\"));\n  var n = parseFloat(prompt(\"Enter Number of Years:\"));\n  var r = parseFloat(prompt(\"Enter Rate of Interest (%):\"));\n  \n  var si = (p * n * r) / 100;\n  alert(\"Simple Interest is: Rs. \" + si);\n  document.write(\"<h3>Principal: Rs. \" + p + \"</h3>\");\n  document.write(\"<h3>Simple Interest: Rs. \" + si + \"</h3>\");\n</script>\n```",
    "answerTamil": "ஜாவாஸ்கிரிப்ட் உரையாடல் பெட்டிகள் மற்றும் தனிவட்டி நிரல்:\n1. `alert()`: தகவலைக் காட்டும்.\n2. `prompt()`: உள்ளீட்டைப் பெறும்.\n3. `confirm()`: உறுதிப்படுத்தும்.\n\nநிரல்:\n```html\n<script>\n  var p = parseFloat(prompt(\"அசல் தொகையை உள்ளிடவும்:\"));\n  var n = parseFloat(prompt(\"ஆண்டுகள்:\"));\n  var r = parseFloat(prompt(\"வட்டி விகிதம்:\"));\n  var si = (p * n * r) / 100;\n  alert(\"தனிவட்டி: ரூ. \" + si);\n</script>\n```",
    "isBookBack": true
  },
  {
    "id": "ca11-ch15-1m-1",
    "chapterNo": 15,
    "chapterName": "Control Structure in Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் கட்டுப்பாட்டு கட்டமைப்புகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which conditional statement is used to transfer control from the current statement to another statement?",
    "questionTextTamil": "தற்போதைய கூற்றிலிருந்து மற்றொரு கூற்றுக்கு கட்டுப்பாட்டை மாற்ற பயன்படும் நிபந்தனைக் கூற்று எது?",
    "options": {
      "A": "Branching",
      "B": "Sequencing",
      "C": "Looping",
      "D": "Iterating"
    },
    "optionsTamil": {
      "A": "கிளைப்பிரித்தல் (Branching)",
      "B": "வரிசைப்படுத்துதல் (Sequencing)",
      "C": "மடக்குதல் (Looping)",
      "D": "மறு செய்கை (Iterating)"
    },
    "correctOption": "A",
    "answer": "A) Branching",
    "answerTamil": "A) கிளைப்பிரித்தல் (Branching)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch15-1m-2",
    "chapterNo": 15,
    "chapterName": "Control Structure in Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் கட்டுப்பாட்டு கட்டமைப்புகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which statement can be used as an alternative to the if-else statement?",
    "questionTextTamil": "if-else கூற்றுக்கு மாற்றாகப் பயன்படுத்தக்கூடிய கூற்று எது?",
    "options": {
      "A": "While",
      "B": "If",
      "C": "Else-if",
      "D": "Switch"
    },
    "optionsTamil": {
      "A": "While",
      "B": "If",
      "C": "Else-if",
      "D": "Switch"
    },
    "correctOption": "D",
    "answer": "D) Switch",
    "answerTamil": "D) Switch",
    "isBookBack": true
  },
  {
    "id": "ca11-ch15-1m-3",
    "chapterNo": 15,
    "chapterName": "Control Structure in Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் கட்டுப்பாட்டு கட்டமைப்புகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which statement in a switch case is used to exit the statement once the appropriate choice is found?",
    "questionTextTamil": "switch case-ல் பொருத்தமான தேர்வு கிடைத்தவுடன் அக்கூற்றை விட்டு வெளியேற பயன்படும் கூற்று எது?",
    "options": {
      "A": "Exit",
      "B": "Default",
      "C": "Case",
      "D": "Break"
    },
    "optionsTamil": {
      "A": "Exit",
      "B": "Default",
      "C": "Case",
      "D": "Break"
    },
    "correctOption": "D",
    "answer": "D) Break",
    "answerTamil": "D) Break",
    "isBookBack": true
  },
  {
    "id": "ca11-ch15-1m-4",
    "chapterNo": 15,
    "chapterName": "Control Structure in Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் கட்டுப்பாட்டு கட்டமைப்புகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which of the following is not a looping statement in JavaScript?",
    "questionTextTamil": "பின்வருவனவற்றுள் எது ஜாவாஸ்கிரிப்ட்டில் ஒரு மடக்கு கூற்று அல்ல?",
    "options": {
      "A": "Switch",
      "B": "While",
      "C": "Do-While",
      "D": "For"
    },
    "optionsTamil": {
      "A": "Switch",
      "B": "While",
      "C": "Do-While",
      "D": "For"
    },
    "correctOption": "A",
    "answer": "A) Switch",
    "answerTamil": "A) Switch",
    "isBookBack": true
  },
  {
    "id": "ca11-ch15-1m-5",
    "chapterNo": 15,
    "chapterName": "Control Structure in Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் கட்டுப்பாட்டு கட்டமைப்புகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which part of a loop statement determines the number of times the loop will be iterated?",
    "questionTextTamil": "மடக்கு எத்தனை முறை சுழல வேண்டும் என்பதை தீர்மானிக்கும் பகுதி எது?",
    "options": {
      "A": "First",
      "B": "Second",
      "C": "Third",
      "D": "Final"
    },
    "optionsTamil": {
      "A": "முதல்",
      "B": "இரண்டாவது (Second)",
      "C": "மூன்றாவது",
      "D": "இறுதி"
    },
    "correctOption": "B",
    "answer": "B) Second",
    "answerTamil": "B) இரண்டாவது (Second)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch15-1m-6",
    "chapterNo": 15,
    "chapterName": "Control Structure in Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் கட்டுப்பாட்டு கட்டமைப்புகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which of the following is not a branching statement?",
    "questionTextTamil": "பின்வருவனவற்றுள் எது கிளைப்பிரித்தல் கூற்று அல்ல?",
    "options": {
      "A": "Loop",
      "B": "If-else",
      "C": "Switch",
      "D": "For"
    },
    "optionsTamil": {
      "A": "Loop",
      "B": "If-else",
      "C": "Switch",
      "D": "For"
    },
    "correctOption": "A",
    "answer": "A) Loop",
    "answerTamil": "A) Loop",
    "isBookBack": true
  },
  {
    "id": "ca11-ch15-1m-7",
    "chapterNo": 15,
    "chapterName": "Control Structure in Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் கட்டுப்பாட்டு கட்டமைப்புகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "What will be the output for the following snippet:\nfor (var n=0; n<10; n+1)\n{\n if (n==3) { break; }\n document.write(n+'<br>');\n}",
    "questionTextTamil": "பின்வரும் குறிமுறைக்கு வெளியீடு என்ன:\nfor (var n=0; n<10; n+1)\n{\n if (n==3) { break; }\n document.write(n+'<br>');\n}",
    "options": {
      "A": "0 1 2",
      "B": "0 1 2 3",
      "C": "0 1 2 3 4",
      "D": "0, 1, 3"
    },
    "optionsTamil": {
      "A": "0 1 2",
      "B": "0 1 2 3",
      "C": "0 1 2 3 4",
      "D": "0, 1, 3"
    },
    "correctOption": "A",
    "answer": "A) 0 1 2",
    "answerTamil": "A) 0 1 2",
    "isBookBack": true
  },
  {
    "id": "ca11-ch15-1m-8",
    "chapterNo": 15,
    "chapterName": "Control Structure in Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் கட்டுப்பாட்டு கட்டமைப்புகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "In which loop is the condition evaluated before executing the loop body statement?",
    "questionTextTamil": "மடக்கு உடற்பகுதி இயக்கப்படுவதற்கு முன்னரே நிபந்தனை சரிபார்க்கப்படும் மடக்கு எது?",
    "options": {
      "A": "While",
      "B": "Do while",
      "C": "Break",
      "D": "Continue"
    },
    "optionsTamil": {
      "A": "While",
      "B": "Do while",
      "C": "Break",
      "D": "Continue"
    },
    "correctOption": "A",
    "answer": "A) While",
    "answerTamil": "A) While",
    "isBookBack": true
  },
  {
    "id": "ca11-ch15-1m-9",
    "chapterNo": 15,
    "chapterName": "Control Structure in Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் கட்டுப்பாட்டு கட்டமைப்புகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which statement is especially useful when testing all the possible results of an expression?",
    "questionTextTamil": "ஒரு கோவையின் அனைத்து சாத்தியமான முடிவுகளையும் சோதிக்க குறிப்பாகப் பயன்படும் கூற்று எது?",
    "options": {
      "A": "While",
      "B": "Do while",
      "C": "Switch",
      "D": "If"
    },
    "optionsTamil": {
      "A": "While",
      "B": "Do while",
      "C": "Switch",
      "D": "If"
    },
    "correctOption": "C",
    "answer": "C) Switch",
    "answerTamil": "C) Switch",
    "isBookBack": true
  },
  {
    "id": "ca11-ch15-1m-10",
    "chapterNo": 15,
    "chapterName": "Control Structure in Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் கட்டுப்பாட்டு கட்டமைப்புகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "In which loop is the body of the loop always executed at least once before the condition is evaluated?",
    "questionTextTamil": "நிபந்தனை சரிபார்க்கப்படுவதற்கு முன்பே மடக்கு உடற்பகுதி குறைந்தது ஒரு முறையாவது இயக்கப்படும் மடக்கு எது?",
    "options": {
      "A": "For",
      "B": "While",
      "C": "If",
      "D": "Do while"
    },
    "optionsTamil": {
      "A": "For",
      "B": "While",
      "C": "If",
      "D": "Do while"
    },
    "correctOption": "D",
    "answer": "D) Do while",
    "answerTamil": "D) Do while",
    "isBookBack": true
  },
  {
    "id": "ca11-ch15-1m-11",
    "chapterNo": 15,
    "chapterName": "Control Structure in Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் கட்டுப்பாட்டு கட்டமைப்புகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "What will be the output of the following snippet:\n<script type='text/javascript'>\nx = 6 + '3';\ndocument.write(x);\n</script>",
    "questionTextTamil": "பின்வரும் குறிமுறையின் வெளியீடு என்ன:\n<script type='text/javascript'>\nx = 6 + '3';\ndocument.write(x);\n</script>",
    "options": {
      "A": "6",
      "B": "9",
      "C": "63",
      "D": "Error"
    },
    "optionsTamil": {
      "A": "6",
      "B": "9",
      "C": "63",
      "D": "Error"
    },
    "correctOption": "C",
    "answer": "C) 63",
    "answerTamil": "C) 63",
    "isBookBack": true
  },
  {
    "id": "ca11-ch15-2m-1",
    "chapterNo": 15,
    "chapterName": "Control Structure in Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் கட்டுப்பாட்டு கட்டமைப்புகள்",
    "marks": 2,
    "type": "short",
    "questionText": "What are the different types of control statements used in JavaScript?",
    "questionTextTamil": "ஜாவாஸ்கிரிப்ட்டில் பயன்படுத்தப்படும் பல்வேறு வகையான கட்டுப்பாட்டுக் கூற்றுகள் யாவை?",
    "answer": "JavaScript supports two major types of control statements:\n1. Branching (Selection/Conditional) Statements: Simple if, if...else, else if ladder, and switch statement.\n2. Looping (Iterative) Statements: for loop, while loop, and do...while loop.",
    "answerTamil": "ஜாவாஸ்கிரிப்ட் இரு முக்கிய கட்டுப்பாட்டுக் கூற்றுகளை ஆதரிக்கிறது:\n1. கிளைப்பிரிப்பு (நிபந்தனை) கூற்றுகள்: if, if...else, else if ஏணி மற்றும் switch கூற்றுகள்.\n2. சுழற்சி (மடக்கு) கூற்றுகள்: for, while மற்றும் do...while மடக்குகள்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch15-2m-2",
    "chapterNo": 15,
    "chapterName": "Control Structure in Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் கட்டுப்பாட்டு கட்டமைப்புகள்",
    "marks": 2,
    "type": "short",
    "questionText": "What is meant by conditional/branching statements in JavaScript?",
    "questionTextTamil": "ஜாவாஸ்கிரிப்ட்டில் நிபந்தனை/கிளைப்பிரிப்பு கூற்றுகள் என்றால் என்ன?",
    "answer": "Conditional or branching statements allow a program to test conditions and execute specific blocks of code depending on whether the condition evaluates to true or false.",
    "answerTamil": "நிபந்தனை அல்லது கிளைப்பிரிப்புக் கூற்றுகள் என்பவை நிபந்தனைகளைச் சோதித்து முடிவுகளை எடுக்கவும், நிபந்தனையின் உண்மை அல்லது பொய் மதிப்பைப் பொறுத்து குறிப்பிட்ட குறிமுறைத் தொகுதிக்கு கட்டுப்பாட்டை மாற்றவும் உதவுகின்றன.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch15-2m-3",
    "chapterNo": 15,
    "chapterName": "Control Structure in Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் கட்டுப்பாட்டு கட்டமைப்புகள்",
    "marks": 2,
    "type": "short",
    "questionText": "List out the various branching statements available in JavaScript.",
    "questionTextTamil": "ஜாவாஸ்கிரிப்ட்டில் உள்ள பல்வேறு கிளைப்பிரிப்பு கூற்றுகளை பட்டியலிடுக.",
    "answer": "The various branching statements in JavaScript are:\n1. Simple if statement\n2. if...else statement\n3. else if ladder (nested if)\n4. switch statement",
    "answerTamil": "ஜாவாஸ்கிரிப்ட்டில் உள்ள பல்வேறு கிளைப்பிரிப்பு கூற்றுகள்:\n1. எளிய if கூற்று\n2. if...else கூற்று\n3. else if ஏணி (பின்னலான if)\n4. switch கூற்று",
    "isBookBack": true
  },
  {
    "id": "ca11-ch15-2m-4",
    "chapterNo": 15,
    "chapterName": "Control Structure in Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் கட்டுப்பாட்டு கட்டமைப்புகள்",
    "marks": 2,
    "type": "short",
    "questionText": "Write the general syntax for the switch statement.",
    "questionTextTamil": "switch கூற்றிற்கான பொதுவான தொடரியலை எழுதுக.",
    "answer": "Syntax for switch statement:\nswitch (expression) {\n  case value1:\n    statement(s);\n    break;\n  case value2:\n    statement(s);\n    break;\n  default:\n    statement(s);\n}",
    "answerTamil": "switch கூற்றின் தொடரியல்:\nswitch (expression) {\n  case value1:\n    statement(s);\n    break;\n  case value2:\n    statement(s);\n    break;\n  default:\n    statement(s);\n}",
    "isBookBack": true
  },
  {
    "id": "ca11-ch15-2m-5",
    "chapterNo": 15,
    "chapterName": "Control Structure in Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் கட்டுப்பாட்டு கட்டமைப்புகள்",
    "marks": 2,
    "type": "short",
    "questionText": "Differentiate between the break and continue statements.",
    "questionTextTamil": "break மற்றும் continue கூற்றுகளுக்கு இடையேயான வேறுபாடுகளைத் தருக.",
    "answer": "• break statement: Terminates the entire loop or switch statement immediately.\n• continue statement: Skips only the current iteration of the loop and continues with the next iteration.",
    "answerTamil": "• break கூற்று: சுழற்சி அல்லது switch கூற்றை உடனடியாக நிறுத்துகிறது.\n• continue கூற்று: தற்போதைய சுழற்சியை மட்டும் தவிர்த்து, அடுத்த சுழற்சிக்கு கட்டுப்பாட்டை எடுத்துச் செல்கிறது.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch15-3m-1",
    "chapterNo": 15,
    "chapterName": "Control Structure in Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் கட்டுப்பாட்டு கட்டமைப்புகள்",
    "marks": 3,
    "type": "brief",
    "questionText": "What is the 'if' statement? Write its different types.",
    "questionTextTamil": "'if' கூற்று என்றால் என்ன? அதன் பல்வேறு வகைகளை எழுதுக.",
    "answer": "The 'if' statement is a conditional statement that executes a block of code only if the condition evaluates to true.\nTypes:\n1. Simple if statement\n2. if...else statement\n3. else if ladder (Nested if)",
    "answerTamil": "'if' கூற்று என்பது குறிப்பிட்ட நிபந்தனை உண்மையாக இருக்கும்போது மட்டும் குறிமுறைத் தொகுதியை இயக்கும் ஒரு அடிப்படை முடிவெடுக்கும் கூற்றாகும்.\nவகைகள்: எளிய if, if...else, else if ஏணி.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch15-3m-2",
    "chapterNo": 15,
    "chapterName": "Control Structure in Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் கட்டுப்பாட்டு கட்டமைப்புகள்",
    "marks": 3,
    "type": "brief",
    "questionText": "Write the syntax for the else-if ladder statement.",
    "questionTextTamil": "else-if ஏணி கூற்றிற்கான தொடரியலை எழுதுக.",
    "answer": "Syntax:\nif (condition1) {\n  // statement block 1\n} else if (condition2) {\n  // statement block 2\n} else if (condition3) {\n  // statement block 3\n} else {\n  // default statement block\n}",
    "answerTamil": "தொடரியல்:\nif (condition1) {\n  // statement block 1\n} else if (condition2) {\n  // statement block 2\n} else {\n  // default\n}",
    "isBookBack": true
  },
  {
    "id": "ca11-ch15-3m-3",
    "chapterNo": 15,
    "chapterName": "Control Structure in Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் கட்டுப்பாட்டு கட்டமைப்புகள்",
    "marks": 3,
    "type": "brief",
    "questionText": "What is called a loop? What are the three types of looping statements in JavaScript?",
    "questionTextTamil": "மடக்கு (Loop) என்றால் என்ன? ஜாவாஸ்கிரிப்ட்டில் உள்ள மூன்று வகையான மடக்கு கூற்றுகள் யாவை?",
    "answer": "A loop is a control structure used to execute a block of code repeatedly until a condition is met.\nThree types of loops:\n1. for loop\n2. while loop\n3. do...while loop",
    "answerTamil": "ஒரு குறிப்பிட்ட நிபந்தனை உண்மையாக இருக்கும் வரை ஒரு குறிமுறைத் தொகுதியை மீண்டும் மீண்டும் இயக்க பயன்படும் கட்டமைப்பு மடக்கு (Loop) எனப்படும்.\nவகைகள்: for, while, do...while.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch15-3m-4",
    "chapterNo": 15,
    "chapterName": "Control Structure in Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் கட்டுப்பாட்டு கட்டமைப்புகள்",
    "marks": 3,
    "type": "brief",
    "questionText": "Differentiate between the while and do-while looping statements.",
    "questionTextTamil": "while மற்றும் do-while மடக்கு கூற்றுகளுக்கு இடையேயான வேறுபாடுகளைத் தருக.",
    "answer": "1. while loop: Entry-controlled loop; condition checked before loop body; executes 0 times if condition is initially false.\n2. do...while loop: Exit-controlled loop; condition checked after loop body; always executes at least once.",
    "answerTamil": "1. while: நுழைவுக்கட்டுப்பாட்டு மடக்கு; நிபந்தனை தொடக்கத்தில் சரிபார்க்கப்படும்.\n2. do...while: வெளியேறல் கட்டுப்பாட்டு மடக்கு; குறைந்தது ஒரு முறையாவது இயங்கும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch15-3m-5",
    "chapterNo": 15,
    "chapterName": "Control Structure in Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் கட்டுப்பாட்டு கட்டமைப்புகள்",
    "marks": 3,
    "type": "brief",
    "questionText": "What message will be displayed, if the input for age is given as 20 in the following snippet?\nif (age >= 18) {\n alert('you are eligible to get Driving licence');\n} else {\n alert('you are not eligible to get driving licence');\n}",
    "questionTextTamil": "பின்வரும் குறிமுறையில் age=20 என்று கொடுக்கப்பட்டால் என்ன செய்தி திரையில் தோன்றும்?\nif (age >= 18) {\n alert('you are eligible to get Driving licence');\n} else {\n alert('you are not eligible to get driving licence');\n}",
    "answer": "Message displayed: 'you are eligible to get Driving licence'\nReason: The condition (20 >= 18) evaluates to true, so the if block executes.",
    "answerTamil": "தோன்றும் செய்தி: 'you are eligible to get Driving licence'\nகாரணம்: 20 >= 18 என்ற நிபந்தனை மெய் என்பதால் if தொகுதி இயங்கும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch15-5m-1",
    "chapterNo": 15,
    "chapterName": "Control Structure in Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் கட்டுப்பாட்டு கட்டமைப்புகள்",
    "marks": 5,
    "type": "detail",
    "questionText": "Explain the 'for' loop in JavaScript with a neat code example showing a multiplication table.",
    "questionTextTamil": "ஜாவாஸ்கிரிப்ட்டில் 'for' மடக்கை பெருக்கல் வாய்ப்பாட்டை காட்டும் எடுத்துக்காட்டு நிரலுடன் விளக்குக.",
    "answer": "The 'for' loop is an entry-controlled loop ideal when iteration count is known.\n\nSyntax:\nfor (initialization; condition; increment/decrement) {\n  // code block\n}\n\nMultiplication Table Example:\n```html\n<script type=\"text/javascript\">\n  var num = 5;\n  document.write(\"<h3>Table of \" + num + \"</h3>\");\n  for (var i = 1; i <= 10; i++) {\n    document.write(num + \" x \" + i + \" = \" + (num * i) + \"<br>\");\n  }\n</script>\n```",
    "answerTamil": "for மடக்கு தொடரியல் மற்றும் பெருக்கல் வாய்ப்பாட்டு எடுத்துக்காட்டு நிரல்:\n```html\n<script type=\"text/javascript\">\n  var num = 5;\n  for (var i = 1; i <= 10; i++) {\n    document.write(num + \" x \" + i + \" = \" + (num * i) + \"<br>\");\n  }\n</script>\n```",
    "isBookBack": true
  },
  {
    "id": "ca11-ch15-5m-2",
    "chapterNo": 15,
    "chapterName": "Control Structure in Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் கட்டுப்பாட்டு கட்டமைப்புகள்",
    "marks": 5,
    "type": "detail",
    "questionText": "Explain the switch case statement in JavaScript with a suitable code example.",
    "questionTextTamil": "ஜாவாஸ்கிரிப்ட்டில் switch case கூற்றை பொருத்தமான குறிமுறை எடுத்துக்காட்டுடன் விளக்குக.",
    "answer": "The switch statement evaluates an expression against multiple cases.\n\nSyntax:\nswitch (expression) {\n  case val1: statements; break;\n  case val2: statements; break;\n  default: statements;\n}\n\nExample:\n```html\n<script type=\"text/javascript\">\n  var day = 2;\n  switch (day) {\n    case 1: document.write(\"Sunday\"); break;\n    case 2: document.write(\"Monday\"); break;\n    default: document.write(\"Other day\");\n  }\n</script>\n```",
    "answerTamil": "switch case தொடரியல் மற்றும் வாரத்தின் நாட்களைக் காட்டும் எடுத்துக்காட்டு நிரல்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch15-5m-3",
    "chapterNo": 15,
    "chapterName": "Control Structure in Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் கட்டுப்பாட்டு கட்டமைப்புகள்",
    "marks": 5,
    "type": "detail",
    "questionText": "Write the output for the following program\n<Html>\n<Head>\n<Title> for statement</title>\n<Head>\n<Body>\n<script language= \"java Script\" type = \"text / javaScript\")\nvar no1= prompt (\"please enter table you want:\", \"0\" );\ndocument write (\"<h2> multiplication for your need </h2>\")\nfor (Var no2= 0; no2<=10; no2++)\n{\ndocument write (no1+ \"x\" + no2+ \"=\" + no1+no2+ \"<br>);\n}\n</script>\n</body>\n</Html>",
    "questionTextTamil": "பின்வரும் நிரலின் வெளியீட்டை எழுதுக:\n<Html>\n<Head>\n<Title> for statement</title>\n<Head>\n<Body>\n<script language= \"java Script\" type = \"text / javaScript\")\nvar no1= prompt (\"please enter table you want:\", \"0\" );\ndocument write (\"<h2> multiplication for your need </h2>\")\nfor (Var no2= 0; no2<=10; no2++)\n{\ndocument write (no1+ \"x\" + no2+ \"=\" + no1+no2+ \"<br>);\n}\n</script>\n</body>\n</Html>",
    "answer": "Output with input '5':\nmultiplication for your need\n5 x 0 = 50\n5 x 1 = 51\n5 x 2 = 52\n5 x 3 = 53\n5 x 4 = 54\n5 x 5 = 55\n5 x 6 = 56\n5 x 7 = 57\n5 x 8 = 58\n5 x 9 = 59\n5 x 10 = 510\n(Note: prompt returns string so '+' performs string concatenation).",
    "answerTamil": "உள்ளீடு 5 ஆக இருக்கும் போது தோன்றும் வெளியீடு: 5 x 0 = 50 முதல் 5 x 10 = 510 வரை.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch15-5m-4",
    "chapterNo": 15,
    "chapterName": "Control Structure in Javascript",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் கட்டுப்பாட்டு கட்டமைப்புகள்",
    "marks": 5,
    "type": "detail",
    "questionText": "Write a JavaScript program using the while statement to display the first 10 even numbers.",
    "questionTextTamil": "முதல் 10 இரட்டைப்படை எண்களைக் காட்ட while கூற்றைப் பயன்படுத்தி ஒரு ஜாவாஸ்கிரிப்ட் நிரலை எழுதுக.",
    "answer": "JavaScript Program for first 10 even numbers:\n```html\n<script type=\"text/javascript\">\n  var count = 1;\n  var num = 2;\n  while (count <= 10) {\n    document.write(num + \"<br>\");\n    num += 2;\n    count++;\n  }\n</script>\n```",
    "answerTamil": "முதல் 10 இரட்டைப்படை எண்களை அச்சிடும் ஜாவாஸ்கிரிப்ட் நிரல்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch16-1m-1",
    "chapterNo": 16,
    "chapterName": "JavaScript Functions",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் செயற்கூறுகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Function parameters work inside the function as:",
    "questionTextTamil": "செயற்கூறுவின் அளவுருக்கள் செயற்கூறுவிற்குள் எவ்வாறாக செயல்படுகின்றன?",
    "options": {
      "A": "Local variable",
      "B": "Global Variable",
      "C": "File variable",
      "D": "block variable"
    },
    "optionsTamil": {
      "A": "உள்ளமை மாறி (Local variable)",
      "B": "முழுதளாவிய மாறி",
      "C": "கோப்பு மாறி",
      "D": "தொகுதி மாறி"
    },
    "correctOption": "A",
    "answer": "A) Local variable",
    "answerTamil": "A) உள்ளமை மாறி (Local variable)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch16-1m-2",
    "chapterNo": 16,
    "chapterName": "JavaScript Functions",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் செயற்கூறுகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Predefined functions in JavaScript are also called:",
    "questionTextTamil": "ஜாவாஸ்கிரிப்ட்டில் முன்வரையறுக்கப்பட்ட செயற்கூறுகள் இவ்வாறு அழைக்கப்படுகின்றன:",
    "options": {
      "A": "Library functions",
      "B": "storage functions",
      "C": "instructions",
      "D": "commands"
    },
    "optionsTamil": {
      "A": "நூலகச் செயற்கூறுகள் (Library functions)",
      "B": "சேமிப்பு செயற்கூறுகள்",
      "C": "அறிவுறுத்தல்கள்",
      "D": "கட்டளைகள்"
    },
    "correctOption": "A",
    "answer": "A) Library functions",
    "answerTamil": "A) நூலகச் செயற்கூறுகள் (Library functions)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch16-1m-3",
    "chapterNo": 16,
    "chapterName": "JavaScript Functions",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் செயற்கூறுகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Larger programs are divided into smaller, manageable parts called:",
    "questionTextTamil": "பெரிய நிரல்கள் சிறிய, நிர்வகிக்கக்கூடிய பகுதிகளாகப் பிரிக்கப்படுகின்றன. அவை எவ்வாறு அழைக்கப்படுகின்றன?",
    "options": {
      "A": "modules",
      "B": "block",
      "C": "sets",
      "D": "Group"
    },
    "optionsTamil": {
      "A": "தொகுதிகள் (modules)",
      "B": "தொகுதி (block)",
      "C": "கணங்கள் (sets)",
      "D": "குழு (Group)"
    },
    "correctOption": "A",
    "answer": "A) modules",
    "answerTamil": "A) தொகுதிகள் (modules)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch16-1m-4",
    "chapterNo": 16,
    "chapterName": "JavaScript Functions",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் செயற்கூறுகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which of the following is used to enhance reusability and program clarity?",
    "questionTextTamil": "மறுபயனாக்கம் மற்றும் நிரலின் தெளிவை மேம்படுத்த பின்வருவனவற்றுள் எது பயன்படுகிறது?",
    "options": {
      "A": "functions",
      "B": "modules",
      "C": "sets",
      "D": "instructions"
    },
    "optionsTamil": {
      "A": "செயற்கூறுகள் (functions)",
      "B": "தொகுதிகள் (modules)",
      "C": "கணங்கள் (sets)",
      "D": "அறிவுறுத்தல்கள்"
    },
    "correctOption": "A",
    "answer": "A) functions",
    "answerTamil": "A) செயற்கூறுகள் (functions)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch16-1m-5",
    "chapterNo": 16,
    "chapterName": "JavaScript Functions",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் செயற்கூறுகள்",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which of the following allows the programmer to modularize a program?",
    "questionTextTamil": "நிரலாளருக்கு ஒரு நிரலை பகுதி வாரியாக பிரிக்க (modularize) அனுமதிப்பது எது?",
    "options": {
      "A": "Library functions",
      "B": "user defined functions",
      "C": "Normal functions",
      "D": "Ordinary functions"
    },
    "optionsTamil": {
      "A": "நூலகச் செயற்கூறுகள்",
      "B": "பயனர் வரையறுத்த செயற்கூறுகள் (user defined functions)",
      "C": "சாதாரண செயற்கூறுகள்",
      "D": "வழக்கமான செயற்கூறுகள்"
    },
    "correctOption": "B",
    "answer": "B) user defined functions",
    "answerTamil": "B) பயனர் வரையறுத்த செயற்கூறுகள் (user defined functions)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch16-2m-1",
    "chapterNo": 16,
    "chapterName": "JavaScript Functions",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் செயற்கூறுகள்",
    "marks": 2,
    "type": "short",
    "questionText": "What is a function in JavaScript?",
    "questionTextTamil": "ஜாவாஸ்கிரிப்ட்டில் செயற்கூறு என்றால் என்ன?",
    "answer": "A function is a named, modular block of reusable code designed to perform a specific task when called.",
    "answerTamil": "செயற்கூறு என்பது ஒரு குறிப்பிட்ட பணியைச் செய்ய வடிவமைக்கப்பட்ட மறுபயன்பாட்டு குறிமுறைத் தொகுதியாகும்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch16-2m-2",
    "chapterNo": 16,
    "chapterName": "JavaScript Functions",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் செயற்கூறுகள்",
    "marks": 2,
    "type": "short",
    "questionText": "What are the primary advantages/uses of a function?",
    "questionTextTamil": "செயற்கூறுகளின் முதன்மை நன்மைகள்/பயன்கள் யாவை?",
    "answer": "1. Code reusability.\n2. Modular programming and easier debugging.",
    "answerTamil": "1. குறிமுறை மறுபயனாக்கம்.\n2. பகுதி வாரியாக்கம் மற்றும் எளிதான பிழைதிருத்தம்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch16-2m-3",
    "chapterNo": 16,
    "chapterName": "JavaScript Functions",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் செயற்கூறுகள்",
    "marks": 2,
    "type": "short",
    "questionText": "Write a short note on Library (Predefined) functions.",
    "questionTextTamil": "நூலக (முன்வரையறுக்கப்பட்ட) செயற்கூறுகள் பற்றி சிறு குறிப்பு வரைக.",
    "answer": "Predefined functions are built-in functions provided by JavaScript (e.g. parseInt(), alert(), prompt()).",
    "answerTamil": "முன்வரையறுக்கப்பட்ட செயற்கூறுகள் என்பவை ஜாவாஸ்கிரிப்ட்டில் உள்ளமைக்கப்பட்டவையாகும் (எ.கா: alert(), prompt()).",
    "isBookBack": true
  },
  {
    "id": "ca11-ch16-2m-4",
    "chapterNo": 16,
    "chapterName": "JavaScript Functions",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் செயற்கூறுகள்",
    "marks": 2,
    "type": "short",
    "questionText": "Write a short note on User-defined functions.",
    "questionTextTamil": "பயனர் வரையறுத்த செயற்கூறுகள் பற்றி சிறு குறிப்பு வரைக.",
    "answer": "User-defined functions are custom functions created by the programmer using the `function` keyword.",
    "answerTamil": "நிரலாளரால் தனது குறிப்பிட்ட தேவைகளுக்காக `function` சிறப்புச்சொல் மூலம் உருவாக்கப்படும் தனிப்பயன் செயற்கூறுகள்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch16-2m-5",
    "chapterNo": 16,
    "chapterName": "JavaScript Functions",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் செயற்கூறுகள்",
    "marks": 2,
    "type": "short",
    "questionText": "Write the general syntax of a function definition in JavaScript.",
    "questionTextTamil": "ஜாவாஸ்கிரிப்ட்டில் ஒரு செயற்கூறு வரையறையின் பொதுவான தொடரியலை எழுதுக.",
    "answer": "function functionName(param1, param2) {\n  // code block\n  return value;\n}",
    "answerTamil": "function functionName(param1, param2) {\n  // உடற்பகுதி\n  return value;\n}",
    "isBookBack": true
  },
  {
    "id": "ca11-ch16-3m-1",
    "chapterNo": 16,
    "chapterName": "JavaScript Functions",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் செயற்கூறுகள்",
    "marks": 3,
    "type": "brief",
    "questionText": "Write a program in JavaScript to find the cube of a number using a user-defined function.",
    "questionTextTamil": "பயனர் வரையறுத்த செயற்கூறைப் பயன்படுத்தி ஒரு எண்ணின் கனத்தை (cube) காணும் ஜாவாஸ்கிரிப்ட் நிரலை எழுதுக.",
    "answer": "```html\n<script type=\"text/javascript\">\n  function findCube(num) {\n    return num * num * num;\n  }\n  var n = 4;\n  document.write(\"Cube of \" + n + \" is: \" + findCube(n));\n</script>\n```",
    "answerTamil": "எண்ணின் கனத்தைக் காணும் ஜாவாஸ்கிரிப்ட் நிரல்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch16-3m-2",
    "chapterNo": 16,
    "chapterName": "JavaScript Functions",
    "chapterNameTamil": "ஜாவாஸ்கிரிப்ட் செயற்கூறுகள்",
    "marks": 3,
    "type": "brief",
    "questionText": "Write a program in JavaScript to find the sum of 10 numbers using a function.",
    "questionTextTamil": "ஒரு செயற்கூறைப் பயன்படுத்தி 10 எண்களின் கூடுதலைக் காணும் ஜாவாஸ்கிரிப்ட் நிரலை எழுதுக.",
    "answer": "```html\n<script type=\"text/javascript\">\n  function sumTenNumbers() {\n    var sum = 0;\n    for (var i = 1; i <= 10; i++) {\n      sum += i;\n    }\n    return sum;\n  }\n  document.write(\"Sum of 1 to 10 is: \" + sumTenNumbers());\n</script>\n```",
    "answerTamil": "10 எண்களின் கூடுதலைக் காணும் செயற்கூறு நிரல்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch17-1m-1",
    "chapterNo": 17,
    "chapterName": "Computer Ethics and Cyber Security",
    "chapterNameTamil": "கணினி நெறிமுறைகள் மற்றும் இணையப் பாதுகாப்பு",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which of the following is a set of moral principles that regulate the use of computers?",
    "questionTextTamil": "கணினிகளின் பயன்பாட்டை ஒழுங்குபடுத்தும் தார்மீகக் கொள்கைகளின் தொகுப்பு எது?",
    "options": {
      "A": "piracy",
      "B": "programs",
      "C": "virus",
      "D": "computer ethics"
    },
    "optionsTamil": {
      "A": "திருட்டு",
      "B": "நிரல்கள்",
      "C": "வைரஸ்",
      "D": "கணினி நெறிமுறைகள் (computer ethics)"
    },
    "correctOption": "D",
    "answer": "D) computer ethics",
    "answerTamil": "D) கணினி நெறிமுறைகள் (computer ethics)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch17-1m-2",
    "chapterNo": 17,
    "chapterName": "Computer Ethics and Cyber Security",
    "chapterNameTamil": "கணினி நெறிமுறைகள் மற்றும் இணையப் பாதுகாப்பு",
    "marks": 1,
    "type": "mcq",
    "questionText": "Commercial programs made available to the public illegally are known as:",
    "questionTextTamil": "வணிக ரீதியான மென்பொருட்கள் பொதுமக்களுக்கு சட்டவிரோதமாகக் கிடைக்கச் செய்யப்படுவது இவ்வாறு அழைக்கப்படுகிறது:",
    "options": {
      "A": "freeware",
      "B": "warez",
      "C": "free software",
      "D": "software"
    },
    "optionsTamil": {
      "A": "இலவச மென்பொருள்",
      "B": "வேரெஸ் (warez)",
      "C": "கட்டற்ற மென்பொருள்",
      "D": "மென்பொருள்"
    },
    "correctOption": "B",
    "answer": "B) warez",
    "answerTamil": "B) வேரெஸ் (warez)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch17-1m-3",
    "chapterNo": 17,
    "chapterName": "Computer Ethics and Cyber Security",
    "chapterNameTamil": "கணினி நெறிமுறைகள் மற்றும் இணையப் பாதுகாப்பு",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which one of the following are self-repeating and do not require a computer program to attach themselves?",
    "questionTextTamil": "பின்வருவனவற்றுள் தானாகவே பரவக்கூடிய மற்றும் பிற நிரல்களுடன் இணையத் தேவையில்லாதது எது?",
    "options": {
      "A": "viruses",
      "B": "worms",
      "C": "spyware",
      "D": "Trojans"
    },
    "optionsTamil": {
      "A": "வைரஸ்கள்",
      "B": "புழுக்கள் (worms)",
      "C": "உளவு மென்பொருள்",
      "D": "ட்ரோஜான்கள்"
    },
    "correctOption": "B",
    "answer": "B) worms",
    "answerTamil": "B) புழுக்கள் (worms)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch17-1m-4",
    "chapterNo": 17,
    "chapterName": "Computer Ethics and Cyber Security",
    "chapterNameTamil": "கணினி நெறிமுறைகள் மற்றும் இணையப் பாதுகாப்பு",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which one of the following tracks a user visits a website?",
    "questionTextTamil": "ஒரு பயனர் வலைத்தளத்தைப் பார்வையிடுவதை கண்காணிப்பது எது?",
    "options": {
      "A": "spyware",
      "B": "cookies",
      "C": "worms",
      "D": "Trojans"
    },
    "optionsTamil": {
      "A": "உளவு மென்பொருள்",
      "B": "குக்கீகள் (cookies)",
      "C": "புழுக்கள்",
      "D": "ட்ரோஜான்கள்"
    },
    "correctOption": "B",
    "answer": "B) cookies",
    "answerTamil": "B) குக்கீகள் (cookies)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch17-1m-5",
    "chapterNo": 17,
    "chapterName": "Computer Ethics and Cyber Security",
    "chapterNameTamil": "கணினி நெறிமுறைகள் மற்றும் இணையப் பாதுகாப்பு",
    "marks": 1,
    "type": "mcq",
    "questionText": "Which of the following is not a malicious program on computer systems?",
    "questionTextTamil": "கணினி அமைப்புகளில் பின்வருவனவற்றுள் எது தீங்கிழைக்கும் நிரல் அல்ல?",
    "options": {
      "A": "worms",
      "B": "Trojans",
      "C": "spyware",
      "D": "cookies"
    },
    "optionsTamil": {
      "A": "புழுக்கள்",
      "B": "ட்ரோஜான்கள்",
      "C": "உளவு மென்பொருள்",
      "D": "குக்கீகள் (cookies)"
    },
    "correctOption": "D",
    "answer": "D) cookies",
    "answerTamil": "D) குக்கீகள் (cookies)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch17-1m-6",
    "chapterNo": 17,
    "chapterName": "Computer Ethics and Cyber Security",
    "chapterNameTamil": "கணினி நெறிமுறைகள் மற்றும் இணையப் பாதுகாப்பு",
    "marks": 1,
    "type": "mcq",
    "questionText": "A computer network security that monitors and controls incoming and outgoing traffic is:",
    "questionTextTamil": "உள்வரும் மற்றும் வெளிச்செல்லும் போக்குவரத்தை கண்காணித்து கட்டுப்படுத்தும் கணினி நெட்வொர்க் பாதுகாப்பு சாதனம் எது?",
    "options": {
      "A": "Cookies",
      "B": "Virus",
      "C": "Firewall",
      "D": "worms"
    },
    "optionsTamil": {
      "A": "குக்கீகள்",
      "B": "வைரஸ்",
      "C": "தீச்சுவர் (Firewall)",
      "D": "புழுக்கள்"
    },
    "correctOption": "C",
    "answer": "C) Firewall",
    "answerTamil": "C) தீச்சுவர் (Firewall)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch17-1m-7",
    "chapterNo": 17,
    "chapterName": "Computer Ethics and Cyber Security",
    "chapterNameTamil": "கணினி நெறிமுறைகள் மற்றும் இணையப் பாதுகாப்பு",
    "marks": 1,
    "type": "mcq",
    "questionText": "The process of converting cipher text to plain text is called:",
    "questionTextTamil": "மறைக்கப்பட்ட உரையை (cipher text) சாதாரண உரையாக மாற்றும் செயல்முறை எவ்வாறு அழைக்கப்படுகிறது?",
    "options": {
      "A": "Encryption",
      "B": "Decryption",
      "C": "key",
      "D": "proxy server"
    },
    "optionsTamil": {
      "A": "குறியாக்கவியல்",
      "B": "மறைகுறியீடு நீக்கம் (Decryption)",
      "C": "சாவி",
      "D": "பதிலாள் சேவையகம்"
    },
    "correctOption": "B",
    "answer": "B) Decryption",
    "answerTamil": "B) மறைகுறியீடு நீக்கம் (Decryption)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch17-1m-8",
    "chapterNo": 17,
    "chapterName": "Computer Ethics and Cyber Security",
    "chapterNameTamil": "கணினி நெறிமுறைகள் மற்றும் இணையப் பாதுகாப்பு",
    "marks": 1,
    "type": "mcq",
    "questionText": "e-commerce means:",
    "questionTextTamil": "மின்-வணிகம் (e-commerce) என்பது:",
    "options": {
      "A": "electronic commerce",
      "B": "electronic data exchange",
      "C": "electric data exchange",
      "D": "electronic commercialization"
    },
    "optionsTamil": {
      "A": "மின்னணு வணிகம் (electronic commerce)",
      "B": "மின்னணு தரவு பரிமாற்றம்",
      "C": "மின் தரவு பரிமாற்றம்",
      "D": "மின்னணு வணிகமயமாக்கல்"
    },
    "correctOption": "A",
    "answer": "A) electronic commerce",
    "answerTamil": "A) மின்னணு வணிகம் (electronic commerce)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch17-1m-9",
    "chapterNo": 17,
    "chapterName": "Computer Ethics and Cyber Security",
    "chapterNameTamil": "கணினி நெறிமுறைகள் மற்றும் இணையப் பாதுகாப்பு",
    "marks": 1,
    "type": "mcq",
    "questionText": "Distributing unwanted e-mail to others is called:",
    "questionTextTamil": "தேவையற்ற மின்னஞ்சல்களைப் பலருக்கு அனுப்புவது எவ்வாறு அழைக்கப்படுகிறது?",
    "options": {
      "A": "scam",
      "B": "spam",
      "C": "fraud",
      "D": "spoofing"
    },
    "optionsTamil": {
      "A": "மோசடி",
      "B": "ஸ்பேம் (spam)",
      "C": "ஏமாற்று",
      "D": "ஏமாற்றுதல்"
    },
    "correctOption": "B",
    "answer": "B) spam",
    "answerTamil": "B) ஸ்பேம் (spam)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch17-1m-10",
    "chapterNo": 17,
    "chapterName": "Computer Ethics and Cyber Security",
    "chapterNameTamil": "கணினி நெறிமுறைகள் மற்றும் இணையப் பாதுகாப்பு",
    "marks": 1,
    "type": "mcq",
    "questionText": "Legal recognition for transactions are carried out by:",
    "questionTextTamil": "பரிவர்த்தனைகளுக்கான சட்டப்பூர்வ அங்கீகாரம் எதனால் செயல்படுத்தப்படுகிறது?",
    "options": {
      "A": "Electronic Data Interchange",
      "B": "Electronic Data Exchange",
      "C": "Electronic Data Transfer",
      "D": "Electrical Data Interchange"
    },
    "optionsTamil": {
      "A": "மின்னணு தரவு பரிமாற்றம் (Electronic Data Interchange)",
      "B": "மின்னணு தரவு பகிர்வு",
      "C": "மின்னணு தரவு பரிமாற்றம்",
      "D": "மின்சார தரவு பரிமாற்றம்"
    },
    "correctOption": "A",
    "answer": "A) Electronic Data Interchange",
    "answerTamil": "A) மின்னணு தரவு பரிமாற்றம் (Electronic Data Interchange)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch17-2m-1",
    "chapterNo": 17,
    "chapterName": "Computer Ethics and Cyber Security",
    "chapterNameTamil": "கணினி நெறிமுறைகள் மற்றும் இணையப் பாதுகாப்பு",
    "marks": 2,
    "type": "short",
    "questionText": "What is Harvesting?",
    "questionTextTamil": "அறுவடை செய்தல் (Harvesting) என்றால் என்ன?",
    "answer": "Harvesting is the automated collection of email addresses or personal data from websites for spamming or cyber fraud.",
    "answerTamil": "வலைத்தளங்களிலிருந்து மின்னஞ்சல் முகவரிகள் அல்லது தகவல்களை தானியங்கு முறையில் திருடும் செயல்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch17-2m-2",
    "chapterNo": 17,
    "chapterName": "Computer Ethics and Cyber Security",
    "chapterNameTamil": "கணினி நெறிமுறைகள் மற்றும் இணையப் பாதுகாப்பு",
    "marks": 2,
    "type": "short",
    "questionText": "What are Warez?",
    "questionTextTamil": "வேரெஸ் (Warez) என்றால் என்ன?",
    "answer": "Warez refers to commercial copyrighted software that has been cracked and distributed illegally for free over the internet.",
    "answerTamil": "பாதுகாப்புக் குறியீடுகள் நீக்கப்பட்டு இணையத்தில் சட்டவிரோதமாக இலவசமாக விநியோகிக்கப்படும் வணிக மென்பொருட்கள்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch17-2m-3",
    "chapterNo": 17,
    "chapterName": "Computer Ethics and Cyber Security",
    "chapterNameTamil": "கணினி நெறிமுறைகள் மற்றும் இணையப் பாதுகாப்பு",
    "marks": 2,
    "type": "short",
    "questionText": "Write a short note on cracking.",
    "questionTextTamil": "கிராக்கிங் (Cracking) பற்றி சிறு குறிப்பு வரைக.",
    "answer": "Cracking is the unauthorized act of breaking into secure computer systems or cracking registration keys with malicious intent.",
    "answerTamil": "பாதுகாப்பு அமைப்புகள் அல்லது உரிமக் குறியீடுகளை சட்டவிரோதமாக உடைத்து தகவல்களைத் திருடும் அல்லது சேதப்படுத்தும் செயல்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch17-2m-4",
    "chapterNo": 17,
    "chapterName": "Computer Ethics and Cyber Security",
    "chapterNameTamil": "கணினி நெறிமுறைகள் மற்றும் இணையப் பாதுகாப்பு",
    "marks": 2,
    "type": "short",
    "questionText": "Write two types of cyber attacks.",
    "questionTextTamil": "இணையத் தாக்குதல்களின் ஏதேனும் இரண்டு வகைகளை எழுதுக.",
    "answer": "1. Phishing: Fraudulent attempts to steal passwords and credentials.\n2. Denial of Service (DoS): Overwhelming servers to disrupt services.",
    "answerTamil": "1. ஃபிஷிங் (Phishing)\n2. சேவை மறுப்பு தாக்குதல் (DoS)",
    "isBookBack": true
  },
  {
    "id": "ca11-ch17-2m-5",
    "chapterNo": 17,
    "chapterName": "Computer Ethics and Cyber Security",
    "chapterNameTamil": "கணினி நெறிமுறைகள் மற்றும் இணையப் பாதுகாப்பு",
    "marks": 2,
    "type": "short",
    "questionText": "What is a Cookie?",
    "questionTextTamil": "குக்கீ (Cookie) என்றால் என்ன?",
    "answer": "A cookie is a small text file saved in the user's browser by a website to remember user preferences and session info.",
    "answerTamil": "பயனர் விருப்பங்களையும் அமர்வுகளையும் நினைவில் வைத்திருக்க உலாவியில் சேமிக்கப்படும் சிறிய உரைக் கோப்பு.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch17-3m-1",
    "chapterNo": 17,
    "chapterName": "Computer Ethics and Cyber Security",
    "chapterNameTamil": "கணினி நெறிமுறைகள் மற்றும் இணையப் பாதுகாப்பு",
    "marks": 3,
    "type": "brief",
    "questionText": "What is the role of firewalls?",
    "questionTextTamil": "தீச்சுவர்களின் (Firewalls) பங்கு என்ன?",
    "answer": "Firewalls monitor incoming and outgoing network traffic, prevent unauthorized network intrusions, and block malicious traffic based on security rules.",
    "answerTamil": "நெட்வொர்க் போக்குவரத்தை கண்காணித்து விதிமுறைகளின்படி வடிகட்டி, அங்கீகரிக்கப்படாத ஊடுருவல்களைத் தடுத்தல்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch17-3m-2",
    "chapterNo": 17,
    "chapterName": "Computer Ethics and Cyber Security",
    "chapterNameTamil": "கணினி நெறிமுறைகள் மற்றும் இணையப் பாதுகாப்பு",
    "marks": 3,
    "type": "brief",
    "questionText": "Write about encryption and decryption.",
    "questionTextTamil": "குறியாக்கம் (Encryption) மற்றும் மறைகுறியீடு நீக்கம் (Decryption) பற்றி எழுதுக.",
    "answer": "• Encryption: Converting Plain Text into scrambled Cipher Text using a key.\n• Decryption: Converting Cipher Text back into readable Plain Text.",
    "answerTamil": "• குறியாக்கம்: சாதாரண உரையை மறைகுறியீட்டு உரையாக மாற்றுதல்.\n• மறைகுறியீடு நீக்கம்: மறைகுறியீட்டு உரையை மீண்டும் சாதாரண உரையாக மாற்றுதல்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch17-3m-3",
    "chapterNo": 17,
    "chapterName": "Computer Ethics and Cyber Security",
    "chapterNameTamil": "கணினி நெறிமுறைகள் மற்றும் இணையப் பாதுகாப்பு",
    "marks": 3,
    "type": "brief",
    "questionText": "What are the guidelines to be followed by any computer user?",
    "questionTextTamil": "கணினி பயனர் பின்பற்ற வேண்டிய வழிகாட்டு நெறிமுறைகள் யாவை?",
    "answer": "1. Do not use computers to harm others.\n2. Do not snoop into other people's files.\n3. Do not copy copyrighted software without a license.\n4. Respect privacy and intellectual property.",
    "answerTamil": "1. பிறருக்கு தீங்கு விளைவிக்கக் கூடாது.\n2. மற்றவர் கோப்புகளை திருடக்கூடாது.\n3. உரிமம் பெறாத மென்பொருட்களைப் பயன்படுத்தக்கூடாது.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch17-3m-4",
    "chapterNo": 17,
    "chapterName": "Computer Ethics and Cyber Security",
    "chapterNameTamil": "கணினி நெறிமுறைகள் மற்றும் இணையப் பாதுகாப்பு",
    "marks": 3,
    "type": "brief",
    "questionText": "What are ethical issues? Name some.",
    "questionTextTamil": "நெறிமுறைச் சிக்கல்கள் என்றால் என்ன? சிலவற்றை குறிப்பிடுக.",
    "answer": "Ethical issues are moral challenges from computing technology.\nExamples: Software piracy, Plagiarism, Privacy violation, Cybercrimes.",
    "answerTamil": "மென்பொருள் திருட்டு, கருத்துத் திருட்டு, தனியுரிமை மீறல், இணையக் குற்றங்கள்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch17-5m-1",
    "chapterNo": 17,
    "chapterName": "Computer Ethics and Cyber Security",
    "chapterNameTamil": "கணினி நெறிமுறைகள் மற்றும் இணையப் பாதுகாப்பு",
    "marks": 5,
    "type": "detail",
    "questionText": "What are the various crimes happening using computer?",
    "questionTextTamil": "கணினியைப் பயன்படுத்தி நடைபெறும் பல்வேறு குற்றங்கள் யாவை?",
    "answer": "Major computer crimes:\n1. Online financial fraud and theft\n2. Phishing and identity theft\n3. Cyberstalking and harassment\n4. Software piracy and Warez distribution\n5. Spreading malicious malware and viruses.",
    "answerTamil": "நிதி மோசடி, ஃபிஷிங், இணைய அச்சுறுத்தல், மென்பொருள் திருட்டு, வைரஸ் பரப்புதல்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch17-5m-2",
    "chapterNo": 17,
    "chapterName": "Computer Ethics and Cyber Security",
    "chapterNameTamil": "கணினி நெறிமுறைகள் மற்றும் இணையப் பாதுகாப்பு",
    "marks": 5,
    "type": "detail",
    "questionText": "What is piracy? Mention the types of piracy? How can it be prevented?",
    "questionTextTamil": "மென்பொருள் திருட்டு (Piracy) என்றால் என்ன? அதன் வகைகள் யாவை? அதை எவ்வாறு தடுக்கலாம்?",
    "answer": "Software Piracy is unauthorized copying and using of copyrighted software.\nTypes: End-User Piracy, Internet Piracy, Counterfeiting, Hard-Disk Loading.\nPrevention: Using genuine product keys, DRM encryption, enforcing cyber laws.",
    "answerTamil": "மென்பொருள் திருட்டு வகைகள்: இறுதிப் பயனர் திருட்டு, இணையத் திருட்டு, போலி மென்பொருள்; தடுக்கும் முறைகள்: உரிமங்கள், தயாரிப்பு சாவிகள்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch17-5m-3",
    "chapterNo": 17,
    "chapterName": "Computer Ethics and Cyber Security",
    "chapterNameTamil": "கணினி நெறிமுறைகள் மற்றும் இணையப் பாதுகாப்பு",
    "marks": 5,
    "type": "detail",
    "questionText": "Write the different types of cyber attacks.",
    "questionTextTamil": "இணையத் தாக்குதல்களின் பல்வேறு வகைகளை விளக்குக.",
    "answer": "1. Malware/Virus attacks: Infecting systems to corrupt data.\n2. Phishing: Deceptive emails/sites stealing sensitive credentials.\n3. Denial of Service (DoS): Overwhelming servers to disable access.\n4. Man-in-the-Middle (MitM): Intercepting communications.\n5. Ransomware: Encrypting files for extortion.",
    "answerTamil": "வைரஸ் தாக்குதல், ஃபிஷிங், சேவை மறுப்பு தாக்குதல் (DoS), நடுவில் புகுந்து தாக்கும் முறை (MitM), ரேன்சம்வேர்.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch18-2m-1",
    "chapterNo": 18,
    "chapterName": "Tamil Computing",
    "chapterNameTamil": "தமிழ் கணினி",
    "marks": 2,
    "type": "short",
    "questionText": "List the search engines supported by Tamil language.",
    "questionTextTamil": "தமிழ் மொழியை ஆதரிக்கும் தேடுபொறிகளை பட்டியலிடுக.",
    "answer": "1. Google Tamil\n2. Bing Tamil\n3. Yahoo Tamil\n4. DuckDuckGo\n5. Thamizham search engine.",
    "answerTamil": "கூகுள், பிங், யாகூ, டக் டக் கோ, தமிழம் தேடுபொறி.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch18-2m-2",
    "chapterNo": 18,
    "chapterName": "Tamil Computing",
    "chapterNameTamil": "தமிழ் கணினி",
    "marks": 2,
    "type": "short",
    "questionText": "What are the keyboard layouts used in Android?",
    "questionTextTamil": "ஆண்ட்ராய்டில் பயன்படுத்தப்படும் தமிழ் விசைப்பலகை அமைப்புகள் யாவை?",
    "answer": "1. Tamil99 Keyboard\n2. Phonetic (Anjal) keyboard\n3. InScript Keyboard\n4. Gboard Tamil.",
    "answerTamil": "தமிழ் 99, ஒலியியல் (அஞ்சல்), இன்ஸ்கிரிப்ட், கூகுள் ஜிபோர்டு.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch18-2m-3",
    "chapterNo": 18,
    "chapterName": "Tamil Computing",
    "chapterNameTamil": "தமிழ் கணினி",
    "marks": 2,
    "type": "short",
    "questionText": "Write a short note about Tamil Programming Language.",
    "questionTextTamil": "தமிழ் நிரலாக்க மொழி பற்றி சிறு குறிப்பு வரைக.",
    "answer": "Tamil Programming Languages (like 'Ezhil') use Tamil syntax and keywords to teach coding and computational thinking in mother tongue.",
    "answerTamil": "தமிழ் மொழியிலேயே கட்டளைகளைக் கொண்டு நிரலாக்கம் செய்ய உதவும் மொழி (எ.கா: 'எழில்').",
    "isBookBack": true
  },
  {
    "id": "ca11-ch18-2m-4",
    "chapterNo": 18,
    "chapterName": "Tamil Computing",
    "chapterNameTamil": "தமிழ் கணினி",
    "marks": 2,
    "type": "short",
    "questionText": "What is TSCII?",
    "questionTextTamil": "TSCII என்றால் என்ன?",
    "answer": "TSCII (Tamil Standard Code for Information Interchange) is an 8-bit character encoding system created for Tamil digital computing.",
    "answerTamil": "தமிழ் எழுத்துக்களை கணினியில் குறிமுறைப்படுத்த உருவாக்கப்பட்ட 8-பிட் குறியீட்டு முறை.",
    "isBookBack": true
  },
  {
    "id": "ca11-ch18-2m-5",
    "chapterNo": 18,
    "chapterName": "Tamil Computing",
    "chapterNameTamil": "தமிழ் கணினி",
    "marks": 2,
    "type": "short",
    "questionText": "Write a short note on Tamil Virtual Academy.",
    "questionTextTamil": "தமிழ் இணையக் கல்விக்கழகம் (Tamil Virtual Academy) பற்றி சிறு குறிப்பு வரைக.",
    "answer": "Tamil Virtual Academy (TVA) is a Tamil Nadu Government organization providing Tamil education, courses, and a digital library online.",
    "answerTamil": "தமிழ்நாடு அரசால் இணையம் வழியே தமிழ் கல்வி மற்றும் மின்நூலகத்தை வழங்கும் தன்னாட்சி அமைப்பு.",
    "isBookBack": true
  }
];
