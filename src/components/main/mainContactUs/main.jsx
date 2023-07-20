import './style.css'

import instagram from '/src/assets/images/instagram.svg';
import facebook from '/src/assets/images/facebook.svg';
import whats_app from '/src/assets/images/whats-app.svg';
import girl_and_boy_cleaning_service_3 from '/src/assets/images/girl-and-boy-cleaning-service-3.png'
import girl_and_boy_cleaning_service_2 from '/src/assets/images/girl-and-boy-cleaning-service-2.png'
import girl_and_boy_cleaning_service_1 from '/src/assets/images/girl-and-boy-cleaning-service-1.png'

function MainContactUs() {

  return (
    <>
      <div className='ContactUs'>
        <div className="container">
          <h2 className="ContactUsH2">Зв’язок з нами</h2>
          <div className="ContactUsBlock">
            <div className="ContactUsBlockLeft">
              <h4>Comfort Group</h4>
              <p>
                NIP — 7822835823 <br />
                REGON — 523849733
              </p>
              <a href="tell:+48 534 517 801">+48 534 517 801</a>
              <div>
                <img src={instagram} alt="instagram" />
                <img src={facebook} alt="facebook" />
                <img src={whats_app} alt="whats-app" />
              </div>
            </div>
            <div className="ContactUsBlockRight">
              <div className="ContactUsBlockRightContainer">
                <h3>Наша жива служба підтримки</h3>
                <div className="work24_7">
                  <div className="circle"></div>
                  Працюємо 24/7
                </div>
                <div className="ContactUsSocialRight">
                  <img src={instagram} alt="instagram" />
                  <img src={facebook} alt="facebook" />
                  <img src={whats_app} alt="whats-app" />
                </div>
                <p>або за номером</p>
                <a href="tell:+48 534 517 801">+48 534 517 801</a>
              </div>
            </div>
          </div>
          <div className="ContactUsBanner">
            <img src={girl_and_boy_cleaning_service_3} alt="girl-and-boy-cleaning-service-3" className="girl-and-boy-cleaning-service-3" />
            <img src={girl_and_boy_cleaning_service_2} alt="girl-and-boy-cleaning-service-2" className="girl-and-boy-cleaning-service-2" />
            <img src={girl_and_boy_cleaning_service_1} alt="girl-and-boy-cleaning-service-1" className="girl-and-boy-cleaning-service-1" />
            <div>
              <h3>Досить витрачати свій вільний час на прибирання! Замовляйте <span>місячну</span> <span>підписку</span> на клінінг вашого дому!</h3>
              <h4>399zł</h4>
              <p>1 генеральне прибирання + 1 підтримуюче прибирання</p>
              <a href="/pages/calculator/"><button>Замовити прибирання</button></a> 
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainContactUs