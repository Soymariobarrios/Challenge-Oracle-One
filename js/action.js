var inputText = document.querySelector(".input-text");
var outputText = document.querySelector(".output-text");
var instruccion = document.querySelector(".instruccion");
var mensaje = document.querySelector(".mensaje");

//función de validación
function validacion(e) {
    var key = e.keyCode || e.which; 
    var tecla = String.fromCharCode(key).toString();
    var letrasPermitidas = " abcdefghijklmnñopqrstuvwxyz";
     
    if (letrasPermitidas.indexOf(tecla) == -1) {
        alert ("Ingresa solo letras minúsculas. No se aceptan acentos, caracteres especiales y números");
        return false;
    }
}

//Función de Encriptación
function resultadoEncriptar() {
    var textoEncriptado = encriptar(inputText.value);

    if(inputText.value.length == 0) {
        instruccion.style.display = "inline-flex";  
        mensaje.style.display = "none"; 
        inputText.focus();
    } else {
        outputText.value = textoEncriptado; 
        inputText.value = ""; 
        instruccion.style.display = "none"; 
        mensaje.style.display = "inline-flex";
        outputText.focus();
    }
}

function encriptar(textoCapturado) {
    let llavesEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    textoCapturado = textoCapturado.toLowerCase();

    for(i = 0; i < llavesEncriptacion.length; i++) {
        if(textoCapturado.includes(llavesEncriptacion[i][0])) {
            textoCapturado = textoCapturado.replaceAll(llavesEncriptacion[i][0], llavesEncriptacion[i][1]);
        }
    }
    
    return textoCapturado; 
}

//Función Copiar
function copiar() {
    outputText.select(); 
    outputText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(outputText.value);
}

//Función Desencriptación
function resultadoDesencriptar() {
    var textoDesencriptado = desencriptar(inputText.value);

    if(inputText.value.length == 0) {
        instruccion.style.display = "inline-flex";
        mensaje.style.display = "none"; 
        inputText.focus();
    } else {
        outputText.value = textoDesencriptado; 
        inputText.value = "";
        instruccion.style.display = "none";
        mensaje.style.display = "inline-flex";
        outputText.focus();
    }
} 

function desencriptar(textoCopiado) {
    let llavesEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    textoCopiado = textoCopiado.toLowerCase(); 
   
    for(i=0; i < llavesEncriptacion.length; i++) {
        if(textoCopiado.includes(llavesEncriptacion[i][1])) {
            textoCopiado = textoCopiado.replaceAll(llavesEncriptacion[i][1], llavesEncriptacion[i][0]);
        }
    }
    return textoCopiado; 
}