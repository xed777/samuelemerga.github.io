// SHOWREEL
document.getElementById("showreelBtn").addEventListener("click", function () {
  const section = document.getElementById("showreelContent");
  section.classList.add("show");
  section.setAttribute("aria-hidden", "false");
});

// PROGETTI
document.getElementById("projectsBtn").addEventListener("click", function () {
  const section = document.getElementById("projectsContent");
  section.classList.add("show");
  section.setAttribute("aria-hidden", "false");
});

// CONTATTI
document.getElementById("contactBtn").addEventListener("click", function () {
  const section = document.getElementById("contactForm");
  section.classList.add("show");
  section.setAttribute("aria-hidden", "false");
});

// CHI SONO
document.getElementById("bioBtn").addEventListener("click", function () {
  const section = document.getElementById("bioContent");
  section.classList.add("show");
  section.setAttribute("aria-hidden", "false");
});

// CHIUDI tutte le popup con pulsanti "×"
document.querySelectorAll(".close-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const section = btn.closest("section");
    section.classList.remove("show");
    section.setAttribute("aria-hidden", "true");
  });
});
