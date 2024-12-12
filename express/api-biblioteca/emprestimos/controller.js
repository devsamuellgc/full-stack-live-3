import * as service from "./service.js";

const getAllBorrowedBooks = async (req, res) => {
  const borrowedBooks = await service.getAllBorrowedBooks();

  return res.json({
    mensagem: "Empréstimos listados com sucesso!",
    data: borrowedBooks,
  });
};

const getBorrowedBookById = async (req, res) => {
  const borrowedBook = await service.getBorrowedBookById(req.params.id);

  if (!borrowedBook) {
    return res.status(404).json({ mensagem: "Empréstimo não encontrado!" });
  }

  return res.status(200).json({
    mensagem: "Empréstimo encontrado com sucesso!",
    data: borrowedBook,
  });
};

const createBorrowedBook = async (req, res) => {
  const body = req.body;

  if (!body.data_emprestimo) {
    return res.status(400).json({ error: "Data de empréstimo obrigatório!" });
  }

  if (!body.data_devolucao) {
    return res.status(400).json({ error: "Data de devolução obrigatório!" });
  }

  if (!body.dias_emprestimo) {
    return res.status(400).json({ error: "Dias de empréstimos obrigatório!" });
  }

  if (!body.exemplar_id) {
    return res.status(400).json({ error: "Id do exemplar obrigatório!" });
  }

  if (!body.usuario_id) {
    return res.status(400).json({ error: "Id do usuário obrigatório!" });
  }

  if (!body.biblioteca_id) {
    return res.status(400).json({ error: "Id da biblioteca obrigatório!" });
  }

  const createdBorrowedBook = await service.createBorrowedBook(body);

  return res.status(201).json({
    message: "Empréstimo criado com sucesso",
    data: createdBorrowedBook,
  });
};

const deleteBorrowedBook = async (req, res) => {
  const id = req.params.id;

  const borrowedBook = await service.getBorrowedBookById(id);

  if (!borrowedBook) {
    return res.status(404).json({ mensagem: "Empréstimo não encontrado!" });
  }

  const removedBorrowedBook = await service.deleteBorrowedBook(id);

  return res.status(200).json({
    mensagem: "Empréstimo deletado com sucesso!",
    data: removedBorrowedBook,
  });
};

const editBorrowedBook = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const updatedBorrowedBook = await service.editBorrowedBook(id, body);

  return res.status(200).json({
    message: "Empréstimo atualizado com sucesso!",
    data: updatedBorrowedBook,
  });
};

export {
  editBorrowedBook,
  getBorrowedBookById,
  getAllBorrowedBooks,
  createBorrowedBook,
  deleteBorrowedBook,
};
