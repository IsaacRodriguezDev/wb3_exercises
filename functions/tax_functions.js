function getSocSecTax(grossPay){
    let taxRate = 6.2/100
    let socialSecurityTax = grossPay*taxRate
    return socialSecurityTax
}
console.log(getSocSecTax(1000))

function getMedicareTax(grossPay){
    let taxRate = 1.45/100
    let medicare = grossPay * taxRate
    return medicare

}
console.log(getMedicareTax(800))

function getFederalTax(grossPay,withHoldingCode){
    let federalTaxWithHolding 
    if(withHoldingCode === 0){
        let taxRate = 23/100
        federalTaxWithHolding = grossPay*taxRate
    }else if(withHoldingCode === 1){
        let taxRate = 21/100
         federalTaxWithHolding = grossPay*taxRate
    }else if(withHoldingCode ===2){
        let taxRate = 19.5/100
         federalTaxWithHolding = grossPay*taxRate
    }else if(withHoldingCode ===3){
        let taxRate = 18.5/100
         federalTaxWithHolding = grossPay*taxRate
    }else if(withHoldingCode ===4){
         let taxRate = 18/100
          federalTaxWithHolding = grossPay*taxRate
         
         
         }else{
            
                let codeAboveFour = withHoldingCode - 4
                withHoldingCode =.18-(codeAboveFour*.005)
                console.log(withHoldingCode)
                let taxRate = withHoldingCode
                federalTaxWithHolding = grossPay*taxRate
               
         }
         return federalTaxWithHolding.toFixed(2)
    }
   
    

console.log(getFederalTax(750,0))
console.log(getFederalTax(1550,2))
console.log(getFederalTax(1100,6))