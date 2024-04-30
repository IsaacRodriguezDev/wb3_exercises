

function convertFtoC(someTemp){
let fahrenheit = someTemp
let celcius = (fahrenheit-32)*5/9;
return celcius
}
console.log('convertFtoC')

console.log(convertFtoC(212))
console.log(convertFtoC(90))
console.log(convertFtoC(90))
console.log(convertFtoC(72))
console.log(convertFtoC(32))
console.log(convertFtoC(0))
console.log(convertFtoC(-40))
function convertCtoF(temp){
    let celcius = temp
    let fahrenheit = (celcius*1.8)+32
    return fahrenheit
}
console.log('convertCtoF')

console.log(convertCtoF(100))
console.log(convertCtoF(45))
console.log(convertCtoF(19))
console.log(convertCtoF(0))
console.log(convertCtoF(-7))
console.log(convertCtoF(-40))

