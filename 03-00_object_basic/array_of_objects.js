//オブジェクト配列

const users = [
  {name:"Taro" , age: 31, gender : "male"},
  {name:"Hanako" , age: 25, gender : "female"},
  {name:"Jiro" , age: 28, gender : "male"}
];

//ループしながら名前を表示
users.forEach(user => {
  console.log(user.name);
});

//年齢だけを取り出した配列
const users_age = users.map(user => user.age);
console.log(users_age);

//30歳以上のユーザーだけを表示
const over30_users = users.filter(user => user.age >=30);
console.log(over30_users);
