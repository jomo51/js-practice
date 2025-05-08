//年連によって料金を変更
function getTicketPrice(age) {
  if (age < 6) {
    return "未就学児です";
  } else if (age < 18) {
    return "子供料金：500円";
  } else if (age >= 65) {
    return "シニア料金：700円";
  } else {
    return "通常料金：1000円";
  }
}

//ティーンエイジャー判定関数
const isTeenager = (age) => age >= 13 && 19 >= age;

const testAges = [3,10,18,30,70];

for (let i = 0; i < testAges.length; i++) {
  const age = testAges[i];
  console.log(`${age}歳 -> ${getTicketPrice(age)}`);
  console.log(`${age}歳 -> ティーンエイジャー？:${isTeenager(age)}`);
  
}