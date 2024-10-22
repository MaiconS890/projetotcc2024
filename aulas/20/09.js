//POST

async function post () {

    const url = ""
    
    const newData = {
    
    nome: 'Amanda',
    
    idade: 14
    
    }
    
    const response = await fetch(url, {
    
    method: 'POST',
    
    headers: {
    
    'Content-Ttype': 'application/json'
    
    },
    
    body: JSON.stringify(newData)
    
    })
    
    }