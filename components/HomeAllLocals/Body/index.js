const Body = ({changeToEditLocal}) => {
    return (
        <div className="locales row">
            {/* Local verificado */}
            <div className="col-lg-6 local">
                <div className="card">
                    <div className="data-main row">
                        <div className="col">
                            <h4>Kentucky Santa Fe</h4>
                            <p className="direccion">Av. Santa Fe 2702, Palermo, Comuna 12</p>
                        </div>
                        <div className="col-auto">
                            <div className="imagen-local local-verificado" style={{backgroundImage: 'url(/img/beneficios-side.jpg)'}}/>
                        </div>
                    </div>
                    <div className="data-table row">
                        <div className="col-auto superfice">
                            <p className="label">Superficie</p>
                            <p className="data">64m<sup>2</sup> <i className="c-success far fa-check-circle" /></p>
                        </div>
                        <div className="col-auto tiempo">
                            <p className="label">Tiempo estimado</p>
                            <p className="data">10 minutos</p>
                        </div>
                        <div className="col-auto pedidos">
                            <p className="label">Pedidos</p>
                            <p className="data">254</p>
                        </div>
                    </div>
                    <div className="btn-set">
                        <div className="alertas" />
                        <a className="btn btn-outline btn-small" onClick={() => changeToEditLocal()}>Editar</a>
                    </div>
                </div>
            </div>
            {/* Local con problemas: no tiene imagen */}
            <div className="col-lg-6 local">
                <div className="card">
                    <div className="data-main row">
                        <div className="col">
                            <h4>Kentucky Santa Fe</h4>
                            <p className="direccion">Av. Santa Fe 2702, Palermo, Comuna 12</p>
                        </div>
                        <div className="col-auto">
                            <div className="imagen-local sin-imagen"/>
                        </div>
                    </div>
                    <div className="data-table row">
                        <div className="col-auto superfice">
                            <p className="label">Superficie</p>
                            <p className="data">64m<sup>2</sup> <i className="c-success far fa-check-circle" /></p>
                        </div>
                        <div className="col-auto tiempo">
                            <p className="label">Tiempo estimado</p>
                            <p className="data">10 minutos</p>
                        </div>
                        <div className="col-auto pedidos">
                            <p className="label">Pedidos</p>
                            <p className="data">254</p>
                        </div>
                    </div>
                    <div className="btn-set">
                        <div className="alertas"><i className="far fa-exclamation-triangle" />Foto de fachada pendiente</div>
                            <a className="btn btn-outline btn-small">Editar</a>
                        </div>
                    </div>
                </div>
                {/* Local con problemas: superficie a confirmar */}
                <div className="col-lg-6 local">
                    <div className="card">
                        <div className="data-main row">
                            <div className="col">
                                <h4>Kentucky Santa Fe</h4>
                                <p className="direccion">Av. Santa Fe 2702, Palermo, Comuna 12</p>
                            </div>
                            <div className="col-auto">
                                <div className="imagen-local" style={{backgroundImage: 'url(/img/beneficios-side.jpg)'}} />
                            </div>
                        </div>
                        <div className="data-table row">
                            <div className="col-auto superfice">
                                <p className="label">Superficie</p>
                                <p className="data">80m<sup>2</sup> <span className="superficie-anterior">64m<sup>2</sup></span></p>
                            </div>
                            <div className="col-auto tiempo">
                                <p className="label">Tiempo estimado</p>
                                <p className="data">10 minutos</p>
                            </div>
                            <div className="col-auto pedidos">
                                <p className="label">Pedidos</p>
                                <p className="data">254</p>
                            </div>
                        </div>
                        <div className="btn-set">
                            <div className="alertas"><i className="far fa-exclamation-triangle" />Superficie a confirmar</div>
                            <a className="btn btn-outline btn-small">Editar</a>
                        </div>
                    </div>
                </div>
            {/* Local nuevo (sin imagen y todo a confirmar)*/}
            <div className="col-lg-6 local">
                <div className="local card nuevo">
                    <div className="data-main row">
                        <div className="col">
                            <h4>Kentucky Santa Fe</h4>
                            <p className="direccion">Av. Santa Fe 2702, Palermo, Comuna 12</p>
                        </div>
                        <div className="col-auto">
                            <div className="imagen-local sin-imagen" />
                        </div>
                    </div>
                    <div className="data-table row">
                        <div className="col-auto superfice">
                            <p className="label">Superficie</p>
                            <p className="data">64m<sup>2</sup></p>
                        </div>
                        <div className="col-auto tiempo">
                            <p className="label">Tiempo estimado</p>
                            <p className="data">10 minutos</p>
                        </div>
                        <div className="col-auto pedidos">
                            <p className="label">Pedidos</p>
                            <p className="data">254</p>
                        </div>
                    </div>
                    <div className="btn-set">
                        <div className="alertas">
                            <i className="far fa-exclamation-triangle" />Foto de fachada pendiente
                            <br /><i className="far fa-exclamation-triangle" />Superficie a confirmar
                        </div>
                        <a className="btn btn-outline btn-small">Editar</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;