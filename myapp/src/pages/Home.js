
import NavBar from "../components/navbar";
import "../style/navbar.css"
import "../style/home.css"
import Footer from "../components/footer";

import imgEric from "../image/NB-Chic/moit/EBO-moit.jpeg";
import imgBiron from "../image/NB-Chic/moit/PEB-moit.jpeg";

function Home(props) {
   return <div className="Contain-home">
      <div className="navbar">
         <NavBar />
      </div>
      
      <div className="img-praticiens">

         <div className="img-PhillipeEdouardBiron">
            <div className="text-PE">
               <h2> PE Biron </h2>
               <p>Adresse cabinet:792 N6, 69760 Limonest</p>
            </div>
            <a className="PE" href="/phillipeEdouardBiron">
               <img src={imgBiron} />
            </a>
         </div>


         <div className="img-EricBonnet">.
            
            <div className="text-EB">
               <h2> Eric Bonnet </h2>
               <p>Tel Cabinet : 04 72 17 03 79</p>
            </div>
            <a href="/EricBonnet">
               <img src={imgEric} />
            </a>
         </div>

      </div>
      <div className="titlehome">
         <h1>Cabinet du Dr Eric Bonnet et Dr PE Biron</h1>
      </div>
      <div className="button-TraveTo-Phillipe-Edouard-Biron">
         <button className="TraveTo-Phillipe-Edouard-Biron">
            <a className="nav" href="map">Nous Trouver</a>
         </button>
      </div>
      <Footer />
   </div>;
}

export default Home;