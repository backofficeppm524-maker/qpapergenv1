import fs from 'fs';
import { Question } from '../src/types';

// ==========================================
// CHAPTER 10: Introduction to Computer Networks (7 1M, 4 2M, 3 3M, 2 5M = 16)
// ==========================================
export const ch10_questions: Question[] = [
  // 1M (7)
  {
    id: "ca12-ch10-1m-1", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1, type: "mcq", questionText: "A set of computers connecting together is called as ----------",
    questionTextTamil: "ஒன்றோடொன்று இணைக்கப்பட்ட கணினிகளின் குழுமம் எவ்வாறு அழைக்கப்படுகிறது?",
    options: { A: "Network", B: "Server", C: "Hub", D: "Node" },
    optionsTamil: { A: "வலையமைப்பு (Network)", B: "சேவையகம்", C: "ஹப்", D: "முனை" },
    correctOption: "A", answer: "A) Network", answerTamil: "A) வலையமைப்பு (Network)", isBookBack: true
  },
  {
    id: "ca12-ch10-1m-2", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1, type: "mcq", questionText: "Many discussions in an online forum leads to personal attacks and is called",
    questionTextTamil: "இணைய மன்றங்களில் தனிநபர் மீதான தாக்குதல்களுக்கு வழிவகுக்கும் விவாதங்கள் எவ்வாறு அழைக்கப்படுகின்றன?",
    options: { A: "flame wars", B: "cyber attack", C: "harking", D: "phishing" },
    optionsTamil: { A: "flame wars", B: "சைபர் தாக்குதல்", C: "ஹேக்கிங்", D: "ஃபிஷிங்" },
    correctOption: "A", answer: "A) flame wars", answerTamil: "A) flame wars", isBookBack: true
  },
  {
    id: "ca12-ch10-1m-3", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1, type: "mcq", questionText: "Wi-Fi is short name for",
    questionTextTamil: "Wi-Fi என்பதன் விரிவாக்கம் என்ன?",
    options: { A: "Wireless Fidelity", B: "Wired Fidelity", C: "Wireless Fiber", D: "Wireless Field" },
    optionsTamil: { A: "Wireless Fidelity", B: "Wired Fidelity", C: "Wireless Fiber", D: "Wireless Field" },
    correctOption: "A", answer: "A) Wireless Fidelity", answerTamil: "A) Wireless Fidelity", isBookBack: true
  },
  {
    id: "ca12-ch10-1m-4", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1, type: "mcq", questionText: "Which among them was challenging to the business people on computer networking",
    questionTextTamil: "கணினி வலையமைப்பில் வணிக மக்களுக்கு பெரும் சவாலாக இருப்பது எது?",
    options: { A: "Hacking", B: "Cost", C: "Speed", D: "Storage" },
    optionsTamil: { A: "ஹேக்கிங் / ஊடுருவல் (Hacking)", B: "செலவு", C: "வேகம்", D: "சேமிப்பு" },
    correctOption: "A", answer: "A) Hacking", answerTamil: "A) ஹேக்கிங் / ஊடுருவல் (Hacking)", isBookBack: true
  },
  {
    id: "ca12-ch10-1m-5", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1, type: "mcq", questionText: "Which one of the following is not the social media",
    questionTextTamil: "பின்வருவனவற்றுள் எது சமூக ஊடகம் அல்ல?",
    options: { A: "Gmail", B: "Facebook", C: "Twitter", D: "Instagram" },
    optionsTamil: { A: "Gmail", B: "Facebook", C: "Twitter", D: "Instagram" },
    correctOption: "A", answer: "A) Gmail", answerTamil: "A) Gmail", isBookBack: true
  },
  {
    id: "ca12-ch10-1m-6", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1, type: "mcq", questionText: "In mobile network, land areas for network coverage was distributed as",
    questionTextTamil: "மொபைல் வலையமைப்பில் சேவை பரப்பு எவ்வாறு பிரிக்கப்பட்டுள்ளது?",
    options: { A: "cells", B: "nodes", C: "sectors", D: "blocks" },
    optionsTamil: { A: "செல்கள் (cells)", B: "முனைகள்", C: "துறைகள்", D: "தொகுதிகள்" },
    correctOption: "A", answer: "A) cells", answerTamil: "A) செல்கள் (cells)", isBookBack: true
  },
  {
    id: "ca12-ch10-1m-7", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1, type: "mcq", questionText: "Which one of the following are harmful to computer?",
    questionTextTamil: "பின்வருவனவற்றுள் கணினிக்கு தீங்கிழைப்பவை எவை?",
    options: { A: "Virus", B: "Worms", C: "Trojan", D: "All the above" },
    optionsTamil: { A: "வைரஸ்", B: "வார்ம்ஸ்", C: "ட்ரோஜன்", D: "மேற்கண்ட அனைத்தும்" },
    correctOption: "D", answer: "D) All the above", answerTamil: "D) மேற்கண்ட அனைத்தும்", isBookBack: true
  },
  // 2M (4)
  {
    id: "ca12-ch10-2m-1", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 2, type: "short", questionText: "What is a Computer Network.",
    questionTextTamil: "கணினி வலையமைப்பு என்றால் என்ன?",
    answer: "A computer network is a collection of interconnected autonomous computing devices and peripherals that communicate and share resources with each other.",
    answerTamil: "கணினி வலையமைப்பு என்பது வளங்களைப் பகிர்ந்து கொள்ளவும் தகவல்களைப் பரிமாறிக் கொள்ளவும் ஒன்றோடொன்று இணைக்கப்பட்ட கணினிகள் மற்றும் சாதனங்களின் அமைப்பாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch10-2m-2", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 2, type: "short", questionText: "Write a short note on Internet.",
    questionTextTamil: "இணையம் (Internet) பற்றி சிறு குறிப்பு வரைக.",
    answer: "Internet (Interconnected Networks) is a global network of interconnected computers worldwide communicating via standard TCP/IP protocols to provide vast information and communication facilities.",
    answerTamil: "இணையம் என்பது உலகம் முழுவதும் உள்ள கோடிக்கணக்கான கணினிகளை TCP/IP நெறிமுறைகள் மூலம் இணைக்கும் ஒரு உலகளாவிய வலையமைப்பாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch10-2m-3", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 2, type: "short", questionText: "What are the common uses of computer network?",
    questionTextTamil: "கணினி வலையமைப்பின் பொதுவான பயன்பாடுகள் யாவை?",
    answer: "Common uses:\n1. Resource sharing (printers, storage, software)\n2. Fast communication (Email, messaging, VoIP)\n3. Centralized database access\n4. E-Commerce and digital payments.",
    answerTamil: "பயன்பாடுகள்:\n1. வளங்களைப் பகிர்தல் (அச்சுப்பொறி, சேமிப்பகம்)\n2. விரைவான தொடர்பு (மின்னஞ்சல், குறுஞ்செய்தி)\n3. மையப்படுத்தப்பட்ட தரவுத்தள அணுகல்\n4. மின்னணு வணிகம் மற்றும் கட்டணங்கள்.",
    isBookBack: true
  },
  {
    id: "ca12-ch10-2m-4", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 2, type: "short", questionText: "What is node in Computer network.",
    questionTextTamil: "கணினி வலையமைப்பில் முனை (Node) என்றால் என்ன?",
    answer: "A node is any active electronic device connected to a computer network that can create, receive, or transmit data over a communication channel (e.g., PC, laptop, server, printer, smartphone).",
    answerTamil: "வலையமைப்பில் இணைக்கப்பட்டு தரவுகளை உருவாக்க, பெற அல்லது அனுப்பக்கூடிய கணினி, சேவையகம், அச்சுப்பொறி அல்லது தொலைபேசி போன்ற எந்தவொரு சாதனமும் முனை (Node) எனப்படும்.",
    isBookBack: true
  },
  // 3M (3)
  {
    id: "ca12-ch10-3m-1", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 3, type: "brief", questionText: "Write a note on Resource sharing.",
    questionTextTamil: "வளப் பகிர்வு (Resource sharing) பற்றி குறிப்பு வரைக.",
    answer: "Resource sharing allows all computers in a network to access and utilize hardware devices (like laser printers, scanners, storage hard drives) and software programs/databases located anywhere on the network, drastically reducing operational costs.",
    answerTamil: "வளப் பகிர்வு என்பது வலையமைப்பில் உள்ள அனைத்து கணினிகளும் வன்பொருட்கள் (அச்சுப்பொறி, ஸ்கேனர்) மற்றும் மென்பொருட்களை பொதுவான முறையில் பகிர்ந்துகொண்டு பயன்படுத்த அனுமதிக்கும் முறையாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch10-3m-2", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 3, type: "brief", questionText: "List out some benefits of social networks.",
    questionTextTamil: "சமூக வலைப்பின்னல்களின் நன்மைகள் சிலவற்றை பட்டியலிடுக.",
    answer: "Benefits of social networks:\n1. Instant global connectivity with friends, family, and professionals.\n2. Quick dissemination of news, educational resources, and awareness campaigns.\n3. Powerful targeted digital marketing and customer engagement for businesses.",
    answerTamil: "சமூக வலைப்பின்னலின் நன்மைகள்:\n1. உலகெங்கிலும் உள்ள நபர்களுடன் உடனடி தொடர்பு.\n2. செய்திகள் மற்றும் கல்வி தகவல்களை விரைவாகப் பகிர்தல்.\n3. தொழில் நிறுவனங்களுக்கான டிஜிட்டல் விளம்பரம்.",
    isBookBack: true
  },
  {
    id: "ca12-ch10-3m-3", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 3, type: "brief", questionText: "Write a note on Mobile networks.",
    questionTextTamil: "மொபைல் வலையமைப்புகள் (Mobile networks) பற்றி குறிப்பு வரைக.",
    answer: "A mobile network (cellular network) divides land into hexagonal coverage areas called 'cells', each served by at least one fixed-location transceiver known as a base station (cell tower) to provide wireless voice and high-speed data transmission.",
    answerTamil: "மொபைல் வலையமைப்பு என்பது சேவைப் பகுதிகளை 'செல்கள்' (cells) எனப்படும் அறுகோணப் பகுதிகளாகப் பிரித்து, அடிப்படை நிலைய கோபுரங்கள் மூலம் கம்பியில்லா குரல் மற்றும் தரவு சேவைகளை வழங்கும் அமைப்பாகும்.",
    isBookBack: true
  },
  // 5M (2)
  {
    id: "ca12-ch10-5m-1", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 5, type: "essay", questionText: "Explain uses of Computer network.",
    questionTextTamil: "கணினி வலையமைப்பின் பயன்பாடுகளை விரிவாக விளக்குக.",
    answer: "Key uses of Computer Networks:\n\n1. Resource Sharing: Hardware peripherals (printers, storage servers) and software licenses are shared seamlessly.\n2. Fast Communication: Real-time messaging, emails, video conferencing across global teams.\n3. Centralized Data Management: Ensures data consistency, automated backups, and access control.\n4. Cost Efficiency: Shared hardware resources eliminate the need for individual devices for every employee.\n5. E-Commerce & Banking: Powers online shopping, electronic fund transfers, and remote work infrastructure.",
    answerTamil: "கணினி வலையமைப்பின் பயன்பாடுகள்:\n1. வளப் பகிர்வு (Resource Sharing): அச்சுப்பொறிகள், ஸ்கேனர்கள் போன்றவற்றை பகிர்தல்.\n2. விரைவான தொடர்பு (Communication): மின்னஞ்சல், வீடியோ சந்திப்புகள்.\n3. மையப்படுத்தப்பட்ட மேலாண்மை (Centralized Management): தரவுத்தளங்களை எளிதாக நிர்வகித்தல்.\n4. செலவு குறைப்பு (Cost Efficiency): வன்பொருள் தேவைகளைக் குறைத்து செலவைச் சேமிக்கிறது.\n5. மின்-வணிகம் மற்றும் வங்கி சேவை.",
    isBookBack: true
  },
  {
    id: "ca12-ch10-5m-2", chapterNo: 10, chapterName: "Introduction to Computer Networks", chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 5, type: "essay", questionText: "Explain about social applications in Computer network.",
    questionTextTamil: "கணினி வலையமைப்பில் உள்ள சமூகப் பயன்பாடுகளைப் பற்றி விளக்குக.",
    answer: "Social applications in Computer Networks:\n\n1. Social Networking Services (Facebook, LinkedIn): Personal networking, professional recruitment, and community building.\n2. Instant Messaging & VoIP (WhatsApp, Telegram, Skype): Real-time chat, voice, and HD video calls.\n3. Media Sharing Platforms (YouTube, Instagram): Video and photo distribution for education, marketing, and entertainment.\n4. Wikis & Discussion Forums (Wikipedia, Reddit): Collaborative knowledge creation and problem solving.\n5. E-Learning & Collaboration Tools (Google Classroom, MS Teams): Remote education, assignment submissions, and interactive classrooms.",
    answerTamil: "கணினி வலையமைப்பில் சமூக பயன்பாடுகள்:\n1. சமூக வலைப்பின்னல்கள் (Facebook, LinkedIn)\n2. உடனடி செய்தி மற்றும் அழைப்புகள் (WhatsApp, Skype)\n3. ஊடகப் பகிர்வு தளங்கள் (YouTube, Instagram)\n4. விவாத மன்றங்கள் மற்றும் விக்கிகள் (Wikipedia, Reddit)\n5. மின்னணு கற்றல் தளங்கள் (Google Classroom, Zoom).",
    isBookBack: true
  }
];

