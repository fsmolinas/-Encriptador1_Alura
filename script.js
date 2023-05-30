function encriptar(){
    let text_in = document.getElementById('text-input').value.toLowerCase();
    let text_cif = text_in.replace(/e/igm,"enter");
    text_cif = text_cif.replace(/o/igm,"over");
    text_cif = text_cif.replace(/i/igm,"imes");
    text_cif = text_cif.replace(/a/igm,"ai");
    text_cif = text_cif.replace(/u/igm,"ufat");

    document.getElementById("observador_img").style.display = "none";
    document.getElementById("texto_output").style.display = "none";
    document.getElementById("texto2_output").innerHTML = text_cif;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
}

function desencriptar(){
    let text_in = document.getElementById('text-input').value.toLowerCase();
    let text_cif = text_in.replace(/enter/igm,"e");
    text_cif = text_cif.replace(/over/igm,"o");
    text_cif = text_cif.replace(/imes/igm,"i");
    text_cif = text_cif.replace(/ai/igm,"a");
    text_cif = text_cif.replace(/ufat/igm,"u");

    document.getElementById("observador_img").style.display = "none";
    document.getElementById("texto_output").style.display = "none";
    document.getElementById("texto2_output").innerHTML = text_cif;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
}

function copiar(){
    var paragraph = document.getElementById('texto2_output');
    var text = paragraph.textContent || paragraph.innerText;
    var tempElement = document.createElement('textarea');
    tempElement.value = text;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);
}

function clearPlaceholder() {
    document.getElementById('text-input').placeholder = '';
}

function restorePlaceholder() {
    var input = document.getElementById('text-input');
    input.placeholder = 'Ingrese el texto aquí';
    input.style.paddingTop = '';
}