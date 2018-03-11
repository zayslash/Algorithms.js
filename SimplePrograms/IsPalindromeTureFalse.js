/*let first_name = "zanif";
const last_name = "Sandy";
console.log(`This program by ${first_name} ${last_name}.`);
*/
function IsPalindrome(pstring ){
let foward_str,  backward_str= "", lowerstring;
var newstring = pstring.toLowerCase();
    lowerstring = newstring.replace(/\s/g, '');
    for(r = lowerstring.length - 1 ; r >=  0 ; r--){
    backward_str += lowerstring[r];
    } if(backward_str == lowerstring){
           return 1;}
      else{
           return 0;}
}
if(IsPalindrome('Poor Dan is in a droop')){
        console.log("True");}
else {
        console.log("False"); 
}