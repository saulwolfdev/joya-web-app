const InputLocalName = ({ handleLocal }) => {
    return (
        <>
            <div className="form-element">
                <label htmlFor="local" className="form-label">Nombre del local</label>
                <select className="form-control" onChange={handleLocal} placeholder="Nombre del local..." name="local" aria-label="Nombre del local...">
                    <option defaultValue="0">Seleccioná un local</option>
                    <option value="1">Correcto</option>
                    <option value="N">+Nuevo local</option>
                </select>
            </div>
            <div class="localexistente block-alternative" style={{ display: "block" }}>
                <div class="form-element">
                    <p class="label">Características</p>
                    <div class="caracteristicas-local">
                        <div class="form-element">
                            <p class="label">Dirección</p>
                            <p class="value">Av. Santa Fe 2702, C1425, CABA</p>
                        </div>
                        <div class="form-element row">
                            <div class="col-md-4 col-xl-3 superficie">
                                <p class="label">Vidriera</p>
                                <p class="value">Sup. aproximada: 64m<sup>2</sup></p>
                            </div>
                            <div class="col-md-8 col-xl-9 panios">
                                <div class="row">
                                    <div class="col panio">
                                        <p class="label">Ventana #1</p>
                                        <p class="value">16m<sup>2</sup></p>
                                    </div>
                                    <div class="col panio">
                                        <p class="label">Ventana #2</p>
                                        <p class="value">8m<sup>2</sup></p>
                                    </div>
                                    <div class="col panio">
                                        <p class="label">Ventana #3</p>
                                        <p class="value">12m<sup>2</sup></p>
                                    </div>
                                    <div class="col panio">
                                        <p class="label">Ventana #3</p>
                                        <p class="value">12m<sup>2</sup></p>
                                    </div>
                                    <div class="col panio">
                                        <p class="label">Ventana #3</p>
                                        <p class="value">12m<sup>2</sup></p>
                                    </div>
                                    <div class="col panio">
                                        <p class="label">Ventana #3</p>
                                        <p class="value">12m<sup>2</sup></p>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div class="btn-set row">
                            <div class="col-md-4 col-xl-3">
                                <button class="btn btn-primary btn-small">
                                    Editar
															</button>
                            </div>

                            <div class="col-md-8 col-xl-9">
                                <p class="form-text small"><i class="far fa-info-circle"></i> Si editas las características del local, los servicios existentes serán pausados hasta que se confirmen los nuevos precios.</p> </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
}

export default InputLocalName;