import React,{useState} from 'react';

const CardData = () => {
    
    const [cardNumber, setCardNumber] = useState('')
    const handleCardNumber = (e) => {setCardNumber(e.target.value)} 

    const [name, setName] = useState('')
    const handleName = (e) => {setName(e.target.value)} 

    const [expiredDate, setExpiredDate] = useState('')
    const handleExpiredDate = (e) => {setExpiredDate(e.target.value)} 

    const [code, setCode] = useState('')
    const handleCode = (e) => {setCode(e.target.value)} 

    const [dni, setDni] = useState('')
    const handleDni = (e) => {setDni(e.target.value)} 

    const handleClick = (e) => {
        // TODO use states with firebase
    }

    return (
        <>
            <div className="col col-md-7 col-xl-8 col-tarjeta">
                <div className="inner-container-left">
                    <h4>Para terminar, confirma tu pago</h4>
                    <p>Se te cobrará al finalizar la primera visita. Consultá nuestras <a href="#">políticas de cancelación</a>.</p>
                    <div className="form">
                        <div className="form-element">
                            <label htmlFor="tarjeta" className="form-label">Número de la tarjeta</label>
                            <input type="text" className="form-control" name="tarjeta" value={cardNumber} onChange={handleCardNumber}/>
                        </div>
                        <div className="form-element">
                            <label htmlFor="titular" className="form-label">Nombre y apellido del titular de la tarjeta</label>
                            <input type="text" className="form-control" name="titular" value={name} onChange={handleName}/>
                        </div>
                        <div className="row">
                            <div className="col form-element">
                                <label htmlFor="expiracion" className="form-label">Fecha de expiración</label>
                                <input type="text" className="form-control" name="expiracion" value={expiredDate} onChange={handleExpiredDate}/>
                            </div>
                            <div className="col form-element">
                                <label htmlFor="seguridad" className="form-label">Código de seguridad</label>
                                <input type="text" className="form-control" name="seguridad" value={code} onChange={handleCode}/>
                            </div>
                        </div>
                        <div className="form-element">
                            <label htmlFor="dni" className="form-label">DNI del titular</label>
                            <input type="text" className="form-control" name="dni" value={dni} onChange={handleDni}/>
                        </div>
                        <div className="btn-set">
                            <button className="btn btn-primary" onClick={handleClick}>Confirmar pago</button>
                        </div>
                    </div>	
                </div>
            </div>
        </>
    );
}

export default CardData;