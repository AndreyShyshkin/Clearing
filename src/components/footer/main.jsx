import './style.css'

import instagram from '/src/assets/images/instagram.svg';
import facebook from '/src/assets/images/facebook.svg';
import whats_app from '/src/assets/images/whats-app.svg';

function FooterMenu() {

  return (
    <>
        <footer>
            <div className="container">
                <div className="footerBlocks">
                    <div className="footerMenu">
                        <div>
                            <h3>Про нас</h3>
                            <ul>
                                <li><a href="#">Послуги</a></li>
                                <li><a href="#">Вартість</a></li>
                                <li><a href="#">Питання</a></li>
                                <li><a href="#">Контакти</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Послуги</h3>
                            <ul>
                                <li><a href="#">Прибирання квартир та будинків</a></li>
                                <li><a href="#">Прибирання офісів та ресторанів</a></li>
                                <li><a href="#">Прибирання після ремонту</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footerContactBlock">  
                        <div>
                            <h3>Контакти</h3>
                            <ul className="contactFooter">
                                <li>на зв’язку 24/7</li>
                                <li><a href="#">+48 534 517 801</a></li>
                                <li><a href="#">пошта</a></li>
                                <li><a href="#">адреса</a></li>
                            </ul>
                        </div>
                        <div className="socialsFooter">
                            <h3>Наша технічна підтримка</h3>
                            <img src={instagram} alt="instagram" />
                            <img src={facebook} alt="facebook" />
                            <img src={whats_app} alt="whats-app" />
                        </div>
                    </div>
                    </div>
                    <div className="footerSecurity footerSecurityLink">
                    <p>©2023 Всі права захищено</p>
                    <div className="footerSecurity">
                    <p>Політика конфіденційності</p>
                    <p>Договір публічної оферти</p>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default FooterMenu