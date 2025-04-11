// dream.js

// Full Kabbalistic Dream Interpretation Dictionary
const kabbalahDreamInterpretations = {
  // Core Elements
  "flying": "Flying symbolizes the soul's ascension beyond the material world toward spiritual freedom.",
  "falling": "Falling suggests loss of control or grounding, possibly indicating detachment from spiritual truths.",
  "water": "Water signifies emotional depth and divine wisdom. Clear water shows clarity; turbulent water suggests unrest.",
  "ocean": "The ocean represents divine infinity, encompassing both conscious and unconscious realms.",
  "fire": "Fire denotes transformation, purification, and intense spiritual passion.",
  "chase": "Being chased suggests avoidance or confrontation with inner truths or fears.",
  "death": "Death implies spiritual transition, transformation, or a rebirth of consciousness.",
  "angel": "An angel signals divine guidance and celestial protection on your spiritual journey.",
  "light": "Light reflects divine truth, awakening, and connection to your higher self.",
  "darkness": "Darkness may reveal hidden fears or subconscious truths waiting to be explored.",
  "snake": "The snake represents kundalini energy, hidden wisdom, or potential danger when misused.",
  "serpent": "A serpent echoes transformation, primal energy, and soul evolution through challenge.",
  "tree": "Trees symbolize the Tree of Life, spiritual growth, and connection between worlds.",
  "music": "Music reflects harmony with divine vibration and emotional expression.",
  "rain": "Rain signifies divine mercy and cleansing of emotional burdens.",
  "wind": "Wind signals change, spiritual breath, and divine communication.",
  "earth": "Earth represents grounding, balance, and the foundation of your spiritual identity.",
  "heaven": "Heaven represents unity with the divine and spiritual aspiration.",
  "messenger": "A messenger reflects incoming wisdom or divine insight meant just for you.",
  "crown": "A crown indicates spiritual mastery, leadership, and divine empowerment.",
  "prayer": "Prayer highlights spiritual connection and your openness to divine help.",
  "star": "A star symbolizes hope, spiritual destiny, and celestial light guiding your soul.",

  // Animals
  "lion": "The lion represents courage, royalty, and divine strength.",
  "dog": "Dogs symbolize loyalty, protection, and instinctual guidance on your spiritual path.",
  "cat": "Cats symbolize intuition, mystery, and feminine spiritual energy.",
  "bird": "Birds indicate messages from higher realms, freedom, and ascension.",

  // People & Archetypes
  "child": "A child symbolizes innocence, soul purity, and spiritual rebirth.",
  "mother": "The mother reflects divine nurturing and the feminine aspect of divinity (Shekhinah).",
  "father": "A father represents structure, guidance, and the divine masculine presence.",
  "stranger": "A stranger may be an undiscovered part of yourself or a divine visitor.",
  "crowd": "A crowd can reflect external influence, societal judgment, or collective consciousness.",

  // Emotions & States
  "crying": "Crying reflects soul-cleansing, release of burdens, and divine compassion.",
  "laughing": "Laughing signifies joy, release, and resonance with divine celebration.",
  "fear": "Fear highlights inner blockages, karmic echoes, or the call to face your shadows.",
  "joy": "Joy in a dream is a divine affirmation of being aligned with your higher path.",

  // Symbols & Sacred Objects
  "sword": "The sword symbolizes truth, discernment, and divine justice.",
  "ring": "A ring reflects eternal commitment, divine covenant, and spiritual bonding.",
  "scroll": "A scroll represents hidden wisdom and the unfolding of your soul's destiny.",
  "mirror": "A mirror reveals inner truth, soul reflection, or illusion depending on the context.",
  "door": "A door signifies transition, initiation, and divine invitation to new realms.",
  "window": "A window symbolizes clarity, opportunity, or divine perspective.",
  "bridge": "A bridge reflects spiritual crossing and the path between dimensions.",
  "ladder": "A ladder symbolizes ascension toward enlightenment or descent into inner realms.",
  "path": "A path indicates the journey of the soul and unfolding of spiritual lessons.",
  "stairs": "Stairs mirror elevation of consciousness or descent into deeper awareness.",

  // Celestial & Time Elements
  "sun": "The sun stands for divine power, truth, and soul radiance.",
  "moon": "The moon reflects cycles, intuition, and the hidden subconscious.",
  "sunrise": "Sunrise represents new beginnings, hope, and divine awakening.",
  "sunset": "Sunset suggests endings, reflection, and spiritual transition.",
  "night": "Night represents divine mystery, the hidden self, and spiritual rest.",
  "clock": "A clock symbolizes divine timing, life cycles, and urgency of awakening.",

  // Places
  "house": "A house mirrors your inner world; rooms represent different soul aspects.",
  "temple": "A temple represents your inner sanctuary and divine connection.",
  "mountain": "A mountain suggests ascension, divine encounter, and challenges leading to growth.",
  "cave": "A cave indicates introspection, solitude, or hidden spiritual treasure.",
  "desert": "The desert is a place of purification, testing, and divine solitude.",

  // Colors
  "white": "White represents divine purity, spiritual cleansing, and soul clarity.",
  "black": "Black symbolizes the unknown, hidden power, and transformation.",
  "red": "Red reflects passion, life-force, or intense emotion and action.",
  "blue": "Blue represents peace, communication, and spiritual serenity.",
  "green": "Green reflects healing, growth, and connection to nature and heart energy.",

  // Numbers (1-10)
  "number 1": "One represents unity, divine origin, and spiritual leadership.",
  "number 2": "Two stands for balance, duality, and spiritual partnership.",
  "number 3": "Three signifies divine completeness and harmony.",
  "number 4": "Four reflects stability, the earthly foundation of divine will.",
  "number 5": "Five brings change, motion, and freedom through challenge.",
  "number 6": "Six relates to beauty, creation, and harmony.",
  "number 7": "Seven is spiritual insight, rest, and inner wisdom.",
  "number 8": "Eight denotes power, karma, and transformation.",
  "number 9": "Nine reflects endings, higher learning, and soul compassion.",
  "number 10": "Ten signals completion, fulfillment, and return to divine origin."
};

// Function to analyze the dream input
function interpretKabbalahDream(dreamText) {
  const interpretations = [];
  const normalizedText = dreamText.toLowerCase();

  for (let keyword in kabbalahDreamInterpretations) {
    const pattern = new RegExp("\\b" + keyword + "\\b", "i");
    if (pattern.test(normalizedText)) {
      interpretations.push(kabbalahDreamInterpretations[keyword]);
    }
  }

  if (interpretations.length === 0) {
    return "Your dream holds deep personal symbolism that may require further meditation or spiritual guidance.";
  }

  return interpretations.join(" ");
}

// DOM interaction for button and text input
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
