const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

let str = `1 2 0,04 11 0 0,00
2 3 0,06 12 1 0,02
3 4 0,08 13 2 0,04
4 1 0,02 14 1 0,02
5 0 0,00 15 0 0,00
6 2 0,04 16 3 0,06
7 4 0,08 17 7 0,14
8 1 0,02 18 2 0,04
9 1 0,02 19 1 0,02
10 3 0,06 20 2 0,04`;

let arr = str.replace(/,/g, ".").split("\n").map(e => e.split(" ").map(Number));
console.log(arr);

let valsp = [];

for (let sub of arr) {
    valsp.push(sub[2]);
    valsp.push(sub[5]);
}

console.log(valsp);

let pbarra = average(valsp);
console.log(pbarra * 50 + 3 * Math.sqrt(pbarra * 50 * (1 - pbarra)));