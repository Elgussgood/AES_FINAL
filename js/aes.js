const form = document.getElementById('Form')
var pass 
var txt
var cifradotxt
var descifradotxt 
form.addEventListener('submit',(e)=>{
    e.preventDefault()
})
function cifrarTxt(){
    console.log("se envio");
    pass =document.getElementById("Clave").value
    txt = document.getElementById('Texto').value
    cifradotxt = CryptoJS.AES.encrypt(txt,pass);
    document.getElementById('Resultadotxt').innerHTML=cifradotxt
    document.getElementById('Resultadotxt').style.display='block'
    
}
    
    

function descifrarTxt(){
    pass =document.getElementById("Clave").value
    txt = document.getElementById('Texto').value
    descifradotxt = CryptoJS.AES.decrypt(cifradotxt,pass);
    document.getElementById('Resultadotxt').innerHTML=descifradotxt
    document.getElementById('Resultadotxt').style.display='block'
}
function cifrarArc(){
    
}
function cifrarArc(){
    
}