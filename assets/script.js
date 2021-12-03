// Selects html elements
const timer = document.querySelector(".timer");
let quesNumber = 0;
let timeLeft = 0
let timerstart;
// Array of Questions
const javascriptQues = [
    {
        question: "Who invented JavaScript?",
          option1: "Douglas Crockford",
          option2: "Sheryl Sandberg",
          option3: "Brendan Eich",
        correctAnswer: "Douglas Crockford"
      },
      {
        question: "Which one of these is a JavaScript package manager?",
          option1: "Node.js",
          option2: "TypeScript",
          option3: "npm",
        correctAnswer: "npm"
      },
      {
        question: "Which tool can you use to ensure code quality?",
          option1: "Angular",
          option2: "jQuery",
          option3: "ESLint",
        correctAnswer: "ESLint"
      }
];

// Starts quiz as well as timer

function timeStart() {
    timerstart = setInterval(function() {
      // if no time left, stop quiz else count down
      if (timeLeft <= 0) {
        stopQuiz();
      } else {
        timeLeft--;
        timer.innerText = timeLeft + " seconds remaining!";}
      }, 1000);
};

