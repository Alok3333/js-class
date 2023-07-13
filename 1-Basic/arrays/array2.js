let itemList = ["Apple", "Mango", "Banana", "Orange", "Grapes", "Milk"];

for(let i = 0; i < itemList.length; i++){
    console.log(i, "=>", itemList[i]);
};

console.log("-------Using while loop-------");

let i = 0;
while(i < itemList.length){
    console.log(i, "=>", itemList[i]);
    i++;
};

console.log("-------Using do while loop-------");

let j = 0;

do{
    console.log(j , "=>", itemList[j]);
    j++;
}while(j < itemList.length)
