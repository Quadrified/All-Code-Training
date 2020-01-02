// // Test as on 10-10-2019

// //Solution for Question 1

// let materials = [
//     'Hydrogen', 'Helium', 'Lithium', 'Beryllium'
// ];
// /*
// //map
// const material = materials.map(function(name){
//     return `${name}`;
// });
// // console.log(material);

// //map and arrow function
// const material2 = materials.map((name) => { 
//     return `${name}`;
// });
// */
// // console.log(material2);
// console.log(2);
// console.log(materials);


//Solution for Question 2

/*
The console throws an error stating that the variable declared with 'let' i.e a, is already declare with a value of '20' and hence cannot be reassigned to another value; in our case 'a' cannot be reassigned to 10 since variables declared with 'let' have block level scoped in which they are declared.
*/

/*
let a = 20;
a = 10;

document.write(++a);

*/

//Solution for Question 3

/*
    The variables declared with 'const' cannot be changed and they are hence constant. When we try change the value of 'a' which is a constant variable declared as number '30', we are declaring that no matter what the code, we need the value of a to be set as 30 only. And therefore the console throws an error implying the same.
*/

/*
const a = 30;

document.write(++a);
*/

// Solution to Question 4

/*
    There are different ways to use a function.
    We can use:
        1. Normal function as used in JavaScript.
        2. An Arrow function.
*/

// Using a normal function
// An example addition function
/*

function addNum(a, b){
    let c = a + b;
    return c;
}

console.log(addNum(5,2));

// Example function to print array content

let school = [
    'Classes', 'Staff', 'Stationary', 'Offices'
];

const values = school.map(function(value){
    return `${value}`
});

console.log(values);
console.table(values);
*/
// Using Arrow function or call back function

// A simple add function
/*
const var1 = (a, b) => {
    return a + b;
}

console.log(var1(5, 2));
*/
// We can remove the parenthesis if we have only one value to be returned

/*
let Stationary = [
    'Books', 'Pens', 'Pencils', 'Erasers'
];

const values2 = Stationary.map(value => {
    return `Values are ${value}`
});

console.log(values2);
*/

/* Test 2
// Removing chars from string

// const word = 'Omer\t Quadri'
// console.log(word);

// let letter = '//\"Le/t,./t/E\R"//'

// letter = letter.split('/').join("")

// letter = letter.replace(",", '')
// letter = letter.replace(".",'')
// //letter = letter.replace('"','')
// letter = letter.replace(/[" / , .]+/g, '') //Regex
// console.log(letter);

*/

// Check if the string is palindrome eg NitiN

// //  WAP to reverse the words of a string eg.. string a of words the reverse to WAP
// let string="Satya"



// let rev='';

// for(let i=string.length-1; i>=0;i--){
//     let word = string.charAt(i)
//     rev = rev.concat(word)
// }

// console.log(rev);

// if(rev===string){
//     console.log("Palindrome");
// } else {
//     console.log("Not a Palindrome");
// }

// WAP to reverse the words of a string eg.. string a of words the reverse to WAP

// let string="WAP to reverse the words of a string"

// let str = string.length;

// let rev='';
// let item = string.split(' ');

// item.map((index,i) => {

//     console.log(item[i])
//     for (let j = str - 1; i >= 0; i--){
//         rev = rev + item.charAt(i)
//     }
//     console.log(rev);
// })

// for(let i=item.length-1; i>=0;i--){
//     let word = .charAt(i)
//     rev = rev.concat(word)
// }

// console.log(word);

// console.log(rev);

// if(rev===string){
//     console.log("Palindrome");
// } else {
//     console.log("Not a Palindrome");
// }

// function wordReverse(str) 
// { 
//     let i = str.length - 1;
//     let start, end = i + 1; 
//     let result = ""; 
//     while(i >= 0) 
//     { 
//         if(str.charAt(i) === ' ')
//         { 
//             start = i + 1; 
//             while(start != end) 
//              result += str.charAt(start++); 
//             result += ' ';
//             end = i; 
//        }
//        i--; 
//     }

//     start = 0; 

//     while(start != end) 
//         result += str.charAt(start++); 
//     return result; 
// } 

// let str = "WAP to reverse the words of a string"; 
// const rev = wordReverse(str);
// console.log(rev);

let str = "WAP to reverse the words of a string"

str = str.split(" ")
console.log(str);

for (let i = str.length - 1 ; i >= 0; i--) {

    let word = str[i] + " "
    document.writeln(word)
    console.log(word);
}

// Task
const word = 'Omer\t Quadri'
console.log(word);

let letter = '//\"Le/t,./t/E\R"//'

letter = letter.split('/').join("")

letter = letter.replace(",", '')
letter = letter.replace(".", '')
//letter = letter.replace('"','')
letter = letter.replace(/[" / , .]+/g, '') //Regex
console.log(letter);