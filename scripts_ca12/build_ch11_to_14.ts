import fs from 'fs';
import { Question } from '../src/types';

// ==========================================
// CHAPTER 11: Network Examples and Protocols (21 questions: 10 1M, 6 2M, 3 3M, 2 5M)
// ==========================================
const ch11_1m: Question[] = [
  {
    id: "ca12-ch11-1m-1",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which generation of mobile network introduced broadband internet capabilities for the first time?",
    questionTextTamil: "அகலப்பட்டை (Broadband) இணைய சேவையை முதன்முதலில் அறிமுகப்படுத்திய மொபைல் தலைமுறை எது?",
    options: {
      A: "1G",
      B: "2G",
      C: "3G",
      D: "4G"
    },
    optionsTamil: {
      A: "1G",
      B: "2G",
      C: "3G",
      D: "4G"
    },
    correctOption: "C",
    answer: "C) 3G",
    answerTamil: "C) 3G",
    isBookBack: true
  },
  {
    id: "ca12-ch11-1m-2",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which protocol is used for secure communication over a computer network (encrypted web browsing)?",
    questionTextTamil: "பாதுகாப்பான வலைப்பின்னல் தொடர்புக்கு (குறியாக்கம் செய்யப்பட்ட வலை உலாவுதல்) பயன்படும் நெறிமுறை எது?",
    options: {
      A: "HTTP",
      B: "HTTPS",
      C: "FTP",
      D: "SMTP"
    },
    optionsTamil: {
      A: "HTTP",
      B: "HTTPS",
      C: "FTP",
      D: "SMTP"
    },
    correctOption: "B",
    answer: "B) HTTPS",
    answerTamil: "B) HTTPS",
    isBookBack: true
  },
  {
    id: "ca12-ch11-1m-3",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 1,
    type: "mcq",
    questionText: "What does TCP stand for?",
    questionTextTamil: "TCP என்பதன் விரிவாக்கம் என்ன?",
    options: {
      A: "Transmission Control Protocol",
      B: "Transfer Control Protocol",
      C: "Total Computer Protocol",
      D: "Telecommunication Control Protocol"
    },
    optionsTamil: {
      A: "Transmission Control Protocol",
      B: "Transfer Control Protocol",
      C: "Total Computer Protocol",
      D: "Telecommunication Control Protocol"
    },
    correctOption: "A",
    answer: "A) Transmission Control Protocol",
    answerTamil: "A) Transmission Control Protocol",
    isBookBack: true
  },
  {
    id: "ca12-ch11-1m-4",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which protocol is primarily used for transferring files from one host to another over the Internet?",
    questionTextTamil: "இணையத்தில் ஒரு கணினியிலிருந்து மற்றொரு கணினிக்கு கோப்புகளைப் பரிமாறப் பயன்படும் நெறிமுறை எது?",
    options: {
      A: "FTP",
      B: "SMTP",
      C: "DNS",
      D: "TELNET"
    },
    optionsTamil: {
      A: "FTP",
      B: "SMTP",
      C: "DNS",
      D: "TELNET"
    },
    correctOption: "A",
    answer: "A) FTP",
    answerTamil: "A) FTP",
    isBookBack: true
  },
  {
    id: "ca12-ch11-1m-5",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which protocol is responsible for sending outgoing emails between servers?",
    questionTextTamil: "சேவையகங்களுக்கு இடையே வெளிச்செல்லும் மின்னஞ்சல்களை அனுப்பும் நெறிமுறை எது?",
    options: {
      A: "POP3",
      B: "IMAP",
      C: "SMTP",
      D: "HTTP"
    },
    optionsTamil: {
      A: "POP3",
      B: "IMAP",
      C: "SMTP",
      D: "HTTP"
    },
    correctOption: "C",
    answer: "C) SMTP",
    answerTamil: "C) SMTP",
    isBookBack: true
  },
  {
    id: "ca12-ch11-1m-6",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 1,
    type: "mcq",
    questionText: "How many layers are there in the OSI reference model?",
    questionTextTamil: "OSI குறிப்பு மாதிரியில் எத்தனை அடுக்குகள் உள்ளன?",
    options: {
      A: "4",
      B: "5",
      C: "7",
      D: "8"
    },
    optionsTamil: {
      A: "4",
      B: "5",
      C: "7 அடுக்குகள்",
      D: "8"
    },
    correctOption: "C",
    answer: "C) 7",
    answerTamil: "C) 7 அடுக்குகள்",
    isBookBack: true
  },
  {
    id: "ca12-ch11-1m-7",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which layer of the OSI model is closest to the end user?",
    questionTextTamil: "OSI மாதிரியில் இறுதிப் பயனருக்கு மிக அருகில் உள்ள அடுக்கு எது?",
    options: {
      A: "Physical Layer",
      B: "Network Layer",
      C: "Application Layer",
      D: "Transport Layer"
    },
    optionsTamil: {
      A: "பருநிலை அடுக்கு",
      B: "பிணைய அடுக்கு",
      C: "பயன்பாட்டு அடுக்கு (Application Layer)",
      D: "போக்குவரத்து அடுக்கு"
    },
    correctOption: "C",
    answer: "C) Application Layer",
    answerTamil: "C) பயன்பாட்டு அடுக்கு (Application Layer)",
    isBookBack: true
  },
  {
    id: "ca12-ch11-1m-8",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 1,
    type: "mcq",
    questionText: "RFID stands for _________.",
    questionTextTamil: "RFID என்பதன் விரிவாக்கம் என்ன?",
    options: {
      A: "Radio Frequency Identification",
      B: "Radio Frequency Interface",
      C: "Random Frequency Indicator",
      D: "Remote Frequency Identifier"
    },
    optionsTamil: {
      A: "Radio Frequency Identification",
      B: "Radio Frequency Interface",
      C: "Random Frequency Indicator",
      D: "Remote Frequency Identifier"
    },
    correctOption: "A",
    answer: "A) Radio Frequency Identification",
    answerTamil: "A) Radio Frequency Identification",
    isBookBack: true
  },
  {
    id: "ca12-ch11-1m-9",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which of the following is a short-range wireless communication standard?",
    questionTextTamil: "குறுகிய தூர கம்பியில்லா தகவல் தொடர்புக்கான தரநிலை எது?",
    options: {
      A: "Bluetooth",
      B: "WAN",
      C: "Satellite",
      D: "Optical Fiber"
    },
    optionsTamil: {
      A: "புளூடூத் (Bluetooth)",
      B: "WAN",
      C: "செயற்கைக்கோள்",
      D: "ஒளியிழை"
    },
    correctOption: "A",
    answer: "A) Bluetooth",
    answerTamil: "A) புளூடூத் (Bluetooth)",
    isBookBack: true
  },
  {
    id: "ca12-ch11-1m-10",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 1,
    type: "mcq",
    questionText: "Which generation mobile technology features VoLTE and peak speeds of 100 Mbps to 1 Gbps?",
    questionTextTamil: "VoLTE மற்றும் 100 Mbps முதல் 1 Gbps வரை வேகத்தை வழங்கும் மொபைல் தலைமுறை எது?",
    options: {
      A: "2G",
      B: "3G",
      C: "4G LTE",
      D: "1G"
    },
    optionsTamil: {
      A: "2G",
      B: "3G",
      C: "4G LTE",
      D: "1G"
    },
    correctOption: "C",
    answer: "C) 4G LTE",
    answerTamil: "C) 4G LTE",
    isBookBack: true
  }
];

const ch11_2m: Question[] = [
  {
    id: "ca12-ch11-2m-1",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 2,
    type: "short",
    questionText: "Define Network Protocol.",
    questionTextTamil: "பிணைய நெறிமுறை (Network Protocol) - வரையறுக்கவும்.",
    answer: "A network protocol is a formal set of standardized rules and conventions that govern how data is formatted, addressed, transmitted, and received across a network.",
    answerTamil: "பிணைய நெறிமுறை என்பது ஒரு வலையமைப்பில் கணினிகளுக்கு இடையே தரவு எவ்வாறு வடிவமைக்கப்பட வேண்டும், அனுப்பப்பட வேண்டும் மற்றும் பெறப்பட வேண்டும் என்பதை வரையறுக்கும் விதிமுறைகளின் தொகுப்பாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch11-2m-2",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 2,
    type: "short",
    questionText: "What is TCP/IP?",
    questionTextTamil: "TCP/IP என்றால் என்ன?",
    answer: "TCP/IP (Transmission Control Protocol / Internet Protocol) is the fundamental communications protocol suite that connects hosts and transmits packet data across the Internet.",
    answerTamil: "TCP/IP என்பது இணையத்தில் உள்ள சாதனங்கள் ஒன்றோடொன்று தகவல்களை பாக்கெட்டுகளாகப் பிரித்து பாதுகாப்பாக அனுப்ப உதவும் அடிப்படை தகவல் தொடர்பு நெறிமுறைத் தொகுப்பாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch11-2m-3",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 2,
    type: "short",
    questionText: "What is FTP?",
    questionTextTamil: "FTP என்றால் என்ன?",
    answer: "FTP (File Transfer Protocol) is an application layer client-server protocol used for uploading and downloading files between a client computer and a remote server.",
    answerTamil: "FTP (File Transfer Protocol) என்பது இணையத்தில் வாடிக்கையாளர் கணினி மற்றும் தொலை சேவையகத்திற்கு இடையே கோப்புகளை பதிவேற்ற மற்றும் பதிவிறக்க பயன்படும் நெறிமுறையாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch11-2m-4",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 2,
    type: "short",
    questionText: "What is HTTP and HTTPS?",
    questionTextTamil: "HTTP மற்றும் HTTPS என்றால் என்ன?",
    answer: "HTTP (HyperText Transfer Protocol) transfers web pages in plaintext. HTTPS adds SSL/TLS cryptographic security to encrypt web communications.",
    answerTamil: "HTTP என்பது வலைப்பக்கங்களை எளிய உரையாக மாற்றும் நெறிமுறை. HTTPS என்பது SSL/TLS குறியாக்கப் பாதுகாப்பைச் சேர்த்து வலைப்பக்கங்களை பாதுகாப்பாகப் பரிமாறும் நெறிமுறையாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch11-2m-5",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 2,
    type: "short",
    questionText: "What is RFID technology?",
    questionTextTamil: "RFID தொழில்நுட்பம் என்றால் என்ன?",
    answer: "RFID (Radio Frequency Identification) uses electromagnetic radio waves to automatically capture and read digitally encoded data stored in RFID tags attached to objects.",
    answerTamil: "RFID (Radio Frequency Identification) என்பது பொருட்களில் இணைக்கப்பட்டுள்ள மின்னணு குறிச்சொற்களில் (tags) உள்ள தரவை மின்காந்த அலைகள் மூலம் தானாகவே படிக்கும் கம்பியில்லா தொழில்நுட்பமாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch11-2m-6",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 2,
    type: "short",
    questionText: "What is Li-Fi?",
    questionTextTamil: "Li-Fi என்றால் என்ன?",
    answer: "Li-Fi (Light Fidelity) is a high-speed, bidirectional wireless communication technology that uses visible LED light pulses to transmit data.",
    answerTamil: "Li-Fi (Light Fidelity) என்பது புலப்படும் LED ஒளிக்கதிர்களின் ஒளித்துடிப்புகளைப் பயன்படுத்தி மிக அதிக வேகத்தில் தரவை கடத்தும் கம்பியில்லா தொழில்நுட்பமாகும்.",
    isBookBack: true
  }
];

