document.getElementById('recovery-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;

    fetch('/request-password-reset', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    })
    .then(response => response.json())
    .then(data => {
        if(data.success) {
            alert('Um link de recuperação foi enviado para seu e-mail.');
        } else {
            alert('Erro ao enviar link de recuperação.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});
