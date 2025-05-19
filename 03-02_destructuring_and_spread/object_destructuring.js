const user = {
  name:'jomo',
  age:37,
  country: 'JP'
};

//name,age取り出し
const {name:user_name,age:user_age} = user;

console.log(`${user_name} (${user_age})`);