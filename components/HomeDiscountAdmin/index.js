import { useState } from 'react';

const HomeDiscountAdmin = ({handleEditDiscount, setDiscountId}) => {
    return (
        <div className="main-content descuentos-lista">
            <div className="admin-sintesis">
                <div className="container-fluid">
                    <HomeDiscountAdmin.Header/>
                </div>
            </div>
            <div className="more-content">
                <div className="content-block clientes-lista">
                    <div className="container-fluid">
                        <HomeDiscountAdmin.Filter/>
                        <HomeDiscountAdmin.Data 
                            handleEditDiscount={handleEditDiscount}
                            setDiscountId={setDiscountId}
                        />
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

    return (
        <>
            <div className="row sintesis-header">
                <h3 className="col-auto">Descuentos</h3>
                <div className="btn-set col-auto">
                    <button className="btn btn-small btn-primary">+ Descuento</button>
                    <button className="btn btn-outline btn-small"><span className="d-md-inline d-none" onClick={downloadCSV}>Descargar</span> CSV</button>
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
        </>
    );
}
HomeDiscountAdmin.Header = Header;

const Filter = () => {

    const [type, setType] = useState("Todos")
    const [stateOfDiscount, setStateOfDiscount] = useState("Todos")

    const handleType = (e) => {
        e.preventDefault();
        setType(e.target.value);
    }

    const handleStateOfDiscount = (e) => {
        e.preventDefault();
        setStateOfDiscount(e.target.value);
    }

    const search = (e) => {
        e.preventDefault();
        // TODO call firebase
    }

    return (
        <div className="filter-row form form-rounded form-small">
            <div className="col-auto title">Filtros:</div>
            <div className="col-auto filtro">
                <p className="label">Tipo</p>
                <select className="form-select" aria-label="Fecha de alta" name="alta" id="fechaAlta" onClick={handleType}>
                    <option value="a" selected="selected">Todos</option>
                    <option value="b">Monto fijo</option>
                    <option value="c">Porcentaje</option>
                </select>
            </div>
            <div className="col-auto filtro">
                <p className="label">Estado</p>
                <select className="form-select" aria-label="Estado" name="estado" id="estado" onClick={handleStateOfDiscount}>
                    <option value="a" selected="selected">Todos</option>
                    <option value="b">Vigente</option>
                    <option value="c">Finalizado</option>
                </select>
            </div>
            <div className="col-12 col-md expansible-search-right">
                <input className="expansible-search" type="search" placeholder="Buscar" onClick={search}/>
            </div>
        </div>
    );
}
HomeDiscountAdmin.Filter = Filter;

const Data = ({handleEditDiscount, setDiscountId}) => {
    return (
        <div className="clientes-all">
            <div className="table-responsive">
                <table className="table admin-table table-hover">
                    <DataHeader/>
                    <DataBody handleEditDiscount={handleEditDiscount} setDiscountId={setDiscountId}/>
                </table>
            </div>
            <Pageable/>
        </div>
    );
}
HomeDiscountAdmin.Data = Data;

const mockData = [
    {
        key: "01",
        expired: false,
        code: "PROMOVERANO",
        clarificationCode: "Creado: 07/04/2020", // TODO subObject
        type: "Monto fijo",
        value: 200,
        clarificationValue: "Tope: $300", // TODO subObject
        expiredDate: "15/12/2021",
        stock: "Ilimitados"
    },
    {
        key: "02",
        expired: true,
        code: "JOYAESLASOLUCION",
        clarificationCode: "Creado el 07/04/2020", // TODO subObject
        type: "Porcentaje",
        value: 30,
        clarificationValue: "Compra mínima: $500", // TODO subObject
        expiredDate: "-",
        stock: "10 de 500"
    }
]

const DataBody = ({handleEditDiscount, setDiscountId}) => {
    return (
        <tbody>
            {mockData.map((data) => {return <DataField data={data} key={data.key} handleEditDiscount={handleEditDiscount} setDiscountId={setDiscountId}/>})}
        </tbody>
    );
}

const DataHeader = () => {
    return (
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
    );
}

const DataField = ({data, handleEditDiscount, setDiscountId}) => {

    const edit = (e) => {
        e.preventDefault();
        setDiscountId(data.key);
        handleEditDiscount(true);
    }

    return(
        <tr className={data.expired ? "descuento-expirado" : "descuento-vigente"}>
            <td scope="col" className="cell-estado"><i className="circle" /></td>
            <td scope="col" className="cell-nombre">
                {data.code}
                <span className="aclaracion">{data.clarification}</span>
            </td>
            <td scope="col" className="cell-tipo">{data.type}</td>
            <td scope="col" className="cell-valor">
                ${data.type === "Monto Fijo" ? ("$" + data.value) : (data.value + "%")}
                <span className="aclaracion">{data.clarificationValue}</span>
            </td>
            <td scope="col" className="cell-vencimiento">{data.expiredDate}</td>
            <td scope="col" className="cell-stock">{data.stock}</td>
            <td scope="col" className="cell-accion">
                <a href="#" className="btn btn-outline btn-small" onClick={edit}>Editar</a>
            </td>
        </tr>
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

export default HomeDiscountAdmin;