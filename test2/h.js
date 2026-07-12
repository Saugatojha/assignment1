function invertedRightAlignedTriangle(n) {
  for (let i = n; i >= 1; i--) {
    console.log(" ".repeat(n - i) + "*".repeat(i));
  }
}

invertedRightAlignedTriangle(5);