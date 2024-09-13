// import { useEffect, useState } from "react";
// import { Form } from "./Form";
// import { DynamicTitle } from "./DynamicTitle";
// import { Title } from "./Title";

import { CarCard } from "./components/CarCard";

export default function App() {
  // const [name, setName] = useState("");
  // const [amount, setAmount] = useState(0);
  // const [count, setCount] = useState(0);
  // const [loading, setLoading] = useState(false);

  // function changeName(newName) {
  //   console.log(name);
  //   setName(newName);
  //   console.log(name);
  // }

  // function handleChange(event) {
  //   setAmount(event.target.value);
  // }

  // function sumCount() {
  //   setCount((prev) => prev + 1);
  // }

  // function subCount() {
  //   setCount((prev) => prev - 1);
  // }

  // function sumTotal() {
  //   setCount((prev) => prev + Number(amount));
  // }

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setName("Nome 1");
  //     setLoading(false);
  //   }, 3500);
  // }, []);

  // useEffect(() => {
  //   alert(count);
  // }, [count]);

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

  // const mostrarAlerta = () => {
  //   alert("Botão clicado!");
  // };

  // const guestsName = [
  //   { firstName: "John", lastName: "Doe" },
  //   { firstName: "Jane", lastName: "Smith" },
  //   { firstName: "Michael", lastName: "Johnson" },
  //   { firstName: "Emily", lastName: "Davis" },
  //   { firstName: "Daniel", lastName: "Martinez" },
  //   { firstName: "Sophia", lastName: "Garcia" },
  //   { firstName: "William", lastName: "Wilson" },
  //   { firstName: "Olivia", lastName: "Taylor" },
  //   { firstName: "James", lastName: "Brown" },
  //   { firstName: "Isabella", lastName: "Anderson" },
  // ];

  const cars = [
    {
      city: "Fortaleza",
      date: "24/08/2024",
      hour: "13:45",
      img: "https://img.olx.com.br/images/44/447450791613087.webp",
      price: "89.900",
      state: "CE",
      title: "PUNTO TJET 1.4 TURBO FORJADO - ANO 2016",
    },
    {
      city: "Caucaia",
      date: "24/08/2024",
      hour: "13:45",
      img: "https://img.olx.com.br/images/44/447450791613087.webp",
      price: "89.900",
      state: "CE",
      title: "PUNTO TJET 1.4 TURBO FORJADO - ANO 2016",
    },
    {
      city: "Eusébio",
      date: "24/08/2024",
      hour: "13:45",
      img: "https://img.olx.com.br/images/44/447450791613087.webp",
      price: "42.900",
      state: "CE",
      title: "Punto Itália 2016 1.4 extra",
    },
    {
      city: "Maranguape",
      date: "10/05/2023",
      hour: "19:20",
      img: "https://img.olx.com.br/images/44/447450791613087.webp",
      price: "42.000",
      state: "CE",
      title: "FIAT PUNT 2012 2013",
    },
  ];

  // if (loading) return <h2>Carregando...</h2>;

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

      {/* <div>
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
      </div> */}
      {/* <ol>
        {guestsName &&
          guestsName.map((guest, index) => (
            <DynamicTitle
              key={`${guest.firstName} - ${guest.lastName} - ${index}`}
              firstName={guest.firstName}
              lastName={guest.lastName}
            />
          ))}
      </ol> */}
      <div className="h-screen w-full flex items-center justify-center gap-5">
        {cars.map((car) => (
          <CarCard
            key={`${car.date} - ${car.hour}`}
            city={car.city}
            date={car.date}
            hour={car.hour}
            img={car.img}
            price={car.price}
            state={car.state}
            title={car.title}
          />
        ))}
      </div>
    </>
  );
}
