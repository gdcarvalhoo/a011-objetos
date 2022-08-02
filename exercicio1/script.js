// # Exercício 1

// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:


// a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```
const sacolao = [{
    nome: 'tomate',
    preco: 5,
    disponibilidade: true
},
{
    nome: 'cebola',
    preco: 7,
    disponibilidade: true
},
{
    nome: 'repolho',
    preco: 12,
    disponibilidade: true
}]
// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**
sacolao.push({Nome:'alface',preco:5, disponibilidade:false})

// c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**

console.log(sacolao)