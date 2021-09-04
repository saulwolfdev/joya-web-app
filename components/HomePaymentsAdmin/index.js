import { useState } from 'react';

const HomePaymentsAdmin = () => {
    return (
        <div className="main-content pagos-lista">
            <div className="admin-sintesis">
                <div className="container-fluid">
                    <HomePaymentsAdmin.Header/>
                    <HomePaymentsAdmin.Metrics/>
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
                        <HomePaymentsAdmin.Filter/>
                        <HomePaymentsAdmin.Data/>
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
            <h3 className="col-auto">Pagos</h3>{/*TODO, este codigo es reutilizable con locales*/}
            <div className="btn-set col-auto">
                <button className="btn btn-outline btn-small" onClick={downloadCSV}><span className="d-md-inline d-none">Descargar</span> CSV</button>
            </div>
        </div>
    );
}
HomePaymentsAdmin.Header = Header;

const Metrics = () => {

    // TODO get metrics of Firebase data
    const mockMetrics = {
        total: "9000",
        totalPendings: "8",
        currentMonth: "$100.4 k",
        firstMonth: false,
        percentVsLastMonth: "-2%",
        historicalTotal: "$400.4k"
    }

    return (
        <div className="row stats d-none d-md-flex">
            <div className="col-auto stat">
                <p className="label">Pendientes</p>
                <p className="value"><span className="number">{mockMetrics.totalPendings}</span><span className="separador">/</span><span className="number strong">${mockMetrics.total}</span></p>
            </div>
            <div className="col-auto stat">
                <p className="label">Este mes</p>
                <div className="row">
                    <div className="col-auto">
                        <p className="value"><span className="number">{mockMetrics.currentMonth}</span> </p>
                    </div>
                    { 
                    !mockMetrics.firstMonth ? 
                        <div className="col-auto interpretation">
                            <p className="value worse">{mockMetrics.percentVsLastMonth}</p>
                            <p className="aclaracion">vs. mes anterior</p>
                        </div>
                        :
                        <></>
                    }
                    
                </div>
            </div>
            <div className="col-auto stat block-start">
                <p className="label">Total histórico</p>
                <p className="value"><span className="number">{mockMetrics.historicalTotal}</span></p>
            </div>
        </div>
    );
}
HomePaymentsAdmin.Metrics = Metrics;

const Filter = () => {

    const [range, setRange] = useState("Todas")
    const [orderState, setOrderState] = useState("Todos")

    const handleRange = (e) => {
        e.preventDefault();
        setRange(e.target.value);
    }

    const handleOrderState = (e) => {
        e.preventDefault();
        setOrderState(e.target.value);
    }

    const search = (e) => {
        e.preventDefault();
        // TODO call firebase
    }

    return (
        <div className="filter-row form form-rounded form-small">
            <div className="col-auto title">Filtros:</div>
            <div className="col-auto filtro">
                <p className="label">Fecha</p>
                <select className="form-select" aria-label="Fecha" name="fecha" id="fecha" onClick={handleRange}>
                    <option value="Todas" selected="selected">Todas</option>
                    <option value="b">Este mes</option>
                    <option value="c">Últimos 3 meses</option>
                </select>
            </div>
            <div className="col-auto filtro">
                <p className="label">Factura</p>
                <select className="form-select" aria-label="Factura" name="factura" id="factura" onClick={handleOrderState}>
                    <option value="Todos">Todos</option>
                    <option value="b" selected>Pendiente</option>
                    <option value="c">Entregada</option>
                </select>
            </div>
            <div className="col-12 col-md expansible-search-right">
                <input className="expansible-search" type="search" placeholder="Buscar" onClick={search}/>
            </div>
        </div>
    );
}
HomePaymentsAdmin.Filter = Filter;

const DataHeader = () => {
    return (
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
    );
}

const DataBody = () => {
    return (
        <tbody>
            { mockData.map((data) => {return <DataField data={data} key={data.key}/>}) }
        </tbody>
    );
}

const mockData = [
    {
        key: "00",
        id: "uuid00",
        dateOfPayment: "7 May",
        name: "Grant Marshall",
        nro: "123465478",
        cuit: "27-12513548-0",
        concept: {
            value: "Diciembre 2021",
            amount: "7186",
            order: "3502421-001",
            state: "normal"
        }
    },
    {
        key: "01",
        id: "uuid01",
        dateOfPayment: "7 May",
        name: "Grant Marshall",
        nro: "123465478",
        cuit: "27-12513548-0",
        concept: {
            value: "Diciembre 2021",
            amount: "7186",
            order: "3502421-001",
            state: "normal"
        }
    },
    {
        key: "02",
        id: "uuid02",
        dateOfPayment: "7 May",
        name: "Grant Marshall",
        nro: "123465478",
        cuit: "27-12513548-0",
        concept: {
            value: "Diciembre 2021",
            amount: "7186",
            order: "3502421-001",
            state: "claim"
        }
    },
    {
        key: "03",
        id: "uuid03",
        dateOfPayment: "7 May",
        name: "Grant Marshall",
        nro: "none",
        cuit: "27-12513548-0",
        concept: {
            value: "Diciembre 2021",
            amount: "7186",
            order: "3502421-001",
            state: "claim"
        }
    },
    {
        key: "04",
        id: "uuid04",
        dateOfPayment: "7 May",
        name: "Grant Marshall",
        nro: "123465478",
        cuit: "27-12513548-0",
        concept: {
            value: "Diciembre 2021",
            amount: "7186",
            order: "3502421-001",
            state: "normal"
        }
    }
]

const DataField = ({data}) => {

    const handleRegisterPayment = (e) => {
        e.preventDefault();
        // TODO call firebase, use data.id
    }

    return(
        <tr className>
            <td scope="col" className="cell-select"><input type="checkbox" /></td>
            <th scope="col" className="cell-fecha">{data.dateOfPayment}</th>
            <td scope="col" className="cell-nombre">{data.name}</td>
            <td scope="col" className={"cell-cuenta" + (data.nro === "none" ? " c-error" : "")}>
                {
                    data.nro === "none" ?
                    <>
                        <i className="far fa-exclamation-triangle" /> Reclamar
                    </>
                    :
                    <>
                        {data.nro}
                        <span className="aclaracion">CUIT: {data.cuit}</span>
                    </>
                }
            </td>
            <td scope="col" className="cell-concepto">{data.concept.value}</td>
            <td scope="col" className="cell-monto">${data.concept.amount}</td>
            <td scope="col" className={"cell-factura" + (data.concept.state === "claim" ? " c-error" : "")}>
                {
                    data.concept.state === "claim" ? 
                        <>
                            <i className="far fa-exclamation-triangle" /> Reclamar
                        </>
                        :
                        <>
                            <a href="#" className="download"><i className="far fa-arrow-down" /></a>
                            {data.concept.order}
                        </>
                }
            </td>
            <td scope="col" className="cell-accion">
                <a href="#" className="btn btn-primary btn-small" onClick={handleRegisterPayment}>Registrar pago</a>
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
    );
}

const Data = () => {
    return (
        <div className="pagos-all">
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
HomePaymentsAdmin.Data = Data;

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

export default HomePaymentsAdmin;