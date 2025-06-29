// Get quiz from localStorage
const selectedQuiz = JSON.parse(localStorage.getItem("selectedQuiz"));

if (!selectedQuiz) {
  alert("No quiz selected. Returning to main page.");
  window.location.href = "main.html";
} else {
  document.getElementById("quizTitle").textContent = selectedQuiz.title;
}

function startQuiz() {
  window.location.href = "quiz.html";
}
