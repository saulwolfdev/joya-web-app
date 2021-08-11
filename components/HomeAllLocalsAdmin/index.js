import { useState } from 'react';

const HomeAllLocalsAdmin = ({handleEditLocal, setLocalId}) => {
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
                        <HomeAllLocalsAdmin.Filter/>
                        <HomeAllLocalsAdmin.Data
                            handleEditLocal={handleEditLocal}
                            setLocalId={setLocalId}
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

    // TODO get metrics of Firebase data
    const mockMetrics = {
        total: "105",
        totalActive: "80",
        totalNew: "75",
        percentVsLastMonth: "-2",
        pendings: "25"
    }

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

const Filter = () => {

    const [date, setDate] = useState("Todas")
    const [actionState, setActionState] = useState("Todos")
    const [zone, setZone] = useState("Todos")

    const handleDate = (e) => {
        e.preventDefault();
        setDate(e.target.value);
    }

    const handleActionState = (e) => {
        e.preventDefault();
        setActionState(e.target.value);
    }

    const handleZone= (e) => {
        e.preventDefault();
        setZone(e.target.value);
    }

    const search = (e) => {
        e.preventDefault();
        // TODO call firebase
    }

    return (
        <div className="filter-row form form-rounded form-small">
            <div className="col-auto title">Filtros:</div>
            <div className="col-auto filtro">
                <p className="label">Fecha de alta</p>
                <select className="form-select" aria-label="Fecha de alta" name="alta" id="fechaAlta" onClick={handleDate}>
                    <option value="a" selected="selected">Todas</option>
                    <option value="b">Último mes</option>
                    <option value="c">Último año</option>
                </select>
            </div>
            <div className="col-auto filtro">
                <p className="label">Estado</p>
                <select className="form-select" aria-label="Estado" name="estado" id="estado" onClick={handleActionState}>
                    <option value="a" selected="selected">Todos</option>
                    <option value="b">Acciones pendientes</option>
                    <option value="c">Sin acciones pendientes</option>
                </select>
            </div>
            <div className="col-auto filtro">
                <p className="label">Barrio</p>
                <select className="form-select" aria-label="Barrio" name="barrio" id="barrio" onClick={handleZone}>
                    <option value="a" selected="selected">Todos</option>
                    <option value="b">Agronomía</option>
                    <option value="c">Almagro</option>
                </select>
            </div>
            <div className="col-12 col-md expansible-search-right">	
                <input className="expansible-search" type="search" placeholder="Buscar" onClick={search}/>
            </div>
        </div>
    );
}
HomeAllLocalsAdmin.Filter = Filter;

const Data = ({handleEditLocal, setLocalId}) => {
    return (
        <div className="clientes-all">
            <div className="table-responsive">
                <table className="table admin-table table-hover">
                    <DataHeader/>
                    <DataBody handleEditLocal={handleEditLocal} setLocalId={setLocalId}/>
                </table>
            </div>
            <Pageable/>
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

const mockData = [
    {
        key: "001",
        state: "circle",
        name: {
            value: "Café Valerio",
            info: "Desde 07/04/2020"
        },
        city: {
            value: "Balvanera",
            info: "Jujuy 232"
        },
        sup: "58",
        client: "Grant Marshall",
        lastOrder: "7 May",
        state: "toReview"
    },
    {
        key: "002",
        state: "circle",
        name: {
            value: "Café Valerio",
            info: "Desde 07/04/2020"
        },
        city: {
            value: "Balvanera",
            info: "Jujuy 232"
        },
        sup: "58",
        client: "Grant Marshall",
        lastOrder: "7 May",
        state: "ok"
    },
    {
        key: "003",
        state: "circle",
        name: {
            value: "Café Valerio",
            info: "Desde 07/04/2020"
        },
        city: {
            value: "Balvanera",
            info: "Jujuy 232"
        },
        sup: "58",
        client: "Grant Marshall",
        lastOrder: "7 May",
        state: "toReview"
    },
    {
        key: "004",
        state: "circle",
        name: {
            value: "Café Valerio",
            info: "Desde 07/04/2020"
        },
        city: {
            value: "Balvanera",
            info: "Jujuy 232"
        },
        sup: "58",
        client: "Grant Marshall",
        lastOrder: "7 May",
        state: "ok"
    },
    {
        key: "005",
        state: "circle",
        name: {
            value: "Café Valerio",
            info: "Desde 07/04/2020"
        },
        city: {
            value: "Balvanera",
            info: "Jujuy 232"
        },
        sup: "58",
        client: "Grant Marshall",
        lastOrder: "7 May",
        state: "toReview"
    },
    {
        key: "006",
        state: "circle",
        name: {
            value: "Café Valerio",
            info: "Desde 07/04/2020"
        },
        city: {
            value: "Balvanera",
            info: "Jujuy 232"
        },
        sup: "58",
        client: "Grant Marshall",
        lastOrder: "7 May",
        state: "ok"
    },
    {
        key: "007",
        state: "circle",
        name: {
            value: "Café Valerio",
            info: "Desde 07/04/2020"
        },
        city: {
            value: "Balvanera",
            info: "Jujuy 232"
        },
        sup: "58",
        client: "Grant Marshall",
        lastOrder: "7 May",
        state: "toReview"
    },
    {
        key: "008",
        state: "circle",
        name: {
            value: "Café Valerio",
            info: "Desde 07/04/2020"
        },
        city: {
            value: "Balvanera",
            info: "Jujuy 232"
        },
        sup: "58",
        client: "Grant Marshall",
        lastOrder: "7 May",
        state: "ok"
    },
    {
        key: "009",
        state: "circle",
        name: {
            value: "Café Valerio",
            info: "Desde 07/04/2020"
        },
        city: {
            value: "Balvanera",
            info: "Jujuy 232"
        },
        sup: "58",
        client: "Grant Marshall",
        lastOrder: "7 May",
        state: "toReview"
    },
    {
        key: "010",
        state: "circle",
        name: {
            value: "Café Valerio",
            info: "Desde 07/04/2020"
        },
        city: {
            value: "Balvanera",
            info: "Jujuy 232"
        },
        sup: "58",
        client: "Grant Marshall",
        lastOrder: "7 May",
        state: "ok"
    },
    {
        key: "011",
        state: "circle",
        name: {
            value: "Café Valerio",
            info: "Desde 07/04/2020"
        },
        city: {
            value: "Balvanera",
            info: "Jujuy 232"
        },
        sup: "58",
        client: "Grant Marshall",
        lastOrder: "7 May",
        state: "toReview"
    },
    {
        key: "012",
        state: "circle",
        name: {
            value: "Café Valerio",
            info: "Desde 07/04/2020"
        },
        city: {
            value: "Balvanera",
            info: "Jujuy 232"
        },
        sup: "58",
        client: "Grant Marshall",
        lastOrder: "7 May",
        state: "ok"
    },
    {
        key: "013",
        state: "circle",
        name: {
            value: "Café Valerio",
            info: "Desde 07/04/2020"
        },
        city: {
            value: "Balvanera",
            info: "Jujuy 232"
        },
        sup: "58",
        client: "Grant Marshall",
        lastOrder: "7 May",
        state: "toReview"
    },
    {
        key: "014",
        state: "circle",
        name: {
            value: "Café Valerio",
            info: "Desde 07/04/2020"
        },
        city: {
            value: "Balvanera",
            info: "Jujuy 232"
        },
        sup: "58",
        client: "Grant Marshall",
        lastOrder: "7 May",
        state: "ok"
    },
    {
        key: "015",
        state: "circle",
        name: {
            value: "Café Valerio",
            info: "Desde 07/04/2020"
        },
        city: {
            value: "Balvanera",
            info: "Jujuy 232"
        },
        sup: "58",
        client: "Grant Marshall",
        lastOrder: "7 May",
        state: "toReview"
    },
    {
        key: "016",
        state: "circle",
        name: {
            value: "Café Valerio",
            info: "Desde 07/04/2020"
        },
        city: {
            value: "Balvanera",
            info: "Jujuy 232"
        },
        sup: "58",
        client: "Grant Marshall",
        lastOrder: "7 May",
        state: "ok"
    },
    {
        key: "017",
        state: "circle",
        name: {
            value: "Café Valerio",
            info: "Desde 07/04/2020"
        },
        city: {
            value: "Balvanera",
            info: "Jujuy 232"
        },
        sup: "58",
        client: "Grant Marshall",
        lastOrder: "7 May",
        state: "toReview"
    },
    {
        key: "018",
        state: "circle",
        name: {
            value: "Café Valerio",
            info: "Desde 07/04/2020"
        },
        city: {
            value: "Balvanera",
            info: "Jujuy 232"
        },
        sup: "58",
        client: "Grant Marshall",
        lastOrder: "7 May",
        state: "ok"
    },
    {
        key: "019",
        state: "circle",
        name: {
            value: "Café Valerio",
            info: "Desde 07/04/2020"
        },
        city: {
            value: "Balvanera",
            info: "Jujuy 232"
        },
        sup: "58",
        client: "Grant Marshall",
        lastOrder: "7 May",
        state: "toReview"
    },
    {
        key: "020",
        state: "circle",
        name: {
            value: "Café Valerio",
            info: "Desde 07/04/2020"
        },
        city: {
            value: "Balvanera",
            info: "Jujuy 232"
        },
        sup: "58",
        client: "Grant Marshall",
        lastOrder: "7 May",
        state: "ok"
    }
];

const DataBody = ({handleEditLocal, setLocalId}) => {
    return (
        <tbody>
            { mockData.map((data) => {return <DataField data={data} key={data.key} handleEditLocal={handleEditLocal} setLocalId={setLocalId}/>}) }
        </tbody>
    );
}

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

export default HomeAllLocalsAdmin;