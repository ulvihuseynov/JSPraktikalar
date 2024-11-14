// const btns=document.querySelectorAll(".btns")

// btns.forEach((btn,index)=>{
//     // document.querySelector('.active').classList.remove('active')
//     btn.addEventListener("click",(e)=>{
//         document.querySelector('.active').classList.remove('active')
//       console.log(  e.target.classList.add('active'))
    
//     })
// })

// async function getProduct() {
// const api_Url='https://fakestoreapi.com/products'
// const data=(await fetch(api_Url)).json()
// const end= await data;
// console.log(end)
// const div=document.createElement('div')
// div.classList.add('card-boxes')
// end.forEach(item=>{
   
//     div.innerHTML+=`<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 p-3 cards"   >
//     <div data-name='value' class="card-box">
//         <div class="card-header">
//             <img src=${item.image} alt="">
//         </div>
//         <div class="content">
//             <h2 class="heading">${item.title}</h2>
//             <p class="desc">${item.description}</p>
//         </div>
//         <div class="card-action">
//             <button class='details-btn'>Details</button>
//         </div>
//     </div>
// </div>`

// })
// document.querySelector('.card-container').appendChild(div)
// }
// getProduct()

const btns = document.querySelectorAll(".btns");

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // Əvvəlki aktiv sinfi sil
        document.querySelector('.active').classList.remove('active');
        // Yeni seçilən düyməyə 'active' sinfini əlavə et
        e.target.classList.add('active');

        // Seçilmiş kateqoriya
        const selectedCategory = e.target.getAttribute('data-name');
        filterProducts(selectedCategory);
    });
});

async function getProduct() {
    const api_Url = 'https://fakestoreapi.com/products';
    const data = (await fetch(api_Url)).json();
    const end = await data;

    // Məhsul siyahısını qlobal dəyişənə təyin et
    window.products = end;
    displayProducts(end);
}

// Məhsulları göstərmək üçün funksiya
function displayProducts(products) {
    const cardContainer = document.querySelector('.card-container');
    cardContainer.innerHTML = ''; // Əvvəlki məhsulları sil

    const div = document.createElement('div');
    div.classList.add('card-boxes');

    products.forEach(item => {
        div.innerHTML += `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 p-3 cards">
            <div data-name='${item.category}' class="card-box">
                <div class="card-header">
                    <img src=${item.image} alt="">
                </div>
                <div class="content">
                    <h2 class="heading">${item.title}</h2>
                    <p class="desc">${item.description}</p>
                </div>
                <div class="card-action">
                    <button class='details-btn'>Details</button>
                </div>
            </div>
        </div>`;
    });

    cardContainer.appendChild(div);
}

// Filtrləmə funksiyası
function filterProducts(category) {
    const filteredProducts = category === 'all' 
        ? window.products // Hamısını göstər
        : window.products.filter(item => item.category === category);

    displayProducts(filteredProducts);
}

// Məhsulları çağır
getProduct();

