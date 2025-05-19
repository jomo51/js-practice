class user {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }

  great() {
    console.log(`Hi, I'm ${this.name} (${this.age})`);
  }
}