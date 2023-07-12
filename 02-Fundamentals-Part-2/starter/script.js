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




















