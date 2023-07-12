import './style.css'

import vecteezy_hand_brush_cleaner from '/src/assets/images/vecteezy-hand-brush-cleaner.png';
import vecteezy_stylized_cleaning_sponge from '/src/assets/images/vecteezy-stylized-cleaning-sponge.png';

function MainTrust() {

  return (
    <>
      <div className="trust">
        <div className="container">
          <div className="trustContainer">
            <h2 className="trustContainerH2">Чому нам можна довіряти</h2>
            <div className="trustBlocks">
              <div className="trustBlocksLine">
                <div className="trustBlock trustBlockLeft">
                  <div className="trustBlockContainer">
                    <h3>01</h3>
                    <h2>Індивідуальний підхід</h2>
                    <p>Ми знаємо що немає однаково забруднених приміщень. Тому до кожного клінінгу підходимо індивідуально. Ми приводимо приміщення до “кришталевої” чистоти не залежно від рівня забруднення.</p>
                  </div>
                </div>
                <div className="trustBlock" style={{ zIndex: 5 }}>
                  <div className="trustBlockContainer">
                    <h3>02</h3>
                    <h2>Стежимо за якістю прибирання</h2>
                    <p>Після кожного прибирання ми збираємо у клієнтів чесні відгуки про роботу клінерів. 
                      У разі якщо клієнт не задоволенний якістю прибирання ми проводимо повторне прибирання або повністю повертаємо кошти.</p>
                  </div>
                </div>
                <img src={vecteezy_stylized_cleaning_sponge} alt="vecteezy-stylized-cleaning-sponge" className="vecteezy-stylized-cleaning-sponge" />
              </div>
              <div className="trustBlocksLine">
                <div className="trustBlock trustBlockLeft">
                  <div className="trustBlockContainer">
                    <h3>03</h3>
                    <h2>Професійна техніка та безпечна хімія</h2>
                    <p>Техніка бренду “KARCHER” забезпечує ретельне та якісне прибирання. А миючі засоби німецького бренду “KIEHL” мають високу очисну здатність і впораються навіть з складними забрудненнями. Вся наша хімія не має різких запахів та гіпоалергенна.</p>
                  </div>
                </div>
                <div className="trustBlock">
                  <div className="trustBlockContainer">
                    <h3>04</h3>
                    <h2>Чесні ціни доступні кожному</h2>
                    <p>Вартість наших послуг формується по прозорій схемі. Клієнти Comfort Group можуть заощадити замовивши акційну місячну підписку або скориставшись нашими акціями.</p>
                  </div>
                </div>
                <img src={vecteezy_hand_brush_cleaner} alt="vecteezy-hand-brush-cleaner" className="vecteezy-hand-brush-cleaner" />
              </div>
            </div>
            <button className="btnTrust">Замовити прибирання</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainTrust