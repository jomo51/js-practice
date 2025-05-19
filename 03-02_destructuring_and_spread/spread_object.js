const baseProfile = {
  name: 'jomo',
  age:37
};

const newProfile = {
  ...baseProfile,
  age : 38,
  gender:"male"
};

console.log(newProfile);