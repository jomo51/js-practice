const school = {
  name: 'Sunshine High',
  classes:[
    {
      name:'Class A',
      students: [
        {name:'Alice',score:80},
        {name:'Bob' , score:90}
      ]
    },
    {
      name:'Class B',
      students: [
        {name:'Charlie',score:70},
        {name:'Diana' , score:85}
      ]
    },
  ]
};

//全学生
const allStudents = [];
school.classes.forEach((cls) => {
  cls.students.forEach(student => allStudents.push(student));
});

//平均点
const avgScore = allStudents.reduce((acc,student) => acc + student.score ,0) / allStudents.length;

//学生出力
allStudents.forEach((student) => {
  console.log(`${student.name}: ${student.score}`);
})
console.log('');
console.log(`平均点: ${Math.round(avgScore * 10)/10}`);