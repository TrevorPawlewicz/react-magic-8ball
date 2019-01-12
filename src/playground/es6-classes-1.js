// A class is like a blueprint

class Person {
    // you can set the default for the argument while passing it in:
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    
    // this function runs ONLY if we explicitly call it:
    getGreeting(){
        // es5 syntax for string concatination:
        //return 'Hi, I am ' + this.name + '!';
        
        // es6 syntax using back ticks:
        return `Hi, I am ${this.name}!`
    }
    
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
} //-------------------------------------------------------------------------



// let's creat a sub-class of Person (extend the class):
class Student extends Person {
    constructor(name, age, major){
        // must call the parent class Person with 'super' to get its info:
        super(name, age);
        this.major = major;
    }
    
    hasMajor(){
        // '' (empty string) is a falsey value.
        // !'' flips it to actual bool true.
        // !!'' flips true to actual boolean FALSE value
        return !!this.major;
    }
    
    getDescription(){
        let description = super.getDescription();
        
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        
        return description;
    }
} //-------------------------------------------------------------------------

// let's creat another sub-class of Person (extend the class):
class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();
        
        if (this.homeLocation) {
            greeting += ` I am visiting from ${this.homeLocation}`
        }
        
        return greeting;
    }
} //-------------------------------------------------------------------------



// const me = new Person('Trev', 100);
// console.log(me.getDescription());
// 
// const other = new Person();
// console.log(other.getDescription());

const me = new Traveler('Trev', 100, 'Philly');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());