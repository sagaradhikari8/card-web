const cardHolderShow=document.querySelector(".card-holder")
const cardNumberShow=document.querySelector(".card-number")
const monthShow=document.querySelector(".month")
const yearShow=document.querySelector(".year")
const cvcShow=document.querySelector(".cvc")

const cardHolderInput=document.querySelector("input#name")
const cardNumberInput=document.querySelector("input#number")
const monthInput=document.querySelector("input#month")
const yearInput=document.querySelector("input#year")
const cvcInput=document.querySelector("input#cvc")

const nameError=document.querySelector(".error-name")
const numberError=document.querySelector(".error-number")
const expiryError=document.querySelector(".error-expiry")
const cvcError=document.querySelector(".error-cvc")



const form=document.querySelector(".form")

function clearErrors(){
    const errorsShow=document.querySelectorAll("[class^=error]")
    errorsShow.forEach((error)=>{
        error.innerText=""
    })
    const inputs=document.querySelectorAll("input")
    inputs.forEach((input)=>{
        input.classList.remove("input-error")
    } )
}

const handleSubmit = (e) => {
    e.preventDefault()
    if(cardHolderInput.value ===""){
        nameError.innerText="Please enter your name"
        cardHolderInput.classList.add("input-error")
    }
    if(cardNumberInput.value ===""){
        numberError.innerText="Please enter your card number"
        cardNumberInput.classList.add("input-error")
    }
    if (monthInput.value===""||yearInput.value===""){
        expiryError.innerText="Please enter your card expiry date"
        monthInput.value===""
        ?monthInput.classList.add("input-error")
        :yearInput.classList.add("input-error")

    }
    if(cvcInput.value ===""){
        cvcError.innerText="Please enter your cvc"
        cvcInput.classList.add("input-error")
    }
}

form.addEventListener("submit",handleSubmit)

cardHolderInput.addEventListener("keyup",(e)=>{
    cardHolderShow.innerText=e.target.value
})
cardNumberInput.addEventListener("keyup",(e)=>{
    cardNumberShow.innerText=e.target.value
})
yearInput.addEventListener("keyup",(e)=>{
    yearShow.innerText=e.target.value
})
monthInput.addEventListener("keyup",(e)=>{
    monthShow.innerText=e.target.value
})
cvcInput.addEventListener("keyup",(e)=>{
    cvcShow.innerText=e.target.value
})
