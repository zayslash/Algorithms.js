//3 What is the largest prime factor of the number 600851475143
function isPrime(num){

    for (var counter = 0; counter <= 10000; counter++) {
    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
      if(num % counter === 0){
               console.log(counter);
      }
    }
}
}
isPrime(600851475143);
