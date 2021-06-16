import Select from '../../Select'

const InputLocal = ({close, handleOptionLocal, direction}) => {

    const values = [
        ["select a location", "Seleccioná un local"],
        ["new local", "+ Nuevo local"],
        ["local1", "Local 1"],
        ["local2", "Local 2"]
    ]

    return (
        <div className="form-element">
            <label htmlFor="local" className="form-label">Local</label>
            <Select name="local" handleOptionLocal={handleOptionLocal} values={values} selected={direction !== "new" ? "new local" : "select a location"} disabled={false}/>
            <p className="form-text importante">Ya tenés cuenta en Joya? <a href="#" onClick={() => close(false)} className="link-text">Iniciá sesión.</a></p> 
        </div>  
    );
}

export default InputLocal;