import './style.css'

import switcherRoomsImg from '/src/assets/images/switcherRoomsImg.png';
import Polygon_1 from '/src/assets/images/Polygon 1.svg';
import plus from '/src/assets/images/plus.png';

function MainIncluded() {

  return (
    <>
      <div className='included'>
        <div className="container">
          <h2>Що входить в прибирання?</h2>
          <div className="includedBlocks">
            <div className="includedBlock01 includedBlock">
              <div className="includedBlocContent">
                <h3>01</h3>
                <h4>Бюджетна підписка</h4>
                <p>Ми відправимо до вас клінера з повним арсеналом професійних інструментів (миючі пилососи і пароочисники KARCHER та безпечна і суперпотужна хімія KIEHL та Pomoc Domowa). Клінер прибере будинок і відмиє всі поверхні від жиру, бруду та пилу. Він наведе порядок всередині шаф, помиє вікна та винесе сміття. Раз на 6 місяців проводимо хімчистку диванів, матраців та подушок.</p>
              </div>
            </div>
            <div className="includedBlock02 includedBlock">
              <div className="includedBlocContent">
                <h3>02</h3>
                <h4>Підтримуюче прибирання</h4>
                <p>Змінюємо постільну білизну, акуратно складаємо реші у шафі, видаляємо пил з поверхонь, пилососимо та миємо пілогу. Робимо все, аби тривати вашу домівку у чистоті!</p>
                <span>*Не включає миття вікон</span>
              </div>
            </div>
          </div>
          <div className="mainSwitcherRooms">
            <div className="SwitcherRoom SwitcherRoomActive">Кухня</div>
            <div className="SwitcherRoom">Кімнати</div>
            <div className="SwitcherRoom">Санвузол</div>
          </div>
          <div className="switcherRoomsImg">
            <div className="plusBloks">
            <img src={switcherRoomsImg} alt="switcherRoomsImg" />
              <div className="plusBlockFloor">
                <div className="textPlusBlock">
                  <p>Миємо підлогу</p>
                  <img src={Polygon_1} alt="Polygon 1" />
                </div>
                <img src={plus} alt="plus" />
              </div>
              <div className="plusBlockTile">
                <div className="textPlusBlock">
                  <p>Протираємо плитку </p>
                  <img src={Polygon_1} alt="Polygon 1" />
                </div>
                <img src={plus} alt="plus" />
              </div>
              <div className="plusBlockStove">
                <img src={plus} alt="plus" />
                <div className="textPlusBlock">
                  <img src={Polygon_1} alt="Polygon 1" />
                  <p>Миємо раковину та плиту</p>
                </div>
              </div>
              <div className="plusBlockEquipment">
                <div className="textPlusBlock">
                  <p>Миємо техніку</p>
                  <img src={Polygon_1} alt="Polygon 1" />
                </div>
                <img src={plus} alt="plus" />
              </div>
              <div className="plusBlockWindowsills">
                <div className="textPlusBlock">
                  <p>Протираємо підвіконня, батареї, плінтуси, двері та вимикачі!</p>
                  <img src={Polygon_1} alt="Polygon 1" />
                </div>
                <img src={plus} alt="plus" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainIncluded