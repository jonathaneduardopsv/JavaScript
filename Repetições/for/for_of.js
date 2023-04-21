const convidados = [
    { nome: 'José', cerveja: false},
    { nome: 'Augusto', cerveja: true},
    { nome: 'Tomas', cerveja: true},
    { nome: 'Joana', cerveja: false},
    { nome: 'Aline', cerveja: false},
];
//variavel recebe os valores de array
let totalDeConvidados = convidados.length;
let bebemRefrigerante = 0;
let bebemCerveja = 0;

//convidado recebe a variavel convidados, fazendo possível somente o nome da propria variavel com o nome da propriedade ex: convidado.cerveja ou convidado.nome
for ( const convidado of convidados) {
    if (convidado.cerveja) {
    bebemCerveja++;
    } else {
    bebemRefrigerante++;
    } 
}

console.log('Total de convidados: ' + totalDeConvidados);
console.log('Bebem cerveja: ' + bebemCerveja);
console.log('Bebem refrigerante: ' + bebemRefrigerante);