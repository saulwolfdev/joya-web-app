const InputLocalName = () => {
    return (
        <div className="form-element">
            <label htmlFor="nombre_local" className="form-label">Nombre del local</label>
            <input type="text" className="form-control" placeholder="Nombre del local..." name="nombre_local"/>
        </div>
    );
}

export default InputLocalName;