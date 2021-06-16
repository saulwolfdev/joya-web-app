import React,{useState, useEffect} from 'react';
import Img from '../../Img';
import InputLocal from './InputLocal'

const CleanType = ({close, handleAccept, direction, inputLocalName, handleInputLocalName}) => { // TODO review

    const [localOption, setLocalOption] = useState('select a location');

    const handleOptionLocal = (e) => {
        setLocalOption(e.target.value)
    }

    const mockValues = [
        ["select a location", "Seleccioná un local"],
        ["local1", "Local 1"],
        ["local2", "Local 2"],
        ["new local", "+ Nuevo local"]
    ]

    useEffect(() => {
        if(direction !== 'new') {
            setLocalOption('new local');
        }
    });

    return (
        <>
            <InputLocal close={close} handleOptionLocal={handleOptionLocal} direction={direction} values={mockValues}/>
            
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