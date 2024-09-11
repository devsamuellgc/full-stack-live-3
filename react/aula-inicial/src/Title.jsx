export function Title() {
  const { firstName, lastName } = { firstName: "João", lastName: "Silva" };

  return (
    <h1>
      Olá, {user.firstName} {user.lastName}!
    </h1>
  );
}
