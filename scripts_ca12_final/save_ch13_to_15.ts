import fs from 'fs';
import { Question } from '../src/types';

// ==========================================
// CHAPTER 13: Network Cabling (10 1M, 6 2M, 5 3M, 3 5M = 24)
// ==========================================
export const ch13_questions: Question[] = [
  // 1M (10)
  {
    id: "ca12-ch13-1m-1", chapterNo: 13, chapterName: "Network Cabling", chapterNameTamil: "வலையமைப்பு வடமிடுதல்",
    marks: 1, type: "mcq", questionText: "ARPANET stands for",
    questionTextTamil: "ARPANET என்பதன் விரிவாக்கம்:",
    options: {
      A: "Advanced Research Projects Agency Network",
      B: "American Research Projects Agency Network",
      C: "Advanced Research Program Agency Network",
      D: "Advanced Radio Projects Agency Network"
    },
    optionsTamil: {
      A: "Advanced Research Projects Agency Network",
      B: "American Research Projects Agency Network",
      C: "Advanced Research Program Agency Network",
      D: "Advanced Radio Projects Agency Network"
    },
    correctOption: "A", answer: "A) Advanced Research Projects Agency Network", answerTamil: "A) Advanced Research Projects Agency Network", isBookBack: true
  },
  {
    id: "ca12-ch13-1m-2", chapterNo: 13, chapterName: "Network Cabling", chapterNameTamil: "வலையமைப்பு வடமிடுதல்",
    marks: 1, type: "mcq", questionText: "WWW was invented by",
    questionTextTamil: "WWW (World Wide Web) யாரால் கண்டுபிடிக்கப்பட்டது?",
    options: { A: "Tim Berners-Lee", B: "Vint Cerf", C: "Charles Babbage", D: "Bill Gates" },
    optionsTamil: { A: "டிம் பெர்னர்ஸ்-லீ (Tim Berners-Lee)", B: "வின்ட் செர்ப்", C: "சார்லஸ் பாபேஜ்", D: "பில் கேட்ஸ்" },
    correctOption: "A", answer: "A) Tim Berners-Lee", answerTamil: "A) டிம் பெர்னர்ஸ்-லீ (Tim Berners-Lee)", isBookBack: true
  },
  {
    id: "ca12-ch13-1m-3", chapterNo: 13, chapterName: "Network Cabling", chapterNameTamil: "வலையமைப்பு வடமிடுதல்",
    marks: 1, type: "mcq", questionText: "Which cable is used in cable TV?",
    questionTextTamil: "கேபிள் டிவியில் பயன்படுத்தப்படும் வடம் எது?",
    options: { A: "Coaxial Cable", B: "Twisted Pair Cable", C: "Fiber Optic Cable", D: "USB Cable" },
    optionsTamil: { A: "இணை அச்சு வடம் (Coaxial Cable)", B: "முறுக்கப்பட்ட இணை வடம்", C: "ஒளியிழை வடம்", D: "USB வடம்" },
    correctOption: "A", answer: "A) Coaxial Cable", answerTamil: "A) இணை அச்சு வடம் (Coaxial Cable)", isBookBack: true
  },
  {
    id: "ca12-ch13-1m-4", chapterNo: 13, chapterName: "Network Cabling", chapterNameTamil: "வலையமைப்பு வடமிடுதல்",
    marks: 1, type: "mcq", questionText: "Expansion of UTP is",
    questionTextTamil: "UTP என்பதன் விரிவாக்கம்:",
    options: {
      A: "Unshielded Twisted Pair",
      B: "Universal Twisted Pair",
      C: "Uniform Twisted Pair",
      D: "Unshielded Transmission Pair"
    },
    optionsTamil: {
      A: "Unshielded Twisted Pair",
      B: "Universal Twisted Pair",
      C: "Uniform Twisted Pair",
      D: "Unshielded Transmission Pair"
    },
    correctOption: "A", answer: "A) Unshielded Twisted Pair", answerTamil: "A) Unshielded Twisted Pair", isBookBack: true
  },
  {
    id: "ca12-ch13-1m-5", chapterNo: 13, chapterName: "Network Cabling", chapterNameTamil: "வலையமைப்பு வடமிடுதல்",
    marks: 1, type: "mcq", questionText: "Which medium is used in the optical fibre cables to transmit data?",
    questionTextTamil: "ஒளியிழை வடங்களில் தரவை அனுப்ப எந்த ஊடகம் பயன்படுகிறது?",
    options: { A: "Light pulses", B: "Electrical signals", C: "Radio waves", D: "Sound waves" },
    optionsTamil: { A: "ஒளி துடிப்புகள் (Light pulses)", B: "மின் சமிக்ஞைகள்", C: "ரேடியோ அலைகள்", D: "ஒலி அலைகள்" },
    correctOption: "A", answer: "A) Light pulses", answerTamil: "A) ஒளி துடிப்புகள் (Light pulses)", isBookBack: true
  },
  {
    id: "ca12-ch13-1m-6", chapterNo: 13, chapterName: "Network Cabling", chapterNameTamil: "வலையமைப்பு வடமிடுதல்",
    marks: 1, type: "mcq", questionText: "Which of the following is a small peripheral device with a sim slot to connect the computers to Internet?",
    questionTextTamil: "கணினியை இணையத்துடன் இணைக்க சிம் கார்டு ஸ்லாட்டுடன் கூடிய சிறிய சாதனம் எது?",
    options: { A: "Dongles", B: "Switch", C: "Hub", D: "Bridge" },
    optionsTamil: { A: "டாங்கிள்ஸ் (Dongles)", B: "சுவிட்ச்", C: "ஹப்", D: "பிரிட்ஜ்" },
    correctOption: "A", answer: "A) Dongles", answerTamil: "A) டாங்கிள்ஸ் (Dongles)", isBookBack: true
  },
  {
    id: "ca12-ch13-1m-7", chapterNo: 13, chapterName: "Network Cabling", chapterNameTamil: "வலையமைப்பு வடமிடுதல்",
    marks: 1, type: "mcq", questionText: "Which connector is used in the Ethernet cables?",
    questionTextTamil: "ஈதர்நெட் வடங்களில் பயன்படுத்தப்படும் இணைப்பு முனையம் எது?",
    options: { A: "RJ45", B: "RJ11", C: "RJ21", D: "USB" },
    optionsTamil: { A: "RJ45", B: "RJ11", C: "RJ21", D: "USB" },
    correctOption: "A", answer: "A) RJ45", answerTamil: "A) RJ45", isBookBack: true
  },
  {
    id: "ca12-ch13-1m-8", chapterNo: 13, chapterName: "Network Cabling", chapterNameTamil: "வலையமைப்பு வடமிடுதல்",
    marks: 1, type: "mcq", questionText: "Which of the following connector is called as champ connector?",
    questionTextTamil: "பின்வருவனவற்றுள் சாம்ப் (Champ) இணைப்பான் என்று அழைக்கப்படுவது எது?",
    options: { A: "RJ21", B: "RJ45", C: "RJ11", D: "RJ14" },
    optionsTamil: { A: "RJ21 (50-pin)", B: "RJ45", C: "RJ11", D: "RJ14" },
    correctOption: "A", answer: "A) RJ21", answerTamil: "A) RJ21", isBookBack: true
  },
  {
    id: "ca12-ch13-1m-9", chapterNo: 13, chapterName: "Network Cabling", chapterNameTamil: "வலையமைப்பு வடமிடுதல்",
    marks: 1, type: "mcq", questionText: "How many pins are used in RJ45 cables?",
    questionTextTamil: "RJ45 வடங்களில் எத்தனை ஊசிகள் (Pins) பயன்படுத்தப்படுகின்றன?",
    options: { A: "8", B: "4", C: "6", D: "2" },
    optionsTamil: { A: "8", B: "4", C: "6", D: "2" },
    correctOption: "A", answer: "A) 8", answerTamil: "A) 8", isBookBack: true
  },
  {
    id: "ca12-ch13-1m-10", chapterNo: 13, chapterName: "Network Cabling", chapterNameTamil: "வலையமைப்பு வடமிடுதல்",
    marks: 1, type: "mcq", questionText: "Which wiring standard is used for connecting two computers directly?",
    questionTextTamil: "இரண்டு கணினிகளை நேரடியாக இணைக்க எந்த கம்பி இணைப்பு முறை பயன்படுகிறது?",
    options: { A: "Crossover wiring", B: "Straight-through wiring", C: "Rollover wiring", D: "Loopback wiring" },
    optionsTamil: { A: "குறுக்கு இணைப்பு (Crossover wiring)", B: "நேரடி இணைப்பு (Straight-through)", C: "ரோல்ஓவர் இணைப்பு", D: "லூப்பேக் இணைப்பு" },
    correctOption: "A", answer: "A) Crossover wiring", answerTamil: "A) குறுக்கு இணைப்பு (Crossover wiring)", isBookBack: true
  },
  // 2M (6)
  {
    id: "ca12-ch13-2m-1", chapterNo: 13, chapterName: "Network Cabling", chapterNameTamil: "வலையமைப்பு வடமிடுதல்",
    marks: 2, type: "short", questionText: "Write a note on co-axial cable.",
    questionTextTamil: "இணை அச்சு வடம் (Co-axial cable) பற்றி குறிப்பு வரைக.",
    answer: "A coaxial cable has a central copper conductor surrounded by an insulating dielectric layer, metallic foil/braided shielding, and an outer protective jacket. Widely used in cable TV and broadband networks.",
    answerTamil: "இணை அச்சு வடம் மையத்தில் ஒரு தாமிர கம்பியையும், அதைச் சுற்றி மின்காப்பு அடுக்கு, உலோக கவச வலை மற்றும் வெளி உரையையும் கொண்டுள்ளது. இது கேபிள் டிவி மற்றும் இணைய இணைப்புகளுக்கு பயன்படுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch13-2m-2", chapterNo: 13, chapterName: "Network Cabling", chapterNameTamil: "வலையமைப்பு வடமிடுதல்",
    marks: 2, type: "short", questionText: "What are the uses of USB cables?",
    questionTextTamil: "USB வடங்களின் பயன்பாடுகள் யாவை?",
    answer: "USB (Universal Serial Bus) cables connect peripheral devices (mouse, keyboard, printer, flash drive, smartphone) to computers for high-speed data transfer and electrical power charging.",
    answerTamil: "USB வடங்கள் சுட்டி, விசைப்பலகை, அச்சுப்பொறி மற்றும் ஸ்மார்ட்போன்களை கணினியுடன் இணைத்து அதிவேக தரவு பரிமாற்றம் மற்றும் மின்சாரம் வழங்க பயன்படுகின்றன.",
    isBookBack: true
  },
  {
    id: "ca12-ch13-2m-3", chapterNo: 13, chapterName: "Network Cabling", chapterNameTamil: "வலையமைப்பு வடமிடுதல்",
    marks: 2, type: "short", questionText: "What is an Ethernet port?",
    questionTextTamil: "ஈதர்நெட் போர்ட் (Ethernet port) என்றால் என்ன?",
    answer: "An Ethernet port (RJ45 socket) is an opening on computer network cards, routers, and switches used to plug in an Ethernet network cable for wired LAN connectivity.",
    answerTamil: "ஈதர்நெட் போர்ட் என்பது கம்பிவழியான LAN இணைப்பை ஏற்படுத்த RJ45 வடத்தை செருகுவதற்கு கணினி மற்றும் ரூட்டர்களில் உள்ள ஒரு இணைப்பியாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch13-2m-4", chapterNo: 13, chapterName: "Network Cabling", chapterNameTamil: "வலையமைப்பு வடமிடுதல்",
    marks: 2, type: "short", questionText: "What is the use of Crimping tool?",
    questionTextTamil: "கிரிம்பிங் கருவியின் (Crimping tool) பயன்பாடு என்ன?",
    answer: "A crimping tool is a physical hand tool used to crimp/join an RJ45 modular plug onto the stripped ends of an 8-wire twisted-pair cable securely.",
    answerTamil: "கிரிம்பிங் கருவி என்பது முறுக்கப்பட்ட இணை வடங்களின் முனைகளில் RJ45 இணைப்பிகளை உறுதியாக இணைத்து பூட்ட பயன்படும் கை கருவியாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch13-2m-5", chapterNo: 13, chapterName: "Network Cabling", chapterNameTamil: "வலையமைப்பு வடமிடுதல்",
    marks: 2, type: "short", questionText: "What are the types of twisted pair cables?",
    questionTextTamil: "முறுக்கப்பட்ட இணை வடங்களின் வகைகள் யாவை?",
    answer: "Two types of twisted pair cables:\n1. UTP (Unshielded Twisted Pair)\n2. STP (Shielded Twisted Pair).",
    answerTamil: "முறுக்கப்பட்ட இணை வடங்களின் இரண்டு வகைகள்:\n1. கவசமற்ற முறுக்கப்பட்ட இணை வடம் (UTP)\n2. கவசமிட்ட முறுக்கப்பட்ட இணை வடம் (STP).",
    isBookBack: true
  },
  {
    id: "ca12-ch13-2m-6", chapterNo: 13, chapterName: "Network Cabling", chapterNameTamil: "வலையமைப்பு வடமிடுதல்",
    marks: 2, type: "short", questionText: "What is meant by champ connector?",
    questionTextTamil: "சாம்ப் இணைப்பான் (Champ connector) என்றால் என்ன?",
    answer: "A champ connector is an RJ21 telecommunications connector containing 50 pins used to connect up to 25 telephone/data lines simultaneously.",
    answerTamil: "சாம்ப் இணைப்பான் (RJ21) என்பது 50 பின்களைக் கொண்ட ஒரு தொலைத்தொடர்பு இணைப்பானாகும். இது ஒரே நேரத்தில் 25 தொலைபேசி இணைப்புகளை இணைக்க பயன்படுகிறது.",
    isBookBack: true
  },
  // 3M (5)
  {
    id: "ca12-ch13-3m-1", chapterNo: 13, chapterName: "Network Cabling", chapterNameTamil: "வலையமைப்பு வடமிடுதல்",
    marks: 3, type: "brief", questionText: "Write a note on crossover cables.",
    questionTextTamil: "குறுக்கு இணைப்பு வடங்கள் (Crossover cables) பற்றி குறிப்பு வரைக.",
    answer: "A crossover cable has transmit pins on one end crossed over to receive pins on the other end (T568A on one end, T568B on the other). Used to connect two similar devices directly (e.g. computer to computer, switch to switch) without a hub.",
    answerTamil: "குறுக்கு இணைப்பு வடத்தில் ஒரு முனையின் T568A தரநிலையும் மற்றொரு முனையில் T568B தரநிலையும் இணைக்கப்பட்டிருக்கும். இது இடைநிலை சாதனம் இன்றி இரண்டு கணினிகளை நேரடியாக இணைக்க பயன்படுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch13-3m-2", chapterNo: 13, chapterName: "Network Cabling", chapterNameTamil: "வலையமைப்பு வடமிடுதல்",
    marks: 3, type: "brief", questionText: "Write a short note on RJ45 connector.",
    questionTextTamil: "RJ45 இணைப்பான் பற்றி சிறு குறிப்பு வரைக.",
    answer: "RJ45 (Registered Jack 45) is an 8-pin/8-contact plastic modular connector used with twisted-pair Ethernet cables (Cat5e/Cat6) for high-speed local area networks.",
    answerTamil: "RJ45 என்பது 8-ஊசிகளைக் கொண்ட ஒரு பிளாஸ்டிக் இணைப்பானாகும். இது ஈதர்நெட் முறுக்கப்பட்ட இணை வடங்களுடன் LAN இணைப்புகளுக்காகப் பயன்படுத்தப்படுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch13-3m-3", chapterNo: 13, chapterName: "Network Cabling", chapterNameTamil: "வலையமைப்பு வடமிடுதல்",
    marks: 3, type: "brief", questionText: "What is meant by null modem cable? Give the examples.",
    questionTextTamil: "நல் மோடம் வடம் என்றால் என்ன? எடுத்துக்காட்டுகள் தருக.",
    answer: "A null modem cable is a specially wired RS-232 serial cable where transmit and receive lines are cross-linked, allowing direct communication between two DTE devices without a modem.\nExample: Serial cable connecting two PCs for direct file transfer or console debugging.",
    answerTamil: "நல் மோடம் வடம் என்பது மோடம் போன்ற சாதனம் ஏதுமின்றி இரண்டு கணினிகளை தொடர் தொடர்பு போர்ட் (RS-232) வழியாக நேரடியாக இணைக்கும் சிறப்பு வடமாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch13-3m-4", chapterNo: 13, chapterName: "Network Cabling", chapterNameTamil: "வலையமைப்பு வடமிடுதல்",
    marks: 3, type: "brief", questionText: "What are the components involved in Ethernet cabling?",
    questionTextTamil: "ஈதர்நெட் வடமிடுதலில் உள்ள கூறுகள் யாவை?",
    answer: "Key components in Ethernet cabling:\n1. Twisted Pair Cable (Cat5/Cat6/Cat7)\n2. RJ45 Connectors\n3. Network Interface Card (NIC / Ethernet Port)\n4. Crimping Tool\n5. Network Cable Tester / Stripper.",
    answerTamil: "ஈதர்நெட் வடமிடுதலின் முக்கிய கூறுகள்:\n1. முறுக்கப்பட்ட இணை வடம் (Cat 5/6)\n2. RJ45 இணைப்பிகள்\n3. பிணைய இடைமுக அட்டை (NIC / Ethernet Port)\n4. கிரிம்பிங் கருவி\n5. வடம் சோதிப்பான் (Cable Tester).",
    isBookBack: true
  },
  {
    id: "ca12-ch13-3m-5", chapterNo: 13, chapterName: "Network Cabling", chapterNameTamil: "வலையமைப்பு வடமிடுதல்",
    marks: 3, type: "brief", questionText: "What are the types of Fibre optic cables?",
    questionTextTamil: "ஒளியிழை வடங்களின் வகைகள் யாவை?",
    answer: "Two types of Optical Fibre cables:\n1. Single-Mode Fibre (SMF): Narrow core (~9 microns) transmits a single light path over long distances with minimal attenuation.\n2. Multi-Mode Fibre (MMF): Wider core (~50–62.5 microns) transmits multiple light paths over short-to-medium distances (e.g. within buildings).",
    answerTamil: "ஒளியிழை வடங்களின் இரண்டு வகைகள்:\n1. ஒற்றை-முறை ஒளியிழை (Single-Mode Fiber): நீண்ட தூரத்திற்கு ஒளியை அனுப்பும் குறுகிய மையக் கம்பி கொண்டவை.\n2. பல-முறை ஒளியிழை (Multi-Mode Fiber): குறுகிய தூரத்திற்கு பல ஒளிக்கற்றைகளை அனுப்பும் தடிமனான மையக் கம்பி கொண்டவை.",
    isBookBack: true
  },
  // 5M (3)
  {
    id: "ca12-ch13-5m-1", chapterNo: 13, chapterName: "Network Cabling", chapterNameTamil: "வலையமைப்பு வடமிடுதல்",
    marks: 5, type: "essay", questionText: "What is meant by Registered Jack? Explain briefly the types of Jacks.",
    questionTextTamil: "Registered Jack (RJ) என்றால் என்ன? அதன் வகைகளை சுருக்கமாக விளக்குக.",
    answer: "Registered Jack (RJ) is a standardized telecommunication network interface for connecting voice and data equipment.\n\nKey RJ Types:\n1. RJ-11: 4-pin/6-position modular connector used for single-line analog telephone wiring.\n2. RJ-14: 6-position/4-conductor jack used for two telephone lines.\n3. RJ-45: 8-pin/8-conductor connector widely used for computer Ethernet LAN connections.\n4. RJ-61: 8-position jack used for multi-line (up to 4 lines) telephone wiring.\n5. RJ-21 (Champ): 50-pin connector handling up to 25 telephone lines in telecom switchboards.",
    answerTamil: "Registered Jack (RJ) என்பது குரல் மற்றும் தரவு பரிமாற்றத்திற்கான நிலையான தொலைத்தொடர்பு இடைமுக அமைப்பாகும்.\n\nமுக்கிய வகைகள்:\n1. RJ11: ஒற்றை வரி தொலைபேசி இணைப்புக்கான 4-பின் இணைப்பான்.\n2. RJ14: இரண்டு தொலைபேசி வரிகளுக்கான இணைப்பான்.\n3. RJ45: கணினி ஈதர்நெட் நெட்வொர்க்குகளுக்கான 8-பின் இணைப்பான்.\n4. RJ61: நான்கு தொலைபேசி வரிகளுக்கான இணைப்பான்.\n5. RJ21 (சாம்பின் இணைப்பான்): 25 தொலைபேசி வரிகளை கையாளும் 50-பின் இணைப்பான்.",
    isBookBack: true
  },
  {
    id: "ca12-ch13-5m-2", chapterNo: 13, chapterName: "Network Cabling", chapterNameTamil: "வலையமைப்பு வடமிடுதல்",
    marks: 5, type: "essay", questionText: "Explain the components used in Ethernet cabling.",
    questionTextTamil: "ஈதர்நெட் வடமிடுதலில் பயன்படுத்தப்படும் கூறுகளை விரிவாக விளக்குக.",
    answer: "Components used in Ethernet Cabling:\n\n1. Twisted Pair Cable: 8 color-coded copper wires arranged in 4 twisted pairs to cancel electromagnetic interference (Cat5e, Cat6, Cat7).\n2. RJ45 Connector: Standard 8-pin clear plastic modular plug that connects the cable end to network devices.\n3. Ethernet Port / NIC: Hardware interface on PCs, routers, and switches accepting the RJ45 jack.\n4. Crimping Tool: Hand tool that presses metal connector pins onto wire conductors and fastens the plug jacket.\n5. Wire Stripper & Cable Tester: Removes outer insulation jackets safely and verifies 8-pin pinout connectivity.",
    answerTamil: "ஈதர்நெட் வடமிடுதலின் முக்கிய கூறுகள்:\n1. முறுக்கப்பட்ட இணை வடம்: 8 வண்ண கம்பிகளைக் கொண்ட 4 ஜோடிகள்.\n2. RJ45 இணைப்பான்: 8-ஊசிகள் கொண்ட பிளாஸ்டிக் முனை.\n3. ஈதர்நெட் போர்ட் (NIC): கணினியில் RJ45 செருகப்படும் துளை.\n4. கிரிம்பிங் கருவி: கம்பிகளை RJ45 உடன் இணைக்கும் கருவி.\n5. வடம் சோதிப்பான்: இணைப்பு சரியாக உள்ளதா என்பதை சரிபார்க்கும் சாதனம்.",
    isBookBack: true
  },
  {
    id: "ca12-ch13-5m-3", chapterNo: 13, chapterName: "Network Cabling", chapterNameTamil: "வலையமைப்பு வடமிடுதல்",
    marks: 5, type: "essay", questionText: "Explain the types of network cables",
    questionTextTamil: "பல்வேறு வகையான பிணைய வடங்களை (Network Cables) விரிவாக விளக்குக.",
    answer: "Types of Network Cables:\n\n1. Coaxial Cable: Copper core surrounded by insulation and metallic braid shield. Resistant to interference, used in Cable TV.\n2. Twisted Pair Cable:\n- UTP (Unshielded Twisted Pair): Flexible, inexpensive, standard for LANs.\n- STP (Shielded Twisted Pair): Additional foil shielding against external noise.\n3. Fibre Optic Cable: Core made of glass/plastic fibres transmitting data as light pulses. Ultra-fast speeds (Gbps/Tbps), immune to EMI, used for internet backbones.\n4. USB Cables: Connects local peripherals and external devices to computers.\n5. Serial / Null Modem Cables: Transmits data sequentially for direct machine-to-machine communications.",
    answerTamil: "பிணைய வடங்களின் வகைகள்:\n1. இணை அச்சு வடம் (Coaxial Cable): கேபிள் டிவி மற்றும் பிராட்பேண்ட் பயன்பாடு.\n2. முறுக்கப்பட்ட இணை வடம் (Twisted Pair): UTP மற்றும் STP என இருவகை, உள்ளூர் வலையமைப்பிற்கு சிறந்தது.\n3. ஒளியிழை வடம் (Fibre Optic Cable): கண்ணாடி இழைகள் வழியே ஒளி அலைகளாக தரவை அதிவேகமாக கொண்டு செல்லும் வடம்.\n4. USB வடம்: புற சாதனங்களை இணைக்க பயன்படுவது.\n5. தொடர் வடம் (Serial Cable): நேரடி சாதன தகவல்தொடர்புக்கு பயன்படுவது.",
    isBookBack: true
  }
];

