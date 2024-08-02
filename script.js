
const searchBtn=document.querySelector("#SearchBtn")
const searchInput=document.querySelector("#searchInput")
searchBtn.addEventListener("click",()=>{
const value=searchInput.value

fetch(`https://www.omdbapi.com/?apikey=2c88a082&s=${value}`)
.then(endPoint=>endPoint.json())
.then(data=>{console.log(data)
    const cards=data.Search.map(item=>(`
        <div class="card" style="width:18rem;">
       <a href="card.html?imdbID=${item.imdbID}" class="card-link">
      <img src="${item.Poster}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item.Title}</h5>
        <h6 class="card-subtitle mb-2 text-muted ">${item.Year}</h6>
       
      </div>
      </a>
    </div>`

    )).join("")
    const section=document.querySelector("#section").innerHTML=cards
}

)

})
