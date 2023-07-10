import stars from '/public/images/stars.png';
import './style.css';

function mainReviews(){
    document.querySelector('.reviews').innerHTML = `
    <div class="container">
    <h2>Відгуки про компанію Comfort Group</h2>
    <div>
      <div class="reviewsBlocks">
        <div class="reviewsBlock">
          <div class="review">
            <div class="reviewContainer">
              <h3>Міколай Ковальчук</h3>
              <div class="stars">
                <img src="${stars}" alt="stars">
                <img src="${stars}" alt="stars">
                <img src="${stars}" alt="stars">
                <img src="${stars}" alt="stars">
                <img src="${stars}" alt="stars">
              </div>
              <p>Дуже хороший сервіс! Клінер Анна приємна та працьовита дівчина. Приїхала без запізнень, швидко і якісно прибрала в моїй квартирі.</p>
            </div>
          </div>
          <div class="review">
            <div class="reviewContainer">
              <h3>Бронислав Левандовський</h3>
              <div class="stars">
                <img src="${stars}" alt="stars">
                <img src="${stars}" alt="stars">
                <img src="${stars}" alt="stars">
                <img src="${stars}" alt="stars">
                <img src="${stars}" alt="stars">
              </div>
              <p>Чудові клінери та сервіс. Не шкодую що обрав саме вас: прибрали ретельно та швидко.</p>
            </div>
          </div>
        </div>
        <div class="reviewsBlock">
          <div class="review">
            <div class="reviewContainer">
              <h3>Марія Кравчук</h3>
              <div class="stars">
                <img src="${stars}" alt="stars">
                <img src="${stars}" alt="stars">
                <img src="${stars}" alt="stars">
                <img src="${stars}" alt="stars">
                <img src="${stars}" alt="stars">
              </div>
              <p>Замовляла прибирання в квартиру після косметичного ремонту. Дівчата з Comfort Group мене просто врятували! Прибрали дуже швидко та ретельно. Без їх допомоги я б ще не один день витрачала свій час на це прибирання!</p>
            </div>
          </div>
          <div class="review">
            <div class="reviewContainer">
              <h3>Ян Кравчик</h3>
              <div class="stars">
                <img src="${stars}" alt="stars">
                <img src="${stars}" alt="stars">
                <img src="${stars}" alt="stars">
                <img src="${stars}" alt="stars">
                <img src="${stars}" alt="stars">
              </div>
              <p>Дякую за гарну роботу! Ви чудово прибрали наш офіс після новорічного корпоративу.</p>
            </div>
          </div>
        </div>
        <div class="reviewsBlock">
          <div class="review">
            <div class="reviewContainer">
              <h3>Алекс Кашпор</h3>
              <div class="stars">
                <img src="${stars}" alt="stars">
                <img src="${stars}" alt="stars">
                <img src="${stars}" alt="stars">
                <img src="${stars}" alt="stars">
                <img src="${stars}" alt="stars">
              </div>
              <p>Оформлюю у Comfort Group вже другу місячну підписку. З моїм графком роботи це ідеальний варіант. Вдома завжди чисто та свіжо! Дякую за вашу роботу!</p>
            </div>
          </div>
          <div class="review">
            <div class="reviewContainer">
              <h3>Юлія Возняк</h3>
              <div class="stars">
                <img src="${stars}" alt="stars">
                <img src="${stars}" alt="stars">
                <img src="${stars}" alt="stars">
                <img src="${stars}" alt="stars">
                <img src="${stars}" alt="stars">
              </div>
              <p>Замовляла місячну підписку на прибирання для своєї бабусі.Тетяна з Comfort Group була дуже милою та ретельно все прибрала.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btnsRewiew">
      <button class="btnRewiew btnRewiewActive">Залишити відгук у Google</button>
      <button class="btnRewiew">Залишити відгук у Facebook</button>
    </div>
  </div>
    `
    }
    
    export default mainReviews;
