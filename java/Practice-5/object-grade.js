let subjectMark = {
  chemistry : 78,
  biology : 80
}

function gradeCalculator(mark){
  if(mark >= 80 && mark <= 100){
    //console.log("grade:A+");
    return "A+";
  }
    else if(mark >= 70 && mark <= 79){
    //console.log("grade: A");
    return "A";
  }
  else if(mark <= 69 && mark >= 40){
    console.log("grade: B");
  }
  else{
    console.log("mark:F");
  }
}
for(let item in subjectMark){
  let mark = subjectMark[item]
  let grade = gradeCalculator(mark)
  console.log(`${item} : ${grade}`);
}