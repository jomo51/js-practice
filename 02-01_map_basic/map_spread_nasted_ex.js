const user ={
  name:'たろう',
  age:35,
  address: {
    city:'Tokyo',
    zip: '123-4567'
  }
};

const updatedUser = {
  ...user,
  address:{
    ...user.address,
    zip:'987-6543'
  }
}
const updatedUser1 = {
  ...user,
  address:{
    zip:'987-6543'
  }
}

console.log(user);
console.log(updatedUser);
console.log(updatedUser1);
