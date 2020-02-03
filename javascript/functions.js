
const avg = function(a, b) {
  return (a + b) / 2;
};

const printAB = function(a, b) {
  console.log(`a = ${a}, b = ${b}`);
};

// will either log the elements or undefined
printAB(7, 8);

printAB(10);

printAB();

const rectangle = {
  width: 10,
  height: 20,
  area: function() { return this.width * this.height }
};

console.log(rectangle.area());

// constructor definition
const Rectangle = function(width, height) {
  this.width = width;
  this.height = height;
};

const small = new Rectangle(1, 2);
const large = new Rectangle(10, 20);
