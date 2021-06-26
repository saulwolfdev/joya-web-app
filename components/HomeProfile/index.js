import UserOrderContainer from '../UserOrderContainer'
import Body from './Body'

const HomeProfile = () => {
    return (
        <UserOrderContainer title="Tu cuenta">
            <Body/>
            <HomeProfile.Footer totalPages={1}/>
        </UserOrderContainer>
    );
}

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
HomeProfile.Footer = Footer;

export default HomeProfile;