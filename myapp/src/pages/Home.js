
import NavBar from "../components/navbar";
import "../style/navbar.css"
import "../style/home.css"
import Footer from "../components/footer";
import {BsTelephone} from "react-icons/bs";
import imgEric from "../image/NB-Chic/moit/EBO-moit.jpeg";
import imgBiron from "../image/NB-Chic/moit/PEB-moit.jpeg";
import NavBarHome from "../components/navbarhome";

function Home(props) {
   return <div className="Contain-home">
      <div className="navbar">
         <NavBar />
      </div>

      <div className="img-praticiens">

         <div className="img-PhillipeEdouardBiron">
            <div className="text-PE">
               <h2> PE Biron </h2>
               <p>Adresse : 792 N6, 69760 Limonest</p>
            </div>
            <div className="right">
               <div className="PEIMG">
                  <a className="PE" href="/phillipeEdouardBiron">
                     <img src={imgBiron} />
                  </a>
               </div>
            </div>

         </div>


         <div className="img-EricBonnet">
            <div className="text-EB">
               <h2> Eric Bonnet </h2>
               <p> <BsTelephone/> : 04 72 17 03 79</p>
            </div>
            <div className="right">
               <div className="EBIMG">
                  <a className="EB" href="/EricBonnet">
                     <img src={imgEric} />
                  </a>
               </div>
            </div>
         </div>


      </div>
      <div className="titlehome">
         <h1>Cabinet de Chirurgie Dentaire</h1>



         <div className="btntitlehome">
            <a className="findus nav btnContfind" href="map">Nous Trouver</a>
            <a className="contactus nav btnContfind" href="NousRetrouver">Nous Contacter</a>
         </div>
      </div>
    
      <Footer />
   </div>;
}

export default Home;