const dolphinesAVG = (96+108+89)/3
const koalasAVG = (88+91+110)/3

console.log(`The average score of Team Dolphine is ${dolphinesAVG}`)
console.log(`The average score of Team Koalas is ${koalasAVG}`)

if ((dolphinesAVG > koalasAVG) && dolphinesAVG >= 100) {
    console.log(`Dolphines WIN!`)
} else if ((dolphinesAVG < koalasAVG) && koalasAVG >= 100) {
    console.log(`Koalas WIN!`)
} else if ((dolphinesAVG == koalasAVG) && ((dolphinesAVG && koalasAVG) >= 100)) {
    console.log(`DRAW!`)
} else {
    console.log(`Nobody Wins`)
}

