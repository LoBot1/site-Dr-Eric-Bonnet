import NavBar from "../components/navbar";
import "../style/MapNoustrouver.css"
function Map(params) {
    return <div className="contain-map">
        <div className="navbar">
            <NavBar />
        </div>
        <div className="Map">
            <iframe width="1080" height="1080" id="gmap_canvas" src="https://maps.google.com/maps?q=Bonnet%20Eric/Phillipe%20Edouard%20Biron,%20792%20N6,%2069760%20Limonest&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
    </div>
}

export default Map;