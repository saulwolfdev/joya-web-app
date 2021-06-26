import Info from './Info'

const UserOrderContainer = (props) => {
    return (
        <div className="main-content">
            <div className="mis-pedidos">
                <div className="container-fluid">
                    <div className="row">
                        <Info/>
                        <div className="col-12 card-page-container">
                            <div className="card-page-content">
                                <div className="inner-container">
                                    {props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserOrderContainer;