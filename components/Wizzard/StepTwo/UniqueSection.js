import Schedule from './Schedule'

const UniqueSection = ({handleUniqueDate, isFlexible, handleUniqueTimeZone}) => {
    return (
        <div className="frequency-form active" id="freq-unica">
            <Schedule handleUniqueDate={handleUniqueDate} isFlexible={isFlexible} handleUniqueTimeZone={handleUniqueTimeZone}/>
        </div>
    );
}

export default UniqueSection;