//PART 2- LOOPS

//For loops
//Write a for loop that will iterate from 0 to 20.
//For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
//You will have to look up the syntax for the while loop, and also the modulus (%) operator.
for (var i = 0; i <= 20; i++) {
  if (i%2===0){
    console.log(i + " is even!");
  }else{
    console.log(i + " is odd!");
  }
}


//While loops
//Write a for loop that will iterate from 0 to 20.
//For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
//You will have to look up the syntax for the while loop, and also the modulus (%) operator.
var i=0;
while (i <= 20) {
  console.log(i);
  if (i%2===0){
    console.log(i + " is even!");
    i++;
  }else{
    console.log(i + " is odd!");
    i++;
  }
}
