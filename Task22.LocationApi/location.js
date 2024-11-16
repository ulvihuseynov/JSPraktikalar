// let latitude,longitude = ""
// console.log(latitude,longitude)

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess,onError)
}else{
    alert('Mekani almaq olmur')
}

function onSuccess(position) {
  let latitude=position.coords.latitude
 let longitude=position.coords.longitude
 console.log(latitude)
 console.log(longitude)
    const api_Key='37528f88659e42f7ac6093463a143056'
const url=`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${api_Key}`

fetch(url)
.then(response=>response.json())
.then(data=>{
    let details=data.results[0].components
console.log(details)
    let {country,postcode,city}=details
    console.log(city)
    document.querySelector("#results").innerHTML=`
   <p>Olke:${country}</p>
   <p>Post kodu:${postcode}</p>
   <p>Bolge:${city}</p>

    `

})
}
onSuccess()
function onError(error) {
    // console.log(error.code)
    if (error.code==1) {
        alert('Izin redd edildi')
    }else if(error.code==2){
        alert('Mekan elde edile bilmedi')

    }else{
        alert('Xeta bas verdi')
    }
}

// const name=document.querySelector('h1').innerText;
// const Pstatus=document.querySelector('.status')

// navigator.clipboard.writeText(name)
// .then(()=>{
//     Pstatus.textContent='Metn kopyalandi'
//     console.log(name)
// })
// .catch((error)=>{
//     console.log("Xeta bas verdi:",error)
// }
// )


// if (navigator.onLine) {
//     console.log('online')
// } else {
//     console.log('isNotOnline')
// }

// if (navigator.cookieEnabled) {
//     console.log("Kukilər aktivdir.");
// } else {
//     console.log("Kukilər deaktivdir.");
// }
// console.log(navigator.language)
// console.log(navigator.platform)
// console.log(navigator.permissions)

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();