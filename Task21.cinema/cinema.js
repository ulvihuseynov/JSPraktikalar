const container=document.querySelector(".container")
const count=document.querySelector("#count");
const amount=document.querySelector("#amount");
const select=document.querySelector('#movie')
const seats=document.querySelectorAll('.seat:not(.reserved)')
getFromLocalStorage()
calculateTotal()

container.addEventListener("click",e=>{
    
    if (e.target.classList.contains('seat')&& !e.target.classList.contains('reserved')) {
       e.target.classList.toggle('selected')
       calculateTotal()
   
    }
})

select.addEventListener('change',e=>{
    calculateTotal()
})

function calculateTotal() {
    const selectedSeats=container.querySelectorAll('.seat.selected')
    let selectedSeatCount=selectedSeats.length
  const selectedSeatsArray=[...selectedSeats]
  const seatsArray=[... seats]


  let selectedSeatIndexs=selectedSeatsArray.map(seat=>{
    return seatsArray.indexOf(seat)
  })

    let price=select.value

    count.textContent=selectedSeatCount
    amount.textContent=selectedSeatCount*price 
    savedDataStorage(selectedSeatIndexs)
}

function getFromLocalStorage() {
 const selectedSeats=   JSON.parse(localStorage.getItem('selectedSeats'))

 if (selectedSeats!=null &&selectedSeats.length>0) {
   seats.forEach((seat,index)=>{
  if (selectedSeats.indexOf(index)>0) {
    seat.classList.add('selected') 
  }
   })
 }
 const selectedMovieIndexs=JSON.parse(localStorage.getItem('selectedMovieIndexs'))
 if (selectedMovieIndexs!=null) {
    select.selectedIndex=selectedMovieIndexs
 }
}

function savedDataStorage(indexs) {
    localStorage.setItem('selectedSeats',JSON.stringify(indexs))
    localStorage.setItem('selectedMovieIndexs',select.selectedIndex)
}