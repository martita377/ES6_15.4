'use strict';

// 1. Join

var hello = 'Hello';
var world = 'World';

console.log(hello + ' ' + world + '!');

// 2. Multiply

var multiply = function multiply(a) {
	var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	return a * b;
};
console.log('Wynik mo\u017Cenia to ' + multiply(3));

// 3. Average

function average() {
	var sum = 0;

	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	args.forEach(function (arg) {
		return sum += arg;
	});
	console.log('\u015Arednia arytmetyczna to ' + sum / args.length);
}

average(1, 2, 3);

// 4. Array

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average.apply(undefined, grades);

// 5. first & last name

var arr = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = arr[2],
    lastName = arr[4];

console.log('Imi\u0119 to ' + firstName + ', nazwisko to ' + lastName);
