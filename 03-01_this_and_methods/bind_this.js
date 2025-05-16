const greeter = {
  prefix:'Hi, ',
  names:['jomo','オペ子','AI'],

  greetAllarrow: function () {
    this.names.forEach(name => {
      console.log(this.prefix + name);
    });
  },

  greetAllfunction: function () {
    this.names.forEach(function (name) {
      console.log(this.prefix + name);
    }.bind(this))
  }
};

greeter.greetAllarrow();
greeter.greetAllfunction();

