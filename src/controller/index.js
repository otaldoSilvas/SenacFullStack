const { pessoas } = require('../../database/database');

// pessoas.findIndex()

// async ()=>{
//     console.log("Olá mundo")
// }

// const soma = (x,y) => {
//     console.log(x+y)
// }

pessoa = pessoas.find(elemento => elemento.id === 1)

if(pessoa){
    pessoa.nome = "Fulano 5"
}else{
    console.log("Pessoa não encontrada")
}
console.log(pessoas)

