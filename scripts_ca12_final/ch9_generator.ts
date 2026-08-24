import fs from 'fs';
import { Question } from '../src/types';

// Exact Chapter 9 matching PDF: 1M: 8, 2M: 6, 3M: 3, 5M: 3 => Total 20
export const ch9Questions: Question[] = [
  // 1 Marks (8)
  {
    id: "ca12-ch9-1m-1",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1,
    type: "mcq",
    questionText: "Which is the correct function to execute the SQL queries in PHP ?",
    questionTextTamil: "PHP-யில் SQL வினவல்களை இயக்க சரியான செயற்கூறு எது?",
    options: {
      A: "mysqli_query(\"Connection Object\",\"SQL Query\")",
      B: "query(\"Connection Object\",\"SQL Query\")",
      C: "mysql_query(\"Connection Object\",\"SQL Query\")",
      D: "mysql_query(\"SQL Query\")"
    },
    optionsTamil: {
      A: "mysqli_query(\"Connection Object\",\"SQL Query\")",
      B: "query(\"Connection Object\",\"SQL Query\")",
      C: "mysql_query(\"Connection Object\",\"SQL Query\")",
      D: "mysql_query(\"SQL Query\")"
    },
    correctOption: "A",
    answer: "A) mysqli_query(\"Connection Object\",\"SQL Query\")",
    answerTamil: "A) mysqli_query(\"Connection Object\",\"SQL Query\")",
    isBookBack: true
  },
  {
    id: "ca12-ch9-1m-2",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1,
    type: "mcq",
    questionText: "Which is the correct function Closing Connection in PHP ?",
    questionTextTamil: "PHP-யில் இணைப்பை மூடுவதற்கான சரியான செயற்கூறு எது?",
    options: {
      A: "mysqli_close(\"Connection Object\");",
      B: "close(\"Connection Object\");",
      C: "mysql_close(\"Connection Object\");",
      D: "mysqli_close(\"Database Object\");"
    },
    optionsTamil: {
      A: "mysqli_close(\"Connection Object\");",
      B: "close(\"Connection Object\");",
      C: "mysql_close(\"Connection Object\");",
      D: "mysqli_close(\"Database Object\");"
    },
    correctOption: "A",
    answer: "A) mysqli_close(\"Connection Object\");",
    answerTamil: "A) mysqli_close(\"Connection Object\");",
    isBookBack: true
  },
  {
    id: "ca12-ch9-1m-3",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1,
    type: "mcq",
    questionText: "Which is the correct function to establish Connection in PHP ?",
    questionTextTamil: "PHP-யில் இணைப்பை ஏற்படுத்த சரியான செயற்கூறு எது?",
    options: {
      A: "mysqli_connect(\"Server Name \",\"User Name\",\"Password\",\"DB Name\");",
      B: "connect(\"Server Name \",\"User Name\",\"Password\",\"DB Name\");",
      C: "mysql_connect(\"Server Name \",\"User Name\",\"Password\",\"DB Name\");",
      D: "mysqli_connect (\"Database Object\");"
    },
    optionsTamil: {
      A: "mysqli_connect(\"Server Name \",\"User Name\",\"Password\",\"DB Name\");",
      B: "connect(\"Server Name \",\"User Name\",\"Password\",\"DB Name\");",
      C: "mysql_connect(\"Server Name \",\"User Name\",\"Password\",\"DB Name\");",
      D: "mysqli_connect (\"Database Object\");"
    },
    correctOption: "A",
    answer: "A) mysqli_connect(\"Server Name \",\"User Name\",\"Password\",\"DB Name\");",
    answerTamil: "A) mysqli_connect(\"Server Name \",\"User Name\",\"Password\",\"DB Name\");",
    isBookBack: true
  },
  {
    id: "ca12-ch9-1m-4",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1,
    type: "mcq",
    questionText: "Which is the not a correct MySQL Function in PHP ?",
    questionTextTamil: "PHP-யில் எது சரியான MySQL செயற்கூறு அல்ல?",
    options: {
      A: "Mysqli_connect() Function",
      B: "Mysqli_close() Function",
      C: "mysqli_select_data() Function",
      D: "mysqli_affected_rows() Function"
    },
    optionsTamil: {
      A: "Mysqli_connect() Function",
      B: "Mysqli_close() Function",
      C: "mysqli_select_data() Function",
      D: "mysqli_affected_rows() Function"
    },
    correctOption: "C",
    answer: "C) mysqli_select_data() Function",
    answerTamil: "C) mysqli_select_data() Function",
    isBookBack: true
  },
  {
    id: "ca12-ch9-1m-5",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1,
    type: "mcq",
    questionText: "How many parameter are required for MYSQLi connect function in PHP ?",
    questionTextTamil: "PHP-யில் MYSQLi connect செயற்கூறுக்கு எத்தனை அளபுருக்கள் தேவைப்படுகின்றன?",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    optionsTamil: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    correctOption: "C",
    answer: "C) 4",
    answerTamil: "C) 4 (Server Name, User Name, Password, DB Name)",
    isBookBack: true
  },
  {
    id: "ca12-ch9-1m-6",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1,
    type: "mcq",
    questionText: "How many parameter are required for MYSQLi query function in PHP ?",
    questionTextTamil: "PHP-யில் MYSQLi query செயற்கூறுக்கு எத்தனை அளபுருக்கள் தேவைப்படுகின்றன?",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    optionsTamil: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    correctOption: "A",
    answer: "A) 2",
    answerTamil: "A) 2 (Connection Object, SQL Query)",
    isBookBack: true
  },
  {
    id: "ca12-ch9-1m-7",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1,
    type: "mcq",
    questionText: "How many parameter are required for MYSQLi Close function in PHP ?",
    questionTextTamil: "PHP-யில் MYSQLi Close செயற்கூறுக்கு எத்தனை அளபுருக்கள் தேவைப்படுகின்றன?",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "5"
    },
    optionsTamil: {
      A: "1",
      B: "2",
      C: "3",
      D: "5"
    },
    correctOption: "A",
    answer: "A) 1",
    answerTamil: "A) 1 (Connection Object)",
    isBookBack: true
  },
  {
    id: "ca12-ch9-1m-8",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1,
    type: "mcq",
    questionText: "Which version of PHP supports MySQLi fuctions ?",
    questionTextTamil: "PHP-யின் எந்தப் பதிப்பு MySQLi செயற்கூறுகளை ஆதரிக்கிறது?",
    options: {
      A: "Version 2.0",
      B: "Version 3.0",
      C: "Version 4.0",
      D: "Version 5.0"
    },
    optionsTamil: {
      A: "பதிப்பு 2.0",
      B: "பதிப்பு 3.0",
      C: "பதிப்பு 4.0",
      D: "பதிப்பு 5.0"
    },
    correctOption: "D",
    answer: "D) Version 5.0",
    answerTamil: "D) பதிப்பு 5.0",
    isBookBack: true
  },
  // 2 Marks (6)
  {
    id: "ca12-ch9-2m-1",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 2,
    type: "short",
    questionText: "What are the MySQLi function available PHP?",
    questionTextTamil: "PHP-யில் உள்ள MySQLi செயற்கூறுகள் யாவை?",
    answer: "Common MySQLi functions available in PHP include:\n1. mysqli_connect() - Opens a new connection to MySQL server\n2. mysqli_close() - Closes an open database connection\n3. mysqli_query() - Performs a query against the database\n4. mysqli_affected_rows() - Returns number of affected rows\n5. mysqli_error() - Returns last error description.",
    answerTamil: "PHP-யில் உள்ள முக்கிய MySQLi செயற்கூறுகள்:\n1. mysqli_connect() - MySQL சேவையகத்துடன் புதிய இணைப்பைத் திறக்க\n2. mysqli_close() - திறந்த தரவுத்தள இணைப்பை மூட\n3. mysqli_query() - தரவுத்தளத்தில் SQL வினவலை இயக்க\n4. mysqli_affected_rows() - பாதிக்கப்பட்ட வரிசைகளின் எண்ணிக்கையைத் தர\n5. mysqli_error() - பிழை விவரத்தைத் தர.",
    isBookBack: true
  },
  {
    id: "ca12-ch9-2m-2",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 2,
    type: "short",
    questionText: "What is MySQLi function?",
    questionTextTamil: "MySQLi செயற்கூறு என்றால் என்ன?",
    answer: "MySQLi (MySQL Improved) is an extension in PHP 5.0 and above that provides improved procedural and object-oriented interfaces to access and interact with MySQL databases.",
    answerTamil: "MySQLi (MySQL Improved) என்பது PHP 5.0 மற்றும் அதற்கு மேற்பட்ட பதிப்புகளில் MySQL தரவுத்தளத்தை அணுக மற்றும் தொடர்பு கொள்ள உதவும் மேம்படுத்தப்பட்ட செயற்கூறுகளின் தொகுப்பாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch9-2m-3",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 2,
    type: "short",
    questionText: "What are the types MySQLi function available PHP?",
    questionTextTamil: "PHP-யில் கிடைக்கும் MySQLi செயற்கூறுகளின் வகைகள் யாவை?",
    answer: "MySQLi functions are broadly categorized into:\n1. Database Connection Management functions (mysqli_connect, mysqli_close)\n2. Query Execution functions (mysqli_query)\n3. Result Handling functions (mysqli_fetch_assoc, mysqli_num_rows)\n4. Error Reporting functions (mysqli_connect_error, mysqli_error).",
    answerTamil: "MySQLi செயற்கூறுகளின் வகைகள்:\n1. தரவுத்தள இணைப்பு மேலாண்மை செயற்கூறுகள் (mysqli_connect, mysqli_close)\n2. வினவல் செயலாக்கச் செயற்கூறுகள் (mysqli_query)\n3. முடிவுக் கையாளுதல் செயற்கூறுகள் (mysqli_fetch_assoc, mysqli_num_rows)\n4. பிழை கண்டறியும் செயற்கூறுகள் (mysqli_connect_error, mysqli_error).",
    isBookBack: true
  },
  {
    id: "ca12-ch9-2m-4",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 2,
    type: "short",
    questionText: "Difference between Connection and Close function?",
    questionTextTamil: "இணைப்பு (Connection) மற்றும் மூடும் (Close) செயற்கூறுகளுக்கு இடையேயான வேறுபாடு யாது?",
    answer: "1. Connection Function (`mysqli_connect`): Establishes and opens an active channel between the PHP web server and MySQL database server using server credentials.\n\n2. Close Function (`mysqli_close`): Terminates the active connection channel and frees allocated server memory resources.",
    answerTamil: "1. இணைப்புச் செயற்கூறு (`mysqli_connect`): PHP வலை சேவையகத்திற்கும் MySQL தரவுத்தளத்திற்கும் இடையே புதிய தொடர்பு இணைப்பை உருவாக்குகிறது.\n\n2. மூடும் செயற்கூறு (`mysqli_close`): ஏற்கனவே இயங்கும் தரவுத்தள இணைப்பைத் துண்டித்து நினைவகத்தை விடுவிக்கிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch9-2m-5",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 2,
    type: "short",
    questionText: "Give few examples of MySQLi Queries.",
    questionTextTamil: "MySQLi வினவல்களுக்கு சில எடுத்துக்காட்டுகள் தருக.",
    answer: "Examples of MySQLi Queries in PHP:\n1. Select Query:\n`$sql = \"SELECT * FROM Student;\";`\n\n2. Insert Query:\n`$sql = \"INSERT INTO Student (name, mark) VALUES ('Ramu', 95);\";`\n\n3. Update Query:\n`$sql = \"UPDATE Student SET mark=98 WHERE name='Ramu';\";`",
    answerTamil: "PHP-யில் MySQLi வினவல்களின் எடுத்துக்காட்டுகள்:\n1. தேர்ந்தெடுக்கும் வினவல்: `$sql = \"SELECT * FROM Student;\";`\n2. சேர்த்தல் வினவல்: `$sql = \"INSERT INTO Student (name, mark) VALUES ('Ramu', 95);\";`\n3. புதுப்பித்தல் வினவல்: `$sql = \"UPDATE Student SET mark=98 WHERE name='Ramu';\";`",
    isBookBack: true
  },
  {
    id: "ca12-ch9-2m-6",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 2,
    type: "short",
    questionText: "What is Connection string?",
    questionTextTamil: "இணைப்பு சரம் (Connection string) என்றால் என்ன?",
    answer: "A connection string contains the necessary configuration parameters (Server Name, Username, Password, Database Name, Port) required by PHP to establish a secure database connection with MySQL Server.",
    answerTamil: "இணைப்புச் சரம் என்பது PHP மற்றும் MySQL சேவையகத்திற்கு இடையே பாதுகாப்பான இணைப்பை நிறுவத் தேவையான அளவுருக்களைக் (சேவையகப் பெயர், பயனர் பெயர், கடவுச்சொல், தரவுத்தளப் பெயர்) கொண்ட தொடராகும்.",
    isBookBack: true
  },
  // 3 Marks (3)
  {
    id: "ca12-ch9-3m-1",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 3,
    type: "brief",
    questionText: "Write the Syntax for MySQLi Queries.",
    questionTextTamil: "MySQLi வினவல்களுக்கான தொடரியலை (Syntax) எழுதுக.",
    answer: "Syntax for executing MySQLi Queries in PHP:\n\n`mysqli_query($connection_object, \"SQL Query Statement\");`\n\nParameters:\n- `$connection_object`: The connection variable returned by mysqli_connect().\n- `SQL Query Statement`: The SQL command string (SELECT, INSERT, UPDATE, DELETE).",
    answerTamil: "PHP-யில் MySQLi வினவலை இயக்குவதற்கான தொடரியல்:\n\n`mysqli_query($connection_object, \"SQL Query Statement\");`\n\nஅளபுருக்கள்:\n- `$connection_object`: mysqli_connect() மூலம் உருவாக்கப்பட்ட இணைப்பு மாறி.\n- `SQL Query Statement`: இயக்கப்பட வேண்டிய SQL கட்டளைச் சரம் (SELECT, INSERT போன்றவை).",
    isBookBack: true
  },
  {
    id: "ca12-ch9-3m-2",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 3,
    type: "brief",
    questionText: "Write is the purpose of MySQLi function available.",
    questionTextTamil: "கிடைக்கக்கூடிய MySQLi செயற்கூறுகளின் நோக்கம் யாது?",
    answer: "The purposes of MySQLi functions are:\n1. To connect PHP server applications seamlessly with MySQL relational database systems.\n2. To execute CRUD (Create, Read, Update, Delete) database operations reliably.\n3. To handle transaction security, SQL error detection, and multi-query processing efficiently.",
    answerTamil: "MySQLi செயற்கூறுகளின் நோக்கங்கள்:\n1. PHP பயன்பாடுகளை MySQL தரவுத்தள அமைப்புகளுடன் எளிதாக இணைக்க.\n2. தரவுத்தளத்தில் CRUD (உருவாக்குதல், படித்தல், புதுப்பித்தல், நீக்குதல்) செயல்பாடுகளை பாதுகாப்பாக இயக்க.\n3. பரிவர்த்தனை பாதுகாப்பு மற்றும் பிழைகளைக் கையாளுதல் ஆகியவற்றை திறம்பட நிர்வகிக்க.",
    isBookBack: true
  },
  {
    id: "ca12-ch9-3m-3",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 3,
    type: "brief",
    questionText: "Write MySQL Connection Syntax with example.",
    questionTextTamil: "MySQL இணைப்புக்கான தொடரியலை எடுத்துக்காட்டுடன் எழுதுக.",
    answer: "Syntax:\n`$conn = mysqli_connect(\"servername\", \"username\", \"password\", \"dbname\");`\n\nExample:\n```php\n<?php\n$servername = \"localhost\";\n$username = \"root\";\n$password = \"\";\n$dbname = \"school_db\";\n\n$conn = mysqli_connect($servername, $username, $password, $dbname);\nif (!$conn) {\n  die(\"Connection failed: \" . mysqli_connect_error());\n}\necho \"Connected successfully\";\n?>\n```",
    answerTamil: "தொடரியல்:\n`$conn = mysqli_connect(\"servername\", \"username\", \"password\", \"dbname\");`\n\nஎடுத்துக்காட்டு:\n```php\n<?php\n$servername = \"localhost\";\n$username = \"root\";\n$password = \"\";\n$dbname = \"school_db\";\n\n$conn = mysqli_connect($servername, $username, $password, $dbname);\nif (!$conn) {\n  die(\"இணைப்பு தோல்வி: \" . mysqli_connect_error());\n}\necho \"இணைப்பு வெற்றிகரமாக முடிந்தது\";\n?>\n```",
    isBookBack: true
  },
  // 5 Marks (3)
  {
    id: "ca12-ch9-5m-1",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 5,
    type: "essay",
    questionText: "Discuss in detail about MySQL functions with example.",
    questionTextTamil: "MySQL செயற்கூறுகள் பற்றி எடுத்துக்காட்டுடன் விரிவாக விவாதிக்கவும்.",
    answer: "Key MySQLi functions in PHP:\n\n1. `mysqli_connect()`:\nOpens a connection to the MySQL server.\nSyntax: `mysqli_connect(host, user, password, database);`\n\n2. `mysqli_query()`:\nExecutes an SQL query against the database.\nSyntax: `mysqli_query($conn, $sql);`\n\n3. `mysqli_fetch_assoc()`:\nFetches a result row as an associative array.\n\n4. `mysqli_num_rows()`:\nReturns the total number of rows present in a result set.\n\n5. `mysqli_close()`:\nCloses an open MySQL database connection.\nSyntax: `mysqli_close($conn);`",
    answerTamil: "PHP-யில் உள்ள முக்கிய MySQLi செயற்கூறுகள்:\n\n1. `mysqli_connect()`: MySQL தரவுத்தளத்துடன் இணைப்பை ஏற்படுத்துகிறது.\nதொடரியல்: `mysqli_connect(host, user, password, database);`\n\n2. `mysqli_query()`: குறிப்பிட்ட SQL வினவலை இயக்குகிறது.\nதொடரியல்: `mysqli_query($conn, $sql);`\n\n3. `mysqli_fetch_assoc()`: பெறப்பட்ட முடிவுகளை தொடர்பு அணிகளாக வரிசைப்படுத்துகிறது.\n\n4. `mysqli_num_rows()`: வினவல் முடிவில் உள்ள மொத்த வரிசைகளின் எண்ணிக்கையைத் தருகிறது.\n\n5. `mysqli_close()`: இயங்கிக் கொண்டிருக்கும் தரவுத்தள இணைப்பை மூடுகிறது.\nதொடரியல்: `mysqli_close($conn);`",
    isBookBack: true
  },
  {
    id: "ca12-ch9-5m-2",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 5,
    type: "essay",
    questionText: "Explain in details types of MySQL connection method in PHP.",
    questionTextTamil: "PHP-யில் MySQL இணைப்பு முறைகளின் வகைகளை விரிவாக விளக்குக.",
    answer: "There are three primary methods to connect PHP to MySQL databases:\n\n1. MySQL Extension (Legacy):\n- Original procedural extension (`mysql_connect`).\n- Deprecated in PHP 5.5 and completely removed in PHP 7.0 due to security vulnerabilities.\n\n2. MySQLi (MySQL Improved) Extension:\n- Works exclusively with MySQL databases.\n- Supports both Object-Oriented (OO) and Procedural programming paradigms.\n- Supports prepared statements and enhanced security against SQL injections.\n\n3. PDO (PHP Data Objects):\n- Universal database abstraction layer supporting 12+ different database systems (MySQL, Oracle, PostgreSQL, SQLite).\n- Fully Object-Oriented and highly portable.",
    answerTamil: "PHP மற்றும் MySQL இணைப்பில் மூன்று முக்கிய முறைகள் உள்ளன:\n\n1. MySQL நீட்டிப்பு (பழைய முறை):\n- `mysql_connect()` போன்ற பழைய செயற்கூறுகள்.\n- பாதுகாப்பு காரணங்களுக்காக PHP 7.0-ல் முழுமையாக நீக்கப்பட்டது.\n\n2. MySQLi (MySQL Improved) நீட்டிப்பு:\n- MySQL தரவுத்தளத்திற்கு மட்டுமே பிரத்யேகமானது.\n- செயல்முறை (Procedural) மற்றும் பொருள்நோக்கு (Object-Oriented) ஆகிய இரு முறைகளையும் ஆதரிக்கிறது.\n- அதிக பாதுகாப்பு மற்றும் விரைவான செயலாக்கம் கொண்டது.\n\n3. PDO (PHP Data Objects):\n- 12-க்கும் மேற்பட்ட பல்வேறு தரவுத்தளங்களை (MySQL, Oracle, PostgreSQL) ஆதரிக்கும் உலகளாவிய முறை.\n- முழுமையான பொருள்நோக்கு அணுகுமுறை கொண்டது.",
    isBookBack: true
  },
  {
    id: "ca12-ch9-5m-3",
    chapterNo: 9,
    chapterName: "Connecting PHP and MYSQL",
    chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 5,
    type: "essay",
    questionText: "Explain MySQLi Queries with examples.",
    questionTextTamil: "MySQLi வினவல்களை எடுத்துக்காட்டுகளுடன் விளக்குக.",
    answer: "MySQLi Queries allow PHP scripts to perform complete database operations:\n\n1. Database Connection:\n`$conn = mysqli_connect(\"localhost\", \"root\", \"\", \"SchoolDB\");`\n\n2. INSERT Query:\n```php\n$sql = \"INSERT INTO Students (name, marks) VALUES ('Kavitha', 98)\";\nif (mysqli_query($conn, $sql)) {\n    echo \"New record created successfully\";\n}\n```\n\n3. SELECT Query:\n```php\n$sql = \"SELECT id, name, marks FROM Students\";\n$result = mysqli_query($conn, $sql);\nwhile($row = mysqli_fetch_assoc($result)) {\n    echo \"ID: \" . $row[\"id\"]. \" - Name: \" . $row[\"name\"]. \"<br>\";\n}\n```\n\n4. Closing Connection:\n`mysqli_close($conn);`",
    answerTamil: "MySQLi வினவல்கள் PHP மூலம் தரவுத்தள செயல்பாடுகளைச் செய்யப் பயன்படுகின்றன:\n\n1. இணைப்பு நிறுவுதல்:\n`$conn = mysqli_connect(\"localhost\", \"root\", \"\", \"SchoolDB\");`\n\n2. புதிய தரவைச் சேர்த்தல் (INSERT):\n```php\n$sql = \"INSERT INTO Students (name, marks) VALUES ('Kavitha', 98)\";\nmysqli_query($conn, $sql);\n```\n\n3. தரவைத் தேர்ந்தெடுத்தல் (SELECT):\n```php\n$sql = \"SELECT id, name, marks FROM Students\";\n$result = mysqli_query($conn, $sql);\nwhile($row = mysqli_fetch_assoc($result)) {\n    echo \"பெயர்: \" . $row[\"name\"]. \" மதிப்பெண்: \" . $row[\"marks\"];\n}\n```\n\n4. இணைப்பை மூடுதல்:\n`mysqli_close($conn);`",
    isBookBack: true
  }
];

fs.writeFileSync('scripts_ca12_final/ch9.json', JSON.stringify(ch9Questions, null, 2), 'utf8');
console.log('Chapter 9 updated successfully! Count:', ch9Questions.length);
