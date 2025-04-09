const buttons = {
  showreelBtn: "showreelContent",
  contactBtn: "contactForm",
  bioBtn: "bioContent"
};

let isTransitioning = false;

const lockScroll = () => {
  document.body.style.overflow = "hidden";
};

const unlockScroll = () => {
  document.body.style.overflow = "";
};

function toggleSection(targetId, button) {
  if (isTransitioning) return;
  isTransitioning = true;

  // Chiudi tutte le sezioni attive
  Object.values(buttons).forEach(id => {
    const el = document.getElementById(id);
    el.classList.remove("active");
    el.setAttribute("aria-hidden", "true");

    const popup = el.querySelector(".popup");
    if (popup) popup.classList.remove("show");
  });

  // Disattiva tutti i bottoni
  document.querySelectorAll(".menu button").forEach(b => {
    b.classList.remove("active");
    b.setAttribute("aria-expanded", "false");
  });

  // Apri la sezione desiderata
  const target = document.getElementById(targetId);
  target.classList.add("active");
  target.setAttribute("aria-hidden", "false");

  const popup = target.querySelector(".popup");
  if (popup) popup.classList.add("show");

  button.classList.add("active");
  button.setAttribute("aria-expanded", "true");

  lockScroll();

  // Sblocca transizione dopo l'animazione
  setTimeout(() => {
    isTransitioning = false;
  }, 400);
}

// Attiva pulsanti di navigazione
Object.keys(buttons).forEach(btnId => {
  const btn = document.getElementById(btnId);
  btn.addEventListener("click", e => {
    e.preventDefault();
    toggleSection(buttons[btnId], btn);
  });
});

// Avvia Typed.js per il logo animato
document.addEventListener("DOMContentLoaded", function () {
  new Typed('#typed', {
    strings: [
      "Ciao, sono Samuele Merga.",
      "Creo video, grafiche e identità digitali.",
      "Editing video. Design. Web.",
      "Benvenuto nel mio mondo visivo ✨"
    ],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
    showCursor: true,
    cursorChar: '|'
  });
});

// Chiudi modale cliccando fuori o sulla X
document.addEventListener("click", function (event) {
  const isInsidePopup = event.target.closest("section.active, nav.menu, .menu button, input, textarea, a, iframe, label, form");
  const isCloseBtn = event.target.classList.contains("close-btn");

  if (!isInsidePopup || isCloseBtn) {
    document.querySelectorAll("section.active").forEach(section => {
      section.classList.remove("active");
      section.setAttribute("aria-hidden", "true");

      const popup = section.querySelector(".popup");
      if (popup) popup.classList.remove("show");
    });

    document.querySelectorAll(".menu button.active").forEach(btn => {
      btn.classList.remove("active");
      btn.setAttribute("aria-expanded", "false");
    });

    unlockScroll();
  }
});
