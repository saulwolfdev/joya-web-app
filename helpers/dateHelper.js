export function getFormattedDate(date) {
    return date instanceof Date ? formatDate(parseDate(date)) : ""
}

const parseDate = (date) => {
    return date.toLocaleDateString("es-ES", options)
}

const formatDate = (date) => {
    const separator = ","
    if (date.includes(separator)) { // Extra validation
        let substrings = date.split(separator)
        if (substrings.length === 2) {
            substrings[0] = formatWeekDay(substrings[0])
            return substrings.join(".");
        } 
    }
    return date;
}

const formatWeekDay = (weekDay) => {
    let firstChar = weekDay.substring(0, 1);
    let nextChars = weekDay.substring(1, 3);
    return firstChar.toUpperCase() + nextChars;
}

export function plus(date, days) {
    date.setDate(date.getDate() + days)
} 

const options = { weekday: 'long', month: 'long', day: 'numeric' };