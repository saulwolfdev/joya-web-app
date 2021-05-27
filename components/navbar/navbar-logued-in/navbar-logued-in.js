import NavBarLoguedInMenu from './navbar-logued-in-menu/navbar-logued-in-menu'

const NavBarLoguedIn = () => {
    return (
        <div class="col menu-col user-nav">
            <button class="navbar-toggler user-toggle hamburger is-closed" type="button" data-toggle="offcanvas" data-target="#main-menu-user" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="hamb-top"></span>
                <span class="hamb-middle"></span>
                <span class="hamb-bottom"></span>
            </button>
            <NavBarLoguedInMenu/>
        </div>
    )
}

export default NavBarLoguedIn;