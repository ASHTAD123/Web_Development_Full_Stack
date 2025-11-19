document.addEventListener('DOMContentLoaded', (e)=>{

  const startQuizBtn = document.getElementById("start-btn");
  const nxtQuizBtn = document.getElementById("next-btn");
  const restartQuizBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");




  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];

  let currentQuestionIndex = 0
  let score = 0;

  
  function startQuiz(){

    startQuizBtn.classList.add('hidden');
    resultContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');

    showQuestion();
  }

  startQuizBtn.addEventListener("click", startQuiz);

  function showQuestion(){
    
    nxtQuizBtn.classList.add('hidden');
    questionText.textContent = questions[currentQuestionIndex].question;

    choicesList.innerHTML = `` ;//clear previous choices

    questions[currentQuestionIndex].choices.forEach(choice =>{

        const li = document.createElement("li");
        li.textContent = choice;
        li.addEventListener('click',() => selectAnswer(choice));
         choicesList.appendChild(li);
    })
  }

  function selectAnswer(choice){

    const correctAns = questions[currentQuestionIndex].answer;

    if(choice === correctAns){
        score++;
    }
    nxtQuizBtn.classList.remove('hidden');
  
 }

   nxtQuizBtn.addEventListener('click', ()=>{
         
        currentQuestionIndex++;

         if(currentQuestionIndex < questions.length){
             showQuestion();
         }else{
            showResult();
         }
   })

   restartQuizBtn.addEventListener("click",()=>{

    currentQuestionIndex = 0;
    score = 0 ;
    resultContainer.classList.add('hidden');
    startQuiz();
   })


   function showResult(){

        questionContainer.classList.add('hidden'); 
        resultContainer.classList.remove('hidden');

        scoreDisplay.textContent = `${score} out of ${questions.length}`
   }

})