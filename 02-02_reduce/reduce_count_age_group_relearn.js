const people = [
  { name: "taro", gender: "male" },
  { name: "sachiko", gender: "female" },
  { name: "hana", gender: "female" },
  { name: "yoshio", gender: "male" },
  { name: "nanashi", gender: "unknown" },
  { name: "another", gender: "robot" }
];

const people_counts = people.reduce((acc,person) => {
  const key = person.gender;

  acc[key] = (acc[key] || 0) + 1;
  return acc;
},{})

console.log(people_counts);
