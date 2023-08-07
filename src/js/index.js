const btnEmail = document.getElementById('btn')

btnEmail.addEventListener("click", function(){
    const email = document.getElementById('email')
    const spanError = document.getElementById('span-error')
    const errorImg = document.getElementById("error-img")
    if(email.value.includes("@")){
        email.classList.remove("error")
        spanError.classList.add("hide")
        errorImg.classList.add("hide")
    }else{
        email.classList.add("error")
        spanError.classList.remove("hide")
        errorImg.classList.remove("hide")
    }
})