//userオブジェクト
const user = {
  name: 'jomo',
  age: 37,
  country: 'JP',
  hobby: 'guiter',
  nameDisply:function () {
    console.log(this.name);
  }
};

const {name:name1,hobby} = user;
console.log(`1:${name1}_${hobby}`);

const {name:name2,any} = user;
console.log(`1:${name2}_${any}`);

//お題_nameとその他にまとめる
const {name,...other} = user;
console.log(`1:${name}_${JSON.stringify(other)}`);

user.nameDisply();

const user_fuj = {...user,name:'fuj'};
user_fuj.nameDisply();


//furits配列
const fruits = ['apple','banana','orange'];

const [firstFruit,...otherFruits] = fruits;
console.log(firstFruit);
console.log(otherFruits);