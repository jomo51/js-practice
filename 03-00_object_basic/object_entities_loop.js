//プロファイル情報
const profile = {
  name: 'jomo',
  age: 37,
  job: 'in-house-enginear',
  language: 'JavaScript'
}

//Object.key()
console.log("Keys:");
Object.keys(profile).forEach(key => console.log(key));
console.log('');

//Object.value()
console.log("Values:");
Object.values(profile).forEach(value => console.log(value));
console.log('');

//Object.endtries
console.log('Entries:');
Object.entries(profile).forEach(([key,value]) => console.log(`${key}:${value}`));
console.log('');

