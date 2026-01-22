
// for(let i = 1;i<10;i+=2){

//   if(i===7){
//     break;
//   }
//     console.log(i);
// }

let num;
document.getElementById("btn").onclick=function(){


num =Number( document.getElementById("num").value);
for(let i=1;i<=10;i++){
  //console.log(i);
//  for(let j=1;j<=10;j++){
//   console.log(i,j);
//  }
//console.log("2 x ",i,"=",2*i);
console.log(num," x " ,i," = ",num*i);
//console.log(`${num} x ${i} = ${num*i}`);
}
}
