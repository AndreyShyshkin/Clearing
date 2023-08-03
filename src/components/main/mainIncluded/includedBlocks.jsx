import "./style.css";

import { useEffect } from "react";

function IncludedBlocks() {
  useEffect(() => {
    const includedBlocks = document.querySelectorAll(".includedBlocks");
    const includedBlock = document.querySelectorAll(".includedBlock");
    const currentPage = window.location.pathname;

    if (
      currentPage == "/pages/calculator/" ||
      currentPage == "/pages/calculator" ||
      currentPage == "/pages/calculator/index.html"
    ) {
      includedBlocks[0].classList.add("container");
      includedBlock.forEach((element) => {
        element.style.backgroundColor = "white";
      });
    }
  }, []);

  return (
    <>
      <div className="includedBlocks">
        <div className="includedBlock01 includedBlock">
          <div className="includedBlocContent">
            <h3>01</h3>
            <h4>Бюджетна підписка</h4>
            <p>
              Ми відправимо до вас клінера з повним арсеналом професійних
              інструментів (миючі пилососи і пароочисники KARCHER та безпечна і
              суперпотужна хімія KIEHL та Pomoc Domowa). Клінер прибере будинок
              і відмиє всі поверхні від жиру, бруду та пилу. Він наведе порядок
              всередині шаф, помиє вікна та винесе сміття. Раз на 6 місяців
              проводимо хімчистку диванів, матраців та подушок.
            </p>
          </div>
        </div>
        <div className="includedBlock02 includedBlock">
          <div className="includedBlocContent">
            <h3>02</h3>
            <h4>Підтримуюче прибирання</h4>
            <p>
              Змінюємо постільну білизну, акуратно складаємо реші у шафі,
              видаляємо пил з поверхонь, пилососимо та миємо пілогу. Робимо все,
              аби тривати вашу домівку у чистоті!
            </p>
            <span>*Не включає миття вікон</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default IncludedBlocks;
