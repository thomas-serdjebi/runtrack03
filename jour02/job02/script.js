document.addEventListener("DOMContentLoaded", (e) => {

    let article = document.querySelector("article");
    article.style.visibility = "hidden";
    
    let button = document.getElementById("button");

    function showhide(event){

        if (article.style.visibility == "hidden"){
            article.style.visibility = "visible";
        }

        else {
            article.style.visibility = "hidden";
        }


    }

    button.addEventListener("click", showhide)


})
