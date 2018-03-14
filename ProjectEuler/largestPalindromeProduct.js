function reverseNumber(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}

function palindrom(){
 var r= 1 , y =1;
var largest = 0;
 while(r <= 1000){ 
   var num1 =  r;
   var num2 = 0;
 while(num1 <= 1000 && num2 <= num1){ 
        product = num1 * num2;
   if (product == reverseNumber(product)){
     console.log(`${num1} x ${num2} = ${product}`);
          if(product > largest){
            largest = product;
          }
   }
   num1 = num1 + 1;
   num2= num2 + 1;
}
r++;
}
console.log(``)
console.log(`The largest is ${largest}`);
}
console.log(palindrom());