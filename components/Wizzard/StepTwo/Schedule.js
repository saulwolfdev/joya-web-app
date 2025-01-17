const Schedule = ({isNewUser, handleDate, isFlexible, handleTimeZone}) => {
    return (
        <>
            <div className="row dia-visita">
                <div className="col-lg-2 col-3 col-label">
                    <label htmlFor="freq-unica-dia" className="h4">{isNewUser ? "Día" : "Primera visita"}</label>
                </div>
                <div className="col col-field">
                    {/*Contemplar posibilidad de incluir un datepicker de react*/}
                    <input type="date" name="freq-unica-dia" className="form-control" onChange={handleDate}/>
                </div>
            </div>
            <div className="row franja-horaria">
                <div className="col-lg-2 col-3 col-label">
                    <label htmlFor="freq-unica-hora" className="h4">Horario</label>
                </div>
                <div className="col col-field">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="freq-unica-hora" id="freq-unica-hora1" onChange={e=>{isFlexible(e.target.checked)}}/>
                        <label className="form-check-label" htmlFor="freq-unica-hora1">
                        <strong>Flexible.</strong> Entre las 9 y las 16hs. <span className="descuento">-10%</span>
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="freq-unica-hora" id="freq-unica-hora2" onChange={e=>{isFlexible(!e.target.checked)}}/>
                        <label className="form-check-label" htmlFor="freq-unica-hora2">
                        <strong>Franja horaria específica</strong>
                        </label>
                        <select className="form-select franja-horaria" aria-label="Franja horaria específica" onChange={handleTimeZone}>
                            <option defaultValue="0">Elegir franja</option>
                            <option value="1">franja 1</option>
                            <option value="2">franja 2</option>
                            <option value="3">franja 3</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Schedule;