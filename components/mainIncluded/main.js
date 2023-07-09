import switcherRoomsImg from '/public/images/switcherRoomsImg.png';
import Polygon_1 from '/public/images/Polygon 1.svg';
import plus from '/public/images/plus.png';
import './style.css';

function mainIncluded(){
    document.querySelector('.included').innerHTML = `
    <div class="container">
    <h2>Що входить в прибирання?</h2>
    <div class="includedBlocks">
      <div class="includedBlock01 includedBlock">
        <div class="includedBlocContent">
          <h3>01</h3>
          <h4>Бюджетна підписка</h4>
          <p>Ми відправимо до вас клінера з повним арсеналом професійних інструментів (миючі пилососи і пароочисники KARCHER та безпечна і суперпотужна хімія KIEHL та Pomoc Domowa). Клінер прибере будинок і відмиє всі поверхні від жиру, бруду та пилу. Він наведе порядок всередині шаф, помиє вікна та винесе сміття. Раз на 6 місяців проводимо хімчистку диванів, матраців та подушок.</p>
        </div>
      </div>
      <div class="includedBlock02 includedBlock">
        <div class="includedBlocContent">
          <h3>02</h3>
          <h4>Підтримуюче прибирання</h4>
          <p>Змінюємо постільну білизну, акуратно складаємо реші у шафі, видаляємо пил з поверхонь, пилососимо та миємо пілогу. Робимо все, аби тривати вашу домівку у чистоті!</p>
          <span>*Не включає миття вікон</span>
        </div>
      </div>
    </div>
    <div class="mainSwitcherRooms">
      <div class="SwitcherRoom SwitcherRoomActive">Кухня</div>
      <div class="SwitcherRoom">Кімнати</div>
      <div class="SwitcherRoom">Санвузол</div>
    </div>
    <div class="switcherRoomsImg">
      <img src="${switcherRoomsImg}" alt="switcherRoomsImg">
      <div class="plusBloks">
        <div class="plusBlockFloor">
          <div class="textPlusBlock">
            <p>Миємо підлогу</p>
            <img src="${Polygon_1}" alt="Polygon 1">
          </div>
          <img src="${plus}" alt="plus">
        </div>
        <div class="plusBlockTile">
          <div class="textPlusBlock">
            <p>Протираємо плитку </p>
            <img src="${Polygon_1}" alt="Polygon 1">
          </div>
          <img src="${plus}" alt="plus">
        </div>
        <div class="plusBlockStove">
          <img src="${plus}" alt="plus">
          <div class="textPlusBlock">
            <img src="${Polygon_1}" alt="Polygon 1">
            <p>Миємо раковину та плиту</p>
          </div>
        </div>
        <div class="plusBlockEquipment">
          <div class="textPlusBlock">
            <p>Миємо техніку</p>
            <img src="${Polygon_1}" alt="Polygon 1">
          </div>
          <img src="${plus}" alt="plus">
        </div>
        <div class="plusBlockWindowsills">
          <div class="textPlusBlock">
            <p>Протираємо підвіконня, батареї, плінтуси, двері та вимикачі!</p>
            <img src="${Polygon_1}" alt="Polygon 1">
          </div>
          <img src="${plus}" alt="plus">
        </div>
      </div>
    </div>
  </div>
    `
    }
    
    export default mainIncluded;
