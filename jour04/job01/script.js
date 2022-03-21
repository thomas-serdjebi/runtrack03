document.addEventListener("DOMContentLoaded",(event)=>{
    var button = document.getElementById('button')
    let p = document.createElement('p');
    let body = document.querySelector('body')


    button.addEventListener("click",function(){
        fetch('expression.txt')
        .then (function(response) {
           return response.text()
        })

        .then (function(data) {
            body.append(p);
            p.append(data)

        })

    }) 
        
})



