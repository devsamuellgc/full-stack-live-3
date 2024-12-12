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

export function BooksTable() {
  const { api, getToken } = useApi();
  const [books, setBooks] = useState([]);
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

  const fetchBooks = async (page, perPage) => {
    setIsLoading(true);
    const token = getToken();
    try {
      const response = await api.get(
        `/livros?page=${page}&perPage=${perPage}`,
        {
          headers: {
            Authorization: `Barrer ${token}`,
          },
        }
      );
      const data = response.data.data.data;
      const meta = response.data.data.meta;
      setBooks(data);
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
    fetchBooks(pagination.page, pagination.perPage);
  }, [pagination.page, pagination.perPage]);

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Título</TableHead>
            <TableHead>Editora</TableHead>
            <TableHead>Ano de publicação</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Autor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.titulo}</TableCell>
              <TableCell>{user.editora}</TableCell>
              <TableCell>{user.ano_publicacao}</TableCell>
              <TableCell>{user.categoria.nome}</TableCell>
              <TableCell>{user.autor.nome}</TableCell>
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
