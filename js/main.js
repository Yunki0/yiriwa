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

const countdown = () => {
    // Date cible du camp
    const countDate = new Date("April 7, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // Calcul du temps
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Affichage
    if (gap > 0) {
        document.getElementById("days").innerText = Math.floor(gap / day);
        document.getElementById("hours").innerText = Math.floor((gap % day) / hour);
        document.getElementById("minutes").innerText = Math.floor((gap % hour) / minute);
        document.getElementById("seconds").innerText = Math.floor((gap % minute) / second);
    } else {
        document.getElementById("countdown").innerHTML = "<h3>C'est l'heure du camp !</h3>";
    }
};

// Mise à jour chaque seconde
setInterval(countdown, 1000);
countdown(); // Appel immédiat pour éviter le "00" au chargement

window.onscroll = function() {
    let btn = document.getElementById("backToTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

document.getElementById("backToTop").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};