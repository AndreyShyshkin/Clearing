import mainSubscribeBanner1 from './banner1';
import mainSubscribeBanner2 from './banner2';
import mainSubscribeBlock3 from './block3';
import mainSubscribeBlock4 from './block4';
import './style.css';

function mainSubscribe(){
    let currentPage = window.location.pathname;

    document.querySelector('.subscribe').innerHTML = `
    <div class="container"></div>
    `
    if (currentPage == ("/") || currentPage == ("/index.html")) {
      document.querySelector('.subscribe .container').innerHTML += `
      <h2>Пакет прибирання на місяць</h2>
      <p class="subscribeInfo">Підписка діє протягом 30 днів та лише за однією адресою. При закінченні терміну дія підписки згорає. Працюємо лише по місту Лодзь</p>
      `
      mainSubscribeBanner1();
    }

    mainSubscribeBanner2();
    mainSubscribeBlock3();
    mainSubscribeBlock4();

    document.querySelector('.subscribe .container').innerHTML += `
    <button class="buySubscribe">Замовити прибирання</button>
    `
    }
    
export default mainSubscribe;