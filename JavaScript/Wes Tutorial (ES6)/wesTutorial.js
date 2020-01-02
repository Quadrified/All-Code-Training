// // from  Wes Bos

// function greet(name) {
// 	document.getElementById("btn").alert("Hello");
// 	console.log("Hello, " + name);
// }

// greet("Omer");

// function addNum(a, b) {
// 	return a + b;
// }

// document.write(addNum(2, 5));
// alert(addNum(7, 4));

// function clicked() {
// 	alert("HELLOOOOOOO!!!!!")
// }

// function clicked() {
// 	var text1 = "Hello";
// 	var text2 = "World";
// 	var text3 = text1 + text2;
// 	var text4 = "lorem"

// 	document.getElementById("demo").innerHTML = text3 + text4;
// }

// let sum = (a, b) => {
// 	return a + b;
// }

// let sum2 = (c, d) => c + d

// console.log(sum2(2, 4))

// console.log(sum(2, 88));

// let numberPositive = number => number

// console.log(numberPositive(2));

// function add(a, b) {
// 	return a + b;
// }

// console.log(add(2, 55));

// let add2 = (a, b) => {
// 	return a + b;
// }

// console.log(add2(8, 9));

// //const

// const PI = 3.141592658979;
// console.log(PI);

// //var

// console.log(i);

// for (var i = 0; i < 5; i++) {
// 	console.log(i);
// }

// console.log(i);

// //let
// for (let i = 0; i < 8; i++) {
// 	console.log(i);
// }
// console.log(i, 'Omer');

// // Map function

// const names = ['Omer', 'Quadri', 'Mohammed'];

// const fNames = names.map(function (name) {
// 	return `${name} lux`;
// });

// //console.log(fNames);

// const fNames2 = names.map((name) => {
// 	return `${name} lox`;
// });

// console.log(fNames2);

// const fNames3 = names.map(name => {
// 	return `${name} lox`;
// });

// console.log(fNames3);

// const fNames4 = names.map(() => `Cool Boss`);

// console.log(fNames4);

// const sayName = (name) => {
// 	alert(`Hello ${name}!`)
// }

// sayName('Omer')

// const grade = 'Grade 10th'

// const names = ['Omer', 'Quadri', 'Mohd'];

// const val = names.map((name1) => {
// 	name: name1,
// 	grade
// })

// console.log(val);

// // Implicit return with an object literal

// const race = '100 m dash'
// const racers = ['Omer', 'Murthy', 'Roy']

// const winner = racers.map((winner, i) => ({
// 	name: winner,
// 	race,
// 	place: i = 1 // Returning object with {} for objects
// }))
// console.log(winner); // Returns [{...}, {...}]
// console.table(winner); // Returns tabular data

// const names = ['Hello', 'World', 'Everywhere'];

// const word = names.map(name => `${name}`); // Explicit return taking {} off

// const word2 = names.map(() => `Hello World`)

// // Accessing array and assigning the values to some labels (kinda)
// const game = 'World Cup'
// const names2 = ['Mohammed', 'Omer', 'Quadri'];

// const values = names2.map((name, i) => ({
// 	name: name,
// 	game,
// 	place: i + 1
// })); // Passing the whole thing in a () to access the values

// const ages = [12, 123, 50, 65, 96];

// // Filter function

// const old = ages.filter(age => age >= 50);

// //Assigning default args to take when not provided on function call

// function calPTR(pAmount, pTime = 25, pRate = 36) {
// 	return (pAmount * pTime * pRate) / 100;
// }

// const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92];

// const fil = numbers.filter(number => number > 70);

// // Template strings

// const name = 'Omer Quadri';
// const age = 22;
// const stream = 'Information technology';
// const duration = 4;
// const college = 'Deccan College of Engineering and Technology'

// const info = `My name is ${name}, I am ${age} years old and I am from the stream of ${stream}. I studied for ${duration} years in ${college}.`

// // Creating HTML Fragments using Template strings

// let name = 'Omer'

// function makeUpperCase(word) {
// 	return word.toUpperCase();
// }

