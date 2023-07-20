import './style.css'

import valentin from '/src/assets/images/valentin.png';

function mainSubscribeBanner1() {
    return (
      <>
        <div className="banner1">
            <div className="banner1Container">
                <div className="banner1Right">
                <h3>Місячна підписка на клінінг для будинку чи квартири</h3>
                <ul>
                    <li><div className="circle"></div>1 генеральне прибирання</li>
                    <li><div className="circle"></div>1 базове прибирання</li>
                </ul>
                <div className="valentinBlock">
                    <img src={valentin} alt="valentin" />
                    <p>Хімчистка стільців, диванів, матраців, подушок 
                    та крісел раз у 6 місяців у подарунок!</p>
                </div>
                </div>
                <div className="banner1Left">
                <h3>399zł</h3>
                <p>1 генеральне прибирання + 1 підтримуюче прибирання</p>
                <a href='/pages/calculator/'><button>Замовити прибирання</button></a>
                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default mainSubscribeBanner1