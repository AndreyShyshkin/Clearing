import './style.css'

import KEY from '/src/assets/images/KEY.png'
import cardPay from '/src/assets/images/cardPay.png'
import cashPay from '/src/assets/images/cashPay.png'

import check from '/src/assets/images/check.png'

import { useState } from 'react';
import { useForm } from 'react-hook-form'


function MainCalculator() {

    const currentPage = window.location.pathname;

    const {
        register,
        handleSubmit,
      } = useForm()
    
    const onSubmit = (data) => {
        if(!confidentialityСheck) {
            alert('Ви повинні дати згоду перед відправкою');
            return;
        }

        if(!personalDataСheck) {
            alert('Ви повинні дати згоду перед відправкою');
            return;
        }

        if(!activeKey) {
            alert('Ви спосіб повернення ключа не вибрали');
            return;
        }

        if(!activePay) {
            alert('Ви спосіб оплати не вибрали');
            return;
        }

        if(!activeItem || activeItem === "") {
            alert('Ви не вибрали місце для прибирання');
            return;
        }

        data.Places = activeItem;
        data.Area = areaSize;
        data.Key = activeKey;
        data.Pay = activePay;
        data.TotalPrice = price;

        const services = [...selectedServices]; 
  
        selectedServices.forEach((selectedService, index) => {
            services[index] = selectedService.service;  
        });

        data.services = services;

        console.log(data);

        setTimeout(() => {
            window.location.href = '/pages/afterpay/'; 
          }, 5000);
    }


    const [selectedServices, setSelectedServices] = useState([]);

    const [areaSize, setAreaSize] = useState(1);
    const [areaPrice, setAreaPrice] = useState(2);
    const [price, setPrice] = useState(2);

    const [activeItem, setActiveItem] = useState("");
    const [activeKey, setActiveKey] = useState("");
    const [activePay, setActivePay] = useState("");

    const [confidentialityСheck, setConfidentiality] = useState(false);
    const [personalDataСheck, setPersonalData] = useState(false);
    
    const handleItemClick = (item) => {
      setActiveItem(item);
    };

    window.onload = () => {
        if(currentPage !== "/pages/calculator/" && currentPage !== "/pages/calculator" && currentPage !== "/pages/calculator/index.html"){
            handleItemClick('')
        }else{
            handleItemClick('Дім')
        } 
    }

    const handleKeyClick = (item) => {
        setActiveKey(item);
      };
  
      const handlePayClick = (item) => {
        setActivePay(item);
      };

      const confidentialityClick = () => {
        setConfidentiality(!confidentialityСheck);
      }

      const personalDataClick = () => {
        setPersonalData(!personalDataСheck);
      }

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

    const handleServiceClick = (service, servicePrice) => {
        const serviceIndex = selectedServices.findIndex((selectedService) => selectedService.service == service);

        if (serviceIndex !== -1) {
            setSelectedServices((prevSelectedServices) => prevSelectedServices.filter((_, index) => index !== serviceIndex));
            setPrice(price - servicePrice);
        } else {
            setSelectedServices((prevSelectedServices) => [...prevSelectedServices, { service, servicePrice }]);
            setPrice(price + servicePrice);
        }
    }
    
    const getServiceImage = (service) => {
        const serviceIndex = selectedServices.findIndex(
          (selectedService) => selectedService.service == service
        );
        return serviceIndex !== -1 ? check : '';
      };
      
      

  return (
    <>
        <div className="calculator">
            <div className="container">
                <h2>Розрахунок вартості прибирання</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="calculatorBlock">
                        <div className="calculator-form">
                        {currentPage !== "/pages/calculator/" && currentPage !== "/pages/calculator" && currentPage !== "/pages/calculator/index.html" ? (
                            <>
                            <div className="ViewPlaces">
                                <h4>Вид приміщення</h4>
                                <div className="Places">
                                    <div
                                        className={activeItem == 'Офіс' ? 'active' : ''}
                                        onClick={() => handleItemClick('Офіс')}
                                    >
                                        Офіс
                                    </div>
                                    <div
                                        className={activeItem == 'Магазин' ? 'active' : ''}
                                        onClick={() => handleItemClick('Магазин')}
                                    >
                                        Магазин
                                    </div>
                                    <div
                                        className={activeItem == 'Ресторан' ? 'active' : ''}
                                        onClick={() => handleItemClick('Ресторан')}
                                    >
                                        Ресторан
                                    </div>
                                </div>
                            </div>
                            </>
                        ) : null}
                            <div className="Size">
                                <h4>Оберіть площу приміщення</h4>
                                <div className="area">
                                <div className={`minus ${areaSize > 1 ? 'largerArea' : ''}`}  onClick={handleMinusClick}><p>-</p></div>
                                <div className="areaSize"><span>{areaSize}</span> м²</div>
                                <div className="plus" onClick={handlePlusClick}><p>+</p></div>
                                </div>
                                <p>2zł за м²</p>
                            </div>
                            <div className="services">
                                <h4>Додаткові послуги</h4>
                                <div onClick={() => handleServiceClick("Миття вікон (стандартні)", 35)}>
                                    <div className="checkbox"><img src={getServiceImage("Миття вікон (стандартні)")} /></div> <p>Миття вікон (стандартні) - 35zł</p>
                                </div>
                                <div onClick={() => handleServiceClick("Миття вікон (до підлоги)", 40)}>
                                    <div className="checkbox"><img src={getServiceImage("Миття вікон (до підлоги)")} /></div> <p>Миття вікон (до підлоги) - 40zł</p>
                                </div>
                                {currentPage !== "/pages/calculator/" && currentPage !== "/pages/calculator" && currentPage !== "/pages/calculator/index.html" ? (
                                    <>
                                    <div onClick={() => handleServiceClick("Мікрохвильовка", 15)}>
                                        <div className="checkbox"><img src={getServiceImage("Мікрохвильовка")} /></div> <p>Мікрохвильовка - 15zł</p>
                                    </div>
                                    <div onClick={() => handleServiceClick("Холодильник", 40)}>
                                        <div className="checkbox"><img src={getServiceImage("Холодильник")} /></div> <p>Холодильник - 40zł</p>
                                    </div>
                                    <div onClick={() => handleServiceClick("Плита", 35)}>
                                        <div className="checkbox"><img src={getServiceImage("Плита")} /></div> <p>Плита - 35zł</p>
                                    </div>
                                    <div onClick={() => handleServiceClick("Хімчистка офісних стільчиків", 20)}>
                                        <div className="checkbox"><img src={getServiceImage("Хімчистка офісних стільчиків")} /></div> <p>Хімчистка офісних стільчиків - 20zł</p>
                                    </div>
                                    <div onClick={() => handleServiceClick("Хімчистка дивану 2х", 109.99)}>
                                        <div className="checkbox"><img src={getServiceImage("Хімчистка дивану 2х")} /></div> <p>Хімчистка дивану 2х - 109,99zł</p>
                                    </div>
                                    <div onClick={() => handleServiceClick("Хімчистка дивану 3х", 129.99)}>
                                        <div className="checkbox"><img src={getServiceImage("Хімчистка дивану 3х")} /></div> <p>Хімчистка дивану 3х - 129,99zł</p>
                                    </div>
                                    <div onClick={() => handleServiceClick("Хімчистка дивану 4х", 149.99)}>
                                        <div className="checkbox"><img src={getServiceImage("Хімчистка дивану 4х")} /></div> <p>Хімчистка дивану 4х - 149,99zł</p>
                                    </div>
                                    </>
                                ) : null}
                            </div>
                            <div className="keys">
                                <h4>Доставимо ключі</h4>
                                <div>
                                    <div
                                    className={activeKey == 'перед' ? 'active' : ''}
                                    onClick={() => handleKeyClick('перед')}
                                    >
                                        <img src={KEY} alt="KEY" />
                                        <p>Забрати ключі перед прибиранням</p>
                                    </div>
                                    <div
                                    className={activeKey == 'після' ? 'active' : ''}
                                    onClick={() => handleKeyClick('після')}
                                    >
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
                                            <input type="text" placeholder="Ваше ім’я" id="name" {...register('name', { required: true })} />
                                        </div>
                                        <div>
                                            <input type="text" placeholder="Ваше прізвище" {...register('secondName', { required: true })} />
                                        </div>
                                    </div>
                                    <input type="tel" placeholder="Номер телефону" {...register('phone', { required: true })} />
                                    <input type="email" placeholder="Email" {...register('email', { required: true })} />
                                    <input type="date" placeholder="На коли хочете прибирання?" {...register('date', { required: true })} />
                                    <input type="time" placeholder="На котру годину?" {...register('time', { required: true })} />
                                    <input type="text" placeholder="Ваша повна адреса (включаючи номер будинку та квартиру)" {...register('address', { required: true })} />
                                    <textarea type="text" style={{height: '90px', width: '100%',resize: 'none'}} placeholder="Ваш коментар" {...register('comment', { required: true })} />
                                </div>
                            </div>
                            <div className="confirm">
                                <div onClick={confidentialityClick}>
                                    <div className="checkbox">
                                    {confidentialityСheck && <img src={check} alt="" />}
                                    </div>
                                    <p>Оформлюючи замовлення я погоджуюсь <a href="#">з договором публічної оферти та політикою конфіденційності</a></p>
                                </div>
                                <div onClick={personalDataClick}>
                                    <div className="checkbox">
                                    {personalDataСheck && <img src={check} alt="" />}
                                    </div>
                                    <p>Я даю згоду для використання моїх особистих данних в цілях відправки підписки та акційних пропозицій</p>
                                </div>
                            </div>
                            <div className="pay">
                                <div
                                className={activePay == 'cardPay' ? 'active' : ''}
                                onClick={() => handlePayClick('cardPay')}
                                >
                                    <img src={cardPay} alt="cardPay" />
                                    <p>Картой online / Apple Pay / Google Pay</p>
                                </div>
                                <div
                                className={activePay == 'cashPay' ? 'active' : ''}
                                onClick={() => handlePayClick('cashPay')}
                                >
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

                                    {selectedServices.length > 0 && selectedServices.map((selectedService, index) => (
                                        <div key={index}>
                                            <p>{selectedService.service}</p>
                                            <p>{selectedService.servicePrice}zł</p>
                                        </div>
                                    ))}


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
                </form>
            </div>
        </div>
    </>
  )
}

export default MainCalculator