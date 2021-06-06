import React,{useState, useEffect} from 'react';
import StepOneNewUser from './StepOne/StepOneNewUser'
import CleanType from './StepOne/CleanType'
import Modalities from './StepTwo/Modalities'
import UniqueSection from './StepTwo/UniqueSection'
import SuscriptionSection from './StepTwo/SuscriptionSection'
import UrgentSection from './StepTwo/UrgentSection'
import { getAuth } from 'firebase/auth';
import { prepareUserInfo } from '../../helpers'

const Wizzard = () => {
    const [step, setStep] = useState(1);

    const [loguedIn, setLoguedIn] = useState(false);
    const [user,setUser] = useState(null);
    const [enableNext,setEnableNext] = useState(true);

    useEffect(()=>{
        const userLogin = getAuth();
        userLogin.onAuthStateChanged(prepareUserInfo(setLoguedIn, setUser));    
    });

    const incrementStep = (e) => {
        setStep(step + 1);
        setEnableNext(false);
    }

    const handleNext = (enable) => {
        setEnableNext(enable);
    }

    return (
        <>
        	<Wizzard.Steps/>
            <div className="wizard-content card-page-content">
                {step === 1 ? <Wizzard.StepOne handleNext={handleNext} loguedIn={loguedIn}/> : <></>}
                {step === 2 ? <Wizzard.StepTwo handleNext={handleNext} loguedIn={loguedIn}/> : <></>}
                {step === 3 ? <Wizzard.StepThree/> : <></>}
            </div>
            <Wizzard.Footer enableNext={enableNext} incrementStep={incrementStep}/>
        </>
    );
}

const StepOne = ({handleNext, loguedIn}) => {

    const [accept, setAccept] = useState(false);
    const [local, setLocal] = useState("none");

    const handleAccept = (e) => {
        setAccept(e.target.checked)
    }

    const handleLocal = (e) => {
        setLocal(e.target.value)
    }

    useEffect(() => {
        handleNext(accept && (local != "none") && (local != "0") && (local != "N"))
    });

    return (
        <div className="step1 inner-container">
            <h4>Detalles de Local {loguedIn ? " - Logueado" : "- No logueado"}</h4>
            <p>Seleccioná el local que necesita de nuestro servicio o agregá un local nuevo a tu lista.</p>
            <div className="form">
                {loguedIn ? <CleanType handleAccept={handleAccept} handleLocal={handleLocal}/> : <StepOneNewUser/>}
            </div>
        </div>
    );
}
Wizzard.StepOne = StepOne;

const StepTwo = ({handleNext, loguedIn}) => {
    // If no select, ant this value is any distinct of 'unique', 'selection' or 'urgent', then next conditions should be false (in this case 'none')
    const [modality, setModality] = useState('selection');

    // Inputs from 'unique'
    const [uniqueDate, setUniqueDate] = useState('none');
    const [uniqueIsFlexible, setUniqueIsFlexible] = useState(false);
    const [uniqueTimeZone, setUniqueTimeZone] = useState('none');

    const handleUniqueDate = (e) => {
        setUniqueDate(e.target.value);
    }

    const isFlexible = (flexible) => {
        setUniqueIsFlexible(flexible);
    }

    const handleUniqueTimeZone = (e) => {
        setUniqueTimeZone(e.target.value);
    }

    // Inputs from 'suscription'
    const [days, setDays] = useState([]);
    const [suscriptionDate, setSuscriptionDate] = useState('none');
    const [suscriptionIsFlexible, setSuscriptionIsFlexible] = useState(false);
    const [suscriptionTimeZone, setSuscriptionTimeZone] = useState('none');

    const handleSuscriptionDate = (e) => {
        setSuscriptionDate(e.target.value);
    }

    const isFlexibleSuscription = (flexible) => {
        setSuscriptionIsFlexible(flexible);
    }

    const handleSuscriptionTimeZone = (e) => {
        setSuscriptionTimeZone(e.target.value);
    }

    const handleSuscriptionDays = (selectedDay, day) => {
        let newDays = [...days];
        const i = newDays.indexOf(day);
        if(i !== -1) {
            if(!selectedDay) {
                newDays = newDays.filter(e => e !== day);
                setDays(newDays);
            }
        } else {
            if(selectedDay) {
                newDays.push(day);
                setDays(newDays);
            }
        }
    }

    // Inputs from 'urgent'
    const [urgentDate, setUrgentDate] = useState('none');
    const [urgentIsFlexible, setUrgentIsFlexible] = useState(false);
    const [urgentTimeZone, setUrgentTimeZone] = useState('none');

    const handleUrgentDate = (e) => {
        setUrgentDate(e.target.value);
    }

    const isFlexibleUrgent = (flexible) => {
        setUrgentIsFlexible(flexible);
    }

    const handleUrgentTimeZone = (e) => {
        setUrgentTimeZone(e.target.value);
    }

    useEffect(() => {
        const validUnique = 
            modality === 'unique' && 
            uniqueDate !== 'none' &&  
            (uniqueIsFlexible || (!uniqueIsFlexible && uniqueTimeZone !== 'none' && uniqueTimeZone !== '0'));
        const validSuscription = 
            modality === 'suscription' && 
            days.length > 0 &&
            suscriptionDate !== 'none' &&  
            (suscriptionIsFlexible || (!suscriptionIsFlexible && suscriptionTimeZone !== 'none' && suscriptionTimeZone !== '0'));
        const validUrgent = 
            modality === 'urgent' && 
            urgentDate !== 'none' &&  
            (urgentIsFlexible || (!urgentIsFlexible && urgentTimeZone !== 'none' && urgentTimeZone !== '0'));
        handleNext(validUnique || validSuscription || validUrgent);
    });

    return (
        <div className="step2 inner-container">
            <h4>Frecuencia</h4>
            <p>Con nuestro servicio recurrente ahorrá y despreocupate por completo de tus vidrieras.</p>
            <div className="form">
                <Modalities handleModality={setModality}/>
                {modality === 'unique' ? <UniqueSection isNewUser={!loguedIn} handleUniqueDate={handleUniqueDate} isFlexible={isFlexible} handleUniqueTimeZone={handleUniqueTimeZone}/> : <></>}
                {modality === 'suscription' ? <SuscriptionSection isNewUser={!loguedIn} handleSuscriptionDays={handleSuscriptionDays} handleSuscriptionDate={handleSuscriptionDate} isFlexibleSuscription={isFlexibleSuscription} handleSuscriptionTimeZone={handleSuscriptionTimeZone}/> : <></>}
                {modality === 'urgent' ? <UrgentSection isNewUser={!loguedIn} handleUrgentDate={handleUrgentDate} isFlexibleUrgent={isFlexibleUrgent} handleUrgentTimeZone={handleUrgentTimeZone}/> : <></>}
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
        <div className="wizard-steps card-page-header">
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

const Footer = ({enableNext, incrementStep}) => {
    return (
        <div className="wizard-footer card-page-footer">
            <div className="inner-container">
                <button className="btn btn-primary" onClick={incrementStep} disabled={!enableNext}>Siguiente</button>	
            </div>
        </div>
    );
}
Wizzard.Footer = Footer;

export default Wizzard;