function verificar(){
    let txtp = document.querySelector('input#txtpais')
    let res = document.querySelector('div#res')
    let pais = txtp.value
    res.innerHTML = `O país que você nasceu foi ${pais} `
    if (pais != 'Brasil'){
        res.innerHTML += `Você é estrangeiro`
    }else{
        res.innerHTML += `você é Brasileiro`
    }
}