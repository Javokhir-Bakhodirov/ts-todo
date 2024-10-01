import React from "react";
import ToDoItem from "./ToDoItem";

interface ToDo {
    id: number;
    text: string;
    completed: boolean;
}

interface ToDoListProps {
    toDos: ToDo[];
    toggleComplete: (id: number) => void;
    deleteToDo: (id: number) => void;
    startEdit: (todo: ToDo) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({
    toDos,
    toggleComplete,
    deleteToDo,
    startEdit,
}) => {
    return (
        <ul className="space-y-4">
            {toDos.length === 0 ? (
                <li className="text-center text-gray-500">No tasks yet!</li>
            ) : (
                toDos.map(todo => (
                    <ToDoItem
                        key={todo.id}
                        todo={todo}
                        toggleComplete={toggleComplete}
                        deleteToDo={deleteToDo}
                        startEdit={startEdit}
                    />
                ))
            )}
        </ul>
    );
};

export default ToDoList;
