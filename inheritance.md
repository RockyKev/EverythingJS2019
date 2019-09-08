

class User {
  constructor(email, name) {
    this.email = email; 
    this.name = name;
    this.score = 0;
    console.log(`User ${this.name} created.`);
  }
  login() {
    console.log(this.email, 'just logged in.');
    return this; //ADD THis, so it returns the object
  }

  logout() {
    console.log(this.email, 'just logged out.');
    return this; //ADD THis, so it returns the object
  }

  updateScore(){
    this.score++;
    console.log(this.email, 'score is now', this.score);
    return this; //ADD THis, so it returns the object
  }

}

class Admin extends User {
  deleteUser(user) {
    users = users.filter( u => {
      return u.email != user.email;
    })

  }
}

//Create users + admin
let userOne = new User('ryu@ninjas.com', 'Ryu');
let userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
let admin = new Admin('shaun@ninjas.com', "shaun");

//see how many users there are. Should be 2.
var users = [userOne, userTwo];
console.log(users);

//admin removed that user from the pool.
admin.deleteUser(userTwo)
console.log(users);
