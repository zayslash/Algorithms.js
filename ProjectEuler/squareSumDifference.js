function sumSqaureDiff(){
  var difference= 0;
  var sumOfSquare= 0;
  var squareOfsum=0;
  for ( i=1 ; i <= 100; i++ ){
    sumOfSquare += (i*i);
    squareOfsum += i;
    
  }
  squareOfsum = squareOfsum * squareOfsum;
  console.log(sumOfSquare);
  console.log(squareOfsum);
  difference = squareOfsum - sumOfSquare;
  console.log(difference);
}
sumSqaureDiff();