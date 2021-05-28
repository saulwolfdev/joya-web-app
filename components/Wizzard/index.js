import React,{useState} from 'react';
import InputLocal from './StepOne/InputLocal'
import InputDirection from './StepOne/InputDirection'
import InputLocalName from './StepOne/InputLocalName'
import InputAdditionalIndications from './StepOne/InputAdditionalIndications'
import WindowSizeSection from './StepOne/WindowSizeSection'
import Features from './StepOne/Features'
import CleanType from './StepOne/CleanType'

const Wizzard = () => {
    const [step, setStep] = useState(1);
    return (
        <>
        	<Wizzard.Steps/>
            {step === 1 ? <Wizzard.StepOne/> : <></> }
            <Wizzard.Footer/>
        </>
    );
}

const StepOne = () => {
    return (
        <div className="wizard-content">
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
        </div>
    );
}
Wizzard.StepOne = StepOne;

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