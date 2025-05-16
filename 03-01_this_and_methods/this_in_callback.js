const greeter = {
  prefix: 'Hi, ',

  names: ['jomo','オペ子','AI'],

  greetAll: function () {
    this.names.forEach(function (name) {
      console.log(this.prefix + name);
    });
  }
}

// globalThis.prefix = 'global:';
var prefix = 'varGlobal';
greeter.greetAll();