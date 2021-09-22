var readlineSync = require('readline-sync');
var score = 0;
var name = readlineSync.question("What is your name?");
console.log("Hi!!" + name)

console.log("---------------------")
console.log("Lets play a quiz")
console.log("How much you know coding...")

console.log("---------------------")
var questionOne  = {
  question: "Inside which HTML element do we put the JavaScript?",
  answer: "script"
}

var questionTwo = {
  question: "Where is the correct place to insert a JavaScript?",
  answer: "body"
}
var questionThree = {
  question: "How to declare a function in JavaScript?",
  answer: "function"
}
var questionFour = {
  question: "How to declare a variable in ES5?",
  answer: "var"
}
var questionFive = {
  question: "What do we use to get external JavaScript file?",
  answer: "src"
}
var question = [questionOne, questionTwo, questionThree, questionFour, questionFive];

for(var i=0; i < question.length; i++){
  var currentQuestion = question[i];

  var userAnswer=readlineSync.question(currentQuestion.question);

  if(userAnswer === currentQuestion.answer){
    console.log("Correct!")
    score++
  }else{
    console.log("Wrong")
  }
  console.log("score is "+ score)
}