document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello Bulma!');
});
var navbarBurger = document.querySelector('.navbar-burger');
navbarBurger.onclick = function(e) {
  this.classList.toggle('is-active');
  document.querySelector('.navbar-menu').classList.toggle("is-active");

} 
