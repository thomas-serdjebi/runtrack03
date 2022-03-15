document.addEventListener("DOMContentLoaded", (e) => {

    
    var textarea = document.getElementById("keylogger");

    document.addEventListener("keypress", addCharacter);

    function addCharacter(event) {
        console.log(event.key);
        textarea.value=textarea.value+event.key; 
    }

    


})
