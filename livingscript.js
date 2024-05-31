var themeButton = document.getElementById("themeButton");
  var body = document.body;
  var burgeropened=document.getElementById("burger_open");
function toggleTheme() {
  localStorage.setItem('body-theme','light')
body.classList.toggle("dark");
burgeropened.classList.toggle("dark");

if (body.classList.contains("dark")) {
  localStorage.setItem('body-theme','dark')
} else {
  localStorage.setItem('body-theme','light')
}

}
if (localStorage.getItem('body-theme') === 'dark')
    {
      body.classList.toggle("dark");
    }
    else{
      body.classList.remove("dark");
    }
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
  localStorage.setItem('language','en');
  if (currentLanguage === 'en') {
    applyTranslations('ru');
    document.documentElement.lang = 'ru';
    document.getElementById('languageButton').textContent = 'Русский';
    localStorage.setItem('language','ru');
  } else {
    applyTranslations('en');
    document.documentElement.lang = 'en';
    document.getElementById('languageButton').textContent = 'English';
    localStorage.setItem('language','en');
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
  if (localStorage.getItem('language')==='en') {
    applyTranslations('en');
    document.documentElement.lang = 'en';
    document.getElementById('languageButton').textContent = 'English';
    
  } else {
    applyTranslations('ru');
    document.documentElement.lang = 'ru';
    document.getElementById('languageButton').textContent = 'Русский';
  }
});
var burger=document.getElementById("burger");
var burgeropen=document.getElementById("burger_open")
var feather=document.getElementById("feather")
burger.addEventListener("click", function() {
  feather.classList.toggle("whenburger");
  burger.classList.toggle("open");
  burgeropen.classList.toggle("open");
});
var closebutton3=document.getElementById("close3")
closebutton3.addEventListener("click", function() {
  burgeropen.classList.remove("open");
  feather.classList.toggle("whenburger");
  burger.classList.toggle("open");
});
var Acc_Name = document.getElementById("Account");
var Main_text=document.getElementById("Site_Name");
var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
if(loggedInUser&&loggedInUser.NickName==="Admin"){
  console.log("Успешный вход для пользователя: " + loggedInUser.email);
    localStorage.setItem("Acc_Name",loggedInUser.FirstName);
    Acc_Name.textContent=localStorage.getItem("Acc_Name");
    Acc_Name.id="Acc_Name"
    Main_text.classList.toggle("Admin");
}
var logoutbut=document.getElementById("Log_out");
logoutbut.addEventListener("click", function() {
  Acc_Name.textContent="Account";
  Acc_Name.id="Account";
  localStorage.removeItem("loggedInUser");
  localStorage.removeItem("Acc_Name");
  Main_text.classList.remove("Admin");
});