import valentin from '/public/images/valentin.png';
import banner2Img from '/public/images/banner2Img.png';
import block3Img from '/public/images/block3Img.png';
import vacuum_cleaner from '/public/images/vacuum_cleaner.png';
import WashBottle from '/public/images/WashBottle.png';
import badge from '/public/images/badge.png';

function mainSubscribe(){
    document.querySelector('.subscribe').innerHTML = `
    <div class="container">
    <h2>Пакет прибирання на місяць</h2>
    <p class="subscribeInfo">Підписка діє протягом 30 днів та лише за однією адресою. При закінченні терміну дія підписки згорає. Працюємо лише по місту Лодзь</p>
    <div class="banner1">
      <div class="banner1Container">
        <div class="banner1Right">
          <h3>Місячна підписка на клінінг для будинку чи квартири</h3>
          <ul>
            <li><div class="circle"></div>1 генеральне прибирання</li>
            <li><div class="circle"></div>1 базове прибирання</li>
          </ul>
          <div class="valentinBlock">
            <img src="${valentin}" alt="valentin">
            <p>Хімчистка стільців, диванів, матраців, подушок 
              та крісел раз у 6 місяців у подарунок!</p>
          </div>
        </div>
        <div class="banner1Left">
          <h3>399zł</h3>
          <p>1 генеральне прибирання + 1 підтримуюче прибирання</p>
          <button>Замовити прибирання</button>
        </div>
      </div>
    </div>
    <div class="banner2">
      <p>Порадь нас своїм знайомим та отримай знижку на наступну підписку з прибирання <span>50zł!</span></p>
      <img src="${banner2Img}" alt="banner2Img">
    </div>
    <div class="block3">
      <img src="${block3Img}" alt="block3Img">
      <div>
        <h3>Comfort Group допоможе вам організувати та підтримувати чистоту у вашому будинку</h3>
        <ul>
          <li><div class="circle"></div>Проведемо прибирання квартири перед приходом гостей.</li>
          <li><div class="circle"></div>Приберемо наслідки гучної вечірки.</li>
          <li><div class="circle"></div>Зробимо генеральне прибирання і позбавимо вас необхідності витрачати на це свій вільний час.</li>
          <li><div class="circle"></div>Будемо підтримувати чистоту у домі навіть коли ви на роботі!</li>
        </ul>
      </div>
    </div>
    <div class="blocks4">
      <div class="block4">
        <img src="${vacuum_cleaner}" alt="vacuum_cleaner">
        <h3>Техніка KARCHER</h3>
        <p>KARCHER — це професійна техніка, що забезпечує ретельне та якісне прибирання. Весь інвентар та техніки наші клінери приносять з собою!</p>
      </div>
      <div class="block4">
        <img src="${WashBottle}" alt="WashBottle">
        <h3>Гіпоалергенні миючі засоби</h3>
        <p>У прибиранні ми використовуємо лише якісну та не агресивну хімію KIEHL та Pomoc Domowa. Наші миючі засоби не мають різких запахів та гіпоалергенні</p>
      </div>
      <div class="block4">
        <img src="${badge}" alt="badge">
        <h3>Досвідчений персонал</h3>
        <p>Всі наші клінери спеціально підготовленні та пройшли навчання від нашої компанії. Ми збираємо відгуки про кожного працівника та контролюємо їх роботу</p>
      </div>
    </div>
    <button class="buySubscribe">Замовити прибирання</button>
  </div>
    `
    }
    
    export default mainSubscribe;