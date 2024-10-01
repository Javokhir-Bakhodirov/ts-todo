import React, { useState, useEffect } from "react";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import EditModal from "./EditModal";

interface ToDoItem {
    id: number;
    text: string;
    completed: boolean;
}

const ToDo: React.FC = () => {
    const [toDos, setToDos] = useState<ToDoItem[]>([]);
    const [editingToDo, setEditingToDo] = useState<ToDoItem | null>(null);

    useEffect(() => {
        const storedToDos = localStorage.getItem("todos");
        if (storedToDos) {
            setToDos(JSON.parse(storedToDos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(toDos));
    }, [toDos]);

    const addToDo = (newToDo: string) => {
        if (newToDo.trim() === "") return;
        const newToDoItem: ToDoItem = {
            id: Date.now(),
            text: newToDo,
            completed: false,
        };
        setToDos([...toDos, newToDoItem]);
    };

    const toggleComplete = (id: number) => {
        setToDos(
            toDos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteToDo = (id: number) => {
        setToDos(toDos.filter(todo => todo.id !== id));
    };

    const startEdit = (todo: ToDoItem) => {
        setEditingToDo(todo);
    };

    const saveEdit = (id: number, newText: string) => {
        setToDos(
            toDos.map(todo =>
                todo.id === id ? { ...todo, text: newText } : todo
            )
        );
        setEditingToDo(null);
    };

    const cancelEdit = () => {
        setEditingToDo(null);
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
            <h1 className="text-2xl font-bold mb-4 text-center">ToDo List</h1>
            <ToDoInput addToDo={addToDo} />
            <ToDoList
                toDos={toDos}
                toggleComplete={toggleComplete}
                deleteToDo={deleteToDo}
                startEdit={startEdit}
            />
            {editingToDo && (
                <EditModal
                    todo={editingToDo}
                    saveEdit={saveEdit}
                    cancelEdit={cancelEdit}
                />
            )}
        </div>
    );
};

export default ToDo;
