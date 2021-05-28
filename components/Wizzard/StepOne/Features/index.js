const Features = () => {
    return (
        <div className="localexistente block-alternative">
            <div className="form-element">
                <p className="label">Características</p>
                <div className="caracteristicas-local">
                    <div className="form-element">
                        <p className="label">Dirección</p>
                        <p className="value">Av. Santa Fe 2702, C1425, CABA</p>
                    </div>
                    <div className="form-element row">
                        <div className="col-md-4 col-xl-3 superficie">
                            <p className="label">Vidriera</p>
                            <p className="value">Sup. aproximada: 64m<sup>2</sup></p>
                        </div>
                        <div className="col-md-8 col-xl-9 panios">
                            <div className="row">
                                <div className="col panio">
                                    <p className="label">Ventana #1</p>
                                    <p className="value">16m<sup>2</sup></p>
                                </div>
                                <div className="col panio">
                                    <p className="label">Ventana #2</p>
                                    <p className="value">8m<sup>2</sup></p>
                                </div>
                                <div className="col panio">
                                    <p className="label">Ventana #3</p>
                                    <p className="value">12m<sup>2</sup></p>
                                </div>
                                <div className="col panio">
                                    <p className="label">Ventana #3</p>
                                    <p className="value">12m<sup>2</sup></p>
                                </div>
                                <div className="col panio">
                                    <p className="label">Ventana #3</p>
                                    <p className="value">12m<sup>2</sup></p>
                                </div>
                                <div className="col panio">
                                    <p className="label">Ventana #3</p>
                                    <p className="value">12m<sup>2</sup></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-set row">
                        <div className="col-md-4 col-xl-3">
                            <button className="btn btn-primary btn-small">
                                Editar
                            </button>	
                        </div>
                        
                        <div className="col-md-8 col-xl-9">
                            <p className="form-text small"><i className="far fa-info-circle"/> Si editas las características del local, los servicios existentes serán pausados hasta que se confirmen los nuevos precios.</p>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    );
}

export default Features;