import { Validate } from "./validaciones.js"
import { modalAlert, addPerson } from "./alertas.js";

let validator = new Validate;


const mail = document.getElementById("mail")
const mailConf = document.getElementById("mailConf")
const pass = document.getElementById("contraseña")
const passConf = document.getElementById("contraseñaConf")
const btnEnviar = document.getElementById("btnEnviar")
const mailLog = document.getElementById("mail")
console.log(mailLog);
const form = document.getElementById("formSign")
const formLog = document.getElementById("logForm")
const terms = document.getElementById("checkBox")
const btnEnviar1 = document.getElementById("btnEnviar1")
const objectValid = {
    nameObject: false,
    teleObject: false,
    addressObject: false,
    mailObject: false,
    mailConfObject: false,
    passObject: false,
    passConfObject: false,
    termsObject: false

};

const objectValid1 = {
    mailObject: false,
    passObject: false,


};


form.addEventListener('change', function(event){
    const inputId = event.target.id;
    console.log(inputId);
    const inputValue = event.target.value;
    console.log(inputValue);
    const inputClass = event.target.classList;
    console.log(inputClass);
    const validClass = () =>{
        inputClass.add("is-valid");
        inputClass.remove("is-invalid");
    }
    const invalidClass = () =>{
        inputClass.add("is-invalid");
        inputClass.remove("is-valid");
    }
    switch(inputId){
        case "name":
            objectValid.nameObject= validator.validName(inputValue);
            objectValid.nameObject ? validClass() : invalidClass();
            break;
        case "telephone":
            objectValid.teleObject = validator.validTele(inputValue);
            objectValid.teleObject ? validClass() : invalidClass();
            break;
        case "address":
            objectValid.addressObject = validator.validaAddress(inputValue);
            objectValid.addressObject ? validClass() : invalidClass();
            
            break;
        case "mail":
            objectValid.mailObject = validator.validMail(inputValue);    
            objectValid.mailObject ? validClass() : invalidClass();
            
            break;
        case "mailConf":
          if(mail.value === mailConf.value){
            objectValid.mailConfObject = true;
            objectValid.mailConfObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
          }else{
            objectValid.mailConfObject = false;
            objectValid.mailConfObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
          }
           
            break;
        case "contraseña":
            objectValid.passObject = validator.validPass(inputValue);    
            objectValid.passObject ? validClass() : invalidClass();
           
            break; 
        case "contraseñaConf":
            if(pass.value === passConf.value){
                objectValid.passConfObject = true;
                objectValid.passConfObject ? validClass() : invalidClass();
                
              }else{
                objectValid.passConfObject = false;
                objectValid.passConfObject ? validClass() : invalidClass();
              
              }
             break;     
        case "checkBox":
            if( terms.checked == true){
                objectValid.termsObject = true;
                console.log(Object.values(objectValid));
              }else{
                objectValid.termsObject = false;
                console.log(Object.values(objectValid));
              }
              break; 
        }
});

btnEnviar.addEventListener('click', (e) =>{
    e.preventDefault();
    const nombre = document.getElementById('name').value;
    const telefono = document.getElementById('telephone').value;
    const direccion = document.getElementById('address').value;
    const correo = document.getElementById('mail').value;
    const ConfirmacionCorreo = document.getElementById('mailConf').value;
    const contraseña = document.getElementById('contraseña').value;
    const ConfirmacionContraseña = document.getElementById('contraseñaConf').value;
    const terms1 = document.getElementById("checkBox").checked;

    if(validator.validForm(objectValid) === -1) {
    addPerson(nombre, telefono, direccion, correo, ConfirmacionCorreo, contraseña, ConfirmacionContraseña, terms1);
    form.reset();
        }else{
        modalAlert("Error, revise los datos");
    }
})

