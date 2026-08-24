import fs from 'fs';
import { CS11_CH6_TO_CH10_QUESTIONS } from './src/data/cs11_ch6_to_ch10';

// Modify ch9 5M to have 2 questions:
const ch6_10 = CS11_CH6_TO_CH10_QUESTIONS.filter(q => {
  if (q.chapterNo === 9 && q.marks === 5) {
    // only keep the first 2 5M questions
    return q.id === 'cs11-ch9-5m-1' || q.id === 'cs11-ch9-5m-2';
  }
  return true;
});

// Update ch9 5M questions text to match PDF exactly:
const q9_5m1 = ch6_10.find(q => q.id === 'cs11-ch9-5m-1');
if (q9_5m1) {
  q9_5m1.questionText = "Write about Binary operators used in C++.";
  q9_5m1.questionTextTamil = "C++ மொழியில் பயன்படும் இரும செயற்குறிகள் (Binary Operators) பற்றி விரிவாக எழுதுக.";
  q9_5m1.answer = "Binary operators require two operands to perform operations. The main categories in C++ are:\n1. Arithmetic Operators: +, -, *, /, %\n2. Relational Operators: ==, !=, >, <, >=, <=\n3. Logical Operators: && (Logical AND), || (Logical OR)\n4. Bitwise Operators: & (Bitwise AND), | (Bitwise OR), ^ (Bitwise XOR), << (Shift Left), >> (Shift Right)\n5. Assignment Operators: =, +=, -=, *=, /=, %=\n\nExample:\nint a = 10, b = 5;\nint sum = a + b; // Addition\nbool isGreater = (a > b); // Relational\nint bitAnd = a & b; // Bitwise AND";
  q9_5m1.answerTamil = "இரு செயலேற்பிகளைக் கொண்டு செயல்படும் செயற்குறிகள் இரும செயற்குறிகள் (Binary Operators) எனப்படும்:\n1. கணித செயற்குறிகள்: +, -, *, /, %\n2. ஒப்பீட்டு செயற்குறிகள்: ==, !=, >, <, >=, <=\n3. தருக்க செயற்குறிகள்: &&, ||\n4. பிட்நிலை செயற்குறிகள்: &, |, ^, <<, >>\n5. மதிப்பிருத்தல் செயற்குறிகள்: =, +=, -=, *=, /=, %=";
}

const q9_5m2 = ch6_10.find(q => q.id === 'cs11-ch9-5m-2');
if (q9_5m2) {
  q9_5m2.questionText = "Explain the different types of Errors in C++.";
  q9_5m2.questionTextTamil = "C++ மொழியில் ஏற்படும் பல்வேறு வகையான பிழைகளை (Errors) விளக்குக.";
  q9_5m2.answer = "In C++, errors are classified into three major types:\n\n1. Syntax Errors: Occur when grammatical rules of C++ are violated (e.g., missing semicolon, undefined variables, mismatched braces). Detected during compilation.\n\n2. Semantic / Logical Errors: Occur when the program syntax is valid but the logic is flawed, leading to incorrect output (e.g., using '+' instead of '*', infinite loops, wrong conditional checks).\n\n3. Run-time Errors: Occur during the program execution due to illegal operations (e.g., division by zero, accessing out-of-bound array memory, file not found).";
  q9_5m2.answerTamil = "C++ மொழியில் ஏற்படும் பிழைகள் மூன்று முக்கிய வகைகளாகப் பிரிக்கப்படுகின்றன:\n\n1. தொடரியல் பிழைகள் (Syntax Errors): மொழி இலக்கண விதிகளை மீறும் போது ஏற்படுகிறது (எ.கா. அரைப்புள்ளி ';' விடுபடுதல்). இவை தொகுப்பு (Compile) நேரத்தில் கண்டறியப்படும்.\n\n2. தருக்கப் பிழைகள் (Semantic / Logical Errors): தொடரியல் சரியாக இருந்தாலும், நெறிமுறை தவறாக இருப்பதால் தவறான விடை வருவது (எ.கா. கூட்டலுக்குப் பதிலாக பெருக்கல் குறியீடு).\n\n3. இயக்க நேரப் பிழைகள் (Run-time Errors): நிரல் இயங்கும்போது ஏற்படும் தவறுகள் (எ.கா. பூஜ்ஜியத்தால் வகுத்தல், தவறான நினைவக அணுகல்).";
}

