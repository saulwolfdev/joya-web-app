import { useState } from 'react';
import { mockData } from './data' 

const Body = ({changeToEditLocal}) => {

    const [locals, setLocals] = useState(mockData.value) // TODO call firebase

    return (
        <div className="locales row">
            { locals.map((local) => {return <Local changeToEditLocal={changeToEditLocal} local={local} key={local.key}/>}) }
        </div>
    );
}

const Local = ({changeToEditLocal, local}) => {
    return (
        <div className="col-lg-6 local">
            <div className={local.newLocal ? "local card nuevo" : "card"}>
                <div className="data-main row">
                    <div className="col">
                        <h4>{local.name}</h4>
                        <p className="direccion">{local.direction}</p>
                    </div>
                    <div className="col-auto">
                        {
                            local.pendingAvatar ? 
                                <div className="imagen-local sin-imagen"/>
                            :
                                <div className={"imagen-local " + (local.verifiedAccount ? "local-verificado" : "")} style={{backgroundImage: local.avatar}}/>
                        }
                    </div>
                </div>
                <div className="data-table row">
                    <div className="col-auto superfice">
                        <p className="label">Superficie</p>
                        <p className="data">
                            {local.surface}m<sup>2</sup> {local.surfaceConfirmed ? <i className="c-success far fa-check-circle"/> : <></>}{local.surfaceBefore !== "" ? <span className="superficie-anterior">{local.surfaceBefore}<sup>2</sup></span> : <></>}
                        </p>
                    </div>
                    <div className="col-auto tiempo">
                        <p className="label">Tiempo estimado</p>
                        <p className="data">{local.time}</p>
                    </div>
                    <div className="col-auto pedidos">
                        <p className="label">Pedidos</p>
                        <p className="data">{local.orders}</p>
                    </div>
                </div>
                <div className="btn-set">
                    <div className="alertas">
                        {
                            local.pendingAvatar ? 
                            <>
                                <i className="far fa-exclamation-triangle"/>
                                Foto de fachada pendiente
                            </>
                            :
                            <></>
                        }
                        {
                            local.surfaceBefore !== "" ? <div className="alertas"><i className="far fa-exclamation-triangle" />Superficie a confirmar</div> : <></>
                        }
                    </div>
                    <a className="btn btn-outline btn-small" onClick={() => changeToEditLocal("example")}>Editar</a>
                </div>
            </div>
        </div>
    );
}
Body.Local = Local;

export default Body;