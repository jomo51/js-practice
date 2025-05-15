const users = [
  { name: "Taro", gender: "male" },
  { name: "Hanako", gender: "female" },
  { name: "Jiro", gender: "male" },
  { name: "Yui", gender: "female" },
  { name: "Makoto", gender: "non-binary" }
];

const genderUsers = users.reduce((acc,user) => {
  const key = user.gender;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(user.name);
  return acc;
},{})

console.log(genderUsers);