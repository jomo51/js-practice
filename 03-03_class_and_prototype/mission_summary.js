class User {
  constructor(name,role) {
    this.name = name;
    this.role = role;
  }

  greet () {
    console.log(`Hi, I'm ${this.name}. My role is ${this.role}`);
  }

  static isUser(obj) {
    return obj instanceof User;
  }
}

class AdminUser extends User {
  constructor(name,role,permissions) {
    super(name,role);
    this.permissions = permissions;
  }

  showPermissions() {
    console.log(`${this.name}'s permissions: ${this.permissions.join(', ')}`);
  }
  
  greet() {
    console.log(`Hi I'm ${this.name}, and I'm an admin!`);
  }
}

const jomo = new User('jomo','engineer');
jomo.greet();

const admin = new AdminUser('opeko','admin',['manage_users','edit_config']);
admin.greet();
admin.showPermissions();

console.log(User.isUser(jomo));
console.log(User.isUser(admin));
console.log(User.isUser({}));