const ch11_3m: Question[] = [
  {
    id: "ca12-ch11-3m-1",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 3,
    type: "brief",
    questionText: "List and briefly describe any three mobile network generations (1G to 5G).",
    questionTextTamil: "ஏதேனும் மூன்று மொபைல் தலைமுறைகளை (1G to 5G) சுருக்கமாக விளக்குக.",
    answer: "1. 2G: Introduced digital voice transmission, SMS messaging, and basic data (GPRS/EDGE).\n2. 3G: Brought mobile broadband Internet, video calling, and faster data rates (up to 2 Mbps).\n3. 4G LTE: High-speed all-IP mobile broadband (up to 100 Mbps - 1 Gbps), HD video streaming, and VoLTE.",
    answerTamil: "1. 2G: டிஜிட்டல் குரல் அழைப்பு, SMS குறுஞ்செய்தி மற்றும் ஜிபிஆர்எஸ்.\n2. 3G: மொபைல் அகலப்பட்டை இணையம் மற்றும் வீடியோ அழைப்புகள் (2 Mbps வரை வேகம்).\n3. 4G LTE: மிக அதிவேக இணையம், HD வீடியோ ஸ்ட்ரீமிங் மற்றும் VoLTE அழைப்புகள் (1 Gbps வரை).",
    isBookBack: true
  },
  {
    id: "ca12-ch11-3m-2",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 3,
    type: "brief",
    questionText: "Differentiate Wi-Fi and Li-Fi.",
    questionTextTamil: "Wi-Fi மற்றும் Li-Fi ஆகியவற்றை வேறுபடுத்துக.",
    answer: "1. Wi-Fi uses Radio Frequency (RF) waves; Li-Fi uses Visible Light Spectrum (LEDs).\n2. Wi-Fi can pass through physical walls with moderate speed; Li-Fi cannot penetrate opaque walls, offering higher security and ultra-high data speeds.",
    answerTamil: "1. Wi-Fi ரேடியோ அலைகளைப் பயன்படுத்துகிறது; Li-Fi புலப்படும் ஒளி அலைகளைப் (LED) பயன்படுத்துகிறது.\n2. Wi-Fi சுவர்களை ஊடுருவிச் செல்லும்; Li-Fi சுவர்களை ஊடுருவாது, இதனால் கூடுதல் பாதுகாப்பும் மிக அதிக வேகமும் கிடைக்கிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch11-3m-3",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 3,
    type: "brief",
    questionText: "Explain SMTP, POP3, and IMAP protocols.",
    questionTextTamil: "SMTP, POP3 மற்றும் IMAP மின்னஞ்சல் நெறிமுறைகளை விளக்குக.",
    answer: "1. SMTP (Simple Mail Transfer Protocol): Sends emails from client to server and between mail servers.\n2. POP3 (Post Office Protocol 3): Downloads emails from server to local client and deletes them from server.\n3. IMAP (Internet Message Access Protocol): Syncs emails across multiple devices while keeping mail on the server.",
    answerTamil: "1. SMTP: மின்னஞ்சல்களை அனுப்புவதற்குப் பயன்படும் நெறிமுறை.\n2. POP3: மின்னஞ்சல்களை சேவையகத்திலிருந்து கணினிக்கு பதிவிறக்கம் செய்து சேவையகத்திலிருந்து நீக்கும்.\n3. IMAP: மின்னஞ்சல்களை சேவையகத்திலேயே வைத்து பல சாதனங்களில் ஒத்திசைக்க உதவும்.",
    isBookBack: true
  }
];

const ch11_5m: Question[] = [
  {
    id: "ca12-ch11-5m-1",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 5,
    type: "essay",
    questionText: "Explain the 7 layers of the OSI reference model with their functions.",
    questionTextTamil: "OSI குறிப்பு மாதிரியின் 7 அடுக்குகளையும் அவற்றின் பணிகளையும் விரிவாக விளக்குக.",
    answer: "The Open Systems Interconnection (OSI) model consists of 7 layers:\n\n1. Physical Layer: Transmits raw bit streams over physical hardware media (cables, radio waves).\n2. Data Link Layer: Handles node-to-node framing, physical MAC addressing, and error detection.\n3. Network Layer: Routes data packets across networks using logical IP addressing.\n4. Transport Layer: Ensures reliable end-to-end communication, segmentation, flow control (TCP/UDP).\n5. Session Layer: Manages, establishes, and terminates communication sessions between applications.\n6. Presentation Layer: Handles data translation, character code conversion, data compression, and encryption/decryption (SSL).\n7. Application Layer: Provides direct network interface to user software applications (HTTP, FTP, SMTP, DNS).",
    answerTamil: "OSI குறிப்பு மாதிரியின் 7 அடுக்குகள்:\n\n1. பருநிலை அடுக்கு (Physical): சமிக்ஞைகளை பிட்டுகளாக கம்பிகள் மூலம் அனுப்புகிறது.\n2. தரவு இணைப்பு அடுக்கு (Data Link): முனையங்களுக்கு இடையே பிழை திருத்தம் மற்றும் MAC முகவரியை நிர்வகிக்கிறது.\n3. பிணைய அடுக்கு (Network): IP முகவரி மூலம் பாக்கெட்டுகளின் சிறந்த பாதையை (ரூட்டிங்) தேர்வு செய்கிறது.\n4. போக்குவரத்து அடுக்கு (Transport): தரவை பிரித்து நம்பகமான முழுமையான பரிமாற்றத்தை (TCP/UDP) உறுதி செய்கிறது.\n5. அமர்வு அடுக்கு (Session): பயன்பாடுகளுக்கு இடையே தொடர்பை நிறுவி நிர்வகிக்கிறது.\n6. விளக்கக் காட்சி அடுக்கு (Presentation): தரவை மொழிபெயர்த்தல், சுருக்குதல் மற்றும் குறியாக்கம் செய்கிறது.\n7. பயன்பாட்டு அடுக்கு (Application): பயனரின் மென்பொருளுக்கு நேரடி நெறிமுறை சேவைகளை (HTTP, FTP, SMTP) வழங்குகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch11-5m-2",
    chapterNo: 11,
    chapterName: "Network Examples and Protocols",
    chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 5,
    type: "essay",
    questionText: "Discuss the evolution of Mobile Wireless Communication from 1G to 5G in detail.",
    questionTextTamil: "1G முதல் 5G வரையிலான மொபைல் கம்பியில்லா தகவல் தொடர்பு வளர்ச்சியினை விரிவாக விவாதிக்கவும்.",
    answer: "Evolution of Mobile Generations:\n\n1. 1G (First Generation - 1980s):\n- Analog cellular voice calls only.\n- Speeds up to 2.4 kbps with poor voice quality and no security.\n\n2. 2G (Second Generation - 1990s):\n- Digital voice calls, SMS, MMS.\n- GSM / CDMA technology with speeds up to 64 kbps (GPRS/EDGE).\n\n3. 3G (Third Generation - 2000s):\n- High-speed mobile broadband, mobile web browsing, video calling.\n- Speeds up to 2 Mbps (WCDMA / UMTS).\n\n4. 4G (Fourth Generation - 2010s):\n- All-IP network, VoLTE, HD streaming, mobile gaming.\n- Speeds from 100 Mbps up to 1 Gbps (LTE Advanced).\n\n5. 5G (Fifth Generation - 2020s+):\n- Ultra-low latency (<1 ms), massive IoT connectivity, multi-Gbps speeds (up to 20 Gbps).\n- Powers smart cities, autonomous vehicles, and AR/VR ecosystems.",
    answerTamil: "மொபைல் தலைமுறைகளின் வளர்ச்சி:\n\n1. 1G (1980கள்): அனலாக் குரல் அழைப்பு மட்டுமே (2.4 kbps வரை).\n2. 2G (1990கள்): டிஜிட்டல் குரல் அழைப்பு, SMS குறுஞ்செய்தி மற்றும் GPRS தரவு.\n3. 3G (2000கள்): அதிவேக மொபைல் பிராட்பேண்ட், வீடியோ அழைப்புகள் (2 Mbps வரை).\n4. 4G LTE (2010கள்): HD வீடியோ ஸ்ட்ரீமிங், VoLTE, ஆன்லைன் விளையாட்டுகள் (100 Mbps முதல் 1 Gbps வரை).\n5. 5G (2020கள்+): மிகக் குறைந்த தாமதம் (<1ms), 20 Gbps வரையிலான பிரம்மாண்ட வேகம், ஸ்மார்ட் நகரங்கள் மற்றும் IoT சாதனங்களின் இணைப்பு.",
    isBookBack: true
  }
];

