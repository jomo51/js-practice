const name = "jomo";
const age = 25

function introduce(name,age) {
  console.log(`こんにちは、${name}です。${age}歳です。`);
  if (age < 20){
    console.log("未成年です");
  } else {
    console.log("成人です。");
  }
  
}

introduce(name,age);