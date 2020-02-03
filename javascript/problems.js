
let sum = 0;
for (let x = 1; x < 11; x++) {
  sum += (x*x);
}
console.log(sum);

// print first fib number greater than 1000
let fib = (n) => {
  let i = 0;
  let fib_h = (n1, n2) => {
    while (n2 < 1000) {
      fib_h(n2, (n1 + n2))
    }
    i = n2;
  }
  fib_h(1, 1);
  console.log(i);
}

console.log(fib(100));

let count = 0;
for (let x = 1; x < 101; x++) {
  if (x%3 === 0) {
    count += 1;
  }
  if (x%5 === 0) {
    count += 1;
  }
  if ((x%3 === 0) && (x%5 === 0)) {
    count -= 1;
  }
}
