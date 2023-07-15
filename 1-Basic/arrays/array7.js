let itemList = ["Apple", "Mango", "Banana", "Orange", "Grapes", "Milk"];


// for(let i = itemList.length-1; i >= 0; i--){
//     console.log(itemList[i]);
// };

// Using map
itemList.reverse().map((itemname, index) => {
    console.log(index,"==>", itemname);
});