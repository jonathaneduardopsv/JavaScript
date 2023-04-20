const dataUltimoAcesso = new Date('2020/12/31 23:59:59');
const dataAtual = new Date();

const hora = dataAtual.getHours();

const timeUltimoAcesso = dataUltimoAcesso.getTime();
const timeAtual = dataAtual.getTime();

const diferencaTime = timeAtual - timeUltimoAcesso;

const milissegundosHora = 1000 * 60 * 60;
const milissegundosDia = milissegundosHora * 24;
const milissegundosMeses = milissegundosDia * 30
const milissegundosAnos = milissegundosMeses * 12

let msg = "";

if ( hora >= 0 && hora < 6 ) {
    msg = 'Boa madrugada\n';
} else if (hora >= 6  && hora < 12 ) {
    msg = 'Bom dia\n';
} else if (hora >= 12 && hora <= 18){
    msg = 'Boa tarde\n';
} else {
    msg = 'Boa noite\n'
}

if(diferencaTime > milissegundosAnos){
    msg += "você está ausente há anos!!!"
} else if (diferencaTime > milissegundosMeses ){
    msg += "você está ausente há meses!!!"
} else if ( diferencaTime > milissegundosDia ) {
    msg += "Você está ausente há dias!!!";
} else if (diferencaTime > milissegundosHora) {
    msg += "Você está ausente há horas!!!";
} else {
    msg += "Que bom que ainda está aqui!";
}

console.log(msg);