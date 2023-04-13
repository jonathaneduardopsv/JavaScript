function horaatual()
var agora = new Date()
var hora = agora.getHours()
console.log (`Agora são exatamente ${hora} horas.`)
if (hora >= 00 && hora < 06) {
    console.log ('Boa Madrugada!')
} else if (hora >= 06 && hora < 12) {
    console.log ('Bom Dia')
} else if (hora >= 12 && hora <= 18) {
    console.log ('Boa Tarde')
} else {
    console.log ('Boa NOite')
}