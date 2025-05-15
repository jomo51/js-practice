const users = [
  { id: 1, name: "Taro", age: 30, active: true },
  { id: 2, name: "Hanako", age: 25, active: false },
  { id: 3, name: "Jiro", age: 40, active: true },
  { id: 4, name: "Yui", age: 29, active: false }
];

//ID2のユーザー
console.log(users.find(user => user.id === 2));

//全員30歳以上？
console.log(users.every(user => user.age >= 30));

//誰かアクティブ？
console.log(users.some(user => user.active));

//trueユーザーのみの表示
const activeUsers = users
  .filter(user => user.active)
  .map(user => user.name);

console.log(activeUsers);