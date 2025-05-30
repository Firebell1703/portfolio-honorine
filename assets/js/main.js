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

  langBtn.addEventListener("click", () => {
    currentLang = currentLang === "fr" ? "en" : "fr";
    langBtn.textContent = translations[currentLang].langLabel;

    // Change some header text
    document.querySelector("header h1").textContent = translations[currentLang].headerTitle;
    document.querySelector("header h2").textContent = translations[currentLang].headerSubtitle;
    // You can update more elements here as needed
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
});
