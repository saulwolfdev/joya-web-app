import React,{useState, useEffect} from 'react';
import InputLocal from './InputLocal'
import InputDirection from './InputDirection'
import InputLocalName from './InputLocalName'
import InputAdditionalIndications from './InputAdditionalIndications'
import WindowSizeSection from './WindowSizeSection'
import CleanType from './CleanType'
import OrderDetails from './OrderDetails'

const InfoManagement = ({close, direction, inputLocalName, handleInputLocalName, handleInfo, loguedIn}) => {

    // Posible values: 'select a location', 'new local', and custom options with uuid?
    const [localOption, setLocalOption] = useState('select a location');
    const [inputDirection, setInputDirection] = useState('');
    const [interactiveFlag, setInteractiveFlag] = useState(false);
    const [statusEdit, setStatusEdit] = useState(false);
    const [accept, setAccept] = useState(false);

    const [localExtraIndication, setLocalExtraIndication] = useState('');
    const handleLocalExtraIndication = (e) => {
        setLocalExtraIndication(e.target.value);
    }

    const handleAccept = (e) => {
        setAccept(e.target.value);
    }

    const handleOptionLocal = (e) => {
        setLocalOption(e.target.value)
    }

    const handleInputDirection = (e) => {
        setInputDirection(e.target.value)
    }

    const handleEdit = (infoLocal) => {
        setStatusEdit(true);
        setInputDirection(infoLocal.direction)
        console.log(infoLocal);
    }

    const values = [
        ["select a location", "Seleccioná un local"],
        ["new local", "+ Nuevo local"]
    ]

    const mockValues = [
        ["select a location", "Seleccioná un local"],
        ["local1", "Local 1"],
        ["local2", "Local 2"],
        ["new local", "+ Nuevo local"]
    ]

    useEffect(() => {
        if(direction !== 'new' && localOption === 'select a location' && !interactiveFlag) {
            setLocalOption('new local');
            setInputDirection(direction);
            setInteractiveFlag(true);
        }
        handleInfo({
            localOption,
            inputDirection,
            inputLocalName,
            localExtraIndication,
            windowsSize: {}
        })
    });

    return (
        <>
            <InputLocal loguedIn={loguedIn} close={close} handleOptionLocal={handleOptionLocal} direction={direction} values={loguedIn ? mockValues : values}/>
            {
                localOption === 'new local' || statusEdit ? 
                <>
                    <div className="localnuevo block-alternative">
                        <InputDirection inputDirection={inputDirection} handleInputDirection={handleInputDirection}/>
                        <InputLocalName handleInputLocalName={handleInputLocalName}/>
                        <InputAdditionalIndications handleLocalExtraIndication={handleLocalExtraIndication}/>
                        <WindowSizeSection/>
                    </div>
                </>
                :
                (localOption !== 'select a location' ? 
                    <OrderDetails inputDirection={inputDirection} handleEdit={handleEdit}/>
                    :
                    <>
                    </>
                )
            }
            <CleanType handleAccept={handleAccept} />
        </>
    );
}

export default InfoManagement;