import { useRef, } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import img from "../image/792_eb.png";


import '../style/navbar.css'
// npm install react-icons
function NavBar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header>
            <div className="Navbar">
                <nav ref={navRef}>
                    {/* <div className="Eric-Bonnet-Phillipe-Edouart-Biron"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1000px-Adidas_Logo.svg.png" alt="Eric Bonnet Phillipe Edouard Biron"/></div> */}
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes />
                    </button>
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
                    <img src={img} alt="logo-nav" />
                    <ul>
                        <li>
                            <a className="nav" href="/PhillipeEdouardBiron">PE Biron</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a className="nav" href="/EricBonnet">E Bonnet</a>
                        </li>
                    </ul>
                </nav>

                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
            </div>
        </header>


    );
}


export default NavBar; 