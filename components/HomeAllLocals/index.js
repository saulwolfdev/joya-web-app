import React,{useState} from 'react';
import UserOrderContainer from '../UserOrderContainer'
import Body from "./Body"

const HomeAllLocals = () => {
    return (
        <UserOrderContainer>
            <HomeAllLocals.Header/>
            <Body/>
            <HomeAllLocals.Footer totalPages={1}/>
        </UserOrderContainer>
    );
}

const Header = () => {
    return (
        <div className="header-row">
            <h3>Locales</h3>
            <a href="#" className="btn btn-primary">+ Nuevo local</a>
        </div>
    );
}
HomeAllLocals.Header = Header;

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
HomeAllLocals.Footer = Footer;

export default HomeAllLocals;