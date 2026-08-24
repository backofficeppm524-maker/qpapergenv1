import fs from 'fs';
import { Question } from '../src/types';

// ==========================================
// CHAPTER 3: Introduction to Database Management System (30 questions: 10 1M, 10 2M, 5 3M, 5 5M)
// ==========================================
const ch3_1m: Question[] = [
  {
    id: "ca12-ch3-1m-1",
    chapterNo: 3,
    chapterName: "Introduction to Database Management System",
    chapterNameTamil: "தரவுத்தள மேலாண்மை அமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "Which language is used to request information from a Database?",
    questionTextTamil: "ஒரு தரவுத்தளத்திலிருந்து தகவலைக் கோரப் பயன்படும் மொழி எது?",
    options: {
      A: "Relational",
      B: "Structural",
      C: "Query",
      D: "Compiler"
    },
    optionsTamil: {
      A: "உறவுநிலை",
      B: "கட்டமைப்பு",
      C: "வினவல் மொழி (Query Language)",
      D: "தொகுப்பான்"
    },
    correctOption: "C",
    answer: "C) Query",
    answerTamil: "C) வினவல் மொழி (Query Language)",
    isBookBack: true
  },
  {
    id: "ca12-ch3-1m-2",
    chapterNo: 3,
    chapterName: "Introduction to Database Management System",
    chapterNameTamil: "தரவுத்தள மேலாண்மை அமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "The ---------- diagram gives a logical structure of the database graphically?",
    questionTextTamil: "தரவுத்தளத்தின் தருக்க கட்டமைப்பை வரைகலை வடிவில் குறிப்பது எது?",
    options: {
      A: "Entity-Relationship",
      B: "Entity",
      C: "Architectural Representation",
      D: "Database"
    },
    optionsTamil: {
      A: "பொருள்-உறவு நிலை வரைபடம் (Entity-Relationship)",
      B: "பொருள் (Entity)",
      C: "கட்டமைப்பு விளக்கம்",
      D: "தரவுத்தளம்"
    },
    correctOption: "A",
    answer: "A) Entity-Relationship",
    answerTamil: "A) பொருள்-உறவு நிலை வரைபடம் (Entity-Relationship)",
    isBookBack: true
  },
  {
    id: "ca12-ch3-1m-3",
    chapterNo: 3,
    chapterName: "Introduction to Database Management System",
    chapterNameTamil: "தரவுத்தள மேலாண்மை அமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "An entity set that does not have enough attributes to form primary key is known as",
    questionTextTamil: "முதன்மைத் திறவுகோலை உருவாக்க போதுமான பண்புக்கூறுகள் இல்லாத உருப்பொருள் கணம் எவ்வாறு அழைக்கப்படுகிறது?",
    options: {
      A: "Strong entity set",
      B: "Weak entity set",
      C: "Identity set",
      D: "Owner set"
    },
    optionsTamil: {
      A: "வலுவான உருப்பொருள் கணம்",
      B: "வலுவற்ற உருப்பொருள் கணம் (Weak entity set)",
      C: "அடையாள கணம்",
      D: "உரிமையாளர் கணம்"
    },
    correctOption: "B",
    answer: "B) Weak entity set",
    answerTamil: "B) வலுவற்ற உருப்பொருள் கணம் (Weak entity set)",
    isBookBack: true
  },
  {
    id: "ca12-ch3-1m-4",
    chapterNo: 3,
    chapterName: "Introduction to Database Management System",
    chapterNameTamil: "தரவுத்தள மேலாண்மை அமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "---------- Command is used to delete a database.",
    questionTextTamil: "தரவுத்தளத்தை நீக்கப் பயன்படும் கட்டளை எது?",
    options: {
      A: "Delete database database_name",
      B: "Delete database_name",
      C: "drop database database_name",
      D: "drop database_name"
    },
    optionsTamil: {
      A: "Delete database database_name",
      B: "Delete database_name",
      C: "drop database database_name",
      D: "drop database_name"
    },
    correctOption: "C",
    answer: "C) drop database database_name",
    answerTamil: "C) drop database database_name",
    isBookBack: true
  },
  {
    id: "ca12-ch3-1m-5",
    chapterNo: 3,
    chapterName: "Introduction to Database Management System",
    chapterNameTamil: "தரவுத்தள மேலாண்மை அமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "MySQL belongs to which category of DBMS?",
    questionTextTamil: "MySQL எந்த வகை DBMS பிரிவைச் சேர்ந்தது?",
    options: {
      A: "Object Oriented",
      B: "Hierarchical",
      C: "Relational",
      D: "Network"
    },
    optionsTamil: {
      A: "பொருள் நோக்கு",
      B: "படிநிலை",
      C: "உறவுநிலை (Relational)",
      D: "வலைப்பின்னல்"
    },
    correctOption: "C",
    answer: "C) Relational",
    answerTamil: "C) உறவுநிலை (Relational)",
    isBookBack: true
  },
  {
    id: "ca12-ch3-1m-6",
    chapterNo: 3,
    chapterName: "Introduction to Database Management System",
    chapterNameTamil: "தரவுத்தள மேலாண்மை அமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "MySQL is freely available and is open source.",
    questionTextTamil: "MySQL இலவசமாகவும் திறந்த மூலமாகவும் கிடைக்கிறது என்பது?",
    options: {
      A: "True",
      B: "False",
      C: "Partially True",
      D: "None of the above"
    },
    optionsTamil: {
      A: "சரி (True)",
      B: "தவறு (False)",
      C: "பகுதி சரி",
      D: "எதுவுமில்லை"
    },
    correctOption: "A",
    answer: "A) True",
    answerTamil: "A) சரி (True)",
    isBookBack: true
  },
  {
    id: "ca12-ch3-1m-7",
    chapterNo: 3,
    chapterName: "Introduction to Database Management System",
    chapterNameTamil: "தரவுத்தள மேலாண்மை அமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "---------- represents a \"tuple\" in a relational database?",
    questionTextTamil: "உறவுநிலை தரவுத்தளத்தில் ஒரு 'டூப்பிள்' (Tuple) என்பது எதனைக் குறிக்கும்?",
    options: {
      A: "Table",
      B: "Row",
      C: "Column",
      D: "Object"
    },
    optionsTamil: {
      A: "அட்டவணை",
      B: "வரிசை (Row / Record)",
      C: "நெடுவரிசை (Column)",
      D: "பொருள்"
    },
    correctOption: "B",
    answer: "B) Row",
    answerTamil: "B) வரிசை (Row / Record)",
    isBookBack: true
  },
  {
    id: "ca12-ch3-1m-8",
    chapterNo: 3,
    chapterName: "Introduction to Database Management System",
    chapterNameTamil: "தரவுத்தள மேலாண்மை அமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "Communication is established with MySQL using",
    questionTextTamil: "MySQL உடன் தகவல்தொடர்பு எதன் மூலம் நிறுவப்படுகிறது?",
    options: {
      A: "SQL",
      B: "Network calls",
      C: "Java",
      D: "API’s"
    },
    optionsTamil: {
      A: "SQL (Structured Query Language)",
      B: "Network calls",
      C: "Java",
      D: "API’s"
    },
    correctOption: "A",
    answer: "A) SQL",
    answerTamil: "A) SQL (Structured Query Language)",
    isBookBack: true
  },
  {
    id: "ca12-ch3-1m-9",
    chapterNo: 3,
    chapterName: "Introduction to Database Management System",
    chapterNameTamil: "தரவுத்தள மேலாண்மை அமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "Which is the MySQL instance responsible for data processing?",
    questionTextTamil: "தரவு செயலாக்கத்திற்கு காரணமான MySQL நிகழ்வு எது?",
    options: {
      A: "MySQL Client",
      B: "MySQL Server",
      C: "SQL",
      D: "Server Daemon Program"
    },
    optionsTamil: {
      A: "MySQL Client",
      B: "MySQL Server",
      C: "SQL",
      D: "Server Daemon Program"
    },
    correctOption: "B",
    answer: "B) MySQL Server",
    answerTamil: "B) MySQL Server",
    isBookBack: true
  },
  {
    id: "ca12-ch3-1m-10",
    chapterNo: 3,
    chapterName: "Introduction to Database Management System",
    chapterNameTamil: "தரவுத்தள மேலாண்மை அமைப்பு ஓர் அறிமுகம்",
    marks: 1,
    type: "mcq",
    questionText: "The structure representing the organizational view of entire database is known as -------- in MySQL database.",
    questionTextTamil: "முழு தரவுத்தளத்தின் கட்டமைப்பு பார்வையை பிரதிபலிப்பது MySQL-ல் எவ்வாறு அழைக்கப்படுகிறது?",
    options: {
      A: "Schema",
      B: "View",
      C: "Instance",
      D: "Table"
    },
    optionsTamil: {
      A: "திட்டம் / ஸ்கீமா (Schema)",
      B: "காட்சி (View)",
      C: "நிகழ்வு (Instance)",
      D: "அட்டவணை"
    },
    correctOption: "A",
    answer: "A) Schema",
    answerTamil: "A) திட்டம் / ஸ்கீமா (Schema)",
    isBookBack: true
  }
];

