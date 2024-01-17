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
        {itens.map((item, index) => (
          <li key={`${index}-${item}`} onClick={() => handleRemove(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListPage;
