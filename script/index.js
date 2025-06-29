function loginUser() {
  const username = document.getElementById('username').value.trim();

  if (!username) {
    alert("Please enter your name.");
    return;
  }

  localStorage.setItem("quizUser", JSON.stringify({ username }));
  window.location.href = "main.html";
}
