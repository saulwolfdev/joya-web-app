const HomeCreateGlazierAdmin = () => {
    <div className="main-content">
        <div className="admin-recorrido-armar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 breadcrumb">
                        <div className="inner-container">
                            <a href="admin-vidrieristas.html"><i className="far fa-arrow-left" /> Volver</a>
                        </div>
                    </div>
                    <div className="col-12 card-page-container">
                        <div className="card-page-content">
                            <div className="inner-container">
                                <div className="row">
                                    <div className="col-xl-10">
                                        <h3>Nuevo vidrierista</h3>
                                        <div className="form form-block">
                                            <div className="row">
                                                <div className="col form-element">
                                                    <label htmlFor="nombre" className="form-label">Nombre<span className="obligatorio">*</span></label>
                                                    <input type="text" className="form-control" name="nombre" placeholder="Nombre" />
                                                </div>
                                                <div className="col form-element">
                                                    <label htmlFor="apellido" className="form-label">Apellido<span className="obligatorio">*</span></label>
                                                    <input type="text" className="form-control" name="apellido" placeholder="Apellido" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col form-element">
                                                    <label htmlFor="telefono" className="form-label">Teléfono<span className="obligatorio">*</span></label>
                                                    <input type="text" className="form-control" placeholder name="telefono" />
                                                </div>
                                                <div className="col form-element">
                                                    <label htmlFor="email" className="form-label">Email<span className="obligatorio">*</span></label>
                                                    <input type="email" className="form-control" placeholder name="email" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col form-element">
                                                    <label htmlFor="cbu" className="form-label">CBU</label>
                                                    <input type="text" className="form-control" placeholder name="cbu" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col form-element">
                                                    <label htmlFor="notas" className="form-label">Notas</label>
                                                    <textarea className="form-control" name="notas" rows={3} defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-4 form-element">
                                                    <label htmlFor="estado-vidrierista" className="form-label">Estado<span className="obligatorio">*</span></label>
                                                    <select name="estado-vidrierista" className="form-select" aria-label="Estado vidrierista">
                                                        <option value="postulante">Postulante</option>{/* Nuevo sin evaluar */}
                                                        <option value="descartado">Descartado</option>{/* Nuevo, no les gustó lo descartaron antes de que sea vidrierista*/}
                                                        <option value="activo">Activo</option>{/* aceptado, en actividad */}
                                                        <option value="inactivo">Inactivo</option>{/* aceptado, no activo */}
                                                        <option value="suspendido">Suspendido</option>{/* fue aceptado y después eliminado por algún problema */}
                                                    </select>
                                                </div>
                                                <div className="col-lg-8 form-element">
                                                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                                                    <input type="text" className="form-control" name="descripcion" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-set">
                                            <a className="btn btn-primary ms-auto" href="#">Guardar</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}