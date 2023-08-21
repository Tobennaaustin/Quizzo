const questions = {
    geography: [
      { question: " Question 1: What is the capital of France?", answer: "Paris" },
      { question: " Question 2: Which continent is Egypt located in?", answer: "Africa" },
      { question: " Question 3: Who is likly to win if war breaks out between Nigeria and Niger?", answer: "Nigeria"},
      { question: " Question 4: Which river is the longest in the world?", answer: "Nile River"},
      { question: " Question 5: What is the capital city of Canada?", answer: "Ottawa"},
    ],
    science: [
      { question: " Question 1: What is the chemical symbol for water?", answer: "H2O" },
      { question: " Question 2: What is the force that pulls objects towards the center of the Earth?", answer: "Gravity" },
      { question: " Question 3: What is the chemical symbol for water?", answer: "H2O" },
      { question: " Question 4: What is the name for the central part of an atom that contains protons and neutrons?", answer: " Nucleus" },
      { question: " Question 5: Which planet is known as the 'Red Planet'?", answer: " mars" },
  
    ],
    sports:[
      { question: " Question 1: Who won the Premier League in 2021-22? ", answer: " Manchester City"},
      { question: " Question 2: Which country won the FIFA World Cup in 2018?", answer: "France"},
      { question: " Question 3: Who is the all-time top scorer in FIFA World Cup history?", answer: "Miroslav Klose"},
      { question: " Question 4: Which player holds the record for the most goals scored in a single calendar year?", answer: "Messi"},
      { question: " Question 5: Which club is known as 'The Red Devils'?", answer: "Manchester United"},
      { question: " Question 6: How many teams compete in the Premier League?", answer: "20"},
      { question: " Question 7: Who has won the most Premier League titles? ", answer: " Manchester United"},
      { question: " Question 8: Who is the all-time leading goal scorer in the Premier League?", answer: "Alan Shearer"},
      { question: " Question 9: Who won the Premier League in 1993-94? ", answer: "Manchester United"},
      { question: " Question 10:Who won the Premier League in 1992-93? ", answer: "Manchester United"},
      { question: " Question 11: What is the nickname of Manchester City?", answer: "The Citizens"},
      { question: " Question 12:What is the nickname of Arsenal?", answer: "The gunners "},
      { question: " Question 13: Who owns Chelsea?", answer: "Roman Abramovich"},
      { question: " Question 14: Who owns Manchester United?", answer: "The Glazer family"},
      { question: " Question 15: Who is the G-O-A-T", answer: "lionel messi"},
  
    ],
  };
  
  const container = document.querySelector(".container");
  const subjectSelect = document.getElementById("subject");
  const startBtn = document.getElementById("startBtn");
  const quizCard = document.querySelector(".quiz-card");
  const questionDiv = document.querySelector(".question");
  const answerInput = document.getElementById("answer");
  const submitBtn = document.getElementById("submitBtn");
  const resultCard = document.getElementById("resultCard");
  const correctAnswersDiv = document.getElementById("correct-answers");
  const wrongAnswersDiv = document.getElementById("wrong-answers");
  
  let currentSubject = "";
  let currentQuestionIndex = 0;
  let correctAnswers = 0;
  let wrongAnswers = 0;
  
  function generateQuestion(subject) {
    currentSubject = subject;
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    showNextQuestion();
  }
  
  function showNextQuestion() {
    if (currentQuestionIndex >= questions[currentSubject].length) {
      showResults();
      return;
    }
  
    const questionObj = questions[currentSubject][currentQuestionIndex];
    questionDiv.textContent = questionObj.question;
    answerInput.value = "";
  }
  
  function checkAnswer() {
    const questionObj = questions[currentSubject][currentQuestionIndex];
    const userAnswer = answerInput.value.trim().toLowerCase();
  
    if (userAnswer === questionObj.answer.toLowerCase()) {
      quizCard.classList.add("correct-answer");
      correctAnswers++;
    } else {
      quizCard.classList.add("wrong-answer");
      wrongAnswers++;
    }
  
    setTimeout(() => {
      quizCard.classList.remove("correct-answer", "wrong-answer");
      currentQuestionIndex++;
      showNextQuestion();
    }, 1000);
  }
  
  function showResults() {
    container.style.display = "block";
    resultCard.style.display = "block"
  
    correctAnswersDiv.textContent = `Correct Answers: ${correctAnswers}`;
    wrongAnswersDiv.textContent = `Wrong Answers: ${wrongAnswers}`;
  
    subjectSelect.disabled = false;
    startBtn.disabled = false;
  }
  function showQuizCompletionDialog() {
    quizCard.classList.add('hidden');
    quizCompleted.classList.remove('hidden');
    scoreElement.textContent = score;
    totalQuestionsElement.textContent = questions.length;
  }
  
  
  submitBtn.addEventListener("click", checkAnswer);
  
  startBtn.addEventListener("click", () => {
    const selectedSubject = subjectSelect.value;
    generateQuestion(selectedSubject);
    container.style.display = "block";
    subjectSelect.disabled = true;
    startBtn.disabled = true;
    resultCard.style.display = "none";
  });
  
  // Dynamically populate the subject selection dropdown options
  for (const subject in questions) {
    const option = document.createElement("option");
    option.value = subject;
    option.textContent = subject.charAt(0).toUpperCase() + subject.slice(1);
    subjectSelect.appendChild(option);
  }
  function checkAnswer() {
    const questionObj = questions[currentSubject][currentQuestionIndex];
    const userAnswer = answerInput.value.trim().toLowerCase();
  
    if (userAnswer === questionObj.answer.toLowerCase()) {
      quizCard.classList.add("correct-answer");
      correctAnswers++;
    } else {
      quizCard.classList.add("wrong-answer");
      wrongAnswers++;
    }
  
    setTimeout(() => {
      quizCard.classList.remove("correct-answer", "wrong-answer");
      currentQuestionIndex++;
      if (currentQuestionIndex < questions[currentSubject].length) {
        showNextQuestion();
      } else {
        showResults();
      }
    }, 1000);
  }
  