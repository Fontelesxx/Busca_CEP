//Função Principal

function buscarCep(event){
    event.preventDefault() //Impede que o formulário recarregue a página

    let cep = document.getElementById("cep").value

    document.getElementById("resultado").innerHTML = "<p>Buscando <strong>CEP</strong>...</p>"

    fetch("https://viacep.com.br/ws/" + cep + "/json/") // Fetch faz uma requisição na API do viacep

    .then(resposta => resposta.json())

    .then(dados => {
        if(dados.error){
            document.getElementById("resultado").innerHTML = "<p>CEP não encontrado</p>"
            return;
        }
        
        document.getElementById("resultado").innerHTML = `
        Rua: ${dados.logradouro} <br>
        Bairro: ${dados.bairro} <br>
        Localidade: ${dados.localidade} <br>
        Estado: ${dados.estado}`
    })

    .catch(() =>{
        document.getElementById("resultado").innerHTML = "Erro ao buscar o CEP"
    }) 
}