function User(name, age) {
    this.name = name;
    this.age = age;
}
let user1 = new User("Ram", 30);
User.prototype.describe = function () {
    console.log(`${this.name} is ${this.age} old`);
}
class ES6User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        console.log(`${this.name} is ${this.age}`);
    }
}
console.log(Object.getPrototypeOf(user1) === User.prototype);
console.log(ES6User.prototype);
user1.describe();
console.log(Object.getPrototypeOf(ES6User.prototype));
console.log(Object.getPrototypeOf(User.prototype.describe));
console.log(Object.getPrototypeOf(user1));
