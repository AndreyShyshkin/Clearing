import './style.css'
import mainSubscribeBanner1 from './banner1';
import mainSubscribeBanner2 from './banner2';
import mainSubscribeBlock3 from './block3';
import mainSubscribeBlock4 from './block4';

function MainSubscribe() {
  const currentPage = window.location.pathname;

  return (
    <>
      <div className="subscribe">
        <div className="container">
          {currentPage === "/" || currentPage === "/index.html" ? (
            <>
              <h2>Пакет прибирання на місяць</h2>
              <p className="subscribeInfo">
                Підписка діє протягом 30 днів та лише за однією адресою. При
                закінченні терміну дія підписки згорає. Працюємо лише по місту Лодзь
              </p>
              {mainSubscribeBanner1()}
            </>
          ) : currentPage === "/pages/calculator/" || currentPage === "/pages/calculator" || currentPage === "/pages/calculator/index.html" ? (
            <>
              <h2>Ціна на прибирання квартир та будинків</h2>
              {mainSubscribeBanner1()}
            </>
          ) : null}

          {currentPage !== "/pages/calculator/" && currentPage !== "/pages/calculator" && currentPage !== "/pages/calculator/index.html" ? (
            <>
              {mainSubscribeBanner2()}
              {mainSubscribeBlock3()}
              {mainSubscribeBlock4()}
              <button className="buySubscribe">Замовити прибирання</button>
            </>
          ) : null}

        </div>
      </div>
    </>
  )
}

export default MainSubscribe