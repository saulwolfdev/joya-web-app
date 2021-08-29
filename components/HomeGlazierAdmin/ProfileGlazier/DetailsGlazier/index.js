const DetailsGlazier = ({data}) => {

    const handleResetPassword = (e) => {
        e.preventDefault();
        // TODO
    }

    const handleEditProfile = (e) => {
        e.preventDefault();
        // TODO
    }

    return(
        <div className="content-block vidrierista-perfil">
            <div className="container-fluid">
                <div className="row perfil">
                    <div className="col-md-8 vidrierista-data">
                        <div className="data-table row">
                            <div className="col-md-6 data-piece">
                                <p className="label">Nombre</p>
                                <p className="data">{data.name}</p>
                            </div>
                            <div className="col-md-6 data-piece">
                                <p className="label">Estado</p>
                                <p className="data">
                                    {data.type === "Activo" ? <span className="c-success">Activo</span> : <></>}
                                    {data.type === "Postulante" ? <span className="c-warning">Postulante</span> : <></>}
                                    {data.type === "Suspendido" ? <span className="c-error">Suspendido</span> : <></>}
                                </p>
                            </div>
                            <div className="col-md-6 data-piece">
                                <p className="label">Email</p>
                                <p className="data"><a href="#">{data.email}</a></p>
                            </div>
                            <div className="col-md-6 data-piece">
                                <p className="label">Celular</p>
                                <p className="data">{data.phone}</p>
                            </div>
                            <div className="col-md-12 data-piece">
                                <p className="label">Dirección</p>
                                <p className="data">{data.direction}</p>
                            </div>
                            <div className="col-md-6 data-piece">
                                <p className="label">Fecha de nacimiento</p>
                                <p className="data">{data.bithdate}</p>
                            </div>
                            <div className="col-md-6 data-piece">
                                <p className="label">Nacionalidad</p>
                                <p className="data">{data.nacionality}</p>
                            </div>
                            <div className="col-md-6 data-piece">
                                <p className="label">Registro</p>
                                <p className="data">{data.registeredDate}</p>
                            </div>
                            <div className="col-md-6 data-piece">
                                <p className="label">Última actividad</p>
                                <p className="data">{data.lastActivity}</p>
                            </div>
                            <div className="col-md-12 direccion data-piece">
                                <p className="label">Contraseña</p>
                                <p className="data">Última actualización {data.passwordLastModified}. <a href="#" onClick={handleResetPassword}>Resetear contraseña</a></p>
                            </div>
                            <div className="col-md-12 direccion data-piece">
                                <p className="label">Notas</p>
                                <p className="data">
                                    {data.notes}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3 offset-lg-1 vidrierista-acciones">
                        <a href="#" className="btn btn-primary" onClick={handleEditProfile}>Editar perfil</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsGlazier;