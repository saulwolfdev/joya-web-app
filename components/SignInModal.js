import React, {useState} from 'react'
import Notification from './Notification'
import { validateEmail } from '../helpers';
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';

const SignInModal = ({show, close, showSignUp, onSuccess}) => {
    const switchModal = () => {
        close(true); // TODO review: Always ocurrencies contains true value
        showSignUp(true);
    }
    return (
        <div className="modal fade accountModal show"  style={{display:show? "block":"none"}} id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <SignInModal.Header close={close}/>
                    <SignInModal.Footer switchModal={switchModal} onSuccess={onSuccess} close={close}/>
                </div>
            </div>
        </div>
    );
}

const Header = ({close}) => <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => close(true)}></button>;
SignInModal.Header = Header;

const Errores = {"auth/wrong-password": "La contraseña no es correcta.",
"auth/invalid-email": "El correo no existe o esta mal escrito."
};

const Footer = ({switchModal, close, onSuccess}) => {

    const[errorMsgEmail,setErrorMsgEmail] = useState("");
    const[errorMsgPassword,setErrorMsgPassword] = useState("");

    const[errorNotification, setErrorNotification] = useState('');
    const[viewError, setViewError] = useState(false);

    const setView = (view) => {
        setViewError(view);
    }

    const loginUser = async event => {
        event.preventDefault();

        let email = event.target.email.value;
        let password = event.target.password.value;

        if(!validateEmail(email)) {
            setErrorNotification('El email no tiene un formato correcto')
            setViewError(true);
            return;
        }

        setErrorNotification('')
        setViewError(false)

        const auth = getAuth();
        await signInWithEmailAndPassword(auth,email,password)
            .then((userCredential)=>{
                Array.from(document.querySelectorAll("input")).forEach(
                    input => (input.value = "")
                  );
                close(true);
                onSuccess();
                
            })
            .catch((error) => {
                const errorCode = error.code;
                if(errorCode == "auth/invalid-email")
                    setErrorMsgEmail(Errores[errorCode]);
                else
                    setErrorMsgPassword(Errores[errorCode]);
                });    
    }
    
    return (
        <>
            <div className="modal-body">
                <h4>Estás a un paso de tus vidrieras limpias</h4>
                <p>Accedé a tu cuenta para registrar tu pedido.</p>
                <form className="form" onSubmit={loginUser}>
                    <div className="form-element">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email"/>
                        {errorMsgEmail != "" && <div className="error-msg"><i className="far fa-exclamation-circle"></i>{errorMsgEmail}</div>}
                    </div>
                    <div className="form-element">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" name="password"/>
                        {errorMsgPassword != "" && <div className="error-msg"><i className="far fa-exclamation-circle"></i> {errorMsgPassword}</div>}
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-primary">Ingresar</button>
                        <p>No tenés cuenta en Joya aún? <a href="#" data-bs-target="#registroModal" data-bs-toggle="modal" data-bs-dismiss="modal" onClick={switchModal}>Registrate</a> </p>
                    </div>
                </form>
            </div>
            <Notification view={viewError} setView={setView} message={errorNotification} type={"warning"}/>
        </>
    )
}
SignInModal.Footer = Footer;

export default SignInModal;
