function openTab(evt, branchName) {
    var i, tabcontent, tablinks;
    
    // Cache tous les contenus
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    // Désactive tous les boutons
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Affiche l'onglet actuel et ajoute la classe active au bouton
    document.getElementById(branchName).classList.add("active");
    evt.currentTarget.classList.add("active");
}