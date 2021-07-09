import Select from '../../Select'

const InputLocal = ({loguedIn, values, close, handleOptionLocal, direction}) => {

    return (
        <div className="form-element">
            <label htmlFor="local" className="form-label">Local</label>
            <Select name="local" handleOptionLocal={handleOptionLocal} values={values} selected={direction !== "new" ? "new local" : "select a location"} disabled={false}/>
            {loguedIn ?
                <></>
                :
                <p className="form-text importante">Ya tenés cuenta en Joya? <a href="#" onClick={() => close(false)} className="link-text">Iniciá sesión.</a></p>
            }
        </div>  
    );
}

export default InputLocal;