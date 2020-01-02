/* Test as on 11th October and 15th*/

// Q.1 Interchanging the values without using 3rd element.

let a = 10;
let b = 20;

console.log(`Before sawpping, elements were
${a} ${b}`);

a = a + b;
b = a - b;
a = a - b;

console.log(`After sawpping, elements are
${a} ${b}`);



// Q.2 Write a JavaScript program to find duplicate values in a JavaScript array

let arr = [1, 2, 3, 4, 4, 7, 9, 9, 0]

let arrCopy = []

console.log(arr);
for(let i = 0; i <= arr.length - 1; i++){
    if(arr[i] == arr[i + 1]){
        arrCopy.push(arr[i])
    }
}

console.log(arrCopy);



// Q.3 There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.

// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];

// Expected Output : [4, 5, 8, 10, 12, 13]

let array1 = [1, 0, 2, 3, 4];

let array2 = [3, 5, 6, 7, 8, 13, 15];

let array3 = [];

// for (let i = 0; i <= array2.length - 1; i++) {
//     for (let j = 0; j <= array1.length - 1; j++) {
//         if (i == j)
//             array3.push(array1[i] + array2[j])
//     }
// }


if (array1.length >= array2.length) {
    array3 = array1.map((num, i, array) => {
        return num + (array2[i] || 0);
    });
} else {
    array3 = array2.map((num, i, array) => {
        return num + (array1[i] || 0);
    });
}

console.log(array3);


// Q4. Largest number in an array

let array = [100, 2, 22, 66, 88, 99];

let largest = array[0];

for(let i = 0; i <= array.length; i++){

    if(array[i] > largest)
        largest = array[i]
}

console.log(largest);