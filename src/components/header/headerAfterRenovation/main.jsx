import './style.css'

import illustration from '/src/assets/images/illustrationAfterRenovation.png';

import features from '/src/components/header/features/main'

function HeaderAfterRenovation() {

  return (
    <>
        <div className="afterRenovatio">
        <div className="container">
            <div className="mainScreen">
                <h1>
                Прибирання приміщень після ремонту у Лодзі
                </h1>
                <h2 className="info">
                Усунемо наслідки ремонту будь-якох складності та підготуємо приміщення для вашого переїзду! Попередня вартість прибирання 5zł за м²
                </h2>
                <button className="order"> <a href="/pages/calculator/">Замовити прибирання</a> </button>
                <button className="order-sell10"><a href="/pages/calculator/">Отримати знижку 10%</a></button>
            </div>
            <div className="homeImg">
                <img src={illustration} alt="illustration" />
            </div>
            </div>
            {features()}
        </div>
    </>
  )
}

export default HeaderAfterRenovation