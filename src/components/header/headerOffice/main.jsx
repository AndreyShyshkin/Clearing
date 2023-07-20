import './style.css'

import illustration from '/src/assets/images/illustrationOffice.png';

import features from '/src/components/header/features/main'

function HeaderOffice() {

  return (
    <>
        <div className="office">
        <div className="container">
            <div className="mainScreen">
                <h1>
                Прибирання офісів 
                та ресторанів у Лодзі
                </h1>
                <h2 className="info">
                Професійний клінінг для офісних приміщень та ресторанів від компанії Comfort Group. Попередня вартість прибирання 2zł за м².
                </h2>
                <ul>
                <li><div className="circle"></div>Офісні приміщення</li>
                <li><div className="circle"></div>Магазини</li>
                <li><div className="circle"></div>Ресторани</li>
                </ul>
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

export default HeaderOffice