const quizQuestions = [
    {
      
      question: "which of the following keywords is used define a variable in javascript?",
      options: ["var", "let", "both a&b", "none of the above"],
      correctAnswer: "both a&b"
    },
    {
      question: "How can a datatype be declared to be a constant type?",
      options: ["const", "let", "var", "constant"],
      correctAnswer: "const"
    },
    {
      question: "which of the methods is used to access HTML elements using javascript?",
      options: ["getElementbyid()", "getElementbyClassName()", "both a&b", "none of the above"],
      correctAnswer: "both a&b"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 30;
  let timerInterval;
  
  
  function startQuiz() {
 
    document.getElementById("start-button").style.display = "none";
    displayQuestion();
    startTimer();
  }
  
 
  function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");
  
 
    questionText.innerHTML = "";
    answerButtons.innerHTML = "";
  
  
    questionText.innerHTML = currentQuestion.question;
  
    
    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.classList.add("answer-button");
      answerButtons.appendChild(button);
  
      button.addEventListener("click", function() {
        checkAnswer(option);
      });
    });
  }
  

  function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
  
    if (selectedOption === currentQuestion.correctAnswer) {
      score++;
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }

  function startTimer() {
    timerInterval = setInterval(function() {
      timeLeft--;
  
   
      document.getElementById("timer").textContent = timeLeft;
  
   
      if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
  }
  

  function endQuiz() {
 
    clearInterval(timerInterval);
  
   
    const scorePercentage = (score / quizQuestions.length) * 100;
  
  
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} out of ${quizQuestions.length}</p>
      <p>Score Percentage: ${scorePercentage}%</p>
    `;
  }
  

  document.getElementById("start-button").addEventListener("click", startQuiz);