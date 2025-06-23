
const supportedLangs = ["fr", "en", "ar"];

async function loadContent(lang) {
  try {
    const res = await fetch("lang.json");
    const data = await res.json();

    // Maj conten
    document.getElementById("title").textContent = data.title[lang] || data.title.fr;
    document.getElementById("intro").textContent = data.introduction[lang] || data.introduction.fr;

    document.getElementById("hdr-edu").textContent = data.heading_education[lang] || data.heading_education.fr;
    document.getElementById("edu-bac-title").textContent = data.edu_bac_title[lang] || data.edu_bac_title.fr;
    document.getElementById("edu-bac-desc").textContent = data.edu_bac_desc[lang] || data.edu_bac_desc.fr;
    document.getElementById("edu-cpi-title").textContent = data.edu_cpi_title[lang] || data.edu_cpi_title.fr;
    document.getElementById("edu-cpi-desc").textContent = data.edu_cpi_desc[lang] || data.edu_cpi_desc.fr;
    document.getElementById("edu-ing-title").textContent = data.edu_ing_title[lang] || data.edu_ing_title.fr;
    document.getElementById("edu-ing-desc").textContent = data.edu_ing_desc[lang] || data.edu_ing_desc.fr;
    
    document.getElementById("hdr-proj").textContent = data.heading_projects[lang] || data.heading_projects.fr;
    document.getElementById("prj-ga-title").textContent = data.project_ga_title[lang] || data.project_ga_title.fr;
    document.getElementById("prj-ga-desc").textContent = data.project_ga_desc[lang] || data.project_ga_desc.fr;
    document.getElementById("prj-tet-title").textContent = data.project_tet_title[lang] || data.project_tet_title.fr;
    document.getElementById("prj-tet-desc").textContent = data.project_tet_desc[lang] || data.project_tet_desc.fr;
    document.getElementById("prj-2k-title").textContent = data.project_2k_title[lang] || data.project_2k_title.fr;
    document.getElementById("prj-2k-desc").textContent = data.project_2k_desc[lang] || data.project_2k_desc.fr;

    document.getElementById("hdr-skl").textContent = data.heading_skills[lang] || data.heading_skills.fr;
    document.getElementById("skl-lang").textContent = data.skills_languages[lang] || data.skills_languages.fr;
    document.getElementById("skl-office").textContent = data.skills_office[lang] || data.skills_office.fr;
    
    document.getElementById("hdr-lang").textContent = data.heading_languages[lang] || data.heading_languages.fr;
    document.getElementById("lang-en").textContent = data.language_english[lang] || data.language_english.fr;
    document.getElementById("lang-de").textContent = data.language_german[lang] || data.language_german.fr;

    document.getElementById("hdr-interest").textContent = data.heading_interests[lang] || data.heading_interests.fr;
    document.getElementById("int-vg").textContent = data.interest_games[lang] || data.interest_games.fr;
    document.getElementById("int-chess").textContent = data.interest_chess[lang] || data.interest_chess.fr;
    document.getElementById("int-manga").textContent = data.interest_manga[lang] || data.interest_manga.fr;


    document.documentElement.lang = lang;
    // dir. lecture
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
