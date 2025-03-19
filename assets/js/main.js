/*-------------------------------NAV SELECTOR--------------------------*/

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    function updateActiveLink() {
        let currentSection = "presentation"; // Section par défaut
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

    // Gestion du clic sur les liens pour smooth scroll
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

    // Événement de défilement
    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink(); // Vérification initiale
});

