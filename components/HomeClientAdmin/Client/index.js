import { useState } from "react";
import OptionLocals from "./options/OptionLocals";

const Client = ({userId}) => {

    const [option, setOption] = useState("Locales");

    const mockClient = {
        anyNotCompletLocal: true,
        name: "Rafael Aragón",
        activeSubscription: true,
        orders: {
            months: 8,
            thisMonth: 156,
            total: 897
        },
        paidOut: {
            thisMonth: 5600,
            total: 12540
        },
        totalLocals: 4
    }

    const handleOption = (selectedOption) => {
        setOption(selectedOption)
    }

    return (
        <div className="main-content cliente-individual">
            {
                mockClient.anyNotCompletLocal ? 
                    <div className="alert error">
                        <div className="container-fluid">
                            <i className="far fa-bell"/>
                            Cliente con locales incompletos.
                        </div>
                    </div>
                    :
                    <></>
            }
            <Client.Info data={mockClient} />
            <div className="more-content">
                <Client.Menu option={option} handleOption={handleOption}/>
                {
                    option === "Locales" ? 
                        <OptionLocals userId={userId}/>
                        :
                        <></>
                }
            </div>
        </div>
    );
}

const Info = ({data}) => {

    handleContact = (e) => {
        e.preventDefault();
        // TODO review
    }

    return (
        <div className="cliente-sintesis admin-sintesis">
            <div className="container-fluid">
                <div className="row sintesis-header ">
                    <h3 className="col-auto">{data.name}</h3>
                    <div className="col-auto suscripcion">
                        {
                            data.isBlocked ?
                                <span class="c-error">Cliente bloqueado</span>
                                :
                            data.activeSubscription ? 
                                <>
                                    <span className="c-success">Suscripción activa</span>
                                    <br/>
                                </>
                                :
                                <span>Sin suscripción</span>
                        }
                    </div>
                    <div className="btn-set col-auto">
                        <button className="btn btn-primary btn-small" onClick={handleContact}>Contactar</button>
                        <button className="btn btn-misc"><i className="far fa-ellipsis-h" /></button>
                    </div>
                </div>
                <div className="row stats d-none d-md-flex">
                    <div className="col-auto stat">
                        <p className="label">Pedidos (este mes/total)</p>
                        <p className="value"><span className="number strong">{data.orders.thisMonth}</span> <span className="separator">/</span> <span className="number">{data.orders.total}</span> </p>
                        <p className="aclaracion">{data.orders.months} meses de antiguedad</p>
                    </div>
                    <div className="col-auto stat block-start">
                        <p className="label">Pagado (este mes/total)</p>
                        <p className="value"><span className="number strong">${data.paidOut.thisMonth}</span> <span className="separator">/</span> <span className="number">${data.paidOut.total}</span> </p>
                    </div>
                    {/*<div class="col-auto stat  block-start">
                        <p class="label">Calif. promedio</p>
                        <p class="value"><span class="number strong">4.5 <i class="fas fa-star"></i></span></p>
                    </div>*/}
                    <div className="col-auto stat  block-start">
                        <p className="label">Locales</p>
                        <p className="value"><span className="number">{data.totalLocals}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
Client.Info = Info;

const Menu = ({option, handleOption}) => {

    const handleClick = (e) => {
        e.preventDefault();
        handleOption(e.target.value);
    }

    return (
        <div className="menu">
            <div className="container-fluid">
                <ul>
                    <li className={option === "Locales" ? "active" : ""}><a href="#" onClick={handleClick}>Locales</a></li> {/*<a href="admin-cliente-local.html"> TODO review*/}
                    <li className={option === "Pedidos" ? "active" : ""}><a href="#" onClick={handleClick}>Pedidos</a></li>
                    <li className={option === "Pagos pendientes" ? "active" : ""}><a href="#" onClick={handleClick}>Pagos pendientes</a></li> {/*href="admin-pagos.html" */}
                    {/*<li><a href="#">Reseñas</a></li>*/}
                    <li className={option === "Perfil" ? "active" : ""}><a href="#" onClick={handleClick}>Perfil</a></li>
                </ul>
            </div>
        </div>
    );
}
Client.Menu = Menu;

export default Client;