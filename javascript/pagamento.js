// Configure a chave pública do Stripe
const stripe = Stripe('SUA_CHAVE_PUBLICA_DO_STRIPE');

async function purchase(productId, debit = false) {
    let amount;
    if (productId === 'prod_1') {
        amount = 1000; // $10 em centavos
    } else if (productId === 'prod_2') {
        amount = 1500; // $15 em centavos
    } else {
        return;
    }

    const paymentMethodType = debit ? 'card' : 'card';
    
    // Crie um token de pagamento com o Stripe
    const {token} = await stripe.createToken(paymentMethodType);

    // Envie o token de pagamento para o seu servidor para processar a transação
    const response = await fetch('/process_payment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            token: token.id,
            amount: amount,
            currency: 'BRL'
        })
    });

    const result = await response.json();
    if (result.success) {
        alert('Pagamento realizado com sucesso!');
    } else {
        alert('Ocorreu um erro ao processar o pagamento.');
    }
}
