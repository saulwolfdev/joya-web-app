import React,{useState, useEffect} from 'react';
import InputLocal from './InputLocal'
import InputDirection from './InputDirection'
import InputLocalName from './InputLocalName'
import InputAdditionalIndications from './InputAdditionalIndications'
import WindowSizeSection from './WindowSizeSection'
import Features from './Features'

const StepOneNewUser = ({close, direction}) => {

    // Posible values: 'select a location', 'new local', and custom options with uuid?
    const [localOption, setLocalOption] = useState('select a location');
    const [inputDirection, setInputDirection] = useState('');

    const handleOptionLocal = (e) => {
        setLocalOption(e.target.value)
    }

    const handleInputDirection = (e) => {
        setInputDirection(e.target.value)
    }

    useEffect(() => {
        if(direction !== 'new') {
            setLocalOption('new local');
            setInputDirection(direction);
        }
        console.log(localOption);
    });

    return (
        <>
            <InputLocal close={close} handleOptionLocal={handleOptionLocal}/>
            {
                localOption === 'new local' ? 
                <>
                    <div className="localnuevo block-alternative">
                        <InputDirection inputDirection={inputDirection} handleInputDirection={handleInputDirection}/>
                        <InputLocalName/>
                        <InputAdditionalIndications/>
                        <WindowSizeSection/>
                    </div>
                    <Features/>
                </>
                :
                <>
                </>
            }
            
        </>
    );
}

export default StepOneNewUser;