import { useState } from "react";
import List from "./List";
import BaseLayout from "../../layout/BaseLayout";
import TodoForm from "./TodoForm";

const ToDo = () => {
    const [todos, setTodos] = useState([]);

    return (
        <BaseLayout title="React To-Do List">
            <TodoForm todos={todos} setTodos={setTodos} />
            <hr />
            <List items={todos} setItems={setTodos} />
        </BaseLayout>
    )
}
export default ToDo;