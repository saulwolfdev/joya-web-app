import React,{useState, useEffect} from 'react';
import InputLocal from './InputLocal'
import InputDirection from './InputDirection'
import InputLocalName from './InputLocalName'
import InputAdditionalIndications from './InputAdditionalIndications'
import WindowSizeSection from './WindowSizeSection'
import Features from './Features'
import SignInModal from './../../SignInModal'
import SignUpModal from './../../SignUpModal'
import { getAuth } from 'firebase/auth';
import { prepareUserInfo } from '../../../helpers';

const StepOneNewUser = () => {

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
        <>
            <InputLocal close={closeSignInModalHandler}/>
                <div className="localnuevo block-alternative">
                    <InputDirection/>
                    <InputLocalName/>
                    <InputAdditionalIndications/>
                    <WindowSizeSection/>
                </div>
            <Features/>
            <SignInModal onSuccess={onSuccessSignIn} show={showSingnIn} close={closeSignInModalHandler} showSignUp={setShowSingnUp}/>
            <SignUpModal show={showSingnUp} close={closeSignUpModalHandler} showSignIn={setShowSingnIn}/>
        </>
    );
}

export default StepOneNewUser;