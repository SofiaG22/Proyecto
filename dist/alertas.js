const addPerson = (name, tele, address, mail, mailConf, pass, passConf, terms) =>{
    let person = {
        pname: name,
        ptele: tele,
        paddress: address,
        pmail: mail,
        pmailConf: mailConf,
        ppass: pass,
        ppassConf: passConf,
        pterms: terms
    }

 let text =`successfully registered  ${person.pname}`
    modalAlert(text, "aceptar")
}
const logPerson = (maila, passa) =>{
    let personLog = {
        lmail: maila,
        lpass: passa
    }
    let text1 =`User Found ${personLog.lmail}`
    modalAlert1(text1, "aceptar")  

}
const commisSoli = (namec, mailc, msnc, filec ) =>{
    let personLog = {
        cname: namec,
        cmail: mailc,
        cmsn: msnc,
        cfile: filec

    }
    let text2 =`Your petition has been succesfully send`
    modalAlert2(text2, "aceptar")  

}
const contactSoli = (nameC, lnameC, mailC, msnC ) =>{
    let personLog = {
        Cname: nameC,
        Clname: lnameC,
        Cmail: mailC,
        Cmsn: msnC
       

    }
    let text3 =`Your message has been succesfully send`
    modalAlert2(text3, "aceptar")  

}
   
    function modalAlert(cadena, tipo){

        const alerta = document.createElement("div");
        const texto = document.createElement("p");
        const btnCerrar = document.createElement("input");
    
        alerta.setAttribute("id", "alerta")
        alerta.setAttribute("class", "alerta");
        texto.setAttribute("class", "textAlerta");
        texto.innerHTML = `<strong>${cadena}</strong>`
        btnCerrar.setAttribute("type", "button");
        btnCerrar.setAttribute("class", "btnAlerta");
        btnCerrar.setAttribute("value", "Cerrar");
    
        alerta.appendChild(texto);
        alerta.appendChild(btnCerrar);
        
        if (tipo === "aceptar") {
            const btnAceptar = document.createElement("input");
            btnAceptar.setAttribute("type", "button");
            btnAceptar.setAttribute("class", "btnAlerta");
            btnAceptar.setAttribute("value", "Enviar");
            btnAceptar.setAttribute("hrf", "Enviar");
            alerta.appendChild(btnAceptar);
            document.body.appendChild(alerta);
            btnAceptar.onclick = function(){
                location.href = "./login.html"
                document.getElementById("alerta").remove();
            }
            btnCerrar.onclick = function(){
                document.getElementById("alerta").remove();
            }
            
        
        }else{
            document.body.appendChild(alerta);
            btnCerrar.onclick = function(){
                document.getElementById("alerta").remove();
            }
        
        }
      
    }
    function modalAlert1(cadena, tipo){

        const alerta = document.createElement("div");
        const texto = document.createElement("p");
        const btnCerrar = document.createElement("input");
    
        alerta.setAttribute("id", "alerta")
        alerta.setAttribute("class", "alerta");
        texto.setAttribute("class", "textAlerta");
        texto.innerHTML = `<strong>${cadena}</strong>`
        btnCerrar.setAttribute("type", "button");
        btnCerrar.setAttribute("class", "btnAlerta");
        btnCerrar.setAttribute("value", "Cerrar");
    
        alerta.appendChild(texto);
        alerta.appendChild(btnCerrar);
        
        if (tipo === "aceptar") {
            const btnAceptar = document.createElement("input");
            btnAceptar.setAttribute("type", "button");
            btnAceptar.setAttribute("class", "btnAlerta");
            btnAceptar.setAttribute("value", "Enviar");
            btnAceptar.setAttribute("hrf", "Enviar");
            alerta.appendChild(btnAceptar);
            document.body.appendChild(alerta);
            btnAceptar.onclick = function(){
                location.href = "../../index.html"
                document.getElementById("alerta").remove();
            }
            btnCerrar.onclick = function(){
                document.getElementById("alerta").remove();
            }
            
        
        }else{
            document.body.appendChild(alerta);
            btnCerrar.onclick = function(){
                document.getElementById("alerta").remove();
            }
        
        }
      
    }
    function modalAlert2(cadena, tipo){

        const alerta = document.createElement("div");
        const texto = document.createElement("p");
        const btnCerrar = document.createElement("input");
    
        alerta.setAttribute("id", "alerta")
        alerta.setAttribute("class", "alerta");
        texto.setAttribute("class", "textAlerta");
        texto.innerHTML = `<strong>${cadena}</strong>`
        btnCerrar.setAttribute("type", "button");
        btnCerrar.setAttribute("class", "btnAlerta");
        btnCerrar.setAttribute("value", "Close");
    
        alerta.appendChild(texto);
      
        
        if (tipo === "aceptar") {
            const btnAceptar = document.createElement("input");
            btnAceptar.setAttribute("type", "button");
            btnAceptar.setAttribute("class", "btnAlerta");
            btnAceptar.setAttribute("value", "Accept");
            btnAceptar.setAttribute("hrf", "Accept");
            alerta.appendChild(btnAceptar);
            document.body.appendChild(alerta);
            btnAceptar.onclick = function(){
                document.getElementById("alerta").remove();
            }
 
        }else{
            alerta.appendChild(btnCerrar);
            document.body.appendChild(alerta);
            btnCerrar.onclick = function(){
                document.getElementById("alerta").remove();
            }
        
        }  
      
    }
    function modalAlert3(cadena, tipo){

        const alerta = document.createElement("div");
        const texto = document.createElement("p");
        const btnCerrar = document.createElement("input");
    
        alerta.setAttribute("id", "alerta")
        alerta.setAttribute("class", "alerta");
        texto.setAttribute("class", "textAlerta");
        texto.innerHTML = `<strong>${cadena}</strong>`
        btnCerrar.setAttribute("type", "button");
        btnCerrar.setAttribute("class", "btnAlerta");
        btnCerrar.setAttribute("value", "Close");
    
        alerta.appendChild(texto);
      
        
        if (tipo === "aceptar") {
            const btnAceptar = document.createElement("input");
            btnAceptar.setAttribute("type", "button");
            btnAceptar.setAttribute("class", "btnAlerta");
            btnAceptar.setAttribute("value", "Accept");
            btnAceptar.setAttribute("hrf", "Accept");
            alerta.appendChild(btnAceptar);
            document.body.appendChild(alerta);
            btnAceptar.onclick = function(){
                document.getElementById("alerta").remove();
            }
 
        }else{
            alerta.appendChild(btnCerrar);
            document.body.appendChild(alerta);
            btnCerrar.onclick = function(){
                document.getElementById("alerta").remove();
            }
        
        }
      
    }
  export{addPerson, logPerson, commisSoli, modalAlert, modalAlert1, modalAlert2, contactSoli, modalAlert3}