document.addEventListener('DOMContentLoaded', (event) => {
    let button = document.getElementById("update");

    button.addEventListener("click", function() {
        location.reload()
    })

    fetch('users.php')
    .then(response => response.json())
    .then(response => {

        let btnUpdate = document.getElementById('update')
        let table = document.querySelector('table')
        let table_body = document.querySelector('tbody')
        
        response.forEach((element)=> {
            let ligne = document.createElement('tr')
            let id_column = document.createElement('td')
            table_body.append(ligne)
            ligne.append(id_column)
            id_column.append(element.id)

            let prenom_column = document.createElement('td')
            ligne.append(prenom_column)
            prenom_column.append(element.prenom)

            let nom_column = document.createElement('td')
            ligne.append(nom_column),
            nom_column.append(element.nom)

            let email_column = document.createElement('td')
            ligne.append(email_column),
            email_column.append(element.email)

        })

    })

    

})