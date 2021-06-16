const Select = ({ values, handleOptionLocal, selected, disabled}) => {
    return (
        <select
            disabled={disabled}
            defaultValue={selected}
            onChange={({ target: { value } }) => handleOptionLocal(value)}
            className="form-select"
        >
            {values.map(([value, text]) => (
            <option value={value}>
                {text}
            </option>
            ))}
        </select>
    );
}

export default Select;