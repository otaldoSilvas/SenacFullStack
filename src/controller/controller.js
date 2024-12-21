const { pessoas } = require('../../database/database');

function listar() {
    try {
        if (pessoas.length <= 0) {
            console.log("Nenhum Usuario cadastrado")

        } else {
            console.log("Usuarios:")

            console.table(pessoas)
        }

    } catch (error) {
        console.error("Erro ao listar os usuarios", error.message)
    }
}

function cadastrar(id, nome, telefone, email) {
    try {

        const novoUsuario = { id, nome, telefone, email }
        pessoas.push(novoUsuario)
        console.log("Usuario cadastrado com sucesso!")
    } catch (error) {
        console.error("Erro ao cadastrar os usuarios", error.message)
    }

}

function editar(id, novoNome, novoTelefone, novoEmail) {
    try {
        const pessoa = pessoas.find(elemento => elemento.id === id)
        if (pessoa) {
            pessoa.nome = novoNome || pessoa.nome;
            pessoa.telefone = novoTelefone || pessoa.telefone;
            pessoa.email = novoEmail || pessoa.email;
            console.log("Usuario atualizadocom sucesso!")

        } else {
            console.log("Usuário não encontrado!")
        }
    } catch (error) {
        console.error("Erro ao editar os usuarios", error.message)
    }
}

function deletarTodos() {
    try {
        pessoas.length = 0
    } catch (error) {
        console.error("Erro ao deletar todos os usuarios", error.message)
    }
}

function deletarPorID(id) {
    try {
        const usuario = pessoas.findIndex(elemento => elemento.id === id)
        if (usuario === -1) {
            console.log("Usuario não encontrado")
        } else {
            pessoas.splice(usuario, 1)
            console.log("Usuario deletado com sucesso")

        }
    } catch (error) {
        console.error("Erro ao deletar o usuario", error.message)
    }
}

cadastrar(1, "Fulano da Silva", "(84)99999-9999", "fulano@gmail.com")
cadastrar(2, "Beltrano da Silva", "(84)99999-9999", "beltrano@gmail.com")
editar(1, "Fulano 5", "(84)99999-8888", "fulano5@gmail.com")
listar()
deletarPorID(1)
listar()
deletarTodos()
listar()