// ==========================================
// CHAPTER 14: Open Source Concepts (8 1M, 5 2M, 5 3M, 2 5M = 20)
// ==========================================
export const ch14_questions: Question[] = [
  // 1M (8)
  {
    id: "ca12-ch14-1m-1", chapterNo: 14, chapterName: "Open Source Concepts", chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 1, type: "mcq", questionText: "If the source code of a software is freely accessible by the public, then it is known as",
    questionTextTamil: "ஒரு மென்பொருளின் மூலக் குறியீடு பொதுமக்களுக்கு இலவசமாக கிடைத்தால் அது எவ்வாறு அழைக்கப்படுகிறது?",
    options: { A: "Open source", B: "Proprietary", C: "Commercial", D: "Freeware" },
    optionsTamil: { A: "திறந்த மூலம் (Open source)", B: "தனியுரிமம்", C: "வணிக மென்பொருள்", D: "இலவச மென்பொருள்" },
    correctOption: "A", answer: "A) Open source", answerTamil: "A) திறந்த மூலம் (Open source)", isBookBack: true
  },
  {
    id: "ca12-ch14-1m-2", chapterNo: 14, chapterName: "Open Source Concepts", chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 1, type: "mcq", questionText: "Which of the following is a software program that replicates the functioning of a computer network?",
    questionTextTamil: "கணினி வலையமைப்பின் செயல்பாட்டை உருவகப்படுத்தும் மென்பொருள் நிரல் எது?",
    options: { A: "Network Simulator", B: "Network Monitor", C: "Network Switch", D: "Network Firewall" },
    optionsTamil: { A: "வலையமைப்பு உருவகப்படுத்தி (Network Simulator)", B: "வலையமைப்பு கண்காணிப்பாளர்", C: "சுவிட்ச்", D: "ஃபயர்வால்" },
    correctOption: "A", answer: "A) Network Simulator", answerTamil: "A) வலையமைப்பு உருவகப்படுத்தி (Network Simulator)", isBookBack: true
  },
  {
    id: "ca12-ch14-1m-3", chapterNo: 14, chapterName: "Open Source Concepts", chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 1, type: "mcq", questionText: "Which of the following can document every incident that happened in the simulation and are used for examination?",
    questionTextTamil: "உருவகப்படுத்துதலில் நடந்த ஒவ்வொரு நிகழ்வையும் ஆவணப்படுத்தி ஆய்வு செய்ய பயன்படுவது எது?",
    options: { A: "Trace file", B: "Log file", C: "Text file", D: "Dump file" },
    optionsTamil: { A: "சுவடு கோப்பு (Trace file)", B: "பதிவு கோப்பு", C: "உரை கோப்பு", D: "டம்ப் கோப்பு" },
    correctOption: "A", answer: "A) Trace file", answerTamil: "A) சுவடு கோப்பு (Trace file)", isBookBack: true
  },
  {
    id: "ca12-ch14-1m-4", chapterNo: 14, chapterName: "Open Source Concepts", chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 1, type: "mcq", questionText: "Which is an example of network simulator?",
    questionTextTamil: "வலையமைப்பு உருவகப்படுத்திக்கு ஓர் எடுத்துக்காட்டு எது?",
    options: { A: "NS2", B: "MS Word", C: "Photoshop", D: "PageMaker" },
    optionsTamil: { A: "NS2 (Network Simulator 2)", B: "MS Word", C: "Photoshop", D: "PageMaker" },
    correctOption: "A", answer: "A) NS2", answerTamil: "A) NS2", isBookBack: true
  },
  {
    id: "ca12-ch14-1m-5", chapterNo: 14, chapterName: "Open Source Concepts", chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 1, type: "mcq", questionText: "Choose the Correct Pair from the following to build NS2",
    questionTextTamil: "NS2-ஐ உருவாக்க பயன்படுத்தப்படும் சரியான மொழிகள் இணையைத் தேர்ந்தெடுக்கவும்:",
    options: { A: "C++ and OTcl", B: "C and Java", C: "Python and C++", D: "PHP and MySQL" },
    optionsTamil: { A: "C++ மற்றும் OTcl", B: "C மற்றும் Java", C: "Python மற்றும் C++", D: "PHP மற்றும் MySQL" },
    correctOption: "A", answer: "A) C++ and OTcl", answerTamil: "A) C++ மற்றும் OTcl", isBookBack: true
  },
  {
    id: "ca12-ch14-1m-6", chapterNo: 14, chapterName: "Open Source Concepts", chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 1, type: "mcq", questionText: "Which of the following is not a network simulation software?",
    questionTextTamil: "பின்வருவனவற்றுள் எது வலையமைப்பு உருவகப்படுத்தல் மென்பொருள் அல்ல?",
    options: { A: "C++", B: "NS2", C: "NS3", D: "OMNeT++" },
    optionsTamil: { A: "C++ (நிரலாக்க மொழி)", B: "NS2", C: "NS3", D: "OMNeT++" },
    correctOption: "A", answer: "A) C++", answerTamil: "A) C++ (நிரலாக்க மொழி)", isBookBack: true
  },
  {
    id: "ca12-ch14-1m-7", chapterNo: 14, chapterName: "Open Source Concepts", chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 1, type: "mcq", questionText: "Which of the following is a open source network monitoring software?",
    questionTextTamil: "பின்வருவனவற்றுள் திறந்த மூல வலையமைப்பு கண்காணிப்பு மென்பொருள் எது?",
    options: { A: "Open NMS", B: "MS Office", C: "CorelDraw", D: "PageMaker" },
    optionsTamil: { A: "Open NMS", B: "MS Office", C: "CorelDraw", D: "PageMaker" },
    correctOption: "A", answer: "A) Open NMS", answerTamil: "A) Open NMS", isBookBack: true
  },
  {
    id: "ca12-ch14-1m-8", chapterNo: 14, chapterName: "Open Source Concepts", chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 1, type: "mcq", questionText: "Open NMS was released in …………………",
    questionTextTamil: "Open NMS எந்த ஆண்டு வெளியிடப்பட்டது?",
    options: { A: "1999", B: "1995", C: "2005", D: "2010" },
    optionsTamil: { A: "1999", B: "1995", C: "2005", D: "2010" },
    correctOption: "A", answer: "A) 1999", answerTamil: "A) 1999", isBookBack: true
  },
  // 2M (5)
  {
    id: "ca12-ch14-2m-1", chapterNo: 14, chapterName: "Open Source Concepts", chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 2, type: "short", questionText: "What is Open Source Software?",
    questionTextTamil: "திறந்த மூல மென்பொருள் என்றால் என்ன?",
    answer: "Open Source Software (OSS) is software with source code that anyone can inspect, modify, enhance, and distribute freely under open source licenses.",
    answerTamil: "திறந்த மூல மென்பொருள் என்பது அதன் மூலக் குறியீட்டை எவரும் இலவசமாகப் பார்வையிட, மாற்றியமைக்க, மேம்படுத்த மற்றும் விநியோகிக்க அனுமதிக்கும் மென்பொருளாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch14-2m-2", chapterNo: 14, chapterName: "Open Source Concepts", chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 2, type: "short", questionText: "What is meant by network simulator?",
    questionTextTamil: "வலையமைப்பு உருவகப்படுத்தி என்றால் என்ன?",
    answer: "A network simulator is software that predicts and models the performance and behavior of computer networks without the need for expensive physical hardware testbeds.",
    answerTamil: "வலையமைப்பு உருவகப்படுத்தி என்பது கணினி வலையமைப்பின் செயல்பாடுகளை மெய்நிகராக சோதித்து அதன் செயல்திறனைக் கணிக்க பயன்படும் மென்பொருளாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch14-2m-3", chapterNo: 14, chapterName: "Open Source Concepts", chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 2, type: "short", questionText: "What is trace file?",
    questionTextTamil: "சுவடு கோப்பு (Trace file) என்றால் என்ன?",
    answer: "A trace file is a detailed log file produced by a network simulator recording every event (packet generated, forwarded, dropped, received) with precise timestamps.",
    answerTamil: "சுவடு கோப்பு என்பது வலையமைப்பு உருவகப்படுத்துதலில் நிகழும் ஒவ்வொரு நிகழ்வையும் (பாக்கெட் உருவாக்கம், பரிமாற்றம், இழப்பு) கால முத்திரையுடன் துல்லியமாகப் பதிவு செய்யும் கோப்பாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch14-2m-4", chapterNo: 14, chapterName: "Open Source Concepts", chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 2, type: "short", questionText: "Write short notes on NS2.",
    questionTextTamil: "NS2 பற்றி சிறு குறிப்பு வரைக.",
    answer: "NS2 (Network Simulator version 2) is a widely used discrete event network simulator written in C++ (for core packet processing) and Object-oriented Tcl (OTcl) for simulation scripts.",
    answerTamil: "NS2 (Network Simulator 2) என்பது C++ மற்றும் OTcl மொழிகளில் உருவாக்கப்பட்ட ஒரு பிரபலமான திறந்த மூல வலையமைப்பு உருவகப்படுத்தல் மென்பொருளாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch14-2m-5", chapterNo: 14, chapterName: "Open Source Concepts", chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 2, type: "short", questionText: "Write short note on Open NMS?",
    questionTextTamil: "Open NMS பற்றி சிறு குறிப்பு வரைக.",
    answer: "Open NMS is the world's first open-source enterprise-grade network management application platform, released in 1999 to monitor network availability and performance.",
    answerTamil: "Open NMS என்பது 1999-ல் வெளியிடப்பட்ட உலகின் முதல் திறந்த மூல தொழில்முறை பிணைய மேலாண்மை மற்றும் கண்காணிப்பு பயன்பாட்டு தளமாகும்.",
    isBookBack: true
  },
  // 3M (5)
  {
    id: "ca12-ch14-3m-1", chapterNo: 14, chapterName: "Open Source Concepts", chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 3, type: "brief", questionText: "What are the uses of Open source Network Software?",
    questionTextTamil: "திறந்த மூல வலையமைப்பு மென்பொருளின் பயன்பாடுகள் யாவை?",
    answer: "Uses of Open Source Network Software:\n1. Cost-free network simulation and architecture planning.\n2. Real-time network traffic analysis and fault monitoring.\n3. Customizable protocols for academic research and enterprise networks.",
    answerTamil: "பயன்பாடுகள்:\n1. இலவசமாக வலையமைப்பை உருவகப்படுத்தி திட்டமிடல்.\n2. நிகழ்நேர வலையமைப்பு கண்காணிப்பு மற்றும் பிழை திருத்தம்.\n3. கல்வி ஆராய்ச்சி மற்றும் புதிய நெறிமுறைகளை உருவாக்குதல்.",
    isBookBack: true
  },
  {
    id: "ca12-ch14-3m-2", chapterNo: 14, chapterName: "Open Source Concepts", chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 3, type: "brief", questionText: "Explain Free software.",
    questionTextTamil: "இலவச மென்பொருள் (Free software) பற்றி விளக்குக.",
    answer: "Free Software (defined by Richard Stallman / FSF) provides 4 essential freedoms:\n- Freedom 0: Run the program for any purpose.\n- Freedom 1: Study and modify source code.\n- Freedom 2: Redistribute copies.\n- Freedom 3: Distribute modified copies to help others.",
    answerTamil: "இலவச மென்பொருள் (FSF) வழங்கும் 4 உரிமைகள்:\n1. எந்த நோக்கத்திற்காகவும் நிரலை இயக்கும் உரிமை (Freedom 0).\n2. மூலக் குறியீட்டைப் படித்து மாற்றியமைக்கும் உரிமை (Freedom 1).\n3. நகல்களை பிறருக்கு விநியோகிக்கும் உரிமை (Freedom 2).\n4. மேம்படுத்திய பதிப்புகளை விநியோகிக்கும் உரிமை (Freedom 3).",
    isBookBack: true
  },
  {
    id: "ca12-ch14-3m-3", chapterNo: 14, chapterName: "Open Source Concepts", chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 3, type: "brief", questionText: "List out the Popular Open Source Software.",
    questionTextTamil: "பிரபலமான திறந்த மூல மென்பொருட்களைப் பட்டியலிடுக.",
    answer: "Popular Open Source Software:\n1. Linux (Operating System)\n2. Apache HTTP Server (Web Server)\n3. Mozilla Firefox (Browser)\n4. LibreOffice (Office Suite)\n5. GIMP (Image Editor)\n6. MySQL (Database Management System).",
    answerTamil: "பிரபல திறந்த மூல மென்பொருட்கள்:\n1. லினக்ஸ் (Linux)\n2. அப்பாச்சி (Apache HTTP Server)\n3. பயர்பாக்ஸ் (Mozilla Firefox)\n4. லிப்ரே ஆபீஸ் (LibreOffice)\n5. கிம்ப் (GIMP)\n6. MySQL.",
    isBookBack: true
  },
  {
    id: "ca12-ch14-3m-4", chapterNo: 14, chapterName: "Open Source Concepts", chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 3, type: "brief", questionText: "Write note on open source hardware.",
    questionTextTamil: "திறந்த மூல வன்பொருள் (Open source hardware) பற்றி குறிப்பு வரைக.",
    answer: "Open source hardware refers to physical computing hardware whose design schematics, PCB layouts, bills of materials, and firmware are made freely available to the public to study, replicate, and sell (e.g., Arduino, Raspberry Pi).",
    answerTamil: "திறந்த மூல வன்பொருள் என்பது அதன் வடிவமைப்பு வரைபடங்கள், சர்க்யூட் அமைப்புகள் மற்றும் ஃபார்ம்வேர் ஆகியவற்றை எவரும் இலவசமாகப் பயன்படுத்த அனுமதிக்கும் வன்பொருளாகும் (எ.கா. Arduino, Raspberry Pi).",
    isBookBack: true
  },
  {
    id: "ca12-ch14-3m-5", chapterNo: 14, chapterName: "Open Source Concepts", chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 3, type: "brief", questionText: "Explain Types of Organisations related to Open Source.",
    questionTextTamil: "திறந்த மூலத்துடன் தொடர்புடைய நிறுவனங்களின் வகைகளை விளக்குக.",
    answer: "Key Open Source Organizations:\n1. FSF (Free Software Foundation): Founded by Richard Stallman in 1985 to promote free software rights.\n2. OSI (Open Source Initiative): Established in 1998 to standardize and certify open-source licensing.\n3. Apache Software Foundation & Linux Foundation: Supports open-source software projects and global communities.",
    answerTamil: "திறந்த மூல நிறுவனங்கள்:\n1. FSF (Free Software Foundation): இலவச மென்பொருள் அறக்கட்டளை.\n2. OSI (Open Source Initiative): திறந்த மூல உரிமங்களை சான்றளிக்கும் அமைப்பு.\n3. அப்பாச்சி அறக்கட்டளை மற்றும் லினக்ஸ் அறக்கட்டளை.",
    isBookBack: true
  },
  // 5M (2)
  {
    id: "ca12-ch14-5m-1", chapterNo: 14, chapterName: "Open Source Concepts", chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 5, type: "essay", questionText: "Differentiate Proprietary and Open Source Software.",
    questionTextTamil: "தனியுரிம மென்பொருள் மற்றும் திறந்த மூல மென்பொருள் ஆகியவற்றை வேறுபடுத்துக.",
    answer: "Comparison between Proprietary and Open Source Software:\n\n1. Source Code: Closed and protected in proprietary (e.g. MS Windows); freely available and inspectable in open source (e.g. Linux).\n2. Cost: High licensing fees in proprietary; free or minimal support fees in open source.\n3. Customization: Not allowed in proprietary; fully customizable to user needs in open source.\n4. Innovation: Dependent on vendor's timeline in proprietary; driven by worldwide community collaboration in open source.\n5. Vendor Lock-in: High vendor dependency in proprietary; full independence in open source.",
    answerTamil: "தனியுரிம மற்றும் திறந்த மூல மென்பொருள்களின் வேறுபாடுகள்:\n1. மூலக் குறியீடு: தனியுரிமத்தில் மறைக்கப்பட்டுள்ளது; திறந்த மூலத்தில் அனைவருக்கும் இலவசமாகக் கிடைக்கிறது.\n2. விலை: தனியுரிமத்திற்கு அதிக உரிமக் கட்டணம்; திறந்த மூலம் முற்றிலும் இலவசம்.\n3. தனிப்பயனாக்கம்: தனியுரிமத்தில் மாற்ற இயலாது; திறந்த மூலத்தில் தேவைகேற்ப மாற்றலாம்.\n4. பாதுகாப்பு: தனியுரிமத்தில் நிறுவனம் மட்டுமே சரிசெய்யும்; திறந்த மூலத்தில் உலகளாவிய சமூகத்தால் விரைவாக சரிசெய்யப்படுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch14-5m-2", chapterNo: 14, chapterName: "Open Source Concepts", chapterNameTamil: "திறந்த மூலக் கருத்துக்கள்",
    marks: 5, type: "essay", questionText: "List out the Benefits of Open Source Software",
    questionTextTamil: "திறந்த மூல மென்பொருளின் நன்மைகளைப் பட்டியலிட்டு விவரிக்கவும்.",
    answer: "Benefits of Open Source Software:\n\n1. Zero/Low Cost: Free to download, install, and deploy without expensive per-user license fees.\n2. Transparency & Security: Code can be audited by millions of developers worldwide, discovering and patching vulnerabilities rapidly.\n3. Flexibility & Customizability: Organizations can tailor the software to fit their exact business logic.\n4. No Vendor Lock-in: Freedom to switch service providers or hosting infrastructure.\n5. Global Community Support: Continuous innovation through collaborative developer forums.",
    answerTamil: "திறந்த மூல மென்பொருளின் நன்மைகள்:\n1. பூஜ்ஜிய செலவு (Zero Cost): உரிமக் கட்டணங்கள் ஏதுமின்றி இலவசமாகப் பயன்படுத்தலாம்.\n2. உயர் பாதுகாப்பு மற்றும் வெளிப்படைத்தன்மை: மூலக் குறியீட்டை எவரும் தணிக்கை செய்து பிழைகளை நீக்கலாம்.\n3. நெகிழ்வுத்தன்மை (Flexibility): தேவையான மாற்றங்களை எளிதாக செய்து கொள்ளலாம்.\n4. வணிக சார்பின்மை: ஒரே நிறுவனத்தை சார்ந்திருக்க வேண்டிய அவசியமில்லை.\n5. உலகளாவிய சமூகம் மற்றும் தொடர் புதுப்பிப்புகள்.",
    isBookBack: true
  }
];

