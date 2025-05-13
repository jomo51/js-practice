const people = [
  { name: "taro", age: 17 },
  { name: "sachiko", age: 20 },
  { name: "hana", age: 25 },
  { name: "yoshio", age: 15 },
  { name: "mystery", age: 1000 }
];

const group_count = people.reduce((acc,person) => {
  let key;
  if (person.age < 20) {
    key = 'minor';
  } else if (person.age < 65) {
    key = 'adult';
  } else {
    key = 'senior';
  }

  acc[key].push(person);

  return acc;

},{minor:[],adult:[],senior:[]})
console.log(group_count);
