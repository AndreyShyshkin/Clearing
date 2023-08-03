import "./style.css";

import illustration from "/src/assets/images/illustrationHome.png";

import features from "/src/components/header/features/main";

function HeaderHome() {
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="mainScreen">
            <h1>
              <span className="highlighting">Приберемо</span> у вашому будинку
              чи квартирі у Лодзі всього за{" "}
              <span className="highlighting">399zł</span>
            </h1>
            <h2 className="info">
              Клінінгова компанія Comfort Group пропонує акційну підписку на
              послуги клінінгу у Лодзі всього за <b>399zł</b>. Підписка включає
              прибирання в кімнатах, санвузлі та кухні.
            </h2>
            <a href="/pages/calculator/">
              <button className="order">Замовити прибирання</button>
            </a>
          </div>
          <div className="homeImg">
            <img src={illustration} alt="illustration" />
          </div>
        </div>
        {features()}
      </div>
    </>
  );
}

export default HeaderHome;
