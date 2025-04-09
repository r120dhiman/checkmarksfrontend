const fs = require('fs');
const path = require('path');
const Tesseract = require('tesseract.js');

const extractFromImage = async (imagePath) => {
  const { data: { text } } = await Tesseract.recognize(imagePath, 'eng');
  return text;
};

const extractSAData = async () => {
  const files = fs.readdirSync('./output').filter(file => file.endsWith('.png'));
  const results = [];

  for (const file of files) {
    const text = await extractFromImage(path.join('./output', file));

    const regex = /Question ID\s*:\s*(\d+)[\s\S]*?Type\s*:\s*SA[\s\S]*?Status\s*:\s*(Answered|Not Answered)[\s\S]*?Given Answer\s*:\s*(.*?)[\s\S]*?Correct Answer\s*:\s*(\S+)/g;
    let match;
    while ((match = regex.exec(text)) !== null) {
      const [, question_id, status, given_answer_raw, correct_answer] = match;
      const given_answer = given_answer_raw.trim() === '' ? 'NULL' : given_answer_raw.trim();
      results.push({
        type: 'sa',
        question_id,
        given_answer,
        correct_answer,
        status,
        points: 0
      });
    }
  }

  console.log(JSON.stringify(results, null, 2));
};

extractSAData();