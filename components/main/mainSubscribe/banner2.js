import banner2Img from '/public/images/banner2Img.png';
import './style.css';

function mainSubscribeBanner2(){
    document.querySelector('.subscribe .container').innerHTML += `
    <div class="banner2">
      <p>Порадь нас своїм знайомим та отримай знижку на наступну підписку з прибирання <span>50zł!</span></p>
      <img src="${banner2Img}" alt="banner2Img">
    </div>
    `
    }
    
    export default mainSubscribeBanner2;