const ch3_2m: Question[] = [
  {
    id: "ca12-ch3-2m-1",
    chapterNo: 3,
    chapterName: "Introduction to Database Management System",
    chapterNameTamil: "தரவுத்தள மேலாண்மை அமைப்பு ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "Define Data Model and list the types of data model used.",
    questionTextTamil: "தரவு மாதிரி (Data Model) - வரையறுத்து அதன் வகைகளை பட்டியலிடுக.",
    answer: "A Data Model defines how data is logically structured, organized, and stored. Types include: Hierarchical Model, Relational Model, Network Model, and Object-Oriented Database Model.",
    answerTamil: "தரவு மாதிரி என்பது தரவு எவ்வாறு தருக்கமாக கட்டமைக்கப்படுகிறது, சேமிக்கப்படுகிறது என்பதை வரையறுப்பதாகும். வகைகள்: படிநிலை மாதிரி, உறவுநிலை மாதிரி, வலைப்பின்னல் மாதிரி, பொருள்நோக்கு மாதிரி.",
    isBookBack: true
  },
  {
    id: "ca12-ch3-2m-2",
    chapterNo: 3,
    chapterName: "Introduction to Database Management System",
    chapterNameTamil: "தரவுத்தள மேலாண்மை அமைப்பு ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "List few disadvantages of file processing system.",
    questionTextTamil: "கோப்பு செயலாக்க அமைப்பின் குறைபாடுகளைப் பட்டியலிடுக.",
    answer: "Disadvantages of file processing systems:\n1. Data redundancy and inconsistency\n2. Difficulty in accessing data\n3. Data isolation and lack of data integrity\n4. Lack of security and concurrent access issues.",
    answerTamil: "கோப்பு அமைப்பின் குறைபாடுகள்:\n1. தரவு பணிமிகைமை (Redundancy) மற்றும் முரண்பாடு\n2. தரவை அணுகுவதில் சிரமம்\n3. தரவு தனிமைப்படுத்தல் மற்றும் ஒருமைப்பாடின்மை\n4. போதிய பாதுகாப்பின்மை.",
    isBookBack: true
  },
  {
    id: "ca12-ch3-2m-3",
    chapterNo: 3,
    chapterName: "Introduction to Database Management System",
    chapterNameTamil: "தரவுத்தள மேலாண்மை அமைப்பு ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "Define Single and multi valued attributes.",
    questionTextTamil: "ஒற்றை மற்றும் பல மதிப்பு பண்புக்கூறுகளை வரையறுக்க.",
    answer: "- Single-valued attribute: An attribute having only a single value for an entity (e.g., Roll Number, Age).\n- Multi-valued attribute: An attribute having more than one value for a single entity (e.g., Mobile Numbers, Degrees).",
    answerTamil: "- ஒற்றை மதிப்பு பண்புக்கூறு: ஒரு உருப்பொருளுக்கு ஒரே ஒரு மதிப்பை மட்டும் கொண்டிருக்கும் பண்புக்கூறு (எ.கா: ரோல் எண்).\n- பல மதிப்பு பண்புக்கூறு: ஒரு உருப்பொருளுக்கு ஒன்றுக்கும் மேற்பட்ட மதிப்புகளைக் கொண்ட பண்புக்கூறு (எ.கா: தொலைபேசி எண்கள்).",
    isBookBack: true
  },
  {
    id: "ca12-ch3-2m-4",
    chapterNo: 3,
    chapterName: "Introduction to Database Management System",
    chapterNameTamil: "தரவுத்தள மேலாண்மை அமைப்பு ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "List any two DDL and DML commands with its Syntax.",
    questionTextTamil: "ஏதேனும் இரண்டு DDL மற்றும் DML கட்டளைகளையும் அவற்றின் தொடரியலையும் எழுதுக.",
    answer: "DDL Commands:\n1. CREATE: CREATE TABLE table_name (col1 datatype, col2 datatype);\n2. DROP: DROP TABLE table_name;\n\nDML Commands:\n1. INSERT: INSERT INTO table_name VALUES (val1, val2);\n2. SELECT: SELECT * FROM table_name;",
    answerTamil: "DDL கட்டளைகள்:\n1. CREATE: CREATE TABLE table_name (col1 datatype, col2 datatype);\n2. DROP: DROP TABLE table_name;\n\nDML கட்டளைகள்:\n1. INSERT: INSERT INTO table_name VALUES (val1, val2);\n2. SELECT: SELECT * FROM table_name;",
    isBookBack: true
  },
  {
    id: "ca12-ch3-2m-5",
    chapterNo: 3,
    chapterName: "Introduction to Database Management System",
    chapterNameTamil: "தரவுத்தள மேலாண்மை அமைப்பு ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "What are the ACID properties?",
    questionTextTamil: "ACID பண்புகள் என்பவை யாவை?",
    answer: "ACID properties ensure reliable database transactions:\n- A: Atomicity (All or nothing)\n- C: Consistency (State transitions remain valid)\n- I: Isolation (Concurrent transactions don't interfere)\n- D: Durability (Completed changes persist permanently).",
    answerTamil: "ACID பண்புகள்:\n- A - தனித்தன்மை (Atomicity - முழுவதும் அல்லது எதுவுமில்லை)\n- C - மாறாநிலை (Consistency)\n- I - தனித்திருத்தல் (Isolation)\n- D - நீடித்திருக்கும் தன்மை (Durability).",
    isBookBack: true
  },
  {
    id: "ca12-ch3-2m-6",
    chapterNo: 3,
    chapterName: "Introduction to Database Management System",
    chapterNameTamil: "தரவுத்தள மேலாண்மை அமைப்பு ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "Which command is used to make permanent changes done by a transaction?",
    questionTextTamil: "ஒரு பரிவர்த்தனையால் செய்யப்பட்ட மாற்றங்களை நிரந்தரமாக்கப் பயன்படும் கட்டளை எது?",
    answer: "The COMMIT command is used to save all changes made by a transaction permanently in the database.",
    answerTamil: "COMMIT கட்டளையானது ஒரு பரிவர்த்தனையின் மூலம் செய்யப்பட்ட மாற்றங்களை தரவுத்தளத்தில் நிரந்தரமாகச் சேமிக்கப் பயன்படுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch3-2m-7",
    chapterNo: 3,
    chapterName: "Introduction to Database Management System",
    chapterNameTamil: "தரவுத்தள மேலாண்மை அமைப்பு ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "What is view in SQL?",
    questionTextTamil: "SQL-ல் காட்சி (View) என்றால் என்ன?",
    answer: "A View in SQL is a virtual table based on the result-set of an SQL statement. It does not store data physically but presents data from one or more base tables.",
    answerTamil: "SQL-ல் பார்வை அல்லது காட்சி (View) என்பது ஒரு மெய்நிகர் அட்டவணை (Virtual table) ஆகும். இது உண்மையான தரவை சேமிக்காமல், ஒன்று அல்லது அதற்கு மேற்பட்ட அட்டவணைகளின் தரவை வினவல் மூலம் காண்பிக்கிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch3-2m-8",
    chapterNo: 3,
    chapterName: "Introduction to Database Management System",
    chapterNameTamil: "தரவுத்தள மேலாண்மை அமைப்பு ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "Write the difference between SQL and MySQL.",
    questionTextTamil: "SQL மற்றும் MySQL இடையே உள்ள வேறுபாடுகளை எழுதுக.",
    answer: "- SQL: Structured Query Language used to access, manage, and manipulate relational databases.\n- MySQL: An open-source Relational Database Management System (RDBMS) software that uses SQL.",
    answerTamil: "- SQL: உறவுநிலை தரவுத்தளங்களை நிர்வகிக்கப் பயன்படும் வினவல் மொழி.\n- MySQL: SQL மொழியைப் பயன்படுத்தி செயல்படும் ஒரு திறந்த மூல உறவுநிலை தரவுத்தள மேலாண்மை அமைப்பு (RDBMS) மென்பொருள்.",
    isBookBack: true
  },
  {
    id: "ca12-ch3-2m-9",
    chapterNo: 3,
    chapterName: "Introduction to Database Management System",
    chapterNameTamil: "தரவுத்தள மேலாண்மை அமைப்பு ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "What is Relationship and List its types.",
    questionTextTamil: "உறவுநிலை (Relationship) என்றால் என்ன? அதன் வகைகளைப் பட்டியலிடுக.",
    answer: "A Relationship is an association among several entities in a database.\nTypes:\n1. One-to-One (1:1)\n2. One-to-Many (1:M)\n3. Many-to-One (M:1)\n4. Many-to-Many (M:N).",
    answerTamil: "உறவுநிலை என்பது இரண்டு அல்லது அதற்கு மேற்பட்ட உருப்பொருட்களுக்கு இடையே உள்ள தொடர்பைக் குறிக்கும்.\nவகைகள்:\n1. ஒன்றுடன் ஒன்று (One-to-One)\n2. ஒன்றுடன் பல (One-to-Many)\n3. பலவுடன் ஒன்று (Many-to-One)\n4. பலவுடன் பல (Many-to-Many).",
    isBookBack: true
  },
  {
    id: "ca12-ch3-2m-10",
    chapterNo: 3,
    chapterName: "Introduction to Database Management System",
    chapterNameTamil: "தரவுத்தள மேலாண்மை அமைப்பு ஓர் அறிமுகம்",
    marks: 2,
    type: "short",
    questionText: "State few advantages of Relational databases.",
    questionTextTamil: "உறவுநிலை தரவுத்தளத்தின் சில நன்மைகளைக் கூறுக.",
    answer: "Advantages of Relational Databases:\n1. Easy data access using standard SQL.\n2. Minimization of data redundancy via normalization.\n3. High data integrity, accuracy, and security.\n4. Scalability and multi-user support.",
    answerTamil: "உறவுநிலை தரவுத்தளத்தின் நன்மைகள்:\n1. எளிய முறையில் SQL மூலம் தரவை அணுகுதல்.\n2. பணிமிகைமை குறைக்கப்படுதல்.\n3. உயர் தரவு ஒருமைப்பாடு மற்றும் பாதுகாப்பு.\n4. பல பயனர்கள் ஒரே நேரத்தில் அணுகும் வசதி.",
    isBookBack: true
  }
];

