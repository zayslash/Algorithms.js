var textfield = document.getElementById('textbox');
 var holdValue = "";

function insertValue(value, check){
   if (value == "c"){
     textfield.value = "";

   }else if (value == "del") {
     var warn = textfield.value.split("");
      warn[warn.length - 1] = "";
    textfield.value = warn.join("");
   }
   else if (value == "^") {
     holdValue = textfield.value;
     textfield.value = "";


   }
   else{
  textfield.value += value;
  }
}

function evaluateThis(){
var welp = textfield.value.split("");

for (let i =0; i <= welp.length ;i++){
  if (welp[i] === "x"){
    welp[i] = "*";
  }
}
console.log(welp);

if (holdValue != ""){
  textfield.value = Math.pow(holdValue,welp.join());
  holdValue = "";
}else{
textfield.value =  eval(String(`${welp.join("")}`));
}
}


function ColorLuminance(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}


function randomColor(){
  var colors  = document.getElementById('body');

  let rand_color = `${'#'+Math.floor(Math.random()*16777215).toString(16)}`;
  let second_rand =  ColorLuminance(rand_color, 3);
  let first_rand = ColorLuminance(rand_color, -1.0);
  colors.style.backgroundImage = '-moz-linear-gradient('+ "45deg" + ', ' + first_rand + ' 0%'+', ' + second_rand+ ' 43%'+ ', ' + rand_color + ' 61%'+', ' + second_rand + ' 100%' +')';
  colors.style.backgroundImage = '-webkit-linear-gradient('+ "45deg" + ', ' + first_rand + ' 0%'+', ' + second_rand+ ' 43%'+ ', ' + rand_color + ' 61%'+', ' + second_rand + ' 100%' +')';


}
