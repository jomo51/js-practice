//Super
class User{
  constructor(name) {
    this.name = name;
  }

  great() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

//child
class AdminUser extends User {
  constructor(name,permissions) {
    super(name);
    this.permissions = permissions;
  }

  showPermissions(){
    console.log(`${this.name}'s permissions: ${this.permissions.join(', ')}`);
  }
}

const admin = new AdminUser('jomo',['manage_users','edit_config']);
admin.great();
admin.showPermissions();