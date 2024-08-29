
const nome = prompt("digite seu nome")
const senha = prompt("digite uma senha:") 

localStorage.setItem("001", "Maco")
localStorage.setItem("002", "Soares")
localStorage.setItem("003", "Souza")

console.log(localStorage.getItem("Senha"))

let nomes = ["luiz","maria", "ana","roger"]
const nomeDigite = prompt("digito um nome:")
nomes.push(nomeDigite)

for(i = 0; i < nomes.length; i++){2
    console.log(nomes[i])
}










































