var themeButton = document.getElementById("themeButton");
var body = document.body;
var footer = document.getElementsByClassName("footer");

themeButton.addEventListener("click", function() {
  body.classList.toggle("dark");
  footer.classList.toggle("dark");
  if (body.classList.contains(".dark")) {
    themeButton.textContent = "Light";
  } else {
    themeButton.textContent = "Dark";
  }
});

var transparent=document.getElementById("transparent");
var Main_1_button=document.getElementById("Main_1_button");
var Accountmenu=document.getElementById("Account_name");
Main_1_button.addEventListener("click", function() {
  transparent.classList.add("open");
  Accountmenu.classList.add("open");
});
var closebutton=document.getElementById("close")
closebutton.addEventListener("click", function() {
  transparent.classList.remove("open");
  Accountmenu.classList.remove("open");
});
var login=document.getElementById("Login")
var LoginButton=document.getElementById("LoginButton")
LoginButton.addEventListener("click", function() {
  login.classList.add("open");
  transparent.classList.add("open");
  Accountmenu.classList.remove("open");
});
var closebutton1=document.getElementById("close1")
closebutton1.addEventListener("click", function() {
  transparent.classList.remove("open");
  login.classList.remove("open");
});


var register=document.getElementById("Register")
var RegisterButton=document.getElementById("RegisterButton")
RegisterButton.addEventListener("click", function() {
  register.classList.add("open");
  transparent.classList.add("open");
  Accountmenu.classList.remove("open");
});
var closebutton2=document.getElementById("close2")
closebutton2.addEventListener("click", function() {
  transparent.classList.remove("open");
  register.classList.remove("open");
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
    applyTranslations('en');
    document.documentElement.lang = 'en';
    document.getElementById('languageButton').textContent = 'English';
  } else {
    applyTranslations('ru');
    document.documentElement.lang = 'ru';
    document.getElementById('languageButton').textContent = 'Русский';
  }
});


let arrowleft = document.getElementById("arrow-left");
let arrowright = document.getElementById("arrow-right");
let slider = document.querySelector(".Main_container6_rectangles");

let slideWidth;
let i = 0;
function updateCountOfItems() {
  if (window.innerWidth <= 1280) {
    slideWidth = 5;
  } 
  else{
    slideWidth=2;
  }
}

updateCountOfItems();

arrowright.addEventListener('click',function(){

  if(i < slideWidth -1){
    i++;
  }
  else{
    i =0;
  }
    slider.style.transform = `translateX(-${i*1927}px)`;
    console.log(i);
}

)
arrowleft.addEventListener('click',function(){

  if(i > 0){
    i--;
  }
  else{
    i = slideWidth -1;
  }
  slider.style.transform = `translateX(-${i*1927}px)`;
  console.log(i);
}
)