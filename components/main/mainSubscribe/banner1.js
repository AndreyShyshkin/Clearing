import valentin from '/public/images/valentin.png';
import './style.css';

function mainSubscribeBanner1(){
    document.querySelector('.subscribe .container').innerHTML += `
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
    `
    }
    
    export default mainSubscribeBanner1;