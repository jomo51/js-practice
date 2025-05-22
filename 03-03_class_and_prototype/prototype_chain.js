class Animal {
  speak() {
    console.log('Animal sound');
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof!');
  }
}

const dog = new Dog();

// prottype chainの確認
console.log(dog.__proto__);
console.log(dog.__proto__.__proto__);
console.log(dog.__proto__.__proto__.__proto__);
console.log(dog.__proto__.__proto__.__proto__.__proto__);