// ==========================================
// CHAPTER 12: DNS (Domain Name System) (20 questions: 10 1M, 5 2M, 3 3M, 2 5M)
// ==========================================
const ch12_1m: Question[] = [
  {
    id: "ca12-ch12-1m-1",
    chapterNo: 12,
    chapterName: "DNS (Domain Name System)",
    chapterNameTamil: "டொமைன் பெயர் முறைமை (DNS)",
    marks: 1,
    type: "mcq",
    questionText: "DNS stands for _________.",
    questionTextTamil: "DNS என்பதன் விரிவாக்கம் என்ன?",
    options: {
      A: "Domain Name System",
      B: "Data Network Service",
      C: "Digital Name Server",
      D: "Direct Name Storage"
    },
    optionsTamil: {
      A: "Domain Name System",
      B: "Data Network Service",
      C: "Digital Name Server",
      D: "Direct Name Storage"
    },
    correctOption: "A",
    answer: "A) Domain Name System",
    answerTamil: "A) Domain Name System",
    isBookBack: true
  },
  {
    id: "ca12-ch12-1m-2",
    chapterNo: 12,
    chapterName: "DNS (Domain Name System)",
    chapterNameTamil: "டொமைன் பெயர் முறைமை (DNS)",
    marks: 1,
    type: "mcq",
    questionText: "Which organization coordinates the global assignment of domain names and IP addresses?",
    questionTextTamil: "டொமைன் பெயர்கள் மற்றும் IP முகவரிகளின் உலகளாவிய ஒதுக்கீட்டை ஒருங்கிணைக்கும் அமைப்பு எது?",
    options: {
      A: "ICANN",
      B: "IEEE",
      C: "W3C",
      D: "ISO"
    },
    optionsTamil: {
      A: "ஐகான் (ICANN)",
      B: "IEEE",
      C: "W3C",
      D: "ISO"
    },
    correctOption: "A",
    answer: "A) ICANN",
    answerTamil: "A) ஐகான் (ICANN)",
    isBookBack: true
  },
  {
    id: "ca12-ch12-1m-3",
    chapterNo: 12,
    chapterName: "DNS (Domain Name System)",
    chapterNameTamil: "டொமைன் பெயர் முறைமை (DNS)",
    marks: 1,
    type: "mcq",
    questionText: "How many bits are used in an IPv4 address?",
    questionTextTamil: "IPv4 முகவரியில் எத்தனை பிட்டுகள் பயன்படுத்தப்படுகின்றன?",
    options: {
      A: "16 bits",
      B: "32 bits",
      C: "64 bits",
      D: "128 bits"
    },
    optionsTamil: {
      A: "16 பிட்டுகள்",
      B: "32 பிட்டுகள்",
      C: "64 பிட்டுகள்",
      D: "128 பிட்டுகள்"
    },
    correctOption: "B",
    answer: "B) 32 bits",
    answerTamil: "B) 32 பிட்டுகள்",
    isBookBack: true
  },
  {
    id: "ca12-ch12-1m-4",
    chapterNo: 12,
    chapterName: "DNS (Domain Name System)",
    chapterNameTamil: "டொமைன் பெயர் முறைமை (DNS)",
    marks: 1,
    type: "mcq",
    questionText: "How many bits are used in an IPv6 address?",
    questionTextTamil: "IPv6 முகவரியில் எத்தனை பிட்டுகள் பயன்படுத்தப்படுகின்றன?",
    options: {
      A: "32 bits",
      B: "64 bits",
      C: "128 bits",
      D: "256 bits"
    },
    optionsTamil: {
      A: "32 பிட்டுகள்",
      B: "64 பிட்டுகள்",
      C: "128 பிட்டுகள்",
      D: "256 பிட்டுகள்"
    },
    correctOption: "C",
    answer: "C) 128 bits",
    answerTamil: "C) 128 பிட்டுகள்",
    isBookBack: true
  },
  {
    id: "ca12-ch12-1m-5",
    chapterNo: 12,
    chapterName: "DNS (Domain Name System)",
    chapterNameTamil: "டொமைன் பெயர் முறைமை (DNS)",
    marks: 1,
    type: "mcq",
    questionText: "In the URL 'www.tn.gov.in', which part represents the Top Level Domain (TLD)?",
    questionTextTamil: "'www.tn.gov.in' என்ற முகவரியில் முதல் நிலை டொமைன் (TLD) எது?",
    options: {
      A: "www",
      B: "tn",
      C: "gov",
      D: ".in"
    },
    optionsTamil: {
      A: "www",
      B: "tn",
      C: "gov",
      D: ".in (மற்றும் .gov)",
    },
    correctOption: "D",
    answer: "D) .in",
    answerTamil: "D) .in",
    isBookBack: true
  },
  {
    id: "ca12-ch12-1m-6",
    chapterNo: 12,
    chapterName: "DNS (Domain Name System)",
    chapterNameTamil: "டொமைன் பெயர் முறைமை (DNS)",
    marks: 1,
    type: "mcq",
    questionText: "Which generic Top Level Domain (gTLD) is intended for commercial organizations?",
    questionTextTamil: "வணிக அமைப்புகளுக்கான பொதுவான முதல் நிலை டொமைன் எது?",
    options: {
      A: ".org",
      B: ".edu",
      C: ".com",
      D: ".mil"
    },
    optionsTamil: {
      A: ".org",
      B: ".edu",
      C: ".com",
      D: ".mil"
    },
    correctOption: "C",
    answer: "C) .com",
    answerTamil: "C) .com",
    isBookBack: true
  },
  {
    id: "ca12-ch12-1m-7",
    chapterNo: 12,
    chapterName: "DNS (Domain Name System)",
    chapterNameTamil: "டொமைன் பெயர் முறைமை (DNS)",
    marks: 1,
    type: "mcq",
    questionText: "URL stands for _________.",
    questionTextTamil: "URL என்பதன் விரிவாக்கம் என்ன?",
    options: {
      A: "Uniform Resource Locator",
      B: "Universal Resource Link",
      C: "Uniform Record Locator",
      D: "United Resource Location"
    },
    optionsTamil: {
      A: "Uniform Resource Locator",
      B: "Universal Resource Link",
      C: "Uniform Record Locator",
      D: "United Resource Location"
    },
    correctOption: "A",
    answer: "A) Uniform Resource Locator",
    answerTamil: "A) Uniform Resource Locator",
    isBookBack: true
  },
  {
    id: "ca12-ch12-1m-8",
    chapterNo: 12,
    chapterName: "DNS (Domain Name System)",
    chapterNameTamil: "டொமைன் பெயர் முறைமை (DNS)",
    marks: 1,
    type: "mcq",
    questionText: "Which country code TLD (ccTLD) belongs to India?",
    questionTextTamil: "இந்தியாவிற்கான நாட்டின் குறியீட்டு டொமைன் (ccTLD) எது?",
    options: {
      A: ".us",
      B: ".in",
      C: ".uk",
      D: ".au"
    },
    optionsTamil: {
      A: ".us",
      B: ".in",
      C: ".uk",
      D: ".au"
    },
    correctOption: "B",
    answer: "B) .in",
    answerTamil: "B) .in",
    isBookBack: true
  },
  {
    id: "ca12-ch12-1m-9",
    chapterNo: 12,
    chapterName: "DNS (Domain Name System)",
    chapterNameTamil: "டொமைன் பெயர் முறைமை (DNS)",
    marks: 1,
    type: "mcq",
    questionText: "What is the primary role of a DNS Server?",
    questionTextTamil: "DNS சேவையகத்தின் முதன்மைப் பணி என்ன?",
    options: {
      A: "Translating domain names into IP addresses",
      B: "Creating web pages",
      C: "Connecting hard drives",
      D: "Compressing images"
    },
    optionsTamil: {
      A: "டொமைன் பெயர்களை IP முகவரிகளாக மாற்றுதல்",
      B: "வலைப்பக்கங்களை உருவாக்குதல்",
      C: "வன்வட்டுகளை இணைத்தல்",
      D: "படங்களை சுருக்குதல்"
    },
    correctOption: "A",
    answer: "A) Translating domain names into IP addresses",
    answerTamil: "A) டொமைன் பெயர்களை IP முகவரிகளாக மாற்றுதல்",
    isBookBack: true
  },
  {
    id: "ca12-ch12-1m-10",
    chapterNo: 12,
    chapterName: "DNS (Domain Name System)",
    chapterNameTamil: "டொமைன் பெயர் முறைமை (DNS)",
    marks: 1,
    type: "mcq",
    questionText: "A DNS root name server is represented by a single _________.",
    questionTextTamil: "DNS ரூட் சேவையகம் எந்தக் குறியீட்டால் குறிக்கப்படுகிறது?",
    options: {
      A: "slash (/)",
      B: "dot (.)",
      C: "colon (:)",
      D: "hyphen (-)"
    },
    optionsTamil: {
      A: "சாய்வுக் கோடு (/)",
      B: "புள்ளி (.)",
      C: "முக்காற்புள்ளி (:)",
      D: "இணைப்புக் கோடு (-)"
    },
    correctOption: "B",
    answer: "B) dot (.)",
    answerTamil: "B) புள்ளி (.)",
    isBookBack: true
  }
];

const ch12_2m: Question[] = [
  {
    id: "ca12-ch12-2m-1",
    chapterNo: 12,
    chapterName: "DNS (Domain Name System)",
    chapterNameTamil: "டொமைன் பெயர் முறைமை (DNS)",
    marks: 2,
    type: "short",
    questionText: "What is DNS (Domain Name System)?",
    questionTextTamil: "டொமைன் பெயர் முறைமை (DNS) என்றால் என்ன?",
    answer: "DNS is a hierarchical distributed naming system that translates human-readable domain names (like www.google.com) into numerical IP addresses (like 142.250.190.46) used by computers.",
    answerTamil: "DNS என்பது மனிதர்கள் எளிதில் நினைவில் வைத்துக் கொள்ளக்கூடிய டொமைன் பெயர்களை (எ.கா: www.google.com) கணினிகள் புரிந்துகொள்ளும் எண்வடிவ IP முகவரிகளாக மாற்றும் படிநிலை பெயரிடல் அமைப்பாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch12-2m-2",
    chapterNo: 12,
    chapterName: "DNS (Domain Name System)",
    chapterNameTamil: "டொமைன் பெயர் முறைமை (DNS)",
    marks: 2,
    type: "short",
    questionText: "What is an IP address?",
    questionTextTamil: "IP முகவரி என்றால் என்ன?",
    answer: "An IP (Internet Protocol) address is a unique numerical identifier assigned to every device connected to a computer network that uses the Internet Protocol for communication.",
    answerTamil: "IP முகவரி என்பது இணையத்தில் இணைக்கப்பட்டுள்ள ஒவ்வொரு சாதனத்திற்கும் தனித்துவமாக ஒதுக்கப்படும் எண்வடிவ முகவரியாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch12-2m-3",
    chapterNo: 12,
    chapterName: "DNS (Domain Name System)",
    chapterNameTamil: "டொமைன் பெயர் முறைமை (DNS)",
    marks: 2,
    type: "short",
    questionText: "What is URL and write its parts?",
    questionTextTamil: "URL என்றால் என்ன? அதன் பகுதிகளை எழுதுக.",
    answer: "URL (Uniform Resource Locator) is the global web address of a resource. Its components are: Protocol (http://), Domain Name / Host (www.example.com), and File Path (/index.html).",
    answerTamil: "URL என்பது இணையத்தில் உள்ள ஒரு வளத்தின் உலகளாவிய முகவரியாகும். அதன் பகுதிகள்: நெறிமுறை (http://), டொமைன் பெயர் (www.example.com) மற்றும் கோப்புப் பாதை (/index.html).",
    isBookBack: true
  },
  {
    id: "ca12-ch12-2m-4",
    chapterNo: 12,
    chapterName: "DNS (Domain Name System)",
    chapterNameTamil: "டொமைன் பெயர் முறைமை (DNS)",
    marks: 2,
    type: "short",
    questionText: "What is ICANN?",
    questionTextTamil: "ICANN என்றால் என்ன?",
    answer: "ICANN (Internet Corporation for Assigned Names and Numbers) is a non-profit global organization that oversees the management of IP addresses, domain names, and root server systems.",
    answerTamil: "ICANN என்பது உலகளவில் IP முகவரிகள், டொமைன் பெயர்கள் மற்றும் ரூட் சேவையகங்களை ஒருங்கிணைத்து நிர்வகிக்கும் ஒரு சர்வதேச லாப நோக்கற்ற அமைப்பாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch12-2m-5",
    chapterNo: 12,
    chapterName: "DNS (Domain Name System)",
    chapterNameTamil: "டொமைன் பெயர் முறைமை (DNS)",
    marks: 2,
    type: "short",
    questionText: "What are generic Top Level Domains (gTLD)? Give examples.",
    questionTextTamil: "பொதுவான முதல் நிலை டொமைன்கள் (gTLD) என்றால் என்ன? உதாரணம் தருக.",
    answer: "gTLDs are top-level domains classified by organization type, such as .com (commercial), .org (organization), .edu (educational), and .gov (government).",
    answerTamil: "gTLD என்பது அமைப்புகளின் வகையைக் குறிக்கும் பொதுவான முதல்நிலை டொமைன்கள் ஆகும். எ.கா: .com (வணிகம்), .org (அமைப்பு), .edu (கல்வி), .gov (அரசு).",
    isBookBack: true
  }
];

