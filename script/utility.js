// hideElement
function hideElementById(elementId){
 let element = document.getElementById(elementId) ;
 element.classList.add('hidden')
}
// setElement
function setElementById(elementId){
 let element = document.getElementById(elementId) ;
 element.classList.remove('hidden')
}