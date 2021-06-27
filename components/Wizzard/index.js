import React,{useState, useEffect} from 'react';
import InfoManagement from './StepOne/InfoManagement'
import Modalities from './StepTwo/Modalities'
import UniqueSection from './StepTwo/UniqueSection'
import SuscriptionSection from './StepTwo/SuscriptionSection'
import UrgentSection from './StepTwo/UrgentSection'
import CardData from './StepThree/CardData'
import PurchaseDetails from './StepThree/PurchaseDetails';
import SignInModal from './../SignInModal'
import SignUpModal from './../SignUpModal'
import { getAuth } from 'firebase/auth';
import { prepareUserInfo } from '../../helpers'

const Wizzard = ({direction}) => {
    const [step, setStep] = useState(1);

    const [loguedIn, setLoguedIn] = useState(false);
    const [user,setUser] = useState(null);
    const [enableNext,setEnableNext] = useState(true);

    const [showSingnIn, setShowSingnIn] = useState(false);
    const [showSingnUp, setShowSingnUp] = useState(false);

    const closeSignInModalHandler = (close) => setShowSingnIn(!close);
    const closeSignUpModalHandler = (close) => setShowSingnUp(!close);
    const onSuccessSignIn = () => setLoguedIn(true);

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
        	<Wizzard.Steps step={step}/>
            <div className="wizard-content card-page-content">
                {step === 1 ? <Wizzard.StepOne direction={direction} handleNext={handleNext} loguedIn={loguedIn} close={closeSignInModalHandler}/> : <></>}
                {step === 2 ? <Wizzard.StepTwo handleNext={handleNext} loguedIn={loguedIn}/> : <></>}
                {step === 3 ? <Wizzard.StepThree/> : <></>}
            </div>
            <Wizzard.Footer enableNext={enableNext} incrementStep={incrementStep}/>
            <SignInModal onSuccess={onSuccessSignIn} show={showSingnIn} close={closeSignInModalHandler} showSignUp={setShowSingnUp}/>
            <SignUpModal show={showSingnUp} close={closeSignUpModalHandler} showSignIn={setShowSingnIn}/>
        </>
    );
}

const StepOne = ({handleNext, loguedIn, close, direction}) => {

    const [accept, setAccept] = useState(false);
    const handleAccept = (e) => {
        setAccept(e.target.value);
    }

    const [inputLocalName, setInputLocalName] = useState('');
    const handleInputLocalName = (e) => {
        setInputLocalName(e.target.value);
    }

    const [localOption, setLocalOption] = useState('select a location');
    const handleOptionLocal = (e) => {
        setLocalOption(e.target.value)
    }

    const [localExtraIndication, setLocalExtraIndication] = useState('');
    const handleLocalExtraIndication = (e) => {
        setLocalExtraIndication(e.target.value);
    }

    const [statusEdit, setStatusEdit] = useState(false);
    const handleStatusEdit = (value) => {
        setStatusEdit(value);
    }

    // Posible values: 'select a location', 'new local', and custom options with uuid?
    const [inputDirection, setInputDirection] = useState('');
    const handleInputDirection = (e) => {
        setInputDirection(e.target.value)
    }

    const [interactiveFlag, setInteractiveFlag] = useState(false);
    const handleInteractiveFlag = (value) => {
        setInteractiveFlag(value);
    }

    const values = [
        ["select a location", "Seleccioná un local"],
        ["new local", "+ Nuevo local"]
    ]

    const mockValues = [
        ["select a location", "Seleccioná un local"],
        ["local1", "Local 1"],
        ["local2", "Local 2"],
        ["new local", "+ Nuevo local"]
    ]

    useEffect(() => { 
        const flag = true;
        handleNext(flag);
        if(direction !== 'new' && localOption === 'select a location' && !interactiveFlag) {
            setLocalOption('new local');
            setInputDirection(direction);
            setInteractiveFlag(true);
        }
    });

    return (
        <>
        <div className="step1 inner-container">
            <h4>Detalles de Local</h4>
            <p>{ loguedIn ?
                "Seleccioná el local que necesita de nuestro servicio o agregá un local nuevo a tu lista." :
                "Completá la información de tu vidriera. Ya tenés un local registrado? "}
                { loguedIn ? <></> : <a href="#" onClick={() => close(false)} className="link-text">Iniciá sesión.</a>}</p>
                
            <div className="form">
                <InfoManagement 
                    loguedIn={loguedIn} 
                    close={close} 
                    direction={direction}
                    handleInputLocalName={handleInputLocalName}
                    directions={loguedIn ? mockValues : values}
                    currentDirection={direction}
                    handleOptionLocal={handleOptionLocal}
                    handleLocalExtraIndication={handleLocalExtraIndication}
                    handleInputDirection={handleInputDirection}
                    inputDirection={inputDirection}
                    statusEdit={statusEdit}
                    handleStatusEdit={handleStatusEdit}
                />
            </div>
        </div>
        </>
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
                    <CardData/>
                    <PurchaseDetails/>
                </div>
            </div>
    );
}
Wizzard.StepThree = StepThree;

const Steps = ({step}) => {
    return (
        <div className="wizard-steps card-page-header">
            <ul className="inner-container">
                <li className="title"><span className="d-none d-md-inline">Tu solicitud:</span><span className="d-md-none">Pasos:</span></li>
                <li className={"step " + (step === 1 ? "step1" : "")}><i className="fal fa-store"/><span className={step === 1 ? "d-none d-lg-inline" : "d-none d-md-inline"}>Detalles del local</span></li>
                <li className="arrow"></li>
                <li className={"step " + (step === 2 ? "step2" : "")}><i className="fal fa-calendar-alt"/><span className={step === 2 ? "d-none d-lg-inline" : "d-none d-md-inline"}>Día y hora</span></li>
                <li className="arrow"></li>
                <li className={"step " + (step === 3 ? "step3" : "")}><i className="fal fa-credit-card"/><span className={step === 3 ? "d-none d-lg-inline" : "d-none d-md-inline"}>Pago</span></li>
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