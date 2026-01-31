//1. You are given an array of numbers. Print the second last element of the array.

let array = [3,2,5,1,4];
console.log("Given array:", array);
let n = array.length;
console.log("second last element is:", array[array.length-2]);

2. /*You are given an array of names of some cats. Check if the name "Choma" exists in the array. 
   If "Choma" is found, print "Hey Choma, I finally found you." 
   Otherwise, print "Ohh, Choma where are you?"*/

  let catsName = ["mini","honey","bunny"];
  console.log("Cat's name:",catsName); 
  function catFinding(){
  for(let item of catsName){
    if(item === "choma" ){
      console.log("Hey Choma, I finally found you.");
      return;
    }
  }
      console.log("Ohh, Choma where are you?");
    
  }

catFinding();


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

function eo(num){
  if(num % 2 === 0 ){
    console.log(`The number ${num} is Even`);
  }
  else{
       console.log(`The number ${num} is Odd`);
  }
}
eo(100);

/*6. You are given a temperature value. 
   If it is greater than 30, print "Hot". 
  Otherwise, print "Normal". 
 Using a function is mandatory.*/

 function measureTemp(val){
  if(val > 30){
    console.log("Hot");
  }
  else{
    console.log("Normal");
  }
 }
 measureTemp(50);

 //BMI calculation

 function calculationBMI(weight,height){
  let result = weight/(height * height);
  console.log(`Your BMI is: ${result.toFixed(2)}`);
  
  if(result < 18){
    console.log("Underweight");
  }
  else if( result >= 18 && result <= 25){
    console.log("Normal");
  }
  else if(result > 25 && result <= 30){
    console.log("Overweight");
  }
  else{
    console.log("Obecity");
  }
}
calculationBMI(49,1.65);

