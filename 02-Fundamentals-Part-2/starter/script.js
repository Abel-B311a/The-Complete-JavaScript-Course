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