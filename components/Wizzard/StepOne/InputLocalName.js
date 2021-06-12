import OrderDetails from './OrderDetails'

const InputLocalName = ({handleLocal}) => {
    return (
        <>
            <div className="form-element">
                <label htmlFor="local" className="form-label">Nombre del local</label>
                <select className="form-control" onChange={handleLocal} placeholder="Nombre del local..." name="local" aria-label="Nombre del local...">
                    <option defaultValue="0">Seleccioná un local</option>
                    <option defaultValue="1">Correcto</option>
                    <option defaultValue="N">+Nuevo local</option>
                </select>
            </div>
            <OrderDetails/>
        </>
    );
}

export default InputLocalName;