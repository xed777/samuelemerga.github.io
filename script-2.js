
// JS per aggiungere funzionalità di scroll smooth
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
});
