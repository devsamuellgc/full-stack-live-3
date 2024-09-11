import { useEffect, useState } from "react";
import { Form } from "./Form";

export default function App() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setName("Nome 1");
      setLoading(false);
    }, 3500);
  }, []);

  useEffect(() => {
    alert(count);
  }, [count]);

  // const guests = [
  //   "Convidado 1", // 0
  //   "Convidado 2", // 1
  //   "Convidado 3", // 2
  //   "Convidado 4", // 3
  //   "Convidado 5", // 4
  // ];

  // const guestsObj = [
  //   { name: "Convidado 1", age: 29, city: "Fortaleza" }, // 0
  //   { name: "Convidado 2", age: 29, city: "Fortaleza" }, // 1
  //   { name: "Convidado 3", age: 29, city: "Fortaleza" }, // 2
  //   { name: "Convidado 4", age: 29, city: "Eusébio" }, // 3
  //   { name: "Convidado 5", age: 29, city: "Caucaia" }, // 4
  // ];

  if (loading) return <h2>Carregando...</h2>;

  return (
    <>
      {/* <Form /> */}
      {/* {guests.map((guest, index) => (
        <p key={`${guest} - ${index} - 1`}>{guest}</p>
      ))}

      {guestsObj.map((guest, index) => (
        <p key={`${guest.name} - ${index} - 2`}>
          {guest.name} - {guest.city}
        </p>
      ))} */}

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
