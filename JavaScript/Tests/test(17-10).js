/* Test as on 17-Oct-2019*/


// // 1.Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case

function swapper(str) {
    let letters = ''
    for (let i = 0; i <= str.length; i++) {

        if (str[i] === str[i].toLowerCase()) {
            letters = letters + str[i].toUpperCase()
        } else if (str[i] === str[i].toUpperCase()) {
            letters = letters + str[i].toLowerCase()
        }
    }
    console.log(letters);
    return letters
}

let res = swapper("OMerQUadri");

console.log(res);



// 2.Write a JavaScript function to chop a string into chunks of a given length.

// Ex: [“satyanaryana”]\

/*
let str = 'OmerQuadri'

str = str.match(/.{1}/g).join(' ');

console.log(str);
*/

/*

// 3. Write a JavaScript program to display the reading status(i.e.display book name, author name and reading status) of the following books

var library = [

    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },

    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },

    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];

console.log('Library Details: ');

for(let readStatus of library){

    console.log(`Book name : ${readStatus.title}
Author : ${readStatus.author}
Reading status : ${readStatus.readingStatus}
    `);
}

*/


// 4.Write a JavaScript program to create a Clock.i.e(Every Second It should Print the Clock).

// function clock(hours, minutes, seconds){
//     let clk = new Date();
//     this.hours = clk.getHours();
//     this.minutes = clk.getMinutes();
//     this.seconds = clk.getSeconds();
// }

// console.log(clock());