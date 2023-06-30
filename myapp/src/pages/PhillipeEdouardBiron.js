
import NavBar from "../components/navbar";
import "../style/navbar.css"
import "../style/PhillipeEdouardBiron.css"

function PhillipeEdouardBiron(props) {
    return <div className="Contain-PhillipeEdouardBiron">
        <div className="navbar">
            <NavBar />
        </div>
        <div className="Background-image"></div>
        <div className="PhillipeEdouardBiron">
            <h1>PE Biron</h1>
            <h2>Docteur en Chirurgie Dentaire</h2>
        </div>
        <div className="txt-info-Phillipe-Edouard-Biron">
            <h3>
                D.U. d’implantologie Orale<br />
                792 Route Nationale 6<br />
                69760 LIMONEST <br />
                bironphilippeedouard@gmail.com
            </h3>
        </div>
    </div>;
}

export default PhillipeEdouardBiron;