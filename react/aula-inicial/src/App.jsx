import { useState } from "react";

export default function App() {
  const [name, setName] = useState("Nome 1");
  const [amount, setAmount] = useState(0);
  const [count, setCount] = useState(0);

  function changeName(newName) {
    console.log(name);
    setName(newName);
    console.log(name);
  }

  function handleChange(event) {
    setAmount(event.target.value);
  }

  function sumCount() {
    setCount((prev) => prev + 1);
  }

  function subCount() {
    setCount((prev) => prev - 1);
  }

  function sumTotal() {
    setCount((prev) => prev + Number(amount));
  }

  return (
    <>
      <div>
        <h1>{name}</h1>
        <button onClick={() => changeName("Nome 2")}>Alterar nome</button>
        <button onClick={() => changeName("Nome 1")}>Valor anterior</button>
      </div>
      <div style={{ marginTop: 10, display: "flex", gap: 2 }}>
        <input
          onChange={(event) => handleChange(event)}
          value={amount}
          type="text"
        />
        <button onClick={sumTotal}>Somar</button>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        <button onClick={sumCount}>+</button>
        <p>{count}</p>
        <button onClick={subCount}>-</button>
      </div>
    </>
  );
}