// ==========================================
// CHAPTER 15: E-Commerce (10 1M, 5 2M, 5 3M, 3 5M = 23)
// ==========================================
export const ch15_questions: Question[] = [
  // 1M (10)
  {
    id: "ca12-ch15-1m-1", chapterNo: 15, chapterName: "E-Commerce", chapterNameTamil: "மின்னணு வணிகம்",
    marks: 1, type: "mcq", questionText: "A company involved in E-Business if",
    questionTextTamil: "ஒரு நிறுவனம் எப்போது மின்-வணிகத்தில் (E-Business) ஈடுபட்டிருப்பதாகக் கருதப்படும்?",
    options: {
      A: "it conducts business over Internet",
      B: "it has physical stores",
      C: "it accepts cash only",
      D: "it manufactures goods only"
    },
    optionsTamil: {
      A: "இணையம் வழியாக வணிக நடவடிக்கைகளை நடத்தும்போது",
      B: "நேரடி கடைகளை மட்டுமே கொண்டிருக்கும் போது",
      C: "ரொக்கத்தை மட்டுமே ஏற்கும் போது",
      D: "பொருட்களை மட்டுமே உற்பத்தி செய்யும் போது"
    },
    correctOption: "A", answer: "A) it conducts business over Internet", answerTamil: "A) இணையம் வழியாக வணிக நடவடிக்கைகளை நடத்தும்போது", isBookBack: true
  },
  {
    id: "ca12-ch15-1m-2", chapterNo: 15, chapterName: "E-Commerce", chapterNameTamil: "மின்னணு வணிகம்",
    marks: 1, type: "mcq", questionText: "Which of the following is not a tangible good?",
    questionTextTamil: "பின்வருவனவற்றுள் எது தொட்டுணரக்கூடிய பொருள் (Tangible good) அல்ல?",
    options: { A: "Mobile Apps", B: "Laptop", C: "Mobile Phone", D: "Book" },
    optionsTamil: { A: "மொபைல் செயலிகள் (Mobile Apps)", B: "மடிக்கணினி", C: "கைபேசி", D: "புத்தகம்" },
    correctOption: "A", answer: "A) Mobile Apps", answerTamil: "A) மொபைல் செயலிகள் (Mobile Apps)", isBookBack: true
  },
  {
    id: "ca12-ch15-1m-3", chapterNo: 15, chapterName: "E-Commerce", chapterNameTamil: "மின்னணு வணிகம்",
    marks: 1, type: "mcq", questionText: "SME stands for",
    questionTextTamil: "SME என்பதன் விரிவாக்கம்:",
    options: {
      A: "Small and Medium Enterprises",
      B: "Small and Micro Enterprises",
      C: "State and Medium Enterprises",
      D: "Small Medium Economics"
    },
    optionsTamil: {
      A: "Small and Medium Enterprises",
      B: "Small and Micro Enterprises",
      C: "State and Medium Enterprises",
      D: "Small Medium Economics"
    },
    correctOption: "A", answer: "A) Small and Medium Enterprises", answerTamil: "A) Small and Medium Enterprises", isBookBack: true
  },
  {
    id: "ca12-ch15-1m-4", chapterNo: 15, chapterName: "E-Commerce", chapterNameTamil: "மின்னணு வணிகம்",
    marks: 1, type: "mcq", questionText: "The dotcom phenomenon deals with ________",
    questionTextTamil: "டாட்காம் நிகழ்வு எதனுடன் தொடர்புடையது?",
    options: {
      A: "rapid rise and fall of internet startups",
      B: "manufacturing of computers",
      C: "development of internet protocols",
      D: "space technology"
    },
    optionsTamil: {
      A: "இணைய தொடக்க நிறுவனங்களின் அதிவேக வளர்ச்சியும் வீழ்ச்சியும்",
      B: "கணினி உற்பத்தி",
      C: "இணைய நெறிமுறைகள் உருவாக்கம்",
      D: "விண்வெளி தொழில்நுட்பம்"
    },
    correctOption: "A", answer: "A) rapid rise and fall of internet startups", answerTamil: "A) இணைய தொடக்க நிறுவனங்களின் அதிவேக வளர்ச்சியும் வீழ்ச்சியும்", isBookBack: true
  },
  {
    id: "ca12-ch15-1m-5", chapterNo: 15, chapterName: "E-Commerce", chapterNameTamil: "மின்னணு வணிகம்",
    marks: 1, type: "mcq", questionText: "Which of the following is not correctly matched",
    questionTextTamil: "பின்வருவனவற்றுள் எது தவறாகப் பொருத்தப்பட்டுள்ளது?",
    options: {
      A: "B2B - Consumer to Consumer",
      B: "B2C - Business to Consumer",
      C: "C2C - Consumer to Consumer",
      D: "G2C - Government to Citizen"
    },
    optionsTamil: {
      A: "B2B - Consumer to Consumer",
      B: "B2C - Business to Consumer",
      C: "C2C - Consumer to Consumer",
      D: "G2C - Government to Citizen"
    },
    correctOption: "A", answer: "A) B2B - Consumer to Consumer", answerTamil: "A) B2B - Consumer to Consumer", isBookBack: true
  },
  {
    id: "ca12-ch15-1m-6", chapterNo: 15, chapterName: "E-Commerce", chapterNameTamil: "மின்னணு வணிகம்",
    marks: 1, type: "mcq", questionText: "Assertion (A): The websites of first wave dotcom companies were only in English Reason (R): The dotcom companies of first wave are mostly American companies.",
    questionTextTamil: "கூற்று (A): முதல் அலை டாட்காம் நிறுவனங்களின் வலைத்தளங்கள் ஆங்கிலத்தில் மட்டுமே இருந்தன. காரணம் (R): முதல் அலை டாட்காம் நிறுவனங்கள் பெரும்பாலும் அமெரிக்க நிறுவனங்கள் ஆகும்.",
    options: {
      A: "Both A and R are correct and R is the correct explanation of A",
      B: "Both A and R are correct but R is not the correct explanation of A",
      C: "A is correct but R is wrong",
      D: "A is wrong but R is correct"
    },
    optionsTamil: {
      A: "A மற்றும் R இரண்டும் சரி, R என்பது A-வின் சரியான விளக்கம்",
      B: "A மற்றும் R இரண்டும் சரி, ஆனால் R என்பது A-வின் சரியான விளக்கம் அல்ல",
      C: "A சரி ஆனால் R தவறு",
      D: "A தவறு ஆனால் R சரி"
    },
    correctOption: "A", answer: "A) Both A and R are correct and R is the correct explanation of A", answerTamil: "A) A மற்றும் R இரண்டும் சரி, R என்பது A-வின் சரியான விளக்கம்", isBookBack: true
  },
  {
    id: "ca12-ch15-1m-7", chapterNo: 15, chapterName: "E-Commerce", chapterNameTamil: "மின்னணு வணிகம்",
    marks: 1, type: "mcq", questionText: "Off-shoring means",
    questionTextTamil: "ஆஃப்-ஷோரிங் (Off-shoring) என்றால் என்ன?",
    options: {
      A: "relocating business processes abroad",
      B: "selling products locally",
      C: "closing a business",
      D: "buying goods in cash"
    },
    optionsTamil: {
      A: "வணிக செயல்முறைகளை வெளிநாடுகளுக்கு மாற்றுவது",
      B: "உள்ளூரில் பொருட்களை விற்பது",
      C: "வணிகத்தை மூடுவது",
      D: "ரொக்கமாக பொருட்களை வாங்குவது"
    },
    correctOption: "A", answer: "A) relocating business processes abroad", answerTamil: "A) வணிக செயல்முறைகளை வெளிநாடுகளுக்கு மாற்றுவது", isBookBack: true
  },
  {
    id: "ca12-ch15-1m-8", chapterNo: 15, chapterName: "E-Commerce", chapterNameTamil: "மின்னணு வணிகம்",
    marks: 1, type: "mcq", questionText: "G2G systems are classified into",
    questionTextTamil: "G2G அமைப்புகள் எவ்வாறாக வகைப்படுத்தப்படுகின்றன?",
    options: {
      A: "Internal and External",
      B: "Local and Global",
      C: "Public and Private",
      D: "Direct and Indirect"
    },
    optionsTamil: {
      A: "உள் மற்றும் வெளிப்புற அமைப்புகள் (Internal and External)",
      B: "உள்ளூர் மற்றும் உலகளாவிய",
      C: "பொது மற்றும் தனியார்",
      D: "நேரடி மற்றும் மறைமுக"
    },
    correctOption: "A", answer: "A) Internal and External", answerTamil: "A) உள் மற்றும் வெளிப்புற அமைப்புகள் (Internal and External)", isBookBack: true
  },
  {
    id: "ca12-ch15-1m-9", chapterNo: 15, chapterName: "E-Commerce", chapterNameTamil: "மின்னணு வணிகம்",
    marks: 1, type: "mcq", questionText: "____ host the e-books on their websites.",
    questionTextTamil: "மின்-புத்தகங்களை தங்கள் வலைத்தளங்களில் தொகுத்து வழங்குவது யார்?",
    options: { A: "Digital libraries / Publishers", B: "Banks", C: "Factories", D: "Couriers" },
    optionsTamil: { A: "டிஜிட்டல் நூலகங்கள் / வெளியீட்டாளர்கள்", B: "வங்கிகள்", C: "தொழிற்சாலைகள்", D: "கூரியர்கள்" },
    correctOption: "A", answer: "A) Digital libraries / Publishers", answerTamil: "A) டிஜிட்டல் நூலகங்கள் / வெளியீட்டாளர்கள்", isBookBack: true
  },
  {
    id: "ca12-ch15-1m-10", chapterNo: 15, chapterName: "E-Commerce", chapterNameTamil: "மின்னணு வணிகம்",
    marks: 1, type: "mcq", questionText: "Which of the following is a characteristics of E-Commerce",
    questionTextTamil: "மின்-வணிகத்தின் முக்கிய பண்புக்கூறு எது?",
    options: { A: "Global reach and 24/7 availability", B: "Cash only payment", C: "Geographic limits", D: "Manual ledger" },
    optionsTamil: { A: "உலகளாவிய அணுகல் மற்றும் 24/7 கிடைக்கும் தன்மை", B: "ரொக்க கட்டணம் மட்டுமே", C: "புவியியல் எல்லைகள்", D: "கைமுறை ஏடு" },
    correctOption: "A", answer: "A) Global reach and 24/7 availability", answerTamil: "A) உலகளாவிய அணுகல் மற்றும் 24/7 கிடைக்கும் தன்மை", isBookBack: true
  },
  // 2M (5)
  {
    id: "ca12-ch15-2m-1", chapterNo: 15, chapterName: "E-Commerce", chapterNameTamil: "மின்னணு வணிகம்",
    marks: 2, type: "short", questionText: "Define E-Commerce.",
    questionTextTamil: "மின்-வணிகம் (E-Commerce) - வரையறுக்கவும்.",
    answer: "E-Commerce (Electronic Commerce) is the buying and selling of goods, products, and services, or the transmission of funds and data, over an electronic network, primarily the Internet.",
    answerTamil: "மின்-வணிகம் என்பது இணையம் போன்ற மின்னணு நெட்வொர்க் வழியாக பொருட்கள் மற்றும் சேவைகளை வாங்குதல் மற்றும் விற்பனை செய்தல் ஆகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch15-2m-2", chapterNo: 15, chapterName: "E-Commerce", chapterNameTamil: "மின்னணு வணிகம்",
    marks: 2, type: "short", questionText: "Distinguish between E-Business and E-Commerce",
    questionTextTamil: "மின்-தொழில் (E-Business) மற்றும் மின்-வணிகம் (E-Commerce) இடையே உள்ள வேறுபாடுகள் யாவை?",
    answer: "1. E-Commerce: Specifically covers commercial transactions (buying/selling) between business and customers over the Internet.\n2. E-Business: Broader concept encompassing all business activities including production, procurement, internal supply chain, and customer service.",
    answerTamil: "1. மின்-வணிகம்: இணையம் வழியே பொருட்கள் மற்றும் சேவைகளை வாங்குதல் மற்றும் விற்பனை செய்தலை மட்டுமே குறிக்கும்.\n2. மின்-தொழில்: உற்பத்தி, சரக்கு கொள்முதல், வாடிக்கையாளர் சேவை உள்ளிட்ட அனைத்து வணிக நடவடிக்கைகளையும் உள்ளடக்கிய பரந்த சொல்லாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch15-2m-3", chapterNo: 15, chapterName: "E-Commerce", chapterNameTamil: "மின்னணு வணிகம்",
    marks: 2, type: "short", questionText: "Differentiate tangible goods and intangible goods with example of your own.",
    questionTextTamil: "தொட்டுணரக்கூடிய மற்றும் தொட்டுணர முடியாத பொருட்களை சொந்த எடுத்துக்காட்டுகளுடன் வேறுபடுத்துக.",
    answer: "1. Tangible Goods: Physical items that can be touched and physically delivered (e.g. Laptop, Clothes, Mobile phone).\n2. Intangible Goods: Digital products that cannot be touched, delivered electronically (e.g. Antivirus software, E-books, Music download).",
    answerTamil: "1. தொட்டுணரக்கூடிய பொருட்கள் (Tangible): தொடக்கூடிய மற்றும் நேரடி விநியோகம் செய்யப்படும் பொருட்கள் (எ.கா. மடிக்கணினி, ஆடைகள்).\n2. தொட்டுணர முடியாத பொருட்கள் (Intangible): மின்னணு முறையில் தரவிறக்கம் செய்யப்படும் டிஜிட்டல் பொருட்கள் (எ.கா. மென்பொருள், மின்-புத்தகம்).",
    isBookBack: true
  },
  {
    id: "ca12-ch15-2m-4", chapterNo: 15, chapterName: "E-Commerce", chapterNameTamil: "மின்னணு வணிகம்",
    marks: 2, type: "short", questionText: "What is dotcom bubble and dotcom burst?",
    questionTextTamil: "டாட்காம் குமிழி (Dotcom bubble) மற்றும் டாட்காம் வெடிப்பு (Dotcom burst) என்றால் என்ன?",
    answer: "1. Dotcom Bubble: Rapid stock market speculation and massive investment surge in Internet companies between 1995 and 2000.\n2. Dotcom Burst: The market crash (2000–2002) where hundreds of unprofitable tech startups failed.",
    answerTamil: "1. டாட்காம் குமிழி: 1995 முதல் 2000 வரை இணைய நிறுவனங்களின் பங்குச் சந்தை மதிப்பில் ஏற்பட்ட அபரிமிதமான வளர்ச்சி.\n2. டாட்காம் வெடிப்பு: 2000-2002-ல் லாபமில்லாத பல இணைய நிறுவனங்கள் முடங்கி சந்தை சரிவடைந்த நிகழ்வு.",
    isBookBack: true
  },
  {
    id: "ca12-ch15-2m-5", chapterNo: 15, chapterName: "E-Commerce", chapterNameTamil: "மின்னணு வணிகம்",
    marks: 2, type: "short", questionText: "Write a short note on out-sourcing.",
    questionTextTamil: "வெளிப்பணி ஒப்படைத்தல் (Out-sourcing) பற்றி சிறு குறிப்பு வரைக.",
    answer: "Outsourcing is the business practice of hiring an external third-party company to perform services or create goods that traditionally were performed in-house (e.g., customer call centers, software development).",
    answerTamil: "வெளிப்பணி ஒப்படைத்தல் என்பது நிறுவனத்தின் குறிப்பிட்ட பணிகளை (வாடிக்கையாளர் சேவை, மென்பொருள் தயாரிப்பு) குறைந்த செலவில் செய்ய வெளிப்புற மூன்றாம் தரப்பு நிறுவனங்களிடம் ஒப்படைப்பதாகும்.",
    isBookBack: true
  },
  // 3M (5)
  {
    id: "ca12-ch15-3m-1", chapterNo: 15, chapterName: "E-Commerce", chapterNameTamil: "மின்னணு வணிகம்",
    marks: 3, type: "brief", questionText: "Describe how E-Commerce is related to socio-technological changes.",
    questionTextTamil: "மின்-வணிகம் எவ்வாறு சமூக-தொழில்நுட்ப மாற்றங்களுடன் தொடர்புடையது என்பதை விவரிக்கவும்.",
    answer: "E-Commerce evolved alongside broadband Internet, smartphones, and secure digital banking, completely transforming consumer habits from physical store shopping to 24/7 anywhere mobile shopping and instant digital payments.",
    answerTamil: "மின்-வணிகம் என்பது அதிவேக இணையம், ஸ்மார்ட்போன்கள் மற்றும் டிஜிட்டல் கட்டண முறைகளின் வளர்ச்சியால் மக்களின் ஷாப்பிங் பழக்கவழக்கங்களை 24 மணி நேரமும் எங்கிருந்தும் வாங்கும் வகையில் மாற்றியுள்ளது.",
    isBookBack: true
  },
  {
    id: "ca12-ch15-3m-2", chapterNo: 15, chapterName: "E-Commerce", chapterNameTamil: "மின்னணு வணிகம்",
    marks: 3, type: "brief", questionText: "Write a short note on the third wave of E-Commerce.",
    questionTextTamil: "மின்-வணிகத்தின் மூன்றாம் அலை (Third wave) பற்றி சிறு குறிப்பு வரைக.",
    answer: "The Third Wave of E-Commerce (2010 onwards) is characterized by:\n1. Mobile Commerce (Smartphones/Apps)\n2. Cloud Computing and AI-driven recommendations\n3. Integration with Social Media networks\n4. Global cross-border trade in localized languages.",
    answerTamil: "மின்-வணிகத்தின் மூன்றாம் அலை (2010 முதல்):\n1. மொபைல் வணிகம் (ஸ்மார்ட்போன் செயலிகள்)\n2. கிளவுட் கம்ப்யூட்டிங் மற்றும் AI பரிந்துரைகள்\n3. சமூக ஊடக ஒருங்கிணைப்பு\n4. பிராந்திய மொழிகளில் உலகளாவிய வர்த்தகம்.",
    isBookBack: true
  },
  {
    id: "ca12-ch15-3m-3", chapterNo: 15, chapterName: "E-Commerce", chapterNameTamil: "மின்னணு வணிகம்",
    marks: 3, type: "brief", questionText: "Explain B2B module in E-Commerce.",
    questionTextTamil: "மின்-வணிகத்தில் B2B மாதிரியை விளக்குக.",
    answer: "B2B (Business-to-Business) E-Commerce involves commercial transactions and bulk trade between two businesses, such as a manufacturer selling raw materials to a wholesaler or distributor (e.g. IndiaMART, Alibaba).",
    answerTamil: "B2B (Business-to-Business) என்பது இரண்டு வணிக நிறுவனங்களுக்கு இடையே நடைபெறும் மொத்த வர்த்தகமாகும் (எ.கா. உற்பத்தியாளர் மொத்த விற்பனையாளருக்கு மூலப்பொருட்களை விற்பனை செய்தல் - Alibaba, IndiaMART).",
    isBookBack: true
  },
  {
    id: "ca12-ch15-3m-4", chapterNo: 15, chapterName: "E-Commerce", chapterNameTamil: "மின்னணு வணிகம்",
    marks: 3, type: "brief", questionText: "Write a note on name-your-own-price websites.",
    questionTextTamil: "உங்கள்-விலையை-நீங்களே-கூறும் வலைத்தளங்கள் (Name-your-own-price) பற்றி குறிப்பு வரைக.",
    answer: "Name-your-own-price websites (C2B model, e.g. Priceline) allow buyers to specify the price they are willing to pay for travel, airline tickets, or hotel rooms, which sellers can choose to accept or decline.",
    answerTamil: "பயண டிக்கெட்டுகள் அல்லது ஹோட்டல் அறைகளுக்கு நுகர்வோரே தங்களுக்கு விருப்பமான விலையைக் குறிப்பிட அனுமதிக்கும் வலைத்தளங்களாகும் (C2B மாதிரி, எ.கா. Priceline).",
    isBookBack: true
  },
  {
    id: "ca12-ch15-3m-5", chapterNo: 15, chapterName: "E-Commerce", chapterNameTamil: "மின்னணு வணிகம்",
    marks: 3, type: "brief", questionText: "Write a note on physical product dispute of E-Commerce.",
    questionTextTamil: "மின்-வணிகத்தில் இயற்பியல் பொருள் தகராறு (Physical product dispute) பற்றி குறிப்பு வரைக.",
    answer: "Physical product disputes arise in E-Commerce when the delivered physical good is damaged, defective, counterfeit, or differs significantly from the catalog image and description, requiring return/refund policies.",
    answerTamil: "மின்-வணிகத்தில் விநியோகிக்கப்பட்ட பொருள் சேதமடைந்திருந்தாலோ, போலியானதாக இருந்தாலோ அல்லது வலைத்தள விளக்கத்திலிருந்து மாறுபட்டிருந்தாலோ எழும் நுகர்வோர் தகராறுகளாகும்.",
    isBookBack: true
  },
  // 5M (3)
  {
    id: "ca12-ch15-5m-1", chapterNo: 15, chapterName: "E-Commerce", chapterNameTamil: "மின்னணு வணிகம்",
    marks: 5, type: "essay", questionText: "List all the E-Commerce business models and explain any four briefly.",
    questionTextTamil: "மின்-வணிக வணிக மாதிரிகளைப் பட்டியலிட்டு ஏதேனும் நான்கினை விரிவாக விளக்குக.",
    answer: "E-Commerce Business Models:\n\n1. B2C (Business-to-Consumer): Businesses sell retail goods directly to consumers (Amazon, Flipkart).\n2. B2B (Business-to-Business): Commercial trade between businesses (Alibaba, IndiaMART).\n3. C2C (Consumer-to-Consumer): Consumers sell goods to other consumers via auction/classifieds (eBay, OLX).\n4. C2B (Consumer-to-Business): Consumers offer products/services or bids to businesses (Freelance portals, Priceline).\n5. G2C (Government-to-Citizen): Government services provided online to citizens (Tax payment, Certificate portals).\n6. B2G (Business-to-Government): Businesses selling goods/services to government agencies.",
    answerTamil: "மின்-வணிக வணிக மாதிரிகள்:\n1. B2C (வணிகம் - நுகர்வோர்): நேரடியாக நுகர்வோருக்கு பொருட்களை விற்பனை செய்தல் (Amazon, Flipkart).\n2. B2B (வணிகம் - வணிகம்): இரண்டு நிறுவனங்களுக்கு இடையே நடைபெறும் மொத்த வர்த்தகம் (Alibaba).\n3. C2C (நுகர்வோர் - நுகர்வோர்): நுகர்வோர் தங்களுக்குள் பொருட்களை விற்பது (OLX, eBay).\n4. G2C (அரசு - குடிமக்கள்): அரசு சேவைகளை இணையம் மூலம் குடிமக்களுக்கு வழங்குதல் (e-Sevai).",
    isBookBack: true
  },
  {
    id: "ca12-ch15-5m-2", chapterNo: 15, chapterName: "E-Commerce", chapterNameTamil: "மின்னணு வணிகம்",
    marks: 5, type: "essay", questionText: "Explain any five E-Commerce revenue models.",
    questionTextTamil: "ஏதேனும் ஐந்து மின்-வணிக வருவாய் மாதிரிகளை (Revenue models) விளக்குக.",
    answer: "Five Major E-Commerce Revenue Models:\n\n1. Sales Revenue Model: Revenue earned directly by selling goods/services online (e.g. Amazon).\n2. Advertising Revenue Model: Earning fees by displaying ads and banners on websites (e.g. Google, Yahoo).\n3. Subscription Revenue Model: Charging users a recurring fee for access to premium content or streaming services (e.g. Netflix, Spotify).\n4. Transaction Fee / Commission Model: Charging a percentage fee for enabling transactions between buyers and sellers (e.g. eBay, PayPal).\n5. Affiliate Revenue Model: Receiving commission fees by steering consumers to affiliated merchant websites.",
    answerTamil: "ஐந்து மின்-வணிக வருவாய் மாதிரிகள்:\n1. விற்பனை வருவாய் மாதிரி (Sales): பொருட்களை விற்பதன் மூலம் நேரடியாக வருமானம் ஈட்டுதல்.\n2. விளம்பர வருவாய் மாதிரி (Advertising): வலைத்தளத்தில் விளம்பரங்களை வெளியிட்டு கட்டணம் பெறுதல்.\n3. சந்தா வருவாய் மாதிரி (Subscription): குறிப்பிட்ட காலத்திற்கு சேவை வழங்க சந்தா கட்டணம் வசூலித்தல் (Netflix).\n4. பரிவர்த்தனை கட்டண மாதிரி (Transaction Fee): வாங்குபவர்-விற்பவர் பரிவர்த்தனைகளுக்கு கமிஷன் பெறுதல்.\n5. அஃபிலியேட் வருவாய் மாதிரி (Affiliate): பிற நிறுவனங்களின் பொருட்களை பரிந்துரைத்து கமிஷன் பெறுதல்.",
    isBookBack: true
  },
  {
    id: "ca12-ch15-5m-3", chapterNo: 15, chapterName: "E-Commerce", chapterNameTamil: "மின்னணு வணிகம்",
    marks: 5, type: "essay", questionText: "How would you differentiate a traditional commerce and E-Commerce?",
    questionTextTamil: "பாரம்பரிய வணிகம் மற்றும் மின்-வணிகம் ஆகியவற்றை எவ்வாறு வேறுபடுத்துவீர்கள்?",
    answer: "Differences between Traditional Commerce and E-Commerce:\n\n1. Market Reach: Traditional is geographically local/limited; E-Commerce has global reach.\n2. Operating Hours: Traditional is limited to store business hours (e.g., 9am-9pm); E-Commerce operates 24/7/365.\n3. Physical Interaction: Traditional allows touching and testing products before purchase; E-Commerce relies on digital photos, reviews, and specifications.\n4. Cost of Operation: Traditional has high overhead (rent, electricity, large staff); E-Commerce has lower operating costs.\n5. Transaction Speed: Traditional uses cash/card at checkout counters; E-Commerce uses electronic fund transfers, cards, and UPI instantly.",
    answerTamil: "பாரம்பரிய வணிகம் vs மின்-வணிகம்:\n1. சந்தை பரப்பு: பாரம்பரிய வணிகம் குறிப்பிட்ட பகுதிக்கு மட்டுமே; மின்-வணிகம் உலகளாவியது.\n2. இயங்கும் நேரம்: பாரம்பரிய வணிகம் குறிப்பிட்ட நேரம் மட்டுமே; மின்-வணிகம் 24 மணி நேரமும் செயல்படும்.\n3. தொட்டுணர்தல்: பாரம்பரியத்தில் பொருட்களை நேரில் பார்த்து வாங்கலாம்; மின்-வணிகத்தில் டிஜிட்டல் படங்கள் மூலமே பார்க்க முடியும்.\n4. செயல்பாட்டுச் செலவு: பாரம்பரியத்தில் வாடகை, பராமரிப்பு அதிகம்; மின்-வணிகத்தில் குறைவான செலவு.\n5. கட்டண முறை: பாரம்பரியத்தில் ரொக்கம்; மின்-வணிகத்தில் ஆன்லைன் கட்டண முறைகள்.",
    isBookBack: true
  }
];

fs.writeFileSync('scripts_ca12_final/ch13.json', JSON.stringify(ch13_questions, null, 2), 'utf8');
fs.writeFileSync('scripts_ca12_final/ch14.json', JSON.stringify(ch14_questions, null, 2), 'utf8');
fs.writeFileSync('scripts_ca12_final/ch15.json', JSON.stringify(ch15_questions, null, 2), 'utf8');
console.log('Ch 13 done:', ch13_questions.length, '(expected 24)');
console.log('Ch 14 done:', ch14_questions.length, '(expected 20)');
console.log('Ch 15 done:', ch15_questions.length, '(expected 23)');
