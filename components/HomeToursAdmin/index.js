const HomeToursAdmin = () => {
    return (
        <div className="main-content recorridos-armar">
            <div className="row mx-0 ">
                <div className="col-lg-6 col-xl-5 col-12 lista-dia">
                    <div className="admin-sintesis">
                        <div className="row sintesis-header">
                            <div className="supertitulo col-12">118 locales en total</div>
                            <div className="col-auto info-fecha">
                                <h3>Vie. 26 de abril</h3>
                            </div>
                            <div className="col-auto nav-dias">
                                <a href="#" className="prev-day"><i className="far fa-angle-left" /></a>
                                <a href="#" className="next-day"><i className="far fa-angle-right" /></a>
                            </div>
                            <div className="btn-set col-auto">
                                <button className="btn btn-outline btn-small">CSV</button>
                                <a className="btn btn-outline btn-small" href="admin-recorridos-armar-paso3.html">Crear recorrido</a>
                            </div>
                        </div>
                        <div className="filter-row form form-rounded form-small">
                            <div className="col-auto filtro">
                                <p className="label sr-only">Comuna</p>
                                <button type="button" className="form-select" data-bs-toggle="modal" data-bs-target="#modalComunas"><span>Comunas 2, 3, 7, 10, 12, 15</span></button>
                                <div className="modal" tabIndex={-1} id="modalComunas" aria-labelledby="modalComunasLabel">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Filtrar por comuna</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                            </div>
                                            <div className="modal-body">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue id="filtroComuna1" />
                                                    <label className="form-check-label" htmlFor="filtroComuna1">
                                                        Comuna 1
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue id="filtroComuna2" defaultChecked />
                                                    <label className="form-check-label" htmlFor="filtroComuna2">
                                                        Comuna 2
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue id="filtroComuna3" defaultChecked />
                                                    <label className="form-check-label" htmlFor="filtroComuna3">
                                                        Comuna 3
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue id="filtroComuna4" />
                                                    <label className="form-check-label" htmlFor="filtroComuna4">
                                                        Comuna 4
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue id="filtroComuna5" />
                                                    <label className="form-check-label" htmlFor="filtroComuna5">
                                                        Comuna 5
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue id="filtroComuna6" />
                                                    <label className="form-check-label" htmlFor="filtroComuna6">
                                                        Comuna 6
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue id="filtroComuna7" defaultChecked />
                                                    <label className="form-check-label" htmlFor="filtroComuna7">
                                                        Comuna 7
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue id="filtroComuna8" />
                                                    <label className="form-check-label" htmlFor="filtroComuna8">
                                                        Comuna 8
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue id="filtroComuna9" />
                                                    <label className="form-check-label" htmlFor="filtroComuna9">
                                                        Comuna 9
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue id="filtroComuna10" defaultChecked />
                                                    <label className="form-check-label" htmlFor="filtroComuna10">
                                                        Comuna 10
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue id="filtroComuna11" />
                                                    <label className="form-check-label" htmlFor="filtroComuna11">
                                                        Comuna 11
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue id="filtroComuna12" defaultChecked />
                                                    <label className="form-check-label" htmlFor="filtroComuna12">
                                                        Comuna 12
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue id="filtroComuna13" />
                                                    <label className="form-check-label" htmlFor="filtroComuna13">
                                                        Comuna 13
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue id="filtroComuna14" />
                                                    <label className="form-check-label" htmlFor="filtroComuna14">
                                                        Comuna 14
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue id="filtroComuna15" defaultChecked />
                                                    <label className="form-check-label" htmlFor="filtroComuna15">
                                                        Comuna 15
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-primary btn-small">Aplicar filtros</button>
                                                <button type="button" className="btn btn-outline btn-small" data-bs-dismiss="modal">Cerrar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto filtro">
                                <p className="label sr-only">Franja horaria</p>
                                <select className="form-select" aria-label="Franja horaria" name="franjahoraria" id="franjahoraria">
                                    <option>Horario</option>
                                    <option value="b" selected>Mañana</option>
                                    <option value="c">Tarde</option>
                                </select>
                            </div>
                            <div className="col-auto filtro">
                                <p className="label sr-only">Tipo</p>
                                <select className="form-select" aria-label="Tipo de pedido" name="tipo" id="tipo">
                                    <option value="a" selected="selected">Todos los tipos</option>
                                    <option value="b">Horario flexible</option>
                                    <option value="c">Horario específico</option>
                                    <option value="c">Urgencia</option>
                                </select>
                            </div>
                            <div className="col mas-acciones">
                                <a href="#">Borrar filtros</a>
                            </div>
                        </div>
                    </div>
                    <div className="recorridos-tablas">
                        <div className="list-collapse list-pedidos">{/* Esta clase .list-pedidos es solo para los pedidos no asignados a un recorrido */}
                            <div className="table-responsive">
                                <table className="table admin-table table-hover">
                                    <tbody>
                                        <tr className="recorrido-fijo">
                                            <td scope="col" className="cell-horario-icono"><i className="circle" /></td>
                                            <td scope="col" className="cell-horario">9:00-11:00</td>
                                            <td scope="col" className="cell-nombre">
                                                Café Valerio
                                                <span className="aclaracion">Av. Santa Fe 2710, Palermo, Comuna 2</span>
                                            </td>
                                            <td scope="col" className="cell-alertas"><i className="far fa-exclamation-triangle" title="Tocar timbre" /></td>
                                            <td scope="col" className="cell-mas">
                                                <div className="btn-group">
                                                    <a href="#" className="btn btn-tertiary" data-bs-toggle="dropdown" aria-expanded="false"><i className="far fa-ellipsis-h" /></a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="#">Ver local</a></li>
                                                        <li><a className="dropdown-item" href="#">Contactar dueño</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="recorrido-flexible">
                                            <td scope="col" className="cell-horario-icono"><i className="circle" /></td>
                                            <td scope="col" className="cell-horario">9:00-15:00</td>
                                            <td scope="col" className="cell-nombre">
                                                Café Valerio
                                                <span className="aclaracion">Av. Santa Fe 2710, Palermo, Comuna 2</span>
                                            </td>
                                            <td scope="col" className="cell-alertas"><i className="far fa-exclamation-triangle" title="Tocar timbre" /></td>
                                            <td scope="col" className="cell-mas">
                                                <div className="btn-group">
                                                    <a href="#" className="btn btn-tertiary" data-bs-toggle="dropdown" aria-expanded="false"><i className="far fa-ellipsis-h" /></a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="#">Ver local</a></li>
                                                        <li><a className="dropdown-item" href="#">Contactar dueño</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="recorrido-urgente">
                                            <td scope="col" className="cell-horario-icono"><i className="circle" /></td>
                                            <td scope="col" className="cell-horario">Urgente</td>
                                            <td scope="col" className="cell-nombre">
                                                Café Valerio
                                                <span className="aclaracion">Av. Santa Fe 2710, Palermo, Comuna 2</span>
                                            </td>
                                            <td scope="col" className="cell-alertas"><i className="far fa-exclamation-triangle" title="Tocar timbre" /></td>
                                            <td scope="col" className="cell-mas">
                                                <div className="btn-group">
                                                    <a href="#" className="btn btn-tertiary" data-bs-toggle="dropdown" aria-expanded="false"><i className="far fa-ellipsis-h" /></a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="#">Ver local</a></li>
                                                        <li><a className="dropdown-item" href="#">Contactar dueño</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="recorrido-flexible">
                                            <td scope="col" className="cell-horario-icono"><i className="circle" /></td>
                                            <td scope="col" className="cell-horario">9:00-15:00</td>
                                            <td scope="col" className="cell-nombre">
                                                Café Valerio
                                                <span className="aclaracion">Av. Santa Fe 2710, Palermo, Comuna 2</span>
                                            </td>
                                            <td scope="col" className="cell-alertas"><i className="far fa-exclamation-triangle" title="Tocar timbre" /></td>
                                            <td scope="col" className="cell-mas">
                                                <div className="btn-group">
                                                    <a href="#" className="btn btn-tertiary" data-bs-toggle="dropdown" aria-expanded="false"><i className="far fa-ellipsis-h" /></a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="#">Ver local</a></li>
                                                        <li><a className="dropdown-item" href="#">Contactar dueño</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="recorrido-flexible">
                                            <td scope="col" className="cell-horario-icono"><i className="circle" /></td>
                                            <td scope="col" className="cell-horario">9:00-15:00</td>
                                            <td scope="col" className="cell-nombre">
                                                Café Valerio
                                                <span className="aclaracion">Av. Santa Fe 2710, Palermo, Comuna 2</span>
                                            </td>
                                            <td scope="col" className="cell-alertas"><i className="far fa-exclamation-triangle" title="Tocar timbre" /></td>
                                            <td scope="col" className="cell-mas">
                                                <div className="btn-group">
                                                    <a href="#" className="btn btn-tertiary" data-bs-toggle="dropdown" aria-expanded="false"><i className="far fa-ellipsis-h" /></a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="#">Ver local</a></li>
                                                        <li><a className="dropdown-item" href="#">Contactar dueño</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="recorrido-fijo">
                                            <td scope="col" className="cell-horario-icono"><i className="circle" /></td>
                                            <td scope="col" className="cell-horario">9:00-11:00</td>
                                            <td scope="col" className="cell-nombre">
                                                Café Valerio
                                                <span className="aclaracion">Av. Santa Fe 2710, Palermo, Comuna 2</span>
                                            </td>
                                            <td scope="col" className="cell-alertas"><i className="far fa-exclamation-triangle" title="Tocar timbre" /></td>
                                            <td scope="col" className="cell-mas">
                                                <div className="btn-group">
                                                    <a href="#" className="btn btn-tertiary" data-bs-toggle="dropdown" aria-expanded="false"><i className="far fa-ellipsis-h" /></a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="#">Ver local</a></li>
                                                        <li><a className="dropdown-item" href="#">Contactar dueño</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="recorrido-flexible">
                                            <td scope="col" className="cell-horario-icono"><i className="circle" /></td>
                                            <td scope="col" className="cell-horario">9:00-15:00</td>
                                            <td scope="col" className="cell-nombre">
                                                Café Valerio
                                                <span className="aclaracion">Av. Santa Fe 2710, Palermo, Comuna 2</span>
                                            </td>
                                            <td scope="col" className="cell-alertas"><i className="far fa-exclamation-triangle" title="Tocar timbre" /></td>
                                            <td scope="col" className="cell-mas">
                                                <div className="btn-group">
                                                    <a href="#" className="btn btn-tertiary" data-bs-toggle="dropdown" aria-expanded="false"><i className="far fa-ellipsis-h" /></a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="#">Ver local</a></li>
                                                        <li><a className="dropdown-item" href="#">Contactar dueño</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="recorrido-urgente">
                                            <td scope="col" className="cell-horario-icono"><i className="circle" /></td>
                                            <td scope="col" className="cell-horario">Urgente</td>
                                            <td scope="col" className="cell-nombre">
                                                Café Valerio
                                                <span className="aclaracion">Av. Santa Fe 2710, Palermo, Comuna 2</span>
                                            </td>
                                            <td scope="col" className="cell-alertas"><i className="far fa-exclamation-triangle" title="Tocar timbre" /></td>
                                            <td scope="col" className="cell-mas">
                                                <div className="btn-group">
                                                    <a href="#" className="btn btn-tertiary" data-bs-toggle="dropdown" aria-expanded="false"><i className="far fa-ellipsis-h" /></a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="#">Ver local</a></li>
                                                        <li><a className="dropdown-item" href="#">Contactar dueño</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="recorrido-flexible">
                                            <td scope="col" className="cell-horario-icono"><i className="circle" /></td>
                                            <td scope="col" className="cell-horario">9:00-15:00</td>
                                            <td scope="col" className="cell-nombre">
                                                Café Valerio
                                                <span className="aclaracion">Av. Santa Fe 2710, Palermo, Comuna 2</span>
                                            </td>
                                            <td scope="col" className="cell-alertas"><i className="far fa-exclamation-triangle" title="Tocar timbre" /></td>
                                            <td scope="col" className="cell-mas">
                                                <div className="btn-group">
                                                    <a href="#" className="btn btn-tertiary" data-bs-toggle="dropdown" aria-expanded="false"><i className="far fa-ellipsis-h" /></a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="#">Ver local</a></li>
                                                        <li><a className="dropdown-item" href="#">Contactar dueño</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="recorrido-flexible">
                                            <td scope="col" className="cell-horario-icono"><i className="circle" /></td>
                                            <td scope="col" className="cell-horario">9:00-15:00</td>
                                            <td scope="col" className="cell-nombre">
                                                Café Valerio
                                                <span className="aclaracion">Av. Santa Fe 2710, Palermo, Comuna 2</span>
                                            </td>
                                            <td scope="col" className="cell-alertas"><i className="far fa-exclamation-triangle" title="Tocar timbre" /></td>
                                            <td scope="col" className="cell-mas">
                                                <div className="btn-group">
                                                    <a href="#" className="btn btn-tertiary" data-bs-toggle="dropdown" aria-expanded="false"><i className="far fa-ellipsis-h" /></a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="#">Ver local</a></li>
                                                        <li><a className="dropdown-item" href="#">Contactar dueño</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeToursAdmin;