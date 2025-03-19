/*-------------------------------NAV SELECTOR--------------------------*/
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("#nav-menu a");

    function updateActiveLink() {
        let currentSection = "presentation"; // Valeur par défaut
        let minDistance = Infinity;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const distance = Math.abs(rect.top);
            
            if (distance < minDistance) {
                minDistance = distance;
                currentSection = section.id;
            }
        });

        navLinks.forEach(link => {
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    // Défilement fluide + mise à jour du lien actif
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink(); // Vérification au chargement
});
