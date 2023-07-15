// UserCases
// 1. write code to get array of names from given array of users
// 2. Get back only active users
// 3. Sort users by age descending

const users = [
  {
    id: 1,
    name: "Ajay",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "Aman",
    isActive: true,
    age: 18,
  },
  {
    id: 3,
    name: "Alok",
    isActive: true,
    age: 21,
  },
  {
    id: 4,
    name: "kamlesh",
    isActive: false,
    age: 30,
  },
];

// solution 1
const names = [];
// for (let i = 0; i < users.length; i++) {
//   if (users[i].isActive) {
//     names.push(users[i].name);
//   }
// }
// console.log(names);

// // solution 2
// users.forEach((user) => {
//   if (user.isActive) {
//     names.push(user.name);
//   }
// });
// console.log(names);

// solution 3
const name1 = users
  .filter((user) => user.isActive)
  .sort((user1, user2) => (user1.age < user2.age ? 1 : -1))
  .map((user) => user.name);
console.log("name1", name1);

// // sort
// users.sort((user1, user2) => (user1.age < user2.age ? 1 : -1));
// console.log(users);
