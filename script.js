fetch("http://localhost:3001/game/reward")
  .then(res => res.json())
  .then(data => {
    winReward = data.reward;
    console.log("Reward from server:", winReward);
  });

  
  let winReward = "";

fetch("http://localhost:3001/game/reward")
  .then(res => res.json())
  .then(data => {
    winReward = data.reward;
    console.log("Reward loaded:", winReward);

    startGame(); // ✅ ՄԻԱՅՆ ՀԻՄԱ
  });

fetch("/api/admin/reward", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ reward: value })
});


document.addEventListener("DOMContentLoaded"), () => {
  const boxes = document.querySelectorAll(".box");
  const message = document.getElementById("message");
  const refreshBtn = document.getElementById("refreshBtn");
}
  let gameOver = false;
  let winAmount = "2000 դրամ";
  let winIndex = Math.floor(Math.random() * boxes.length);

  boxes.forEach((box, index) => {
    box.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      if (gameOver) return;
      gameOver = true;

      box.style.backgroundImage = "none";
      box.style.backgroundColor = "#fff";
      box.style.color = "#000";
      box.style.fontWeight = "bold";

      if (index === winIndex) {
        box.textContent = winAmount;
        message.textContent = `🎉 Շնորհավորում ենք, դու շահեցիր ${winAmount}`;
      } else {
        box.textContent = "X";
        message.textContent = "❌ Ցավոք, չշահեցիր";
      }
    });
  });
  
