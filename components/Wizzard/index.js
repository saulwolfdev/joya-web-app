import React,{useState} from 'react';
import InputLocal from './StepOne/InputLocal'
import InputDirection from './StepOne/InputDirection'
import InputLocalName from './StepOne/InputLocalName'
import InputAdditionalIndications from './StepOne/InputAdditionalIndications'
import WindowSizeSection from './StepOne/WindowSizeSection'
import Features from './StepOne/Features'
import CleanType from './StepOne/CleanType'
import Modalities from './StepTwo/Modalities'

const Wizzard = () => {
    const [step, setStep] = useState(3);
    return (
        <>
        	<Wizzard.Steps/>
            <div className="wizard-content">
                {step === 1 ? <Wizzard.StepOne/> : <></> }
                {step === 2 ? <Wizzard.StepTwo/> : <></> }
                {step === 3 ? <Wizzard.StepThree/> : <></> }
            </div>
            <Wizzard.Footer/>
        </>
    );
}

const StepOne = () => {
    return (
        <div className="step1 inner-container">
            <h4>Detalles de Local</h4>
            <p>Seleccioná el local que necesita de nuestro servicio o agregá un local nuevo a tu lista.</p>
            <div className="form">
                <InputLocal/>
                <div className="localnuevo block-alternative">
                    <InputDirection/>
                    <InputLocalName/>
                    <InputAdditionalIndications/>
                    <WindowSizeSection/>
                </div>
                <Features/>
                <CleanType/>
            </div>
        </div>
    );
}
Wizzard.StepOne = StepOne;

