const sections = {
  showreelBtn: "showreelContent",
  projectsBtn: "projectsContent",
  contactBtn: "contactForm",
  bioBtn: "bioContent"
};

// Apri popup
Object.entries(sections).forEach(([btnId, sectionId]) => {
  const btn = document.getElementById(btnId);
  const section = document.getElementById(sectionId);
  btn.addEventListener("click", () => {
    document.querySelectorAll(".popup-section").forEach(s => {
      s.classList.remove("show");
      s.setAttribute("aria-hidden", "true");
    });
    section.classList.add("show");
    section.setAttribute("aria-hidden", "false");
  });
});

// Chiudi popup
document.querySelectorAll(".close-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const section = btn.closest(".popup-section");
    section.classList.remove("show");
    section.setAttribute("aria-hidden", "true");
  });
});
