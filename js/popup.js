var loginLink = document.querySelector(".login-link");
var mapLink = document.querySelector(".map-link");
var popup = document.querySelector(".modal-login");
var popupMap = document.querySelector(".modal-map");
var closePopup = popup.querySelector(".modal-login .modal-close");
var closeMapPopup = popupMap.querySelector(".modal-map .modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});

closePopup.addEventListener("click", function (evt) {
  evt.preventDefault();  
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");  
});

closeMapPopup.addEventListener("click", function (evt) {
  evt.preventDefault();    
  popupMap.classList.remove("modal-show"); 
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
