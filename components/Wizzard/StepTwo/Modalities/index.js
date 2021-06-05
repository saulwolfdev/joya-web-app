import React,{useState} from 'react';
import Image from 'next/image'

const Modalities = ({handleModality}) => {
    const [selectedOption, setSelectedOption] = useState('suscription');

    return (
        <div className="row modalidades" onClick={() => handleModality(selectedOption)}>
            <FrequencyUnique outstanding={selectedOption === 'unique'} handleClick={setSelectedOption}/>
            <FrequencySuscription outstanding={selectedOption === 'suscription'} handleClick={setSelectedOption}/>
            <FrecuencyUrgent outstanding={selectedOption === 'urgent'} handleClick={setSelectedOption}/>
        </div>
    );
}

const FrequencyUnique = ({outstanding, handleClick}) => {
    const styleOutstanding = 'modalidad destacada';
    const styleNotOutstanging = 'modalidad';
    return (
        <>
        <div className="col-md-4" onClick={() => handleClick('unique')}>
            <div className={outstanding ? styleOutstanding : styleNotOutstanging} data-form="#freq-unica">
                <div className="img-block"><img className="img-fluid" src="/xq_03.jpg"  width="130" height="80" alt="Servicio por única vez"/></div>
                <div className="text">
                    <h5 className="title">Única vez</h5>
                    <p>Contratás una vez y listo!</p>
                </div>
            </div>
        </div>        
        </>
    );
}
Modalities.FrequencyUnique = FrequencyUnique;

const FrequencySuscription = ({outstanding, handleClick}) => {
    const styleOutstanding = 'modalidad destacada';
    const styleNotOutstanging = 'modalidad';
    return (
        <div className="col-md-4" onClick={() => handleClick('suscription')}>
            <div className={outstanding ? styleOutstanding : styleNotOutstanging} data-form="#freq-suscripcion">
                <div className="img-block"><img className="img-fluid" src="/xq_02.jpg"  width="130" height="80" alt="Suscripción a limpieza programada"/></div>
                <div className="text">
                    <h5 className="title">Suscripción</h5>
                    <p>Descuentos desde 10% según la frecuencia que elijas!</p>
                    <a href="#" className="btn-tertiary">Ver todos los beneficios</a>
                </div>
            </div>
        </div>
    );
}
Modalities.FrequencySuscription = FrequencySuscription;

const FrecuencyUrgent = ({outstanding, handleClick}) => {
    const styleOutstanding = 'modalidad destacada';
    const styleNotOutstanging = 'modalidad';
    return (
        <div className="col-md-4" onClick={() => handleClick('urgent')}>
            <div className={outstanding ? styleOutstanding : styleNotOutstanging} data-form="#freq-urgencia">
                <div className="img-block"><img className="img-fluid" src="/xq_06.jpg"  width="130" height="80" alt="Suscripción a limpieza programada"/></div>
                <div className="text">
                    <h5 className="title">Urgencia</h5>
                    <p>Vamos a tu local en el día, lo más rápido posible.</p>
                </div>
            </div>
        </div>
    );
}
Modalities.FrecuencyUrgent = FrecuencyUrgent;

export default Modalities;