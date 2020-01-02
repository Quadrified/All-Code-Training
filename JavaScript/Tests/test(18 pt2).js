//1.Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case

function swapper(str) {
    let newWord = []

    for (i = 0; i < str.length; i++) {
        if (str[i] == str[i].toLowerCase()) {
            newWord[i] = str[i].toUpperCase();
        } else {
            newWord[i] = str[i].toLowerCase();
        }
    }
    return newWord.join('')
}

let res = swapper("OMerQUadri");

console.log(res);


// 2.Write a JavaScript function to chop a string into chunks of a given length.

function chopString(str, size) {

    let word = new RegExp('.{1,' + size + '}', 'g');
    return str.match(word);

}


let str = 'OmerQuadri'
console.log(chopString(str, 3));


// 3.Write a JavaScript program to extend a 3-digit color code to a 6-digit color code Ex : #03f -> #0033ff

// 6 to 3 digit
// var hex = "#aabb00";
// if ((hex.charAt(1) == hex.charAt(2))
//   && (hex.charAt(3) == hex.charAt(4))
//   && (hex.charAt(5) == hex.charAt(6))) {
//     hex = "#" + hex.charAt(1) + hex.charAt(3) + hex.charAt(5);
// }

function hexConverter(str) {
    let hexCode = [];
    let hex = str.split('')
    hexCode.push('#', '0')

    for (let i = 0; i <= hex.length; i++) {
        hexCode.push(hex[i + 1], hex[i + 2], hex[i + 4])
    }

    return hexCode.join('')
}

let str = '#03f'

console.log(hexConverter(str));


// 4.Write a JavaScript program to create a Clock.i.e(Every Second It should Print the Clock).

function showTime() {
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let zone = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        zone = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ":" + m + ":" + s + " " + zone;
    setTimeout(showTime, 1000);
    console.log(time)
}

showTime();

// 5. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

function dash(str) {
    let num = str.toString();
    let arr = num.split('');

    let res = arr.map((n, i) => {
        return (n % 2 === 0) && (arr[i + 1] % 2 === 0) ? n + '-' : n;
    })

    res = res.join('')
    return res;
}

let num = 025468

console.log(dash(num))


// 6.Write a JavaScript function to find the difference of two arrays.

function uniqueElements(array1, array2) {

    let unique1 = array1.filter((num) => {
        return array2.indexOf(num) === -1
    });
    let unique2 = array2.filter((num) => array1.indexOf(num) === -1);

    const unique = unique1.concat(unique2);
    console.log(unique);
}

uniqueElements([1, 2, 99, 3], [100, 1, 10])