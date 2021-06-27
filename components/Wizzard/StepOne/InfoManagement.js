import InputLocal from './InputLocal'
import InputDirection from './InputDirection'
import InputLocalName from './InputLocalName'
import InputAdditionalIndications from './InputAdditionalIndications'
import WindowSizeSection from './WindowSizeSection'
import CleanType from './CleanType'
import OrderDetails from './OrderDetails'

const InfoManagement = (
    {
        close,
        handleInputLocalName, 
        loguedIn, 
        handleAccept, 
        directions, 
        currentDirection, 
        handleOptionLocal, 
        localOption, 
        handleLocalExtraIndication,
        statusEdit,
        inputDirection,
        handleStatusEdit,
        handleInputDirection
    }) => {

    return (
        <>
            <InputLocal loguedIn={loguedIn} close={close} handleOptionLocal={handleOptionLocal} direction={currentDirection} values={directions}/>
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
                    <OrderDetails inputDirection={inputDirection} handleStatusEdit={handleStatusEdit}/>
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