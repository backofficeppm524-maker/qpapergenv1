import fs from 'fs';

// ==========================================
// CHAPTER 17: Computer Ethics and Cyber Security (கணினி நன்னெறி மற்றும் இணையப் பாதுகாப்பு)
// 1M: 6, 2M: 6, 3M: 5, 5M: 4 (Total: 21)
// ==========================================
const ch17 = [
  // 1 Marks (6)
  {
    id: "cs11-ch17-1m-1", chapterNo: 17, chapterName: "Computer Ethics and Cyber Security", chapterNameTamil: "கணினி நன்னெறி மற்றும் இணையப் பாதுகாப்பு", marks: 1, type: "mcq",
    questionText: "The set of moral principles that regulate the use of computers is called:", questionTextTamil: "கணினிப் பயன்பாட்டை ஒழுங்குபடுத்தும் தார்மீகக் கோட்பாடுகளின் தொகுப்பு எவ்வாறு அழைக்கப்படுகிறது?",
    options: { A: "Cyber Crime", B: "Computer Ethics", C: "Copyright", D: "Firewall" },
    optionsTamil: { A: "இணையக் குற்றம்", B: "கணினி நன்னெறி (Computer Ethics)", C: "பதிப்புரிமை", D: "தீச்சுவர்" },
    correctOption: "B", answer: "B) Computer Ethics", answerTamil: "B) கணினி நன்னெறி", isBookBack: true
  },
  {
    id: "cs11-ch17-1m-2", chapterNo: 17, chapterName: "Computer Ethics and Cyber Security", chapterNameTamil: "கணினி நன்னெறி மற்றும் இணையப் பாதுகாப்பு", marks: 1, type: "mcq",
    questionText: "Unsolicited, bulk commercial email sent to numerous recipients is known as:", questionTextTamil: "கேட்காமலேயே பெருமளவில் அனுப்பப்படும் தேவையற்ற வணிக மின்னஞ்சல்கள்:",
    options: { A: "Spam", B: "Phishing", C: "Virus", D: "Cookie" },
    optionsTamil: { A: "ஸ்பேம் (Spam)", B: "ஃபிஷிங் (Phishing)", C: "வைரஸ்", D: "குக்கீ" },
    correctOption: "A", answer: "A) Spam", answerTamil: "A) ஸ்பேம் (Spam)", isBookBack: true
  },
  {
    id: "cs11-ch17-1m-3", chapterNo: 17, chapterName: "Computer Ethics and Cyber Security", chapterNameTamil: "கணினி நன்னெறி மற்றும் இணையப் பாதுகாப்பு", marks: 1, type: "mcq",
    questionText: "Unauthorized copying and distribution of copyrighted software is known as:", questionTextTamil: "பதிப்புரிமை பெற்ற மென்பொருளை அனுமதியின்றி நகலெடுத்து விநியோகிப்பது:",
    options: { A: "Software Piracy", B: "Cracking", C: "Hacking", D: "Spoofing" },
    optionsTamil: { A: "மென்பொருள் திருட்டு (Software Piracy)", B: "கிராக்கிங்", C: "ஹேக்கிங்", D: "ஸ்பூஃபிங்" },
    correctOption: "A", answer: "A) Software Piracy", answerTamil: "A) மென்பொருள் திருட்டு", isBookBack: true
  },
  {
    id: "cs11-ch17-1m-4", chapterNo: 17, chapterName: "Computer Ethics and Cyber Security", chapterNameTamil: "கணினி நன்னெறி மற்றும் இணையப் பாதுகாப்பு", marks: 1, type: "mcq",
    questionText: "A fraudulent attempt to obtain sensitive information like passwords and credit card details by masquerading as a trustworthy entity is:", questionTextTamil: "நம்பகமான நிறுவனம் போல் நடித்து கடவுச்சொல் மற்றும் கிரெடிட் கார்டு தகவல்களை ஏமாற்றிப் பெறும் மோசடி:",
    options: { A: "Phishing", B: "Trojan", C: "Worm", D: "Spyware" },
    optionsTamil: { A: "ஃபிஷிங் (Phishing)", B: "ட்ரோஜன்", C: "வார்ம் (Worm)", D: "ஸ்பைவேர்" },
    correctOption: "A", answer: "A) Phishing", answerTamil: "A) ஃபிஷிங் (Phishing)", isBookBack: true
  },
  {
    id: "cs11-ch17-1m-5", chapterNo: 17, chapterName: "Computer Ethics and Cyber Security", chapterNameTamil: "கணினி நன்னெறி மற்றும் இணையப் பாதுகாப்பு", marks: 1, type: "mcq",
    questionText: "A network security system that monitors and filters incoming and outgoing network traffic based on predetermined rules is a:", questionTextTamil: "முன்நிர்ணயிக்கப்பட்ட விதிகளின் அடிப்படையில் உள்வரும் மற்றும் வெளிச்செல்லும் பிணையப் போக்குவரத்தைக் கண்காணித்து வடிகட்டும் பாதுகாப்பு அமைப்பு:",
    options: { A: "Firewall", B: "Antivirus", C: "Router", D: "Switch" },
    optionsTamil: { A: "தீச்சுவர் (Firewall)", B: "வைரஸ் எதிர்ப்பு மென்பொருள்", C: "ரவுட்டர்", D: "ஸ்விட்ச்" },
    correctOption: "A", answer: "A) Firewall", answerTamil: "A) தீச்சுவர் (Firewall)", isBookBack: true
  },
  {
    id: "cs11-ch17-1m-6", chapterNo: 17, chapterName: "Computer Ethics and Cyber Security", chapterNameTamil: "கணினி நன்னெறி மற்றும் இணையப் பாதுகாப்பு", marks: 1, type: "mcq",
    questionText: "Self-replicating malware that spreads across computer networks without human action is called a:", questionTextTamil: "மனிதனின் தலையீடு இன்றியே கணினி பிணையங்கள் வழியாகத் தானாகவே பரவும் தீம்பொருள் எது?",
    options: { A: "Worm", B: "Trojan Horse", C: "Cookie", D: "Bug" },
    optionsTamil: { A: "வார்ம் (Worm)", B: "ட்ரோஜன் குதிரை", C: "குக்கீ", D: "வழு" },
    correctOption: "A", answer: "A) Worm", answerTamil: "A) வார்ம் (Worm)", isBookBack: true
  },

  // 2 Marks (6)
  {
    id: "cs11-ch17-2m-1", chapterNo: 17, chapterName: "Computer Ethics and Cyber Security", chapterNameTamil: "கணினி நன்னெறி மற்றும் இணையப் பாதுகாப்பு", marks: 2, type: "short",
    questionText: "What is Computer Ethics?", questionTextTamil: "கணினி நன்னெறி என்றால் என்ன?",
    answer: "Computer ethics is a set of moral principles and professional standards that govern the responsible and legal use of computers, internet, and information technology.",
    answerTamil: "கணினி நன்னெறி (Computer Ethics) என்பது கணினி மற்றும் இணையத் தொழில்நுட்பங்களைப் பொறுப்புடனும் சட்டப்படியும் பயன்படுத்துவதை ஒழுங்குபடுத்தும் தார்மீகக் கோட்பாடுகளாகும்.", isBookBack: true
  },
  {
    id: "cs11-ch17-2m-2", chapterNo: 17, chapterName: "Computer Ethics and Cyber Security", chapterNameTamil: "கணினி நன்னெறி மற்றும் இணையப் பாதுகாப்பு", marks: 2, type: "short",
    questionText: "What is Software Piracy?", questionTextTamil: "மென்பொருள் திருட்டு (Software Piracy) என்றால் என்ன?",
    answer: "Software piracy is the unauthorized and illegal copying, downloading, sharing, or commercial distribution of copyrighted software applications.",
    answerTamil: "பதிப்புரிமை பெற்ற மென்பொருட்களை அவற்றின் உரிமையாளரின் அனுமதியின்றி சட்டவிரோதமாக நகலெடுத்தல், விநியோகித்தல் அல்லது பயன்படுத்துதல் மென்பொருள் திருட்டு எனப்படும்.", isBookBack: true
  },
  {
    id: "cs11-ch17-2m-3", chapterNo: 17, chapterName: "Computer Ethics and Cyber Security", chapterNameTamil: "கணினி நன்னெறி மற்றும் இணையப் பாதுகாப்பு", marks: 2, type: "short",
    questionText: "What is Cybercrime?", questionTextTamil: "இணையக் குற்றம் (Cybercrime) என்றால் என்ன?",
    answer: "Cybercrime refers to any illegal or criminal activity carried out using computers, digital networks, or the internet as a tool, target, or place of crime.",
    answerTamil: "கணினி, இணையம் அல்லது டிஜிட்டல் சாதனங்களைப் பயன்படுத்தி தனிநபர் அல்லது அமைப்புகளுக்கு எதிராக செய்யப்படும் எந்தவொரு சட்டவிரோதச் செயலும் இணையக் குற்றம் எனப்படும்.", isBookBack: true
  },
  {
    id: "cs11-ch17-2m-4", chapterNo: 17, chapterName: "Computer Ethics and Cyber Security", chapterNameTamil: "கணினி நன்னெறி மற்றும் இணையப் பாதுகாப்பு", marks: 2, type: "short",
    questionText: "What is Phishing?", questionTextTamil: "ஃபிஷிங் (Phishing) என்றால் என்ன?",
    answer: "Phishing is a social engineering cyber attack where attackers disguise as legitimate entities (e.g. banks) via fraudulent emails/websites to steal sensitive credentials.",
    answerTamil: "வங்கிகள் அல்லது நம்பகமான நிறுவனங்கள் போல போலியான மின்னஞ்சல்கள் அல்லது வலைத்தளங்களை உருவாக்கி, பயனர்களின் கடவுச்சொல் மற்றும் வங்கி விவரங்களைத் திருடும் ஏமாற்று வேலை ஃபிஷிங் எனப்படும்.", isBookBack: true
  },
  {
    id: "cs11-ch17-2m-5", chapterNo: 17, chapterName: "Computer Ethics and Cyber Security", chapterNameTamil: "கணினி நன்னெறி மற்றும் இணையப் பாதுகாப்பு", marks: 2, type: "short",
    questionText: "What is a Firewall?", questionTextTamil: "தீச்சுவர் (Firewall) என்றால் என்ன?",
    answer: "A firewall is a network security device/software that monitors, filters, and controls incoming and outgoing network traffic based on predefined security rules.",
    answerTamil: "தீச்சுவர் (Firewall) என்பது அங்கீகரிக்கப்படாத வெளிப்புற இணைப்புகளில் இருந்து ஒரு கணினி அல்லது பிணையத்தைப் பாதுகாக்க உள்வரும் மற்றும் வெளிச்செல்லும் போக்குவரத்தை வடிகட்டும் பாதுகாப்பு அரணாகும்.", isBookBack: true
  },
  {
    id: "cs11-ch17-2m-6", chapterNo: 17, chapterName: "Computer Ethics and Cyber Security", chapterNameTamil: "கணினி நன்னெறி மற்றும் இணையப் பாதுகாப்பு", marks: 2, type: "short",
    questionText: "What are Computer Viruses and Worms?", questionTextTamil: "கணினி வைரஸ் மற்றும் வார்ம் (Worm) என்றால் என்ன?",
    answer: "Virus: Malicious code attached to a host program that replicates and damages files when executed.\nWorm: Standalone malware that self-replicates across networks without host execution.",
    answerTamil: "வைரஸ்: மற்றொரு கோப்புடன் இணைந்து இயங்கி கணினித் தரவுகளை அழிக்கும் தீம்பொருள்.\nவார்ம் (Worm): மனித தலையீடின்றி பிணையத்தின் வழியாகத் தானாகவே நகலெடுத்துப் பரவும் தீம்பொருள்.", isBookBack: true
  },

  // 3 Marks (5)
  {
    id: "cs11-ch17-3m-1", chapterNo: 17, chapterName: "Computer Ethics and Cyber Security", chapterNameTamil: "கணினி நன்னெறி மற்றும் இணையப் பாதுகாப்பு", marks: 3, type: "brief",
    questionText: "List any four Commandments of Computer Ethics formulated by Computer Ethics Institute.", questionTextTamil: "கணினி நன்னெறி நிறுவனத்தின் கணினிப் பயன்பாட்டிற்கான ஏதேனும் நான்கு கட்டளைகளைக் கூறுக.",
    answer: "1. Thou shalt not use a computer to harm other people.\n2. Thou shalt not interfere with other people's computer work.\n3. Thou shalt not snoop around in other people's files.\n4. Thou shalt not use a computer to steal.\n5. Thou shalt not use proprietary software for which you have not paid.",
    answerTamil: "1. பிறருக்குத் தீங்கு விளைவிக்க கணினியைப் பயன்படுத்தக் கூடாது.\n2. பிறரது கணினிப் பணிகளில் தேவையின்றி தலையிடக் கூடாது.\n3. பிறரது தனிப்பட்ட கோப்புகளை உளவு பார்க்கக் கூடாது.\n4. திருடுவதற்கு கணினியைப் பயன்படுத்தக் கூடாது.", isBookBack: true
  },
  {
    id: "cs11-ch17-3m-2", chapterNo: 17, chapterName: "Computer Ethics and Cyber Security", chapterNameTamil: "கணினி நன்னெறி மற்றும் இணையப் பாதுகாப்பு", marks: 3, type: "brief",
    questionText: "Differentiate between Hacking and Cracking.", questionTextTamil: "ஹேக்கிங் (Hacking) மற்றும் கிராக்கிங் (Cracking) வேறுபடுத்துக.",
    answer: "Hacking (Ethical / White Hat):\n1. Gaining access to computer systems to discover vulnerabilities and improve security.\n2. Done with legal permission.\n\nCracking (Black Hat / Malicious):\n1. Breaking into systems with illegal and malicious intent to steal data or cause damage.\n2. Punishable cybercrime without authorization.",
    answerTamil: "ஹேக்கிங் (Hacking - நன்னெறி):\n1. கணினிப் பிணையத்தின் பாதுகாப்புக் குறைபாடுகளைக் கண்டறிந்து சரிசெய்யும் நோக்குடன் அணுகுதல்.\n2. சட்டப்பூர்வ அனுமதியுடன் செய்யப்படுகிறது.\n\nகிராக்கிங் (Cracking - தீங்கிழைக்கும்):\n1. திருடும் அல்லது சேதப்படுத்தும் கெட்ட எண்ணத்துடன் அனுமதியின்றி பாதுகாப்பை உடைத்து நுழைதல்.\n2. சட்டவிரோதக் குற்றமாகும்.", isBookBack: true
  },
  {
    id: "cs11-ch17-3m-3", chapterNo: 17, chapterName: "Computer Ethics and Cyber Security", chapterNameTamil: "கணினி நன்னெறி மற்றும் இணையப் பாதுகாப்பு", marks: 3, type: "brief",
    questionText: "What is a Digital Signature? Mention its uses.", questionTextTamil: "டிஜிட்டல் கையொப்பம் என்றால் என்ன? அதன் பயன்களைக் கூறுக.",
    answer: "A digital signature is a mathematical cryptographic technique used to validate the authenticity and integrity of a digital message or document.\nUses:\n1. Verifies identity of the sender (Authentication).\n2. Ensures message was not tampered with in transit (Integrity).\n3. Provides Non-repudiation in online contracts.",
    answerTamil: "டிஜிட்டல் கையொப்பம் என்பது கணித மறைகுறியாக்க முறை மூலம் மின்னணு ஆவணங்களின் நம்பகத்தன்மையையும் ஒருமைப்பாட்டையும் உறுதிப்படுத்தும் மின்னணு சான்றாகும்.\nபயன்கள்:\n1. ஆவணத்தை அனுப்பியவரின் அடையாளத்தை உறுதி செய்கிறது.\n2. ஆவணம் மாற்றப்படவில்லை என்பதை உறுதி செய்கிறது.", isBookBack: true
  },
  {
    id: "cs11-ch17-3m-4", chapterNo: 17, chapterName: "Computer Ethics and Cyber Security", chapterNameTamil: "கணினி நன்னெறி மற்றும் இணையப் பாதுகாப்பு", marks: 3, type: "brief",
    questionText: "Explain Cookies and Spyware.", questionTextTamil: "குக்கீகள் (Cookies) மற்றும் ஸ்பைவேர் (Spyware) பற்றி விளக்குக.",
    answer: "Cookies: Small text files stored by web browsers on user's device to remember login preferences and browsing sessions.\nSpyware: Stealthy malware secretly installed on a computer to monitor keystrokes, browsing habits, and harvest personal credentials without consent.",
    answerTamil: "குக்கீகள் (Cookies): பயனர் விருப்பங்களையும் வலைத்தளப் பயன்பாட்டையும் நினைவில் வைத்திருக்க உலாவி சேமிக்கும் சிறிய உரைக் கோப்புகள்.\nஸ்பைவேர் (Spyware): பயனரின் அனுமதியின்றி கணினியில் நுழைந்து அவரது கடவுச்சொற்கள் மற்றும் செயல்பாடுகளை உளவு பார்க்கும் தீம்பொருள்.", isBookBack: true
  },
  {
    id: "cs11-ch17-3m-5", chapterNo: 17, chapterName: "Computer Ethics and Cyber Security", chapterNameTamil: "கணினி நன்னெறி மற்றும் இணையப் பாதுகாப்பு", marks: 3, type: "brief",
    questionText: "What is Denial of Service (DoS) attack?", questionTextTamil: "சேவை மறுப்புத் தாக்குதல் (DoS Attack) என்றால் என்ன?",
    answer: "A Denial of Service (DoS) attack is a malicious attempt to make an online service, website, or network unavailable to legitimate users by overwhelming the target system with a flood of fake traffic.",
    answerTamil: "சேவை மறுப்புத் தாக்குதல் (DoS) என்பது ஒரு வலைத்தளம் அல்லது சேவையகத்திற்கு அளவுக்கு அதிகமான போலி கோரிக்கைகளை அனுப்பி, அது முடங்கி இயல்புப் பயனர்கள் பயன்படுத்த முடியாதபடி செய்யும் இணையத் தாக்குதலாகும்.", isBookBack: true
  },

  // 5 Marks (4)
  {
    id: "cs11-ch17-5m-1", chapterNo: 17, chapterName: "Computer Ethics and Cyber Security", chapterNameTamil: "கணினி நன்னெறி மற்றும் இணையப் பாதுகாப்பு", marks: 5, type: "essay",
    questionText: "Explain various Cyber Threats and Malicious Programs (Viruses, Worms, Trojan Horses, Spyware, Ransomware) and their impact.", questionTextTamil: "பல்வேறு இணைய அச்சுறுத்தல்கள் மற்றும் தீம்பொருள்களையும் (வைரஸ், வார்ம், ட்ரோஜன் குதிரை, ஸ்பைவேர், ரான்சம்வேர்) அவற்றின் தாக்கங்களையும் விரிவாக விளக்குக.",
    answer: "1. Computer Virus: Attaches to executable files, replicates when run, corrupts/deletes files.\n2. Worms: Standalone network malware replicating across LAN/Internet consuming bandwidth.\n3. Trojan Horse: Disguised as useful software while secretly installing backdoors or stealing passwords.\n4. Spyware: Silently monitors keystrokes and transmits personal financial data to remote attackers.\n5. Ransomware: Encrypts user's files and demands cryptocurrency ransom for decryption keys.\n\nImpact: Data loss, identity theft, financial fraud, business downtime.",
    answerTamil: "1. வைரஸ்: இயங்கக்கூடிய கோப்புகளில் இணைந்து பரவி கோப்புகளைச் சேதப்படுத்தும்.\n2. வார்ம் (Worms): மனித உதவியின்றி பிணையத்தில் தானாகப் பரவி பிணையத்தை முடக்கும்.\n3. ட்ரோஜன் குதிரை: பயனுள்ள மென்பொருள் போல் நடித்து பின்புலத்தில் பாதுகாப்பை உடைக்கும்.\n4. ஸ்பைவேர்: ரகசியமாக தகவல்களை உளவு பார்த்து அனுப்பும்.\n5. ரான்சம்வேர்: கோப்புகளைப் பூட்டிவிட்டு பணயத்தொகை கேட்கும் தீம்பொருள்.", isBookBack: true
  },
  {
    id: "cs11-ch17-5m-2", chapterNo: 17, chapterName: "Computer Ethics and Cyber Security", chapterNameTamil: "கணினி நன்னெறி மற்றும் இணையப் பாதுகாப்பு", marks: 5, type: "essay",
    questionText: "Explain the various Security Measures for protecting computers and networks (Firewall, Encryption, Antivirus, Strong Passwords, Backups).", questionTextTamil: "கணினி மற்றும் பிணையங்களைப் பாதுகாப்பதற்கான பல்வேறு பாதுகாப்பு வழிமுறைகளை (தீச்சுவர், மறைகுறியாக்கம், வைரஸ் எதிர்ப்பு மென்பொருள், கடவுச்சொல்) விரிவாக விளக்குக.",
    answer: "1. Firewall: Inspects and filters unauthorized incoming/outgoing network packets.\n2. Encryption: Converts plain readable text into unreadable ciphertext using cryptographic keys (SSL/TLS, AES).\n3. Antivirus & Anti-malware: Scans, identifies, and quarantines malicious programs regularly.\n4. Strong Passwords & 2FA: Using multi-character alphanumeric passwords combined with OTP authentication.\n5. Regular Data Backups: Storing critical data offline or in secure cloud storage.",
    answerTamil: "1. தீச்சுவர் (Firewall): அங்கீகரிக்கப்படாத பிணைய இணைப்புகளைத் தடுத்து நிறுத்துகிறது.\n2. மறைகுறியாக்கம் (Encryption): தகவல்களைப் பிறர் படிக்க முடியாத குறியீட்டு வடிவமாக மாற்றுதல்.\n3. வைரஸ் எதிர்ப்பு மென்பொருள்: கணினியைத் தொடர்ந்து ஸ்கேன் செய்து தீம்பொருள்களை நீக்குதல்.\n4. வலுவான கடவுச்சொற்கள் & 2FA: எழுத்துக்கள், எண்கள், குறியீடுகளுடன் கூடிய கடவுச்சொற்கள்.\n5. தொடர் தரவு காப்புநகல் (Backup).", isBookBack: true
  },
  {
    id: "cs11-ch17-5m-3", chapterNo: 17, chapterName: "Computer Ethics and Cyber Security", chapterNameTamil: "கணினி நன்னெறி மற்றும் இணையப் பாதுகாப்பு", marks: 5, type: "essay",
    questionText: "Explain Cyber Law and Information Technology Act (IT Act 2000 / IT Amendment Act 2008) in India.", questionTextTamil: "இந்தியாவில் இணையச் சட்டம் மற்றும் தகவல் தொழில்நுட்பச் சட்டம் 2000 (IT Act 2000) மற்றும் அதன் திருத்தங்களை விரிவாக விளக்குக.",
    answer: "Cyber Law deals with legal issues related to the use of internet, digital communications, and computers.\n\nIT Act 2000 in India:\n1. Provides legal recognition to electronic records, digital signatures, and e-commerce transactions.\n2. Formulates strict penalties and imprisonment for cyber offenses like hacking, identity theft, child pornography, and privacy violation (Sections 43, 65, 66, 67).\n3. IT Amendment Act 2008 introduced provisions addressing cyber terrorism and data protection.",
    answerTamil: "இணையச் சட்டம் (Cyber Law) என்பது இணையப் பயன்பாடு மற்றும் மின்னணுத் தகவல்தொடர்புகள் தொடர்பான சட்டங்களை உள்ளடக்கியது.\n\nஇந்திய IT சட்டம் 2000:\n1. மின்னணு ஆவணங்கள் மற்றும் டிஜிட்டல் கையொப்பங்களுக்கு சட்டப்பூர்வ அங்கீகாரம் வழங்குகிறது.\n2. ஹேக்கிங், அடையாளத் திருட்டு, ஆபாச தகவல்கள் பரப்புதல் போன்ற குற்றங்களுக்கு கடுமையான அபராதம் மற்றும் சிறைத் தண்டனையை நிர்ணயிக்கிறது.\n3. இணையப் பாதுகாப்பு மற்றும் குற்றத்தடுப்பிற்கு வழிகாட்டுகிறது.", isBookBack: true
  },
  {
    id: "cs11-ch17-5m-4", chapterNo: 17, chapterName: "Computer Ethics and Cyber Security", chapterNameTamil: "கணினி நன்னெறி மற்றும் இணையப் பாதுகாப்பு", marks: 5, type: "essay",
    questionText: "Explain the Ten Commandments of Computer Ethics in detail.", questionTextTamil: "கணினி நன்னெறியின் பத்து கட்டளைகளை (Ten Commandments) விரிவாக விளக்குக.",
    answer: "Formulated by Computer Ethics Institute:\n1. Do not use a computer to harm other people.\n2. Do not interfere with other people's computer work.\n3. Do not snoop around in other people's computer files.\n4. Do not use a computer to steal.\n5. Do not use a computer to bear false witness.\n6. Do not copy or use proprietary software for which you have not paid.\n7. Do not use other people's computer resources without authorization.\n8. Do not appropriate other people's intellectual output.\n9. Think about the social consequences of the program you write.\n10. Always use a computer in ways that ensure consideration and respect for others.",
    answerTamil: "கணினி நன்னெறி நிறுவனத்தின் பத்து கட்டளைகள்:\n1. பிறருக்குத் தீங்கு செய்ய கணினியைப் பயன்படுத்தக் கூடாது.\n2. பிறரின் கணினிப் பணிகளில் தலையிடக் கூடாது.\n3. பிறரது தனிப்பட்ட கோப்புகளைப் பார்க்கக் கூடாது.\n4. திருட கணினியைப் பயன்படுத்தக் கூடாது.\n5. பொய் சாட்சி சொல்லப் பயன்படுத்தக் கூடாது.\n6. பணம் செலுத்தாத மென்பொருளைப் பயன்படுத்தக் கூடாது.\n7. பிறரின் கணினி வளங்களை அனுமதியின்றி பயன்படுத்தக் கூடாது.\n8. பிறரின் அறிவுசார் சொத்துக்களைத் திருடக் கூடாது.\n9. நாம் எழுதும் நிரலின் சமூகத் தாக்கத்தை சிந்திக்க வேண்டும்.\n10. பிறருக்கு மரியாதையும் மதிப்பும் தரும் வகையில் கணினியைப் பயன்படுத்த வேண்டும்.", isBookBack: true
  }
];

