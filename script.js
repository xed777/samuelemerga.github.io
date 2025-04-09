const buttons = {
  showreelBtn: "showreelContent",
  contactBtn: "contactForm",
  bioBtn: "bioContent"
};

Object.keys(buttons).forEach(btnId => {
  const btn = document.getElementById(btnId);
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    Object.values(buttons).forEach(id => document.getElementById(id).classList.remove("active"));
    Object.keys(buttons).forEach(id => document.getElementById(id).classList.remove("active"));
    document.getElementById(buttons[btnId]).classList.add("active");
    btn.classList.add("active");

    document.body.setAttribute('data-popup-opened', 'true');
    setTimeout(() => {
      document.body.removeAttribute('data-popup-opened');
    }, 100);
  });
});

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

document.addEventListener("click", function (event) {
  const isInside = event.target.closest("section.active, nav.menu, .menu button, input, textarea, a, iframe, label, form");
  const justOpened = document.body.getAttribute('data-popup-opened');
  if (!isInside && !justOpened) {
    document.querySelectorAll("section.active").forEach(s => s.classList.remove("active"));
    document.querySelectorAll(".menu button.active").forEach(b => b.classList.remove("active"));
  }
});
