const peoples = [
  { name: "taro", age: 17, gender: "male" },
  { name: "sachiko", age: 20, gender: "female" },
  { name: "hana", age: 25, gender: "female" },
  { name: "yoshio", age: 15, gender: "male" },
  { name: "mystery", age: 1000, gender: "robot" }
];

function getDisplayGender(gender) {
  return (gender !== 'male' && gender !== 'female') ? 'extended' : gender;
}

function formatPerson(person) {
  return {
    ...person,
    name: person.name + 'さん',
    isKnownGender: getDisplayGender(person.gender)
  }
}

const adultsSummary = peoples
  .filter(p => p.age >= 20)
  .map(p => formatPerson(p));

console.log(adultsSummary);
