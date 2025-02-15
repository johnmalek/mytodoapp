/* eslint-disable react/prop-types */
import TodoItem from './TodoItem'

function TodoList({ tasks, removeTask }) {
    return (
        <ul>
            {tasks.map((task, index) => (
                <TodoItem key={index} task={task} removeTask={() => removeTask(index)} />
            ))}
        </ul>
    );
}

export default TodoList;