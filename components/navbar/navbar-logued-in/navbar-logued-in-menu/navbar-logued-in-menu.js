const NavBarLoguedInMenu = () => {
    return (
        <nav class="navbar navbar-inverse navbar-fixed-top" id="main-menu" role="navigation">
            <div class="nav sidebar-nav col">
                <ul class="menu user-menu">
                    <li class="username d-lg-none"><span class="a">
                        <i class="far fa-user-circle"></i>
                        Carolina	                        			
                    </span></li>
                    <li class="ayuda"><a href="#">Ayuda</a></li>
                    <li><a href="#" class="destacado">Solicitar limpieza de vidriera</a></li>
                    <li class="separator"></li>
                    <li class="user-item"><a href="#">Tus pedidos</a></li>
                    <li class="user-options dropdown closed">
                        <span class="a user-item">
                            <i class="far fa-user-circle"></i>
                            Carolina
                            <i class="far fa-chevron-down"></i>
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

export default NavBarLoguedInMenu;