// // While using functions in ${ },  use the name of the function along with the argument for the function

// const template = `
// <h1>${makeUpperCase('Hello')}, ${name}</h1>
// <p>This is an exapmle template</p>
// `
// document.getElementById('template').innerHTML = template;

// // For objects

// const person = {
// 	name: 'Omer Quadri',
// 	age: 22,
// 	stream: 'Information technology',
// 	duration: 4,
// 	college: 'Deccan College of Engineering and Technology'
// }

// // Writing the object on the HTML page using Template strings

// const markup = `
//     <div class="person">
//         <h2>
//             ${person.name}
//         </h2>
//         <span class="stream">${person.stream}</span>
//         <p class="age">${person.age}</p>
//         <p class="college">${person.college}</p>
//     </div>
// `;

// document.body.innerHTML = markup; // works when script tag is placed inside body since document.body

// const cats = [{
// 		name: 'Coco',
// 		catAge: 1.5,
// 	},
// 	{
// 		name: 'Oreo',
// 		catAge: 2
// 	},
// 	{
// 		name: 'Simba',
// 		catAge: 3
// 	}
// ];

// //toggling and returning objects from the array using map and template strings inside template strings
// const markup2 = `
//     <ul class = "cats">
//          ${cats.map(cat => `<li>${cat.name} is ${cat.catAge} years old</li>`).join('')}
//     </ul>
// `;

// // document.body.innerHTML = markup2;

// const person2 = {
// 	name: 'Omer Quadri',
// 	age: 22,
// 	stream: 'Information technology',
// 	duration: 4,
// 	college: 'Deccan College of Engineering and Technology'
// }

// // Ternary operator
// const markup3 = `
//     <div class="person2">
//         <p class="name">
//             ${person2.name} - ${person2.stream}
//             ${person2.college ? `(College ${college})` : ''}
//         </p>
//     </div>
// `;

// //document.body.innerHTML = markup3;

// // Retrieveing the embedded data from the object with render method

// const person3 = {
// 	name: 'Omer Quadri',
// 	age: 22,
// 	stream: 'Information technology',
// 	duration: 4,
// 	college: 'Deccan College of Engineering and Technology',
// 	keywords: ['College', 'Student', 'Senior', 'Coder', 'Pawrent']
// }

// function renderKeywords(keywords) {
// 	return `
//         <ul>
//             ${keywords.map(keyword => `<li>
//                 ${keyword}
//             </li>`).join('')}
//         </ul>`;
// }

// const markup4 = `
//     <div class = "person3">
//         <h1>${person3.name}</h1>
//         <p>${person3.age} - ${person3.stream}</p>
//         ${renderKeywords(person3.keywords)}

//     </div>
// `;

// document.body.innerHTML = markup4;

// //Tagged templates : Used for taking a string and crafting it to our liking without having the browser do it for us.
// //{Syntax} : (function)`tagged string`

// const name = 'Coco';
// const age = 1.5;

// function highlight(strings, ...values) {
// 	let str = '';
// 	strings.forEach((string, i) => {
// 		str += `${string} <span  class= "hl">${values[i] || ''}</span>`
// 	});

// 	return str;
// }

// const sentence = highlight `My cat's name is ${name} and she is ${age } years old`

// document.body.innerHTML = sentence;
// console.log(sentence);

// const person = 'Omer Quadri';
// const age = 22;

// function highlighter(strings, ...values) {
// 	let str2 = '';

// 	strings.forEach((string, i) => {
// 		str2 += `${string} <span class = "hl2">${values[i] || ''}</span>`
// 	});

// 	return str2;
// }

// const sentence2 = highlighter `My name is ${person} and I amd ${age} years old`

// document.body.innerHTML = sentence2;
// console.log(sentence2);

// //Strings

// const s = "Hello world"

// console.log(s.length);

// console.log(s.toLocaleUpperCase());

// console.log(s.substring(0, 5));

// console.log(s.substring(0, 5).toLocaleLowerCase());

// console.log(s.split(""));

