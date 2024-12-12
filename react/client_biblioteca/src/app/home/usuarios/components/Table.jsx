"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useApi } from "@/hooks/useApi";

export function UsersTable() {
  const { api, getToken } = useApi();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    perPage: 10,
    totalPages: 0,
    total: 0,
    totalItemsPage: 0,
  });

  const handlePage = (page) => {
    setPagination((prev) => {
      return { ...prev, page };
    });
  };

  const fetchUsers = async (page, perPage) => {
    setIsLoading(true);
    const token = getToken();
    try {
      const response = await api.get(
        `/usuarios?page=${page}&perPage=${perPage}`,
        {
          headers: {
            Authorization: `Barrer ${token}`,
          },
        }
      );
      const data = response.data.data.data;
      const meta = response.data.data.meta;
      setUsers(data);
      setPagination({
        page: meta.page,
        perPage: meta.perPage,
        total: meta.total,
        totalItemsPage: meta.totalItemsPage,
        totalPages: meta.totalPages,
      });
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(pagination.page, pagination.perPage);
  }, [pagination.page, pagination.perPage]);

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Documento</TableHead>
            <TableHead>Telefone</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.nome}</TableCell>
              <TableCell>{user.documento}</TableCell>
              <TableCell>{user.telefone}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePage(pagination.page - 1)}
              disabled={pagination.page === 1}
            />
          </PaginationItem>
          {[...Array(pagination.totalPages)].map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                onClick={() => handlePage(i + 1)}
                isActive={pagination.page === i + 1}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() => handlePage(pagination.page + 1)}
              disabled={pagination.page === pagination.totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
