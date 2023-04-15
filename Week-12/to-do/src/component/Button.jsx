

const Button = ({ label, type = "button", icon = null, onClick, className }) => (
    <button type={type} onClick={onClick} className={className}>
        {icon && <i className={`fa ${icon}`} style={{ marginRight: label && '5px' }}></i>}
        {label}
    </button>
)
export default Button;
