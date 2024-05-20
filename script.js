var themeButton = document.getElementById("themeButton");
var body = document.body;
var footer = document.getElementsByClassName("footer");

themeButton.addEventListener("click", function() {
  body.classList.toggle("dark");
  footer.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    themeButton.textContent = "light";
  } else {
    themeButton.textContent = "Dark";
  }
});

var transparent=document.getElementById("transparent");
var Main_1_button=document.getElementById("Main_1_button");
var Accountmenu=document.getElementById("Account_name");
Main_1_button.addEventListener("click", function() {
  transparent.classList.toggle("open");
  Accountmenu.classList.toggle("open");
});

// Объект с текущими переводами
var translations = {};

// Загрузка JSON файла с переводами
function loadTranslations() {
  return fetch('translate.json')
    .then(response => response.json())
    .then(data => {
      translations = data;
    })
    .catch(error => console.error('Error loading translations:', error));
}

// Функция для переключения языка
function toggleLanguage() {
  var currentLanguage = document.documentElement.lang || 'en';

  if (currentLanguage === 'en') {
    applyTranslations('ru');
    document.documentElement.lang = 'ru';
    document.getElementById('languageButton').textContent = 'Русский';
  } else {
    applyTranslations('en');
    document.documentElement.lang = 'en';
    document.getElementById('languageButton').textContent = 'English';
  }
}

// Применение переводов на странице
function applyTranslations(lang) {
  var translation = translations[lang];

  // Изменение текста элементов по их data-translation-key
  var elements = document.querySelectorAll('[id]');
  elements.forEach(function(element) {
    var translationKey = element.getAttribute('id');

    if (translationKey && translation[translationKey]) {
      element.innerHTML = translation[translationKey];
    }
  });
}

// Загрузка переводов при загрузке страницы
loadTranslations().then(() => {
  var userLanguage = navigator.language.substr(0, 2); // Определяем язык пользователя из настроек браузера

  if (userLanguage === 'ru') {
    applyTranslations('ru');
    document.documentElement.lang = 'ru';
    document.getElementById('languageButton').textContent = 'Русский';
  } else {
    applyTranslations('en');
    document.documentElement.lang = 'en';
    document.getElementById('languageButton').textContent = 'English';
  }
});