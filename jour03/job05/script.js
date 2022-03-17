document.addEventListener("DOMContentLoaded", (e) => {

    
    
    var pos = document.getElementById('footer');
    console.log(pos)

    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    console.log(height)

    window.addEventListener('scroll', 
        function(){
            var progress = (document.documentElement.scrollTop / height) * 100;

            console.log(progress);
            
            pos.style.width = progress + "%";

            if (progress <= 35 ){
                pos.style.background = "blue";
             }
            else if (progress > 35  && progress <= 70 ) {
                pos.style.background = "pink";
            }
            else if (progress > 70  && progress <= 100 ) {
                pos.style.background = "red";
            }
})

    


})
