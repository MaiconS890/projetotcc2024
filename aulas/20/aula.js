
const url = 'https://jsonplaceholder.typicode.com/posts'
fetch(url, {
    method: 'POST', // Define o método como POST
    headers: {
        'Content-Type': 'application/json' // Define o tipo de conteúdo como JSON
    },
    body: JSON.stringify({
        title: 'Cadeirada ao vivo',
        body: 'Candidato leva cadeirada no debate ao vivo',
        userId: 1
    }) // Dados a serem enviados no corpo da requisição
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erro:', error));

