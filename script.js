// === MENU ===
function toggleMenu() {
  document.body.classList.toggle('menu-open');
}

function toggleMobileMenu() {
  const nav = document.getElementById('mobileNav');
  nav.classList.toggle('active');
}

// === TRANSIZIONI ===
function fadeOut(element, callback) {
  element.style.transition = 'opacity 0.4s ease';
  element.style.opacity = '0';

  setTimeout(() => {
    element.style.display = 'none';
    if (callback) callback();
  }, 400);
}

function fadeIn(element, displayType = 'grid') {
  element.style.display = displayType;
  element.style.transition = 'opacity 0.4s ease';
  element.style.opacity = '0';

  setTimeout(() => {
    element.style.opacity = '1';
  }, 10);
}

// === NAVIGAZIONE TRA LE PAGINE ===
function showPage(pageId) {
  const main = document.getElementById('mainContent');
  const pages = ['aboutPage', 'contactPage', 'projectsSection'];

  fadeOut(main, () => {
    pages.forEach(id => {
      const page = document.getElementById(id);
      if (page) page.classList.toggle('active', id === pageId);
    });

    document.body.classList.remove('menu-open');
  });
}

function hidePage(pageId) {
  const main = document.getElementById('mainContent');
  const page = document.getElementById(pageId);

  page.classList.remove('active');
  fadeIn(main);
}

function showAboutPage() {
  showPage('aboutPage');
}

function hideAboutPage() {
  hidePage('aboutPage');
}

function showContactPage() {
  showPage('contactPage');
}

function hideContactPage() {
  hidePage('contactPage');
}

function showProjectsPage() {
  showPage('projectsSection');
}

function hideProjectsPage() {
  hidePage('projectsSection');
}

// === MODALI ===
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

// === CHIUSURA MODALI CON ESCAPE ===
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      modal.style.display = 'none';
    });
    document.body.style.overflow = '';
  }
});
