var themeButton = document.getElementById("themeButton");
  var body = document.body;
  var Accountmenu=document.getElementById("Account_name");
function toggleTheme() {
  localStorage.setItem('body-theme','light')
body.classList.toggle("dark");
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
var transparent=document.getElementById("transparent");
var Main_1_button=document.getElementById("Main_1_button");
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



let arrowleft = document.getElementById("arrow-left");
let arrowright = document.getElementById("arrow-right");
let slider = document.querySelector(".Main_container6_rectangles");
slider.classList.add('slide-transition');
let slideWidth=0;
let i = 0;
let m=0;

  
    slideWidth = 2;
  
  if (document.documentElement.clientWidth === 1280) {
    slideWidth = 2;
  } 
   if (document.documentElement.clientWidth === 768) {
    slideWidth = 3;
    m=10;
  } 
   if (document.documentElement.clientWidth === 320) {
    slideWidth = 6;
    m=10;
  } 

arrowright.addEventListener('click', function () {
  
  
  if (window.innerWidth <= 1920) {
    slideWidth = 2;
  } 
  if (document.documentElement.clientWidth <= 1280) {
    slideWidth = 2;
  } 
   if (document.documentElement.clientWidth <= 768) {
    slideWidth = 3;
  } 
   if (document.documentElement.clientWidth <= 320) {
    slideWidth = 6;
    m=10;
  } 

    if (i < slideWidth - 1) {
      i++;
    } else {
      i = 0;
    }
    slider.style.transform = `translateX(-${i * document.documentElement.clientWidth + m}px)`;
    console.log(slideWidth);
  
});

arrowleft.addEventListener('click', function () {
 
  
  if (window.innerWidth === 1920) {
    slideWidth = 2;
  } 
  if (document.documentElement.clientWidth === 1280) {
    slideWidth = 2;
  } 
   if (document.documentElement.clientWidth === 768) {
    slideWidth = 3;
  } 
   if (document.documentElement.clientWidth === 320) {
    slideWidth = 6;
    m=10;
  } 

    if (i > 0) {
      i--;
    } else {
      i = slideWidth - 1;
    }
    slider.style.transform = `translateX(-${i * (document.documentElement.clientWidth+m)}px)`;
    console.log(slideWidth);
  
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
var registeredUsers;

fetch("Logins.json")
    .then(response => response.json())
    .then(data => {
        // Проверяем, есть ли уже данные в localStorage
        registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
        // Если данных нет, добавляем их из JSON файла
        if (registeredUsers.length === 0) {
            registeredUsers = data;
            // Сохраняем данные в localStorage
            localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
            console.log("User data added from JSON file to localStorage:", data);
        }
    })
    .catch(error => console.error("Error loading JSON file:", error));


document.addEventListener("DOMContentLoaded", function() {
  var registerForm = document.getElementById("Register");
  var phoneInput = registerForm.querySelector("#phone");
  var emailInput = registerForm.querySelector("#email");
  var dobInput = registerForm.querySelector("#dob");
  var passwordChoiceSelect = registerForm.querySelector("#passwordChoice");
  var manualPasswordFields = registerForm.querySelector("#manualPasswordFields");
  var passwordInput = registerForm.querySelector("#password");
  var confirmPasswordInput = registerForm.querySelector("#confirmPassword");
  var firstNameInput = registerForm.querySelector("#Firstname");
  var secondNameInput = registerForm.querySelector("#Secondname");
  var fatherNameInput = registerForm.querySelector("#Fathername");
  var nicknameInput = registerForm.querySelector("#nickname");
  var generateNicknameButton = registerForm.querySelector("#generateNickname");
  var agreementCheckbox = registerForm.querySelector("#agreement");
  var registerButton = registerForm.querySelector("#registerButton");

  registerButton.addEventListener("click", function() {
      if (!agreementCheckbox.checked) {
          alert("Please read and accept the User Agreement.");
          return;
      }

      var phone = phoneInput.value;
      var email = emailInput.value;
      var dob = dobInput.value;
      var passwordChoice = passwordChoiceSelect.value;
      var password = passwordInput.value;
      var confirmPassword = confirmPasswordInput.value;
      var firstName = firstNameInput.value;
      var secondName = secondNameInput.value;
      var fatherName = fatherNameInput.value;
      var nickname = nicknameInput.value;

      var users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    var emailExists = users.some(user => user.email === email);

    
      // Валидация данных
      if (!/^(\+375)\d{9}$/.test(phone)) {
          alert("Please enter a valid phone number in the format +375XXXXXXXXX.");
          return;
      }

      var today = new Date();
      var dobDate = new Date(dob);
      var age = today.getFullYear() - dobDate.getFullYear();
      if (today.getMonth() < dobDate.getMonth() || (today.getMonth() === dobDate.getMonth() && today.getDate() < dobDate.getDate())) {
          age--;
      }
      if (age < 16) {
          alert("You must be at least 16 years old to register.");
          return;
      }

      if (passwordChoice === "manual" && password !== confirmPassword) {
          alert("Passwords do not match.");
          return;
      }
      else{
        let length=15;
        var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_+=%@!#$^&*()";
        var password = "";
        for (var i = 0; i < length; i++) {
            var randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }     
      }
      // Остальная валидация пароля может быть добавлена здесь

      if (emailExists) {
        alert("This email is already registered.");
        return;
    }
    if (!email) {
      alert("E-Mail is necessary.");
      return;
  }
  if (!dob) {
      alert("Date of Birth is necessary.");
      return;
  }
  if (!password) {
      alert("Password is necessary.");
      return;
  }
  if (!firstName) {
      alert("First Name is necessary.");
      return;
  }
  if (!secondName) {
      alert("Second Name is necessary.");
      return;
  }
  if (!nickname) {
      alert("Nickname is necessary.");
      return;
  }

      // Создание объекта пользователя
      var newUser = {
          email: email,
          FirstName: firstName,
          LastName: secondName,
          FatherName: fatherName,
          NickName: nickname,
          PhoneNumber: phone,
          password: password
      };
      registeredUsers.push(newUser);
      // Сохраняем обновленный массив в localStorage
      localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
      // Получение данных из localStorage
      
  });

  generateNicknameButton.addEventListener("click", function() {
      var firstName = firstNameInput.value;
      var secondName = secondNameInput.value;
      var nickname = generateNickname(firstName, secondName);
      nicknameInput.value = nickname;
  });

  passwordChoiceSelect.addEventListener("change", function() {
      if (passwordChoiceSelect.value === "auto") {
          manualPasswordFields.style.display = "none";
      } else {
          manualPasswordFields.style.display = "block";
      }
  });
});

function generateNickname(firstName, secondName) {
  var randomSuffix = Math.floor(Math.random() * 10000);
  return "User" + randomSuffix;
}
var Main_1=document.getElementById("Main_container1");
var Acc_Name = document.getElementById("Account");
document.addEventListener("DOMContentLoaded", function() {
  var loginForm = document.getElementById("Login");
  var emailInput = loginForm.querySelector("input[type='email']");
  var passwordInput = loginForm.querySelector("input[type='password']");
  var loginButton = loginForm.querySelector("button");
  

  // При загрузке страницы пытаемся получить данные о пользователе из localStorage
  var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  // Если данные о пользователе есть в localStorage, автоматически входим
  if (loggedInUser && loggedInUser.email && loggedInUser.password) {
      console.log("Вход выполнен автоматически для пользователя: " + loggedInUser.email);
      Acc_Name.textContent = loggedInUser.FirstName;
      // Здесь можно добавить дополнительные действия после успешного входа
  }

  loginButton.addEventListener("click", function() {
      var email = emailInput.value;
      var password = passwordInput.value;

      // Получаем данные о пользователе из localStorage
      var users = JSON.parse(localStorage.getItem("registeredUsers")) || [];

      // Проверяем, есть ли введенный email и пароль в localStorage
      var user = users.find(user => user.email === email && user.password === password);
      if (user) {
          console.log("Успешный вход для пользователя: " + user.email);
          localStorage.setItem("Acc_Name",user.FirstName);
          Acc_Name.textContent=localStorage.getItem("Acc_Name");
          Acc_Name.id="Acc_Name"
          loginForm.classList.remove("open");
          transparent.classList.remove("open");
          GetStartBut.classList.toggle("user");
          Main_container2_rectangles.classList.remove("nolog");
          logoutbut.classList.remove("nolog");
          // Сохраняем данные пользователя в localStorage
          localStorage.setItem("loggedInUser", JSON.stringify(user));
          // Здесь можно добавить дополнительные действия после успешного входа
      } else {
          console.log("Неверный email или пароль");
          // Здесь можно добавить обработку случая, когда введенные данные неверны
      }
      if(user&&user.NickName==="Admin"){
        console.log("Успешный вход для пользователя: " + user.email);
          localStorage.setItem("Acc_Name",user.FirstName);
          Acc_Name.textContent=localStorage.getItem("Acc_Name");
          Acc_Name.id="Acc_Name"
          loginForm.classList.remove("open");
          transparent.classList.remove("open");
          GetStartBut.classList.toggle("user");
          Main_1.classList.toggle("Admin");
      }
  });


});

var GetStartBut=document.getElementById("Main_1_button");
var logoutbut=document.getElementById("Log_out");
var Main_container2_rectangles=document.getElementById("Main_container2_rectangles");
if(localStorage.getItem("loggedInUser"))
  {
    GetStartBut.classList.toggle("user");
    Acc_Name.textContent=localStorage.getItem("Acc_Name");
    Acc_Name.id="Acc_Name";
    Main_container2_rectangles.classList.remove("nolog");
    logoutbut.classList.remove("nolog");
  }
  else{
    GetStartBut.classList.remove("user");
    Main_container2_rectangles.classList.add("nolog");
    logoutbut.classList.add("nolog");
  }
  
  if (localStorage.getItem("Acc_Name") === "Admin"){
    Main_1.classList.toggle("Admin");
    GetStartBut.classList.toggle("user");
    Acc_Name.textContent=localStorage.getItem("Acc_Name");
    Acc_Name.id="Acc_Name"
  }

  logoutbut.addEventListener("click", function() {
    Acc_Name.textContent="Account";
    Acc_Name.id="Account";
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("Acc_Name");
    GetStartBut.classList.remove("user");
      Main_1.classList.remove("Admin");
      Main_container2_rectangles.classList.add("nolog");
      logoutbut.classList.add("nolog");
  });


  const pagination_cont = document.querySelector('.pagination_cont');
const pagination = pagination_cont.querySelector('.pagination');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const currentSlide = document.getElementById('current-slide');
const totalSlides = document.getElementById('total-slide');
var lang1=localStorage.getItem("language")

let slidesData; 
let currentIndex1 = 0;

fetch('slides.json')
  .then(response => response.json())
  .then(data => {
    slidesData = data.slides;
    totalSlides.textContent = slidesData.length;

    prevButton.addEventListener('click', () => {
      changeSlide(currentIndex1 - 1);
    });

    nextButton.addEventListener('click', () => {
      changeSlide(currentIndex1 + 1);
    });

    function changeSlide(index) {
      if (index < 0) {
        index = slidesData.length - 1;
      } else if (index >= slidesData.length) {
        index = 0; 
      }

      currentIndex1 = index;
      showSlide(currentIndex1);
      updatePagination();
    }

    function showSlide(index) {
      if(index==5){
        applyTranslations(lang1);
        slide = slidesData[5];
        pagination_cont.innerHTML = `
      <div class="${slide.div_class}">
      <button id="${slide.id_button}">${slide.button_text}</button>
  </div>
      `;
      }
      else{
        applyTranslations(lang1);
        const slide = slidesData[index];
        pagination_cont.innerHTML = `
        <div class="${slide.div_class}">
        <div class="${slide.stars}">
            <img src="${slide.src}" alt="">
            <img src="${slide.src}" alt="">
            <img src="${slide.src}" alt="">
            <img src="${slide.src}" alt="">
            <img src="${slide.src}" alt="">
        </div>
        <p id="${slide.id_text_1}" class="${slide.text_1_class}">${slide.text_1}</p>
        <p id="${slide.id_text_2}" class="${slide.text_2_class}">${slide.text_2}</p>
    </div>
        `;
      }
      
    }

    function updatePagination() {
      applyTranslations(lang1);
      currentSlide.textContent = currentIndex1 + 1;
    }

    showSlide(currentIndex1);
    updatePagination();
  })
  .catch(error => {
    console.error('Ошибка загрузки JSON-файла:', error);
  });
  
  var resetset= document.getElementById("reset");
  resetset.addEventListener("click", function() {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("language");
    localStorage.removeItem("body-theme");
    location. reload() 
  });