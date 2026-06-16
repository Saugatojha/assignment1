function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return num + " is an even number.";
  } else {
    return num + " is an odd number.";
  }
}

console.log(checkEvenOdd(7));
console.log(checkEvenOdd(8));