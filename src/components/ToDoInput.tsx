import React, { useState } from "react";

interface ToDoInputProps {
    addToDo: (newToDo: string) => void;
}

const ToDoInput: React.FC<ToDoInputProps> = ({ addToDo }) => {
    const [newToDo, setNewToDo] = useState<string>("");

    const handleAdd = () => {
        addToDo(newToDo);
        setNewToDo("");
    };

    return (
        <div className="flex mb-4">
            <input
                type="text"
                value={newToDo}
                onChange={e => setNewToDo(e.target.value)}
                className="input input-bordered w-full mr-2"
                placeholder="Add a new task..."
            />
            <button onClick={handleAdd} className="btn btn-primary">
                Add
            </button>
        </div>
    );
};

export default ToDoInput;