const ch12_3m: Question[] = [
  {
    id: "ca12-ch12-3m-1",
    chapterNo: 12,
    chapterName: "DNS (Domain Name System)",
    chapterNameTamil: "டொமைன் பெயர் முறைமை (DNS)",
    marks: 3,
    type: "brief",
    questionText: "Differentiate IPv4 and IPv6.",
    questionTextTamil: "IPv4 மற்றும் IPv6 ஆகியவற்றை வேறுபடுத்துக.",
    answer: "1. IPv4 is a 32-bit address written in dotted-decimal format (e.g., 192.168.1.1); provides ~4.3 billion addresses.\n2. IPv6 is a 128-bit address written in hexadecimal separated by colons (e.g., 2001:0db8::1); provides virtually unlimited addresses (~3.4 x 10^38).",
    answerTamil: "1. IPv4: 32 பிட் முகவரி, புள்ளிகளால் பிரிக்கப்பட்ட பதின்ம வடிவம் (எ.கா: 192.168.1.1), சுமார் 4.3 பில்லியன் முகவரிகள் மட்டுமே.\n2. IPv6: 128 பிட் முகவரி, முக்காற்புள்ளிகளால் பிரிக்கப்பட்ட பதினாறும வடிவம் (எ.கா: 2001:db8::1), எண்ணற்ற வரம்பற்ற முகவரிகளை வழங்குகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch12-3m-2",
    chapterNo: 12,
    chapterName: "DNS (Domain Name System)",
    chapterNameTamil: "டொமைன் பெயர் முறைமை (DNS)",
    marks: 3,
    type: "brief",
    questionText: "What are the components of DNS?",
    questionTextTamil: "DNS-ன் முக்கிய கூறுகள் யாவை?",
    answer: "The three main components of DNS are:\n1. Domain Name Space: A tree-structured database hierarchy.\n2. Name Server: Server that stores and resolves DNS records.\n3. DNS Resolver: Client program that requests IP address translation from name servers.",
    answerTamil: "DNS-ன் மூன்று முக்கிய கூறுகள்:\n1. டொமைன் பெயர் வெளி (Domain Name Space): மரம் போன்ற படிநிலை அமைப்பு.\n2. பெயர் சேவையகம் (Name Server): DNS பதிவுகளை சேமித்து வழங்கும் சேவையகம்.\n3. DNS தீர்வி (Resolver): பயனர் கணினியிலிருந்து IP முகவரியைக் கேட்டுப் பெறும் நிரல்.",
    isBookBack: true
  },
  {
    id: "ca12-ch12-3m-3",
    chapterNo: 12,
    chapterName: "DNS (Domain Name System)",
    chapterNameTamil: "டொமைன் பெயர் முறைமை (DNS)",
    marks: 3,
    type: "brief",
    questionText: "What is Country Code Top Level Domain (ccTLD)? Give examples.",
    questionTextTamil: "நாட்டின் குறியீட்டு முதல் நிலை டொமைன் (ccTLD) என்றால் என்ன? உதாரணம் தருக.",
    answer: "ccTLDs are two-letter country code domain suffixes reserved for specific sovereign nations or territories.\nExamples: .in (India), .uk (United Kingdom), .us (United States), .au (Australia), .ca (Canada).",
    answerTamil: "ccTLD என்பது ஒரு குறிப்பிட்ட நாட்டைக் குறிக்கப் பயன்படும் இரண்டு எழுத்து முதல்நிலை டொமைன் ஆகும்.\nஎடுத்துக்காட்டுகள்: .in (இந்தியா), .uk (இங்கிலாந்து), .us (அமெரிக்கா), .au (ஆஸ்திரேலியா).",
    isBookBack: true
  }
];

const ch12_5m: Question[] = [
  {
    id: "ca12-ch12-5m-1",
    chapterNo: 12,
    chapterName: "DNS (Domain Name System)",
    chapterNameTamil: "டொமைன் பெயர் முறைமை (DNS)",
    marks: 5,
    type: "essay",
    questionText: "Explain the step-by-step working process of DNS resolution.",
    questionTextTamil: "DNS செயல்படும் வழிமுறையை (DNS Resolution Process) படிநிலைகளுடன் விரிவாக விளக்குக.",
    answer: "Step-by-step DNS Resolution Workflow:\n\n1. User Query: User types a domain name (e.g., www.example.com) into a web browser.\n2. Local Resolver & Cache: The browser/OS checks local cache. If not found, request is forwarded to the ISP DNS Recursive Resolver.\n3. Root Name Server: Resolver queries the DNS Root Server (represented by .), which returns the authoritative TLD Server address (e.g., .com TLD server).\n4. TLD Name Server: Resolver queries the .com TLD server, which responds with the IP address of the authoritative nameserver for example.com.\n5. Authoritative Name Server: Resolver queries authoritative server, which returns the exact matching IP address.\n6. Response & Caching: Resolver caches the IP and returns it to browser, which immediately establishes HTTP/HTTPS connection.",
    answerTamil: "DNS செயல்படும் படிநிலைகள்:\n\n1. பயனர் வினவல்: பயனர் வலை உலாவியில் டொமைன் பெயரை (எ.கா: www.example.com) உள்ளிடுகிறார்.\n2. உள்ளூர் தீர்வி (Resolver): உலாவியின் தற்காலிக நினைவகம் சரிபார்க்கப்பட்டு, ISP-யின் DNS தீர்விக்கு அனுப்பப்படுகிறது.\n3. ரூட் சேவையகம் (Root Server): தீர்வி ரூட் சேவையகத்தை அணுக, அது TLD சேவையகத்தின் (.com) முகவரியைத் தருகிறது.\n4. TLD சேவையகம்: .com சேவையகம் குறிப்பிட்ட டொமைனுக்கான அதிகாரப்பூர்வ சேவையக முகவரியைத் தரும்.\n5. அதிகாரப்பூர்வ சேவையகம் (Authoritative Server): இது சரியான IP முகவரியை தீர்விக்குத் தரும்.\n6. முடிவு & சேமிப்பு: தீர்வி IP முகவரியைப் பெற்று உலாவிக்கு அனுப்ப, உலாவி இணையப் பக்கத்தைத் திறக்கிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch12-5m-2",
    chapterNo: 12,
    chapterName: "DNS (Domain Name System)",
    chapterNameTamil: "டொமைன் பெயர் முறைமை (DNS)",
    marks: 5,
    type: "essay",
    questionText: "Explain Domain Name Space and its hierarchical structure with a neat diagram description.",
    questionTextTamil: "டொமைன் பெயர் வெளி (Domain Name Space) மற்றும் அதன் படிநிலை அமைப்பை விரிவாக விளக்குக.",
    answer: "Domain Name Space is an inverted tree hierarchical structure with the Root at the top:\n\n1. Root Level (represented by '.' dot):\nThe top of the hierarchy managed by 13 root server clusters globally.\n\n2. Top Level Domains (TLD):\nImmediately below root. Divided into:\n- Generic TLDs (gTLD): .com, .org, .edu, .net\n- Country Code TLDs (ccTLD): .in, .uk, .us, .au\n\n3. Second Level Domains (SLD):\nDomain name registered by organizations/companies (e.g., 'google' in google.com, 'tn' in tn.gov.in).\n\n4. Subdomains / Third Level Domains:\nSpecific division under domain (e.g., 'mail' in mail.google.com or 'www').",
    answerTamil: "டொமைன் பெயர் வெளி என்பது தலைகீழ் மரக் கிளை வடிவிலான படிநிலை அமைப்பாகும்:\n\n1. ரூட் நிலை (Root Level - .):\nபடிநிலையின் உச்சிப்பகுதி; உலகளவில் 13 ரூட் சேவையகக் குழுக்களால் நிர்வகிக்கப்படுகிறது.\n\n2. முதல் நிலை டொமைன்கள் (TLD):\n- பொதுவானவை (gTLD): .com, .org, .net, .edu.\n- நாடுகளுக்கானவை (ccTLD): .in, .uk, .us, .au.\n\n3. இரண்டாம் நிலை டொமைன்கள் (SLD):\nநிறுவனங்கள் தங்களின் பெயரில் பதிவு செய்வது (எ.கா: google.com-ல் google).\n\n4. துணை டொமைன்கள் (Sub-domains):\nகுறிப்பிட்ட சேவைப் பிரிவு (எ.கா: mail.google.com அல்லது www).",
    isBookBack: true
  }
];

