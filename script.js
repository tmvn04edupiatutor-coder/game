const questions = [
  { q: "2 + 2 = ?", a: "4", gift: "🎁 Voucher 50K" },
  { q: "Thủ đô Việt Nam là gì?", a: "Hà Nội", gift: "🎁 Sticker" },
  { q: "5 x 3 = ?", a: "15", gift: "🎁 Điểm thưởng" }
];

let currentPig = null;

function hitPig(index) {
  currentPig = index;
  const random = Math.floor(Math.random() * questions.length);
  window.currentQuestion = questions[random];

  document.getElementById("question").innerText =
    "❓ " + window.currentQuestion.q;
  document.getElementById("popup").classList.remove("hidden");
}

function submitAnswer() {
  const userAnswer = document.getElementById("answer").value.trim();

  if (userAnswer === window.currentQuestion.a) {
    alert("🎉 Đúng rồi! Bạn nhận được: " + window.currentQuestion.gift);
    document.getElementsByClassName("pig")[currentPig].innerText = "💥";
  } else {
    alert("❌ Sai rồi, heo chạy mất!");
  }

  document.getElementById("popup").classList.add("hidden");
  document.getElementById("answer").value = "";
}
