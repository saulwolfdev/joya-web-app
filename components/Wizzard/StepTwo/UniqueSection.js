import Schedule from './Schedule'

const UniqueSection = ({isNewUser, handleUniqueDate, isFlexible, handleUniqueTimeZone}) => {
    return (
        <div className="frequency-form active" id="freq-unica">
            <Schedule isNewUser={isNewUser} handleDate={handleUniqueDate} isFlexible={isFlexible} handleTimeZone={handleUniqueTimeZone}/>
        </div>
    );
}

export default UniqueSection;