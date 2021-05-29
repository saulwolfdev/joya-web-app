const SelectionSection = () => {
    return (
        <div className="frequency-form active" id="freq-suscripcion">
            <p><strong>Seleccioná los días de la semana que necesitás el servicio:</strong></p>
            <p>Obtendrás un 10% de descuento si contratás una vez por semana, 15% si contratás 2 veces por semana, y 20% si contratás 3 veces por semana!</p>
            <div className="row">
                <div className="col-4 col-lg-2">
                    <input type="checkbox" name="freq-suscr-dia" className="btn-check" id="freq-suscr-dia-lu" autoComplete="off"/>
                    <label className="btn btn-outline-form" htmlFor="freq-suscr-dia-lu">Lun</label>
                </div>
                <div className="col-4 col-lg-2">
                    <input type="checkbox" name="freq-suscr-dia" className="btn-check" id="freq-suscr-dia-ma" autoComplete="off"/>
                    <label className="btn btn-outline-form" htmlFor="freq-suscr-dia-ma">Mar</label>
                </div>
                <div className="col-4 col-lg-2">
                    <input type="checkbox" name="freq-suscr-dia" className="btn-check" id="freq-suscr-dia-mi" autoComplete="off"/>
                    <label className="btn btn-outline-form" htmlFor="freq-suscr-dia-mi">Mie</label>
                </div>
                <div className="col-4 col-lg-2">
                    <input type="checkbox" name="freq-suscr-dia" className="btn-check" id="freq-suscr-dia-ju" autoComplete="off"/>
                    <label className="btn btn-outline-form" htmlFor="freq-suscr-dia-ju">Jue</label>
                </div>
                <div className="col-4 col-lg-2">
                    <input type="checkbox" name="freq-suscr-dia" className="btn-check" id="freq-suscr-dia-vi" autoComplete="off"/>
                    <label className="btn btn-outline-form" htmlFor="freq-suscr-dia-vi">Vie</label>
                </div>
                <div className="col-4 col-lg-2">
                    <input type="checkbox" name="freq-suscr-dia" className="btn-check" id="freq-suscr-dia-sa" autoComplete="off"/>
                    <label className="btn btn-outline-form" htmlFor="freq-suscr-dia-sa">Sab</label>
                </div>
            </div>
            <div className="row dia-visita">
                <div className="col-lg-2 col-3 col-label">
                    <label htmlFor="freq-unica-dia" className="h4">Día</label>
                </div>
                <div className="col col-field">
                    {/* Contemplar posibilidad de incluir un datepicker de react */}
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

export default SelectionSection;