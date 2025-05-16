const person = {
  name: 'jomo',

  greetArrow: () => {
    console.log(`arrow: ${this.name}`);
  },

  greetFunction: function () {
    console.log(`function: ${this.name}`);
  }
};


person.greetArrow();
person.greetFunction();