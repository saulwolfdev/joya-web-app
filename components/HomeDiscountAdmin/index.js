const HomeDiscountAdmin = () => {
    return (
        <div className="main-content descuentos-lista">
            <div className="admin-sintesis">
                <div className="container-fluid">
                    <div className="row sintesis-header">
                        <h3 className="col-auto">Descuentos</h3>
                        <div className="btn-set col-auto">
                            <button className="btn btn-small btn-primary">+ Descuento</button>
                            <button className="btn btn-outline btn-small"><span className="d-md-inline d-none">Descargar</span> CSV</button>
                        </div>
                    </div>
                    {/*<div class="row stats d-none d-md-flex">
    					<div class="col-auto stat">
    						<p class="label">Total</p>
    						<p class="value"><span class="number strong">105</span></p>
    					</div>
    					<div class="col-auto stat">
    						<p class="label">Activos</p>
    						<p class="value"><span class="number">80</span> </p>
    					</div>
    					<div class="col-auto stat">
    						<p class="label">Nuevos</p>
    						<div class="row">
    							<div class="col-auto">
    								<p class="value"><span class="number">75</span></p>		
    							</div>
    							<div class="col-auto interpretation">
	    							<p class="value worse">-2%</p>
	    							<p class="aclaracion">vs. mes anterior</p>
    							</div>
    						</div>
    						
    						
    					</div>
    					<div class="col-auto stat block-start">
    						<p class="label">Revisión pendiente</p>
    						<p class="value c-error"><span class="number">25</span></p>
    					</div>
    				</div>*/}
                </div>
            </div>
            <div className="more-content">
                <div className="content-block clientes-lista">
                    <div className="container-fluid">
                        <div className="filter-row form form-rounded form-small">
                            <div className="col-auto title">Filtros:</div>
                            <div className="col-auto filtro">
                                <p className="label">Tipo</p>
                                <select className="form-select" aria-label="Fecha de alta" name="alta" id="fechaAlta">
                                    <option value="a" selected="selected">Todos</option>
                                    <option value="b">Monto fijo</option>
                                    <option value="c">Porcentaje</option>
                                </select>
                            </div>
                            <div className="col-auto filtro">
                                <p className="label">Estado</p>
                                <select className="form-select" aria-label="Estado" name="estado" id="estado">
                                    <option value="a" selected="selected">Todos</option>
                                    <option value="b">Vigente</option>
                                    <option value="c">Finalizado</option>
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
                                            <th scope="col" className="cell-estado" />
                                            <th scope="col" className="cell-nombre ordenable down">Código</th>
                                            <th scope="col" className="cell-tipo ordenable up">Tipo</th>
                                            <th scope="col" className="cell-valor ordenable">Valor</th>
                                            <th scope="col" className="cell-vencimiento ordenable">Vencimiento</th>
                                            <th scope="col" className="cell-stock ordenable">Cupones disponibles</th>
                                            <th scope="col" className="cell-accion" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="descuento-vigente">
                                            <td scope="col" className="cell-estado"><i className="circle" /></td>
                                            <td scope="col" className="cell-nombre">
                                                PROMOVERANO
                                                <span className="aclaracion">Creado: 07/04/2020</span>
                                            </td>
                                            <td scope="col" className="cell-tipo">Monto fijo</td>
                                            <td scope="col" className="cell-valor">
                                                $200
                                                <span className="aclaracion">Compra mínima: $500</span>
                                            </td>
                                            <td scope="col" className="cell-vencimiento">15/12/2021</td>
                                            <td scope="col" className="cell-stock">Ilimitados</td>
                                            <td scope="col" className="cell-accion">
                                                <a href="#" className="btn btn-outline btn-small">Editar</a>
                                            </td>
                                        </tr>
                                        <tr className="descuento-expirado">
                                            <td scope="col" className="cell-estado"><i className="circle" /></td>
                                            <td scope="col" className="cell-nombre">
                                                JOYAESLASOLUCION
                                                <span className="aclaracion">Creado el 07/04/2020</span>
                                            </td>
                                            <td scope="col" className="cell-tipo">Porcentaje</td>
                                            <td scope="col" className="cell-valor">
                                                30%
                                                <span className="aclaracion">Tope: $300</span>
                                            </td>
                                            <td scope="col" className="cell-vencimiento">-</td>
                                            <td scope="col" className="cell-stock">10 de 500</td>
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
    )
}