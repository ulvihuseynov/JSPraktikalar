
    async function getApiData(value) {
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=2c88a082&s=${value}`);
            const data = await response.json();
            console.log(data); // JSON məlumatları konsolda göstərilir

            const result=data.Search.map(item=>{
                return `
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 my-3 ">
                     <div class="card" >
                      <img src="${item.Poster}" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${item.Title}</h5>
                        <h6 class="card-subtitle ">${item.Year}</h6>
                        <p class="card-text">${item.Type}</p>
                      
                      </div>
                    </div> 
                </div>
                `
            }).join(" ")
            document.querySelector(".card-box").innerHTML=result
        } catch (error) {
            console.error('Xəta baş verdi:', error);
        }
    }

    // Düymə tıkladıqda `input` dəyərini alırıq
    document.querySelector("#searchBtn").addEventListener("click", () => {
        const input = document.querySelector("#input").value; // input dəyərini düymə tıkladıqda alırıq
        getApiData(input); // `getApiData` funksiyasına göndəririk
    });

