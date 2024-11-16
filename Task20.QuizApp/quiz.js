
function Question(text,choices,answer) {
    this.text=text
    this.choices=choices
    this.answer=answer
}

Question.prototype.checkAnswer=function(answer){
return this.answer===answer
}

function Quiz(questions){
this.questions=questions
this.score=0
this.questionIndex=0
}



Quiz.prototype.getQuestion=function(){


    return this.questions[this.questionIndex]
}

Quiz.prototype.isFinished=function(){
 
    return this.questions.length===this.questionIndex
}

Quiz.prototype.getAnswer=function(answer){
let quizs=this.getQuestion()
if(quizs.checkAnswer(answer)){
    this.score++

}
this.questionIndex++
}

const q1=new Question('Dunyanin sahesine en boyuk olkesi hansidir?',['Azerbaijan','Russia','USA','Canada'],'Russia');

const q2=new Question('Dunyanin sahesine en boyuk golu hansidir?',['Baykal','Miciqan','Goygol','Khazar'],'Khazar');

const q3=new Question('Biri front-end dilidir',['Python','PHP','JS','Java'],'JS')

// console.log(q1.checkAnswer('Russia'))
// console.log(q3.checkAnswer('JS'))

let questions=[q1,q2,q3]


let quiz=new Quiz(questions)
// console.log(quiz.isFinished())
// console.log(quiz.getQuestion())
// console.log(quiz.getAnswer('Russia'))
// console.log(quiz.getQuestion())
// console.log(quiz.getAnswer('Khazar'))
// console.log(quiz.getQuestion())
// console.log(quiz.getAnswer('Java'))
// console.log(quiz.score)






// console.log(quiz.isFinished())
loadQuestion()

function loadQuestion(){
    if(quiz.isFinished()){
        showScore()
    }else{
        let question=quiz.getQuestion()
        let choices=question.choices
        console.log(choices)
        choices.forEach((choice,index) => {
         let element=document.querySelector('#choice'+index)
         element.innerHTML=choice;
        //  console.log(element)
        getAnswer('btn'+index,choice)
        });
        document.querySelector('#question').textContent=question.text
        showProgress()
    }
}


function getAnswer(id,answer){
let btn=document.getElementById(id);

btn.onclick=function(){
    console.log('btn')
   console.log( quiz.getAnswer(answer))
    loadQuestion()
}

}

function showScore(){
let html=`
<h2>Score</h2><h4>${quiz.score}</h4>`
document.querySelector(".card-body").innerHTML=html
}

function showProgress(){
    let questionCount=quiz.questions.length;
    let questionNumber=quiz.questionIndex;


    document.querySelector("#progress").innerHTML=`
    Question ${questionNumber+1} of ${questionCount}
    `
}