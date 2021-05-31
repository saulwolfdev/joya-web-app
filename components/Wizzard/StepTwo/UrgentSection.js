import Schedule from './Schedule'

const UrgentSection = () => {
    return (
        <div className="frequency-form active" id="freq-urgencia">
            <div className="dev-note">
                Esto es igual en formato a la frecuencia única. Probablemente sólo aplique para usuarios registrados y esté deshabilitado para otros. Consultar reglas de negocio al cliente.
            </div>
            <Schedule/>
        </div>
    );
}

export default UrgentSection;