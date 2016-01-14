var link_contacts = document.querySelector(".btn-contacts");
var popup_feedback = document.querySelector(".feedback-modal");
var close = document.querySelector(".modal-content-close");
var cancel = document.querySelector(".btn-white");
var form = popup_feedback.querySelector("form");
var user_name = popup_feedback.querySelector("[name='name-field']");
var email = popup_feedback.querySelector("[name='email-field']");
var feedback = popup_feedback.querySelector("[name='feedback-field']");
var storage_name = localStorage.getItem("user_name");
var storage_email = localStorage.getItem("email");

link_contacts.addEventListener("click", function(event) {
  event.preventDefault();
  popup_feedback.classList.remove("modal-error");
  popup_feedback.classList.add("modal-show");
  if(storage_name && storage_email) {
      user_name.value = storage_name;
      email.value = storage_email;
      feedback.focus();
  } else {
      user_name.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup_feedback.classList.remove("modal-show");
  popup_feedback.classList.remove("modal-error");
});

cancel.addEventListener("click", function(event) {
  event.preventDefault();
  popup_feedback.classList.remove("modal-show");
});

form.addEventListener("submit", function(event) {

  if(!user_name.value || !email.value || !feedback.value) {
    event.preventDefault();
    popup_feedback.classList.add("modal-error");
  }
  else {

    localStorage.setItem("user_name", user_name.value);
    localStorage.setItem("email", email.value);
  }
});

window.addEventListener("keydown", function (event) {
  if(event.keyCode === 27) {
    if(popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