// ==========================================
// CHAPTER 13: Network Cabling (25 questions: 10 1M, 6 2M, 6 3M, 3 5M)
// ==========================================
const ch13_1m: Question[] = [
  {
    id: "ca12-ch13-1m-1",
    chapterNo: 13,
    chapterName: "Network Cabling",
    chapterNameTamil: "பிணைய வடங்கள் மற்றும் வன்பொருட்கள்",
    marks: 1,
    type: "mcq",
    questionText: "Which connector is standardly used for Ethernet twisted pair network cables?",
    questionTextTamil: "ஈதர்நெட் முறுக்கப்பட்ட இணைக் கம்பிகளில் பயன்படும் நிலையான இணைப்பான் எது?",
    options: {
      A: "RJ-45",
      B: "RJ-11",
      C: "BNC",
      D: "USB"
    },
    optionsTamil: {
      A: "RJ-45",
      B: "RJ-11",
      C: "BNC",
      D: "USB"
    },
    correctOption: "A",
    answer: "A) RJ-45",
    answerTamil: "A) RJ-45",
    isBookBack: true
  },
  {
    id: "ca12-ch13-1m-2",
    chapterNo: 13,
    chapterName: "Network Cabling",
    chapterNameTamil: "பிணைய வடங்கள் மற்றும் வன்பொருட்கள்",
    marks: 1,
    type: "mcq",
    questionText: "How many pins are present in an RJ-45 connector?",
    questionTextTamil: "RJ-45 இணைப்பானில் எத்தனை ஊசிகள் (pins) உள்ளன?",
    options: {
      A: "4",
      B: "6",
      C: "8",
      D: "10"
    },
    optionsTamil: {
      A: "4",
      B: "6",
      C: "8 ஊசிகள்",
      D: "10"
    },
    correctOption: "C",
    answer: "C) 8",
    answerTamil: "C) 8 ஊசிகள்",
    isBookBack: true
  },
  {
    id: "ca12-ch13-1m-3",
    chapterNo: 13,
    chapterName: "Network Cabling",
    chapterNameTamil: "பிணைய வடங்கள் மற்றும் வன்பொருட்கள்",
    marks: 1,
    type: "mcq",
    questionText: "Which cable transmits data signals as light pulses through glass or plastic cores?",
    questionTextTamil: "கண்ணாடி அல்லது பிளாஸ்டிக் வழியாக ஒளித்துடிப்புகளாக சமிக்ஞைகளை கடத்தும் வடம் எது?",
    options: {
      A: "Coaxial Cable",
      B: "Fiber Optic Cable",
      C: "UTP Cable",
      D: "STP Cable"
    },
    optionsTamil: {
      A: "இணை அச்சு வடம்",
      B: "ஒளியிழை வடம் (Fiber Optic Cable)",
      C: "UTP வடம்",
      D: "STP வடம்"
    },
    correctOption: "B",
    answer: "B) Fiber Optic Cable",
    answerTamil: "B) ஒளியிழை வடம் (Fiber Optic Cable)",
    isBookBack: true
  },
  {
    id: "ca12-ch13-1m-4",
    chapterNo: 13,
    chapterName: "Network Cabling",
    chapterNameTamil: "பிணைய வடங்கள் மற்றும் வன்பொருட்கள்",
    marks: 1,
    type: "mcq",
    questionText: "Which cable consists of 4 pairs of color-coded wires twisted together?",
    questionTextTamil: "4 ஜோடி வண்ணக் குறியீட்டு கம்பிகள் முறுக்கப்பட்ட அமைப்பைக் கொண்ட வடம் எது?",
    options: {
      A: "Twisted Pair Cable",
      B: "Coaxial Cable",
      C: "Optical Fiber",
      D: "Power Cable"
    },
    optionsTamil: {
      A: "முறுக்கப்பட்ட இணை வடம் (Twisted Pair)",
      B: "இணை அச்சு வடம்",
      C: "ஒளியிழை",
      D: "மின்கம்பி"
    },
    correctOption: "A",
    answer: "A) Twisted Pair Cable",
    answerTamil: "A) முறுக்கப்பட்ட இணை வடம் (Twisted Pair)",
    isBookBack: true
  },
  {
    id: "ca12-ch13-1m-5",
    chapterNo: 13,
    chapterName: "Network Cabling",
    chapterNameTamil: "பிணைய வடங்கள் மற்றும் வன்பொருட்கள்",
    marks: 1,
    type: "mcq",
    questionText: "Which device connects two different networks operating on different protocols?",
    questionTextTamil: "வெவ்வேறு நெறிமுறைகளைக் கொண்ட இரண்டு வெவ்வேறு வலையமைப்புகளை இணைக்கும் சாதனம் எது?",
    options: {
      A: "Hub",
      B: "Repeater",
      C: "Gateway",
      D: "Bridge"
    },
    optionsTamil: {
      A: "Hub",
      B: "Repeater",
      C: "நுழைவாயில் (Gateway)",
      D: "Bridge"
    },
    correctOption: "C",
    answer: "C) Gateway",
    answerTamil: "C) நுழைவாயில் (Gateway)",
    isBookBack: true
  },
  {
    id: "ca12-ch13-1m-6",
    chapterNo: 13,
    chapterName: "Network Cabling",
    chapterNameTamil: "பிணைய வடங்கள் மற்றும் வன்பொருட்கள்",
    marks: 1,
    type: "mcq",
    questionText: "Which tool is used to attach an RJ-45 connector securely onto a network cable?",
    questionTextTamil: "RJ-45 இணைப்பானை பிணைய வடத்துடன் பொருத்தப் பயன்படும் கருவி எது?",
    options: {
      A: "Crimping Tool",
      B: "Wire Stripper",
      C: "Soldering Iron",
      D: "Screw Driver"
    },
    optionsTamil: {
      A: "கிரிம்பிங் கருவி (Crimping Tool)",
      B: "வயர் ஸ்ட்ரிப்பர்",
      C: "சால்டரிங் இரும்பு",
      D: "திருப்புளி"
    },
    correctOption: "A",
    answer: "A) Crimping Tool",
    answerTamil: "A) கிரிம்பிங் கருவி (Crimping Tool)",
    isBookBack: true
  },
  {
    id: "ca12-ch13-1m-7",
    chapterNo: 13,
    chapterName: "Network Cabling",
    chapterNameTamil: "பிணைய வடங்கள் மற்றும் வன்பொருட்கள்",
    marks: 1,
    type: "mcq",
    questionText: "Which Ethernet cable wiring type connects two identical devices directly (e.g., Computer to Computer)?",
    questionTextTamil: "இரண்டு ஒரே மாதிரியான சாதனங்களை (கணினி to கணினி) நேரடியாக இணைக்கப் பயன்படும் வடம் எது?",
    options: {
      A: "Straight-through Cable",
      B: "Crossover Cable",
      C: "Coaxial Cable",
      D: "Serial Cable"
    },
    optionsTamil: {
      A: "நேரடி வடம் (Straight-through)",
      B: "குறுக்கு வடம் (Crossover Cable)",
      C: "இணை அச்சு வடம்",
      D: "தொடர் வடம்"
    },
    correctOption: "B",
    answer: "B) Crossover Cable",
    answerTamil: "B) குறுக்கு வடம் (Crossover Cable)",
    isBookBack: true
  },
  {
    id: "ca12-ch13-1m-8",
    chapterNo: 13,
    chapterName: "Network Cabling",
    chapterNameTamil: "பிணைய வடங்கள் மற்றும் வன்பொருட்கள்",
    marks: 1,
    type: "mcq",
    questionText: "Which device operates at Layer 2 and forwards data frames based on destination MAC addresses?",
    questionTextTamil: "MAC முகவரியின் அடிப்படையில் தரவு பிரேம்களை அனுப்பும் அடுக்கு 2 சாதனம் எது?",
    options: {
      A: "Hub",
      B: "Switch",
      C: "Repeater",
      D: "Modem"
    },
    optionsTamil: {
      A: "Hub",
      B: "சுவிட்ச் (Switch)",
      C: "Repeater",
      D: "Modem"
    },
    correctOption: "B",
    answer: "B) Switch",
    answerTamil: "B) சுவிட்ச் (Switch)",
    isBookBack: true
  },
  {
    id: "ca12-ch13-1m-9",
    chapterNo: 13,
    chapterName: "Network Cabling",
    chapterNameTamil: "பிணைய வடங்கள் மற்றும் வன்பொருட்கள்",
    marks: 1,
    type: "mcq",
    questionText: "Which device regenerates and amplifies weak network signals across long cable lengths?",
    questionTextTamil: "நீண்ட தூரத்திற்கு பலவீனமடையும் சமிக்ஞைகளை பெருக்கி மீண்டும் அனுப்பும் சாதனம் எது?",
    options: {
      A: "Repeater",
      B: "Bridge",
      C: "Router",
      D: "Modem"
    },
    optionsTamil: {
      A: "ரிப்பீட்டர் (Repeater)",
      B: "பிரிட்ஜ்",
      C: "ரூட்டர்",
      D: "மோடம்"
    },
    correctOption: "A",
    answer: "A) Repeater",
    answerTamil: "A) ரிப்பீட்டர் (Repeater)",
    isBookBack: true
  },
  {
    id: "ca12-ch13-1m-10",
    chapterNo: 13,
    chapterName: "Network Cabling",
    chapterNameTamil: "பிணைய வடங்கள் மற்றும் வன்பொருட்கள்",
    marks: 1,
    type: "mcq",
    questionText: "What does UTP stand for in network cabling?",
    questionTextTamil: "UTP என்பதன் விரிவாக்கம் என்ன?",
    options: {
      A: "Unshielded Twisted Pair",
      B: "Universal Twisted Pair",
      C: "Unified Transmission Protocol",
      D: "Unprotected Transfer Pair"
    },
    optionsTamil: {
      A: "Unshielded Twisted Pair",
      B: "Universal Twisted Pair",
      C: "Unified Transmission Protocol",
      D: "Unprotected Transfer Pair"
    },
    correctOption: "A",
    answer: "A) Unshielded Twisted Pair",
    answerTamil: "A) Unshielded Twisted Pair",
    isBookBack: true
  }
];

const ch13_2m: Question[] = [
  {
    id: "ca12-ch13-2m-1",
    chapterNo: 13,
    chapterName: "Network Cabling",
    chapterNameTamil: "பிணைய வடங்கள் மற்றும் வன்பொருட்கள்",
    marks: 2,
    type: "short",
    questionText: "What is an RJ-45 connector?",
    questionTextTamil: "RJ-45 இணைப்பான் என்றால் என்ன?",
    answer: "RJ-45 (Registered Jack-45) is an 8-pin modular connector standard used for terminating twisted pair Ethernet network cables.",
    answerTamil: "RJ-45 (Registered Jack-45) என்பது ஈதர்நெட் முறுக்கப்பட்ட இணைக் கம்பிகளை கணினிகள் மற்றும் சுவிட்சுகளில் இணைக்கப் பயன்படும் 8 ஊசி இணைப்பானாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch13-2m-2",
    chapterNo: 13,
    chapterName: "Network Cabling",
    chapterNameTamil: "பிணைய வடங்கள் மற்றும் வன்பொருட்கள்",
    marks: 2,
    type: "short",
    questionText: "What is a Crimping Tool?",
    questionTextTamil: "கிரிம்பிங் கருவி (Crimping Tool) என்றால் என்ன?",
    answer: "A crimping tool is a specialized handheld tool used to attach and crimp RJ-45 or RJ-11 connectors onto network cables securely.",
    answerTamil: "கிரிம்பிங் கருவி என்பது நெட்வொர்க் கேபிள்களின் முனைகளில் RJ-45 இணைப்பான்களை அழுத்தி இணைக்கப் பயன்படும் ஒரு சிறப்பு கருவியாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch13-2m-3",
    chapterNo: 13,
    chapterName: "Network Cabling",
    chapterNameTamil: "பிணைய வடங்கள் மற்றும் வன்பொருட்கள்",
    marks: 2,
    type: "short",
    questionText: "What is an Ethernet crossover cable?",
    questionTextTamil: "ஈதர்நெட் குறுக்கு வடம் (Crossover cable) என்றால் என்ன?",
    answer: "An Ethernet crossover cable is an inverted wiring cable used to connect two similar computing devices directly (e.g., PC to PC) without a switch or hub.",
    answerTamil: "குறுக்கு வடம் என்பது சுவிட்ச் அல்லது ஹப் இல்லாமல் இரண்டு ஒரே மாதிரியான சாதனங்களை (கணினி to கணினி) நேரடியாக இணைக்க பயன்படும் வடமாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch13-2m-4",
    chapterNo: 13,
    chapterName: "Network Cabling",
    chapterNameTamil: "பிணைய வடங்கள் மற்றும் வன்பொருட்கள்",
    marks: 2,
    type: "short",
    questionText: "What is an Ethernet straight-through cable?",
    questionTextTamil: "ஈதர்நெட் நேரடி வடம் (Straight-through cable) என்றால் என்ன?",
    answer: "A straight-through cable has identical pin wiring standards on both ends, used to connect different devices (e.g., Computer to Switch or Router).",
    answerTamil: "நேரடி வடம் என்பது இரு முனைகளிலும் ஒரே மாதிரியான பின் அமைப்பைக் கொண்டு, கணினியை சுவிட்ச் அல்லது ரூட்டருடன் இணைக்கப் பயன்படுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch13-2m-5",
    chapterNo: 13,
    chapterName: "Network Cabling",
    chapterNameTamil: "பிணைய வடங்கள் மற்றும் வன்பொருட்கள்",
    marks: 2,
    type: "short",
    questionText: "What is a Router?",
    questionTextTamil: "ரூட்டர் (Router) என்றால் என்ன?",
    answer: "A router is a Layer 3 network hardware device that directs data packets between multiple networks by determining the optimal forwarding path based on IP addresses.",
    answerTamil: "ரூட்டர் என்பது IP முகவரிகளின் அடிப்படையில் தரவு பாக்கெட்டுகளை வெவ்வேறு வலையமைப்புகளுக்கு இடையே சரியான பாதையில் வழிசெலுத்தும் சாதனம் ஆகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch13-2m-6",
    chapterNo: 13,
    chapterName: "Network Cabling",
    chapterNameTamil: "பிணைய வடங்கள் மற்றும் வன்பொருட்கள்",
    marks: 2,
    type: "short",
    questionText: "What is a Network Switch?",
    questionTextTamil: "பிணைய சுவிட்ச் (Switch) என்றால் என்ன?",
    answer: "A network switch is an intelligent multi-port device that connects devices on a LAN and forwards data frames specifically to destination MAC addresses.",
    answerTamil: "சுவிட்ச் என்பது ஒரு குறும்பரப்பு வலையமைப்பில் (LAN) பல கணினிகளை இணைத்து, குறிப்பிட்ட MAC முகவரிக்கு மட்டும் தரவை அனுப்பும் அறிவார்ந்த சாதனம் ஆகும்.",
    isBookBack: true
  }
];

