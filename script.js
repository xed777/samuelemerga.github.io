const openBtns = {
  showreelBtn: "showreelContent",
  projectsBtn: "projectsContent",
  contactBtn: "contactForm",
  bioBtn: "bioContent",
};

// Apri popup
Object.entries(openBtns).forEach(([btnId, popupId]) => {
  document.getElementById(btnId).addEventListener("click", () => {
    document.querySelectorAll(".popup-section").forEach(p => {
      p.classList.remove("show");
      p.setAttribute("aria-hidden", "true");
    });
    const popup = document.getElementById(popupId);
    popup.classList.add("show");
    popup.setAttribute("aria-hidden", "false");
  });
});

// Chiudi popup
document.querySelectorAll(".close-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const popup = btn.closest(".popup-section");
    popup.classList.remove("show");
    popup.setAttribute("aria-hidden", "true");
  });
});
