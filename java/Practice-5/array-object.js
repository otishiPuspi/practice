//Find max & min
let array = [1,2,3,4,5];
console.log(array);
console.log(...array);
 let maxValue = Math.max(...array);
 console.log(maxValue);
 
 let minValue = Math.min(...array);
  console.log(minValue);

  //Remove Duplicate values from an array
  let arr = [1,2,1,3,4,3,5];
  console.log(...arr);
  let Array = [...new Set(arr)]
  console.log(...Array);

  //Merge & sort two arrays
  let a = [4,3,1];
  let b = [5,2];
  console.log(a,b);
  let c = b.concat(a);
  console.log(c);
  console.log(c.sort());

  //Find second largest number in an array
  let d = [3,2,5,1,6];
  d.sort();
  console.log(d);
  let n = d.length;
  //console.log(d[n-2]);
  console.log(d[(d.length-2)]);

  