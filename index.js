// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Smallest Common Multiple</h1>`;

/**
 * Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
 *
 * The range will be an array of two numbers that will not necessarily be in numerical order.
 *
 * For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3.  The answer here would be 6.
 */

function smallestCommons(arr) {
  let first, second;
  if (arr[0] < arr[arr.length - 1]) {
    first = arr[0];
    second = arr[arr.length - 1];
  } else {
    first = arr[arr.length - 1];
    second = arr[0];
  }
  const divNum = second - first + 1;
  let max = 1;
  for (let i = first; i <= second; i++) {
    max *= i;
  }
  for (let mul = second; mul <= max; mul += second) {
    let div = 0;
    for (let d = first; d <= second; d++) {
      if (mul % d === 0) {
        div += 1;
      }
    }
    if (div === divNum) {
      return mul;
    }
  }
}

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([5, 1]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));
