import './style.css'
import detailsPlus from '/src/assets/images/detailsPlus.png'
import detailsMinus from '/src/assets/images/detailsMinus.png'

import { useState } from 'react';

function MainFQA() {

  const [isOpen, setIsOpen] = useState(Array(6).fill(false));

  const handleToggle = (index) => {
    const updatedOpen = [...isOpen];
    updatedOpen[index] = !isOpen[index];
    setIsOpen(updatedOpen);
  };

  return (
    <>
      <div className='FQA'>
        <div className="container">
          <h2 className="FQAContainerH2">Популярні запитання</h2>
            <div className="FQAContainer">
              <div className="FQABlocks">     
                <details  open onToggle={() => handleToggle(0)}>
                  <summary>
                    <div className="summaryDiv">
                      Скільки коштує клінінг?
                      {isOpen[0] ? (
                        <img src={detailsMinus} alt="detailsMinus" />
                      ) : (
                        <img src={detailsPlus} alt="detailsPlus" />
                      )}
                    </div>
                  </summary>
                  <p>Для будинків та квартир у нас діє акційна місячна підписка вартістю 399zł. <br />
                    В підписку входить 1 генеральне прибирання та 1 підтримуюче.</p>
                  <p>Прибирання офісів на ресторанів — 2zł за м². <br />
                    Прибирання приміщень після ремонту — 5zł за м².</p>
                </details>
                <details onToggle={() => handleToggle(1)}>
                  <summary>
                    <div className="summaryDiv">
                      Якими засобами користуємося?
                      {isOpen[1] ? (
                        <img src={detailsMinus} alt="detailsMinus" />
                      ) : (
                        <img src={detailsPlus} alt="detailsPlus" />
                      )}
                    </div>
                  </summary>
                  <p>W naszej pracy używamy tylko wysokiej jakości niemieckiego sprzętu KARCHER oraz detergentów KIEHL.
                    Cała nasza chemia jest całkowicie bezpieczna i nie powoduje alergii.</p>
                </details>
                <details onToggle={() => handleToggle(2)}>
                  <summary>
                    <div className="summaryDiv">
                      Скільки годин триває прибирання?
                      {isOpen[2] ? (
                        <img src={detailsMinus} alt="detailsMinus" />
                      ) : (
                        <img src={detailsPlus} alt="detailsPlus" />
                      )}
                    </div>
                  </summary>
                  <p>Czas sprzątania zależy od powierzchni pomieszczenia i stopnia zabrudzenia. Nasi sprzątacze zwykle kończą sprzątanie w ciągu 2-3 godzin.</p>
                </details>
                <details onToggle={() => handleToggle(3)}>
                  <summary>
                    <div className="summaryDiv">
                      Що таке підписка на прибирання?
                      {isOpen[3] ? (
                        <img src={detailsMinus} alt="detailsMinus" />
                      ) : (
                        <img src={detailsPlus} alt="detailsPlus" />
                      )}
                    </div>
                  </summary>
                  <p>Abonament to wyjątkowa oferta promocyjna na miesięczny pakiet sprzątający! Plusem subskrypcji jest to, że za przystępną cenę otrzymasz 1 sprzątanie ogólne i 1 czyszczenie konserwacyjne miesięcznie. Nie musisz tracić czasu na ponowne zamawianie sprzątaczki, po wykupieniu abonamentu przyjedziemy o umówionej godzinie.</p>
                </details>
                <details onToggle={() => handleToggle(4)}>
                  <summary>
                    <div className="summaryDiv">
                      Яка гарантія якісного прибрання?
                      {isOpen[4] ? (
                        <img src={detailsMinus} alt="detailsMinus" />
                      ) : (
                        <img src={detailsPlus} alt="detailsPlus" />
                      )}
                    </div>
                  </summary>
                  <p>Uważnie monitorujemy jakość sprzątania i zbieramy opinie od każdego klienta. Jeśli nie podoba Ci się jakość sprzątania, wyczyścimy go ponownie w najbliższych dniach.</p>
                </details>
                <details onToggle={() => handleToggle(5)}>
                  <summary>
                    <div className="summaryDiv">
                      Як замовити та оплатити прибирання?
                      {isOpen[5] ? (
                        <img src={detailsMinus} alt="detailsMinus" />
                      ) : (
                        <img src={detailsPlus} alt="detailsPlus" />
                      )}
                    </div>
                  </summary>
                  <p>Na naszej stronie możesz od razu zamówić i opłacić sprzątanie! Wpisz swoje dane, datę i adres w formularzu oraz wybierz dogodną formę płatności (online lub gotówka na spotkaniu). Ponadto na naszej stronie możesz obliczyć koszt sprzątania lokalu za pomocą kalkulatora!</p>
                </details>
                <a href="/pages/fqa/"><button className="btnFQA">Задати своє питання</button></a>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainFQA