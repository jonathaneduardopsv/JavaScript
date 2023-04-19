const dataAtual = new Date();
const dataPostagem = new Date('2023-04-11T00:00');

// Pegando o timestamp das datas
const timeAtual = dataAtual.getTime();
const timePostagem = dataPostagem.getTime();

// Verifica a diferença em milissegundos
const diferenca = timeAtual - timePostagem;

// Convertendo em horas
const segundos = diferenca / 1000;
const minutos = segundos / 60;
const horas = minutos / 60;
const dia = horas / 24

// Exibindo a diferença
console.log(`${dia} o ano atual é ${dataPostagem.getFullYear()}`);