let commit=document.getElementById("modalCommis");
let button=document.querySelectorAll(".btnOpen");
let close_modal=document.querySelectorAll(".fa-circle-xmark")[0];
let fondoVentanaModal=document.getElementById("fondoVentanaModal");

close_modal.addEventListener("click",()=>{
    commit.classList.toggle("showModalCommis");
    fondoVentanaModal.classList.toggle("showFondo");
});

button.forEach(btn => btn.addEventListener("click",()=>{
    fondoVentanaModal.classList.toggle("showFondo");
    commit.classList.toggle("showModalCommis");
}

))