const ch3_3m: Question[] = [
  {
    id: "ca12-ch3-3m-1",
    chapterNo: 3,
    chapterName: "Introduction to Database Management System",
    chapterNameTamil: "தரவுத்தள மேலாண்மை அமைப்பு ஓர் அறிமுகம்",
    marks: 3,
    type: "brief",
    questionText: "Explain on Evolution of DBMS.",
    questionTextTamil: "DBMS-ன் பரிணாம வளர்ச்சியைப் பற்றி விளக்குக.",
    answer: "Evolution of DBMS:\n1. 1960s (Punched Cards & File System): Manual records and flat-file processing systems.\n2. 1970s (Hierarchical & Network Models): IBM IMS and CODASYL DBTG systems.\n3. 1980s (Relational Model): E.F. Codd proposed RDBMS (Oracle, DB2, SQL Server).\n4. 1990s-Present: Object-Oriented DBMS, Web Databases, MySQL, and modern Cloud NoSQL databases.",
    answerTamil: "DBMS-ன் பரிணாம வளர்ச்சி:\n1. 1960கள்: துளையிடப்பட்ட அட்டைகள் மற்றும் கோப்பு செயலாக்க அமைப்புகள்.\n2. 1970கள்: படிநிலை மற்றும் வலைப்பின்னல் தரவு மாதிரிகள் (IBM IMS).\n3. 1980கள்: இ.எப்.காட் உருவாக்கிய உறவுநிலை மாதிரி (RDBMS - Oracle, SQL).\n4. 1990கள் முதல் தற்போது வரை: பொருள்நோக்கு தரவுத்தளங்கள், வலைப்பின்னல் மற்றும் கிளவுட் தரவுத்தளங்கள்.",
    isBookBack: true
  },
  {
    id: "ca12-ch3-3m-2",
    chapterNo: 3,
    chapterName: "Introduction to Database Management System",
    chapterNameTamil: "தரவுத்தள மேலாண்மை அமைப்பு ஓர் அறிமுகம்",
    marks: 3,
    type: "brief",
    questionText: "What is relationship in databases? List its types.",
    questionTextTamil: "தரவுத்தளத்தில் உறவுநிலை என்றால் என்ன? அதன் வகைகளை விளக்குக.",
    answer: "A relationship defines how entities in different tables are logically linked.\n1. One-to-One (1:1): One row in Table A relates to only one row in Table B (e.g., Person and Passport).\n2. One-to-Many (1:N): One row in Table A relates to many rows in Table B (e.g., Department and Employees).\n3. Many-to-Many (M:N): Many rows in Table A relate to many rows in Table B (e.g., Students and Courses).",
    answerTamil: "உறவுநிலை என்பது அட்டவணைகளுக்கு இடையே உள்ள தருக்கத் தொடர்பை வரையறுக்கிறது.\n1. ஒன்றுடன் ஒன்று (1:1): ஒரு நபர் - ஒரு கடவுச்சீட்டு.\n2. ஒன்றுடன் பல (1:N): ஒரு துறை - பல ஊழியர்கள்.\n3. பலவுடன் பல (M:N): பல மாணவர்கள் - பல பாடப்பிரிவுகள்.",
    isBookBack: true
  },
  {
    id: "ca12-ch3-3m-3",
    chapterNo: 3,
    chapterName: "Introduction to Database Management System",
    chapterNameTamil: "தரவுத்தள மேலாண்மை அமைப்பு ஓர் அறிமுகம்",
    marks: 3,
    type: "brief",
    questionText: "Discuss on Cardinality in DBMS.",
    questionTextTamil: "DBMS-ல் கார்டினாலிட்டி (Cardinality) பற்றி விவாதிக்கவும்.",
    answer: "Cardinality refers to the number of tuples (rows) in a relation or table. In ER modeling, mapping cardinality expresses the number of entities to which another entity can be associated via a relationship set (1:1, 1:N, N:1, M:N).",
    answerTamil: "கார்டினாலிட்டி என்பது ஒரு அட்டவணையில் உள்ள வரிசைகளின் (Rows/Tuples) எண்ணிக்கையைக் குறிக்கும். மேலும் ER மாதிரியில் ஒரு உருப்பொருள் மற்ற உருப்பொருட்களுடன் எத்தனை தொடர்புகளைக் கொண்டுள்ளது என்பதையும் இது குறிக்கிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch3-3m-4",
    chapterNo: 3,
    chapterName: "Introduction to Database Management System",
    chapterNameTamil: "தரவுத்தள மேலாண்மை அமைப்பு ஓர் அறிமுகம்",
    marks: 3,
    type: "brief",
    questionText: "List any 5 privileges available in MySQL for the User.",
    questionTextTamil: "MySQL-ல் பயனருக்கான ஏதேனும் 5 முன்னுரிமைகளை (Privileges) பட்டியலிடுக.",
    answer: "Five common user privileges in MySQL:\n1. SELECT: Read and view data from tables.\n2. INSERT: Add new records to tables.\n3. UPDATE: Modify existing records.\n4. DELETE: Remove records from tables.\n5. DROP: Delete entire tables or databases.",
    answerTamil: "MySQL பயனருக்கான 5 முன்னுரிமைகள்:\n1. SELECT: தரவைப் பார்க்க.\n2. INSERT: புதிய பதிவுகளைச் சேர்க்க.\n3. UPDATE: பதிவுகளைத் திருத்த.\n4. DELETE: பதிவுகளை நீக்க.\n5. DROP: அட்டவணை அல்லது தரவுத்தளத்தை நீக்க.",
    isBookBack: true
  },
  {
    id: "ca12-ch3-3m-5",
    chapterNo: 3,
    chapterName: "Introduction to Database Management System",
    chapterNameTamil: "தரவுத்தள மேலாண்மை அமைப்பு ஓர் அறிமுகம்",
    marks: 3,
    type: "brief",
    questionText: "Write few commands used by DBA to control the entire database.",
    questionTextTamil: "தரவுத்தள நிர்வாகி (DBA) தரவுத்தளத்தைக் கட்டுப்படுத்த பயன்படுத்தும் சில கட்டளைகளை எழுதுக.",
    answer: "Commands used by DBA:\n1. CREATE USER: Creates new database user accounts.\n2. GRANT: Gives permissions/privileges to users.\n3. REVOKE: Withdraws granted privileges from users.\n4. BACKUP / RESTORE: Takes backups and recovers database data.",
    answerTamil: "DBA பயன்படுத்தும் கட்டளைகள்:\n1. CREATE USER: புதிய பயனர் கணக்குகளை உருவாக்க.\n2. GRANT: பயனர்களுக்கு அனுமதிகளை வழங்க.\n3. REVOKE: வழங்கப்பட்ட அனுமதிகளைத் திரும்பப் பெற.\n4. BACKUP & RESTORE: தரவுகளை பாதுகாப்பாக சேமிக்க மற்றும் மீட்டெடுக்க.",
    isBookBack: true
  }
];

