class Produto{
    #preco
    constructor(barCode,nome,desc,preco){
        this.barCode = barCode
        this.nome = nome
        this.desc = desc
        this.#preco = preco
    }
 
    mostrar(){
        console.log(`Descrição do produto:\nº Código de barra = ${this.barCode} \nº Nome do Produto = ${this.nome}\nº Descrição do produto = ${this.desc}\nº Preço do Produto = ${this.getPreco}`)
    }
    
    get getPreco(){
        return this.#preco;
    }
}
const produto1 = new Produto("00000001","Batata","Batata da boa por kg","8,00")

produto1.mostrar()
console.log(`Preço: ${produto1.getPreco}`)

module.exports = {Produto}