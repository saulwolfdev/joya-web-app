import { useState } from 'react';

const HomeClientAdmin = () => {
    return (
        <div className="main-content clientes-lista">
            <div className="admin-sintesis">
                <div className="container-fluid">
                    <HomeClientAdmin.Header/>
                    <HomeClientAdmin.Metrics/>
                </div>
            </div>
            <div className="more-content">
                <div className="content-block clientes-lista">
                    <div className="container-fluid">
                        <HomeClientAdmin.Filter/>
                        <HomeClientAdmin.Data/>
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
            <h3 className="col-auto">Clientes</h3>
            <div className="btn-set col-auto">
                <button className="btn btn-outline btn-small" onClick={downloadCSV}><span className="d-md-inline d-none">Descargar</span> CSV</button>
            </div>
        </div>
    );
}
HomeClientAdmin.Header = Header;

const Metrics = () => {

    // TODO get metrics of Firebase data
    const mockMetrics = {
        total: "105",
        totalActive: "80",
        percentVsLastMonth: "-2"
    }

    return (
        <div className="row stats d-none d-md-flex">
            <div className="col-auto stat">
                <p className="label">Total</p>
                <p className="value"><span className="number strong">{mockMetrics.total}</span></p>
            </div>
            <div className="col-auto stat">
                <p className="label">Vigentes</p>
                <p className="value"><span className="number">{mockMetrics.totalActive}</span> </p>
            </div>
        </div>
    );
}
HomeClientAdmin.Metrics = Metrics;

const Filter = () => {

    const [activityLevel, setActivityLevel] = useState("Activos este mes")
    const [antiquity, setAntiquity] = useState("Todos")
    const [suscription, setSuscription] = useState("Todas")

    const handleActivityLevel = (e) => {
        e.preventDefault();
        setActivityLevel(e.target.value);
    }

    const handleAntiquity = (e) => {
        e.preventDefault();
        setAntiquity(e.target.value);
    }

    const handleSuscription= (e) => {
        e.preventDefault();
        setSuscription(e.target.value);
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
                <select className="form-select" aria-label="Usuarios activos" name="actividad" id="nivelActividad" onChange={handleActivityLevel}>
                    <option value="a" selected="selected">Activos este mes</option>
                    <option value="b">Activos mes pasado</option>
                    <option value="c">Bla</option>
                </select>
            </div>
            <div className="col-auto filtro">
                <p className="label">Antigüedad</p>
                <select className="form-select" aria-label="Antigüedad" name="actividad" id="antiguedad" onChange={handleAntiquity}>
                    <option value="a" selected="selected">Todos</option>
                    <option value="b">Activos mes pasado</option>
                    <option value="c">Bla</option>
                </select>
            </div>
            <div className="col-auto filtro">
                <p className="label">Suscripción</p>
                <select className="form-select" aria-label="Suscripción" name="suscription" id="suscription" onChange={handleSuscription}>
                    <option value="a" selected="selected">Todas</option>
                    <option value="b">Activos mes pasado</option>
                    <option value="c">Bla</option>
                </select>
            </div>
            <div className="col-12 col-md expansible-search-right">
                <input className="expansible-search" type="search" placeholder="Buscar" onClick={search}/>
            </div>
        </div>
    );
}
HomeClientAdmin.Filter = Filter;

