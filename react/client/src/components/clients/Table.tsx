import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Edit, Trash2 } from "lucide-react";

import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import axios from "axios";

interface Customer {
  id: string;
  name: string;
  email: string;
  document: string;
  phone: string;
  state: string;
  city: string;
  country: string;
  street: string;
  neighborhood: string;
  zip_code: string;
  number: string;
  complement?: string | null;
}

interface Params {
  perPage: number;
  page: number;
}

export default function CustomerTable() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [pagination, setPagination] = useState({
    page: 1,
    perPage: 10,
    totalPages: 0,
    total: 0,
    totalItemsPage: 0,
  });

  const fetchCustomers = async (params: Params) => {
    const { page, perPage } = params;
    const url = `http://localhost:3000/clientes-paginado?page=${page}&perPage=${perPage}`;
    const response = await axios.get(url);
    const data = response.data.data.data;
    const meta = response.data.data;
    setCustomers(data);
    setPagination({
      page: meta.page,
      perPage: meta.perPage,
      total: meta.total,
      totalItemsPage: meta.totalItemsPage,
      totalPages: meta.totalPages,
    });
  };

  const handlePage = (page: number) => {
    setPagination((prev) => {
      return { ...prev, page };
    });
  };

  const deleteCustomer = async (id: string) => {
    await axios.delete(`http://localhost:3000/cliente/${id}`);
    await fetchCustomers({
      page: pagination.page,
      perPage: pagination.perPage,
    });
  };

  useEffect(() => {
    fetchCustomers({ page: pagination.page, perPage: pagination.perPage });
  }, [pagination.page, pagination.perPage]);

  return (
    <div>
      <div className="rounded-md border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Nome</TableHead>
              <TableHead>Telefone</TableHead>
              <TableHead>E-mail</TableHead>
              <TableHead>Documento</TableHead>
              <TableHead>Cidade</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>País</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers &&
              customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.document}</TableCell>
                  <TableCell>{customer.city}</TableCell>
                  <TableCell>{customer.state}</TableCell>
                  <TableCell>{customer.country}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        className="bg-transparent w-fit h-fit"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        type="button"
                        className="bg-transparent w-fit h-fit"
                        onClick={() => deleteCustomer(customer.id)}
                      >
                        <Trash2 size={16} color="#dc2626" />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <Button
          variant="outline"
          disabled={pagination.page === 1}
          onClick={() => {
            handlePage(pagination.page - 1);
          }}
          className="flex items-center"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          <span>Anterior</span>
        </Button>
        <span className="text-sm text-gray-600">
          Página {pagination.page} de {pagination.totalPages}
        </span>
        <Button
          variant="outline"
          disabled={pagination.page === pagination.totalPages}
          onClick={() => {
            handlePage(pagination.page + 1);
          }}
          className="flex items-center"
        >
          <span>Próximo</span>
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}
