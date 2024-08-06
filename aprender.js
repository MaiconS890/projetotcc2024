// Gerar um número aleatório entre 1 e 100
let numeroSecreto = Math.floor(Math.random() * 100000) + 1;
let tentativas = 0;
const maxTentativas = 30;

function adivinhar() {
    let palpite = parseInt(document.getElementById("guess").value);
    let feedback = document.getElementById("feedback");

    if (isNaN(palpite) || palpite < 1 || palpite > 100000) {
        feedback.innerHTML = "Por favor, digite um número válido entre 1 e 100000.";
        return;
    }

    tentativas++;

    if (palpite < numeroSecreto) {
        feedback.innerHTML = `O número é maior. Tentativa ${tentativas} de ${maxTentativas}`;
    } else if (palpite > numeroSecreto) {
        feedback.innerHTML = `O número é menor. Tentativa ${tentativas} de ${maxTentativas}`;
    } else {
        feedback.innerHTML = `Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativa(s).`;
        document.getElementById("guess").disabled = true;
        document.getElementsByTagName("button")[0].disabled = true;
    }

    if (tentativas === maxTentativas && palpite !== numeroSecreto) {
        feedback.innerHTML = `Suas ${maxTentativas} tentativas acabaram. O número secreto era ${numeroSecreto}.`;
        document.getElementById("guess").disabled = true;
        document.getElementsByTagName("button")[0].disabled = true;
    }
}







