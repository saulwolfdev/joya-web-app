const InputAdditionalIndications = () => {
    return (
        <div className="form-element">
            <label htmlFor="indicaciones" className="form-label">Indicaciones adicionales (opcional)</label>
            <input type="text" className="form-control" placeholder="Número de local en galería, timbre, etc." name="indicaciones"/>
        </div>
    );
}

export default InputAdditionalIndications;