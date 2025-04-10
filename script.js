document.addEventListener("DOMContentLoaded", () => {
  /* ===== Gematria Calculator ===== */
  const hebrewInput = document.getElementById("hebrewInput");
  const calcBtn = document.getElementById("calcBtn");
  const resultDiv = document.getElementById("result");
  const letterTable = document.getElementById("letterTable");

  if (calcBtn) {
    calcBtn.addEventListener("click", () => {
      const input = hebrewInput.value.trim();
      let total = 0;
      for (let char of input) {
        if (gematriaMap[char]) {
          total += gematriaMap[char];
        }
      }
      resultDiv.textContent = `Gematria value: ${total}`;
    });
  }

  // Populate the Hebrew letter table
  if(letterTable) {
    for (let letter in gematriaMap) {
      const div = document.createElement("div");
      div.className = "letter-box";
      div.innerHTML = `<strong>${letter}</strong><br>${gematriaMap[letter]}`;
      letterTable.appendChild(div);
    }
  }

  /* ===== Transliteration Functions ===== */

  // Hebrew-to-English mapping (approximation)
  const hebToEng = {
    'א': 'a', 'ב': 'b', 'ג': 'g', 'ד': 'd', 'ה': 'h',
    'ו': 'v', 'ז': 'z', 'ח': 'ch', 'ט': 't', 'י': 'y',
    'כ': 'k', 'ך': 'k', 'ל': 'l', 'מ': 'm', 'ם': 'm',
    'נ': 'n', 'ן': 'n', 'ס': 's', 'ע': 'ʿ', 'פ': 'p',
    'ף': 'p', 'צ': 'ts', 'ץ': 'ts', 'ק': 'k', 'ר': 'r',
    'ש': 'sh', 'ת': 't'
  };

  // English-to-Hebrew mapping (approximate conversion)
  const engToHeb = {
    'a': 'א', 'b': 'ב', 'g': 'ג', 'd': 'ד', 'e': 'ה',
    'h': 'ה', 'v': 'ו', 'z': 'ז', 'k': 'ק', 'l': 'ל',
    'm': 'מ', 'n': 'נ', 's': 'ס', 'p': 'פ', 'r': 'ר',
    't': 'ת', 'y': 'י'
  };

  // Convert Hebrew to English (letter-by-letter)
  function convertHebrewToEnglish(input) {
    let output = "";
    for (let char of input) {
      output += hebToEng[char] ? hebToEng[char] : char;
    }
    return output;
  }

  // Convert English to Hebrew (handles "sh" and "ch" digraphs)
  function convertEnglishToHebrew(input) {
    let output = "";
    let i = 0;
    input = input.toLowerCase();
    while (i < input.length) {
      if (i < input.length - 1 && input.substring(i, i + 2) === "sh") {
        output += "ש";
        i += 2;
        continue;
      }
      if (i < input.length - 1 && input.substring(i, i + 2) === "ch") {
        output += "ח";
        i += 2;
        continue;
      }
      let char = input[i];
      output += engToHeb[char] ? engToHeb[char] : char;
      i++;
    }
    return output;
  }

  /* ===== Event Listeners for Transliteration ===== */
  const hebToEngInput = document.getElementById("hebToEngInput");
  const hebToEngBtn = document.getElementById("hebToEngBtn");
  const hebToEngResult = document.getElementById("hebToEngResult");

  const engToHebInput = document.getElementById("engToHebInput");
  const engToHebBtn = document.getElementById("engToHebBtn");
  const engToHebResult = document.getElementById("engToHebResult");

  if (hebToEngBtn) {
    hebToEngBtn.addEventListener("click", () => {
      const input = hebToEngInput.value.trim();
      hebToEngResult.textContent = `Converted to English: ${convertHebrewToEnglish(input)}`;
    });
  }

  if (engToHebBtn) {
    engToHebBtn.addEventListener("click", () => {
      const input = engToHebInput.value.trim();
      engToHebResult.textContent = `Converted to Hebrew: ${convertEnglishToHebrew(input)}`;
    });
  }
});
