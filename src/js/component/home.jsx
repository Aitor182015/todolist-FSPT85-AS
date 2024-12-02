import React, { useState } from "react";

const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [toDolist, setToDoList] = useState([]);

    const createItem = (label) => {
        const newItem = { id: Date.now(), label }; // Crea un nuevo ítem con un id único
        setToDoList([...toDolist, newItem]); // Agrega el nuevo ítem a la lista
        setInputValue(""); // Limpia el input
    };

    return (
        <div className="container">
            <h1>To Do List</h1>
            <ul>
                <li>
                    <input
                        type="text"
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && inputValue.trim() !== "") {
                                createItem(inputValue);
                            }
                        }}
                        value={inputValue}
                        placeholder="¿Qué tienes que hacer?"
                    />
                </li>
                {toDolist.map((item) => (
                    <li className="todo-item-list" key={item.id}>
                        {item.label}{" "}
                        <span
                            className="fa-solid fa-xmark"
                            onClick={() =>
                                setToDoList(toDolist.filter((tarea) => tarea.id !== item.id))
                            }
                        ></span>
                    </li>
                ))}
            </ul>
            <div>{toDolist.length} Tareas pendientes</div>
        </div>
    );
};

export default Home;
