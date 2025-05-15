const employees = {
  e001: { name: "Yamada", age: 30, gender: "male" },
  e002: { name: "Tanaka", age: 25, gender: "female" },
  e003: { name: "Suzuki", age: 32, gender: "male" },
  e004: { name: "Sato", age: 29, gender: "female" },
  e005: { name: "Kato", age: 28, gender: "male" }
};

//データのみ抽出

const employeesSummary = GetEmployeeSummary(Object.values(employees));

Object.entries(employeesSummary).forEach(([key,value]) => {
  console.log(`🔻${key}`);
  console.log(`人数: ${value.peopleCnt}`);
  console.log(`平均年齢: ${value.averageAge}`);
  console.log(`名前一覧: ${value.peopleNames.join(', ')}`);
  console.log('');
});

//サマリーを出す関数
function GetEmployeeSummary(employeesData) {
  const males = employeesData.filter(employees => employees.gender === 'male');
  const females = employeesData.filter(employees => employees.gender === 'female');

  return ({
    males: getSummary(males),
    females: getSummary(females)
  });
}

//集計する関数
function getSummary(genderDatas){
  return ({
    peopleCnt :
      genderDatas.length,
    averageAge :
      genderDatas.reduce((sum, genderData) => sum + genderData.age,0) / genderDatas.length,
    peopleNames :
      genderDatas.map(genderData => genderData.name)
  });
}