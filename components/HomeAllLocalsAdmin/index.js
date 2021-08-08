const HomeAllLocalsAdmin = () => {
    return (
        <div className="main-content locales-lista">
            <div className="admin-sintesis">
                <div className="container-fluid">
                    <div className="row sintesis-header">
                        <h3 className="col-auto">Locales</h3>	
                        <div className="btn-set col-auto">
                            <button className="btn btn-outline btn-small"><span className="d-md-inline d-none">Descargar</span> CSV</button>
                        </div>
                    </div>
                    <div className="row stats d-none d-md-flex">
                        <div className="col-auto stat">
                            <p className="label">Total</p>
                            <p className="value"><span className="number strong">105</span></p>
                        </div>
                        <div className="col-auto stat">
                            <p className="label">Activos</p>
                            <p className="value"><span className="number">80</span> </p>
                        </div>
                        <div className="col-auto stat">
                            <p className="label">Nuevos</p>
                            <div className="row">
                                <div className="col-auto">
                                    <p className="value"><span className="number">75</span></p>		
                                </div>
                                <div className="col-auto interpretation">
                                    <p className="value worse">-2%</p>
                                    <p className="aclaracion">vs. mes anterior</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto stat block-start">
                            <p className="label">Revisión pendiente</p>
                            <p className="value c-error"><span className="number">25</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="more-content">
                <div className="content-block clientes-lista">
                    <div className="container-fluid">
                        <div className="filter-row form form-rounded form-small">
                            <div className="col-auto title">Filtros:</div>
                            <div className="col-auto filtro">
                                <p className="label">Fecha de alta</p>
                                <select className="form-select" aria-label="Fecha de alta" name="alta" id="fechaAlta">
                                    <option value="a" selected="selected">Todas</option>
                                    <option value="b">Último mes</option>
                                    <option value="c">Último año</option>
                                </select>
                            </div>
                            <div className="col-auto filtro">
                                <p className="label">Estado</p>
                                <select className="form-select" aria-label="Estado" name="estado" id="estado">
                                    <option value="a" selected="selected">Todos</option>
                                    <option value="b">Acciones pendientes</option>
                                    <option value="c">Sin acciones pendientes</option>
                                </select>
                            </div>
                            <div className="col-auto filtro">
                                <p className="label">Barrio</p>
                                <select className="form-select" aria-label="Barrio" name="barrio" id="barrio">
                                    <option value="a" selected="selected">Todos</option>
                                    <option value="b">Agronomía</option>
                                    <option value="c">Almagro</option>
                                </select>
                            </div>
                            <div className="col-12 col-md expansible-search-right">	
                                <input className="expansible-search" type="search" placeholder="Buscar"/>
                            </div>
                        </div>
                        <div className="clientes-all">
                            <div className="table-responsive">
                                <table className="table admin-table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="cell-estado" />
                                            <th scope="col" className="cell-nombre ordenable">Local</th>
                                            <th scope="col" className="cell-barrio ordenable up">Barrio</th>
                                            <th scope="col" className="cell-superficie ordenable down">Sup.</th>
                                            <th scope="col" className="cell-cliente ordenable">Cliente</th>
                                            <th scope="col" className="cell-ultpedido ordenable">Últ. pedido</th>
                                            <th scope="col" className="cell-estado ordenable">Estado</th>
                                            <th scope="col" className="cell-accion" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="accion-pendiente">
                                            <td scope="col" className="cell-estado"><i className="circle" /></td>
                                            <td scope="col" className="cell-nombre">
                                                Café Valerio
                                                <span className="aclaracion">Desde 07/04/2020</span>
                                            </td>
                                            <td scope="col" className="cell-barrio">
                                                Balvanera
                                                <span className="aclaracion">Jujuy 232</span>
                                            </td>
                                            <td scope="col" className="cell-superficie">58 m<sup>2</sup></td>
                                            <td scope="col" className="cell-cliente">Grant Marshall</td>
                                            <td scope="col" className="cell-ultpedido">7 May</td>
                                            <td scope="col" className="cell-estado"><a title="Revisar fachada"><i className="far fa-exclamation-triangle" />Revisar</a></td>
                                            <td scope="col" className="cell-accion">
                                                <a href="#" className="btn btn-outline btn-small">Editar</a>
                                            </td>
                                        </tr>
                                        <tr className="accion-pendiente">
                                            <td scope="col" className="cell-estado"><i className="circle" /></td>
                                            <td scope="col" className="cell-nombre">
                                                Café Valerio
                                                <span className="aclaracion">Desde 07/04/2020</span>
                                            </td>
                                            <td scope="col" className="cell-barrio">
                                                Balvanera
                                                <span className="aclaracion">Jujuy 232</span>
                                            </td>
                                            <td scope="col" className="cell-superficie">58 m<sup>2</sup></td>
                                            <td scope="col" className="cell-cliente">Grant Marshall</td>
                                            <td scope="col" className="cell-ultpedido">7 May</td>
                                            <td scope="col" className="cell-estado"><a title="Revisar fachada"><i className="far fa-exclamation-triangle" />Revisar</a></td>
                                            <td scope="col" className="cell-accion">
                                                <a href="#" className="btn btn-outline btn-small">Editar</a>
                                            </td>
                                        </tr>
                                        <tr className> {/* De aca para abajo la mayoria no le corregi la tabulacion porque se puede hacer con un map */}
                                            <td scope="col" className="cell-estado"><i className="circle" /></td>
                                            <td scope="col" className="cell-nombre">
                                            Café Valerio
                                            <span className="aclaracion">Desde 07/04/2020</span>
                                            </td>
                                            <td scope="col" className="cell-barrio">
                                            Balvanera
                                            <span className="aclaracion">Jujuy 232</span>
                                            </td>
                                            <td scope="col" className="cell-superficie">58 m<sup>2</sup></td>
                                            <td scope="col" className="cell-cliente">Grant Marshall</td>
                                            <td scope="col" className="cell-ultpedido">7 May</td>
                                            <td scope="col" className="cell-estado" />
                                            <td scope="col" className="cell-accion">
                                            <a href="#" className="btn btn-outline btn-small">Editar</a>
                                            </td>
                                        </tr>
                                        <tr className>
                                            <td scope="col" className="cell-estado"><i className="circle" /></td>
                                            <td scope="col" className="cell-nombre">
                                            Café Valerio
                                            <span className="aclaracion">Desde 07/04/2020</span>
                                            </td>
                                            <td scope="col" className="cell-barrio">
                                            Balvanera
                                            <span className="aclaracion">Jujuy 232</span>
                                            </td>
                                            <td scope="col" className="cell-superficie">58 m<sup>2</sup></td>
                                            <td scope="col" className="cell-cliente">Grant Marshall</td>
                                            <td scope="col" className="cell-ultpedido">7 May</td>
                                            <td scope="col" className="cell-estado" />
                                            <td scope="col" className="cell-accion">
                                            <a href="#" className="btn btn-outline btn-small">Editar</a>
                                            </td>
                                        </tr>
                                        <tr className="accion-pendiente">
                                            <td scope="col" className="cell-estado"><i className="circle" /></td>
                                            <td scope="col" className="cell-nombre">
                                            Café Valerio
                                            <span className="aclaracion">Desde 07/04/2020</span>
                                            </td>
                                            <td scope="col" className="cell-barrio">
                                            Balvanera
                                            <span className="aclaracion">Jujuy 232</span>
                                            </td>
                                            <td scope="col" className="cell-superficie">58 m<sup>2</sup></td>
                                            <td scope="col" className="cell-cliente">Grant Marshall</td>
                                            <td scope="col" className="cell-ultpedido">7 May</td>
                                            <td scope="col" className="cell-estado"><a title="Revisar fachada"><i className="far fa-exclamation-triangle" />Revisar</a></td>
                                            <td scope="col" className="cell-accion">
                                            <a href="#" className="btn btn-outline btn-small">Editar</a>
                                            </td>
                                        </tr>
                                        <tr className="accion-pendiente">
                                            <td scope="col" className="cell-estado"><i className="circle" /></td>
                                            <td scope="col" className="cell-nombre">
                                            Café Valerio
                                            <span className="aclaracion">Desde 07/04/2020</span>
                                            </td>
                                            <td scope="col" className="cell-barrio">
                                            Balvanera
                                            <span className="aclaracion">Jujuy 232</span>
                                            </td>
                                            <td scope="col" className="cell-superficie">58 m<sup>2</sup></td>
                                            <td scope="col" className="cell-cliente">Grant Marshall</td>
                                            <td scope="col" className="cell-ultpedido">7 May</td>
                                            <td scope="col" className="cell-estado"><a title="Revisar fachada"><i className="far fa-exclamation-triangle" />Revisar</a></td>
                                            <td scope="col" className="cell-accion">
                                            <a href="#" className="btn btn-outline btn-small">Editar</a>
                                            </td>
                                        </tr>
                                        <tr className>
                                            <td scope="col" className="cell-estado"><i className="circle" /></td>
                                            <td scope="col" className="cell-nombre">
                                            Café Valerio
                                            <span className="aclaracion">Desde 07/04/2020</span>
                                            </td>
                                            <td scope="col" className="cell-barrio">
                                            Balvanera
                                            <span className="aclaracion">Jujuy 232</span>
                                            </td>
                                            <td scope="col" className="cell-superficie">58 m<sup>2</sup></td>
                                            <td scope="col" className="cell-cliente">Grant Marshall</td>
                                            <td scope="col" className="cell-ultpedido">7 May</td>
                                            <td scope="col" className="cell-estado" />
                                            <td scope="col" className="cell-accion">
                                            <a href="#" className="btn btn-outline btn-small">Editar</a>
                                            </td>
                                        </tr>
                                        <tr className>
                                            <td scope="col" className="cell-estado"><i className="circle" /></td>
                                            <td scope="col" className="cell-nombre">
                                            Café Valerio
                                            <span className="aclaracion">Desde 07/04/2020</span>
                                            </td>
                                            <td scope="col" className="cell-barrio">
                                            Balvanera
                                            <span className="aclaracion">Jujuy 232</span>
                                            </td>
                                            <td scope="col" className="cell-superficie">58 m<sup>2</sup></td>
                                            <td scope="col" className="cell-cliente">Grant Marshall</td>
                                            <td scope="col" className="cell-ultpedido">7 May</td>
                                            <td scope="col" className="cell-estado" />
                                            <td scope="col" className="cell-accion">
                                            <a href="#" className="btn btn-outline btn-small">Editar</a>
                                            </td>
                                        </tr>
                                        <tr className="accion-pendiente">
                                            <td scope="col" className="cell-estado"><i className="circle" /></td>
                                            <td scope="col" className="cell-nombre">
                                            Café Valerio
                                            <span className="aclaracion">Desde 07/04/2020</span>
                                            </td>
                                            <td scope="col" className="cell-barrio">
                                            Balvanera
                                            <span className="aclaracion">Jujuy 232</span>
                                            </td>
                                            <td scope="col" className="cell-superficie">58 m<sup>2</sup></td>
                                            <td scope="col" className="cell-cliente">Grant Marshall</td>
                                            <td scope="col" className="cell-ultpedido">7 May</td>
                                            <td scope="col" className="cell-estado"><a title="Revisar fachada"><i className="far fa-exclamation-triangle" />Revisar</a></td>
                                            <td scope="col" className="cell-accion">
                                            <a href="#" className="btn btn-outline btn-small">Editar</a>
                                            </td>
                                        </tr>
                                        <tr className="accion-pendiente">
                                            <td scope="col" className="cell-estado"><i className="circle" /></td>
                                            <td scope="col" className="cell-nombre">
                                            Café Valerio
                                            <span className="aclaracion">Desde 07/04/2020</span>
                                            </td>
                                            <td scope="col" className="cell-barrio">
                                            Balvanera
                                            <span className="aclaracion">Jujuy 232</span>
                                            </td>
                                            <td scope="col" className="cell-superficie">58 m<sup>2</sup></td>
                                            <td scope="col" className="cell-cliente">Grant Marshall</td>
                                            <td scope="col" className="cell-ultpedido">7 May</td>
                                            <td scope="col" className="cell-estado"><a title="Revisar fachada"><i className="far fa-exclamation-triangle" />Revisar</a></td>
                                            <td scope="col" className="cell-accion">
                                            <a href="#" className="btn btn-outline btn-small">Editar</a>
                                            </td>
                                        </tr>
                                        <tr className>
                                            <td scope="col" className="cell-estado"><i className="circle" /></td>
                                            <td scope="col" className="cell-nombre">
                                            Café Valerio
                                            <span className="aclaracion">Desde 07/04/2020</span>
                                            </td>
                                            <td scope="col" className="cell-barrio">
                                            Balvanera
                                            <span className="aclaracion">Jujuy 232</span>
                                            </td>
                                            <td scope="col" className="cell-superficie">58 m<sup>2</sup></td>
                                            <td scope="col" className="cell-cliente">Grant Marshall</td>
                                            <td scope="col" className="cell-ultpedido">7 May</td>
                                            <td scope="col" className="cell-estado" />
                                            <td scope="col" className="cell-accion">
                                            <a href="#" className="btn btn-outline btn-small">Editar</a>
                                            </td>
                                        </tr>
                                        <tr className>
                                            <td scope="col" className="cell-estado"><i className="circle" /></td>
                                            <td scope="col" className="cell-nombre">
                                            Café Valerio
                                            <span className="aclaracion">Desde 07/04/2020</span>
                                            </td>
                                            <td scope="col" className="cell-barrio">
                                            Balvanera
                                            <span className="aclaracion">Jujuy 232</span>
                                            </td>
                                            <td scope="col" className="cell-superficie">58 m<sup>2</sup></td>
                                            <td scope="col" className="cell-cliente">Grant Marshall</td>
                                            <td scope="col" className="cell-ultpedido">7 May</td>
                                            <td scope="col" className="cell-estado" />
                                            <td scope="col" className="cell-accion">
                                            <a href="#" className="btn btn-outline btn-small">Editar</a>
                                            </td>
                                        </tr>
                                        <tr className="accion-pendiente">
                                            <td scope="col" className="cell-estado"><i className="circle" /></td>
                                            <td scope="col" className="cell-nombre">
                                            Café Valerio
                                            <span className="aclaracion">Desde 07/04/2020</span>
                                            </td>
                                            <td scope="col" className="cell-barrio">
                                            Balvanera
                                            <span className="aclaracion">Jujuy 232</span>
                                            </td>
                                            <td scope="col" className="cell-superficie">58 m<sup>2</sup></td>
                                            <td scope="col" className="cell-cliente">Grant Marshall</td>
                                            <td scope="col" className="cell-ultpedido">7 May</td>
                                            <td scope="col" className="cell-estado"><a title="Revisar fachada"><i className="far fa-exclamation-triangle" />Revisar</a></td>
                                            <td scope="col" className="cell-accion">
                                            <a href="#" className="btn btn-outline btn-small">Editar</a>
                                            </td>
                                        </tr>
                                        <tr className="accion-pendiente">
                                            <td scope="col" className="cell-estado"><i className="circle" /></td>
                                            <td scope="col" className="cell-nombre">
                                            Café Valerio
                                            <span className="aclaracion">Desde 07/04/2020</span>
                                            </td>
                                            <td scope="col" className="cell-barrio">
                                            Balvanera
                                            <span className="aclaracion">Jujuy 232</span>
                                            </td>
                                            <td scope="col" className="cell-superficie">58 m<sup>2</sup></td>
                                            <td scope="col" className="cell-cliente">Grant Marshall</td>
                                            <td scope="col" className="cell-ultpedido">7 May</td>
                                            <td scope="col" className="cell-estado"><a title="Revisar fachada"><i className="far fa-exclamation-triangle" />Revisar</a></td>
                                            <td scope="col" className="cell-accion">
                                            <a href="#" className="btn btn-outline btn-small">Editar</a>
                                            </td>
                                        </tr>
                                        <tr className>
                                            <td scope="col" className="cell-estado"><i className="circle" /></td>
                                            <td scope="col" className="cell-nombre">
                                            Café Valerio
                                            <span className="aclaracion">Desde 07/04/2020</span>
                                            </td>
                                            <td scope="col" className="cell-barrio">
                                            Balvanera
                                            <span className="aclaracion">Jujuy 232</span>
                                            </td>
                                            <td scope="col" className="cell-superficie">58 m<sup>2</sup></td>
                                            <td scope="col" className="cell-cliente">Grant Marshall</td>
                                            <td scope="col" className="cell-ultpedido">7 May</td>
                                            <td scope="col" className="cell-estado" />
                                            <td scope="col" className="cell-accion">
                                            <a href="#" className="btn btn-outline btn-small">Editar</a>
                                            </td>
                                        </tr>
                                        <tr className>
                                            <td scope="col" className="cell-estado"><i className="circle" /></td>
                                            <td scope="col" className="cell-nombre">
                                            Café Valerio
                                            <span className="aclaracion">Desde 07/04/2020</span>
                                            </td>
                                            <td scope="col" className="cell-barrio">
                                            Balvanera
                                            <span className="aclaracion">Jujuy 232</span>
                                            </td>
                                            <td scope="col" className="cell-superficie">58 m<sup>2</sup></td>
                                            <td scope="col" className="cell-cliente">Grant Marshall</td>
                                            <td scope="col" className="cell-ultpedido">7 May</td>
                                            <td scope="col" className="cell-estado" />
                                            <td scope="col" className="cell-accion">
                                            <a href="#" className="btn btn-outline btn-small">Editar</a>
                                            </td>
                                        </tr>
                                        <tr className="accion-pendiente">
                                            <td scope="col" className="cell-estado"><i className="circle" /></td>
                                            <td scope="col" className="cell-nombre">
                                            Café Valerio
                                            <span className="aclaracion">Desde 07/04/2020</span>
                                            </td>
                                            <td scope="col" className="cell-barrio">
                                            Balvanera
                                            <span className="aclaracion">Jujuy 232</span>
                                            </td>
                                            <td scope="col" className="cell-superficie">58 m<sup>2</sup></td>
                                            <td scope="col" className="cell-cliente">Grant Marshall</td>
                                            <td scope="col" className="cell-ultpedido">7 May</td>
                                            <td scope="col" className="cell-estado"><a title="Revisar fachada"><i className="far fa-exclamation-triangle" />Revisar</a></td>
                                            <td scope="col" className="cell-accion">
                                            <a href="#" className="btn btn-outline btn-small">Editar</a>
                                            </td>
                                        </tr>
                                        <tr className="accion-pendiente">
                                            <td scope="col" className="cell-estado"><i className="circle" /></td>
                                            <td scope="col" className="cell-nombre">
                                            Café Valerio
                                            <span className="aclaracion">Desde 07/04/2020</span>
                                            </td>
                                            <td scope="col" className="cell-barrio">
                                            Balvanera
                                            <span className="aclaracion">Jujuy 232</span>
                                            </td>
                                            <td scope="col" className="cell-superficie">58 m<sup>2</sup></td>
                                            <td scope="col" className="cell-cliente">Grant Marshall</td>
                                            <td scope="col" className="cell-ultpedido">7 May</td>
                                            <td scope="col" className="cell-estado"><a title="Revisar fachada"><i className="far fa-exclamation-triangle" />Revisar</a></td>
                                            <td scope="col" className="cell-accion">
                                            <a href="#" className="btn btn-outline btn-small">Editar</a>
                                            </td>
                                        </tr>
                                        <tr className>
                                            <td scope="col" className="cell-estado"><i className="circle" /></td>
                                            <td scope="col" className="cell-nombre">
                                            Café Valerio
                                            <span className="aclaracion">Desde 07/04/2020</span>
                                            </td>
                                            <td scope="col" className="cell-barrio">
                                            Balvanera
                                            <span className="aclaracion">Jujuy 232</span>
                                            </td>
                                            <td scope="col" className="cell-superficie">58 m<sup>2</sup></td>
                                            <td scope="col" className="cell-cliente">Grant Marshall</td>
                                            <td scope="col" className="cell-ultpedido">7 May</td>
                                            <td scope="col" className="cell-estado" />
                                            <td scope="col" className="cell-accion">
                                            <a href="#" className="btn btn-outline btn-small">Editar</a>
                                            </td>
                                        </tr>
                                        <tr className>
                                            <td scope="col" className="cell-estado"><i className="circle" /></td>
                                            <td scope="col" className="cell-nombre">
                                            Café Valerio
                                            <span className="aclaracion">Desde 07/04/2020</span>
                                            </td>
                                            <td scope="col" className="cell-barrio">
                                            Balvanera
                                            <span className="aclaracion">Jujuy 232</span>
                                            </td>
                                            <td scope="col" className="cell-superficie">58 m<sup>2</sup></td>
                                            <td scope="col" className="cell-cliente">Grant Marshall</td>
                                            <td scope="col" className="cell-ultpedido">7 May</td>
                                            <td scope="col" className="cell-estado" />
                                            <td scope="col" className="cell-accion">
                                            <a href="#" className="btn btn-outline btn-small">Editar</a>
                                            </td>
                                        </tr>							    
                                    </tbody>
                                </table>
                            </div>
                            <div className="btn-set">
                                <nav aria-label="..." className="table-pagination">
                                    <ul className="pagination">
                                        <li className="page-item disabled"/>
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Anterior">
                                                <span aria-hidden="true">«</span>
                                            </a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item active" aria-current="page">
                                            <a className="page-link" href="#">2</a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Siguiente">
                                                <span aria-hidden="true">»</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeAllLocalsAdmin;