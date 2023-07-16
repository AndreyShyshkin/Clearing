import './style.css'

import KEY from '/src/assets/images/KEY.png'
import cardPay from '/src/assets/images/cardPay.png'
import cashPay from '/src/assets/images/cashPay.png'

import { useState } from 'react';

function MainCalculator() {

    const [areaSize, setAreaSize] = useState(1);
    const [areaPrice, setAreaPrice] = useState(2);
    const [price, setPrice] = useState(2);
  
    const handleMinusClick = () => {
        if (areaSize > 1) {
          setAreaSize(areaSize - 1);
          setPrice(price - 2);
          setAreaPrice(areaPrice - 2);
        }
      };
  
    const handlePlusClick = () => {
      setAreaSize(areaSize + 1);
      setPrice(price + 2);
      setAreaPrice(areaPrice + 2);
    };

  return (
    <>
        <div className="calculator">
            <div className="container">
                <h2>Розрахунок вартості прибирання</h2>
                <div className="calculatorBlock">
                    <div className="calculator-form">
                        <div className="ViewPlaces">
                            <h4>Вид приміщення</h4>
                            <div className="Places">
                                <div className="active">Офіс</div>
                                <div>Магазин</div>
                                <div>Ресторан</div>
                            </div>
                        </div>
                        <div className="Size">
                            <h4>Оберіть площу приміщення</h4>
                            <div className="area">
                                <div className="minus" onClick={handleMinusClick}><p>-</p></div>
                                <div className="areaSize"><span>1</span> м²</div>
                                <div className="plus" onClick={handlePlusClick}><p>+</p></div>
                            </div>
                            <p>2zł за м²</p>
                        </div>
                        <div className="services">
                            <h4>Додаткові послуги</h4>
                            <div>
                                <div className="checkbox"></div> <p>Миття вікон (стандартні) - 35zł</p>
                            </div>
                            <div>
                                <div className="checkbox"></div> <p>Миття вікон (до підлоги) - 40zł</p>
                            </div>
                            <div>
                                <div className="checkbox"></div> <p>Мікрохвильовка - 15zł</p>
                            </div>
                            <div>
                                <div className="checkbox"></div> <p>Холодильник - 40zł</p>
                            </div>
                            <div>
                                <div className="checkbox"></div> <p>Плита - 35zł</p>
                            </div>
                            <div>
                                <div className="checkbox"></div> <p>Хімчистка офісних стільчиків - 20zł</p>
                            </div>
                            <div>
                                <div className="checkbox"></div> <p>Хімчистка дивану 2х - 109,99zł</p>
                            </div>
                            <div>
                                <div className="checkbox"></div> <p>Хімчистка дивану 3х - 129,99zł</p>
                            </div>
                            <div>
                                <div className="checkbox"></div> <p>Хімчистка дивану 4х - 149,99zł</p>
                            </div>
                        </div>
                        <div className="keys">
                            <h4>Доставимо ключі</h4>
                            <div>
                                <div>
                                    <img src={KEY} alt="KEY" />
                                    <p>Забрати ключі перед прибиранням</p>
                                </div>
                                <div>
                                    <img src={KEY} alt="KEY" />
                                    <p>Доставити ключі після прибирання</p>
                                </div>
                            </div>
                        </div>
                        <div className="yourInfo">
                            <h4>Ваші дані</h4>
                            <div>
                                <div>
                                    <div>
                                        <input type="text" placeholder="Ваше ім’я" id="name" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Ваше прізвище" />
                                    </div>
                                </div>
                                <input type="tel" placeholder="Номер телефону" />
                                <input type="email" placeholder="Email" />
                                <input type="date" placeholder="На коли хочете прибирання?" />
                                <input type="time" placeholder="На котру годину?" />
                                <input type="text" placeholder="Ваша повна адреса (включаючи номер будинку та квартиру)" />
                                <input type="text" placeholder="Ваш коментар" />
                            </div>
                        </div>
                        <div className="confirm">
                            <div>
                                <div className="checkbox"></div>
                                <p>Оформлюючи замовлення я погоджуюсь з договором публічної оферти та політикою конфіденційності</p>
                            </div>
                            <div>
                                <div className="checkbox"></div>
                                <p>Я даю згоду для використання моїх особистих данних в цілях відправки підписки та акційних пропозицій</p>
                            </div>
                        </div>
                        <div className="pay">
                            <div>
                                <img src={cardPay} alt="cardPay" />
                                <p>Картой online / Apple Pay / Google Pay</p>
                            </div>
                            <div>
                                <img src={cashPay} alt="cashPay" />
                                <p>Готівкою</p>
                            </div>
                        </div>


                        <div className="sell10 sell10FullScreen">
                            <h2>-10%</h2>
                            <p>на перше прибирання!</p>
                            <p className="first">*вкажіть що це ваше перше замовлення у полі з коментарем</p>
                        </div>
                    </div>
                    <div className="resultSell">
                        <div className="calculator-result">
                            <div className="resultMaket">
                                <p>Послуга</p>
                                <p>Вартість</p>
                            </div>
                            <div className="result">
                                <div>
                                    <p>Площа: {areaSize} м² </p>
                                    <p>{areaPrice}zł</p>
                                </div>
                            </div>
                            <div className="resultPrice">
                                <p>Вартість</p>
                                <p><span>{price}</span>zł</p>
                            </div>
                            <button>Замовити прибирання</button>
                        </div>
                        <div className="sell10 sell10Mobile">
                                <h2>-10%</h2>
                                <p>на перше прибирання!</p>
                                <p className="first">*вкажіть що це ваше перше замовлення у полі з коментарем</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MainCalculator