const ch13_3m: Question[] = [
  {
    id: "ca12-ch13-3m-1",
    chapterNo: 13,
    chapterName: "Network Cabling",
    chapterNameTamil: "பிணைய வடங்கள் மற்றும் வன்பொருட்கள்",
    marks: 3,
    type: "brief",
    questionText: "Differentiate UTP and STP cables.",
    questionTextTamil: "UTP மற்றும் STP வடங்களை வேறுபடுத்துக.",
    answer: "1. UTP (Unshielded Twisted Pair): Has no extra foil shielding; lightweight, flexible, inexpensive, suitable for standard home/office LANs.\n2. STP (Shielded Twisted Pair): Features an extra protective metal foil wrap around pairs to resist electromagnetic interference (EMI); more durable and expensive.",
    answerTamil: "1. UTP (Unshielded): கூடுதல் கவச உறை கிடையாது; விலை குறைவு, நெகிழ்வானது, அலுவலக பயன்பாட்டிற்கு ஏற்றது.\n2. STP (Shielded): மின்காந்த குறுக்கீடுகளைத் தடுக்க உலோக கவச உறை கொண்டது; தொழிற்சாலைகளுக்கு ஏற்றது, விலை அதிகம்.",
    isBookBack: true
  },
  {
    id: "ca12-ch13-3m-2",
    chapterNo: 13,
    chapterName: "Network Cabling",
    chapterNameTamil: "பிணைய வடங்கள் மற்றும் வன்பொருட்கள்",
    marks: 3,
    type: "brief",
    questionText: "Differentiate Hub and Switch.",
    questionTextTamil: "ஹப் (Hub) மற்றும் சுவிட்ச் (Switch) ஆகியவற்றை வேறுபடுத்துக.",
    answer: "1. Hub (Layer 1): Unintelligent broadcast device that retransmits incoming packets to all connected ports, leading to network congestion and collisions.\n2. Switch (Layer 2): Intelligent device that forwards frames only to the intended destination device based on its hardware MAC address.",
    answerTamil: "1. Hub: ஒரு போர்ட்டில் வரும் தரவை இணைக்கப்பட்டுள்ள அனைத்து கணினிகளுக்கும் ஒளிபரப்பும் (Broadcast), இதனால் வேகம் குறையும்.\n2. Switch: தரவை குறிப்பிட்ட இலக்கு கணினியின் MAC முகவரிக்கு மட்டுமே புத்திசாலித்தனமாக அனுப்பும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch13-3m-3",
    chapterNo: 13,
    chapterName: "Network Cabling",
    chapterNameTamil: "பிணைய வடங்கள் மற்றும் வன்பொருட்கள்",
    marks: 3,
    type: "brief",
    questionText: "Explain the features of Optical Fiber Cable.",
    questionTextTamil: "ஒளியிழை வடத்தின் (Optical Fiber Cable) சிறப்பம்சங்களை விளக்குக.",
    answer: "Features of Optical Fiber Cable:\n1. Transmits data using light pulses through glass/silica cores at near speed of light.\n2. Immune to electromagnetic interference (EMI) and radio frequency noise.\n3. Extremely high bandwidth and long-distance transmission without signal loss.",
    answerTamil: "ஒளியிழை வடத்தின் சிறப்பம்சங்கள்:\n1. தரவை கண்ணாடி இழைகள் வழியே ஒளி சமிக்ஞைகளாக மிக அதிக வேகத்தில் கடத்துகிறது.\n2. மின்காந்த குறுக்கீடுகளால் (EMI) பாதிக்கப்படாது.\n3. மிக அதிக அலைவரிசை மற்றும் நீண்ட தூர சமிக்ஞை பரிமாற்ற திறன் கொண்டது.",
    isBookBack: true
  },
  {
    id: "ca12-ch13-3m-4",
    chapterNo: 13,
    chapterName: "Network Cabling",
    chapterNameTamil: "பிணைய வடங்கள் மற்றும் வன்பொருட்கள்",
    marks: 3,
    type: "brief",
    questionText: "Explain the functions of Network Interface Card (NIC).",
    questionTextTamil: "பிணைய இடைமுக அட்டை (NIC) செயல்படும் விதத்தை விளக்குக.",
    answer: "NIC functions:\n1. Provides physical connection between computer and network transmission media.\n2. Houses the unique hardcoded 48-bit physical MAC address.\n3. Converts parallel computer data into serial signals for cable transmission.",
    answerTamil: "NIC-ன் பணிகள்:\n1. கணினியை பிணைய வடத்துடன் இணைக்கும் இடைமுகத்தை வழங்குகிறது.\n2. கணினியின் தனித்துவமான 48-பிட் MAC முகவரியைக் கொண்டுள்ளது.\n3. கணினியின் இணைநிலை தரவை தொடர் சமிக்ஞைகளாக மாற்றுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch13-3m-5",
    chapterNo: 13,
    chapterName: "Network Cabling",
    chapterNameTamil: "பிணைய வடங்கள் மற்றும் வன்பொருட்கள்",
    marks: 3,
    type: "brief",
    questionText: "What is a Bridge in computer networking?",
    questionTextTamil: "கணினி வலையமைப்பில் பிரிட்ஜ் (Bridge) என்றால் என்ன?",
    answer: "A Bridge is a Layer 2 networking device that connects and filters traffic between two separate LAN segments running the same protocol, dividing collision domains.",
    answerTamil: "பிரிட்ஜ் என்பது ஒரே நெறிமுறையைப் பயன்படுத்தும் இரண்டு குறும்பரப்பு வலையமைப்புப் பிரிவுகளை இணைத்து தரவுப் போக்குவரத்தை வடிகட்டும் சாதனமாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch13-3m-6",
    chapterNo: 13,
    chapterName: "Network Cabling",
    chapterNameTamil: "பிணைய வடங்கள் மற்றும் வன்பொருட்கள்",
    marks: 3,
    type: "brief",
    questionText: "What is a Gateway and why is it used?",
    questionTextTamil: "நுழைவாயில் (Gateway) என்றால் என்ன? அது ஏன் பயன்படுகிறது?",
    answer: "A Gateway is a network node that joins two completely dissimilar networks utilizing different communication protocol architectures, performing protocol translation.",
    answerTamil: "நுழைவாயில் (Gateway) என்பது முற்றிலும் மாறுபட்ட நெறிமுறைகளைக் கொண்ட இரு வேறுபட்ட வலையமைப்புகளை இணைத்து மொழிபெயர்க்கும் முனையமாகும்.",
    isBookBack: true
  }
];

const ch13_5m: Question[] = [
  {
    id: "ca12-ch13-5m-1",
    chapterNo: 13,
    chapterName: "Network Cabling",
    chapterNameTamil: "பிணைய வடங்கள் மற்றும் வன்பொருட்கள்",
    marks: 5,
    type: "essay",
    questionText: "Explain the various types of network cables used in networking.",
    questionTextTamil: "கணினி வலையமைப்பில் பயன்படும் பல்வேறு வகையான வடங்களை விரிவாக விளக்குக.",
    answer: "Types of Network Cables:\n\n1. Coaxial Cable:\n- Features a central solid copper conductor surrounded by dielectric insulation, woven metal shielding, and plastic jacket.\n- Used in cable TV networks and early Ethernet (Thicknet/Thinnet).\n\n2. Twisted Pair Cable:\n- Consists of 4 pairs of color-coded copper wires twisted together to minimize electromagnetic interference and crosstalk.\n- Available as UTP (Unshielded Twisted Pair) and STP (Shielded Twisted Pair).\n- Categories: Cat5e, Cat6, Cat6a supporting speeds up to 10 Gbps.\n\n3. Optical Fiber Cable:\n- Transmits modulated light pulses through glass/silica cores.\n- Ultra-fast data transmission, immune to EMI, supports long distances crossing oceans.",
    answerTamil: "பிணைய வடங்களின் வகைகள்:\n\n1. இணை அச்சு வடம் (Coaxial Cable):\n- மையத்தில் செப்புக் கம்பி, காப்பு உறை, கவச வலை மற்றும் வெளி உறை கொண்டது (எ.கா: கேபிள் டிவி).\n\n2. முறுக்கப்பட்ட இணை வடம் (Twisted Pair):\n- குறுக்கீடுகளைத் தவிர்க்க 4 ஜோடி வண்ணக் கம்பிகள் முறுக்கப்பட்ட அமைப்பைக் கொண்டது.\n- வகைகள்: UTP (கவசமற்றது) மற்றும் STP (கவசமுடையது). Cat5e, Cat6 வடங்கள் 10 Gbps வரை வேகத்தை ஆதரிக்கும்.\n\n3. ஒளியிழை வடம் (Fiber Optic Cable):\n- கண்ணாடி இழைகள் மூலம் ஒளி சமிக்ஞைகளாக தரவை மிக அதிக வேகத்தில் நீண்ட தூரத்திற்கு கடத்துகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch13-5m-2",
    chapterNo: 13,
    chapterName: "Network Cabling",
    chapterNameTamil: "பிணைய வடங்கள் மற்றும் வன்பொருட்கள்",
    marks: 5,
    type: "essay",
    questionText: "Explain the step-by-step procedure for making an Ethernet cable crimping using an RJ-45 connector.",
    questionTextTamil: "RJ-45 இணைப்பானைப் பயன்படுத்தி ஈதர்நெட் வடம் கிரிம்பிங் செய்யும் செய்முறை படிநிலைகளை விளக்குக.",
    answer: "Step-by-step Ethernet Cable Crimping Process (T568B Standard):\n\n1. Strip Jacket: Strip approximately 1 inch (2.5 cm) of outer plastic jacket using a wire stripper without nicking internal wires.\n2. Untwist Pairs: Untwist wire pairs and straighten them.\n3. Arrange Color Codes (T568B Standard):\n1: White-Orange, 2: Orange, 3: White-Green, 4: Blue, 5: White-Blue, 6: Green, 7: White-Brown, 8: Brown.\n4. Trim Wires: Cut the arranged wires evenly in a straight line leaving about 0.5 inches.\n5. Insert into RJ-45: Slide wires firmly into RJ-45 connector until all 8 copper ends reach the front tips.\n6. Crimp Connector: Place the connector into the crimping tool and squeeze handles firmly to pierce contacts into wires.\n7. Cable Testing: Test using a network Cable Tester to verify all 8 LED indicators light up sequentially.",
    answerTamil: "ஈதர்நெட் வடம் கிரிம்பிங் செய்யும் படிகள் (T568B முறை):\n\n1. வெளி உறையை நீக்குதல்: வயர் ஸ்ட்ரிப்பர் மூலம் 1 அங்குல வெளி பிளாஸ்டிக் உறையை உரிக்கவும்.\n2. கம்பிகளை பிரித்தல்: முறுக்கப்பட்ட கம்பிகளை பிரித்து நேராக்கவும்.\n3. வண்ண வரிசையமைப்பு (T568B):\n1. வெள்ளை-ஆரஞ்சு, 2. ஆரஞ்சு, 3. வெள்ளை-பச்சை, 4. நீலம், 5. வெள்ளை-நீலம், 6. பச்சை, 7. வெள்ளை-பழுப்பு, 8. பழுப்பு.\n4. சமமாக வெட்டுதல்: கம்பிகளை நேர்க்கோட்டில் சமமாக அரை அங்குல அளவிற்கு வெட்டவும்.\n5. RJ-45-ல் செருகுதல்: கம்பிகளை RJ-45 இணைப்பானுக்குள் முனையைத் தொடும் வரை அழுத்தவும்.\n6. கிரிம்பிங் செய்தல்: கிரிம்பிங் கருவியில் வைத்து கைப்பிடியை பலமாக அழுத்தி இணைக்கவும்.\n7. சோதனை செய்தல்: கேபிள் டெஸ்டர் மூலம் 8 ஊசிகளின் இணைப்பையும் சரிபார்க்கவும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch13-5m-3",
    chapterNo: 13,
    chapterName: "Network Cabling",
    chapterNameTamil: "பிணைய வடங்கள் மற்றும் வன்பொருட்கள்",
    marks: 5,
    type: "essay",
    questionText: "Explain the various networking hardware components (Hub, Switch, Router, Gateway, Bridge, Repeater).",
    questionTextTamil: "பல்வேறு பிணைய வன்பொருள்களை (Hub, Switch, Router, Gateway, Bridge, Repeater) விரிவாக விளக்குக.",
    answer: "Networking Hardware Components:\n\n1. Hub (Layer 1): Multiport repeater that broadcasts packets to all ports blindly.\n2. Switch (Layer 2): Intelligent multiport device that filters and directs frames using MAC addresses.\n3. Router (Layer 3): Connects multiple networks and routes packets efficiently using IP routing tables.\n4. Bridge (Layer 2): Connects two LAN segments running identical protocols to reduce traffic.\n5. Gateway (Layer 7): Translates communication protocols between two entirely different network architectures.\n6. Repeater (Layer 1): Boosts and regenerates weak incoming electrical signals over extended physical distances.",
    answerTamil: "முக்கிய பிணைய வன்பொருள்கள்:\n\n1. Hub: சமிக்ஞைகளை அனைத்து போர்ட்டுகளுக்கும் ஒளிபரப்பும் அடிப்படை சாதனம்.\n2. Switch: MAC முகவரியின் அடிப்படையில் தரவை உரிய கணினிக்கு மட்டும் அனுப்பும் சாதனம்.\n3. Router: IP முகவரிகளைக் கொண்டு வெவ்வேறு வலையமைப்புகளுக்கு இடையே சிறந்த பாதையில் பாக்கெட்டுகளை வழிசெலுத்தும் சாதனம்.\n4. Bridge: ஒரே நெறிமுறையைக் கொண்ட இரண்டு LAN பிரிவுகளை இணைக்கும் பாலம்.\n5. Gateway: முற்றிலும் மாறுபட்ட நெறிமுறைகளைக் கொண்ட இரு வலையமைப்புகளுக்கு இடையே மொழிபெயர்க்கும் நுழைவாயில்.\n6. Repeater: தூரத்தினால் பலவீனமடையும் சமிக்ஞைகளை பெருக்கி மீண்டும் வலுவூட்டும் சாதனம்.",
    isBookBack: true
  }
];

