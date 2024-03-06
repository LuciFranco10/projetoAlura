const textArea = document.querySelector(".text-area");
const background = document.querySelector(".mensagem")
const mensagem = document.querySelector(".mensagem-criptografada");

function btnEncriptar() {
    const textEncriptado = encriptar (textArea.value);
    mensagem.innerHTML = textEncriptado;
    textArea.value = "";
    background.classList.remove('mensagem-background');
}

function encriptar(stringEncriptada) {
    
    let matrizCodigo = [["e" , "enter"] ,["i" , "imes"], ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;

}



function btnDesencriptar() {
    const textDesencriptado = desencriptar (textArea.value);
    mensagem.innerHTML = textDesencriptado;
    textArea.value = "";
    
}


function desencriptar(stringDesencriptada) {
    
    let matrizCodigo = [["e" , "enter"] ,["i" , "imes"], ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;

}


function copiarTexto() {
    const textoParaCopiar = document.querySelector(".mensagem-criptografada").innerText; 
    navigator.clipboard.writeText(textoParaCopiar)
       
}
