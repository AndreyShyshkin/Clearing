import illustration from '/public/images/illustrationOffice.png';
import './style.css';

function headerOffice(){
    document.querySelector('.office').innerHTML = `
<div class="container">
  <div class="mainScreen">
    <h1>
    Прибирання офісів 
    та ресторанів у Лодзі
    </h1>
    <h2 class="info">
    Професійний клінінг для офісних приміщень та ресторанів від компанії Comfort Group. Попередня вартість прибирання 2zł за м².
    </h2>
    <ul>
      <li><div class="circle"></div>Офісні приміщення</li>
      <li><div class="circle"></div>Магазини</li>
      <li><div class="circle"></div>Ресторани</li>
    </ul>
    <button class="order">Замовити прибирання</button>
    <button class="order-sell10">Отримати знижку 10%</button>
  </div>
  <div class="homeImg">
    <img src="${illustration}" alt="illustration">
  </div>
</div>
    `
    }
    
    export default headerOffice;