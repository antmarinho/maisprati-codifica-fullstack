export function getEndereco(cep) {

    return fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => response.json())

}

