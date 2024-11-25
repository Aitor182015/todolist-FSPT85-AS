import React, {useState} from "react";

const Home = () => {

	const [inputValue, setInputValue] = useState("")
	const [toDolist, setToDoList] = useState([])


	return (
		<div className="container">
			<h1>To Do list</h1>
			<ul>
				<li><input type="text" onChange={(e)=>setInputValue(e.target.value)} onKeyDown={
					(a)=> {
						if (a.key === "Enter") {
							setToDoList(toDolist.concat(inputValue));
							setInputValue("");
						}
					}
				} value={inputValue} placeholder="¿Qué tienes que hacer?"></input></li>
				
				{toDolist.map((item, index) => (
					<li className="todo-item-list" key={index}>{item} <span className="fa-solid fa-xmark" onClick={()=>setToDoList(toDolist.filter((i,currentIndex) => index !=currentIndex))}></span></li>
				))}
				
			</ul>
			<div>{toDolist.length} Tareas pendientes</div>
		</div>
	);
};

export default Home;
