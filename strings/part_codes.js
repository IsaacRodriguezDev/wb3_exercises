'use strict'

function getSupplier(code){
    let colonSearch = code.indexOf(':')
    code = code.substring(0, colonSearch)
console.log(code)
}
function getSupplierNumber(code){
    let colonSearch = code.indexOf(':')
    let emDashSearch = code.indexOf('-')
    code =code.substring(colonSearch+1,emDashSearch)
    console.log(code)
}

function getSize(code){
    let emDashSearch = code.indexOf('-')
    code = code.substring(emDashSearch+1)
    console.log(code)
}
getSupplier("supplierCode:productNumber-size")
getSupplierNumber("supplierCode:productNumber-size") 
getSize("supplierCode:productNumber-size")
