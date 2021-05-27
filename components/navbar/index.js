import React,{useState} from 'react';
import SignInModal from "../SignInModal";
import SignUpModal from '../SignUpModal';
import NavBarLoggedOut from './NavBarLoggedOut';
import NavBarLoguedIn from './NavBarLoguedIn';

const NavBar = () => {
    const [showSingnIn, setShowSingnIn] = useState(false);
    const [showSingnUp, setShowSingnUp] = useState(false);
    const [loguedIn, setLoguedIn] = useState(false);
    const closeSignInModalHandler = (close) => setShowSingnIn(!close);
    const closeSignUpModalHandler = (close) => setShowSingnUp(!close);
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <div className="row">
                    <NavBar.Logo/>
                    { loguedIn ? <NavBarLoguedIn/> : <NavBarLoggedOut edOut close={closeSignInModalHandler}/> }
                </div>
            </div>
            <SignInModal show={showSingnIn} close={closeSignInModalHandler} showSignUp={setShowSingnUp}/>
            <SignUpModal show={showSingnUp} close={closeSignUpModalHandler} showSignIn={setShowSingnIn}/>
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
            <a className="navbar-brand main-logo" href="#" rel="home" style={logoImage}>Joya</a>
            </h1>
        </div>
    )
}
NavBar.Logo = Logo;
 
export default NavBar;
