function getTitle(name, age, gender) {
  let title;
  //20以上はすべて'さん'
  if (age >= 20) {
    return `${name}さん`;
  }

  //20以下の場合男女によって敬称かわる
  if (gender == 'female') {
    return `${name}ちゃん`;
  }else if (gender == 'male') {
    return `${name}くん`;
  }
}

function getCategory(age) {
  if (age >= 13 && age <= 19) {
    return 'ティーンエイジャーです';
  } else if (age < 13){
    return '未成年です';
  } else if (age >= 65){
    return 'シニアです';
  } else {
    return '特に分類されません';
  }
}

function introduce(name,age,gender) {
  if (gender !== 'female' && gender !== 'male') return console.log('不明');
  const ja_sex = gender === 'female' ? '女性' : '男性';

  console.log(`${getTitle(name,age,gender)}(${age}歳・${ja_sex})は${getCategory(age)}。`)
}

const people = [
  {name : 'たろう', age:17,gender: 'male'},
  {name : 'さちこ', age:10,gender: 'female'},
  {name : 'よしお', age:45,gender: 'male'},
  {name : 'はな', age:68,gender: 'female'},
  {name : 'ナゾ', age:30,gender: 'robot'}
];

people.forEach((person) => {
  introduce(person.name,person.age,person.gender);
})