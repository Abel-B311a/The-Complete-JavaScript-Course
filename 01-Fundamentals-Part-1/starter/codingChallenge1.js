// test data 1

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass / (markHeight ** 2);
let jhonBMI = johnMass / (johnHeight ** 2);

console.log(markBMI);
console.log(jhonBMI);

let markHigherBMI = (markBMI > jhonBMI) ;
console.log(markHigherBMI);


// test data 2

markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

markBMI = markMass / (markHeight ** 2);
jhonBMI = johnMass / (johnHeight ** 2);

console.log(markBMI);
console.log(jhonBMI);

markHigherBMI = (markBMI > jhonBMI);
console.log(markHigherBMI);