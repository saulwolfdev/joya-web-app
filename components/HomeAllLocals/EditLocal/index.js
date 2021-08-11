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
            <EditLocal.Header/>
            {
                admin ? 
                    <EditLocal.BodyUser
                        phone = {phone} 
                        handlePhone = {handlePhone} 
                        additionalIndications = {additionalIndications} 
                        handleAdditionalIndications = {handleAdditionalIndications}
                        save = {save}
                        local = {local}
                    />
                    :
                    <></>
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

const Header = () => {
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

export default EditLocal;