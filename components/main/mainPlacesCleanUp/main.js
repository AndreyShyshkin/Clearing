import Office3D from "/public/images/3dOffice.png";
import Caffe3D from "/public/images/3dCaffe.png";
import Shope3D from "/public/images/3dShope.png";
import './style.css';

function mainPlacesCleanUp(){
    document.querySelector('.placesCleanUp').innerHTML = `
<div class="container">
    <h2>Що входить в прибирання?</h2>
    <div class="placesCleanUpBlocks">
        <div>
            <img src="${Office3D}" alt="3dOffice">
            <p>В офісах</p>
        </div>
        <div>
            <img src="${Caffe3D}" alt="3dOffice">
            <p>В ресторанах</p>
        </div>
        <div>
            <img src="${Shope3D}" alt="3dOffice">
            <p>В магазинах</p>
        </div>
    </div>
</div>
    `
    }
    
    export default mainPlacesCleanUp;
