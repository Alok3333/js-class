
/* 
    syntax of map()
    arrayName.map((element, index) => {
        statement
    });
*/

let itemList = ["Apple", "Mango", "Banana", "Orange", "Grapes", "Milk"];

// // Level-1

// itemList.map((itemname, index) => {
//     console.log(index);
//     console.log(itemname);
//     console.log("---------------");
// });

// // Level-2

itemList.map( function(itemname, index) {
    console.log(index, "==>", itemname);
});

console.log("------without index--------");

itemList.map(itemname => {
    console.log(itemname);
    console.log("-------------");
})
