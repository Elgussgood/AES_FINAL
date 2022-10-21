const form = document.getElementById('Form')
document.getElementById('Tcifrar').addEventListener('click', (e)=>{
    e.preventDefault()
    cifrarTxt()

})

var pass =""
var txt =""
var descifradotxt
form.addEventListener('submit',(e)=>{
    e.preventDefault()
})
document.querySelector('input[type="file"]').addEventListener('change', function(e) {
    const res = document.getElementById('Resultadotxt');
    pass =document.getElementById("Clave").value
    const reader = new FileReader();
    var archivo = this.files[0];
    reader.addEventListener("load", () => {
        descifradotxt = CryptoJS.AES.decrypt(reader.result,pass).toString(CryptoJS.enc.Utf8)
        res.innerText = descifradotxt
        console.log(descifradotxt)
    }, false);
    if (archivo) {
        reader.readAsText(archivo);
    }

    
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