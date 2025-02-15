/* eslint-disable react/prop-types */
function TodoItem({ task, removeTask }) {
    return (
        <li>
            {task} <button onClick={removeTask}>Delete</button>
        </li>
    );
}

export default TodoItem;