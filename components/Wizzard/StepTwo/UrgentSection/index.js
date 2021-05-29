const UrgentSection = () => {
    return (
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
    );
}

export default UrgentSection;