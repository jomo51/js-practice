// オブジェクト操作
const user = {
  name: "Taro",
  age : 30,
  gender : "male"
};

// 表示
console.log(user.name);

// 年齢の更新
user.age++;

// プロパティーの追加
user.email = "taro@example.com";

// プロパティーの削除
delete user.gender;

// 内容確認
console.log(user);