// ==========================================
// CHAPTER 11: Network Examples and Protocols (10 1M, 4 2M, 3 3M, 3 5M = 20)
// ==========================================
export const ch11_questions: Question[] = [
  // 1M (10)
  {
    id: "ca12-ch11-1m-1", chapterNo: 11, chapterName: "Network Examples and Protocols", chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 1, type: "mcq", questionText: "Which of the following system securely share business’s information with suppliers, vendors, partners and customers.",
    questionTextTamil: "சப்ளையர்கள், விற்பனையாளர்கள், கூட்டாளர்கள் மற்றும் வாடிக்கையாளர்களுடன் வணிகத் தகவல்களைப் பாதுகாப்பாகப் பகிரும் அமைப்பு எது?",
    options: { A: "Extranet", B: "Intranet", C: "Internet", D: "Ethernet" },
    optionsTamil: { A: "எக்ஸ்ட்ராநெட் (Extranet)", B: "இன்ட்ராநெட் (Intranet)", C: "இணையம் (Internet)", D: "ஈதர்நெட்" },
    correctOption: "A", answer: "A) Extranet", answerTamil: "A) எக்ஸ்ட்ராநெட் (Extranet)", isBookBack: true
  },
  {
    id: "ca12-ch11-1m-2", chapterNo: 11, chapterName: "Network Examples and Protocols", chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 1, type: "mcq", questionText: "Match the following and choose the correct answer: (1) HTTP (2) FTP (3) SMTP (4) DNS",
    questionTextTamil: "பொருத்துக: (1) HTTP (2) FTP (3) SMTP (4) DNS",
    options: {
      A: "1-b, 2-d, 3-a, 4-c",
      B: "1-a, 2-b, 3-c, 4-d",
      C: "1-d, 2-c, 3-b, 4-a",
      D: "1-c, 2-a, 3-d, 4-b"
    },
    optionsTamil: {
      A: "1-b, 2-d, 3-a, 4-c",
      B: "1-a, 2-b, 3-c, 4-d",
      C: "1-d, 2-c, 3-b, 4-a",
      D: "1-c, 2-a, 3-d, 4-b"
    },
    correctOption: "A", answer: "A) 1-b, 2-d, 3-a, 4-c", answerTamil: "A) 1-b, 2-d, 3-a, 4-c", isBookBack: true
  },
  {
    id: "ca12-ch11-1m-3", chapterNo: 11, chapterName: "Network Examples and Protocols", chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 1, type: "mcq", questionText: "Communication over ------------------is be made up of voice, data, images and text messages.",
    questionTextTamil: "குரல், தரவு, படங்கள் மற்றும் உரைச் செய்திகளால் ஆன தகவல் தொடர்பு எதன் மூலம் நடைபெறுகிறது?",
    options: { A: "Mobile network", B: "Local network", C: "Cable network", D: "Radio network" },
    optionsTamil: { A: "மொபைல் வலையமைப்பு (Mobile network)", B: "உள்ளூர் வலையமைப்பு", C: "வடம் வலையமைப்பு", D: "வானொலி வலையமைப்பு" },
    correctOption: "A", answer: "A) Mobile network", answerTamil: "A) மொபைல் வலையமைப்பு (Mobile network)", isBookBack: true
  },
  {
    id: "ca12-ch11-1m-4", chapterNo: 11, chapterName: "Network Examples and Protocols", chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 1, type: "mcq", questionText: "Wi-Fi stands for---------------------",
    questionTextTamil: "Wi-Fi என்பதன் விரிவாக்கம்:",
    options: { A: "Wireless Fidelity", B: "Wired Fiber", C: "Wireless Frequency", D: "Wireless Fiber" },
    optionsTamil: { A: "Wireless Fidelity", B: "Wired Fiber", C: "Wireless Frequency", D: "Wireless Fiber" },
    correctOption: "A", answer: "A) Wireless Fidelity", answerTamil: "A) Wireless Fidelity", isBookBack: true
  },
  {
    id: "ca12-ch11-1m-5", chapterNo: 11, chapterName: "Network Examples and Protocols", chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 1, type: "mcq", questionText: "A TCP/IP network with access restricted to members of an organization",
    questionTextTamil: "ஒரு நிறுவனத்தின் உறுப்பினர்களுக்கு மட்டுமே அனுமதி வரையறுக்கப்பட்ட TCP/IP வலையமைப்பு:",
    options: { A: "Intranet", B: "Internet", C: "Extranet", D: "Ethernet" },
    optionsTamil: { A: "இன்ட்ராநெட் (Intranet)", B: "இணையம்", C: "எக்ஸ்ட்ராநெட்", D: "ஈதர்நெட்" },
    correctOption: "A", answer: "A) Intranet", answerTamil: "A) இன்ட்ராநெட் (Intranet)", isBookBack: true
  },
  {
    id: "ca12-ch11-1m-6", chapterNo: 11, chapterName: "Network Examples and Protocols", chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 1, type: "mcq", questionText: "RFID stands for --------------",
    questionTextTamil: "RFID என்பதன் விரிவாக்கம்:",
    options: {
      A: "Radio Frequency Identification",
      B: "Radio Frequency Interface",
      C: "Radio Fast Identification",
      D: "Remote Frequency Identifier"
    },
    optionsTamil: {
      A: "Radio Frequency Identification",
      B: "Radio Frequency Interface",
      C: "Radio Fast Identification",
      D: "Remote Frequency Identifier"
    },
    correctOption: "A", answer: "A) Radio Frequency Identification", answerTamil: "A) Radio Frequency Identification", isBookBack: true
  },
  {
    id: "ca12-ch11-1m-7", chapterNo: 11, chapterName: "Network Examples and Protocols", chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 1, type: "mcq", questionText: "It guarantees the sending of data is successful and which checks error on operation at OSI layer is--------------",
    questionTextTamil: "தரவு வெற்றிகரமாக அனுப்பப்படுவதை உறுதிசெய்து பிழைகளை சரிபார்க்கும் OSI அடுக்கு எது?",
    options: { A: "Transport layer", B: "Network layer", C: "Session layer", D: "Application layer" },
    optionsTamil: { A: "போக்குவரத்து அடுக்கு (Transport layer)", B: "வலையமைப்பு அடுக்கு", C: "அமர்வு அடுக்கு", D: "பயன்பாட்டு அடுக்கு" },
    correctOption: "A", answer: "A) Transport layer", answerTamil: "A) போக்குவரத்து அடுக்கு (Transport layer)", isBookBack: true
  },
  {
    id: "ca12-ch11-1m-8", chapterNo: 11, chapterName: "Network Examples and Protocols", chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 1, type: "mcq", questionText: "Which one of the following will secure data on transmissions",
    questionTextTamil: "பரிமாற்றத்தின் போது தரவுகளுக்கு பாதுகாப்பு அளிப்பது எது?",
    options: { A: "HTTPS", B: "HTTP", C: "FTP", D: "SMTP" },
    optionsTamil: { A: "HTTPS", B: "HTTP", C: "FTP", D: "SMTP" },
    correctOption: "A", answer: "A) HTTPS", answerTamil: "A) HTTPS", isBookBack: true
  },
  {
    id: "ca12-ch11-1m-9", chapterNo: 11, chapterName: "Network Examples and Protocols", chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 1, type: "mcq", questionText: "----------- provides e-mail service",
    questionTextTamil: "மின்னஞ்சல் சேவையை வழங்குவது எது?",
    options: { A: "SMTP", B: "HTTP", C: "FTP", D: "DNS" },
    optionsTamil: { A: "SMTP", B: "HTTP", C: "FTP", D: "DNS" },
    correctOption: "A", answer: "A) SMTP", answerTamil: "A) SMTP", isBookBack: true
  },
  {
    id: "ca12-ch11-1m-10", chapterNo: 11, chapterName: "Network Examples and Protocols", chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 1, type: "mcq", questionText: "------------- refer to other host computers by using names rather than numbers.",
    questionTextTamil: "எண்களுக்குப் பதிலாக பெயர்களைப் பயன்படுத்தி பிற கணினிகளைக் குறிப்பிடுவது எது?",
    options: { A: "DNS", B: "IP", C: "TCP", D: "MAC" },
    optionsTamil: { A: "DNS (Domain Name System)", B: "IP", C: "TCP", D: "MAC" },
    correctOption: "A", answer: "A) DNS", answerTamil: "A) DNS", isBookBack: true
  },
  // 2M (4)
  {
    id: "ca12-ch11-2m-1", chapterNo: 11, chapterName: "Network Examples and Protocols", chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 2, type: "short", questionText: "Define Intranet",
    questionTextTamil: "இன்ட்ராநெட் (Intranet) - வரையறுக்கவும்.",
    answer: "Intranet is a private computer network built using Internet protocols (TCP/IP) that is accessible strictly to authorized members within a specific organization.",
    answerTamil: "இன்ட்ராநெட் என்பது ஒரு குறிப்பிட்ட நிறுவனத்தின் பணியாளர்கள் அல்லது அங்கீகரிக்கப்பட்ட உறுப்பினர்கள் மட்டுமே பயன்படுத்தக்கூடிய ஒரு தனியார் கணினி வலையமைப்பாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch11-2m-2", chapterNo: 11, chapterName: "Network Examples and Protocols", chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 2, type: "short", questionText: "What is the uses of mobile networks?",
    questionTextTamil: "மொபைல் வலையமைப்பின் பயன்பாடுகள் யாவை?",
    answer: "Uses of mobile networks:\n1. Wireless voice and video calls anywhere.\n2. High-speed mobile Internet access for web browsing, streaming, and navigation.\n3. SMS and mobile banking services.",
    answerTamil: "பயன்பாடுகள்:\n1. கம்பியில்லா குரல் மற்றும் வீடியோ அழைப்புகள்.\n2. அதிவேக மொபைல் இணைய வசதி.\n3. குறுஞ்செய்தி மற்றும் மொபைல் வங்கி சேவைகள்.",
    isBookBack: true
  },
  {
    id: "ca12-ch11-2m-3", chapterNo: 11, chapterName: "Network Examples and Protocols", chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 2, type: "short", questionText: "List out the benefits of WiFi",
    questionTextTamil: "Wi-Fi-ன் நன்மைகளைப் பட்டியலிடுக.",
    answer: "Benefits of Wi-Fi:\n1. High mobility with untethered wireless connectivity.\n2. Easy and cost-effective deployment without physical cabling.\n3. Simultaneous connection of multiple devices (smartphones, laptops, IoT).",
    answerTamil: "Wi-Fi-ன் நன்மைகள்:\n1. கம்பிகள் இல்லா இயக்கம் மற்றும் எளிதான இணைப்பு.\n2. எளிய நிறுவல் முறை மற்றும் குறைவான செலவு.\n3. பல சாதனங்களை ஒரே நேரத்தில் இணைக்கும் வசதி.",
    isBookBack: true
  },
  {
    id: "ca12-ch11-2m-4", chapterNo: 11, chapterName: "Network Examples and Protocols", chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 2, type: "short", questionText: "Expand HTTP, HTTPS, FTP.",
    questionTextTamil: "HTTP, HTTPS, FTP ஆகியவற்றின் விரிவாக்கங்களைத் தருக.",
    answer: "1. HTTP: HyperText Transfer Protocol\n2. HTTPS: HyperText Transfer Protocol Secure\n3. FTP: File Transfer Protocol.",
    answerTamil: "1. HTTP: HyperText Transfer Protocol\n2. HTTPS: HyperText Transfer Protocol Secure\n3. FTP: File Transfer Protocol.",
    isBookBack: true
  },
  // 3M (3)
  {
    id: "ca12-ch11-3m-1", chapterNo: 11, chapterName: "Network Examples and Protocols", chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 3, type: "brief", questionText: "Compare Internet, Intranet and Extranet",
    questionTextTamil: "Internet, Intranet மற்றும் Extranet ஆகியவற்றை ஒப்பிடுக.",
    answer: "1. Internet: Global public network accessible by anyone worldwide.\n2. Intranet: Private network strictly restricted to internal employees of an organization.\n3. Extranet: Controlled private network extending access to trusted external partners, vendors, and clients.",
    answerTamil: "1. Internet: உலகளாவிய பொது வலையமைப்பு, அனைவரும் பயன்படுத்தலாம்.\n2. Intranet: ஒரு நிறுவனத்தின் ஊழியர்கள் மட்டுமே பயன்படுத்தக்கூடிய தனியார் வலையமைப்பு.\n3. Extranet: அங்கீகரிக்கப்பட்ட வெளிப்புற வாடிக்கையாளர்கள் மற்றும் கூட்டாளர்களுக்கான வலையமைப்பு.",
    isBookBack: true
  },
  {
    id: "ca12-ch11-3m-2", chapterNo: 11, chapterName: "Network Examples and Protocols", chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 3, type: "brief", questionText: "Write short notes on HTTP, HTTPS, FTP.",
    questionTextTamil: "HTTP, HTTPS, FTP பற்றி சிறு குறிப்பு வரைக.",
    answer: "1. HTTP: Standard protocol for transferring web pages across the World Wide Web.\n2. HTTPS: Encrypted, secure HTTP using SSL/TLS encryption for safe banking and logins.\n3. FTP: Protocol used for uploading and downloading files between client and server computers.",
    answerTamil: "1. HTTP: வலைப்பக்கங்களைப் பரிமாறிக்கொள்ள பயன்படும் அடிப்படை நெறிமுறை.\n2. HTTPS: SSL/TLS குறியாக்கத்துடன் கூடிய பாதுகாப்பான வலை பரிமாற்ற நெறிமுறை.\n3. FTP: கோப்புகளை பதிவேற்ற மற்றும் பதிவிறக்க பயன்படும் நெறிமுறை.",
    isBookBack: true
  },
  {
    id: "ca12-ch11-3m-3", chapterNo: 11, chapterName: "Network Examples and Protocols", chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 3, type: "brief", questionText: "What are the layers available in TCP/IP Reference Model?",
    questionTextTamil: "TCP/IP குறிப்பு மாதிரியில் உள்ள அடுக்குகள் யாவை?",
    answer: "Four Layers of TCP/IP Model:\n1. Application Layer (HTTP, FTP, SMTP, DNS)\n2. Transport Layer (TCP, UDP)\n3. Internet Layer (IP, ICMP, ARP)\n4. Network Access / Link Layer (Ethernet, Wi-Fi, MAC).",
    answerTamil: "TCP/IP மாதிரியின் 4 அடுக்குகள்:\n1. பயன்பாட்டு அடுக்கு (Application Layer)\n2. போக்குவரத்து அடுக்கு (Transport Layer)\n3. இணைய அடுக்கு (Internet Layer)\n4. வலையமைப்பு அணுகல் அடுக்கு (Network Access Layer).",
    isBookBack: true
  },
  // 5M (3)
  {
    id: "ca12-ch11-5m-1", chapterNo: 11, chapterName: "Network Examples and Protocols", chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 5, type: "essay", questionText: "Explain about Internet, Intranet and Extranet.",
    questionTextTamil: "Internet, Intranet மற்றும் Extranet பற்றி விரிவாக விளக்குக.",
    answer: "1. Internet:\n- Global, public interconnected computer network.\n- Uses TCP/IP protocols to link billions of personal, academic, and business computers.\n- Accessible by any user with an ISP subscription.\n\n2. Intranet:\n- A privately owned network built inside a single organization.\n- Uses firewalls to protect company data from unauthorized external access.\n- Facilitates internal employee communication, document sharing, and workflow.\n\n3. Extranet:\n- A private network extending selected intranet resources to trusted external entities.\n- Enables suppliers, vendors, partners, and customers to collaborate securely.\n- Requires authentication (VPN/credentials) for access.",
    answerTamil: "1. Internet (இணையம்): உலகம் முழுவதும் உள்ள அனைத்து கணினிகளையும் இணைக்கும் பொது வலையமைப்பு.\n2. Intranet (உள்வலை): ஒரு குறிப்பிட்ட நிறுவனத்தின் உள் பயன்பாட்டிற்கான பாதுகாக்கப்பட்ட தனியார் வலையமைப்பு.\n3. Extranet (புறவலை): நிறுவனத்தின் அங்கீகரிக்கப்பட்ட வெளிப்புற வாடிக்கையாளர்கள் மற்றும் சப்ளையர்களுக்கான பாதுகாப்பான வலையமைப்பு.",
    isBookBack: true
  },
  {
    id: "ca12-ch11-5m-2", chapterNo: 11, chapterName: "Network Examples and Protocols", chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 5, type: "essay", questionText: "Discuss about OSI model with its layers.",
    questionTextTamil: "OSI மாதிரியின் 7 அடுக்குகளைப் பற்றி விரிவாக விவாதிக்கவும்.",
    answer: "OSI (Open Systems Interconnection) 7-Layer Reference Model:\n\n1. Physical Layer: Transmits raw bits over physical transmission media (cables/radio).\n2. Data Link Layer: Provides node-to-node data transfer, framing, and MAC error checking.\n3. Network Layer: Routes data packets across networks using logical IP addressing.\n4. Transport Layer: End-to-end reliability, flow control, and segmentation (TCP/UDP).\n5. Session Layer: Manages, establishes, and terminates communication sessions.\n6. Presentation Layer: Data translation, compression, and encryption/decryption (SSL/TLS).\n7. Application Layer: User interface and application network services (HTTP, SMTP, FTP).",
    answerTamil: "OSI மாதிரியின் 7 அடுக்குகள்:\n1. இயற்பியல் அடுக்கு (Physical Layer): பிட்களை பரிமாற்றம் செய்தல்.\n2. தரவு இணைப்பு அடுக்கு (Data Link Layer): MAC முகவரி மற்றும் பிழை திருத்தம்.\n3. வலையமைப்பு அடுக்கு (Network Layer): IP முகவரி மற்றும் ரூட்டிங்.\n4. போக்குவரத்து அடுக்கு (Transport Layer): நம்பகமான தரவு விநியோகம் (TCP).\n5. அமர்வு அடுக்கு (Session Layer): அமர்வுகளை உருவாக்குதல் மற்றும் முடித்தல்.\n6. விளக்கக்காட்சி அடுக்கு (Presentation Layer): குறியாக்கம் மற்றும் வடிவமைப்பு.\n7. பயன்பாட்டு அடுக்கு (Application Layer): பயனர் பயன்பாட்டு சேவைகள் (HTTP, FTP).",
    isBookBack: true
  },
  {
    id: "ca12-ch11-5m-3", chapterNo: 11, chapterName: "Network Examples and Protocols", chapterNameTamil: "வலையமைப்பு மாதிரிகள் மற்றும் நெறிமுறைகள்",
    marks: 5, type: "essay", questionText: "Difference between TCP/IP and OSI Reference Model.",
    questionTextTamil: "TCP/IP மற்றும் OSI குறிப்பு மாதிரிகளுக்கு இடையேயான வேறுபாடுகளை விளக்குக.",
    answer: "Comparison between TCP/IP and OSI Reference Model:\n\n1. Layers: OSI has 7 layers; TCP/IP has 4 layers.\n2. Nature: OSI is a theoretical conceptual reference model; TCP/IP is the practical, implemented protocol suite of the Internet.\n3. Approach: OSI follows a vertical, strict protocol independent approach; TCP/IP follows a horizontal protocol-based approach.\n4. Session & Presentation: Present as separate layers in OSI; combined into the Application Layer in TCP/IP.\n5. Physical & Data Link: Separate in OSI; combined into Network Access layer in TCP/IP.",
    answerTamil: "OSI மற்றும் TCP/IP மாதிரிகளுக்கு இடையிலான வேறுபாடுகள்:\n1. OSI 7 அடுக்குகளைக் கொண்டது; TCP/IP 4 அடுக்குகளைக் கொண்டது.\n2. OSI கோட்பாட்டு ரீதியானது; TCP/IP நடைமுறை பயன்பாட்டில் உள்ளது.\n3. OSI-ல் Session மற்றும் Presentation அடுக்குகள் தனித்தனியாக உள்ளன; TCP/IP-ல் அவை Application அடுக்குடன் இணைக்கப்பட்டுள்ளன.\n4. OSI-ல் Physical மற்றும் Data Link அடுக்குகள் தனித்தனியாக உள்ளன; TCP/IP-ல் Network Access அடுக்காக இணைந்துள்ளன.",
    isBookBack: true
  }
];

