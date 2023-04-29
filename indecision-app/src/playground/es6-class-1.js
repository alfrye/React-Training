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

// Student is subclass of Person
 class Student extends Person {
      constructor(name, age, major) {
        super(name,age);
        this.major = major;
      }
      hasMajor() {
        return !!this.major
      }
      // overrides method from parent class
      getDescription() {
        let description = super.getDescription();
        if(this.hasMajor) {
            description = description + ` Their major is ${this.major}`;
        }
        return description;
      }
 }

 class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name,age);
        this.homeLocation = homeLocation;
    }
    // override method from parent
    getGreeting() {
     let greeting = super.getGreeting();
     greeting += ` I'm visiting from ${this.homeLocation}`;
     return greeting;
    }
 }

// const me = new Student('Alan Frye', 54, 'Seattle');
// //console.log(me.getGreeting());
// console.log(me.hasMajor());
// console.log(me.getDescription());
// console.log(me,getGreeting());

// const other = new Student();
// //console.log(other.getGreeting());
// console.log(other.getDescription());
// console.log(other.hasMajor());
// console.log(other.getGreeting())
 
const me = new Traveler('Alan Frye', 54, 'Seattle');
//console.log(me.getGreeting());
//console.log(me.hasMajor());
//console.log(me.getDescription());
console.log(me.getGreeting());

const other = new Traveler();
//console.log(other.getGreeting());
//console.log(other.getDescription());
//console.log(other.hasMajor());
console.log(other.getGreeting())
 