function introduce(lang1,lang2) {
  console.log(`${this.name} likes ${lang1} and ${lang2}`);
}

const person ={
  name : 'jomo'
};

introduce.call(person,'javascript','python');
introduce.apply(person,['javascript','python']);

const boundIntroduce = introduce.bind(person,'javascript','python');
const boundIntroduceDiffer = introduce.bind(person);
boundIntroduce();
boundIntroduceDiffer('javascript','python');