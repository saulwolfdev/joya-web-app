import { useState } from 'react';
import { mockData, mockMetrics } from './data' 

const HomeAllLocalsAdmin = ({handleEditLocal, setLocalId}) => {

    const [locals, setLocals] = useState(mockData.value)
    const [currentPage, setCurrentPage] = useState(mockData.current)

    const handleCurrentPage = (page) => {
        let safeErrorPage = page;
        if(page > mockData.total) {
            safeErrorPage = mockData.total;
        }
        setCurrentPage(safeErrorPage);
    }

    const handleFilter = (date, actionState, zone, text) => {
        // TODO call firebase and replace mockData with use of currentPage
    }

    return (
        <div className="main-content locales-lista">
            <div className="admin-sintesis">
                <div className="container-fluid">
                    <HomeAllLocalsAdmin.Header/>
                    <HomeAllLocalsAdmin.Metrics/>
                </div>
            </div>
            <div className="more-content">
                <div className="content-block clientes-lista">
                    <div className="container-fluid">
                        <HomeAllLocalsAdmin.Filter
                            handleFilter={handleFilter}
                        />
                        <HomeAllLocalsAdmin.Data
                            locals={locals}
                            handleEditLocal={handleEditLocal}
                            setLocalId={setLocalId}
                            currentPage={currentPage}
                            handleCurrentPage={handleCurrentPage}
                            totalPages={mockData.total}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

const Header = () => {
    const downloadCSV = (e) => {
        e.preventDefault();

        // TODO call firebase
    }

    return (
        <div className="row sintesis-header">
            <h3 className="col-auto">Locales</h3>	
            <div className="btn-set col-auto">
                <button className="btn btn-outline btn-small" onClick={downloadCSV}><span className="d-md-inline d-none">Descargar</span> CSV</button>
            </div>
        </div>
    );
}
HomeAllLocalsAdmin.Header = Header;

const Metrics = () => {
    return (
        <div className="row stats d-none d-md-flex">
            <div className="col-auto stat">
                <p className="label">Total</p>
                <p className="value"><span className="number strong">{mockMetrics.total}</span></p>
            </div>
            <div className="col-auto stat">
                <p className="label">Activos</p>
                <p className="value"><span className="number">{mockMetrics.totalActive}</span> </p>
            </div>
            <div className="col-auto stat">
                <p className="label">Nuevos</p>
                <div className="row">
                    <div className="col-auto">
                        <p className="value"><span className="number">{mockMetrics.totalNew}</span></p>		
                    </div>
                    {
                        mockMetrics.percentVsLastMonth === "0" ? 
                            <>
                            </>
                        :
                        <div className="col-auto interpretation">
                            <p className="value worse">{mockMetrics.percentVsLastMonth}%</p>
                            <p className="aclaracion">vs. mes anterior</p>
                        </div>
                    }
                </div>
            </div>
            <div className="col-auto stat block-start">
                <p className="label">Revisión pendiente</p>
                <p className="value c-error"><span className="number">{mockMetrics.pendings}</span></p>
            </div>
        </div>
    );
}
HomeAllLocalsAdmin.Metrics = Metrics;

const Filter = ({handleFilter}) => {

    const [date, setDate] = useState("all")
    const [actionState, setActionState] = useState("all")
    const [zone, setZone] = useState("all")
    const [text, setText] = useState("")

    const handleDate = (e) => {
        e.preventDefault();
        setDate(e.target.value);
        executeFilter();
    }

    const handleActionState = (e) => {
        e.preventDefault();
        setActionState(e.target.value);
        executeFilter();
    }

    const handleZone = (e) => {
        e.preventDefault();
        setZone(e.target.value);
        executeFilter();
    }

    const handleText = (e) => {
        e.preventDefault();
        setText(e.target.value);
        if (e.key === 'Enter') {
            executeFilter();
        }
    }

    const executeFilter = () => {
        handleFilter(date, actionState, zone, text);
    } 

    return (
        <div className="filter-row form form-rounded form-small">
            <div className="col-auto title">Filtros:</div>
            <div className="col-auto filtro">
                <p className="label">Fecha de alta</p>
                <select className="form-select" aria-label="Fecha de alta" name="alta" id="fechaAlta" onClick={handleDate}>
                    <option value="all" selected="selected">Todas</option>
                    <option value="b">Último mes</option>
                    <option value="c">Último año</option>
                </select>
            </div>
            <div className="col-auto filtro">
                <p className="label">Estado</p>
                <select className="form-select" aria-label="Estado" name="estado" id="estado" onClick={handleActionState}>
                    <option value="all" selected="selected">Todos</option>
                    <option value="b">Acciones pendientes</option>
                    <option value="c">Sin acciones pendientes</option>
                </select>
            </div>
            <div className="col-auto filtro">
                <p className="label">Barrio</p>
                <select className="form-select" aria-label="Barrio" name="barrio" id="barrio" onClick={handleZone}>
                    <option value="all" selected="selected">Todos</option>
                    <option value="b">Agronomía</option>
                    <option value="c">Almagro</option>
                </select>
            </div>
            <div className="col-12 col-md expansible-search-right">	
                <input className="expansible-search" type="search" placeholder="Buscar" onChnage={handleText}/>
            </div>
        </div>
    );
}
HomeAllLocalsAdmin.Filter = Filter;

const Data = ({handleEditLocal, setLocalId, locals, currentPage, handleCurrentPage, totalPages}) => {
    return (
        <div className="clientes-all">
            <div className="table-responsive">
                <table className="table admin-table table-hover">
                    <DataHeader/>
                    <DataBody locals={locals} handleEditLocal={handleEditLocal} setLocalId={setLocalId}/>
                </table>
            </div>
            <Pageable currentPage={currentPage} handleCurrentPage={handleCurrentPage} totalPages={totalPages}/>
        </div>
    );
}
HomeAllLocalsAdmin.Data = Data;

const DataHeader = () => {
    return (
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
    );
}

const DataField = ({data, handleEditLocal, setLocalId}) => {

    const edit = (e) => {
        e.preventDefault();
        setLocalId(data.key);
        handleEditLocal(true);
    }

    return(
        <tr className="accion-pendiente">
            <td scope="col" className="cell-estado"><i className="circle" /></td>
            <td scope="col" className="cell-nombre">
                {data.name.value}
                <span className="aclaracion">{data.name.info}</span>
            </td>
            <td scope="col" className="cell-barrio">
                {data.city.value}
                <span className="aclaracion">{data.city.info}</span>
            </td>
            <td scope="col" className="cell-superficie">{data.sup} m<sup>2</sup></td>
            <td scope="col" className="cell-cliente">{data.client}</td>
            <td scope="col" className="cell-ultpedido">{data.lastOrder}</td>
            <td scope="col" className="cell-estado">
                {data.state === "toReview" ? <a title="Revisar fachada"><i className="far fa-exclamation-triangle" />Revisar</a> : <></>}
                </td>
            <td scope="col" className="cell-accion">
                <a href="#" className="btn btn-outline btn-small" onClick={edit}>Editar</a>
            </td>
        </tr>
    );
}

const DataBody = ({handleEditLocal, setLocalId, locals}) => {
    return (
        locals ?
            <tbody>
                { locals.map((data) => {return <DataField data={data} key={data.key} handleEditLocal={handleEditLocal} setLocalId={setLocalId}/>}) }
            </tbody>
            :
            <></>
    );
}

const Pageable = ({currentPage, handleCurrentPage, totalPages}) => {

    const handleNewActualPage = (newPage) => {
        handleCurrentPage(newPage);
    }
    
    const increase = (e) => {
        e.preventDefault();
        handleCurrentPage(currentPage + 1)
    }

    const decrease = (e) => {
        e.preventDefault();
        handleCurrentPage(currentPage - 1)
    }

    return (
        <div className="btn-set">
            <nav aria-label="..." className="table-pagination">
                <ul className="pagination">
                    <li className="page-item disabled"/>
                    <li className="page-item">
                        {
                            currentPage > 1 ?
                                <a className="page-link" href="#" aria-label="Anterior" onClick={decrease}>
                                    <span aria-hidden="true">«</span>
                                </a>
                            :
                                <></>
                        }
                    </li>
                    { 
                        Array.from({length: totalPages}, (_, index) => index + 1).map(number => 
                                <Page 
                                    handleNewActualPage={handleNewActualPage} 
                                    number={number} 
                                    currentPage={currentPage} 
                                    key={number}
                                />
                            )
                    }
                    <li className="page-item">
                        {
                            currentPage < totalPages && currentPage > 0 ?
                            <a className="page-link" href="#" aria-label="Siguiente" onClick={increase}>
                                <span aria-hidden="true">»</span>
                            </a>
                        :
                            <></>
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
                    <a className="page-link" href="#" onClick={e => e.preventDefault()}>{number}</a>
                </li>
                :
                <li className="page-item"><a className="page-link" href="#" onClick={handleClick}>{number}</a></li>
            }
        </>
    );
}

export default HomeAllLocalsAdmin;