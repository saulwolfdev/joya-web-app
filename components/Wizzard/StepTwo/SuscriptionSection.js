import Schedule from './Schedule'

const SuscriptionSection = () => {
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
            <Schedule/>
        </div>
    );
}

export default SuscriptionSection;