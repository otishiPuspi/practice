//1. You are given an array of numbers. Print the second last element of the array.

let array = [3,2,5,1,4];
console.log("Given array:", array);
let n = array.length;
console.log("second last element is:", array[array.length-2]);

2. /*You are given an array of names of some cats. Check if the name "Choma" exists in the array. 
   If "Choma" is found, print "Hey Choma, I finally found you." 
   Otherwise, print "Ohh, Choma where are you?"*/

  let catsName = ["choma","honey","bunny"];
  console.log("Cat's name:",catsName); 


/*3. You are given an array of marks of 5 subjects, each out of 100. 
  If the total marks are greater than 400, print "Pass". 
   Otherwise, print "Fail".*/

   let subMark = [70 ,90 ,60 ,65 ,75];
    console.log(subMark);

    let sum = 0;
    for(let item of subMark){
      sum += item;
    }
    console.log(sum);

    if(sum >= 400){
      console.log("Pass");
    }
    else{
      console.log("Fail");
    }

/*4. You are given an object with a person’s age. 
   If the age is greater than 18, print "Adult".   Otherwise, print how many years are needed to become an adult.*/

  let personAge = {
    age:17
  }
  if(personAge.age > 18) {
    console.log("Adult");
  }
  else{ 
    let yearsLeft = 18 - personAge.age;
    console.log(yearsLeft + " years are needed to become an adult.");
  }

/*5. You are given a number. 
 Check whether the number is even or odd. 
  You must use a function for this task*/




