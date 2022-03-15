document.addEventListener("DOMContentLoaded", (e) => {

    
    let y = 0;
    let button =document.getElementById("button");

    function addone(event) {
        y++;
        document.getElementById("compteur").textContent = y;
    }

    button.addEventListener("click", addone);








})
