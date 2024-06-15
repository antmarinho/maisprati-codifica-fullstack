let promessa = new Promise((resolve,reject) => {

    setTimeout(() => {
        let resposta = {}
        if(false) {
            resposta = {
                codigo: 404,
                erro: 'ob n encontrado'
            }

            reject(resposta)
        }

        resposta = {
            1: {id: 1, nome: 'caio'},
            2: {id: 1, nome: 'jose'},
            3: {id: 1, nome: 'joao'},
        }

        resolve(resposta)
    },1000)
    
}).then(() => {
    let promessa2 = new Promise((resolve,reject) => {
        setTimeout(() => {
            let resposta = {}
            if(false) {
                resposta = {
                    codigo: 1000,
                    erro: 'ob null'
                }
    
                reject(resposta)
            }
    
            resposta = {
                1: {id: 1, nome: 'caio'},
                2: {id: 1, nome: 'jose'},
                3: {id: 1, nome: 'joao'},
            }
    
            resolve(resposta)
        },1000)
    }).then((dados) => {
        console.log(dados)
    }).catch(erro => {
        console.log(erro)
    })
}).then(() => {
    console.log('then 2')
    return 'then 3'
}).then(param => {
    console.log(param)
}).catch((erro => {
    console.log('paramentro de erro enviado reject')
}))

console.log(promessa)