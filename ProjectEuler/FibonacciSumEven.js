//2 By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

var t1 = 1;
var t2 =2;
var nextTerm = 0;
var sum = 2;
var n = 32;

for( i = 1; i <= n; ++i)
    {
        // Prints the first two terms.

        if(i == 1)
        {
            console.log(t1);
            continue;
        }
        if(i == 2)
        {
            console.log(t2) ;
            continue;
        }

        nextTerm = t1 + t2;
        t1 = t2;
        t2 = nextTerm;


        if(nextTerm % 2 ===0){
        console.log(nextTerm);
        sum += nextTerm;
        }
    }

   console.log(`Sum is ${sum}`);
  
