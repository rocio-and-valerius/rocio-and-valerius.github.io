window.currentLangData = {};

// Fetch language data
async function fetchLanguageData(lang) {
  const response = await fetch(`/language/${lang}.json`);
  return response.json();
}

// Set language preference
function setLanguagePreference(lang) {
  localStorage.setItem("language", lang);
}

// Update content based on selected language
function updateContent(langData) {
  // Text content
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (langData[key]) {
      element.innerHTML = langData[key];
    }
  });
  // Placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (langData[key]) {
      element.placeholder = langData[key];
    }
  });

  if (countdownFinished) {
    const countdownEl = document.getElementById("countdown");
    if (countdownEl) {
      countdownEl.innerHTML = langData.logo_countdown_done;
    }
  }
}

// Change language
async function changeLanguage(lang) {
  setLanguagePreference(lang);
  const langData = await fetchLanguageData(lang);
  window.currentLangData = langData;
  updateContent(langData);
}

// Call updateContent() on page load
window.addEventListener("DOMContentLoaded", async () => {
  const userPreferredLanguage = localStorage.getItem("language") || "de";
  const langData = await fetchLanguageData(userPreferredLanguage);
  window.currentLangData = langData;
  updateContent(langData);
});
