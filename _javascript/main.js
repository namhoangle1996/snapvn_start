'use strict';

document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello Bulma!');
});

var navbarBurger = document.querySelector('.navbar-burger');
navbarBurger.onclick = function (e) {
  this.classList.toggle('is-active');
  document.querySelector('.navbar-menu').classList.toggle("is-active");
};

// modal

// var btnOpenModal =  document.querySelector('.modal-button') ;
// var ModalOpen =  document.querySelector('.modal-button').getAttribute("data-target");

// btnOpenModal.onclick = function(e) {
//   console.log('clicked');
//   document.querySelector("#" + ModalOpen).classList.add("is-active");
// } 

// var btnCloseModal =  document.querySelector('.modal-close');
// btnCloseModal.onclick = function(e) {
//   document.querySelector("#" + ModalOpen).classList.remove("is-active");
// }


// end model