const StepTwo = () => {
    // If no select, ant this value is any distinct of 'unique', 'selection' or 'urgent', then next conditions should be false (in this case 'none')
    const [modality, setModality] = useState('none');
    return (
        <div className="step2 inner-container">
            <h4>Frecuencia</h4>
            <p>Con nuestro servicio recurrente ahorrá y despreocupate por completo de tus vidrieras.</p>
            <div className="form">
                <Modalities handleModality={setModality}/>
               {/* agregar la clase "active"  <h3>className="frequency-form active"</h3> */}
                <div className="frequency-form active" id="freq-unica">
                    <div className="row dia-visita">
                        <div className="col-lg-2 col-3 col-label">
                            <label htmlFor="freq-unica-dia" className="h4">Día</label>
                        </div>
                        <div className="col col-field">
                            {/*Contemplar posibilidad de incluir un datepicker de react*/}
                            <input type="date" name="freq-unica-dia" className="form-control"/>
                        </div>
                    </div>
                    <div className="row franja-horaria">
                        <div className="col-lg-2 col-3 col-label">
                            <label htmlFor="freq-unica-hora" className="h4">Horario</label>
                        </div>
                        <div className="col col-field">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="freq-unica-hora" id="freq-unica-hora1"/>
                                <label className="form-check-label" htmlFor="freq-unica-hora1">
                                <strong>Flexible.</strong> Entre las 9 y las 16hs. <span className="descuento">-10%</span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="freq-unica-hora" id="freq-unica-hora2"/>
                                <label className="form-check-label" htmlFor="freq-unica-hora2">
                                <strong>Franja horaria específica</strong>
                                </label>
                                <select className="form-select franja-horaria" aria-label="Franja horaria específica">
                                    <option defaultValue>Elegir franja</option>
                                    <option value="1">franja 1</option>
                                    <option value="2">franja 2</option>
                                    <option value="3">franja 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="frequency-form active" id="freq-suscripcion">
                    <p><strong>Seleccioná los días de la semana que necesitás el servicio:</strong></p>
                    <p>Obtendrás un 10% de descuento si contratás una vez por semana, 15% si contratás 2 veces por semana, y 20% si contratás 3 veces por semana!</p>
                    <div className="row">
                        <div className="col-4 col-lg-2">
                            <input type="checkbox" name="freq-suscr-dia" className="btn-check" id="freq-suscr-dia-lu" autoComplete="off"/>
                            <label className="btn btn-outline-form" htmlFor="freq-suscr-dia-lu">Lun</label>
                        </div>
                        <div className="col-4 col-lg-2">
                            <input type="checkbox" name="freq-suscr-dia" className="btn-check" id="freq-suscr-dia-ma" autoComplete="off"/>
                            <label className="btn btn-outline-form" htmlFor="freq-suscr-dia-ma">Mar</label>
                        </div>
                        <div className="col-4 col-lg-2">
                            <input type="checkbox" name="freq-suscr-dia" className="btn-check" id="freq-suscr-dia-mi" autoComplete="off"/>
                            <label className="btn btn-outline-form" htmlFor="freq-suscr-dia-mi">Mie</label>
                        </div>
                        <div className="col-4 col-lg-2">
                            <input type="checkbox" name="freq-suscr-dia" className="btn-check" id="freq-suscr-dia-ju" autoComplete="off"/>
                            <label className="btn btn-outline-form" htmlFor="freq-suscr-dia-ju">Jue</label>
                        </div>
                        <div className="col-4 col-lg-2">
                            <input type="checkbox" name="freq-suscr-dia" className="btn-check" id="freq-suscr-dia-vi" autoComplete="off"/>
                            <label className="btn btn-outline-form" htmlFor="freq-suscr-dia-vi">Vie</label>
                        </div>
                        <div className="col-4 col-lg-2">
                            <input type="checkbox" name="freq-suscr-dia" className="btn-check" id="freq-suscr-dia-sa" autoComplete="off"/>
                            <label className="btn btn-outline-form" htmlFor="freq-suscr-dia-sa">Sab</label>
                        </div>
                    </div>
                    <div className="row dia-visita">
                        <div className="col-lg-2 col-3 col-label">
                            <label htmlFor="freq-unica-dia" className="h4">Día</label>
                        </div>
                        <div className="col col-field">
                            {/* Contemplar posibilidad de incluir un datepicker de react */}
                            <input type="date" name="freq-unica-dia" className="form-control"/>
                        </div>
                    </div>
                    <div className="row franja-horaria">
                        <div className="col-lg-2 col-3 col-label">
                            <label htmlFor="freq-unica-hora" className="h4">Horario</label>
                        </div>
                        <div className="col col-field">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="freq-unica-hora" id="freq-unica-hora1"/>
                                <label className="form-check-label" htmlFor="freq-unica-hora1">
                                <strong>Flexible.</strong> Entre las 9 y las 16hs. <span className="descuento">-10%</span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="freq-unica-hora" id="freq-unica-hora2"/>
                                <label className="form-check-label" htmlFor="freq-unica-hora2">
                                <strong>Franja horaria específica</strong>
                                </label>
                                <select className="form-select franja-horaria" aria-label="Franja horaria específica">
                                    <option defaultValue>Elegir franja</option>
                                    <option value="1">franja 1</option>
                                    <option value="2">franja 2</option>
                                    <option value="3">franja 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="frequency-form active" id="freq-urgencia">
                    <div className="dev-note">
                        Esto es igual en formato a la frecuencia única. Probablemente sólo aplique para usuarios registrados y esté deshabilitado para otros. Consultar reglas de negocio al cliente.
                    </div>
                    <div className="row dia-visita">
                        <div className="col-lg-2 col-3 col-label">
                            <label htmlFor="freq-unica-dia" className="h4">Día</label>
                        </div>
                        <div className="col col-field">
                            { /* Contemplar posibilidad de incluir un datepicker de react */}
                            <input type="date" name="freq-unica-dia" className="form-control"/>
                        </div>
                    </div>
                    <div className="row franja-horaria">
                        <div className="col-lg-2 col-3 col-label">
                            <label htmlFor="freq-unica-hora" className="h4">Horario</label>
                        </div>
                        <div className="col col-field">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="freq-unica-hora" id="freq-unica-hora1"/>
                                <label className="form-check-label" htmlFor="freq-unica-hora1">
                                <strong>Flexible.</strong> Entre las 9 y las 16hs. <span className="descuento">-10%</span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="freq-unica-hora" id="freq-unica-hora2"/>
                                <label className="form-check-label" htmlFor="freq-unica-hora2">
                                <strong>Franja horaria específica</strong>
                                </label>
                                <select className="form-select franja-horaria" aria-label="Franja horaria específica">
                                    <option defaultValue>Elegir franja</option>
                                    <option value="1">franja 1</option>
                                    <option value="2">franja 2</option>
                                    <option value="3">franja 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
Wizzard.StepTwo = StepTwo;

const StepThree = () => {
    return (
            <div className="step3 inner-container">
                <div className="row">
                    <div className="col col-md-7 col-xl-8 col-tarjeta">
                        <div className="inner-container-left">
                            <h4>Para terminar, confirma tu pago</h4>
                            <p>Se te cobrará al finalizar la primera visita. Consultá nuestras <a href="#">políticas de cancelación</a>.</p>
                            <div className="form">
                                <div className="form-element">
                                    <label htmlFor="tarjeta" className="form-label">Número de la tarjeta</label>
                                    <input type="text" className="form-control" name="tarjeta"/>
                                </div>
                                <div className="form-element">
                                    <label htmlFor="titular" className="form-label">Nombre y apellido del titular de la tarjeta</label>
                                    <input type="text" className="form-control" name="titular"/>
                                </div>
                                <div className="row">
                                    <div className="col form-element">
                                        <label htmlFor="expiracion" className="form-label">Fecha de expiración</label>
                                        <input type="text" className="form-control" name="expiracion"/>
                                    </div>
                                    <div className="col form-element">
                                        <label htmlFor="seguridad" className="form-label">Código de seguridad</label>
                                        <input type="text" className="form-control" name="seguridad"/>
                                    </div>
                                </div>
                                <div className="form-element">
                                    <label htmlFor="dni" className="form-label">DNI del titular</label>
                                    <input type="text" className="form-control" name="dni"/>
                                </div>
                                <div className="btn-set">
                                    <button className="btn btn-primary">Confirmar pago</button>
                                </div>
                            </div>	
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-5 col-detalle">
                        <h4>Detalle de compra</h4>
                        <table className="detalle-compra">
                            <tbody>
                                <tr className="item">
                                    <td className="descripcion">Subtotal</td>
                                    <td className="valor"><span className="currency">$</span><span className="price">150</span></td>
                                </tr>
                                <tr className="item">
                                    <td className="descripcion">Descuentos</td>
                                    <td className="valor destacado">-<span className="currency">$</span><span className="price">37,50</span><span className="percent">(25%)</span></td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr className="total">
                                    <td className="descripcion">Total</td>
                                    <td className="valor"><span className="currency">$</span><span className="price">112,50</span></td>
                                </tr>
                            </tfoot>
                        </table>
                        <p><a href="#">Tenés un cupón de descuento?</a></p>
                    </div>
                </div>
            </div>
    );
}
Wizzard.StepThree = StepThree;

const Steps = () => {
    return (
        <div className="wizard-steps">
            <ul className="inner-container">
                <li className="title"><span className="d-none d-md-inline">Tu solicitud:</span><span className="d-md-none">Pasos:</span></li>
                <li className="step step1"><i className="fal fa-store"/><span className="d-none d-lg-inline">Detalles del local</span><span className="d-none d-md-inline d-lg-none">El local</span></li>
                <li className="arrow">&rsaquo;</li>
                <li className="step step2"><i className="fal fa-calendar-alt"/><span className="d-none d-md-inline">Día y hora</span></li>
                <li className="arrow">&rsaquo;</li>
                <li className="step step3"><i className="fal fa-credit-card"/><span className="d-none d-md-inline">Pago</span></li>
            </ul>
        </div>
    );
}
Wizzard.Steps = Steps;

const Footer = () => {
    return (
        <div className="wizard-footer">
            <div className="inner-container">
                <button className="btn btn-primary" disabled>Siguiente</button>	
            </div>
        </div>
    );
}
Wizzard.Footer = Footer;

export default Wizzard;