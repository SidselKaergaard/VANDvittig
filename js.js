// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}








////////////////////////////////////////////////REGNEMASKINE///////////////////////////////////////////////////////////
let anbefaling = 40;
let divi = 1000;

function beregnAnbefaling(tal, anbefaling, divi) {
    return (Number(tal) * anbefaling / divi)
}

document.getElementById('submit').addEventListener('click', function () {
    let tal = document.getElementById('tal').value
    let dinAnbefaling = beregnAnbefaling(tal, anbefaling, divi)
    document.getElementById('svar').innerHTML = dinAnbefaling + " liter pr. dag er din anbefalede mængde vand. "
})


////////////////////////////////////////////////QUIZ///////////////////////////////////////////////////////////
let questions = [
    ["Hvor mange procent af en tomat er vand?", "45%", "94%", "96%", "94%"],
    ["Hvor mange procent af en agurk er vand?", "45,2%", "83,5%", "96,4%", "96,4%"],
    ["Hvor mange procent af en salat er vand?", "45%", "95,3%", "96%", "95,3%"],
    ["Hvor mange procent af en ærter er vand?", "79%", "83,5%", "96%", "96%"],
    ["Hvor mange procent af en hvidkål er vand?", "45,2%", "83,5%", "96,4%", "96,4%"]
]

var index = Math.floor(Math.random() * questions.length)
let question = questions[index]
let winCount = 0

document.getElementById('question').innerText = question[0]
document.getElementById('b1').innerText = question[1]
document.getElementById('b2').innerText = question[2]
document.getElementById('b3').innerText = question[3]

function remakeQuiz(){
    questions.splice(index, 1);
    index = Math.floor(Math.random() * questions.length)
    question = questions[index]
    document.getElementById('question').innerText = question[0]
    document.getElementById('b1').innerText = question[1]
    document.getElementById('b2').innerText = question[2]
    document.getElementById('b3').innerText = question[3]
}

//Knap 1 
document.getElementById('b1').addEventListener("click", function () {

    let answer = question[1]
    if (answer === question[4]) {
        winCount++;
    }
    
    if(questions.length == 1){
        questions = []
        console.log("WE ARE RESTARTING: " + questions.length)
    }

    if(questions.length != 0){
    document.getElementById('correctQuiz').innerHTML = "Korrekte svar: " + winCount
    
    remakeQuiz()
}else{
    document.getElementById('correctQuiz').innerHTML = "QUIZ OVER!!! :) : Korrekte svar: " + winCount
    document.getElementById('b1').disabled = true
    document.getElementById('b2').disabled = true
    document.getElementById('b3').disabled = true
}
    
    
})

//Knap 2
document.getElementById('b2').addEventListener("click", function () {
    let answer = question[2]
    if (answer === question[4]) {
        winCount++;
    }
    
    if(questions.length == 1){
        questions = []
        console.log("WE ARE RESTARTING: " + questions.length)
    }

    if(questions.length != 0){
   
    
    document.getElementById('correctQuiz').innerHTML = "Korrekte svar: " + winCount
    

    remakeQuiz()
}else{
    document.getElementById('correctQuiz').innerHTML = "QUIZ OVER!!! :) : Korrekte svar: " + winCount
    document.getElementById('b1').disabled = true
    document.getElementById('b2').disabled = true
    document.getElementById('b3').disabled = true
}
})

//Knap 3
document.getElementById('b3').addEventListener("click", function () {
    let answer = question[3]
    if (answer === question[4]) {
        winCount++;
    }
    
    if(questions.length == 1){
        questions = []
        console.log("WE ARE RESTARTING: " + questions.length)
    }

    if(questions.length != 0){
   
    
    document.getElementById('correctQuiz').innerHTML = "Korrekte svar: " + winCount
    
    remakeQuiz()
}else{
    document.getElementById('correctQuiz').innerHTML = "QUIZ OVER!!! :) : Korrekte svar: " + winCount
    document.getElementById('b1').disabled = true
    document.getElementById('b2').disabled = true
    document.getElementById('b3').disabled = true
}
})