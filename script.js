function toggleMenu() {
  document.body.classList.toggle('menu-open');
}

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

function showPage(pageId) {
  const main = document.getElementById('mainContent');
  const pages = ['aboutPage', 'contactPage'];

  fadeOut(main, () => {
    pages.forEach(id => {
      const page = document.getElementById(id);
      page.classList.toggle('active', id === pageId);
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

// Esempio di utilizzo:
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
