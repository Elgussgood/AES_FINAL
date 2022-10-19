
var mensaje ="voy a reprobar un monton de materias de manera inminente"

var password ="qweqweqwe"

var cifrado = CryptoJS.AES.encrypt(mensaje,password);
var descifrado = CryptoJS.AES.decrypt(cifrado,password);

document.getElementById("demo00").innerHTML = mensaje;
document.getElementById("demo01").innerHTML = cifrado;
document.getElementById("demo02").innerHTML = descifrado;
document.getElementById("demo03").innerHTML = descifrado.toString(CryptoJS.enc.Utf8);