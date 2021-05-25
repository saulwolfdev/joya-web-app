import React from 'react'

class SingnInModal extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleClose = this.handleClose.bind(this);

        this.state = {
          show: this.props.show,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    render() {
        return true ? ( // this.state.show ? ( ...
            <div className="modal fade accountModal" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.handleClose}></button>
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
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Ingresar</button>
                            <p>No tenés cuenta en Joya aún? <a href="#" data-bs-target="#registroModal" data-bs-toggle="modal" data-bs-dismiss="modal">Registrate</a> </p>
                        </div>
                    </div>
                </div>
            </div>
        )
        :
        <></>
    }
}

export default SingnInModal;