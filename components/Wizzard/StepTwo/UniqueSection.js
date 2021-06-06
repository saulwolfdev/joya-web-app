import Schedule from './Schedule'

const UniqueSection = ({handleUniqueDate, isFlexible, handleUniqueTimeZone}) => {
    return (
        <div className="frequency-form active" id="freq-unica">
            <Schedule handleDate={handleUniqueDate} isFlexible={isFlexible} handleTimeZone={handleUniqueTimeZone}/>
        </div>
    );
}

export default UniqueSection;