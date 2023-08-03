import "./style.css";

import illustration_home_3d from "/src/assets/images/services/illustration-home-3d.png";
import illustration_office_3d from "/src/assets/images/services/illustration-office-3d.png";
import hammer_and_wrench_3d from "/src/assets/images/services/hammer-and-wrench-3d.png";

import image11 from "/src/assets/images/services/a-175929-bf-4-b-579-a-7-a-231-a-7-b-03002-b.png";
import image12 from "/src/assets/images/services/clearingKitchen.png";
import image13 from "/src/assets/images/services/toilet-3d.png";
import image14 from "/src/assets/images/services/trash-can-1.png";

import image21 from "/src/assets/images/services/glass-cleaner-1.png";
import image22 from "/src/assets/images/services/water.png";
import image23 from "/src/assets/images/services/m-507-t-0011-sofa-31.png";
import image24 from "/src/assets/images/services/hand_cleaning.png";

import image31 from "/src/assets/images/services/cleaning-21.png";
import image32 from "/src/assets/images/services/c-121.png";
import image33 from "/src/assets/images/services/qas_stove_3d.png";
import image34 from "/src/assets/images/services/unnamed.png";

function MainServices() {
  return (
    <>
      <div className="mainServices">
        <div className="container">
          <h2>Клінінг у Лодзі</h2>
          <div className="PlaceCleanUpServices">
            <div>
              <img src={illustration_home_3d} alt="" />
              <p>Прибирання квартир та будинків</p>
            </div>
            <div>
              <img src={illustration_office_3d} alt="" />
              <p>Прибирання офісних приміщень</p>
            </div>
            <div>
              <img src={hammer_and_wrench_3d} alt="" />
              <p>Прибирання після ремонту</p>
            </div>
          </div>
          <h2>Наші послуги</h2>
          <div className="OurServices">
            <div>
              <div>
                <div>
                  <img src={image11} alt="" />
                  <p>Прибирання кімнат</p>
                </div>
                <div>
                  <img src={image12} alt="" />
                  <p>Прибирання кухні</p>
                </div>
              </div>
              <div>
                <div>
                  <img src={image13} alt="" />
                  <p>Прибирання санвузла</p>
                </div>
                <div>
                  <img src={image14} alt="" />
                  <p>Прибирання та виніс сміття</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <img src={image21} alt="" />
                  <p>Миття вікон</p>
                </div>
                <div>
                  <img src={image22} alt="" />
                  <p>Усунення водного нальоту</p>
                </div>
              </div>
              <div>
                <div>
                  <img src={image23} alt="" />
                  <p>Хімчистка диванів</p>
                </div>
                <div>
                  <img src={image24} alt="" />
                  <p>Миття стін</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <img src={image31} alt="" />
                  <p>Миття підлоги</p>
                </div>
                <div>
                  <img src={image32} alt="" />
                  <p>Миття посуду</p>
                </div>
              </div>
              <div>
                <div>
                  <img src={image33} alt="" />
                  <p>Усунення жиру та нагару</p>
                </div>
                <div>
                  <img src={image34} alt="" />
                  <p>Пилосос</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainServices;
