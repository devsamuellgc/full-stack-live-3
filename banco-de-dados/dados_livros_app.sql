INSERT INTO
  autores (nome)
VALUES
  ('Gabriel Garcia Márquez'),
  ('Jane Austen'),
  ('George Orwell'),
  ('J.R.R. Tolkien'),
  ('J.K. Rowling'),
  ('Haruki Murakami'),
  ('Leo Tolstoy'),
  ('Agatha Christie'),
  ('Fiódor Dostoiévski'),
  ('Ernest Hemingway'),
  ('Virginia Woolf'),
  ('Franz Kafka'),
  ('Charles Dickens'),
  ('Mark Twain'),
  ('Machado de Assis'),
  ('José Saramago'),
  ('Clarice Lispector'),
  ('Emily Brontë'),
  ('Mary Shelley'),
  ('Stephen King'),
  ('Edgar Allan Poe'),
  ('William Shakespeare'),
  ('Isabel Allende'),
  ('Victor Hugo'),
  ('Albert Camus'),
  ('Paulo Coelho'),
  ('Milan Kundera'),
  ('Philip K. Dick'),
  ('Margaret Atwood'),
  ('Alexandre Dumas');

INSERT INTO
  categorias (nome)
VALUES
  ('Ficção'),
  ('Não-ficção'),
  ('Fantasia'),
  ('Romance'),
  ('Terror'),
  ('Biografia'),
  ('Ficção científica'),
  ('Clássicos');

INSERT INTO
  livros (
    titulo,
    autor_id,
    editora,
    ano_publicacao,
    categoria_id
  )
VALUES
  (
    'Cem Anos de Solidão',
    1,
    'Editora Alfa',
    1967,
    1
  ),
  (
    'Orgulho e Preconceito',
    2,
    'Editora Beta',
    1813,
    4
  ),
  ('1984', 3, 'Editora Gamma', 1949, 7),
  (
    'O Senhor dos Anéis',
    4,
    'Editora Delta',
    1954,
    3
  ),
  (
    'Harry Potter e a Pedra Filosofal',
    5,
    'Editora Épsilon',
    1997,
    3
  ),
  ('Kafka à Beira-Mar', 6, 'Editora Zeta', 2002, 1),
  ('Guerra e Paz', 7, 'Editora Ômega', 1869, 8),
  (
    'Assassinato no Expresso do Oriente',
    8,
    'Editora Sigma',
    1934,
    5
  ),
  ('Crime e Castigo', 9, 'Editora Lambda', 1866, 1),
  ('O Velho e o Mar', 10, 'Editora Theta', 1952, 8),
  ('Mrs. Dalloway', 11, 'Editora Iota', 1925, 4),
  ('A Metamorfose', 12, 'Editora Kappa', 1915, 1),
  ('Grandes Esperanças', 13, 'Editora Tau', 1861, 8),
  (
    'As Aventuras de Tom Sawyer',
    14,
    'Editora Pi',
    1876,
    1
  ),
  ('Dom Casmurro', 15, 'Editora Rho', 1899, 8),
  (
    'Ensaio sobre a Cegueira',
    16,
    'Editora Sigma',
    1995,
    4
  ),
  (
    'A Hora da Estrela',
    17,
    'Editora Alpha',
    1977,
    1
  ),
  (
    'O Morro dos Ventos Uivantes',
    18,
    'Editora Beta',
    1847,
    4
  ),
  ('Frankenstein', 19, 'Editora Gamma', 1818, 5),
  ('It - A Coisa', 20, 'Editora Delta', 1986, 5),
  (
    'Histórias Extraordinárias',
    21,
    'Editora Épsilon',
    1845,
    5
  ),
  ('Hamlet', 22, 'Editora Zeta', 1603, 8),
  (
    'A Casa dos Espíritos',
    23,
    'Editora Ômega',
    1982,
    1
  ),
  ('Os Miseráveis', 24, 'Editora Sigma', 1862, 8),
  ('O Estrangeiro', 25, 'Editora Lambda', 1942, 8),
  ('O Alquimista', 26, 'Editora Theta', 1988, 1),
  (
    'A Insustentável Leveza do Ser',
    27,
    'Editora Iota',
    1984,
    4
  ),
  (
    'Androides Sonham com Ovelhas Elétricas?',
    28,
    'Editora Kappa',
    1968,
    7
  ),
  ('O Conto da Aia', 29, 'Editora Tau', 1985, 4),
  (
    'O Conde de Monte Cristo',
    30,
    'Editora Pi',
    1844,
    8
  );

