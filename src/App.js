import { useEffect, useState } from 'react';
import './App.css';

function App() {
let[lista , setLista] = useState([]);
let[novoItem, setNovoItem] = useState("");

useEffect(() => {
  setLista(["Tarefa1", "Tarefa2", "Tarefa3", "Tarefa4"]);
}, []);

  return (
    <div className="container">
      <input placeholder="Tarefa" value={novoItem} onChange={value => setNovoItem(value.target.value)} type="text"/>
      <button onClick={() => adicionarNovoItem()}>Adicionar</button>
      <ul className="todo-list">
        {lista.map((item, index) => (
          <li key={index} className="todo-item">
            {item}
            <button onClick={() => deletarItem(index)}> 
              Deletar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  function adicionarNovoItem() {

    if (novoItem.length <= 0) {
      alert("Por favor, digite algo no campo 'Tarefa'");
    return;
    }

    let itemIndex = lista.indexOf(novoItem);
    if (itemIndex >= 0) {
      alert("Você já digitou esta tarefa.");
      return;
    }

    setLista([...lista, novoItem])
    setNovoItem("");
  }

  function deletarItem(index) {
    let tmpArray = [...lista];
    tmpArray.splice(index, 1);

    setLista(tmpArray);
  }


}

export default App;
