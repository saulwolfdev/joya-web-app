import React,{useState} from 'react';
import UserOrderContainer from '../UserOrderContainer'
import Body from './Body'
import EditLocal from './EditLocal';
import Link from 'next/link'

const HomeAllLocals = () => {

    const [editLocal, setEditLocal] = useState(false);
    const changeToEditLocal = (e) => {
        setEditLocal(true);
    }

    return (
        <UserOrderContainer title="Tus Locales">
            {editLocal ? 
                <EditLocal/> 
                :
                <>
                    <HomeAllLocals.Header/>
                    <Body changeToEditLocal={changeToEditLocal}/>
                </>
            }
            <HomeAllLocals.Footer totalPages={1}/>
        </UserOrderContainer>
    );
}

const Header = () => {
    return (
        <div className="header-row">
            <h3>Locales</h3>
            <Link href='/apply/new'><a className="btn btn-primary">+ Nuevo local</a></Link>
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