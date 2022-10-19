const formulario = document.getElementById("Form");
const inputs = document.querySelectorAll('#Form input');
const areatxt = document.getElementById("Texto");
const clave1 = /^[^><]{16}$/
const clave2 = /^[^><]{24}$/
const clave3 = /^[^><]{32}$/
var estandar =/^[^><]{16}$/
const text = /^[^<>]$/

function SelectionType(){
var tipo = document.querySelector('input[name="Tipo"]:checked').value;
    switch(tipo){
        case "128":
            
            document.getElementById('p16').style.display='block'
            document.getElementById('p32').style.display='none'
            document.getElementById('p24').style.display='none'
            estandar= clave1
        break;
        case "192":
            
            document.getElementById('p24').style.display='block'
            document.getElementById('p16').style.display='none'
            document.getElementById('p32').style.display='none'
            estandar= clave2
        break;
        case "256":
            document.getElementById('p32').style.display='block'
            document.getElementById('p16').style.display='none'
            document.getElementById('p24').style.display='none'
            estandar= clave3
        break;
    }
    return estandar
}
function SelectionFormat(){
    var formato = document.querySelector('input[name="Formatos"]:checked').value;
    if(formato=='Texto'){
        document.getElementById('Dtexto').style.display='block';
        document.getElementById('Darchivo').style.display='none';
    }else if(formato=="Archivo"){
        document.getElementById('Darchivo').style.display='block';
        document.getElementById('Dtexto').style.display='none';
    }
     
}
formulario.addEventListener('submit', (e)=>{
    console.log("hola")
})

const validar = (e)=>{
    if(estandar.test(e.target.value||e.target.value==undefined)){
    document.getElementById("Errortext").style.display="none";
    document.getElementById('Tcifrar').disabled=false;
    document.getElementById('Tdescifrar').disabled=false;
    document.getElementById('Fcifrar').disabled=false;
    document.getElementById('Fdescifrar').disabled=false
    }else{
    document.getElementById("Errortext").style.display="block";
    document.getElementById('Tcifrar').disabled=true;
    document.getElementById('Tdescifrar').disabled=true;
    document.getElementById('Fcifrar').disabled=true;
    document.getElementById('Fdescifrar').disabled=true;
    }
    if(true){
        console.log("bien")
        document.getElementById("Errorcampo").style.display="none";
        document.getElementById('Tcifrar').disabled=false;
        document.getElementById('Tdescifrar').disabled=false;
        document.getElementById('Fcifrar').disabled=false;
        document.getElementById('Fdescifrar').disabled=false
        }else{
            console.log("mal")
        document.getElementById("Errorcampo").style.display="block";
        document.getElementById('Tcifrar').disabled=true;
        document.getElementById('Tdescifrar').disabled=true;
        document.getElementById('Fcifrar').disabled=true;
        document.getElementById('Fdescifrar').disabled=true;
        }    
}
areatxt.addEventListener('keyup',validar)
inputs.forEach((input)=>{ 
        input.addEventListener('keyup',validar);
        input.addEventListener('blur', validar)
 })