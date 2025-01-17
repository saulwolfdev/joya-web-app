import React,{useState, useEffect} from 'react';

const OrderDetails = ({inputDirection, handleStatusEdit, handleSurfaceAprox}) => {

    const [total, setTotal] = useState('0')

    const mockInfo = { // TODO replace with firebase
        direction: "Wathever",
        windowInfo: [
            {
                key: 1,
                size: 16
            },
            {
                key: 2,
                size: 16
            },
            {
                key: 3,
                size: 16
            },
            {
                key: 4,
                size: 20
            }
        ]
    }

    useEffect(()=>{
        setTotal(mockInfo.windowInfo.length === 0 ? 0 : mockInfo.windowInfo.map(i => i.size).reduce((a, b) => a + b));
        handleSurfaceAprox(total)
    });

    return (
        <div className="localexistente block-alternative" style={{ display: "block" }}>
            <div className="form-element">
                <p className="label">Características</p>
                <div className="caracteristicas-local">
                    <div className="form-element">
                        <p className="label">Dirección</p>
                        <p className="value">{inputDirection}</p>
                    </div>
                    <div className="form-element row">
                        <div className="col-md-4 col-xl-3 superficie">
                            <p className="label">Vidriera</p>
                            <p className="value">Sup. aproximada: {total}m<sup>2</sup></p>
                        </div>
                        <div className="col-md-8 col-xl-9 panios">
                            <div className="row">
                            { mockInfo.windowInfo.map((info) => {return <OrderDetails.Detail info={info} key={info.key}/>}) }
                            </div>
                        </div>

                    </div>
                    <div className="btn-set row">
                        <div className="col-md-4 col-xl-3">
                            <button className="btn btn-primary btn-small" onClick={() => {handleStatusEdit(mockInfo)}}>
                                Editar
                            </button>
                        </div>
                        <div className="col-md-8 col-xl-9">
                            <p className="form-text small"><i className="far fa-info-circle"></i> Si editas las características del local, los servicios existentes serán pausados hasta que se confirmen los nuevos precios.</p> </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

const Detail = ({info}) => {
    return (
        <div className="col panio">
            <p className="label">Ventana #{info.key}</p>
            <p className="value">{info.size}m<sup>2</sup></p>
        </div>
    );
}
OrderDetails.Detail = Detail;

export default OrderDetails;