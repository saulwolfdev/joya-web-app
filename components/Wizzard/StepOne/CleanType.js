import Img from '../../Img';
import InputLocalName from './InputLocalName'
import { useState, useEffect } from 'react';

const CleanType = ({handleAccept, direction, inputLocalName, handleInputLocalName}) => {

    const [inputDirection, setInputDirection] = useState('');

    useEffect(() => {
        if(direction !== 'new') {
            setInputDirection(direction);
        }
    });

    return (
        <>
            <InputLocalName inputDirection={inputDirection} inputLocalName={inputLocalName} handleInputLocalName={handleInputLocalName}/>
            
            <div className="form-group row">
                <div className="col-auto d-none d-md-block">
                    <Img src="/ico-balde-form.jpg" alt="Limpiamos tu vidriera" className="img-fluid"/>
                </div>
                <div className="col">
                    <h4>Tipo de limpieza incluida</h4>
                    <p>Vamos a limpiar tus vidrieras de todo tipo de suciedad que sea soluble al agua. No podemos limpiar tus vidrieras de graffitis o pintura al ácido.</p>
                    <p><input name="accept" onChange={handleAccept} type="checkbox"/>Entiendo y acepto lo que está incluido.</p>
                </div>
            </div>
        </>
    );
}

export default CleanType;