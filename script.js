document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("hebrewInput");
  const calcButton = document.getElementById("calcBtn");
  const resultArea = document.getElementById("result");

  const gematriaValues = {
    'א': 1,  'ב': 2,  'ג': 3,  'ד': 4,  'ה': 5,
    'ו': 6,  'ז': 7,  'ח': 8,  'ט': 9,  'י': 10,
    'כ': 20, 'ך': 20, 'ל': 30, 'מ': 40, 'ם': 40,
    'נ': 50, 'ן': 50, 'ס': 60, 'ע': 70, 'פ': 80,
    'ף': 80, 'צ': 90, 'ץ': 90, 'ק': 100, 'ר': 200,
    'ש': 300, 'ת': 400
  };

  const digraphs = {
    'sh': 'ש', 'ch': 'ח', 'tz': 'צ', 'ts': 'צ', 'kh': 'כ', 'ph': 'פ', 'th': 'ת'
  };

  const engToHeb = {
    'a': 'א', 'b': 'ב', 'g': 'ג', 'd': 'ד', 'e': 'ה', 'h': 'ה',
    'v': 'ו', 'z': 'ז', 't': 'ת', 'y': 'י', 'k': 'כ', 'l': 'ל',
    'm': 'מ', 'n': 'נ', 's': 'ס', 'p': 'פ', 'r': 'ר', 'o': '', 'u': ''
  };

  function isEnglish(str) {
    return /^[a-zA-Z\s]+$/.test(str);
  }

  function transliterateEnglishToHebrew(text) {
    text = text.toLowerCase();
    let result = '';
    let i = 0;

    while (i < text.length) {
      const twoLetters = text.slice(i, i + 2);
      if (digraphs[twoLetters]) {
        result += digraphs[twoLetters];
        i += 2;
      } else {
        const char = engToHeb[text[i]];
        result += char || '';
        i++;
      }
    }

    return result;
  }

  function calculateGematria(text) {
    let total = 0;
    let breakdown = [];

    for (let char of text) {
      if (gematriaValues[char]) {
        const val = gematriaValues[char];
        total += val;
        breakdown.push(`${char}(${val})`);
      }
    }

    return { total, breakdown };
  }

  function displayResult(text) {
    const isEng = isEnglish(text);
    const hebrewWord = isEng ? transliterateEnglishToHebrew(text) : text;
    const { total, breakdown } = calculateGematria(hebrewWord);

    if (!hebrewWord || breakdown.length === 0) {
      resultArea.innerHTML = "Invalid or empty input.";
      return;
    }

    resultArea.innerHTML = `
      <strong>Input:</strong> ${hebrewWord}<br>
      <strong>Gematria:</strong> ${total}<br>
      <small>${breakdown.join(" + ")}</small>
    `;
  }

  calcButton.addEventListener("click", () => {
    const userInput = inputField.value.trim();
    displayResult(userInput);
  });
});
