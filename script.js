const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const nextBtn = document.getElementById('next-btn');

let currentQuestionIndex = 0;

const questions = [
  {
    question: "You are at a crossroads. Do you go left into the forest or right toward the mountains?",
    answers: [
      { text: "Left - Forest", next: 1 },
      { text: "Right - Mountains", next: 2 }
    ]
  },
  {
    question: "In the forest, you find a glowing chest. What do you do?",
    answers: [
      { text: "Open it", next: 3 },
      { text: "Leave it alone", next: 4 }
    ]
  },
  {
    question: "The mountains are steep. You see a cave. Enter or turn back?",
    answers: [
      { text: "Enter the cave", next: 5 },
      { text: "Turn back", next: 6 }
    ]
  },
  {
    question: "You open the chest and find treasure! You win!",
    answers: []
  },
  {
    question: "You walk away, but get lost in the forest. Game over.",
    answers: []
  },
  {
    question: "Inside the cave, a dragon greets you and offers gold. You win!",
    answers: []
  },
  {
    question: "You slip on the mountain path and fall. Game over.",
    answers: []
  }
];

function startGame() {
  currentQuestionIndex = 0;
  showQuestion();
}

function showQuestion() {
  clearAnswers();
  const current = questions[currentQuestionIndex];
  questionEl.textContent = current.question;

  current.answers.forEach(answer => {
    const button = document.createElement('button');
    button.textContent = answer.text;
    button.classList.add('answer-btn');
    button.addEventListener('click', () => {
      currentQuestionIndex = answer.next;
      showQuestion();
    });
    answersEl.appendChild(button);
  });

  nextBtn.style.display = current.answers.length === 0 ? 'inline-block' : 'none';
}

function clearAnswers() {
  answersEl.innerHTML = '';
}

function nextQuestion() {
  startGame(); // Restart game
}

startGame(); // Start the game when page loads
