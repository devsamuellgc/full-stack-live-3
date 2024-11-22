import { NewClientModal } from "./components/clients/Form";
import CustomerTable from "./components/clients/Table";
import { Button } from "./components/ui/button";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col px-6 py-4 gap-7">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-bold text-xl">Clientes</h1>
        <NewClientModal
          trigger={<Button variant="outline">Novo Cliente</Button>}
        />
      </div>
      <CustomerTable />
    </div>
  );
}
