const formWrapper=document.querySelector(".form-wrapper")
const searchBtn=document.querySelector('#searchBtn')
const cleanBtn=document.querySelector('#cleanBtn')
const searchInput=document.querySelector("#searchInput")
const imageListWrapper=document.querySelector("#imageList-wrapper")
const form=document.querySelector("#form")

runEventlisteners()

function runEventlisteners(){
form.addEventListener("submit", search)
}

function search(e){
    const value =searchInput.value.trim()
    console.log(value)
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method:'GET',
        headers: {Authorization: "Client-ID IRmlW0YGZsifj3xCR51tP_oUfZuUvFvW01zAsccczeg"

        }
    })
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        const img_Data=data.results.forEach(item => {
            let image=item.urls.small
            addImageUI(image)
        });
       
    })
  
    e.preventDefault()

}

cleanBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    imageListWrapper.innerHTML=''
    // imageListWrapper.remove()
})

function addImageUI(image) {
   console.log(image) 
   const box=document.createElement('div')

   const img=document.createElement('img')
   img.setAttribute('src',image)
   img.classList.add('img')
  box.appendChild(img)
  imageListWrapper.appendChild(box)
  searchInput.value=''
}