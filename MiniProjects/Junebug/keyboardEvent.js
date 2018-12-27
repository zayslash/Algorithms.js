//used to play sound in the browser on keydown Event Lister
//updated from using a form value to process input
//function myFunction(event)
    //var x = event.which || event.keyCode;

document.addEventListener('keydown', function(event) {
  var x = event.key;
  var y = event.keyCode;
   if (x == "c" || x == "C") {
           playsound(soundValue_c);
           console.log("worksc")
       }
    else if (x == "v" || x == "V"){
           playsound(soundValue_v);

    }else if (x == "b" || x == "B"){
           playsound(soundValue_b);

    }
    else if (x == "n" || x == "N"){
           playsound(soundValue_n);

    }
    /*else if (x == "d" || x == "D"){
           playsound();

    }*/
    else if (x == "f" || x == "F"){
           playsound(soundValue_f);

    }
    else if (x == "g" || x == "G"){
           playsound(soundValue_g);

    }
    else if (x == "h" || x == "H"){
           playsound(soundValue_h);

    }
    else if (x == "j" || x == "J"){
           playsound(soundValue_j);

    }
    else if (x == "r" || x == "R"){
           playsound(soundValue_r);

    }
    else if (x == "t" || x == "T"){
           playsound(soundValue_t);

    }else if (x == "y" || x == "Y"){
           playsound(soundValue_y);

    }  else if (x == "u" || x == "U"){
             playsound(soundValue_u);

      }
      else if (x == "5" || x == "%"){
             playsound(soundValueNum5);

      }
      else if (x == "6" || x == "^"){
             playsound(soundValueNum6);

      }
      else if (x == "7" || x == "&"){
             playsound(soundValueNum7);

      }else if (x == "8" || x == "*"){
             playsound(soundValueNum8);

      }else if (y == 37 ) {
              leftr();
              console.log("left works");
      }else if (y == 39){
              rightr();
              console.log("right works");
      }

 });
