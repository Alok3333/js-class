//2- Use Cases

// 1. Check if User with such name Exists
// 2. Adding element to the Array
// 3. Remove Duplicates Element in the Array
// 4. Concatenating the Array

// we are learn ... Set Object, Includes().some()
// reduce().find().findIndex().concat()

const users = [
    {
        id: 1,
        name: "Ajay",
        isActive: true,
        age: 20,
    },
    {
        id: 2,
        name: "Alok",
        isActive: false,
        age: 22,
    },
    {
        id: 3,
        name: "Vinay",
        isActive: true,
        age: 26,
    },
    {
        id: 4,
        name: "Vijay",
        isActive: true,
        age: 28,
    }
];

// // Level 0 - solution
// const isNameExist = (name, users) => {
//     let exist = false;
//     for(let i = 0; i < users.length; i++){
//         if(users[i].name === name){
//             exist = true;
//         }
//     }
//     return exist;
// };

// console.log(isNameExist("Vijay",users));

// // Level 1 - solution
// const isNameExist = (name, users) => {
//     const user = users.find((user) => user.name === name);
//     return Boolean(user);
// }

// console.log(isNameExist("Al", users));

// // Level 2 - solution
// const isNameExist = (name, users) => {
//     const index = users.findIndex((user) => user.name === name);
//     return index >= 0;
// }

// console.log(isNameExist("vinay", users));

// // Level 3 - solution
// const isNameExist = (name, users) => {
//     const user = users.some((user) => user.name === name);
//     return user;
// }

// console.log(isNameExist("Vinay", users));

// 2. Adding element to the Array

// // Level 0 -solution
//  const arr = [1, 2];
//  const append = (arr, ele) => {
//     arr.push(ele);
//     return arr;
//  }

// //  const newArray = append(arr, 3);
//  console.log(append(arr, 3));
//  console.log(arr);

// // Level 1 - solution
// const arr = [1, 2];
// const append = (arr, ele) => {
//     return [...arr, ele];
// }

// console.log(append(arr, 3));
// console.log(arr);

// 3. Remove Duplicates Element in the Array

