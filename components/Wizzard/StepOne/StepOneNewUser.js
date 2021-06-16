import React,{useState, useEffect} from 'react';
import InputLocal from './InputLocal'
import InputDirection from './InputDirection'
import InputLocalName from './InputLocalName'
import InputAdditionalIndications from './InputAdditionalIndications'
import WindowSizeSection from './WindowSizeSection'

const StepOneNewUser = ({close, direction, inputLocalName, handleInputLocalName}) => {

    // Posible values: 'select a location', 'new local', and custom options with uuid?
    const [localOption, setLocalOption] = useState('select a location');
    const [inputDirection, setInputDirection] = useState('');

    const handleOptionLocal = (e) => {
        setLocalOption(e.target.value)
    }

    const handleInputDirection = (e) => {
        setInputDirection(e.target.value)
    }

    const values = [
        ["select a location", "Seleccioná un local"],
        ["new local", "+ Nuevo local"]
    ]

    useEffect(() => {
        if(direction !== 'new') {
            setLocalOption('new local');
            setInputDirection(direction);
        }
    });

    return (
        <>
            <InputLocal close={close} handleOptionLocal={handleOptionLocal} direction={direction} values={values}/>
            {
                localOption === 'new local' ? 
                <>
                    <div className="localnuevo block-alternative">
                        <InputDirection inputDirection={inputDirection} handleInputDirection={handleInputDirection}/>
                        <InputLocalName inputDirection={inputDirection} inputLocalName={inputLocalName} handleInputLocalName={handleInputLocalName}/>
                        <InputAdditionalIndications/>
                        <WindowSizeSection/>
                    </div>
                </>
                :
                <>
                </>
            }
            
        </>
    );
}

export default StepOneNewUser;