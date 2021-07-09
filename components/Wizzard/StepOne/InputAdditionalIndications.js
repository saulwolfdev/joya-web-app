const InputAdditionalIndications = ({handleLocalExtraIndication}) => {
    return (
        <div className="form-element">
            <label htmlFor="indicaciones" className="form-label">Indicaciones adicionales (opcional)</label>
            <input 
                type="text" 
                className="form-control" 
                placeholder="Número de local en galería, timbre, etc." 
                name="indicaciones" 
                onChange={handleLocalExtraIndication}/>
        </div>
    );
}

export default InputAdditionalIndications;