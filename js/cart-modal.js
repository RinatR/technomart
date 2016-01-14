var link_cart = document.querySelectorAll(".btn-action-buy");
var popup_cart = document.querySelector(".cart-modal");
var close = document.querySelector(".modal-content-close");
var checkout_button = document.querySelector(".btn-red");
var continue_button = document.querySelector(".btn-white");

for( var i=0; i<link_cart.length; i++) {
  link_cart[i].addEventListener("click", function(event) {
    event.preventDefault();
    popup_cart.classList.add("modal-show");
  });
}

close.addEventListener("click", function(event) {
  popup_cart.classList.remove("modal-show");
});

checkout_button.addEventListener("click", function(event) {
  event.preventDefault();
  popup_cart.classList.remove("modal-show");
});

continue_button.addEventListener("click", function(event) {
  event.preventDefault();
  popup_cart.classList.remove("modal-show");
});

window.addEventListener("keydown", function (event) {
  if(event.keyCode === 27) {
    if(popup_cart.classList.contains("modal-show")) {
      popup_cart.classList.remove("modal-show");
      popup_cart.classList.remove("modal-error");
    }
  }
});
