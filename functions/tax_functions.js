function getSocSecTax(grossPay){
    let taxRate = 6.2/100
    let socialSecurityTax = grossPay*taxRate
    return socialSecurityTax
}
console.log('Social security tax is: '+getSocSecTax(1000))

function getMedicareTax(grossPay){
    let taxRate = 1.45/100
    let medicare = grossPay * taxRate
    return medicare
   
}
console.log('Medicare is: '+getMedicareTax(800))

function getFederalTax(grossPay,withHoldingCode){
    let federalTaxWithHolding 
    if(withHoldingCode === 0){
        let taxRate = 23/100
        federalTaxWithHolding = grossPay*taxRate
        console.log(`This persons: gross pay of $${grossPay} and a withholding code of ${withHoldingCode} =`)

    }else if(withHoldingCode === 1){
        let taxRate = 21/100
         federalTaxWithHolding = grossPay*taxRate
         console.log(`This persons: gross pay of $${grossPay} and a withholding code of ${withHoldingCode} =`)

    }else if(withHoldingCode ===2){
        let taxRate = 19.5/100
         federalTaxWithHolding = grossPay*taxRate
         console.log(`This persons: gross pay of $${grossPay} and a withholding code of ${withHoldingCode} =`)

    }else if(withHoldingCode ===3){
        let taxRate = 18.5/100
         federalTaxWithHolding = grossPay*taxRate
         console.log(`This persons: gross pay of $${grossPay} and a withholding code of ${withHoldingCode} =`)
        }else if(withHoldingCode ===4){
         let taxRate = 18/100
          federalTaxWithHolding = grossPay*taxRate
          console.log(`This persons: gross pay of $${grossPay} and a withholding code of ${withHoldingCode} =`)

         
         
         }else{
            
                let codeAboveFour = withHoldingCode - 4
                let taxByCode = .18-(codeAboveFour*.005)
                let taxRate = taxByCode
                federalTaxWithHolding = grossPay*taxRate
                console.log(`This persons: gross pay of $${grossPay} and a withholding code of ${withHoldingCode} =`)
               
         }
         return federalTaxWithHolding.toFixed(2)
    }
   
    

console.log(getFederalTax(750,0))

console.log(getFederalTax(1550,2))
console.log(getFederalTax(1100,6))