// console.log(s.split(', '));

// console.log(s + ' Omer');

// const list = 'Omer, Quadri, Mohammed';

// console.log(list.split(', '));

// const name = 'Omer Quadri'
// const name2 = 'OMER QUADRI'
// const college = 'Deccan College of Engineering and Technology'
// const college2 = 'Deccan College'

// const rollNumber = 160315737022;

// // New string function see output in console
// // .startsWith() : Takes case sensitive string only

// name.startsWith('Omer') // True
// name.startsWith('OMER') // False
// name2.startsWith('OMER') // True
// name.startsWith('Quadri', 5) // True; Starts from the index we provide as a second arg.
// name.startsWith('Quadri', 4) // False, Indexes start at 1 btw.

// // .endsWith() : Takes case sensitive string only

// name.endsWith('Quadri') // True
// name.endsWith('Quadris') // False

// name.endsWith('Omer', 4) // Takes second arg no. of characters and ignores the rest

// // .includes() : Takes case sensitive string only

// name.includes('er') // True, checks if string is present

// name.includes('remo') // False

// // .repeat() : Takes case sensitive stringn only

// name.repeat(10) // Outputs : "Omer QuadriOmer QuadriOmer QuadriOmer QuadriOmer QuadriOmer QuadriOmer QuadriOmer QuadriOmer QuadriOmer Quadri"

// 'Quadri'.repeat(200) // Repeats 'Quadri' 200 times

// // We can also add padding

// function leftPad(str, length = 20) {
// 	return `-> ${' '.repeat(length - str.length)}${str}`
// }

// console.log(leftPad(name));
// console.log(leftPad(name2));
// console.log(leftPad(college2));

// // .padStart(number) gives spaced padding at the start with the arguments passed; also, .padStart(6, 'x') fills the spaces with the character 'x'

// 'wes'.padStart(6); // gives 3 spaces and includes the string 'wes' total = 6
// 'wes'.padStart(6, '-') // fills 3 spaces with - at the beginning and includes 'wes' total = ---wes

// // .padEnd(number) gives spaced padding at the end with the arguments passed; also, .padEnd(6, 'x') fills the spaces with the character 'x'

// 'wes'.padEnd(6); // gives 3 spaces at end and includes the string 'wes' total = 6
// 'wes'.padEnd(6, '-') // fills 3 spaces with - at the beginning and includes 'wes' total = ---wes

// const strings = ['Batmann', 'Superman', 'missippiman', 'Panman'];

// const lengths = strings.sort(str => str.length).map(str => str.length);

// console.log(lengths);

// strings.forEach(str => console.log(str.padStart(20, '-')))

// console.log(lengths);

// // Destructuring objects

// const person = {
// 	firstName: "Omer",
// 	lastName: 'Quadri',
// 	Age: 22,
// 	social: {
// 		links: {
// 			facebook: 'facebook.com/quadrified',
// 			instagram: 'instagram.com/quadrified',
// 			linkedin: 'facebook.com/quadrified'
// 		}
// 	},
// 	Addr: {
// 		city: 'Hyderabad',
// 		state: 'Telangana'
// 	} //Object embedded inside an object
// }

// // Use { } when destructuring from objects
// const {
// 	city,
// 	state
// } = person.Addr; // Type city in console to see output

// const {
// 	facebook,
// 	instagram,
// 	linkedin
// } = person.social.links

// // Destructuring and renaming variables along with assigning default values
// const rectangle = {
// 	width: 500,
// 	height: 300,
// 	volume: 640
// }

// //const { width = 250, height = 150, volume = 320 } = rectangle // Destructuring and assigning default values to object literals => Right to left

// const {
// 	w: width = 250,
// 	h: height = 150,
// 	v: volume = 320
// } = {
// 	w: 200,
// 	h: 100,
// 	v: 300
// } //Destructuring and renaming and  assigning default values to object literals => Right to left

// // Swapping variables

// let firstName = 'Omer';
// let lastName = 'Quadri';

// [firstName, lastName] = [lastName, firstName]

// // Destructuring arrays

