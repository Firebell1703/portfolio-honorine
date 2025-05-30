document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  const defaultSection = document.getElementById("presentation");
  defaultSection.style.opacity = 1;
  document.querySelector("nav a[href='#presentation']").classList.add("active");

  function activateSection(sectionId) {
    sections.forEach((section) => {
      section.style.opacity = "0";
      section.style.display = "none";
    });

    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = "block";
    activeSection.style.opacity = "1";
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      link.classList.add("active");

      const sectionId = link.getAttribute("href").substring(1);
      activateSection(sectionId);
    });
  });
});
