import React,{useState} from 'react';
import Img from '../../Img'

const EditLocal = ({localId, admin}) => {

    const [phone, setPhone] = useState('+5491151234567');
    const [additionalIndications, setAdditionalIndications] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut ante eget nulla sodales efficitur. Cras tempor neque risus, nec porta urna lobortis ac.");

    let local = { // TODO firebase
        id: localId,
        name: "Kentucky Santa Fe",
        direction: "Av. Santa Fe 2702",
        zone: "Palermo, Comuna 12",
        surface: "64",
        time: "10 minutos",
        additionalIndications: '',
        record: "11/12/2021",
        lastOrder: "Mi 15/4/2020, 15:05hs",
        totalOrder: "254",
        img: "kentucky.jpg"
    }

    const handlePhone = (e) => {
        const value = e.currentTarget.value;
        setPhone(value);
        local.phone = value;
    }
    const handleAdditionalIndications = (e) => {
        const value = e.currentTarget.value;
        setAdditionalIndications(value);
        local.additionalIndications = value;
    }
    
    const save = (e) => {
        e.preventDefault();
        // TODO save changes with firebase
    }

    return (
        <div>
            <EditLocal.Header local={local}/>
            {
                admin ? 
                    <EditLocal.BodyUser
                        phone={phone} 
                        handlePhone={handlePhone} 
                        additionalIndications={additionalIndications} 
                        handleAdditionalIndications={handleAdditionalIndications}
                        save={save}
                        local={local}
                    />
                    :
                    <EditLocal.BodyUser localId = {localId}/>
            }
            
      </div>
    );
}

