
const btns = document.querySelectorAll('.buttons button');
const imgs = document.querySelectorAll(".galeria img");
 

btns.forEach(button =>{
    button.onclick = function(){
        btns.forEach(button =>{
            button.className = "";   
        })
        button.className= "active";

    const value = button.textContent;
    console.log(button.textContent);
    imgs.forEach(img =>{
        img.style.display = "none";
        console.log(img.getAttribute("data-img"));
        if (img.getAttribute("data-img") == value || value == "All") {
            img.style.display = "block";
        }
    });
}
});