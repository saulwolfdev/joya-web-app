import { useState, useEffect } from 'react';
import { getFormattedDate, plus} from '../../helpers/dateHelper';

const HomeToursAdmin = () => {
    return (
        <div className="main-content recorridos-armar">
            <div className="row mx-0 ">
                <div className="col-lg-6 col-xl-5 col-12 lista-dia">
                    <div className="admin-sintesis">
                        <HomeToursAdmin.DateOfRoute/>
                        <HomeToursAdmin.Filter/>
                    </div>
                    <div className="recorridos-tablas">
                        <div className="list-collapse list-pedidos">{/* TODO Esta clase .list-pedidos es solo para los pedidos no asignados a un recorrido */}
                            <div className="table-responsive">
                                <Data/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Data = () => {

    const [localId, setLocalId] = useState(""); // TODO review
    
    const handleLocalId = (e) => {
        e.preventDefault();
        setLocalId(e.target.value)
    }

    return (
        <table className="table admin-table table-hover">
            <DataBody handleLocalId={handleLocalId}/>
        </table>
    );
}

const mockData = [
    {
        key: "00",
        localId: "UUID00",
        assigned: false,
        schedule: "9:00-11:00",
        name: "Café Valerio",
        direction: "Av. Santa Fe 2710, Palermo, Comuna 2",
        type: "Fijo"
    },
    {
        key: "01",
        localId: "UUID01",
        assigned: false,
        schedule: "9:00-11:00",
        name: "Café Valerio",
        direction: "Av. Santa Fe 2710, Palermo, Comuna 2",
        type: "Fijo"
    },
    {
        key: "02",
        localId: "UUID02",
        assigned: false,
        schedule: "9:00-15:00",
        name: "Café Valerio",
        direction: "Av. Santa Fe 2710, Palermo, Comuna 2",
        type: "Flexible"
    },
    {
        key: "03",
        localId: "UUID03",
        assigned: false,
        schedule: "Urgente",
        name: "Café Valerio",
        direction: "Av. Santa Fe 2710, Palermo, Comuna 2",
        type: "Urgente"
    },
    {
        key: "04",
        localId: "UUID04",
        assigned: false,
        schedule: "9:00-15:00",
        name: "Café Valerio",
        direction: "Av. Santa Fe 2710, Palermo, Comuna 2",
        type: "Flexible"
    },
    {
        key: "05",
        localId: "UUID05",
        assigned: false,
        schedule: "9:00-15:00",
        name: "Café Valerio",
        direction: "Av. Santa Fe 2710, Palermo, Comuna 2",
        type: "Flexible"
    },
    {
        key: "06",
        localId: "UUID06",
        assigned: false,
        schedule: "9:00-15:00",
        name: "Café Valerio",
        direction: "Av. Santa Fe 2710, Palermo, Comuna 2",
        type: "Fijo"
    },
    {
        key: "07",
        localId: "UUID07",
        assigned: false,
        schedule: "9:00-15:00",
        name: "Café Valerio",
        direction: "Av. Santa Fe 2710, Palermo, Comuna 2",
        type: "Flexible"
    },
    {
        key: "08",
        localId: "UUID08",
        assigned: false,
        schedule: "9:00-15:00",
        name: "Café Valerio",
        direction: "Av. Santa Fe 2710, Palermo, Comuna 2",
        type: "Urgente" // TODO enum
    },
    {
        key: "09",
        localId: "UUID09",
        assigned: false,
        schedule: "9:00-15:00",
        name: "Café Valerio",
        direction: "Av. Santa Fe 2710, Palermo, Comuna 2",
        type: "Flexible"
    },
    {
        key: "10",
        localId: "UUID10",
        assigned: false,
        schedule: "9:00-15:00",
        name: "Café Valerio",
        direction: "Av. Santa Fe 2710, Palermo, Comuna 2",
        type: "Flexible"
    }
]

const DataBody = ({handleLocalId}) => {
    return (
        <tbody>
            { mockData.map((data) => {return <DataField data={data} key={data.key} handleLocalId={handleLocalId}/>}) }
        </tbody>
    );
}

const DataField = ({data, handleLocalId}) => {

    const handleLocalView = (e) => {
        setLocalId(data.localId)
    }

    const handleContact = (e) => {
        // TODO contact
    }

    return (
        <tr className={
            (data.type === "Fijo" ? "recorrido-fijo ": "") + 
            (data.type === "Flexible" ? "recorrido-flexible ": "") +
            (data.type === "Urgente" ? "recorrido-urgente ": "")
            }>
            <td scope="col" className="cell-horario-icono"><i className="circle" /></td>
            <td scope="col" className="cell-horario">{data.schedule}</td>
            <td scope="col" className="cell-nombre">
                {data.name}
                <span className="aclaracion">{data.direction}</span>
            </td>
            <td scope="col" className="cell-alertas"><i className="far fa-exclamation-triangle" title="Tocar timbre" /></td>
            <td scope="col" className="cell-mas">
                <div className="btn-group">
                    <a href="#" className="btn btn-tertiary" data-bs-toggle="dropdown" aria-expanded="false"><i className="far fa-ellipsis-h" /></a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#" onClick={handleLocalView}>Ver local</a></li>
                        <li><a className="dropdown-item" href="#" onClick={handleContact}>Contactar dueño</a></li>
                    </ul>
                </div>
            </td>
        </tr>
    );
}

const DateOfRoute = () => {
    
    const [dateOfRoute, setDateOfRoute] = useState(new Date());
    const [formattedDate, setFormattedDate] = useState('');

    const afterDay = (e) => {
        e.preventDefault();
        plus(dateOfRoute, 1)
        setFormattedDate(getFormattedDate(dateOfRoute));
    }

    const beforeDay = (e) => {
        e.preventDefault();
        plus(dateOfRoute, -1)
        setFormattedDate(getFormattedDate(dateOfRoute));
    }

    const today = (e) => {
        e.preventDefault();
        setDateOfRoute(new Date());
        setFormattedDate(getFormattedDate(dateOfRoute));

    }
    
    useEffect(()=>{
        if(formattedDate === '') {
            setFormattedDate(getFormattedDate(dateOfRoute));
        }
    });

    return (
        <div className="row sintesis-header">
            <div className="supertitulo col-12">118 locales en total</div>
            <div className="col-auto info-fecha">
                <h3>{formattedDate}</h3>
            </div>
            <div className="col-auto nav-dias">
                <a href="#" className="prev-day" onClick={beforeDay}>
                    <i className="far fa-angle-left" />
                </a>
                <a href="admin-agenda.html" className="next-day" onClick={afterDay}>
                    <i className="far fa-angle-right" />
                </a>
            </div>
            <div className="btn-set col-auto">
                        <button className="btn btn-outline btn-small">CSV</button>
                <a className="btn btn-outline btn-small" href="admin-recorridos-armar-paso3.html">Crear recorrido</a>
            </div>
        </div>
    );
}
HomeToursAdmin.DateOfRoute = DateOfRoute;

const Filter = () => {

    const [commune, setCommune] = useState("Comunas 2, 3, 7, 10, 12, 15")
    const [schedule, setSchedule] = useState("all")
    const [orderType, setOrderType] = useState("all")

    const handleCommune = (e) => {
        e.preventDefault();
        setCommune(e.target.value);
        search()
    }

    const handleSchedule = (e) => {
        e.preventDefault();
        setSchedule(e.target.value);
        search()
    }

    const handleOrderType = (e) => {
        e.preventDefault();
        setOrderType(e.target.value);
        search()
    }

    const deleteFilters = (e) => {
        e.preventDefault();
        setCommune("Comunas 2, 3, 7, 10, 12, 15");
        setSchedule("all");
        setOrderType("all");
    }

    const search = () => {
        // TODO call firebase
    }

    return (
        <div className="filter-row form form-rounded form-small">
            <div className="col-auto filtro">
                <p className="label sr-only">Comuna</p>
                <button type="button" className="form-select" data-bs-toggle="modal" data-bs-target="#modalComunas"><span>Comunas 2, 3, 7, 10, 12, 15</span></button>
                <div className="modal" tabIndex={-1} id="modalComunas" aria-labelledby="modalComunasLabel">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Filtrar por comuna</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="filtroComuna1" />
                                    <label className="form-check-label" htmlFor="filtroComuna1">
                                        Comuna 1
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="filtroComuna2" defaultChecked />
                                    <label className="form-check-label" htmlFor="filtroComuna2">
                                        Comuna 2
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="filtroComuna3" defaultChecked />
                                    <label className="form-check-label" htmlFor="filtroComuna3">
                                        Comuna 3
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="filtroComuna4" />
                                    <label className="form-check-label" htmlFor="filtroComuna4">
                                        Comuna 4
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="filtroComuna5" />
                                    <label className="form-check-label" htmlFor="filtroComuna5">
                                        Comuna 5
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="filtroComuna6" />
                                    <label className="form-check-label" htmlFor="filtroComuna6">
                                        Comuna 6
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="filtroComuna7" defaultChecked />
                                    <label className="form-check-label" htmlFor="filtroComuna7">
                                        Comuna 7
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="filtroComuna8" />
                                    <label className="form-check-label" htmlFor="filtroComuna8">
                                        Comuna 8
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="filtroComuna9" />
                                    <label className="form-check-label" htmlFor="filtroComuna9">
                                        Comuna 9
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="filtroComuna10" defaultChecked />
                                    <label className="form-check-label" htmlFor="filtroComuna10">
                                        Comuna 10
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="filtroComuna11" />
                                    <label className="form-check-label" htmlFor="filtroComuna11">
                                        Comuna 11
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="filtroComuna12" defaultChecked />
                                    <label className="form-check-label" htmlFor="filtroComuna12">
                                        Comuna 12
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="filtroComuna13" />
                                    <label className="form-check-label" htmlFor="filtroComuna13">
                                        Comuna 13
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="filtroComuna14" />
                                    <label className="form-check-label" htmlFor="filtroComuna14">
                                        Comuna 14
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="filtroComuna15" defaultChecked />
                                    <label className="form-check-label" htmlFor="filtroComuna15">
                                        Comuna 15
                                    </label>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary btn-small">Aplicar filtros</button>
                                <button type="button" className="btn btn-outline btn-small" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-auto filtro">
                <p className="label sr-only">Franja horaria</p>
                <select className="form-select" aria-label="Franja horaria" name="franjahoraria" id="franjahoraria" onClick={handleSchedule}>
                    <option value="all">Todos</option>
                    <option value="m" selected>Mañana</option>
                    <option value="t">Tarde</option>
                    <option value="n">Tarde</option>
                </select>
            </div>
            <div className="col-auto filtro">
                <p className="label sr-only">Tipo</p>
                <select className="form-select" aria-label="Tipo de pedido" name="tipo" id="tipo" onClick={handleOrderType}>
                    <option value="all" selected="selected">Todos los tipos</option>
                    <option value="flex">Horario flexible</option>
                    <option value="specific">Horario específico</option>
                    <option value="urgent">Urgencia</option>
                </select>
            </div>
            <div className="col mas-acciones">
                <a href="#" onClick={deleteFilters}>Borrar filtros</a>
            </div>
        </div>
    );
}
HomeToursAdmin.Filter = Filter;

export default HomeToursAdmin;