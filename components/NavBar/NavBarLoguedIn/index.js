import Link from 'next/link'

const NavBarLoguedIn = () => {
    return (
        <div class="col menu-col user-nav">
            <button class="navbar-toggler user-toggle hamburger is-closed" type="button" data-toggle="offcanvas" data-target="#main-menu-user" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="hamb-top"></span>
                <span class="hamb-middle"></span>
                <span class="hamb-bottom"></span>
            </button>
            <NavBarLoguedIn.Menu/>
        </div>
    )
}

const Menu = () => {
    return (
        <nav class="navbar navbar-inverse navbar-fixed-top" id="main-menu" role="navigation">
            <div class="nav sidebar-nav col">
                <ul class="menu user-menu">
                    <li class="username d-lg-none"><span class="a">
                        <i class="far fa-user-circle"/>
                        Carolina	                        			
                    </span></li>
                    <li class="ayuda"><a href="#">Ayuda</a></li>
                    <li><Link href='/apply'><a className="destacado">Solicitar limpieza de vidriera</a></Link></li>
                    <li class="separator"></li>
                    <li class="user-item"><a href="#">Tus pedidos</a></li>
                    <li class="user-options dropdown closed">
                        <span class="a user-item">
                            <i class="far fa-user-circle"/>
                            Carolina
                            <i class="far fa-chevron-down"/>
                        </span>
                        <ul class="sub-menu">
                            <li><a href="#">Tus pedidos</a></li>
                            <li><a href="#">Configuración de cuenta</a></li>
                            <li><a href="#">Salir</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

NavBarLoguedIn.Menu = Menu;

export default NavBarLoguedIn;