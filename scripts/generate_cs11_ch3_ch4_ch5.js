import fs from 'fs';

// ==========================================
// CHAPTER 3: Computer Organisation (கணினி அமைப்பு)
// 1M: 10, 2M: 5, 3M: 7, 5M: 4 (Total: 26)
// ==========================================
const ch3 = [
  // 1 Marks (10)
  {
    id: "cs11-ch3-1m-1", chapterNo: 3, chapterName: "Computer Organization", chapterNameTamil: "கணினி அமைப்பு", marks: 1, type: "mcq",
    questionText: "Which of the following is said to be the brain of a computer?", questionTextTamil: "பின்வருவனற்றுள் எது கணிப்பொறியின் மூளை என அழைக்கப்படுகிறது?",
    options: { A: "Input devices", B: "Output devices", C: "Memory devices", D: "Microprocessor" },
    optionsTamil: { A: "உள்ளீட்டுச் சாதனங்கள்", B: "வெளியீட்டுச் சாதனங்கள்", C: "நினைவக சாதனங்கள்", D: "நுண்செயலி" },
    correctOption: "D", answer: "D) Microprocessor", answerTamil: "D) நுண்செயலி", isBookBack: true
  },
  {
    id: "cs11-ch3-1m-2", chapterNo: 3, chapterName: "Computer Organization", chapterNameTamil: "கணினி அமைப்பு", marks: 1, type: "mcq",
    questionText: "Which of the following is NOT part of a microprocessor?", questionTextTamil: "பின்வருவனற்றுள் எது நுண்செயலியின் பாகம் அல்ல?",
    options: { A: "Arithmetic Logic Unit", B: "Control Unit", C: "Cache memory", D: "Register" },
    optionsTamil: { A: "கணித ஏரணச்செயலகம்", B: "கட்டுப்பாட்டகம்", C: "கேச் நினைவகம் (Cache memory)", D: "பதிவேடு" },
    correctOption: "C", answer: "C) Cache memory", answerTamil: "C) கேச் நினைவகம்", isBookBack: true
  },
  {
    id: "cs11-ch3-1m-3", chapterNo: 3, chapterName: "Computer Organization", chapterNameTamil: "கணினி அமைப்பு", marks: 1, type: "mcq",
    questionText: "How many bits make a word?", questionTextTamil: "எத்தனை பிட்டுகள் ஒரு வார்த்தையமைக்கும்?",
    options: { A: "8", B: "16", C: "32", D: "Depends on the processor used" },
    optionsTamil: { A: "8", B: "16", C: "32", D: "பயன்படுத்தப்படும் செயலியைப் பொறுத்தது" },
    correctOption: "D", answer: "D) Depends on the processor used", answerTamil: "D) பயன்படுத்தப்படும் செயலியைப் பொறுத்தது", isBookBack: true
  },
  {
    id: "cs11-ch3-1m-4", chapterNo: 3, chapterName: "Computer Organization", chapterNameTamil: "கணினி அமைப்பு", marks: 1, type: "mcq",
    questionText: "Which device identifies the memory location when an address is specified in Memory Address Register (MAR)?", questionTextTamil: "பின்வரும் எந்த சாதனம், நினைவக முகவரி பதிவேட்டில் முகவரியைக் குறிக்கும் போது அதன் இருப்பிடத்தை அடையாளம் காட்டும்?",
    options: { A: "Locator", B: "Encoder", C: "Decoder", D: "Multiplexer" },
    optionsTamil: { A: "லோகேட்டர் (Locator)", B: "என்கோடர் (Encoder)", C: "டிகோடர் (Decoder)", D: "மல்டி பிளெக்சர் (Multiplexer)" },
    correctOption: "C", answer: "C) Decoder", answerTamil: "C) டிகோடர் (Decoder)", isBookBack: true
  },
  {
    id: "cs11-ch3-1m-5", chapterNo: 3, chapterName: "Computer Organization", chapterNameTamil: "கணினி அமைப்பு", marks: 1, type: "mcq",
    questionText: "Which of the following is a CISC processor?", questionTextTamil: "பின்வருவனற்றுள் எது ஒரு CISC செயலி ஆகும்?",
    options: { A: "Intel P6", B: "AMD K6", C: "Pentium III", D: "Pentium IV" },
    optionsTamil: { A: "Intel P6", B: "AMD K6", C: "Pentium III", D: "Pentium IV" },
    correctOption: "D", answer: "D) Pentium IV", answerTamil: "D) Pentium IV", isBookBack: true
  },
  {
    id: "cs11-ch3-1m-6", chapterNo: 3, chapterName: "Computer Organization", chapterNameTamil: "கணினி அமைப்பு", marks: 1, type: "mcq",
    questionText: "Which memory performs faster?", questionTextTamil: "எது வேகமாக செயல்படும் நினைவகம் ஆகும்?",
    options: { A: "Hard disk", B: "Main memory", C: "Cache memory", D: "Blu-ray Disc" },
    optionsTamil: { A: "வன் வட்டு", B: "முதன்மை நினைவகம்", C: "கேச் நினைவகம்", D: "புளூ-ரே நினைவகம்" },
    correctOption: "C", answer: "C) Cache memory", answerTamil: "C) கேச் நினைவகம்", isBookBack: true
  },
  {
    id: "cs11-ch3-1m-7", chapterNo: 3, chapterName: "Computer Organization", chapterNameTamil: "கணினி அமைப்பு", marks: 1, type: "mcq",
    questionText: "A processor with an 8-bit memory bus can access how many memory locations?", questionTextTamil: "ஒரு 8 – பிட் நினைவக பட்டை உள்ள செயலி எத்தனை நினைவக இடங்களை அடையாளம் காணும்?",
    options: { A: "2^8", B: "1024", C: "256", D: "8000" },
    optionsTamil: { A: "2^8", B: "1024", C: "256", D: "8000" },
    correctOption: "C", answer: "C) 256 (2^8)", answerTamil: "C) 256", isBookBack: true
  },
  {
    id: "cs11-ch3-1m-8", chapterNo: 3, chapterName: "Computer Organization", chapterNameTamil: "கணினி அமைப்பு", marks: 1, type: "mcq",
    questionText: "What is the total capacity of a single layer, single sided 12 cm diameter DVD?", questionTextTamil: "ஒற்றை பக்கம் மற்றும் ஒற்றை அடுக்கு 12 செ.மீ விட்டம் உள்ள DVD-yin மொத்த கொள்ளளவு எவ்வளவு?",
    options: { A: "4.7 GB", B: "5.5 GB", C: "7.8 GB", D: "2.2 GB" },
    optionsTamil: { A: "4.7 GB", B: "5.5 GB", C: "7.8 GB", D: "2.2 GB" },
    correctOption: "A", answer: "A) 4.7 GB", answerTamil: "A) 4.7 GB", isBookBack: true
  },
  {
    id: "cs11-ch3-1m-9", chapterNo: 3, chapterName: "Computer Organization", chapterNameTamil: "கணினி அமைப்பு", marks: 1, type: "mcq",
    questionText: "Smallest unit of data on a CD is:", questionTextTamil: "CD யின் குறைந்த அளவிலான தரவின் அளவு யாது?",
    options: { A: "Block", B: "Sector", C: "Bits", D: "Tracks" },
    optionsTamil: { A: "தொகுதி", B: "பகுதி (Sector)", C: "பிட்ஸ்", D: "தடங்கள்" },
    correctOption: "B", answer: "B) Sector", answerTamil: "B) பகுதி (Sector)", isBookBack: true
  },
  {
    id: "cs11-ch3-1m-10", chapterNo: 3, chapterName: "Computer Organization", chapterNameTamil: "கணினி அமைப்பு", marks: 1, type: "mcq",
    questionText: "Which interface device is used to connect a computer monitor?", questionTextTamil: "கணிப்பொறியின் திரையை இணைக்க உதவும் தொடர்பு சாதனம் எது?",
    options: { A: "USB", B: "Ps/2", C: "SCSI", D: "VGA" },
    optionsTamil: { A: "USB", B: "Ps/2", C: "SCSI", D: "VGA" },
    correctOption: "D", answer: "D) VGA", answerTamil: "D) VGA", isBookBack: true
  },
  // 2 Marks (5)
  {
    id: "cs11-ch3-2m-1", chapterNo: 3, chapterName: "Computer Organization", chapterNameTamil: "கணினி அமைப்பு", marks: 2, type: "short",
    questionText: "What are the parameters that characterize a microprocessor?", questionTextTamil: "ஒரு நுண்செயலியின் பண்புகளைக் குறிக்கும் காரணிகள் யாவை?",
    answer: "1. Clock Speed: Regulates execution speed.\n2. Instruction Set: Set of machine instructions supported.\n3. Word Size: Number of bits processed in a single cycle (e.g. 32-bit, 64-bit).",
    answerTamil: "1. கடிகார வேகம் (Clock Speed)\n2. கட்டளைத் தொகுதி (Instruction Set)\n3. வார்த்தையின் அளவு (Word Size)", isBookBack: true
  },
  {
    id: "cs11-ch3-2m-2", chapterNo: 3, chapterName: "Computer Organization", chapterNameTamil: "கணினி அமைப்பு", marks: 2, type: "short",
    questionText: "What is an instruction?", questionTextTamil: "அறிவுறுத்தல் என்றால் என்ன?",
    answer: "An instruction is a command given to the computer microprocessor to perform a specific operation on given data.",
    answerTamil: "அறிவுறுத்தல் (Instruction) என்பது குறிப்பிட்ட தரவின் மீது குறிப்பிட்ட செயல்பாட்டைச் செய்ய கணிப்பொறிக்கு அல்லது நுண்செயலிக்கு வழங்கப்படும் கட்டளை ஆகும்.", isBookBack: true
  },
  {
    id: "cs11-ch3-2m-3", chapterNo: 3, chapterName: "Computer Organization", chapterNameTamil: "கணினி அமைப்பு", marks: 2, type: "short",
    questionText: "What is a Program Counter?", questionTextTamil: "நிரல் கவுண்டர் என்றால் என்ன?",
    answer: "Program Counter (PC) is a special CPU register that stores the memory address of the next instruction to be fetched and executed.",
    answerTamil: "நிரல் கவுண்டர் (Program Counter) என்பது அடுத்து நிறைவேற்றப்பட வேண்டிய கட்டளையின் நினைவக முகவரியைச் சேமித்து வைக்கும் சிறப்புப் பதிவேடு ஆகும்.", isBookBack: true
  },
  {
    id: "cs11-ch3-2m-4", chapterNo: 3, chapterName: "Computer Organization", chapterNameTamil: "கணினி அமைப்பு", marks: 2, type: "short",
    questionText: "What is HDMI (High-Definition Multimedia Interface)?", questionTextTamil: "உயர் வரையறை பல்லூடக இடைமுகம் (HDMI) என்றால் என்ன?",
    answer: "HDMI is an audio/video interface for transmitting uncompressed digital video and multi-channel audio data to compatible monitors, projectors, and digital TVs.",
    answerTamil: "HDMI என்பது உயர்தர சுருக்கப்படாத எண்முறை வீடியோ மற்றும் ஆடியோ சமிக்ஞைகளை கணினியிலிருந்து திரையகம், TV போன்றவற்றிற்கு அனுப்பும் பல்லூடக இடைமுகம் ஆகும்.", isBookBack: true
  },
  {
    id: "cs11-ch3-2m-5", chapterNo: 3, chapterName: "Computer Organization", chapterNameTamil: "கணினி அமைப்பு", marks: 2, type: "short",
    questionText: "How will you erase data stored in an EPROM?", questionTextTamil: "EPROM- உள்ள தரவை எவ்வாறு அழிப்பாய்?",
    answer: "Data in EPROM (Erasable Programmable Read-Only Memory) is erased by exposing the memory chip to Ultraviolet (UV) light for about 20 to 40 minutes.",
    answerTamil: "EPROM நினைவகத்தில் உள்ள தரவுகளை புற ஊதாக் கதிர்களை (Ultraviolet rays) குறிப்பிட்ட நேரம் செலுத்துவதன் மூலம் அழிக்கலாம்.", isBookBack: true
  },
  // 3 Marks (7)
  {
    id: "cs11-ch3-3m-1", chapterNo: 3, chapterName: "Computer Organization", chapterNameTamil: "கணினி அமைப்பு", marks: 3, type: "brief",
    questionText: "Differentiate between Computer Organization and Computer Architecture.", questionTextTamil: "கணிப்பொறி அமைப்பு, கணிப்பொறி கட்டமைப்பு வேறுபடுத்துக.",
    answer: "Computer Organization: Deals with hardware operational units and their interconnections (signals, memory technology).\nComputer Architecture: Deals with the logical design, instruction sets, addressing modes, and programmer's view.",
    answerTamil: "கணிப்பொறி அமைப்பு (Organization): வன்பொருள் கூறுகளின் இணைப்பு மற்றும் செயல்பாட்டு அலகுகளைக் குறிக்கும்.\nகணிப்பொறி கட்டமைப்பு (Architecture): கட்டளைத் தொகுதி, பதிவேடுகள் போன்ற நிரலரின் பார்வையில் உள்ள தர்க்கரீதியான வடிவமைப்பைக் குறிக்கும்.", isBookBack: true
  },
  {
    id: "cs11-ch3-3m-2", chapterNo: 3, chapterName: "Computer Organization", chapterNameTamil: "கணினி அமைப்பு", marks: 3, type: "brief",
    questionText: "Classify microprocessors based on data width.", questionTextTamil: "தரவின் அளவைப் பொறுத்து நுண்செயலியை வகைப்படுத்துக.",
    answer: "1. 8-bit Microprocessor (e.g. Intel 8085)\n2. 16-bit Microprocessor (e.g. Intel 8086)\n3. 32-bit Microprocessor (e.g. Intel Pentium)\n4. 64-bit Microprocessor (e.g. Intel Core i3/i5/i7, AMD Ryzen)",
    answerTamil: "1. 8-பிட் நுண்செயலி (Intel 8085)\n2. 16-பிட் நுண்செயலி (Intel 8086)\n3. 32-பிட் நுண்செயலி (Intel Pentium)\n4. 64-பிட் நுண்செயலி (Intel Core i3/i5/i7)", isBookBack: true
  },
  {
    id: "cs11-ch3-3m-3", chapterNo: 3, chapterName: "Computer Organization", chapterNameTamil: "கணினி அமைப்பு", marks: 3, type: "brief",
    questionText: "Classify microprocessors based on Instruction Set Architecture.", questionTextTamil: "கட்டளையின் தொகுதியின் அடிப்படையில் நுண்செயலியின் வகைகளை எழுதுக.",
    answer: "1. RISC (Reduced Instruction Set Computer): Small set of simple instructions, single-cycle execution (e.g., ARM, MIPS).\n2. CISC (Complex Instruction Set Computer): Large set of complex multi-cycle instructions (e.g., Intel x86, Pentium).",
    answerTamil: "1. RISC (குறைக்கப்பட்ட கட்டளைத் தொகுதி கணினி): எளிய கட்டளைகள், அதிவேக செயலாக்கம் (எ.கா: ARM).\n2. CISC (சிக்கலான கட்டளைத் தொகுதி கணினி): பல்துறை சிக்கலான கட்டளைகள் (எ.கா: Intel x86, Pentium).", isBookBack: true
  },
  {
    id: "cs11-ch3-3m-4", chapterNo: 3, chapterName: "Computer Organization", chapterNameTamil: "கணினி அமைப்பு", marks: 3, type: "brief",
    questionText: "Differentiate between PROM and EPROM.", questionTextTamil: "PROM மற்றும் EPROM வேறுபடுத்துக.",
    answer: "PROM: Programmable once using PROM burner; contents cannot be erased.\nEPROM: Contents can be erased using UV light and rewritten multiple times.",
    answerTamil: "PROM: ஒருமுறை மட்டுமே எழுத முடியும், இதில் உள்ள தரவுகளை அழிக்க முடியாது.\nEPROM: புற ஊதாக் கதிர்களைப் பயன்படுத்தி இதில் உள்ள தரவுகளை அழித்து பலமுறை மீண்டும் எழுத முடியும்.", isBookBack: true
  },
  {
    id: "cs11-ch3-3m-5", chapterNo: 3, chapterName: "Computer Organization", chapterNameTamil: "கணினி அமைப்பு", marks: 3, type: "brief",
    questionText: "List various ports and interfaces used in computers.", questionTextTamil: "கணிப்பொறியில் பயன்படுத்தப்படும் இடைமுகம் மற்றும் தொடர்புமுகங்களை எழுதுக.",
    answer: "1. Serial Port and Parallel Port\n2. USB (Universal Serial Bus) Ports\n3. VGA (Video Graphics Array) and HDMI\n4. Audio Jacks and Ethernet / LAN (RJ45) Port",
    answerTamil: "1. தொடர் மற்றும் இணைத் தொடர்புமுகங்கள் (Serial & Parallel ports)\n2. USB (Universal Serial Bus) தொடர்புமுகங்கள்\n3. VGA மற்றும் HDMI இடைமுகங்கள்\n4. ஒலி இணைப்பான் மற்றும் ஈதர்நெட் (RJ45) தொடர்புமுகம்", isBookBack: true
  },
  {
    id: "cs11-ch3-3m-6", chapterNo: 3, chapterName: "Computer Organization", chapterNameTamil: "கணினி அமைப்பு", marks: 3, type: "brief",
    questionText: "Differentiate between CD and DVD.", questionTextTamil: "CD மற்றும் DVD வேறுபடுத்துக.",
    answer: "CD: Compact Disc, stores around 700 MB of data, uses 780 nm infrared laser.\nDVD: Digital Versatile Disc, stores 4.7 GB (single layer) to 17 GB (double sided), uses 650 nm red laser with closer tracks.",
    answerTamil: "CD: கொள்ளளவு சுமார் 700 MB; அகச்சிவப்பு லேசரைப் பயன்படுத்துகிறது.\nDVD: கொள்ளளவு 4.7 GB முதல் 17 GB வரை; குறுகிய சிவப்பு லேசரைப் பயன்படுத்துகிறது.", isBookBack: true
  },
  {
    id: "cs11-ch3-3m-7", chapterNo: 3, chapterName: "Computer Organization", chapterNameTamil: "கணினி அமைப்பு", marks: 3, type: "brief",
    questionText: "How will you differentiate Flash memory and EEPROM?", questionTextTamil: "பிளாஷ் நினைவகம் மற்றும் EEPROM எவ்வாறு வேறுபடுத்துவாய்?",
    answer: "EEPROM: Erases and rewrites data byte-by-byte electrically; slower for bulk data.\nFlash Memory: A high-performance form of EEPROM that erases data in large blocks (sectors), offering much faster read/write speeds.",
    answerTamil: "EEPROM: மின்சார சமிக்ஞை மூலம் பைட் வாரியாகத் தரவை அழித்து எழுதும், வேகம் குறைவு.\nபிளாஷ் நினைவகம்: தரவுகளை பெரிய தொகுதி வாரியாக (Block) விரைவாக அழித்து எழுதும் திறன் கொண்ட மேம்பட்ட EEPROM ஆகும்.", isBookBack: true
  },
  // 5 Marks (4)
  {
    id: "cs11-ch3-5m-1", chapterNo: 3, chapterName: "Computer Organization", chapterNameTamil: "கணினி அமைப்பு", marks: 5, type: "essay",
    questionText: "Explain the characteristics and components of a microprocessor.", questionTextTamil: "நுண்செயலியின் பண்பு கூறுகளை விளக்குக.",
    answer: "1. Clock Speed: Frequency at which processor executes instructions (measured in GHz).\n2. Instruction Set: Commands processor understands (Data transfer, Arithmetic, Logical, Control transfer).\n3. Word Size: Bits processed in parallel (32-bit, 64-bit).\nComponents:\n- ALU (Arithmetic and Logic Unit)\n- Control Unit\n- Registers (MDR, MAR, PC, Accumulator)\n- System Bus (Data bus, Address bus, Control bus).",
    answerTamil: "நுண்செயலியின் முக்கிய பண்புகள்:\n1. கடிகார வேகம் (Clock Speed): செயலியின் செயல்பாட்டு வேகம் (GHz).\n2. கட்டளைத் தொகுதி (Instruction Set): செயலி இயக்கும் கட்டளைகளின் தொகுப்பு.\n3. வார்த்தையின் அளவு (Word Size): ஒரே நேரத்தில் செயலாக்கும் பிட்டுகளின் அளவு.\nபாகங்கள்: கணித ஏரணச் செயலகம் (ALU), கட்டுப்பாட்டகம் (CU), பதிவேடுகள் (MDR, MAR, PC) மற்றும் பட்டை (Bus).", isBookBack: true
  },
  {
    id: "cs11-ch3-5m-2", chapterNo: 3, chapterName: "Computer Organization", chapterNameTamil: "கணினி அமைப்பு", marks: 5, type: "essay",
    questionText: "Explain how READ and WRITE operations are performed by a processor.", questionTextTamil: "படித்தல் / எழுதுதல் (READ / WRITE) செயல்களை செயலி எவ்வாறு செய்கிறது? விளக்குக.",
    answer: "READ Operation:\n1. CPU places the target memory address on the Address Bus into MAR.\n2. CPU sends a Read control signal on the Control Bus.\n3. Memory reads data from that address and places it on Data Bus into MDR.\n\nWRITE Operation:\n1. CPU places target address in MAR via Address Bus.\n2. CPU places data to be written into MDR via Data Bus.\n3. CPU asserts Write control signal to store data into the specified memory address.",
    answerTamil: "படித்தல் (READ) செயல்முறை:\n1. நினைவக முகவரியை MAR பதிவேடு முகவரி பட்டையில் செலுத்தும்.\n2. கட்டுப்பாட்டகம் READ சமிக்ஞையை அனுப்பும்.\n3. நினைவகத்திலிருந்து பெறப்பட்ட தரவு MDR பதிவேட்டில் தரவுப் பட்டை வழியாகச் சேரும்.\n\nஎழுதுதல் (WRITE) செயல்முறை:\n1. சேமிக்க வேண்டிய நினைவக முகவரி MAR-லும், தரவு MDR-லும் வைக்கப்படும்.\n2. கட்டுப்பாட்டகம் WRITE சமிக்ஞையை அனுப்பி தரவை நினைவகத்தில் பதியும்.", isBookBack: true
  },
  {
    id: "cs11-ch3-5m-3", chapterNo: 3, chapterName: "Computer Organization", chapterNameTamil: "கணினி அமைப்பு", marks: 5, type: "essay",
    questionText: "Arrange the memory devices in ascending order based on their access time / Explain the Memory Hierarchy.", questionTextTamil: "அணுகல் நேரத்தின் அடிப்படையில் நினைவக சாதனங்களை ஏறுவரிசையில் அமைக்கவும்.",
    answer: "Ascending order of Access Time (Fastest to Slowest):\n1. CPU Registers (Fastest access time ~ 1 ns)\n2. Cache Memory (L1, L2, L3 cache ~ 2-10 ns)\n3. Main Memory (RAM ~ 50-100 ns)\n4. Flash Memory / Solid State Drive (SSD)\n5. Magnetic Hard Disk Drive (HDD ~ 5-10 ms)\n6. Optical Discs (CD/DVD) and Magnetic Tape (Slowest).",
    answerTamil: "அணுகல் நேரத்தின் ஏறுவரிசை (மிக வேகமானது முதல் குறைவானது வரை):\n1. CPU பதிவேடுகள் (Registers - அதிவேகம்)\n2. கேச் நினைவகம் (Cache memory)\n3. முதன்மை நினைவகம் (RAM)\n4. பிளாஷ் நினைவகம் / SSD\n5. வன்வட்டு (Hard Disk Drive)\n6. ஒளி வட்டுக்கள் (CD/DVD) மற்றும் காந்த நாடா (மிகக் குறைந்த வேகம்).", isBookBack: true
  },
  {
    id: "cs11-ch3-5m-4", chapterNo: 3, chapterName: "Computer Organization", chapterNameTamil: "கணினி அமைப்பு", marks: 5, type: "essay",
    questionText: "Explain the types of ROM in detail.", questionTextTamil: "ROM ன் வகைகளைப் பற்றி விளக்கமாக எழுதுக.",
    answer: "1. ROM (Read Only Memory): Non-volatile, programmed during manufacturing, cannot be altered.\n2. PROM (Programmable ROM): Purchased blank and written once by user using a PROM programmer.\n3. EPROM (Erasable Programmable ROM): Can be erased by exposing to UV light and rewritten.\n4. EEPROM (Electrically Erasable Programmable ROM): Can be erased and rewritten electrically byte by byte.",
    answerTamil: "1. ROM (படிக்க மட்டும் நினைவகம்): உற்பத்தி செய்யும் போதே நிரல்கள் எழுதப்படும், மாற்ற முடியாது.\n2. PROM (நிரலாக்க படிக்க மட்டும் நினைவகம்): ஒருமுறை மட்டுமே பயனரால் எழுத முடியும்.\n3. EPROM (அழிக்கக்கூடிய நிரலாக்க படிக்க மட்டும் நினைவகம்): புற ஊதாக் கதிர்களைப் பயன்படுத்தி தரவுகளை அழித்து மீண்டும் எழுதலாம்.\n4. EEPROM (மின்சாரத்தால் அழிக்கக்கூடிய படிக்க மட்டும் நினைவகம்): மின் சமிக்ஞை மூலம் எளிதாகத் தரவை அழித்து மீண்டும் எழுதலாம்.", isBookBack: true
  }
];

