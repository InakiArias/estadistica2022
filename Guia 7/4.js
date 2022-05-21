const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

let str = `1 5403 47 12 5314 70
2 4852 51 13 5097 64
3 4908 43 14 4932 59
4 4756 37 15 5023 75
5 4901 78 16 5117 71
6 4892 66 17 5099 68
7 5354 51 18 5345 78
8 5321 66 19 5456 88
9 5045 61 20 5554 83
10 5113 72 21 5421 82
11 5247 63 22 5555 87`;

let arr = str.replace(/,/g, ".").split("\n").map(e => e.split(" ").map(Number));

let newArr = [];

for (let sub of arr) {
    newArr.push([sub[1], sub[2]]);
}

for (let sub of arr) {
    newArr.push([sub[4], sub[5]]);
}

console.log(newArr);

let valsp = newArr.map(e => e[1] / e[0]);

console.log(valsp);

let pbarra = average(valsp);
let nbarra = average(newArr.map(e => e[0]));

console.log(pbarra - 3 * Math.sqrt(pbarra * (1 - pbarra) / nbarra));
console.log(pbarra);