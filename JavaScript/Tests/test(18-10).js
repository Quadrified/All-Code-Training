// 1.Write a function that takes a number and returns a list of its digits. So for 2342 it should return [2,3,4,2].

// function list(num){

//     let list = [];
//     let digits = num.toString() // comverting number to string

//     for(let i = 0; i <= digits.length -1; i++)
//         list.push(digits.charAt(i))

//     console.log(list);
//     console.log(list.join(','));
// }
// let number = 7330770559;

// list(number);


// 2.Write a JavaScript program to extend a 3-digit color code to a 6-digit color code Ex : #03f -> #0033ff

// function hexConverter(str) {

//     let hexCode = [];
//     let hex= str.split('')
//     console.log(hex);
//     hexCode.push('#')
//     for(let i = 1; i <= hex.length ; i++){
//         hexCode.push(hex[i], hex[i + 1], hex[i + 3])
//     }
//     return hexCode.join('')
// }

// let str = '#03f'

// console.log(hexConverter(str)); // first 0



// 3.Write a JavaScript function that returns a passed string with letters in alphabetical order.

// function list(str){

//     let string = str;
//     string = string.split('')
//     string = string.sort();
//     string = string.join()
//     return string 
// }
// let str = 'dsmart';
// console.log(list(str));



// 4. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

// function dash(num) {
//     let str = num.toString();
//     let result = [];

//     for (let i = 0; i < str.length - 1; i++) {
//         if ((str[i] % 2 === 0) && (str[i - 1] % 2 === 0)) {

//             result.push('-', str[i]);
//         } else {
//             result.push(str[i]);
//         }
//     }
//     console.log(result.join(''));
// }

// let num = 12256698888

// let result = dash(num)
// console.log(result);



// 5.Write a JavaScript function to find the difference of two arrays.

// Test Data :

// console.log(difference([1, 2, 3], [100, 2, 1, 10]));

// ["3", "10", "100"]

// function diff(arr1, arr2){
//     let res = [];

//     for(let i = 0; i <= arr1.length - 1; i++){
//         let flag = false

//         for(let j = 0; j <= arr2.length - 1; j++){
//             if(arr1[i] === arr2[j]){
//                 flag = true;
//                 break;
//             }
//         }
//         if(flag == false){
//             res.push(arr1[i])
//         }
//     }

//     return res;

// }


// let arr1 = [1, 2, 3]
// let arr2 = [100, 2, 1, 10]

// console.log(diff(arr1, arr2));


// 6. Write a JavaScript function to concatenates a given string n times (default is 1)

// function repeater(str, n){
//     return str.repeat(n)
// }

// let str = 'Hey!'

// console.log(repeater(str, 1));