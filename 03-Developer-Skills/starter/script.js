// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = 3;
// console.log();
// let temps1 = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];
// let temps2 = [2, 3, 8, 9, 6, -16, 7];
// let temps = temps1.concat(temps2);

// const calcTemp = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== `number`) continue;
//     if (temps[i] > max) max = temps[i];
//     if (temps[i] < min) min = temps[i];
//   }
//   return max - min;
// };
// console.log(temps);
// const amp = calcTemp(temps);
// console.log(amp);

let arr = [17, 21, 23];
let displayArr = [];

function printForcast(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr.length);
    displayArr[i] = `... ${arr[i]}°C in ${i + 1} days`;
    // return x;
  }
}
printForcast(arr);
// console.log(forcast);
console.log(displayArr);
// function display(arr) {
//   // for (let i = 0; i < arr.length; i++) {
//   console.log(arr.length);
//   // }
// }
// display(displayArr);