const mockData = [
    {
        key: "001",
        name: "Grant Marshall",
        totalLocals: 7,
        totalOrders: 24,
        activePeriod: "15/10/19, 1 año y 3 meses",
        complain: true,
        isNewClient: false
    },
    {
        key: "002",
        name: "Grant Marshall",
        totalLocals: 7,
        totalOrders: 24,
        activePeriod: "15/10/19, 1 año y 3 meses",
        complain: false,
        isNewClient: false
    },
    {
        key: "003",
        name: "Grant Marshall",
        totalLocals: 7,
        totalOrders: 24,
        activePeriod: "15/10/19, 1 año y 3 meses",
        complain: false,
        isNewClient: false
    },
    {
        key: "004",
        name: "Grant Marshall",
        totalLocals: 7,
        totalOrders: 24,
        activePeriod: "15/10/19, 1 año y 3 meses",
        complain: false,
        isNewClient: false
    },
    {
        key: "005",
        name: "Grant Marshall",
        totalLocals: 7,
        totalOrders: 24,
        activePeriod: "15/10/19, 1 año y 3 meses",
        complain: false,
        isNewClient: true
    },
    {
        key: "006",
        name: "Grant Marshall",
        totalLocals: 7,
        totalOrders: 24,
        activePeriod: "15/10/19, 1 año y 3 meses",
        complain: false,
        isNewClient: false
    },
    {
        key: "007",
        name: "Grant Marshall",
        totalLocals: 7,
        totalOrders: 24,
        activePeriod: "15/10/19, 1 año y 3 meses",
        complain: false,
        isNewClient: false
    },
    {
        key: "008",
        name: "Grant Marshall",
        totalLocals: 7,
        totalOrders: 24,
        activePeriod: "15/10/19, 1 año y 3 meses",
        complain: false,
        isNewClient: false
    },
    {
        key: "009",
        name: "Grant Marshall",
        totalLocals: 7,
        totalOrders: 24,
        activePeriod: "15/10/19, 1 año y 3 meses",
        complain: false,
        isNewClient: false
    },
    {
        key: "010",
        name: "Grant Marshall",
        totalLocals: 7,
        totalOrders: 24,
        activePeriod: "15/10/19, 1 año y 3 meses",
        complain: false,
        isNewClient: false
    },
    {
        key: "011",
        name: "Grant Marshall",
        totalLocals: 7,
        totalOrders: 24,
        activePeriod: "15/10/19, 1 año y 3 meses",
        complain: true,
        isNewClient: false
    },
    {
        key: "012",
        name: "Grant Marshall",
        totalLocals: 7,
        totalOrders: 24,
        activePeriod: "15/10/19, 1 año y 3 meses",
        complain: false,
        isNewClient: false
    },
    {
        key: "013",
        name: "Grant Marshall",
        totalLocals: 7,
        totalOrders: 24,
        activePeriod: "15/10/19, 1 año y 3 meses",
        complain: false,
        isNewClient: false
    },
    {
        key: "014",
        name: "Grant Marshall",
        totalLocals: 7,
        totalOrders: 24,
        activePeriod: "15/10/19, 1 año y 3 meses",
        complain: false,
        isNewClient: false
    },
    {
        key: "015",
        name: "Grant Marshall",
        totalLocals: 7,
        totalOrders: 24,
        activePeriod: "15/10/19, 1 año y 3 meses",
        complain: true,
        isNewClient: false
    },
    {
        key: "016",
        name: "Grant Marshall",
        totalLocals: 7,
        totalOrders: 24,
        activePeriod: "15/10/19, 1 año y 3 meses",
        complain: false,
        isNewClient: true
    }
]

const DataField = ({data}) => {
    return (
        <tr className={
            (data.isNewClient ? "cliente-nuevo " : <></>) + 
            (data.suscription === "Sin suscripción" || data.suscription === "Suscripción vencida" ? "suscripcion-no" :
                data.suscription === "Suscripción pendiente de pago" ? "suscripcion-pendiente" :
                    data.suscription === "Suscripción vigente" ? "suscripcion-vigente" : "") // TODO review: colors
                    // TODO refactor, enum?
        }>
            <td scope="col" className="cell-select"><input type="checkbox" /></td>
            <td scope="col" className="cell-nombre">{data.name} {data.complain ? <a href title="Cliente insatisfecho" className="cli-warning"/> : <></>}</td>
            <td scope="col" className="cell-locales">{data.totalLocals} <span className="d-none d-lg-inline">locales</span></td>
            <td scope="col" className="cell-pedidos">{data.totalOrders}</td>
            <td scope="col" className="cell-activo">{data.activePeriod}</td>
        </tr>
    );
}

const Data = () => {
    return(
        <div className="clientes-all">
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
HomeClientAdmin.Data = Data;

const DataBody = () => {
    return (
        <tbody>
            {mockData.map((data) => {return <DataField data={data} key={data.key}/>})}
        </tbody>
    )
}

const DataHeader = () => {
    return (
        <thead>
            <tr>
                <th scope="col" className="cell-select" />
                <th scope="col" className="cell-nombre ordenable">Nombre</th>
                <th scope="col" className="cell-locales ordenable up">Locales</th>
                <th scope="col" className="cell-pedidos ordenable down">Pedidos este mes</th>
                <th scope="col" className="cell-activo ordenable">Activo desde</th>
            </tr>
        </thead>
    );
}

const Pageable = () => { // TODO: Quizas reutilizable despues de la integracion

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

export default HomeClientAdmin;