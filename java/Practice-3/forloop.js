//for addition
//TYPE-1
let array = [1,2,3,4];
let n = array.length;
let sum = 0;
for(let i = 0; i<n; i++){
  sum += array[i];
}
console.log(sum);

//TYPE-2(for of)
for(let item of array){
  sum += item;
}
console.log(sum);

//TYPE-3(for Each)
array.forEach((item) => {
  sum += item;  
})
console.log(sum);

