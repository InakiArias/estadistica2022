const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

let str = `11.965 11.983 12.058 12.080 12.080 11.985 11.981 11.927 11.969 12.017 11.955 12.012 12.019 12.035 11.983 11.959 12.031 11.969 11.998 11.996 12.008 11.975 11.972 11.989 12.052`

let arr = str.split(" ").map(Number);

console.log(arr);

let rangos = [];

for (let i = 0; i < arr.length - 1; i++) 
    rangos.push(Math.abs(arr[i] - arr[i + 1]));

console.log(rangos);

let xbarra = average(arr);
let rbarra = (average(rangos));

console.log(xbarra);
console.log(rbarra);