// Dados de perguntas e respostas
const perguntasRespostas = {
    "qual é a sua função?": "Eu sou um sistema de ajuda para responder às suas perguntas.",
    "como eu posso te usar?": "Digite qualquer pergunta na caixa de texto acima e eu farei o meu melhor para responder!",
    "o que é inteligência artificial?": "Inteligência Artificial (IA) se refere à capacidade das máquinas de realizar tarefas que normalmente exigiriam inteligência humana.",
    "como você está hoje?": "Como um programa de computador, não tenho sentimentos, mas estou aqui para ajudar!",
    "quem te criou?": "Fui criado por programadores da OpenAI usando a tecnologia de linguagem natural.",
    "qual é a resposta para a vida, o universo e tudo mais?": "42, de acordo com o livro 'O Guia do Mochileiro das Galáxias' de Douglas Adams.",
    "adeus": "Até logo! Se precisar de mais alguma coisa, estarei aqui."
};

// Função para processar a pergunta e exibir a resposta
function processarPergunta() {
    const inputPergunta = document.getElementById("inputPergunta").value.trim().toLowerCase();
    const resultadoDiv = document.getElementById("resultado");

    if (inputPergunta === "") {
        resultadoDiv.innerHTML = "Por favor, digite uma pergunta.";
        return;
    }

    let resposta = perguntasRespostas[inputPergunta];
    
    if (resposta) {
        resultadoDiv.innerHTML = `<strong>Sua pergunta:</strong> ${inputPergunta}<br><strong>Resposta:</strong> ${resposta}`;
    } else {
        resultadoDiv.innerHTML = `Desculpe, não entendi sua pergunta. Poderia tentar reformular?`;
    }
}
