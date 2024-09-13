export function Title() {
  const user = { firstName: "João", lastName: "Silva" };

  return (
    <h1>
      Olá, {user.firstName} {user.lastName}!
    </h1>
  );
}
