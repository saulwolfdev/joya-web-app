import { useState } from "react";

const OptionLocals = ({userId}) => {

    const [viewList, setViewList] = useState(false);

    const handleViewList = (val) => {
        setViewList(val);
    }

    return (
        <div className="content-block clientes-locales">
            <div className="container-fluid">
                <Header handleViewList={handleViewList}/>
                { viewList ? 
                    <DataList userId={userId}/>
                    :
                    <DataGrid userId={userId}/>    
                }
            </div>
        </div>
    );
}

const DataList = ({userId}) => { // TODO

}

const DataGrid = ({userId}) => {

    // TODO use userId to call firebase

    return (
        <div className="locales row">
            {/* Local verificado */}
            <div className="col-md-6 local">
                <div className="card">
                    <div className="data-main row">
                        <div className="col">
                            <h4>Kentucky Santa Fe</h4>
                            <p className="direccion">Av. Santa Fe 2702, Palermo, Comuna 12</p>
                        </div>
                        <div className="col-auto">
                            <div className="imagen-local local-verificado" style={{ backgroundImage: 'url(/img/beneficios-side.jpg)' }} />
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
                        <a className="btn btn-outline btn-small">Editar</a>
                    </div>
                </div>
            </div>
            {/* Local con problemas: no tiene imagen */}
            <div className="col-md-6 local">
                <div className="card">
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
            <div className="col-md-6 local">
                <div className="card">
                    <div className="data-main row">
                        <div className="col">
                            <h4>Kentucky Santa Fe</h4>
                            <p className="direccion">Av. Santa Fe 2702, Palermo, Comuna 12</p>
                        </div>
                        <div className="col-auto">
                            <div className="imagen-local" style={{ backgroundImage: 'url(/img/beneficios-side.jpg)' }} />
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
            <div className="col-md-6 local">
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

const Header = ({handleViewList}) => {

    const toGrid = () => {
        handleViewList(false);
    }

    const toList = () => {
        handleViewList(true);
    }

    return (
        <div className="header-row">
            <h4>Locales</h4>
            <div className="dropdown filter">
                <button className="btn btn-misc dropdown-toggle" type="button" id="localesFilter" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="far fa-th" />
                </button>
                <ul className="dropdown-menu" aria-labelledby="localesFilter">
                    <li>
                        <a className="dropdown-item" href="#" onClick={(e) => {
                                    e.preventDefault();
                                    toGrid();
                                    }}>
                                <i className="far fa-th"/>
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#" onClick={(e) => {
                                    e.preventDefault();
                                    toList();
                                    }}>
                                <i className="far fa-th-list"/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="filter" />
        </div>
    );
}

export default OptionLocals;