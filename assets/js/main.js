document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  // Active la section 'Présentation' par défaut
  const defaultSection = document.getElementById("presentation");
  defaultSection.style.opacity = 1;
  document.querySelector("nav a[href='#presentation']").classList.add("active");

  // Fonction pour afficher la section active
  function activateSection(sectionId) {
    sections.forEach((section) => {
      section.style.opacity = "0"; // Masque toutes les sections
      section.style.display = "none"; // Cache toutes les sections
    });

    // Affiche la section sélectionnée
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = "block";
    activeSection.style.opacity = "1"; // Restaure l'opacité pour la section active
  }

  // Fonction pour gérer le click sur les liens de navigation
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      
      // Enlève l'active de tous les liens
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      // Ajoute l'active sur le lien cliqué
      link.classList.add("active");

      // Récupère l'ID de la section correspondante
      const sectionId = link.getAttribute("href").substring(1); // Extrait l'ID de la section
      activateSection(sectionId);
    });
  });
});