INSERT INTO
  exemplares (livro_id, numero_exemplar, status)
VALUES
  (1, 1, 0),
  (1, 2, 0),
  (1, 3, 0),
  (2, 1, 0),
  (2, 2, 0),
  (2, 3, 0),
  (3, 1, 0),
  (3, 2, 0),
  (3, 3, 0),
  (4, 1, 0),
  (4, 2, 0),
  (4, 3, 0),
  (5, 1, 0),
  (5, 2, 0),
  (5, 3, 0),
  (6, 1, 0),
  (6, 2, 0),
  (6, 3, 0),
  (7, 1, 0),
  (7, 2, 0),
  (7, 3, 0),
  (8, 1, 0),
  (8, 2, 0),
  (8, 3, 0),
  (9, 1, 0),
  (9, 2, 0),
  (9, 3, 0),
  (10, 1, 0),
  (10, 2, 0),
  (10, 3, 0),
  (11, 1, 0),
  (11, 2, 0),
  (11, 3, 0),
  (12, 1, 0),
  (12, 2, 0),
  (12, 3, 0),
  (13, 1, 0),
  (13, 2, 0),
  (13, 3, 0),
  (14, 1, 0),
  (14, 2, 0),
  (14, 3, 0),
  (15, 1, 0),
  (15, 2, 0),
  (15, 3, 0),
  (16, 1, 0),
  (16, 2, 0),
  (16, 3, 0),
  (17, 1, 0),
  (17, 2, 0),
  (17, 3, 0),
  (18, 1, 0),
  (18, 2, 0),
  (18, 3, 0),
  (19, 1, 0),
  (19, 2, 0),
  (19, 3, 0),
  (20, 1, 0),
  (20, 2, 0),
  (20, 3, 0),
  (21, 1, 0),
  (21, 2, 0),
  (21, 3, 0),
  (22, 1, 0),
  (22, 2, 0),
  (22, 3, 0),
  (23, 1, 0),
  (23, 2, 0),
  (23, 3, 0),
  (24, 1, 0),
  (24, 2, 0),
  (24, 3, 0),
  (25, 1, 0),
  (25, 2, 0),
  (25, 3, 0),
  (26, 1, 0),
  (26, 2, 0),
  (26, 3, 0),
  (27, 1, 0),
  (27, 2, 0),
  (27, 3, 0),
  (28, 1, 0),
  (28, 2, 0),
  (28, 3, 0),
  (29, 1, 0),
  (29, 2, 0),
  (29, 3, 0),
  (30, 1, 0),
  (30, 2, 0),
  (30, 3, 0);

-- Select com paginação
select
  l.id,
  l.titulo,
  l.editora,
  l.ano_publicacao,
  a.nome,
  e.numero_exemplar,
  e.status
from
  app_biblioteca.livros l
  join app_biblioteca.autores a on l.autor_id = a.id
  join app_biblioteca.exemplares e on e.livro_id = l.id
where
  e.status = 0
order by
  l.titulo
limit
  10 offset 0;

-- Select com join, where e order by
select
  l.id,
  l.titulo,
  l.editora,
  l.ano_publicacao,
  a.nome,
  e.numero_exemplar,
  e.status
from
  app_biblioteca.livros l
  join app_biblioteca.autores a on l.autor_id = a.id
  join app_biblioteca.exemplares e on e.livro_id = l.id
where
  e.status = 0
order by
  l.titulo;