// ==========================================
// CHAPTER 14: Open Source Concepts (18 questions: 5 1M, 5 2M, 5 3M, 3 5M)
// ==========================================
const ch14_1m: Question[] = [
  {
    id: "ca12-ch14-1m-1",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 1,
    type: "mcq",
    questionText: "Which organization was founded by Richard Stallman in 1985 to promote free software?",
    questionTextTamil: "1985-ல் ரிச்சர்ட் ஸ்டால்மேனால் இலவச மென்பொருளை ஊக்குவிக்க தொடங்கப்பட்ட அமைப்பு எது?",
    options: {
      A: "Free Software Foundation (FSF)",
      B: "Open Source Initiative (OSI)",
      C: "Linux Foundation",
      D: "Apache Foundation"
    },
    optionsTamil: {
      A: "இலவச மென்பொருள் அறக்கட்டளை (FSF)",
      B: "ஓபன் சோர்ஸ் முன்முயற்சி (OSI)",
      C: "லினக்ஸ் அறக்கட்டளை",
      D: "அப்பாச்சி அறக்கட்டளை"
    },
    correctOption: "A",
    answer: "A) Free Software Foundation (FSF)",
    answerTamil: "A) இலவச மென்பொருள் அறக்கட்டளை (FSF)",
    isBookBack: true
  },
  {
    id: "ca12-ch14-1m-2",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 1,
    type: "mcq",
    questionText: "Which of the following is a popular open source operating system kernel created by Linus Torvalds?",
    questionTextTamil: "லினஸ் டோர்வால்ட்ஸ் என்பவரால் உருவாக்கப்பட்ட புகழ்பெற்ற திறந்த மூல இயக்க அமைப்பு கர்னல் எது?",
    options: {
      A: "Linux",
      B: "Windows",
      C: "macOS",
      D: "iOS"
    },
    optionsTamil: {
      A: "லினக்ஸ் (Linux)",
      B: "விண்டோஸ்",
      C: "மேக் ஓஎஸ்",
      D: "ஐஓஎஸ்"
    },
    correctOption: "A",
    answer: "A) Linux",
    answerTamil: "A) லினக்ஸ் (Linux)",
    isBookBack: true
  },
  {
    id: "ca12-ch14-1m-3",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 1,
    type: "mcq",
    questionText: "What does FOSS stand for?",
    questionTextTamil: "FOSS என்பதன் விரிவாக்கம் என்ன?",
    options: {
      A: "Free and Open Source Software",
      B: "First Open Source Standard",
      C: "Free Operating System Service",
      D: "Fast Open Source Software"
    },
    optionsTamil: {
      A: "Free and Open Source Software",
      B: "First Open Source Standard",
      C: "Free Operating System Service",
      D: "Fast Open Source Software"
    },
    correctOption: "A",
    answer: "A) Free and Open Source Software",
    answerTamil: "A) Free and Open Source Software",
    isBookBack: true
  },
  {
    id: "ca12-ch14-1m-4",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 1,
    type: "mcq",
    questionText: "Which license is the most famous copyleft free software license designed for GNU projects?",
    questionTextTamil: "GNU திட்டங்களுக்காக வடிவமைக்கப்பட்ட மிகவும் பிரபலமான காப்பிலெப்ட் உரிமம் எது?",
    options: {
      A: "GNU GPL",
      B: "MIT License",
      C: "Apache License",
      D: "BSD License"
    },
    optionsTamil: {
      A: "GNU GPL",
      B: "MIT உரிமம்",
      C: "Apache உரிமம்",
      D: "BSD உரிமம்"
    },
    correctOption: "A",
    answer: "A) GNU GPL",
    answerTamil: "A) GNU GPL",
    isBookBack: true
  },
  {
    id: "ca12-ch14-1m-5",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 1,
    type: "mcq",
    questionText: "Software whose source code is kept secret and proprietary by a company is known as _________.",
    questionTextTamil: "நிறுவனத்தால் மூலக் குறிமுறை ரகசியமாக வைக்கப்படும் தனியுரிம மென்பொருள் எது?",
    options: {
      A: "Closed Source / Proprietary Software",
      B: "Open Source Software",
      C: "Free Software",
      D: "Public Domain Software"
    },
    optionsTamil: {
      A: "மூடிய மூல / தனியுரிம மென்பொருள்",
      B: "திறந்த மூல மென்பொருள்",
      C: "இலவச மென்பொருள்",
      D: "பொது டொமைன் மென்பொருள்"
    },
    correctOption: "A",
    answer: "A) Closed Source / Proprietary Software",
    answerTamil: "A) மூடிய மூல / தனியுரிம மென்பொருள்",
    isBookBack: true
  }
];

const ch14_2m: Question[] = [
  {
    id: "ca12-ch14-2m-1",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 2,
    type: "short",
    questionText: "What is Open Source Software (OSS)?",
    questionTextTamil: "திறந்த மூல மென்பொருள் (OSS) என்றால் என்ன?",
    answer: "Open Source Software is software distributed with its underlying source code made freely available, allowing anyone to study, modify, enhance, and redistribute it.",
    answerTamil: "திறந்த மூல மென்பொருள் என்பது அதன் மூலக் குறிமுறை அனைவருக்கும் இலவசமாகக் கிடைக்கப்பெற்று, எவரும் மாற்றியமைக்கவும் மேம்படுத்தவும் பகிர்ந்தளிக்கவும் அனுமதிக்கப்படும் மென்பொருளாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch14-2m-2",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 2,
    type: "short",
    questionText: "What is Proprietary (Closed Source) Software?",
    questionTextTamil: "தனியுரிம (மூடிய மூல) மென்பொருள் என்றால் என்ன?",
    answer: "Proprietary software is software whose source code is tightly protected and hidden by commercial owners, prohibiting unauthorized modification and copying (e.g., Microsoft Windows).",
    answerTamil: "தனியுரிம மென்பொருள் என்பது அதன் மூலக் குறிமுறை ரகசியமாக பாதுகாக்கப்பட்டு, உரிமையாளர் அனுமதியின்றி மாற்றவோ பகிரவோ முடியாத மென்பொருளாகும் (எ.கா: Windows, MS Office).",
    isBookBack: true
  },
  {
    id: "ca12-ch14-2m-3",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 2,
    type: "short",
    questionText: "What is Free Software according to Richard Stallman?",
    questionTextTamil: "ரிச்சர்ட் ஸ்டால்மேனின் கூற்றுப்படி இலவச மென்பொருள் (Free Software) என்றால் என்ன?",
    answer: "Free software is software that grants users the essential freedoms to run, copy, distribute, study, change, and improve the software without restriction ('free as in freedom, not price').",
    answerTamil: "இலவச மென்பொருள் என்பது பயனர்கள் எந்தக் கட்டுப்பாடும் இன்றி மென்பொருளை இயக்க, கற்க, மாற்ற மற்றும் மறுவிநியோகம் செய்ய முழு சுதந்திரம் வழங்கும் மென்பொருளாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch14-2m-4",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 2,
    type: "short",
    questionText: "What is the role of Open Source Initiative (OSI)?",
    questionTextTamil: "ஓபன் சோர்ஸ் முன்முயற்சியின் (OSI) பங்கு என்ன?",
    answer: "The OSI is a global non-profit organization that stewards the Open Source Definition (OSD) and reviews, approves, and certifies open source software licenses.",
    answerTamil: "OSI என்பது திறந்த மூல மென்பொருட்களுக்கான விதிமுறைகளை வரையறுத்து, மென்பொருள் உரிமங்களை ஆய்வு செய்து சான்றளிக்கும் சர்வதேச அமைப்பாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch14-2m-5",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 2,
    type: "short",
    questionText: "Give any four examples of popular open source software.",
    questionTextTamil: "புகழ்பெற்ற நான்கு திறந்த மூல மென்பொருட்களுக்கு உதாரணம் தருக.",
    answer: "1. Linux OS\n2. Apache Web Server\n3. Mozilla Firefox Browser\n4. LibreOffice / OpenOffice suite.",
    answerTamil: "நான்கு திறந்த மூல மென்பொருட்கள்:\n1. லினக்ஸ் (Linux OS)\n2. அப்பாச்சி இணைய சேவையகம் (Apache Web Server)\n3. மொசில்லா பயர்பாக்ஸ் (Mozilla Firefox)\n4. லிப்ரே ஆபீஸ் (LibreOffice).",
    isBookBack: true
  }
];

