"use strict";

// function chisDetector() {
//   console.log(`Chis Alert! Bella is here!`)
// }
// // calling or invoking or running the function
// chisDetector()
// chisDetector()
// chisDetector()
// //These will print the  Chis Alert! Bella is here! 3

// function bella(Age, highlight) {
//   const bellaYearly = `When bella reached the age ${Age}, he ${highlight}.`;
//   return bellaYearly
// }

// console.log(bella(18, `went to AAU`))
// console.log(bella(24, `landed his 1st Job`))
// console.log(bella(29, `changed his career path to a Frontend Developer`))

// function bella(Age, highlight) { // function name and variables
//   return `When bella reached the age ${Age}, he ${highlight}.`;} // you can directlly return it no need to define a variable and then return the variable
// console.log(bella(18, `went to AAU`))  // the values are called arguments
// console.log(bella(24, `landed his 1st Job`))

// function ageCalDec(birthYear) {
//   return 2023-birthYear
// }

// const ageBella = ageCalDec(1994)
// const ageAshe = ageCalDec(1995)
// console.log(ageBella, ageAshe)

// const ageCalExp = function (birthYear) {
//   return 2023-birthYear
// }

// const ageABD = ageCalExp(1994)
// const ageBoka = ageCalExp(1996)
// console.log(ageABD, ageBoka)

// const ageCalArr = birthYear => 2023-birthYear
// const ageNahom = ageCalArr(1994)
// console.log(ageNahom)

// let retirement = (birthYear, Nameof) => {
//   const amet = 2023-birthYear;
//   const ret = 60-amet;
//   return `${Nameof} retires in ${ret} years!`
// }
// const bellaRetData = retirement(1994, `Bella`)
// const MotherRerData = retirement(1965, `Messi`)
// console.log(`${bellaRetData} and his mother, ${MotherRerData}`)

// function EdmeCalc(birthYear){
//   return 2023-birthYear;
// }

// let Edme = EdmeCalc(1960)

// function retirement2(Nameof) {
//   const ret = 60-Edme;

//   if (ret>=0) {
//     console.log(`${Nameof} retires in ${ret} years!`)
//   } else {
//     console.log(`${Nameof} aleady retired!`)

//   }
// }

// let NameRet = retirement2(`Messi`)

// // coding Challenge 1 Data 1
// const calcAverage = (value1, value2, value3) => (value1+value2+value3)/3;
// let scoreDolphines = calcAverage(85,54,41);
// let scoreKoalas = calcAverage(23,34,27);
// console.log(scoreDolphines, scoreKoalas);

// function checkWinner(avgDolphines, avgKoalas) {
//   if ((2*avgKoalas)<=avgDolphines) {
//     console.log(`Dolphines win (${avgDolphines} vs. ${avgKoalas})`)
//   } else if ((2*avgDolphines)<=avgKoalas) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphines})`)
//   } else {
//     console.log(`Nobody Wins!`)
//   }
// }

// checkWinner(scoreDolphines, scoreKoalas)

// // data 2
// scoreDolphines = calcAverage(44,23,71);
// scoreKoalas = calcAverage(65,54,49);
// console.log(scoreDolphines, scoreKoalas);
// // by simply calling the function checkwinner again, it runnes for data 2
// checkWinner(scoreDolphines, scoreKoalas)

// // Arrays

// const FA4Members = [`Bella`, `Faya`, `ABD`, `Boka`, `Aman`]
// console.log(FA4Members)

// const FANMembers = new Array (`Bella`, `Faya`, `ABD`, `Boka`, `Aman`, `Nahom`, `Ashe`, `Adam`)
// console.log(FANMembers[3]) // will print the number 4 out of the array list, it start counting starting from 0.
// console.log(FANMembers.length) // will count the number of elements in the array
// console.log(FANMembers[FANMembers.length-1])// will print the last element 8-1=7 the the 7th element is Adam
// FANMembers[5] = `Ekru` // will replace or mutate an element, we can always change the element in Array eventho the array is declared as const. but we cant replace the entire array.
// console.log(FANMembers)
// FANMembers.push(`Nahom`) // a method which will add elements at the end of the list.
// console.log(FANMembers)
// FANMembers.unshift(`Sualh`) // a method which will add elements at the begining of the list.
// console.log(FANMembers)
// FANMembers.pop() // a method which will remove the last element of the list
// FANMembers.pop() // if we do it twice the last two will be gone
// console.log(FANMembers)
// const removedName=FANMembers.shift(); // will remove the 1st element from the list
// console.log(FANMembers)
// console.log(removedName) // if we store it in a variable it will show the removed 1st name
// console.log(FANMembers.indexOf(`Faya`)) // will tell at which position an elemnt exist in the list, if we use it to the element which is not in the list it will generate -1
// console.log(FANMembers.includes(`Shampodia`)) // will result a true of false value if an element present in the list, and uses a strict equality, since it produce a boolean it can be used in an if statemnt

// // Array elemnts can be strings, variables, calculations, ather arrays ... just any expression but  not a statement

// function EdmeCalc2(birthYear2){
//   return 2023-birthYear2;
// }

// const FANEdme = [1994, 1994, 1994, 1996, 1994, 1994, 1995, 1994]
// const FANEdmeArray = [EdmeCalc2(FANEdme[0]),EdmeCalc2(FANEdme[1]),EdmeCalc2(FANEdme[2]),EdmeCalc2(FANEdme[3]),EdmeCalc2(FANEdme[4]),EdmeCalc2(FANEdme[5]),EdmeCalc2(FANEdme[6]),EdmeCalc2(FANEdme[FANEdme.length-1])]
// console.log(FANEdmeArray)

// console.log(`${FANMembers[0]} is ${FANEdmeArray[0]} years old!`)
// console.log(`${FANMembers[1]} is ${FANEdmeArray[1]} years old!`)
// console.log(`${FANMembers[FANMembers.length-2]} is ${FANEdmeArray[FANEdmeArray.length-2]} years old!`)

// // coding challenge 2

// function calcTip(bill) {
//   if (bill>=50 && bill<=300) {
//     return bill*0.15
//   } else {
//     return bill*0.2
//   }
// }

// const bills = [125, 555,  44]

// const tips = [calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[2])]
// console.log(tips)

// const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]]
// console.log(total)

// // objects
// const abelInfo = {
//   NameAKA: `Bella Beats`,
//   bornDay: FANEdme[0],
//   age: FANEdmeArray[0],
//   friends: FANMembers,
//   chisness: true,
//   graduationYear: 2018,
//   Experiance: function(graduationYear) { // usng normal function expresion
//     return 2023-graduationYear
//   },
//   Experiance2: function() {
//     return 2023-this.graduationYear
//   },// using this.  currently `this` is abelinfo. the reasion being experiance2 is called by the method abelinfo in the console.log. this will automate our code. if we change the name of the object i.e.abelInfo it would still work if you are using this. otherwise we need to change it manually everywhere. Your code needs to be as automated as posiible for ease of future changes.

//   summary: function() {
//     return `${this.NameAKA} is a ${this.age} years old ${this.Job} and he is a ${this.chisness ? `Chis`: `Seget`}.`
//   }
// } ;
// console.log(abelInfo)
// console.log(abelInfo.Experiance(abelInfo.graduationYear))
// console.log(abelInfo.Experiance2())
// console.log(abelInfo[`Experiance`](abelInfo[`graduationYear`]))

// console.log(abelInfo.NameAKA) // Dot notation: to specifically select an element from the list we use the .propertyName
// console.log(abelInfo[`NameAKA`]) // Bracket notation: this does the same as well but we can put some calualtion or expression in here Eg....

// const pplqa = prompt(`what do you want to know about Bella? NameAKA, bornDay, age or friends`)
// console.log(abelInfo[pplqa])   // will take the ans from the prompt and search in abelinfo and print the result. this doesnt work if we console.log(abelInfo.pplqa)
// // if we insert a property that doesnt exsit in the objects it will generate undifined which is a falsy value and we can use that to generate an if/else statement

// if (abelInfo[pplqa]) {
//   console.log(abelInfo[pplqa])
// } else {
//   console.log(`Mn Agebah! Police neh ende? only choose from NameAKA, bornDay, age or friends`)
// }

// // to add elements to objects using dot and bracket notation
// abelInfo.location = `Addis Ababa, Ethiopia`
// abelInfo[`Job`] = `FulL Stack Developer`
// console.log(abelInfo)

// console.log(`${abelInfo.NameAKA} has ${abelInfo.friends.length} friends, and his best friend is ${FA4Members[4]}.`)

// console.log(abelInfo.summary())

// // coding challenge 3

// const BMIinfo = {
//   Name1: `Mark Miller`,
//   Name2: `John Smith`,
//   Mass1: 78,
//   Mass2: 92,
//   height1: 1.69,
//   height2: 1.95,
//   calcBMI1: function() {
//     this.BMI1 = this.Mass1/(this.height1 ** 2)
//     return this.BMI1
//   },
//   calcBMI2: function() {
//     this.BMI2 = this.Mass2/(this.height2 ** 2)
//     return this.BMI2
//   }
// }

// console.log(BMIinfo.calcBMI1())
// console.log(BMIinfo.calcBMI2())
// console.log(BMIinfo)

// if (BMIinfo.BMI1>BMIinfo.BMI2) {
//   console.log(`${BMIinfo.Name1}'s BMI (${BMIinfo.BMI1}) is higher than ${BMIinfo.Name2}'s (${BMIinfo.BMI2})`)
// } else if (BMIinfo.BMI2>BMIinfo.BMI1){
//   console.log(`${BMIinfo.Name2}'s BMI (${BMIinfo.BMI2}) is higher than ${BMIinfo.Name1}'s (${BMIinfo.BMI1})`)
// } else {
//   console.log(`Both are Equal!`)
// // }

// for(let i = 1; i<=10; i++) {
//   console.log(`Bench press ${i}`)
// }

// const ABDInfo = [
//   `NameAKA: ABD`,
//     `bornYear: 1994`,
//     `age: 29`,
//     `chisness: true`,
//     `graduationYear: 2018`
// ]

// const type = [] // the array to be filled

// for (let i = 0; i < ABDInfo.length; i++) {
//   console.log(ABDInfo[i]);   // listing all elements in the array (readng from an array)
//   type[i] = typeof ABDInfo[i] // creating an array from the loop, (filling the array)
//   type.push(typeof ABDInfo[i]) // another method to fill the array which will add it to the end of the array. this is the better method!
// }
// console.log(type)

// const ametoch = [1994, 2003, 1996, 1997, 1845, 1999, 2008, 1993, 2022, 1998, 1987]
// const Edmeoch = []
// const _90s = []

// for (let i=0; i<ametoch.length; i++) {
// Edmeoch[i] = (2023-ametoch[i])
// if (ametoch[i] >= 1990 !== ametoch[i]<2000) continue;  // continue will escape the elements mentioned in the if  condtion
// if (ametoch[i] > 1997) break; // stops the loop after the if condition is satisfied
// _90s.push(ametoch[i]) // this will push the slected ones to the array
// }
// console.log(Edmeoch)
// console.log(_90s)

// for (let i=ABDInfo.length-1; i>=0; i--) { // Looping Backwards, looping starting from the end to the beginning
//   console.log(i, ABDInfo[i])
// }

// // 3set... 5 rep

// for (let set=1; set<=3; set++) {           // loop inside a loop
//   console.log(`set ${set}`)
//   for (let rep=1; rep<=5; rep++) {
//     console.log(`set ${set}: rep ${rep}`)
//   }
// }

// // while loop

// let i=1
// while (i<=10) {
//   console.log(`Squat ${i}`)
//   i++
// }

// // above is while loop structure compared to the for loop, but we dont need the counter varible in while loop.
// // i.e. if we dont know how many itration we need before hand... Eg... we dont know how many times we  rolling a dice till we get a 6.

// let dice = Math.trunc(Math.random()*6+1)   // Math.random() will automatically generate nubmbers b/t 0.1 and 1.... Math.trunc will round to bottom
// console.log(dice)

// while(dice!==6) {    // this line checkes if the number is diffrent from 6
//   console.log(`You rolled a ${dice}`) // and print this one
//   dice = Math.trunc(Math.random()*6+1) // this line will generate a new dice number to be tested
//   if (dice==6) {   // if 6 is generated this will be printed
//     console.log(`We Got a Winner Here!`)
//   }
// }

// coding challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bills) {
  if (bills >= 50 && bills <= 300) {
    return bills * 0.15;
  } else {
    return bills * 0.2;
  }
}
let sumTotals = 0;

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
  sumTotals = sumTotals + totals[i];
}

const avgSumTotals = sumTotals / totals.length;
console.log(`Bill = `, ...bills);
console.log(`Tip = `, ...tips);
console.log(`Total = `, ...totals);
console.log(`Today's Average Totals = `, avgSumTotals);

// coding challenge 5

// let arr = [56,63,78,54,5,4,2,3,99,100]
// let sum = 0

// for(let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i]
// }

// console.log(sum)
// console.log(sum/(arr.length))

// // or
// let arr = [56,63,78,54,5,4,2,3,99,100]
// function avgCal(arr) {
//   let sum = 0
//   for(let i = 0; i < arr.length; i++) {
//       sum = sum + arr[i]
//     }
//     return sum/arr.length
// }
// console.log(avgCal(arr))
