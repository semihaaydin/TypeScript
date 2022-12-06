/*Complete the square sum function so that it squares
each number passed into it and then sums the results together.
For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9. */
console.log("Test algorithm Problems SquareSum from Codewars");
function squareSum(numbers) {
    /** let total=0;
    for(let item of numbers){total+=item*item;}
    return total; */
    return numbers.reduce(function (prev, curr) { return prev + curr * curr; }, 0);
}
console.log(squareSum([0, 3, 4, 5]));
