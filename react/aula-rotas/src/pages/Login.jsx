import { useState } from "react";
import { useNavigate } from "react-router-dom";

function InputStructure({
  type = "text",
  name,
  placeholder,
  label,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm" htmlFor={name}>
        {label}
      </label>
      <input
        className="bg-transparent border-2 border-black rounded px-2 py-1 outline-none"
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        id={name}
      />
    </div>
  );
}

export default function Login() {
  const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  function handleSubmit() {
    navigate("/");
  }

  return (
    <div className="h-screen w-full flex items-center justify-center bg-white">
      <form className="w-56 h-64 bg-gray-100 p-4 rounded-md shadow flex flex-col gap-2">
        <InputStructure
          label="Nome"
          onChange={(e) =>
            setUser((prev) => ({ ...prev, name: e.target.value }))
          }
          name="name"
          value={user.name}
          placeholder="Digite seu nome"
        />
        <InputStructure
          label="E-mail"
          onChange={(e) =>
            setUser((prev) => ({ ...prev, email: e.target.value }))
          }
          name="email"
          value={user.email}
          placeholder="Seu e-mail aqui"
          type="email"
        />
        <button
          type="button"
          className="
            w-full 
            py-1 
            flex 
            items-center 
            justify-center bg-sky-600 shadow-sm text-white rounded self-end"
          onClick={() => handleSubmit()}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
