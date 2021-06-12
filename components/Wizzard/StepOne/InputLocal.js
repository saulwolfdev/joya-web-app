const InputLocal = () => {
    return (
        <div className="form-element">
            <label htmlFor="local" className="form-label">Local</label>
            <select name="local" id="" className="form-select">
                <option defaultValue="">Seleccioná un local</option>
                <option value="nuevo">+ Nuevo local</option>
                <option value="local1">Local 1</option>
                <option value="local2">Local 2</option>
            </select>
            <p className="form-text importante">Ya tenés cuenta en Joya? <a href="#" className="link-text">Iniciá sesión.</a></p> 
        </div>  
    );
}

export default InputLocal;