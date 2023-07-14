import './style.css'

import switcherRoomsImg from '/src/assets/images/switcherRoomsImg.png';
import Polygon_1 from '/src/assets/images/Polygon 1.svg';
import plus from '/src/assets/images/plus.png';

import includedBlocks from './includedBlocks';

function MainIncluded() {

  return (
    <>
      <div className='included'>
        <div className="container">
          <h2>Що входить в прибирання?</h2>
          {includedBlocks()}
          <div className="mainSwitcherRooms">
            <div className="SwitcherRoom SwitcherRoomActive"><a href="#">Кухня</a></div>
            <div className="SwitcherRoom"><a href="#">Кімнати</a></div>
            <div className="SwitcherRoom"><a href="#">Санвузол</a></div>
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