function afficherjourssemaines(){
    var Semaine = [
        "Lundi ",
        "Mardi ",
        "Mercredi ",
        "Jeudi ",
        "Vendredi ",
        "Samedi ",
        "Dimanche "
    ];

    for(var i in Semaine) {
        document.write(Semaine[i]);
    }
}

afficherjourssemaines();