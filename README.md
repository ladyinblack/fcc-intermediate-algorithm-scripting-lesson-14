# fcc-intermediate-algorithm-scripting-lesson-14

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-vexebg)

## PROBLEM EXPLANATION
The smallest common multiple between two numbers is the smallest number that both numbers can divide into evenly.  This concept can be extended to more than two numbers as well.

We can first start with finding the smallest common multiple between two numbers.  Naively, we can start writing out multiple of each number until we write a multiple that exists from both numbers.

An example would be the numbers `3` and `4`.  The multiples of `3` are `3, 6, 9, 12, 15, 18, ...` and the multiples of `4` are `4, 8, 12, 16, 20, ...`.  The first smallest number we run into in both lists is `12` so this is the smallest common multiple between `3` and `4`.

A faster approach is to check all multiples of `4` to see if they are also multiples of `3`, by checking the remainder when we divide the multiple of `4` by `3`.

Be careful - do not forget the keyword **range**.  If we are given `[1, 5]`, then we have to check for the smallest common multiple for all the numbers `[1, 2, 3, 4, 5]`, which is the smallest number that is evenly divisible by all of them.

### REFERENCE LINKS
- [Least (Smallest) Common Multiple](https://en.wikipedia.org/wiki/Least_common_multiple)
- [Greatest Common Divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor#greatest_common_denominator)

## HINTS
### Hint 1
You can use remainder operator (`%`) to check if the remainder of a division is 0, which means it is evenly divisible.

