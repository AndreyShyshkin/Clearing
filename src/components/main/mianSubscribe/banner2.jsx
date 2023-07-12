import './style.css'

import banner2Img from '/src/assets/images/banner2Img.png';

function mainSubscribeBanner2() {
    return (
      <>
        <div className="banner2">
        <p>Порадь нас своїм знайомим та отримай знижку на наступну підписку з прибирання <span>50zł!</span></p>
        <img src={banner2Img} alt="banner2Img" />
        </div>
      </>
    )
  }
  
  export default mainSubscribeBanner2