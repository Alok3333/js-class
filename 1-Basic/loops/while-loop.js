/*
    Structure of while loop

    init;
    while( condition ) {
        statement
        ++/--
    }
*/

console.log("The year Since 2000");

let i = 2000;
while (i <= 2023) {
  console.log("=>", i);
  i++;
}

console.log("The Even No year Since 2000");

let j = 2000;
while (j <= 2023) {
  if (j % 2 == 0) {
    console.log("=>", j);
  }
  j++;
}
