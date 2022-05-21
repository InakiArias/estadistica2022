const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

let str = `4 8 2 0 6 4 3 9 0 10`;

let arr = str.split(" ").map(Number);

console.log(arr);

let cbarra = average(arr);

console.log(cbarra);
console.log(cbarra + 3 * Math.sqrt(cbarra));
console.log(cbarra - 3 * Math.sqrt(cbarra));