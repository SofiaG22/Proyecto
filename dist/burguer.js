let burguer=document.getElementById("burguer");
let mobile=document.querySelectorAll(".mobile")[0];
burguer.addEventListener('click', ()=> {
    mobile.classList.toggle("showMobile");
})