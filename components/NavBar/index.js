import React,{useState, useEffect} from 'react';
import Link from 'next/link';
import SignInModal from "../SignInModal";
import SignUpModal from '../SignUpModal';
import NavBarLoggedOut from './NavBarLoggedOut';
import NavBarLoguedIn from './NavBarLoguedIn';
import NavBarGlazierOptions from './NavBarGlazierOptions';
import { getAuth } from 'firebase/auth';
import { prepareUserInfo } from '../../helpers';

const NavBar = ({glazier}) => {
    const [showSingnIn, setShowSingnIn] = useState(false);
    const [showSingnUp, setShowSingnUp] = useState(false);

    const closeSignInModalHandler = (close) => setShowSingnIn(!close);
    const closeSignUpModalHandler = (close) => setShowSingnUp(!close);
    const onSuccessSignIn = () => setLoguedIn(true);
    
    const [loguedIn, setLoguedIn] = useState(false);
    const [user,setUser] = useState(null);

    useEffect(()=>{
        const userLogin = getAuth();
        userLogin.onAuthStateChanged(prepareUserInfo(setLoguedIn, setUser));    
    });
    
    return (
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="row">
                        <NavBar.Logo/>
                        { glazier ? <></> : (loguedIn ? <NavBarLoguedIn user={user} /> : <NavBarLoggedOut edOut close={closeSignInModalHandler}/>) }
                        { glazier ? <NavBarGlazierOptions/> : <></> }
                    </div>
                </div>
                { glazier ? <></> : <SignInModal onSuccess={onSuccessSignIn} show={showSingnIn} close={closeSignInModalHandler} showSignUp={setShowSingnUp}/> }
                { glazier ? <></> : <SignUpModal show={showSingnUp} close={closeSignUpModalHandler} showSignIn={setShowSingnIn}/> }
            </nav>
        );
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
