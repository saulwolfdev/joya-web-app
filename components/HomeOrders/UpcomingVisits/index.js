const UpcomingVisits = ({handlePast}) => {
    return (
        <div className="pedidos-proximos">
            <div className="local-pedido row">
                <div className="data col-md-3">
                    <h5>Kentucky Santa Fe</h5>
                    <p className="aclaracion">Av. Santa Fe 2702, C1425, CABA.</p>
                </div>
                <div className="pedidos col-md-9">
                    <div className="pedido row">
                        <div className="col-auto fecha">
                            <div className="dia">7</div>
                            <div className="mes">Dic</div>
                        </div>
                        <div className="col detalle">
                            <h5>Lunes 20 de Dic. <span>/ Entre 9 y 10hs</span></h5> 
                            <p className="descripcion">Recurrente: Lu - Mi - Vi / $150 por visita</p>
                        </div>
                        <div className="col-auto acciones">
                            <i className="far fa-ellipsis-h" />
                            <ul className="options-visits">
                                <li className="options-visits-list">reprogramar proxima visita</li>
                                <li className="options-visits-list">cancelar suscripcion</li>
                            </ul>
                        </div>
                    </div>
                    <div className="pedido row">
                        <div className="col-auto fecha">
                            <div className="dia">7</div>
                            <div className="mes">Dic</div>
                        </div>
                        <div className="col detalle">
                            <h5>Lunes 20 de Dic. <span>/ Entre 9 y 10hs</span></h5> 
                            <p className="descripcion">Recurrente: Lu - Mi - Vi / $150 por visita</p>
                        </div>
                        <div className="col-auto acciones">
                            <i className="far fa-ellipsis-h" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="local-pedido row">
                <div className="data col-md-3">
                    <h5>Kentucky Santa Fe</h5>
                    <p className="aclaracion">Av. Santa Fe 2702, C1425, CABA.</p>
                </div>
                <div className="pedidos col-md-9">
                    <div className="pedido row">
                        <div className="col-auto fecha">
                            <div className="dia">7</div>
                            <div className="mes">Dic</div>
                        </div>
                        <div className="col detalle">
                            <h5>Lunes 20 de Dic. <span>/ Entre 9 y 10hs</span></h5> 
                            <p className="descripcion">Recurrente: Lu - Mi - Vi / $150 por visita</p>
                        </div>
                        <div className="col-auto acciones">
                            <i className="far fa-ellipsis-h" />
                        </div>
                    </div>
                    <div className="pedido row">
                        <div className="col-auto fecha">
                            <div className="dia">7</div>
                            <div className="mes">Dic</div>
                        </div>
                        <div className="col detalle">
                            <h5>Lunes 20 de Dic. <span>/ Entre 9 y 10hs</span></h5> 
                            <p className="descripcion">Recurrente: Lu - Mi - Vi / $150 por visita</p>
                        </div>
                        <div className="col-auto acciones">
                            <i className="far fa-ellipsis-h" />
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" onClick={(e) => {handlePast(e, true)}}>Ver visitas pasadas</a>
      </div>
    );
}

export default UpcomingVisits;