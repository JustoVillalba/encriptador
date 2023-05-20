const textArea = document.querySelector(".text-area")
const mensaje = document.querySelector(".mensaje")

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", "ai"], ["o","ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.replace(/[^\w\s]/gi, '').toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoDesencriptado = Desencriptar(textArea.value)
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";


}

function Desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", "ai"], ["o","ober"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function copiarAlPortapapeles(){
        var selectedText = document.getElementById("text-area")
        selectedText.select();
        document.execCommand("copy")   


}




function bloquearAcentos(Event) {
  var codigoTecla = event.which || event.code || event.key;
  if (  codigoTecla == 39 || codigoTecla == 42 || codigoTecla == 43 || codigoTecla == 44 || codigoTecla == 45 || codigoTecla == 46 || codigoTecla == 47 || codigoTecla == 48 || codigoTecla == 49 || codigoTecla == 50 || codigoTecla == 51 || codigoTecla == 52 || codigoTecla == 53 || codigoTecla == 54 || codigoTecla == 55 || codigoTecla == 56 || codigoTecla == 57 || codigoTecla == 59 || codigoTecla == 61 || codigoTecla == 91 || codigoTecla == 92 || codigoTecla == 93 || codigoTecla == 96 || codigoTecla == 19 || codigoTecla == 192 || codigoTecla == 222){
    return false;
  }
  return true;
}