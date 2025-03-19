document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("#nav-menu a");

    function updateActiveSection() {
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

        sections.forEach(section => {
            if (section.id === currentSection) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
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
    window.addEventListener("scroll", updateActiveSection);
    updateActiveSection(); // Vérification initiale
});
