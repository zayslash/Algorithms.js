document.write('<script src="keyboardEvent.js"></script>');
//Div Pad Variables
var pads ={
 num1  :  document.getElementById('pad-1'),
 num2  :  document.getElementById('pad-2'),
 num3  :  document.getElementById('pad-3'),
 num4  :  document.getElementById('pad-4'),
 num5  :  document.getElementById('pad-5'),
 num6  :  document.getElementById('pad-6'),
 num7  :  document.getElementById('pad-7'),
 num8  :  document.getElementById('pad-8'),
 num9  :  document.getElementById('pad-9'),
 num10 :  document.getElementById('pad-10'),
 num11 :  document.getElementById('pad-11'),
 num12 :  document.getElementById('pad-12'),
 num13 :  document.getElementById('pad-13'),
 num14 :  document.getElementById('pad-14'),
 num15 :  document.getElementById('pad-15'),
 num16 :  document.getElementById('pad-16'),
};

var assetChoice=['Trapo', 'Dilla', 'House', 'Deephouse'];
var iterator = 0; //assets iterator

//screen variables
var screenmpc= document.getElementById("mpcs");
var left= document.getElementById("left");
var right= document.getElementById("right");

var pointIterator = 0;


//left arrow on screen selector
var leftr= function(){
  if(assetChoice[iterator]=== 'Trapo'){
  iterator=iterator + 3;
   pointIterator = iterator;}
  else if(assetChoice[iterator]==='Deephouse' || assetChoice[iterator]==='Dilla' || assetChoice[iterator]==='House' ){
  iterator= iterator -1;
  pointIterator = iterator;

  }

  miniDisplay();

  console.log("left works " + iterator);
};

//right arrow on screen selector
var rightr = function(){
if(assetChoice[iterator]=== 'Deephouse'){
  iterator=iterator - 3;
pointIterator = iterator;}
  else if(assetChoice[iterator]==='Trapo' || assetChoice[iterator]==='Dilla' || assetChoice[iterator]==='House' ){
  iterator= iterator + 1;
  pointIterator= iterator;
    }

 miniDisplay();

  console.log("right works " + iterator);
} ;

//Cursur onclick for miniDisplay()
var onScreenButton_left = left;
var onScreenButton_right= right;
onScreenButton_left.onclick = function(){
leftr();}
onScreenButton_right.onclick = function(){
rightr();}

//Now in use assignes value of audio to variable for use in pads and 'keydown'
var soundValue_c = `assets/Audio/samplesets/${assetChoice[iterator]}/kick1.wav`, soundValue_v = 'assets/Audio/samplesets/'+ assetChoice[iterator] +'/snare.wav';
var soundValue_b = 'assets/Audio/samplesets/' + assetChoice[iterator] + '/ohat.wav' , soundValue_n = 'assets/Audio/samplesets/' + assetChoice[iterator] + '/chihat2.wav';
var soundValue_f = 'assets/Audio/samplesets/' + assetChoice[iterator] + '/clack.wav' , soundValue_g = 'assets/Audio/samplesets/' + assetChoice[iterator] + '/cap2.wav';
var soundValue_h = 'assets/Audio/samplesets/' + assetChoice[iterator] + '/cap1.wav' , soundValue_j = 'assets/Audio/samplesets/' + assetChoice[iterator] + '/9.wav';
var soundValue_r = 'assets/Audio/samplesets/' + assetChoice[iterator] + '/21.wav' , soundValue_t = 'assets/Audio/samplesets/' + assetChoice[iterator] + '/24.wav';
var soundValue_y = 'assets/Audio/samplesets/' + assetChoice[iterator] + '/shaker.wav' , soundValue_u = 'assets/Audio/samplesets/' + assetChoice[iterator] + '/snare2.wav';
var soundValueNum5 ='assets/Audio/samplesets/' + assetChoice[iterator] + '/', soundValueNum6='assets/Audio/samplesets/' + assetChoice[iterator] + '/';
var soundValueNum7= 'assets/Audio/samplesets/' + assetChoice[iterator] + '/', soundValueNum8='assets/Audio/samplesets/' + assetChoice[iterator] + '/';
var  audio;

//display the assets on mini screen
function miniDisplay(){
  if(iterator === 0){
    screenmpc.innerHTML = `${assetChoice[iterator]} Pack` ;
    console.log('Trapo Pack');

  }else if (iterator === 1) {
    screenmpc.innerHTML = `${assetChoice[iterator]} Pack` ;

  console.log("J Dilla ");
  }else if(iterator ===2){
    screenmpc.innerHTML = `${assetChoice[iterator]} Pack` ;

  console.log("House Pack");
  }else if (iterator === 3) {
    screenmpc.innerHTML = `${assetChoice[iterator]} Pack` ;

  console.log("Deephouse pack");
  }
};



//to be used to change color of pads
function changeColor(newColor,elem) {
  elem.style.color = newColor;
  elem.style.backgroundColor = 'red';

}

function volumeSet(){
audio.volume = 0.2;
}

//volume identifier
function volume(){
var volumeRet = audio.volume;
if (volumeRet === 1){
  console.log(`MAXvolume:${volumeRet}`);
}else{
 console.log(`volume:${volumeRet}`);
}
}

//play sound in browser
function playsound(song){
audio = new Audio(song);
 audio.load();
//volumeRet = audio.volume;
 audio.play();
   //volume();
console.log(`${song} play`);
}


 pads.num1.onclick = function(){
  playsound(soundValueNum5);
  console.log("works")
 };

 pads.num2.onclick = function(){
 playsound(soundValueNum6);
 };

 pads.num3.onclick = function(){
 playsound(soundValueNum7);
 };
 pads.num4.onclick = function(){
 playsound(soundValueNum8);
 };

pads.num5.onclick = function(){
 playsound(soundValue_u);
};

pads.num6.onclick = function(){
playsound(soundValue_y);
};

pads.num7.onclick = function(){
playsound(soundValue_t);
};
pads.num8.onclick = function(){
playsound(soundValue_r);
};
pads.num9.onclick = function(){
playsound(soundValue_j);
};
pads.num10.onclick = function(){
playsound(soundValue_h);
};
pads.num11.onclick = function(){
playsound(soundValue_g);
};
pads.num12.onclick = function(){
playsound(soundValue_f);
};
pads.num13.onclick = function(){
playsound(soundValue_c);
console.log(soundValue_c);
};
pads.num14.onclick = function(){
playsound(soundValue_v);

};
pads.num15.onclick = function(){
playsound(soundValue_b);
};

pads.num16.onclick = function(){
playsound(soundValue_n);

//changeColor('white',pad_num16);
};
miniDisplay();
