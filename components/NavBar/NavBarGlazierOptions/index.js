const HamburgerButton = () => {
    return (
        <button class="navbar-toggler hamburger is-closed" type="button" data-toggle="offcanvas" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="hamb-top"></span>
            <span class="hamb-middle"></span>
            <span class="hamb-bottom"></span>
        </button>	
    );
}

const GlazierOptions = () => {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top" id="main-menu" role="navigation">
            <div className="nav sidebar-nav col">
                <ul className="menu public-menu">
                    <li><a href="#">Preguntas Frecuentes</a></li>
                    <li className="separator"></li>
                    <li><a href="#" className="destacado">Postulate</a></li>
                </ul>
            </div>
        </nav>
    );
}

const NavBarGlazierOptions = () => {
    return (
        <div className="col menu-col">
            <HamburgerButton/>                   
            <GlazierOptions/>
        </div>
    );
};

export default NavBarGlazierOptions;