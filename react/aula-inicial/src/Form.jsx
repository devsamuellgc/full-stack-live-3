import { useEffect, useState } from "react";

export function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // setEmail(e.target.children["email"].value);
    setPassword(e.target.children["password"].value);
  }

  useEffect(() => {
    console.log("email");
  }, [email]);

  useEffect(() => {
    console.log("senha");
  }, [password]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 3 }}
      >
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
        />
        <input name="password" type="password" />
        <button>Enviar</button>
      </form>
      <p>E-mail: {email}</p>
      <p>Senha: {password}</p>
    </>
  );
}
