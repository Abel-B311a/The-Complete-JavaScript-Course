'use strict';

function chisDetector() {
  console.log(`Chis Alert! Bella is here!`)
}
// calling or invoking or running the function 
chisDetector()
chisDetector()
chisDetector()
//These will print the  Chis Alert! Bella is here! 3 

function bella(Age, highlight) {
  const bellaYearly = `When bella reached the age ${Age}, he ${highlight}.`;
  return bellaYearly
}

console.log(bella(18, `went to AAU`))
console.log(bella(24, `landed his 1st Job`))
console.log(bella(29, `changed his career path to a Frontend Developer`))

function bella(Age, highlight) { // function name and variables
  return `When bella reached the age ${Age}, he ${highlight}.`;} // you can directlly return it no need to define a variable and then return the variable 
console.log(bella(18, `went to AAU`))  // the values are called arguments 
console.log(bella(24, `landed his 1st Job`))

function ageCalDec(birthYear) {
  return 2023-birthYear
}

const ageBella = ageCalDec(1994)
const ageAshe = ageCalDec(1995)
console.log(ageBella, ageAshe)



const ageCalExp = function (birthYear) {
  return 2023-birthYear
}

const ageABD = ageCalExp(1994)
const ageBoka = ageCalExp(1996)
console.log(ageABD, ageBoka)

const ageCalArr = birthYear => 2023-birthYear
const ageNahom = ageCalArr(1994)
console.log(ageNahom)



let retirement = (birthYear, Nameof) => {
  const amet = 2023-birthYear;
  const ret = 60-amet;
  return `${Nameof} retires in ${ret} years!` 
}
const bellaRetData = retirement(1994, `Bella`)
const MotherRerData = retirement(1965, `Messi`)
console.log(`${bellaRetData} and his mother, ${MotherRerData}`)




function EdmeCalc(birthYear){
  return 2023-birthYear;
}

let Edme = EdmeCalc(1960)


function retirement2(Nameof) { 
  const ret = 60-Edme;
  
  if (ret>=0) {
    console.log(`${Nameof} retires in ${ret} years!`)  
  } else {
    console.log(`${Nameof} aleady retired!`)
    
  } 
}

let NameRet = retirement2(`Messi`)



// coding Challenge 1 Data 1
const calcAverage = (value1, value2, value3) => (value1+value2+value3)/3;
let scoreDolphines = calcAverage(85,54,41);
let scoreKoalas = calcAverage(23,34,27);
console.log(scoreDolphines, scoreKoalas);

function checkWinner(avgDolphines, avgKoalas) {
  if ((2*avgKoalas)<=avgDolphines) {
    console.log(`Dolphines win (${avgDolphines} vs. ${avgKoalas})`)
  } else if ((2*avgDolphines)<=avgKoalas) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphines})`)
  } else {
    console.log(`Nobody Wins!`)
  }
}

checkWinner(scoreDolphines, scoreKoalas)


// data 2
scoreDolphines = calcAverage(44,23,71);
scoreKoalas = calcAverage(65,54,49);
console.log(scoreDolphines, scoreKoalas);
// by simply calling the function checkwinner again, it runnes for data 2
checkWinner(scoreDolphines, scoreKoalas)


// Arrays

const FA4Members = [`Bella`, `Faya`, `ABD`, `Boka`, `Aman`]
console.log(FA4Members)

const FANMembers = new Array (`Bella`, `Faya`, `ABD`, `Boka`, `Aman`, `Nahom`, `Ashe`, `Adam`)
console.log(FANMembers[3]) // will print the number 4 out of the array list, it start counting starting from 0.
console.log(FANMembers.length) // will count the number of elements in the array
console.log(FANMembers[FANMembers.length-1])// will print the last element 8-1=7 the the 7th element is Adam
FANMembers[5] = `Ekru` // will replace or mutate an element, we can always change the element in Array eventho the array is declared as const. but we cant replace the entire array.
console.log(FANMembers)
FANMembers.push(`Nahom`) // a method which will add elements at the end of the list.
console.log(FANMembers)
FANMembers.unshift(`Sualh`) // a method which will add elements at the begining of the list.
console.log(FANMembers)
FANMembers.pop() // a method which will remove the last element of the list
FANMembers.pop() // if we do it twice the last two will be gone
console.log(FANMembers)
const removedName=FANMembers.shift(); // will remove the 1st element from the list
console.log(FANMembers)
console.log(removedName) // if we store it in a variable it will show the removed 1st name
console.log(FANMembers.indexOf(`Faya`)) // will tell at which position an elemnt exist in the list, if we use it to the element which is not in the list it will generate -1
console.log(FANMembers.includes(`Shampodia`)) // will result a true of false value if an element present in the list, and uses a strict equality, since it produce a boolean it can be used in an if statemnt



// Array elemnts can be strings, variables, calculations, ather arrays ... just any expression but  not a statement 

function EdmeCalc2(birthYear2){
  return 2023-birthYear2;
}

const FANEdme = [1994, 1994, 1994, 1996, 1994, 1994, 1995, 1994]
const FANEdmeArray = [EdmeCalc2(FANEdme[0]),EdmeCalc2(FANEdme[1]),EdmeCalc2(FANEdme[2]),EdmeCalc2(FANEdme[3]),EdmeCalc2(FANEdme[4]),EdmeCalc2(FANEdme[5]),EdmeCalc2(FANEdme[6]),EdmeCalc2(FANEdme[FANEdme.length-1])]
console.log(FANEdmeArray)

console.log(`${FANMembers[0]} is ${FANEdmeArray[0]} years old!`)
console.log(`${FANMembers[1]} is ${FANEdmeArray[1]} years old!`)
console.log(`${FANMembers[FANMembers.length-2]} is ${FANEdmeArray[FANEdmeArray.length-2]} years old!`)

// objects
const abelInfo = {
  NameAKA: `Bella Beats`,
  bornDay: FANEdme[0],
  age: FANEdmeArray[0],
  friends: FANMembers
} 
console.log(abelInfo)

// coding challenge 2

function calcTip(bill) {
  if (bill>=50 && bill<=300) {
    return bill*0.15
  } else {
    return bill*0.2
  }
}

const bills = [125, 555,  44] 

const tips = [calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[2])]
console.log(tips)

const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]]
console.log(total)























