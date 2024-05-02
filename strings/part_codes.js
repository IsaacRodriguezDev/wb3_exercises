'use strict'
let partCode = "ACME:123-L"
let secondPartCode ='DI:1234-M'
let thirdPartCode = 'ACE:1-12'
let emDashSearch = partCode.indexOf('-')
let colonSearch = partCode.indexOf(':')
let supplier = getSupplier(partCode)
let productNumber = getProductNumber(partCode) 
let size = getSize(partCode)

function getSupplier(code){
    let result
    result = code.substring(0, colonSearch)
return result
}
function getProductNumber(code){
    let result
    result =code.substring(colonSearch+1,emDashSearch)
   return result
}

function getSize(code){
    let result =  code.substring(emDashSearch+1)
   
    let message
    if(Number(result)){
        message = 'size ' + result
    }
    else if(result === 'L'){
        message = "large (" + result+")" 
    } else if (result ==="M"){
        message = "medium (" + result+")" 

    }
    return message
}
console.log(`${partCode} : The ${size} part ${productNumber} is supplied by ${supplier}`)
