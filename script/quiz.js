const quiz = JSON.parse(localStorage.getItem("selectedQuiz"));

if (!quiz || !quiz.questions) {
  alert("No quiz found. Returning to main.");
  window.location.href = "main.html";
}

let current = 0;
let score = 0;

const questionEl = document.getElementById("questionTitle");
const optionsEl = document.getElementById("optionsContainer");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("resultBox");
const quizBox = document.getElementById("quizBox");

function loadQuestion() {
  nextBtn.disabled = true;
  feedbackEl.textContent = "";

  const q = quiz.questions[current];
  questionEl.textContent = `Q${current + 1}: ${q.question}`;
  optionsEl.innerHTML = "";

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.className = "option-btn";
    btn.onclick = () => checkAnswer(idx);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selectedIndex) {
  const correctIndex = quiz.questions[current].answer;
  const buttons = document.querySelectorAll(".option-btn");

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === correctIndex) {
      btn.classList.add("correct");
    }
    if (idx === selectedIndex && idx !== correctIndex) {
      btn.classList.add("wrong");
    }
  });

  if (selectedIndex === correctIndex) {
    feedbackEl.textContent = "✅ Correct!";
    feedbackEl.style.color = "green";
    score++;
  } else {
    feedbackEl.textContent = `❌ Wrong! Correct: ${quiz.questions[current].options[correctIndex]}`;
    feedbackEl.style.color = "red";
  }

  nextBtn.disabled = false;
}


function nextQuestion() {
  current++;
  if (current < quiz.questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizBox.style.display = "none";
  resultBox.style.display = "block";
  document.getElementById("finalScore").textContent = `${score} / ${quiz.questions.length}`;
}

// Load first question on page load
loadQuestion();
