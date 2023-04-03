// Force a hover to see the effect
const contact = document.querySelector('.contact');

setTimeout(() => {
  contact.classList.add("hover");
}, 1000);

setTimeout(() => {
  contact.classList.remove("hover");
}, 3000);

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display="none";
})