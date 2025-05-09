const peoples = [
  {name:"たろう",gender:"male"},
  {name:"さちこ",gender:"female"},
  {name:"はな",gender:"female"},
  {name:"よしお",gender:"male"}
]

const peopleTitles = peoples.map((people) => {
  //genderに不明な値がある場合
  if (people.gender !== "male" && people.gender !== "female"){
    return people.name + "(性別不明)";
  }
  return people.gender === "female" ? people.name + "ちゃん" : people.name + "くん";
})

console.log(peopleTitles);
