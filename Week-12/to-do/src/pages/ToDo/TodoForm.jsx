import { useState } from "react";
import Button from "../../component/Button";
import Form from "../../component/Form";
import InputField from "../../component/InputField";


const TodoForm = ({ todos, setTodos }) => {
    const [newTodo, setNewTodo] = useState("");
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (newTodo) setTodos([...todos, { text: newTodo, completed: false }]);
        setNewTodo("");
    }

    return (
        <Form handleFormSubmit={handleFormSubmit}>
            <InputField
                type="text"
                placeholder="Enter New Item"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <Button label='Add' type='submit' icon='fa-plus-circle' />
        </Form>
    )
}
export default TodoForm;