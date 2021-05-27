import React from 'react'

const SignInModal = ({show, close, showSignUp}) => {
    const switchModal = () => {
        close(true);
        showSignUp(true);
    }
    return (
        <div className="modal fade accountModal show"  style={{display:show? "block":"none"}} id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <SignInModal.Header close={close}/>
                    <SignInModal.Form/>
                    <SignInModal.Footer switchModal={switchModal}/>
                </div>
            </div>
        </div>
    );
}

const Header = ({close}) => <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => close(true)}>X</button>;
SignInModal.Header = Header;

const Footer = ({switchModal}) => {
    return (
        <div className="modal-footer">
            <button type="button" className="btn btn-primary">Ingresar</button>
            <p>No tenés cuenta en Joya aún? <a href="#" data-bs-target="#registroModal" data-bs-toggle="modal" data-bs-dismiss="modal" onClick={switchModal}>Registrate</a> </p>
        </div>
    )
}
SignInModal.Footer = Footer;

const Form = () => {
    return (
        <div className="modal-body">
            <h4>Estás a un paso de tus vidrieras limpias</h4>
            <p>Accedé a tu cuenta para registrar tu pedido.</p>

            <form className="form">
                <div className="form-element">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email"/>
                </div>
                <div className="form-element">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" name="password"/>
                </div>
            </form>
        </div>
    )
}
SignInModal.Form = Form;

export default SignInModal;
