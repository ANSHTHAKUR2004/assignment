const textArea = document.getElementById("textArea");
const counter = document.getElementById("counter");

const maxChars = 100;

textArea.addEventListener("input", () => {
  let currentLength = textArea.value.length;
  let remaining = maxChars - currentLength;

  // Prevent typing beyond limit
  if (currentLength > maxChars) {
    textArea.value = textArea.value.substring(0, maxChars);
    remaining = 0;
  }

  // Update counter text
  counter.textContent = `Characters left: ${remaining}`;

  // Bonus: Color change
  if (remaining > 50) {
    counter.style.color = "green";
  } else if (remaining > 20) {
    counter.style.color = "orange";
  } else {
    counter.style.color = "red";
  }
});
