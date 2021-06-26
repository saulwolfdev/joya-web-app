import React,{useState} from 'react';
import PastVisits from './PastVisits';
import UpcomingVisits from './UpcomingVisits';
import UserOrderContainer from '../UserOrderContainer'

const HomeOrders = () => {

    const mockTotalPages = 3; // TODO

    const [past, setPast] = useState(false);
    const handlePast = (event, value) => {
        event.preventDefault();
        setPast(value);
    }

    return (
        <UserOrderContainer>
            <HomeOrders.Header past={past} handlePast={handlePast}/>
                { past ? <PastVisits/> : <UpcomingVisits handlePast={handlePast}/>}
            <HomeOrders.Footer totalPages={past ? mockTotalPages : 1}/>
        </UserOrderContainer>
    );
}

const Header = ({past, handlePast}) => {

    const handleVisit = () => {
        // TODO
    }

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
                    <a  href="#" className={past ? "" : "active"} onClick={(e) => {handlePast(e, false)}}>Visitas próximas</a> {/*TODO Deberia ser un div*/}
                </div>
                <div className="col-auto menu-item">
                    <a href="#" className={past ? "active" : ""} onClick={(e) => {handlePast(e, true)}}>Visitas pasadas</a> {/*TODO Deberia ser un div*/}
                </div>
                <div className="col-auto btn-set">
                    <a href="#" className="btn btn-primary btn-round" onClick={() => {handleVisit()}}>
                        +
                        <span className="d-lg-inline d-none"> Nueva visita</span>
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
            {
                totalPages === 1 ?
                    <></>
                :
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
            }
            
        </div>
    );
}
HomeOrders.Footer = Footer;

export default HomeOrders;