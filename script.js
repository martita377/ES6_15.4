// 1. Join

var hello = 'Hello';
var world = 'World';

console.log(`${hello} ${world}!`);

// 2. Multiply

let multiply = (a, b=1) => a * b;
console.log(`Wynik możenia to ${multiply(3)}`);

// 3. Average

function average(...args) {
	let sum=0;
	args.forEach(arg => sum+=arg);
	console.log(`Średnia arytmetyczna to ${sum/args.length}`);
}

average(1,2,3);


// 4. Array

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average(...grades);

// 5. first & last name

const arr = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstName, , lastName] = arr;
console.log(`Imię to ${firstName}, nazwisko to ${lastName}`);