// ==========================================
// CHAPTER 4: Theoretical Concepts of Operating System (இயக்க அமைப்பின் கொள்கைக் கருத்துக்கள்)
// 1M: 9, 2M: 6, 3M: 3, 5M: 3 (Total: 21)
// ==========================================
const ch4 = [
  // 1 Marks (9)
  {
    id: "cs11-ch4-1m-1", chapterNo: 4, chapterName: "Theoretical Concepts of Operating System", chapterNameTamil: "இயக்க அமைப்பின் கொள்கைக் கருத்துக்கள்", marks: 1, type: "mcq",
    questionText: "Operating system is a:", questionTextTamil: "இயக்க அமைப்பானது ------------------",
    options: { A: "Application software", B: "Hardware", C: "System software", D: "Component" },
    optionsTamil: { A: "பயன்பாட்டு மென்பொருள்", B: "வன்பொருள்", C: "அமைப்பு மென்பொருள்", D: "உபகரணம்" },
    correctOption: "C", answer: "C) System software", answerTamil: "C) அமைப்பு மென்பொருள்", isBookBack: true
  },
  {
    id: "cs11-ch4-1m-2", chapterNo: 4, chapterName: "Theoretical Concepts of Operating System", chapterNameTamil: "இயக்க அமைப்பின் கொள்கைக் கருத்துக்கள்", marks: 1, type: "mcq",
    questionText: "Identify the main use of Operating System:", questionTextTamil: "இயக்க அமைப்புகளின் பயன்பாட்டைக் கண்டறியவும்:",
    options: { A: "Easy interaction between human and computer", B: "Writing documents", C: "Playing games", D: "Browsing internet" },
    optionsTamil: { A: "மனித மற்றும் கணினி இடையே எளிதாக தொடர்பு", B: "ஆவணம் எழுதுதல்", C: "விளையாடுதல்", D: "வலை உலாவுதல்" },
    correctOption: "A", answer: "A) Easy interaction between human and computer", answerTamil: "A) மனித மற்றும் கணினி இடையே எளிதாக தொடர்பு", isBookBack: true
  },
  {
    id: "cs11-ch4-1m-3", chapterNo: 4, chapterName: "Theoretical Concepts of Operating System", chapterNameTamil: "இயக்க அமைப்பின் கொள்கைக் கருத்துக்கள்", marks: 1, type: "mcq",
    questionText: "Which of the following is NOT an operating system function?", questionTextTamil: "பின்வரும் எது, இயக்க அமைப்பு செயல்பாடு அல்ல?",
    options: { A: "Process Management", B: "Memory Management", C: "Security Management", D: "Compiler Environment" },
    optionsTamil: { A: "செயல்முறை மேலாண்மை", B: "நினைவக மேலாண்மை", C: "பாதுகாப்பு மேலாண்மை", D: "நிரல் மொழிபெயர்ப்பி சூழல்" },
    correctOption: "D", answer: "D) Compiler Environment", answerTamil: "D) நிரல் மொழிபெயர்ப்பி சூழல்", isBookBack: true
  },
  {
    id: "cs11-ch4-1m-4", chapterNo: 4, chapterName: "Theoretical Concepts of Operating System", chapterNameTamil: "இயக்க அமைப்பின் கொள்கைக் கருத்துக்கள்", marks: 1, type: "mcq",
    questionText: "Which of the following is a commercially licensed operating system?", questionTextTamil: "பின்வரும் எந்த இயக்க அமைப்பில் வணிக ரீதியாக உரிமம் பெற்ற இயக்க அமைப்பு ஆகும்?",
    options: { A: "Windows", B: "Ubuntu", C: "Fedora", D: "Redhat" },
    optionsTamil: { A: "விண்டோஸ்", B: "உபுண்டு", C: "ஃபெடோரா", D: "ரெட்ஹெட்" },
    correctOption: "A", answer: "A) Windows", answerTamil: "A) விண்டோஸ்", isBookBack: true
  },
  {
    id: "cs11-ch4-1m-5", chapterNo: 4, chapterName: "Theoretical Concepts of Operating System", chapterNameTamil: "இயக்க அமைப்பின் கொள்கைக் கருத்துக்கள்", marks: 1, type: "mcq",
    questionText: "Which of the following operating systems supports mobile devices?", questionTextTamil: "பின்வரும் இயக்க அமைப்புகளில் கைபேசி சாதனங்களை ஆதரிப்பது எது?",
    options: { A: "Windows 7", B: "Linux", C: "BOSS", D: "iOS" },
    optionsTamil: { A: "விண்டோஸ் 7", B: "லினக்ஸ்", C: "பாஸ்", D: "iOS" },
    correctOption: "D", answer: "D) iOS", answerTamil: "D) iOS", isBookBack: true
  },
  {
    id: "cs11-ch4-1m-6", chapterNo: 4, chapterName: "Theoretical Concepts of Operating System", chapterNameTamil: "இயக்க அமைப்பின் கொள்கைக் கருத்துக்கள்", marks: 1, type: "mcq",
    questionText: "File management manages which of the following?", questionTextTamil: "கோப்பு மேலாண்மை எவற்றை நிர்வகிக்கிறது?",
    options: { A: "Files", B: "Directories", C: "File systems", D: "All of these" },
    optionsTamil: { A: "கோப்புகள்", B: "கோப்புறைகள்", C: "அமைவு அமைப்புகள்", D: "இவை அனைத்தும்" },
    correctOption: "D", answer: "D) All of these", answerTamil: "D) இவை அனைத்தும்", isBookBack: true
  },
  {
    id: "cs11-ch4-1m-7", chapterNo: 4, chapterName: "Theoretical Concepts of Operating System", chapterNameTamil: "இயக்க அமைப்பின் கொள்கைக் கருத்துக்கள்", marks: 1, type: "mcq",
    questionText: "Interactive Operating System provides:", questionTextTamil: "ஊடாடு இயக்க அமைப்பு வழங்கும் வசதி:",
    options: { A: "Graphical User Interface (GUI)", B: "Data Distribution", C: "Security Management", D: "Real Time Processing" },
    optionsTamil: { A: "வரைகலை பயனர் இடைமுகம் (GUI)", B: "தரவு விநியோகம்", C: "பாதுகாப்பு மேலாண்மை", D: "உண்மையான நேரம் செயலாக்கம்" },
    correctOption: "A", answer: "A) Graphical User Interface (GUI)", answerTamil: "A) வரைகலை பயனர் இடைமுகம் (GUI)", isBookBack: true
  },
  {
    id: "cs11-ch4-1m-8", chapterNo: 4, chapterName: "Theoretical Concepts of Operating System", chapterNameTamil: "இயக்க அமைப்பின் கொள்கைக் கருத்துக்கள்", marks: 1, type: "mcq",
    questionText: "Example for single-user operating system:", questionTextTamil: "ஒற்றை பயனர் இயக்க அமைப்பிற்கு எடுத்துக்காட்டு:",
    options: { A: "Linux", B: "Windows", C: "MS DOS", D: "Unix" },
    optionsTamil: { A: "லினக்ஸ்", B: "விண்டோஸ்", C: "MS DOS", D: "யுனிக்ஸ்" },
    correctOption: "C", answer: "C) MS DOS", answerTamil: "C) MS DOS", isBookBack: true
  },
  {
    id: "cs11-ch4-1m-9", chapterNo: 4, chapterName: "Theoretical Concepts of Operating System", chapterNameTamil: "இயக்க அமைப்பின் கொள்கைக் கருத்துக்கள்", marks: 1, type: "mcq",
    questionText: "Which file system is used by Linux?", questionTextTamil: "லினக்ஸ் எந்த வகை கோப்பு மேலாண்மையை பயன்படுத்துகிறது?",
    options: { A: "ext2", B: "NTFS", C: "FAT", D: "NFTS" },
    optionsTamil: { A: "ext2", B: "NTFS", C: "FAT", D: "NFTS" },
    correctOption: "A", answer: "A) ext2", answerTamil: "A) ext2", isBookBack: true
  },
  // 2 Marks (6)
  {
    id: "cs11-ch4-2m-1", chapterNo: 4, chapterName: "Theoretical Concepts of Operating System", chapterNameTamil: "இயக்க அமைப்பின் கொள்கைக் கருத்துக்கள்", marks: 2, type: "short",
    questionText: "What are any two advantages of memory management in OS?", questionTextTamil: "நினைவக மேலாண்மையின் நன்மைகள் ஏதேனும் இரண்டை கூறு?",
    answer: "1. Keeps track of which parts of memory are currently being used and by whom.\n2. Allocates and deallocates memory dynamically to programs as needed.",
    answerTamil: "1. நினைவகத்தின் எந்த பகுதி பயன்பாட்டில் உள்ளது என்பதைத் தொடர்ந்து கண்காணிக்கிறது.\n2. நிரல்களுக்குத் தேவையான நினைவகத்தை மாறும் வகையில் ஒதுக்கவும் விடுவிக்கவும் செய்கிறது.", isBookBack: true
  },
  {
    id: "cs11-ch4-2m-2", chapterNo: 4, chapterName: "Theoretical Concepts of Operating System", chapterNameTamil: "இயக்க அமைப்பின் கொள்கைக் கருத்துக்கள்", marks: 2, type: "short",
    questionText: "What is a multi-user operating system?", questionTextTamil: "பல பயனர் இயக்க அமைப்பு என்றால் என்ன?",
    answer: "A multi-user OS allows multiple users on different terminals or network nodes to access the same computer system and share its resources concurrently (e.g. Unix, Linux).",
    answerTamil: "பல பயனர்கள் ஒரே நேரத்தில் ஒரே கணினியின் வளங்களைப் பகிர்ந்து கொள்ள அனுமதிக்கும் இயக்க அமைப்பு பல பயனர் இயக்க அமைப்பு எனப்படும் (எ.கா: Unix, Linux).", isBookBack: true
  },
  {
    id: "cs11-ch4-2m-3", chapterNo: 4, chapterName: "Theoretical Concepts of Operating System", chapterNameTamil: "இயக்க அமைப்பின் கொள்கைக் கருத்துக்கள்", marks: 2, type: "short",
    questionText: "What is GUI (Graphical User Interface)?", questionTextTamil: "GUI என்றால் என்ன?",
    answer: "GUI is a visual interface that allows users to interact with electronic devices through graphical icons, visual indicators, windows, menus, and pointers.",
    answerTamil: "GUI (வரைகலை பயனர் இடைமுகம்) என்பது பயனர்கள் சுட்டி, பணிக்குறிகள், சாளரங்கள் மற்றும் மெனுக்கள் மூலம் கணினியுடன் எளிதாக உரையாட உதவும் வரைகலை திரையமைப்பாகும்.", isBookBack: true
  },
  {
    id: "cs11-ch4-2m-4", chapterNo: 4, chapterName: "Theoretical Concepts of Operating System", chapterNameTamil: "இயக்க அமைப்பின் கொள்கைக் கருத்துக்கள்", marks: 2, type: "short",
    questionText: "What are the advantages of File Management in OS?", questionTextTamil: "கோப்பு மேலாண்மையின் நன்மைகள் யாவை?",
    answer: "1. Provides structured hierarchical organization of files and folders.\n2. Secures files with access permissions, passwords, and data integrity checks.",
    answerTamil: "1. கோப்புகள் மற்றும் கோப்புறைகளை படிநிலை முறையில் நேர்த்தியாக நிர்வகிக்கிறது.\n2. அனுமதிகள் மற்றும் கடவுச்சொற்கள் மூலம் கோப்புகளுக்குப் பாதுகாப்பு வழங்குகிறது.", isBookBack: true
  },
  {
    id: "cs11-ch4-2m-5", chapterNo: 4, chapterName: "Theoretical Concepts of Operating System", chapterNameTamil: "இயக்க அமைப்பின் கொள்கைக் கருத்துக்கள்", marks: 2, type: "short",
    questionText: "What is Multitasking?", questionTextTamil: "பல பணியாக்கம் என்றால் என்ன?",
    answer: "Multitasking is the ability of an operating system to execute more than one task or program concurrently by rapidly switching the CPU between them.",
    answerTamil: "ஒரே நேரத்தில் ஒன்றுக்கும் மேற்பட்ட பணிகளை அல்லது நிரல்களை செயலி மூலம் விரைவாக மாற்றி மாற்றி இயக்கும் திறன் பல பணியாக்கம் (Multitasking) எனப்படும்.", isBookBack: true
  },
  {
    id: "cs11-ch4-2m-6", chapterNo: 4, chapterName: "Theoretical Concepts of Operating System", chapterNameTamil: "இயக்க அமைப்பின் கொள்கைக் கருத்துக்கள்", marks: 2, type: "short",
    questionText: "List various operating systems used in computers.", questionTextTamil: "கணிப்பொறியில் பயன்படுத்தப்படும் வெவ்வேறு இயக்க அமைப்புகள் யாவை?",
    answer: "1. Windows (Windows 10, 11)\n2. Linux (Ubuntu, Fedora, RedHat)\n3. macOS and UNIX\n4. Mobile OS: Android, iOS.",
    answerTamil: "1. விண்டோஸ் (Windows 10, 11)\n2. லினக்ஸ் (Ubuntu, BOSS, RedHat)\n3. macOS மற்றும் UNIX\n4. மொபைல் OS: Android, iOS.", isBookBack: true
  },
  // 3 Marks (3)
  {
    id: "cs11-ch4-3m-1", chapterNo: 4, chapterName: "Theoretical Concepts of Operating System", chapterNameTamil: "இயக்க அமைப்பின் கொள்கைக் கருத்துக்கள்", marks: 3, type: "brief",
    questionText: "What are the advantages and disadvantages of Time Sharing Operating System?", questionTextTamil: "நேரம் பகிர்தல் இயக்க அமைப்பின் நன்மைகள் மற்றும் தீமைகள் என்ன?",
    answer: "Advantages:\n1. Reduces CPU idle time; fair allocation of processing power.\n2. Quick response time for interactive users.\nDisadvantages:\n1. Higher overhead in process context switching.\n2. Reliability and security issues when handling concurrent user processes.",
    answerTamil: "நன்மைகள்:\n1. CPU வீணாக இருக்கும் நேரம் குறைகிறது; சமமான வள ஒதுக்கீடு.\n2. விரைவான மறுமொழி நேரம்.\nதீமைகள்:\n1. செயல்முறை மாற்றத்திற்கான மேல்நிலைச் செலவு அதிகம்.\n2. தரவுப் பாதுகாப்பு மற்றும் நம்பகத்தன்மை சவால்கள்.", isBookBack: true
  },
  {
    id: "cs11-ch4-3m-2", chapterNo: 4, chapterName: "Theoretical Concepts of Operating System", chapterNameTamil: "இயக்க அமைப்பின் கொள்கைக் கருத்துக்கள்", marks: 3, type: "brief",
    questionText: "List the key features of an Operating System.", questionTextTamil: "இயக்க அமைப்பின் முக்கிய சிறப்பியல்புகளை பட்டியலிடுக.",
    answer: "1. User Interface (GUI/CLI)\n2. Memory Management\n3. Process and Processor Management\n4. File and Device (I/O) Management\n5. Security and Fault Tolerance.",
    answerTamil: "1. பயனர் இடைமுகம் (GUI / CLI)\n2. நினைவக மேலாண்மை (Memory Management)\n3. செயல்முறை மேலாண்மை (Process Management)\n4. கோப்பு மற்றும் சாதன மேலாண்மை\n5. பாதுகாப்பு மேலாண்மை மற்றும் பிழை பொறுத்துக்கொள்ளும் திறன்.", isBookBack: true
  },
  {
    id: "cs11-ch4-3m-3", chapterNo: 4, chapterName: "Theoretical Concepts of Operating System", chapterNameTamil: "இயக்க அமைப்பின் கொள்கைக் கருத்துக்கள்", marks: 3, type: "brief",
    questionText: "Write a short note on Multiprocessing Operating System.", questionTextTamil: "பல செயலாக்க இயக்க அமைப்பு சிறு குறிப்பு வரைக.",
    answer: "A multiprocessing OS supports two or more CPUs (cores) within a single computer system. Tasks are divided among processors to run in parallel, dramatically increasing computing speed and throughput.",
    answerTamil: "பல செயலாக்க இயக்க அமைப்பு (Multiprocessing OS) என்பது ஒரே அமைப்பில் இரண்டு அல்லது அதற்கு மேற்பட்ட CPU-க்களைப் பயன்படுத்தி, பணிகளைப் பிரித்து இணையாக இயக்கி செயலாக்க வேகத்தை அதிகரிக்கும் அமைப்பாகும்.", isBookBack: true
  },
  // 5 Marks (3)
  {
    id: "cs11-ch4-5m-1", chapterNo: 4, chapterName: "Theoretical Concepts of Operating System", chapterNameTamil: "இயக்க அமைப்பின் கொள்கைக் கருத்துக்கள்", marks: 5, type: "essay",
    questionText: "Explain the concepts and advantages of Distributed Operating System.", questionTextTamil: "பரவல் இயக்க அமைப்பின் கருத்துரு பற்றி விளக்குக மேலும் அதன் பயன்பாடுகள் யாவை?",
    answer: "Concept: A Distributed OS manages a collection of independent computers connected by a network and makes them appear to users as a single unified computer system.\nAdvantages:\n1. Resource Sharing: Users at one site can utilize hardware/software resources at another site.\n2. High Computation Speed: Complex jobs are partitioned across multiple machines.\n3. Reliability: If one node crashes, other nodes continue functioning.\n4. Scalability: Easy to add new computing nodes to the network.",
    answerTamil: "கருத்துரு: பரவல் இயக்க அமைப்பு என்பது வலையமைப்பில் இணைக்கப்பட்ட பல தனித்தனி கணினிகளை ஒருங்கிணைத்து, ஒரே கணினியைப் போல பயனருக்கு வழங்கும் அமைப்பாகும்.\nபயன்பாடுகள் / நன்மைகள்:\n1. வளப் பகிர்வு: ஒரு இடத்தில் உள்ள கணினி மற்ற இடங்களில் உள்ள வன்பொருள், மென்பொருளைப் பயன்படுத்தலாம்.\n2. அதிவேக கணக்கீடு: பெரிய பணிகள் பல கணினிகளுக்குப் பகிர்ந்தளிக்கப்படுகின்றன.\n3. நம்பகத்தன்மை: ஒரு கணினி பழுதடைந்தாலும் மற்றவை தொடர்ந்து இயங்கும்.\n4. அளவிடத்தக்க தன்மை (Scalability): புதிய கணினிகளை எளிதில் சேர்க்கலாம்.", isBookBack: true
  },
  {
    id: "cs11-ch4-5m-2", chapterNo: 4, chapterName: "Theoretical Concepts of Operating System", chapterNameTamil: "இயக்க அமைப்பின் கொள்கைக் கருத்துக்கள்", marks: 5, type: "essay",
    questionText: "List the essential points to be considered while designing a User Interface for an operating system.", questionTextTamil: "ஒரு இயக்க முறைமைக்கான பயனர் இடைமுகத்தை உருவாக்கும் போது கவனத்தில் கொள்ள வேண்டிய முக்கிய கருத்துக்களை பட்டியலிடுக.",
    answer: "1. Simplicity and Clarity: Interface should be intuitive and straightforward to navigate.\n2. Consistency: Icons, buttons, and menus should follow standardized behavior across windows.\n3. Feedback and Responsiveness: Provide visual/auditory confirmation for user actions.\n4. Forgiving of Mistakes: Support Undo, Redo, and confirmation dialogs for critical actions.\n5. Accessibility and Customization: Offer shortcuts, themes, high-contrast modes, and localization.",
    answerTamil: "1. எளிமை மற்றும் தெளிவு: பயனர் எளிதில் புரிந்துகொண்டு வழிசெலுத்தும் வகையில் இருக்க வேண்டும்.\n2. சீரான தன்மை (Consistency): பொத்தான்கள், வண்ணங்கள், சின்னங்கள் ஒரே மாதிரியான தரமுறையைக் கொண்டிருக்க வேண்டும்.\n3. துலங்கல் மற்றும் பின்னூட்டம்: பயனர் செயல்களுக்கு உடனடியாக காட்சி/ஒலி பதில் தர வேண்டும்.\n4. பிழை திருத்தும் வாய்ப்பு: Undo, Redo வசதிகள் மற்றும் உறுதிப்படுத்தல் உரையாடல் பெட்டிகள் இருக்க வேண்டும்.\n5. அணுகல்தன்மை: குறுக்குவழிகள், தனிப்பயனாக்குதல் வசதிகள் அமைய வேண்டும்.", isBookBack: true
  },
  {
    id: "cs11-ch4-5m-3", chapterNo: 4, chapterName: "Theoretical Concepts of Operating System", chapterNameTamil: "இயக்க அமைப்பின் கொள்கைக் கருத்துக்கள்", marks: 5, type: "essay",
    questionText: "Explain the process management algorithms used in Operating Systems.", questionTextTamil: "இயக்க அமைப்பின் செயல் மேலாண்மை நெறிமுறைகளை விளக்குக.",
    answer: "1. FIFO (First In First Out): The process that requests the CPU first gets allocated first (queue basis).\n2. SJF (Shortest Job First): The process with the smallest execution burst time is scheduled next.\n3. Round Robin (RR): Each process is allocated a fixed time slice (quantum) in circular order.\n4. Priority Scheduling: Each process has a priority; CPU is assigned to the process with highest priority.",
    answerTamil: "1. FIFO (முதலில் வந்தது முதலில் வெளியேறும்): வரிசையில் முதலில் வரும் பணிக்கு முதலில் CPU ஒதுக்கப்படும்.\n2. SJF (மிகச்சிறிய பணி முதலில்): குறைந்த செயலாக்க நேரம் கொண்ட பணிக்கு முன்னுரிமை அளிக்கப்படும்.\n3. Round Robin (சுழற்சி ஒதுக்கீடு): ஒவ்வொரு பணிக்கும் சமமான குறிப்பிட்ட கால அளவு (Time Slice) சுழற்சி முறையில் வழங்கப்படும்.\n4. முன்னுரிமை திட்டமிடல் (Priority Scheduling): அதிக முன்னுரிமை கொண்ட பணி முதலில் நிறைவேற்றப்படும்.", isBookBack: true
  }
];

