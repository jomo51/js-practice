const people = [
  { name: "taro", age: 17, gender: "male" },
  { name: "sachiko", age: 20, gender: "female" },
  { name: "hana", age: 25, gender: "female" },
  { name: "yoshio", age: 15, gender: "male" },
  { name: "mystery", age: 1000, gender: "robot" }
];

const adultsSummary = people
  .filter(p => p.age >= 20)
  .map(p => ({
    ...p,
    name: p.name + 'さん',
    isKnownGender: p.gender === 'female' || p.gender === 'male'
  }));

console.log(adultsSummary);


