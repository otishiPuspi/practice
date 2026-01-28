Object declaration

let person = {
   //key : value,
  name : "Otishy islam puspi",
  age : 22,
  tell : +8806324673468
 }
 console.log(person);
console.log(person.name);

let person = {
  //key : value,
  name : "Otishy islam puspi",
  age : 22,
  tell : +8806324673468,
  hobbie : ["reading","gardening","cooking"],
  address : {
    city : "Gazipur",
    country : "Bangladesh"
  }
}
console.log(person.address);
console.log(person.hobbie);
console.log(person.hobbie[0]);
 delete person.tell;
 console.log(person);

let ms = {
  bangla : 5,
  english :5,
  physics : 5
}
let sum = 0;
let item;
for( item in ms){
  sum += ms[item]
}

console.log(sum);

console.log(Object.keys(ms));
console.log(Object.values(ms));
console.log(Object.entries//(ms));