const Wizzard = () => {
    return (
        <>
        	<Wizzard.Steps/>
            <Wizzard.StepOne/>
            <Wizzard.Footer/>
        </>
    );
}

const StepOne = () => {
    return (
        <div className="wizard-content">
            <div className="step1 inner-container">
                <h4>Detalles de Local</h4>
                <p>Seleccioná el local que necesita de nuestro servicio o agregá un local nuevo a tu lista.</p>
                <div className="form">
                    <InputLocal/>
                    <div className="localnuevo block-alternative">
                        <InputDirection/>
                        <InputLocalName/>
                        <InputAdditionalIndications/>
                        <WindowSize/>
                    </div>
                    <Features/>
                    <CleanType/>
                </div>
            </div>
        </div>
    );
}
Wizzard.StepOne = StepOne;

const CleanType = () => {
    return (
        <div className="form-group row">
            <div className="col-auto d-none d-md-block">
                {  /* <Image src="/ico-balde-form.jpg" alt="Limpiamos tu vidriera" className="img-fluid"/> */ /* TODO review*/ }
            </div>
            <div className="col">
                <h4>Tipo de limpieza incluida</h4>
                <p>Vamos a limpiar tus vidrieras de todo tipo de suciedad que sea soluble al agua. No podemos limpiar tus vidrieras de graffitis o pintura al ácido.</p>
                <p><input type="checkbox"/>Entiendo y acepto lo que está incluido.</p>
            </div>
        </div>
    );
}

const Steps = () => {
    return (
        <div className="wizard-steps">
            <ul className="inner-container">
                <li className="title"><span className="d-none d-md-inline">Tu solicitud:</span><span className="d-md-none">Pasos:</span></li>
                <li className="step step1"><i className="fal fa-store"/><span className="d-none d-lg-inline">Detalles del local</span><span className="d-none d-md-inline d-lg-none">El local</span></li>
                <li className="arrow">&rsaquo;</li>
                <li className="step step2"><i className="fal fa-calendar-alt"/><span className="d-none d-md-inline">Día y hora</span></li>
                <li className="arrow">&rsaquo;</li>
                <li className="step step3"><i className="fal fa-credit-card"/><span className="d-none d-md-inline">Pago</span></li>
            </ul>
        </div>
    );
}
Wizzard.Steps = Steps;

const Footer = () => {
    return (
        <div className="wizard-footer">
            <div className="inner-container">
                <button className="btn btn-primary" disabled>Siguiente</button>	
            </div>
        </div>
    );
}
Wizzard.Footer = Footer;

const InputLocal = () => {
    return (
        <div className="form-element">
            <label htmlFor="local" className="form-label">Local</label>
            <select name="local" id="" className="form-select">
                <option value="">Seleccioná un local</option>
                <option value="nuevo">+ Nuevo local</option>
                <option value="local1">Local 1</option>
                <option value="local2">Local 2</option>
            </select>
            <p className="form-text importante">Ya tenés cuenta en Joya? <a href="#" className="link-text">Iniciá sesión.</a></p> 
        </div>  
    );
}

const InputDirection = () => {
    return (
        <div className="form-element">
            <label htmlFor="direccion" className="form-label">Dirección</label>
            <div className="input-group">
                <span className="input-group-text"><i className="far fa-map-marker-alt"/></span>
                <input type="text" className="form-control" placeholder="Dirección del local..." name="direccion"/>
            </div>
            <p className="form-text">El servicio sólo aplica a vidrieras en planta baja, de un máximo de 4 metros de altura.</p> 
        </div>
    );
}

const InputLocalName = () => {
    return (
        <div className="form-element">
            <label htmlFor="nombre_local" className="form-label">Nombre del local</label>
            <input type="text" className="form-control" placeholder="Nombre del local..." name="nombre_local"/>
        </div>
    );
}

const InputAdditionalIndications = () => {
    return (
        <div className="form-element">
            <label htmlFor="indicaciones" className="form-label">Indicaciones adicionales (opcional)</label>
            <input type="text" className="form-control" placeholder="Número de local en galería, timbre, etc." name="indicaciones"/>
        </div>
    );
}

const WindowSize = () => {
    return (
        <div className="ventanas"> 
            <h4>Tamaño de la vidriera</h4>
            <p>A continuación especificá el tamaño aproximado de tu vidriera. 
            <br/><strong>El alto y ancho máximo de cada paño de ventana es de 4 metros.</strong></p>
            <div className="ventana">
                <h5>Paño #1</h5>
                <div className="row">
                    <div className="col-sm-8 medidas">
                        <div className="row">
                            <div className="col-auto icon">
                                <i className="far fa-arrows-v"/>
                            </div>
                            <div className="col"><input type="range" className="form-range" id="altura1" min="1" max="4" step="0.5" value="2" data-vidriera="1" data-variable="alto"/></div>
                            <div className="col-auto">
                                <div className="input-group">
                                    <input type="text" className="form-control form-aux" name="altura1" data-vidriera="1" data-variable="alto" value="2"/>
                                    <span className="input-group-text">m</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-auto"><i className="far fa-arrows-h"/></div>
                            <div className="col">
                                <input type="range" className="form-range" id="ancho1" min="1" max="4" step="0.5" value="2" data-vidriera="1" data-variable="ancho"/>
                            </div>
                            <div className="col-auto">
                                <div className="input-group">
                                    <input type="text" className="form-control form-aux" name="ancho1" data-vidriera="1" data-variable="ancho" value="2"/>
                                    <span className="input-group-text">m</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-4 representacion">
                        <div className="vidriera" id="vidriera1" data-maxwidth="4" data-maxheight="4" style={{width: '50%', height: '50%'}} data-ancho="2" data-alto="2">
                            <p className="value">4m<sup>2</sup></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ventana">
                <h5>Paño #2 <a href="#" className="link-text">Eliminar</a></h5>
                <div className="row">
                    <div className="col-sm-8 medidas">
                        <div className="row">
                            <div className="col-auto icon">
                                <i className="far fa-arrows-v"/>
                            </div>
                            <div className="col"><input type="range" className="form-range" id="altura2" min="1" max="4" step="0.5" value="2" data-vidriera="2" data-variable="alto"/></div>
                            <div className="col-auto">
                                <div className="input-group">
                                    <input type="text" className="form-control form-aux" name="altura2" data-vidriera="2" data-variable="alto" value="2"/>
                                    <span className="input-group-text">m</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-auto"><i className="far fa-arrows-h"/></div>
                            <div className="col">
                                <input type="range" className="form-range" id="ancho2" min="1" max="4" step="0.5" value="2" data-vidriera="2" data-variable="ancho"/>
                            </div>
                            <div className="col-auto">
                                <div className="input-group">
                                    <input type="text" className="form-control form-aux" name="ancho2" data-vidriera="2" data-variable="ancho" value="2"/>
                                    <span className="input-group-text">m</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-4 representacion">
                        <div className="vidriera" id="vidriera2" data-maxwidth="4" data-maxheight="4" style={{width: '50%', height: '50%'}} data-ancho="2" data-alto="2">
                            <p className="value">4m<sup>2</sup></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn-set">
                <a href="#"  className="link-text">+ Agregar otro paño de ventana</a>
            </div>
        </div>
    );
}

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

export default Wizzard;