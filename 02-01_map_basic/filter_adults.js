const peoples = [
  {name:'taro',age:17},
  {name:'sachiko',age:20},
  {name:'hana',age:25},
  {name:'yoshio',age:15}
]

const adults = peoples.filter((people) => people.age >= 20);

console.log(adults);
