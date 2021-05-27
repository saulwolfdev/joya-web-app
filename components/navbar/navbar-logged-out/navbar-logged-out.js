import NavBarLoggedOutMenu from './navbar-logged-out-menu/navbar-logged-out-menu'

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
            <NavBarLoggedOutMenu close={close}/>
        </div> 
    )
}

export default NavBarLoggedOut;