const greeter = {
  prefix: 'Hi, ',
  names: ['jomo', 'オペ子', 'AI'],

  greetAllWithMap: function () {
    const greetings = this.names.map(function (name) {
      return this.prefix + name;
    }.bind(this)); // ← ここで this を固定！

    console.log(greetings);
  }
};

greeter.greetAllWithMap();
