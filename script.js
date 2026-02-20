const langs = document.querySelectorAll('.lang');
const html = document.getElementById('htmlRoot');

langs.forEach(lang => {
  lang.addEventListener('click', () => {
    document.querySelector('.lang.active').classList.remove('active');
    lang.classList.add('active');

    if (lang.dataset.lang === 'ar') {
      html.setAttribute('dir', 'rtl');
      html.setAttribute('lang', 'ar');
    } else {
      html.setAttribute('dir', 'ltr');
      html.setAttribute('lang', 'en');
    }
  });
});
