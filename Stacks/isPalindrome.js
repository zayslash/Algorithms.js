function Stack()  {
  this.dataStore = [];
  this.top =0;
  this.pop = pop;
  this.push = push;
  this.peek = peek;
  this.length= length;

  function push(element){
    this.dataStore[this.top++] = element;

  }

  function pop(){
    return this.dataStore[--this.top];
  }


  function peek(){
    return this.dataStore[this.top-1];
  }

  function length(){
    return this.top;
  }

  function clear(){
    this.top = 0;
  }

}


function isPalindrome(word){
       var s = new Stack();
      for (var i = 0; i < word.length; i++){
        s.push(word[i]);
      }
          var secWord = "";
          while(s.length() > 0){
            secWord += s.pop();
          }
          if (word == secWord){
            return true;
          }
          else{
            return false;
          }

}
console.log((isPalindrome("ROTAVATOR"))?(`Is a Palindrome`):(`Is not a Palindrome`));
