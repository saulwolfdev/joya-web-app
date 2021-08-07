import React,{useState, useEffect} from 'react';
import Link from 'next/link';
import SignInModal from "../SignInModal";
import SignUpModal from '../SignUpModal';
import NavBarLoggedOut from './NavBarLoggedOut';
import NavBarLoguedIn from './NavBarLoguedIn';
import NavBarGlazierOptions from './NavBarGlazierOptions';
import { getAuth } from 'firebase/auth';
import { prepareUserInfo } from '../../helpers';

const NavBar = ({glazier, admin}) => {
    const [showSingnIn, setShowSingnIn] = useState(false);
    const [showSingnUp, setShowSingnUp] = useState(false);

    const closeSignInModalHandler = (close) => setShowSingnIn(!close);
    const closeSignUpModalHandler = (close) => setShowSingnUp(!close);
    const onSuccessSignIn = () => setLoguedIn(true);
    
    const [loguedIn, setLoguedIn] = useState(false);
    const [user,setUser] = useState(null);

    useEffect(()=>{
        const mainNav = require('../../assets/js/main-nav');
        mainNav.initiateNav(false); // TODO Hay diferencias en el menú admin vs usuario
        const userLogin = getAuth();
        userLogin.onAuthStateChanged(prepareUserInfo(setLoguedIn, setUser));    
    });
    
    return (
            <>
                <nav className="navbar">
                    <div className="container-fluid">
                        <div className="row">
                            <NavBar.Logo/>
                            {
                                    admin ?
                                    <NavbarAdmin/>
                                    :
                                (glazier ? <NavBarGlazierOptions/> : (loguedIn ? <NavBarLoguedIn user={user} /> : <NavBarLoggedOut edOut close={closeSignInModalHandler}/>))
                            }
                        </div>
                    </div>
                    { 
                        glazier ? 
                            <></> 
                        : 
                            <>
                                <SignInModal onSuccess={onSuccessSignIn} show={showSingnIn} close={closeSignInModalHandler} showSignUp={setShowSingnUp}/>
                                <SignUpModal show={showSingnUp} close={closeSignUpModalHandler} showSignIn={setShowSingnIn}/>
                            </>
                    }
                </nav>
            </> 
            
        );
}

const NavbarAdmin = () => {
    return (
        <div className="nav sidebar-nav col">
            <ul className="menu admin-menu">
                <li>
                    <a href="#">Agenda</a>
                </li>
                <li>
                    <a href="#">Recorridos</a>
                </li>
                <li className="user-options dropdown closed">
                    <span className="a">
                        Vidrieristas
                        <i className="far fa-chevron-down" />
                    </span>
                    <ul className="sub-menu">
                        <li>
                            <a href="#">Tus pedidos</a>
                        </li>
                        <li>
                            <a href="#">Configuración de cuenta</a>
                        </li>
                        <li>
                            <a href="#">Salir</a>
                        </li>
                    </ul>
                </li>
                <li className="user-options dropdown closed">
                    <span className="a">
                        Clientes
                        <i className="far fa-chevron-down" />
                    </span>
                    <ul className="sub-menu">
                        <li>
                            <a href="#">Tus pedidos</a>
                        </li>
                        <li>
                            <a href="#">Configuración de cuenta</a>
                        </li>
                        <li>
                            <a href="#">Salir</a>
                        </li>
                    </ul>
                </li>
                <li className="user-options dropdown closed">
                    <span className="a">
                        Locales
                        <i className="far fa-chevron-down" />
                    </span>
                    <ul className="sub-menu">
                        <li>
                            <a href="#">Tus pedidos</a>
                        </li>
                        <li>
                            <a href="#">Configuración de cuenta</a>
                        </li>
                        <li>
                            <a href="#">Salir</a>
                        </li>
                    </ul>
                </li>
                <li className="user-options dropdown closed">
                    <span className="a user-item">
                        Balance
                        <i className="far fa-chevron-down" />
                    </span>
                    <ul className="sub-menu">
                        <li>
                            <a href="#">Tus pedidos</a>
                        </li>
                        <li>
                            <a href="#">Configuración de cuenta</a>
                        </li>
                        <li>
                            <a href="#">Salir</a>
                        </li>
                    </ul>
                </li>
                <li className="user-options dropdown closed">
                    <span className="a">
                        <i className="far fa-user-circle d-none d-lg-inline" />
                        <span className="d-none d-xl-block">Carolina</span>
                        <i className="far fa-chevron-down" />
                    </span>
                    <ul className="sub-menu">
                        <li>
                            <a href="#">Tus pedidos</a>
                        </li>
                        <li>
                            <a href="#">Configuración de cuenta</a>
                        </li>
                        <li>
                            <a href="#">Salir</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

const Logo = () => {
    let logoImage = {
        backgroundImage:"url(/logo@2x.png)"
    }
    return (
        <div className="col-auto logo-div">
            <h1 className="site-title">
                <Link href='/'><a className="navbar-brand main-logo" href="#" rel="home" style={logoImage}>Joya</a></Link>
            </h1>
        </div>
    )
}
NavBar.Logo = Logo;
 
export default NavBar;
