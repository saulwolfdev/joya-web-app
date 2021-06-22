import { getAuth, signOut } from 'firebase/auth';
import { prepareUserInfo } from '../../helpers';

import Link from 'next/link'

const NavBarLoguedIn = ({user}) => {
    return (
        <div className="col menu-col user-nav">
            <button className="navbar-toggler user-toggle hamburger is-closed" type="button" data-toggle="offcanvas" data-target="#main-menu-user" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="hamb-top"></span>
                <span className="hamb-middle"></span>
                <span className="hamb-bottom"></span>
            </button>
            <NavBarLoguedIn.Menu user={user}/>
        </div>
    )
}

const Menu = ({user}) => {

    function logOut(e){
        e.preventDefault(e);
        const auth = getAuth();
        signOut(auth);
    }

    return (
        <nav className="navbar navbar-inverse navbar-fixed-top" id="main-menu" role="navigation">
            <div className="nav sidebar-nav col">
                <ul className="menu user-menu">
                    <li className="username d-lg-none"><span className="a">
                        <i className="far fa-user-circle"/>
                        {user? user.displayName? user.displayName : user.email : ""}
                    </span></li>
                    <li className="ayuda"><a href="#">Ayuda</a></li>
                    <li><Link href='/apply/new'><a className="destacado">Solicitar limpieza de vidriera</a></Link></li>
                    <li className="separator"></li>
                    <li className="user-item"><a href="#">Tus pedidos</a></li>
                    <li className="user-options dropdown closed">
                        <span className="a user-item">
                            <i className="far fa-user-circle"/>
                            {user? user.displayName? user.displayName : user.email : ""}
                            <i className="far fa-chevron-down"/>
                        </span>
                        <ul className="sub-menu">
                            <li><a href="#">Tus pedidos</a></li>
                            <li><a href="#">Configuración de cuenta</a></li>
                            <li><a onClick={logOut} href="#">Salir</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

NavBarLoguedIn.Menu = Menu;

export default NavBarLoguedIn;