const button = document.getElementById('interativo-btn');
const message = document.getElementById('message');

button.addEventListener('click', function() {
    // Mudar a cor do botão
    const colors = ['#e74c3c', '#f39c12', '#2ecc71', '#9b59b6', '#34495e'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    button.style.backgroundColor = randomColor;

    // Efeito de rotação
    button.style.transform = 'rotate(0deg)';
    setTimeout(function() {
        button.style.transform = 'rotate(360deg)';
    }, 100);

    // Efeito de escala
    button.style.transform = 'scale(1)';
    setTimeout(function() {
        button.style.transform = 'scale(1.2)';
    }, 200);

    // Efeito de sombra
    button.style.boxShadow = '0 0 0 rgba(0, 0, 0, 0.1)';
    setTimeout(function() {
        button.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
    }, 300);

    // Exibir mensagem animada
    message.classList.remove('hidden');
    message.classList.add('show');

    // Esconder mensagem após 2 segundos
    setTimeout(function() {
        message.classList.remove('show');
        message.classList.add('hidden');
    }, 2000);
});
