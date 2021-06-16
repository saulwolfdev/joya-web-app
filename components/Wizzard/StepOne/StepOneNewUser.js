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
    const handleOptionLocal = (e) => {
        setLocalOption(e.target.value)
    }

    useEffect(() => {
        if(direction !== 'new') {
            setLocalOption('new local');
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
                        <InputDirection/>
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