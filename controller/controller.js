const { pessoas } = require('../database/database');

function listar(){
    console.log(pessoas)
}

function cadastrar(id,nome,telefone,email){
    const novoUsuario = {id,nome,telefone,email}
    pessoas.push(novoUsuario)
}

function editar(id,novoNome,novoTelefone,novoEmail){
    const pessoa = pessoas.find(elemento => elemento.id === id)
    if (pessoa){
        pessoa.nome = novoNome||pessoa.nome;
        pessoa.telefone = novoTelefone||pessoa.telefone;
        pessoa.email = novoEmail||pessoa.email;
    }else{
        console.log("Usuário não encontrado!")
    }
}

// function deletarTodos(){
//     pessoas = []
// }
// function deletarPorID(id){
//     const
// }

cadastrar(1,"Fulano da Silva","(84)99999-9999","fulano@gmail.com")
cadastrar(2,"Beltrano da Silva","(84)99999-9999","beltrano@gmail.com")
editar(1,"Fulano 5", "(84)99999-8888", "fulano5@gmail.com")
// deletarPorID()
listar()