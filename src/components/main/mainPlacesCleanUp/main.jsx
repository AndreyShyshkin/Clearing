import './style.css'
import Office3D from "/src/assets/images/3dOffice.png";
import Caffe3D from "/src/assets/images/3dCaffe.png";
import Shope3D from "/src/assets/images/3dShope.png";

function MainPlacesCleanUp() {

  return (
    <>
      <div className="placesCleanUp">
        <div className="container">
            <h2>Що входить в прибирання?</h2>
            <div className="placesCleanUpBlocks">
                <div>
                    <img src={Office3D} alt="3dOffice" />
                    <p>В офісах</p>
                </div>
                <div>
                    <img src={Caffe3D} alt="3dOffice" />
                    <p>В ресторанах</p>
                </div>
                <div>
                    <img src={Shope3D} alt="3dOffice" />
                    <p>В магазинах</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default MainPlacesCleanUp