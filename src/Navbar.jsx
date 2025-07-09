import { NavLink } from "react-router-dom";

export function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg container fw-bold">
            <div className="container navContainer">
                    <button className="navbar-toggler container" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    <NavLink className="navbar-brand p-3" to="#">Semestres</NavLink>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav container justify-content-center p-3">
                        <li className="nav-item"><NavLink className="nav-link" to="/1-semestre">1º Semestre</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/2-semestre">2º Semestre</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/3-semestre">3º Semestre</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/4-semestre">4º Semestre</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}