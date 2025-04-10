function calculateGematria() {
  const input = document.getElementById("hebrewInput").value.trim();
  let total = 0;

  for (let char of input) {
    if (gematriaMap[char]) {
      total += gematriaMap[char];
    }
  }

  document.getElementById("result").innerText =
    `Gematria value: ${total}`;
}

// Render letter table
window.onload = () => {
  const table = document.getElementById("letterTable");
  for (let letter in gematriaMap) {
    const div = document.createElement("div");
    div.className = "letter-box";
    div.innerHTML = `<strong>${letter}</strong><br>${gematriaMap[letter]}`;
    table.appendChild(div);
  }
};
