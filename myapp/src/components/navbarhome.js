import { useRef, } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import img from "../image/792_eb.png";


import '../style/navbarhome.css'
// npm install react-icons
function NavBarHome() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header>
            <div className="Navbarh">
                <nav ref={navRef}>
                    {/* <div className="Eric-Bonnet-Phillipe-Edouart-Biron"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1000px-Adidas_Logo.svg.png" alt="Eric Bonnet Phillipe Edouard Biron"/></div> */}
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes />
                    </button>
                    <div className="logobtn">
                        <div className="logoh">
                            <img src={img} alt="logo-nav" />
                        </div>
                        <div className="btn-navh">
                            <ul>
                                <li>
                                    <a className="nav" href="/home">Home</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a className="nav" href="/NousRetrouver">Nous Trouver </a>
                                </li>
                            </ul>

                            <ul>
                                <li>
                                    <a className="nav" href="/PhillipeEdouardBiron">PE Biron</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a className="nav" href="/EricBonnet">E bonnet</a>
                                </li>
                            </ul>
                        </div>
                    </div>


                </nav>

                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
            </div>
        </header>


    );
}


export default NavBarHome; 