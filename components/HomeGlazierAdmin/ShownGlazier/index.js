const ShownGlazier = () => {
    return (
        <div className="main-content vidrierista-individual">
            <div className="alert warning">
                <div className="container-fluid">
                    <i className="far fa-bell" />Nuevo postulante
                </div>
            </div>
            <div className="admin-sintesis">
                <div className="container-fluid">
                    <div className="row sintesis-header ">
                        <div className="col-12 breadcrumb">
                            <div className="inner-container">
                                <a href="#"><i className="far fa-arrow-left" /> Volver</a>
                            </div>
                        </div>
                        <div className="col-auto">
                            <h3>Sergio Soriano</h3>
                            <p className="aclaracion email"><a href="mailto:bla@gmail.com">ssoriano@gmail.com</a></p>
                        </div>
                        <div className="col-auto estado">
                            <p>
                                {/* Elegir la que corresponda según el vidrierista. Sólo 1 opción. */}
                                <span className="c-success">Activo</span>
                                <span className="c-warning">Postulante</span>
                                <span className="c-error">Suspendido</span>
                            </p>
                        </div>
                        <div className="btn-set col-auto">
                            <button className="btn btn-primary btn-small">Contactar</button>
                            <button className="btn btn-misc"><i className="far fa-ellipsis-h" /></button>
                        </div>
                    </div>
                    <div className="row stats d-none d-md-flex">
                        <div className="col-auto stat">
                            <p className="label">Recorridos (este mes/total)</p>
                            <p className="value"><span className="number strong">156</span> <span className="separator">/</span> <span className="number">897</span> </p>
                            <p className="aclaracion">8 meses de antigüedad</p>
                        </div>
                        <div className="col-auto stat block-start">
                            <p className="label">Ganancias (este mes/total)</p>
                            <p className="value"><span className="number strong">$5600</span> <span className="separator">/</span> <span className="number">$12540</span> </p>
                        </div>
                        {/* No se desarrolla esto por ahora */}
                        <div className="col-auto stat  block-start">
                            <p className="label">Calif. promedio</p>
                            <p className="value"><span className="number strong">4.5 <i className="fas fa-star" /></span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="more-content">
                <div className="menu">
                    <div className="container-fluid">
                        <ul>
                            <li><a href="#">Trabajos</a></li>
                            <li><a href="admin-pagos-historial.html">Historial</a></li>
                            <li><a href="#">Reseñas</a></li>
                            <li className="active"><a href="#">Perfil</a></li>
                        </ul>
                    </div>
                </div>
                <div className="content-block vidrierista-perfil">
                    <div className="container-fluid">
                        <div className="row perfil">
                            <div className="col-md-8 vidrierista-data">
                                <div className="data-table row">
                                    <div className="col-md-6 data-piece">
                                        <p className="label">Nombre</p>
                                        <p className="data">Sergio Soriano</p>
                                    </div>
                                    <div className="col-md-6 data-piece">
                                        <p className="label">Estado</p>
                                        <p className="data">
                                            {/* Elegir la que corresponda según el vidrierista. Sólo 1 opción. */}
                                            <span className="c-success">Activo</span>
                                            <span className="c-warning">Postulante</span>
                                            <span className="c-error">Suspendido</span>
                                        </p>
                                    </div>
                                    <div className="col-md-6 data-piece">
                                        <p className="label">Email</p>
                                        <p className="data"><a href="#">ssoriano@gmail.com</a></p>
                                    </div>
                                    <div className="col-md-6 data-piece">
                                        <p className="label">Celular</p>
                                        <p className="data">+54 11 1234 5678</p>
                                    </div>
                                    <div className="col-md-12 data-piece">
                                        <p className="label">Dirección</p>
                                        <p className="data">Av. Santa Fe 2702, Buenos Aires</p>
                                    </div>
                                    <div className="col-md-6 data-piece">
                                        <p className="label">Fecha de nacimiento</p>
                                        <p className="data">1/12/1992</p>
                                    </div>
                                    <div className="col-md-6 data-piece">
                                        <p className="label">Nacionalidad</p>
                                        <p className="data">Argentino</p>
                                    </div>
                                    <div className="col-md-6 data-piece">
                                        <p className="label">Registro</p>
                                        <p className="data">21/1/2021</p>
                                    </div>
                                    <div className="col-md-6 data-piece">
                                        <p className="label">Última actividad</p>
                                        <p className="data">Mi 15/4/2021, 15:05hs</p>
                                    </div>
                                    <div className="col-md-12 direccion data-piece">
                                        <p className="label">Contraseña</p>
                                        <p className="data">Última actualización 10/4/2020, 11:45hs. <a href="#">Resetear contraseña</a></p>
                                    </div>
                                    <div className="col-md-12 direccion data-piece">
                                        <p className="label">Notas</p>
                                        <p className="data">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus sint dolorum enim harum, est, molestias porro aliquam aliquid voluptatem aut.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-3 offset-lg-1 vidrierista-acciones">
                                <a href="#" className="btn btn-primary">Editar perfil</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}