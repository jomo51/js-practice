const baseProfile = {
  name: 'jomo',
  age: 37,
  country: 'JP',
  hobby: 'guiter',
  role: 'engineer'
};

const {name,role,...otherInfo} = baseProfile;
console.log(name);
console.log(role);
console.log(JSON.stringify(otherInfo));

const updateProfile = {
  ...baseProfile,
  age:38,
  skills:['JavaScript','RPG']
};
const {hobby,...summaryProfile} = updateProfile;

console.log(JSON.stringify(summaryProfile));