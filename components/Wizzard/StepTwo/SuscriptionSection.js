import React,{useState, useEffect} from 'react';
import Schedule from './Schedule'

const days = [
    {
        key:"freq-suscr-dia-lu",
        value:"Lun"
    },
    {
        key:"freq-suscr-dia-ma",
        value:"Mar"
    },
    {
        key:"freq-suscr-dia-mi",
        value:"Mie"
    },
    {
        key:"freq-suscr-dia-ju",
        value:"Jue"
    },
    {
        key:"freq-suscr-dia-vi",
        value:"Vie"
    },
    {
        key:"freq-suscr-dia-sa",
        value:"Sab"
    }
]

const Day = ({handleDay, day}) => {

    const [selectedDay, setSelectedDay] = useState(false);

    const handleSetSelectedDay = (e) => {
        setSelectedDay(e.target.checked);
    }

    useEffect(() => {
        handleDay(selectedDay, String(day.value));
    });

    return (
        <div className="col-4 col-lg-2">
            <input type="checkbox" name="freq-suscr-dia" className="btn-check" id={day.key} autoComplete="off" onChange={handleSetSelectedDay}/>
            <label className="btn btn-outline-form" htmlFor={day.key}>{day.value}</label>
        </div>
    );
}

const SuscriptionSection = ({isNewUser, handleSuscriptionDays, handleSuscriptionDate, isFlexibleSuscription, handleSuscriptionTimeZone}) => {
    return (
        <div className="frequency-form active" id="freq-suscripcion">
            <p><strong>Seleccioná los días de la semana que necesitás el servicio:</strong></p>
            <p>Obtendrás un 10% de descuento si contratás una vez por semana, 15% si contratás 2 veces por semana, y 20% si contratás 3 veces por semana!</p>
            <div className="row">
                { days.map((day) => {return <Day handleDay={handleSuscriptionDays} day={day} key={day.key}/>}) }
            </div>
            <Schedule isNewUser={isNewUser} handleDate={handleSuscriptionDate} isFlexible={isFlexibleSuscription} handleTimeZone={handleSuscriptionTimeZone}/>
        </div>
    );
}

export default SuscriptionSection;