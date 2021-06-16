import OrderDetails from './OrderDetails'

const InputLocalName = ({inputDirection, inputLocalName, handleInputLocalName}) => {
    return (
        <>
            <div className="form-element">
                <label htmlFor="local" className="form-label">Nombre del local</label>
                <input type="text" 
                    className="form-control" 
                    id="inputLocalName" 
                    aria-describedby="direccionHelp" 
                    aria-label="Nombre del local..."
                    placeholder="Nombre del local..." 
                    name="local" 
                    value={inputLocalName} 
                    onChange={handleInputLocalName}
                />
            </div>
            <OrderDetails inputDirection={inputDirection}/>
        </>
    );
}

export default InputLocalName;