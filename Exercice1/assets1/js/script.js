

let Contactez = document.getElementsByClassName("ce11")[0]
console.log(Contactez) 

function replier(){
    let np = document.getElementsByClassName("ce12")[0]
    console.log(np)
    np.innerText = ""


    let ae = document.getElementsByClassName("ce13")[0]
    console.log(ae)
    ae.innerText = ""


    let dp = document.getElementsByClassName("ce14")[0]
    console.log(dp)
    dp.innerText = ""

    
}

Contactez.addEventListener('click', replier)
