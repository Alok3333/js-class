/*
    Structure of for loop
    for(init; condition; increment/decrement){
        statement
    }
*/

for (let i = 1; i <= 10; i++) {
  console.log("The for say :", i);
}

console.log("For Loop in Reverse Order");

for (let i = 10; i >= 1; i--) {
  console.log("The for say :", i);
}

console.log("----------- +by 2 -------------");

for (let i = 1; i <= 20; i = i + 2) {
  console.log("The For say :", i);
}

console.log("Printed even number");

for (let i = 2; i <= 20; i = i + 2) {
  console.log("The For say :", i);
}
