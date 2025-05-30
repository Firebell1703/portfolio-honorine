document.addEventListener("DOMContentLoaded", function () {
  const langBtn = document.getElementById("language");
  let currentLang = "fr";

  const translations = {
    fr: {
      langLabel: "Angl / Fre",
      headerTitle: "C'est le portfolio d'Honorine en construction",
      headerSubtitle: "Future masteré·e en recherche d'un travail",
      introText: "Bienvenue sur mon portfolio !",
    },
    en: {
      langLabel: "Fr / Eng",
      headerTitle: "Honorine's portfolio (under construction)",
      headerSubtitle: "Future master's graduate looking for a job",
      introText: "Welcome to my portfolio!",
    }
  };

  // Fonction pour générer toutes les galeries selon la langue
  function generateAllGalleries() {
    Object.entries(galleriesData).forEach(([section, items]) => {
      createGalleryItems("gallery-" + section, items, currentLang);
    });
  }

  langBtn.addEventListener("click", () => {
    currentLang = currentLang === "fr" ? "en" : "fr";
    langBtn.textContent = translations[currentLang].langLabel;

    // Mise à jour du header
    document.querySelector("header h1").textContent = translations[currentLang].headerTitle;
    document.querySelector("header h2").textContent = translations[currentLang].headerSubtitle;

    // Regénère les galeries dans la bonne langue
    generateAllGalleries();
  });

  // === DARK MODE TOGGLE ===
  const themeLink = document.getElementById("theme-style");

  const darkToggle = document.createElement("button");
  darkToggle.id = "darkmode";
  darkToggle.textContent = "🌙";
  darkToggle.style.position = "fixed";
  darkToggle.style.top = "10px";
  darkToggle.style.left = "10px";
  darkToggle.style.padding = "10px 15px";
  darkToggle.style.border = "none";
  darkToggle.style.borderRadius = "5px";
  darkToggle.style.background = "#444";
  darkToggle.style.color = "#fff";
  darkToggle.style.cursor = "pointer";
  darkToggle.style.zIndex = 999;

  document.body.appendChild(darkToggle);

  let isDark = false;
  darkToggle.addEventListener("click", () => {
    isDark = !isDark;
    themeLink.href = isDark ? "assets/css/dark-style.css" : "assets/css/style.css";
    darkToggle.textContent = isDark ? "☀️" : "🌙";
  });

  const galleriesData = {
    animations: [
      {
        src: "assets/img/nono.jpg",
        title: { fr: "Titre 1", en: "Title 1" },
        description: { fr: "Description image 1", en: "Image description 1" }
      },
      {
        src: "assets/img/image2.jpg",
        title: { fr: "Titre 2", en: "Title 2" },
        description: { fr: "Description image 2", en: "Image description 2" }
      }
    ],
    illustrations: [
      {
        src: "assets/img/illua.jpg",
        title: { fr: "Titre A", en: "Title A" },
        description: { fr: "Description image A", en: "Image description A" }
      }
      // ...
    ],
    projets: [
      {
        src: "assets/img/projetx.jpg",
        title: { fr: "Titre X", en: "Title X" },
        description: { fr: "Description image X", en: "Image description X" }
      }
      // ...
    ]
  };

  function createGalleryItems(sectionId, items, lang) {
    const container = document.getElementById(sectionId);
    container.innerHTML = ""; // vide avant de remplir
    items.forEach((item, index) => {
      const div = document.createElement("div");
      div.classList.add("gallery-item");
      div.dataset.index = index;
      div.innerHTML = `
        <img src="${item.src}" alt="${item.title[lang]}">
        <span class="title">${item.title[lang]}</span>
      `;
      container.appendChild(div);
    });
  }

  // Génération initiale des galeries en langue par défaut
  generateAllGalleries();

  // Récupération des éléments modale
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const closeModal = document.querySelector(".close");

  // Événement sur chaque galerie
  document.querySelectorAll(".gallery").forEach(gallery => {
    gallery.addEventListener("click", (e) => {
      const itemDiv = e.target.closest(".gallery-item");
      if (!itemDiv) return;

      const sectionId = gallery.id.replace("gallery-", "");
      const index = itemDiv.dataset.index;
      const data = galleriesData[sectionId][index];

      modalImg.src = data.src;
      modalTitle.textContent = data.title[currentLang];
      modalDescription.textContent = data.description[currentLang];

      modal.classList.remove("hidden");
    });
  });

  closeModal.addEventListener("click", () => modal.classList.add("hidden"));

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });
});
