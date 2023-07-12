import './style.css'
import detailsPlus from '/src/assets/images/detailsPlus.png'

function MainFQA() {

  return (
    <>
      <div className='FQA'>
        <div className="container">
          <h2 className="FQAContainerH2">Популярні запитання</h2>
            <div className="FQAContainer">
              <div className="FQABlocks">     
                <details open>
                  <summary>
                    <div className="summaryDiv">
                      Скільки коштує клінінг?
                      <img src={detailsPlus} alt="detailsPlus" />
                    </div>
                  </summary>
                  <p>Для будинків та квартир у нас діє акційна місячна підписка вартістю 399zł. <br />
                    В підписку входить 1 генеральне прибирання та 1 підтримуюче.</p>
                  <p>Прибирання офісів на ресторанів — 2zł за м². <br />
                    Прибирання приміщень після ремонту — 5zł за м².</p>
                </details>
                <details>
                  <summary>
                    <div className="summaryDiv">
                      Якими засобами користуємося?
                      <img src={detailsPlus} alt="detailsPlus" />
                    </div>
                  </summary>
                  <p>W naszej pracy używamy tylko wysokiej jakości niemieckiego sprzętu KARCHER oraz detergentów KIEHL.
                    Cała nasza chemia jest całkowicie bezpieczna i nie powoduje alergii.</p>
                </details>
                <details>
                  <summary>
                    <div className="summaryDiv">
                      Скільки годин триває прибирання?
                      <img src={detailsPlus} alt="detailsPlus" />
                    </div>
                  </summary>
                  <p>Czas sprzątania zależy od powierzchni pomieszczenia i stopnia zabrudzenia. Nasi sprzątacze zwykle kończą sprzątanie w ciągu 2-3 godzin.</p>
                </details>
                <details>
                  <summary>
                    <div className="summaryDiv">
                      Що таке підписка на прибирання?
                      <img src={detailsPlus} alt="detailsPlus" />
                    </div>
                  </summary>
                  <p>Abonament to wyjątkowa oferta promocyjna na miesięczny pakiet sprzątający! Plusem subskrypcji jest to, że za przystępną cenę otrzymasz 1 sprzątanie ogólne i 1 czyszczenie konserwacyjne miesięcznie. Nie musisz tracić czasu na ponowne zamawianie sprzątaczki, po wykupieniu abonamentu przyjedziemy o umówionej godzinie.</p>
                </details>
                <details>
                  <summary>
                    <div className="summaryDiv">
                      Яка гарантія якісного прибрання?
                      <img src={detailsPlus} alt="detailsPlus" />
                    </div>
                  </summary>
                  <p>Uważnie monitorujemy jakość sprzątania i zbieramy opinie od każdego klienta. Jeśli nie podoba Ci się jakość sprzątania, wyczyścimy go ponownie w najbliższych dniach.</p>
                </details>
                <details>
                  <summary>
                    <div className="summaryDiv">
                      Як замовити та оплатити прибирання?
                      <img src={detailsPlus} alt="detailsPlus" />
                    </div>
                  </summary>
                  <p>Na naszej stronie możesz od razu zamówić i opłacić sprzątanie! Wpisz swoje dane, datę i adres w formularzu oraz wybierz dogodną formę płatności (online lub gotówka na spotkaniu). Ponadto na naszej stronie możesz obliczyć koszt sprzątania lokalu za pomocą kalkulatora!</p>
                </details>
                <button className="btnFQA">Задати своє питання</button>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainFQA