import React,{useState, useEffect} from 'react';
import { getAuth } from 'firebase/auth';
import { prepareUserInfo } from '../../../helpers'
import SignInModal from './../../SignInModal'
import SignUpModal from './../../SignUpModal'

const CardData = () => {

    const [loguedIn, setLoguedIn] = useState(false);
    const [user,setUser] = useState(null);

    const [showSingnIn, setShowSingnIn] = useState(false);
    const [showSingnUp, setShowSingnUp] = useState(false);

    const closeSignInModalHandler = (close) => setShowSingnIn(!close);
    const closeSignUpModalHandler = (close) => setShowSingnUp(!close);
    const onSuccessSignIn = () => setLoguedIn(true);

    const handleClick = (e) => {
        if(!loguedIn) {
            setShowSingnUp(true);
        }
    }

    useEffect(()=>{
        const userLogin = getAuth();
        userLogin.onAuthStateChanged(prepareUserInfo(setLoguedIn, setUser));    
    });

    return (
        <>
            <div className="col col-md-7 col-xl-8 col-tarjeta">
                <div className="inner-container-left">
                    <h4>Para terminar, confirma tu pago</h4>
                    <p>Se te cobrará al finalizar la primera visita. Consultá nuestras <a href="#">políticas de cancelación</a>.</p>
                    <div className="form">
                        <div className="form-element">
                            <label htmlFor="tarjeta" className="form-label">Número de la tarjeta</label>
                            <input type="text" className="form-control" name="tarjeta"/>
                        </div>
                        <div className="form-element">
                            <label htmlFor="titular" className="form-label">Nombre y apellido del titular de la tarjeta</label>
                            <input type="text" className="form-control" name="titular"/>
                        </div>
                        <div className="row">
                            <div className="col form-element">
                                <label htmlFor="expiracion" className="form-label">Fecha de expiración</label>
                                <input type="text" className="form-control" name="expiracion"/>
                            </div>
                            <div className="col form-element">
                                <label htmlFor="seguridad" className="form-label">Código de seguridad</label>
                                <input type="text" className="form-control" name="seguridad"/>
                            </div>
                        </div>
                        <div className="form-element">
                            <label htmlFor="dni" className="form-label">DNI del titular</label>
                            <input type="text" className="form-control" name="dni"/>
                        </div>
                        <div className="btn-set">
                            <button className="btn btn-primary" onClick={handleClick}>Confirmar pago</button>
                        </div>
                    </div>	
                </div>
            </div>
            <SignInModal onSuccess={onSuccessSignIn} show={showSingnIn} close={closeSignInModalHandler} showSignUp={setShowSingnUp}/>
            <SignUpModal show={showSingnUp} close={closeSignUpModalHandler} showSignIn={setShowSingnIn}/>
        </>
    );
}

export default CardData;