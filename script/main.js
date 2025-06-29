//  Read embedded quiz data from main.html
const quizData = JSON.parse(document.getElementById("quizData").textContent);

// Load username
const user = JSON.parse(localStorage.getItem("quizUser"));
document.getElementById("userDisplay").textContent = user?.username || "Guest";

// Toggle settings menu
document.getElementById("settingsBtn").onclick = () => {
  document.getElementById("settingsMenu").classList.toggle("show");
};

// Dark mode
const toggle = document.getElementById("darkModeToggle");
toggle.checked = localStorage.getItem("darkMode") === "true";
applyDarkMode(toggle.checked);
toggle.addEventListener("change", () => {
  const isDark = toggle.checked;
  localStorage.setItem("darkMode", isDark);
  applyDarkMode(isDark);
});

function applyDarkMode(active) {
  document.body.classList.toggle("dark", active);
}

// Logout
function logout() {
  localStorage.removeItem("quizUser");
  window.location.href = "index.html";
}

// Render quizzes
const quizList = document.getElementById("quizList");

quizData.forEach(q => {
  const div = document.createElement("div");
  div.className = "quiz-card";
  div.style.backgroundColor = q.color;
  div.textContent = q.title;
  div.onclick = () => {
    localStorage.setItem("selectedQuiz", JSON.stringify(q));
    window.location.href = "start.html";
  };
  quizList.appendChild(div);
});
