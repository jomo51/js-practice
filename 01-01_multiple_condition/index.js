function getTitle(name, age, gender) {
  let title;
  //20以上はすべて'さん'
  if (age >= 20) {
    return `${name}さん`;
  }

  //20以下の場合男女によって敬称かわる
  if (gender == 'female') {
    return `${name}ちゃん`;
  }else if (gender == 'male') {
    return `${name}くん`;
  }
}

function getCategory(age) {
  if (age >= 13 && 19 >= age) {
    return 'ティーンエイジャーです';
  } else if (age < 19){
    return '未成年です';
  } else if (age >= 65){
    return 'シニアです';
  } else {
    return '特に分類されません';
  }
}

function introduce(name,age,gender) {
  let ja_sex;
  if (gender == 'female') {
    ja_sex = '女性';
  } else if (gender == 'male') {
    ja_sex = '男性';
  } else {
    return console.log('不明');
    
  }
  console.log(`${getTitle(name,age,gender)}(${age}歳・${ja_sex})は${getCategory(age)}。`)
}

introduce('太郎',46,'malex');
