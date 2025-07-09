import { NavLink } from "react-router-dom"
import Logo from "./assets/imgs/logo-uninassau-dark.png"

export function Header(){
    return (
        <>
            <header className="d-flex flex-column align-items-center justify-content-center position-relative">
                <NavLink to={"/Home"}>
                    <img src={Logo} alt="logo uninassau" className="logo img-fluid mb-3 mt-2" />
                </NavLink>
                <h1 className="mb-2 text-center fw-bold">Repositório Turma ADS</h1>
                <span className="spanDarkMode m-3 position-absolute top-0 end-0">
                    <input type="checkbox" className="btn-check darkModeBtn" id="btn-check-2" autoComplete ="off"/>
                    <label className="text-uppercase" htmlFor="btn-check-2"><i className="bi bi-moon p-2 iconeDarkMode"></i></label>
                </span>
            </header>
            <hr/>
        </>
    )
}