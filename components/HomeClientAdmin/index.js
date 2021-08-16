const HomeClientAdmin = () => {
    return (
        <div className="main-content clientes-lista">
            <div className="admin-sintesis">
                <div className="container-fluid">
                    <div className="row sintesis-header">
                        <h3 className="col-auto">Clientes</h3>
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
                            <p className="label">Vigentes</p>
                            <p className="value"><span className="number">80</span> </p>
                        </div>
                        <div className="col-auto stat">
                            <p className="label">Pendientes de pago</p>
                            <p className="value"><span className="number">75</span></p>
                        </div>
                        <div className="col-auto stat">
                            <p className="label">Vencidos</p>
                            <p className="value"><span className="number">25</span></p>
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
                                <p className="label">Nivel de actividad</p>
                                <select className="form-select" aria-label="Usuarios activos" name="actividad" id="nivelActividad">
                                    <option value="a" selected="selected">Activos este mes</option>
                                    <option value="b">Activos mes pasado</option>
                                    <option value="c">Bla</option>
                                </select>
                            </div>
                            <div className="col-auto filtro">
                                <p className="label">Antigüedad</p>
                                <select className="form-select" aria-label="Antigüedad" name="actividad" id="antiguedad">
                                    <option value="a" selected="selected">Todos</option>
                                    <option value="b">Activos mes pasado</option>
                                    <option value="c">Bla</option>
                                </select>
                            </div>
                            <div className="col-auto filtro">
                                <p className="label">Suscripción</p>
                                <select className="form-select" aria-label="Suscripción" name="actividad" id="antiguedad">
                                    <option value="a" selected="selected">Todas</option>
                                    <option value="b">Activos mes pasado</option>
                                    <option value="c">Bla</option>
                                </select>
                            </div>
                            <div className="col-12 col-md expansible-search-right">
                                <input className="expansible-search" type="search" placeholder="Buscar" />
                            </div>
                        </div>
                        <div className="clientes-all">
                            <div className="table-responsive">
                                <table className="table admin-table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="cell-select" />
                                            <th scope="col" className="cell-nombre ordenable">Nombre</th>
                                            <th scope="col" className="cell-locales ordenable up">Locales</th>
                                            <th scope="col" className="cell-pedidos ordenable down">Pedidos este mes</th>
                                            <th scope="col" className="cell-activo ordenable">Activo desde</th>
                                            <th scope="col" className="cell-suscripcion ordenable">Suscripción</th>
                                            <th scope="col" className="cell-accion" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="cliente-nuevo suscripcion-vigente">
                                            <td scope="col" className="cell-select"><input type="checkbox" /></td>
                                            <td scope="col" className="cell-nombre">Grant Marshall</td>
                                            <td scope="col" className="cell-locales">7 <span className="d-none d-lg-inline">locales</span></td>
                                            <td scope="col" className="cell-pedidos">24</td>
                                            <td scope="col" className="cell-activo">15/10/19, 1 año y 3 meses</td>
                                            <td scope="col" className="cell-suscripcion">Suscripción vigente</td>
                                            <td scope="col" className="cell-accion">
                                                <a href="#" className="btn btn-outline btn-small">Contactar</a>
                                            </td>
                                        </tr>
                                        <tr className="suscripcion-no">
                                            <td scope="col" className="cell-select"><input type="checkbox" /></td>
                                            <td scope="col" className="cell-nombre">Grant Marshall <a href title="Cliente insatisfecho" className="cli-warning" /></td>
                                            <td scope="col" className="cell-locales">7 <span className="d-none d-lg-inline">locales</span></td>
                                            <td scope="col" className="cell-pedidos">24</td>
                                            <td scope="col" className="cell-activo">15/10/19, 1 año y 3 meses</td>
                                            <td scope="col" className="cell-suscripcion">Suscripción vencida</td>
                                            <td scope="col" className="cell-accion">
                                                <a href="#" className="btn btn-outline btn-small">Contactar</a>
                                            </td>
                                        </tr>
                                        <tr className="suscripcion-no">
                                            <td scope="col" className="cell-select"><input type="checkbox" /></td>
                                            <td scope="col" className="cell-nombre">Grant Marshall</td>
                                            <td scope="col" className="cell-locales">7 <span className="d-none d-lg-inline">locales</span></td>
                                            <td scope="col" className="cell-pedidos">24</td>
                                            <td scope="col" className="cell-activo">15/10/19, 1 año y 3 meses</td>
                                            <td scope="col" className="cell-suscripcion">Sin suscripción</td>
                                            <td scope="col" className="cell-accion">
                                                <a href="#" className="btn btn-outline btn-small">Contactar</a>
                                            </td>
                                        </tr>
                                        <tr className="suscripcion-pendiente">
                                            <td scope="col" className="cell-select"><input type="checkbox" /></td>
                                            <td scope="col" className="cell-nombre">Grant Marshall</td>
                                            <td scope="col" className="cell-locales">7 <span className="d-none d-lg-inline">locales</span></td>
                                            <td scope="col" className="cell-pedidos">24</td>
                                            <td scope="col" className="cell-activo">15/10/19, 1 año y 3 meses</td>
                                            <td scope="col" className="cell-suscripcion">Suscripción pendiente de pago</td>
                                            <td scope="col" className="cell-accion">
                                                <a href="#" className="btn btn-outline btn-small">Contactar</a>
                                            </td>
                                        </tr>
                                        <tr className="cliente-nuevo suscripcion-vigente">
                                            <td scope="col" className="cell-select"><input type="checkbox" /></td>
                                            <td scope="col" className="cell-nombre">Grant Marshall</td>
                                            <td scope="col" className="cell-locales">7 <span className="d-none d-lg-inline">locales</span></td>
                                            <td scope="col" className="cell-pedidos">24</td>
                                            <td scope="col" className="cell-activo">15/10/19, 1 año y 3 meses</td>
                                            <td scope="col" className="cell-suscripcion">Suscripción vigente</td>
                                            <td scope="col" className="cell-accion">
                                                <a href="#" className="btn btn-outline btn-small">Contactar</a>
                                            </td>
                                        </tr>
                                        <tr className="suscripcion-no">
                                            <td scope="col" className="cell-select"><input type="checkbox" /></td>
                                            <td scope="col" className="cell-nombre">Grant Marshall <a href title="Cliente insatisfecho" className="cli-warning" /></td>
                                            <td scope="col" className="cell-locales">7 <span className="d-none d-lg-inline">locales</span></td>
                                            <td scope="col" className="cell-pedidos">24</td>
                                            <td scope="col" className="cell-activo">15/10/19, 1 año y 3 meses</td>
                                            <td scope="col" className="cell-suscripcion">Suscripción vencida</td>
                                            <td scope="col" className="cell-accion">
                                                <a href="#" className="btn btn-outline btn-small">Contactar</a>
                                            </td>
                                        </tr>
                                        <tr className="suscripcion-no">
                                            <td scope="col" className="cell-select"><input type="checkbox" /></td>
                                            <td scope="col" className="cell-nombre">Grant Marshall</td>
                                            <td scope="col" className="cell-locales">7 <span className="d-none d-lg-inline">locales</span></td>
                                            <td scope="col" className="cell-pedidos">24</td>
                                            <td scope="col" className="cell-activo">15/10/19, 1 año y 3 meses</td>
                                            <td scope="col" className="cell-suscripcion">Sin suscripción</td>
                                            <td scope="col" className="cell-accion">
                                                <a href="#" className="btn btn-outline btn-small">Contactar</a>
                                            </td>
                                        </tr>
                                        <tr className="suscripcion-pendiente">
                                            <td scope="col" className="cell-select"><input type="checkbox" /></td>
                                            <td scope="col" className="cell-nombre">Grant Marshall</td>
                                            <td scope="col" className="cell-locales">7 <span className="d-none d-lg-inline">locales</span></td>
                                            <td scope="col" className="cell-pedidos">24</td>
                                            <td scope="col" className="cell-activo">15/10/19, 1 año y 3 meses</td>
                                            <td scope="col" className="cell-suscripcion">Suscripción pendiente de pago</td>
                                            <td scope="col" className="cell-accion">
                                                <a href="#" className="btn btn-outline btn-small">Contactar</a>
                                            </td>
                                        </tr>
                                        <tr className="cliente-nuevo suscripcion-vigente">
                                            <td scope="col" className="cell-select"><input type="checkbox" /></td>
                                            <td scope="col" className="cell-nombre">Grant Marshall</td>
                                            <td scope="col" className="cell-locales">7 <span className="d-none d-lg-inline">locales</span></td>
                                            <td scope="col" className="cell-pedidos">24</td>
                                            <td scope="col" className="cell-activo">15/10/19, 1 año y 3 meses</td>
                                            <td scope="col" className="cell-suscripcion">Suscripción vigente</td>
                                            <td scope="col" className="cell-accion">
                                                <a href="#" className="btn btn-outline btn-small">Contactar</a>
                                            </td>
                                        </tr>
                                        <tr className="suscripcion-no">
                                            <td scope="col" className="cell-select"><input type="checkbox" /></td>
                                            <td scope="col" className="cell-nombre">Grant Marshall <a href title="Cliente insatisfecho" className="cli-warning" /></td>
                                            <td scope="col" className="cell-locales">7 <span className="d-none d-lg-inline">locales</span></td>
                                            <td scope="col" className="cell-pedidos">24</td>
                                            <td scope="col" className="cell-activo">15/10/19, 1 año y 3 meses</td>
                                            <td scope="col" className="cell-suscripcion">Suscripción vencida</td>
                                            <td scope="col" className="cell-accion">
                                                <a href="#" className="btn btn-outline btn-small">Contactar</a>
                                            </td>
                                        </tr>
                                        <tr className="suscripcion-no">
                                            <td scope="col" className="cell-select"><input type="checkbox" /></td>
                                            <td scope="col" className="cell-nombre">Grant Marshall</td>
                                            <td scope="col" className="cell-locales">7 <span className="d-none d-lg-inline">locales</span></td>
                                            <td scope="col" className="cell-pedidos">24</td>
                                            <td scope="col" className="cell-activo">15/10/19, 1 año y 3 meses</td>
                                            <td scope="col" className="cell-suscripcion">Sin suscripción</td>
                                            <td scope="col" className="cell-accion">
                                                <a href="#" className="btn btn-outline btn-small">Contactar</a>
                                            </td>
                                        </tr>
                                        <tr className="suscripcion-pendiente">
                                            <td scope="col" className="cell-select"><input type="checkbox" /></td>
                                            <td scope="col" className="cell-nombre">Grant Marshall</td>
                                            <td scope="col" className="cell-locales">7 <span className="d-none d-lg-inline">locales</span></td>
                                            <td scope="col" className="cell-pedidos">24</td>
                                            <td scope="col" className="cell-activo">15/10/19, 1 año y 3 meses</td>
                                            <td scope="col" className="cell-suscripcion">Suscripción pendiente de pago</td>
                                            <td scope="col" className="cell-accion">
                                                <a href="#" className="btn btn-outline btn-small">Contactar</a>
                                            </td>
                                        </tr>
                                        <tr className="cliente-nuevo suscripcion-vigente">
                                            <td scope="col" className="cell-select"><input type="checkbox" /></td>
                                            <td scope="col" className="cell-nombre">Grant Marshall</td>
                                            <td scope="col" className="cell-locales">7 <span className="d-none d-lg-inline">locales</span></td>
                                            <td scope="col" className="cell-pedidos">24</td>
                                            <td scope="col" className="cell-activo">15/10/19, 1 año y 3 meses</td>
                                            <td scope="col" className="cell-suscripcion">Suscripción vigente</td>
                                            <td scope="col" className="cell-accion">
                                                <a href="#" className="btn btn-outline btn-small">Contactar</a>
                                            </td>
                                        </tr>
                                        <tr className="suscripcion-no">
                                            <td scope="col" className="cell-select"><input type="checkbox" /></td>
                                            <td scope="col" className="cell-nombre">Grant Marshall <a href title="Cliente insatisfecho" className="cli-warning" /></td>
                                            <td scope="col" className="cell-locales">7 <span className="d-none d-lg-inline">locales</span></td>
                                            <td scope="col" className="cell-pedidos">24</td>
                                            <td scope="col" className="cell-activo">15/10/19, 1 año y 3 meses</td>
                                            <td scope="col" className="cell-suscripcion">Suscripción vencida</td>
                                            <td scope="col" className="cell-accion">
                                                <a href="#" className="btn btn-outline btn-small">Contactar</a>
                                            </td>
                                        </tr>
                                        <tr className="suscripcion-no">
                                            <td scope="col" className="cell-select"><input type="checkbox" /></td>
                                            <td scope="col" className="cell-nombre">Grant Marshall</td>
                                            <td scope="col" className="cell-locales">7 <span className="d-none d-lg-inline">locales</span></td>
                                            <td scope="col" className="cell-pedidos">24</td>
                                            <td scope="col" className="cell-activo">15/10/19, 1 año y 3 meses</td>
                                            <td scope="col" className="cell-suscripcion">Sin suscripción</td>
                                            <td scope="col" className="cell-accion">
                                                <a href="#" className="btn btn-outline btn-small">Contactar</a>
                                            </td>
                                        </tr>
                                        <tr className="suscripcion-pendiente">
                                            <td scope="col" className="cell-select"><input type="checkbox" /></td>
                                            <td scope="col" className="cell-nombre">Grant Marshall</td>
                                            <td scope="col" className="cell-locales">7 <span className="d-none d-lg-inline">locales</span></td>
                                            <td scope="col" className="cell-pedidos">24</td>
                                            <td scope="col" className="cell-activo">15/10/19, 1 año y 3 meses</td>
                                            <td scope="col" className="cell-suscripcion">Suscripción pendiente de pago</td>
                                            <td scope="col" className="cell-accion">
                                                <a href="#" className="btn btn-outline btn-small">Contactar</a>
                                            </td>
                                        </tr>
                                        <tr className="cliente-nuevo suscripcion-vigente">
                                            <td scope="col" className="cell-select"><input type="checkbox" /></td>
                                            <td scope="col" className="cell-nombre">Grant Marshall</td>
                                            <td scope="col" className="cell-locales">7 <span className="d-none d-lg-inline">locales</span></td>
                                            <td scope="col" className="cell-pedidos">24</td>
                                            <td scope="col" className="cell-activo">15/10/19, 1 año y 3 meses</td>
                                            <td scope="col" className="cell-suscripcion">Suscripción vigente</td>
                                            <td scope="col" className="cell-accion">
                                                <a href="#" className="btn btn-outline btn-small">Contactar</a>
                                            </td>
                                        </tr>
                                        <tr className="suscripcion-no">
                                            <td scope="col" className="cell-select"><input type="checkbox" /></td>
                                            <td scope="col" className="cell-nombre">Grant Marshall <a href title="Cliente insatisfecho" className="cli-warning" /></td>
                                            <td scope="col" className="cell-locales">7 <span className="d-none d-lg-inline">locales</span></td>
                                            <td scope="col" className="cell-pedidos">24</td>
                                            <td scope="col" className="cell-activo">15/10/19, 1 año y 3 meses</td>
                                            <td scope="col" className="cell-suscripcion">Suscripción vencida</td>
                                            <td scope="col" className="cell-accion">
                                                <a href="#" className="btn btn-outline btn-small">Contactar</a>
                                            </td>
                                        </tr>
                                        <tr className="suscripcion-no">
                                            <td scope="col" className="cell-select"><input type="checkbox" /></td>
                                            <td scope="col" className="cell-nombre">Grant Marshall</td>
                                            <td scope="col" className="cell-locales">7 <span className="d-none d-lg-inline">locales</span></td>
                                            <td scope="col" className="cell-pedidos">24</td>
                                            <td scope="col" className="cell-activo">15/10/19, 1 año y 3 meses</td>
                                            <td scope="col" className="cell-suscripcion">Sin suscripción</td>
                                            <td scope="col" className="cell-accion">
                                                <a href="#" className="btn btn-outline btn-small">Contactar</a>
                                            </td>
                                        </tr>
                                        <tr className="suscripcion-pendiente">
                                            <td scope="col" className="cell-select"><input type="checkbox" /></td>
                                            <td scope="col" className="cell-nombre">Grant Marshall</td>
                                            <td scope="col" className="cell-locales">7 <span className="d-none d-lg-inline">locales</span></td>
                                            <td scope="col" className="cell-pedidos">24</td>
                                            <td scope="col" className="cell-activo">15/10/19, 1 año y 3 meses</td>
                                            <td scope="col" className="cell-suscripcion">Suscripción pendiente de pago</td>
                                            <td scope="col" className="cell-accion">
                                                <a href="#" className="btn btn-outline btn-small">Contactar</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="btn-set">
                                <nav aria-label="..." className="table-pagination">
                                    <ul className="pagination">
                                        <li className="page-item disabled">
                                        </li><li className="page-item">
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

export default HomeClientAdmin;