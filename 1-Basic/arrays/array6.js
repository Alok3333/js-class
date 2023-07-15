// array of objects

let userlist = [
  {
    fullname: "Mahesh",
    city: "Bangalore",
    edu: "MCA",
    mobile: [908718887, 7979099877],
  },
  {
    fullname: "Ganesh",
    city: "Chennai",
    edu: "BCA",
    mobile: [889876565],
  },
  {
    fullname: "Ajit",
    city: "Mumbai",
    edu: "B.Tech",
    mobile: [5787888, 97990909, 579898],
  },
  {
    fullname: "Sumit",
    city: "Mumbai",
    edu: "M.Tech",
    mobile: [],
  },
];

console.log("The Total Users :", userlist.length);

userlist.map((user, index) => {
  console.log(user.fullname, user.city, user.edu);
  
  for(let i = 0; i < user.mobile.length; i++){
    console.log("\t", user.mobile[i]);
  }

  console.log("--------Info End---------");
});
