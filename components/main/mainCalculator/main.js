import './style.css';

function mainCalculator(){
    document.querySelector('.calculator').innerHTML = `
<div class="container">
    <h2>Розрахунок вартості прибирання</h2>
    <div class="calculatorBlock">
        <div class="calculator-form">
            <div class="ViewPlaces">
                <h4>Вид приміщення</h4>
                <div class="Places">
                    <div class="active">Офіс</div>
                    <div>Магазин</div>
                    <div>Ресторан</div>
                </div>
            </div>
            <div class="Size">
                <h4>Оберіть площу приміщення</h4>
                <div class="area">
                    <div class="minus"><p>-</p></div>
                    <div class="areaSize"><span>1</span> м²</div>
                    <div class="plus"><p>+</p></div>
                </div>
                <p>2zł за м²</p>
            </div>
            <div class="services">
                <h4>Додаткові послуги</h4>
                <div>
                    <div class="checkbox"></div> <p>Миття вікон (стандартні) - 35zł</p>
                </div>
                <div>
                    <div class="checkbox"></div> <p>Миття вікон (до підлоги) - 40zł</p>
                </div>
                <div>
                    <div class="checkbox"></div> <p>Мікрохвильовка - 15zł</p>
                </div>
                <div>
                    <div class="checkbox"></div> <p>Холодильник - 40zł</p>
                </div>
                <div>
                    <div class="checkbox"></div> <p>Плита - 35zł</p>
                </div>
                <div>
                    <div class="checkbox"></div> <p>Хімчистка офісних стільчиків - 20zł</p>
                </div>
                <div>
                    <div class="checkbox"></div> <p>Хімчистка дивану 2х - 109,99zł</p>
                </div>
                <div>
                    <div class="checkbox"></div> <p>Хімчистка дивану 3х - 129,99zł</p>
                </div>
                <div>
                    <div class="checkbox"></div> <p>Хімчистка дивану 4х - 149,99zł</p>
                </div>
            </div>
            <div class="keys">
                <h4>Доставимо ключі</h4>
                <div>
                    <div>
                        <img src="/public/images/KEY.png" alt="KEY">
                        <p>Забрати ключі перед прибиранням</p>
                    </div>
                    <div>
                        <img src="/public/images/KEY.png" alt="KEY">
                        <p>Доставити ключі після прибирання</p>
                    </div>
                </div>
            </div>
            <div class="yourInfo">
                <h4>Ваші дані</h4>
                <div>
                    <div>
                        <div>
                            <input type="text" placeholder="Ваше ім’я" id="name">
                        </div>
                        <div>
                            <input type="text" placeholder="Ваше прізвище">
                        </div>
                    </div>
                    <input type="tel" placeholder="Номер телефону">
                    <input type="email" placeholder="Email">
                    <input type="date" placeholder="На коли хочете прибирання?">
                    <input type="time" placeholder="На котру годину?">
                    <input type="text" placeholder="Ваша повна адреса (включаючи номер будинку та квартиру)">
                    <input type="text" placeholder="Ваш коментар">
                </div>
            </div>
            <div class="confirm">
                <div>
                    <div class="checkbox"></div>
                    <p>Оформлюючи замовлення я погоджуюсь з договором публічної оферти та політикою конфіденційності</p>
                </div>
                <div>
                    <div class="checkbox"></div>
                    <p>Я даю згоду для використання моїх особистих данних в цілях відправки підписки та акційних пропозицій</p>
                </div>
            </div>
            <div class="pay">
                <div>
                    <img src="/public/images/cardPay.png" alt="cardPay">
                    <p>Картой online/Apple Pay/Google Pay</p>
                </div>
                <div>
                    <img src="/public/images/cashPay.png" alt="cashPay">
                    <p>Готівкою</p>
                </div>
            </div>


            <div class="sell10">
                <h2>-10%</h2>
                <p>на перше прибирання!</p>
                <p class="first">*вкажіть що це ваше перше замовлення у полі з коментарем</p>
            </div>
        </div>
        <div class="calculator-result">
            <div class="resultMaket">
                <p>Послуга</p>
                <p>Вартість</p>
            </div>
            <div class="result"></div>
            <div class="resultPrice">
                <p>Вартість</p>
                <p><span>0</span>zł</p>
            </div>
            <button>Замовити прибирання</button>
        </div>
    </div>
</div>
    `
    }
    
    export default mainCalculator;