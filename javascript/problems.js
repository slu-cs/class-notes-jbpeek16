
let sum = 0;
for (let x = 1; x < 11; x++) {
  sum += (x*x);
}
console.log(sum);

let fib = (n) => {
  let i = 0;
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 1;
  } else {
    return (fib(n-1) + fib(n-2));
  }
}
