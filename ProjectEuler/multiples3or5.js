var sum = 0;
function fiveto3(){
for(i =1 ; i < 1000; i++){
  if(i % 3 === 0 || i % 5 ===0){
    sum = sum + i;
    console.log(i);
    }
}

return sum;
}

console.log(fiveto3());
