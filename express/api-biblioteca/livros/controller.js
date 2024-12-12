import * as service from "./service.js";

const getAllBooks = async (req, res) => {
  const categories = await service.getAllBooks();

  return res.json({
    mensagem: "Livros listados com sucesso!",
    data: categories,
  });
};

const getAllBooksPaginated = async (req, res) => {
  const params = req.query;
  const userId = req.user.id;
  const books = await service.getAllBooksPaginated(params, userId);

  return res.json({
    mensagem: "Livros listados com sucesso!",
    data: books,
  });
};

const getBookById = async (req, res) => {
  const book = await service.getBookById(req.params.id);

  if (!book) {
    return res.status(404).json({ mensagem: "Livro não encontrado!" });
  }

  return res
    .status(200)
    .json({ mensagem: "Livro encontrado com sucesso!", data: book });
};

const createBook = async (req, res) => {
  const body = req.body;
  const user = req.user;

  if (!body.titulo) {
    return res.status(400).json({ error: "Nome obrigatório!" });
  }

  if (!body.editora) {
    return res.status(400).json({ error: "Editora obrigatório!" });
  }

  if (!body.ano_publicacao) {
    return res.status(400).json({ error: "Ano de publicação obrigatório!" });
  }

  if (!body.autor_id) {
    return res.status(400).json({ error: "Id da autor obrigatório!" });
  }

  if (!body.categoria_id) {
    return res.status(400).json({ error: "Id da categoria obrigatório!" });
  }

  const createdBook = await service.createBook({
    ...body,
    biblioteca_id: user.id,
  });

  return res.status(201).json({
    message: "Livro criado com sucesso",
    data: createdBook,
  });
};

const deleteBook = async (req, res) => {
  const id = req.params.id;

  const book = await service.getBookById(id);

  if (!book) {
    return res.status(404).json({ mensagem: "Livro não encontrado!" });
  }

  const removedBook = await service.deleteBook(id);

  return res.status(200).json({
    mensagem: "Livro deletado com sucesso!",
    data: removedBook,
  });
};

const editBook = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const updatedBook = await service.editBook(id, body);

  return res.status(200).json({
    message: "Livro atualizado com sucesso!",
    data: updatedBook,
  });
};

export {
  editBook,
  getBookById,
  getAllBooks,
  createBook,
  deleteBook,
  getAllBooksPaginated,
};
