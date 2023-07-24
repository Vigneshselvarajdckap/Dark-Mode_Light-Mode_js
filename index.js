const btn = document.querySelector("button")

const body = document.querySelector("body")

const h1 = document.querySelector("h1")

const heading = document.querySelectorAll(".h3")
// console.log(h3);



btn.addEventListener("click",()=>{

    btn.classList.toggle("bt")
    body.classList.toggle("dark")
    h1.classList.toggle("white")
    for(let i = 0 ; i <heading.length; i++){
        heading[i].classList.toggle("rose")
    }
})