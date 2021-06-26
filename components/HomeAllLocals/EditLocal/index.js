const EditLocal = () => {
    return (
        <div>
            <div className="row intro-local">
                <div className="col-md-6 local-data">
                    <p className="supertitulo">Local</p>
                    <h4>Kentucky Santa Fe</h4>	
                    <div className="data-table row">
                        <div className="col-md-6 direccion data-piece">
                            <p className="label">Dirección</p>
                            <p className="data">Av. Santa Fe 2702</p>
                        </div>
                        <div className="col-md-6 barrio data-piece">
                            <p className="label">Barrio</p>
                            <p className="data">Palermo, Comuna 12</p>
                        </div>
                        <div className="col-md-6 superfice data-piece">
                            <p className="label">Superficie</p>
                            <p className="data">64m<sup>2</sup> <i className="c-success far fa-check-circle" /></p>
                        </div>
                        <div className="col-md-6 tiempo data-piece">
                            <p className="label">Tiempo estimado</p>
                            <p className="data">10 minutos</p>
                        </div>
                        <div className="indicaciones col-12 data-piece"/>
                    </div>
                </div>
                <div className="col-md-6 local-imagen">
                    <img src="img/kentucky.jpg" alt="" className="img-fluid" />
                </div>
            </div>
            <div className="row info-block">
                <h5><span>Datos</span></h5>
                <div className="form">
                    <div className="row">
                        <div className="col-12 form-element">
                            <label htmlFor="telefono" className="form-label">Teléfono local</label>
                            <input type="text" className="form-control" name="telefono" defaultValue={+5491151234567} />
                        </div>
                        <div className="form-element col-12">
                            <label htmlFor="indicaciones" className="form-label">Indicaciones adicionales</label>
                            <textarea name="indicaciones" id rows={4} className="form-control" defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut ante eget nulla sodales efficitur. Cras tempor neque risus, nec porta urna lobortis ac."} />
                        </div>
                        <div className="col-12 data-piece">
                            <a href="#" className="btn btn-primary btn-small">Guardar</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row info-block">
                <h5><span>Actividad</span></h5>
                <div className="data-table row">
                    <div className="col-md-3 data-piece">
                        <p className="label">Registro</p>
                        <p className="data">11/12/2021</p>
                    </div>
                    <div className="col-md-3 data-piece">
                        <p className="label">Último pedido</p>
                        <p className="data">Mi 15/4/2020, 15:05hs</p>
                    </div>
                    <div className="col-md-3 data-piece">
                        <p className="label">Pedidos totales</p>
                        <p className="data">254</p>
                    </div>
                </div>
            </div>
      </div>
    );
}

export default EditLocal;