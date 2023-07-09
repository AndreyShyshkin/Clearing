import instagram from '/public/images/instagram.svg';
import facebook from '/public/images/facebook.svg';
import whats_app from '/public/images/whats-app.svg';
import logo from '/public/images/logo.svg';
import menu from '/public/images/menu.svg';

function headerMenu(){
    document.querySelector('.menu').innerHTML = `
    <div class="container">
    <a href="/index.html"><img src="${logo}" alt="logo"></a>
    <div class="switcher">
      <p class="switcherBlock switcherActive">Дім</p>
      <p class="switcherBlock">Офіс</p>
    </div>
    <a href="#">Після ремонту</a>
    <a href="#">Розрахунок вартості</a>
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
