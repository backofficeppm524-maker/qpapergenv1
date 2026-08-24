import fs from 'fs';
import { Question } from '../src/types';

// Exact target counts from 12th_Computer_Applications_Book_Back_Questions_English_Medium.pdf
export const PDF_TARGET_COUNTS: Record<number, { 1: number; 2: number; 3: number; 5: number; total: number; name: string; nameTamil: string }> = {
  1: { 1: 10, 2: 5, 3: 3, 5: 2, total: 20, name: "Multimedia", nameTamil: "பல்லூடகம்" },
  2: { 1: 12, 2: 10, 3: 7, 5: 3, total: 32, name: "An Introduction to Adobe PageMaker", nameTamil: "அடோப் பேஜ்மேக்கர் ஓர் அறிமுகம்" },
  3: { 1: 10, 2: 10, 3: 5, 5: 5, total: 30, name: "Introduction to Database Management System", nameTamil: "தரவுத்தள மேலாண்மை அமைப்பு ஓர் அறிமுகம்" },
  4: { 1: 10, 2: 5, 3: 5, 5: 2, total: 22, name: "PHP: Hypertext Preprocessor", nameTamil: "PHP: இணையதள பயன்பாட்டு நிரலாக்கம் ஓர் அறிமுகம்" },
  5: { 1: 11, 2: 5, 3: 4, 5: 2, total: 22, name: "Functions and Arrays in PHP", nameTamil: "PHP செயற்கூறுகள் மற்றும் அணிகள்" },
  6: { 1: 10, 2: 5, 3: 3, 5: 2, total: 20, name: "Conditional Statements in PHP", nameTamil: "PHP நிபந்தனை கூற்றுகள்" },
  7: { 1: 10, 2: 5, 3: 3, 5: 3, total: 21, name: "Loops in PHP", nameTamil: "PHP மடக்கு அமைப்பு" },
  8: { 1: 10, 2: 5, 3: 3, 5: 2, total: 20, name: "Forms and Files", nameTamil: "படிவங்கள் மற்றும் கோப்புகள்" },
  9: { 1: 8, 2: 6, 3: 3, 5: 3, total: 20, name: "Connecting PHP and MYSQL", nameTamil: "PHP மற்றும் MySQL-ஐ இணைத்தல்" },
  10: { 1: 7, 2: 4, 3: 3, 5: 2, total: 16, name: "Introduction to Computer Networks", nameTamil: "கணினி வலையமைப்பு ஓர் அறிமுகம்" },
  11: { 1: 10, 2: 4, 3: 3, 5: 3, total: 20, name: "Network Examples and Protocols", nameTamil: "வலையமைப்பு எடுத்துக்காட்டுகள் மற்றும் நெறிமுறைகள்" },
  12: { 1: 10, 2: 8, 3: 4, 5: 3, total: 25, name: "Domain Name System (DNS)", nameTamil: "டொமைன் பெயர் அமைப்பு (DNS)" },
  13: { 1: 10, 2: 6, 3: 5, 5: 3, total: 24, name: "Network Cabling", nameTamil: "வலையமைப்பு கம்பியிடுதல்" },
  14: { 1: 8, 2: 5, 3: 5, 5: 2, total: 20, name: "Open Source Concepts", nameTamil: "திறந்த மூலக் கருத்துக்கள்" },
  15: { 1: 10, 2: 5, 3: 5, 5: 3, total: 23, name: "E-Commerce", nameTamil: "மின்னணு வணிகம் (E-Commerce)" },
  16: { 1: 10, 2: 5, 3: 5, 5: 3, total: 23, name: "Electronic Payment Systems", nameTamil: "மின்னணு கட்டண முறைகள்" },
  17: { 1: 10, 2: 5, 3: 5, 5: 3, total: 23, name: "E-Commerce Security Systems", nameTamil: "மின்னணு வணிக பாதுகாப்பு அமைப்புகள்" },
  18: { 1: 5, 2: 3, 3: 3, 5: 2, total: 13, name: "Electronic Data Interchange- EDI", nameTamil: "மின்னணு தரவு பரிமாற்றம் (EDI)" }
};