// // Normal array
// const person = ['Omer', '22', 'github.com/quadrified'];

// // Use [ ] when destructuring from arrays

// const [name, age, website] = person;
// console.log(name, age, website);

// // Array of strings

// const person2 = 'Quadri, 28, @dream-merchant, Game, Coding, Pawrent'; // The extra items "Game, Coding, Pawrent" are thrown away while destructuring because of lack of destructuring

// const [name2, age2, handle] = person2.split(', ') // Using split() to separate the string items

// console.log(name2, age2, handle);

// // To use the extra elements of the array during destructuring, we use "... (rest) "operator

// // Destructuring functions

// function converter(value) {
// 	const converted = {
// 		USA: value * 0.56,
// 		AUD: value * 0.36,
// 		GBP: value * 0.46,
// 		CAD: value * 0.66
// 	}
// 	return converted;
// }

// console.log(converter(50)); // Gives objects with converted values
// console.log(converter(50).AUD); // Gives only one object literal AUD

// const {
// 	USA,
// 	AUD,
// 	GBP,
// 	CAD
// } = converter(100); // Destructures the objects and pulls them from the function converter() and is of order independent

// console.log(USA, GBP); // Rest of currencies will not be destructured and do not show up

// function calTip({
// 	amount,
// 	tax = 0.20,
// 	tip = 0.36
// }) {
// 	// adding {} will make args independent of any order
// 	return amount + (tax * amount) + (tip * amount)
// }

// console.log(calTip({
// 	amount: 100,
// 	tax: 0.60
// })); // Returns NaN when taking args as {} and calling function with non{} values use { amount : } to fill in because it is an OBJECT. Takes default args when not passing any values

// // Spread operator

// let arg1 = [1, 2, 3];
// let arg2 = [4, 5, 6];

// function test() {
// 	console.log(arg1 + ' ' + arg2)
// }

// console.log(arg1);
// console.log(arg2);
// console.log(...arg1, ...arg2); /// ...(spread) is used to expand the array into its elements

// const veg = ['Fried rice', 'Manchuria', 'Veg Salad']

// const nonveg = ['Lollipops', 'Rolls', 'Wraps']

// const menu = [...veg, 'Banana', ...nonveg] // Spread takes both arrays and combines them and lets us add items in between

// console.log(menu);

// const main = [...menu] // Copying an array to another using [...spread]

// console.log(main);

// // Take li from html
// const people = Array.from(document.querySelectorAll('.list p')) // One way to create array from dom using Array.from()
// const names = people.map((names) => names.textContent).join('')
// console.log(names);

// const guys = [...document.querySelectorAll(' .list p')] // Using spread to create array

// const name = guys.map((names) => names.textContent).join('')

// // Creating an array embedded in an object using spread

// const cake = {
// 	name: 'Red velvet',
// 	weight: 50,
// 	ingredients: ['Eggs', 'Flour', 'Cream']
// }

// const shoppingList = ['Coke', 'Pizzas', ...cake.ingredients] // Accessing ingredients in cake object using ...spread (Not a copy of the original array but new array, BTW!)

// console.log(shoppingList);

// // Using ...spread in functions

// const students = ['Omer', 'Saboor', 'Wasay']

// const newStuents = ['Farhan', 'Ibrahim']

// students.push(...newStuents) // spreads 2nd array into first and pushes the elements into 1st array

// console.log(students); // Overriding the original student array

// const name = ['Omer', 'Quadri']

// function sayName(first, last) {
// 	alert(`Hey there! ${first} ${last}`)
// }

// sayName(...name)

// // ...(rest) vs ...(spread)
// // Rest syntax looks exactly like spread syntax but is used for destructuring arrays and objects. In a way, rest syntax is the opposite of spread syntax: spread 'expands' an array into its elements,while rest collects multiple elements and 'condenses' them into a single element.

// // ...rest
// const team = ['Omer', 'Saboor', 'Wasay', 'Ibrahim', 'Farhan'];

// const [leadDev, assistDev, ...devs] = team;