const ch3_5m: Question[] = [
  {
    id: "ca12-ch3-5m-1",
    chapterNo: 3,
    chapterName: "Introduction to Database Management System",
    chapterNameTamil: "தரவுத்தள மேலாண்மை அமைப்பு ஓர் அறிமுகம்",
    marks: 5,
    type: "essay",
    questionText: "Discuss on various database models available in DBMS.",
    questionTextTamil: "DBMS-ல் உள்ள பல்வேறு தரவுத்தள மாதிரிகளைப் பற்றி விவாதிக்கவும்.",
    answer: "Major database models in DBMS:\n1. Hierarchical Model: Organizes data in a tree-like parent-child structure with a single root (e.g., IBM IMS).\n2. Relational Model: Represents data in two-dimensional tables (relations) of rows and columns, linked by keys (e.g., MySQL, Oracle).\n3. Network Model: Represents complex many-to-many relationships where a child node can have multiple parent nodes.\n4. Object-Oriented Model: Integrates object-oriented programming concepts (classes, objects, inheritance, encapsulation) into database technology.",
    answerTamil: "முக்கிய தரவுத்தள மாதிரிகள்:\n1. படிநிலை மாதிரி (Hierarchical Model): பெற்றோர்-குழந்தை மரம் போன்ற கட்டமைப்பில் தரவை அமைக்கிறது.\n2. உறவுநிலை மாதிரி (Relational Model): அட்டவணைகளில் வரிசைகள் மற்றும் நெடுவரிசைகளாக தரவை அமைத்து இணைக்கிறது (MySQL, Oracle).\n3. வலைப்பின்னல் மாதிரி (Network Model): ஒரு குழந்தை பல பெற்றோர்களைக் கொண்டிருக்கக்கூடிய வலைப்பின்னல் கட்டமைப்பு.\n4. பொருள்நோக்கு மாதிரி (Object-Oriented Model): பொருள்நோக்கு நிரலாக்கத்தின் கருத்துக்களைக் கொண்டு செயல்படுகிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch3-5m-2",
    chapterNo: 3,
    chapterName: "Introduction to Database Management System",
    chapterNameTamil: "தரவுத்தள மேலாண்மை அமைப்பு ஓர் அறிமுகம்",
    marks: 5,
    type: "essay",
    questionText: "List the basic concepts of ER Model with suitable example.",
    questionTextTamil: "ER மாதிரியின் அடிப்படைக் கருத்துக்களை தகுந்த எடுத்துக்காட்டுடன் பட்டியலிடுக.",
    answer: "Basic concepts of Entity-Relationship (ER) Model:\n1. Entity: A real-world object distinguishable from others (represented by Rectangle, e.g., Student, Teacher).\n2. Attribute: Properties describing an entity (represented by Ellipse, e.g., Name, Age, Roll_No).\n3. Relationship: Association between entities (represented by Diamond, e.g., Student 'Studies' Course).\n4. Keys: Unique identifiers such as Primary Key, Candidate Key, Foreign Key.\n\nExample: Student (Entity) has attributes RollNo, Name, and has an ENROLLED_IN relationship with Course (Entity).",
    answerTamil: "ER மாதிரியின் அடிப்படைக் கூறுகள்:\n1. உருப்பொருள் (Entity): அடையாளம் காணக்கூடிய உண்மை உலகப் பொருள் (செவ்வகம் - எ.கா: மாணவர்).\n2. பண்புக்கூறு (Attribute): உருப்பொருளின் பண்புகளைக் குறிப்பது (நீள்வட்டம் - எ.கா: பெயர், வயது).\n3. உறவுநிலை (Relationship): உருப்பொருட்களுக்கு இடையேயான தொடர்பு (வைரம் - எ.கா: மாணவர் 'படிக்கும்' பாடப்பிரிவு).\n4. திறவுகோல்கள் (Keys): முதன்மைத் திறவுகோல் (Primary key), வெளித் திறவுகோல் (Foreign key).",
    isBookBack: true
  },
  {
    id: "ca12-ch3-5m-3",
    chapterNo: 3,
    chapterName: "Introduction to Database Management System",
    chapterNameTamil: "தரவுத்தள மேலாண்மை அமைப்பு ஓர் அறிமுகம்",
    marks: 5,
    type: "essay",
    questionText: "Discuss in detail on various types of attributes in DBMS.",
    questionTextTamil: "DBMS-ல் உள்ள பல்வேறு வகையான பண்புக்கூறுகளை (Attributes) விரிவாக விளக்குக.",
    answer: "Types of Attributes in DBMS:\n1. Key Attribute: Uniquely identifies an entity in an entity set (e.g., Reg_No, SSN).\n2. Simple Attribute: Cannot be divided into smaller subparts (e.g., Age, Gender).\n3. Composite Attribute: Can be divided into smaller subparts (e.g., Name divided into First_Name and Last_Name; Address into City, State, Pin).\n4. Single-Valued Attribute: Holds only one value for an entity (e.g., Date of Birth).\n5. Multi-Valued Attribute: Can hold multiple values for an entity (e.g., Phone_Number, Skill_Set).\n6. Derived Attribute: Derived dynamically from another attribute (e.g., Age derived from Current Date and Date_of_Birth).",
    answerTamil: "பண்புக்கூறுகளின் வகைகள்:\n1. திறவுகோல் பண்புக்கூறு: உருப்பொருளை தனித்துவமாக அடையாளம் காணும் (எ.கா: பதிவு எண்).\n2. எளிய பண்புக்கூறு: மேலும் பிரிக்க முடியாத பண்புக்கூறு (எ.கா: வயது, பாலினம்).\n3. கூட்டு பண்புக்கூறு: மேலும் பிரிக்கக்கூடிய பண்புக்கூறு (எ.கா: பெயர் -> முதல் பெயர், இறுதிப் பெயர்).\n4. ஒற்றை மதிப்பு பண்புக்கூறு: ஒரே ஒரு மதிப்பு மட்டும் கொண்டது (எ.கா: பிறந்த தேதி).\n5. பல மதிப்பு பண்புக்கூறு: ஒன்றுக்கும் மேற்பட்ட மதிப்புகளைக் கொண்டது (எ.கா: தொலைபேசி எண்கள்).\n6. பெறப்பட்ட பண்புக்கூறு: பிற பண்புகளிலிருந்து கணக்கிடப்படுவது (எ.கா: பிறந்த தேதியிலிருந்து பெறப்படும் வயது).",
    isBookBack: true
  },
  {
    id: "ca12-ch3-5m-4",
    chapterNo: 3,
    chapterName: "Introduction to Database Management System",
    chapterNameTamil: "தரவுத்தள மேலாண்மை அமைப்பு ஓர் அறிமுகம்",
    marks: 5,
    type: "essay",
    questionText: "Write a note on open source software tools available in MySQL Administration.",
    questionTextTamil: "MySQL நிர்வாகத்திற்கு பயன்படும் திறந்த மூல மென்பொருள் கருவிகளைப் பற்றி குறிப்பு வரைக.",
    answer: "Open-source software tools for MySQL Administration:\n1. phpMyAdmin: Web-based GUI administration tool written in PHP, widely used for managing databases, tables, users, and SQL queries.\n2. MySQL Workbench: Visual database modeling, SQL development, and server configuration desktop tool.\n3. HeidiSQL: Lightweight Windows client for managing MySQL and MariaDB databases.\n4. DBeaver: Multi-platform database tool supporting MySQL, PostgreSQL, and SQLite.\n5. Navicat: Rich graphical interface tool for database administration and data synchronization.",
    answerTamil: "MySQL நிர்வாக திறந்த மூலக் கருவிகள்:\n1. phpMyAdmin: வலை சார்ந்த இடைமுகம் (Web-based GUI), PHP-ல் எழுதப்பட்டது, எளிதாக அட்டவணைகள், பயனர்கள் மற்றும் வினவல்களை நிர்வகிக்கப் பயன்படுகிறது.\n2. MySQL Workbench: காட்சி வடிவமைப்பு, SQL உருவாக்கம் மற்றும் சர்வர் நிர்வாகக் கருவி.\n3. HeidiSQL: எடைகுறைந்த, வேகமான விண்டோஸ் தரவுத்தள நிர்வாகக் கருவி.\n4. DBeaver: பல்வேறு இயக்க அமைப்புகளில் செயல்படும் உலகளாவிய தரவுத்தளக் கருவி.",
    isBookBack: true
  },
  {
    id: "ca12-ch3-5m-5",
    chapterNo: 3,
    chapterName: "Introduction to Database Management System",
    chapterNameTamil: "தரவுத்தள மேலாண்மை அமைப்பு ஓர் அறிமுகம்",
    marks: 5,
    type: "essay",
    questionText: "Explain the DDL command of their functions in SQL.",
    questionTextTamil: "SQL-ல் உள்ள DDL கட்டளைகள் மற்றும் அவற்றின் செயல்பாடுகளை விளக்குக.",
    answer: "DDL (Data Definition Language) commands define and manage database structure:\n1. CREATE: Creates new database objects like databases or tables.\n   Syntax: CREATE TABLE Student (id INT, name VARCHAR(50));\n2. ALTER: Modifies the existing database schema (adding, modifying, or dropping columns).\n   Syntax: ALTER TABLE Student ADD age INT;\n3. DROP: Permanently deletes a database table or database.\n   Syntax: DROP TABLE Student;\n4. TRUNCATE: Removes all records from a table while keeping the table structure intact.\n   Syntax: TRUNCATE TABLE Student;\n5. RENAME: Renames an existing table.\n   Syntax: RENAME TABLE Student TO Pupils;",
    answerTamil: "DDL (தரவு வரையறை மொழி) கட்டளைகள்:\n1. CREATE: புதிய அட்டவணை அல்லது தரவுத்தளத்தை உருவாக்க.\n   தொடரியல்: CREATE TABLE Student (id INT, name VARCHAR(50));\n2. ALTER: உள்ள அட்டவணையின் கட்டமைப்பை மாற்றியமைக்க.\n   தொடரியல்: ALTER TABLE Student ADD age INT;\n3. DROP: அட்டவணை அல்லது தரவுத்தளத்தை நிரந்தரமாக நீக்க.\n   தொடரியல்: DROP TABLE Student;\n4. TRUNCATE: அட்டவணை அமைப்பை நீக்காமல் அனைத்து பதிவுகளையும் மட்டும் அழிக்க.\n   தொடரியல்: TRUNCATE TABLE Student;",
    isBookBack: true
  }
];

const ch3_all = [...ch3_1m, ...ch3_2m, ...ch3_3m, ...ch3_5m];
fs.writeFileSync('scripts_ca12/ch3.json', JSON.stringify(ch3_all, null, 2), 'utf8');
console.log("Chapter 3 written! Total:", ch3_all.length);
