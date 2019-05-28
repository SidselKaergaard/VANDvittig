///////////////////////////////////////////////////// TIL TOP KNAP //////////////////////////////////////////////////////

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

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
    document.getElementById('svar').innerHTML = "Dit væskebehov er " + dinAnbefaling + " liter pr. dag. "
})