// console.log(leadDev, assistDev, ...devs); // clg() at console as well to get more clarity

// const runner = ['Omer Quadri', 22, 5.5, 6, 8.9, 9]

// const [name, id, distance] = runner // Destructuring : Gives only one distance 5.5

// console.log(name, id, distance);

// const [alias, sno, ...distances] = runner // Gives all the rest distances

// console.log(alias, sno, ...distances);

// // Promises

// // Refer : https://www.youtube.com/watch?v=DHvZLI7Db8E

// let p = new Promise((resolve, reject) => {
// 	var a = 1 + 1;
// 	if (a == 2) {
// 		resolve('Success'); // resolve(msg) sends msg as message parameter
// 	} else {
// 		reject('Failed');
// 	}
// });

// p.then((message) => {
// 	console.log('This is in "then" with ' + message);
// }).catch((message) => {
// 	console.log('This is in "Then" with ' + message);
// }) // Using catch to catch any errors

// // Examples of Promises

// // Normal callback function

// function watchTutorialCallback(callback, errorCallback) {
// 	let userLeft = false
// 	let userWatchingCatMeme = false

// 	if (userLeft) {
// 		errorCallback({
// 			name: 'User Left',
// 			message: ':('
// 		})
// 	} else if (userWatchingCatMeme) {
// 		errorCallback({
// 			name: 'User Watching Cat Meme',
// 			message: 'WebDevSimplified < Cat'
// 		})
// 	} else {
// 		callback('Thumbs up and Subscribe')
// 	}
// }

// watchTutorialCallback(message => {
// 	console.log(message)
// }, error => {
// 	console.log(error.name + ' ' + error.message)
// })

// //Converting callback to promise

// function watchTutorialPromise() {
// 	let userLeft = false
// 	let userWatchingCatMeme = false
// 	return new Promise((resolve, reject) => {
// 		if (userLeft) {
// 			reject({
// 				name: 'User Left',
// 				message: ':('
// 			})
// 		} else if (userWatchingCatMeme) {
// 			reject({
// 				name: 'User Watching Cat Meme',
// 				message: 'WebDevSimplified < Cat'
// 			})
// 		} else {
// 			resolve('Thumbs up and Subscribe')
// 		}
// 	})
// }

// watchTutorialPromise().then(message => {
// 	console.log(message)
// }).catch(error => {
// 	console.log(error.name + ' ' + error.message)
// })

// // Example 2

// const recordVideoOne = new Promise((resolve, reject) => {
// 	resolve('Video 1 Recorded')
// })

// const recordVideoTwo = new Promise((resolve, reject) => {
// 	resolve('Video 2 Recorded')
// })

// const recordVideoThree = new Promise((resolve, reject) => {
// 	resolve('Video 3 Recorded')
// })

// // Promise.all([array of Promises]) to run all promises in paralle instead of waiting for one and calls .then() and .catch() methods after resolving all promises and informs if we are successful or failed. Returns multiple messages.

// Promise.all([
// 	recordVideoOne,
// 	recordVideoTwo,
// 	recordVideoThree
// ]).then(messages => {
// 	console.log(messages)
// })

// // Promise.race([array of Promises]) returns as soon as first promise completes instead of waiting for everyone to complete. Returns one return value.

// Promise.race([
// 	recordVideoOne,
// 	recordVideoTwo,
// 	recordVideoThree
// ]).then(message => {
// 	console.log(message)
// })

// // Example 3 Native promise

// // Accessing media camera
// const video = document.querySelector('.video')

// navigator.mediaDevices.getUserMedia({
// 	video: true
// }, {
// 	audio: true
// }).then(mediaStream => {
// 	video.srcObject = mediaStream;
// 	video.load();
// 	video.play();
// }).catch(mediaStream => {
// 	console.error('Please provide the permissions');
// })

// // Example 4 Custom promises

// function breathe(amount) {
// 	return new Promise((resolve, reject) => {
// 		if (amount < 300) {
// 			reject('Too less of a second')
// 		}
// 		setTimeout(() => resolve(`Done for ${amount} ms`), amount)
// 	})
// }

