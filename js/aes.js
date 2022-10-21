const form = document.getElementById('Form')
const descargar = document.getElementById('Descargar')

document.getElementById('Tcifrar').addEventListener('click', (e)=>{
    e.preventDefault()
    cifrarTxt()

})

var pass =""
var txt =""
var cifradotxt
var descifradotxt 
form.addEventListener('submit',(e)=>{
    e.preventDefault()
})
const cifrarTxt = ()=>{
    pass =document.getElementById("Clave").value
    txt = document.getElementById('Texto').value
    cifradotxt = CryptoJS.AES.encrypt(txt,pass);
    const archivo = new Blob([cifradotxt], {type:'application/x-www-form-urlencoded'})
    const url = window.URL.createObjectURL(archivo)
    const linktxt = document.createElement('a')
    const linkpdf = document.createElement('a')
    const linkdocx= document.createElement('a')
    linktxt.href = url
    linktxt.download = "cifrado.txt"
    linktxt.click()
    linkpdf.href = url
    linkpdf.download = "cifrado.pdf"
    linkpdf.click()
    linkdocx.href = url
    linkdocx.download = "cifrado.docx"
    linkdocx.click()
    URL.revokeObjectURL(url)
    document.getElementById('Resultadotxt').innerHTML=cifradotxt
    document.getElementById('Resultadotxt').style.display='block'
}
function descifrarArc(){
    
}