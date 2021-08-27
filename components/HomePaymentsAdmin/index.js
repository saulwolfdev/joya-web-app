const HomePaymentsAdmin = () => {
    return (
        <div className="main-content pagos-lista">
            <div className="admin-sintesis">
                <div className="container-fluid">
                    <div className="row sintesis-header">
                        <h3 className="col-auto">Pagos</h3>
                        <div className="btn-set col-auto">
                            <button className="btn btn-outline btn-small"><span className="d-md-inline d-none">Descargar</span> CSV</button>
                        </div>
                    </div>
                    <div className="row stats d-none d-md-flex">
                        <div className="col-auto stat">
                            <p className="label">Pendientes</p>
                            <p className="value"><span className="number">8</span><span className="separador">/</span><span className="number strong">$9000</span></p>
                        </div>
                        <div className="col-auto stat">
                            <p className="label">Este mes</p>
                            <div className="row">
                                <div className="col-auto">
                                    <p className="value"><span className="number">$100.4 k</span> </p>
                                </div>
                                <div className="col-auto interpretation">
                                    <p className="value worse">-2%</p>
                                    <p className="aclaracion">vs. mes anterior</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto stat block-start">
                            <p className="label">Total histórico</p>
                            <p className="value"><span className="number">$400.4k</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="more-content">
                <div className="menu">
                    <div className="container-fluid">
                        <ul>
                            <li className="active"><a href="admin-pagos.html">Pendientes</a></li>
                            <li><a href="admin-pagos-historial.html">Historial</a></li>
                        </ul>
                    </div>
                </div>
                <div className="content-block pagos-lista">
                    <div className="container-fluid">
                        <div className="filter-row form form-rounded form-small">
                            <div className="col-auto title">Filtros:</div>
                            <div className="col-auto filtro">
                                <p className="label">Fecha</p>
                                <select className="form-select" aria-label="Fecha" name="fecha" id="fecha">
                                    <option value="a" selected="selected">Todas</option>
                                    <option value="b">Este mes</option>
                                    <option value="c">Últimos 3 meses</option>
                                </select>
                            </div>
                            <div className="col-auto filtro">
                                <p className="label">Factura</p>
                                <select className="form-select" aria-label="Factura" name="factura" id="factura">
                                    <option value="a">Todos</option>
                                    <option value="b" selected>Pendiente</option>
                                    <option value="c">Entregada</option>
                                </select>
                            </div>
                            <div className="col-12 col-md expansible-search-right">
                                <input className="expansible-search" type="search" placeholder="Buscar" />
                            </div>
                        </div>
                        <div className="pagos-all">
                            <div className="table-responsive">
                                <table className="table admin-table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="cell-select" />
                                            <th scope="col" className="cell-fecha ordenable up">Fecha</th>
                                            <th scope="col" className="cell-nombre ordenable">Vidrierista</th>
                                            <th scope="col" className="cell-cuenta">Cuenta destino</th>
                                            <th scope="col" className="cell-concepto ordenable down">Concepto</th>
                                            <th scope="col" className="cell-monto ordenable">Monto</th>
                                            <th scope="col" className="cell-factura ordenable">Factura</th>
                                            <th scope="col" className="cell-accion" />
                                            <th scope="col" className="cell-mas" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className>
                                            <td scope="col" className="cell-select"><input type="checkbox" /></td>
                                            <th scope="col" className="cell-fecha">7 May</th>
                                            <td scope="col" className="cell-nombre">Grant Marshall</td>
                                            <td scope="col" className="cell-cuenta">
                                                123465478
                                                <span className="aclaracion">CUIT: 27-12513548-0</span>
                                            </td>
                                            <td scope="col" className="cell-concepto">Diciembre 2021</td>
                                            <td scope="col" className="cell-monto">$7186</td>
                                            <td scope="col" className="cell-factura"><a href="#" className="download"><i className="far fa-arrow-down" /></a>3502421-001</td>
                                            <td scope="col" className="cell-accion">
                                                <a href="#" className="btn btn-primary btn-small">Registrar pago</a>
                                            </td>
                                            <td scope="col" className="cell-mas">
                                                <div className="btn-group">
                                                    <a href="#" className="btn btn-tertiary" data-bs-toggle="dropdown" aria-expanded="false"><i className="far fa-ellipsis-h" /></a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="#">Cargar factura</a></li>
                                                        <li><a className="dropdown-item" href="#">Registrar pago</a></li>
                                                        <li><a className="dropdown-item" href="#">Ver vidrierista</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className>
                                            <td scope="col" className="cell-select"><input type="checkbox" /></td>
                                            <th scope="col" className="cell-fecha">7 May</th>
                                            <td scope="col" className="cell-nombre">Grant Marshall</td>
                                            <td scope="col" className="cell-cuenta c-error">
                                                <i className="far fa-exclamation-triangle" /> Reclamar
                                            </td>
                                            <td scope="col" className="cell-concepto">Diciembre 2021</td>
                                            <td scope="col" className="cell-monto">$7186</td>
                                            <td scope="col" className="cell-factura"><a href="#" className="download"><i className="far fa-arrow-down" /></a>3502421-001</td>
                                            <td scope="col" className="cell-accion">
                                                <a href="#" className="btn btn-primary btn-small">Registrar pago</a>
                                            </td>
                                            <td scope="col" className="cell-mas">
                                                <div className="btn-group">
                                                    <a href="#" className="btn btn-tertiary" data-bs-toggle="dropdown" aria-expanded="false"><i className="far fa-ellipsis-h" /></a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="#">Cargar factura</a></li>
                                                        <li><a className="dropdown-item" href="#">Registrar pago</a></li>
                                                        <li><a className="dropdown-item" href="#">Ver vidrierista</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className>
                                            <td scope="col" className="cell-select"><input type="checkbox" /></td>
                                            <th scope="col" className="cell-fecha">7 May</th>
                                            <td scope="col" className="cell-nombre">Grant Marshall</td>
                                            <td scope="col" className="cell-cuenta c-error">
                                                <i className="far fa-exclamation-triangle" /> Reclamar
                                            </td>
                                            <td scope="col" className="cell-concepto">Diciembre 2021</td>
                                            <td scope="col" className="cell-monto">$7186</td>
                                            <td scope="col" className="cell-factura c-error">
                                                <i className="far fa-exclamation-triangle" /> Reclamar
                                            </td>
                                            <td scope="col" className="cell-accion">
                                                <a href="#" className="btn btn-primary btn-small">Registrar pago</a>
                                            </td>
                                            <td scope="col" className="cell-mas">
                                                <div className="btn-group">
                                                    <a href="#" className="btn btn-tertiary" data-bs-toggle="dropdown" aria-expanded="false"><i className="far fa-ellipsis-h" /></a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="#">Cargar factura</a></li>
                                                        <li><a className="dropdown-item" href="#">Registrar pago</a></li>
                                                        <li><a className="dropdown-item" href="#">Ver vidrierista</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className>
                                            <td scope="col" className="cell-select"><input type="checkbox" /></td>
                                            <th scope="col" className="cell-fecha">7 May</th>
                                            <td scope="col" className="cell-nombre">Grant Marshall</td>
                                            <td scope="col" className="cell-cuenta">
                                                123465478
                                                <span className="aclaracion">CUIT: 27-12513548-0</span>
                                            </td>
                                            <td scope="col" className="cell-concepto">Diciembre 2021</td>
                                            <td scope="col" className="cell-monto">$7186</td>
                                            <td scope="col" className="cell-factura"><a href="#" className="download"><i className="far fa-arrow-down" /></a>3502421-001</td>
                                            <td scope="col" className="cell-accion">
                                                <a href="#" className="btn btn-primary btn-small">Registrar pago</a>
                                            </td>
                                            <td scope="col" className="cell-mas">
                                                <div className="btn-group">
                                                    <a href="#" className="btn btn-tertiary" data-bs-toggle="dropdown" aria-expanded="false"><i className="far fa-ellipsis-h" /></a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="#">Cargar factura</a></li>
                                                        <li><a className="dropdown-item" href="#">Registrar pago</a></li>
                                                        <li><a className="dropdown-item" href="#">Ver vidrierista</a></li>
                                                    </ul>
                                                </div>
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

export default HomePaymentsAdmin;