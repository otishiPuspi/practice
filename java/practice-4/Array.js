console.log("hello world");

 let array = [1,2,3,4,5]
console.log(array);
 console.log(typeof array);
console.log(array.length);
 let sum = 0
 array.forEach((item)=>{
   sum = sum + item;
})
 let avg = sum / array.length;
 console.log(avg);

 let array = ["apple","orange","strawbery","mango"];
 let item = "jackfruit";
 array.push(item);
 array.push("lichi");
 array.unshift("grapes");
 array.shift();
 array.shift();

 array.pop();
 console.log(array);

let array = [1,2,3,4,5];
console.log(array.reverse());

console.log(array);
console.log(array.sort());
