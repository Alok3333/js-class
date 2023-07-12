let input = 2331;

/* 
    isNaN() - is not a number
    ->for string it return true
    ->for number it return false
*/

if(isNaN(input)) {
    console.log(input, "- is a string data type...");
} else {
    console.log(input, "- is a number data type...");
    if(input % 2 == 0) {
        console.log(input, " is even number");
    } else {
        console.log(input, " is odd number");
    }
}