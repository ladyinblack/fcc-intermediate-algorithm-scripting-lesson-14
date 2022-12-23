## ALTERNATE SOLUTIONS

### Solution 1 (Looping approach)
```js
function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;
  // Largest possible value for SCM
  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}

smallestCommons([1, 5]);
```
In this solution, we check every multiple of the largest value in the range until we find a value that is divisible by every value in the range.

The upper bound for this loop is the product of all values in the provided range, because this number will be divisible by every value in the range.

### Solution 2 (ES6 Looping)
```js
function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  // Largest possible value for SCM
  const upperBound = range.reduce((prod, curr) => prod * curr);
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    const divisible = range.every((value) => multiple % value === 0);
    if (divisible) {
      return multiple;
    }
  }
}

smallestCommons([1, 5]);
```
This solution uses ES6 syntax to condense the logic in Solution 1.

### Solution 3 (GCD and LCM)
```js
function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  // GCD of two numbers
  // https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclid's_algorithm
  const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
  // LCM of two numbers
  // https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor
  const lcm = (a, b) => a * b / gcd(a, b);
  // LCM of multiple numbers
  // https://en.wikipedia.org/wiki/Least_common_multiple#Other
  return range.reduce((multiple, curr) => lcm(multiple, curr));
}

smallestCommons([1, 5]);
```
This solution uses formulae and algorithms for the Greatest Common Divisor and Least Common Multiple off of Wikipedia to compactly and quickly compute the Smallest Common Multiple.

### Solution 4 (Prime factorization)
```js
// Find the SCM of a range of numbers
function smallestCommons(arr) {
  const primeFactors = {};
  const [min, max] = arr.sort((a, b) => a - b);
  for (let i = min; i <= max; i++) {
    // Factorize number in range
    const currentFactors = getPrimeFactors(i);
    for (let prime in currentFactors) {
      // Add factor to set or update number of occurrences
      if (!primeFactors[prime] || currentFactors[prime] > primeFactors[prime]) {
        primeFactors[prime] = currentFactors[prime]
      }
    }
  }
  // Build SCM from factorization
  let multiple = 1;
  for (let prime in primeFactors) {
    multiple *= prime ** primeFactors[prime];
  }
  return multiple;
}

// Compute prime factors of a number
function getPrimeFactors(num) {
  const factors = {};
  for (let i = 2; i <= num; i++) {
    // Count occurances of factor
    // Note that composite values will not divide num
    while ((num % i) === 0) {
      factors[i] = (factors[i]) ? factors[i] + 1 : 1;
      num /= i;
    }
  }
  return factors;
}

smallestCommons([1, 5]);
```
This solution uses a prime factorization of the numbers in the range to compute the smallest common multiple.  In general, Solution 3 is much faster, but with a very large range or very large values, sometimes Solution 3 may trigger a recursion limit in some browsers.

