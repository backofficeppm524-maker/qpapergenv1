import fs from 'fs';
import { Question } from '../src/types';

// ==========================================
// CHAPTER 8: Forms and Files (10 1M, 5 2M, 3 3M, 2 5M = 20)
// ==========================================
export const ch8_questions: Question[] = [
  // 1M (10)
  {
    id: "ca12-ch8-1m-1", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 1, type: "mcq", questionText: "What are HTML forms used for?",
    questionTextTamil: "HTML படிவங்கள் எதற்காகப் பயன்படுகின்றன?",
    options: {
      A: "To collect user input and send it to the server",
      B: "To display images and multimedia content",
      C: "To format and style web pages",
      D: "To create database tables"
    },
    optionsTamil: {
      A: "பயனர் உள்ளீட்டை சேகரித்து சேவையகத்திற்கு அனுப்ப",
      B: "படங்கள் மற்றும் பல்லூடக உள்ளடக்கத்தைக் காட்ட",
      C: "வலைப்பக்கங்களை வடிவமைக்க",
      D: "தரவுத்தள அட்டவணைகளை உருவாக்க"
    },
    correctOption: "A", answer: "A) To collect user input and send it to the server", answerTamil: "A) பயனர் உள்ளீட்டை சேகரித்து சேவையகத்திற்கு அனுப்ப", isBookBack: true
  },
  {
    id: "ca12-ch8-1m-2", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 1, type: "mcq", questionText: "Which of the following is NOT a form control available in HTML forms?",
    questionTextTamil: "பின்வருவனவற்றுள் எது HTML படிவங்களில் உள்ள படிவக் கட்டுப்பாடு அல்ல?",
    options: { A: "Text input", B: "Checkbox", C: "Database connection", D: "Radio button" },
    optionsTamil: { A: "உரை உள்ளீடு (Text input)", B: "சரிபார்ப்புப் பெட்டி (Checkbox)", C: "தரவுத்தள இணைப்பு (Database connection)", D: "ரேடியோ பொத்தான் (Radio button)" },
    correctOption: "C", answer: "C) Database connection", answerTamil: "C) தரவுத்தள இணைப்பு (Database connection)", isBookBack: true
  },
  {
    id: "ca12-ch8-1m-3", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 1, type: "mcq", questionText: "Which tag is used to create an HTML form?",
    questionTextTamil: "HTML படிவத்தை உருவாக்க எந்த ஒட்டு பயன்படுகிறது?",
    options: { A: "<form>", B: "<input>", C: "<textarea>", D: "<select>" },
    optionsTamil: { A: "<form>", B: "<input>", C: "<textarea>", D: "<select>" },
    correctOption: "A", answer: "A) <form>", answerTamil: "A) <form>", isBookBack: true
  },
  {
    id: "ca12-ch8-1m-4", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 1, type: "mcq", questionText: "What form control allows the user to select multiple values?",
    questionTextTamil: "பயனர் பல மதிப்புகளைத் தேர்ந்தெடுக்க அனுமதிக்கும் படிவக் கட்டுப்பாடு எது?",
    options: { A: "Radio button", B: "Checkbox", C: "Text input", D: "Password input" },
    optionsTamil: { A: "ரேடியோ பொத்தான்", B: "சரிபார்ப்புப் பெட்டி (Checkbox)", C: "உரை உள்ளீடு", D: "கடவுச்சொல் உள்ளீடு" },
    correctOption: "B", answer: "B) Checkbox", answerTamil: "B) சரிபார்ப்புப் பெட்டி (Checkbox)", isBookBack: true
  },
  {
    id: "ca12-ch8-1m-5", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 1, type: "mcq", questionText: "What form control allows the user to select only one value at a time?",
    questionTextTamil: "பயனர் ஒரே நேரத்தில் ஒரு மதிப்பை மட்டுமே தேர்ந்தெடுக்க அனுமதிக்கும் படிவக் கட்டுப்பாடு எது?",
    options: { A: "Radio button", B: "Checkbox", C: "Text input", D: "Password input" },
    optionsTamil: { A: "ரேடியோ பொத்தான் (Radio button)", B: "சரிபார்ப்புப் பெட்டி", C: "உரை உள்ளீடு", D: "கடவுச்சொல் உள்ளீடு" },
    correctOption: "A", answer: "A) Radio button", answerTamil: "A) ரேடியோ பொத்தான் (Radio button)", isBookBack: true
  },
  {
    id: "ca12-ch8-1m-6", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 1, type: "mcq", questionText: "What is the purpose of validation in PHP?",
    questionTextTamil: "PHP-ல் சரிபார்த்தலின் (Validation) நோக்கம் என்ன?",
    options: {
      A: "To ensure user input is correct, safe, and complete",
      B: "To format and style user input",
      C: "To store user input in a database",
      D: "To send user input to the client"
    },
    optionsTamil: {
      A: "பயனர் உள்ளீடு சரியானது, பாதுகாப்பானது மற்றும் முழுமையானது என்பதை உறுதிப்படுத்த",
      B: "உள்ளீட்டை வடிவமைக்க",
      C: "உள்ளீட்டை தரவுத்தளத்தில் சேமிக்க",
      D: "பயனர் உள்ளீட்டை கிளையண்டிற்கு அனுப்ப"
    },
    correctOption: "A", answer: "A) To ensure user input is correct, safe, and complete", answerTamil: "A) பயனர் உள்ளீடு சரியானது, பாதுகாப்பானது மற்றும் முழுமையானது என்பதை உறுதிப்படுத்த", isBookBack: true
  },
  {
    id: "ca12-ch8-1m-7", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 1, type: "mcq", questionText: "How many types of validation are available in PHP?",
    questionTextTamil: "PHP-ல் எத்தனை வகையான சரிபார்த்தல்கள் உள்ளன?",
    options: { A: "1", B: "2", C: "3", D: "4" },
    optionsTamil: { A: "1", B: "2 (கிளையண்ட் பக்கம் & சேவையக பக்கம்)", C: "3", D: "4" },
    correctOption: "B", answer: "B) 2", answerTamil: "B) 2", isBookBack: true
  },
  {
    id: "ca12-ch8-1m-8", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 1, type: "mcq", questionText: "Which PHP function can be used to open a file?",
    questionTextTamil: "கோப்பைத் திறக்க எந்த PHP செயற்கூறு பயன்படுகிறது?",
    options: { A: "fopen()", B: "file_open()", C: "open_file()", D: "readfile()" },
    optionsTamil: { A: "fopen()", B: "file_open()", C: "open_file()", D: "readfile()" },
    correctOption: "A", answer: "A) fopen()", answerTamil: "A) fopen()", isBookBack: true
  },
  {
    id: "ca12-ch8-1m-9", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 1, type: "mcq", questionText: "What PHP function can be used to read a file?",
    questionTextTamil: "கோப்பைப் படிக்க எந்த PHP செயற்கூறு பயன்படுகிறது?",
    options: { A: "fread()", B: "file_read()", C: "read_file()", D: "fopen()" },
    optionsTamil: { A: "fread()", B: "file_read()", C: "read_file()", D: "fopen()" },
    correctOption: "A", answer: "A) fread()", answerTamil: "A) fread()", isBookBack: true
  },
  {
    id: "ca12-ch8-1m-10", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 1, type: "mcq", questionText: "What PHP function can be used to close a file?",
    questionTextTamil: "கோப்பை மூட எந்த PHP செயற்கூறு பயன்படுகிறது?",
    options: { A: "fclose()", B: "file_close()", C: "close_file()", D: "endfile()" },
    optionsTamil: { A: "fclose()", B: "file_close()", C: "close_file()", D: "endfile()" },
    correctOption: "A", answer: "A) fclose()", answerTamil: "A) fclose()", isBookBack: true
  },
  // 2M (5)
  {
    id: "ca12-ch8-2m-1", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 2, type: "short", questionText: "What is the main objective of PHP and HTML form controls?",
    questionTextTamil: "PHP மற்றும் HTML படிவக் கட்டுப்பாடுகளின் முக்கிய நோக்கம் என்ன?",
    answer: "The main objective is to collect data entered by the user on the client side (web browser) and send it securely to the server side for processing, storage, or validation.",
    answerTamil: "பயனர் உள்ளீடு செய்யும் தரவுகளை கிளையண்ட் பகுதியில் (உலாவி) சேகரித்து, செயலாக்கம் மற்றும் சரிபார்த்தலுக்காக சேவையகத்திற்கு பாதுகாப்பாக அனுப்புவதே இதன் முக்கிய நோக்கமாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch8-2m-2", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 2, type: "short", questionText: "What are the basic HTML form controls available?",
    questionTextTamil: "அடிப்படை HTML படிவக் கட்டுப்பாடுகள் யாவை?",
    answer: "Basic HTML form controls:\n1. Text Input\n2. Password Input\n3. Checkbox\n4. Radio Button\n5. Textarea\n6. Select / Dropdown List\n7. Submit & Reset Buttons.",
    answerTamil: "அடிப்படை HTML படிவக் கட்டுப்பாடுகள்:\n1. உரை உள்ளீடு (Text box)\n2. கடவுச்சொல் (Password)\n3. சரிபார்ப்புப் பெட்டி (Checkbox)\n4. ரேடியோ பொத்தான் (Radio button)\n5. பலவரி உரைப் பெட்டி (Textarea)\n6. கீழிறங்கு பட்டியல் (Select/Dropdown)\n7. சமர்ப்பிப்புப் பொத்தான் (Submit button).",
    isBookBack: true
  },
  {
    id: "ca12-ch8-2m-3", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 2, type: "short", questionText: "How are data collected via HTML form controls sent to the server?",
    questionTextTamil: "HTML படிவக் கட்டுப்பாடுகள் மூலம் பெறப்பட்ட தரவுகள் சேவையகத்திற்கு எவ்வாறு அனுப்பப்படுகின்றன?",
    answer: "Data is sent to the server via HTTP request methods specified in the `<form>` tag's `method` attribute, primarily using either the `GET` method or the `POST` method.",
    answerTamil: "படிவத்தில் உள்ள தரவுகள் `<form>` ஒட்டின் `method` பண்புக்கூறில் குறிப்பிடப்படும் `GET` அல்லது `POST` முறைகளின் மூலம் சேவையகத்திற்கு அனுப்பப்படுகின்றன.",
    isBookBack: true
  },
  {
    id: "ca12-ch8-2m-4", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 2, type: "short", questionText: "What is Validation in PHP?",
    questionTextTamil: "PHP-ல் சரிபார்த்தல் (Validation) என்றால் என்ன?",
    answer: "Validation is the process of checking input data submitted by the user to ensure it is correct, properly formatted, within valid ranges, and safe before processing or storing in a database.",
    answerTamil: "சரிபார்த்தல் என்பது பயனர் சமர்ப்பித்த உள்ளீட்டுத் தரவுகள் சரியான வடிவமைப்பு, வரம்பு மற்றும் பாதுகாப்பான முறையில் உள்ளனவா என்பதை செயலாக்குவதற்கு முன் உறுதிப்படுத்தும் செயல்முறையாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch8-2m-5", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 2, type: "short", questionText: "What are the two types of validation available in PHP?",
    questionTextTamil: "PHP-ல் கிடைக்கும் இரண்டு வகையான சரிபார்த்தல்கள் யாவை?",
    answer: "The two types of validation are:\n1. Client-Side Validation: Performed on the browser using HTML5 attributes or JavaScript.\n2. Server-Side Validation: Performed on the web server using PHP scripts after form submission.",
    answerTamil: "சரிபார்த்தலின் இரண்டு வகைகள்:\n1. கிளையண்ட் பக்க சரிபார்த்தல் (Client-Side Validation): HTML5/JavaScript மூலம் உலாவியிலேயே செய்யப்படுகிறது.\n2. சேவையக பக்க சரிபார்த்தல் (Server-Side Validation): PHP குறிமுறை மூலம் வலை சேவையகத்தில் செய்யப்படுகிறது.",
    isBookBack: true
  },
  // 3M (3)
  {
    id: "ca12-ch8-3m-1", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 3, type: "brief", questionText: "Explain the difference between checkbox and radio button in HTML forms.",
    questionTextTamil: "HTML படிவங்களில் சரிபார்ப்புப் பெட்டி (Checkbox) மற்றும் ரேடியோ பொத்தான் (Radio button) இடையேயான வேறுபாடுகளை விளக்குக.",
    answer: "1. Radio Button: Allows the user to select only ONE option from a given group of mutually exclusive options.\n2. Checkbox: Allows the user to select MULTIPLE options (zero, one, or more) simultaneously from a group.",
    answerTamil: "1. ரேடியோ பொத்தான்: கொடுக்கப்பட்ட பல தேர்வுகளில் இருந்து ஒரே ஒரு தேர்வை மட்டுமே தேர்ந்தெடுக்க அனுமதிக்கிறது.\n2. சரிபார்ப்புப் பெட்டி: ஒன்று அல்லது அதற்கு மேற்பட்ட பல தேர்வுகளை ஒரே நேரத்தில் தேர்ந்தெடுக்க அனுமதிக்கிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch8-3m-2", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 3, type: "brief", questionText: "Explain the difference between the POST method and GET method of sending data to the server in PHP.",
    questionTextTamil: "PHP-ல் சேவையகத்திற்கு தரவை அனுப்பும் GET மற்றும் POST முறைகளுக்கு இடையேயான வேறுபாடுகளை விளக்குக.",
    answer: "1. GET Method:\n- Form data is appended to the URL as query parameters visible in the address bar.\n- Has length limits (~2048 characters).\n- Not secure for sensitive data like passwords.\n\n2. POST Method:\n- Form data is sent inside the HTTP request body invisible in URL.\n- No data size limit.\n- Secure for passwords and file uploads.",
    answerTamil: "1. GET முறை: தரவுகள் முகவரிப் பட்டியில் (URL) வெளிப்படையாகத் தெரியும்; குறைந்த அளவு தரவை மட்டுமே அனுப்ப முடியும்; கடவுச்சொற்களுக்கு பாதுகாப்பற்றது.\n2. POST முறை: தரவுகள் HTTP கோரிக்கையின் உடற்பகுதியில் மறைமுகமாக அனுப்பப்படும்; அளவு வரம்பு இல்லை; கடவுச்சொல் மற்றும் கோப்பு பதிவேற்றத்திற்கு பாதுகாப்பானது.",
    isBookBack: true
  },
  {
    id: "ca12-ch8-3m-3", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 3, type: "brief", questionText: "What are the different file handling tasks that can be performed using PHP?",
    questionTextTamil: "PHP-ஐப் பயன்படுத்தி செய்யக்கூடிய பல்வேறு கோப்புக் கையாளுதல் பணிகள் யாவை?",
    answer: "Key file handling tasks in PHP:\n1. Opening a file (`fopen()`)\n2. Reading from a file (`fread()`, `fgets()`)\n3. Writing / Appending to a file (`fwrite()`)\n4. Closing an opened file (`fclose()`)\n5. Uploading files to the server\n6. Deleting or renaming files (`unlink()`, `rename()`).",
    answerTamil: "PHP கோப்புக் கையாளுதல் பணிகள்:\n1. கோப்பைத் திறத்தல் (`fopen()`)\n2. கோப்பைப் படித்தல் (`fread()`, `fgets()`)\n3. கோப்பில் எழுதுதல் (`fwrite()`)\n4. கோப்பை மூடுதல் (`fclose()`)\n5. கோப்புகளைப் பதிவேற்றுதல்\n6. கோப்பை நீக்குதல் அல்லது பெயர் மாற்றுதல்.",
    isBookBack: true
  },
  // 5M (2)
  {
    id: "ca12-ch8-5m-1", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 5, type: "essay", questionText: "Discuss in detail about HTML form controls.",
    questionTextTamil: "HTML படிவக் கட்டுப்பாடுகள் பற்றி விரிவாக விவாதிக்கவும்.",
    answer: "HTML Form Controls in Detail:\n\n1. Text Input (`<input type=\"text\">`): Single-line text input for names, emails, etc.\n2. Password Field (`<input type=\"password\">`): Masks characters entered on screen.\n3. Radio Buttons (`<input type=\"radio\">`): Mutually exclusive selection from a group.\n4. Checkboxes (`<input type=\"checkbox\">`): Multiple choice selection.\n5. Textarea (`<textarea>`): Multi-line text input for comments or addresses.\n6. Select Box / Dropdown (`<select>` and `<option>`): Drop-down list of choices.\n7. File Upload (`<input type=\"file\">`): Allows selecting files to upload to server.\n8. Buttons (`<input type=\"submit\">`, `<input type=\"reset\">`, `<button>`): Submits or clears form data.",
    answerTamil: "HTML படிவக் கட்டுப்பாடுகள் விரிவான விளக்கம்:\n\n1. உரை உள்ளீடு (Text box): ஒற்றை வரி உரையை உள்ளிட.\n2. கடவுச்சொல் (Password): உள்ளிடும் எழுத்துக்களை மறைத்து உள்ளிட.\n3. ரேடியோ பொத்தான் (Radio button): பல தேர்வுகளில் ஒன்றை மட்டும் தேர்ந்தெடுக்க.\n4. சரிபார்ப்புப் பெட்டி (Checkbox): பல தேர்வுகளை தேர்ந்தெடுக்க.\n5. பலவரி உரைப் பெட்டி (Textarea): முகவரி, கருத்துக்கள் உள்ளிட.\n6. கீழிறங்கு பட்டியல் (Select Box): பட்டியலில் இருந்து தெரிவு செய்ய.\n7. கோப்பு பதிவேற்றம் (File Upload): கணினியிலிருந்து கோப்புகளைத் தேர்வு செய்து பதிவேற்ற.\n8. சமர்ப்பி பொத்தான் (Submit): தரவுகளை சேவையகத்திற்கு அனுப்ப.",
    isBookBack: true
  },
  {
    id: "ca12-ch8-5m-2", chapterNo: 8, chapterName: "Forms and Files", chapterNameTamil: "படிவங்கள் மற்றும் கோப்புகள்",
    marks: 5, type: "essay", questionText: "Explain in detail of File handling functions in PHP.",
    questionTextTamil: "PHP-ல் உள்ள கோப்புக் கையாளுதல் செயற்கூறுகளை விரிவாக விளக்குக.",
    answer: "PHP File Handling Functions:\n\n1. `fopen($filename, $mode)`: Opens a file in read ('r'), write ('w'), append ('a'), or read/write ('r+', 'w+', 'a+') mode.\n2. `fread($handle, $length)`: Reads up to `$length` bytes from an open file.\n3. `fwrite($handle, $string)`: Writes data to an open file.\n4. `fclose($handle)`: Closes an open file handle to free memory resources.\n5. `fgets($handle)`: Reads a single line from the file pointer.\n6. `feof($handle)`: Checks whether the file pointer is at the End-Of-File (EOF).\n7. `file_get_contents($filename)`: Reads entire file into a string.\n8. `unlink($filename)`: Deletes a specified file from the server filesystem.",
    answerTamil: "PHP கோப்புக் கையாளுதல் செயற்கூறுகள்:\n\n1. `fopen()`: கோப்பை படிக்க ('r'), எழுத ('w') அல்லது சேர்க்க ('a') திறக்கப் பயன்படுகிறது.\n2. `fread()`: திறந்த கோப்பிலிருந்து குறிப்பிட்ட அளவு தரவைப் படிக்கிறது.\n3. `fwrite()`: கோப்பில் புதிய தரவை எழுதப் பயன்படுகிறது.\n4. `fclose()`: கோப்பை மூடி நினைவகத்தை விடுவிக்கிறது.\n5. `fgets()`: கோப்பிலிருந்து ஒரு வரியை மட்டும் படிக்கிறது.\n6. `feof()`: கோப்பின் இறுதி (EOF) வந்துவிட்டதா என சரிபார்க்கிறது.\n7. `file_get_contents()`: முழு கோப்பையும் ஒரே சரமாகப் படிக்கிறது.\n8. `unlink()`: சேவையகத்தில் உள்ள கோப்பை நீக்குகிறது.",
    isBookBack: true
  }
];

