import { useState } from 'react';
import DetailsGlazier from './DetailsGlazier'

const ProfileGlazier = () => {

    const [activeTab, setActiveTab] = useState("Perfil");

    const handleActiveTab = (value) => {
        setActiveTab(value);
    }

    const mockData = {
        isNew: true,
        name: "Sergio Soriano",
        email: "ssoriano@gmail.com",
        type: "Postulante",
        phone: "+54 11 1234 5678",
        direction: "Av. Santa Fe 2702, Buenos Aires",
        bithdate: "1/12/1992",
        nacionality: "Argentino",
        registeredDate: "21/1/2021",
        lastActivity: "Mi 15/4/2021, 15:05hs",
        passwordLastModified: "10/4/2020, 11:45hs",
        metrics: {
            tours: {
                inThisMonth: 156,
                total: 897
            },
            profits: {
                inThisMonth: 156,
                total: 897
            },
            monthsOld: 8, // >= 0
            averageMark: 4.5
        },
        notes: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus sint dolorum enim harum, est, molestias porro aliquam aliquid voluptatem aut."
    }

    return (
        <div className="main-content vidrierista-individual">
            {
                mockData.isNew ? 
                <div className="alert warning">
                    <div className="container-fluid">
                        <i className="far fa-bell" />Nuevo postulante
                    </div>
                </div>
                :
                <></>
            }
            <div className="admin-sintesis">
                <div className="container-fluid">
                    <ProfileGlazier.Header data={mockData}/>
                    <ProfileGlazier.Metrics data={mockData}/>
                </div>
            </div>
            <div className="more-content">
                <ProfileGlazier.Tabs handleActiveTab={handleActiveTab} activeTab={activeTab}/>
                {activeTab === "Perfil" ? <DetailsGlazier data={mockData}/> : <></>}
            </div>
        </div>
    );
}

const Tabs = ({handleActiveTab, activeTab}) => {
    return (
        <div className="menu">
            <div className="container-fluid">
                <ul>
                    <li className={activeTab === "Trabajos" ? "active" : ""}><a href="#" onClick={(e) => {
                            e.preventDefault();
                            handleActiveTab("Trabajos")}
                        }>Trabajos</a></li>
                    <li className={activeTab === "Historial" ? "active" : ""}><a href="#" onClick={(e) => {
                            e.preventDefault();
                            handleActiveTab("Historial")}
                        }>Historial</a></li> {/* TODO href="admin-pagos-historial.html"*/}
                    <li className={activeTab === "Reseñas" ? "active" : ""}><a href="#" onClick={(e) => {
                            e.preventDefault();
                            handleActiveTab("Reseñas")}
                        }>Reseñas</a></li>
                    <li className={activeTab === "Perfil" ? "active" : ""}><a href="#" onClick={(e) => {
                            e.preventDefault();
                            handleActiveTab("Perfil")}
                        }>Perfil</a></li>
                </ul>
            </div>
        </div>
    );
}
ProfileGlazier.Tabs = Tabs;

const Header = ({data}) => {

    const handleReturn = (e) => {
        e.preventDefault();
        // TODO return
    }

    const handleContact = (e) => {
        e.preventDefault();
        // TODO contact
    }

    return (
        <div className="row sintesis-header ">
            <div className="col-12 breadcrumb">
                <div className="inner-container">
                    <a href="#" onClick={handleReturn}><i className="far fa-arrow-left"/> Volver</a>
                </div>
            </div>
            <div className="col-auto">
                <h3>{data.name}</h3>
                <p className="aclaracion email"><a href={"mailto:" + data.email}>{data.email}</a></p>
            </div>
            <div className="col-auto estado">
                <p>
                    {data.type === "Activo" ? <span className="c-success">Activo</span> : <></>}
                    {data.type === "Postulante" ? <span className="c-warning">Postulante</span> : <></>}
                    {data.type === "Suspendido" ? <span className="c-error">Suspendido</span> : <></>}
                </p>
            </div>
            <div className="btn-set col-auto">
                <button className="btn btn-primary btn-small" onClick={handleContact}>Contactar</button>
                <button className="btn btn-misc"><i className="far fa-ellipsis-h" /></button>
            </div>
        </div>
    );
}
ProfileGlazier.Header = Header;

const Metrics = ({data}) => {
    return (
        <div className="row stats d-none d-md-flex">
            <div className="col-auto stat">
                <p className="label">Recorridos (este mes/total)</p>
                <p className="value">
                    <span className="number strong">{data.metrics.tours.inThisMonth}</span> 
                    <span className="separator">/</span> <span className="number">{data.metrics.tours.total}</span> 
                </p>
                {data.metrics.monthsOld === 0 ? <p className="aclaracion">Nuevo</p> : <></>} {/*TODO review*/}
                {data.metrics.monthsOld === 1 ? <p className="aclaracion">1 mes de antigüedad</p> : <></> }
                {data.metrics.monthsOld > 1 ? <p className="aclaracion">{data.metrics.monthsOld} meses de antigüedad</p> : <></> }
            </div>
            <div className="col-auto stat block-start">
                <p className="label">Ganancias (este mes/total)</p>
                <p className="value">
                    <span className="number strong">${data.metrics.profits.inThisMonth}</span> 
                    <span className="separator">/</span> <span className="number">${data.metrics.profits.total}</span>
                </p>
            </div>
            {/* No se desarrolla esto por ahora */}
            <div className="col-auto stat  block-start">
                <p className="label">Calif. promedio</p>
                <p className="value"><span className="number strong">{data.metrics.averageMark} <i className="fas fa-star" /></span></p>
            </div>
        </div>
    );
}
ProfileGlazier.Metrics = Metrics;

export default ProfileGlazier;