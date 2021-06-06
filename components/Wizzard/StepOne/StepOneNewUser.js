import InputLocal from './InputLocal'
import InputDirection from './InputDirection'
import InputLocalName from './InputLocalName'
import InputAdditionalIndications from './InputAdditionalIndications'
import WindowSizeSection from './WindowSizeSection'
import Features from './Features'

const StepOneNewUser = () => {
    return (
        <>
            <InputLocal/>
                <div className="localnuevo block-alternative">
                    <InputDirection/>
                    <InputLocalName/>
                    <InputAdditionalIndications/>
                    <WindowSizeSection/>
                </div>
            <Features/>
        </>
    );
}

export default StepOneNewUser;