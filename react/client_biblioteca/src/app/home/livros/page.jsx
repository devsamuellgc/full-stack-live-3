import { BooksTable } from "./components/Table";

export default function Livros() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Livros</h1>
      <BooksTable />
    </div>
  );
}
