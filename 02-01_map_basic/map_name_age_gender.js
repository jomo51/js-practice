const peoples = [
  {name:"たろう",gender:"male",age: 17},
  {name:"さちこ",gender:"female",age: 10},
  {name:"はな",gender:"female",age: 30},
  {name:"よしお",gender:"male",age: 70},
  {name:"ナゾ",gender:"robot",age: 1000}
]

const peoplesTitle = peoples.map((people) => {
  //性別不明時はサフィックスつけて終わり
  if (people.gender !== "female" && people.gender !== 'male') return people.name + '(性別不明)'; 
  //20以上はさんつけて終わり
  if (people.age >= 20) return people.name + 'さん';

  return people.gender === 'female' ? people.name + 'ちゃん' : people.name + 'くん';

})

console.log(peoplesTitle);