// breathe(1000).then(res => {
// 	console.log(res);
// 	return breathe(500);
// }).then(res => {
// 	console.log(res);
// 	return breathe(600);
// }).then(res => {
// 	console.log(res);
// 	return breathe(400);
// }).then(res => {
// 	console.log(res);
// 	return breathe(1000);
// }).then(res => {
// 	console.log(res);
// 	return breathe(200);
// }).catch(err => {
// 	console.error(err);
// 	console.error('Not gonna happen');
// });

// // Async await demo
// //Async await is built on top of Promises and is not an alternative to Promises

// function breathe(amount) {
// 	return new Promise((resolve, reject) => {
// 		if (amount < 300) {
// 			reject('Too less of a second')
// 		}
// 		setTimeout(() => resolve(`Done for ${amount} ms`), amount)
// 	})
// }

// // Error handling in Proise

// breathe(100).then(res => {
// 	console.log(res);
// }).catch((err) => {
// 	console.error(err)
// })

// async function go() { // declaring function as async
// 	console.log('Start');
// 	const res = await breathe(1000)
// 	console.log(res);
// 	const res2 = await breathe(500)
// 	console.log(res2);
// 	const res3 = await breathe(800)
// 	console.log(res3);
// 	const res4 = await breathe(1000)
// 	console.log(res4);
// 	console.log('End');
// }

// go();

// // Object.keys(), Object.values(), Object.entries()

// const sportsList = {
// 	bats: 50,
// 	balls: 30,
// 	pads: 90,
// 	wickets: 20
// }

// const keys = Object.keys(sportsList).map(items => `<li>${items}</li>`).join('')

// const values = Object.values(sportsList).map(items => `<li>${items}</li>`).join('')

// const entries = Object.entries(sportsList).map(items => `<li>${items}</li>`).join('') // Object.entries() is an iterator

// document.body.innerHTML = entries // keys,values, entries

// // To get total of all items
// const totalCost = Object.values(sportsList).reduce((a, b) => a + b)
// console.log(totalCost);

// // Printing all key, value pairs

// const list = Object.entries(sportsList).forEach(([key, val]) => console.log([key, val])); // forEach loop

// //for of loop
// for ([key, val] of Object.entries(sportsList)) {
// 	console.log(key)
// 	console.log(val);
// }

// // for in gives keys
// for (key in Object.keys(sportsList)) {
// 	console.log(key);
// }

// // Object literal upgrades

// const name = 'Coco';
// const age = 1.5;
// const breed = 'Persian'

// // If the property name and variable name is same, you can remove the property name from an object

// const cat = {
// 	firstName: name, // Also works
// 	age,
// 	breed: breed
// }

// console.log(cat); // Gives the same object with same properties

// // You can remove the (property : function) part and use the name of the function as is with (args)

// const myArea = {

// 	PI: 3.14,

// 	rectArea: function calArea(len, wid) { // works
// 		let area = len * wid
// 		return `The area of rectangle with length: ${len} units and width: ${wid} units is ${area} units`
// 	},

// 	cirArea(rad) { // removing prop and function keywords
// 		let area = myArea.PI * rad * rad
// 		return `The area of circle with radius : ${rad} units is ${area} units`
// 	},

// 	calArea(len, wid) {
// 		let area = len * wid
// 		return `The area of rectangle with length: ${len} units and width: ${wid} units is ${area} units`
// 	},

// 	sqArea(side) {
// 		let area = side * side
// 		return `The area of square with side: ${side} units is ${area} units`
// 	},
// }

// let area = myArea.rectArea(20, 50)
// console.log(area);

// area = myArea.cirArea(50)
// console.log(area);

// area = myArea.sqArea(5);
// console.log(area);

console.log("omer");

var string =
  '{"shortHeadlines ":"[{"fileName": "BloodReport","shortHeadline":"blood"},{"fileName": "BloodReport","shortHeadline":"blood"}]"}';

string = string.replace(/'\'/g, " ");

console.log(string);
