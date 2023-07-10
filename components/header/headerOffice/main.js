import illustration from '/public/images/illustration.png';
import './style.css';

function headerOffice(){
    document.querySelector('.office').innerHTML = `
<div class="container">
  <div class="mainScreen">
    <h1>
      <span class="highlighting">Приберемо</span> у вашому будинку чи квартирі
      у Лодзі всього за <span class="highlighting">399zł</span>
    </h1>
    <h2 class="info">
      Клінінгова компанія Comfort Group пропонує акційну підписку на послуги клінінгу у Лодзі всього за <b>399zł</b>. Підписка включає прибирання в кімнатах, санвузлі та кухні.
    </h2>
    <button class="order">Замовити прибирання</button>
  </div>
  <div class="homeImg">
    <img src="${illustration}" alt="illustration">
  </div>
</div>
    `
    }
    
    export default headerOffice;