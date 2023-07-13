
/*
    Structure of Array
    arrayname[index] => Element

    itemList[0] => Apply
    itemList[1] => Mango
    itemList[2] => Banana
    itemList[3] => Orange
    itemList[4] => Grapes
    itemList[5] => Milk
*/

let itemList = ["Apple", "Mango", "Banana", "Orange", "Grapes", "Milk"];

// console.log(itemList[0]);
// console.log(itemList[1]);
// console.log(itemList[2]);
// console.log(itemList[3]);
// console.log(itemList[4]);
// console.log(itemList[5]);

for(let i = 0; i<itemList.length-1; i++){
    console.log(itemList[i]);
}