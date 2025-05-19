class User {
  constructor(name) {
    this.name = name;
  }

  //通常メソッド
  greet() {
    console.log(`[greet] Hi, I'm ${this.name}`);
  }

  //アロー
  greetAllow = () => console.log(`[greetAllow] Hi,I'm ${this.name}`);
}

//通常呼び出し
const jomo = new User('jomo');
jomo.greet();
jomo.greetAllow();

//取り出して呼び出し
const g = jomo.greet;
const ag = jomo.greetAllow;

g();
ag();