const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

let str = `1 3,73 5,23 11 3,64 5,37
2 3,16 4,82 12 3,27 4,42
3 3,56 4,98 13 3,16 4,85
4 3,01 4,28 14 3,39 4,44
5 3,87 5,74 15 3,85 5,06
6 3,9 5,42 16 3,9 4,99
7 3,54 4,08 17 3,72 4,67
8 3,32 4,55 18 3,51 4,37
9 3,29 4,48 19 3,34 4,53
10 3,83 5,09 20 3,99 5,28`

let arr = str.replace(/,/ig, ".").split("\n");
arr = arr.map(e => e.split(" ").map(e => Number(e)));

let proms = [];
let rangos = [];

for (let sub of arr) {
    proms.push(sub[1])
    rangos.push(sub[2]);
}

for (let sub of arr) {
    proms.push(sub[4])
    rangos.push(sub[5]);
}

let xbarra = average(proms);
let rbarra = average(rangos);
let a2 = 0.308;
let d3 = 0.223;
let d4 = 1.777;

console.log(rbarra);