// ==========================================
// CHAPTER 12: Domain Name System (DNS) (10 1M, 8 2M, 4 3M, 3 5M = 25)
// ==========================================
export const ch12_questions: Question[] = [
  // 1M (10)
  {
    id: "ca12-ch12-1m-1", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 1, type: "mcq", questionText: "Which of the following is used to maintain all the directories of domain names?",
    questionTextTamil: "டொமைன் பெயர்களின் அனைத்து கோப்பகங்களையும் பராமரிக்க பின்வருவனவற்றுள் எது பயன்படுகிறது?",
    options: { A: "DNS", B: "IP", C: "TCP", D: "HTTP" },
    optionsTamil: { A: "DNS", B: "IP", C: "TCP", D: "HTTP" },
    correctOption: "A", answer: "A) DNS", answerTamil: "A) DNS", isBookBack: true
  },
  {
    id: "ca12-ch12-1m-2", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 1, type: "mcq", questionText: "Which of the following notation is used to denote IPv4 addresses?",
    questionTextTamil: "IPv4 முகவரிகளைக் குறிக்க எந்த குறியீட்டு முறை பயன்படுத்தப்படுகிறது?",
    options: { A: "Dotted-decimal notation", B: "Hexadecimal notation", C: "Binary notation", D: "Colon notation" },
    optionsTamil: { A: "புள்ளி-பதின்ம குறியீடு (Dotted-decimal notation)", B: "பதினாறும குறியீடு", C: "இருநிலை குறியீடு", D: "முக்காற்புள்ளி குறியீடு" },
    correctOption: "A", answer: "A) Dotted-decimal notation", answerTamil: "A) புள்ளி-பதின்ம குறியீடு (Dotted-decimal notation)", isBookBack: true
  },
  {
    id: "ca12-ch12-1m-3", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 1, type: "mcq", questionText: "How many bits are used in the IPv6 addresses?",
    questionTextTamil: "IPv6 முகவரியில் எத்தனை பிட்டுகள் பயன்படுத்தப்படுகின்றன?",
    options: { A: "32", B: "64", C: "128", D: "256" },
    optionsTamil: { A: "32", B: "64", C: "128", D: "256" },
    correctOption: "C", answer: "C) 128", answerTamil: "C) 128", isBookBack: true
  },
  {
    id: "ca12-ch12-1m-4", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 1, type: "mcq", questionText: "Expansion of URL is",
    questionTextTamil: "URL என்பதன் விரிவாக்கம் என்ன?",
    options: {
      A: "Uniform Resource Locator",
      B: "Universal Resource Locator",
      C: "Uniform Resource Link",
      D: "Universal Resource Link"
    },
    optionsTamil: {
      A: "Uniform Resource Locator",
      B: "Universal Resource Locator",
      C: "Uniform Resource Link",
      D: "Universal Resource Link"
    },
    correctOption: "A", answer: "A) Uniform Resource Locator", answerTamil: "A) Uniform Resource Locator", isBookBack: true
  },
  {
    id: "ca12-ch12-1m-5", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 1, type: "mcq", questionText: "How many types are available in URL?",
    questionTextTamil: "URL-ல் எத்தனை வகைகள் உள்ளன?",
    options: { A: "2", B: "3", C: "4", D: "5" },
    optionsTamil: { A: "2 (முழுமையான URL & சார்பு URL)", B: "3", C: "4", D: "5" },
    correctOption: "A", answer: "A) 2", answerTamil: "A) 2", isBookBack: true
  },
  {
    id: "ca12-ch12-1m-6", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 1, type: "mcq", questionText: "Maximum characters used in the label of a node?",
    questionTextTamil: "ஒரு முனையின் லேபிளில் பயன்படுத்தக்கூடிய அதிகபட்ச எழுத்துக்களின் எண்ணிக்கை என்ன?",
    options: { A: "63", B: "127", C: "255", D: "32" },
    optionsTamil: { A: "63", B: "127", C: "255", D: "32" },
    correctOption: "A", answer: "A) 63", answerTamil: "A) 63", isBookBack: true
  },
  {
    id: "ca12-ch12-1m-7", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 1, type: "mcq", questionText: "In the domain name, the sequence of labels is separated by",
    questionTextTamil: "டொமைன் பெயரில் லேபிள்களின் வரிசை எதனால் பிரிக்கப்படுகிறது?",
    options: { A: "dot (.)", B: "hyphen (-)", C: "slash (/)", D: "colon (:)" },
    optionsTamil: { A: "புள்ளி / dot (.)", B: "ஹைபன் (-)", C: "சாய்வுகோடு (/)", D: "முக்காற்புள்ளி (:)" },
    correctOption: "A", answer: "A) dot (.)", answerTamil: "A) புள்ளி / dot (.)", isBookBack: true
  },
  {
    id: "ca12-ch12-1m-8", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 1, type: "mcq", questionText: "Which of the following initiates the mapping of domain name to IP address?",
    questionTextTamil: "டொமைன் பெயரை IP முகவரியாக மாற்றும் பணியை தொடங்குவது எது?",
    options: { A: "Resolver", B: "Browser", C: "Server", D: "Client" },
    optionsTamil: { A: "தீர்வி (Resolver)", B: "உலாவி", C: "சேவையகம்", D: "கிளையண்ட்" },
    correctOption: "A", answer: "A) Resolver", answerTamil: "A) தீர்வி (Resolver)", isBookBack: true
  },
  {
    id: "ca12-ch12-1m-9", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 1, type: "mcq", questionText: "Which is the contiguous area up to which the server has access?",
    questionTextTamil: "சேவையகத்திற்கு முழு அதிகாரம் உள்ள தொடர்ச்சியான பகுதி எது?",
    options: { A: "Zone", B: "Domain", C: "Host", D: "Label" },
    optionsTamil: { A: "மண்டலம் (Zone)", B: "டொமைன்", C: "ஹோஸ்ட்", D: "லேபிள்" },
    correctOption: "A", answer: "A) Zone", answerTamil: "A) மண்டலம் (Zone)", isBookBack: true
  },
  {
    id: "ca12-ch12-1m-10", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 1, type: "mcq", questionText: "Root Name servers are maintained by",
    questionTextTamil: "ரூட் பெயர் சேவையகங்கள் (Root Name Servers) யாரால் பராமரிக்கப்படுகின்றன?",
    options: { A: "ICANN", B: "IEEE", C: "ISO", D: "W3C" },
    optionsTamil: { A: "ICANN", B: "IEEE", C: "ISO", D: "W3C" },
    correctOption: "A", answer: "A) ICANN", answerTamil: "A) ICANN", isBookBack: true
  },
  // 2M (8)
  {
    id: "ca12-ch12-2m-1", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 2, type: "short", questionText: "List any four domain names.",
    questionTextTamil: "ஏதேனும் நான்கு டொமைன் பெயர்களை பட்டியலிடுக.",
    answer: "Examples of domain names:\n1. google.com\n2. tn.gov.in\n3. wikipedia.org\n4. annauniv.edu",
    answerTamil: "நான்கு டொமைன் பெயர்கள்:\n1. google.com\n2. tn.gov.in\n3. wikipedia.org\n4. annauniv.edu",
    isBookBack: true
  },
  {
    id: "ca12-ch12-2m-2", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 2, type: "short", questionText: "What is an IP address?",
    questionTextTamil: "IP முகவரி என்றால் என்ன?",
    answer: "An IP (Internet Protocol) address is a unique numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication.",
    answerTamil: "IP முகவரி என்பது இணையத்தில் இணைக்கப்பட்டுள்ள ஒவ்வொரு கணினி அல்லது சாதனத்திற்கும் தனித்துவமாக ஒதுக்கப்படும் எண் முகவரியாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch12-2m-3", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 2, type: "short", questionText: "What is an URL?",
    questionTextTamil: "URL என்றால் என்ன?",
    answer: "URL (Uniform Resource Locator) is the unique global address used to locate a specific resource (web page, image, file) on the World Wide Web.",
    answerTamil: "URL (Uniform Resource Locator) என்பது இணையத்தில் உள்ள ஒரு குறிப்பிட்ட வலைப்பக்கம் அல்லது வளத்தின் தனித்துவமான உலகளாவிய முகவரியாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch12-2m-4", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 2, type: "short", questionText: "List out four URLs you know.",
    questionTextTamil: "உங்களுக்குத் தெரிந்த நான்கு URL-களைப் பட்டியலிடுக.",
    answer: "1. https://www.google.com\n2. https://www.tntextbooks.in\n3. https://www.wikipedia.org\n4. https://www.youtube.com",
    answerTamil: "1. https://www.google.com\n2. https://www.tntextbooks.in\n3. https://www.wikipedia.org\n4. https://www.youtube.com",
    isBookBack: true
  },
  {
    id: "ca12-ch12-2m-5", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 2, type: "short", questionText: "What is a zone?",
    questionTextTamil: "மண்டலம் (Zone) என்றால் என்ன?",
    answer: "A zone is a contiguous sub-tree portion of the Domain Name Space over which a specific Name Server has complete administrative authority and database records.",
    answerTamil: "மண்டலம் (Zone) என்பது பெயர் சேவையகம் முழு நிர்வாக அதிகாரம் மற்றும் தரவுத்தள பதிவுகளைக் கொண்டுள்ள டொமைன் பெயர் வெளியின் தொடர்ச்சியான பகுதியாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch12-2m-6", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 2, type: "short", questionText: "What is a resolver?",
    questionTextTamil: "தீர்வி (Resolver) என்றால் என்ன?",
    answer: "A DNS Resolver is a client-side program that initiates the query process to translate a human-readable domain name (e.g. google.com) into an IP address by communicating with DNS servers.",
    answerTamil: "தீர்வி (Resolver) என்பது டொமைன் பெயரை ஐபி முகவரியாக மாற்றுவதற்கான கோரிக்கையைத் தொடங்கும் ஒரு கிளையண்ட் நிரலாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch12-2m-7", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 2, type: "short", questionText: "Write any four generic Top Level Domain.",
    questionTextTamil: "ஏதேனும் நான்கு பொதுவான உயர்மட்ட டொமைன்களை (gTLD) எழுதுக.",
    answer: "1. .com (Commercial)\n2. .edu (Educational)\n3. .org (Non-profit Organization)\n4. .gov (Government agency).",
    answerTamil: "1. .com (வணிகம்)\n2. .edu (கல்வி)\n3. .org (நிறுவனம்)\n4. .gov (அரசு).",
    isBookBack: true
  },
  {
    id: "ca12-ch12-2m-8", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 2, type: "short", questionText: "Mention the components of DNS.",
    questionTextTamil: "DNS-ன் மூன்று முக்கிய கூறுகளைக் குறிப்பிடுக.",
    answer: "Three main components of DNS:\n1. Domain Name Space\n2. Name Server\n3. Resolver.",
    answerTamil: "DNS-ன் மூன்று முக்கிய கூறுகள்:\n1. டொமைன் பெயர் வெளி (Domain Name Space)\n2. பெயர் சேவையகம் (Name Server)\n3. தீர்வி (Resolver).",
    isBookBack: true
  },
  // 3M (4)
  {
    id: "ca12-ch12-3m-1", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 3, type: "brief", questionText: "Write a note on URL and its types.",
    questionTextTamil: "URL மற்றும் அதன் வகைகளைப் பற்றி குறிப்பு வரைக.",
    answer: "URL (Uniform Resource Locator) specifies the protocol, host, and file path of a resource.\n\nTwo types:\n1. Absolute URL: Complete web address containing protocol, domain, and full path (e.g. `https://example.com/images/pic.png`).\n2. Relative URL: Partial address specifying the path relative to the current web page directory (e.g. `images/pic.png`).",
    answerTamil: "URL (Uniform Resource Locator):\n1. முழுமையான URL (Absolute URL): நெறிமுறை, டொமைன் பெயர் மற்றும் முழு கோப்பு பாதையை உள்ளடக்கியது.\n2. சார்பு URL (Relative URL): தற்போதைய பக்கத்தின் இருப்பிடத்தை அடிப்படையாகக் கொண்ட பகுதி பாதை.",
    isBookBack: true
  },
  {
    id: "ca12-ch12-3m-2", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 3, type: "brief", questionText: "Differentiate IPv4 and IPv6.",
    questionTextTamil: "IPv4 மற்றும் IPv6 ஆகியவற்றை வேறுபடுத்துக.",
    answer: "1. Address Length: IPv4 is 32-bit (4 bytes); IPv6 is 128-bit (16 bytes).\n2. Format: IPv4 uses dotted-decimal (e.g., 192.168.1.1); IPv6 uses colon-hexadecimal (e.g., 2001:0db8::1).\n3. Address Space: IPv4 provides ~4.3 billion addresses; IPv6 provides virtually unlimited addresses (3.4 × 10^38).",
    answerTamil: "1. முகவரி நீளம்: IPv4 32-பிட்; IPv6 128-பிட்.\n2. வடிவம்: IPv4 புள்ளி-பதின்ம வடிவம்; IPv6 முக்காற்புள்ளி-பதினாறும வடிவம்.\n3. முகவரி எண்ணிக்கை: IPv4 சுமார் 4.3 பில்லியன்; IPv6 கணக்கிலடங்கா முகவரிகளை வழங்குகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch12-3m-3", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 3, type: "brief", questionText: "What are the differences between Absolute URL and Relative URL?",
    questionTextTamil: "முழுமையான URL மற்றும் சார்பு URL இடையே உள்ள வேறுபாடுகள் யாவை?",
    answer: "1. Absolute URL:\n- Contains all information: Protocol (https), Domain name, and Path.\n- Works independently from any page location.\n- Example: `https://www.google.com/about/index.html`\n\n2. Relative URL:\n- Contains only the path relative to the current file location.\n- Requires base context to locate the file.\n- Example: `about/index.html`",
    answerTamil: "1. முழுமையான URL (Absolute URL): நெறிமுறை, டொமைன் பெயர் மற்றும் முழு பாதையைக் கொண்டிருக்கும். எவ்விடத்திலிருந்தும் நேரடியாக அணுகலாம்.\n2. சார்பு URL (Relative URL): தற்போதைய கோப்பின் நிலையை அடிப்படையாகக் கொண்ட குறுகிய பாதை மட்டுமே கொண்டிருக்கும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch12-3m-4", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 3, type: "brief", questionText: "Write a note on domain name.",
    questionTextTamil: "டொமைன் பெயர் (Domain Name) பற்றி சிறு குறிப்பு வரைக.",
    answer: "A domain name is a human-friendly alphabetical alias assigned to a numeric IP address.\n- It consists of a sequence of labels separated by dots (e.g. `www.tnschools.gov.in`).\n- Each label can have up to 63 characters, read from left to right (most specific to root).",
    answerTamil: "டொமைன் பெயர் என்பது எளிதில் நினைவில் கொள்ளக்கூடிய எழுத்துகளாலான பெயராகும்.\n- இது புள்ளிகளால் பிரிக்கப்பட்ட லேபிள்களின் வரிசையாகும் (எ.கா. `www.tnschools.gov.in`).\n- ஒவ்வொரு லேபிளும் அதிகபட்சம் 63 எழுத்துக்களைக் கொண்டிருக்கலாம்.",
    isBookBack: true
  },
  // 5M (3)
  {
    id: "ca12-ch12-5m-1", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 5, type: "essay", questionText: "Classify and Explain the IP address and its classification.",
    questionTextTamil: "IP முகவரியை வகைப்படுத்தி விரிவாக விளக்குக.",
    answer: "IP Address Classification:\n\n1. IPv4 (32-bit address, 4 octets separated by dots):\n- Class A: 0.0.0.0 to 127.255.255.255 (Huge networks, 16M hosts)\n- Class B: 128.0.0.0 to 191.255.255.255 (Medium networks, 65K hosts)\n- Class C: 192.0.0.0 to 223.255.255.255 (Small local networks, 254 hosts)\n- Class D: 224.0.0.0 to 239.255.255.255 (Multicasting)\n- Class E: 240.0.0.0 to 255.255.255.255 (Experimental & Research)\n\n2. IPv6 (128-bit address, 8 groups of 4 hexadecimal digits separated by colons) provides practically limitless unique addresses for IoT era.",
    answerTamil: "IP முகவரி வகைப்பாடு:\n\n1. IPv4 (32 பிட்கள்):\n- வகுப்பு A: 0 முதல் 127 வரை (மிகப்பெரிய வலையமைப்பு)\n- வகுப்பு B: 128 முதல் 191 வரை (நடுத்தர வலையமைப்பு)\n- வகுப்பு C: 192 முதல் 223 வரை (சிறிய வலையமைப்பு)\n- வகுப்பு D: 224 முதல் 239 வரை (பல்பரப்பல் - Multicasting)\n- வகுப்பு E: 240 முதல் 255 வரை (ஆராய்ச்சி பயன்பாடு)\n\n2. IPv6: 128 பிட்கள் கொண்ட புதிய தலைமுறை முகவரி அமைப்பு.",
    isBookBack: true
  },
  {
    id: "ca12-ch12-5m-2", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 5, type: "essay", questionText: "Explain the Name server and its types.",
    questionTextTamil: "பெயர் சேவையகம் (Name Server) மற்றும் அதன் வகைகளை விளக்குக.",
    answer: "Name Server in DNS:\nA Name Server is a dedicated server that manages a database of domain names and their mapped IP addresses.\n\nTypes of Name Servers:\n1. Root Name Server: Top of the DNS hierarchy (13 root server clusters managed by ICANN) that directs queries to TLD servers.\n2. Primary Name Server (Master): Stores the original master copy of zone files with write/update permissions.\n3. Secondary Name Server (Slave): Maintains a read-only backup copy of zone files updated automatically via zone transfers for high availability.",
    answerTamil: "பெயர் சேவையகம் மற்றும் அதன் வகைகள்:\n1. ரூட் பெயர் சேவையகம் (Root Server): DNS படிநிலையின் உச்சியில் உள்ள முதன்மை சேவையகம் (ICANN பராமரிக்கிறது).\n2. முதன்மை பெயர் சேவையகம் (Primary Server): மண்டல கோப்பின் முதன்மை பதிவை சேமித்து பராமரிக்கிறது.\n3. இரண்டாம் நிலை பெயர் சேவையகம் (Secondary Server): முதன்மை சேவையகத்தின் காப்புப் பிரதியாக செயல்படுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch12-5m-3", chapterNo: 12, chapterName: "Domain Name System (DNS)", chapterNameTamil: "டொமைன் பெயர் அமைப்பு (DNS)",
    marks: 5, type: "essay", questionText: "Explain how the DNS is working.",
    questionTextTamil: "DNS எவ்வாறு செயல்படுகிறது என்பதை விரிவாக விளக்குக.",
    answer: "Step-by-Step DNS Resolution Process:\n\n1. User enters a URL (e.g. `www.tnschools.gov.in`) into the browser.\n2. The browser checks its local cache; if not found, it forwards the request to the local DNS Resolver (ISP).\n3. Resolver contacts the Root Name Server, which returns the IP of the `.in` Top-Level Domain (TLD) server.\n4. Resolver queries the `.in` TLD server, which directs it to the authoritative Name Server for `tnschools.gov.in`.\n5. Authoritative Name Server resolves the host `www` and returns the exact IP address (e.g. `103.24.12.5`).\n6. Resolver caches the IP and sends it to the browser.\n7. Browser opens HTTP/HTTPS connection to that IP address and loads the page.",
    answerTamil: "DNS செயல்படும் விதம்:\n1. பயனர் உலாவியில் URL-ஐ தட்டச்சு செய்கிறார்.\n2. உலாவி தீர்வி (Resolver) மூலம் DNS கோரிக்கையை அனுப்புகிறது.\n3. தீர்வி ரூட் சேவையகத்தை அணுகுகிறது; அது TLD சேவையகத்திற்கு வழிகாட்டுகிறது.\n4. TLD சேவையகம் அதிகாரப்பூர்வ பெயர் சேவையகத்திற்கு வழிகாட்டுகிறது.\n5. அதிகாரப்பூர்வ சேவையகம் துல்லியமான IP முகவரியை வழங்குகிறது.\n6. உலாவி அந்த IP முகவரியை அடைந்து வலைப்பக்கத்தை ஏற்றுகிறது.",
    isBookBack: true
  }
];

fs.writeFileSync('scripts_ca12_final/ch10.json', JSON.stringify(ch10_questions, null, 2), 'utf8');
fs.writeFileSync('scripts_ca12_final/ch11.json', JSON.stringify(ch11_questions, null, 2), 'utf8');
fs.writeFileSync('scripts_ca12_final/ch12.json', JSON.stringify(ch12_questions, null, 2), 'utf8');
console.log('Ch 10 done:', ch10_questions.length, '(expected 16)');
console.log('Ch 11 done:', ch11_questions.length, '(expected 20)');
console.log('Ch 12 done:', ch12_questions.length, '(expected 25)');
