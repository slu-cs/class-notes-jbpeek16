
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
