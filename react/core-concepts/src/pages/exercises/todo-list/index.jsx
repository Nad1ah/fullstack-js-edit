import { useState } from "react";
function TodoListPage()

{
    const [inputValue, setInputValue] = useState("");
    const handleSubmit=(event) => 
    console.log(event);
const [itens, setInputItens] = useState("")
    return (
    <div>
        <h1>Todo List</h1>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={(event)=>setInputValue(event.target.value)} />
                <button >Adicionar</button>
            </form>
        </div>
        <div>
            <ul>
                {itens.map((item)=>(
                    <li key={item}>(item)</li>
                ))}
            </ul>
        </div>
    </div>
    );
}

export default TodoListPage