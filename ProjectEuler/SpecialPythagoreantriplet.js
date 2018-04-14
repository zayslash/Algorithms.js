
for (a = 0; a <= 1000; a++){
  for(b = 1; b <= 1000; b++){
   for(c = 2; c <= 1000; c++){
  if(Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2)){
     if((a+b+c === 1000 )&& ((b > a ) && (c > b))){

    console.log(`${a} + ${b} + ${c}` );
    console.log(`The product is ${a*b*c}` );
   }

  }
}
}
}
