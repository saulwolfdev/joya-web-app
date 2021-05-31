import Link from 'next/link'

const NavBarLoggedOut = ({close}) => {
    return (
        <div className="col menu-col public-nav">
            <button className="navbar-toggler hamburger is-closed" 
                    type="button" data-toggle="offcanvas" 
                    data-target="#main-menu" 
                    aria-controls="main-menu" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                <span className="hamb-top"></span>
                <span className="hamb-middle"></span>
                <span className="hamb-bottom"></span>
            </button>
            <NavBarLoggedOut.Menu close={close}/>
        </div> 
    )
}

const Menu = ({close}) => {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top" id="main-menu" role="navigation">
            <div className="nav sidebar-nav col">
                <ul className="menu public-menu">
                    <li><a href="#">Ayuda</a></li>
                    <li><Link href='/apply'><a className="destacado">Solicitar limpieza de vidriera</a></Link></li>
                    <li className="separator"></li>
                    <li><a href="#" onClick={() => close(false)} className="destacado">Iniciar sesión</a></li>
                </ul>
            </div>
        </nav>
    )
}
NavBarLoggedOut.Menu = Menu;

export default NavBarLoggedOut;