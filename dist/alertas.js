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
const commisSoli = (mailc, passc) =>{
    let personLog = {
        cmail: mailc,
        cpass: passc
    }
    let text1 =`User Found ${commisSoli.cmail}`
    modalAlert2(text1, "aceptar")  

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
  export{addPerson, logPerson, modalAlert, modalAlert1}