// ==========================================
// CHAPTER 5: Working with Windows (விண்டோஸ் - ல் வேலை செய்தல்)
// 1M: 5, 2M: 5, 3M: 5, 5M: 3 (Total: 18)
// ==========================================
const ch5 = [
  // 1 Marks (5)
  {
    id: "cs11-ch5-1m-1", chapterNo: 5, chapterName: "Working with Windows Operating System", chapterNameTamil: "விண்டோஸ் - ல் வேலை செய்தல்", marks: 1, type: "mcq",
    questionText: "From the options below, choose the functions managed by an operating system:", questionTextTamil: "கீழே கொடுக்கப் பட்டுள்ளவற்றுள் இயக்க அமைப்பு நிர்வகிக்கும் செயல்களைத் தேர்வு செய்யவும்:",
    options: { A: "Memory", B: "Processor", C: "I/O devices", D: "All of these" },
    optionsTamil: { A: "நினைவகம்", B: "செயலி", C: "I/O சாதனங்கள்", D: "இவை அனைத்தும்" },
    correctOption: "D", answer: "D) All of these", answerTamil: "D) இவை அனைத்தும்", isBookBack: true
  },
  {
    id: "cs11-ch5-1m-2", chapterNo: 5, chapterName: "Working with Windows Operating System", chapterNameTamil: "விண்டோஸ் - ல் வேலை செய்தல்", marks: 1, type: "mcq",
    questionText: "In Windows applications, where are files saved by default?", questionTextTamil: "விண்டோஸ் பயன்பாட்டில் கோப்புகள் கொடாநிலையாக எந்த கோப்புறையில் சேமிக்கப்படும்?",
    options: { A: "My Documents", B: "My Pictures", C: "Documents and settings", D: "My Computer" },
    optionsTamil: { A: "My Documents", B: "My Picture", C: "Document and settings", D: "My Computer" },
    correctOption: "A", answer: "A) My Documents", answerTamil: "A) My Documents", isBookBack: true
  },
  {
    id: "cs11-ch5-1m-3", chapterNo: 5, chapterName: "Working with Windows Operating System", chapterNameTamil: "விண்டோஸ் - ல் வேலை செய்தல்", marks: 1, type: "mcq",
    questionText: "In which OS does Shift + Delete permanently delete files and folders?", questionTextTamil: "எந்த இயக்கமைப்பில் shift + delete என்ற தேர்வு கோப்பு மற்றும் கோப்புறையை நிரந்தரமாக நீக்கும்?",
    options: { A: "Windows 7", B: "Windows 8", C: "Windows 10", D: "All of these" },
    optionsTamil: { A: "windows 7", B: "windows 8", C: "windows 10", D: "இவை அனைத்தும்" },
    correctOption: "D", answer: "D) All of these", answerTamil: "D) இவை அனைத்தும்", isBookBack: true
  },
  {
    id: "cs11-ch5-1m-4", chapterNo: 5, chapterName: "Working with Windows Operating System", chapterNameTamil: "விண்டோஸ் - ல் வேலை செய்தல்", marks: 1, type: "mcq",
    questionText: "What does 'Hibernate' mean in Windows?", questionTextTamil: "Windows XP/Windows 7 –ல் “ஹைபர்நேட்” என்பதன் பொருள் என்ன?",
    options: { A: "Restarting computer in Safe mode", B: "Putting computer into a low power state after saving session", C: "Shutting down computer", D: "Locking screen" },
    optionsTamil: { A: "Safe modeல் கணினியை மறுதொடக்கம் செய்தல்", B: "திறந்துள்ள பணிகளை வன்வட்டில் சேமித்து குறைந்த மின் நுகர்வில் நிறுத்துதல்", C: "கணினியை அணைத்தல்", D: "திரையை பூட்டுதல்" },
    correctOption: "B", answer: "B) Saving current state to hard disk and powering off", answerTamil: "B) திறந்துள்ள பணிகளை வன்வட்டில் சேமித்து குறைந்த மின் நுகர்வில் நிறுத்துதல்", isBookBack: true
  },
  {
    id: "cs11-ch5-1m-5", chapterNo: 5, chapterName: "Working with Windows Operating System", chapterNameTamil: "விண்டோஸ் - ல் வேலை செய்தல்", marks: 1, type: "mcq",
    questionText: "Shortcut key used to rename a file or folder in Windows:", questionTextTamil: "சாளரங்களில் ஒரு கோப்பின் மறுபெயரிட பயன்படுத்தப்படும் குறுக்குவழி விசை:",
    options: { A: "F2", B: "F4", C: "F5", D: "F6" },
    optionsTamil: { A: "F2", B: "F4", C: "F5", D: "F6" },
    correctOption: "A", answer: "A) F2", answerTamil: "A) F2", isBookBack: true
  },
  // 2 Marks (5)
  {
    id: "cs11-ch5-2m-1", chapterNo: 5, chapterName: "Working with Windows Operating System", chapterNameTamil: "விண்டோஸ் - ல் வேலை செய்தல்", marks: 2, type: "short",
    questionText: "What is Multitasking?", questionTextTamil: "பல்பணியாக்கம் என்றால் என்ன?",
    answer: "Multitasking is the ability to run more than one application program simultaneously in an operating system like Windows.",
    answerTamil: "ஒரே நேரத்தில் ஒன்றுக்கும் மேற்பட்ட பயன்பாட்டு நிரல்களை இயக்க கணினி அனுமதிக்கும் முறை பல்பணியாக்கம் (Multitasking) எனப்படும்.", isBookBack: true
  },
  {
    id: "cs11-ch5-2m-2", chapterNo: 5, chapterName: "Working with Windows Operating System", chapterNameTamil: "விண்டோஸ் - ல் வேலை செய்தல்", marks: 2, type: "short",
    questionText: "What are Desktop Icons?", questionTextTamil: "கைவந்த பணிகுறி என்றால் என்ன?",
    answer: "Desktop icons are graphical pictorial representations of programs, files, folders, or devices that provide quick click access to them.",
    answerTamil: "பணிகுறி (Icon) என்பது கோப்புகள், கோப்புறைகள் அல்லது பயன்பாட்டு நிரல்களைக் குறிக்கும் சிறிய வரைகலை படமாகும். இதைச் சொடுக்குவதன் மூலம் விரைவாகத் திறக்கலாம்.", isBookBack: true
  },
  {
    id: "cs11-ch5-2m-3", chapterNo: 5, chapterName: "Working with Windows Operating System", chapterNameTamil: "விண்டோஸ் - ல் வேலை செய்தல்", marks: 2, type: "short",
    questionText: "Differentiate between a File and a Folder.", questionTextTamil: "கோப்பிற்கும் கோப்புறைககும் உள்ள வேறுபாடு யாது?",
    answer: "File: A collection of data or information stored with a specific name and extension.\nFolder: A container directory used to store and organize multiple files and subfolders.",
    answerTamil: "கோப்பு (File): ஒரு குறிப்பிட்ட பெயருடன் சேமிக்கப்படும் தரவுகள் அல்லது தகவல்களின் தொகுப்பு.\nகோப்புறை (Folder): பல கோப்புகள் மற்றும் துணைக் கோப்புறைகளை ஒழுங்கமைத்து வைக்கப் பயன்படும் கொள்கலன்.", isBookBack: true
  },
  {
    id: "cs11-ch5-2m-4", chapterNo: 5, chapterName: "Working with Windows Operating System", chapterNameTamil: "விண்டோஸ் - ல் வேலை செய்தல்", marks: 2, type: "short",
    questionText: "Differentiate between Save and Save As.", questionTextTamil: "Save மற்றும் Save As-ககு உள்ள வேறுபாடு யாது?",
    answer: "Save: Updates and saves changes to an already existing file with its current name and location.\nSave As: Saves the file with a new name, different format, or in a new location.",
    answerTamil: "Save: ஏற்கனவே உள்ள கோப்பில் செய்யப்பட்ட மாற்றங்களை அதே பெயரில் சேமிக்கும்.\nSave As: கோப்பை புதிய பெயரிலோ, புதிய இடத்திலோ அல்லது வேறு வடிவத்திலோ சேமிக்கப் பயன்படும்.", isBookBack: true
  },
  {
    id: "cs11-ch5-2m-5", chapterNo: 5, chapterName: "Working with Windows Operating System", chapterNameTamil: "விண்டோஸ் - ல் வேலை செய்தல்", marks: 2, type: "short",
    questionText: "How will you rename a file or folder in Windows?", questionTextTamil: "ஒரு கோப்பை எவ்வாறு மறுபெயரிடுவீர்கள்?",
    answer: "Method 1: Right-click on the file/folder -> Select 'Rename' -> Type new name -> Press Enter.\nMethod 2: Select the file/folder -> Press F2 -> Type new name -> Press Enter.",
    answerTamil: "முறை 1: கோப்பின் மீது வலது சொடுக்கு -> 'Rename' தேர்ந்தெடுக்கவும் -> புதிய பெயரை உள்ளிட்டு Enter அழுத்தவும்.\nமுறை 2: கோப்பைத் தேர்ந்தெடுத்து F2 விசையை அழுத்தி மறுபெயரிடலாம்.", isBookBack: true
  },
  // 3 Marks (5)
  {
    id: "cs11-ch5-3m-1", chapterNo: 5, chapterName: "Working with Windows Operating System", chapterNameTamil: "விண்டோஸ் - ல் வேலை செய்தல்", marks: 3, type: "brief",
    questionText: "What are the functions of Windows Operating System?", questionTextTamil: "விண்டோஸ் இயக்க அமைப்பின் செயல்பாடுகள் யாவை?",
    answer: "1. Accessing applications and hardware through a unified GUI.\n2. Managing memory, storage drives, and file directories.\n3. Providing multitasking support and plug-and-play hardware recognition.",
    answerTamil: "1. வரைகலை இடைமுகம் மூலம் பயன்பாடுகளையும் வன்பொருட்களையும் எளிதாக இயக்குதல்.\n2. கோப்புகள், கோப்புறைகள் மற்றும் நினைவகத்தை நிர்வகித்தல்.\n3. ஒரே நேரத்தில் பல பயன்பாடுகளை இயக்கும் பல்பணியாக்கத்தை வழங்குதல்.", isBookBack: true
  },
  {
    id: "cs11-ch5-3m-2", chapterNo: 5, chapterName: "Working with Windows Operating System", chapterNameTamil: "விண்டோஸ் - ல் வேலை செய்தல்", marks: 3, type: "brief",
    questionText: "Write a note on Recycle Bin.", questionTextTamil: "மறுசுழற்சி பெட்டியைப் பற்றி ஒரு குறிப்பு வரைக.",
    answer: "Recycle Bin is a special temporary folder in Windows where deleted files and folders are placed. Users can Restore deleted items back to their original location, or click 'Empty Recycle Bin' to delete them permanently.",
    answerTamil: "மறுசுழற்சிப் பெட்டி (Recycle Bin) என்பது நீக்கப்பட்ட கோப்புகள் தற்காலிகமாக சேமிக்கப்படும் இடமாகும். தவறுதலாக நீக்கப்பட்ட கோப்புகளை 'Restore' செய்து மீண்டும் பெறலாம் அல்லது 'Empty Recycle Bin' மூலம் நிரந்தரமாக நீக்கலாம்.", isBookBack: true
  },
  {
    id: "cs11-ch5-3m-3", chapterNo: 5, chapterName: "Working with Windows Operating System", chapterNameTamil: "விண்டோஸ் - ல் வேலை செய்தல்", marks: 3, type: "brief",
    questionText: "Write a note on the elements of a Windows Window.", questionTextTamil: "விண்டோஸ் சாளர திரைகூறுகளைப் பற்றி குறிப்பு வரைக.",
    answer: "1. Title Bar: Displays window name and control buttons (Minimize, Maximize/Restore, Close).\n2. Menu Bar / Ribbon: Houses application commands.\n3. Scroll Bars (Horizontal & Vertical): For viewing content exceeding screen boundaries.\n4. Work Area / Client Area: The main content display.",
    answerTamil: "1. தலைப்புப் பட்டை (Title bar): சாளரத்தின் பெயர் மற்றும் கட்டுப்பாடு பொத்தான்களைக் (Minimize, Maximize, Close) கொண்டிருக்கும்.\n2. பட்டிப் பட்டை (Menu bar): பயன்பாட்டு கட்டளைகளைக் கொண்டிருக்கும்.\n3. உருளல் பட்டைகள் (Scroll bars): பக்கத்தை மேலும் கீழும் நகர்த்த உதவும்.\n4. பணிப் பகுதி: உள்ளடக்கங்களை உருவாக்கும் முதன்மைப் பகுதி.", isBookBack: true
  },
  {
    id: "cs11-ch5-3m-4", chapterNo: 5, chapterName: "Working with Windows Operating System", chapterNameTamil: "விண்டோஸ் - ல் வேலை செய்தல்", marks: 3, type: "brief",
    questionText: "Write two methods to create a new folder.", questionTextTamil: "ஒரு கோப்புறையை உருவாக்கும் இரண்டு வழிமுறைகளை எழுதுக.",
    answer: "Method 1: Right-click on empty desktop/folder space -> Select New -> Click Folder -> Type name -> Press Enter.\nMethod 2: Open File Explorer -> Click 'New folder' button on the Home tab ribbon -> Type name -> Press Enter (or shortcut Ctrl + Shift + N).",
    answerTamil: "முறை 1: திரையின் காலி இடத்தில் வலது சொடுக்கு -> New -> Folder தேர்ந்தெடுக்கவும் -> பெயரை உள்ளிட்டு Enter அழுத்தவும்.\nமுறை 2: File Explorer-ல் Home பட்டியில் 'New Folder' பொத்தானைச் சொடுக்கவும் (குறுக்குவழி: Ctrl + Shift + N).", isBookBack: true
  },
  {
    id: "cs11-ch5-3m-5", chapterNo: 5, chapterName: "Working with Windows Operating System", chapterNameTamil: "விண்டோஸ் - ல் வேலை செய்தல்", marks: 3, type: "brief",
    questionText: "Differentiate between Cut and Copy operations.", questionTextTamil: "வெட்டுதல் மற்றும் நகலெடுத்தல்-ககு உள்ள வேறுபாடுகள் யாவை?",
    answer: "Cut (Ctrl + X): Moves the selected file/text from its original location to Clipboard; original is removed when pasted.\nCopy (Ctrl + C): Duplicates the selected file/text to Clipboard, leaving the original file intact in its location.",
    answerTamil: "வெட்டுதல் (Cut - Ctrl+X): தேர்ந்தெடுக்கப்பட்ட கோப்பு மூல இடத்திலிருந்து நீக்கப்பட்டு புதிய இடத்திற்கு நகர்த்தப்படும்.\nநகலெடுத்தல் (Copy - Ctrl+C): மூல இடத்தில் உள்ள கோப்பு அப்படியே இருக்கும்; அதன் புதிய நகல் உருவாக்கப்படும்.", isBookBack: true
  },
  // 5 Marks (3)
  {
    id: "cs11-ch5-5m-1", chapterNo: 5, chapterName: "Working with Windows Operating System", chapterNameTamil: "விண்டோஸ் - ல் வேலை செய்தல்", marks: 5, type: "essay",
    questionText: "Explain various versions of Windows Operating System.", questionTextTamil: "விண்டோஸ் இயக்க அமைப்பின் பலவகையான பதிப்புகளை விவரி.",
    answer: "1. Windows 1.0 (1985): First GUI 16-bit environment on DOS.\n2. Windows 95 (1995): Introduced Start menu, Taskbar, and 32-bit architecture.\n3. Windows 98 (1998): Web integrated, USB support, FAT32.\n4. Windows XP (2001): High stability, clean visual styles, enhanced networking.\n5. Windows 7 (2009): Aero Peek, Jump lists, touch support.\n6. Windows 8/8.1 (2012): Metro UI, Start screen tiles for tablets/PCs.\n7. Windows 10/11 (2015/2021): Virtual desktops, Cortana, Microsoft Edge, modern centered taskbar.",
    answerTamil: "1. Windows 1.0 (1985): முதல் வரைகலை இடைமுகப் பதிப்பு.\n2. Windows 95 (1995): Start பட்டன், பணிப்பட்டை மற்றும் 32-பிட் கட்டமைப்பு அறிமுகமானது.\n3. Windows 98 (1998): இணைய ஒருங்கிணைப்பு மற்றும் USB வசதிகள்.\n4. Windows XP (2001): அதிக நிலைப்புத்தன்மை, புதிய தோற்றம்.\n5. Windows 7 (2009): விரைவான தொடக்கம், Aero தோற்றம்.\n6. Windows 8 (2012): தொடுதிரை வசதி கொண்ட Start screen டைல்ஸ்.\n7. Windows 10/11: நவீன பாதுகாப்பு, கார்டானா மற்றும் மல்டிடாஸ்கிங் வசதிகள்.", isBookBack: true
  },
  {
    id: "cs11-ch5-5m-2", chapterNo: 5, chapterName: "Working with Windows Operating System", chapterNameTamil: "விண்டோஸ் - ல் வேலை செய்தல்", marks: 5, type: "essay",
    questionText: "Explain various methods of searching a file or folder in Windows.", questionTextTamil: "ஒரு கோப்பு அல்லது கோப்புறையைத் தேடிக் கண்டுபிடிக்கும் பல்வேறு வழிமுறைகளை விளக்குக.",
    answer: "1. Searching using Start Menu Search Box: Click Start -> Type file name in search box -> Windows displays matching results in real time.\n2. Searching using File Explorer Search Bar: Open drive/folder in File Explorer -> Click search bar at top-right -> Enter keyword, wildcards (*, ?), date modified, size, or extension (e.g. *.docx).\n3. Advanced Search Filters: Filter by 'Kind' (Document, Picture, Video), 'Size' (Small, Medium, Huge), or 'Date Modified'.",
    answerTamil: "1. Start பட்டி தேடல் பெட்டி மூலம் தேடுதல்: Start பொத்தானைச் சொடுக்கி, தேடல் பெட்டியில் கோப்பின் பெயரை உள்ளிட்டால் உடனுக்குடன் முடிவுகள் காட்டப்படும்.\n2. File Explorer தேடல் பட்டை மூலம்: குறிப்பிட்ட இயக்ககத்தை அல்லது கோப்புறையைத் திறந்து, மேல் வலது மூலையில் உள்ள Search பட்டியில் கோப்பின் பெயரை உள்ளிடவும்.\n3. சிறப்பு வடிப்பான்கள் மூலம்: கோப்பு வகை (*.docx, *.pdf), மாற்றப்பட்ட தேதி, அளவு ஆகியவற்றின் அடிப்படையில் தேடலாம்.", isBookBack: true
  },
  {
    id: "cs11-ch5-5m-3", chapterNo: 5, chapterName: "Working with Windows Operating System", chapterNameTamil: "விண்டோஸ் - ல் வேலை செய்தல்", marks: 5, type: "essay",
    questionText: "Explain the process of creating Desktop Shortcuts in Windows.", questionTextTamil: "விண்டோஸ் இயக்க அமைப்பில் குறுக்கு வழி பணிகுறிகளை உருவாக்கும் செயல் முறையை விளக்குக.",
    answer: "Method 1 (Send to Desktop):\n1. Locate the application or file in File Explorer.\n2. Right-click on the file.\n3. Select 'Send to' -> Click 'Desktop (create shortcut)'.\n\nMethod 2 (New Shortcut Wizard):\n1. Right-click on an empty area of the desktop.\n2. Select New -> Shortcut.\n3. Click 'Browse' to locate the executable program/file path.\n4. Click Next -> Enter shortcut name -> Click Finish.",
    answerTamil: "முறை 1 (Send to முறை):\n1. File Explorer-ல் குறிப்பிட்ட கோப்பு அல்லது பயன்பாட்டைக் கண்டறியவும்.\n2. அதன் மீது வலது சொடுக்கு செய்யவும்.\n3. 'Send to' -> 'Desktop (create shortcut)' என்பதைத் தேர்ந்தெடுக்கவும்.\n\nமுறை 2 (புதிய குறுக்குவழி வழிகாட்டி):\n1. திரையின் காலி இடத்தில் வலது சொடுக்கு செய்து New -> Shortcut தேர்ந்தெடுக்கவும்.\n2. 'Browse' மூலம் கோப்பைத் தேர்ந்தெடுத்து Next கொடுத்து Finish கொடுக்கவும்.", isBookBack: true
  }
];

fs.writeFileSync('./scripts/ch3.json', JSON.stringify(ch3, null, 2));
fs.writeFileSync('./scripts/ch4.json', JSON.stringify(ch4, null, 2));
fs.writeFileSync('./scripts/ch5.json', JSON.stringify(ch5, null, 2));
console.log('Ch3, Ch4, Ch5 built successfully!');
