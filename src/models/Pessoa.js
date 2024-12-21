const { pessoas } = require("../../database/database");
const {Produto} = require("./Produtos")

class Pessoa {
    #email
    constructor(id,nome,telefone,email,produto){
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.#email = email;
        this.produto = produto
    }
    falar(){
        console.log(`A pessoa ${this.#email} está falando`)
    }
    estudar(){
        console.log(`A pessoa ${this.nome} está estudando`)
    
    }
    get getEmail(){
        return this.#email;
    }
    mostrarPessoa(){
        console.log(
            `\n
            Id: ${this.id}\n
            Nome: ${this.nome}\n
            Telefone: ${this.telefone}\n
            Email: ${this.getEmail}\n
            Produto: ${this.produto}\n
            `
        )
    }
}

const pessoa1 = new Pessoa(1,"Fulano 1","(84) 99999-9999","fulano1@gmail.com")
const pessoa2 = new Pessoa(2,"Fulano 2","(84) 98888-8888","fulano2@gmail.com")
const batata = new Produto("001", "Batata", "Batata grauda","30,00")
const rafael = new Pessoa(3,"Rafael", "(84)97777-7777", "rafael@gmail.com", batata.nome)

pessoa1.falar();
pessoa2.estudar();
console.log(pessoa1.getEmail)

rafael.mostrarPessoa()