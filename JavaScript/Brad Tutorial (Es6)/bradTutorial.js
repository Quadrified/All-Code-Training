//Traversy media 

// Strings

const s = "Hello world"

console.log(s.length);

console.log(s.toUpperCase());

console.log(s.substring(0, 5));

console.log(s.substring(0, 5).toLowerCase());

console.log(s.split(""));

console.log(s.split(', '));

console.log(s+ ' Omer');

const list = 'Omer, Quadri, Mohammed';

console.log(list.split(', '));


//Arrays

const city = ['Hyderabad', 'Delhi', 'Bombay', 'Chennai'];
 
city[4] = 'Pune';

city.push('Solapur');

city.unshift('Jaipur');

city.pop();

console.log(city);

console.log(city[4]);

console.log(Array.isArray(city)); // check whether its an array

console.log(Array.isArray('city'));

console.log(city.indexOf('Hyderabad'));


// Object Literals

const person = {
    firstName : "Omer",
    lastName : 'Quadri',
    Age : 22,
    Addr : {
        city : 'Hyderabad',
        State : 'Telangana'
    } //Object embedded inside an object
}

// Destructuring objects

const { firstName, lastName } = person; // pulling things out from person

console.log(firstName);



//Array of literal objects

const ToDo = [
    {
        id: 1,
        text: 'Complete Vanilla JS',
        isCompleted: false
    },

    {
        id: 2,
        text: 'Complete Vanilla Git',
        isCompleted: true
    },

    {
        id: 3,
        text: 'Complete React',
        isCompleted: false
    }
];

 console.log(ToDO);

const ToDOJSON = JSON.stringify(ToDO) // Converting Object to JSON

console.log(ToDOJSON);
 

// Loop

 
for(let i = 0; i < ToDo.length; i++){
    console.log(ToDo[i].text); // Normal for loop
}

for(let ToDos of ToDo){
    console.log(ToDos);     // for of loop
    console.log(ToDos.text);
}
 

// forEach loop is a method takes a function if needed

 ToDo.forEach(function(ToDos){
    console.log(ToDos.id);
});
 


// Map
 
const ToDoId = ToDo.map(function(ids){
    return ids.id;
});

console.log(ToDoId);

const ToDoCompleted = ToDo.filter(function(done){
    return done.isCompleted === true;
});

console.log(ToDoCompleted);

const printVal = ToDo.map((value) => {
    return `${value.text}` // Creates a new array with text from ToDO
});
 

// Conditional - if statement

 
const a = 10;   // Number
const y = '10'; // String

// '==' compares the value of the variables and not data type

if(a == 10){
    console.log('a is 10');
}

if(y == 10){
    console.log('y is "10"');
}


const b = 10;   // Number
const x = '10'; // String
const c = 20;
// '==' compares the value of the variables and not type
if(b === 10){
    console.log('b is 10');
}

if(x === '10'){
    console.log('x is "10"');
} else{
    console.log("x is NOT '10'");
}

if (c === 30){
    console.log('c is NOT 30');
} else{
    console.log("c is NOT '10'");
}


// Ternary operator

const val = 40;

//{Syntax} => <variable> = (condition) ? <return this if condition is true> : <return if ciondition is false>

const color = val >50 ? 'Red' : 'Blue' 

console.log(color);

// Switch Case

const val = 40;

const color = val >50 ? 'Red' : 'Blue' 

switch(color){
    case 'Red':
        console.log('The color is Red');
        break;
    case 'Blue':
        console.log('The color is Blue');
        break;
    default :
        console.log('Undefined color');
        break;
}


// Constructor function

function Student(firstName, lastName, dob , studMarks){
    this.firstName = firstName;
    this.lastName = lastName;
    this.studMarks = studMarks;
    this.dob = new Date(dob);
}
// Putting functions in prototype to remove them from showing up on clg() as objects

Student.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

Student.prototype.getBirthYear = function (){
    return this.dob.getFullYear();
}

Student.prototype.getAllData = function(){
    return `Name : ${this.firstName} ${this.lastName} 
        Date of Birth : ${this.dob}
        Marks : ${this.studMarks}
        `
}


// Instantiating objects
const student1 = new Student('Omer', 'Quadri', '09-05-1997', 100);
const student2 = new Student('Mohammed', 'Quadri', '19-05-1960', 85);

// console.log(student2.dob.getFullYear()); // Returns Full year data

console.log(student1.getBirthYear());

console.log(student1.getFullName());

console.log(student1.getAllData());

console.log(student1.firstName)


// Class

class Student {
    constructor (firstName, lastName, dob , studMarks){
        this.firstName = firstName;
        this.lastName = lastName;
        this.studMarks = studMarks;
        this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }

    getAllData(){
        return `
        Name : ${this.firstName} ${this.lastName} 
        Date of Birth : ${this.dob.getDate()}
        Marks : ${this.studMarks}
        `
    }
}

const student1 = new Student('Omer', 'Quadri', '09-05-1997', 100);
const student2 = new Student('Mohammed', 'Quadri', '19-05-1960', 85);

console.log(student1);

console.log(student1.getFullName());

console.log(student2.getAllData());