class User {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name} (${this.age})`);
  }
}

const jomo = new User('jomo',37);
jomo.greet();