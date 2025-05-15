const colors = ["red", "green", "blue", "yellow", "pink"];

console.log(colors.splice(2,1)); //要素2を削除
console.log(colors);

colors.splice(2,0,'orange');    //要素2に挿入
console.log(colors);

colors.splice(1,1,'lime');      //要素2を削除して挿入
console.log(colors);