const BodyUser = ({phone, handlePhone, additionalIndications, handleAdditionalIndications, save, local}) => {
    return (
        <>
            <div className="row info-block">
                <h5><span>Datos</span></h5>
                <div className="form">
                    <div className="row">
                        <div className="col-12 form-element">
                            <label htmlFor="telefono" className="form-label">Teléfono local</label>
                            <input type="text" className="form-control" name="telefono" value={phone} onChange={handlePhone}/>
                        </div>
                        <div className="form-element col-12">
                            <label htmlFor="indicaciones" className="form-label">Indicaciones adicionales</label>
                            <textarea name="indicaciones" id rows={4} className="form-control" value={additionalIndications} onChange={handleAdditionalIndications} />
                        </div>
                        <div className="col-12 data-piece">
                            <button className="btn btn-primary btn-small" onClick={save}>Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row info-block">
                <h5><span>Actividad</span></h5>
                <div className="data-table row">
                    <div className="col-md-3 data-piece">
                        <p className="label">Registro</p>
                        <p className="data">{local.record}</p>
                    </div>
                    <div className="col-md-3 data-piece">
                        <p className="label">Último pedido</p>
                        <p className="data">{local.lastOrder}</p>
                    </div>
                    <div className="col-md-3 data-piece">
                        <p className="label">Pedidos totales</p>
                        <p className="data">{local.totalOrder}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
EditLocal.BodyUser = BodyUser;

const ContactSection = ({localId}) => {

    // Usar firebase con el localId para obtener la info
    const mockInfo = {
        clientPhone: "+549 116789 4567",
        clientLocalOwner: "+549 116789 4567",
        name: "Rafael Aragon",
        email: "rafael.aragon@gmail.com"
    };

    const handleContact = (e) => {
        e.preventDefault();
        // TODO call firebase
    }

    return (
        <div className="row info-block">
            <h5><span>Contacto</span></h5>
            <div className="data-table row">
                <div className="col-md-3 data-piece">
                    <p className="label">Teléfono local</p>
                    <p className="data">{mockInfo.clientLocalOwner}</p>
                </div>
                <div className="col-md-3 data-piece">
                    <p className="label">Cliente</p>
                    <p className="data">
                        {mockInfo.name}
                        <a href={"mailto:" + mockInfo.email} className="email">{mockInfo.email}</a>
                    </p>
                </div>
                <div className="col-md-3 data-piece">
                    <p className="label">Teléfono cliente</p>
                    <p className="data">{mockInfo.clientPhone}</p>
                </div>
                <div className="col-md-3 data-piece">
                    <a href="#" className="btn btn-primary btn-small" onClick={handleContact}>Contactar</a>
                </div>
            </div>
        </div>
    );
}

const ActivitySection = ({localId}) => {

    // Usar firebase con el localId para obtener la info
    const mockInfo = {
        total: 254,
        lastOrder: "Mi 15/4/2020, 15:05hs", // Usar metodo que cree en los utils para el formateo
        register: "11/12/2021"
    };

    return (
        <div className="row info-block">
            <h5><span>Actividad</span></h5>
            <div className="data-table row">
                <div className="col-md-3 data-piece">
                    <p className="label">Registro</p>
                    <p className="data">{mockInfo.register}</p>
                </div>
                <div className="col-md-3 data-piece">
                    <p className="label">Último pedido</p>
                    <p className="data">{mockInfo.lastOrder}</p>
                </div>
                <div className="col-md-3 data-piece">
                    <p className="label">Pedidos totales</p>
                    <p className="data">{mockInfo.total}</p>
                </div>
            </div>
        </div>
    );
}

const FiltersSection = ({localId}) => {

    const [date, setDate] = useState("Todas")
    const [actionState, setActionState] = useState("Todos")
    const [alert, setAlert] = useState("Todos")

    const handleDate = (e) => {
        e.preventDefault();
        setDate(e.target.value);
    }

    const handleActionState = (e) => {
        e.preventDefault();
        setActionState(e.target.value);
    }

    const handleAlert= (e) => {
        e.preventDefault();
        setAlert(e.target.value);
    }

    const search = (e) => {
        e.preventDefault();
        // TODO call firebase and use localId
    }

    return (
        <div className="filter-row form form-rounded form-small">				    					
            <div className="col-auto filtro">
                <p className="label">Fecha</p>
                <select className="form-select" aria-label="Fecha" name="alta" id="fecha" onClick={handleDate}>
                    <option value="a" selected="selected">Todas</option>
                    <option value="b">Último mes</option>
                    <option value="c">Último año</option>
                </select>
            </div>
            <div className="col-auto filtro">
                <p className="label">Estado</p>
                <select className="form-select" aria-label="Estado" name="estado" id="estado" onClick={handleActionState}>
                    <option value="a" selected="selected">Todos</option>
                    <option value="b">Pendiente</option>
                    <option value="c">Completado</option>
                </select>
            </div>
            <div className="col-auto filtro">
                <p className="label">Alerta</p>
                <select className="form-select" aria-label="Alerta" name="alerta" id="alerta" onClick={handleAlert}>
                    <option value="a" selected="selected">Todos</option>
                    <option value="b">Con alertas</option>
                    <option value="c">Sin alertas</option>
                </select>
            </div>
            <div className="col-12 col-md expansible-search-right">	
                <input className="expansible-search" type="search" placeholder="Buscar" onClick={search}/>
            </div>
        </div>
    );
}

const BodyAdmin = ({localId}) => {
    return (
        <div>
            <ContactSection localId={localId}/>
            <ActivitySection localId={localId}/>
            <div className="row info-block">
                <h5><span>Últimos pedidos</span></h5>
                <FiltersSection localId={localId}/>
                <div className="pedidos-all">
            <div className="table-responsive">
              <table className="table admin-table table-hover">
                <thead>
                  <tr>
                    <th scope="col" className="cell-bullet" />
                    <th scope="col" className="cell-fecha ordenable">Fecha</th>
                    <th scope="col" className="cell-hora" />
                    <th scope="col" className="cell-monto ordenable down">Monto</th>
                    <th scope="col" className="cell-estado ordenable up">Estado</th>
                    <th scope="col" className="cell-alerta ordenable">Alertas</th>
                    <th scope="col" className="cell-vidrierista ordenable">Vidrierista</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="alerta-pendiente">
                    <td scope="col" className="cell-bullet"><i className="circle" /></td>
                    <td scope="col" className="cell-fecha">Mie 07/04/2020 {/* que se vea el día de la semana */}</td>
                    <td scope="col" className="cell-hora">11:00 - 17:00</td>
                    <td scope="col" className="cell-monto">$7186</td>
                    <td scope="col" className="cell-estado">Completado</td>
                    <td scope="col" className="cell-alerta"><a title="Reporte de vidrierista"><i className="far fa-exclamation-triangle" />Reporte</a></td>
                    <td scope="col" className="cell-vidrierista"><a href>Juan Perez</a></td>
                  </tr>
                  <tr className>
                    <td scope="col" className="cell-bullet"><i className="circle" /></td>
                    <td scope="col" className="cell-fecha">Mie 07/04/2020 {/* que se vea el día de la semana */}</td>
                    <td scope="col" className="cell-hora">11:00 - 17:00</td>
                    <td scope="col" className="cell-monto">$7186</td>
                    <td scope="col" className="cell-estado">Completado</td>
                    <td scope="col" className="cell-alerta" />
                    <td scope="col" className="cell-vidrierista"><a href>Juan Perez</a></td>
                  </tr>
                  <tr className>
                    <td scope="col" className="cell-bullet"><i className="circle" /></td>
                    <td scope="col" className="cell-fecha">Mie 07/04/2020 {/* que se vea el día de la semana */}</td>
                    <td scope="col" className="cell-hora">11:00 - 17:00</td>
                    <td scope="col" className="cell-monto">$7186</td>
                    <td scope="col" className="cell-estado">Completado</td>
                    <td scope="col" className="cell-alerta" />
                    <td scope="col" className="cell-vidrierista"><a href>Juan Perez</a></td>
                  </tr>
                  <tr className="alerta-pendiente">
                    <td scope="col" className="cell-bullet"><i className="circle" /></td>
                    <td scope="col" className="cell-fecha">Mie 07/04/2020 {/* que se vea el día de la semana */}</td>
                    <td scope="col" className="cell-hora">11:00 - 17:00</td>
                    <td scope="col" className="cell-monto">$7186</td>
                    <td scope="col" className="cell-estado">Completado</td>
                    <td scope="col" className="cell-alerta"><a title="Reporte de vidrierista"><i className="far fa-exclamation-triangle" />Reporte</a></td>
                    <td scope="col" className="cell-vidrierista"><a href>Juan Perez</a></td>
                  </tr>
                  <tr className>
                    <td scope="col" className="cell-bullet"><i className="circle" /></td>
                    <td scope="col" className="cell-fecha">Mie 07/04/2020 {/* que se vea el día de la semana */}</td>
                    <td scope="col" className="cell-hora">11:00 - 17:00</td>
                    <td scope="col" className="cell-monto">$7186</td>
                    <td scope="col" className="cell-estado">Completado</td>
                    <td scope="col" className="cell-alerta" />
                    <td scope="col" className="cell-vidrierista"><a href>Juan Perez</a></td>
                  </tr>
                  <tr className>
                    <td scope="col" className="cell-bullet"><i className="circle" /></td>
                    <td scope="col" className="cell-fecha">Mie 07/04/2020 {/* que se vea el día de la semana */}</td>
                    <td scope="col" className="cell-hora">11:00 - 17:00</td>
                    <td scope="col" className="cell-monto">$7186</td>
                    <td scope="col" className="cell-estado">Completado</td>
                    <td scope="col" className="cell-alerta" />
                    <td scope="col" className="cell-vidrierista"><a href>Juan Perez</a></td>
                  </tr>
                  <tr className="alerta-pendiente">
                    <td scope="col" className="cell-bullet"><i className="circle" /></td>
                    <td scope="col" className="cell-fecha">Mie 07/04/2020 {/* que se vea el día de la semana */}</td>
                    <td scope="col" className="cell-hora">11:00 - 17:00</td>
                    <td scope="col" className="cell-monto">$7186</td>
                    <td scope="col" className="cell-estado">Completado</td>
                    <td scope="col" className="cell-alerta"><a title="Reporte de vidrierista"><i className="far fa-exclamation-triangle" />Reporte</a></td>
                    <td scope="col" className="cell-vidrierista"><a href>Juan Perez</a></td>
                  </tr>
                  <tr className>
                    <td scope="col" className="cell-bullet"><i className="circle" /></td>
                    <td scope="col" className="cell-fecha">Mie 07/04/2020 {/* que se vea el día de la semana */}</td>
                    <td scope="col" className="cell-hora">11:00 - 17:00</td>
                    <td scope="col" className="cell-monto">$7186</td>
                    <td scope="col" className="cell-estado">Completado</td>
                    <td scope="col" className="cell-alerta" />
                    <td scope="col" className="cell-vidrierista"><a href>Juan Perez</a></td>
                  </tr>
                  <tr className>
                    <td scope="col" className="cell-bullet"><i className="circle" /></td>
                    <td scope="col" className="cell-fecha">Mie 07/04/2020 {/* que se vea el día de la semana */}</td>
                    <td scope="col" className="cell-hora">11:00 - 17:00</td>
                    <td scope="col" className="cell-monto">$7186</td>
                    <td scope="col" className="cell-estado">Completado</td>
                    <td scope="col" className="cell-alerta" />
                    <td scope="col" className="cell-vidrierista"><a href>Juan Perez</a></td>
                  </tr>
                  <tr className="alerta-pendiente">
                    <td scope="col" className="cell-bullet"><i className="circle" /></td>
                    <td scope="col" className="cell-fecha">Mie 07/04/2020 {/* que se vea el día de la semana */}</td>
                    <td scope="col" className="cell-hora">11:00 - 17:00</td>
                    <td scope="col" className="cell-monto">$7186</td>
                    <td scope="col" className="cell-estado">Completado</td>
                    <td scope="col" className="cell-alerta"><a title="Reporte de vidrierista"><i className="far fa-exclamation-triangle" />Reporte</a></td>
                    <td scope="col" className="cell-vidrierista"><a href>Juan Perez</a></td>
                  </tr>
                  <tr className>
                    <td scope="col" className="cell-bullet"><i className="circle" /></td>
                    <td scope="col" className="cell-fecha">Mie 07/04/2020 {/* que se vea el día de la semana */}</td>
                    <td scope="col" className="cell-hora">11:00 - 17:00</td>
                    <td scope="col" className="cell-monto">$7186</td>
                    <td scope="col" className="cell-estado">Completado</td>
                    <td scope="col" className="cell-alerta" />
                    <td scope="col" className="cell-vidrierista"><a href>Juan Perez</a></td>
                  </tr>
                  <tr className>
                    <td scope="col" className="cell-bullet"><i className="circle" /></td>
                    <td scope="col" className="cell-fecha">Mie 07/04/2020 {/* que se vea el día de la semana */}</td>
                    <td scope="col" className="cell-hora">11:00 - 17:00</td>
                    <td scope="col" className="cell-monto">$7186</td>
                    <td scope="col" className="cell-estado">Completado</td>
                    <td scope="col" className="cell-alerta" />
                    <td scope="col" className="cell-vidrierista"><a href>Juan Perez</a></td>
                  </tr>
                  <tr className="alerta-pendiente">
                    <td scope="col" className="cell-bullet"><i className="circle" /></td>
                    <td scope="col" className="cell-fecha">Mie 07/04/2020 {/* que se vea el día de la semana */}</td>
                    <td scope="col" className="cell-hora">11:00 - 17:00</td>
                    <td scope="col" className="cell-monto">$7186</td>
                    <td scope="col" className="cell-estado">Completado</td>
                    <td scope="col" className="cell-alerta"><a title="Reporte de vidrierista"><i className="far fa-exclamation-triangle" />Reporte</a></td>
                    <td scope="col" className="cell-vidrierista"><a href>Juan Perez</a></td>
                  </tr>
                  <tr className>
                    <td scope="col" className="cell-bullet"><i className="circle" /></td>
                    <td scope="col" className="cell-fecha">Mie 07/04/2020 {/* que se vea el día de la semana */}</td>
                    <td scope="col" className="cell-hora">11:00 - 17:00</td>
                    <td scope="col" className="cell-monto">$7186</td>
                    <td scope="col" className="cell-estado">Completado</td>
                    <td scope="col" className="cell-alerta" />
                    <td scope="col" className="cell-vidrierista"><a href>Juan Perez</a></td>
                  </tr>
                  <tr className>
                    <td scope="col" className="cell-bullet"><i className="circle" /></td>
                    <td scope="col" className="cell-fecha">Mie 07/04/2020 {/* que se vea el día de la semana */}</td>
                    <td scope="col" className="cell-hora">11:00 - 17:00</td>
                    <td scope="col" className="cell-monto">$7186</td>
                    <td scope="col" className="cell-estado">Completado</td>
                    <td scope="col" className="cell-alerta" />
                    <td scope="col" className="cell-vidrierista"><a href>Juan Perez</a></td>
                  </tr>
                  <tr className="alerta-pendiente">
                    <td scope="col" className="cell-bullet"><i className="circle" /></td>
                    <td scope="col" className="cell-fecha">Mie 07/04/2020 {/* que se vea el día de la semana */}</td>
                    <td scope="col" className="cell-hora">11:00 - 17:00</td>
                    <td scope="col" className="cell-monto">$7186</td>
                    <td scope="col" className="cell-estado">Completado</td>
                    <td scope="col" className="cell-alerta"><a title="Reporte de vidrierista"><i className="far fa-exclamation-triangle" />Reporte</a></td>
                    <td scope="col" className="cell-vidrierista"><a href>Juan Perez</a></td>
                  </tr>
                  <tr className>
                    <td scope="col" className="cell-bullet"><i className="circle" /></td>
                    <td scope="col" className="cell-fecha">Mie 07/04/2020 {/* que se vea el día de la semana */}</td>
                    <td scope="col" className="cell-hora">11:00 - 17:00</td>
                    <td scope="col" className="cell-monto">$7186</td>
                    <td scope="col" className="cell-estado">Completado</td>
                    <td scope="col" className="cell-alerta" />
                    <td scope="col" className="cell-vidrierista"><a href>Juan Perez</a></td>
                  </tr>
                  <tr className>
                    <td scope="col" className="cell-bullet"><i className="circle" /></td>
                    <td scope="col" className="cell-fecha">Mie 07/04/2020 {/* que se vea el día de la semana */}</td>
                    <td scope="col" className="cell-hora">11:00 - 17:00</td>
                    <td scope="col" className="cell-monto">$7186</td>
                    <td scope="col" className="cell-estado">Completado</td>
                    <td scope="col" className="cell-alerta" />
                    <td scope="col" className="cell-vidrierista"><a href>Juan Perez</a></td>
                  </tr>
                  <tr className="alerta-pendiente">
                    <td scope="col" className="cell-bullet"><i className="circle" /></td>
                    <td scope="col" className="cell-fecha">Mie 07/04/2020 {/* que se vea el día de la semana */}</td>
                    <td scope="col" className="cell-hora">11:00 - 17:00</td>
                    <td scope="col" className="cell-monto">$7186</td>
                    <td scope="col" className="cell-estado">Completado</td>
                    <td scope="col" className="cell-alerta"><a title="Reporte de vidrierista"><i className="far fa-exclamation-triangle" />Reporte</a></td>
                    <td scope="col" className="cell-vidrierista"><a href>Juan Perez</a></td>
                  </tr>
                  <tr className>
                    <td scope="col" className="cell-bullet"><i className="circle" /></td>
                    <td scope="col" className="cell-fecha">Mie 07/04/2020 {/* que se vea el día de la semana */}</td>
                    <td scope="col" className="cell-hora">11:00 - 17:00</td>
                    <td scope="col" className="cell-monto">$7186</td>
                    <td scope="col" className="cell-estado">Completado</td>
                    <td scope="col" className="cell-alerta" />
                    <td scope="col" className="cell-vidrierista"><a href>Juan Perez</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Pageable/>
          </div>
        </div>
      </div>
    );
}
EditLocal.BodyAdmin = BodyAdmin;

const Header = ({local}) => {
    return (
        <div className="row intro-local">
            <div className="col-md-6 local-data">
                <p className="supertitulo">Local</p>
                <h4>{local.name}</h4>	
                <div className="data-table row">
                    <div className="col-md-6 direccion data-piece">
                        <p className="label">Dirección</p>
                        <p className="data">{local.direction}</p>
                    </div>
                    <div className="col-md-6 barrio data-piece">
                        <p className="label">Barrio</p>
                        <p className="data">{local.zone}</p>
                    </div>
                    <div className="col-md-6 superfice data-piece">
                        <p className="label">Superficie</p>
                        <p className="data">{local.surface}m<sup>2</sup> <i className="c-success far fa-check-circle" /></p>
                    </div>
                    <div className="col-md-6 tiempo data-piece">
                        <p className="label">Tiempo estimado</p>
                        <p className="data">{local.time}</p>
                    </div>
                    <div className="indicaciones col-12 data-piece"/>
                </div>
            </div>
            <div className="col-md-6 local-imagen">
                <Img src={local.img} alt="" className="img-fluid" />
            </div>
        </div>
    );
}
EditLocal.Header = Header;

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

export default EditLocal;