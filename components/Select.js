const Select = ({ values, handleOptionLocal, selected, disabled}) => {
    return (
        <select
            disabled={disabled}
            defaultValue={selected}
            onChange={e => handleOptionLocal(e)}
            className="form-select"
        >
            {values.map(([value, text]) => (
                <option key={value} value={value}>
                    {text}
                </option>
            ))}
        </select>
    );
}

export default Select;