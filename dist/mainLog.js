import { Validate } from "./validaciones.js"
import { modalAlert1, logPerson} from "./alertas.js";

let validator = new Validate;

const formLog = document.getElementById("logForm")
const btnEnviar1 = document.getElementById("btnEnviar1")


const objectValid1 = {
    mailObject: false,
    passObject: false,


};

formLog.addEventListener('change', function(event){
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
        case "logMail":
            objectValid1.mailObject = validator.validMail(inputValue);    
            objectValid1.mailObject ? validClass() : invalidClass();
           
            
            break;
        case "logPass":
            objectValid1.passObject = validator.validPass(inputValue);    
            objectValid1.passObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid1));
            break; 

        }
});

btnEnviar1.addEventListener('click', (e) =>{
    e.preventDefault();
    const mailLog = document.getElementById('logMail').value;
    const passLog = document.getElementById('logPass').value;


    if(validator.validForm(objectValid1) === -1) {
    logPerson(mailLog, passLog,);
        }else{
        modalAlert1("Error, revise los datos");
    }
})  
