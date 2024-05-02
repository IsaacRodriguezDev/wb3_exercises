'use strict'
window.onload = function(){
    let theButton = document.querySelector('#theButton')
theButton.addEventListener('click', displayTime)

}

function displayTime(){
    console.log('timeClicked')
    let theDate = document.querySelector('#theDate')
    let theParagraph = document.querySelector('#theParagraph')
    console.log(theDate.value)
    let generatedDate = new Date(theDate.value)
    theParagraph.innerHTML = generatedDate.toLocaleString()
}