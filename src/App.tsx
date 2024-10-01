import React from "react";
import ToDo from "./components/ToDo";

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-base-200 p-6 flex justify-center items-center">
            <ToDo />
        </div>
    );
};

export default App;
