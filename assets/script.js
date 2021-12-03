// Selects html elements
const quiz = document.getElementById('quiz');
const results = document.getElementById('results');
let quesNumber = 0;
let timer = 0

// Questions
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




