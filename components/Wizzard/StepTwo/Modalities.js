import React,{useState, useEffect} from 'react';
import Img from '../../Img';

const Modalities = ({handleModality}) => {
    const [selectedOption, setSelectedOption] = useState('suscription');

    const subscriptionFrequency = () => {
        let frequencyContainer = document.querySelector('.modalidades');
        let modalidades = frequencyContainer.querySelectorAll('.modalidad');
        modalidades.forEach( (modalidad) => {
            modalidad.addEventListener('click',  (e) => {
                modalidades.forEach((mod) => {
                    mod.classList.remove('active');
                });
                let active = (e.target.matches('.modalidad')) ? e.target : e.target.closest('.modalidad');
                active.classList.add('active');

                let activeForm = active.dataset.form;
                let frequencyForms = document.querySelectorAll('.frequency-form');

                frequencyForms.forEach((form) => {
                    if (form.matches(activeForm)) {
                        form.classList.add('active');
                    } else {
                        form.classList.remove('active');
                    }
                });
            });
        });
    };

    useEffect(()=>{
        subscriptionFrequency();
    });

    return (
        <div className="row modalidades">
            <FrequencyUnique outstanding={selectedOption === 'unique'} handleModality={handleModality} handleClick={setSelectedOption}/>
            <FrequencySuscription outstanding={selectedOption === 'suscription'} handleModality={handleModality} handleClick={setSelectedOption}/>
            <FrecuencyUrgent outstanding={selectedOption === 'urgent'} handleModality={handleModality} handleClick={setSelectedOption}/>
        </div>
    );
}

const FrequencyUnique = ({outstanding, handleModality, handleClick}) => {
    const styleOutstanding = 'modalidad destacada';
    const styleNotOutstanging = 'modalidad';

    const updateModality = (e) => {
        handleClick('unique');
        handleModality('unique')
    };
    
    return (
        <>
        <div className="col-md-4" onClick={e => updateModality(e)}>
            <div className={outstanding ? styleOutstanding : styleNotOutstanging} data-form="#freq-unica">
                <div className="img-block"><Img className="img-fluid" src="/xq_03.jpg"  width="130" height="80" alt="Servicio por única vez"/></div>
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

const FrequencySuscription = ({outstanding, handleModality, handleClick}) => {
    const styleOutstanding = 'modalidad destacada';
    const styleNotOutstanging = 'modalidad';

    const updateModality = (e) => {
        handleClick('suscription');
        handleModality('suscription')
    };

    return (
        <div className="col-md-4" onClick={e => updateModality(e)}>
            <div className={outstanding ? styleOutstanding : styleNotOutstanging} data-form="#freq-suscripcion">
                <div className="img-block"><Img className="img-fluid" src="/xq_02.jpg"  width="130" height="80" alt="Suscripción a limpieza programada"/></div>
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

const FrecuencyUrgent = ({outstanding, handleModality, handleClick}) => {
    const styleOutstanding = 'modalidad destacada';
    const styleNotOutstanging = 'modalidad';

    const updateModality = (e) => {
        handleClick('urgent');
        handleModality('urgent')
    };

    return (
        <div className="col-md-4" onClick={e => updateModality(e)}>
            <div className={outstanding ? styleOutstanding : styleNotOutstanging} data-form="#freq-urgencia">
                <div className="img-block"><Img className="img-fluid" src="/xq_06.jpg"  width="130" height="80" alt="Suscripción a limpieza programada"/></div>
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