


const InputField = ({ type, placeholder, value, required, onChange }) => (
    <input
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
    />
)
export default InputField;