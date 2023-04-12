import { Validate } from "./validaciones.js"
import { modalAlert3, contactSoli} from "./alertas.js";

let validator = new Validate;


const contactForm = document.getElementById("form")
const btnEnviar1 = document.getElementById("btnEnviar")

const objectValid1 = {
    nameObject: false,
    lnameObject: false,
    mailObject: false,
    msnObject: false,

};

contactForm.addEventListener('change', function(event){
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
            objectValid1.nameObject = validator.validName(inputValue);    
            objectValid1.nameObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid1));
            
            break;

        case "lastName":
            objectValid1.lnameObject = validator.validName(inputValue);    
            objectValid1.lnameObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid1));
            break;
        case "mail":
            objectValid1.mailObject = validator.validMail(inputValue);    
            objectValid1.mailObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid1));
            break;
        case "contactMsn":
            objectValid1.msnObject = validator.validMsn(inputValue);    
            objectValid1.msnObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid1));
            break;
        
        }
});

btnEnviar1.addEventListener('click', (e) =>{
    e.preventDefault();
    const nameContact = document.getElementById('name').value;
    const lnameContact = document.getElementById('lastName').value;
    const mailContact = document.getElementById('mail').value;
    const msnContact = document.getElementById('contactMsn').value;


    if(validator.validForm(objectValid1) === -1) {
        contactSoli(nameContact, lnameContact, mailContact, msnContact);
        contactForm.reset();
        }else{
            modalAlert3("Blank spaces, please check again");
    }
})  