// Update ch10 5M questions to match PDF exactly:
const ch10_5m = ch6_10.filter(q => q.chapterNo === 10 && q.marks === 5);
if (ch10_5m.length === 5) {
  ch10_5m[0].questionText = "Explain control statements with a suitable example.";
  ch10_5m[0].questionTextTamil = "கட்டுப்பாட்டுக் கூற்றுகளை தகுந்த எடுத்துக்காட்டுடன் விளக்குக.";
  
  ch10_5m[1].questionText = "What is an entry-controlled loop? Explain any one of the entry-controlled loops with a suitable example.";
  ch10_5m[1].questionTextTamil = "நுழைவு சோதிப்பு மடங்கு என்றால் என்ன? ஏதேனும் ஒரு நுழைவு சோதிப்பு மடங்கினை பொருத்தமான எடுத்துக்காட்டுடன் விளக்குக.";
  
  ch10_5m[2].questionText = "Write a program to find the LCM and GCD of two numbers.";
  ch10_5m[2].questionTextTamil = "இரண்டு எண்களின் மீ.பொ.வ (GCD) மற்றும் மீ.சி.ம (LCM) காணும் C++ நிரலை எழுதுக.";
  ch10_5m[2].answer = "#include <iostream>\nusing namespace std;\nint main() {\n    int n1, n2, a, b, temp, gcd, lcm;\n    cout << \"Enter two numbers: \";\n    cin >> n1 >> n2;\n    a = n1; b = n2;\n    while (b != 0) {\n        temp = b;\n        b = a % b;\n        a = temp;\n    }\n    gcd = a;\n    lcm = (n1 * n2) / gcd;\n    cout << \"GCD = \" << gcd << endl;\n    cout << \"LCM = \" << lcm << endl;\n    return 0;\n}";
  ch10_5m[2].answerTamil = "#include <iostream>\nusing namespace std;\nint main() {\n    int n1, n2, a, b, temp, gcd, lcm;\n    cout << \"இரண்டு எண்களை உள்ளிடவும்: \";\n    cin >> n1 >> n2;\n    a = n1; b = n2;\n    while (b != 0) {\n        temp = b;\n        b = a % b;\n        a = temp;\n    }\n    gcd = a;\n    lcm = (n1 * n2) / gcd;\n    cout << \"மீ.பொ.வ (GCD) = \" << gcd << endl;\n    cout << \"மீ.சி.ம (LCM) = \" << lcm << endl;\n    return 0;\n}";
  
  ch10_5m[3].questionText = "Write programs to find the sum of the following series:\na) S = x^2/2! - x^3/3! + x^4/4! - x^5/5! + x^6/6!\nb) S = x/2 + x/3 + ... + x/n";
  ch10_5m[3].questionTextTamil = "பின்வரும் தொடர்களின் கூடுதல் காணும் C++ நிரல்களை எழுதுக:\na) S = x^2/2! - x^3/3! + x^4/4! - x^5/5! + x^6/6!\nb) S = x/2 + x/3 + ... + x/n";
  
  ch10_5m[4].questionText = "Write a program to find the sum of the series: S = 1 + x + x^2 + ... + x^n";
  ch10_5m[4].questionTextTamil = "S = 1 + x + x^2 + ... + x^n என்ற தொடரின் கூடுதலைக் காணும் C++ நிரலை எழுதுக.";
  ch10_5m[4].answer = "#include <iostream>\n#include <cmath>\nusing namespace std;\nint main() {\n    int x, n;\n    double sum = 1.0;\n    cout << \"Enter value of x: \";\n    cin >> x;\n    cout << \"Enter value of n: \";\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        sum += pow(x, i);\n    }\n    cout << \"Sum of the series = \" << sum << endl;\n    return 0;\n}";
  ch10_5m[4].answerTamil = "#include <iostream>\n#include <cmath>\nusing namespace std;\nint main() {\n    int x, n;\n    double sum = 1.0;\n    cout << \"x-ன் மதிப்பை உள்ளிடவும்: \";\n    cin >> x;\n    cout << \"n-ன் மதிப்பை உள்ளிடவும்: \";\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        sum += pow(x, i);\n    }\n    cout << \"தொடரின் கூடுதல் = \" << sum << endl;\n    return 0;\n}";
}

// Write back cs11_ch6_to_ch10.ts
const code6_10 = `import { Question } from '../types';

export const CS11_CH6_TO_CH10_QUESTIONS: Question[] = ` + JSON.stringify(ch6_10, null, 2) + `;\n`;

fs.writeFileSync('./src/data/cs11_ch6_to_ch10.ts', code6_10, 'utf8');
console.log("Updated cs11_ch6_to_ch10.ts with", ch6_10.length, "questions.");
