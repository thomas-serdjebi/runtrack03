$(document).ready(function() {

    var show = $("#button");
    var hide = $("#hideall");
    

 
    $("p").hide() ;

    show.on('click', function() {
        $("p").show();
    });

    hide.on('click', function() {
        $("*").hide() ;
    })

    

    






})