let userInfo = {
  fullname: "Ganesh",
  mobile: 707099,
  city: "Bangalore",
  gender: "Male",
  edu: "MCA",
};

// console.log(userInfo.fullname);
// console.log(userInfo.mobile);
// console.log(userInfo.city);
// console.log(userInfo.gender);
// console.log(userInfo.edu);

// array of objects

let userlist = [
  {
    fullname: "Mahesh",
    city: "Bangalore",
    edu: "MCA",
  },
  {
    fullname: "Ganesh",
    city: "Chennai",
    edu: "BCA",
  },
  {
    fullname: "Ajit",
    city: "Mumbai",
    edu: "B.Tech",
  },
  {
    fullname: "Sumit",
    city: "Mumbai",
    edu: "M.Tech",
  },
];

console.log("The Total Users :", userlist.length);

userlist.map((user, index) => {
  console.log(user.fullname, user.city, user.edu);
  console.log("----------------");
});
