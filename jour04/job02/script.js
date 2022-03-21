document.addEventListener("DOMContentLoaded", (e) => {

    var json = '{"prenom ":"Thomas", "nom":"Serdjebi", "sexe":"masculin", "signe":"taureau"}';

    function jsonValueKey(personne, key) {

        var string = JSON.parse(string);
        return string[key];
    }

    let key = "prenom";

    let info = jsonValueKey(personne, key)

    console.log(info);


    




})



