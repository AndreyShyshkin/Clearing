import illustration from '/public/images/illustration.png';
import vecteezy_dollar_money from '/public/images/vecteezy_dollar-money.png';
import security from '/public/images/security.png';
import vacuum_cleaner from '/public/images/vacuum_cleaner.png';
import badge from '/public/images/badge.png';
import './style.css';

function headerHome(){
    document.querySelector('.home').innerHTML = `
    <div class="container">
    <div class="homeImg">
      <img src="${illustration}" alt="illustration">
    </div>
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
  </div>
  <div class="container features">
    <div class="feature">
      <img src="${vecteezy_dollar_money}" alt="vecteezy-dollar-money">
      <h3>Бюджетна підписка</h3>
      <p>Вартість місячної підписки всього <b>399zł</b>. Вона включає 2 прибирання на місяць.</p>
    </div>
    <div class="feature">
      <img src="${security}" alt="security">
      <h3>Безпечна хімія</h3>
      <p>У прибиранні ми використовуємо лише якісну та не агресивну хімію <b>KIEHL</b> та <b>Pomoc Domowa</b>.</p>
    </div>
    <div class="feature">
      <img src="${vacuum_cleaner}" alt="vacuum-cleaner">
      <h3>Професійна техніка</h3>
      <p>Наші головні помічники у роботі - це техніка <b>KARCHER!</b> Вони забезпечують дійсно “кристальне” прибирання.</p>
    </div>
    <div class="feature">
      <img src="${badge}" alt="badge">
      <h3>Контроль якості</h3>
      <p>Ми завжди <b>запитуємо відгук</b> клієнта. Якщо ви не задоволені прибиранням — ми одразу приїдемо i все виправимо!</p>
    </div>
  </div>
    `
    }
    
    export default headerHome;