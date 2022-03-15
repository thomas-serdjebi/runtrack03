document.addEventListener("DOMContentLoaded", (e) => {

    console.log("DOM entièrement chargé et analysé");

    let article = document.getElementById("citation");

    let button = document.getElementById("button");

    function citation (event) {
        console.log(article);
    }

    button.addEventListener("click", citation);
});