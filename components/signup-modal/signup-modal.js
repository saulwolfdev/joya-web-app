import React from 'react'

const SignUpModal = ({show, close, showSignIn}) => {
    const switchModal = () => {
        close(true);
        showSignIn(true);
    }
    return (
        <div className="modal fade accountModal show" id="registroModal"  style={{display:show? "block":"none"}}  tabIndex="-1" aria-labelledby="registroModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <SignUpModal.Header close={close}/>
                    <SignUpModal.Form/>
                    <SignUpModal.Footer switchModal={switchModal}/>
                </div>
            </div>
        </div>
    );
}

const Header = ({close}) => <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => close(true)}>X</button>;
SignUpModal.Header = Header;

const Footer = ({switchModal}) => {
    return (
        <div className="modal-footer">
            <button type="button" className="btn btn-primary">Registrarme</button>
            <p>Ya tenés cuenta en Joya? <a href="#"  data-bs-target="#loginModal" data-bs-toggle="modal" data-bs-dismiss="modal" onClick={switchModal}>Ingresá</a> </p>
        </div>
    )
}
SignUpModal.Footer = Footer;

const Form = () => {
    return (
        <div className="modal-body">
            <h4>Estás a un paso de tus vidrieras limpias</h4>
            <p>Completá tus datos para terminar de registrar tu pedido.</p>
            <form className="form">
                <div className="row">
                    <div className="col form-element">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" name="nombre"/>
                    </div>
                    <div className="col form-element">
                        <label htmlFor="apellido" className="form-label">Apellido</label>
                        <input type="text" className="form-control" name="apellido"/>
                    </div>
                </div>
                <div className="form-element">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email"/>
                </div>
                <div className="form-element">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" name="password"/>
                </div>
                <div className="form-element">
                    <p><input type="checkbox" />Quiero recibir novedades</p>
                </div>
            </form>
        </div>
    )
}
SignUpModal.Form = Form;
 
export default SignUpModal;
