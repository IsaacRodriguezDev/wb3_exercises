'use strict'
// mainling function
function displayMailingLabel(name,address,city,state,zip){
console.log(name)
console.log(address)
console.log(`${city}, ${state}, ${zip}`)
}
// adding numbers function
function addNumbers(num1,num2){
    
let totalNum = num1 + num2
console.log(`${num1}+${num2}=${totalNum}`)
}
// receipt function
function displayReceipt(totalDue, amountPaid){
    
   let changeDue = totalDue - amountPaid

    if(changeDue ===0){
        console.log('Paid in full:')
        console.log(`Total Due: $${totalDue}`)
        console.log(`Amount Paid: $${amountPaid}`)
       console.log(`Change: $${changeDue}`)
    }else if(changeDue < 0){
       
        console.log('Over paid:')
        changeDue = amountPaid - totalDue
        console.log(`Total Due: $${totalDue}`)
        console.log(`Amount Paid: $${amountPaid}`)
       console.log(`Change: $${changeDue}`)
    }else{
        console.log('You did not pay enough:')
        console.log(`Total Due: $${totalDue}`)
        console.log(`Amount Paid: $${amountPaid}`)
       console.log(`Amount Owe: $${changeDue}`)
    }
  
}
// mainling function
displayMailingLabel('Jet','1234 Fake str', 'dallas','Tx','53534')
console.log('')
displayMailingLabel('Bill','1343 Jhons str', 'Freeport','Fl','12345')
console.log('')

// adding numbers function
addNumbers(1,5)
console.log('')
addNumbers(6,20)

// receipt function
console.log('')
displayReceipt(200, 300)
console.log('')
displayReceipt(200,200)
console.log('')
displayReceipt(200, 5)