const ch14_3m: Question[] = [
  {
    id: "ca12-ch14-3m-1",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 3,
    type: "brief",
    questionText: "Explain the Four Essential Freedoms defined by the Free Software Foundation (FSF).",
    questionTextTamil: "FSF வரையறுத்துள்ள நான்கு அடிப்படை சுதந்திரங்களை விளக்குக.",
    answer: "The Four Essential Freedoms (0 to 3):\n- Freedom 0: Freedom to run the program for any purpose.\n- Freedom 1: Freedom to study how the program works and modify it.\n- Freedom 2: Freedom to redistribute copies to help others.\n- Freedom 3: Freedom to distribute modified versions to the community.",
    answerTamil: "நான்கு அடிப்படை சுதந்திரங்கள்:\n- சுதந்திரம் 0: மென்பொருளை எந்த நோக்கத்திற்காகவும் இயக்கும் சுதந்திரம்.\n- சுதந்திரம் 1: நிரலின் செயல்பாட்டைக் கற்றுக்கொண்டு மாற்றியமைக்கும் சுதந்திரம்.\n- சுதந்திரம் 2: நகல்களை பிறருக்குப் பகிர்ந்தளிக்கும் சுதந்திரம்.\n- சுதந்திரம் 3: மாற்றியமைக்கப்பட்ட பதிப்புகளை சமூகத்திற்கு வழங்கும் சுதந்திரம்.",
    isBookBack: true
  },
  {
    id: "ca12-ch14-3m-2",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 3,
    type: "brief",
    questionText: "Differentiate Open Source Software and Commercial / Proprietary Software.",
    questionTextTamil: "திறந்த மூல மென்பொருள் மற்றும் தனியுரிம மென்பொருளை வேறுபடுத்துக.",
    answer: "1. Open Source: Source code is publicly available; free to modify and redistribute; community driven (e.g., Linux, GIMP).\n2. Proprietary: Source code is closed and guarded; modifications prohibited; requires paid licensing (e.g., Windows, Photoshop).",
    answerTamil: "1. திறந்த மூல மென்பொருள்: மூலக் குறிமுறை இலவசமாகக் கிடைக்கும்; யார் வேண்டுமானாலும் மாற்றலாம் (எ.கா: லினக்ஸ், பயர்பாக்ஸ்).\n2. தனியுரிம மென்பொருள்: மூலக் குறிமுறை ரகசியமானது; கட்டணம் செலுத்தி மட்டுமே பயன்படுத்த முடியும் (எ.கா: விண்டோஸ், அடோப் ஃபோட்டோஷாப்).",
    isBookBack: true
  },
  {
    id: "ca12-ch14-3m-3",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 3,
    type: "brief",
    questionText: "What are the advantages of Open Source Software?",
    questionTextTamil: "திறந்த மூல மென்பொருளின் நன்மைகள் யாவை?",
    answer: "Advantages:\n1. Cost-effective (zero license fees).\n2. High security and quick bug fixes due to global developer audits.\n3. Complete customization flexibility without vendor lock-in.\n4. Promotes collaborative learning and software longevity.",
    answerTamil: "நன்மைகள்:\n1. பூஜ்ஜிய உரிமக் கட்டணம் (பணச் சேமிப்பு).\n2. உலகளாவிய வல்லுநர்களால் பிழைகள் விரைவாக திருத்தப்படுவதால் அதிக பாதுகாப்பு.\n3. நமது தேவைக்கேற்ப மாற்றியமைத்துக் கொள்ளும் வசதி.\n4. மென்பொருள் கற்றல் மற்றும் பகிர்தலை ஊக்குவிக்கிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch14-3m-4",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 3,
    type: "brief",
    questionText: "What is GNU and who started it?",
    questionTextTamil: "GNU என்றால் என்ன? அதைத் தொடங்கியவர் யார்?",
    answer: "GNU (GNU's Not Unix) is a free software mass-collaboration project launched by Richard Stallman in 1983 aiming to create a 100% free Unix-compatible operating system.",
    answerTamil: "GNU என்பது ரிச்சர்ட் ஸ்டால்மேன் என்பவரால் 1983-ல் தொடங்கப்பட்ட ஒரு முழுமையான இலவச இயக்க அமைப்பை உருவாக்கும் திட்டமாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch14-3m-5",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 3,
    type: "brief",
    questionText: "Explain Boss Linux developed in India.",
    questionTextTamil: "இந்தியாவில் உருவாக்கப்பட்ட BOSS லினக்ஸ் பற்றி விளக்குக.",
    answer: "BOSS (Bharat Operating System Solutions) is an Indian open-source GNU/Linux distribution developed by C-DAC to localize computing, supporting diverse Indian regional languages.",
    answerTamil: "BOSS (Bharat Operating System Solutions) என்பது C-DAC நிறுவனத்தால் உருவாக்கப்பட்ட இந்திய தேசிய லினக்ஸ் இயக்க அமைப்பாகும். இது பல்வேறு இந்திய மொழிகளை ஆதரிக்கிறது.",
    isBookBack: true
  }
];

const ch14_5m: Question[] = [
  {
    id: "ca12-ch14-5m-1",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 5,
    type: "essay",
    questionText: "Discuss the benefits and widespread impact of Open Source Software on modern technology and education.",
    questionTextTamil: "நவீன தொழில்நுட்பம் மற்றும் கல்வியில் திறந்த மூல மென்பொருளின் பயன்கள் மற்றும் தாக்கங்களை விரிவாக விவாதிக்கவும்.",
    answer: "Benefits and Impact of Open Source Software:\n\n1. Cost Reduction for Institutions:\nSchools and startups save millions by eliminating proprietary software licensing fees.\n\n2. Superior Security & Reliability:\nPublic code auditing allows global developers to identify vulnerabilities and patch them rapidly.\n\n3. Freedom from Vendor Lock-In:\nUsers are never constrained by a single commercial company's pricing or software abandonment.\n\n4. Educational Value & Innovation:\nStudents can inspect real production source code to learn practical programming paradigms.\n\n5. Community Collaboration:\nGlobal developer ecosystems build world-class tools (Android, Python, Node.js, Kubernetes) powering the modern cloud.",
    answerTamil: "திறந்த மூல மென்பொருளின் பயன்கள் மற்றும் உலகளாவிய தாக்கம்:\n\n1. கல்வி மற்றும் நிறுவனங்களுக்கான செலவுக் குறைப்பு: உரிமக் கட்டணம் இல்லாததால் பெருமளவு நிதி சேமிக்கப்படுகிறது.\n2. அதிக பாதுகாப்பு & நம்பகத்தன்மை: மூலக் குறிமுறை வெளிப்படையாக இருப்பதால் பிழைகளும் பாதிப்புகளும் உடனடியாக களையப்படுகின்றன.\n3. தனி நிறுவனங்களைச் சார்ந்திருக்கும் நிலை இல்லை: பயனர்கள் தாங்களாகவே மென்பொருளை பராமரித்துக் கொள்ளலாம்.\n4. கல்வி மற்றும் கற்றல் வளர்ச்சி: மாணவர்கள் உண்மையான மென்பொருள் குறிமுறைகளைப் படித்து சிறந்த புரோகிராமர்களாக வளர முடிகிறது.\n5. உலகளாவிய கூட்டு முயற்சி: ஆண்ட்ராய்டு, பைதான், லினக்ஸ் போன்ற நவீன தொழில்நுட்பப் புரட்சிகள் உருவாவதற்கு திறந்த மூலமே காரணியாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch14-5m-2",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 5,
    type: "essay",
    questionText: "Explain in detail the Open Source Hardware and its applications with examples (Arduino, Raspberry Pi).",
    questionTextTamil: "திறந்த மூல வன்பொருள் (Open Source Hardware) மற்றும் அதன் பயன்பாடுகளை எடுத்துக்காட்டுகளுடன் (Arduino, Raspberry Pi) விளக்குக.",
    answer: "Open Source Hardware (OSH):\nOpen Source Hardware consists of physical technological artifacts whose circuit designs, schematics, component lists, and PCB layout files are released openly for study, manufacturing, and remixing.\n\nKey Examples & Applications:\n1. Arduino:\n- Open-source microcontroller board with programmable digital/analog I/O pins.\n- Used extensively in robotics, smart home automation, IoT sensors, and educational school projects.\n\n2. Raspberry Pi:\n- Low-cost, credit-card sized single-board computer running Linux.\n- Used as lightweight personal computers, media servers, weather monitoring stations, and edge AI prototyping controllers.\n\n3. Benefits:\nAccelerates DIY innovation, enables low-cost custom prototyping, and democratizes hardware engineering globally.",
    answerTamil: "திறந்த மூல வன்பொருள் (Open Source Hardware):\nதிறந்த மூல வன்பொருள் என்பது மின்சுற்று வரைபடங்கள், பாகங்களின் பட்டியல் மற்றும் PCB அமைப்புகள் அனைவருக்கும் இலவசமாகப் பகிரப்படும் வன்பொருட்களாகும்.\n\nமுக்கிய எடுத்துக்காட்டுகள்:\n1. ஆர்டுயினோ (Arduino):\n- எளிதில் நிரலாக்கம் செய்யக்கூடிய திறந்த மூல நுண்கட்டுப்படுத்தி பலகை.\n- ரோபோட்டிக்ஸ், ஸ்மார்ட் ஹோம் மற்றும் சென்சார் அடிப்படையிலான திட்டங்களுக்குப் பயன்படுகிறது.\n\n2. ராஸ்பெர்ரி பை (Raspberry Pi):\n- கிரெடிட் கார்டு அளவிலான குறைந்த விலை மின்கணினி.\n- லினக்ஸ் இயங்குதளத்தை இயக்கி, பள்ளி ஆய்வகங்கள் மற்றும் IoT சாதனங்களுக்குப் பயன்படுகிறது.\n\nநன்மைகள்: மாணவர்கள் மற்றும் பொறியாளர்கள் குறைந்த செலவில் புதிய கண்டுபிடிப்புகளை உருவாக்க வழிசெய்கிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch14-5m-3",
    chapterNo: 14,
    chapterName: "Open Source Concepts",
    chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 5,
    type: "essay",
    questionText: "Discuss the key differences between Open Source Software, Freeware, Shareware, and Commercial Software.",
    questionTextTamil: "திறந்த மூல மென்பொருள், இலவச மென்பொருள் (Freeware), ஷேர்வேர் (Shareware) மற்றும் வணிக மென்பொருள்களின் வேறுபாடுகளை விவாதிக்கவும்.",
    answer: "Comparison of Software Models:\n\n1. Open Source Software (OSS):\n- Source Code: Freely available.\n- Cost: Free / minimal.\n- Rights: User can study, edit, and redistribute (e.g., Linux, Blender).\n\n2. Freeware:\n- Source Code: Closed and proprietary.\n- Cost: Free to use without fees.\n- Rights: Modification not permitted (e.g., Skype, Adobe Acrobat Reader).\n\n3. Shareware:\n- Source Code: Closed.\n- Cost: Free trial for limited time/features; payment required for full access (e.g., WinRAR).\n- Rights: Modification strictly prohibited.\n\n4. Commercial / Proprietary Software:\n- Source Code: Strictly closed and confidential.\n- Cost: Paid upfront per license.\n- Rights: Only authorized executable use (e.g., MS Office, AutoCAD).",
    answerTamil: "மென்பொருள் வகைகளின் ஒப்பீடு:\n\n1. திறந்த மூல மென்பொருள் (Open Source):\n- மூலக் குறிமுறை: இலவசமாக கிடைக்கும்.\n- கட்டணம்: இலவசம்.\n- உரிமை: யார் வேண்டுமானாலும் திருத்தலாம், பகிரலாம் (எ.கா: லினக்ஸ்).\n\n2. ஃப்ரீவேர் (Freeware):\n- மூலக் குறிமுறை: ரகசியமானது.\n- கட்டணம்: பயன்படுத்த மட்டும் இலவசம்.\n- உரிமை: மாற்றியமைக்க முடியாது (எ.கா: அடோப் ரீடர்).\n\n3. ஷேர்வேர் (Shareware):\n- மூலக் குறிமுறை: ரகசியமானது.\n- கட்டணம்: குறிப்பிட்ட காலம் மட்டுமே இலவச சோதனை, பின் கட்டணம் செலுத்த வேண்டும் (எ.கா: WinRAR).\n\n4. வணிக மென்பொருள் (Commercial):\n- மூலக் குறிமுறை: ரகசியமானது.\n- கட்டணம்: முழு உரிமக் கட்டணம் செலுத்த வேண்டும் (எ.கா: MS Office, Windows).",
    isBookBack: true
  }
];

const ch11_all = [...ch11_1m, ...ch11_2m, ...ch11_3m, ...ch11_5m];
fs.writeFileSync('scripts_ca12/ch11.json', JSON.stringify(ch11_all, null, 2), 'utf8');
console.log("Chapter 11 written! Total:", ch11_all.length);

const ch12_all = [...ch12_1m, ...ch12_2m, ...ch12_3m, ...ch12_5m];
fs.writeFileSync('scripts_ca12/ch12.json', JSON.stringify(ch12_all, null, 2), 'utf8');
console.log("Chapter 12 written! Total:", ch12_all.length);

const ch13_all = [...ch13_1m, ...ch13_2m, ...ch13_3m, ...ch13_5m];
fs.writeFileSync('scripts_ca12/ch13.json', JSON.stringify(ch13_all, null, 2), 'utf8');
console.log("Chapter 13 written! Total:", ch13_all.length);

const ch14_all = [...ch14_1m, ...ch14_2m, ...ch14_3m, ...ch14_5m];
fs.writeFileSync('scripts_ca12/ch14.json', JSON.stringify(ch14_all, null, 2), 'utf8');
console.log("Chapter 14 written! Total:", ch14_all.length);
