import React from "react";
import "../style/Footer.css";
import img from "../image/792_eb.png";
function Footer() {
    return <div>
        <div className="footer">
            <div className="left-footer">
                <div className="rotateimg1">
                    <div className="contentrotate">
                        <span className="backimg"></span>
                        <img src={img} alt="logo phillipe edouard Biron" />
                    </div>
                </div>
            </div>
            <div className="right-footer">
                <h4><div className="underline">Adresse cabinet:</div> 792 N6, 69760 Limonest</h4>
                <h4><div className="underline">Numero cabinet:</div> 04 72 17 03 79</h4>
                <h4>Dr E.Bonnet</h4>
                <h4>Dr P.E Biron</h4>
            </div>
        </div>
    </div>

}

export default Footer;