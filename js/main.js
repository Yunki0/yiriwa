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
        document.getElementById("countdown").innerHTML = `
        <div class="countdown-finished-box" >
            <div class="finished-icon"><i class="fas fa-campground"></i></div>
            <div class="finished-text">
                <h3>C'EST PARTI POUR <span class="text-gold">YIRIWA 2026</span> !</h3>
            </div>
            <a href="#localisation" class="btn-finished">Nous rejoindre sur la carte</a>
        </div>
    `;
        // On enlève le flex du container pour que la box prenne sa place proprement
        document.getElementById("countdown").style.display = "block";
    }
};

// Mise à jour chaque seconde
setInterval(countdown, 1000);
countdown(); // Appel immédiat pour éviter le "00" au chargement