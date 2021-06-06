const InputLocalName = ({handleLocal}) => {
    return (
        <div className="form-element">
            <label htmlFor="local" className="form-label">Nombre del local</label>
            <select className="form-control" onChange={handleLocal} placeholder="Nombre del local..." name="local" aria-label="Nombre del local...">
                <option defaultValue="0">Seleccioná un local</option>
                <option value="1">Correcto</option>
                <option value="N">+Nuevo local</option>
            </select>
        </div>
    );
}

export default InputLocalName;