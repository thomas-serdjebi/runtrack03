document.addEventListener('DOMContentLoaded', (event) => {

    fetch('users.php')
    .then(response => response.json())
    .then(response => {

       
        let btnUpdate = document.getElementById('update')
        let table = document.querySelector('table')
        let table_body = document.querySelector('tbody')
        let ligne = document.createElement('tr')
        let cellule = document.createElement('td')


        response.forEach(element => 
            table_body.append(ligne),
            ligne.append(cellule),
            cellule.append(response.id)
        )



    })


    


})