console.log('№4')

function sum(a, b) {
  return a + b;
}

console.log(sum(1,2))

function munis(a, b) {
  return a - b;
}

console.log(munis(6,4))

function multiplication(a, b) {
  return a * b;
}

console.log(multiplication(5,3))

function division(a, b) {
  return a / b;
}

console.log(division(6, 2))


console.log('№5')

function someNum(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
someNum(5)

console.log('№6')

function someNum2(n) {
for (let i = n; i > 0; i--) {
        console.log(i);
    }
}
someNum2(5)

console.log('№7')

function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
console.log(pow(5, 2))

console.log('№8')

function isBigger(a, b) {
    if (a > b) return true;
    else return false;   
}
console.log(isBigger(25, -14))

console.log('№9')

function isSmaller(a, b) {
    if (a < b) return true;
    else return false;   
}
console.log(isSmaller(16,-4))
