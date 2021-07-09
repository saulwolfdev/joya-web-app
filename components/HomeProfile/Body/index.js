import React,{useState} from 'react';

const Body = () => {

    // TODO with firebase fill fields

    // Dont use form

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState(''); // fill with firebase
    const [password, setPassword] = useState(''); // dont fill with firebase
    const [repeatPassword, setRepeatPassword] = useState(''); // dont fill with firebase
    const [businessName, setBusinessName] = useState('');
    const [cuit, setCuit] = useState('');
    const [direction, setDirection] = useState('');

    const handleFirstName = (e) => setFirstName(e.currentTarget.value);
    const handleLastName = (e) => setLastName(e.currentTarget.value);
    const handlePhone = (e) => setPhone(e.currentTarget.value);
    const handlePassword = (e) => setPassword(e.currentTarget.value);
    const handleRepeatPassword = (e) => setRepeatPassword(e.currentTarget.value);
    const handleBusinessName = (e) => setBusinessName(e.currentTarget.value);
    const handleCuit = (e) => setCuit(e.currentTarget.value);
    const handleDirection = (e) => setDirection(e.currentTarget.value);
    
    const saveChanges = () => {
        // TODO use states with firebase
    }

    return (
        <div className="row">
            <div className="col-xl-9">
                <h3>Datos de cuenta</h3>
                <div className="form form-block">
                    <div className="row">
                        <div className="col form-element">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" name="nombre" value={firstName} onChange={handleFirstName}/>
                        </div>
                        <div className="col form-element">
                            <label htmlFor="apellido" className="form-label">Apellido</label>
                            <input type="text" className="form-control" name="apellido" value={lastName} onChange={handleLastName}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col form-element">
                            <label htmlFor="telefono" className="form-label">Teléfono</label>
                            <input type="text" className="form-control" name="telefono" value={phone} onChange={handlePhone}/>
                        </div>
                        <div className="col form-element">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" name="email" defaultValue="carolina@kentucky.com.ar" disabled />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col form-element">
                            <label htmlFor="contrasenia" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" name="contrasenia" value={password} onChange={handlePassword}/>
                        </div>
                        <div className="col form-element">
                            <label htmlFor="repetircontrasenia" className="form-label">Repetir contraseña</label>
                            <input type="text" className="form-control" name="repetircontrasenia" value={repeatPassword} onChange={handleRepeatPassword}/>
                        </div>
                    </div>
                </div>	
                <div className="form form-block">
                    <h4>Datos de facturación:</h4>
                    <div className="form-element">
                        <label htmlFor="razonsocial" className="form-label">Razón social</label>
                        <input type="text" className="form-control" name="razonsocial" value={businessName} onChange={handleBusinessName}/>
                    </div>
                    <div className="form-element">
                        <label htmlFor="cuit" className="form-label">CUIT</label>
                        <input type="text" className="form-control" name="cuit" value={cuit} onChange={handleCuit}/>
                    </div>
                    <div className="form-element">
                        <label htmlFor="direccion" className="form-label">Dirección</label>
                        <input type="text" className="form-control" name="direccion" value={direction} onChange={handleDirection}/>
                    </div>
                </div>	
                <div className="btn-set">
                    <button className="btn btn-primary" onClick={saveChanges}>Guardar cambios</button>
                </div>
            </div>
        </div>
    );
}

export default Body;