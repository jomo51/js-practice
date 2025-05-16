const person = {
  name:"jomo",
  greet: function(){
    console.log(`こんにちは、${this.name}です！`);
  }
};

const person1 = {
  name:'hoge',
  greet: person.greet  //person.greetの内容がそのままはいる
};
person.greet();
person1.greet();