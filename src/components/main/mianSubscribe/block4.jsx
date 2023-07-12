import './style.css'

import vacuum_cleaner from '/src/assets/images/vacuum_cleaner.png';
import WashBottle from '/src/assets/images/WashBottle.png';
import badge from '/src/assets/images/badge.png';

function mainSubscribeBlock4() {
    return (
      <>
        <div className="blocks4">
        <div className="block4">
            <img src={vacuum_cleaner} alt="vacuum_cleaner" />
            <h3>Техніка KARCHER</h3>
            <p>KARCHER — це професійна техніка, що забезпечує ретельне та якісне прибирання. Весь інвентар та техніки наші клінери приносять з собою!</p>
        </div>
        <div className="block4">
            <img src={WashBottle} alt="WashBottle" />
            <h3>Гіпоалергенні миючі засоби</h3>
            <p>У прибиранні ми використовуємо лише якісну та не агресивну хімію KIEHL та Pomoc Domowa. Наші миючі засоби не мають різких запахів та гіпоалергенні</p>
        </div>
        <div className="block4">
            <img src={badge} alt="badge" />
            <h3>Досвідчений персонал</h3>
            <p>Всі наші клінери спеціально підготовленні та пройшли навчання від нашої компанії. Ми збираємо відгуки про кожного працівника та контролюємо їх роботу</p>
        </div>
        </div>
      </>
    )
  }
  
  export default mainSubscribeBlock4