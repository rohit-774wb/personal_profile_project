const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});

const correctAnswers = {
  q1: "a",
  q2: "b",
  q3: "a",
  q4: "c",
  q5: "b"
};

const quizForm = document.getElementById("quizForm");
const quizResult = document.getElementById("quizResult");

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(quizForm);
  let score = 0;
  let unanswered = 0;

  for (const question in correctAnswers) {
    const answer = formData.get(question);
    if (!answer) unanswered++;
    if (answer === correctAnswers[question]) score++;
  }

  if (unanswered > 0) {
    quizResult.textContent = `Please answer all 5 questions. ${unanswered} question(s) are unanswered.`;
    return;
  }

  quizResult.textContent = `Your final score is ${score}/5. ${
    score === 5 ? "Excellent work!" : score >= 3 ? "Good effort!" : "Keep practising!"
  }`;
});

quizForm.addEventListener("reset", () => {
  quizResult.textContent = "";
});
