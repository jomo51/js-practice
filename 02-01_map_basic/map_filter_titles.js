const peoples = [
  {name:'taro',age:17,gender:'male'},
  {name:'sachiko',age:20,gender:'female'},
  {name:'hana',age:25,gender:'female'},
  {name:'yoshio',age:15,gender:'male'},
  {name:'mystery',age:1000,gender:'robot'}
];

const adults = peoples.filter(people => people.age >= 20);
//console.log(adults);

const adultsTitles = adults.map(people => people.name + 'さん');
console.log(adultsTitles);