function List(){
   
  this.listSize = 0;
  this.pos= 0;
  this.dataStore = [];
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length ;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.length = length;
  this.contains = contains;

function append(element){
    this.dataStore[this.listSize++] = element;
}

function find(element){
  for(var i = 0 ; i < this.dataStore.length; ++i){
    if(this.dataStore[i] == element){
       return i;
     }
  }
  return -1;
}

function remove(element){
var foundAt = this.find(element);
if(foundAt > -1){
  this.dataStore.splice(foundAt,1);
  --this.listSize;
  return true;
}
return false;
}

function length(){
  return this.listSize;
}

function toString(){
  return this.dataStore;
}

function insert(element , after){
  var insertPos = this.find(after);
  if(insertPos > -1){
    this.dataStore.splice(insertPos+1, 0, element);
    ++this.listSize;
    return true;
    
  }
  return false;
}

function clear(){
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

function contains(element){
  for (var i = 0 ; i < this.dataStore.length; ++i){
    if(this.dataStore[i] == element){
      return true;
    }
  }
 return false; 
}
}

function front(){
 this.pos = 0;
  
}

function end(){
  this.pos = this.listSize-1;
}

function prev(){
  if(this.pos > 0){
    --this.pos;
  }
}
function next(){
  if(this.pos < this.listSize-1 ){
    ++this.pos;
  }
}
function currPos(){
  return this.pos;
}
function moveTo(position){
  this.pos = position ;
  
}

function getElement(){
  return this.dataStore[this.pos];
}



var names = new List();
names.append("Zanif");
names.append("Ray");
names.append("Chichi");
console.log(names.toString());
names.remove("Ray");
console.log(names.toString());
names.insert("elvis", "Zanif");
console.log(names.toString());

names.front();
console.log(names.getElement());
names.next();
names.next();
console.log(names.getElement());
names.clear();

names.append("Erick");
names.append("Paul");
console.log(names.toString());
names.front();

names.insert("Jonathan", names.getElement());
names.insert("Mohamed", names.getElement());
console.log(names.toString());
console.log(names.getElement());
names.next();
console.log(names.getElement());
names.moveTo(3);
console.log(names.getElement());
console.log(names.currPos());
names.moveTo(0);
console.log(names.currPos());



var lime = new List();

lime.append("EGIDE");
lime.append("ZAY");
lime.append("NONA");
lime.append("ELVIS");
lime.append("JJ");
console.log(lime.toString());
  lime.front();
  while (lime.currPos() < lime.length() - 1){
    
    console.log(`Hello ${lime.getElement()}, Welcome`);
    lime.next();
  }
  

