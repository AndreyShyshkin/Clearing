import instagram from '/public/images/instagram.svg';
import facebook from '/public/images/facebook.svg';
import whats_app from '/public/images/whats-app.svg';
import './style.css';

function footer(){
document.querySelector('footer').innerHTML = `
<div class="container">
<div class="footerBlocks">
  <div class="footerMenu">
    <div>
      <h3>Про нас</h3>
      <ul>
        <li><a href="#">Послуги</a></li>
        <li><a href="#">Вартість</a></li>
        <li><a href="#">Питання</a></li>
        <li><a href="#">Контакти</a></li>
      </ul>
    </div>
    <div>
      <h3>Послуги</h3>
      <ul>
        <li><a href="#">Прибирання квартир та будинків</a></li>
        <li><a href="#">Прибирання офісів та ресторанів</a></li>
        <li><a href="#">Прибирання після ремонту</a></li>
      </ul>
    </div>
  </div>
  <div class="footerContactBlock">  
    <div>
    <h3>Контакти</h3>
    <ul class="contactFooter">
      <li>на зв’язку 24/7</li>
      <li><a href="#">+48 534 517 801</a></li>
      <li><a href="#">пошта</a></li>
      <li><a href="#">адреса</a></li>
    </ul>
    </div>
    <div class="socialsFooter">
      <h3>Наша технічна підтримка</h3>
      <img src="${instagram}" alt="instagram">
      <img src="${facebook}" alt="facebook">
      <img src="${whats_app}" alt="whats-app">
    </div>
  </div>
</div>
<div class="footerSecurity footerSecurityLink">
<p>©2023 Всі права захищено</p>
<div class="footerSecurity">
  <p>Політика конфіденційності</p>
  <p>Договір публічної оферти</p>
</div>
</div>
</div>
`
}

export default footer;