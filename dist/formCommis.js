import { Validate } from "./validaciones.js"
import { modalAlert2, commisSoli} from "./alertas.js";

let validator = new Validate;


const commisForm = document.getElementById("commisForm")
const fileCommis = document.getElementById("uploadFiles")
const btnEnviar1 = document.getElementById("btn_commis")

const objectValid1 = {
    nameObject: false,
    mailObject: false,
    msnObject: false,
    fileObject: true

};

commisForm.addEventListener('change', function(event){
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
        case "nameForm":
            objectValid1.nameObject = validator.validName(inputValue);    
            objectValid1.nameObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid1));
            
            break;

        case "emailForm":
            objectValid1.mailObject = validator.validMail(inputValue);    
            objectValid1.mailObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid1));
            break;
         case "textAreaForm":
            objectValid1.msnObject = validator.validMsn(inputValue);    
            objectValid1.msnObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid1));
            break;
         case "uploadFiles":
            if(fileCommis.value == null){
                objectValid1.fileObject = false
                
            } else{
                objectValid1.fileObject = true
            }
            console.log(Object.values(objectValid1));
            break;
        }
});

btnEnviar1.addEventListener('click', (e) =>{
    e.preventDefault();
    const nameCommis = document.getElementById('nameForm').value;
    const mailCommis = document.getElementById('emailForm').value;
    const msnCommis = document.getElementById('textAreaForm').value;
    const fileCommis = document.getElementById('uploadFiles').value;


    if(validator.validForm(objectValid1) === -1) {
        commisSoli(nameCommis, mailCommis, msnCommis, fileCommis);
        commisForm.reset();
        }else{
        modalAlert2("Blank spaces, please check again");
    }
})  

