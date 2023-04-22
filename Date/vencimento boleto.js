const dataAtual = new Date('2020-01-11');
const dataFechamento = new Date('2020-01-10');

const tempoAtual = dataAtual.valueOf;
const tempoFechamento = dataFechamento.valueOf;

const diferencaTime = tempoAtual - tempoFechamento;

const milissegundosDia = 1000 * 60 * 60 * 24;

if (diferencaTime >= milissegundosDia) {
    console.log( "Sua fatura já foi fechada!!!" );
} else {
    console.log( "Ainda não fechamos a fatura do seu cartão" );
}