var themeButton = document.getElementById("themeButton");
var body = document.body;
var footer = document.getElementsByClassName("footer");

themeButton.addEventListener("click", function() {
  body.classList.toggle("dark");
  Container3.classList.toggle("dark");
  footer.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    themeButton.textContent = "light";
  } else {
    themeButton.textContent = "Dark";
  }
});


var translations = {};

function loadTranslations(callback) {
  fetch("translation.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      translations = data;
      callback();
    })
    .catch(function(error) {
      console.error("Error loading translations:", error);
    });
}

function changeLanguage() {
  var languageButton = document.getElementById("languageButton");
  var selectedLanguage = languageButton.textContent.toLowerCase();

  if (selectedLanguage === "русский") {
    selectedLanguage = "en";
    languageButton.textContent = "English";
  } else {
    selectedLanguage = "ru";
    languageButton.textContent = "Русский";
  }

  if (translations.hasOwnProperty(selectedLanguage)) {
    var translation = translations[selectedLanguage];
    document.getElementById("Furniture").innerHTML = translation.Furniture;
    document.getElementById("Why").innerHTML = translation.Why;
    document.getElementById("Business").innerHTML = translation.Business;
    document.getElementById("Check_Delivery").innerHTML = translation.Check_Delivery;
    document.getElementById("Search").innerHTML = translation.Search;
    document.getElementById("Account").innerHTML = translation.Account;
    document.getElementById("languageButton").innerHTML = translation.languageButton;
    document.getElementById("themeButton").innerHTML = translation.themeButton;
    document.getElementById("Curated_Conv").innerHTML = translation.Curated_Conv;
    document.getElementById("Main_1Text").innerHTML = translation.Main_1Text;
    document.getElementById("Main_1_button").innerHTML = translation.Main_1_button;
    document.getElementById("Shop_by_Room").innerHTML = translation.Shop_by_Room;
    document.getElementById("Living_room").innerHTML = translation.Living_room;
    document.getElementById("Bedroom").innerHTML = translation.Bedroom;
    document.getElementById("Home_Office").innerHTML = translation.Home_Office;
    document.getElementById("Dining_Room").innerHTML = translation.Dining_Room;
    document.getElementById("Main_container3_text").innerHTML = translation.Main_container3_text;
    document.getElementById("Main_container3_text2").innerHTML = translation.Main_container3_text2;
    document.getElementById("Main_container3_text3").innerHTML = translation.Main_container3_text3;
    document.getElementById("Main_container3_text4").innerHTML = translation.Main_container3_text4;
    document.getElementById("Main_container3_text5").innerHTML = translation.Main_container3_text5;
    document.getElementById("Main_container3_text6").innerHTML = translation.Main_container3_text6;
    document.getElementById("Main_container3_text7").innerHTML = translation.Main_container3_text7;
    document.getElementById("Main_container3_text8").innerHTML = translation.Main_container3_text8;
    document.getElementById("Main_container3_text9").innerHTML = translation.Main_container3_text9;
    document.getElementById("Main_container3_text10").innerHTML = translation.Main_container3_text10;
    document.getElementById("Main_container3_text11").innerHTML = translation.Main_container3_text11;
    document.getElementById("Main_container3_text12").innerHTML = translation.Main_container3_text12;
    document.getElementById("Main_container3_text13").innerHTML = translation.Main_container3_text13;
    document.getElementById("Main_container3_text14").innerHTML = translation.Main_container3_text14;
    document.getElementById("Main_container3_text15").innerHTML = translation.Main_container3_text15;
    document.getElementById("Main_container4_text1").innerHTML = translation.Main_container4_text1;
    document.getElementById("Main_4_text1").innerHTML = translation.Main_4_text1;
    document.getElementById("Main_4_text2").innerHTML = translation.Main_4_text2;
    document.getElementById("Main_4_text3").innerHTML = translation.Main_4_text3;
    document.getElementById("Main_4_text4").innerHTML = translation.Main_4_text4;
    document.getElementById("Main_4_text5").innerHTML = translation.Main_4_text5;
    document.getElementById("vtornkib1").innerHTML = translation.vtornkib;
    document.getElementById("pat1").innerHTML = translation.pat;
    document.getElementById("svjaz").innerHTML = translation.svjaz;
    document.getElementById("chtob").innerHTML = translation.chtob;
    document.getElementById("dlya").innerHTML = translation.dlya;
    document.getElementById("tek").innerHTML = translation.tek;
    document.getElementById("poz").innerHTML = translation.poz;
    document.getElementById("openkart").innerHTML = translation.openkart;
    document.getElementById("chas").innerHTML = translation.chas;
    document.getElementById("slova").innerHTML = translation.slova;
    document.getElementById("photo").innerHTML = translation.photo;
    document.getElementById("disain").innerHTML = translation.disain;
  } else {
    console.error("Перевод недоступен для выбранного языка.");
  }
}
loadTranslations(function() {

  var languageButton = document.getElementById("languageButton");
  languageButton.textContent = "Русский";

  var initialLanguage = "ru";
  var initialTranslation = translations[initialLanguage];
  document.getElementById("greeting").innerHTML = initialTranslation.greeting;
  document.getElementById("description").innerHTML = initialTranslation.description;
  document.getElementById("home").innerHTML = initialTranslation.home;
  document.getElementById("about").innerHTML = initialTranslation.about;
  document.getElementById("menu").innerHTML = initialTranslation.menu;
  document.getElementById("drinkmenu").innerHTML = initialTranslation.drinkmenu;
  document.getElementById("drinkmen").innerHTML = initialTranslation.drinkmen;
  document.getElementById("contact").innerHTML = initialTranslation.contact;
  document.getElementById("vauncher").innerHTML = initialTranslation.vauncher;
  document.getElementById("vaunchers").innerHTML = initialTranslation.vaunchers;
  document.getElementById("reserv").innerHTML = initialTranslation.reserv;
  document.getElementById("reservi").innerHTML = initialTranslation.reservi;
  document.getElementById("mesto").innerHTML = initialTranslation.mesto;
  document.getElementById("ivse").innerHTML = initialTranslation.ivse;
  document.getElementById("nashe").innerHTML = initialTranslation.nashe;
  document.getElementById("bron").innerHTML = initialTranslation.bron;
  document.getElementById("jivot").innerHTML = initialTranslation.jivot;
  document.getElementById("nashemenu").innerHTML = initialTranslation.nashemenu;
  document.getElementById("vievmenu").innerHTML = initialTranslation.vievmenu;
  document.getElementById("noback").innerHTML = initialTranslation.noback;
  document.getElementById("back").innerHTML = initialTranslation.back;
  document.getElementById("mi").innerHTML = initialTranslation.mi;
  document.getElementById("nujen").innerHTML = initialTranslation.nujen;
  document.getElementById("gift").innerHTML = initialTranslation.gift;
  document.getElementById("news").innerHTML = initialTranslation.news;
  document.getElementById("budte").innerHTML = initialTranslation.budte;
  document.getElementById("join").innerHTML = initialTranslation.join;
  document.getElementById("real").innerHTML = initialTranslation.real;
  document.getElementById("drugoe").innerHTML = initialTranslation.drugoe;
  document.getElementById("vse").innerHTML = initialTranslation.vse;
  document.getElementById("esli").innerHTML = initialTranslation.esli;
  document.getElementById("vino").innerHTML = initialTranslation.vino;
  document.getElementById("znak").innerHTML = initialTranslation.znak;
  document.getElementById("ja").innerHTML = initialTranslation.ja;
  document.getElementById("noch").innerHTML = initialTranslation.noch;
  document.getElementById("vtornkib").innerHTML = initialTranslation.vtornkib;
  document.getElementById("pat").innerHTML = initialTranslation.pat;
  document.getElementById("vtornkib1").innerHTML = initialTranslation.vtornkib;
  document.getElementById("pat1").innerHTML = initialTranslation.pat;
  document.getElementById("svjaz").innerHTML = initialTranslation.svjaz;
  document.getElementById("chtob").innerHTML = initialTranslation.chtob;
  document.getElementById("dlya").innerHTML = initialTranslation.dlya;
  document.getElementById("tek").innerHTML = initialTranslation.tek;
  document.getElementById("poz").innerHTML = initialTranslation.poz;
  document.getElementById("openkart").innerHTML = initialTranslation.openkart;
  document.getElementById("chas").innerHTML = initialTranslation.chas;
  document.getElementById("slova").innerHTML = initialTranslation.slova;
  document.getElementById("photo").innerHTML = initialTranslation.photo;
  document.getElementById("disain").innerHTML = initialTranslation.disain;
});
