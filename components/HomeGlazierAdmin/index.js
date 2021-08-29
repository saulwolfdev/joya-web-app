import { useState } from 'react';

const HomeGlazierAdmin = () => {
    return (
        <div className="main-content vidrieristas-lista">
            <div className="admin-sintesis">
                <div className="container-fluid">
                    <HomeGlazierAdmin.Header/>
                    <HomeGlazierAdmin.Metrics/>
                </div>
            </div>
            <div className="more-content">
                <div className="content-block vidrieristas-lista">
                    <div className="container-fluid">
                        <HomeGlazierAdmin.Filter/>
                        <HomeGlazierAdmin.Data/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Header = () => {

    const downloadCSV = (e) => {
        e.preventDefault();

        // TODO call firebase
    }

    const toGlazier = (e) => {
        e.preventDefault();

        // TODO
    }

    return (
        <div className="row sintesis-header">
            <h3 className="col-auto">Vidrieristas</h3>
            <div className="btn-set col-auto">
                <button className="btn btn-outline btn-small" onClick={downloadCSV}><span className="d-md-inline d-none">Descargar</span> CSV</button>
                <button className="btn btn-outline btn-small" onClick={toGlazier}>Nuevo <span className="d-md-inline d-none">vidrierista</span></button>
            </div>
        </div>
    );
}
HomeGlazierAdmin.Header = Header;

const Metrics = () => {

    // TODO get metrics of Firebase data
    const mockMetrics = {
        total: "105",
        totalActiveToday: "80",
        totalToursToday: "75",
        totalApplicants: "75"
    }

    return (
        <div className="row stats d-none d-md-flex">
            <div className="col-auto stat">
                <p className="label">Total</p>
                <p className="value"><span className="number strong">{mockMetrics.total}</span></p>
            </div>
            <div className="col-auto stat">
                <p className="label">Activos hoy</p>
                <p className="value"><span className="number">{mockMetrics.totalActiveToday}</span> </p>
            </div>
            <div className="col-auto stat block-start">
                <p className="label">Recorridos hoy</p>
                <p className="value"><span className="number">{mockMetrics.totalToursToday}</span></p>
            </div>
            <div className="col-auto stat block-start">
                <p className="label">Postulantes</p>
                <div className="row">
                    <div className="col-auto">
                        <p className="value"><span className={"number" + (mockMetrics.totalApplicants > 0 ? " c-warning" : "")}>{mockMetrics.totalApplicants}</span></p>
                    </div>
                    <div className="col-auto interpretation">
                        <a href="#" className="btn btn-outline btn-small">Ver</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
HomeGlazierAdmin.Metrics = Metrics;

const Filter = () => {

    const [activity, setActivity] = useState("Activos este mes");
    const [stateOfActivity, setStateOfActivity] = useState("Aprobado");

    const handleActivity= (e) => {
        e.preventDefault();
        setActivity(e.target.value);
    }

    const handleStateOfActivity= (e) => {
        e.preventDefault();
        setStateOfActivity(e.target.value);
    }

    const search = (e) => {
        e.preventDefault();
        // TODO call firebase
    }

    return (
        <div className="filter-row form form-rounded form-small">
            <div className="col-auto title">Filtros:</div>
            <div className="col-auto filtro">
                <p className="label">Nivel de actividad</p>
                <select className="form-select" aria-label="Vidrieristas activos" name="actividad" id="nivelActividad" onClick={handleActivity}>
                    <option value="a" selected="selected">Activos este mes</option>
                    <option value="b">Activos mes pasado</option>
                    <option value="c">Bla</option>
                </select>
            </div>
            <div className="col-auto filtro">
                <p className="label">Estado</p>
                <select className="form-select" aria-label="Estado" name="estado" id="estado" onClick={handleStateOfActivity}>
                    <option value="a" selected="selected">Aprobado</option>
                    <option value="b">Suspendido</option>
                    <option value="c">Postulado</option>
                    <option value="c">Descartado</option>
                </select>
            </div>
            <div className="col-12 col-md expansible-search-right">
                <input className="expansible-search" type="search" placeholder="Buscar" onClick={search}/>
            </div>
        </div>
    );
}
HomeGlazierAdmin.Filter = Filter;

const DataHeader = () => {
    return (
        <thead>
            <tr>
                <th scope="col" className="cell-select" />
                <th scope="col" className="cell-nombre ordenable">Nombre</th>
                <th scope="col" className="cell-recorridosmes ordenable up">Recorridos este mes</th>
                <th scope="col" className="cell-recorridostotales ordenable down">Recorridos totales</th>
                <th scope="col" className="cell-activo ordenable">Activo desde</th>
                <th scope="col" className="cell-estado ordenable">Estado</th>
                <th scope="col" className="cell-accion" />
                <th scope="col" className="cell-mas" />
            </tr>
        </thead>
    );
}

const DataBody = () => {
    return (
        <tbody>
            <tr className="vidrierista-nuevo ">
                <td scope="col" className="cell-select"><input type="checkbox" /></td>
                <td scope="col" className="cell-nombre">Grant Marshall</td>
                <td scope="col" className="cell-recorridosmes">7</td>
                <td scope="col" className="cell-recorridostotales">24</td>
                <td scope="col" className="cell-activo">15/10/19, 1 año y 3 meses</td>
                <td scope="col" className="cell-estado">Aprobado</td>
                <td scope="col" className="cell-accion">
                    <a href="#" className="btn btn-outline btn-small">Contactar</a>
                </td>
                <td scope="col" className="cell-mas">
                    <div className="btn-group">
                        <a href="#" className="btn btn-tertiary" data-bs-toggle="dropdown" aria-expanded="false"><i className="far fa-ellipsis-h" /></a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="admin-vidrierista.html">Ver perfil</a></li>
                            <li><a className="dropdown-item" href="admin-vidrierista-nuevo.html">Editar</a></li>
                        </ul>
                    </div>
                </td>
            </tr>
            <tr className>
                <td scope="col" className="cell-select"><input type="checkbox" /></td>
                <td scope="col" className="cell-nombre">Grant Marshall</td>
                <td scope="col" className="cell-recorridosmes">7</td>
                <td scope="col" className="cell-recorridostotales">24</td>
                <td scope="col" className="cell-activo">15/10/19, 1 año y 3 meses</td>
                <td scope="col" className="cell-estado">Aprobado</td>
                <td scope="col" className="cell-accion">
                    <a href="#" className="btn btn-outline btn-small">Contactar</a>
                </td>
                <td scope="col" className="cell-mas">
                    <div className="btn-group">
                        <a href="#" className="btn btn-tertiary" data-bs-toggle="dropdown" aria-expanded="false"><i className="far fa-ellipsis-h" /></a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="admin-vidrierista.html">Ver perfil</a></li>
                            <li><a className="dropdown-item" href="admin-vidrierista-nuevo.html">Editar</a></li>
                        </ul>
                    </div>
                </td>
            </tr>
            <tr className>
                <td scope="col" className="cell-select"><input type="checkbox" /></td>
                <td scope="col" className="cell-nombre">Grant Marshall</td>
                <td scope="col" className="cell-recorridosmes">7</td>
                <td scope="col" className="cell-recorridostotales">24</td>
                <td scope="col" className="cell-activo">15/10/19, 1 año y 3 meses</td>
                <td scope="col" className="cell-estado">Aprobado</td>
                <td scope="col" className="cell-accion">
                    <a href="#" className="btn btn-outline btn-small">Contactar</a>
                </td>
                <td scope="col" className="cell-mas">
                    <div className="btn-group">
                        <a href="#" className="btn btn-tertiary" data-bs-toggle="dropdown" aria-expanded="false"><i className="far fa-ellipsis-h" /></a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="admin-vidrierista.html">Ver perfil</a></li>
                            <li><a className="dropdown-item" href="admin-vidrierista-nuevo.html">Editar</a></li>
                        </ul>
                    </div>
                </td>
            </tr>
            <tr className="vidrierista-suspendido">
                <td scope="col" className="cell-select"><input type="checkbox" /></td>
                <td scope="col" className="cell-nombre">Grant Marshall</td>
                <td scope="col" className="cell-recorridosmes">7</td>
                <td scope="col" className="cell-recorridostotales">24</td>
                <td scope="col" className="cell-activo">15/10/19, 1 año y 3 meses</td>
                <td scope="col" className="cell-estado">Suspendido</td>
                <td scope="col" className="cell-accion">
                    <a href="#" className="btn btn-outline btn-small">Contactar</a>
                </td>
                <td scope="col" className="cell-mas">
                    <div className="btn-group">
                        <a href="#" className="btn btn-tertiary" data-bs-toggle="dropdown" aria-expanded="false"><i className="far fa-ellipsis-h" /></a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="admin-vidrierista.html">Ver perfil</a></li>
                            <li><a className="dropdown-item" href="admin-vidrierista-nuevo.html">Editar</a></li>
                        </ul>
                    </div>
                </td>
            </tr>
            <tr className="vidrierista-postulante">
                <td scope="col" className="cell-select"><input type="checkbox" /></td>
                <td scope="col" className="cell-nombre">Grant Marshall</td>
                <td scope="col" className="cell-recorridosmes">7</td>
                <td scope="col" className="cell-recorridostotales">24</td>
                <td scope="col" className="cell-activo">15/10/19, 1 año y 3 meses</td>
                <td scope="col" className="cell-estado">Postulado</td>
                <td scope="col" className="cell-accion">
                    <a href="#" className="btn btn-outline btn-small">Contactar</a>
                </td>
                <td scope="col" className="cell-mas">
                    <div className="btn-group">
                        <a href="#" className="btn btn-tertiary" data-bs-toggle="dropdown" aria-expanded="false"><i className="far fa-ellipsis-h" /></a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="admin-vidrierista.html">Ver perfil</a></li>
                            <li><a className="dropdown-item" href="admin-vidrierista-nuevo.html">Editar</a></li>
                        </ul>
                    </div>
                </td>
            </tr>
        </tbody>
    );
}

const Data = () => {
    return (
        <div className="vidrieristas-all">
            <div className="table-responsive">
                <table className="table admin-table table-hover">
                    <DataHeader/>
                    <DataBody/>
                </table>
            </div>
            <Pageable/>
        </div>
    );
}
HomeGlazierAdmin.Data = Data;

const Pageable = () => {

    const [mockCurrentPage, setMockCurrentPage] = useState(2);

    const handleNewActualPage = (newPage) => {
        setMockCurrentPage(newPage);
    }

    const mockTotalPages = 3;
    
    const increase = (e) => {
        e.preventDefault();
        setMockCurrentPage(mockCurrentPage + 1)
    }

    const decrease = (e) => {
        e.preventDefault();
        setMockCurrentPage(mockCurrentPage - 1)
    }

    return (
        <div className="btn-set">
            <nav aria-label="..." className="table-pagination">
                <ul className="pagination">
                    <li className="page-item disabled"/>
                    <li className="page-item">
                        {
                            mockCurrentPage !== 1 ?
                                <a className="page-link" href="#" aria-label="Anterior" onClick={decrease}>
                                    <span aria-hidden="true">«</span>
                                </a>
                            :
                                <>
                                </>
                        }
                    </li>
                    { 
                        Array.from({length: mockTotalPages}, (_, index) => index + 1).map(number => 
                                <Page 
                                    handleNewActualPage={handleNewActualPage} 
                                    number={number} 
                                    currentPage={mockCurrentPage} 
                                    key={number}
                                />
                            )
                    }
                    <li className="page-item">
                        {
                            mockCurrentPage !== mockTotalPages ?
                            <a className="page-link" href="#" aria-label="Siguiente" onClick={increase}>
                                <span aria-hidden="true">»</span>
                            </a>
                        :
                            <>
                            </>
                        }
                    </li>
                </ul>
            </nav>
        </div>
    );
}

const Page = ({number, currentPage, handleNewActualPage}) => {

    const handleClick = (e) => {
        e.preventDefault();
        handleNewActualPage(number);
    }

    return (
        <>
            {
            number === currentPage ? 
                <li className="page-item active" aria-current="page">
                    <a className="page-link" href="#">{number}</a>
                </li>
                :
                <li className="page-item"><a className="page-link" href="#" onClick={handleClick}>{number}</a></li>
            }
        </>
    );
}

export default HomeGlazierAdmin;