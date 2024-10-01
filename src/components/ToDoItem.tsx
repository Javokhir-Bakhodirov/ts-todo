import React from "react";

interface ToDoItemProps {
    todo: {
        id: number;
        text: string;
        completed: boolean;
    };
    toggleComplete: (id: number) => void;
    deleteToDo: (id: number) => void;
    startEdit: (todo: { id: number; text: string; completed: boolean }) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({
    todo,
    toggleComplete,
    deleteToDo,
    startEdit,
}) => {
    return (
        <li className="flex justify-between items-center">
            <span
                className={`cursor-pointer ${
                    todo.completed ? "line-through text-gray-500" : ""
                }`}
                onClick={() => toggleComplete(todo.id)}>
                {todo.text}
            </span>
            <div className="flex space-x-2">
                <button
                    onClick={() => startEdit(todo)}
                    className="btn btn-warning btn-sm">
                    Edit
                </button>
                <button
                    onClick={() => deleteToDo(todo.id)}
                    className="btn btn-error btn-sm">
                    Delete
                </button>
            </div>
        </li>
    );
};

export default ToDoItem;
