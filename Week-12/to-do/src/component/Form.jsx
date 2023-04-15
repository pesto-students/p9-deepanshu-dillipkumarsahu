

const Form = ({ children, handleFormSubmit }) => (
    <form onSubmit={handleFormSubmit}>
        {children}
    </form>
)

export default Form;