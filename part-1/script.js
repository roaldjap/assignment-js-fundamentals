// 1.1 Values and Variables
let country = 'Philippines';
let continent = 'Asia';
let population = '106000000';

console.log(country);
console.log(continent);
console.log(population);

// 1.2 Data types
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//1.3 let, const and var
let language = 'Filipino';
const country = 'Philippines';
const continent = 'Asia';
const isIsland = false;

//1.4 Basic Operators
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description1 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description1);

// 1.5 template literals
const description = `${country} is in ${continent}, and its
${population} million people speak ${language}`;

// 1.6 taking decisions if / else statements
if (population > 33) {
	console.log(`${country}'s population is above average`);
	return;
} else {
	console.log(`${country}'s population is ${33 - population} million below average`);
}

// 1.7 Type Conversion and Coercion
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);
