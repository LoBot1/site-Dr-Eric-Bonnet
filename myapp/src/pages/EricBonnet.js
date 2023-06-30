
import NavBar from "../components/navbar";
import "../style/navbar.css"
import "../style/EricBonnet.css"

function EricBonnet(props) {
    return <div className="Contain-EricBonnet">
        <div className="navbar">
            <NavBar />
        </div>
        <div className="Background-image"></div>
        <div className="EricBonnet">
            <h1> Eric Bonnet </h1>
            <h2>Docteur en Chirurgie Dentaire</h2>
        </div>
        <div className="txt-info-Eric-Bonnet">
            <h3>
                Docteur de l’Université Claude Bernard<br/>
                Ancien assistant hospitalo-universitaire<br/>
                792 Route Nationale 6<br/>
                69760 LIMONEST <br/>
                bonnet.e@wanadoo.fr
            </h3>
        </div>
    </div>;
}

export default EricBonnet;