function copy(arr1 , arr2){
  for(i=0;i < arr1.length; i++){
    arr2[i] = arr1[i];
  }
}

var names = ["zanif","Rayona","Egide", "JJ", "elvis"];
var namesvari = [];
copy(names, namesvari);

for(i=0;i < namesvari.length; i++){
  namesvari[i] = namesvari[i].toLowerCase();
}

var name_in = prompt("Enter name to search for");
if(names.indexOf(name_in) >= 0){
var positionOfName = names.indexOf(name_in);
}
else if(namesvari.indexOf(name_in) >= 0 ){
 var positionOfName = namesvari.indexOf(name_in); 
}

if (positionOfName >= 0){
  console.log(`${name_in} is located in ${positionOfName} position`);
}else {
  console.log(`${name_in} is not in array.`);
}
