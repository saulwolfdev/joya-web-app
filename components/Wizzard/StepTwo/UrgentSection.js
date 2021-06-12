import Schedule from './Schedule'

const UrgentSection = ({isNewUser, handleUrgentDate, isFlexibleUrgent, handleUrgentTimeZone}) => {
    return (
        <div className="frequency-form active" id="freq-urgencia">
            <div className="dev-note">
                Esto es igual en formato a la frecuencia única. Probablemente sólo aplique para usuarios registrados y esté deshabilitado para otros. Consultar reglas de negocio al cliente.
            </div>
            <Schedule isNewUser={isNewUser} handleDate={handleUrgentDate} isFlexible={isFlexibleUrgent} handleTimeZone={handleUrgentTimeZone}/>
        </div>
    );
}

export default UrgentSection;