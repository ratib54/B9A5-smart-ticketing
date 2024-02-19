// call //

document.getElementById('call').addEventListener('click', function(){
  document.getElementById('ticket').scrollIntoView();
})




// coupon part //

document.getElementById('delete-text').addEventListener('keyup', function(event){
 const text = event.target.value ;
 const deleteButton = document.getElementById('apply-button') ;


 if(text === 'NEW15' || text === 'Couple 20'){
   deleteButton.removeAttribute('disabled'); 
 }
 else{
  deleteButton.setAttribute('disabled',true) ;
 }
})
document.getElementById('apply-button').addEventListener('click', function(){
  const deleteDiv = document.getElementById('delete-div')
  deleteDiv.classList.add('hidden')
})

// seats //
const tableRows = document.querySelectorAll('#dataTable tbody tr');
let currentIndex = 0;
let countTime = 0 ;
document.getElementById('button-container').addEventListener('click', function(event){ 
if (event.target.classList.contains('a') && countTime < 4) {
  event.target.style.backgroundColor = '#1DD100';
  event.target.classList.add('text-[#FFF]') ;
  countTime++;
    // increase seat number //

    let currentSeatElement = document.getElementById('seat-increase') ;
    let currentSeatText  = currentSeatElement.innerText ;
    let currentSeat = parseInt(currentSeatText);
    let newSeat = currentSeat + 1 ;
    currentSeatElement.innerText = newSeat ;

    // number of seat left

    let leftSeatElement = document.getElementById('seat-left') ;
    let currentSeatLeft  =  leftSeatElement.innerText ;
    let leftSeat = parseInt(currentSeatLeft);
    let newAvailableSeat = leftSeat - 1 ;
    leftSeatElement.innerText = newAvailableSeat ;

    // add //
    if (currentIndex < tableRows.length) {
      tableRows[currentIndex].classList.remove('hidden');
      currentIndex++;
    } else {
      currentIndex = 0;
      // Hide all rows again for next iteration
      for (let i = 0; i < tableRows.length; i++) {
        tableRows[i].classList.add('hidden');
      }
    }
  

    // price //

    let priceElement = document.getElementById('price') ;
    let currentPrice = priceElement.innerText ;
    let price = parseInt(currentPrice) ;
    let newPrice = price + 550 ;
    priceElement.innerText = newPrice ;

    // total price //

    let totalPriceElement = document.getElementById('total-price') ;
    let currentTotalPrice = totalPriceElement.innerText ;
    let totalPrice = parseInt(currentTotalPrice) ;
    let newTotalPrice = totalPrice + 550 ;
    totalPriceElement.innerText = newTotalPrice ;
 }
else{
  alert('You can only select four tickets & You have to click the seat button')
}
});

// popup button //
function toggle(){
  hideElementById('header')
  hideElementById('banner')
  hideElementById('ticket')
  hideElementById('footer')
  setElementById('popup')
}





