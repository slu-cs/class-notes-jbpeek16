// Objects and array syntax

// Object literal

const list = {x: {a: 1, b: {c: 2, d: {e: 5, f: 'g'}}}, y: 2};

const point = {x: 1, y: 2};
console.log(point);

const circle = {
  center: point,
  radius: 4
};

console.log(circle.center.x);
console.log(circle.color);

//Array
const languages = ['HTML', 'CSS', 'JS'];

//accessing length and elements
for (let i = 0; i < languages.length; i++) {
  console.log(languages[i]);
};

// changing elements
languages[2] = 'Javascript';

// adding elements
languages.push('MongoDB');

// iterate over elements
for (const lang of languages) {
  console.log(lang);
};
