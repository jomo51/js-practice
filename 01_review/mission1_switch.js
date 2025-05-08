//switch文で果物を判定するやつ

fruits = [ 'apple','banana','grape','orange'];

function rtn_fruits_sentents (fruits_name) {
  switch (fruits_name) {
    case 'apple':
      console.log('🍎りんごです');
      break;
    case 'banana':
      console.log('🍌バナナです');
      break;
    case 'grape':
      console.log('🍇ぶどうです');
      break;
    default:
      console.log('🍽️ その果物は分かりません');
      break;
  }
}

for (let i = 0; i < fruits.length; i++) {
  rtn_fruits_sentents(fruits[i]);
}