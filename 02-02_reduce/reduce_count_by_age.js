const people =[
  {name:"taro", age:17 },
  {name:"sachiko", age:20 },
  {name:"hana", age:25 },
  {name:"yoshio", age:15 },
  {name:"bystery", age:1000 }
]

category_counts = people.reduce((acc,person) => {
  let key;
  if (person.age < 20) {
    key = 'minor';
  } else if (person.age < 65) {
    key = 'adult';
  } else {
    key = 'senior';
  }

  acc[key]++;
  return acc;

},{minor:0,adult:0,senior:0})

console.log(category_counts);
