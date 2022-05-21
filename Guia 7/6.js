const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

let str = `1 9 17 11 14 25
2 12 14 12 6 5
3 7 6 13 7 8
4 15 23 14 9 11
5 7 5 15 12 18
6 7 7 16 11 13
7 9 10 17 14 22
8 11 19 18 6 6
9 16 29 19 14 23
10 15 18 20 13 22`;

let arr = str.replace(/,/g, ".").split("\n").map(e => e.split(" ").map(Number));

console.log(arr);

let newArr = [];

for (let sub of arr) {
    newArr.push([sub[1], sub[2]]);
}

for (let sub of arr) {
    newArr.push([sub[4], sub[5]]);
}

console.log(newArr);

let ubarra = average(newArr.map(e => e[1] / e[0]));
let nbarra = average(newArr.map(e => e[0]))

console.log(newArr.map(e => e[1] / e[0]));

console.log(ubarra);
console.log(ubarra + 3 * Math.sqrt(ubarra / nbarra));
console.log(ubarra - 3 * Math.sqrt(ubarra / nbarra));