// ==========================================
// CHAPTER 9: Connecting PHP and MYSQL (8 1M, 6 2M, 3 3M, 3 5M = 20)
// ==========================================
export const ch9_questions: Question[] = [
  // 1M (8)
  {
    id: "ca12-ch9-1m-1", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1, type: "mcq", questionText: "Which is the correct function to execute the SQL queries in PHP ?",
    questionTextTamil: "PHP-ல் SQL வினவல்களை இயக்க சரியான செயற்கூறு எது?",
    options: { A: "mysqli_query()", B: "mysqli_connect()", C: "mysqli_close()", D: "mysqli_run()" },
    optionsTamil: { A: "mysqli_query()", B: "mysqli_connect()", C: "mysqli_close()", D: "mysqli_run()" },
    correctOption: "A", answer: "A) mysqli_query()", answerTamil: "A) mysqli_query()", isBookBack: true
  },
  {
    id: "ca12-ch9-1m-2", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1, type: "mcq", questionText: "Which is the correct function Closing Connection in PHP ?",
    questionTextTamil: "PHP-ல் தரவுத்தள இணைப்பை மூட சரியான செயற்கூறு எது?",
    options: { A: "mysqli_close()", B: "mysqli_connect()", C: "mysqli_query()", D: "mysqli_end()" },
    optionsTamil: { A: "mysqli_close()", B: "mysqli_connect()", C: "mysqli_query()", D: "mysqli_end()" },
    correctOption: "A", answer: "A) mysqli_close()", answerTamil: "A) mysqli_close()", isBookBack: true
  },
  {
    id: "ca12-ch9-1m-3", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1, type: "mcq", questionText: "Which is the correct function to establish Connection in PHP ?",
    questionTextTamil: "PHP-ல் MySQL தரவுத்தளத்துடன் இணைப்பை ஏற்படுத்த சரியான செயற்கூறு எது?",
    options: { A: "mysqli_connect()", B: "mysqli_close()", C: "mysqli_query()", D: "mysqli_open()" },
    optionsTamil: { A: "mysqli_connect()", B: "mysqli_close()", C: "mysqli_query()", D: "mysqli_open()" },
    correctOption: "A", answer: "A) mysqli_connect()", answerTamil: "A) mysqli_connect()", isBookBack: true
  },
  {
    id: "ca12-ch9-1m-4", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1, type: "mcq", questionText: "Which is the not a correct MySQL Function in PHP ?",
    questionTextTamil: "பின்வருவனவற்றுள் எது PHP-ல் சரியான MySQL செயற்கூறு அல்ல?",
    options: { A: "mysqli_connect()", B: "mysqli_close()", C: "mysqli_select_data()", D: "mysqli_query()" },
    optionsTamil: { A: "mysqli_connect()", B: "mysqli_close()", C: "mysqli_select_data()", D: "mysqli_query()" },
    correctOption: "C", answer: "C) mysqli_select_data()", answerTamil: "C) mysqli_select_data()", isBookBack: true
  },
  {
    id: "ca12-ch9-1m-5", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1, type: "mcq", questionText: "How many parameter are required for MYSQLi connect function in PHP ?",
    questionTextTamil: "PHP-ல் MYSQLi connect செயற்கூறுக்கு எத்தனை அளபுருக்கள் தேவை?",
    options: { A: "2", B: "3", C: "4", D: "5" },
    optionsTamil: { A: "2", B: "3", C: "4 (Server, User, Password, DB)", D: "5" },
    correctOption: "C", answer: "C) 4", answerTamil: "C) 4", isBookBack: true
  },
  {
    id: "ca12-ch9-1m-6", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1, type: "mcq", questionText: "How many parameter are required for MYSQLi query function in PHP ?",
    questionTextTamil: "PHP-ல் MYSQLi query செயற்கூறுக்கு எத்தனை அளபுருக்கள் தேவை?",
    options: { A: "1", B: "2", C: "3", D: "4" },
    optionsTamil: { A: "1", B: "2 (Connection object, SQL query)", C: "3", D: "4" },
    correctOption: "B", answer: "B) 2", answerTamil: "B) 2", isBookBack: true
  },
  {
    id: "ca12-ch9-1m-7", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1, type: "mcq", questionText: "How many parameter are required for MYSQLi Close function in PHP ?",
    questionTextTamil: "PHP-ல் MYSQLi Close செயற்கூறுக்கு எத்தனை அளபுருக்கள் தேவை?",
    options: { A: "1", B: "2", C: "3", D: "None" },
    optionsTamil: { A: "1 (Connection object)", B: "2", C: "3", D: "ஏதுமில்லை" },
    correctOption: "A", answer: "A) 1", answerTamil: "A) 1", isBookBack: true
  },
  {
    id: "ca12-ch9-1m-8", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 1, type: "mcq", questionText: "Which version of PHP supports MySQLi fuctions ?",
    questionTextTamil: "எந்த PHP பதிப்பு MySQLi செயற்கூறுகளை ஆதரிக்கிறது?",
    options: { A: "Version 2.0", B: "Version 3.0", C: "Version 4.0", D: "Version 5.0 and above" },
    optionsTamil: { A: "பதிப்பு 2.0", B: "பதிப்பு 3.0", C: "பதிப்பு 4.0", D: "பதிப்பு 5.0 மற்றும் அதற்கு மேல்" },
    correctOption: "D", answer: "D) Version 5.0 and above", answerTamil: "D) பதிப்பு 5.0 மற்றும் அதற்கு மேல்", isBookBack: true
  },
  // 2M (6)
  {
    id: "ca12-ch9-2m-1", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 2, type: "short", questionText: "What are the MySQLi function available PHP?",
    questionTextTamil: "PHP-ல் உள்ள முக்கிய MySQLi செயற்கூறுகள் யாவை?",
    answer: "Common MySQLi functions in PHP:\n1. `mysqli_connect()`: Opens a connection to a MySQL server.\n2. `mysqli_query()`: Performs a query on the database.\n3. `mysqli_close()`: Closes an open database connection.\n4. `mysqli_num_rows()`: Returns the number of rows in a result set.",
    answerTamil: "PHP-ல் உள்ள முக்கிய MySQLi செயற்கூறுகள்:\n1. `mysqli_connect()`\n2. `mysqli_query()`\n3. `mysqli_close()`\n4. `mysqli_num_rows()`.",
    isBookBack: true
  },
  {
    id: "ca12-ch9-2m-2", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 2, type: "short", questionText: "What is MySQLi function?",
    questionTextTamil: "MySQLi செயற்கூறு என்றால் என்ன?",
    answer: "MySQLi (MySQL Improved) is an extension in PHP 5.0 and later that provides functions to connect to MySQL database servers, execute queries, and manipulate database records efficiently.",
    answerTamil: "MySQLi (MySQL Improved) என்பது PHP 5.0 மற்றும் அதற்கு மேற்பட்ட பதிப்புகளில் MySQL தரவுத்தள சேவையகத்தை இணைக்க, வினவல்களை இயக்க மற்றும் பதிவுகளை கையாள உதவும் மேம்பட்ட விரிவாக்கமாகும்.",
    isBookBack: true
  },
  {
    id: "ca12-ch9-2m-3", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 2, type: "short", questionText: "What are the types MySQLi function available PHP?",
    questionTextTamil: "PHP-ல் உள்ள MySQLi செயற்கூறுகளின் வகைகள் யாவை?",
    answer: "Types of MySQLi functions:\n1. Database Connection Management (`mysqli_connect()`, `mysqli_close()`)\n2. Query Execution & Manipulation (`mysqli_query()`)\n3. Result Handling & Fetching (`mysqli_fetch_array()`, `mysqli_num_rows()`).",
    answerTamil: "MySQLi செயற்கூறுகளின் வகைகள்:\n1. இணைப்பு மேலாண்மை (`mysqli_connect()`, `mysqli_close()`)\n2. வினவல் இயக்கம் (`mysqli_query()`)\n3. முடிவு கையாளுதல் (`mysqli_fetch_array()`, `mysqli_num_rows()`).",
    isBookBack: true
  },
  {
    id: "ca12-ch9-2m-4", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 2, type: "short", questionText: "Difference between Connection and Close function?",
    questionTextTamil: "இணைப்பு (Connect) மற்றும் மூடுதல் (Close) செயற்கூறுகளுக்கு இடையேயான வேறுபாடு யாது?",
    answer: "1. `mysqli_connect()`: Opens and establishes a new active communication session between the PHP application and MySQL database.\n2. `mysqli_close()`: Terminates the open connection and frees memory resources.",
    answerTamil: "1. `mysqli_connect()`: PHP நிரலுக்கும் MySQL தரவுத்தளத்திற்கும் இடையே புதிய தகவல் தொடர்பு இணைப்பை ஏற்படுத்துகிறது.\n2. `mysqli_close()`: ஏற்கனவே திறக்கப்பட்ட இணைப்பை முடிவுக்கு கொண்டுவந்து நினைவகத்தை விடுவிக்கிறது.",
    isBookBack: true
  },
  {
    id: "ca12-ch9-2m-5", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 2, type: "short", questionText: "Give few examples of MySQLi Queries.",
    questionTextTamil: "MySQLi வினவல்களுக்கு சில எடுத்துக்காட்டுகள் தருக.",
    answer: "Examples:\n1. `$sql = \"SELECT * FROM Students\";`\n2. `$sql = \"INSERT INTO Users (name, email) VALUES ('John', 'john@test.com')\";`\n3. `$sql = \"DELETE FROM Orders WHERE id = 5\";`",
    answerTamil: "எடுத்துக்காட்டுகள்:\n1. `$sql = \"SELECT * FROM Students\";`\n2. `$sql = \"INSERT INTO Users (name, email) VALUES ('John', 'john@test.com')\";`\n3. `$sql = \"DELETE FROM Orders WHERE id = 5\";`",
    isBookBack: true
  },
  {
    id: "ca12-ch9-2m-6", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 2, type: "short", questionText: "What is Connection string?",
    questionTextTamil: "இணைப்பு சரம் (Connection String) என்றால் என்ன?",
    answer: "A connection string contains the essential parameters needed to establish a connection with a database, such as server hostname, username, password, and database name.",
    answerTamil: "இணைப்பு சரம் என்பது தரவுத்தளத்துடன் இணைப்பை ஏற்படுத்த தேவைப்படும் சேவையக பெயர் (Server Name), பயனர் பெயர் (User Name), கடவுச்சொல் (Password) மற்றும் தரவுத்தள பெயர் ஆகியவற்றை உள்ளடக்கிய அமைப்பாகும்.",
    isBookBack: true
  },
  // 3M (3)
  {
    id: "ca12-ch9-3m-1", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 3, type: "brief", questionText: "Write the Syntax for MySQLi Queries.",
    questionTextTamil: "MySQLi வினவல்களுக்கான தொடரியலை (Syntax) எழுதுக.",
    answer: "Syntax for `mysqli_query()`:\n`mysqli_query($connection_object, $query_string);`\n\nExample:\n```php\n$conn = mysqli_connect(\"localhost\", \"root\", \"\", \"school_db\");\n$sql = \"SELECT * FROM students\";\n$result = mysqli_query($conn, $sql);\n```",
    answerTamil: "MySQLi வினவல் தொடரியல்:\n`mysqli_query($இணைப்பு_பொருள், $வினவல்_சரம்);`\n\nஎடுத்துக்காட்டு:\n```php\n$conn = mysqli_connect(\"localhost\", \"root\", \"\", \"school_db\");\n$sql = \"SELECT * FROM students\";\n$result = mysqli_query($conn, $sql);\n```",
    isBookBack: true
  },
  {
    id: "ca12-ch9-3m-2", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 3, type: "brief", questionText: "Write is the purpose of MySQLi function available.",
    questionTextTamil: "PHP-ல் உள்ள MySQLi செயற்கூறுகளின் நோக்கம் யாது?",
    answer: "The purpose of MySQLi functions:\n1. Establish and terminate secure database connections.\n2. Execute DDL, DML, and DQL SQL statements.\n3. Retrieve records, manage transaction integrity, and process database responses for web applications.",
    answerTamil: "MySQLi செயற்கூறுகளின் முக்கிய நோக்கங்கள்:\n1. MySQL தரவுத்தளத்துடன் பாதுகாப்பான இணைப்பை உருவாக்குதல் மற்றும் மூடுதல்.\n2. SQL வினவல்களை (Queries) இயக்குதல்.\n3. தரவுத்தளத்தில் இருந்து தரவுகளைப் பெற்று இணையப் பக்கத்தில் காண்பித்தல்.",
    isBookBack: true
  },
  {
    id: "ca12-ch9-3m-3", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 3, type: "brief", questionText: "Write MySQL Connection Syntax with example.",
    questionTextTamil: "MySQL இணைப்பு தொடரியலை எடுத்துக்காட்டுடன் எழுதுக.",
    answer: "Syntax:\n`mysqli_connect(\"servername\", \"username\", \"password\", \"dbname\");`\n\nExample:\n```php\n$servername = \"localhost\";\n$username = \"root\";\n$password = \"\";\n$dbname = \"school\";\n$conn = mysqli_connect($servername, $username, $password, $dbname);\nif (!$conn) {\n    die(\"Connection failed: \" . mysqli_connect_error());\n}\necho \"Connected successfully\";\n```",
    answerTamil: "MySQL இணைப்பு தொடரியல் மற்றும் எடுத்துக்காட்டு:\n`mysqli_connect(\"சேவையக_பெயர்\", \"பயனர்_பெயர்\", \"கடவுச்சொல்\", \"தரவுத்தள_பெயர்\");`",
    isBookBack: true
  },
  // 5M (3)
  {
    id: "ca12-ch9-5m-1", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 5, type: "essay", questionText: "Discuss in detail about MySQL functions with example.",
    questionTextTamil: "MySQL செயற்கூறுகள் பற்றி எடுத்துக்காட்டுடன் விரிவாக விவாதிக்கவும்.",
    answer: "Detailed discussion of MySQL functions in PHP:\n\n1. `mysqli_connect(server, user, pass, db)`: Establishes connection.\n2. `mysqli_query(conn, sql)`: Executes SQL query.\n3. `mysqli_fetch_assoc(result)`: Fetches a result row as an associative array.\n4. `mysqli_num_rows(result)`: Returns the number of rows.\n5. `mysqli_close(conn)`: Closes connection.\n\nComplete Example:\n```php\n<?php\n$conn = mysqli_connect(\"localhost\", \"root\", \"\", \"school\");\nif (!$conn) die(\"Error: \" . mysqli_connect_error());\n\n$res = mysqli_query($conn, \"SELECT id, name FROM students\");\nwhile($row = mysqli_fetch_assoc($res)) {\n  echo \"ID: \" . $row[\"id\"] . \" Name: \" . $row[\"name\"] . \"<br>\";\n}\nmysqli_close($conn);\n?>\n```",
    answerTamil: "PHP-ல் MySQL செயற்கூறுகள் விரிவான விளக்கம்:\n1. `mysqli_connect()`: தரவுத்தள இணைப்பு.\n2. `mysqli_query()`: வினவலை இயக்குதல்.\n3. `mysqli_fetch_assoc()`: தரவுகளை அணியாகப் பெறுதல்.\n4. `mysqli_num_rows()`: பதிவுகளின் எண்ணிக்கையைக் கண்டறிதல்.\n5. `mysqli_close()`: இணைப்பை மூடுதல்.",
    isBookBack: true
  },
  {
    id: "ca12-ch9-5m-2", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 5, type: "essay", questionText: "Explain in details types of MySQL connection method in PHP.",
    questionTextTamil: "PHP-ல் MySQL இணைப்பு முறைகளின் வகைகளை விரிவாக விளக்குக.",
    answer: "Three main ways to connect to a MySQL database in PHP:\n\n1. MySQLi Procedural: Traditional functional approach using functions like `mysqli_connect()`, simple and beginner friendly.\n2. MySQLi Object-Oriented: Uses objects and methods (`$mysqli = new mysqli(...)`, `$mysqli->query(...)`), providing clean modular code.\n3. PDO (PHP Data Objects): Works with 12 different database drivers, provides unified API, prepared statements, and superior database portability.",
    answerTamil: "PHP-ல் MySQL தரவுத்தளத்துடன் இணைக்கும் மூன்று முறைகள்:\n1. MySQLi செயல்முறை வழி (Procedural)\n2. MySQLi பொருள்நோக்கு வழி (Object-Oriented)\n3. PDO (PHP Data Objects): பல்வேறு தரவுத்தளங்களை ஆதரிக்கும் உலகளாவிய இணைப்பு முறை.",
    isBookBack: true
  },
  {
    id: "ca12-ch9-5m-3", chapterNo: 9, chapterName: "Connecting PHP and MYSQL", chapterNameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்",
    marks: 5, type: "essay", questionText: "Explain MySQLi Queries with examples.",
    questionTextTamil: "MySQLi வினவல்களை எடுத்துக்காட்டுகளுடன் விளக்குக.",
    answer: "MySQLi Queries in PHP:\n\n1. INSERT Query: Adds new records.\n`mysqli_query($conn, \"INSERT INTO users (name, age) VALUES ('Arun', 17)\");`\n\n2. SELECT Query: Retrieves records from tables.\n`$result = mysqli_query($conn, \"SELECT * FROM users\");`\n\n3. UPDATE Query: Modifies existing records.\n`mysqli_query($conn, \"UPDATE users SET age = 18 WHERE name = 'Arun'\");`\n\n4. DELETE Query: Removes records.\n`mysqli_query($conn, \"DELETE FROM users WHERE id = 1\");`",
    answerTamil: "MySQLi வினவல்கள் எடுத்துக்காட்டுகளுடன்:\n1. INSERT: புதிய பதிவுகளைச் சேர்க்க.\n2. SELECT: பதிவுகளைப் பெற.\n3. UPDATE: பதிவுகளைத் திருத்த.\n4. DELETE: பதிவுகளை நீக்க.",
    isBookBack: true
  }
];

fs.writeFileSync('scripts_ca12_final/ch8.json', JSON.stringify(ch8_questions, null, 2), 'utf8');
fs.writeFileSync('scripts_ca12_final/ch9.json', JSON.stringify(ch9_questions, null, 2), 'utf8');
console.log('Ch 8 done:', ch8_questions.length, '(expected 20)');
console.log('Ch 9 done:', ch9_questions.length, '(expected 20)');
