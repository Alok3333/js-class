
/* 
    syntax of forEach()
    arrayName.forEach((element, index) => {
        statement
    });
*/

let itemList = ["Apple", "Mango", "Banana", "Orange", "Grapes", "Milk"];

itemList.forEach((itemname, index) => {
    console.log(index, itemname);
});