import React, { useState } from "react";

interface EditModalProps {
    todo: {
        id: number;
        text: string;
        completed: boolean;
    };
    saveEdit: (id: number, newText: string) => void;
    cancelEdit: () => void;
}

const EditModal: React.FC<EditModalProps> = ({
    todo,
    saveEdit,
    cancelEdit,
}) => {
    const [newText, setNewText] = useState<string>(todo.text);

    const handleSave = () => {
        if (newText.trim() !== "") {
            saveEdit(todo.id, newText);
        }
    };

    return (
        <div className="modal modal-open">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Edit Task</h3>
                <input
                    type="text"
                    value={newText}
                    onChange={e => setNewText(e.target.value)}
                    className="input input-bordered w-full mt-4"
                />
                <div className="modal-action">
                    <button onClick={handleSave} className="btn btn-primary">
                        Save
                    </button>
                    <button onClick={cancelEdit} className="btn btn-secondary">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditModal;
