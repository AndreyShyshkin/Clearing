import instagram from '/public/images/instagram.svg';
import facebook from '/public/images/facebook.svg';
import whats_app from '/public/images/whats-app.svg';
import girl_and_boy_cleaning_service_3 from '/public/images/girl-and-boy-cleaning-service-3.png';
import girl_and_boy_cleaning_service_2 from '/public/images/girl-and-boy-cleaning-service-2.png';
import girl_and_boy_cleaning_service_1 from '/public/images/girl-and-boy-cleaning-service-1.png';
import './style.css';

function mainContactUs(){
    document.querySelector('.ContactUs').innerHTML = `
    <div class="container">
    <h2 class="ContactUsH2">Зв’язок з нами</h2>
    <div class="ContactUsBlock">
      <div class="ContactUsBlockLeft">
        <h4>Comfort Group</h4>
        <p>
          NIP — 7822835823 <br>
          REGON — 523849733
        </p>
        <a href="tell:+48 534 517 801">+48 534 517 801</a>
        <div>
          <img src="${instagram}" alt="instagram">
          <img src="${facebook}" alt="facebook">
          <img src="${whats_app}" alt="whats-app">
        </div>
      </div>
      <div class="ContactUsBlockRight">
        <div class="ContactUsBlockRightContainer">
          <h3>Наша жива служба підтримки</h3>
          <div class="work24_7">
            <div class="circle"></div>
            Працюємо 24/7
          </div>
          <div class="ContactUsSocialRight">
            <img src="${instagram}" alt="instagram">
            <img src="${facebook}" alt="facebook">
            <img src="${whats_app}" alt="whats-app">
          </div>
          <p>або за номером</p>
          <a href="tell:+48 534 517 801">+48 534 517 801</a>
        </div>
      </div>
    </div>
    <div class="ContactUsBanner">
      <img src="${girl_and_boy_cleaning_service_3}" alt="girl-and-boy-cleaning-service-3" class="girl-and-boy-cleaning-service-3">
      <img src="${girl_and_boy_cleaning_service_2}" alt="girl-and-boy-cleaning-service-2" class="girl-and-boy-cleaning-service-2">
      <img src="${girl_and_boy_cleaning_service_1}" alt="girl-and-boy-cleaning-service-1" class="girl-and-boy-cleaning-service-1">
      <div>
        <h3>Досить витрачати свій вільний час на прибирання! Замовляйте <span>місячну</span> <span>підписку</span> на клінінг вашого дому!</h3>
        <h4>399zł</h4>
        <p>1 генеральне прибирання + 1 підтримуюче прибирання</p>
        <button>Замовити прибирання</button>
      </div>
    </div>
  </div>
    `
    }
    
    export default mainContactUs;