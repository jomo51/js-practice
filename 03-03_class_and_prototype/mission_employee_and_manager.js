class Employee {
  constructor(name,position) {
    this.name = name;
    this.position = position;
  }

  introduce() {
    console.log(`Hi,I'm ${this.name}.I work as a ${this.position}`);
  }

  static isEmployee(obj){
    return obj instanceof Employee;
  }
}

class Manager extends Employee {
  constructor(name,position,team) {
    super(name,position);
    this.team = team;
  }

  //override
  introduce(){
    console.log(`Hi,I'm ${this.name}.and I magage ${this.team.length} people`);
  }

  listTeam(){
    console.log(this.team.join(', '));
  }
}

const emp = new Employee('jomo','engineer');
emp.introduce();

const mgr = new Manager('opeko','manager',['alice','bob']);
mgr.introduce();
mgr.listTeam();

console.log(Employee.isEmployee(emp));
console.log(Employee.isEmployee(mgr));
console.log(Employee.isEmployee({}));