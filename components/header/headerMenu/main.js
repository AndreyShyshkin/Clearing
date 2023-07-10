import instagram from '/public/images/instagram.svg';
import facebook from '/public/images/facebook.svg';
import whats_app from '/public/images/whats-app.svg';
import logo from '/public/images/logo.svg';
import menu from '/public/images/menu.svg';
import './style.css';

document.addEventListener("DOMContentLoaded", function() {
  let switcherBlock = document.querySelectorAll(".switcherBlock");
  let currentPage = window.location.pathname;

  if (currentPage.includes("pages/office")) {
    switcherBlock[0].classList.remove("switcherActive");
    switcherBlock[1].classList.add("switcherActive");
  } else if (currentPage.includes("/")) {
    switcherBlock[1].classList.remove("switcherActive");
    switcherBlock[0].classList.add("switcherActive");
  }
});

function headerMenu(){
    document.querySelector('.menu').innerHTML = `
    <div class="container">
    <a href="/index.html"><img src="${logo}" alt="logo"></a>
    <div class="switcher">
      <a href="/"><p class="switcherBlock">Дім</p></a>
      <a href="/pages/office/"><p class="switcherBlock">Офіс</p></a>
    </div>
    <div class="menuLinks">
      <a href="#">Після ремонту</a>
      <a href="#">Розрахунок вартості</a>
    </div>
    <div class="social">
      <a href="#"><img src="${instagram}" alt="instagram"></a>
      <a href="#"><img src="${facebook}" alt="facebook"></a>
      <a href="#"><img src="${whats_app}" alt="whats-app"></a>
    </div>
    <a href="tell:+48534517801" class="tell">+48 534 517 801</a>
    <img src="${menu}" alt="menu" class="menuIcon">
  </div>
    `
    }
    
    export default headerMenu;
