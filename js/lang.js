function changeLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.dataset.key;
    if(translations[lang][key]) el.textContent = translations[lang][key];
  });

  const titleEl = document.querySelector('title[data-key]');
  if(titleEl) titleEl.textContent = translations[lang][titleEl.dataset.key];
}
