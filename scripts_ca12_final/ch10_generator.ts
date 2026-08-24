import fs from 'fs';
import { Question } from '../src/types';

// Exact Chapter 10 matching PDF: 1M: 7, 2M: 4, 3M: 3, 5M: 2 => Total 16
export const ch10Questions: Question[] = [
  // 1 Marks (7)
  {
    id: "ca12-ch10-1m-1",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "A set of computers connecting together is called as ----------",
    questionTextTamil: "ஒன்றாக இணைக்கப்பட்ட கணினிகளின் குழுமம் எவ்வாறு அழைக்கப்படுகிறது?",
    options: {
      A: "Network",
      B: "Server",
      C: "Hub",
      D: "Node"
    },
    optionsTamil: {
      A: "வலையமைப்பு (Network)",
      B: "சேவையகம் (Server)",
      C: "ஹப் (Hub)",
      D: "முனையம் (Node)"
    },
    correctOption: "A",
    answer: "A) Network",
    answerTamil: "A) வலையமைப்பு (Network)",
    isBookBack: true
  },
  {
    id: "ca12-ch10-1m-2",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "Many discussions in an online forum leads to personal attacks and is called",
    questionTextTamil: "ஆன்லைன் மன்றங்களில் ஏற்படும் தனிநபர் தாக்குதல்களுடன் கூடிய விவாதங்கள் எவ்வாறு அழைக்கப்படுகின்றன?",
    options: {
      A: "Hackers",
      B: "Virus",
      C: "Online war",
      D: "Flame war"
    },
    optionsTamil: {
      A: "ஹேக்கர்கள்",
      B: "வைரஸ்",
      C: "ஆன்லைன் போர்",
      D: "ஃபிளேம் வார் (Flame war)"
    },
    correctOption: "D",
    answer: "D) Flame war",
    answerTamil: "D) ஃபிளேம் வார் (Flame war)",
    isBookBack: true
  },
  {
    id: "ca12-ch10-1m-3",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "Wi-Fi is short name for",
    questionTextTamil: "Wi-Fi என்பதன் விரிவாக்கம் யாது?",
    options: {
      A: "Wireless Fidelity",
      B: "Wired fidelity",
      C: "Wired fiber optic",
      D: "Wireless fiber optic"
    },
    optionsTamil: {
      A: "Wireless Fidelity",
      B: "Wired fidelity",
      C: "Wired fiber optic",
      D: "Wireless fiber optic"
    },
    correctOption: "A",
    answer: "A) Wireless Fidelity",
    answerTamil: "A) Wireless Fidelity",
    isBookBack: true
  },
  {
    id: "ca12-ch10-1m-4",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "Which among them was challenging to the business people on computer networking",
    questionTextTamil: "கணினி வலையமைப்பில் வணிகர்களுக்கு பெரும் சவாலாக இருப்பது எது?",
    options: {
      A: "Hacking",
      B: "Viruses",
      C: "Both a & b",
      D: "none of this above"
    },
    optionsTamil: {
      A: "ஹேக்கிங் (Hacking)",
      B: "வைரஸ்கள் (Viruses)",
      C: "a மற்றும் b இரண்டும்",
      D: "மேற்கூறிய எதுவும் இல்லை"
    },
    correctOption: "C",
    answer: "C) Both a & b",
    answerTamil: "C) a மற்றும் b இரண்டும்",
    isBookBack: true
  },
  {
    id: "ca12-ch10-1m-5",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "Which one of the following is not the social media",
    questionTextTamil: "பின்வருவனவற்றில் எது சமூக ஊடகம் அல்ல?",
    options: {
      A: "Gmail",
      B: "Facebook",
      C: "twitter",
      D: "Linkedin"
    },
    optionsTamil: {
      A: "Gmail",
      B: "Facebook",
      C: "Twitter",
      D: "Linkedin"
    },
    correctOption: "A",
    answer: "A) Gmail",
    answerTamil: "A) Gmail",
    isBookBack: true
  },
  {
    id: "ca12-ch10-1m-6",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "In mobile network, land areas for network coverage was distributed as",
    questionTextTamil: "மொபைல் நெட்வொர்க்கில் நிலப்பரப்பு நெட்வொர்க் கவரேஜுக்காக எவ்வாறு பிரிக்கப்படுகிறது?",
    options: {
      A: "Firmware",
      B: "cells",
      C: "Range",
      D: "Service"
    },
    optionsTamil: {
      A: "ஃபெர்ம்வேர்",
      B: "செல்கள் (cells)",
      C: "வரம்பு",
      D: "சேவை"
    },
    correctOption: "B",
    answer: "B) cells",
    answerTamil: "B) செல்கள் (cells)",
    isBookBack: true
  },
  {
    id: "ca12-ch10-1m-7",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "Which one of the following are harmful to computer?",
    questionTextTamil: "பின்வருவனவற்றில் கணினிக்கு தீங்கானது எது?",
    options: {
      A: "Bloggers",
      B: "Browser",
      C: "Hackers",
      D: "twitter"
    },
    optionsTamil: {
      A: "வலைப்பதிவர்கள்",
      B: "உலாவி",
      C: "ஹேக்கர்கள் (Hackers)",
      D: "ட்விட்டர்"
    },
    correctOption: "C",
    answer: "C) Hackers",
    answerTamil: "C) ஹேக்கர்கள் (Hackers)",
    isBookBack: true
  },
  // 2 Marks (4)
  {
    id: "ca12-ch10-2m-1",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "What is a Computer Network.",
    questionTextTamil: "கணினி வலையமைப்பு (Computer Network) என்றால் என்ன?",
    answer: "A computer network is a set of interconnected autonomous computing devices (computers, servers, printers) linked together through transmission media to share data and hardware/software resources.",
    answerTamil: "கணினி வலையமைப்பு என்பது தரவு மற்றும் மென்பொருள், வன்பொருள் வளங்களைப் பகிர்ந்து கொள்ளும் நோக்கில் தகவல் தொடர்பு ஊடகங்கள் வழியாக ஒன்றோடொன்று இணைக்கப்பட்ட கணினிகளின் அமைப்பாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch10-2m-2",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "Write a short note on Internet.",
    questionTextTamil: "இணையம் (Internet) பற்றி சிறுகுறிப்பு வரைக.",
    answer: "The Internet ('Inter-connected Network') is a massive global network of interconnected computer networks that communicate using the standard TCP/IP protocol suite to exchange data worldwide.",
    answerTamil: "இணையம் (Internet) என்பது உலகம் முழுவதும் உள்ள கோடிக்கணக்கான கணினி வலையமைப்புகளை TCP/IP நெறிமுறையின் மூலம் இணைக்கும் ஒரு உலகளாவிய பிரம்மாண்ட வலையமைப்பாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch10-2m-3",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "What are the common uses of computer network?",
    questionTextTamil: "கணினி வலையமைப்பின் பொதுவான பயன்கள் யாவை?",
    answer: "Common uses of computer networks:\n1. Resource sharing (printers, storage, scanners)\n2. Fast communication (Email, instant messaging, video calls)\n3. E-commerce and online banking\n4. Cloud data storage and backup.",
    answerTamil: "கணினி வலையமைப்பின் பயன்கள்:\n1. வளப் பகிர்வு (அச்சுப்பொறி, சேமிப்பகம்)\n2. விரைவான தொடர்பு (மின்னஞ்சல், காணொளி அழைப்பு)\n3. மின்னணு வணிகம் மற்றும் வங்கிச் சேவைகள்\n4. கிளவுட் தரவுச் சேமிப்பு மற்றும் காப்புநகல்.",
    isBookBack: true
  },
  {
    id: "ca12-ch10-2m-4",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "What is node in Computer network.",
    questionTextTamil: "கணினி வலையமைப்பில் முனையம் (Node) என்றால் என்ன?",
    answer: "A node is any active addressable physical electronic device connected to a computer network that is capable of sending, receiving, or forwarding data (such as a computer, printer, switch, or router).",
    answerTamil: "முனையம் (Node) என்பது ஒரு கணினி வலையமைப்பில் தகவல்களை அனுப்பவோ, பெறவோ அல்லது முன்னனுப்பவோ திறன் கொண்ட எந்தவொரு சாதனம் (கணினி, அச்சுப்பொறி அல்லது திசைவி) ஆகும்.",
    isBookBack: true
  },
  // 3 Marks (3)
  {
    id: "ca12-ch10-3m-1",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 3,
    type: "brief",
    questionText: "Write a note on Resource sharing.",
    questionTextTamil: "வளப் பகிர்வு (Resource sharing) பற்றி குறிப்பு வரைக.",
    answer: "Resource sharing allows multiple users and computers on a network to access common resources:\n1. Hardware Sharing: Sharing expensive peripheral devices like laser printers, high-capacity scanners, and network storage devices.\n2. Software Sharing: Installing a single licensed software on a server and sharing across client terminals.\n3. Data Sharing: Centralized database access for simultaneous multi-user collaboration.",
    answerTamil: "வளப் பகிர்வு என்பது வலையமைப்பில் உள்ள பல பயனர்கள் பொதுவான வளங்களைப் பகிர்ந்து கொள்ள அனுமதிப்பதாகும்:\n1. வன்பொருள் பகிர்வு: விலை உயர்ந்த அச்சுப்பொறிகள், சேமிப்பகங்களை பல பயனர்கள் பகிர்தல்.\n2. மென்பொருள் பகிர்வு: ஒரே உரிமம் பெற்ற மென்பொருளை சேவையகத்தில் நிறுவி பல கணினிகளில் பயன்படுத்துதல்.\n3. தரவுப் பகிர்வு: மைய தரவுத்தளத்தை ஒரே நேரத்தில் பல பயனர்கள் அணுகுதல்.",
    isBookBack: true
  },
  {
    id: "ca12-ch10-3m-2",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 3,
    type: "brief",
    questionText: "List out some benefits of social networks.",
    questionTextTamil: "சமூக வலைப்பின்னல்களின் சில நன்மைகளைப் பட்டியலிடுக.",
    answer: "Benefits of Social Networks:\n1. Instant Global Communication: Connects friends, family, and professionals across the globe in real-time.\n2. Knowledge & News Sharing: Rapid dissemination of educational content, current news, and educational resources.\n3. Business Promotion: Effective marketing, customer relationship management, and advertising for businesses.",
    answerTamil: "சமூக வலைப்பின்னல்களின் நன்மைகள்:\n1. உடனடி உலகளாவிய தொடர்பு: நண்பர்கள், குடும்பத்தினர் மற்றும் உலகெங்கிலும் உள்ள நிபுணர்களுடன் தொடர்பு கொள்ளுதல்.\n2. தகவல் மற்றும் செய்திப் பகிர்வு: கல்வித் தகவல்கள் மற்றும் சமீபத்திய செய்திகளை உடனுக்குடன் தெரிந்து கொள்ளுதல்.\n3. வணிக மேம்பாடு: குறைந்த செலவில் விளம்பரம் செய்தல் மற்றும் வாடிக்கையாளர் தொடர்புகளை உருவாக்குதல்.",
    isBookBack: true
  },
  {
    id: "ca12-ch10-3m-3",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 3,
    type: "brief",
    questionText: "Write a note on Mobile networks.",
    questionTextTamil: "மொபைல் வலையமைப்புகள் (Mobile networks) பற்றி குறிப்பு வரைக.",
    answer: "Mobile networks (cellular networks) are communication networks where the last link is wireless. Key features:\n1. Geographic areas are divided into hexagonal areas called 'Cells'.\n2. Each cell is served by a fixed transceiver known as a Base Station / Cell Tower.\n3. Enables high-speed wireless voice, SMS, video, and broadband data transmission (4G/5G).",
    answerTamil: "மொபைல் வலையமைப்புகள் (செல்லுலார் நெட்வொர்க்) கம்பியில்லாத் தகவல் தொடர்பு அமைப்பாகும்:\n1. நிலப்பரப்பு 'செல்கள்' (Cells) எனப்படும் அறுகோணப் பகுதிகளாகப் பிரிக்கப்படுகின்றன.\n2. ஒவ்வொரு செல்லுக்கும் 'அடிப்படை நிலையம்' (Base Station / Cell Tower) சேவை வழங்குகிறது.\n3. அதிவேக வயர்லெஸ் குரல் அழைப்புகள், உரை மற்றும் இணையத் தரவுகளை (4G/5G) கடத்துகிறது.",
    isBookBack: true
  },
  // 5 Marks (2)
  {
    id: "ca12-ch10-5m-1",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 5,
    type: "essay",
    questionText: "Explain uses of Computer network.",
    questionTextTamil: "கணினி வலையமைப்பின் பயன்களை விளக்குக.",
    answer: "Major uses of Computer Networks:\n\n1. Resource & Hardware Sharing:\nEnables multiple computers to share costly devices such as laser printers, scanners, storage servers, and fax machines, saving infrastructure costs.\n\n2. Streamlined Communication:\nInstant communication tools including email, VoIP calls, videoconferencing, and chat platforms allow real-time global collaboration.\n\n3. Cost Effectiveness:\nCentralized software installation and data management eliminate the need to purchase duplicate software licenses.\n\n4. High Reliability & Redundancy:\nCritical business data can be replicated and backed up across multiple servers, ensuring business continuity during hardware failures.\n\n5. Flexible Access & Cloud Computing:\nUsers can access their files and enterprise applications from any device connected to the network anywhere in the world.",
    answerTamil: "கணினி வலையமைப்பின் முக்கிய பயன்கள்:\n\n1. வன்பொருள் மற்றும் வளப் பகிர்வு:\nஅச்சுப்பொறிகள், ஸ்கேனர்கள், சேமிப்பகங்கள் போன்ற விலையுயர்ந்த சாதனங்களை பல கணினிகள் பகிர்வதன் மூலம் செலவு குறைகிறது.\n\n2. தகவல் தொடர்பு:\nமின்னஞ்சல், குறுஞ்செய்தி, வீடியோ கான்பரன்சிங் மூலம் உலகெங்கிலும் உடனடி மற்றும் தெளிவான தகவல் தொடர்பு சாத்தியமாகிறது.\n\n3. செலவு சிக்கனம்:\nமென்பொருட்களை தனித்தனியாக வாங்குவதற்கு பதிலாக, மைய சேவையகத்தில் ஒரே மென்பொருளை நிறுவி பல பயனர்கள் பயன்படுத்தலாம்.\n\n4. நம்பகத்தன்மை மற்றும் காப்புநகல்:\nமுக்கிய கோப்புகள் மற்றும் தரவுகளை பல்வேறு கணினிகளில் காப்புநகல் எடுத்து வைக்க முடிவதால் தரவு இழப்பு தவிர்க்கப்படுகிறது.\n\n5. நெகிழ்வான அணுகல்:\nஇணையம் அல்லது வலையமைப்பில் உள்ள எந்தக் கணினியிலிருந்தும் தங்களின் தகவல்களை பாதுகாப்பாக அணுக முடியும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch10-5m-2",
    chapterNo: 10,
    chapterName: "Introduction to Computer Networks",
    chapterNameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்",
    marks: 5,
    type: "essay",
    questionText: "Explain about social applications in Computer network.",
    questionTextTamil: "கணினி வலையமைப்பில் உள்ள சமூகப் பயன்பாடுகள் (Social applications) பற்றி விளக்குக.",
    answer: "Social applications powered by computer networks have transformed interpersonal and business interactions:\n\n1. Social Networking Platforms:\nApplications like Facebook, LinkedIn, Twitter, and Instagram facilitate building personal and professional relationships, professional networking, and global content sharing.\n\n2. Instant Messaging & Media Sharing:\nWhatsApp, Telegram, and WeChat enable real-time encrypted messaging, multimedia transfers, group chats, and VoIP voice/video calling.\n\n3. Online Collaborative Platforms:\nGoogle Docs, Microsoft Teams, and Zoom provide real-time collaborative workspaces, document sharing, and webinars.\n\n4. E-Learning & Knowledge Communities:\nForums (Quora, Reddit), Stack Overflow, and online encyclopedias (Wikipedia) support community-driven knowledge sharing and educational growth.",
    answerTamil: "கணினி வலையமைப்பில் உள்ள சமூகப் பயன்பாடுகள்:\n\n1. சமூக வலைப்பின்னல் தளங்கள்:\nFacebook, LinkedIn, Twitter, Instagram போன்ற தளங்கள் மக்கள் தங்களுக்குள் நட்பு, தொழில்முறை உறவுகள் மற்றும் கருத்துகளைப் பகிர உதவுகின்றன.\n\n2. உடனடி செய்திப் பரிமாற்றம்:\nWhatsApp, Telegram போன்றவை நிகழ்நேர உரை, குரல், காணொளி மற்றும் புகைப்படங்களை பாதுகாப்பாகப் பகிர உதவுகின்றன.\n\n3. கூட்டுப் பணி பயன்பாடுகள்:\nGoogle Docs, Microsoft Teams, Zoom போன்றவை கல்வி நிறுவனங்கள் மற்றும் நிறுவனங்களில் இணைந்து பணியாற்றவும் கலந்துரையாடவும் உதவுகின்றன.\n\n4. அறிவுப் பகிர்வு மற்றும் மன்றங்கள்:\nQuora, விக்கிப்பீடியா போன்ற தளங்கள் மூலம் உலகளாவிய தகவல்களை அறிந்துகொள்ளவும் கருத்துக்களை விவாதிக்கவும் முடிகிறது.",
    isBookBack: true
  }
];

fs.writeFileSync('scripts_ca12_final/ch10.json', JSON.stringify(ch10Questions, null, 2), 'utf8');
console.log('Chapter 10 updated successfully! Count:', ch10Questions.length);
