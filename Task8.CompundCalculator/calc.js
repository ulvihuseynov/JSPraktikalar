const submitBtn=document.querySelector("#submitBtn")
function calculate(){
    const principalInput=document.querySelector("#principal")
    const rateInput=document.querySelector("#rate")
    const yearsInput=document.querySelector("#years")
    const totalAmount=document.querySelector("#total-amount")


    let principal=Number(principalInput.value)
    let rate=Number(rateInput.value/100)
    let years=Number(yearsInput.value)


    if (principal<0 ||isNaN(principal)) {
        principal=0

        principalInput.value=0
    }

    
    if (rate<0 || isNaN(rate)) {
        rate=0
        rateInput.value=0
    }

    
    if (years<0 || isNaN(years)) {
        years=0

        yearsInput.value=0
    }
    const result=principal*Math.pow((1+rate/1),1*years)
    totalAmount.textContent=result.toLocaleString("az-AZ",{
        style:'currency',currency:"AZN"
    })
}
submitBtn.addEventListener("click",calculate)