let questions = document.getElementById("question")
let nextBtn= document.getElementById("next-btn")
// let option4= document.getElementById("option4")
let currentQuestionIndex=0
let optionsPlaceholder = document.getElementsByClassName("option")
// console.log(optionsPlaceholder)
 
//  console.log(optionsPlaceholder)
    let totalResult = document.getElementById("result")
    let currentOptionIndex = 0
    let restartQuiz = document.getElementById("restart-btn");
    let counter=0;
    



// every key value pair is called property
//      question: "What does HTML stand for?",
 //this is one property 
 //and 3 properties question,options and correct answer inside curly braces are called one object
let quizQuestions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Markup Language",
        "Hyper Tabular Markup Language",
        "Hyperlink and Text Markup Language"
      ],
      correctAnswer: "Hyper Text Markup Language"
    },
    {
      question: "Which tag is used to define an unordered list in HTML?",
      options: [
        "&lt;ul&gt;",
        "&lt;ol&gt;",
        "&lt;li&gt;",
        "&lt;list&gt;"
      ],
      correctAnswer: "&lt;ul&gt;"
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: [
        "&lt;break&gt;",
        "&lt;br&gt;",
        "&lt;lb&gt;",
        "&lt;line&gt;"
      ],
      correctAnswer: "&lt;br&gt;"
    },
    {
      question: "How do you add a comment in HTML?",
      options: [
        "!-- This is a comment --",
        "// This is a comment //",
        "** This is a comment **",
        "# This is a comment #"
      ],
      correctAnswer: "!-- This is a comment --"
    },
    {
      question: "Which tag is used to define the header for a webpage or section?",
      options: [
        "&lt;header&gt;",
        "&lt;heading&gt;",
        "&lt;title&gt;",
        "&lt;h1&gt;"
      ],
      correctAnswer: "&lt;header&gt;"
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Computer Style Sheets",
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Colorful Style Sheets"
      ],
      correctAnswer: "Cascading Style Sheets"
    },
    {
      question: "Which CSS property is used to change the text color of an element?",
      options: [
        "text-color",
        "font-color",
        "color",
        "text-style"
      ],
      correctAnswer: "color"
    },
    {
      question: "How do you center-align a block-level element horizontally?",
      options: [
        "text-align: center;",
        "align: center;",
        "horizontal-align: center;",
        "margin: auto;"
      ],
      correctAnswer: "margin: auto;"
    },
    {
      question: "What is the purpose of the 'float' property in CSS?",
      options: [
        "To align elements vertically",
        "To create a border around an element",
        "To wrap text around an element",
        "To change the opacity of an element"
      ],
      correctAnswer: "To wrap text around an element"
    },
    {
      question: "Which CSS property is used to create rounded corners on an element?",
      options: [
        "border-radius",
        "box-shadow",
        "corner-radius",
        "border-style"
      ],
      correctAnswer: "border-radius"
    },
    {
      question: "What is Bootstrap?",
      options: [
        "A programming language",
        "A back-end framework",
        "A JavaScript library",
        "A front-end framework"
      ],
      correctAnswer: "A front-end framework"
    },
    {
      question: "Which class is used to create a responsive, mobile-first navigation bar in Bootstrap?",
      options: [
        ".navbar-expand",
        ".navbar-nav",
        ".navbar-toggle",
        ".navbar-brand"
      ],
      correctAnswer: ".navbar-expand"
    },
    {
      question: "Which class is used to create a responsive grid system in Bootstrap?",
      options: [
        ".container",
        ".row",
        ".col",
        ".grid"
      ],
      correctAnswer: ".row"
    },
    {
      question: "How can you add a drop-down menu in Bootstrap?",
      options: [
        "By using the &lt;dropdown&gt; tag",
        "By adding the .dropdown class to a list item",
        "By using the &l"
        
      ],
        
        correctAnswer: "By using the &l"

    }
]



  
function displayQuestion(index,index2) {
 // quizQuestions[index]  will access the whole object then we add .question ,the .question will access the question property
//  for (let i = 0; i < quizQuestions.length; i++) {

 questions.innerHTML = quizQuestions[index].question;
//  }
 for (let i = 0; i < optionsPlaceholder.length; i++) {
  optionsPlaceholder[i].innerHTML = quizQuestions[index2].options[i];
  optionsPlaceholder[i].disabled = false; // Enable all option buttons


}

}

function nextQuestion() {
  currentQuestionIndex++;
   currentOptionIndex ++;
 
  // console.log(quizQuestions.length)
  // if(quizQuestions.length>=quizQuestions.options){
    // currentOptionIndex=0;
    // currentQuestionIndex=0;
  // }
  displayQuestion(currentQuestionIndex, currentOptionIndex);



}
function showAnswer() {
  let selectedOption = this.innerHTML;
  console.log(selectedOption);

  // Disable all options after selection
  for (let i = 0; i < optionsPlaceholder.length; i++) {
    optionsPlaceholder[i].disabled = true;
  
  }
  for (let i = 0; i < quizQuestions.length; i++) {

  // Check if the selected option is the correct answer for the current question
  if (selectedOption === quizQuestions[i].correctAnswer) {
    counter++;
    totalResult.innerHTML = counter;

  }

}
}







function restartQuizz(){
  
    // currentQuestionIndex = 0; // Reset to first question
    questions.innerHTML = quizQuestions[0].question;
   
                    
    
    
counter=0;
totalResult.innerHTML= counter;
// currentQuestionIndex.innerHTML=;

currentQuestionIndex = 0;
currentOptionIndex = 0;
displayQuestion(currentQuestionIndex, currentOptionIndex);
}




// Display the first question initially
displayQuestion(0,0);

// Add event listener for "Next Question" button click
nextBtn.addEventListener("click", nextQuestion);
restartQuiz.addEventListener("click", restartQuizz);



 for (let i = 0; i < optionsPlaceholder.length; i++) {
optionsPlaceholder[i].addEventListener("click", showAnswer);

}



  
