import { useState } from "react";

function TodoListPage() {
  const [inputValue, setInputValue] = useState("");

  const [itens, setInputItens] = useState([]);

  const handleRemove = (index) => {
    const newArr = [...itens];
    const arr = newArr.filter((item, key) => index !== key);
    setInputItens(arr);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setInputItens([...itens, inputValue]);
          }}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button type="submit">Adicionar</button>
        </form>
        <ul>
          {itens.map((item, key) => (
            <li key={`${key}-${item}`}>{item}</li>
          ))}
        </ul>
      </div>
      <div></div>
    </div>
  );
}

export default TodoListPage;
