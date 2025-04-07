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

  Object.values(buttons).forEach(id => {
    const el = document.getElementById(id);
    el.classList.remove("active");
    el.setAttribute("aria-hidden", "true");
  });

  document.querySelectorAll(".menu button").forEach(b => {
    b.classList.remove("active");
    b.setAttribute("aria-expanded", "false");
  });

  const target = document.getElementById(targetId);
  target.classList.add("active");
  target.setAttribute("aria-hidden", "false");
  button.classList.add("active");
  button.setAttribute("aria-expanded", "true");

  lockScroll();

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
    strings: ['XED', ''],
    typeSpeed: 150,
    backSpeed: 80,
    backDelay: 2000,
    loop: true,
    showCursor: true,
    cursorChar: '|'
  });
});

// Chiudi popup cliccando fuori o sulla X
document.addEventListener("click", function (event) {
  const isInsidePopup = event.target.closest("section.active, nav.menu, .menu button, input, textarea, a, iframe, label, form");
  const isCloseBtn = event.target.classList.contains("close-btn");

  if (!isInsidePopup || isCloseBtn) {
    document.querySelectorAll("section.active").forEach(section => {
      section.classList.remove("active");
      section.setAttribute("aria-hidden", "true");
    });
    document.querySelectorAll(".menu button.active").forEach(btn => {
      btn.classList.remove("active");
      btn.setAttribute("aria-expanded", "false");
    });
    unlockScroll();
  }
});
