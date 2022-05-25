const quizData = [
    {
        question: "How many sides does a triangle have?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "c",
    },
    {
        question: "How many sides does a square have?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "d",
    },
    {
        question: "How many sides does a pentagon have?",
        a: "2",
        b: "4",
        c: "5",
        d: "6",
        correct: "c",
    },
    {
        question: "How many sides does a hexagon have?",
        a: "6",
        b: "4",
        c: "8",
        d: "3",
        correct: "a",
    }
]


const quiz = document.getElementById("quiz");
let questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const btn = document.getElementById("submit");

let correctAnswers = 0


const choices = document.getElementsByName("answer");
let currentQuestion = 0;

loadQuiz()

function loadQuiz(){

    unCheck();
    currentQuizData = quizData[currentQuestion];
    console.log(currentQuizData);

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

   // check(currentQuizData);


}

function check(){

    let UserAnswer = undefined;

    choices.forEach(radio => {
        if(radio.checked==true){
            console.log("checked");
            UserAnswer = radio.value;
            console.log(UserAnswer);


            //if(answer == quizData.correct){
               // console.log("correct")
            //    correctAnswers++;

            //   if (lastquestion == true) {
                   // alert("Quiz Completed!, you got " + ((correctAnswers / 4) * 100 ) + "%");
           //     }
          //  }
        

        }
    });
    return UserAnswer;
} 

function unCheck(){
    choices.forEach(radio => {
        radio.checked=false;
    });
}





btn.addEventListener("click", () => {

    //const currentQuizData = quizData[currentQuestion];


    const answer = check();

    if (answer){

        if (answer === quizData[currentQuestion].correct){
            correctAnswers++;
            //console.log("correct");
        }
        

        currentQuestion++;
        
        if (currentQuestion < quizData.length ){
          //  console.log(quizData.length);
            //console.log("clicked");
    
          //  console.log(currentQuestion);
    
            loadQuiz();
        }else{
          // alert("Quiz Completed!, you got " + ((correctAnswers / 4) * 100 ) + "%");
            let percentage = (correctAnswers/quizData.length) * 100
            quiz.innerHTML = `<h1> You got ${percentage}% </h1>
            <button onclick="location.reload()">Reload</button>`;
            quiz.style.height = "188px";
            quiz.style.width = "385px";
            
        }
      
    }

    
    

});

///function correct(answer, correctAnswer){
   // if(answer == correctAnswer){
    //    //console.log("correct")
    //    correctAnswers++;
    //    loadQuiz();
   // }
   // else{
      //  console.log("Incorrect")
     //   loadQuiz();
   // }
//}