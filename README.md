# 🎯 Quiz Master - Front-End Quiz App

A responsive front-end quiz application built using **HTML, CSS, and JavaScript**.  
It supports user login, quiz selection, score calculation, and a dark mode toggle.

---

## 🚀 Features

- 🔐 Simple login with username
- 🎨 Light / Dark mode toggle
- 🧠 Multiple quizzes with multiple questions
- ✅ Instant feedback on correct/wrong answers
- 📊 Score shown at the end
- 📦 All quiz data is editable from `main.html`
- 💻 Fully front-end — no backend or database

---

## 🧱 Tech Stack

- HTML5
- CSS3 (with Flexbox + Responsive design)
- Vanilla JavaScript (no frameworks)

---

## 📁 Project Structure

📁 quiz-app/
├── index.html # Login page
├── main.html # Dashboard with quizzes
├── start.html # Quiz introduction page
├── quiz.html # Quiz in action
├── style.css # All page styles
├── script/
│ ├── main.js
│ ├── start.js
│ └── quiz.js
└── README.md

---

## 📋 How to Add More Quizzes

Open `main.html`, scroll to the `<script type="application/json" id="quizData">` section, and add more quiz objects:

```json
{
  "id": "python",
  "title": "Python Basics",
  "color": "#306998",
  "questions": [
    {
      "question": "What is the correct extension for Python files?",
      "options": [".py", ".python", ".pt"],
      "answer": 0
    }
  ]
}
