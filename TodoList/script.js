const input=document.querySelector("#input");
const addBtn=document.querySelector("#addBtn");
const todoContainer=document.querySelector(".todo-main")
const data=[]
addBtn.addEventListener("click",()=>{
    let value=input.value
    if (!value) {
        alert("Don't empty")
    } else {
        data.push(value)
        input.value=''
        const end=data.map((item,index,list)=>{
            return `
             <div class="todos">
                           <p>${item}</p>
                         <div class="icons">
                            <span><i class="fa-solid fa-circle-xmark"></i></span>
                            <span><i class="fa-solid fa-pen-to-square"></i></span>
                         </div>
                        </div>
            `
        }).join('') 
       
todoContainer.innerHTML=end

    }
    
    // console.log(value)
 

})