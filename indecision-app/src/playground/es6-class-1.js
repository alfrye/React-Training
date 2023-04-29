class Person {
  constructor(name='Anonymous', age = 0) { // Creates a default name for parameters
    this.name = name;
    this.age = age;
  }
  getGreeting() {

    return `Hi, I am ${this.name}`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old`
  }
 }

const me = new Person('Alan Frye', 54);
console.log(me.getGreeting());
console.log(me.getDescription());
const other = new Person();
console.log(other.getGreeting());
console.log(other.getDescription());

