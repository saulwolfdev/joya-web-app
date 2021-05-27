const NavBarLoggedOutMenu = ({close}) => {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top" id="main-menu" role="navigation">
            <div className="nav sidebar-nav col">
                <ul className="menu public-menu">
                    <li><a href="#">Ayuda</a></li>
                    <li><a href="#" className="destacado">Solicitar limpieza de vidriera</a></li>
                    <li className="separator"></li>
                    <li><a href="#" onClick={() => close(false)} className="destacado">Iniciar sesión</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBarLoggedOutMenu;