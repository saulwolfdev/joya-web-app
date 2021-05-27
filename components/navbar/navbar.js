import React,{useState} from 'react';
import SignInModal from "../signin-modal/signin-modal";
import SignUpModal from '../signup-modal/signup-modal';
import NavBarLoggedOut from './navbar-logged-out/navbar-logged-out';
import NavBarLogo from "./navbar-logo/navbar-logo";
import NavBarLoguedIn from './navbar-logued-in/navbar-logued-in';

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
                    <NavBarLogo/>
                    { loguedIn ? <NavBarLoguedIn/> : <NavBarLoggedOut close={closeSignInModalHandler}/> }
                </div>
            </div>
            <SignInModal show={showSingnIn} close={closeSignInModalHandler} showSignUp={setShowSingnUp}/>
            <SignUpModal show={showSingnUp} close={closeSignUpModalHandler} showSignIn={setShowSingnIn}/>
        </nav>
    );
}
 
export default NavBar;
