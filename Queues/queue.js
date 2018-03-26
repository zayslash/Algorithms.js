function Queue(){
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;

  function enqueue(element){
    this.dataStore.push(element);
  }

  function dequeue(){
    return this.dataStore.shift();
  }

  function front(){
    return this.dataStore[0];
  }
  function back(){
    return this.dataStore[this.dataStore.length - 1];
  }

function toString(){
  var retStr = "";
  for(var i = 0; i < this.dataStore.length;  ++i){
    retStr += this.dataStore[i] + "\n";
  }
  return retStr;
}

 function empty(){
   if(this.dataStore.length === 0){
     return true;
   }else{
     return false;
   }
 }

}



var test = new Queue();
test.enqueue("erick");
test.enqueue("Jona");
test.enqueue("ray");
console.log(test.toString());
test.dequeue();
console.log(test.toString());
console.log(`Fornt of the Queue ${test.front()}`);
console.log(`Back of the Queue ${test.back()}`);
