// dream.js

// Comprehensive Kabbalistic Dream Interpretation Dictionary
const kabbalahDreamInterpretations = {
  "flying": "In Kabbalistic tradition, flying in a dream symbolizes the soul's desire to rise above material limitations and ascend towards higher spiritual realms.",
  "falling": "Falling can indicate a loss of control or detachment from spiritual roots, yet it also invites introspection and transformation of personal shortcomings.",
  "water": "Water represents the flow of emotions and divine wisdom. Clear, calm water suggests clarity, while turbulent water hints at unresolved inner turmoil.",
  "ocean": "The vast ocean symbolizes the infinite wisdom of the divine, encompassing both the conscious and unconscious realms of the soul.",
  "fire": "Fire in Kabbalistic dreams signifies transformation, purification, and passionate spiritual energy. It often marks the burning away of old beliefs to allow new insight.",
  "chase": "Being chased reflects internal conflict or avoidance of a particular aspect of your spiritual journey. It urges you to confront your fears and understand hidden anxieties.",
  "death": "Death in dreams symbolizes an ending that paves the way for renewal and rebirth, reflecting the cyclical nature of spiritual evolution in Kabbalah.",
  "angel": "An angel appearing in your dream may represent a guardian spirit or divine messenger, guiding you towards greater enlightenment and protection.",
  "light": "Light stands for truth, wisdom, and the divine presence. A dream suffused with light can invite you to embrace a higher purpose.",
  "darkness": "Darkness symbolizes the hidden aspects of the self and a call to explore and integrate parts of your unconscious mind.",
  "snake": "In Kabbalah, snakes represent both hidden wisdom and potential danger, urging you to awaken dormant energies while maintaining balance.",
  "serpent": "Similar to a snake, a serpent in your dream may signal transformation and a deep, sometimes challenging, inner journey towards spiritual insight.",
  "tree": "Trees symbolize life, growth, and connectivity between the divine and earthly realms, reminiscent of the Tree of Life in Kabbalah.",
  "music": "Hearing music in your dream can be seen as an auspicious sign, inviting you to tune into the harmonious vibrations of the universe.",
  "rain": "Rain represents cleansing, renewal, and divine mercy; it signals that spiritual healing is imminent.",
  "wind": "Wind signifies change, movement, and the breath of the divine, pointing to shifts in your spiritual path.",
  "earth": "Dreams involving earth suggest grounding, stability, and a return to one’s roots, emphasizing the importance of a solid spiritual foundation.",
  "heaven": "Dreams of heaven denote a longing for divine connection and an immersion into higher spiritual realms.",
  "messenger": "Encountering a messenger in your dream is often a powerful sign that important insights or revelations are on the horizon.",
  "crown": "A crown represents spiritual authority and the realization of one's divine potential, encouraging you to embrace leadership in your spiritual journey.",
  "prayer": "Dreams involving prayer highlight your connection to the divine and may urge you to deepen your spiritual practice.",
  "star": "Stars symbolize guidance, aspiration, and the ever-present light of the divine, reminding you of your higher purpose."
};

// Function to interpret dreams using the comprehensive dictionary
function interpretKabbalahDream(dreamText) {
  let interpretations = [];
  const text = dreamText.toLowerCase();

  // Check for each keyword in the dream dictionary
  for (let keyword in kabbalahDreamInterpretations) {
    if (text.includes(keyword)) {
      interpretations.push(kabbalahDreamInterpretations[keyword]);
    }
  }
  
  if (interpretations.length === 0) {
    return "Your dream is unique and may require deeper personal reflection or consultation with a knowledgeable Kabbalistic practitioner.";
  }
  return interpretations.join(" ");
}

// Attach event listener once the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const dreamInput = document.getElementById("dreamInput");
  const dreamBtn = document.getElementById("dreamBtn");
  const dreamResult = document.getElementById("dreamResult");

  if (dreamBtn) {
    dreamBtn.addEventListener("click", () => {
      const input = dreamInput.value.trim();
      if (input.length === 0) {
        dreamResult.textContent = "Please describe your dream for an interpretation.";
      } else {
        dreamResult.textContent = interpretKabbalahDream(input);
      }
    });
  }
});
