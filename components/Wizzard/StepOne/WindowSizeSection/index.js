const Window = () => {
    return (
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
    );
}

const WindowSizeSection = () => {
    return (
        <div className="ventanas"> 
            <h4>Tamaño de la vidriera</h4>
            <p>A continuación especificá el tamaño aproximado de tu vidriera. 
            <br/><strong>El alto y ancho máximo de cada paño de ventana es de 4 metros.</strong></p>
            <Window/>
            <div className="ventana"> {/*TODO: Deberia ser window tambien*/ }
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

export default WindowSizeSection;