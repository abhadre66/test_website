const container = document.querySelector(".falling-container");

const emojis = ["⭐", "💙", "🎈"];

function createFallingItem() {
  const span = document.createElement("span");
  span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = Math.random() * 5 + 5 + "s";
  span.style.fontSize = Math.random() * 20 + 20 + "px";

  container.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 10000);
}

setInterval(createFallingItem, 400);

const messageElement = document.getElementById("animated-message");

if (messageElement) {
  const text = messageElement.innerText.trim();
  messageElement.innerHTML = "";

  const words = text.split(" ");
  let index = 0;

  // ⏳ Delay animation so layout is ready
  setTimeout(() => {
    const interval = setInterval(() => {
      if (index < words.length) {
        const span = document.createElement("span");
        span.className = "word";
        span.textContent = words[index];

        messageElement.appendChild(span);
        index++;
      } else {
        clearInterval(interval); // ✅ important
      }
    }, 180); // speed (increase = slower)
  }, 1000); // 🔥 THIS FIXES THE ISSUE
}