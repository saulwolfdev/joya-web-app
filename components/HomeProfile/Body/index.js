const Body = () => {
    return (
        <div className="row">
            <div className="col-xl-9">
                <h3>Datos de cuenta</h3>
                <div className="form form-block">
                    <div className="row">
                        <div className="col form-element">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" name="nombre" defaultValue="Carolina" />
                        </div>
                        <div className="col form-element">
                            <label htmlFor="apellido" className="form-label">Apellido</label>
                            <input type="text" className="form-control" name="apellido" defaultValue="Fernández" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col form-element">
                            <label htmlFor="telefono" className="form-label">Teléfono</label>
                            <input type="text" className="form-control" name="telefono" defaultValue={+5491151234567} />
                        </div>
                        <div className="col form-element">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" name="email" defaultValue="carolina@kentucky.com.ar" disabled />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col form-element">
                            <label htmlFor="contrasenia" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" name="contrasenia" />
                        </div>
                        <div className="col form-element">
                            <label htmlFor="repetircontrasenia" className="form-label">Repetir contraseña</label>
                            <input type="text" className="form-control" name="repetircontrasenia" />
                        </div>
                    </div>
                </div>	
                <div className="form form-block">
                    <h4>Datos de facturación:</h4>
                    <div className="form-element">
                        <label htmlFor="razonsocial" className="form-label">Razón social</label>
                        <input type="text" className="form-control" name="razonsocial" defaultValue="Kentucky S.A." />
                    </div>
                    <div className="form-element">
                        <label htmlFor="cuit" className="form-label">CUIT</label>
                        <input type="text" className="form-control" name="cuit" defaultValue="94-75213547-5" />
                    </div>
                    <div className="form-element">
                        <label htmlFor="direccion" className="form-label">Dirección</label>
                        <input type="text" className="form-control" name="direccion" defaultValue="Av. Santa Fe 2565" />
                    </div>
                </div>	
                <div className="btn-set">
                    <button className="btn btn-primary">Guardar cambios</button>
                </div>
            </div>
        </div>
    );
}

export default Body;