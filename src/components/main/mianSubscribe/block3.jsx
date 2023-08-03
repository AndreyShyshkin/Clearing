import "./style.css";

import block3Img from "/src/assets/images/block3Img.png";

function mainSubscribeBlock3() {
  return (
    <>
      <div className="block3">
        <img src={block3Img} alt="block3Img" />
        <div>
          <h3>
            Comfort Group допоможе вам організувати та підтримувати чистоту у
            вашому будинку
          </h3>
          <ul>
            <li>
              <div className="circle"></div>Проведемо прибирання квартири перед
              приходом гостей.
            </li>
            <li>
              <div className="circle"></div>Приберемо наслідки гучної вечірки.
            </li>
            <li>
              <div className="circle"></div>Зробимо генеральне прибирання і
              позбавимо вас необхідності витрачати на це свій вільний час.
            </li>
            <li>
              <div className="circle"></div>Будемо підтримувати чистоту у домі
              навіть коли ви на роботі!
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default mainSubscribeBlock3;
