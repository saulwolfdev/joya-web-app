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
        <nav class="navbar navbar-inverse navbar-fixed-top" id="main-menu" role="navigation">
            <div class="nav sidebar-nav col">
                <ul class="menu public-menu">
                    <li><a href="#">Preguntas Frecuentes</a></li>
                    <li class="separator"></li>
                    <li><a href="#" class="destacado">Postulate</a></li>
                </ul>
            </div>
        </nav>
    );
}

const NavBarGlazierOptions = () => {
    return (
        <div class="col menu-col">
            <HamburgerButton/>                   
            <GlazierOptions/>
        </div>
    );
};

export default NavBarGlazierOptions;