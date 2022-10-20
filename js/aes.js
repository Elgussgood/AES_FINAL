const form = document.getElementById('Form')
const descargar = document.getElementById('Descargar')
const blob = new Blob([cifrarTxt()])
descargar.href=URL.createObjectURL(blob)
var pass =""
var txt =""
var cifradotxt
var descifradotxt 
form.addEventListener('submit',(e)=>{
    e.preventDefault()
})
function cifrarTxt(){
    pass =document.getElementById("Clave").value
    txt = document.getElementById('Texto').value
    cifradotxt = CryptoJS.AES.encrypt(txt,pass);
    document.getElementById('Resultadotxt').innerHTML=cifradotxt
    document.getElementById('Resultadotxt').style.display='block'
    return cifradotxt
}
function descifrarArc(){
    
}