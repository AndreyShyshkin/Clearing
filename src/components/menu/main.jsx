import './style.css'

import logoInv from '/src/assets/images/logoInv.svg';

import instagram from '/src/assets/images/instagram.svg';
import facebook from '/src/assets/images/facebook.svg';
import whats_app from '/src/assets/images/whats-app.svg';

function Menu() {

  return (
    <>
      <div className="menuClick">
        <div className='menuHeader'>
            <a href="/"><img src={logoInv} alt="logoInv" /></a>
            <div className="switcher">
                <a href="/"><p className="switcherBlock">Дім</p></a>
                <a href="/pages/office/"><p className="switcherBlock">Офіс</p></a>
            </div>
            <div onClick={closeMenu} className="closeMenu"></div>
        </div>
        <div className="menuBlock">
            <p><a href="/pages/services/">Послуги</a></p>
            <p><a href="/pages/calculator/">Розрахунок вартості</a></p>
            <p><a href="/pages/FQA/">Актуальні запитання</a></p>
            <p><a href="/pages/contactUs/">Контакти </a></p>
        </div>
        <div className="menuContact">
            <div>
                <img src={instagram} alt="instagram" />
                <img src={facebook} alt="facebook" />
                <img src={whats_app} alt="whats-app" />
            </div>
            <div className='menuTell'>
                +48 534 517 801
            </div>
        </div>
      </div>
    </>
  )
}

export default Menu

function closeMenu(){
    const menuClick = document.querySelectorAll(".menuClick");
  
    menuClick.forEach((element) => {
      element.style.display = "none";
    });
  }