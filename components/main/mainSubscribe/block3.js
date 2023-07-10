import block3Img from '/public/images/block3Img.png';
import './style.css';

function mainSubscribeBlock3(){
    document.querySelector('.subscribe .container').innerHTML += `
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
    `
    }
    
    export default mainSubscribeBlock3;