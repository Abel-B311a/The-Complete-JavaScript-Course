const dolphinesAVG = (96+108+89)/3
const koalasAVG = (88+91+110)/3

console.log(`The average score of Team Dolphine is ${dolphinesAVG}`)
console.log(`The average score of Team Koalas is ${koalasAVG}`)

if (dolphinesAVG > koalasAVG) {
    console.log(`Dolphines WIN!`)
} else if (dolphinesAVG < koalasAVG) {
    console.log(`Koalas WIN!`)
} else {
    console.log(`Draw`)
}