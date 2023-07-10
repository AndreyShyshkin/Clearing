import illustration from '/public/images/illustration.png';
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
    <button class="order">Замовити прибирання</button>
  </div>
  <div class="homeImg">
    <img src="${illustration}" alt="illustration">
  </div>
</div>
    `
    }
    
    export default headerOffice;