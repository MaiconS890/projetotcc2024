
let contador = 6
const h1 = document.querySelector("#h1")
const btn = document.querySelector("#btn-iniciar")

function tempo (){
    setInterval(() => {
        contador--;
        h1.innerHTML = `Tempo: ${contador}`
        clearInterval(contador == 0)
    }, 1000)
    setTimeout(function(){
        h1.innerHTML = `Tempo Esgotado`
    }, 7000)
   
}    
    

