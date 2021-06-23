import React,{useState} from 'react';
import Orders from './Orders'

const HomeOrders = () => {

    const mockTotalPages = 3; // TODO

    const [past, setPast] = useState(false);
    const handlePast = (value) => {
        setPast(value);
    }

    return (
        <div className="main-content">
            <div className="mis-pedidos">
                <div className="container-fluid">
                    <div className="row">
                        <HomeOrders.Header/>
                        <div className="col-12 card-page-container">
                            <div className="card-page-content">
                                <div className="inner-container">
                                    <HomeOrders.Header past={past}/>
                                    <Orders/>
                                    <HomeOrders.Footer totalPages={mockTotalPages}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Info = () => {
    return (
        <div className="section-header row">
            <div className="col col-md-12">
                <h4>Tus pedidos</h4>
                <h3 className="d-md-block d-none">Tus vidrieras siempre limpias</h3>
            </div>
            <div className="col-auto btn-set d-md-none">
                <a href="#" className="btn btn-primary btn-small">
                + Visita
                </a>
            </div>
        </div>
    );
}
HomeOrders.Info = Info;

const Header = ({past}) => {
    return (
        <>
            <div className="d-md-none menu-header-mobile">
            {/* Menu modificado! */}
                <div className="dropdown visitas-mobile-dropdown">
                    <a className="btn btn-misc dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Visitas próximas <i className="far fa-chevron-down" />	
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink" id="mobileVisitaMenu">
                    <li><a className="item active" href="pedidos-proximos.html">Visitas próximas</a></li>
                    <li><a className="item" href="pedidos-pasados.html">Visitas pasadas</a></li>
                    </ul>
                </div>
            {/* fin menú modificado */}
            </div>
            <div className="row menu-header d-none d-md-flex">
                <div className="col-auto menu-item">
                    <a href="pedidos-proximos.html" className={past ? "" : "active"}>Visitas próximas</a>
                </div>
                <div className="col-auto menu-item">
                    <a href="pedidos-pasados.html" className={past ? "active" : ""}>Visitas pasadas</a>
                </div>
                <div className="col-auto btn-set">
                    <a href="#" className="btn btn-primary btn-round">
                        +
                        <span className="d-lg-inline d-none"> Agendar visita</span>
                        <span className="d-none d-md-inline d-lg-none"> Visita</span>
                    </a>
                </div>
            </div>
        </>
    );
}
HomeOrders.Header = Header;

const Footer = ({totalPages}) => {
    return (
        <div className="btn-set">
            <nav aria-label="..." className="table-pagination">
                <ul className="pagination">
                    <li className="page-item disabled"></li>
                    <li className="page-item">
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
    );
}
HomeOrders.Footer = Footer;

export default HomeOrders;