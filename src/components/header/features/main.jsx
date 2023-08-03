import "./style.css";

import vecteezy_dollar_money from "/src/assets/images/vecteezy_dollar-money.png";
import security from "/src/assets/images/security.png";
import vacuum_cleaner from "/src/assets/images/vacuum_cleaner.png";
import badge from "/src/assets/images/badge.png";

function features() {
  return (
    <>
      <div className="container features">
        <div className="row">
          <div className="feature">
            <img src={vecteezy_dollar_money} alt="vecteezy-dollar-money" />
            <h3>Бюджетна підписка</h3>
            <p>
              Вартість місячної підписки всього <b>399zł</b>. Вона включає 2
              прибирання на місяць.
            </p>
          </div>
          <div className="feature">
            <img src={security} alt="security" />
            <h3>Безпечна хімія</h3>
            <p>
              У прибиранні ми використовуємо лише якісну та не агресивну хімію{" "}
              <b>KIEHL</b> та <b>Pomoc Domowa</b>.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="feature">
            <img src={vacuum_cleaner} alt="vacuum-cleaner" />
            <h3>Професійна техніка</h3>
            <p>
              Наші головні помічники у роботі - це техніка <b>KARCHER!</b> Вони
              забезпечують дійсно “кристальне” прибирання.
            </p>
          </div>
          <div className="feature">
            <img src={badge} alt="badge" />
            <h3>Контроль якості</h3>
            <p>
              Ми завжди <b>запитуємо відгук</b> клієнта. Якщо ви не задоволені
              прибиранням — ми одразу приїдемо i все виправимо!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default features;
