const people = [
  { name: "taro", age: 17 },
  { name: "sachiko", age: 20 },
  { name: "hana", age: 25 },
  { name: "yoshio", age: 15 },
  { name: "mystery", age: 1000 }
];

const people_count = {
  adults: people
    .filter(p => p.age >= 20)
    .reduce(sum => sum + 1,0),
  minors: people
    .filter(p => p.age < 20)
    .reduce(sum => sum + 1,0)
}

console.log(people_count);
