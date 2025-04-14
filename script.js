function toggleMenu() {
  document.body.classList.toggle('menu-open');
}

function showAboutPage() {
  const main = document.getElementById('mainContent');
  const about = document.getElementById('aboutPage');
  const contact = document.getElementById('contactPage');

  main.style.opacity = '1';
  main.style.transition = 'opacity 0.4s ease';
  main.style.opacity = '0';

  setTimeout(() => {
    main.style.display = 'none';
    contact.classList.remove('active');
    about.classList.add('active');
    document.body.classList.remove('menu-open');
  }, 400);
}

function hideAboutPage() {
  const main = document.getElementById('mainContent');
  const about = document.getElementById('aboutPage');

  about.classList.remove('active');
  main.style.display = 'grid';
  main.style.opacity = '0';
  main.style.transition = 'opacity 0.4s ease';

  setTimeout(() => {
    main.style.opacity = '1';
  }, 10);
}

function showContactPage() {
  const main = document.getElementById('mainContent');
  const contact = document.getElementById('contactPage');
  const about = document.getElementById('aboutPage');

  main.style.opacity = '1';
  main.style.transition = 'opacity 0.4s ease';
  main.style.opacity = '0';

  setTimeout(() => {
    main.style.display = 'none';
    about.classList.remove('active');
    contact.classList.add('active');
    document.body.classList.remove('menu-open');
  }, 400);
}

function hideContactPage() {
  const main = document.getElementById('mainContent');
  const contact = document.getElementById('contactPage');

  contact.classList.remove('active');
  main.style.display = 'grid';
  main.style.opacity = '0';
  main.style.transition = 'opacity 0.4s ease';

  setTimeout(() => {
    main.style.opacity = '1';
  }, 10);
}
