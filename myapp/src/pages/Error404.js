import NavBar from '../components/navbar';
import '../style/Error404.css'


function Error() {
    return <div className="Contain-404">
        <div className="navbar">
            <NavBar />
        </div>
        <div className="all">
            <h1>Erreur 404</h1>
            <div className="Ex">
                <h2> Page introuvable</h2>
            </div>
        </div>

    </div>
}

export default Error;