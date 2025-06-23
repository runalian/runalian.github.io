
const supportedLangs = ["fr", "en", "ar"];

async function loadContent(lang) {
  try {
    const res = await fetch("lang.json");
    const data = await res.json();

    // Maj conten
    document.getElementById("title").textContent = data.title[lang] || data.title.fr;
    document.getElementById("intro").textContent = data.introduction[lang] || data.introduction.fr;

    document.documentElement.lang = lang;
    document.body.dir = lang === "ar" ? "rtl" : "ltr";

  } catch (error) {
    console.error("Erreur lors du chargement du contenu multilingue:", error);
  }
}

function setLanguage(lang) {
  if (!supportedLangs.includes(lang)) return;
  sessionStorage.setItem("lang", lang);
  const url = new URL(window.location);
  url.searchParams.set("lang", lang);
  window.location.replace(url);
}

window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);

  let lang = urlParams.get("lang") ||
             sessionStorage.getItem("lang") ||
             (navigator.languages && navigator.languages.length ? navigator.languages[0].slice(0, 2) : navigator.language.slice(0, 2)) ||
             "fr";

  if (!supportedLangs.includes(lang)) lang = "fr";

  // Stocke la langue pour les prochaines visites
  sessionStorage.setItem("lang", lang);

  loadContent(lang);
});
