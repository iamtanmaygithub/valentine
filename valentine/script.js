const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

function moveNoButton() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 120 - 60;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

/* Desktop: mouse */
noBtn.addEventListener("mouseover", moveNoButton);

/* Mobile: touch */
noBtn.addEventListener("touchstart", moveNoButton);

/* YES button */
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      background:#ffd6e8;
      min-height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      text-align:center;
      padding:20px;
    ">
      <h1 style="font-size:32px;">YAYYYY 🎉💖</h1>
      <p style="font-size:20px;margin:15px 0;">
        Best decision ever 😍
      </p>
      <img 
        src="https://media.giphy.com/media/26FLdmIp6wJr91JAI/giphy.gif"
        style="max-width:100%;border-radius:16px;"
      >
    </div>
  `;
});