// ==========================================
// CHAPTER 18: Tamil Computing (கணினித் தமிழ்)
// 1M: 6, 2M: 6, 3M: 6, 5M: 4 (Total: 22)
// ==========================================
const ch18 = [
  // 1 Marks (6)
  {
    id: "cs11-ch18-1m-1", chapterNo: 18, chapterName: "Tamil Computing", chapterNameTamil: "கணினித் தமிழ்", marks: 1, type: "mcq",
    questionText: "Which is the universal character encoding standard that supports Tamil and all world languages?", questionTextTamil: "தமிழ் உட்பட உலகின் அனைத்து மொழிகளையும் ஆதரிக்கும் உலகளாவிய எழுத்து குறியீட்டு முறை எது?",
    options: { A: "ASCII", B: "Unicode", C: "ISCII", D: "TSCII" },
    optionsTamil: { A: "ASCII", B: "யூனிகோட் (Unicode)", C: "ISCII", D: "TSCII" },
    correctOption: "B", answer: "B) Unicode", answerTamil: "B) யூனிகோட் (Unicode)", isBookBack: true
  },
  {
    id: "cs11-ch18-1m-2", chapterNo: 18, chapterName: "Tamil Computing", chapterNameTamil: "கணினித் தமிழ்", marks: 1, type: "mcq",
    questionText: "Which Tamil keyboard layout is approved by the Tamil Nadu Government?", questionTextTamil: "தமிழ்நாடு அரசால் அங்கீகரிக்கப்பட்ட தமிழ் விசைப்பலகை தளவமைப்பு எது?",
    options: { A: "Tamil99", B: "Bamini", C: "Typewriter", D: "Phonetic" },
    optionsTamil: { A: "தமிழ்99 (Tamil99)", B: "பாமினி", C: "தட்டச்சுப்பொறி", D: "ஒலியியல்" },
    correctOption: "A", answer: "A) Tamil99", answerTamil: "A) தமிழ்99", isBookBack: true
  },
  {
    id: "cs11-ch18-1m-3", chapterNo: 18, chapterName: "Tamil Computing", chapterNameTamil: "கணினித் தமிழ்", marks: 1, type: "mcq",
    questionText: "Which software is used for Tamil typing and keymapping on computers?", questionTextTamil: "கணினியில் தமிழ் தட்டச்சு செய்வதற்கான இடைமுக மென்பொருள் எது?",
    options: { A: "NHM Writer / Azhagi / Murasu Anjal", B: "Photoshop", C: "VLC Player", D: "Notepad++" },
    optionsTamil: { A: "NHM Writer / அழகி / முரசு அஞ்சல்", B: "போட்டோஷாப்", C: "வி.எல்.சி", D: "நோட்பேட்++" },
    correctOption: "A", answer: "A) NHM Writer / Azhagi / Murasu Anjal", answerTamil: "A) NHM Writer / அழகி / முரசு அஞ்சல்", isBookBack: true
  },
  {
    id: "cs11-ch18-1m-4", chapterNo: 18, chapterName: "Tamil Computing", chapterNameTamil: "கணினித் தமிழ்", marks: 1, type: "mcq",
    questionText: "What does OCR stand for in Tamil Computing?", questionTextTamil: "கணினித் தமிழில் OCR என்பதன் விரிவாக்கம் என்ன?",
    options: { A: "Optical Character Recognition", B: "Online Character Reading", C: "Optical Code Reader", D: "Output Character Retrieval" },
    optionsTamil: { A: "Optical Character Recognition (ஒளியியல் எழுத்துணறி)", B: "Online Character Reading", C: "Optical Code Reader", D: "Output Character Retrieval" },
    correctOption: "A", answer: "A) Optical Character Recognition (OCR)", answerTamil: "A) ஒளியியல் எழுத்துணறி (OCR)", isBookBack: true
  },
  {
    id: "cs11-ch18-1m-5", chapterNo: 18, chapterName: "Tamil Computing", chapterNameTamil: "கணினித் தமிழ்", marks: 1, type: "mcq",
    questionText: "Which is a popular online Tamil encyclopedia?", questionTextTamil: "பிரபலமான இணைய தமிழ் கலைக்களஞ்சியம் எது?",
    options: { A: "Tamil Wikipedia (தமிழ் விக்கிப்பீடியா)", B: "Google Search", C: "Yahoo", D: "Bing" },
    optionsTamil: { A: "தமிழ் விக்கிப்பீடியா (Tamil Wikipedia)", B: "கூகிள்", C: "யாஹூ", D: "பிங்" },
    correctOption: "A", answer: "A) Tamil Wikipedia (தமிழ் விக்கிப்பீடியா)", answerTamil: "A) தமிழ் விக்கிப்பீடியா", isBookBack: true
  },
  {
    id: "cs11-ch18-1m-6", chapterNo: 18, chapterName: "Tamil Computing", chapterNameTamil: "கணினித் தமிழ்", marks: 1, type: "mcq",
    questionText: "The conversion of Tamil text into spoken audio by a computer is called:", questionTextTamil: "தமிழ் உரையை கணினி பேச்சாக மாற்றி ஒலிக்கும் தொழில்நுட்பம் எது?",
    options: { A: "Text-to-Speech (TTS)", B: "Speech Recognition", C: "OCR", D: "Translation" },
    optionsTamil: { A: "உரையை பேச்சாக மாற்றுதல் (Text-to-Speech - TTS)", B: "பேச்சுணறி", C: "OCR", D: "மொழிபெயர்ப்பு" },
    correctOption: "A", answer: "A) Text-to-Speech (TTS)", answerTamil: "A) உரையை பேச்சாக மாற்றுதல் (TTS)", isBookBack: true
  },

  // 2 Marks (6)
  {
    id: "cs11-ch18-2m-1", chapterNo: 18, chapterName: "Tamil Computing", chapterNameTamil: "கணினித் தமிழ்", marks: 2, type: "short",
    questionText: "What is Tamil Computing?", questionTextTamil: "கணினித் தமிழ் என்றால் என்ன?",
    answer: "Tamil Computing is the application and integration of computer science, linguistics, and information technology for processing, analyzing, and communicating in the Tamil language.",
    answerTamil: "கணினித் தமிழ் என்பது தமிழ் மொழியை கணினியில் உள்ளீடு செய்தல், செயலாக்குதல், சேமித்தல் மற்றும் தொடர்புகொள்வதற்கான கணினி அறிவியல் மற்றும் தகவல் தொழில்நுட்பப் பயன்பாடாகும்.", isBookBack: true
  },
  {
    id: "cs11-ch18-2m-2", chapterNo: 18, chapterName: "Tamil Computing", chapterNameTamil: "கணினித் தமிழ்", marks: 2, type: "short",
    questionText: "What is Unicode? What is its significance in Tamil?", questionTextTamil: "யூனிகோட் (Unicode) என்றால் என்ன? தமிழில் அதன் முக்கியத்துவம் யாது?",
    answer: "Unicode is a universal character encoding standard assigning unique code points to every character across languages. It enabled standardized Tamil text display across all operating systems without font dependency.",
    answerTamil: "யூனிகோட் என்பது உலக மொழிகளின் அனைத்து எழுத்துக்களுக்கும் தனித்துவமான எண்ணை வழங்கும் உலகளாவிய குறியீட்டுத் தரநிலையாகும். இது எழுத்துரு சிக்கலின்றி தமிழில் இணையப் பயன்பாட்டை எளிதாக்கியது.", isBookBack: true
  },
  {
    id: "cs11-ch18-2m-3", chapterNo: 18, chapterName: "Tamil Computing", chapterNameTamil: "கணினித் தமிழ்", marks: 2, type: "short",
    questionText: "What is Tamil99 keyboard layout?", questionTextTamil: "தமிழ்99 விசைப்பலகை என்றால் என்ன?",
    answer: "Tamil99 is an ergonomic keyboard layout standardized and approved by the Government of Tamil Nadu in 1999 for easy, fast, and phonetic Tamil typing.",
    answerTamil: "தமிழ்99 என்பது தமிழ்நாடு அரசால் 1999-ல் அங்கீகரிக்கப்பட்ட, அறிவியல் முறைப்படி எளிதாகவும் வேகமாகவும் தட்டச்சு செய்யக்கூடிய தமிழ் விசைப்பலகை தளவமைப்பாகும்.", isBookBack: true
  },
  {
    id: "cs11-ch18-2m-4", chapterNo: 18, chapterName: "Tamil Computing", chapterNameTamil: "கணினித் தமிழ்", marks: 2, type: "short",
    questionText: "Name any three Tamil typing interface software.", questionTextTamil: "ஏதேனும் மூன்று தமிழ் தட்டச்சு மென்பொருள்களின் பெயர்களைக் கூறுக.",
    answer: "1. NHM Writer\n2. Azhagi (அழகி)\n3. Murasu Anjal (முரசு அஞ்சல்)\n4. e-Kalappai.",
    answerTamil: "1. NHM Writer\n2. அழகி (Azhagi)\n3. முரசு அஞ்சல் (Murasu Anjal)\n4. இ-கலப்பை (e-Kalappai).", isBookBack: true
  },
  {
    id: "cs11-ch18-2m-5", chapterNo: 18, chapterName: "Tamil Computing", chapterNameTamil: "கணினித் தமிழ்", marks: 2, type: "short",
    questionText: "What is Tamil OCR?", questionTextTamil: "தமிழ் OCR (Optical Character Recognition) என்றால் என்ன?",
    answer: "Tamil OCR is a technology that scans printed or handwritten Tamil documents/images and converts them into editable digital Tamil text.",
    answerTamil: "அச்சிடப்பட்ட அல்லது கையால் எழுதப்பட்ட தமிழ் ஆவணப் படங்களை வருடி, அவற்றை கணினியில் திருத்தக்கூடிய டிஜிட்டல் உரையாக மாற்றும் தொழில்நுட்பம் தமிழ் OCR எனப்படும்.", isBookBack: true
  },
  {
    id: "cs11-ch18-2m-6", chapterNo: 18, chapterName: "Tamil Computing", chapterNameTamil: "கணினித் தமிழ்", marks: 2, type: "short",
    questionText: "What is Tamil Virtual Academy (TVA)?", questionTextTamil: "தமிழ் இணையக் கல்விக்கழகம் (TVA) என்றால் என்ன?",
    answer: "Tamil Virtual Academy (formerly Tamil Virtual University) is an autonomous organization established by the Government of Tamil Nadu to promote Tamil language, education, and digital library resources worldwide via the internet.",
    answerTamil: "தமிழ் இணையக் கல்விக்கழகம் என்பது உலகெங்கும் வாழும் தமிழர்களுக்கு இணையம் வழியாக தமிழ் கல்வி, பண்பாடு மற்றும் மின்நூலக வளங்களை வழங்க தமிழக அரசால் அமைக்கப்பட்ட அமைப்பாகும்.", isBookBack: true
  },

  // 3 Marks (6)
  {
    id: "cs11-ch18-3m-1", chapterNo: 18, chapterName: "Tamil Computing", chapterNameTamil: "கணினித் தமிழ்", marks: 3, type: "brief",
    questionText: "Explain different Tamil Keyboard Layouts (Tamil99, Phonetic, Typewriter, Inscript).", questionTextTamil: "பல்வேறு தமிழ் விசைப்பலகை தளவமைப்புகளை (தமிழ்99, ஒலியியல், தட்டச்சுப்பொறி) விளக்குக.",
    answer: "1. Tamil99: Standard layout with vowels on left and consonants on right for rapid typing.\n2. Phonetic (Transliteration): Typing Tamil phonetically using English letters (e.g. 'amma' -> 'அம்மா').\n3. Typewriter: Based on traditional Tamil mechanical typewriter layout.\n4. Inscript: National standard keyboard layout designed for all Indian languages.",
    answerTamil: "1. தமிழ்99: இடதுபுறம் உயிர் எழுத்துக்களும், வலதுபுறம் மெய் எழுத்துக்களும் கொண்ட தமிழ்நாடு அரசின் அதிகாரப்பூர்வ விசைப்பலகை.\n2. ஒலியியல் (Phonetic): ஆங்கில எழுத்துக்களில் ஒலியமைப்பில் தட்டச்சு செய்தல் (எ.கா: amma -> அம்மா).\n3. தட்டச்சுப்பொறி: மரபுவழி தட்டச்சுப் பொறி தளவமைப்பு.\n4. இன்ஸ்கிரிப்ட் (Inscript): இந்திய மொழிகளுக்கான பொதுவான விசைப்பலகை.", isBookBack: true
  },
  {
    id: "cs11-ch18-3m-2", chapterNo: 18, chapterName: "Tamil Computing", chapterNameTamil: "கணினித் தமிழ்", marks: 3, type: "brief",
    questionText: "What is Tamil Text-to-Speech (TTS) and Speech Recognition in Tamil?", questionTextTamil: "தமிழ் உரையிலிருந்து பேச்சு (TTS) மற்றும் பேச்சுணறி தொழில்நுட்பங்களை விளக்குக.",
    answer: "1. Tamil TTS (Text-to-Speech): Synthesizes digital Tamil text into natural human spoken audio.\n2. Tamil Speech Recognition (STT): Converts spoken Tamil voice inputs into digital text, enabling voice typing and virtual voice assistants.",
    answerTamil: "1. உரையிலிருந்து பேச்சு (TTS): கணினியிலுள்ள தமிழ் உரையை குரல் வடிவில் வாசித்து ஒலிக்கும் தொழில்நுட்பம்.\n2. பேச்சுணறி (Speech-to-Text): நாம் பேசும் தமிழ் குரலை உணர்ந்து அதை கணினி உரையாக மாற்றும் தொழில்நுட்பம்.", isBookBack: true
  },
  {
    id: "cs11-ch18-3m-3", chapterNo: 18, chapterName: "Tamil Computing", chapterNameTamil: "கணினித் தமிழ்", marks: 3, type: "brief",
    questionText: "Write a short note on Tamil Search Engines and Tamil Wikipedia.", questionTextTamil: "தமிழ் தேடுபொறிகள் மற்றும் தமிழ் விக்கிப்பீடியா பற்றி சிறுகுறிப்பு வரைக.",
    answer: "1. Tamil Search Engines: Web crawlers and indexing systems designed to search Tamil content (e.g., Google Tamil search).\n2. Tamil Wikipedia: A free, collaborative, online Tamil encyclopedia containing over 150,000+ peer-reviewed Tamil articles across arts, sciences, and history.",
    answerTamil: "1. தமிழ் தேடுபொறிகள்: தமிழில் இணைய தகவல்களைத் தேட உதவும் தளங்கள்.\n2. தமிழ் விக்கிப்பீடியா: உலகெங்கிலும் உள்ள தன்னார்வலர்களால் உருவாக்கப்பட்ட லட்சக்கணக்கான கட்டுரைகளைக் கொண்ட இலவச இணையக் கலைக்களஞ்சியம்.", isBookBack: true
  },
  {
    id: "cs11-ch18-3m-4", chapterNo: 18, chapterName: "Tamil Computing", chapterNameTamil: "கணினித் தமிழ்", marks: 3, type: "brief",
    questionText: "Explain Tamil Translation software and Spell Checkers.", questionTextTamil: "தமிழ் மொழிபெயர்ப்பு மென்பொருள்கள் மற்றும் எழுத்துப் பிழை திருத்திகளை விளக்குக.",
    answer: "1. Translation Software: Translates text from English and other languages to Tamil using Machine Translation and AI (e.g. Google Translate).\n2. Tamil Spell Checkers: Analyzes Tamil text against sandhi rules and grammatical dictionaries to detect and correct spelling errors (e.g. Naa. Ganesan spell checker).",
    answerTamil: "1. மொழிபெயர்ப்பு மென்பொருள்: ஆங்கிலம் உள்ளிட்ட பிற மொழிகளைத் தமிழிலும், தமிழை பிற மொழிகளிலும் மொழிபெயர்க்க உதவும் (எ.கா: Google Translate).\n2. எழுத்துப் பிழை திருத்தி: சந்திப் பிழைகள் மற்றும் எழுத்துப் பிழைகளைக் கண்டறிந்து திருத்த உதவும் மென்பொருள்.", isBookBack: true
  },
  {
    id: "cs11-ch18-3m-5", chapterNo: 18, chapterName: "Tamil Computing", chapterNameTamil: "கணினித் தமிழ்", marks: 3, type: "brief",
    questionText: "Explain Tamil Digitization and e-Libraries (Project Madurai, Tamil Virtual Academy Library).", questionTextTamil: "தமிழ் மின்னாக்கம் மற்றும் மின்நூலகங்கள் (மதுரைத் திட்டம், தமிழ் இணையக் கல்விக்கழக மின்நூலகம்) பற்றி விளக்குக.",
    answer: "Tamil Digitization converts ancient palm-leaf manuscripts and rare classical literature into digital formats.\n- Project Madurai: An open, voluntary worldwide initiative that digitized classical and modern Tamil literary works.\n- TVA Digital Library: Houses millions of digitized pages of rare Tamil books, manuscripts, and periodicals.",
    answerTamil: "தமிழ் மின்னாக்கம் என்பது பழந்தமிழ் ஓலைச்சுவடிகள் மற்றும் அரிய நூல்களை டிஜிட்டல் வடிவில் மாற்றி பாதுகாக்கும் பணியாகும்.\n- மதுரைத் திட்டம் (Project Madurai): பழந்தமிழ் இலக்கியங்களை மின்வடிவில் மாற்றும் தன்னார்வத் திட்டம்.\n- தமிழ் இணையக் கல்விக்கழக மின்நூலகம்: லட்சக்கணக்கான அரிய தமிழ் நூல்களைக் கொண்ட இணைய நூலகம்.", isBookBack: true
  },
  {
    id: "cs11-ch18-3m-6", chapterNo: 18, chapterName: "Tamil Computing", chapterNameTamil: "கணினித் தமிழ்", marks: 3, type: "brief",
    questionText: "What are Tamil Operating Systems and Open Source Tamil software?", questionTextTamil: "தமிழ் இயக்க அமைப்புகள் மற்றும் திறந்த மூல தமிழ் மென்பொருள்கள் பற்றி கூறுக.",
    answer: "Operating systems localized in Tamil (such as Tamil Linux distributions like BOSS, Ubuntu Tamil interface) and open source office suites like LibreOffice Tamil enable full computing in mother tongue.",
    answerTamil: "தமிழ் இடைமுகத்தைக் கொண்ட லினக்ஸ் இயக்க அமைப்புகள் (BOSS Linux, Ubuntu Tamil) மற்றும் லிப்ரே ஆபீஸ் (LibreOffice) போன்ற திறந்த மூல மென்பொருள்கள் தாய்மொழியில் முழுமையான கணினிப் பயன்பாட்டை வழங்குகின்றன.", isBookBack: true
  },

  // 5 Marks (4)
  {
    id: "cs11-ch18-5m-1", chapterNo: 18, chapterName: "Tamil Computing", chapterNameTamil: "கணினித் தமிழ்", marks: 5, type: "essay",
    questionText: "Explain the Growth, Development, and Evolution of Tamil Computing in detail.", questionTextTamil: "கணினித் தமிழின் வளர்ச்சி, வரலாறு மற்றும் பரிணாமத்தை விரிவாக விளக்குக.",
    answer: "1. Early Era: Non-standard 8-bit fonts (Bamini, Vanavil) requiring dedicated fonts on every system.\n2. Standardization: TAB and TAM encodings developed during early international Tamil internet conferences (INFITT).\n3. Unicode Revolution: Inclusion of Tamil in Unicode 16-bit encoding allowed global search, interchange, and platform-independent rendering.\n4. Keyboard Standardization: Tamil Nadu government approved Tamil99 layout.\n5. Modern AI Era: Natural Language Processing (NLP), Machine Translation, Speech Recognition, and OCR in Tamil.",
    answerTamil: "1. தொடக்க காலம்: 8-பிட் எழுத்துருக்கள் (பாமினி, வானவில்) - குறிப்பிட்ட எழுத்துரு இல்லையெனில் எழுத்துக்கள் தெரியாது.\n2. தரப்படுத்துதல்: TAB மற்றும் TAM குறியீட்டு முறைகள் உருவாக்கம்.\n3. யூனிகோட் புரட்சி: யூனிகோடில் தமிழ் சேர்க்கப்பட்டதால் உலகெங்கும் எழுத்துரு சிக்கலின்றி தமிழ் பரவியது.\n4. விசைப்பலகை தரநிலை: தமிழ்நாடு அரசால் தமிழ்99 விசைப்பலகை அங்கீகரிக்கப்பட்டது.\n5. நவீன காலம்: செயற்கை நுண்ணறிவு, தமிழ் மொழிபெயர்ப்பு, பேச்சுணறி மற்றும் மின்னாக்கம்.", isBookBack: true
  },
  {
    id: "cs11-ch18-5m-2", chapterNo: 18, chapterName: "Tamil Computing", chapterNameTamil: "கணினித் தமிழ்", marks: 5, type: "essay",
    questionText: "Explain the Role and Contributions of Tamil Virtual Academy (TVA) in promoting Tamil Education and Research.", questionTextTamil: "தமிழ் இணையக் கல்விக்கழகத்தின் (TVA) நோக்கம், பணிகள் மற்றும் பங்களிப்புகளை விரிவாக விளக்குக.",
    answer: "Objectives and Services of Tamil Virtual Academy:\n1. Tamil Education Worldwide: Offers certificate, diploma, and degree courses in Tamil for students across the world.\n2. Digital Library: Digitized millions of pages of ancient Tamil literature, palm-leaf manuscripts, dictionaries, and rare periodicals.\n3. Tamil Software Development: Developing Tamil NLP tools, spell checkers, machine translation, and OCR engines.\n4. Tagging and Lexicons: Standardizing Tamil technical glossaries and scientific terminology.",
    answerTamil: "தமிழ் இணையக் கல்விக்கழகத்தின் முக்கியப் பணிகள்:\n1. உலகளாவிய தமிழ்க் கல்வி: சான்றிதழ், பட்டய மற்றும் பட்டப் படிப்புகளை இணையம் மூலம் நடத்துதல்.\n2. பிரம்மாண்ட மின்நூலகம்: ஓலைச்சுவடிகள், அரிய நூல்கள், இதழ்களை மின்னாக்கம் செய்து பாதுகாத்தல்.\n3. மென்பொருள் உருவாக்கம்: தமிழ் எழுத்துப் பிழை திருத்தி, OCR, மொழிபெயர்ப்புக் கருவிகளை உருவாக்குதல்.\n4. கலைச்சொல் களஞ்சியம்: அறிவியல் மற்றும் தொழில்நுட்பக் கலைச்சொற்களைத் தரப்படுத்துதல்.", isBookBack: true
  },
  {
    id: "cs11-ch18-5m-3", chapterNo: 18, chapterName: "Tamil Computing", chapterNameTamil: "கணினித் தமிழ்", marks: 5, type: "essay",
    questionText: "Explain various Natural Language Processing (NLP) tools in Tamil: Spell Checkers, Morphological Analyzers, Machine Translation, and Speech Tools.", questionTextTamil: "தமிழில் உள்ள பல்வேறு இயற்கை மொழி செயலாக்க (NLP) கருவிகளான எழுத்துப் பிழை திருத்தி, உருபனியல் ஆய்வி, இயந்திர மொழிபெயர்ப்பு மற்றும் பேச்சுத் தொழில்நுட்பங்களை விளக்குக.",
    answer: "1. Tamil Spell Checkers: Check spelling accuracy considering morpho-phonemic sandhi rules.\n2. Morphological Analyzers & Lemmatizers: Break down compound Tamil agglutinative words into root nouns/verbs and suffixes.\n3. Machine Translation: Translates between Tamil and other languages using neural machine learning models.\n4. Optical Character Recognition (OCR): Converts scanned historical texts and manuscripts into searchable text.\n5. Speech-to-Text & Text-to-Speech: Enables hands-free voice interaction and audiobooks in Tamil.",
    answerTamil: "1. எழுத்துப் பிழை திருத்தி: சந்தி விதிகளின்படி பிழைகளைக் கண்டறிந்து திருத்துகிறது.\n2. உருபனியல் ஆய்வி (Morphological Analyzer): கூட்டுச் சொற்களைப் பிரித்து வேர்ச்சொல் மற்றும் பின்னொட்டுகளை அடையாளம் காண்கிறது.\n3. இயந்திர மொழிபெயர்ப்பு: தமிழ் மற்றும் பிற மொழிகளுக்கு இடையே தானியங்கி மொழிபெயர்ப்பு.\n4. ஒளியியல் எழுத்துணறி (OCR): ஆவணப் படங்களை டிஜிட்டல் உரையாக மாற்றுதல்.\n5. பேச்சுத் தொழில்நுட்பங்கள்: உரையிலிருந்து பேச்சு (TTS) மற்றும் குரல் வழி தட்டச்சு.", isBookBack: true
  },
  {
    id: "cs11-ch18-5m-4", chapterNo: 18, chapterName: "Tamil Computing", chapterNameTamil: "கணினித் தமிழ்", marks: 5, type: "essay",
    questionText: "Explain the Significance of Unicode in Tamil Computing and how Tamil characters are encoded in Unicode.", questionTextTamil: "கணினித் தமிழில் யூனிகோடின் முக்கியத்துவம் மற்றும் தமிழில் யூனிகோட் எழுத்துக்கள் எவ்வாறு குறியாக்கம் செய்யப்பட்டுள்ளன என்பதை விளக்குக.",
    answer: "Significance of Unicode:\n1. Universal Compatibility: Tamil documents can be read across Windows, Linux, macOS, Android, and iOS without installing custom fonts.\n2. Global Search & Indexing: Enables search engines (Google) to index Tamil web pages accurately.\n3. Database & Web Interoperability: Standardized data exchange across web servers and cloud databases.\n\nTamil Unicode Block (U+0B80 to U+0BFF):\n- Contains slots for Tamil independent vowels (அ to ஔ), consonants (க to ன), vowel signs (மாதிரைகள்), Ayutha Ezhuthu (ஃ), and Tamil numerals (௧, ௨, ௩...).",
    answerTamil: "யூனிகோடின் முக்கியத்துவம்:\n1. உலகளாவிய இணக்கத்தன்மை: தனி எழுத்துருக்கள் இன்றியே அனைத்து கணினிகள் மற்றும் திறன்பேசிகளில் தமிழ் தெளிவாகத் தெரியும்.\n2. இணையத் தேடல்: கூகிள் போன்ற தேடுபொறிகள் தமிழ் உள்ளடக்கத்தை எளிதில் தேட முடிகிறது.\n3. தரவுத்தளப் பயன்பாடு: இணையப் பரிமாற்றத்திற்கு உதவுகிறது.\n\nதமிழ் யூனிகோட் தொகுதி (U+0B80 முதல் U+0BFF வரை):\n- இதில் உயிர் எழுத்துக்கள், மெய் எழுத்துக்கள், உயிர்மெய் குறியீடுகள், ஆய்த எழுத்து மற்றும் தமிழ் எண்கள் (௧, ௨, ௩) குறியாக்கம் செய்யப்பட்டுள்ளன.", isBookBack: true
  }
];

fs.writeFileSync('./scripts/ch17.json', JSON.stringify(ch17, null, 2));
fs.writeFileSync('./scripts/ch18.json', JSON.stringify(ch18, null, 2));
console.log('Ch17, Ch18 built successfully!');
