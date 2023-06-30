
import NavBar from "../components/navbar";
import { AiFillCar } from "react-icons/ai";
import "../style/TraveTo.css"


function TraveTo(props) {
  return <div className="Contain-TraveTo">
    <div className="navbar">
      <NavBar />
    </div>

    <div className="Partie-GD">
      <div className="Partie-G">
        <div className="title-Phillipe-Edouart-Biron">
          <h1>NOUS CONTACTER</h1>
        </div>
        <div className="why-Phillipe-Edouart-Biron">
          <h2>Une question ? </h2>
        </div>
        <div className="input-Question-Phillipe-Edouart-Biron">
          <form className="Contact-form">
            <input id="Name-Mail" placeholder="Nom/prenom" />
            <input id="Name-Mail" type="email" placeholder="Adresse Mail" />
            <textarea name='message' type='text' placeholder='Message' />
            <input type='submit' value='Envoyer' id='input-submit' />
          </form>
        </div>
      </div>

      <div className="Partie-D">
        <div className="Details-TraveTo">
          <h3>Où nous trouver ?</h3>
          <div className="Info-map-All">
            <div className="Info-map">
              <p>-- Parking privé </p>
              <AiFillCar />--
            </div>
            <div className="Info-map">
              <p>-- Bus lignes 21 et 61 --</p>
            </div>
            <div className="Info-map">
              <p>-- Bus arrêt "Limonest le Puy d’Or" --</p>
            </div></div>
          <div className="button-Map">
            <button>
              <a href="/map">Nous Trouver</a>
            </button>
          </div>
        </div>
      </div>
    </div>




  </div>;
}

export default TraveTo;


// <div className="titre">
// <p>Où Nous trouver?</p>
// </div>