document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello Bulma!');
});

var navbarBurger = document.querySelector('.navbar-burger');
navbarBurger.onclick = function(e) {
  this.classList.toggle('is-active');
  document.querySelector('.navbar-menu').classList.toggle("is-active");
} 

function openTab(event, tabId) {
  tabContent =  document.getElementsByClassName('tab-content'); 
  for (i=0;i< tabContent.length;i ++) {
      tabContent[i].style.display = 'none'
  }
  tabLinks = document.getElementsByClassName('tab-links');
  for (i=0;i< tabContent.length;i ++) {
    tabLinks[i].className = tabLinks[i].className.replace('is-active',' ');
  }

  document.getElementById(tabId).style.display = 'block' ;
  event.currentTarget.className += " is-active" ;
}