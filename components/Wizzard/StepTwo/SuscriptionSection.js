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

const Day = (day) => {
    return (
        <div className="col-4 col-lg-2">
            <input type="checkbox" name="freq-suscr-dia" className="btn-check" id={day.key} autoComplete="off"/>
            <label className="btn btn-outline-form" htmlFor="freq-suscr-dia-ju">{day.value}</label>
        </div>
    );
}

const SuscriptionSection = ({handleSuscriptionDays, handleSuscriptionDate, isFlexibleSuscription, handleSuscriptionTimeZone}) => {
    return (
        <div className="frequency-form active" id="freq-suscripcion">
            <p><strong>Seleccioná los días de la semana que necesitás el servicio:</strong></p>
            <p>Obtendrás un 10% de descuento si contratás una vez por semana, 15% si contratás 2 veces por semana, y 20% si contratás 3 veces por semana!</p>
            <div className="row">
                { days.map((day) => {return <Day day={day} key={day.key}/>}) }
            </div>
            <Schedule handleDate={handleSuscriptionDate} isFlexible={isFlexibleSuscription} handleTimeZone={handleSuscriptionTimeZone}/>  // TODO primera visita de texto
        </div>
    );
}

export default SuscriptionSection;