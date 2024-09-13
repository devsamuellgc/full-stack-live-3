export function DynamicTitle({ firstName, lastName }) {
  return (
    <li className="text-red-600 text-2xl">
      {firstName} {lastName}
    </li>
  );
}
