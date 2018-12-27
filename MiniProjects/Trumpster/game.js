/*document.ElementById(;timer').innerHTML= 03 + ":" + 00;
startTimer();
function startTimer(){
var presentTime= document.getElementById('timer').innerHTML;
var timeArray= presentTime.split(/[:]+/);
var m = timeArray[0];
var s = checkSecond((timeArray[1] - 1));
if(s ==59){m=m-1}
document.getElementById('timer).innerHTML = m + ":"+ s;
setTimeout(startTimer,1000);
}
function checkSecond(sec){
if(sec < 10 && sec >=0) 
    {sec = "0" + sec};
if (sec< 0){
  sec="59"};
  return sec;
}*/

var randbox = document.getElementById('randbox');
var container = document.getElementById('game-container');
var score = document.getElementById('score');
let points = 0;
let life = 3;
score.innerHTML = `Score: ${points}`
var life_Dom = document.getElementsByClassName('life');
var audio = new Audio('Untitled.wav');
var kanye = new Audio('kanye.wav');

function randboxClick(){
  points++;

  if(points== 10){
    randbox.src = "images/Kanye1.png";
    kanye.play();
  }else if (points== 25) {
    randbox.src = "images/Trump2.png";

    audio.play();
  }
  else if (points== 40) {
    randbox.src = "images/Kanye1.png";
  }

  else{
    randbox.src = "images/Trump1.png";
  }
  score.innerHTML = `Score: ${points}`
  randbox.style.top = `${(Math.floor(Math.random() * 50))}%`;
  randbox.style.left = `${(Math.floor(Math.random() * 50))}%`;
  console.log("clicked");
}

function containerClick(){
  life_Dom[life - 1].style.visibility = 'hidden';
  life--;
  if (life == 0){
  container.innerHTML = "GAME OVER";
  }
}

var elementIsClicked = false;

function clickHandler(){
  elementIsClicked = true;
}
randbox.addEventListener('click', clickHandler);


container.onclick = function(){

if(elementIsClicked == true){
  randboxClick();
  elementIsClicked = false;
}
else{
  containerClick();
}

}
