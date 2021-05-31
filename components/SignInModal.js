import React from 'react'

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

const Header = ({close}) => <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => close(true)}>X</button>;
SignInModal.Header = Header;

const Footer = ({switchModal, close, onSuccess}) => {

    /* const registerUser = async event => {
        event.preventDefault()
    
        const res = await fetch('/api/register', {
            body: JSON.stringify({
                email: event.target.email.value,
                password: event.target.password.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
        
        const status = res.status;
        if(status === 200) {
            const result = await res.json()
            ...
        }
        // result.user => 'Ada Lovelace'
    } */

    const registerUser = async event => {
        event.preventDefault()
        let email = event.target.email.value;
        let password = event.target.password.value;
        if(email === 'carolina@example.com' && password === '123321') {
            close(true);
            onSuccess();
        }
        else {
            // TODO handle errors messages
        }
    }
    
    return (
        <>
            <div className="modal-body">
                <h4>Estás a un paso de tus vidrieras limpias</h4>
                <p>Accedé a tu cuenta para registrar tu pedido.</p>
                <form className="form" onSubmit={registerUser}>
                    <div className="form-element">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email"/>
                    </div>
                    <div className="form-element">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" name="password"/>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-primary">Ingresar</button>
                        <p>No tenés cuenta en Joya aún? <a href="#" data-bs-target="#registroModal" data-bs-toggle="modal" data-bs-dismiss="modal" onClick={switchModal}>Registrate</a> </p>
                    </div>
                </form>
            </div>
        </>
    )
}
SignInModal.Footer = Footer;

export default SignInModal;
