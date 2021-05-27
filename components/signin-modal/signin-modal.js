import React from 'react'

const SignInModal = ({show, close}) => {


    return (
<>


{/* REGISTER INICIO*/}

<div class="modal fade accountModal show" id="registroModal"  style={{display:show? "block":"none"}}  tabindex="-1" aria-labelledby="registroModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"  onClick={close}>X</button>
      <div class="modal-body">
        <h4>Estás a un paso de tus vidrieras limpias</h4>
        <p>Completá tus datos para terminar de registrar tu pedido.</p>

        <form class="form">
        	<div class="row">
        		<div class="col form-element">
					<label for="nombre" class="form-label">Nombre</label>
					<input type="text" class="form-control" name="nombre"/>
				</div>
				<div class="col form-element">
					<label for="apellido" class="form-label">Apellido</label>
					<input type="text" class="form-control" name="apellido"/>
				</div>
        	</div>
        	<div class="form-element">
				<label for="email" class="form-label">Email</label>
				<input type="email" class="form-control" name="email"/>
			</div>
			<div class="form-element">
				<label for="password" class="form-label">Contraseña</label>
				<input type="password" class="form-control" name="password"/>
			</div>
			<div class="form-element">
				<p><input type="checkbox" />Quiero recibir novedades</p>
			</div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Registrarme</button>
        <p>Ya tenés cuenta en Joya? <a href="#"  data-bs-target="#loginModal" data-bs-toggle="modal" data-bs-dismiss="modal">Ingresá</a> </p>
      </div>
    </div>
  </div>
</div>

{/* REGISTER FIN*/}


{/* LOGIN INICIO*/}

        <div className="modal fade accountModal show"  style={{display:show? "block":"none"}} 
                 id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={close}>X</button>
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
                            <p>No tenés cuenta en Joya aún? <a href="#" data-bs-target="#registroModal" data-bs-toggle="modal" data-bs-dismiss="modal" >Registrate</a> </p>
                        </div>
                    </div>
                </div>
            </div> 
         
{/* LOGIN FIN*/}
</>
            );
}
 
export default SignInModal;
