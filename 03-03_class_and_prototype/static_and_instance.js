class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hi,I'm ${this.name}`);
  }

  static desscribeClass() {
    console.log('this is the User class.');
  }
}

const jomo = new User('jomo');

jomo.greet();

User.desscribeClass();