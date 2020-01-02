/*Task as on 16-10-2019*/
/*
// Q1) WAP to make a myString object which can help a user perform string operations
// - substring(str, start, end) will take the given parameter and return a substring based on start and end positions eg. substring("hello world",2, 6) will return "llo w"
// - reverse(str) will reverse a string and return it.
// - countNeedles(str, needle) will count the occurances of a charecter namely needle and return the count eg. countNeedles("hello world", "o") will return 2

const myString = {

    str: function getString(str, start, end) {
        let string = str.substring(start, end)
        return string;
    },

    rev: function getReverse(str) {
        let rev = '';

        for (let i = str.length - 1; i >= 0; i--) {
            let word = str.charAt(i)
            rev = rev.concat(word)
        }
        return rev;
    },

    count : function countNeedles(str, needle){

        let count = 0;

        for(let i = 0; i<= str.length - 1; i++){

            if(str.charAt(i).includes(needle)){
                count++;
            }

        }
        
        //return count

        if(count){
            console.log(` "${needle}" appreared [${count}] time(s) in the string "${str}" `);
        } else if(!count){
            console.log(`No occurances of "${needle}" in the string "${str}"`);
        }
    }
}

// Substring (start inclusive, end exclusive)

let string = myString.str('Omer Quadri', 1, 7);
console.log(string);

// Reverse of string

string = myString.rev('Omer Quadri');
console.log(string);

// Counting occurances of a word

string = myString.count("moorthy", "t")
//console.log(string);

// Q2) WAP to make myArea object which can calculate the areas of geometrical objects, and store some Math constants as well.
// - PI constant wills store the value of it as 3.14
// - rectangleArea(l,w) will return the area of rectangle 
// - circleArea(r) will return the area of circle & will also use PI constant from same object to calculate 
// - squareArea(l) will return the area of the square.

const myArea = {

    PI : 3.14,

    rectArea : function calArea (len, wid){
        let area = len * wid
        return `The area of rectangle with length: ${len} units and width: ${wid} units is ${area} units`
    },

    cirArea : function calArea (rad){
        let area = myArea.PI * rad * rad 
        return `The area of circle with radius : ${rad} units is ${area} units`
    },

    rectArea : function calArea (len, wid){
        let area = len * wid
        return `The area of rectangle with length: ${len} units and width: ${wid} units is ${area} units`
    },

    sqArea : function calArea (side){
        let area = side * side
        return `The area of square with side: ${side} units is ${area} units`
    },
}


let area = myArea.rectArea(20, 50)
console.log(area);

area = myArea.cirArea(50)
console.log(area);

area = myArea.sqArea(5);
console.log(area);

*/

//  write a program to print array B as reverse of array A without using reverse function
//  A = [4,5,6,2,8,9]
//  B = []

let  A = [4,5,6,2,8,9]
let B = []

console.log(A);

for(let i = A.length - 1; i >= 0; i--){
    B.push(A[i])
}

console.log(B);

